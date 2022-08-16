import {
    IF,
    IS_NOT,
    NO,
    UIKeyValueStringSorter,
    UIStringFilter, UITableView,
    UITextField,
    UITextView,
    UIView,
    UIViewBroadcastEvent, ValueOf,
    YES
} from "uicore-ts"
import { CBLocalizedTextObject } from "../CBCore/CBDataInterfaces"
import { RootViewParameters } from "../RootViewParameters"
import { CBTableHeaderView } from "./CBTableHeaderView"
import { CBTableRowView } from "./CBTableRowView"
import { CellView } from "./CellView"
import { LanguageService } from "./LanguageService"





export interface CBTableViewCellDescriptor {
    
    
    
    keyPath: string;
    title: string | CBLocalizedTextObject;
    allowSorting: boolean;
    
    // @ts-ignore
    initialOrderingState?: ValueOf<{
        
        "unordered": "unordered",
        "descending": "descending",
        "ascending": "ascending"
        
    }>;
    
    defaultTitle?: string;
    
    initCell?: (cellView: CellView) => void;
    updateCell?: (cellView: CellView, dataItem: any) => void;
    
    buttonWasPressed?: (cellView: CellView, dataItem: any) => void;
    
}


export class CBDataView extends UIView {
    
    
    
    
    
    private _descriptors: CBTableViewCellDescriptor[] = []
    
    private _filteringArray: string[] = []
    private _data: any[] = []
    
    private _filteredData: any[] = []
    
    searchTextField: UITextField
    tableHeaderView: CBTableHeaderView
    tableView: UITableView
    
    titleLabel: UITextView
    private _stringFilter = new UIStringFilter()
    private _stringSorter = new UIKeyValueStringSorter()
    
    isSearchAvailable = YES
    
    _highlightNextFilterChange = NO
    
    
    constructor(elementID?: string) {
        
        super(elementID)
        
    }
    

    initView(elementID: string, viewHTMLElement: HTMLElement, initViewData?: any) {
        
        super.initView(elementID, viewHTMLElement, initViewData)
        
        this.titleLabel = new UITextView(this.elementID + "TitleLabel", UITextView.type.header5)
        this.addSubview(this.titleLabel)
        
        
        this.searchTextField = new UITextField(this.elementID + "SearchTextField")
        this.searchTextField.placeholderText = LanguageService.stringForKey(
            "CBTableViewSearch",
            LanguageService.currentLanguageKey,
            "Search"
        )
        this.addSubview(this.searchTextField)
        
        
        this.tableHeaderView = new CBTableHeaderView(this.elementID + "TableHeaderView")
        this.tableHeaderView.orderingStateDidChange = this.sortTableData.bind(this)
        this.addSubview(this.tableHeaderView)
        
        
        this.tableView = new UITableView(this.elementID + "TableView")
        this.addSubview(this.tableView)
        
        
        
        
        this.tableView.heightForRowWithIndex =
            index => this.tableView.viewForRowWithIndex(index).intrinsicContentHeight(this.tableView.bounds.width)
        
        this.tableView.numberOfRows = () => this.filteredData.length
        
        this.tableView.newReusableViewForIdentifier = (identifier, rowIDIndex) => new CBTableRowView(
            elementID + "TableRow" + rowIDIndex
        )
        
        this.tableView.viewForRowWithIndex = (index) => {
            
            const row = this.tableView.reusableViewForIdentifier("TableRow", index) as CBTableRowView
            
            if (!row.descriptors.isEqualToArray(this._descriptors)) {
                
                row.descriptors = this._descriptors
                
            }
            
            row.data = this.filteredData[index]
            
            
            if (index % 2 == 0) {
                
                row.viewHTMLElement.classList.add("even")
                row.viewHTMLElement.classList.remove("odd")
                
            }
            else {
                
                row.viewHTMLElement.classList.add("odd")
                row.viewHTMLElement.classList.remove("even")
                
            }
            
            return row
            
        }
        
        
        
        
        
        this.searchTextField.addTargetForControlEvent(
            UITextField.controlEvent.TextChange,
            (sender, event) => {
                
                if (this.tableView.isMemberOfViewTree) {
                    
                    // noinspection JSIgnoredPromiseFromCall
                    this.updateTableDataByFiltering()
                    
                }
                
            }
        )
        
        
    }
    
    
    
    
    
    wasAddedToViewTree() {
        
        super.wasAddedToViewTree()
        
        this.updateTableDataByFiltering()
        
    }
    
    
    
    
    
    didReceiveBroadcastEvent(event: UIViewBroadcastEvent) {
        
        super.didReceiveBroadcastEvent(event)
        
        if (event.name == UIView.broadcastEventName.LanguageChanged) {
            
            this.tableView.reloadData()
            
        }
        
        
    }
    
    
    
    
    
