import {
    FIRST,
    IS,
    IS_DEFINED,
    IS_NOT,
    MAKE_ID,
    nil,
    NO,
    UIButton,
    UIColor,
    UIRoute,
    UITableView,
    UITextArea,
    UITextView,
    UIView,
    UIViewController,
    YES
} from "uicore-ts"
import { CBColor } from "./CBCore/CBColor"
import { CBCore } from "./CBCore/CBCore"
import { CBDropdownData, CBDropdownDataItem } from "./CBCore/CBDataInterfaces"
import { SocketClient } from "./CBCore/CBSocketClient"
import { CBButton } from "./Custom components/CBButton"
import { CBCheckbox } from "./Custom components/CBCheckbox"
import { CBDialogViewShower } from "./Custom components/CBDialogViewShower"
import { CBTextField } from "./Custom components/CBTextField"
import { LanguageService } from "./Custom components/LanguageService"
import { SearchableDropdown } from "./Custom components/SearchableDropdown"





export class InternalDropdownSettingsViewController extends UIViewController {
    
    
    titleLabel: UITextView
    loadButton: UIButton
    dropdownCodeTextField: CBTextField
    tableView: UITableView
    textArea: UITextArea
    dropdown: SearchableDropdown<undefined>
    saveButton: CBButton
    deleteButton: CBButton
    addButton: CBButton
    itemTitleOrAttachedObjectTextArea: UITextArea
    isASectionCheckbox: CBCheckbox
    downButton: CBButton
    upButton: CBButton
    itemTitleJSONLabel: UITextView
    dropdownCodesTextArea: UITextArea
    deleteDropdownButton: CBButton
    
    itemCodeTextField: CBTextField
    clearDropdownButton: CBButton
    dataTextArea: UITextArea
    dataTextJSONLabel: UITextView
    loadPlainDataButton: CBButton
    loadJSONDataButton: CBButton
    itemTitleCheckbox: CBCheckbox
    itemAttachedObjectCheckbox: CBCheckbox
    
    
    constructor(view) {
        
        super(view)
        
        // Code for further setup if necessary
        
        this.loadSubviews()
        
    }
    
    
    static readonly routeComponentName = "internal_dropdown_settings"
    
