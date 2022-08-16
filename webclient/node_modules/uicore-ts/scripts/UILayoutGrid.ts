import { UIObject } from "./UIObject"
import { UIRectangle } from "./UIRectangle"


export class UILayoutGrid extends UIObject {
    
    
    
    _frame: UIRectangle
    
    _subframes: UILayoutGrid[] = []
    
    
    constructor(frame: UIRectangle) {
        
        super()
        
        this._frame = frame
        
    }
    
    
    
    
    
    splitXInto(numberOfFrames: number) {
        
        
        
        if (this._subframes.length == 0) {
            
            
            
            for (var i = 0; i < numberOfFrames; i++) {
    
                const asd = 1
    
    
    
            }
            
        }
        
        
        
        
    }
    
    
    
    
    
}



























