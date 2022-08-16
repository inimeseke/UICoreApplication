import { UIView } from "uicore-ts"
import { RootViewParameters } from "./RootViewParameters"


export class SomeContentView extends UIView {
    
    
    constructor(elementID: string) {
        
        super(elementID)
    
        // Code for further setup if necessary
        
    }
    
    
    initView(elementID: string, viewHTMLElement: HTMLElement, initViewData?: any) {
        
        super.initView(elementID, viewHTMLElement, initViewData)
        
    }
    
    
    layoutSubviews() {
        
        super.layoutSubviews()
        
        const padding = RootViewParameters.paddingLength
        const labelHeight = padding
        
        const bounds = this.bounds.rectangleWithInset(padding)
        
    }
    
    
}




























