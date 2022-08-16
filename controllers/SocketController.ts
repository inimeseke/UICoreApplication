import * as mongoose from "mongoose"
import { CBDocument } from "TypeUtil"
import { LoginKeyModel, UserModel, UserPasswordModel } from "../models"
import Utils from "../Utils"
import {
    CBSocketHandshakeInitMessage,
    CBSocketHandshakeResponseMessage,
    CBSocketMessage,
    CBSocketMessageSendResponseFunction,
    CBUserProfile,
    SocketClientInterface
} from "../webclient/scripts/CBCore/CBDataInterfaces"
import SocketSession from "./SocketSession"
import { UserController } from "./UserController"


enum CBAuthenticationSource {
    google = 10,
    facebook = 11,
    emailAccessLink = 200,
    password = 220
}


type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;
type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

type SocketServerFunction<MessageType, ResultType> = (
    messageData: MessageType,
    socketSession: SocketSession,
    respondWithMessage: CBSocketMessageSendResponseFunction<ResultType>
) => void;
type SocketServerFunctionFromClientFunction<ClientFunctionType extends (...args: any) => any> = SocketServerFunction<Parameters<ClientFunctionType>[0], PropType<ThenArg<ReturnType<ClientFunctionType>>, "result"> | PromiseLike<PropType<ThenArg<ReturnType<ClientFunctionType>>, "result">> | mongoose.Promise<PropType<ThenArg<ReturnType<ClientFunctionType>>, "result">>>;
type ServerFunctionsFromClientFunctions<T> = {
    [P in keyof T]: SocketServerFunctionFromClientFunction<T[P] extends (...args: any) => any ? T[P] : never>;
}
type SocketServer = ServerFunctionsFromClientFunctions<SocketClientInterface>;


type SocketServerClientFunction<MessageType, ResultType> = (
    message: MessageType,
    resultInsteadOfError?: ResultType
) => ResultType;

type SocketServerClientFunctionFromClientFunction<ClientFunctionType extends (...args: any) => any> = SocketServerClientFunction<Parameters<ClientFunctionType>[0], PropType<ThenArg<ReturnType<ClientFunctionType>>, "result"> | PromiseLike<PropType<ThenArg<ReturnType<ClientFunctionType>>, "result">> | mongoose.Promise<PropType<ThenArg<ReturnType<ClientFunctionType>>, "result">>>;

type ServerClientFunctionsFromClientFunctions<T> = {
    [P in keyof T]: SocketServerClientFunctionFromClientFunction<T[P] extends (...args: any) => any ? T[P] : never>;
}
export type SocketServerClient = ServerClientFunctionsFromClientFunctions<SocketClientInterface>;


const HANDSHAKE_RESPONSE_MESSAGE = "CBSocketHandshakeResponseMessage"
const HANDSHAKE_INIT_MESSAGE = "CBSocketHandshakeInitMessage"


export class SocketController {
    
    private static _instance: SocketController
    
    private _connectionEventTargets: ((socketSession: SocketSession) => void)[] = []
    messageTargets: SocketServer = {} as any
    private _sessions: { [x: string]: SocketSession[] } & Object = {}
    
