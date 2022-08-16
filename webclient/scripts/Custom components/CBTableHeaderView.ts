import { IF, nil, UIButton, UIKeyValueStringSorter, UIKeyValueStringSorterSortingInstruction } from "uicore-ts"
import { CBColor } from "../CBCore/CBColor"
import { CBTableViewCellDescriptor } from "./CBDataView"
import { CellView } from "./CellView"
import { RowView } from "./RowView"


const kUnsortedColumnImageAddress = "images/baseline-unfold_more-24px.svg"
const kDescendingColumnImageAddress = "images/baseline-expand_less-24px.svg"
const kAscendingColumnImageAddress = "images/baseline-expand_more-24px.svg"


export class CBTableHeaderView extends RowView<CellView> {
    
    orderingStates = []
    
    private _descriptors: CBTableViewCellDescriptor[] = []
    
    constructor(elementID: string, descriptors: CBTableViewCellDescriptor[] = []) {
        
        super(elementID)
        
        this.descriptors = descriptors
        
    }
    

    updateContentForButtonStates() {
        
        this.cells.forEach((cell, index, array) => {
            
            if (cell.isAButton) {
                
                cell.rightImageSource = CBTableHeaderView.imageSourceForOrderingState[this.orderingStates[index]]
                
            }
            
        })
        
    }
    
    
    
    
    
    orderingStateDidChange() {
    
    
    
    
    
    }
    
    
    get descriptors() {
        return this._descriptors
    }
    
    set descriptors(descriptors) {
        
        this._descriptors = descriptors
        
        this.updateContent()
        
    }
    
    
    
    
    
    private updateContent() {
        
        const cells = []
        
        this.orderingStates = [CBTableHeaderView.orderingState.unordered].arrayByRepeating(cells.length)
        
        this.descriptors.forEach((descriptor, index, array) => {
            
            const cell = new CellView()
            
            if (descriptor.title === "" + descriptor.title) {
                
                cell.titleLabel.text = descriptor.title
                cell.titleLabel.localizedTextObject = nil
                
            }
            else {
                
                cell.titleLabel.localizedTextObject = IF(descriptor.title)(() => descriptor.title)()
                cell.titleLabel.text = nil
                
            }
            
            cell.isAButton = descriptor.allowSorting
            
            cell.colors.titleLabel = {
                
                normal: CBColor.primaryContentColor,
                highlighted: CBColor.primaryContentColor,
                selected: CBColor.primaryContentColor
                
            }
            
            cell.updateContentForCurrentState()
            
            if (cell.isAButton) {
                
                cell.rightImageSource = kUnsortedColumnImageAddress
                
                cell.addTargetForControlEvents(
                    [UIButton.controlEvent.EnterDown, UIButton.controlEvent.PointerUpInside],
                    (sender, event) => {
                        
                        const buttonState = CBTableHeaderView.nextStateForButtonState[this.orderingStates[index]]
                        
                        this.orderingStates = [CBTableHeaderView.orderingState.unordered].arrayByRepeating(this.cells.length)
                        
                        this.orderingStates[index] = buttonState
                        
                        
                        this.updateContentForButtonStates()
                        
                        this.orderingStateDidChange()
                        
                    }
                )
                
            }
            
            cell.titleLabel.style.fontWeight = "bold"
            cell.titleLabel.style.fontStyle = "initial"
            
            cells.push(cell)
            
            this.orderingStates[index] = descriptor.initialOrderingState || CBTableHeaderView.orderingState.unordered
            
        })
        
        this.cells = cells
        
        
        
        const allUnordered = this.orderingStates.allMatch((value, index, obj) => value ==
            CBTableHeaderView.orderingState.unordered)
        
        if (allUnordered) {
            
            this.orderingStates.firstElement = CBTableHeaderView.orderingState.descending
            
        }
        
        
        
        this.updateContentForButtonStates()
        
    }
    
    
    sortingInstructionsForCurrentState() {
        
        const result: UIKeyValueStringSorterSortingInstruction[] = []
        
        this.cells.forEach((button, index, array) => {
            
            const buttonState = this.orderingStates[index]
            
            if (buttonState != CBTableHeaderView.orderingState.unordered) {
                
                result.push({
                    
                    keyPath: this.descriptors[index].keyPath,
                    dataType: UIKeyValueStringSorter.dataType.string,
                    direction: buttonState
                    
                })
                
            }
            
        })
        
        return result
        
    }
    
    get sortingInstructions() {
        
        return this.sortingInstructionsForCurrentState()
        
    }
    
    
    
    
    
    static orderingState = {
        
        "unordered": "unordered",
        "descending": UIKeyValueStringSorter.direction.descending,
        "ascending": UIKeyValueStringSorter.direction.ascending
        
    }
    
    static imageSourceForOrderingState = {
        
        "unordered": kUnsortedColumnImageAddress,
        [UIKeyValueStringSorter.direction.descending]: kDescendingColumnImageAddress,
        [UIKeyValueStringSorter.direction.ascending]: kAscendingColumnImageAddress
        
    }
    
    static nextStateForButtonState = {
        
        "unordered": UIKeyValueStringSorter.direction.descending,
        [UIKeyValueStringSorter.direction.descending]: UIKeyValueStringSorter.direction.ascending,
        [UIKeyValueStringSorter.direction.ascending]: UIKeyValueStringSorter.direction.descending
        
    }
    
    
    
    
    
}





























