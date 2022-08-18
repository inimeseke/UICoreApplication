import { UITextView, UIView } from "uicore-ts"
import { SearchableDropdown } from "./SearchableDropdown"


export class LabeledSearchableDropdown<T> extends UIView {
    
    label: UITextView
    dropdown: SearchableDropdown<T>
    
    constructor(elementId?: string) {
        
        super(elementId)
        
    }
    

    initView(elementId: string, viewHTMLElement: HTMLElement) {
        
        
        this.label = new UITextView(elementId + "Label", UITextView.type.header5)
        this.addSubview(this.label)
        
        this.dropdown = new SearchableDropdown(elementId + "Dropdown")
        this.addSubview(this.dropdown)
        
        this.dropdown.expandedContainerViewHeight = 350
        
        
        
    }
    
    
    
    
    
    get selectedItemCodes() {
        
        return this.dropdown.selectedItemCodes
        
    }
    
    
    
    
    layoutSubviews() {
        
        super.layoutSubviews()
    
        const padding = this.core.paddingLength
        const labelHeight = padding
    
        const bounds = this.bounds
    
        this.label.frame = bounds.rectangleWithHeight(labelHeight)
        
        this.dropdown.frame = bounds.rectangleWithHeight(51).rectangleWithY(labelHeight)
        
        
        
        //this.dropdown.expandedContainerViewHeight = this.superview.bounds.height - this.frame.max.y - padding
        
        
        
    }
    
    
    
    
    
}
















