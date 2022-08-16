/// <reference path="../webclient/scripts/CBCore/CBDataInterfaces.ts" />

import { FileAccessorModel, FileDataModel } from "../models"
import { Application } from "express"
import { RoutesController } from "./RoutesController"

import { SocketController } from "./SocketController"
import SocketSession from "./SocketSession"

import * as AWS from "aws-sdk"
import * as bent from "bent"
import Utils from "../Utils"
import * as passport from "passport"


const kFileAccessorExpiryTime = 5000



export class FilesController extends RoutesController {
    
    private static _instance: FilesController
    
    storageService = new AWS.S3({
        
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_KEY
        
    })
    
    public registerRoutes() {
        
        
        
        
        
        this.expressApp.get("/photos/:photoDataID/a.png", async function (request, response) {
            
            
            try {
                
                const photoData = await FileDataModel.findById(request.params.photoDataID)
                
                if (photoData.isLimitedAccess || photoData.accessibleToUsers.length) {
                    
                    throw "Access not allowed."
                    
                }
                
                const storageService = new AWS.S3({
                    
                    accessKeyId: process.env.AWS_ID,
                    secretAccessKey: process.env.AWS_KEY
                    
                })
                
                let imageData: Buffer
                
                if (photoData.dataURL.startsWith("data")) {
                    
                    const data = photoData.dataURL.replace(/^data:image\/png;base64,/, "")
                    
                    imageData = Buffer.from(data, "base64")
                    
                    var objectPath = "" + photoData.id
                    
                    var asdasd = await storageService.putObject({
                        
                        Bucket: process.env.AWS_S3_BUCKET,
                        Key: objectPath,
                        Body: Buffer.from(photoData.dataURL.replace(/^data:image\/\w+;base64,/, ""), "base64")
                        
                    }).promise()
                    
                    photoData.dataURL = process.env.AWS_S3_BUCKET
                    await photoData.save()
                    
                }
                else if (photoData.dataURL == process.env.AWS_S3_BUCKET) {
                    
                    var data = await storageService.getObject(
                        {
                            Bucket: process.env.AWS_S3_BUCKET,
                            Key: "" + photoData._id
                        }
                    ).promise()
                    
                    //console.log(data.Body.toString())
                    
                    imageData = data.Body as any
                    
                }
                else {
                    
                    const getBuffer = bent("buffer")
                    
                    imageData = await getBuffer(photoData.dataURL) as any
                    
                }
                
                response.writeHead(200, {
                    "Content-Type": "image/png",
                    "Content-Length": imageData.length,
                    "Cache-Control": "public, max-age=31557600" // one year
                })
                
                response.end(imageData)
                
            } catch (exception) {
                
                response.set("Content-Type", "text/plain")
                response.sendStatus(400)
                
            }
            
            // Respond with a file
            // var file = path.join(dir, req.path.replace(/\/$/, '/index.html'));
            
            // if (file.indexOf(dir + path.sep) !== 0) {
            //     return response.status(403).end('Forbidden');
            // }
            
            // var type = mime[path.extname(file).slice(1)] || 'text/plain';
            // var s = fs.createReadStream(file);
            
            // s.on('open', function () {
            //     response.set('Content-Type', type);
            //     s.pipe(response);
            // });
            
            // s.on('error', function () {
            
            //     response.set('Content-Type', 'text/plain');
            //     response.status(404).end('Not found');
            
            // });
            
        })
        
        
        this.expressApp.get("/file/:fileID/:filename", async (request, response) => {
            
            const fileDataObject = await FileDataModel.findById(request.params.fileID)
            
            if (fileDataObject.isLimitedAccess || fileDataObject.accessibleToUsers.length) {
                
                throw "Access not allowed."
                
            }
            
            
            
            
            
            await this.sendFileDataAsResponse(fileDataObject, response)
            
            // Respond with a file
            // var file = path.join(dir, req.path.replace(/\/$/, '/index.html'));
            
            // if (file.indexOf(dir + path.sep) !== 0) {
            //     return response.status(403).end('Forbidden');
            // }
            
            // var type = mime[path.extname(file).slice(1)] || 'text/plain';
            // var s = fs.createReadStream(file);
            
            // s.on('open', function () {
            //     response.set('Content-Type', type);
            //     s.pipe(response);
            // });
            
            // s.on('error', function () {
            
            //     response.set('Content-Type', 'text/plain');
            //     response.status(404).end('Not found');
            
            // });
        })
        
        this.expressApp.route("/external/:username/file/:fileID/:filename")
        .get(passport.authenticate("bearer", { session: false, scope: "external" }), async (request, response) => {
            
            if (request.user != request.params.username) {
                
                return
                
            }
            
            const fileDataObject = await FileDataModel.findById(request.params.fileID)
            
            
            await this.sendFileDataAsResponse(fileDataObject, response)
            
        })
        
        
        
        
        
        this.expressApp.get("/fileaccess/:fileAccessorID/:filename", async function (request, response) {
            
            try {
                
                const fileAccessor = await FileAccessorModel.findById(request.params.fileAccessorID)
                .populate("fileData")
                
                const timePassedSinceFileAccessorWasGenerated = Date.now() - fileAccessor.createdAt
                
                await FileAccessorModel.deleteOne({ _id: fileAccessor.id })
                await FileAccessorModel.deleteMany({ createdAt: { $lt: Date.now() - kFileAccessorExpiryTime } })
                
                if (!fileAccessor || !fileAccessor.fileData || timePassedSinceFileAccessorWasGenerated >
                    kFileAccessorExpiryTime || request.params.filename != fileAccessor.fileData.name) {
                    
                    throw "Access not allowed."
                    
                }
                
                const fileType = Utils.FIRST(fileAccessor.fileData.type, "application/pdf")
                
                const data = fileAccessor.fileData.dataURL.replace(new RegExp("^data:" + fileType + ";base64,"), "")
                const file = Buffer.from(data, "base64")
                
                
                response.writeHead(200, {
                    "Content-Type": fileType,
                    "Content-Length": file.length,
                    "Cache-Control": "public, max-age=31557600" // one year
                })
                
                response.end(file)
                
            } catch (exception) {
                
                response.set("Content-Type", "text/plain")
                response.sendStatus(400)
                
            }
            
        })
        
        
        
        
        
        SocketController.sharedInstance.addTargetForConnectionEvents((socketSession: SocketSession) => {
            
            
            
            
            
            socketSession.addTargetForMessagesForKey(
                "RetrieveFileURLForFileID",
                async (fileID: string, respondWithMessage) => {
                    
                    const file = await FileDataModel.findById(fileID)
                    
                    const accessibleToUserIdentifiers = file.accessibleToUsers.map(value => "" + value)
                    
                    const accessibleToUser = ((!accessibleToUserIdentifiers.length && !file.isLimitedAccess) ||
                        accessibleToUserIdentifiers.contains("" + socketSession.userProfile._id))
                    
                    if (!file || !accessibleToUser) {
                        
                        throw "No file found for current user."
                        
                    }
                    
                    const fileAccessor = await new FileAccessorModel({ fileData: file }).save()
                    
                    respondWithMessage("/fileaccess/" + fileAccessor.id + "/" + file.name)
                    
                }
            )
            
            
            socketSession.addTargetForMessagesForKey(
                "RetrieveFilenameForFileID",
                async (fileID: string, respondWithMessage) => {
                    
                    const file = await FileDataModel.findById(fileID)
                    
                    const accessibleToUserIdentifiers = file.accessibleToUsers.map(value => "" + value)
                    
                    const accessibleToUser = ((!accessibleToUserIdentifiers.length && !file.isLimitedAccess) ||
                        accessibleToUserIdentifiers.contains("" + socketSession.userProfile._id))
                    
                    if (!file || !accessibleToUser) {
                        
                        throw "No file found for current user."
                        
                    }
                    
                    
                    
                    respondWithMessage(file.name)
                    
                }
            )
            
            
            socketSession.addTargetForMessagesForKey(
                "RetrieveFileTypeForFileID",
                async (fileID: string, respondWithMessage) => {
                    
                    const file = await FileDataModel.findById(fileID)
                    
                    const accessibleToUserIdentifiers = file.accessibleToUsers.map(value => "" + value)
                    
                    const accessibleToUser = ((!accessibleToUserIdentifiers.length && !file.isLimitedAccess) ||
                        accessibleToUserIdentifiers.contains("" + socketSession.userProfile._id))
                    
                    if (!file || !accessibleToUser) {
                        
                        throw "No file found for current user."
                        
                    }
                    
                    respondWithMessage(file.type)
                    
                }
            )
            
            
            
            
        })
        
        
        
    }
    
    
    
    
    
