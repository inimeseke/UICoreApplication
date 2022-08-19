import {
    IS,
    nil,
    NO,
    UIButton,
    UIColor,
    UICore,
    UIImageView,
    UIRectangle,
    UIRoute,
    UITextView,
    UIView,
    UIViewBroadcastEvent,
    YES
} from "uicore-ts"
import { CBColor } from "./CBCore/CBColor"
import { CBCore } from "./CBCore/CBCore"
import { LanguageService } from "./Custom components/LanguageService"





export class LanguagesDialogView extends UIView {
    
    
    
    titleLabel: UITextView
    buttons: UIButton[]
    _previousLanguageKey: string
    
    constructor(elementID: string, element?: HTMLElement) {
        
        super(elementID, element)
        
    }
    
    
    
    
    
    initView(elementID, viewHTMLElement) {
        
        super.initView(elementID, viewHTMLElement)
        
        // Adding a title label
        this.titleLabel = new UITextView("LanguagesDialogTitleLabel", UITextView.type.header1)
        this.titleLabel.setText("selectLanguageTitle", "Select language")
        this.titleLabel.textAlignment = UITextView.textAlignment.center
        this.titleLabel.textColor = UIColor.whiteColor
        this.addSubview(this.titleLabel)
        
        // Initializing the buttons array
        this.buttons = []
        
        const languageKeys = Object.keys(LanguageService.languages)
        
        languageKeys.forEach(function (this: LanguagesDialogView, languageKey: string, index: number, array: string[]) {
            
            const language = LanguageService.languages[languageKey]
            
            // Creating a language button
            const languageButton = new UIButton("LeftBarLanguageButton" + language.languageNameShort)
            languageButton.titleLabel.text = language.languageName
            this.buttons.push(languageButton)
            this.addSubview(languageButton)
            
            // Adding a selected image view to the button
            const selectedImageView = new UIImageView("SelectedImage" + language.languageNameShort)
            selectedImageView.imageSource = "images/baseline-check-24px.svg"
            selectedImageView.style.filter = "invert(0.35) sepia(1) saturate(5) hue-rotate(175deg)"
            languageButton.addSubview(selectedImageView)
            
            // Augmenting button layout function
            const buttonLayoutFunction = languageButton.layoutSubviews
            languageButton.layoutSubviews = function () {
                
                // Setting frame for the imageView
                const bounds = languageButton.bounds
                const padding = 10
                const imageHeight = bounds.height - 2 * padding
                selectedImageView.frame = new UIRectangle(bounds.width - imageHeight -
                    padding, padding, imageHeight, imageHeight)
                
                // Calling original function
                buttonLayoutFunction.call(languageButton)
                
            }
            
            languageButton.setNeedsLayout()
            
            // Setting up button visual dynamics
            languageButton.updateContentForNormalState = function () {
                languageButton.titleLabel.textColor = CBColor.primaryContentColor
                languageButton.backgroundColor = UIColor.whiteColor
                selectedImageView.hidden = YES
            }
            languageButton.updateContentForHighlightedState = function () {
                languageButton.titleLabel.textColor = CBColor.primaryContentColor
                languageButton.backgroundColor = UIColor.colorWithRGBA(200, 200, 200)
            }
            languageButton.updateContentForSelectedAndHighlightedState = languageButton.updateContentForHighlightedState
            languageButton.updateContentForSelectedState = function () {
                languageButton.titleLabel.textColor = CBColor.primaryContentColor
                languageButton.backgroundColor = UIColor.whiteColor
                selectedImageView.hidden = NO
            }
            languageButton.updateContentForCurrentState()
            
            // Setting initial button selected state
            const currentLanguageKey = UIRoute.currentRoute.componentWithName("settings").parameters.language
            if (IS(currentLanguageKey)) {
                if (currentLanguageKey == languageKey) {
                    languageButton.selected = YES
                }
            }
            else if (languageKey == "en") {
                languageButton.selected = YES
            }
            
            // Adding the button press action
            languageButton.addTargetForControlEvents([
                UIView.controlEvent.EnterDown, UIView.controlEvent.PointerUpInside
            ], function (this: LanguagesDialogView, sender: UIButton, event: Event) {
                
                CBCore.sharedInstance.languageKey = languageKey
                
                this.buttons.forEach(function (button, index, array) {
                    button.selected = NO
                })
                languageButton.selected = YES
                
                LanguageService.updateCurrentLanguageKey()
                
                this.rootView.broadcastEventInSubtree({
                    
                    name: UIView.broadcastEventName.LanguageChanged,
                    parameters: nil
                    
                })
                
                
                
                
            }.bind(this))
            
            
        }, this)
        
        
        
    }
    
    
    
    
    
    wasAddedToViewTree() {
        
        super.wasAddedToViewTree()
        
        this._previousLanguageKey = LanguageService.currentLanguageKey
        
        
    }
    
    
    
    
    
    didReceiveBroadcastEvent(event: UIViewBroadcastEvent) {
        
        super.didReceiveBroadcastEvent(event)
    
    
        if (event.name == UICore.broadcastEventName.RouteDidChange && this._previousLanguageKey !=
            LanguageService.currentLanguageKey) {
        
            this._previousLanguageKey = LanguageService.currentLanguageKey
        
            this.rootView.broadcastEventInSubtree({
            
                name: UIView.broadcastEventName.LanguageChanged,
                parameters: nil
            
            })
            
            
            
            
        }
        
        
        
    }
    
    
    
    
    
    layoutSubviews() {
        
        super.layoutSubviews()
        
        if (this.hidden) {
            return
        }
        
        const maxWidth = 350
        if (this.bounds.width > maxWidth) {
            this.bounds = this.bounds.rectangleWithWidth(maxWidth)
        }
        
        // Variables
        const bounds = this.bounds
        const sidePadding = 20 * 0
        
        this.titleLabel.frame = new UIRectangle(sidePadding, sidePadding, 50, bounds.width - sidePadding * 2)
        
        var previousFrame = this.titleLabel.frame
        this.buttons.forEach(function (button, index, array) {
            
            button.frame = previousFrame.rectangleWithY(previousFrame.max.y + 1).rectangleWithWidth(bounds.width -
                sidePadding * 2)
            previousFrame = button.frame
            
        })
        
        
        this.bounds = bounds.rectangleWithHeight(this.intrinsicContentHeight(bounds.width))
        
        this.style.maxHeight = "" + bounds.height.integerValue + "px"
        
        this.centerInContainer()
        
        
        
    }
    
    
    
    
    
}
























