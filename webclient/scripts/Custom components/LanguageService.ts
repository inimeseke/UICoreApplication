import {
    FIRST_OR_NIL,
    IS,
    IS_DEFINED,
    IS_NOT,
    nil,
    UICoreValues,
    UILanguageService,
    UILocalizedTextObject,
    UIRoute,
    UIView
} from "uicore-ts"
import { CBLocalizedTextObject } from "../CBCore/CBDataInterfaces"





export class LanguageService implements UILanguageService {
    
    static _currentLanguageKey: string
    
    static languageValues = {
        
        "en": {
            
            "languageName": "English",
            "languageNameShort": "ENG",
            
            "topBarTitle": "UICore application",
            
            "selectLanguageTitle": "Select language",
            "leftBarTitle": "Title"
            
            
        },
        "est": {
            
            "languageName": "Eesti keel",
            "languageNameShort": "EST",
            
            "topBarTitle": "UICore rakendus",
            
            "selectLanguageTitle": "Vali keel",
            "leftBarTitle": "Pealkiri"
            
            
        }
        
        
        
        
    }
    
    static languages = JSON.parse(JSON.stringify(LanguageService.languageValues))
    
    static useStoredLanguageValues(values = {}) {
        
        LanguageService.languages = JSON.parse(JSON.stringify(LanguageService.languageValues))
            .objectByCopyingValuesRecursivelyFromObject(
                values) as any
        
        LanguageService.broadcastLanguageChangeEvent()
        
    }
    
    
    
    
    
    static broadcastLanguageChangeEvent() {
        
        UICoreValues.main.rootViewController.view.broadcastEventInSubtree({
            name: UIView.broadcastEventName.LanguageChanged,
            parameters: {}
        })
        
    }
    
    static get defaultLanguageKey() {
        
        // @ts-ignore
        return (CBCoreInitializerObject.defaultLanguageKey || "en")
        
    }
    
    static get currentLanguageKey() {
        
        if (!LanguageService._currentLanguageKey) {
            
            LanguageService.updateCurrentLanguageKey()
            
        }
        
        return LanguageService._currentLanguageKey
        
    }
    
    updateCurrentLanguageKey() {
        
        LanguageService.updateCurrentLanguageKey()
        
    }
    
    static updateCurrentLanguageKey(route = UIRoute.currentRoute) {
        
        let result = route.componentWithName("settings").parameters.language
        
        if (IS_NOT(result)) {
            
            result = LanguageService.defaultLanguageKey
            
        }
        
        const isChanged = (result == LanguageService._currentLanguageKey)
        
        LanguageService._currentLanguageKey = result
        
        if (isChanged) {
            
            LanguageService.broadcastLanguageChangeEvent()
            
        }
        
    }
    
    get currentLanguageKey() {
        
        const result = LanguageService.currentLanguageKey
        
        return result
        
    }
    
    
    
    static stringForKey(
        key: string,
        languageKey: string,
        defaultString: string,
        parameters?: { [x: string]: string | UILocalizedTextObject; }
    ) {
        
        var result
        
        if (IS(key) && LanguageService.languages[languageKey] &&
            IS_DEFINED(LanguageService.languages[languageKey][key])) {
            
            result = LanguageService.languages[languageKey][key]
            
        }
        else {
            
            result = defaultString
            
        }
        
        if (IS(parameters)) {
            
            const parameterKeys = Object.keys(parameters)
            
            parameterKeys.forEach(function (key, index, array) {
                
                const keyString = "%" + key + "%"
                
                const parameter = parameters[key]
                
                var parameterString
                
                if (parameter instanceof Object) {
                    
                    parameterString = UICoreValues.languageService.stringForCurrentLanguage(parameter as UILocalizedTextObject)
                    
                }
                else {
                    
                    parameterString = parameter
                    
                }
                
                
                result = result.replace(new RegExp(keyString, "g"), parameterString)
                
            })
            
        }
        
        return result
        
    }
    
    stringForKey(
        key: string,
        languageKey: string,
        defaultString: string,
        parameters?: { [x: string]: string | UILocalizedTextObject; }
    ) {
        
        
        return LanguageService.stringForKey(key, languageKey, defaultString, parameters)
        
        
    }
    
    
    static localizedTextObjectForKey(
        key: string,
        defaultString = key,
        parameters?: { [x: string]: string | UILocalizedTextObject; }
    ) {
        
        const result = {}
        
        LanguageService.languages.forEach(function (languageObject, languageKey) {
            
            result[languageKey] = LanguageService.stringForKey(key, languageKey, defaultString, parameters)
            
        })
        
        return result
        
    }
    
    localizedTextObjectForKey(
        key: string,
        defaultString?: string,
        parameters?: { [x: string]: string | UILocalizedTextObject; }
    ) {
        
        const result = LanguageService.localizedTextObjectForKey(key, defaultString, parameters)
        
        return result
        
    }
    
    
    static localizedTextObjectForText(text: string) {
        
        if (IS_NOT(text)) {
            
            return nil
            
        }
        
        const result = {
            
            [LanguageService.defaultLanguageKey]: text
            
        }
        
        return result
        
    }
    
    localizedTextObjectForText(text: string) {
        
        const result = LanguageService.localizedTextObjectForText(text)
        
        return result
        
    }
    
    
    static stringForCurrentLanguage(localizedTextObject: CBLocalizedTextObject | string) {
        
        if (!LanguageService || !localizedTextObject) {
            
            const asd = 1
            
        }
        
        if (localizedTextObject === "" + localizedTextObject) {
            
            return localizedTextObject
            
        }
        
        localizedTextObject = FIRST_OR_NIL(localizedTextObject)
        
        var result = localizedTextObject[LanguageService.currentLanguageKey]
        
        if (IS_NOT(result)) {
            
            result = localizedTextObject[LanguageService.defaultLanguageKey]
            
        }
        
        if (IS_NOT(result)) {
            
            result = localizedTextObject["en"]
            
        }
        
        if (IS_NOT(result)) {
            
            result = ""
            
        }
        
        return result
        
    }
    
    stringForCurrentLanguage(localizedTextObject: CBLocalizedTextObject) {
        
        return LanguageService.stringForCurrentLanguage(localizedTextObject)
        
    }
    
    
    
    
}





UICoreValues.languageService = LanguageService



























