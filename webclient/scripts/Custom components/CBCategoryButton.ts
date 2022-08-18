import { IS, nil, NO, UIButton, UIColor, UITextView, YES } from "uicore-ts"
import { CBColor } from "../CBCore/CBColor"


export class CBCategoryButton extends UIButton {
    
    
    constructor(elementID: string) {
        
        super(elementID, nil, UITextView.type.header3)
        
    }
    

    updateContentForNormalState() {
        
        this.backgroundColor = UIColor.transparentColor
        this.titleLabel.textColor = CBColor.primaryContentColor
        
        this.imageView.style.filter = ""
        this.imageView.alpha = 0.87
        
    }
    
    updateContentForHoveredState() {
        
        //this.backgroundColor = new UIColor("#F8F8F8"); //UIColor.whiteColor;
        
        this.titleLabel.textColor = CBColor.primaryContentColor//.colorWithAlpha(0.75) //CBColor.primaryTintColor; //new UIColor("#347FE6")
        
        //this.style.boxShadow = "0 3px 6px 0 rgba(0,0,0,0.16)"
        
        //this.imageView.alpha = 0.75;
        //this.imageView.style.filter = "invert(0.35) sepia(1) saturate(5) hue-rotate(175deg)"
        
    }
    
    updateContentForHighlightedState() {
        
        //this.backgroundColor = UIColor.whiteColor;
        this.style.color = "#7dadef"
        this.titleLabel.textColor = CBColor.primaryTintColor //new UIColor("#7dadef");
        
        this.backgroundColor = CBColor.primaryTintColor
        //this.style.color = "#7dadef";
        this.titleLabel.textColor = CBColor.whiteColor
        
        //this.style.boxShadow = "0 3px 6px 0 rgba(0,0,0,0.12)"
        
        this.imageView.style.filter = "invert(1)"
        this.imageView.alpha = 1
        
    }
    
    
    
    
    
    layoutSubviews() {
        
        
        
        //super.layoutSubviews();
    
    
    
        const padding = this.core.paddingLength
        const labelHeight = padding * 1.5
    
        const bounds = this.bounds.rectangleWithInset(padding)
    
        this.titleLabel.text = this.titleLabel.text.toUpperCase()
        
        if (this.imageView.imageSource) {
            
            //this.titleLabel.frame = bounds.rectangleWithHeight(labelHeight, 1);
            
            this.titleLabel.setPosition(padding, padding, padding, nil, labelHeight)
            
            this.titleLabel.style.maxHeight = ""
            this.titleLabel.style.transform = ""
            this.titleLabel.style.top = ""
            
            this.imageView.frame = this.bounds.rectangleWithInset(padding * 0.5).rectangleWithInsets(0, 0, labelHeight +
                padding, 0)
            
            this.imageView.hidden = NO
            
        }
        else {
            
            this.imageView.hidden = YES
            
            
            
            
        }
        
        this.imageView.hidden = IS(this.bounds.height < 50)
        
        if (this.imageView.hidden) {
            
            this.titleLabel.centerInContainer()
            
            this.titleLabel.style.maxHeight = "" + this.bounds.height.integerValue + "px"
            
            this.titleLabel.style.maxWidth = "" + bounds.width.integerValue + "px"
            
        }
        
        
        
        
        
    }
    
    
    
    
    
}





























