import {
    IS,
    nil,
    UICore,
    UIRootViewController,
    UIRoute,
    UITextView,
    UIView,
    UIViewBroadcastEvent,
    UIViewController,
    YES
} from "uicore-ts"
import { BottomBarView } from "./BottomBarView"
import { CBColor } from "./CBCore/CBColor"
import { CBCore } from "./CBCore/CBCore"
import { SocketClient } from "./CBCore/CBSocketClient"
import { LanguageService } from "./Custom components/LanguageService"
import { InformationViewController } from "./InformationViewController"
import { InternalDropdownSettingsViewController } from "./InternalDropdownSettingsViewController"
import { InternalLanguageSettingsViewController } from "./InternalLanguageSettingsViewController"
import { LanguagesDialogView } from "./LanguagesDialogView"
import { SomeContentViewController } from "./SomeContentViewController"
import { TopBarView } from "./TopBarView"


class RootViewController extends UIRootViewController {
    
    readonly bottomBarView: BottomBarView
    readonly topBarView: TopBarView
    
    readonly languagesDialogViewController = new UIViewController(new LanguagesDialogView("LanguagesDialogView"))
    
    readonly contentViewControllers = {
        
        informationViewController: this.lazyViewControllerObjectWithClass(InformationViewController),
        internalDropdownSettingsViewController: this.lazyViewControllerObjectWithClass(
            InternalDropdownSettingsViewController,
            async () =>
                IS((await SocketClient.AreCBInternalSettingsAvailableForCurrentUser()).result) || YES
        ),
        internalLanguageSettingsViewController: this.lazyViewControllerObjectWithClass(
            InternalLanguageSettingsViewController,
            async () =>
                IS((await SocketClient.AreCBInternalSettingsAvailableForCurrentUser()).result) || YES
        ),
        mainViewController: this.lazyViewControllerObjectWithClass(SomeContentViewController)
        
    }
    
    
    constructor(view) {
        
        // Calling super
        super(view)
        
        // Instance variables, initialize to nil or empty function, do not leave undefined to avoid excessive if blocks
        // this._firstView = nil;
        // this._secondView = nil;
        // this._testView = nil;
        // this._button = nil;
        
        // The nil object avoids unnecessary crashes by allowing you to call any function or access any variable on it, returning nil
        // Define properties with get and set functions, so they can be accessed and set like variables
        // Name variables that should be private, like property variables, with a _ sign, this also holds for private functions
        // Avoid accessing variables and functions named with _ from outside as this creates strong coupling and hinders stability
        
        // Code for further setup if necessary
        
        UITextView.defaultTextColor = CBColor.primaryContentColor
        
        // Top bar
        this.topBarView = new TopBarView("TopBarView", nil)
        this.topBarView.titleLabel.setText("topBarTitle", LanguageService.languageValues.en.topBarTitle)
        this.view.addSubview(this.topBarView)
        
        // Bottom bar
        this.bottomBarView = new BottomBarView("BottomBarView").configuredWithObject({
            style: { overflow: "hidden" }
        })
        this.view.addSubview(this.bottomBarView)
        
        // Initializing CBCore if needed
        CBCore.sharedInstance.viewCore = this.view.core
        
    }
    
    async viewDidAppear() {
        
        await super.viewDidAppear()
        
        this.topBarView.setNeedsLayout()
        
    }
    
    
    async handleRoute(route: UIRoute) {
        
        await super.handleRoute(route)
        
        LanguageService.updateCurrentLanguageKey(route)
        
        const currentURL = "" + window.location
        if (IS(currentURL)) {
            SocketClient.RouteDidChange(currentURL).then(nil)
        }
        
    }
    
    
    viewDidReceiveBroadcastEvent(event: UIViewBroadcastEvent) {
        
        super.viewDidReceiveBroadcastEvent(event)
        
        if ([CBCore.broadcastEventName.userDidLogIn, CBCore.broadcastEventName.userDidLogOut].contains(event.name)) {
            
            this.handleRoute(UIRoute.currentRoute)
            
        }
        
        if (event.name == UIView.broadcastEventName.LanguageChanged) {
            
            this.detailsViewController = nil
            this._detailsDialogView.dismiss()
            this._triggerLayoutViewSubviews()
            
        }
        
    }
    
    
    updateViewStyles() {
    
    }
    
    viewDidLayoutSubviews() {
        
        super.viewDidLayoutSubviews()
        
    }
    
    
    layoutViewSubviews() {
        
        super.layoutViewSubviews()
        
        this.updatePageScale()
    
        const contentViewMaxWidth = 1000
        const topBarHeight = 65
        const bottomBarMinHeight = 100
        this.performDefaultLayout(
            this.core.paddingLength,
            contentViewMaxWidth,
            topBarHeight,
            bottomBarMinHeight
        )
        
    }
    
}





try {
    
    // @ts-ignore
    const languageKey = (localStorage.getItem("CBLanguageKey") || CBCoreInitializerObject.defaultLanguageKey || "en").replace(
        "\"",
        ""
    ).replace("\"", "")
    
    const loadingLabelElement = document.getElementById("LoadingLabel")
    
    const loadingTextObject = { "en": "Loading." }
    
    loadingLabelElement.innerHTML = (loadingTextObject[languageKey] || loadingTextObject["en"])
    
    new UICore("RootView", RootViewController)
    
    const loadingViewElement = document.getElementById("LoadingView")
    const rootViewElement = document.getElementById("RootView")
    rootViewElement.removeChild(loadingViewElement)
    
} catch (exception) {
    
    console.log(exception)
    
    //window.location = "/unsupported";
    
}






