    static readonly ParameterIdentifierName = {}
    
    
    loadSubviews() {
        
        
        this.view.backgroundColor = UIColor.whiteColor
        
        
        this.titleLabel = new UITextView(this.view.elementID + "TitleLabel", UITextView.type.header2)
        this.titleLabel.text = "Internal dropdown settings"
        this.view.addSubview(this.titleLabel)
        
        
        
        this.dropdownCodeTextField = new CBTextField(this.view.elementID + "DropdownCodeTextField")
        this.dropdownCodeTextField.placeholderText = "Dropdown code"
        this.view.addSubview(this.dropdownCodeTextField)
        
        this.dropdownCodesTextArea = new UITextArea(this.view.elementID + "DropdownCodesTextArea")
        this.dropdownCodesTextArea.placeholderText = "Available dropdown codes"
        this.view.addSubview(this.dropdownCodesTextArea)
        
        
        this.loadButton = new CBButton(this.view.elementID + "LoadButton")
        this.loadButton.titleLabel.text = "Load"
        this.view.addSubview(this.loadButton)
        
        this.saveButton = new CBButton(this.view.elementID + "SaveButton")
        this.saveButton.titleLabel.setText("internalDropdownSettingsViewControllerSaveButton", "Save")
        this.view.addSubview(this.saveButton)
        
        
        // this.textArea = new UITextArea(this.view.elementID + "TextArea")
        // this.view.addSubview(this.textArea)
        
        
        this.dropdown = new SearchableDropdown(this.view.elementID + "SearchableDropdown")
        this.dropdown._controlEventTargets[UIView.controlEvent.PointerUpInside] = []
        this.dropdown._controlEventTargets[UIView.controlEvent.EnterDown] = []
        this.dropdown._dialogView = nil
        this.dropdown.isSingleSelection = YES
        this.dropdown._rightImageView.imageSource = nil
        this.dropdown.keepFocusedRowVisible = NO
        this.view.addSubview(this.dropdown)
        
        this.dropdown._tableView.style.borderWidth = "1px"
        this.dropdown._tableView.style.borderStyle = "solid"
        this.dropdown._tableView.style.borderColor = CBColor.primaryContentColor.stringValue
        this.view.addSubview(this.dropdown._tableView)
        
        
        this.addButton = new CBButton(this.view.elementID + "AddButton")
        this.addButton.titleLabel.text = "Add row"
        this.addButton.setBackgroundColorsWithNormalColor(UIColor.greenColor)
        this.view.addSubview(this.addButton)
        
        this.deleteButton = new CBButton(this.view.elementID + "DeleteButton")
        this.deleteButton.titleLabel.text = "Delete row"
        this.deleteButton.setBackgroundColorsWithNormalColor(UIColor.redColor)
        this.view.addSubview(this.deleteButton)
        
        
        this.deleteDropdownButton = new CBButton(this.view.elementID + "DeleteDropdownButton")
        this.deleteDropdownButton.titleLabel.text = "Delete dropdown"
        this.deleteDropdownButton.setBackgroundColorsWithNormalColor(UIColor.redColor)
        this.view.addSubview(this.deleteDropdownButton)
        
        this.clearDropdownButton = new CBButton(this.view.elementID + "ClearDropdownButton")
        this.clearDropdownButton.titleLabel.text = "Clear dropdown"
        this.clearDropdownButton.setBackgroundColorsWithNormalColor(UIColor.redColor)
        this.view.addSubview(this.clearDropdownButton)
        
        
        
        // Selecting of purpose of itemtitleTextArea
        this.itemTitleCheckbox = new CBCheckbox(this.view.elementID + "ItemTitleCheckbox")
        this.itemAttachedObjectCheckbox = new CBCheckbox(this.view.elementID + "ItemTitleCheckbox")
        
        this.itemTitleCheckbox.titleLabel.text = "Item title"
        this.itemAttachedObjectCheckbox.titleLabel.text = "Attached object"
        
        this.itemTitleCheckbox.selected = YES
        
        this.view.addSubviews([this.itemTitleCheckbox, this.itemAttachedObjectCheckbox])
        
        
        
        this.itemTitleOrAttachedObjectTextArea = new UITextArea(this.view.elementID +
            "ItemTitleOrAttachedObjectTextArea")
        this.itemTitleOrAttachedObjectTextArea.placeholderText = "Title"
        this.view.addSubview(this.itemTitleOrAttachedObjectTextArea)
        
        this.itemTitleJSONLabel = new UITextView(this.view.elementID + "ItemTitleJSONLabel")
        this.view.addSubview(this.itemTitleJSONLabel)
        
        this.itemTitleDidChange()
        
        
        this.isASectionCheckbox = new CBCheckbox(this.view.elementID + "IsASectionCheckbox")
        this.isASectionCheckbox.titleLabel.text = "Is a section"
        this.view.addSubview(this.isASectionCheckbox)
        
        
        
        this.itemCodeTextField = new CBTextField(this.view.elementID + "ItemCodeTextField")
        this.itemCodeTextField.placeholderText = "Item code"
        this.view.addSubview(this.itemCodeTextField)
        
        
        
        this.downButton = new CBButton(this.view.elementID + "DownButton")
        this.downButton.titleLabel.text = "Down"
        this.view.addSubview(this.downButton)
        
        this.upButton = new CBButton(this.view.elementID + "UpButton")
        this.upButton.titleLabel.text = "Up"
        this.view.addSubview(this.upButton)
        
        
        
        this.dataTextJSONLabel = new UITextView(this.view.elementID + "DataTextJSONLabel")
        this.dataTextJSONLabel.text = "Data in JSON format"
        this.view.addSubview(this.dataTextJSONLabel)
        
        this.dataTextArea = new UITextArea(this.view.elementID + "DataTextArea")
        this.dataTextArea.placeholderText = "Data in JSON format"
        this.view.addSubview(this.dataTextArea)
        
        this.loadPlainDataButton = new CBButton(this.view.elementID + "LoadPlainDataButton")
        this.loadPlainDataButton.titleLabel.text = "Load plain data"
        this.view.addSubview(this.loadPlainDataButton)
        
        this.loadJSONDataButton = new CBButton(this.view.elementID + "LoadJSONDataButton")
        this.loadJSONDataButton.titleLabel.text = "Load JSON data"
        this.view.addSubview(this.loadJSONDataButton);
        
        
        
        
        
        [
            this.itemTitleCheckbox, this.itemAttachedObjectCheckbox
        ].forEach(function (
            this: InternalDropdownSettingsViewController,
            checkbox: CBCheckbox,
            index: number,
            array: CBCheckbox[]
        ) {
            
            checkbox.addTargetForControlEvents([
                CBCheckbox.controlEvent.EnterDown, CBCheckbox.controlEvent.SelectionChange
            ], function (this: InternalDropdownSettingsViewController, sender: CBCheckbox, event: Event) {
                
                [
                    this.itemTitleCheckbox, this.itemAttachedObjectCheckbox
                ].forEach(function (checkboxObject, index, array) {
                    
                    checkboxObject.selected = (checkboxObject == sender)
                    
                })
                
                this.updateitemDetailsView()
                
            }.bind(this))
            
            
            
        }.bind(this))
        
        
        
        
        
        this.downButton.addTargetForControlEvent(
            UIView.controlEvent.PointerUpInside,
            function (this: InternalDropdownSettingsViewController, sender: UIButton, event: Event) {
    
                const data = this.dropdown.drawingData
    
                const rowIndex = this.dropdown.selectedIndices.firstElement
    
                if (this.dropdown.selectedData.firstElement && rowIndex < data.length - 1) {
    
                    const row = data[rowIndex]
    
                    data.removeElementAtIndex(rowIndex)
                    
                    data.insertElementAtIndex(rowIndex + 1, row)
                    
                    this.dropdown.selectedIndices[0] = rowIndex + 1
                    
                    this.dropdown._drawingData = data
                    
                    this.reloadTableData()
                    
                }
                
                
            }.bind(this)
        )
        
        this.upButton.addTargetForControlEvent(
            UIView.controlEvent.PointerUpInside,
            function (this: InternalDropdownSettingsViewController, sender: UIButton, event: Event) {
    
                const data = this.dropdown.drawingData
    
                const rowIndex = this.dropdown.selectedIndices.firstElement
    
                if (this.dropdown.selectedData.firstElement && rowIndex > 0) {
    
                    const row = data[rowIndex]
    
                    data.removeElementAtIndex(rowIndex)
                    
                    data.insertElementAtIndex(rowIndex - 1, row)
                    
                    this.dropdown.selectedIndices[0] = rowIndex - 1
                    
                    this.dropdown._drawingData = data
                    
                    this.reloadTableData()
                    
                }
                
                
            }.bind(this)
        )
        
        
        this.dropdown.addTargetForControlEvent(
            SearchableDropdown.controlEvent.SelectionDidChange,
            function (
                this: InternalDropdownSettingsViewController,
                sender: SearchableDropdown<undefined>,
                event: Event
            ) {
                
                this.updateitemDetailsView()
                
            }.bind(this)
        )
        
        this.isASectionCheckbox.addTargetForControlEvent(
            CBCheckbox.controlEvent.SelectionChange,
            function (this: InternalDropdownSettingsViewController, sender: CBCheckbox, event: Event) {
    
                const selectedItem: CBDropdownDataItem<undefined> = this.dropdown.selectedData.firstElement || nil
    
                selectedItem.isADropdownDataSection = sender.selected
                selectedItem.isADropdownDataRow = IS_NOT(sender.selected)
                
                
                this.reloadTableData()
                
                
            }.bind(this)
        )
        
        this.itemCodeTextField.textField.addTargetForControlEvent(
            UITextArea.controlEvent.TextChange,
            function (this: InternalDropdownSettingsViewController, sender: CBTextField, event: Event) {
    
                const selectedItem: CBDropdownDataItem<undefined> = this.dropdown.selectedData.firstElement || nil
    
                selectedItem.itemCode = this.itemCodeTextField.text
                
            }.bind(this)
        )
        
        this.itemTitleOrAttachedObjectTextArea.addTargetForControlEvent(
            UITextArea.controlEvent.TextChange,
            function (this: InternalDropdownSettingsViewController, sender: CBTextField, event: Event) {
                
                if (this.itemTitleCheckbox.selected) {
                    
                    this.itemTitleDidChange()
                    
                }
                else {
                    
                    this.itemAttachedObjectDidChange()
                    
                }
                
                
                
                this.reloadTableData()
                
                
            }.bind(this)
        )
        
        
        //this.loadSubjectData()
        
        this.updateAvailableCodes()
        
        
        this.loadButton.addTargetForControlEvent(
            UIView.controlEvent.PointerUpInside,
            function (this: InternalDropdownSettingsViewController, sender: UIButton, event: Event) {
                
                this.loadData()
                
            }.bind(this)
        )
        
        this.saveButton.addTargetForControlEvent(
            UIView.controlEvent.PointerUpInside,
            function (this: InternalDropdownSettingsViewController, sender: UIButton, event: Event) {
                
                CBCore.sharedInstance.socketClient.sendMessageForKey(
                    "RetrieveDropdownCodes",
                    nil,
                    function (this: InternalDropdownSettingsViewController, codes: string[]) {
                        
                        
                        
                        this.saveData()
                        
                        
                    }.bind(this)
                )
                
                
                
            }.bind(this)
        )
        
        this.addButton.addTargetForControlEvent(
            UIView.controlEvent.PointerUpInside,
            function (this: InternalDropdownSettingsViewController, sender: UIButton, event: Event) {
    
                const title = JSON.parse(this.itemTitleOrAttachedObjectTextArea.text)
    
                if (IS_NOT(LanguageService.stringForCurrentLanguage(title))) {
                    
                    title[LanguageService.defaultLanguageKey] = "<Title>"
                    
                }
    
    
                const itemID = MAKE_ID();
    
                const dataRow: CBDropdownDataItem<undefined> = {
        
                    _id: itemID,
                    title: title,
                    isADropdownDataRow: !this.isASectionCheckbox.selected,
                    isADropdownDataSection: this.isASectionCheckbox.selected,
        
                    attachedObject: undefined,
        
                    itemCode: nil,
                    dropdownCode: (this.dropdown.selectedData.firstElement || {} as any).dropdownCodes
        
                }
    
                const rowIndex = this.dropdown.selectedIndices.firstElement
    
                if (IS_DEFINED(rowIndex)) {
                    
                    this.dropdown.drawingData.insertElementAtIndex(rowIndex + 1, dataRow)
                    
                    this.reloadTableData()
                    
                }
                else {
                    
                    this.dropdown.drawingData.push(dataRow)
                    
                    this.reloadTableData()
                    
                    this.dropdown._tableView.scrollToBottom()
                    
                }
                
                
                
                
            }.bind(this)
        )
        
        this.deleteButton.addTargetForControlEvent(
            UIView.controlEvent.PointerUpInside,
            function (this: InternalDropdownSettingsViewController, sender: UIButton, event: Event) {
    
                const rowIndex = this.dropdown.selectedIndices.firstElement
    
                if (IS_DEFINED(rowIndex)) {
                    
                    this.dropdown.drawingData.removeElementAtIndex(rowIndex)
                    
                    this.dropdown.selectedData.removeElementAtIndex(0)
                    this.dropdown.selectedIndices.removeElementAtIndex(0)
                    
                    this.dropdown.selectionDidChange(this.dropdown.selectedData)
                    
                }
                
                this.reloadTableData()
                
            }.bind(this)
        )
        
        this.deleteDropdownButton.addTargetForControlEvent(
            UIView.controlEvent.PointerUpInside,
            function (this: InternalDropdownSettingsViewController, sender: UIButton, event: Event) {
                
                
                if (this.dropdownCodeTextField.text && confirm("Are you sure you want to delete this dropdown?")) {
                    
                    if (this.dropdownCodeTextField.text &&
                        confirm("This will REMOVE THE DROPDOWN FROM THE SERVER, are you definitely sure?")) {
                        
                        CBCore.sharedInstance.socketClient.sendMessageForKey(
                            "DeleteDropdownDataForCode",
                            this.dropdownCodeTextField.text,
                            function (this: InternalDropdownSettingsViewController) {
                                
                                this.updateAvailableCodes()
                                
                            }.bind(this)
                        )
                        
                        this.dropdownCodeTextField.text = nil
                        
                        this.dropdown.data = []
                        
                        this.updateitemDetailsView()
                        
                    }
                    
                }
                
            }.bind(this)
        )
        
        this.clearDropdownButton.addTargetForControlEvent(
            UIView.controlEvent.PointerUpInside,
            function (this: InternalDropdownSettingsViewController, sender: UIButton, event: Event) {
                
                
                if (this.dropdownCodeTextField.text && confirm("Are you sure you want to clear this dropdown?")) {
                    
                    this.dropdown.data = []
                    
                    this.dropdown.selectedData = []
                    
                    this.dropdown.selectedIndices = []
                    
                    this.updateitemDetailsView()
                    
                }
                
            }.bind(this)
        )
        
        
        this.loadPlainDataButton.addTargetForControlEvent(
            UIView.controlEvent.PointerUpInside,
            function (this: InternalDropdownSettingsViewController, sender: UIButton, event: Event) {
                
                this.loadPlainData()
                
            }.bind(this)
        )
        
        this.loadJSONDataButton.addTargetForControlEvent(
            UIView.controlEvent.PointerUpInside,
            function (this: InternalDropdownSettingsViewController, sender: UIButton, event: Event) {
                
                this.loadJSONData()
                
            }.bind(this)
        )
        
        
        
        
        
    }
    
    
    
    
    
