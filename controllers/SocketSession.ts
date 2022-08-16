import * as SocketIo from "socket.io"
import Utils from "../Utils"
import { CBDocument } from "TypeUtil"
import {
    CBSocketMessage, CBSocketMessageCompletionFunction,
    CBSocketMessageHandlerFunction, CBSocketMessageSendResponseFunction, CBSocketMultipleMessage,
    CBSocketMultipleMessageObject, CBUserProfile
} from "../webclient/scripts/CBCore/CBDataInterfaces"
import { SocketController, SocketServerClient } from "./SocketController"
import objectHash = require("object-hash")


export default class SocketSession {
    
    private readonly _socket: SocketIo.Socket
    private readonly _userProfile: CBDocument<CBUserProfile>
    
    private completionFunctions: {
        [x: string]: CBSocketMessageCompletionFunction;
    } = {}
    
    private handlers: {
        [x: string]: CBSocketMessageHandlerFunction[];
    } = {}
    
    private responseGroups: {
        [x: string]: {
            numberOfKeys: number;
            inResponseToMessage: CBSocketMessage;
            multipleMessageObjects: CBSocketMultipleMessageObject[];
            responseKey: string;
        }
    } = {}
    
    private _isHandlingMultipleMessages = false
    private _multipleMessageResponses: CBSocketMultipleMessageObject[] = []
    
    private responseMessageKey = "CBSocketResponseMessage"
    private multipleMessageKey = "CBSocketMultipleMessage"
    _accessToken: string
    
    socketClient: SocketServerClient
    
    
    constructor(
        socket: SocketIo.Socket,
        accessToken: string,
        userProfile?: CBDocument<CBUserProfile>
    ) {
        
        this._socket = socket
        this._accessToken = accessToken
        this._userProfile = userProfile
        
        const messageTargets = SocketController.sharedInstance.messageTargets as Object
        
        messageTargets.forEachValue((value, key) =>
            this._socket.on(
                key,
                (message: CBSocketMessage<any>) => {
                    this.didReceiveMessageForKey(key, message)
                }
            )
        )
        
        this._socket.on(
            this.responseMessageKey,
            (message: CBSocketMessage) => {
                this.didReceiveMessageForKey(this.responseMessageKey, message)
            }
        )
        
        this._socket.on(
            this.multipleMessageKey,
            (message: CBSocketMultipleMessage) => {
                
                this._isHandlingMultipleMessages = true
                const responseGroup = {
                    numberOfKeys: message.messageData.length,
                    inResponseToMessage: message,
                    multipleMessageObjects: [],
                    responseKey: this.multipleMessageKey
                }
                
                message.messageData.forEach(messageObject => {
                    if (message.shouldGroupResponses) {
                        this.responseGroups[messageObject.message.identifier] = responseGroup
                    }
                    this.didReceiveMessageForKey(messageObject.key, messageObject.message)
                })
                
                if (this._multipleMessageResponses.length) {
                    this._sendMessageForKey(this.multipleMessageKey, this._multipleMessageResponses, message)
                    this._multipleMessageResponses = []
                }
                
                this._isHandlingMultipleMessages = false
                
            }
        )
        
        const session = this
        this.socketClient = new Proxy({ "name": "SocketClient" }, {
            
            get(target, key) {
                
                const result = (messageData, resultInsteadOfError) => session.resultForMessageForKey(
                    key as string,
                    messageData,
                    resultInsteadOfError
                )
                
                return result
                
            }
            
        }) as any
        
        
    }
    
    
    get isOpen() {
        return this.socket.connected
    }
    
    get socket() {
        return this._socket
    }
    
    get accessToken() {
        return this._accessToken
    }
    