    private async sendFileDataAsResponse(fileDataObject, response) {
        try {
            
            
            const fileType = Utils.FIRST(fileDataObject.type, "application/pdf")
            
            let fileData: Buffer
            
            if (fileDataObject.dataURL.startsWith("data")) {
                
                //const data = fileData.dataURL.replace(/^data:image\/png;base64,/, "")
                
                const data = fileDataObject.dataURL.replace(new RegExp("^data:" + fileType + ";base64,"), "")
                
                fileData = Buffer.from(data, "base64")
                
                var objectPath = "" + fileDataObject.id
                
                var asdasd = await this.storageService.putObject({
                    
                    Bucket: process.env.AWS_S3_BUCKET,
                    Key: objectPath,
                    Body: Buffer.from(
                        fileDataObject.dataURL.replace(new RegExp("^data:" + fileType + ";base64,"), ""),
                        "base64"
                    )
                    
                }).promise()
                
                fileDataObject.dataURL = process.env.AWS_S3_BUCKET
                await fileDataObject.save()
                
            }
            else if (fileDataObject.dataURL == process.env.AWS_S3_BUCKET) {
                
                var data = await this.storageService.getObject(
                    {
                        Bucket: process.env.AWS_S3_BUCKET,
                        Key: "" + fileDataObject._id
                    }
                ).promise()
                
                //console.log(data.Body.toString())
                
                fileData = data.Body as any
                
            }
            else {
                
                const getBuffer = bent("buffer")
                
                fileData = await getBuffer(fileDataObject.dataURL) as any
                
            }
            
            response.writeHead(200, {
                "Content-Type": fileType,
                "Content-Length": fileData.length,
                "Cache-Control": "public, max-age=31557600" // one year
            })
            
            response.end(fileData)
            
        } catch (exception) {
            
            response.set("Content-Type", "text/plain")
            response.sendStatus(400)
            
        }
    }
    
    public static get sharedInstance() {
        return this._instance
    }
    
    public static Instance(expressApp: Application, socketIO: SocketIO.Server) {
        return this._instance || (this._instance = new this(expressApp, socketIO))
    }
    
}
