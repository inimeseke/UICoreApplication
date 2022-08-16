/// <reference path="../webclient/scripts/CBCore/CBDataInterfaces.ts" />

import { Application} from "express"
import * as mongoose from "mongoose"
import { LoginKeyModel, SubscriptionModel, UserModel } from "../models"
import { CBAuthenticationSource, CBSubscription, CBUserProfile } from "../webclient/scripts/CBCore/CBDataInterfaces"
import { SocketController } from "./SocketController"
import { InternalSettingsController } from "./InternalSettingsController"
import Utils from "../Utils"





export class UserController {
    
    private static _instance: UserController
    
    get expressApp() {
        return this._expressApp
    }
    
    
    constructor(private _expressApp: Application) {
        
        this.registerRoutes()
        
    }
    
    public registerRoutes() {
        
        SocketController.sharedInstance.addTargetForConnectionEvents((socketSession) => {
            
            socketSession.addTargetForMessagesForKey("CBAddSubscription", async (messageData: {
                
                userEmail: string;
                userID: string;
                subscription: CBSubscription;
                
            }, respondWithMessage) => {
                
                
                
                try {
                    
                    if (!InternalSettingsController.sharedInstance.isUserAnAdministrator(socketSession.userProfile)) {
                        
                        respondWithMessage.sendErrorResponse("Only administrators can do this.")
                        
                        return
                        
                    }
                    
                    const userID = messageData.userID ||
                        (await UserModel.findOne({ "contactInformation.email": messageData.userEmail.toLowerCase() }))._id
                    
                    const user = await UserModel.findById(userID)
                    
                    this.addNewSubscription(user, messageData.subscription, (error, updatedUser) => {
                        
                        respondWithMessage(updatedUser)
                        
                    })
                    
                } catch (exception) {
                    
                    respondWithMessage.sendErrorResponse(exception)
                    
                }
                
                
                
                
                
            })
            
            
            
            
            
        })
        
        
        
        
        
    }
    
    public async fetchUserProfileWithUserAccessToken(accessToken: string) {
        
        if (accessToken && accessToken != "undefined") {
            
            const loginKeyObject = await LoginKeyModel.findOne({
                
                accessToken: {
                    $eq: accessToken,
                    $ne: null
                },
                //authenticationSource: CBAuthenticationSource.google,
                isValid: true,
                logoutDate: null
                
            }).sort("-createdAt")
            
            if (!loginKeyObject || !loginKeyObject.accessToken || loginKeyObject.accessToken != accessToken) {
                
                return null
                
            }
            
            const result = await UserModel.findById(loginKeyObject.userID).populate("subscriptions").exec()
            
            result.isLoggedInUsingExternalService = (loginKeyObject.authenticationSource ==
                CBAuthenticationSource.google || loginKeyObject.authenticationSource ==
                CBAuthenticationSource.facebook)
            
            return result
            
        }
        
    }
    
    public async fetchInternalUserProfileWithID(userID: string) {
        
        if (userID) {
            
            const result = await UserModel.findById(userID).populate("subscriptions").select("+accessToken").select(
                "+authProviderId.google").exec()
            
            return result
            
        }
        
    }
    
    public async fetchInternalUserProfileWithEmail(userEmail: string) {
        
        if (userEmail) {
            
            const result = await UserModel.findOne({ "contactInformation.email": userEmail.toLowerCase() }).populate(
                "subscriptions").select("+accessToken").select("+authProviderId.google").exec()
            
            return result
            
        }
        
    }
    
    // public updateUserProfile(user: Express.User, data: CBUserProfile, completion: (error: any, updatedUser: mongoose.Document) => void) {
    //     user.email = data.email;
    //     user.firstName = data.firstName;
    //     user.lastName = data.lastName;
    //     if(data.merchantProfile) {
    //         user.merchant = {};
    //         user.merchant.businessName = data.merchantProfile.businessName;
    //         user.merchant.geographicalAreas = data.merchantProfile.geographicalAreas;
    //     }
    //     user.save(completion);
    // }
    
    public async addNewSubscription(
        user: any,
        subscription: CBSubscription,
        completion: (error: any, updatedUser: mongoose.Document) => void
    ) {
        const subscriptionModel = new SubscriptionModel(subscription)
        try {
            const newSubscription = await subscriptionModel.save()
            user.subscriptions.push(newSubscription.id)
            const updatedUser = await user.save()
            
            completion(null, updatedUser)
        } catch (error) {
            completion(error, null)
        }
    }
    
    public fetchUserSubscriptions(currentUser, completion: (error: any, subscriptions: CBSubscription[]) => void) {
        UserModel.findOne({ "_id": currentUser.id })
            .select("subscriptions")
            .populate("subscriptions")
            .exec((error, user: CBUserProfile) => {
                completion(error, user.subscriptions)
            })
    }
    
    
    public validSubscriptionForUser(userProfile: CBUserProfile) {
        
        let result: CBSubscription
        
        const subscriptions = userProfile.subscriptions
        
        if (Utils.IS(subscriptions.length)) {
            
            const now = Date.now()
            
            let resultStart = 0
            
            subscriptions.forEach(function (subscription, index, array) {
                
                const start = new Date(subscription.startDate).getTime()
                const end = new Date(subscription.endDate).getTime()
                
                if ((subscription.isIndefinite && subscription.subscriptionKind > 0) ||
                    ((!result || !result.isIndefinite) && start <= now && end >= now && start > resultStart)) {
                    
                    result = subscription
                    
                    resultStart = start
                    
                }
                
                
            })
            
        }
        
        
        
        
        return result
        
    }
    
    
    
    
    
    public static get sharedInstance() {
        return this._instance
    }
    
    public static Instance(expressApp: Application): UserController {
        return this._instance || (this._instance = new this(expressApp))
    }
    
}
