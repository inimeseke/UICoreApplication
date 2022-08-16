import { nil, UITextView, UIView } from "uicore-ts"
import { CBColor } from "./CBCore/CBColor"





export class TopBarView extends UIView {
    
    
    titleLabel: UITextView
    
    constructor(elementID, element) {
        
        super(elementID, element)
        
    }
    
    
    
    initView() {
        
        super.initView(nil, nil)
        
        this.backgroundColor = CBColor.whiteColor
        this.initStyleSelector("." + this.styleClassName, "position: static; left: 0; right: 0; top: 0; height: 50px;")
        this.addStyleClass("TopBarView")
        
        this.setBorder(nil, 0, CBColor.primaryContentColor)
        this.style.borderBottomWidth = "1px"
        
        this.style.fontSize = "15pt"
        
        
        this.titleLabel = new UITextView("TopBarTitleLabel")
        this.titleLabel.setText("topBarTitle", "TestPage")
        this.titleLabel.style.color = "white"
        this.titleLabel.style.fontSize = "25pt"
        //this.addSubview(this.titleLabel);
        
        this.style.zIndex = "10"
        
        
        
    }
    
    
    
    
    
    
    
    
    layoutSubviews() {
        
        super.layoutSubviews()
        
        // Variables
        const bounds = this.bounds
        const sidePadding = 10
        
        
        // Title
        this.titleLabel.centerInContainer()
        
        
        
        
    }
    
    
    
    
    
}


















