import {
    FIRST, FIRST_OR_NIL,
    IS,
    IS_NOT,
    nil,
    UICore, UICoreValues, UILink,
    UIObject,
    UIRoute,
    UIViewBroadcastEvent,
    UIViewController,
    YES
} from "uicore-ts"
import { LanguageService } from "../Custom components/LanguageService"
import { CBUserProfile } from "./CBDataInterfaces"
import { CBServerClient } from "./CBServerClient"
import { CBSocketClient } from "./CBSocketClient"


declare const CBCoreInitializerObject: any


export class CBCore extends UIObject {
    
    private static _sharedInstance: CBCore
    
    _isUserLoggedIn: boolean = nil
    _cachedMinimizedChatInquiryIDs: string[] = nil
    _socketClient: CBSocketClient = new CBSocketClient(this)
    _serverClient: CBServerClient = new CBServerClient(this)
    
    _functionsToCallForEachSocketClient: (() => void)[] = []
    
    _models: any[] = []
    
    constructor() {
        
        super()
        
        if (CBCoreInitializerObject) {
            
            LanguageService.useStoredLanguageValues(CBCoreInitializerObject.languageValues)
            
        }
        
        
        window.addEventListener("storage", function (this: CBCore, event: StorageEvent) {
            
            if (event.newValue == event.oldValue) {
                
                return
                
            }
            
            //console.log("" + event.key + " changed to " + event.newValue + " from " + event.oldValue);
            
            
            
            if (event.key == "CBLanguageKey") {
                
                this.didSetLanguageKey()
                
            }
            
        }.bind(this))
        
        
        //this.checkIfUserIsAuthenticated();
        
        this.didSetLanguageKey()
        
        
    }
    
    
    
    
    
    static get sharedInstance() {
        if (!CBCore._sharedInstance) {
            CBCore._sharedInstance = new CBCore()
        }
        return CBCore._sharedInstance
    }
    
    
    
    
    
    static broadcastEventName = {
        
        "userDidLogIn": "UserDidLogIn",
        "userDidLogOut": "UserDidLogOut"
        
    }
    
    broadcastMessageInRootViewTree(message: UIViewBroadcastEvent) {
        
        (UICoreValues.main.rootViewController as UIViewController).view.broadcastEventInSubtree(message)
        
    }
    
    
    
    
    get socketClient() {
        return this._socketClient
    }
    
    get serverClient() {
        return this._serverClient
    }
    
    
    
    
    
    set isUserLoggedIn(isUserLoggedIn: boolean) {
        
        const previousValue = this.isUserLoggedIn
        
        
        localStorage.setItem("CBIsUserLoggedIn", "" + isUserLoggedIn)
        
        
        //this._isUserLoggedIn = isUserLoggedIn;
        
        this.didSetIsUserLoggedIn(previousValue)
        
    }
    
    didSetIsUserLoggedIn(previousValue: boolean) {
        
        const isUserLoggedIn = this.isUserLoggedIn
        
        if (isUserLoggedIn && previousValue != isUserLoggedIn) {
            
            // Send message to views
            
            this.broadcastMessageInRootViewTree({
                
                name: CBCore.broadcastEventName.userDidLogIn,
                parameters: nil
                
            })
            
            this.updateLinkTargets()
            
            
        }
        else if (previousValue != isUserLoggedIn) {
            
            
            this.performFunctionWithDelay(0.01, function (this: CBCore) {
                
                UIRoute.currentRoute.routeByRemovingComponentsOtherThanOnesNamed([
                    
                    "settings",
                    "inquiry"
                
                ]).apply()
                
                this.broadcastMessageInRootViewTree({
                    
                    name: CBCore.broadcastEventName.userDidLogOut,
                    parameters: nil
                    
                })
                
                this.updateLinkTargets()
                
                
            }.bind(this))
            
        }
        
        
    }
    
    private updateLinkTargets() {
        UICoreValues.main.rootViewController.view.forEachViewInSubtree(function (view) {
            if (view instanceof UILink) {
                view.updateTarget()
            }
        })
    }
    
    get isUserLoggedIn() {
        
        const result = (localStorage.getItem("CBIsUserLoggedIn") == "true")
        
        return result
        
    }
    
    
    
    get userProfile() {
        
        var result = nil
        
        
        try {
            result = JSON.parse(localStorage.getItem("CBUserProfile"))
        } catch (error) {
            
        }
        
        // if (IS_NOT(result)) {
        
        //     // Get userID from inquiryAccessKey if possible
        //     var inquiryKey = this.inquiryAccessKey;
        
        //     if (IS(inquiryKey)) {
        
        //         result = FIRST_OR_NIL(this.inquiriesModel.inquiriesByCurrentUser.firstElement).inquirer
        
        //     }
        
        // }
        
        return FIRST_OR_NIL(result)
        
    }
    
    set userProfile(userProfile: CBUserProfile) {
        
        if (IS_NOT(userProfile)) {
            
            localStorage.removeItem("CBUserProfile")
            
        }
        
        localStorage.setItem("CBUserProfile", JSON.stringify(userProfile))
        
        this.didSetUserProfile()
        
    }
    
    didSetUserProfile() {
        
        this.isUserLoggedIn = IS(this.userProfile)
        
    }
    
    
    set languageKey(languageKey: string) {
        
        if (IS_NOT(languageKey)) {
            
            localStorage.removeItem("CBLanguageKey")
            
        }
        
        localStorage.setItem("CBLanguageKey", JSON.stringify(languageKey))
        
        this.didSetLanguageKey()
        
    }
    
    get languageKey() {
        
        const result = FIRST(localStorage.getItem("CBLanguageKey"), LanguageService.defaultLanguageKey).replace(
            "\"",
            ""
        ).replace("\"", "")
        
        
        return result
        
    }
    
    didSetLanguageKey() {
        
        UIRoute.currentRoute.routeWithComponent(
            "settings",
            { "language": this.languageKey },
            YES
        ).applyByReplacingCurrentRouteInHistory()
        
    }
    
    
    get externalServiceIdentifier(): { accessKey: string; serviceID: string; organizationID: string } {
        
        const result = JSON.parse(localStorage.getItem("CBExternalServiceIdentifier"))
        
        return result
        
    }
    
    set externalServiceIdentifier(externalServiceIdentifier: { accessKey: string; serviceID: string; organizationID: string }) {
        
        localStorage.setItem("CBExternalServiceIdentifier", JSON.stringify(externalServiceIdentifier))
        
    }
    
    
    reloadSocketConnection() {
        
        // @ts-ignore
        this.socketClient.socket.disconnect()
        
        const messagesToBeSent = this.socketClient._messagesToBeSent.filter(function (messageItem, index, array) {
            
            return (!messageItem.isBoundToUserWithID || messageItem.isBoundToUserWithID ==
                CBCore.sharedInstance.userProfile._id)
            
        })
        
        this._socketClient = new CBSocketClient(this)
        this._socketClient._messagesToBeSent = messagesToBeSent
        
        const socketClient = this._socketClient
        
        this._models.forEach(function (model, index, array) {
            
            model.setSocketClient(socketClient)
            
        })
        
        this._functionsToCallForEachSocketClient.forEach(function (functionToCall, index, array) {
            
            functionToCall()
            
        })
        
        
        
    }
    
    
    callFunctionForEachSocketClient(functionToCall: () => void) {
        this._functionsToCallForEachSocketClient.push(functionToCall)
        functionToCall()
    }
    
    
}




