    reloadTableData() {
        
        this.dropdown._tableView.reloadData()
    
    
        const dataToShow = {}
    
    
        this.dropdown.drawingData.forEach(function (dataItem, index, array) {
            
            dataToShow[FIRST(dataItem.itemCode, dataItem._id)] = dataItem.title
            
        })
        
        
        this.dataTextArea.text = JSON.stringify(dataToShow, null, 2)
        
    }
    
    
    
    
    
    async updateAvailableCodes() {
    
    
        var { result: codes } = await SocketClient.RetrieveDropdownCodes()
    
        this.dropdownCodesTextArea.text = "Saved codes: " + JSON.stringify(codes)
        
        if (codes.length && IS_NOT(this.dropdownCodeTextField.text)) {
            
            this.dropdownCodeTextField.text = codes.firstElement
            
            this.loadData()
            
        }
        
        
        
        
    }
    
    
    updateitemDetailsView() {
    
        const selectedItem: CBDropdownDataItem<undefined> = this.dropdown.selectedData.firstElement || nil
    
    
        if (IS(selectedItem)) {
            
            if (this.itemTitleCheckbox.selected) {
                
                this.itemTitleOrAttachedObjectTextArea.text = JSON.stringify(selectedItem.title, null, 2)
                this.itemTitleDidChange()
                
            }
            else {
                
                this.itemTitleOrAttachedObjectTextArea.text = JSON.stringify(selectedItem.attachedObject, null, 2)
                this.itemAttachedObjectDidChange()
                
            }
            
            
            
            this.itemCodeTextField.text = selectedItem.itemCode
            
        }
        
        this.isASectionCheckbox.selected = IS(selectedItem.isADropdownDataSection)
        
        
        
    }
    
