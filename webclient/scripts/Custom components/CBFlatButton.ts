import { UIButton, UIColor } from "uicore-ts"
import { CBColor } from "../CBCore/CBColor"
import { CBButton } from "./CBButton"


export class CBFlatButton extends CBButton {
    
    static colors = {
        
        titleLabel: {
            
            normal: CBColor.primaryTintColor,
            highlighted: CBColor.primaryTintColor,
            selected: CBColor.primaryTintColor
            
        },
        background: {
            
            normal: CBColor.transparentColor,
            hovered: new UIColor("#F8F8F8"),
            highlighted: new UIColor("#ebebeb"),
            selected: new UIColor("#ebebeb")
            
        }
        
    }
    
    
    constructor(elementID?: string, elementType?: string) {
        
        super(elementID, elementType)
        
    }
    
    
    initView(elementID: string, viewHTMLElement: HTMLElement, initViewData) {
        
        super.initView(elementID, viewHTMLElement, initViewData)
        
        this.colors = {
            
            titleLabel: {
                
                normal: CBColor.primaryTintColor,
                highlighted: CBColor.primaryTintColor,
                selected: CBColor.primaryTintColor
                
            },
            background: {
                
                normal: CBColor.transparentColor,
                hovered: new UIColor("#F8F8F8"),
                highlighted: new UIColor("#ebebeb"),
                selected: new UIColor("#ebebeb")
                
            }
            
        }
        
    }
    
    
    
    
    
    set titleLabelColor(titleLabelColor: UIColor) {
        
        
        this.colors.titleLabel.normal = titleLabelColor
        this.colors.titleLabel.highlighted = titleLabelColor
        this.colors.titleLabel.selected = titleLabelColor
        
        
        this.updateContentForCurrentState()
        
    }
    
    get titleLabelColor() {
    
        const result = this.colors.titleLabel.normal
    
        return result
        
    }
    
    
    
    
    
    updateContentForNormalState() {
        
        UIButton.prototype.updateContentForNormalState.call(this)
        
        //this.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.24)"
        
    }
    
    
    updateContentForHoveredState() {
        
        UIButton.prototype.updateContentForHoveredState.call(this)
        
        
        
        //this.titleLabel.textColor = CBColor.whiteColor.colorByMultiplyingRGB(0.85);
        
        //this.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.18)";
        
    }
    
    updateContentForFocusedState() {
        
        UIButton.prototype.updateContentForFocusedState.call(this)
        
        
        
        //this.titleLabel.textColor = CBColor.whiteColor.colorByMultiplyingRGB(0.85);
        
        //this.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.18)"
        
    }
    
    
    
    updateContentForHighlightedState() {
        
        UIButton.prototype.updateContentForHighlightedState.call(this)
        
        
        
        //this.titleLabel.textColor = CBColor.whiteColor.colorByMultiplyingRGB(0.7);
        
        //this.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.12)"
        
    }
    
    
    
    
    
}



























