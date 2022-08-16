import { ObjectID } from "bson"
import { Application } from "express"
import { AdministratorRightsModel, DropdownDataItemModel, DropdownDataModel, LanguageItemModel } from "../models"

import * as mongoose from "mongoose"
import "../Extensions"

import { CBDocument } from "../TypeUtil"
import {
    CBDropdownData,
    CBDropdownDataItem,
    CBLanguageItem,
    CBReferenceID,
    CBUserProfile
} from "../webclient/scripts/CBCore/CBDataInterfaces"
import { RoutesController } from "./RoutesController"
import { SocketController } from "./SocketController"
import SocketSession from "./SocketSession"


export class InternalSettingsController extends RoutesController {
    
    private static _instance: InternalSettingsController
    
    private _dropdownDataResponses: {
        [x: string]: {
            hash: string;
            data: CBDropdownData<any>;
        }
    } = {}
    
    _languagesValues: any
    
    
    public registerRoutes() {
        
        const targets = SocketController.sharedInstance.messageTargets
        
        targets.AreCBInternalSettingsAvailableForCurrentUser = async (message, socketSession, respondWithMessage) => {
            await respondWithMessage(await this.isUserAnAdministrator(socketSession.userProfile))
        }
        
        targets.RetrieveLanguageData = async (message, socketSession, respondWithMessage) => {
            
            if (await this.isUserAnAdministrator(socketSession.userProfile)) {
                
                try {
                    
                    const startTime = Date.now()
                    
                    const result = await this.retrieveLanguagesValues()
                    
                    console.log("Retrieving language data took " + (Date.now() - startTime) + "ms.")
                    
                    respondWithMessage(result)
                    
                } catch (error) {
                    
                    respondWithMessage({})
                    
                }
                
            }
            
        }
        
        targets.DeleteLanguageWithKey = async (languageKey, socketSession, respondWithMessage) => {
            
            if (await this.isUserAnAdministrator(socketSession.userProfile)) {
                
                try {
                    
                    
                    
                    await LanguageItemModel.deleteMany({ languageKey: languageKey })
                    
                    // Sending completion response
                    respondWithMessage(await this.retrieveLanguagesValues())
                    
                } catch (error) {
                    
                    respondWithMessage(null)
                    
                }
                
            }
            
        }
        
        targets.SaveLanguagesData = async (languagesData, socketSession, respondWithMessage) => {
            
            if (await this.isUserAnAdministrator(socketSession.userProfile)) {
                
                const startDate = Date.now()
                
                
                // Actual saving
                
                try {
                    
                    
                    const languageItems: CBLanguageItem[] = [];
                    
                    (languagesData as any).forEachValue((
                        languageData: { [key: string]: string },
                        languageKey: string
                    ) => {
                        
                        (languageData as any).forEachValue((value: string, key: string) => {
                            
                            languageItems.push({
                                
                                value: value,
                                languageKey: languageKey,
                                itemKey: key
                                
                            })
                            
                            
                        })
                        
                        
                    })
                    
                    const itemIDsInUse: CBReferenceID[] = []
                    
                    for (let i = 0; i < languageItems.length; i++) {
                        
                        const item = languageItems[i]
                        
                        const languageItem = (await LanguageItemModel.findOne({
                            
                            languageKey: item.languageKey,
                            itemKey: item.itemKey
                            
                        })) || new LanguageItemModel(item)
                        
                        languageItem.value = item.value
                        
                        itemIDsInUse.push((await languageItem.save()).id)
                        
                    }
                    
                    
                    await LanguageItemModel.deleteMany({
                        
                        _id: { $nin: itemIDsInUse }
                        
                    })
                    
                    
                    this._languagesValues = null
                    
                    
                    console.log("Saving language data took " + (Date.now() - startDate) + "ms.")
                    
                    // Sending response
                    respondWithMessage(await this.retrieveLanguagesValues())
                    
                } catch (error) {
                    
                    console.log(error)
                    
                    respondWithMessage.sendErrorResponse(error)
                    
                }
                
            }
            
        }
        
        
        targets.RetrieveDropdownCodes = async (dropdownCode, socketSession, respondWithMessage) => {
            
            if (await this.isUserAnAdministrator(socketSession.userProfile)) {
                
                try {
                    
                    const startTime = Date.now()
                    
                    const result = (await DropdownDataModel.find()).map((
                        value: CBDocument<CBDropdownData<any>>
                    ) => {
                        return value.dropdownCode
                    })
                    
                    console.log("Retrieving dropdown data took " + (Date.now() - startTime) + "ms.")
                    
                    respondWithMessage(result)
                    
                } catch (error) {
                    
                    respondWithMessage([])
                    
                }
                
            }
            
        }
        
        targets.DeleteDropdownDataForCode = async (dropdownCode, socketSession, respondWithMessage) => {
            
            if (await this.isUserAnAdministrator(socketSession.userProfile)) {
                
                try {
                    
                    // Deleting data object
                    await DropdownDataModel.deleteOne({ dropdownCode: dropdownCode })
                    
                    await DropdownDataItemModel.deleteMany({ dropdownCode: dropdownCode })
                    
                    delete this._dropdownDataResponses[dropdownCode]
                    
                    // Sending completion response
                    respondWithMessage(null)
                    
                } catch (error) {
                    
                    respondWithMessage(null)
                    
                }
                
            }
            
        }
        
        targets.RetrieveDropdownDataForCode = async (dropdownCode, socketSession, respondWithMessage) => {
            
            const storedResponseObject = this._dropdownDataResponses[dropdownCode]
            
            if (storedResponseObject) {
                
                if (respondWithMessage.confirmStoredResponseHash(storedResponseObject.hash)) {
                    
                    return
                    
                }
                else {
                    
                    respondWithMessage(storedResponseObject.data)
                    
                    return
                    
                }
                
            }
            
            try {
                
                // Cannot use lean() here due to some data being lost when using it
                const result = await DropdownDataModel.findOne({
                    dropdownCode: dropdownCode
                }).populate("data").exec()
                
                this._dropdownDataResponses[dropdownCode] = {
                    
                    hash: await respondWithMessage(result),
                    data: result.toObject()
                    
                }
                
            } catch (error) {
                
                respondWithMessage(null)
                
            }
            
        }
        
        targets.SaveDropdownData = async (dropdownData, socketSession, respondWithMessage) => {
            
            if (await this.isUserAnAdministrator(socketSession.userProfile)) {
                
                const startDate = Date.now()
                
                // Function to save a data item
                async function saveDataItem(itemToSave: CBDocument<CBDropdownDataItem<any>>) {
                    
                    delete itemToSave._id
                    
                    const modelFromDB = await DropdownDataItemModel.findOne({
                        itemCode: itemToSave.itemCode,
                        dropdownCode: itemToSave.dropdownCode
                    })
                    
                    let itemModel: CBDocument<CBDropdownDataItem<any>>
                    if (modelFromDB) {
                        itemModel = Object.assign(modelFromDB, itemToSave)
                    }
                    else {
                        itemModel = new DropdownDataItemModel(itemToSave)
                    }
                    
                    return itemModel.save()
                    
                }
                
                
                // Actual saving
                
                try {
                    
                    const itemIDsInUse: CBReferenceID[] = []
                    
                    // Saving sections and rows
                    for (let i = 0; i < dropdownData.data.length; i++) {
                        
                        const sectionOrRow = dropdownData.data[i] as CBDocument<CBDropdownDataItem<any>>
                        
                        // It is a section if it has rowsData
                        if (sectionOrRow.rowsData) {
                            for (let j = 0; j < sectionOrRow.rowsData.length; j++) {
                                
                                const rowItem = sectionOrRow.rowsData[j] as any
                                sectionOrRow.rowsData[j] = (await saveDataItem(rowItem))._id
                                itemIDsInUse.push(sectionOrRow.rowsData[j]._id)
                                
                            }
                        }
                        
                        dropdownData.data[i] = (await saveDataItem(sectionOrRow))._id
                        itemIDsInUse.push(dropdownData.data[i]._id)
                        
                    }
                    
                    
                    await DropdownDataItemModel.deleteMany({
                        _id: { $nin: itemIDsInUse },
                        dropdownCode: dropdownData.dropdownCode
                    })
                    
                    
                    // Saving dropdown object
                    
                    delete dropdownData._id
                    
                    const modelFromDB = await DropdownDataModel.findOne({
                        dropdownCode: dropdownData.dropdownCode
                    })
                    
                    let dataModel: CBDocument<CBDropdownData<any>>
                    if (modelFromDB) {
                        dataModel = Object.assign(modelFromDB, dropdownData)
                    }
                    else {
                        dataModel = new DropdownDataModel(dropdownData)
                    }
                    
                    const savedData = await dataModel.save()
                    
                    
                    delete this._dropdownDataResponses[dropdownData.dropdownCode]
                    
                    
                    console.log("Saving dropdown data took " + (Date.now() - startDate) + "ms.")
                    
                    // Sending response
                    respondWithMessage(savedData.toObject())
                    
                } catch (error) {
                    
                    console.log(error)
                    
                    respondWithMessage(error)
                    
                }
                
            }
            
        }
        
        
        
        
        
        SocketController.sharedInstance.addTargetForConnectionEvents((socketSession: SocketSession) => {
            
            socketSession.addTargetForMessagesForKey("AddDocumentsIntoCollection", async (message: {
                
                collectionName: string,
                documents: any[]
                
            }, respondWithMessage) => {
                
                if (await this.isUserAnAdministrator(socketSession.userProfile)) {
                    
                    try {
                        
                        const db = mongoose.connection.db
                        
                        const result = await db.collection(message.collectionName).insertMany(message.documents)
                        
                        respondWithMessage(result)
                        
                    } catch (error) {
                        
                        respondWithMessage.sendErrorResponse(error)
                        
                    }
                    
                }
                
            })
            
            socketSession.addTargetForMessagesForKey("UpdateDocumentsInCollection", async (message: {
                
                collectionName: string,
                documentID: string
                filterOptions: any,
                updateOptions: any
                
            }, respondWithMessage) => {
                
                if (await this.isUserAnAdministrator(socketSession.userProfile)) {
                    
                    try {
                        
                        const db = mongoose.connection.db
                        
                        if (!message.filterOptions) {
                            
                            message.filterOptions = {}
                            
                        }
                        
                        if (message.documentID) {
                            
                            message.filterOptions._id = new ObjectID(message.documentID)
                            
                        }
                        
                        const result = await db.collection(message.collectionName).updateMany(
                            message.filterOptions,
                            message.updateOptions
                        )
                        
                        respondWithMessage(result)
                        
                    } catch (error) {
                        
                        respondWithMessage.sendErrorResponse(error)
                        
                    }
                    
                }
                
            })
            
            socketSession.addTargetForMessagesForKey("DeleteDocumentsInCollection", async (message: {
                
                collectionName: string,
                documentID: string
                filterOptions: any
                
            }, respondWithMessage) => {
                
                if (await this.isUserAnAdministrator(socketSession.userProfile)) {
                    
                    try {
                        
                        const db = mongoose.connection.db
                        
                        if (!message.filterOptions) {
                            
                            message.filterOptions = {}
                            
                        }
                        
                        if (message.documentID) {
                            
                            message.filterOptions._id = new ObjectID(message.documentID)
                            
                        }
                        
                        const result = await db.collection(message.collectionName).deleteMany(message.filterOptions)
                        
                        respondWithMessage(result)
                        
                    } catch (error) {
                        
                        respondWithMessage.sendErrorResponse(error)
                        
                    }
                    
                }
                
            })
            
        })
        
        
    }
    
    
    async titleForDropdownItemCode(itemCode: string, dropdownCode: string) {
        
        let dropdownDataItem: CBDropdownDataItem<any>
        
        if (this._dropdownDataResponses[dropdownCode]) {
            dropdownDataItem = this._dropdownDataResponses[dropdownCode].data.data.find(
                item => (item.itemCode == itemCode)
            )
        }
        
        dropdownDataItem = dropdownDataItem || (await DropdownDataItemModel.findOne({
            itemCode: itemCode,
            dropdownCode: dropdownCode
        }).exec()) || {} as any
        
        return dropdownDataItem.title
        
    }
    
    async retrieveLanguagesValues() {
        
        if (this._languagesValues) {
            return this._languagesValues
        }
        
        const languageItems: CBLanguageItem[] = await LanguageItemModel.find().lean().exec()
        
        const result = {}
        languageItems.forEach((item) => {
            if (!result[item.languageKey]) {
                result[item.languageKey] = {}
            }
            result[item.languageKey][item.itemKey] = item.value
        })
        this._languagesValues = result
        
        return result
        
    }
    
    
    public async isUserAnAdministrator(user: CBUserProfile) {
        const rights = await AdministratorRightsModel.find({})
        for (let i = 0; i < rights.length; i++) {
            const rightDescriptor = rights[i]
            if ("" + rightDescriptor.userProfile == "" + user._id) {
                return true
            }
        }
        return false
    }
    
    
    public static get sharedInstance() {
        return this._instance
    }
    
    // noinspection TypeScriptUMDGlobal,JSDeprecatedSymbols
    public static Instance(expressApp: Application, socketIO: SocketIO.Server) {
        return this._instance || (this._instance = new this(expressApp, socketIO))
    }
    
}