    async loadData() {
        
        if (IS_NOT(this.dropdownCodeTextField.text)) {
            
            this.loadSubjectData()
            
            return
            
        }
    
        var { result: responseMessage } = await SocketClient.RetrieveDropdownDataForCode(this.dropdownCodeTextField.text)
    
        this._triggerLayoutViewSubviews()
        
        if (IS(responseMessage)) {
            
            CBDialogViewShower.alert("Loaded data.")
            
        }
        else {
            
            CBDialogViewShower.alert("Failed to load data.")
            
            return
            
        }
    
        const dropdownData: CBDropdownDataItem<undefined>[] = []
    
        responseMessage.data.forEach(function (sectionOrRow, index, array) {
            
            if (sectionOrRow.isADropdownDataSection) {
    
    
                const dataSection: CBDropdownDataItem<undefined> = {
        
                    _id: sectionOrRow._id,
                    title: sectionOrRow.title,
                    rowsData: [],
                    isADropdownDataSection: YES,
                    isADropdownDataRow: NO,
        
                    attachedObject: sectionOrRow.attachedObject,
        
                    itemCode: sectionOrRow.itemCode,
                    dropdownCode: sectionOrRow.dropdownCode
        
                }
    
                const rowsData = dataSection.rowsData
    
                sectionOrRow.rowsData.forEach(function (rowData, index, array) {
                    
                    rowsData.push({
                        
                        _id: rowData._id,
                        title: rowData.title,
                        isADropdownDataSection: NO,
                        isADropdownDataRow: YES,
                        
                        attachedObject: rowData.attachedObject,
                        
                        itemCode: rowData.itemCode,
                        dropdownCode: rowData.dropdownCode
                        
                    })
                    
                })
                
                dataSection.rowsData = rowsData
                
                dropdownData.push(dataSection)
                
            }
            else {
                
                dropdownData.push({
                    
                    _id: sectionOrRow._id,
                    title: sectionOrRow.title,
                    attachedObject: sectionOrRow.attachedObject,
                    isADropdownDataRow: YES,
                    
                    itemCode: sectionOrRow.itemCode,
                    dropdownCode: sectionOrRow.dropdownCode
                    
                } as any)
                
            }
            
            
            
            
            
        })
        
        this.dropdown.selectedData.removeElementAtIndex(0)
        this.dropdown.selectedIndices.removeElementAtIndex(0)
        
        this.dropdown.data = dropdownData
        
        this.reloadTableData()
        
        this.updateitemDetailsView()
        
        
        
        
        
    }
    
    
    
    
    