    get descriptors(): CBTableViewCellDescriptor[] {
        return this._descriptors
    }
    
    set descriptors(descriptors: CBTableViewCellDescriptor[]) {
        
        this._descriptors = descriptors
        
        this.tableHeaderView.descriptors = descriptors
        
        this.tableView._reusableViews = {}
        
        this.updateFilteringArray()
        
        // noinspection JSIgnoredPromiseFromCall
        this.updateTableDataByFiltering()
        
        
    }
    
    
    set data(data: any[]) {
        
        this._data = data
        
        //this.filteredData = data
        
        // Form array of strings for filtering
        this.updateFilteringArray()
        
        // noinspection JSIgnoredPromiseFromCall
        this.updateTableDataByFiltering()
        
        this.setNeedsLayoutUpToRootView()
        
    }
    
    get data() {
        return this._data
    }
    
    
    private updateFilteringArray() {
        
        this._filteringArray = this.data.map(
            dataItem => this.descriptors.map(
                descriptor => dataItem[descriptor.keyPath]
            ).join(" ")
        )
        
    }
    
    
    get filteredData(): any[] {
        return this._filteredData
    }
    
    set filteredData(value: any[]) {
        
        this._filteredData = value
        
        this.tableView.reloadData()
        
        this.setNeedsLayoutUpToRootView()
        
        this.tableView.invalidateSizeOfRowWithIndex(0)
        
        this.tableView.setNeedsLayoutUpToRootView()
        
    }
    
    
    async updateTableDataByFiltering() {
        
        const { filteredIndexes } = await this._stringFilter.filteredData(
            this.searchTextField.text.replace(",", " "),
            this._filteringArray
        )
        
        const filteringResult: any[] = []
        
        filteredIndexes.forEach(index => {
            filteringResult.push(this.data[index])
        })
        
        
        // Sort the data
        const { sortedData } = await this._stringSorter.sortedData(
            filteringResult,
            this.tableHeaderView.sortingInstructions
        )
        
        const previousData = this.data
        
        this.filteredData = sortedData
        
        if (this._highlightNextFilterChange) {
            
            this.tableView.setNeedsLayout()
            
            this.tableView.highlightChanges(previousData, this.data)
            
            this._highlightNextFilterChange = NO
            
        }
        
        
    }
    
    
    boundsDidChange() {
        
        super.boundsDidChange()
        
        this.tableView.invalidateSizeOfRowWithIndex(0)
        
        this.tableView.setNeedsLayoutUpToRootView()
        
    }
    
    
    
    async sortTableData() {
        
        this.filteredData = (await this._stringSorter.sortedData(
            this.data,
            this.tableHeaderView.sortingInstructions,
            "asdasdasdasd"
        )).sortedData
        
    }
    
    
    
    
    
    layoutSubviews() {
        
        super.layoutSubviews()
        
        
        const padding = RootViewParameters.paddingLength
        const labelHeight = padding
        
        const bounds = this.bounds.rectangleWithInset(padding)
        //.rectangleWithInsets(0, 0, 0, padding * 2.5)
        
        //var borderRadius = "" + (padding * 0.25).integerValue + "px"
        
        //this.tableView.sidePadding = padding;
        
        
        this.titleLabel.frame = bounds.rectangleWithHeight(labelHeight)
        
        this.searchTextField.hidden = IS_NOT(this.isSearchAvailable)
        
        this.searchTextField.frame = this.titleLabel.frame.rectangleForNextRow(padding * 0.5)
            .rectangleWithHeight(padding * 1.5)
        
        const previousFrameFromTableHeader = IF(this.isSearchAvailable)(() => this.searchTextField.frame)
            .ELSE_IF(this.titleLabel.text)(() => this.titleLabel.frame)
            .ELSE(() => this.bounds.rectangleWithHeight(0))
        
        this.tableHeaderView.frame = this.bounds.rectangleWithInsets(
            0,
            0,
            0,
            previousFrameFromTableHeader.max.y + padding
        ).rectangleWithHeight(50)
        
        
        this.tableView.frame = this.bounds.rectangleWithInsets(
            0,
            0,
            padding,
            this.tableHeaderView.frame.max.y
        )
        
        
        
        
        
    }
    
    
    
    
    
    intrinsicContentHeight(constrainingWidth: number = 0): number {
        
        const padding = RootViewParameters.paddingLength
        const labelHeight = padding
        
        var result = padding * 2 + padding * 2 + padding + 50 + padding +
            this.tableView.intrinsicContentHeight(constrainingWidth) + padding * 2.5
        
        return result
        
    }
    
    
    
    
    
}

