    constructor(private _socketIO: SocketIO.Server) {
        
        _socketIO.on("connect", (socket: SocketIO.Socket) => {
            
            //console.log('Socket.io client connected. clientID = ' + socket.client.id);
            let currentSession: SocketSession = null
            
            socket.on(
                HANDSHAKE_INIT_MESSAGE,
                async (message: CBSocketMessage<CBSocketHandshakeInitMessage>) => {
                    
                    try {
                        
                        if (!message || !message.messageData || !message.identifier) {
                            
                            console.log("Invalid socket handshake message. " + JSON.stringify(message))
                            this._socketIO.to(socket.id).emit(
                                HANDSHAKE_RESPONSE_MESSAGE,
                                {
                                    identifier: Utils.makeID(),
                                    inResponseToIdentifier: message.identifier,
                                    messageData: {
                                        accepted: false,
                                        message: "Invalid handshake message."
                                    }
                                }
                            )
                            
                            return
                            
                        }
                        
                        
                        let response: CBSocketMessage<CBSocketHandshakeResponseMessage>
                        
                        // Check if userID and accessToken match
                        const user = await UserController.sharedInstance.fetchUserProfileWithUserAccessToken(message.messageData.accessToken)
                        let userProfile: CBUserProfile
                        
                        if (user) {
                            
                            console.log(`Socket handshake found a user with email ${user.contactInformation.email} using an access token.`)
                            
                            // noinspection ES6MissingAwait
                            this.socketSessionsForUserWithID("" + user._id).forEach(async session => {
                                
                                if (session.accessToken != message.messageData.accessToken) {
                                    
                                    const loginKeyObject = await LoginKeyModel.findOne({
                                        accessToken: session.accessToken
                                    }).sort("-createdAt")
                                    
                                    loginKeyObject.isValid = false
                                    await loginKeyObject.save()
                                    
                                    console.log(`Reconnecting user session with email ${user.contactInformation.email}.`)
                                    this.reconnectSession(
                                        session,
                                        "You have been logged out because you logged in somewhere else."
                                    )
                                    
                                }
                                
                            })
                            
                            // Use UserModel to select the user profile again with less data
                            userProfile = (await UserModel.findById(user._id).select(
                                "merchantProfile profileImageUrl displayName _id subscriptions contactInformation"
                            ).populate("subscriptions").exec()).toJSON()
                            
                            const userPassword = await UserPasswordModel.findOne({
                                userID: userProfile._id,
                                isValid: true
                            }).sort("-createdAt")
                            
                            userProfile.hasAValidPassword = Utils.IS(userPassword)
                            userProfile.isLoggedInUsingExternalService = user.isLoggedInUsingExternalService
                            
                        }
                        
                        response = {
                            identifier: Utils.makeID(),
                            inResponseToIdentifier: message.identifier,
                            messageData: {
                                accepted: user && true,
                                userProfile: userProfile
                            }
                        }
                        
                        if (response.messageData.accepted) {
                            
                            console.log(`Starting a new socket session for user with email ${user.contactInformation.email}.`)
                            currentSession = new SocketSession(
                                socket,
                                message.messageData.accessToken,
                                user
                            )
                            
                            this._addSocketSession(currentSession)
                            this._connectionEventTargets.forEach(target => target(currentSession))
                            
                        }
                        else {
                            
                            // Guest user
                            console.log("Starting new socket session for a guest user.")
                            currentSession = new SocketSession(
                                socket,
                                null,
                                Utils.nil
                            )
                            
                            this._addSocketSession(currentSession)
                            this._connectionEventTargets.forEach(target => target(currentSession))
                            
                            // This removes the userProfile value from the response
                            response.messageData = { accepted: true }
                            
                        }
                        
                        this._socketIO.to(socket.id).emit(HANDSHAKE_RESPONSE_MESSAGE, response)
                        
                    } catch (exception) {
                        
                        console.log("EXCEPTION DURING SOCKET HANDSHAKE.")
                        console.log(exception)
                        
                        this._socketIO.to(socket.id).emit(
                            HANDSHAKE_RESPONSE_MESSAGE,
                            {
                                identifier: Utils.makeID(),
                                inResponseToIdentifier: message.identifier,
                                messageData: {
                                    accepted: false,
                                    message: "Handshake failed with an exception."
                                }
                            }
                        )
                        
                    }
                }
            )
            
            
            socket.on("disconnect", () => {
                
                console.log("Socket.io client disconnected")
                
                if (currentSession) {
                    
                    currentSession.socketDidDisconnect()
                    
                    // Remove the current session from _sessions
                    this._removeSocketSession(currentSession)
                    currentSession = null
                    
                }
                
            })
            
        })
        
        
    }
    
    
    reconnectSession(session: SocketSession, message?: string) {
        session.triggerReconnection(message)
        this._removeSocketSession(session)
    }
    
    
    private _addSocketSession(session: SocketSession) {
        const userIDKey = "" + session.userProfile._id
        if (!this._sessions[userIDKey]) {
            this._sessions[userIDKey] = []
        }
        this._sessions[userIDKey].push(session)
        SocketController.setUserOnlineDate(userIDKey)
        console.log("Socket controller added session for user with email " +
            session.userProfile.contactInformation.email + ". Total number of sessions for user is " +
            this._sessions[userIDKey].length + ".")
        console.log("Total number of socket sessions is " + this.activeSessions.length + ".")
    }
    
    
    private _removeSocketSession(session: SocketSession) {
        
        const userIDKey = "" + session.userProfile._id
        const userSocketSessions = this.socketSessionsForUserWithID(userIDKey)
        const index = userSocketSessions.indexOf(session)
        userSocketSessions.splice(index, 1)
        
        if (userSocketSessions.length == 0) {
            delete this._sessions[userIDKey]
            SocketController.setUserOnlineDate(userIDKey)
        }
        
        console.log("Socket controller removed session for user with email " +
            session.userProfile.contactInformation.email + ". " + userSocketSessions.length +
            " sessions remaining for user.")
        console.log("Total number of socket sessions is " + this.activeSessions.length + ".")
        
    }
    
    
    private static async setUserOnlineDate(userIDKey: string) {
        
        let userProfile: CBDocument<CBUserProfile>
        try {
            userProfile = await UserModel.findById(userIDKey)
        } catch (exception) {
            //console.log(exception);
            return
        }
        
        if (userProfile) {
            userProfile.onlineDate = new Date()
            userProfile.numberOfNotificationEmailsSent = 0
            userProfile.save()
        }
        
    }
    
    
    get activeSessions() {
        const result: SocketSession[] = []
        this._sessions.forEachValue(
            userSessions => userSessions.forEach(
                userSession => result.push(userSession)
            )
        )
        return result
    }
    
    
    sendMessageForKeyToUserWithID<MessageType = any>(key: string, message: MessageType, userID: string) {
        this.socketSessionsForUserWithID(userID).forEach(async (session, index, array) => {
            session.sendMessageForKey<MessageType>(key, message)
        })
    }
    
    
    socketSessionsForUserWithID(userID: string) {
        return this._sessions[userID] || []
    }
    
    
    async socketSessionForInternalUseWithUserID(userID: string) {
        let result = this.socketSessionsForUserWithID(userID).firstElement
        if (!result) {
            const userProfile = await UserController.sharedInstance.fetchInternalUserProfileWithID(userID)
            result = new SocketSession(Utils.nil, null, userProfile)
            this._connectionEventTargets.forEach(target => target(result))
        }
        return result
    }
    
    
    addTargetForConnectionEvents(targetFunction: (socketSession: SocketSession) => void) {
        this._connectionEventTargets.push(targetFunction)
    }
    
    
    public static get sharedInstance() {
        return this._instance
    }
    
    public static Instance(socketIO: SocketIO.Server) {
        return this._instance || (this._instance = new this(socketIO))
    }
    
    
}









