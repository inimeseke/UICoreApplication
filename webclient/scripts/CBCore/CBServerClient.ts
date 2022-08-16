import { IS, nil, UIObject, YES } from "uicore-ts"
import { CBCore } from "./CBCore"


export class CBServerClient extends UIObject {
    
    _core: CBCore
    
    constructor(core: CBCore) {
        
        super()
        
        this._core = core
        
    }
    
    
    sendJSONObject(URL: string, objectToSend: any, completion: (response: any) => void) {
        
        this.sendRequest("POST", URL, objectToSend, function (this: CBServerClient, status, response) {
            if (status != 200) {
                
                console.log("GET " + URL + " " + status)
                
                if (IS(completion)) {
                    completion(nil)
                }
                return
            }
            const result = JSON.parse(response)
    
            if (IS(completion)) {
                completion(result)
            }
        }.bind(this))
        
    }
    
    retrieveJSONObject(URL: string, completion: (response: any) => void) {
        
        this.retrieveJSONObjectWithCaching(URL, nil, nil, YES, completion)
        
    }
    
    retrieveJSONObjectWithCaching(
        URL: string,
        cacheObject: any,
        cacheKey: string,
        forceUpdate: boolean,
        completion: (response: any) => void
    ) {
        if (IS(cacheObject[cacheKey]) && !forceUpdate) {
            if (IS(completion)) {
                completion(cacheObject[cacheKey])
            }
            return
        }
        this.sendRequest("GET", URL, null, function (this: CBServerClient, status, response) {
            if (status != 200) {
                
                console.log("GET " + URL + " " + status)
                
                if (IS(completion)) {
                    completion(nil)
                }
                return
            }
            const result = JSON.parse(response)
            cacheObject[cacheKey] = result
            if (IS(completion)) {
                completion(result)
            }
        }.bind(this))
    }
    
    sendRequest(method: string, URL: string, data: any, completion: (status: number, response: string) => void) {
    
        const xhr = new XMLHttpRequest()
        xhr.open(method, URL, true)
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        xhr.onreadystatechange = processRequest
        
        function processRequest(event: Event) {
            
            if (xhr.readyState == 4) {
                if (IS(completion)) {
                    completion(xhr.status, xhr.responseText)
                }
            }
            
        }
        
        xhr.send(JSON.stringify(data))
        
    }
    
    
    
    
    
}














