    async saveData() {
    
    
        const uploadData: CBDropdownData<undefined> = {
        
            dropdownCode: this.dropdownCodeTextField.text,
            data: []
        
        } as any
    
        var currentRowsTarget = uploadData.data
    
        this.dropdown.drawingData.forEach(function (
            this: InternalDropdownSettingsViewController,
            item: CBDropdownDataItem<undefined>,
            index: number,
            array: CBDropdownDataItem<undefined>[]
        ) {
            
            
            
            if ((item as CBDropdownDataItem<undefined>).isADropdownDataSection) {
                
                
                currentRowsTarget = []
                
                uploadData.data.push({
                    
                    title: item.title,
                    attachedObject: item.attachedObject,
                    rowsData: currentRowsTarget,
                    isADropdownDataSection: YES,
                    isADropdownDataRow: NO,
                    
                    itemCode: FIRST(item.itemCode, item._id),
                    dropdownCode: uploadData.dropdownCode
                    
                } as any)
                
                
                
            }
            else {
                
                
                currentRowsTarget.push({
                    
                    
                    title: item.title,
                    attachedObject: item.attachedObject,
                    isADropdownDataSection: NO,
                    isADropdownDataRow: YES,
                    
                    itemCode: FIRST(item.itemCode, item._id),
                    dropdownCode: uploadData.dropdownCode
                    
                } as any)
                
                
            }
            
            
        }.bind(this))
        
        
        // Send the data to server to be saved
    
        var { result: response } = await SocketClient.SaveDropdownData(uploadData)
    
        this.updateAvailableCodes()
        
        if (IS(response)) {
            
            CBDialogViewShower.alert("Saved successfully.")
            
            this.loadData()
            
        }
        else {
            
            CBDialogViewShower.alert("Failed to save dropdown data.")
            
        }
        
        
        
        
        
    }
    
    
    
    
    
