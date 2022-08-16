import { Application } from "express"
import * as mongoose from "mongoose"


export class RoutesController {
    
    public model: mongoose.Model<mongoose.Document>
    
    constructor(private _expressApp: Application, private _socketIO: SocketIO.Server) {
    }
    
    get expressApp() {
        return this._expressApp
    }
    
    get socketIO() {
        return this._socketIO
    }
    
    public fetch() {
        // TODO
    }
    
    
    
    
    
}
