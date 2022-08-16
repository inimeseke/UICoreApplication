import { UILinkButton } from "uicore-ts"
import { CBButton } from "./CBButton"


export class CBLinkButton extends UILinkButton {
    
    
    constructor(elementID?: string, elementType?: string) {
        
        super(elementID, elementType)
        
    }
    

    initView(elementID: string, viewHTMLElement: HTMLElement, initViewData) {
        
        super.initView(elementID, viewHTMLElement, initViewData)
        
        this.button.removeFromSuperview()
        this.button = new CBButton(this.elementID + "Button", initViewData.elementType)
        this.addSubview(this.button)
        
    }
    
}



























