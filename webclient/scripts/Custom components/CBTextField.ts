import { IS, IS_NOT, UIColor, UITextField, UITextView, UIView } from "uicore-ts"
import { CBColor } from "../CBCore/CBColor"


export class CBTextField extends UIView {
    
    titleLabel: UITextView
    textField: UITextField
    
    constructor(elementID?: string) {
        
        super(elementID)
        
    }
    

    initView(elementID: string, viewHTMLElement: HTMLElement) {
        
        super.initView(elementID, viewHTMLElement)
        
        
        viewHTMLElement.classList.add("input")
        
        this.textField = new UITextField(elementID + "TextField")
        this.addSubview(this.textField)
        
        this.titleLabel = new UITextView(elementID + "TitleLabel", UITextView.type.label)
        this.titleLabel.textColor = UIColor.greyColor
        this.titleLabel.style.fontStyle = "italic"
        this.addSubview(this.titleLabel)
        
        
        this.titleLabel.viewHTMLElement.setAttribute("for", this.textField.elementID)
        
        
        this.textField.addTargetForControlEvent(UIView.controlEvent.Focus, (event) => {
            this.titleLabel.viewHTMLElement.classList.add("active")
            this.titleLabel.textColor = CBColor.primaryTintColor
        })
        
        this.textField.addTargetForControlEvent(UIView.controlEvent.Blur, (event) => {
            if (IS_NOT(this.text)) {
                
                this.titleLabel.viewHTMLElement.classList.remove("active")
                
            }
            
            this.titleLabel.textColor = UIColor.greyColor
        })
        
        this.textField.style.webkitUserSelect = "text"
        
    }
    
    
    
    
    
    setPlaceholderText(key: string, defaultString: string, parameters?: { [x: string]: string }) {
        
        this.titleLabel.setText(key, defaultString, parameters)
        
    }
    
    
    set placeholderText(placeholderText: string) {
        
        this.titleLabel.text = placeholderText
        
    }
    
    get placeholderText() {
        
        return this.titleLabel.text
        
    }
    
    
    
    
    
    get text() {
        
        return this.textField.text
        
    }
    
    set text(text: string) {
        
        if (IS_NOT(text)) {
            
            text = ""
            
        }
        
        this.textField.text = text
        
        if (IS(this.text)) {
            
            this.titleLabel.viewHTMLElement.classList.add("active")
            
        }
        else {
            
            this.titleLabel.viewHTMLElement.classList.remove("active")
            
        }
        
    }
    
    
    
    
    
    updateContentForCurrentEnabledState() {
        
        
        this.userInteractionEnabled = this.enabled
        
        if (this.enabled) {
            
            this.alpha = 1
            
        }
        else {
            
            this.alpha = 0.5
            
        }
        
        
        
        
    }
    
    
    
    
    didMoveToSuperview(superview: UIView) {
        
        super.didMoveToSuperview(superview)
        
        this.text = this.text
        
    }
    
    
    
    
    
    set enabled(enabled: boolean) {
        
        super.enabled = enabled
        
        
        
        if (IS_NOT(enabled)) {
            
            this.textField.viewHTMLElement.setAttribute("readonly", "" + !enabled)
            
        }
        else {
            
            this.textField.viewHTMLElement.removeAttribute("readonly")
            
        }
        
        
        
        
    }
    
    get enabled() {
        
        return super.enabled
        
    }
    
    
    
    
    
    focus() {
        
        this.textField.focus()
        
    }
    
    blur() {
        
        this.textField.blur()
        
    }
    
    
    
    
    
}



































