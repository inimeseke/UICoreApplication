import { UIColor, UIRoute, UITextView, UIViewController } from "uicore-ts"


export class SomeContentViewController extends UIViewController {
    
    readonly titleLabel: UITextView
    
    constructor(view) {
        
        super(view)
        
        // Code for further setup if necessary
        
        this.view.backgroundColor = UIColor.whiteColor
        
        this.titleLabel = new UITextView(this.view.elementID + "TitleLabel", UITextView.type.header2)
        this.titleLabel.localizedTextObject = { en: "Some content", est: "Mingi sisu" }
        this.view.addSubview(this.titleLabel)
        
    }
    
    
    static readonly routeComponentName = "somecontent"
    
    static readonly ParameterIdentifierName = {}
    
    async viewDidAppear() {
    
    }
    
    
    async viewWillDisappear() {
    
    }
    
    
    async handleRoute(route: UIRoute) {
        
        super.handleRoute(route)
        const inquiryComponent = route.componentWithName(SomeContentViewController.routeComponentName)
        
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
        
        this.titleLabel.frame = bounds.rectangleWithHeight(labelHeight * 2)
        
    }
    
    
}








































































