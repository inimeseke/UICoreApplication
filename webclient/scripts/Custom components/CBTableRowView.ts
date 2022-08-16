import {
    FIRST,
    FIRST_OR_NIL, IF,
    IS,
    IS_NOT,
    nil,
    UIButton,
    UIObject,
    UITableView,
    UIView,
    wrapInNil,
    YES
} from "uicore-ts"
import { CBColor } from "../CBCore/CBColor"
import { RootViewParameters } from "../RootViewParameters"
import { CBTableViewCellDescriptor } from "./CBDataView"
import { CellView } from "./CellView"
import { LanguageService } from "./LanguageService"
import { RowView } from "./RowView"


export class CBTableRowView extends RowView {
    
    private readonly backgroundView: UIView
    private readonly _bottomLineView: UIView
    private dataCells: CellView[]
    private _data: any
    private _descriptors: CBTableViewCellDescriptor[] = []
    
    leftCell: CellView
    rightCell: CellView
    
    sideCellsWidth = 20
    
    constructor(elementID: string) {
        
        super(elementID)
        
        this._bottomLineView = new UIView(elementID + "BottomLineView")
        this._bottomLineView.backgroundColor = CBColor.primaryContentColor.colorWithAlpha(0.2)
        this.addSubview(this._bottomLineView)
        
        this.backgroundView = new UIView(elementID + "BackgroundView")
        this.addSubview(this.backgroundView)
        
        this.viewHTMLElement.classList.add("InquiryRowView")
        this.backgroundView.viewHTMLElement.classList.add("InquiryRowViewBackground")
        
        this.leftCell = new CellView()
        this.rightCell = new CellView()
        
        this._rowHeight = nil;
        
    }
    

    set descriptors(descriptors) {
        
        this._descriptors = descriptors
        
        this.updateContentForCurrentDescriptors()
        
    }
    
    get descriptors() {
        return this._descriptors
    }
    
    
    private updateContentForCurrentDescriptors() {
        
        function addRightBorder(view: UIView) {
            
            view.style.borderRightColor = CBColor.primaryContentColor.colorWithAlpha(0.2).stringValue
            view.style.borderRightWidth = "1px"
            view.style.borderRightStyle = "solid"
            
        }
        
        const views = [this.leftCell]
        
        this.dataCells = []
        
        this.descriptors.forEach((descriptor, index, array) => {
            
            const view = new CellView()
            
            view.addTargetForControlEvents(
                [UIButton.controlEvent.EnterDown, UIButton.controlEvent.PointerUpInside],
                (sender, event) => {
                    
                    const buttonWasPressed = FIRST_OR_NIL(descriptor.buttonWasPressed)
                    
                    buttonWasPressed(view, this.data)
                    
                }
            )
            
            view.isAButton = IS(descriptor.buttonWasPressed)
            
            var initCell = descriptor.initCell
            
            if (!initCell) {
                
                initCell = (cellView: CellView) => {
                    
                    cellView.titleLabel.text = LanguageService.stringForCurrentLanguage(FIRST(descriptor.defaultTitle, descriptor.title))
                    
                }
                
            }
            
            initCell(view)
            
            if (index < array.length - 1) {
                
                addRightBorder(view)
                
            }
            
            views.push(view)
            
            this.dataCells.push(view)
            
        })
        
        views.push(this.rightCell)
        
        
        this.cells = views
        
        
        const cellWidths = [nil].arrayByRepeating(this.cells.length)
        cellWidths.firstElement = this.sideCellsWidth
        cellWidths.lastElement = this.sideCellsWidth
        this.cellWidths = cellWidths
        
        this.cellWeights = [1].arrayByRepeating(this.cells.length)
        
    }
    
    
    
    
    
    set data(data) {
        
        this._data = data
        
        this.updateContentForCurrentData(data)
        
    }
    
    get data() {
        
        return this._data
        
    }
    
    
    private updateContentForCurrentData(data) {
        
        if (IS_NOT(data)) {
            
            return
            
        }
        
        this.descriptors.forEach((descriptor, index, array) => {
            
            const cellView = FIRST_OR_NIL(this.dataCells[index])
            
            cellView.titleLabel.text = FIRST(
                IF(descriptor.keyPath)(() => UIObject.valueForKeyPath(descriptor.keyPath, data))(),
                descriptor.defaultTitle
            )
            
            cellView.titleLabel.changesOften = YES;
            
            cellView.setNeedsLayout()
            
            if (IS(descriptor.updateCell)) {
                
                descriptor.updateCell(cellView, data)
                
            }
            
        })
        
    }
    
    boundsDidChange() {
        
        super.boundsDidChange()
    
    
        const tableView = wrapInNil(this.superview as UITableView)
        
        tableView.invalidateSizeOfRowWithIndex(this._UITableViewRowIndex)
        
        
    }
    
    
    
    
    
    layoutSubviews() {
        
        super.layoutSubviews()
        
        const padding = RootViewParameters.paddingLength
        const labelHeight = padding
        
        const bounds = this.bounds.rectangleWithInset(padding)
    
        
        
        this.backgroundView.frame = this.bounds.rectangleWithInsets(padding, padding, 0, 0)
        
        this._bottomLineView.frame = this.bounds.rectangleWithHeight(1, 1).rectangleWithInsets(padding, padding, 0, 0)
        
        
        
        
        
    }
    
    
    
    
    
    intrinsicContentHeight(constrainingWidth = 0) {
        
        
        
        
        return this.cells.map((value, index, array) => value.intrinsicContentHeight(constrainingWidth)).max();
        
        
        
    }
    
    
    
    
    
}






