    loadPlainData() {
    
    
        const drawingData: CBDropdownDataItem<undefined>[] = []
    
        const lines = this.dataTextArea.text.split("\n")
    
    
    
        lines.forEach(function (
            this: InternalDropdownSettingsViewController,
            line: string,
            index: number,
            array: string[]
        ) {
    
    
    
            const lineItems = line.trim().split(" ")
    
    
    
            drawingData.push({
                
                _id: "" + index,
                title: {
                    
                    "en": lineItems.lastElement
                    
                },
                
                isADropdownDataRow: YES,
                isADropdownDataSection: NO,
                
                attachedObject: undefined,
                
                itemCode: lineItems.firstElement,
                
                dropdownCode: this.dropdownCodeTextField.text
                
            })
            
            
        }.bind(this))
        
        
        this.dropdown._drawingData = drawingData
        this.dropdown._isDrawingDataValid = YES
        
        this.reloadTableData()
        
        if (this.dropdown.selectedIndices.length) {
            
            this.dropdown._selectedData = [this.dropdown.drawingData[this.dropdown.selectedIndices.firstElement]]
            
        }
        
        
        
        this.updateitemDetailsView()
        
        
        
        
    }
    
    
    
    
    
    loadJSONData() {
    
    
        const drawingData: CBDropdownDataItem<undefined>[] = []
    
    
        var itemTitles: {
        
            [x: string]: {
            
                [x: string]: string;
            
            }
        
        } = {}
    
    
    
        try {
            
            itemTitles = JSON.parse(this.dataTextArea.text)
            
        } catch (exception) {
            
            CBDialogViewShower.alert(exception)
            
            return
            
        }
    
    
    
    
        var index = 0
    
        itemTitles.forEach(function (this: InternalDropdownSettingsViewController, itemTitle: {
            
            [x: string]: string;
            
        }, itemCode: string) {
            
            drawingData.push({
                
                _id: "" + index,
                title: itemTitle,
                
                isADropdownDataRow: YES,
                isADropdownDataSection: NO,
                
                attachedObject: undefined,
                
                itemCode: itemCode,
                
                dropdownCode: this.dropdownCodeTextField.text
                
            })
            
            index = index + 1
            
        }.bind(this))
        
        
        this.dropdown._drawingData = drawingData
        this.dropdown._isDrawingDataValid = YES
        
        this.reloadTableData()
        
        if (this.dropdown.selectedIndices.length) {
            
            this.dropdown._selectedData = [this.dropdown.drawingData[this.dropdown.selectedIndices.firstElement]]
            
        }
        
        this.updateitemDetailsView()
        
        
        
        
    }
    
    
    
    
    
