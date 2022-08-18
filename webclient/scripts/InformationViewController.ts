import { UIColor, UIRoute, UIViewController } from "uicore-ts"
import { CBCore } from "./CBCore/CBCore"


export class InformationViewController extends UIViewController {
    
    
    constructor(view) {
        
        super(view)
        
        // Code for further setup if necessary
    
        this.view.backgroundColor = UIColor.whiteColor
        
    }
    
    
    static readonly routeComponentName = "information"
    
    static readonly ParameterIdentifierName = {
        
        "key": "key"
        
    }
    
    
    async handleRoute(route: UIRoute) {
        
        super.handleRoute(route)
        
        CBCore.sharedInstance.didSetLanguageKey()
    
        const inquiryComponent = route.componentWithName(InformationViewController.routeComponentName)
    
        const key = inquiryComponent.parameters[InformationViewController.ParameterIdentifierName.key]
    
        this.view.setInnerHTML(key, "Failed to load data for key")
        
        this.view.setNeedsLayoutUpToRootView()
        
        // @ts-ignore
        const imgLoad = imagesLoaded(this.view.viewHTMLElement)
    
        const imagesDidLoad = function (this: InformationViewController, instance) {
            
            console.log("ALWAYS - all images have been loaded")
            this.view.setNeedsLayoutUpToRootView()
            
            imgLoad.off("always", imagesDidLoad)
            
            
        }.bind(this)
        
        imgLoad.on("always", imagesDidLoad)
        
    }
    
    
    
    updateViewConstraints() {
        
        super.updateViewConstraints()
        
    }
    
    
    
    updateViewStyles() {
        
        super.updateViewStyles()
        
    }
    
    
    
    viewDidLayoutSubviews() {
        
        super.viewDidLayoutSubviews()
        
    }
    
    
    
    layoutViewSubviews() {
        
        super.layoutViewSubviews()
    
        const padding = this.core.paddingLength
        const labelHeight = padding
    
        // View bounds
        const bounds = this.view.bounds.rectangleWithInset(padding)
    
    
    
    
    
    }
    
    
    
    
    
}








































