    get userProfile() {
        return this._userProfile
    }
    
    
    triggerReconnection(message?: string) {
        this.socket.emit("CBPerformReconnect", message)
        this.socket.disconnect(true)
        this.socketDidDisconnect()
    }
    
    
    sendMessageForKey<MessageType = any>(
        key: string,
        message: MessageType,
        completion?: CBSocketMessageCompletionFunction
    ) {
        
        this._sendMessageForKey(
            key,
            message,
            undefined,
            false,
            false,
            false,
            undefined,
            completion
        )
        
    }
    
    
    async _sendMessageForKey(
        key: string,
        message: any,
        inResponseToMessage: CBSocketMessage<any> = {} as any,
        keepMessageConnectionOpen = false,
        shouldStoreResponse = false,
        shouldUseStoredResponse = false,
        responseValidityDuration?: number,
        completion?: CBSocketMessageCompletionFunction
    ): Promise<string> {
        
        if (message instanceof Promise) {
            try {
                message = await message
            } catch (exception) {
                message = exception
            }
        }
        
        if (this.isOpen) {
            
            const identifier = Utils.makeID()
            if (completion) {
                this.completionFunctions[identifier] = completion
            }
            
            let messageDataHash
            try {
                messageDataHash = objectHash(JSON.parse(JSON.stringify(message)))
            } catch (exception) {
                const asd = 1
            }
            
            let messageObject: CBSocketMessage<any> = {
                messageData: message,
                identifier: identifier,
                inResponseToIdentifier: inResponseToMessage.identifier,
                keepWaitingForResponses: keepMessageConnectionOpen,
                
                canBeStoredAsResponse: shouldStoreResponse,
                useStoredResponse: shouldUseStoredResponse,
                
                responseValidityDuration: responseValidityDuration,
                
                messageDataHash: messageDataHash
            }
            
            if (inResponseToMessage.storedResponseHash == messageDataHash && messageDataHash) {
                
                messageObject = {
                    messageData: "",
                    identifier: identifier,
                    inResponseToIdentifier: inResponseToMessage.identifier,
                    keepWaitingForResponses: keepMessageConnectionOpen,
                    
                    canBeStoredAsResponse: shouldStoreResponse,
                    useStoredResponse: true,
                    
                    responseValidityDuration: responseValidityDuration,
                    
                    messageDataHash: messageDataHash
                }
                
            }
            
            
            const responseGroup = this.responseGroups[inResponseToMessage.identifier]
            
            if (responseGroup && !keepMessageConnectionOpen) {
                
                responseGroup.multipleMessageObjects.push({
                    key: key,
                    message: messageObject
                })
                
                this.removeMessageFromResponseGroups(inResponseToMessage)
                
                if (responseGroup.numberOfKeys == responseGroup.multipleMessageObjects.length) {
                    this._sendMessageForKey(
                        responseGroup.responseKey,
                        responseGroup.multipleMessageObjects,
                        responseGroup.inResponseToMessage
                    )
                }
                
            }
            else if (this._isHandlingMultipleMessages && key != this.multipleMessageKey) {
                this._multipleMessageResponses.push({
                    key: key,
                    message: messageObject
                })
            }
            else {
                this._socket.emit(key, messageObject)
            }
            
            return messageDataHash
            
        }
        
        
    }
    
    
    private removeMessageFromResponseGroups(inResponseToMessage: CBSocketMessage<any>) {
        delete this.responseGroups[inResponseToMessage.identifier]
    }
    