    itemTitleDidChange() {
    
        const selectedItem: CBDropdownDataItem<undefined> = this.dropdown.selectedData.firstElement || nil
    
        if (IS_NOT(this.itemTitleOrAttachedObjectTextArea.text) || this.itemTitleOrAttachedObjectTextArea.text ==
            "undefined") {
            
            
            this.itemTitleOrAttachedObjectTextArea.text = "{  }"
            
            
        }
        
        
        
        try {
    
            const selectedItemTitle = JSON.parse(this.itemTitleOrAttachedObjectTextArea.text)
    
            if (selectedItemTitle instanceof Object && !(selectedItemTitle instanceof Array)) {
                
                this.itemTitleJSONLabel.textColor = CBColor.primaryContentColor
                this.itemTitleJSONLabel.text = "No issues detected"
                
                //this.itemtitleTextArea.text = JSON.stringify(selectedItemTitle, null, 2)
                
                selectedItem.title = selectedItemTitle
                
            }
            else {
                
                this.itemTitleJSONLabel.textColor = UIColor.redColor
                this.itemTitleJSONLabel.text = "JSON has to describe a CBLocalizedTextObject."
                
            }
            
            
            
        } catch (error) {
            
            this.itemTitleJSONLabel.text = error.message
            this.itemTitleJSONLabel.textColor = UIColor.redColor
            
        }
        
        
        
    }
    
    
    
    
    
    itemAttachedObjectDidChange() {
    
        const selectedItem: CBDropdownDataItem<undefined> = this.dropdown.selectedData.firstElement || nil
    
        if (IS_NOT(this.itemTitleOrAttachedObjectTextArea.text) || this.itemTitleOrAttachedObjectTextArea.text ==
            "undefined") {
            
            
            this.itemTitleOrAttachedObjectTextArea.text = "{ undefined }"
            
            
        }
        
        
        
        try {
    
            var selectedItemAttachedObject
    
            if (this.itemTitleOrAttachedObjectTextArea.text != "{ undefined }") {
                
                selectedItemAttachedObject = JSON.parse(this.itemTitleOrAttachedObjectTextArea.text)
                
            }
            
            
            
            if (selectedItemAttachedObject == null ||
                (selectedItemAttachedObject instanceof Object && !(selectedItemAttachedObject instanceof Array))) {
                
                this.itemTitleJSONLabel.textColor = CBColor.primaryContentColor
                this.itemTitleJSONLabel.text = "No issues detected"
                
                //this.itemtitleTextArea.text = JSON.stringify(selectedItemTitle, null, 2)
                
                selectedItem.attachedObject = selectedItemAttachedObject
                
            }
            else {
                
                this.itemTitleJSONLabel.textColor = UIColor.redColor
                this.itemTitleJSONLabel.text = "JSON has to describe an object."
                
            }
            
            
            
        } catch (error) {
            
            this.itemTitleJSONLabel.text = error.message
            this.itemTitleJSONLabel.textColor = UIColor.redColor
            
        }
        
        
        
    }
    
    
    
    
    
