import { nil, NO, UIButton, UISlideScrollerView, UIView, YES } from "uicore-ts"


export class StepSliderView extends UIView {
    
    slideScroller: UISlideScrollerView
    
    constructor(elementID) {
        
        super(elementID)
        
    }
    

    initView() {
        
        this.slideScroller = new UISlideScrollerView(this.elementID + "SlideScroller")
        
        this.addSubview(this.slideScroller)
    
        const buttonWithIndex = this.slideScroller.buttonForPageIndicatorWithIndex.bind(this.slideScroller)
    
        this.slideScroller.buttonForPageIndicatorWithIndex = function (index: number) {
    
            const result = buttonWithIndex(index)
    
            result.titleLabel.text = " " + (index + 1) + ". step"
            
            return result
            
        }
        
        this.slideScroller.layoutPageIndicators = nil
        
        this.slideScroller.pageIndicatorsView.removeFromSuperview()
        
        this.addSubview(this.slideScroller.pageIndicatorsView)
    
        
    
        let originalFunction = this.slideScroller.willScrollToPageWithIndex
    
        this.slideScroller.willScrollToPageWithIndex = function (this: StepSliderView, index: number) {
            
            originalFunction.call(this.slideScroller, index)
            
            this.updateStepButtonStates()
            
        }.bind(this)
    
        originalFunction = this.slideScroller.didScrollToPageWithIndex
    
        this.slideScroller.didScrollToPageWithIndex = function (this: StepSliderView, index: number) {
            
            originalFunction.call(this.slideScroller, index)
            
            this.updateStepButtonStates()
            
        }.bind(this)
        
        
        
    }
    
    
    
    addSlideView(view: UIView) {
        
        
        this.slideScroller.addSlideView(view)
        
        this.updateStepButtonStates()
        
    }
    
    set slideViews(views: UIView[]) {
        
        
        this.slideScroller.slideViews = views
        
        
        
    }
    
    get slideViews() {
        
        return this.slideScroller.slideViews
        
    }
    
    get pageIndicatorsView() {
        
        return this.slideScroller.pageIndicatorsView
        
    }
    
    
    get stepButtons(): UIButton[] {
        
        return this.pageIndicatorsView.subviews as UIButton[]
        
    }
    
    
    
    
    
    updateStepButtonStates() {
    
        var allowed = YES
    
        this.stepButtons.forEach(function (this: StepSliderView, button, index, array) {
    
            const view = this.slideViews[index]
    
            button.enabled = allowed
            
            if ((view as any).isNextStepAllowed != undefined && allowed) {
                
                allowed = (view as any).isNextStepAllowed;
                
                (button as any).stepcompleted = allowed
                
            }
            else {
                
                (button as any).stepcompleted = NO
                
                
                
            }
            
            button.updateContentForCurrentState()
            
            
            
            
        }, this)
        
        
        
        
    }
    
    
    
    
    
    layoutSubviews() {
        
        super.layoutSubviews()
    
        const padding = this.core.paddingLength
    
        this.pageIndicatorsView.frame = this.bounds.rectangleWithInset(padding).rectangleWithHeight(50)
        
        this.slideScroller.frame = this.bounds.rectangleWithInsets(0, 0, 0, this.pageIndicatorsView.frame.height +
            padding)
        
        
        if (this.slideScroller.slideViews.length <= 1) {
            
            this.pageIndicatorsView.hidden = YES
            
            this.slideScroller.frame = this.bounds
            
        }
        else {
            
            this.pageIndicatorsView.hidden = NO
            
        }
    
    
        const pageIndicatorsBounds = this.pageIndicatorsView.bounds
    
        this.stepButtons.forEach(function (button, index, array) {
            
            
            button.style.position = "absolute"
    
            var frame = pageIndicatorsBounds.rectangleWithWidth(pageIndicatorsBounds.width / array.length)
    
            frame = frame.rectangleWithX(frame.width * index)
            
            button.frame = frame
            
            
            
            
        })
        
        
        
        
        
    }
    
    
    
    
    
}


