    private async didReceiveMessageForKey(
        key: string,
        message: CBSocketMessage<any>
    ) {
        
        // Only handle messages if connected to client
        if (!this.isOpen) {
            return
        }
        
        const startTime = Date.now()
        
        // associate responses with response group
        let clientShouldStoreResponse = false
        let clientStoredResponseTriggered = false
        let useStoredResponseWithErrorResponse = false
        
        let responseSent = false
        
        let responseValidityDuration
        
        const userID = "" + this.userProfile.contactInformation.email
        
        const excludedKeys = [
            "RetrieveDropdownDataForCode",
            "RetrieveNumberOfChatNotificationsForCBInquiryWithID",
            "RetrieveNumberOfOfferNotificationsForCBInquiryWithID"
        ]
        
        let excludeMessage = false
        
        const sendResponseFunction: CBSocketMessageSendResponseFunction = function (
            this: SocketSession,
            responseMessage: any,
            completion: CBSocketMessageCompletionFunction
        ): Promise<string> {
            
            if (clientStoredResponseTriggered) {
                return
            }
            
            if (!excludedKeys.contains(key) && !excludeMessage) {
                console.log(
                    "Sending response for message with key \"" + key + "\" after " + (Date.now() - startTime) +
                    "ms. User ID is " + userID + "."
                )
            }
            
            responseSent = true
            
            return this._sendMessageForKey(
                this.responseMessageKey,
                responseMessage,
                message,
                false,
                clientShouldStoreResponse,
                false,
                responseValidityDuration,
                completion
            )
            
        }.bind(this) as any
        
        sendResponseFunction.sendIntermediateResponse = (
            updateMessage: any,
            completion: CBSocketMessageCompletionFunction
        ) => {
            
            if (clientStoredResponseTriggered) {
                return
            }
            
            if (!excludedKeys.contains(key) && !excludeMessage) {
                console.log(
                    "Sending intermediate response for message with key \"" + key + "\" after " +
                    (Date.now() - startTime) + "ms. User ID is " + userID + "."
                )
            }
            
            responseSent = true
            
            this._sendMessageForKey(
                this.responseMessageKey,
                updateMessage,
                message,
                true,
                false,
                false,
                responseValidityDuration,
                completion
            )
            
        }
        
        sendResponseFunction.sendErrorResponse = (
            errorMessage: any,
            completion: CBSocketMessageCompletionFunction
        ) => {
            
            if (clientStoredResponseTriggered) {
                return
            }
            
            // Make sure that errorMessage is a clean object
            if (errorMessage.message && errorMessage.stack) {
                errorMessage = {
                    message: errorMessage.message,
                    stack: errorMessage.stack
                }
            }
            
            if (!excludedKeys.contains(key) && !excludeMessage) {
                console.log(
                    "Sending error response for message with key \"" + key + "\" after " +
                    (Date.now() - startTime) + "ms. User ID is " + userID + "."
                )
                console.log(errorMessage)
            }
            
            const messageObject = {
                _isCBSocketErrorMessage: true,
                messageData: errorMessage
            }
            
            responseSent = true
            
            this._sendMessageForKey(
                this.responseMessageKey,
                messageObject,
                message,
                false,
                false,
                useStoredResponseWithErrorResponse,
                responseValidityDuration,
                completion
            )
            
        }
        
        sendResponseFunction.confirmStoredResponseHash = (
            responseHash: any,
            completion?: CBSocketMessageCompletionFunction
        ) => {
            
            clientShouldStoreResponse = true
            
            if (responseHash == message.storedResponseHash && message.storedResponseHash) {
                
                if (!excludedKeys.contains(key) && !excludeMessage) {
                    console.log(
                        "Sending stored hash response for message with key \"" + key + "\" after " +
                        (Date.now() - startTime) + "ms. User ID is " + userID + "."
                    )
                }
                
                responseSent = true
                this._sendMessageForKey(
                    this.responseMessageKey,
                    "",
                    message,
                    false,
                    false,
                    true,
                    responseValidityDuration,
                    completion
                )
                clientStoredResponseTriggered = true
                
                return true
                
            }
            
            return false
            
        }
        
        sendResponseFunction.excludeMessageFromAutomaticConnectionEvents = () => {
            excludeMessage = true
        }
        
        sendResponseFunction.setResponseValidityDuration = duration => {
            responseValidityDuration = duration
        }
        
        sendResponseFunction.useStoredResponseWithErrorResponse = () => {
            useStoredResponseWithErrorResponse = true
        }
        
        if (this.handlers[key]) {
            
            await Promise.all(this.handlers[key].map(handler => handler(
                message.messageData,
                sendResponseFunction
            )))
            
        }
        
        const messageTarget = SocketController.sharedInstance.messageTargets[key]
        if (messageTarget) {
            await messageTarget(message.messageData, this, sendResponseFunction)
        }
        
        if (!responseSent) {
            excludeMessage = true
            await sendResponseFunction(null)
        }
        
        if (message.inResponseToIdentifier && this.responseMessageKey == key) {
            
            const completionFunction = this.completionFunctions[message.inResponseToIdentifier]
            
            if (completionFunction) {
                
                try {
                    completionFunction(message.messageData, sendResponseFunction)
                } catch (exception) {
                    sendResponseFunction.sendErrorResponse(exception)
                }
                
                if (!message.keepWaitingForResponses) {
                    delete this.completionFunctions[message.inResponseToIdentifier]
                }
                
            }
            
        }
        
    }
    
    
    async resultForMessageForKey<ResultType = any>(key: string, message: any, resultInsteadOfError: ResultType = null) {
        
        // This method is for internal use in the server so that it is possible to get the results
        // of message handlers without actually sending messages from the client
        
        let result = resultInsteadOfError
        let errorResult
        
        // Build a special sendResponseFunction to get the results out
        const sendResponseFunction: CBSocketMessageSendResponseFunction = function (
            this: SocketSession,
            responseMessage: any
        ) {
            
            result = responseMessage
            
        }.bind(this) as any
        
        sendResponseFunction.sendIntermediateResponse = (updateMessage => result = updateMessage)
        sendResponseFunction.sendErrorResponse = (errorMessage => errorResult = errorMessage)
        
        // We want to always trigger a full calculation in this case
        sendResponseFunction.confirmStoredResponseHash = (() => false)
        sendResponseFunction.excludeMessageFromAutomaticConnectionEvents = Utils.nil
        sendResponseFunction.setResponseValidityDuration = Utils.nil
        sendResponseFunction.useStoredResponseWithErrorResponse = Utils.nil
        
        if (this.handlers[key]) {
            
            await Promise.all(this.handlers[key].map(async handler => {
                
                // Handlers can actually return promises
                await handler(message, sendResponseFunction)
                
            }))
            
        }
        
        // Call the message handler with the special sendResponseFunction
        const messageTarget = SocketController.sharedInstance.messageTargets[key]
        
        if (messageTarget) {
            await messageTarget(message, this, sendResponseFunction)
        }
        
        if (errorResult && resultInsteadOfError == null) {
            throw errorResult
        }
        
        return result
        
    }
    
    
    addTargetForMessagesForKey<ResponseMessageType = any>(
        key: string,
        handlerFunction: CBSocketMessageHandlerFunction<ResponseMessageType>
    ) {
        
        if (!this.handlers[key]) {
            this.handlers[key] = [] as any
        }
        
        this.handlers[key].push(handlerFunction)
        
        this._socket.on(key, (message: CBSocketMessage<any>) => {
            this.didReceiveMessageForKey(key, message)
        })
        
    }
    
    
    
    
    
    socketDidDisconnect() {
        
        // Do something here if needed
        
    }
    
    
    
    
    
}





