    loadSubjectData() {
        
    
        
    }
    
    
    
    
    
    async viewDidAppear() {
        
    
        
    }
    
    
    async viewWillDisappear() {
        
        
        
    }
    
    
    
    
    
    async handleRoute(route: UIRoute) {
        
        super.handleRoute(route)
        const inquiryComponent = route.componentWithName(InternalDropdownSettingsViewController.routeComponentName)
    
    
        this.reloadTableData()
        
        
        
        
    }
    
    
    
    
    
    updateViewConstraints() {
        
        super.updateViewConstraints()
        
    }
    
    
    
    updateViewStyles() {
        
        super.updateViewStyles()
        
    }
    
    
    
    viewDidLayoutSubviews() {
        
        super.viewDidLayoutSubviews()
        
    }
    
    
    
    
    
    layoutViewSubviews() {
        
        super.layoutViewSubviews()
    
        const padding = this.core.paddingLength
        const labelHeight = padding
    
        // View bounds
        const bounds = this.view.bounds.rectangleWithInset(padding)
    
        this.titleLabel.frame = bounds.rectangleWithHeight(labelHeight * 2)
    
        var rowFrame = this.titleLabel.frame.rectangleForNextRow(padding)
        rowFrame.distributeViewsAlongWidth([this.dropdownCodeTextField, this.loadButton, this.saveButton], [
            2, 1, 1
        ], padding)
        
        rowFrame = rowFrame.rectangleForNextRow(padding, labelHeight * 5)
        this.dropdownCodesTextArea.frame = rowFrame
        
        rowFrame = rowFrame.rectangleForNextRow(padding, labelHeight * 2)
        this.dropdown.frame = rowFrame.rectangleWithWidth(bounds.width * 0.5 - padding * 0.5)
        
        this.dropdown._tableView.frame = this.dropdown.frame.rectangleForNextRow(padding, 500)
        
        this.dropdown._tableView.setMargins(0, 0, padding, 0)
        
        
        
        
        var deleteAddFrame = this.dropdown.frame.rectangleForNextColumn(padding * 0.5, this.dropdown.frame.width +
            padding * 0.5)
        
        deleteAddFrame.distributeViewsAlongWidth([this.deleteButton, this.addButton], 1, padding)
        
        this.itemCodeTextField.frame = deleteAddFrame.rectangleForNextRow(padding)
        
        var itemTextAreaPurposesFrame = this.itemCodeTextField.frame.rectangleForNextRow(padding, labelHeight * 2)
        
        itemTextAreaPurposesFrame.distributeViewsEquallyAlongWidth([
            this.itemTitleCheckbox, this.itemAttachedObjectCheckbox
        ], padding)
        
        this.itemTitleOrAttachedObjectTextArea.frame = itemTextAreaPurposesFrame.rectangleForNextRow(
            padding,
            labelHeight *
            11
        )
        
        this.itemTitleJSONLabel.frame = this.itemTitleOrAttachedObjectTextArea.frame.rectangleForNextRow(
            padding,
            labelHeight
        )
        
        this.isASectionCheckbox.frame = this.itemTitleJSONLabel.frame.rectangleForNextRow(padding, labelHeight)
    
    
        const downUpFrame = this.isASectionCheckbox.frame.rectangleForNextRow(padding, labelHeight * 2)
    
        downUpFrame.distributeViewsAlongWidth([this.downButton, this.upButton], 1, padding)
        
        
        downUpFrame.rectangleForNextRow(padding).distributeViewsEquallyAlongWidth([
            this.deleteDropdownButton, this.clearDropdownButton
        ], padding)
        
        
        this.dataTextJSONLabel.frame = this.dropdownCodesTextArea.frame.rectangleWithY(this.dropdown._tableView.frame.max.y +
            padding).rectangleWithHeight(labelHeight)
        
        this.dataTextArea.frame = this.dataTextJSONLabel.frame.rectangleForNextRow(padding, 500)
        
        this.dataTextArea.frame.rectangleForNextRow(padding, labelHeight *
            2).distributeViewsEquallyAlongWidth([this.loadPlainDataButton, this.loadJSONDataButton], padding)
        
        this.loadPlainDataButton.setMargins(0, 0, padding, 0)
        
        
        
        
    }
    
    
    
    
    
}








































































