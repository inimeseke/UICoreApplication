var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __reflectGet = Reflect.get;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/uicore-ts/compiledScripts/UICoreExtensionValueObject.js
var require_UICoreExtensionValueObject = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UICoreExtensionValueObject.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UICoreExtensionValueObject_exports = {};
    __export2(UICoreExtensionValueObject_exports, {
      UICoreExtensionValueObject: () => UICoreExtensionValueObject
    });
    module.exports = __toCommonJS2(UICoreExtensionValueObject_exports);
    var UICoreExtensionValueObject = class {
      constructor(value) {
        this.isAUICoreExtensionValueObject = true;
        this.value = value;
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UITimer.js
var require_UITimer = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UITimer.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UITimer_exports = {};
    __export2(UITimer_exports, {
      UITimer: () => UITimer
    });
    module.exports = __toCommonJS2(UITimer_exports);
    var YES13 = true;
    var NO11 = false;
    var UITimer = class {
      constructor(interval, repeats, target) {
        this.interval = interval;
        this.repeats = repeats;
        this.target = target;
        this.isValid = YES13;
        this.schedule();
      }
      schedule() {
        const callback = function() {
          if (this.repeats == NO11) {
            this.invalidate();
          }
          this.target();
        }.bind(this);
        this._intervalID = window.setInterval(callback, this.interval * 1e3);
      }
      reschedule() {
        this.invalidate();
        this.schedule();
      }
      fire() {
        if (this.repeats == NO11) {
          this.invalidate();
        } else {
          this.reschedule();
        }
        this.target();
      }
      invalidate() {
        if (this.isValid) {
          clearInterval(this._intervalID);
          this.isValid = NO11;
        }
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UIObject.js
var require_UIObject = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIObject.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIObject_exports = {};
    __export2(UIObject_exports, {
      CALL: () => CALL,
      EXTEND: () => EXTEND,
      FIRST: () => FIRST5,
      FIRST_OR_NIL: () => FIRST_OR_NIL5,
      IF: () => IF4,
      IS: () => IS15,
      IS_AN_EMAIL_ADDRESS: () => IS_AN_EMAIL_ADDRESS,
      IS_DEFINED: () => IS_DEFINED4,
      IS_LIKE_NULL: () => IS_LIKE_NULL,
      IS_NIL: () => IS_NIL2,
      IS_NOT: () => IS_NOT11,
      IS_NOT_LIKE_NULL: () => IS_NOT_LIKE_NULL,
      IS_NOT_NIL: () => IS_NOT_NIL2,
      IS_UNDEFINED: () => IS_UNDEFINED2,
      LAZY_VALUE: () => LAZY_VALUE,
      MAKE_ID: () => MAKE_ID5,
      NO: () => NO11,
      NilFunction: () => NilFunction,
      RETURNER: () => RETURNER3,
      UIFunctionCall: () => UIFunctionCall,
      UIFunctionExtender: () => UIFunctionExtender,
      UILazyPropertyValue: () => UILazyPropertyValue,
      UIObject: () => UIObject6,
      YES: () => YES13,
      nil: () => nil17,
      wrapInNil: () => wrapInNil
    });
    module.exports = __toCommonJS2(UIObject_exports);
    var import_UICoreExtensionValueObject = require_UICoreExtensionValueObject();
    var import_UITimer = require_UITimer();
    function NilFunction() {
      return nil17;
    }
    var nil17 = new Proxy(Object.assign(NilFunction, { "class": nil17, "className": "Nil" }), {
      get(target, name) {
        if (name == Symbol.toPrimitive) {
          return function(hint) {
            if (hint == "number") {
              return 0;
            }
            if (hint == "string") {
              return "";
            }
            return false;
          };
        }
        if (name == "toString") {
          return function toString() {
            return "";
          };
        }
        return NilFunction();
      },
      set(target, name, value) {
        return NilFunction();
      }
    });
    function wrapInNil(object) {
      let result = FIRST_OR_NIL5(object);
      if (object instanceof Object && !(object instanceof Function)) {
        result = new Proxy(object, {
          get(target, name) {
            if (name == "wrapped_nil_target") {
              return target;
            }
            const value = Reflect.get(target, name);
            if (typeof value === "object") {
              return wrapInNil(value);
            }
            if (IS_NOT_LIKE_NULL(value)) {
              return value;
            }
            return nil17;
          },
          set(target, name, value) {
            if (IS15(target)) {
              target[name] = value;
            }
            return YES13;
          }
        });
      }
      return result;
    }
    var YES13 = true;
    var NO11 = false;
    function IS15(object) {
      if (object && object !== nil17) {
        return YES13;
      }
      return NO11;
    }
    function IS_NOT11(object) {
      return !IS15(object);
    }
    function IS_DEFINED4(object) {
      if (object != void 0) {
        return YES13;
      }
      return NO11;
    }
    function IS_UNDEFINED2(object) {
      return !IS_DEFINED4(object);
    }
    function IS_NIL2(object) {
      if (object === nil17) {
        return YES13;
      }
      return NO11;
    }
    function IS_NOT_NIL2(object) {
      return !IS_NIL2(object);
    }
    function IS_LIKE_NULL(object) {
      return IS_UNDEFINED2(object) || IS_NIL2(object) || object == null;
    }
    function IS_NOT_LIKE_NULL(object) {
      return !IS_LIKE_NULL(object);
    }
    function IS_AN_EMAIL_ADDRESS(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    function FIRST_OR_NIL5(...objects) {
      const result = objects.find(function(object, index, array) {
        return IS15(object);
      });
      return result || nil17;
    }
    function FIRST5(...objects) {
      const result = objects.find(function(object, index, array) {
        return IS15(object);
      });
      return result || IF4(IS_DEFINED4(objects.lastElement))(RETURNER3(objects.lastElement))();
    }
    function MAKE_ID5(randomPartLength = 15) {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < randomPartLength; i++) {
        result = result + characters.charAt(Math.floor(Math.random() * characters.length));
      }
      result = result + Date.now();
      return result;
    }
    function RETURNER3(value) {
      return (...objects) => value;
    }
    function IF4(value) {
      let thenFunction = nil17;
      let elseFunction = nil17;
      const result = function(functionToCall) {
        thenFunction = functionToCall;
        return result.evaluateConditions;
      };
      result.evaluateConditions = function() {
        if (IS15(value)) {
          return thenFunction();
        }
        return elseFunction();
      };
      result.evaluateConditions.ELSE_IF = function(otherValue) {
        const functionResult = IF4(otherValue);
        elseFunction = functionResult.evaluateConditions;
        const functionResultEvaluateConditionsFunction = function() {
          return result.evaluateConditions();
        };
        functionResultEvaluateConditionsFunction.ELSE_IF = functionResult.evaluateConditions.ELSE_IF;
        functionResultEvaluateConditionsFunction.ELSE = functionResult.evaluateConditions.ELSE;
        functionResult.evaluateConditions = functionResultEvaluateConditionsFunction;
        return functionResult;
      };
      result.evaluateConditions.ELSE = function(functionToCall) {
        elseFunction = functionToCall;
        return result.evaluateConditions();
      };
      return result;
    }
    var UIFunctionCall = class {
      constructor(...parameters) {
        this.isAUIFunctionCallObject = YES13;
        this.parameters = parameters;
      }
      callFunction(functionToCall) {
        const parameters = this.parameters;
        functionToCall(...parameters);
      }
    };
    function CALL(...objects) {
      const result = new UIFunctionCall(...objects);
      return result;
    }
    var UIFunctionExtender = class {
      constructor(extendingFunction) {
        this.isAUIFunctionExtenderObject = YES13;
        this.extendingFunction = extendingFunction;
      }
      extendedFunction(functionToExtend) {
        const extendingFunction = this.extendingFunction;
        function extendedFunction(...objects) {
          const boundFunctionToExtend = functionToExtend.bind(this);
          boundFunctionToExtend(...objects);
          const boundExtendingFunction = extendingFunction.bind(this);
          boundExtendingFunction(...objects);
        }
        return extendedFunction;
      }
    };
    function EXTEND(extendingFunction) {
      const result = new UIFunctionExtender(extendingFunction);
      return result;
    }
    var UILazyPropertyValue = class {
      constructor(initFunction) {
        this.isAUILazyPropertyValueObject = YES13;
        this.initFunction = initFunction;
      }
      setLazyPropertyValue(key, target) {
        let isValueInitialized = NO11;
        let _value = nil17;
        const initValue = () => {
          _value = this.initFunction();
          isValueInitialized = YES13;
          this.initFunction = nil17;
        };
        if (delete target[key]) {
          Object.defineProperty(target, key, {
            get: function() {
              if (IS_NOT11(isValueInitialized)) {
                initValue();
              }
              return _value;
            },
            set: function(newValue) {
              _value = newValue;
            },
            enumerable: true,
            configurable: true
          });
        }
      }
    };
    function LAZY_VALUE(initFunction) {
      const result = new UILazyPropertyValue(initFunction);
      return result;
    }
    var UIObject6 = class {
      constructor() {
      }
      get class() {
        return Object.getPrototypeOf(this).constructor;
      }
      get superclass() {
        return Object.getPrototypeOf(Object.getPrototypeOf(this)).constructor;
      }
      static wrapObject(object) {
        if (IS_NOT11(object)) {
          return nil17;
        }
        if (object instanceof UIObject6) {
          return object;
        }
        return Object.assign(new UIObject6(), object);
      }
      isKindOfClass(classObject) {
        if (this.isMemberOfClass(classObject)) {
          return YES13;
        }
        for (let superclassObject = this.superclass; IS15(superclassObject); superclassObject = superclassObject.superclass) {
          if (superclassObject == classObject) {
            return YES13;
          }
        }
        return NO11;
      }
      isMemberOfClass(classObject) {
        return this.class == classObject;
      }
      valueForKey(key) {
        return this[key];
      }
      valueForKeyPath(keyPath) {
        return UIObject6.valueForKeyPath(keyPath, this);
      }
      static valueForKeyPath(keyPath, object) {
        if (IS_NOT11(keyPath)) {
          return object;
        }
        const keys = keyPath.split(".");
        let currentObject = object;
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (key.substring(0, 2) == "[]") {
            currentObject = currentObject[key.substring(2)];
            const remainingKeyPath = keys.slice(i + 1).join(".");
            const currentArray = currentObject;
            currentObject = currentArray.map(function(subObject, index, array) {
              return UIObject6.valueForKeyPath(remainingKeyPath, subObject);
            });
            break;
          }
          currentObject = currentObject[key];
          if (IS_NOT11(currentObject)) {
            currentObject = nil17;
          }
        }
        return currentObject;
      }
      setValueForKeyPath(keyPath, value, createPath = YES13) {
        return UIObject6.setValueForKeyPath(keyPath, value, this, createPath);
      }
      static setValueForKeyPath(keyPath, value, currentObject, createPath) {
        const keys = keyPath.split(".");
        let didSetValue = NO11;
        keys.forEach(function(key, index, array) {
          if (index == array.length - 1 && IS_NOT_LIKE_NULL(currentObject)) {
            currentObject[key] = value;
            didSetValue = YES13;
            return;
          } else if (IS_NOT11(currentObject)) {
            return;
          }
          const currentObjectValue = currentObject[key];
          if (IS_LIKE_NULL(currentObjectValue) && createPath) {
            currentObject[key] = {};
          }
          currentObject = currentObject[key];
        });
        return didSetValue;
      }
      configureWithObject(object) {
        this.configuredWithObject(object);
      }
      configuredWithObject(object) {
        return UIObject6.configureWithObject(this, object);
      }
      static configureWithObject(configurationTarget, object) {
        const isAnObject = (item) => item && typeof item === "object" && !Array.isArray(item) && !(item instanceof import_UICoreExtensionValueObject.UICoreExtensionValueObject);
        function isAClass(funcOrClass) {
          const isFunction = (functionToCheck) => functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
          const propertyNames = Object.getOwnPropertyNames(funcOrClass);
          return isFunction(funcOrClass) && !propertyNames.includes("arguments") && propertyNames.includes("prototype");
        }
        let keyPathsAndValues = [];
        function prepareKeyPathsAndValues(target, source, keyPath = "") {
          if ((isAnObject(target) || isAClass(target)) && isAnObject(source)) {
            source.forEach((sourceValue, key) => {
              const valueKeyPath = keyPath + "." + key;
              function addValueAndKeyPath(sourceValue2) {
                keyPathsAndValues.push({
                  value: sourceValue2,
                  keyPath: valueKeyPath.replace(".", "")
                });
              }
              if (isAnObject(sourceValue) || isAClass(sourceValue)) {
                if (!(key in target) || target[key] instanceof Function) {
                  addValueAndKeyPath(sourceValue);
                } else {
                  prepareKeyPathsAndValues(target[key], sourceValue, valueKeyPath);
                }
              } else if (sourceValue instanceof import_UICoreExtensionValueObject.UICoreExtensionValueObject) {
                addValueAndKeyPath(sourceValue.value);
              } else {
                addValueAndKeyPath(sourceValue);
              }
            });
          }
        }
        prepareKeyPathsAndValues(configurationTarget, object);
        keyPathsAndValues = keyPathsAndValues.sort((a, b) => {
          const firstKeyPath = a.keyPath.split(".").length;
          const secondKeyPath = b.keyPath.split(".").length;
          if (firstKeyPath < secondKeyPath) {
            return -1;
          }
          if (firstKeyPath > secondKeyPath) {
            return 1;
          }
          return 0;
        });
        keyPathsAndValues.forEach((valueAndKeyPath) => {
          const keyPath = valueAndKeyPath.keyPath;
          let value = valueAndKeyPath.value;
          const getTargetFunction = (bindThis = NO11) => {
            let result = UIObject6.valueForKeyPath(keyPath, configurationTarget);
            if (bindThis) {
              const indexOfDot = keyPath.lastIndexOf(".");
              const thisObject = UIObject6.valueForKeyPath(keyPath.substring(0, indexOfDot), configurationTarget);
              result = result.bind(thisObject);
            }
            return result;
          };
          if (value instanceof UILazyPropertyValue) {
            const indexOfDot = keyPath.lastIndexOf(".");
            const thisObject = UIObject6.valueForKeyPath(keyPath.substring(0, indexOfDot), configurationTarget);
            const key = keyPath.substring(indexOfDot + 1);
            value.setLazyPropertyValue(key, thisObject);
            return;
          }
          if (value instanceof UIFunctionCall) {
            value.callFunction(getTargetFunction(YES13));
            return;
          }
          if (value instanceof UIFunctionExtender) {
            value = value.extendedFunction(getTargetFunction());
          }
          UIObject6.setValueForKeyPath(keyPath, value, configurationTarget, YES13);
        });
        return configurationTarget;
      }
      performFunctionWithSelf(functionToPerform) {
        return functionToPerform(this);
      }
      performingFunctionWithSelf(functionToPerform) {
        functionToPerform(this);
        return this;
      }
      performFunctionWithDelay(delay, functionToCall) {
        new import_UITimer.UITimer(delay, NO11, functionToCall);
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/ClientCheckers.js
var require_ClientCheckers = __commonJS({
  "node_modules/uicore-ts/compiledScripts/ClientCheckers.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var ClientCheckers_exports = {};
    __export2(ClientCheckers_exports, {
      IS_FIREFOX: () => IS_FIREFOX,
      IS_SAFARI: () => IS_SAFARI
    });
    module.exports = __toCommonJS2(ClientCheckers_exports);
    var IS_FIREFOX = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    var IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
});

// node_modules/uicore-ts/compiledScripts/UIColor.js
var require_UIColor = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIColor.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIColor_exports = {};
    __export2(UIColor_exports, {
      UIColor: () => UIColor15
    });
    module.exports = __toCommonJS2(UIColor_exports);
    var import_UIObject = require_UIObject();
    var UIColor15 = class extends import_UIObject.UIObject {
      constructor(stringValue) {
        super();
        this.stringValue = stringValue;
      }
      toString() {
        return this.stringValue;
      }
      static get redColor() {
        return new UIColor15("red");
      }
      static get blueColor() {
        return new UIColor15("blue");
      }
      static get greenColor() {
        return new UIColor15("green");
      }
      static get yellowColor() {
        return new UIColor15("yellow");
      }
      static get blackColor() {
        return new UIColor15("black");
      }
      static get brownColor() {
        return new UIColor15("brown");
      }
      static get whiteColor() {
        return new UIColor15("white");
      }
      static get greyColor() {
        return new UIColor15("grey");
      }
      static get lightGreyColor() {
        return new UIColor15("lightgrey");
      }
      static get transparentColor() {
        return new UIColor15("transparent");
      }
      static get undefinedColor() {
        return new UIColor15("");
      }
      static get nilColor() {
        return new UIColor15("");
      }
      static nameToHex(name) {
        return {
          "aliceblue": "#f0f8ff",
          "antiquewhite": "#faebd7",
          "aqua": "#00ffff",
          "aquamarine": "#7fffd4",
          "azure": "#f0ffff",
          "beige": "#f5f5dc",
          "bisque": "#ffe4c4",
          "black": "#000000",
          "blanchedalmond": "#ffebcd",
          "blue": "#0000ff",
          "blueviolet": "#8a2be2",
          "brown": "#a52a2a",
          "burlywood": "#deb887",
          "cadetblue": "#5f9ea0",
          "chartreuse": "#7fff00",
          "chocolate": "#d2691e",
          "coral": "#ff7f50",
          "cornflowerblue": "#6495ed",
          "cornsilk": "#fff8dc",
          "crimson": "#dc143c",
          "cyan": "#00ffff",
          "darkblue": "#00008b",
          "darkcyan": "#008b8b",
          "darkgoldenrod": "#b8860b",
          "darkgray": "#a9a9a9",
          "darkgreen": "#006400",
          "darkkhaki": "#bdb76b",
          "darkmagenta": "#8b008b",
          "darkolivegreen": "#556b2f",
          "darkorange": "#ff8c00",
          "darkorchid": "#9932cc",
          "darkred": "#8b0000",
          "darksalmon": "#e9967a",
          "darkseagreen": "#8fbc8f",
          "darkslateblue": "#483d8b",
          "darkslategray": "#2f4f4f",
          "darkturquoise": "#00ced1",
          "darkviolet": "#9400d3",
          "deeppink": "#ff1493",
          "deepskyblue": "#00bfff",
          "dimgray": "#696969",
          "dodgerblue": "#1e90ff",
          "firebrick": "#b22222",
          "floralwhite": "#fffaf0",
          "forestgreen": "#228b22",
          "fuchsia": "#ff00ff",
          "gainsboro": "#dcdcdc",
          "ghostwhite": "#f8f8ff",
          "gold": "#ffd700",
          "goldenrod": "#daa520",
          "gray": "#808080",
          "green": "#008000",
          "greenyellow": "#adff2f",
          "honeydew": "#f0fff0",
          "hotpink": "#ff69b4",
          "indianred ": "#cd5c5c",
          "indigo": "#4b0082",
          "ivory": "#fffff0",
          "khaki": "#f0e68c",
          "lavender": "#e6e6fa",
          "lavenderblush": "#fff0f5",
          "lawngreen": "#7cfc00",
          "lemonchiffon": "#fffacd",
          "lightblue": "#add8e6",
          "lightcoral": "#f08080",
          "lightcyan": "#e0ffff",
          "lightgoldenrodyellow": "#fafad2",
          "lightgrey": "#d3d3d3",
          "lightgreen": "#90ee90",
          "lightpink": "#ffb6c1",
          "lightsalmon": "#ffa07a",
          "lightseagreen": "#20b2aa",
          "lightskyblue": "#87cefa",
          "lightslategray": "#778899",
          "lightsteelblue": "#b0c4de",
          "lightyellow": "#ffffe0",
          "lime": "#00ff00",
          "limegreen": "#32cd32",
          "linen": "#faf0e6",
          "magenta": "#ff00ff",
          "maroon": "#800000",
          "mediumaquamarine": "#66cdaa",
          "mediumblue": "#0000cd",
          "mediumorchid": "#ba55d3",
          "mediumpurple": "#9370d8",
          "mediumseagreen": "#3cb371",
          "mediumslateblue": "#7b68ee",
          "mediumspringgreen": "#00fa9a",
          "mediumturquoise": "#48d1cc",
          "mediumvioletred": "#c71585",
          "midnightblue": "#191970",
          "mintcream": "#f5fffa",
          "mistyrose": "#ffe4e1",
          "moccasin": "#ffe4b5",
          "navajowhite": "#ffdead",
          "navy": "#000080",
          "oldlace": "#fdf5e6",
          "olive": "#808000",
          "olivedrab": "#6b8e23",
          "orange": "#ffa500",
          "orangered": "#ff4500",
          "orchid": "#da70d6",
          "palegoldenrod": "#eee8aa",
          "palegreen": "#98fb98",
          "paleturquoise": "#afeeee",
          "palevioletred": "#d87093",
          "papayawhip": "#ffefd5",
          "peachpuff": "#ffdab9",
          "peru": "#cd853f",
          "pink": "#ffc0cb",
          "plum": "#dda0dd",
          "powderblue": "#b0e0e6",
          "purple": "#800080",
          "red": "#ff0000",
          "rosybrown": "#bc8f8f",
          "royalblue": "#4169e1",
          "saddlebrown": "#8b4513",
          "salmon": "#fa8072",
          "sandybrown": "#f4a460",
          "seagreen": "#2e8b57",
          "seashell": "#fff5ee",
          "sienna": "#a0522d",
          "silver": "#c0c0c0",
          "skyblue": "#87ceeb",
          "slateblue": "#6a5acd",
          "slategray": "#708090",
          "snow": "#fffafa",
          "springgreen": "#00ff7f",
          "steelblue": "#4682b4",
          "tan": "#d2b48c",
          "teal": "#008080",
          "thistle": "#d8bfd8",
          "tomato": "#ff6347",
          "turquoise": "#40e0d0",
          "violet": "#ee82ee",
          "wheat": "#f5deb3",
          "white": "#ffffff",
          "whitesmoke": "#f5f5f5",
          "yellow": "#ffff00",
          "yellowgreen": "#9acd32"
        }[name.toLowerCase()];
      }
      static hexToDescriptor(c) {
        if (c[0] === "#") {
          c = c.substr(1);
        }
        const r = parseInt(c.slice(0, 2), 16);
        const g = parseInt(c.slice(2, 4), 16);
        const b = parseInt(c.slice(4, 6), 16);
        const a = parseInt(c.slice(6, 8), 16);
        const result = { "red": r, "green": g, "blue": b, "alpha": a };
        return result;
      }
      static rgbToDescriptor(colorString) {
        if (colorString.startsWith("rgba(")) {
          colorString = colorString.slice(5, colorString.length - 1);
        }
        if (colorString.startsWith("rgb(")) {
          colorString = colorString.slice(4, colorString.length - 1) + ", 0";
        }
        const components = colorString.split(",");
        const result = {
          "red": Number(components[0]),
          "green": Number(components[1]),
          "blue": Number(components[2]),
          "alpha": Number(components[3])
        };
        return result;
      }
      get colorDescriptor() {
        var descriptor;
        const colorHEXFromName = UIColor15.nameToHex(this.stringValue);
        if (this.stringValue.startsWith("rgb")) {
          descriptor = UIColor15.rgbToDescriptor(this.stringValue);
        } else if (colorHEXFromName) {
          descriptor = UIColor15.hexToDescriptor(colorHEXFromName);
        } else {
          descriptor = UIColor15.hexToDescriptor(this.stringValue);
        }
        return descriptor;
      }
      colorWithRed(red) {
        const descriptor = this.colorDescriptor;
        const result = new UIColor15("rgba(" + red + "," + descriptor.green + "," + descriptor.blue + "," + descriptor.alpha + ")");
        return result;
      }
      colorWithGreen(green) {
        const descriptor = this.colorDescriptor;
        const result = new UIColor15("rgba(" + descriptor.red + "," + green + "," + descriptor.blue + "," + descriptor.alpha + ")");
        return result;
      }
      colorWithBlue(blue) {
        const descriptor = this.colorDescriptor;
        const result = new UIColor15("rgba(" + descriptor.red + "," + descriptor.green + "," + blue + "," + descriptor.alpha + ")");
        return result;
      }
      colorWithAlpha(alpha) {
        const descriptor = this.colorDescriptor;
        const result = new UIColor15("rgba(" + descriptor.red + "," + descriptor.green + "," + descriptor.blue + "," + alpha + ")");
        return result;
      }
      static colorWithRGBA(red, green, blue, alpha = 1) {
        const result = new UIColor15("rgba(" + red + "," + green + "," + blue + "," + alpha + ")");
        return result;
      }
      static colorWithDescriptor(descriptor) {
        const result = new UIColor15("rgba(" + descriptor.red.toFixed(0) + "," + descriptor.green.toFixed(0) + "," + descriptor.blue.toFixed(0) + "," + this.defaultAlphaToOne(descriptor.alpha) + ")");
        return result;
      }
      static defaultAlphaToOne(value = 1) {
        if (value != value) {
          value = 1;
        }
        return value;
      }
      colorByMultiplyingRGB(multiplier) {
        const descriptor = this.colorDescriptor;
        descriptor.red = descriptor.red * multiplier;
        descriptor.green = descriptor.green * multiplier;
        descriptor.blue = descriptor.blue * multiplier;
        const result = UIColor15.colorWithDescriptor(descriptor);
        return result;
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UICoreValues.js
var require_UICoreValues = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UICoreValues.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UICoreValues_exports = {};
    __export2(UICoreValues_exports, {
      UICoreValues: () => UICoreValues6
    });
    module.exports = __toCommonJS2(UICoreValues_exports);
    var import_UIObject = require_UIObject();
    var UICoreValues6 = class {
    };
    UICoreValues6.languageService = import_UIObject.nil;
    UICoreValues6.broadcastEventName = {
      "RouteDidChange": "RouteDidChange",
      "WindowDidResize": "WindowDidResize"
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UIPoint.js
var require_UIPoint = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIPoint.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIPoint_exports = {};
    __export2(UIPoint_exports, {
      UIPoint: () => UIPoint
    });
    module.exports = __toCommonJS2(UIPoint_exports);
    var import_UIObject = require_UIObject();
    var UIPoint = class extends import_UIObject.UIObject {
      constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
      }
      copy() {
        return new UIPoint(this.x, this.y);
      }
      isEqualTo(point) {
        const result = this.x == point.x && this.y == point.y;
        return result;
      }
      scale(zoom) {
        const x = this.x;
        const y = this.y;
        this.x = x * zoom;
        this.y = y * zoom;
        return this;
      }
      add(v) {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
        return this;
      }
      subtract(v) {
        this.x = this.x - v.x;
        this.y = this.y - v.y;
        return this;
      }
      to(b) {
        const a = this;
        const ab = b.copy().add(a.copy().scale(-1));
        return ab;
      }
      pointWithX(x) {
        const result = this.copy();
        result.x = x;
        return result;
      }
      pointWithY(y) {
        const result = this.copy();
        result.y = y;
        return result;
      }
      pointByAddingX(x) {
        return this.pointWithX(this.x + x);
      }
      pointByAddingY(y) {
        return this.pointWithY(this.y + y);
      }
      get length() {
        var result = this.x * this.x + this.y * this.y;
        result = Math.sqrt(result);
        return result;
      }
      didChange(b) {
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UIRectangle.js
var require_UIRectangle = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIRectangle.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIRectangle_exports = {};
    __export2(UIRectangle_exports, {
      UIRectangle: () => UIRectangle4
    });
    module.exports = __toCommonJS2(UIRectangle_exports);
    var import_UIObject = require_UIObject();
    var import_UIPoint = require_UIPoint();
    var UIRectangle4 = class extends import_UIObject.UIObject {
      constructor(x = 0, y = 0, height = 0, width = 0) {
        super();
        this.min = new import_UIPoint.UIPoint(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
        this.max = new import_UIPoint.UIPoint(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
        this.min.didChange = this.rectanglePointDidChange;
        this.max.didChange = this.rectanglePointDidChange;
        this._isBeingUpdated = import_UIObject.NO;
        this.min = new import_UIPoint.UIPoint(x, y);
        this.max = new import_UIPoint.UIPoint(x + width, y + height);
        if ((0, import_UIObject.IS_NIL)(height)) {
          this.max.y = height;
        }
        if ((0, import_UIObject.IS_NIL)(width)) {
          this.max.x = width;
        }
      }
      copy() {
        const result = new UIRectangle4(this.x, this.y, this.height, this.width);
        return result;
      }
      isEqualTo(rectangle) {
        const result = (0, import_UIObject.IS)(rectangle) && this.min.isEqualTo(rectangle.min) && this.max.isEqualTo(rectangle.max);
        return result;
      }
      static zero() {
        const result = new UIRectangle4(0, 0, 0, 0);
        return result;
      }
      containsPoint(point) {
        return this.min.x <= point.x && this.min.y <= point.y && point.x <= this.max.x && point.y <= this.max.y;
      }
      updateByAddingPoint(point) {
        if (!point) {
          point = new import_UIPoint.UIPoint(0, 0);
        }
        this.beginUpdates();
        const min = this.min.copy();
        if (min.x === import_UIObject.nil) {
          min.x = this.max.x;
        }
        if (min.y === import_UIObject.nil) {
          min.y = this.max.y;
        }
        const max = this.max.copy();
        if (max.x === import_UIObject.nil) {
          max.x = this.min.x;
        }
        if (max.y === import_UIObject.nil) {
          max.y = this.min.y;
        }
        this.min.x = Math.min(min.x, point.x);
        this.min.y = Math.min(min.y, point.y);
        this.max.x = Math.max(max.x, point.x);
        this.max.y = Math.max(max.y, point.y);
        this.finishUpdates();
      }
      get height() {
        if (this.max.y === import_UIObject.nil) {
          return import_UIObject.nil;
        }
        return this.max.y - this.min.y;
      }
      set height(height) {
        this.max.y = this.min.y + height;
      }
      get width() {
        if (this.max.x === import_UIObject.nil) {
          return import_UIObject.nil;
        }
        return this.max.x - this.min.x;
      }
      set width(width) {
        this.max.x = this.min.x + width;
      }
      get x() {
        return this.min.x;
      }
      set x(x) {
        this.beginUpdates();
        const width = this.width;
        this.min.x = x;
        this.max.x = this.min.x + width;
        this.finishUpdates();
      }
      get y() {
        return this.min.y;
      }
      set y(y) {
        this.beginUpdates();
        const height = this.height;
        this.min.y = y;
        this.max.y = this.min.y + height;
        this.finishUpdates();
      }
      get topLeft() {
        return this.min.copy();
      }
      get topRight() {
        return new import_UIPoint.UIPoint(this.max.x, this.y);
      }
      get bottomLeft() {
        return new import_UIPoint.UIPoint(this.x, this.max.y);
      }
      get bottomRight() {
        return this.max.copy();
      }
      get center() {
        const result = this.min.copy().add(this.min.to(this.max).scale(0.5));
        return result;
      }
      set center(center) {
        const offset = this.center.to(center);
        this.offsetByPoint(offset);
      }
      offsetByPoint(offset) {
        this.min.add(offset);
        this.max.add(offset);
        return this;
      }
      concatenateWithRectangle(rectangle) {
        this.updateByAddingPoint(rectangle.bottomRight);
        this.updateByAddingPoint(rectangle.topLeft);
        return this;
      }
      intersectionRectangleWithRectangle(rectangle) {
        const result = this.copy();
        result.beginUpdates();
        const min = result.min;
        if (min.x === import_UIObject.nil) {
          min.x = rectangle.max.x - Math.min(result.width, rectangle.width);
        }
        if (min.y === import_UIObject.nil) {
          min.y = rectangle.max.y - Math.min(result.height, rectangle.height);
        }
        const max = result.max;
        if (max.x === import_UIObject.nil) {
          max.x = rectangle.min.x + Math.min(result.width, rectangle.width);
        }
        if (max.y === import_UIObject.nil) {
          max.y = rectangle.min.y + Math.min(result.height, rectangle.height);
        }
        result.min.x = Math.max(result.min.x, rectangle.min.x);
        result.min.y = Math.max(result.min.y, rectangle.min.y);
        result.max.x = Math.min(result.max.x, rectangle.max.x);
        result.max.y = Math.min(result.max.y, rectangle.max.y);
        if (result.height < 0) {
          const averageY = (this.center.y + rectangle.center.y) * 0.5;
          result.min.y = averageY;
          result.max.y = averageY;
        }
        if (result.width < 0) {
          const averageX = (this.center.x + rectangle.center.x) * 0.5;
          result.min.x = averageX;
          result.max.x = averageX;
        }
        result.finishUpdates();
        return result;
      }
      get area() {
        const result = this.height * this.width;
        return result;
      }
      intersectsWithRectangle(rectangle) {
        return this.intersectionRectangleWithRectangle(rectangle).area != 0;
      }
      rectangleWithInsets(left, right, bottom, top) {
        const result = this.copy();
        result.min.x = this.min.x + left;
        result.max.x = this.max.x - right;
        result.min.y = this.min.y + top;
        result.max.y = this.max.y - bottom;
        return result;
      }
      rectangleWithInset(inset) {
        const result = this.rectangleWithInsets(inset, inset, inset, inset);
        return result;
      }
      rectangleWithHeight(height, centeredOnPosition = import_UIObject.nil) {
        if (isNaN(centeredOnPosition)) {
          centeredOnPosition = import_UIObject.nil;
        }
        const result = this.copy();
        result.height = height;
        if (centeredOnPosition != import_UIObject.nil) {
          const change = height - this.height;
          result.offsetByPoint(new import_UIPoint.UIPoint(0, change * centeredOnPosition).scale(-1));
        }
        return result;
      }
      rectangleWithWidth(width, centeredOnPosition = import_UIObject.nil) {
        if (isNaN(centeredOnPosition)) {
          centeredOnPosition = import_UIObject.nil;
        }
        const result = this.copy();
        result.width = width;
        if (centeredOnPosition != import_UIObject.nil) {
          const change = width - this.width;
          result.offsetByPoint(new import_UIPoint.UIPoint(change * centeredOnPosition, 0).scale(-1));
        }
        return result;
      }
      rectangleWithHeightRelativeToWidth(heightRatio = 1, centeredOnPosition = import_UIObject.nil) {
        const result = this.rectangleWithHeight(this.width * heightRatio, centeredOnPosition);
        return result;
      }
      rectangleWithWidthRelativeToHeight(widthRatio = 1, centeredOnPosition = import_UIObject.nil) {
        const result = this.rectangleWithWidth(this.height * widthRatio, centeredOnPosition);
        return result;
      }
      rectangleWithX(x, centeredOnPosition = 0) {
        const result = this.copy();
        result.x = x - result.width * centeredOnPosition;
        return result;
      }
      rectangleWithY(y, centeredOnPosition = 0) {
        const result = this.copy();
        result.y = y - result.height * centeredOnPosition;
        return result;
      }
      rectangleByAddingX(x) {
        const result = this.copy();
        result.x = this.x + x;
        return result;
      }
      rectangleByAddingY(y) {
        const result = this.copy();
        result.y = this.y + y;
        return result;
      }
      rectanglesBySplittingWidth(weights, paddings = 0, absoluteWidths = import_UIObject.nil) {
        if ((0, import_UIObject.IS_NIL)(paddings)) {
          paddings = 1;
        }
        if (!(paddings instanceof Array)) {
          paddings = [paddings].arrayByRepeating(weights.length - 1);
        }
        paddings = paddings.arrayByTrimmingToLengthIfLonger(weights.length - 1);
        if (!(absoluteWidths instanceof Array) && (0, import_UIObject.IS_NOT_NIL)(absoluteWidths)) {
          absoluteWidths = [absoluteWidths].arrayByRepeating(weights.length);
        }
        const result = [];
        const sumOfWeights = weights.reduce(function(a, b, index) {
          if ((0, import_UIObject.IS_NOT_NIL)(absoluteWidths[index])) {
            b = 0;
          }
          return a + b;
        }, 0);
        const sumOfPaddings = paddings.summedValue;
        const sumOfAbsoluteWidths = absoluteWidths.summedValue;
        const totalRelativeWidth = this.width - sumOfPaddings - sumOfAbsoluteWidths;
        var previousCellMaxX = this.x;
        for (var i = 0; i < weights.length; i++) {
          var resultWidth;
          if ((0, import_UIObject.IS_NOT_NIL)(absoluteWidths[i])) {
            resultWidth = absoluteWidths[i] || 0;
          } else {
            resultWidth = totalRelativeWidth * (weights[i] / sumOfWeights);
          }
          const rectangle = this.rectangleWithWidth(resultWidth);
          var padding = 0;
          if (paddings.length > i && paddings[i]) {
            padding = paddings[i];
          }
          rectangle.x = previousCellMaxX;
          previousCellMaxX = rectangle.max.x + padding;
          result.push(rectangle);
        }
        return result;
      }
      rectanglesBySplittingHeight(weights, paddings = 0, absoluteHeights = import_UIObject.nil) {
        if ((0, import_UIObject.IS_NIL)(paddings)) {
          paddings = 1;
        }
        if (!(paddings instanceof Array)) {
          paddings = [paddings].arrayByRepeating(weights.length - 1);
        }
        paddings = paddings.arrayByTrimmingToLengthIfLonger(weights.length - 1);
        if (!(absoluteHeights instanceof Array) && (0, import_UIObject.IS_NOT_NIL)(absoluteHeights)) {
          absoluteHeights = [absoluteHeights].arrayByRepeating(weights.length);
        }
        const result = [];
        const sumOfWeights = weights.reduce(function(a, b, index) {
          if ((0, import_UIObject.IS_NOT_NIL)(absoluteHeights[index])) {
            b = 0;
          }
          return a + b;
        }, 0);
        const sumOfPaddings = paddings.summedValue;
        const sumOfAbsoluteHeights = absoluteHeights.summedValue;
        const totalRelativeHeight = this.height - sumOfPaddings - sumOfAbsoluteHeights;
        var previousCellMaxY = this.y;
        for (var i = 0; i < weights.length; i++) {
          var resultHeight;
          if ((0, import_UIObject.IS_NOT_NIL)(absoluteHeights[i])) {
            resultHeight = absoluteHeights[i] || 0;
          } else {
            resultHeight = totalRelativeHeight * (weights[i] / sumOfWeights);
          }
          const rectangle = this.rectangleWithHeight(resultHeight);
          var padding = 0;
          if (paddings.length > i && paddings[i]) {
            padding = paddings[i];
          }
          rectangle.y = previousCellMaxY;
          previousCellMaxY = rectangle.max.y + padding;
          result.push(rectangle);
        }
        return result;
      }
      rectanglesByEquallySplittingWidth(numberOfFrames, padding = 0) {
        const result = [];
        const totalPadding = padding * (numberOfFrames - 1);
        const resultWidth = (this.width - totalPadding) / numberOfFrames;
        for (var i = 0; i < numberOfFrames; i++) {
          const rectangle = this.rectangleWithWidth(resultWidth, i / (numberOfFrames - 1));
          result.push(rectangle);
        }
        return result;
      }
      rectanglesByEquallySplittingHeight(numberOfFrames, padding = 0) {
        const result = [];
        const totalPadding = padding * (numberOfFrames - 1);
        const resultHeight = (this.height - totalPadding) / numberOfFrames;
        for (var i = 0; i < numberOfFrames; i++) {
          const rectangle = this.rectangleWithHeight(resultHeight, i / (numberOfFrames - 1));
          result.push(rectangle);
        }
        return result;
      }
      distributeViewsAlongWidth(views, weights = 1, paddings, absoluteWidths) {
        if (!(weights instanceof Array)) {
          weights = [weights].arrayByRepeating(views.length);
        }
        const frames = this.rectanglesBySplittingWidth(weights, paddings, absoluteWidths);
        frames.forEach((frame, index, array) => (0, import_UIObject.FIRST_OR_NIL)(views[index]).frame = frame);
        return this;
      }
      distributeViewsAlongHeight(views, weights = 1, paddings, absoluteHeights) {
        if (!(weights instanceof Array)) {
          weights = [weights].arrayByRepeating(views.length);
        }
        const frames = this.rectanglesBySplittingHeight(weights, paddings, absoluteHeights);
        frames.forEach((frame, index, array) => (0, import_UIObject.FIRST_OR_NIL)(views[index]).frame = frame);
        return this;
      }
      distributeViewsEquallyAlongWidth(views, padding) {
        const frames = this.rectanglesByEquallySplittingWidth(views.length, padding);
        frames.forEach(function(frame, index, array) {
          views[index].frame = frame;
        });
        return this;
      }
      distributeViewsEquallyAlongHeight(views, padding) {
        const frames = this.rectanglesByEquallySplittingHeight(views.length, padding);
        frames.forEach(function(frame, index, array) {
          views[index].frame = frame;
        });
        return this;
      }
      rectangleForNextRow(padding = 0, height = this.height) {
        const result = this.rectangleWithY(this.max.y + padding);
        if (height != this.height) {
          result.height = height;
        }
        return result;
      }
      rectangleForNextColumn(padding = 0, width = this.width) {
        const result = this.rectangleWithX(this.max.x + padding);
        if (width != this.width) {
          result.width = width;
        }
        return result;
      }
      rectangleForPreviousRow(padding = 0) {
        const result = this.rectangleWithY(this.min.y - this.height - padding);
        return result;
      }
      rectangleForPreviousColumn(padding = 0) {
        const result = this.rectangleWithX(this.min.x - this.width - padding);
        return result;
      }
      static boundingBoxForPoints(points) {
        const result = new UIRectangle4();
        for (var i = 0; i < points.length; i++) {
          result.updateByAddingPoint(points[i]);
        }
        return result;
      }
      beginUpdates() {
        this._isBeingUpdated = import_UIObject.YES;
      }
      finishUpdates() {
        this._isBeingUpdated = import_UIObject.NO;
        this.didChange();
      }
      didChange() {
      }
      _rectanglePointDidChange() {
        if (!this._isBeingUpdated) {
          this.didChange();
        }
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UICoreExtensions.js
var require_UICoreExtensions = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UICoreExtensions.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var __async2 = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    var UICoreExtensions_exports = {};
    __export2(UICoreExtensions_exports, {
      PrimitiveNumber: () => PrimitiveNumber,
      promisedProperties: () => promisedProperties
    });
    module.exports = __toCommonJS2(UICoreExtensions_exports);
    var import_UICoreExtensionValueObject = require_UICoreExtensionValueObject();
    var import_UIObject = require_UIObject();
    var YES13 = true;
    var NO11 = false;
    if ("removeElementAtIndex" in Array.prototype == NO11) {
      Array.prototype.removeElementAtIndex = function(index) {
        if (index >= 0 && index < this.length) {
          this.splice(index, 1);
        }
      };
    }
    if ("removeElement" in Array.prototype == NO11) {
      Array.prototype.removeElement = function(element) {
        this.removeElementAtIndex(this.indexOf(element));
      };
    }
    if ("insertElementAtIndex" in Array.prototype == NO11) {
      Array.prototype.insertElementAtIndex = function(index, element) {
        if (index >= 0 && index <= this.length) {
          this.splice(index, 0, element);
        }
      };
    }
    if ("replaceElementAtIndex" in Array.prototype == NO11) {
      Array.prototype.replaceElementAtIndex = function(index, element) {
        this.removeElementAtIndex(index);
        this.insertElementAtIndex(index, element);
      };
    }
    if ("contains" in Array.prototype == NO11) {
      Array.prototype.contains = function(element) {
        const result = this.indexOf(element) != -1;
        return result;
      };
    }
    if ("containsAny" in Array.prototype == NO11) {
      Array.prototype.containsAny = function(elements) {
        const result = this.anyMatch(function(element, index, array) {
          return elements.contains(element);
        });
        return result;
      };
    }
    if ("anyMatch" in Array.prototype == NO11) {
      Array.prototype.anyMatch = function(functionToCall) {
        const result = this.findIndex(functionToCall) > -1;
        return result;
      };
    }
    if ("noneMatch" in Array.prototype == NO11) {
      Array.prototype.noneMatch = function(functionToCall) {
        const result = this.findIndex(functionToCall) == -1;
        return result;
      };
    }
    if ("allMatch" in Array.prototype == NO11) {
      Array.prototype.allMatch = function(functionToCall) {
        function reversedFunction(value, index, array) {
          return !functionToCall(value, index, array);
        }
        const result = this.findIndex(reversedFunction) == -1;
        return result;
      };
    }
    if ("findAsyncSequential" in Array.prototype == NO11) {
      Array.prototype.findAsyncSequential = function(functionToCall) {
        function findAsyncSequential(array, predicate) {
          return __async2(this, null, function* () {
            for (const t of array) {
              if (yield predicate(t)) {
                return t;
              }
            }
            return void 0;
          });
        }
        const result = findAsyncSequential(this, functionToCall);
        return result;
      };
    }
    if ("groupedBy" in Array.prototype == NO11) {
      Array.prototype.groupedBy = function(funcProp) {
        return this.reduce(function(acc, val) {
          (acc[funcProp(val)] = acc[funcProp(val)] || []).push(val);
          return acc;
        }, {});
      };
    }
    if ("firstElement" in Array.prototype == NO11) {
      Object.defineProperty(Array.prototype, "firstElement", {
        get: function firstElement() {
          const result = this[0];
          return result;
        },
        set: function(element) {
          if (this.length == 0) {
            this.push(element);
            return;
          }
          this[0] = element;
        }
      });
    }
    if ("lastElement" in Array.prototype == NO11) {
      Object.defineProperty(Array.prototype, "lastElement", {
        get: function lastElement() {
          const result = this[this.length - 1];
          return result;
        },
        set: function(element) {
          if (this.length == 0) {
            this.push(element);
            return;
          }
          this[this.length - 1] = element;
        }
      });
    }
    if ("everyElement" in Array.prototype == NO11) {
      Object.defineProperty(Array.prototype, "everyElement", {
        get: function everyElement() {
          var valueKeys = [];
          const targetFunction = (objects) => {
            return this.map((element, index, array) => {
              var elementFunction = import_UIObject.UIObject.valueForKeyPath(valueKeys.join("."), element).bind(
                element,
                objects
              );
              return elementFunction();
            });
          };
          const result = new Proxy(
            targetFunction,
            {
              get: (target, key, receiver) => {
                if (key == "UI_elementValues") {
                  return this.map((element, index, array) => import_UIObject.UIObject.valueForKeyPath(
                    valueKeys.join("."),
                    element
                  ));
                }
                valueKeys.push(key);
                return result;
              },
              set: (target, key, value, receiver) => {
                valueKeys.push(key);
                this.forEach((element, index, array) => {
                  import_UIObject.UIObject.setValueForKeyPath(valueKeys.join("."), value, element, YES13);
                });
                return true;
              }
            }
          );
          return result;
        },
        set: function(element) {
          for (var i = 0; i < this.length; ++i) {
            this[i] = element;
          }
        }
      });
    }
    if ("copy" in Array.prototype == NO11) {
      Array.prototype.copy = function() {
        const result = this.slice(0);
        return result;
      };
    }
    if ("arrayByRepeating" in Array.prototype == NO11) {
      Array.prototype.arrayByRepeating = function(numberOfRepetitions) {
        const result = [];
        for (var i = 0; i < numberOfRepetitions; i++) {
          this.forEach(function(element, index, array) {
            result.push(element);
          });
        }
        return result;
      };
    }
    if ("arrayByTrimmingToLengthIfLonger" in Array.prototype == NO11) {
      Array.prototype.arrayByTrimmingToLengthIfLonger = function(maxLength) {
        const result = [];
        for (var i = 0; i < maxLength && i < this.length; i++) {
          result.push(this[i]);
        }
        return result;
      };
    }
    if ("summedValue" in Array.prototype == NO11) {
      Object.defineProperty(Array.prototype, "summedValue", {
        get: function summedValue() {
          const result = this.reduce(function(a, b) {
            return a + b;
          }, 0);
          return result;
        }
      });
    }
    Array.prototype.max = function() {
      return Math.max.apply(null, this);
    };
    Array.prototype.min = function() {
      return Math.min.apply(null, this);
    };
    if ("isEqualToArray" in Array.prototype == YES13) {
      console.warn(
        "Overriding existing Array.prototype.isEqualToArray. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
      );
    }
    Array.prototype.isEqualToArray = function(array, keyPath) {
      if (!array) {
        return false;
      }
      if (this.length != array.length) {
        return false;
      }
      var i = 0;
      const l = this.length;
      for (; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array && !keyPath) {
          if (!this[i].isEqualToArray(array[i])) {
            return false;
          }
        } else if (keyPath && import_UIObject.UIObject.valueForKeyPath(keyPath, this[i]) != import_UIObject.UIObject.valueForKeyPath(keyPath, array[i])) {
          return false;
        } else if (this[i] != array[i]) {
          return false;
        }
      }
      return true;
    };
    Object.defineProperty(Array.prototype, "isEqualToArray", { enumerable: false });
    if ("forEach" in Object.prototype == NO11) {
      Object.prototype.forEach = function(callbackFunction) {
        const keys = Object.keys(this);
        keys.forEach(function(key, index, array) {
          callbackFunction(this[key], key);
        }.bind(this));
      };
      Object.defineProperty(Object.prototype, "forEach", { enumerable: false });
    }
    if ("allValues" in Object.prototype == NO11) {
      Object.defineProperty(Object.prototype, "allValues", {
        get: function() {
          const values = [];
          this.forEach(function(value) {
            values.push(value);
          });
          return values;
        }
      });
    }
    if ("allKeys" in Object.prototype == NO11) {
      Object.defineProperty(Object.prototype, "allKeys", {
        get: function() {
          const values = Object.keys(this);
          return values;
        }
      });
    }
    if ("objectByCopyingValuesRecursivelyFromObject" in Object.prototype == NO11) {
      Object.prototype.objectByCopyingValuesRecursivelyFromObject = function(object) {
        function isAnObject(item) {
          return item && typeof item === "object" && !Array.isArray(item);
        }
        function mergeRecursively(target, source) {
          const output = Object.assign({}, target);
          if (isAnObject(target) && isAnObject(source)) {
            Object.keys(source).forEach(function(key) {
              if (isAnObject(source[key])) {
                output[key] = mergeRecursively(target[key], source[key]);
              } else {
                Object.assign(output, { [key]: source[key] });
              }
            });
          }
          return output;
        }
        const result = mergeRecursively(this, object);
        return result;
      };
      Object.defineProperty(Object.prototype, "objectByCopyingValuesRecursivelyFromObject", { enumerable: false });
    }
    if ("asValueObject" in Object.prototype == NO11) {
      Object.prototype.asValueObject = function() {
        const result = new import_UICoreExtensionValueObject.UICoreExtensionValueObject(this);
        return result;
      };
      Object.defineProperty(Object.prototype, "asValueObject", { enumerable: false });
    }
    function promisedProperties(object) {
      let promisedProperties2 = [];
      const objectKeys = Object.keys(object);
      objectKeys.forEach((key) => promisedProperties2.push(object[key]));
      return Promise.all(promisedProperties2).then((resolvedValues) => {
        return resolvedValues.reduce((resolvedObject, property, index) => {
          resolvedObject[objectKeys[index]] = property;
          return resolvedObject;
        }, object);
      });
    }
    if ("contains" in String.prototype == NO11) {
      String.prototype.contains = function(string) {
        const result = this.indexOf(string) != -1;
        return result;
      };
      Object.defineProperty(Object.prototype, "contains", { enumerable: false });
    }
    if ("capitalizedString" in String.prototype == NO11) {
      Object.defineProperty(Object.prototype, "capitalizedString", {
        get: function() {
          const result = this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
          return result;
        }
      });
    }
    if ("numericalValue" in String.prototype == NO11) {
      Object.defineProperty(String.prototype, "numericalValue", {
        get: function numericalValue() {
          const result = Number(this);
          return result;
        }
      });
    }
    if ("isAString" in String.prototype == NO11) {
      String.prototype.isAString = YES13;
    }
    if ("isANumber" in Number.prototype == NO11) {
      Number.prototype.isANumber = YES13;
    }
    if ("integerValue" in Number.prototype == NO11) {
      Object.defineProperty(Number.prototype, "integerValue", {
        get: function() {
          const result = parseInt("" + (Math.round(this) + 0.5));
          return result;
        }
      });
    }
    var PrimitiveNumber = class {
      static [Symbol.hasInstance](x) {
        return;
      }
    };
    if ("integerValue" in Boolean.prototype == NO11) {
      Object.defineProperty(Boolean.prototype, "integerValue", {
        get: function() {
          if (this == true) {
            return 1;
          }
          return 0;
        }
      });
    }
    if ("dateString" in Date.prototype == NO11) {
      Object.defineProperty(Date.prototype, "dateString", {
        get: function dateString() {
          const result = ("0" + this.getDate()).slice(-2) + "-" + ("0" + (this.getMonth() + 1)).slice(-2) + "-" + this.getFullYear() + " " + ("0" + this.getHours()).slice(-2) + ":" + ("0" + this.getMinutes()).slice(-2);
          return result;
        }
      });
    }
  }
});

// node_modules/uicore-ts/compiledScripts/UIView.js
var require_UIView = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIView.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIView_exports = {};
    __export2(UIView_exports, {
      UIView: () => UIView15
    });
    module.exports = __toCommonJS2(UIView_exports);
    var import_ClientCheckers = require_ClientCheckers();
    var import_UIColor = require_UIColor();
    var import_UICoreValues = require_UICoreValues();
    var import_UIObject = require_UIObject();
    var import_UIPoint = require_UIPoint();
    var import_UIRectangle = require_UIRectangle();
    var import_UICoreExtensions = require_UICoreExtensions();
    if (!window.AutoLayout) {
      window.AutoLayout = import_UIObject.nil;
    }
    var _UIView = class extends import_UIObject.UIObject {
      constructor(elementID = "UIView" + _UIView.nextIndex, viewHTMLElement = null, elementType = null, initViewData) {
        super();
        this._nativeSelectionEnabled = import_UIObject.YES;
        this._enabled = import_UIObject.YES;
        this._backgroundColor = import_UIColor.UIColor.transparentColor;
        this._localizedTextObject = import_UIObject.nil;
        this._controlEventTargets = {};
        this._viewControllerLayoutFunction = import_UIObject.nil;
        this._willLayoutSubviewsDelegateFunction = import_UIObject.nil;
        this._didLayoutSubviewsDelegateFunction = import_UIObject.nil;
        this._didReceiveBroadcastEventDelegateFunction = import_UIObject.nil;
        this._updateLayoutFunction = import_UIObject.nil;
        this._isHidden = import_UIObject.NO;
        this.pausesPointerEvents = import_UIObject.NO;
        this.stopsPointerEventPropagation = import_UIObject.YES;
        this._pointerDragThreshold = 2;
        this.ignoresTouches = import_UIObject.NO;
        this.ignoresMouse = import_UIObject.NO;
        this.forceIntrinsicSizeZero = import_UIObject.NO;
        this.controlEvent = _UIView.controlEvent;
        _UIView._UIViewIndex = _UIView.nextIndex;
        this._UIViewIndex = _UIView._UIViewIndex;
        this._styleClasses = [];
        this._initViewHTMLElement(elementID, viewHTMLElement, elementType);
        this.subviews = [];
        this.superview = import_UIObject.nil;
        this._constraints = [];
        this._updateLayoutFunction = import_UIObject.nil;
        this._frameTransform = "";
        this.initView(this.viewHTMLElement.id, this.viewHTMLElement, initViewData);
        this._initViewCSSSelectorsIfNeeded();
        this._loadUIEvents();
        this.setNeedsLayout();
      }
      static get nextIndex() {
        return _UIView._UIViewIndex + 1;
      }
      static get pageHeight() {
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        );
        return height;
      }
      static get pageWidth() {
        const body = document.body;
        const html = document.documentElement;
        const width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
        return width;
      }
      initView(elementID, viewHTMLElement, initViewData) {
      }
      centerInContainer() {
        this.style.left = "50%";
        this.style.top = "50%";
        this.style.transform = "translateX(-50%) translateY(-50%)";
      }
      centerXInContainer() {
        this.style.left = "50%";
        this.style.transform = "translateX(-50%)";
      }
      centerYInContainer() {
        this.style.top = "50%";
        this.style.transform = "translateY(-50%)";
      }
      _initViewHTMLElement(elementID, viewHTMLElement, elementType = "div") {
        if (!(0, import_UIObject.IS)(elementType)) {
          elementType = "div";
        }
        if (!(0, import_UIObject.IS)(viewHTMLElement)) {
          this._viewHTMLElement = this.createElement(elementID, elementType);
          this.style.position = "absolute";
          this.style.margin = "0";
        } else {
          this._viewHTMLElement = viewHTMLElement;
        }
        if ((0, import_UIObject.IS)(elementID)) {
          this.viewHTMLElement.id = elementID;
        }
        this.viewHTMLElement.obeyAutolayout = import_UIObject.YES;
        this.viewHTMLElement.UIView = this;
        this.addStyleClass(this.styleClassName);
      }
      set nativeSelectionEnabled(selectable) {
        this._nativeSelectionEnabled = selectable;
        if (!selectable) {
          this.style.cssText = this.style.cssText + " -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;";
        } else {
          this.style.cssText = this.style.cssText + " -webkit-touch-callout: text; -webkit-user-select: text; -khtml-user-select: text; -moz-user-select: text; -ms-user-select: text; user-select: text;";
        }
      }
      get nativeSelectionEnabled() {
        return this._nativeSelectionEnabled;
      }
      get styleClassName() {
        const result = "UICore_UIView_" + this.class.name;
        return result;
      }
      _initViewCSSSelectorsIfNeeded() {
        if (!this.class._areViewCSSSelectorsInitialized) {
          this.initViewStyleSelectors();
          this.class._areViewCSSSelectorsInitialized = import_UIObject.YES;
        }
      }
      initViewStyleSelectors() {
      }
      initStyleSelector(selector, style) {
        const styleRules = _UIView.getStyleRules(selector);
        if (!styleRules) {
          _UIView.createStyleSelector(selector, style);
        }
      }
      createElement(elementID, elementType) {
        let result = document.getElementById(elementID);
        if (!result) {
          result = document.createElement(elementType);
        }
        return result;
      }
      get viewHTMLElement() {
        return this._viewHTMLElement;
      }
      get elementID() {
        return this.viewHTMLElement.id;
      }
      setInnerHTML(key, defaultString, parameters) {
        this._innerHTMLKey = key;
        this._defaultInnerHTML = defaultString;
        this._parameters = parameters;
        const languageName = import_UICoreValues.UICoreValues.languageService.currentLanguageKey;
        const result = import_UICoreValues.UICoreValues.languageService.stringForKey(key, languageName, defaultString, parameters);
        this.innerHTML = result;
      }
      _setInnerHTMLFromKeyIfPossible() {
        if (this._innerHTMLKey && this._defaultInnerHTML) {
          this.setInnerHTML(this._innerHTMLKey, this._defaultInnerHTML, this._parameters);
        }
      }
      _setInnerHTMLFromLocalizedTextObjectIfPossible() {
        if ((0, import_UIObject.IS)(this._localizedTextObject)) {
          this.innerHTML = import_UICoreValues.UICoreValues.languageService.stringForCurrentLanguage(this._localizedTextObject);
        }
      }
      get localizedTextObject() {
        return this._localizedTextObject;
      }
      set localizedTextObject(localizedTextObject) {
        this._localizedTextObject = localizedTextObject;
        this._setInnerHTMLFromLocalizedTextObjectIfPossible();
      }
      get innerHTML() {
        return this.viewHTMLElement.innerHTML;
      }
      set innerHTML(innerHTML) {
        if (this.innerHTML != innerHTML) {
          this.viewHTMLElement.innerHTML = (0, import_UIObject.FIRST)(innerHTML, "");
        }
      }
      set hoverText(hoverText) {
        this.viewHTMLElement.setAttribute("title", hoverText);
      }
      get hoverText() {
        return this.viewHTMLElement.getAttribute("title");
      }
      get scrollSize() {
        const result = new import_UIRectangle.UIRectangle(0, 0, this.viewHTMLElement.scrollHeight, this.viewHTMLElement.scrollWidth);
        return result;
      }
      get dialogView() {
        if (!(0, import_UIObject.IS)(this.superview)) {
          return import_UIObject.nil;
        }
        if (!this["_isAUIDialogView"]) {
          return this.superview.dialogView;
        }
        return this;
      }
      get rootView() {
        if ((0, import_UIObject.IS)(this.superview)) {
          return this.superview.rootView;
        }
        return this;
      }
      set enabled(enabled) {
        this._enabled = enabled;
        this.updateContentForCurrentEnabledState();
      }
      get enabled() {
        return this._enabled;
      }
      updateContentForCurrentEnabledState() {
        this.hidden = !this.enabled;
        this.userInteractionEnabled = this.enabled;
      }
      get tabIndex() {
        return Number(this.viewHTMLElement.getAttribute("tabindex"));
      }
      set tabIndex(index) {
        this.viewHTMLElement.setAttribute("tabindex", "" + index);
      }
      get styleClasses() {
        return this._styleClasses;
      }
      set styleClasses(styleClasses) {
        this._styleClasses = styleClasses;
      }
      hasStyleClass(styleClass) {
        if (!(0, import_UIObject.IS)(styleClass)) {
          return import_UIObject.NO;
        }
        const index = this.styleClasses.indexOf(styleClass);
        if (index > -1) {
          return import_UIObject.YES;
        }
        return import_UIObject.NO;
      }
      addStyleClass(styleClass) {
        if (!(0, import_UIObject.IS)(styleClass)) {
          return;
        }
        if (!this.hasStyleClass(styleClass)) {
          this._styleClasses.push(styleClass);
        }
      }
      removeStyleClass(styleClass) {
        if (!(0, import_UIObject.IS)(styleClass)) {
          return;
        }
        const index = this.styleClasses.indexOf(styleClass);
        if (index > -1) {
          this.styleClasses.splice(index, 1);
        }
      }
      static findViewWithElementID(elementID) {
        const viewHTMLElement = document.getElementById(elementID);
        if ((0, import_UIObject.IS_NOT)(viewHTMLElement)) {
          return import_UIObject.nil;
        }
        const result = viewHTMLElement.UIView;
        return result;
      }
      static createStyleSelector(selector, style) {
        return;
        if (!document.styleSheets) {
          return;
        }
        if (document.getElementsByTagName("head").length == 0) {
          return;
        }
        var styleSheet;
        var mediaType;
        if (document.styleSheets.length > 0) {
          for (var i = 0, l = document.styleSheets.length; i < l; i++) {
            if (document.styleSheets[i].disabled) {
              continue;
            }
            const media = document.styleSheets[i].media;
            mediaType = typeof media;
            if (mediaType === "string") {
              if (media === "" || media.indexOf("screen") !== -1) {
                styleSheet = document.styleSheets[i];
              }
            } else if (mediaType == "object") {
              if (media.mediaText === "" || media.mediaText.indexOf("screen") !== -1) {
                styleSheet = document.styleSheets[i];
              }
            }
            if (typeof styleSheet !== "undefined") {
              break;
            }
          }
        }
        if (typeof styleSheet === "undefined") {
          const styleSheetElement = document.createElement("style");
          styleSheetElement.type = "text/css";
          document.getElementsByTagName("head")[0].appendChild(styleSheetElement);
          for (i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].disabled) {
              continue;
            }
            styleSheet = document.styleSheets[i];
          }
          mediaType = typeof styleSheet.media;
        }
        if (mediaType === "string") {
          for (var i = 0, l = styleSheet.rules.length; i < l; i++) {
            if (styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
              styleSheet.rules[i].style.cssText = style;
              return;
            }
          }
          styleSheet.addRule(selector, style);
        } else if (mediaType === "object") {
          var styleSheetLength = 0;
          try {
            styleSheetLength = styleSheet.cssRules ? styleSheet.cssRules.length : 0;
          } catch (error) {
          }
          for (var i = 0; i < styleSheetLength; i++) {
            if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
              styleSheet.cssRules[i].style.cssText = style;
              return;
            }
          }
          styleSheet.insertRule(selector + "{" + style + "}", styleSheetLength);
        }
      }
      static getStyleRules(selector) {
        var selector = selector.toLowerCase();
        for (var i = 0; i < document.styleSheets.length; i++) {
          const styleSheet = document.styleSheets[i];
          var styleRules;
          try {
            styleRules = styleSheet.cssRules ? styleSheet.cssRules : styleSheet.rules;
          } catch (error) {
          }
          return styleRules;
        }
      }
      get style() {
        return this.viewHTMLElement.style;
      }
      get computedStyle() {
        return getComputedStyle(this.viewHTMLElement);
      }
      get hidden() {
        return this._isHidden;
      }
      set hidden(v) {
        this._isHidden = v;
        if (this._isHidden) {
          this.style.visibility = "hidden";
        } else {
          this.style.visibility = "visible";
        }
      }
      static set pageScale(scale) {
        _UIView._pageScale = scale;
        const zoom = scale;
        const width = 100 / zoom;
        const viewHTMLElement = import_UICoreValues.UICoreValues.main.rootViewController.view.viewHTMLElement;
        viewHTMLElement.style.transformOrigin = "left top";
        viewHTMLElement.style.transform = "scale(" + zoom + ")";
        viewHTMLElement.style.width = width + "%";
      }
      static get pageScale() {
        return _UIView._pageScale;
      }
      calculateAndSetViewFrame() {
      }
      get frame() {
        var result = this._frame;
        if (!result) {
          result = new import_UIRectangle.UIRectangle(1 * this.viewHTMLElement.offsetLeft, 1 * this.viewHTMLElement.offsetTop, 1 * this.viewHTMLElement.offsetHeight, 1 * this.viewHTMLElement.offsetWidth);
          result.zIndex = 0;
        }
        return result.copy();
      }
      set frame(rectangle) {
        if ((0, import_UIObject.IS)(rectangle)) {
          this.setFrame(rectangle);
        }
      }
      setFrame(rectangle, zIndex = 0, performUncheckedLayout = import_UIObject.NO) {
        const frame = this._frame || new import_UIRectangle.UIRectangle(import_UIObject.nil, import_UIObject.nil, import_UIObject.nil, import_UIObject.nil);
        if (zIndex != void 0) {
          rectangle.zIndex = zIndex;
        }
        this._frame = rectangle;
        if (frame && frame.isEqualTo(rectangle) && !performUncheckedLayout) {
          return;
        }
        _UIView._setAbsoluteSizeAndPosition(
          this.viewHTMLElement,
          rectangle.topLeft.x,
          rectangle.topLeft.y,
          rectangle.width,
          rectangle.height,
          rectangle.zIndex
        );
        if (frame.height != rectangle.height || frame.width != rectangle.width || performUncheckedLayout) {
          this.setNeedsLayout();
          this.boundsDidChange();
        }
      }
      get bounds() {
        var result;
        if ((0, import_UIObject.IS_NOT)(this._frame)) {
          result = new import_UIRectangle.UIRectangle(0, 0, 1 * this.viewHTMLElement.offsetHeight, 1 * this.viewHTMLElement.offsetWidth);
        } else {
          result = this.frame.copy();
          result.x = 0;
          result.y = 0;
        }
        return result;
      }
      set bounds(rectangle) {
        const frame = this.frame;
        this.frame = new import_UIRectangle.UIRectangle(frame.topLeft.x, frame.topLeft.y, rectangle.height, rectangle.width);
      }
      boundsDidChange() {
      }
      setPosition(left = import_UIObject.nil, right = import_UIObject.nil, bottom = import_UIObject.nil, top = import_UIObject.nil, height = import_UIObject.nil, width = import_UIObject.nil) {
        const previousBounds = this.bounds;
        this.setStyleProperty("left", left);
        this.setStyleProperty("right", right);
        this.setStyleProperty("bottom", bottom);
        this.setStyleProperty("top", top);
        this.setStyleProperty("height", height);
        this.setStyleProperty("width", width);
        const bounds = this.bounds;
        if (bounds.height != previousBounds.height || bounds.width != previousBounds.width) {
          this.setNeedsLayout();
          this.boundsDidChange();
        }
      }
      setSizes(height, width) {
        const previousBounds = this.bounds;
        this.setStyleProperty("height", height);
        this.setStyleProperty("width", width);
        const bounds = this.bounds;
        if (bounds.height != previousBounds.height || bounds.width != previousBounds.width) {
          this.setNeedsLayout();
          this.boundsDidChange();
        }
      }
      setMinSizes(height, width) {
        const previousBounds = this.bounds;
        this.setStyleProperty("minHeight", height);
        this.setStyleProperty("minWidth", width);
        const bounds = this.bounds;
        if (bounds.height != previousBounds.height || bounds.width != previousBounds.width) {
          this.setNeedsLayout();
          this.boundsDidChange();
        }
      }
      setMaxSizes(height, width) {
        const previousBounds = this.bounds;
        this.setStyleProperty("maxHeight", height);
        this.setStyleProperty("maxWidth", width);
        const bounds = this.bounds;
        if (bounds.height != previousBounds.height || bounds.width != previousBounds.width) {
          this.setNeedsLayout();
          this.boundsDidChange();
        }
      }
      setMargin(margin) {
        const previousBounds = this.bounds;
        this.setStyleProperty("margin", margin);
        const bounds = this.bounds;
        if (bounds.height != previousBounds.height || bounds.width != previousBounds.width) {
          this.setNeedsLayout();
          this.boundsDidChange();
        }
      }
      setMargins(left, right, bottom, top) {
        const previousBounds = this.bounds;
        this.setStyleProperty("marginLeft", left);
        this.setStyleProperty("marginRight", right);
        this.setStyleProperty("marginBottom", bottom);
        this.setStyleProperty("marginTop", top);
        const bounds = this.bounds;
        if (bounds.height != previousBounds.height || bounds.width != previousBounds.width) {
          this.setNeedsLayout();
          this.boundsDidChange();
        }
      }
      setPadding(padding) {
        const previousBounds = this.bounds;
        this.setStyleProperty("padding", padding);
        const bounds = this.bounds;
        if (bounds.height != previousBounds.height || bounds.width != previousBounds.width) {
          this.setNeedsLayout();
          this.boundsDidChange();
        }
      }
      setPaddings(left, right, bottom, top) {
        const previousBounds = this.bounds;
        this.setStyleProperty("paddingLeft", left);
        this.setStyleProperty("paddingRight", right);
        this.setStyleProperty("paddingBottom", bottom);
        this.setStyleProperty("paddingTop", top);
        const bounds = this.bounds;
        if (bounds.height != previousBounds.height || bounds.width != previousBounds.width) {
          this.setNeedsLayout();
          this.boundsDidChange();
        }
      }
      setBorder(radius = import_UIObject.nil, width = 1, color = import_UIColor.UIColor.blackColor, style = "solid") {
        this.setStyleProperty("borderStyle", style);
        this.setStyleProperty("borderRadius", radius);
        this.setStyleProperty("borderColor", color.stringValue);
        this.setStyleProperty("borderWidth", width);
      }
      setStyleProperty(propertyName, value) {
        try {
          if ((0, import_UIObject.IS_NIL)(value)) {
            return;
          }
          if ((0, import_UIObject.IS_DEFINED)(value) && value.isANumber) {
            value = "" + value.integerValue + "px";
          }
          this.style[propertyName] = value;
        } catch (exception) {
          console.log(exception);
        }
      }
      get userInteractionEnabled() {
        const result = this.style.pointerEvents != "none";
        return result;
      }
      set userInteractionEnabled(userInteractionEnabled) {
        if (userInteractionEnabled) {
          this.style.pointerEvents = "";
        } else {
          this.style.pointerEvents = "none";
        }
      }
      get backgroundColor() {
        return this._backgroundColor;
      }
      set backgroundColor(backgroundColor) {
        this._backgroundColor = backgroundColor;
        this.style.backgroundColor = backgroundColor.stringValue;
      }
      get alpha() {
        return 1 * this.style.opacity;
      }
      set alpha(alpha) {
        this.style.opacity = "" + alpha;
      }
      static animateViewOrViewsWithDurationDelayAndFunction(viewOrViews, duration, delay, timingStyle = "cubic-bezier(0.25,0.1,0.25,1)", transformFunction, transitioncompletionFunction) {
        function callTransitioncompletionFunction() {
          (transitioncompletionFunction || import_UIObject.nil)();
          viewOrViews.forEach(function(view2, index, array) {
            view2.animationDidFinish();
          });
        }
        if (import_ClientCheckers.IS_FIREFOX) {
          new import_UIObject.UIObject().performFunctionWithDelay(delay + duration, callTransitioncompletionFunction);
        }
        if (!(viewOrViews instanceof Array)) {
          viewOrViews = [viewOrViews];
        }
        const transitionStyles = [];
        const transitionDurations = [];
        const transitionDelays = [];
        const transitionTimings = [];
        for (var i = 0; i < viewOrViews.length; i++) {
          var view = viewOrViews[i];
          if (view.viewHTMLElement) {
            view = view.viewHTMLElement;
          }
          view.addEventListener("transitionend", transitionDidFinish, true);
          transitionStyles.push(view.style.transition);
          transitionDurations.push(view.style.transitionDuration);
          transitionDelays.push(view.style.transitionDelay);
          transitionTimings.push(view.style.transitionTimingFunction);
          view.style.transition = "all";
          view.style.transitionDuration = "" + duration + "s";
          view.style.transitionDelay = "" + delay + "s";
          view.style.transitionTimingFunction = timingStyle;
        }
        transformFunction();
        const transitionObject = {
          "finishImmediately": finishTransitionImmediately,
          "didFinish": transitionDidFinishManually,
          "views": viewOrViews,
          "registrationTime": Date.now()
        };
        function finishTransitionImmediately() {
          for (var i2 = 0; i2 < viewOrViews.length; i2++) {
            var view2 = viewOrViews[i2];
            if (view2.viewHTMLElement) {
              view2 = view2.viewHTMLElement;
            }
            view2.style.transition = "all";
            view2.style.transitionDuration = "" + duration + "s";
            view2.style.transitionDelay = "" + delay + "s";
            view2.style.transition = transitionStyles[i2];
            view2.style.transitionDuration = transitionDurations[i2];
            view2.style.transitionDelay = transitionDelays[i2];
            view2.style.transitionTimingFunction = transitionTimings[i2];
          }
        }
        function transitionDidFinish(event2) {
          var view2 = event2.srcElement;
          if (!view2) {
            return;
          }
          if (view2.viewHTMLElement) {
            view2 = view2.viewHTMLElement;
          }
          view2.style.transition = transitionStyles[i];
          view2.style.transitionDuration = transitionDurations[i];
          view2.style.transitionDelay = transitionDelays[i];
          view2.style.transitionTimingFunction = transitionTimings[i];
          callTransitioncompletionFunction();
          view2.removeEventListener("transitionend", transitionDidFinish, true);
        }
        function transitionDidFinishManually() {
          for (var i2 = 0; i2 < viewOrViews.length; i2++) {
            var view2 = viewOrViews[i2];
            if (view2.viewHTMLElement) {
              view2 = view2.viewHTMLElement;
            }
            view2.style.transition = transitionStyles[i2];
            view2.style.transitionDuration = transitionDurations[i2];
            view2.style.transitionDelay = transitionDelays[i2];
            view2.style.transitionTimingFunction = transitionTimings[i2];
            view2.removeEventListener("transitionend", transitionDidFinish, true);
          }
        }
        return transitionObject;
      }
      animationDidFinish() {
      }
      static _setAbsoluteSizeAndPosition(element, left, top, width, height, zIndex = 0) {
        if (!(0, import_UIObject.IS)(element) || !element.obeyAutolayout && !element.getAttribute("obeyAutolayout")) {
          return;
        }
        if (element.id == "mainView") {
          var asd = 1;
        }
        if ((0, import_UIObject.IS)(height)) {
          height = height.integerValue + "px";
        }
        if ((0, import_UIObject.IS)(width)) {
          width = width.integerValue + "px";
        }
        var str = element.style.cssText;
        const frameTransform = _UIView._transformAttribute + ": translate3d(" + (1 * left).integerValue + "px, " + (1 * top).integerValue + "px, " + zIndex.integerValue + "px)";
        if (element.UIView) {
          str = str + frameTransform + ";";
        } else {
          element.UIView._frameTransform = frameTransform;
        }
        if (height == import_UIObject.nil) {
          str = str + " height: unset;";
        } else {
          str = str + " height:" + height + ";";
        }
        if (width == import_UIObject.nil) {
          str = str + " width: unset;";
        } else {
          str = str + " width:" + width + ";";
        }
        if (element.id == "mainView") {
          var asd = 1;
        }
        element.style.cssText = element.style.cssText + str;
      }
      static performAutoLayout(parentElement, visualFormatArray, constraintsArray) {
        const view = new AutoLayout.View();
        if ((0, import_UIObject.IS)(visualFormatArray) && (0, import_UIObject.IS)(visualFormatArray.length)) {
          view.addConstraints(AutoLayout.VisualFormat.parse(visualFormatArray, { extended: true }));
        }
        if ((0, import_UIObject.IS)(constraintsArray) && (0, import_UIObject.IS)(constraintsArray.length)) {
          view.addConstraints(constraintsArray);
        }
        const elements = {};
        for (var key in view.subViews) {
          if (!view.subViews.hasOwnProperty(key)) {
            continue;
          }
          var element = import_UIObject.nil;
          try {
            element = parentElement.querySelector("#" + key);
          } catch (error) {
          }
          if (element && !element.obeyAutolayout && !element.getAttribute("obeyAutolayout")) {
          } else if (element) {
            element.className += element.className ? " abs" : "abs";
            elements[key] = element;
          }
        }
        var parentUIView = import_UIObject.nil;
        if (parentElement.UIView) {
          parentUIView = parentElement.UIView;
        }
        const updateLayout = function() {
          view.setSize(
            parentElement ? parentElement.clientWidth : window.innerWidth,
            parentElement ? parentElement.clientHeight : window.innerHeight
          );
          for (key in view.subViews) {
            if (!view.subViews.hasOwnProperty(key)) {
              continue;
            }
            const subView = view.subViews[key];
            if (elements[key]) {
              _UIView._setAbsoluteSizeAndPosition(
                elements[key],
                subView.left,
                subView.top,
                subView.width,
                subView.height
              );
            }
          }
          parentUIView.didLayoutSubviews();
        };
        updateLayout();
        return updateLayout;
      }
      static runFunctionBeforeNextFrame(step) {
        if (import_ClientCheckers.IS_SAFARI) {
          Promise.resolve().then(step);
        } else {
          window.requestAnimationFrame(step);
        }
      }
      static scheduleLayoutViewsIfNeeded() {
        _UIView.runFunctionBeforeNextFrame(_UIView.layoutViewsIfNeeded);
      }
      static layoutViewsIfNeeded() {
        for (var i = 0; i < _UIView._viewsToLayout.length; i++) {
          const view = _UIView._viewsToLayout[i];
          view.layoutIfNeeded();
        }
        _UIView._viewsToLayout = [];
      }
      setNeedsLayout() {
        if (this._shouldLayout) {
          return;
        }
        this._shouldLayout = import_UIObject.YES;
        _UIView._viewsToLayout.push(this);
        if (_UIView._viewsToLayout.length == 1) {
          _UIView.scheduleLayoutViewsIfNeeded();
        }
      }
      get needsLayout() {
        return this._shouldLayout;
      }
      layoutIfNeeded() {
        if (!this._shouldLayout) {
          return;
        }
        this._shouldLayout = import_UIObject.NO;
        try {
          this.layoutSubviews();
        } catch (exception) {
          console.log(exception);
        }
      }
      layoutSubviews() {
        this.willLayoutSubviews();
        this._shouldLayout = import_UIObject.NO;
        if (this.constraints.length) {
          this._updateLayoutFunction = _UIView.performAutoLayout(this.viewHTMLElement, null, this.constraints);
        }
        this._updateLayoutFunction();
        this._viewControllerLayoutFunction();
        this.applyClassesAndStyles();
        for (let i = 0; i < this.subviews.length; i++) {
          const subview = this.subviews[i];
          subview.calculateAndSetViewFrame();
        }
        this.didLayoutSubviews();
      }
      applyClassesAndStyles() {
        for (var i = 0; i < this.styleClasses.length; i++) {
          const styleClass = this.styleClasses[i];
          if (styleClass) {
            this.viewHTMLElement.classList.add(styleClass);
          }
        }
      }
      willLayoutSubviews() {
        this._willLayoutSubviewsDelegateFunction();
      }
      didLayoutSubviews() {
        this._didLayoutSubviewsDelegateFunction();
      }
      get constraints() {
        return this._constraints;
      }
      set constraints(constraints) {
        this._constraints = constraints;
      }
      addConstraint(constraint) {
        this.constraints.push(constraint);
      }
      addConstraintsWithVisualFormat(visualFormatArray) {
        this.constraints = this.constraints.concat(AutoLayout.VisualFormat.parse(
          visualFormatArray,
          { extended: true }
        ));
      }
      static constraintWithView(view, attribute, relation, toView, toAttribute, multiplier, constant, priority) {
        var UIViewObject = import_UIObject.nil;
        var viewID = null;
        if (view) {
          if (view.isKindOfClass && view.isKindOfClass(_UIView)) {
            UIViewObject = view;
            view = view.viewHTMLElement;
          }
          viewID = view.id;
        }
        var toUIViewObject = import_UIObject.nil;
        var toViewID = null;
        if (toView) {
          if (toView.isKindOfClass && view.isKindOfClass(_UIView)) {
            toUIViewObject = toView;
            toView = toView.viewHTMLElement;
          }
          toViewID = toView.id;
        }
        const constraint = {
          view1: viewID,
          attr1: attribute,
          relation,
          view2: toViewID,
          attr2: toAttribute,
          multiplier,
          constant,
          priority
        };
        return constraint;
      }
      subviewWithID(viewID) {
        var resultHTMLElement = import_UIObject.nil;
        try {
          resultHTMLElement = this.viewHTMLElement.querySelector("#" + viewID);
        } catch (error) {
        }
        if (resultHTMLElement && resultHTMLElement.UIView) {
          return resultHTMLElement.UIView;
        }
        return import_UIObject.nil;
      }
      rectangleContainingSubviews() {
        const center = this.bounds.center;
        var result = new import_UIRectangle.UIRectangle(center.x, center.y, 0, 0);
        for (var i = 0; i < this.subviews.length; i++) {
          const subview = this.subviews[i];
          var frame = subview.frame;
          const rectangleContainingSubviews = subview.rectangleContainingSubviews();
          frame = frame.concatenateWithRectangle(rectangleContainingSubviews);
          result = result.concatenateWithRectangle(frame);
        }
        return result;
      }
      hasSubview(view) {
        if (!(0, import_UIObject.IS)(view)) {
          return import_UIObject.NO;
        }
        for (var i = 0; i < this.subviews.length; i++) {
          const subview = this.subviews[i];
          if (subview == view) {
            return import_UIObject.YES;
          }
        }
        return import_UIObject.NO;
      }
      get viewBelowThisView() {
        const result = (this.viewHTMLElement.previousElementSibling || {}).UIView;
        return result;
      }
      get viewAboveThisView() {
        const result = (this.viewHTMLElement.nextElementSibling || {}).UIView;
        return result;
      }
      addSubview(view, aboveView) {
        if (!this.hasSubview(view) && (0, import_UIObject.IS)(view)) {
          view.willMoveToSuperview(this);
          if ((0, import_UIObject.IS)(aboveView)) {
            this.viewHTMLElement.insertBefore(view.viewHTMLElement, aboveView.viewHTMLElement.nextSibling);
            this.subviews.insertElementAtIndex(this.subviews.indexOf(aboveView), view);
          } else {
            this.viewHTMLElement.appendChild(view.viewHTMLElement);
            this.subviews.push(view);
          }
          view.didMoveToSuperview(this);
          if (this.superview && this.isMemberOfViewTree) {
            view.broadcastEventInSubtree({
              name: _UIView.broadcastEventName.AddedToViewTree,
              parameters: import_UIObject.nil
            });
          }
          this.setNeedsLayout();
        }
      }
      addSubviews(views) {
        views.forEach(function(view, index, array) {
          this.addSubview(view);
        }, this);
      }
      moveToBottomOfSuperview() {
        if ((0, import_UIObject.IS)(this.superview)) {
          const bottomView = this.superview.subviews.firstElement;
          if (bottomView == this) {
            return;
          }
          this.superview.subviews.removeElement(this);
          this.superview.subviews.insertElementAtIndex(0, this);
          this.superview.viewHTMLElement.insertBefore(this.viewHTMLElement, bottomView.viewHTMLElement);
        }
      }
      moveToTopOfSuperview() {
        if ((0, import_UIObject.IS)(this.superview)) {
          const topView = this.superview.subviews.lastElement;
          if (topView == this) {
            return;
          }
          this.superview.subviews.removeElement(this);
          this.superview.subviews.push(this);
          this.superview.viewHTMLElement.appendChild(this.viewHTMLElement);
        }
      }
      removeFromSuperview() {
        if ((0, import_UIObject.IS)(this.superview)) {
          this.forEachViewInSubtree(function(view) {
            view.blur();
          });
          const index = this.superview.subviews.indexOf(this);
          if (index > -1) {
            this.superview.subviews.splice(index, 1);
            this.superview.viewHTMLElement.removeChild(this.viewHTMLElement);
            this.superview = import_UIObject.nil;
            this.broadcastEventInSubtree({
              name: _UIView.broadcastEventName.RemovedFromViewTree,
              parameters: import_UIObject.nil
            });
          }
        }
      }
      willAppear() {
      }
      willMoveToSuperview(superview) {
        this._setInnerHTMLFromKeyIfPossible();
        this._setInnerHTMLFromLocalizedTextObjectIfPossible();
      }
      didMoveToSuperview(superview) {
        this.superview = superview;
      }
      wasAddedToViewTree() {
      }
      wasRemovedFromViewTree() {
      }
      get isMemberOfViewTree() {
        var element = this.viewHTMLElement;
        for (var i = 0; element; i = i) {
          if (element.parentElement && element.parentElement == document.body) {
            return import_UIObject.YES;
          }
          element = element.parentElement;
        }
        return import_UIObject.NO;
      }
      get allSuperviews() {
        const result = [];
        var view = this;
        for (var i = 0; (0, import_UIObject.IS)(view); i = i) {
          result.push(view);
          view = view.superview;
        }
        return result;
      }
      setNeedsLayoutOnAllSuperviews() {
        this.allSuperviews.reverse().forEach(function(view, index, array) {
          view.setNeedsLayout();
        });
      }
      setNeedsLayoutUpToRootView() {
        this.setNeedsLayoutOnAllSuperviews();
        this.setNeedsLayout();
      }
      focus() {
        this.viewHTMLElement.focus();
      }
      blur() {
        this.viewHTMLElement.blur();
      }
      _loadUIEvents() {
        const isTouchEventClassDefined = import_UIObject.NO || window.TouchEvent;
        const pauseEvent = (event2, forced = import_UIObject.NO) => {
          if (this.pausesPointerEvents || forced) {
            if (event2.stopPropagation) {
              event2.stopPropagation();
            }
            if (event2.preventDefault) {
              event2.preventDefault();
            }
            event2.cancelBubble = true;
            event2.returnValue = false;
            return false;
          }
          if (event2.stopPropagation && this.stopsPointerEventPropagation) {
            event2.stopPropagation();
          }
        };
        const onMouseDown = (event2) => {
          if (this.ignoresTouches && isTouchEventClassDefined && event2 instanceof TouchEvent || (this.ignoresMouse || (0, import_UIObject.IS)(this._touchEventTime) && Date.now() - this._touchEventTime > 500) && event2 instanceof MouseEvent) {
            return;
          }
          this.sendControlEventForKey(_UIView.controlEvent.PointerDown, event2);
          this._isPointerInside = import_UIObject.YES;
          this._isPointerValid = import_UIObject.YES;
          this._initialPointerPosition = new import_UIPoint.UIPoint(event2.clientX, event2.clientY);
          if (isTouchEventClassDefined && event2 instanceof TouchEvent) {
            this._touchEventTime = Date.now();
            this._initialPointerPosition = new import_UIPoint.UIPoint(event2.touches[0].clientX, event2.touches[0].clientY);
            if (event2.touches.length > 1) {
              onTouchCancel(event2);
              return;
            }
          } else {
            this._touchEventTime = import_UIObject.nil;
            pauseEvent(event2);
          }
          this._hasPointerDragged = import_UIObject.NO;
        };
        const onTouchStart = onMouseDown;
        const onmouseup = (event2) => {
          if (!this._isPointerValid) {
            return;
          }
          if (this.ignoresTouches && isTouchEventClassDefined && event2 instanceof TouchEvent || this.ignoresMouse && event2 instanceof MouseEvent) {
            return;
          }
          if (this._isPointerInside) {
            onPointerUpInside(event2);
            if (!this._hasPointerDragged) {
              this.sendControlEventForKey(_UIView.controlEvent.PointerTap, event2);
            }
          }
          this.sendControlEventForKey(_UIView.controlEvent.PointerUp, event2);
          pauseEvent(event2);
        };
        const onTouchEnd = onmouseup;
        const onmouseout = (event2) => {
          if (this.ignoresTouches && isTouchEventClassDefined && event2 instanceof TouchEvent || this.ignoresMouse && event2 instanceof MouseEvent) {
            return;
          }
          this.sendControlEventForKey(_UIView.controlEvent.PointerLeave, event2);
          this._isPointerInside = import_UIObject.NO;
          pauseEvent(event2);
        };
        const onTouchLeave = onmouseout;
        var onTouchCancel = function(event2) {
          if (!this._isPointerValid) {
            return;
          }
          if (this.ignoresTouches && isTouchEventClassDefined && event2 instanceof TouchEvent || this.ignoresMouse && event2 instanceof MouseEvent) {
            return;
          }
          this._isPointerValid = import_UIObject.NO;
          this.sendControlEventForKey(_UIView.controlEvent.PointerCancel, event2);
        }.bind(this);
        const onmouseover = (event2) => {
          if (this.ignoresTouches && isTouchEventClassDefined && event2 instanceof TouchEvent || this.ignoresMouse && event2 instanceof MouseEvent) {
            return;
          }
          this.sendControlEventForKey(_UIView.controlEvent.PointerHover, event2);
          this._isPointerInside = import_UIObject.YES;
          this._isPointerValid = import_UIObject.YES;
          pauseEvent(event2);
        };
        const onMouseMove = (event2) => {
          if (!this._isPointerValid) {
            return;
          }
          if (this.ignoresTouches && isTouchEventClassDefined && event2 instanceof TouchEvent || this.ignoresMouse && event2 instanceof MouseEvent) {
            return;
          }
          if ((0, import_UIObject.IS_NOT)(this._initialPointerPosition)) {
            this._initialPointerPosition = new import_UIPoint.UIPoint(event2.clientX, event2.clientY);
          }
          if (new import_UIPoint.UIPoint(event2.clientX, event2.clientY).to(this._initialPointerPosition).length > this._pointerDragThreshold) {
            this._hasPointerDragged = import_UIObject.YES;
          }
          this.sendControlEventForKey(_UIView.controlEvent.PointerMove, event2);
          pauseEvent(event2);
        };
        const onTouchMove = function(event2) {
          if (!this._isPointerValid) {
            return;
          }
          if (this.ignoresTouches && isTouchEventClassDefined && event2 instanceof TouchEvent || this.ignoresMouse && event2 instanceof MouseEvent) {
            return;
          }
          if (event2.touches.length > 1) {
            onTouchZoom(event2);
            return;
          }
          const touch = event2.touches[0];
          if (new import_UIPoint.UIPoint(touch.clientX, touch.clientY).to(this._initialPointerPosition).length > this._pointerDragThreshold) {
            this._hasPointerDragged = import_UIObject.YES;
          }
          if (this._isPointerInside && this.viewHTMLElement != document.elementFromPoint(touch.clientX, touch.clientY)) {
            this._isPointerInside = import_UIObject.NO;
            this.sendControlEventForKey(_UIView.controlEvent.PointerLeave, event2);
          }
          this.sendControlEventForKey(_UIView.controlEvent.PointerMove, event2);
        };
        var onTouchZoom = function onTouchZoom2(event2) {
          this.sendControlEventForKey(_UIView.controlEvent.MultipleTouches, event2);
        }.bind(this);
        var onPointerUpInside = (event2) => {
          pauseEvent(event2);
          this.sendControlEventForKey(_UIView.controlEvent.PointerUpInside, event2);
        };
        function eventKeyIsEnter(event2) {
          if (event2.keyCode !== 13) {
            return import_UIObject.NO;
          }
          return import_UIObject.YES;
        }
        function eventKeyIsTab(event2) {
          if (event2.keyCode !== 9) {
            return import_UIObject.NO;
          }
          return import_UIObject.YES;
        }
        function eventKeyIsEsc(event2) {
          var result = false;
          if ("key" in event2) {
            result = event2.key == "Escape" || event2.key == "Esc";
          } else {
            result = event2.keyCode == 27;
          }
          return result;
        }
        function eventKeyIsLeft(event2) {
          if (event2.keyCode != "37") {
            return import_UIObject.NO;
          }
          return import_UIObject.YES;
        }
        function eventKeyIsRight(event2) {
          if (event2.keyCode != "39") {
            return import_UIObject.NO;
          }
          return import_UIObject.YES;
        }
        function eventKeyIsDown(event2) {
          if (event2.keyCode != "40") {
            return import_UIObject.NO;
          }
          return import_UIObject.YES;
        }
        function eventKeyIsUp(event2) {
          if (event2.keyCode != "38") {
            return import_UIObject.NO;
          }
          return import_UIObject.YES;
        }
        const onKeyDown = function(event2) {
          if (eventKeyIsEnter(event2)) {
            this.sendControlEventForKey(_UIView.controlEvent.EnterDown, event2);
          }
          if (eventKeyIsEsc(event2)) {
            this.sendControlEventForKey(_UIView.controlEvent.EscDown, event2);
          }
          if (eventKeyIsTab(event2) && this._controlEventTargets.TabDown && this._controlEventTargets.TabDown.length) {
            this.sendControlEventForKey(_UIView.controlEvent.TabDown, event2);
            pauseEvent(event2, import_UIObject.YES);
          }
          if (eventKeyIsLeft(event2)) {
            this.sendControlEventForKey(_UIView.controlEvent.LeftArrowDown, event2);
          }
          if (eventKeyIsRight(event2)) {
            this.sendControlEventForKey(_UIView.controlEvent.RightArrowDown, event2);
          }
          if (eventKeyIsDown(event2)) {
            this.sendControlEventForKey(_UIView.controlEvent.DownArrowDown, event2);
          }
          if (eventKeyIsUp(event2)) {
            this.sendControlEventForKey(_UIView.controlEvent.UpArrowDown, event2);
          }
        }.bind(this);
        const onKeyUp = function(event2) {
          if (eventKeyIsEnter(event2)) {
            this.sendControlEventForKey(_UIView.controlEvent.EnterUp, event2);
          }
        }.bind(this);
        const onfocus = function(event2) {
          this.sendControlEventForKey(_UIView.controlEvent.Focus, event2);
        }.bind(this);
        const onblur = function(event2) {
          this.sendControlEventForKey(_UIView.controlEvent.Blur, event2);
        }.bind(this);
        this._viewHTMLElement.onmousedown = onMouseDown.bind(this);
        this._viewHTMLElement.ontouchstart = onTouchStart.bind(this);
        this._viewHTMLElement.onmousemove = onMouseMove.bind(this);
        this._viewHTMLElement.ontouchmove = onTouchMove.bind(this);
        this._viewHTMLElement.onmouseover = onmouseover.bind(this);
        this._viewHTMLElement.onmouseup = onmouseup.bind(this);
        this._viewHTMLElement.ontouchend = onTouchEnd.bind(this);
        this._viewHTMLElement.ontouchcancel = onTouchCancel.bind(this);
        this._viewHTMLElement.onmouseout = onmouseout.bind(this);
        this._viewHTMLElement.addEventListener("touchleave", onTouchLeave.bind(this), false);
        this._viewHTMLElement.addEventListener("keydown", onKeyDown, false);
        this._viewHTMLElement.addEventListener("keyup", onKeyUp, false);
        this._viewHTMLElement.onfocus = onfocus;
        this._viewHTMLElement.onblur = onblur;
      }
      get addControlEventTarget() {
        const eventKeys = [];
        const result = new Proxy(
          this.constructor.controlEvent,
          {
            get: (target, key, receiver) => {
              eventKeys.push(key);
              return result;
            },
            set: (target, key, value, receiver) => {
              eventKeys.push(key);
              this.addTargetForControlEvents(eventKeys, value);
              return true;
            }
          }
        );
        return result;
      }
      addTargetForControlEvents(eventKeys, targetFunction) {
        eventKeys.forEach(function(key, index, array) {
          this.addTargetForControlEvent(key, targetFunction);
        }, this);
      }
      addTargetForControlEvent(eventKey, targetFunction) {
        var targets = this._controlEventTargets[eventKey];
        if (!targets) {
          targets = [];
          this._controlEventTargets[eventKey] = targets;
        }
        if (targets.indexOf(targetFunction) == -1) {
          targets.push(targetFunction);
        }
      }
      removeTargetForControlEvent(eventKey, targetFunction) {
        const targets = this._controlEventTargets[eventKey];
        if (!targets) {
          return;
        }
        const index = targets.indexOf(targetFunction);
        if (index != -1) {
          targets.splice(index, 1);
        }
      }
      removeTargetForControlEvents(eventKeys, targetFunction) {
        eventKeys.forEach(function(key, index, array) {
          this.removeTargetForControlEvent(key, targetFunction);
        }, this);
      }
      sendControlEventForKey(eventKey, nativeEvent) {
        var targets = this._controlEventTargets[eventKey];
        if (!targets) {
          return;
        }
        targets = targets.copy();
        for (var i = 0; i < targets.length; i++) {
          const target = targets[i];
          target(this, nativeEvent);
        }
      }
      broadcastEventInSubtree(event2) {
        this.forEachViewInSubtree(function(view) {
          view.didReceiveBroadcastEvent(event2);
          if (view._didReceiveBroadcastEventDelegateFunction) {
            view._didReceiveBroadcastEventDelegateFunction(event2);
          }
        });
      }
      didReceiveBroadcastEvent(event2) {
        if (event2.name == _UIView.broadcastEventName.PageDidScroll) {
          this._isPointerValid = import_UIObject.NO;
        }
        if (event2.name == _UIView.broadcastEventName.AddedToViewTree) {
          this.wasAddedToViewTree();
        }
        if (event2.name == _UIView.broadcastEventName.RemovedFromViewTree) {
          this.wasRemovedFromViewTree();
        }
        if (event2.name == _UIView.broadcastEventName.LanguageChanged || event2.name == _UIView.broadcastEventName.AddedToViewTree) {
          this._setInnerHTMLFromKeyIfPossible();
          this._setInnerHTMLFromLocalizedTextObjectIfPossible();
        }
      }
      forEachViewInSubtree(functionToCall) {
        functionToCall(this);
        this.subviews.forEach(function(subview, index, array) {
          subview.forEachViewInSubtree(functionToCall);
        });
      }
      rectangleInView(rectangle, view) {
        if (!view.isMemberOfViewTree || !this.isMemberOfViewTree) {
          return import_UIObject.nil;
        }
        const viewClientRectangle = view.viewHTMLElement.getBoundingClientRect();
        const viewLocation = new import_UIPoint.UIPoint(viewClientRectangle.left, viewClientRectangle.top);
        const selfClientRectangle = this.viewHTMLElement.getBoundingClientRect();
        const selfLocation = new import_UIPoint.UIPoint(selfClientRectangle.left, selfClientRectangle.top);
        const offsetPoint = selfLocation.subtract(viewLocation);
        return rectangle.copy().offsetByPoint(offsetPoint);
      }
      rectangleFromView(rectangle, view) {
        return view.rectangleInView(rectangle, this);
      }
      intrinsicContentSizeWithConstraints(constrainingHeight = 0, constrainingWidth = 0) {
        const result = new import_UIRectangle.UIRectangle(0, 0, 0, 0);
        if (this.rootView.forceIntrinsicSizeZero) {
          return result;
        }
        var temporarilyInViewTree = import_UIObject.NO;
        var nodeAboveThisView;
        if (!this.isMemberOfViewTree) {
          document.body.appendChild(this.viewHTMLElement);
          temporarilyInViewTree = import_UIObject.YES;
          nodeAboveThisView = this.viewHTMLElement.nextSibling;
        }
        const height = this.style.height;
        const width = this.style.width;
        this.style.height = "" + constrainingHeight;
        this.style.width = "" + constrainingWidth;
        const left = this.style.left;
        const right = this.style.right;
        const bottom = this.style.bottom;
        const top = this.style.top;
        this.style.left = "";
        this.style.right = "";
        this.style.bottom = "";
        this.style.top = "";
        const resultHeight = this.viewHTMLElement.scrollHeight;
        const whiteSpace = this.style.whiteSpace;
        this.style.whiteSpace = "nowrap";
        const resultWidth = this.viewHTMLElement.scrollWidth;
        this.style.whiteSpace = whiteSpace;
        this.style.height = height;
        this.style.width = width;
        this.style.left = left;
        this.style.right = right;
        this.style.bottom = bottom;
        this.style.top = top;
        if (temporarilyInViewTree) {
          document.body.removeChild(this.viewHTMLElement);
          if (this.superview) {
            if (nodeAboveThisView) {
              this.superview.viewHTMLElement.insertBefore(this.viewHTMLElement, nodeAboveThisView);
            } else {
              this.superview.viewHTMLElement.appendChild(this.viewHTMLElement);
            }
          }
        }
        result.height = resultHeight;
        result.width = resultWidth;
        return result;
      }
      intrinsicContentWidth(constrainingHeight = 0) {
        const result = this.intrinsicContentSizeWithConstraints(constrainingHeight).width;
        return result;
      }
      intrinsicContentHeight(constrainingWidth = 0) {
        const result = this.intrinsicContentSizeWithConstraints(void 0, constrainingWidth).height;
        return result;
      }
      intrinsicContentSize() {
        return import_UIObject.nil;
      }
    };
    var UIView15 = _UIView;
    UIView15._UIViewIndex = -1;
    UIView15._viewsToLayout = [];
    UIView15._pageScale = 1;
    UIView15._transformAttribute = ("transform" in document.documentElement.style ? "transform" : void 0) || ("-webkit-transform" in document.documentElement.style ? "-webkit-transform" : "undefined") || ("-moz-transform" in document.documentElement.style ? "-moz-transform" : "undefined") || ("-ms-transform" in document.documentElement.style ? "-ms-transform" : "undefined") || ("-o-transform" in document.documentElement.style ? "-o-transform" : "undefined");
    UIView15.constraintAttribute = {
      "left": AutoLayout.Attribute.LEFT,
      "right": AutoLayout.Attribute.RIGHT,
      "bottom": AutoLayout.Attribute.BOTTOM,
      "top": AutoLayout.Attribute.TOP,
      "centerX": AutoLayout.Attribute.CENTERX,
      "centerY": AutoLayout.Attribute.CENTERY,
      "height": AutoLayout.Attribute.HEIGHT,
      "width": AutoLayout.Attribute.WIDTH,
      "zIndex": AutoLayout.Attribute.ZINDEX,
      "constant": AutoLayout.Attribute.NOTANATTRIBUTE,
      "variable": AutoLayout.Attribute.VARIABLE
    };
    UIView15.constraintRelation = {
      "equal": AutoLayout.Relation.EQU,
      "lessThanOrEqual": AutoLayout.Relation.LEQ,
      "greaterThanOrEqual": AutoLayout.Relation.GEQ
    };
    UIView15.controlEvent = {
      "PointerDown": "PointerDown",
      "PointerMove": "PointerMove",
      "PointerLeave": "PointerLeave",
      "PointerEnter": "PointerEnter",
      "PointerUpInside": "PointerUpInside",
      "PointerTap": "PointerTap",
      "PointerUp": "PointerUp",
      "MultipleTouches": "PointerZoom",
      "PointerCancel": "PointerCancel",
      "PointerHover": "PointerHover",
      "EnterDown": "EnterDown",
      "EnterUp": "EnterUp",
      "EscDown": "EscDown",
      "TabDown": "TabDown",
      "LeftArrowDown": "LeftArrowDown",
      "RightArrowDown": "RightArrowDown",
      "DownArrowDown": "DownArrowDown",
      "UpArrowDown": "UpArrowDown",
      "Focus": "Focus",
      "Blur": "Blur"
    };
    UIView15.broadcastEventName = {
      "LanguageChanged": "LanguageChanged",
      "RemovedFromViewTree": "RemovedFromViewTree",
      "AddedToViewTree": "AddedToViewTree",
      "PageDidScroll": "PageDidScroll"
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UIRoute.js
var require_UIRoute = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIRoute.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIRoute_exports = {};
    __export2(UIRoute_exports, {
      UIRoute: () => UIRoute9
    });
    module.exports = __toCommonJS2(UIRoute_exports);
    var import_UIObject = require_UIObject();
    var UIRoute9 = class extends Array {
      constructor(hash) {
        super();
        if (!hash || !hash.startsWith) {
          return;
        }
        if (hash.startsWith("#")) {
          hash = hash.slice(1);
        }
        hash = decodeURIComponent(hash);
        const components = hash.split("]");
        components.forEach(function(component, index, array) {
          const componentName = component.split("[")[0];
          const parameters = {};
          if (!componentName) {
            return;
          }
          const parametersString = component.split("[")[1] || "";
          const parameterPairStrings = parametersString.split(",") || [];
          parameterPairStrings.forEach(function(pairString, index2, array2) {
            const keyAndValueArray = pairString.split(":");
            const key = decodeURIComponent(keyAndValueArray[0]);
            const value = decodeURIComponent(keyAndValueArray[1]);
            if (key) {
              parameters[key] = value;
            }
          });
          this.push({
            name: componentName,
            parameters
          });
        }, this);
      }
      static get currentRoute() {
        return new UIRoute9(window.location.hash);
      }
      apply() {
        window.location.hash = this.stringRepresentation;
      }
      applyByReplacingCurrentRouteInHistory() {
        window.location.replace(this.linkRepresentation);
      }
      copy() {
        var result = new UIRoute9();
        result = Object.assign(result, this);
        return result;
      }
      routeByRemovingComponentsOtherThanOnesNamed(componentNames) {
        const result = this.copy();
        const indexesToRemove = [];
        result.forEach(function(component, index, array) {
          if (!componentNames.contains(component.name)) {
            indexesToRemove.push(index);
          }
        });
        indexesToRemove.forEach(function(indexToRemove, index, array) {
          result.removeElementAtIndex(indexToRemove);
        });
        return result;
      }
      routeByRemovingComponentNamed(componentName) {
        const result = this.copy();
        const componentIndex = result.findIndex(function(component, index) {
          return component.name == componentName;
        });
        if (componentIndex != -1) {
          result.splice(componentIndex, 1);
        }
        return result;
      }
      routeByRemovingParameterInComponent(componentName, parameterName, removeComponentIfEmpty = import_UIObject.NO) {
        var result = this.copy();
        var parameters = result.componentWithName(componentName).parameters;
        if ((0, import_UIObject.IS_NOT)(parameters)) {
          parameters = {};
        }
        delete parameters[parameterName];
        result = result.routeWithComponent(componentName, parameters);
        if (removeComponentIfEmpty && Object.keys(parameters).length == 0) {
          result = result.routeByRemovingComponentNamed(componentName);
        }
        return result;
      }
      routeBySettingParameterInComponent(componentName, parameterName, valueToSet) {
        var result = this.copy();
        if ((0, import_UIObject.IS_NIL)(valueToSet) || (0, import_UIObject.IS_NIL)(parameterName)) {
          return result;
        }
        var parameters = result.componentWithName(componentName).parameters;
        if ((0, import_UIObject.IS_NOT)(parameters)) {
          parameters = {};
        }
        parameters[parameterName] = valueToSet;
        result = result.routeWithComponent(componentName, parameters);
        return result;
      }
      routeWithViewControllerComponent(viewController, parameters, extendParameters = import_UIObject.NO) {
        return this.routeWithComponent(viewController.routeComponentName, parameters, extendParameters);
      }
      routeWithComponent(name, parameters, extendParameters = import_UIObject.NO) {
        const result = this.copy();
        var component = result.componentWithName(name);
        if ((0, import_UIObject.IS_NOT)(component)) {
          component = {
            name,
            parameters: {}
          };
          result.push(component);
        }
        if ((0, import_UIObject.IS_NOT)(parameters)) {
          parameters = {};
        }
        if (extendParameters) {
          component.parameters = Object.assign(component.parameters, parameters);
        } else {
          component.parameters = parameters;
        }
        return result;
      }
      navigateBySettingComponent(name, parameters, extendParameters = import_UIObject.NO) {
        this.routeWithComponent(name, parameters, extendParameters).apply();
      }
      componentWithViewController(viewController) {
        return this.componentWithName(viewController.routeComponentName);
      }
      componentWithName(name) {
        var result = import_UIObject.nil;
        this.forEach(function(component, index, self) {
          if (component.name == name) {
            result = component;
          }
        });
        return result;
      }
      get linkRepresentation() {
        return "#" + this.stringRepresentation;
      }
      get stringRepresentation() {
        var result = "";
        this.forEach(function(component, index, self) {
          result = result + component.name;
          const parameters = component.parameters;
          result = result + "[";
          Object.keys(parameters).forEach(function(key, index2, keys) {
            if (index2) {
              result = result + ",";
            }
            result = result + encodeURIComponent(key) + ":" + encodeURIComponent(parameters[key]);
          });
          result = result + "]";
        });
        return result;
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UIViewController.js
var require_UIViewController = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIViewController.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var __async2 = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    var UIViewController_exports = {};
    __export2(UIViewController_exports, {
      UIViewController: () => UIViewController7
    });
    module.exports = __toCommonJS2(UIViewController_exports);
    var import_UIObject = require_UIObject();
    var import_UIRoute = require_UIRoute();
    var UIViewController7 = class extends import_UIObject.UIObject {
      constructor(view) {
        super();
        this.view = view;
        this.parentViewController = import_UIObject.nil;
        this.childViewControllers = [];
        this.view._viewControllerLayoutFunction = this.layoutViewSubviews.bind(this);
        this.view._willLayoutSubviewsDelegateFunction = this.viewWillLayoutSubviews.bind(this);
        this.view._didLayoutSubviewsDelegateFunction = this.viewDidLayoutSubviews.bind(this);
        this.view._didReceiveBroadcastEventDelegateFunction = this.viewDidReceiveBroadcastEvent.bind(this);
      }
      handleRouteRecursively(route) {
        this.handleRoute(route);
        this.childViewControllers.forEach((controller) => {
          if (!route.isHandled) {
            controller.handleRouteRecursively(route);
          }
        });
      }
      handleRoute(route) {
        return __async2(this, null, function* () {
        });
      }
      viewWillAppear() {
        return __async2(this, null, function* () {
        });
      }
      viewDidAppear() {
        return __async2(this, null, function* () {
        });
      }
      viewWillDisappear() {
        return __async2(this, null, function* () {
        });
      }
      viewDidDisappear() {
        return __async2(this, null, function* () {
        });
      }
      updateViewConstraints() {
      }
      updateViewStyles() {
      }
      layoutViewSubviews() {
      }
      _triggerLayoutViewSubviews() {
        this.view.layoutSubviews();
        this.viewDidLayoutSubviews();
      }
      viewWillLayoutSubviews() {
        this.updateViewConstraints();
        this.updateViewStyles();
      }
      viewDidLayoutSubviews() {
      }
      viewDidReceiveBroadcastEvent(event2) {
      }
      hasChildViewController(viewController) {
        if (!(0, import_UIObject.IS)(viewController)) {
          return import_UIObject.NO;
        }
        for (let i = 0; i < this.childViewControllers.length; i++) {
          const childViewController = this.childViewControllers[i];
          if (childViewController == viewController) {
            return import_UIObject.YES;
          }
        }
        return import_UIObject.NO;
      }
      addChildViewController(viewController) {
        if (!this.hasChildViewController(viewController)) {
          viewController.willMoveToParentViewController(this);
          this.childViewControllers.push(viewController);
        }
      }
      removeFromParentViewController() {
        const index = this.parentViewController.childViewControllers.indexOf(this);
        if (index > -1) {
          this.parentViewController.childViewControllers.splice(index, 1);
          this.parentViewController = import_UIObject.nil;
        }
      }
      willMoveToParentViewController(parentViewController) {
      }
      didMoveToParentViewController(parentViewController) {
        this.parentViewController = parentViewController;
      }
      removeChildViewController(controller) {
        controller = (0, import_UIObject.FIRST_OR_NIL)(controller);
        controller.viewWillDisappear();
        if ((0, import_UIObject.IS)(controller.parentViewController)) {
          controller.removeFromParentViewController();
        }
        if ((0, import_UIObject.IS)(controller.view)) {
          controller.view.removeFromSuperview();
        }
        controller.viewDidDisappear();
      }
      addChildViewControllerInContainer(controller, containerView) {
        controller = (0, import_UIObject.FIRST_OR_NIL)(controller);
        containerView = (0, import_UIObject.FIRST_OR_NIL)(containerView);
        controller.viewWillAppear();
        this.addChildViewController(controller);
        containerView.addSubview(controller.view);
        controller.didMoveToParentViewController(this);
        controller.viewDidAppear();
        controller.handleRouteRecursively(import_UIRoute.UIRoute.currentRoute);
      }
      addChildViewControllerInDialogView(controller, dialogView) {
        controller = (0, import_UIObject.FIRST_OR_NIL)(controller);
        dialogView = (0, import_UIObject.FIRST_OR_NIL)(dialogView);
        controller.viewWillAppear();
        this.addChildViewController(controller);
        dialogView.view = controller.view;
        const originalDismissFunction = dialogView.dismiss.bind(dialogView);
        dialogView.dismiss = (animated) => {
          originalDismissFunction(animated);
          this.removeChildViewController(controller);
        };
        controller.didMoveToParentViewController(this);
        controller.viewDidAppear();
        controller.handleRouteRecursively(import_UIRoute.UIRoute.currentRoute);
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UITextView.js
var require_UITextView = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UITextView.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UITextView_exports = {};
    __export2(UITextView_exports, {
      UITextView: () => UITextView12
    });
    module.exports = __toCommonJS2(UITextView_exports);
    var import_UIColor = require_UIColor();
    var import_UIObject = require_UIObject();
    var import_UIRectangle = require_UIRectangle();
    var import_UIView = require_UIView();
    var _UITextView = class extends import_UIView.UIView {
      constructor(elementID, textViewType = _UITextView.type.paragraph, viewHTMLElement = null) {
        super(elementID, viewHTMLElement, textViewType);
        this._textColor = _UITextView.defaultTextColor;
        this._isSingleLine = import_UIObject.YES;
        this.textPrefix = "";
        this.textSuffix = "";
        this._notificationAmount = 0;
        this._minFontSize = import_UIObject.nil;
        this._maxFontSize = import_UIObject.nil;
        this._automaticFontSizeSelection = import_UIObject.NO;
        this.changesOften = import_UIObject.NO;
        this._intrinsicHeightCache = new import_UIObject.UIObject();
        this._intrinsicWidthCache = new import_UIObject.UIObject();
        this.text = "";
        this.style.overflow = "hidden";
        this.style.textOverflow = "ellipsis";
        this.isSingleLine = import_UIObject.YES;
        this.textColor = this.textColor;
        this.userInteractionEnabled = import_UIObject.YES;
        if (textViewType == _UITextView.type.textArea) {
          this.pausesPointerEvents = import_UIObject.YES;
          this.addTargetForControlEvent(
            import_UIView.UIView.controlEvent.PointerUpInside,
            (sender, event2) => sender.focus()
          );
        }
      }
      static _determinePXAndPTRatios() {
        const o = document.createElement("div");
        o.style.width = "1000pt";
        document.body.appendChild(o);
        _UITextView._ptToPx = o.clientWidth / 1e3;
        document.body.removeChild(o);
        _UITextView._pxToPt = 1 / _UITextView._ptToPx;
      }
      get textAlignment() {
        const result = this.style.textAlign;
        return result;
      }
      set textAlignment(textAlignment) {
        this._textAlignment = textAlignment;
        this.style.textAlign = textAlignment;
      }
      get textColor() {
        const result = this._textColor;
        return result;
      }
      set textColor(color) {
        this._textColor = color || _UITextView.defaultTextColor;
        this.style.color = this._textColor.stringValue;
      }
      get isSingleLine() {
        return this._isSingleLine;
      }
      set isSingleLine(isSingleLine) {
        this._isSingleLine = isSingleLine;
        this._intrinsicHeightCache = new import_UIObject.UIObject();
        this._intrinsicWidthCache = new import_UIObject.UIObject();
        if (isSingleLine) {
          this.style.whiteSpace = "pre";
          return;
        }
        this.style.whiteSpace = "pre-wrap";
      }
      get notificationAmount() {
        return this._notificationAmount;
      }
      set notificationAmount(notificationAmount) {
        if (this._notificationAmount == notificationAmount) {
          return;
        }
        this._notificationAmount = notificationAmount;
        this.text = this.text;
        this.setNeedsLayoutUpToRootView();
        this.notificationAmountDidChange(notificationAmount);
      }
      notificationAmountDidChange(notificationAmount) {
      }
      get text() {
        return this._text || this.viewHTMLElement.innerHTML;
      }
      set text(text) {
        this._text = text;
        var notificationText = "";
        if (this.notificationAmount) {
          notificationText = '<span style="color: ' + _UITextView.notificationTextColor.stringValue + ';">' + (" (" + this.notificationAmount + ")").bold() + "</span>";
        }
        if (this.viewHTMLElement.innerHTML != this.textPrefix + text + this.textSuffix + notificationText) {
          this.viewHTMLElement.innerHTML = this.textPrefix + (0, import_UIObject.FIRST)(text, "") + this.textSuffix + notificationText;
        }
        this._intrinsicHeightCache = new import_UIObject.UIObject();
        this._intrinsicWidthCache = new import_UIObject.UIObject();
        this.setNeedsLayout();
      }
      set innerHTML(innerHTML) {
        this.text = innerHTML;
      }
      get innerHTML() {
        return this.viewHTMLElement.innerHTML;
      }
      setText(key, defaultString, parameters) {
        this.setInnerHTML(key, defaultString, parameters);
      }
      get fontSize() {
        const style = window.getComputedStyle(this.viewHTMLElement, null).fontSize;
        const result = parseFloat(style) * _UITextView._pxToPt;
        return result;
      }
      set fontSize(fontSize) {
        this.style.fontSize = "" + fontSize + "pt";
        this._intrinsicHeightCache = new import_UIObject.UIObject();
        this._intrinsicWidthCache = new import_UIObject.UIObject();
      }
      useAutomaticFontSize(minFontSize = import_UIObject.nil, maxFontSize = import_UIObject.nil) {
        this._automaticFontSizeSelection = import_UIObject.YES;
        this._minFontSize = minFontSize;
        this._maxFontSize = maxFontSize;
        this.setNeedsLayout();
      }
      static automaticallyCalculatedFontSize(bounds, currentSize, currentFontSize, minFontSize, maxFontSize) {
        minFontSize = (0, import_UIObject.FIRST)(minFontSize, 1);
        maxFontSize = (0, import_UIObject.FIRST)(maxFontSize, 1e11);
        const heightMultiplier = bounds.height / (currentSize.height + 1);
        const widthMultiplier = bounds.width / (currentSize.width + 1);
        var multiplier = heightMultiplier;
        if (heightMultiplier > widthMultiplier) {
          multiplier = widthMultiplier;
        }
        const maxFittingFontSize = currentFontSize * multiplier;
        if (maxFittingFontSize > maxFontSize) {
          return maxFontSize;
        }
        if (minFontSize > maxFittingFontSize) {
          return minFontSize;
        }
        return maxFittingFontSize;
      }
      didReceiveBroadcastEvent(event2) {
        super.didReceiveBroadcastEvent(event2);
      }
      willMoveToSuperview(superview) {
        super.willMoveToSuperview(superview);
      }
      layoutSubviews() {
        super.layoutSubviews();
        if (this._automaticFontSizeSelection) {
          this.fontSize = _UITextView.automaticallyCalculatedFontSize(
            new import_UIRectangle.UIRectangle(0, 0, 1 * this.viewHTMLElement.offsetHeight, 1 * this.viewHTMLElement.offsetWidth),
            this.intrinsicContentSize(),
            this.fontSize,
            this._minFontSize,
            this._maxFontSize
          );
        }
      }
      intrinsicContentHeight(constrainingWidth = 0) {
        const keyPath = (this.viewHTMLElement.innerHTML + "_csf_" + this.computedStyle.font).replace(new RegExp(
          "\\.",
          "g"
        ), "_") + "." + ("" + constrainingWidth).replace(new RegExp("\\.", "g"), "_");
        let cacheObject = _UITextView._intrinsicHeightCache;
        if (this.changesOften) {
          cacheObject = this._intrinsicHeightCache;
        }
        var result = cacheObject.valueForKeyPath(keyPath);
        if ((0, import_UIObject.IS_LIKE_NULL)(result)) {
          result = super.intrinsicContentHeight(constrainingWidth);
          cacheObject.setValueForKeyPath(keyPath, result);
        }
        return result;
      }
      intrinsicContentWidth(constrainingHeight = 0) {
        const keyPath = (this.viewHTMLElement.innerHTML + "_csf_" + this.computedStyle.font).replace(new RegExp(
          "\\.",
          "g"
        ), "_") + "." + ("" + constrainingHeight).replace(new RegExp("\\.", "g"), "_");
        let cacheObject = _UITextView._intrinsicWidthCache;
        if (this.changesOften) {
          cacheObject = this._intrinsicWidthCache;
        }
        var result = cacheObject.valueForKeyPath(keyPath);
        if ((0, import_UIObject.IS_LIKE_NULL)(result)) {
          result = super.intrinsicContentWidth(constrainingHeight);
          cacheObject.setValueForKeyPath(keyPath, result);
        }
        return result;
      }
      intrinsicContentSize() {
        const result = this.intrinsicContentSizeWithConstraints(import_UIObject.nil, import_UIObject.nil);
        return result;
      }
    };
    var UITextView12 = _UITextView;
    UITextView12.defaultTextColor = import_UIColor.UIColor.blackColor;
    UITextView12.notificationTextColor = import_UIColor.UIColor.redColor;
    UITextView12._intrinsicHeightCache = new import_UIObject.UIObject();
    UITextView12._intrinsicWidthCache = new import_UIObject.UIObject();
    UITextView12.type = {
      "paragraph": "p",
      "header1": "h1",
      "header2": "h2",
      "header3": "h3",
      "header4": "h4",
      "header5": "h5",
      "header6": "h6",
      "textArea": "textarea",
      "textField": "input",
      "span": "span",
      "label": "label"
    };
    UITextView12.textAlignment = {
      "left": "left",
      "center": "center",
      "right": "right",
      "justify": "justify"
    };
    UITextView12._determinePXAndPTRatios();
  }
});

// node_modules/uicore-ts/compiledScripts/UITextField.js
var require_UITextField = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UITextField.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UITextField_exports = {};
    __export2(UITextField_exports, {
      UITextField: () => UITextField4
    });
    module.exports = __toCommonJS2(UITextField_exports);
    var import_UIColor = require_UIColor();
    var import_UICoreValues = require_UICoreValues();
    var import_UIObject = require_UIObject();
    var import_UITextView = require_UITextView();
    var import_UIView = require_UIView();
    var _UITextField = class extends import_UITextView.UITextView {
      constructor(elementID, viewHTMLElement = null, type = import_UITextView.UITextView.type.textField) {
        super(elementID, type, viewHTMLElement);
        this.viewHTMLElement.setAttribute("type", "text");
        this.backgroundColor = import_UIColor.UIColor.whiteColor;
        this.addTargetForControlEvent(
          import_UIView.UIView.controlEvent.PointerUpInside,
          (sender, event2) => sender.focus()
        );
        this.viewHTMLElement.oninput = (event2) => {
          this.sendControlEventForKey(_UITextField.controlEvent.TextChange, event2);
        };
        this.style.webkitUserSelect = "text";
        this.nativeSelectionEnabled = import_UIObject.YES;
        this.pausesPointerEvents = import_UIObject.NO;
      }
      get addControlEventTarget() {
        return super.addControlEventTarget;
      }
      get viewHTMLElement() {
        return this._viewHTMLElement;
      }
      set text(text) {
        this.viewHTMLElement.value = text;
      }
      get text() {
        return this.viewHTMLElement.value;
      }
      set placeholderText(text) {
        this.viewHTMLElement.placeholder = text;
      }
      get placeholderText() {
        return this.viewHTMLElement.placeholder;
      }
      setPlaceholderText(key, defaultString) {
        this._placeholderTextKey = key;
        this._defaultPlaceholderText = defaultString;
        const languageName = import_UICoreValues.UICoreValues.languageService.currentLanguageKey;
        this.placeholderText = import_UICoreValues.UICoreValues.languageService.stringForKey(key, languageName, defaultString, import_UIObject.nil);
      }
      didReceiveBroadcastEvent(event2) {
        super.didReceiveBroadcastEvent(event2);
        if (event2.name == import_UIView.UIView.broadcastEventName.LanguageChanged || event2.name == import_UIView.UIView.broadcastEventName.AddedToViewTree) {
          this._setPlaceholderFromKeyIfPossible();
        }
      }
      willMoveToSuperview(superview) {
        super.willMoveToSuperview(superview);
        this._setPlaceholderFromKeyIfPossible();
      }
      _setPlaceholderFromKeyIfPossible() {
        if (this._placeholderTextKey && this._defaultPlaceholderText) {
          this.setPlaceholderText(this._placeholderTextKey, this._defaultPlaceholderText);
        }
      }
      get isSecure() {
        const result = this.viewHTMLElement.type == "password";
        return result;
      }
      set isSecure(secure) {
        var type = "text";
        if (secure) {
          type = "password";
        }
        this.viewHTMLElement.type = type;
      }
    };
    var UITextField4 = _UITextField;
    UITextField4.controlEvent = Object.assign({}, import_UIView.UIView.controlEvent, {
      "TextChange": "TextChange"
    });
  }
});

// node_modules/uicore-ts/compiledScripts/UITextArea.js
var require_UITextArea = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UITextArea.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UITextArea_exports = {};
    __export2(UITextArea_exports, {
      UITextArea: () => UITextArea3
    });
    module.exports = __toCommonJS2(UITextArea_exports);
    var import_UIObject = require_UIObject();
    var import_UITextField = require_UITextField();
    var import_UITextView = require_UITextView();
    var UITextArea3 = class extends import_UITextField.UITextField {
      constructor(elementID, viewHTMLElement = null) {
        super(elementID, viewHTMLElement, import_UITextView.UITextView.type.textArea);
        this.viewHTMLElement.removeAttribute("type");
        this.style.overflow = "auto";
        this.style.webkitUserSelect = "text";
        this.pausesPointerEvents = import_UIObject.NO;
      }
      get addControlEventTarget() {
        return super.addControlEventTarget;
      }
      get viewHTMLElement() {
        return super.viewHTMLElement;
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UIBaseButton.js
var require_UIBaseButton = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIBaseButton.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIBaseButton_exports = {};
    __export2(UIBaseButton_exports, {
      UIBaseButton: () => UIBaseButton
    });
    module.exports = __toCommonJS2(UIBaseButton_exports);
    var import_UIColor = require_UIColor();
    var import_UIObject = require_UIObject();
    var import_UIView = require_UIView();
    var UIBaseButton = class extends import_UIView.UIView {
      constructor(elementID, elementType, initViewData) {
        super(elementID, import_UIObject.nil, elementType, initViewData);
        this._selected = import_UIObject.NO;
        this._highlighted = import_UIObject.NO;
        this._isToggleable = import_UIObject.NO;
        this.initViewStateControl();
      }
      initViewStateControl() {
        this.class.superclass = import_UIView.UIView;
        this._isPointerInside = import_UIObject.NO;
        const setHovered = function() {
          this.hovered = import_UIObject.YES;
        }.bind(this);
        this.addTargetForControlEvent(import_UIView.UIView.controlEvent.PointerHover, setHovered);
        const setNotHovered = function() {
          this.hovered = import_UIObject.NO;
        }.bind(this);
        this.addTargetForControlEvents([
          import_UIView.UIView.controlEvent.PointerLeave,
          import_UIView.UIView.controlEvent.PointerCancel,
          import_UIView.UIView.controlEvent.MultipleTouches
        ], setNotHovered);
        var highlightingTime;
        const setHighlighted = function() {
          this.highlighted = import_UIObject.YES;
          highlightingTime = Date.now();
        }.bind(this);
        this.addTargetForControlEvent(import_UIView.UIView.controlEvent.PointerDown, setHighlighted);
        this.addTargetForControlEvent(import_UIView.UIView.controlEvent.PointerEnter, setHighlighted);
        const setNotHighlighted = function() {
          this.highlighted = import_UIObject.NO;
        }.bind(this);
        const setNotHighlightedWithMinimumDuration = function() {
          const minimumDurationInMilliseconds = 50;
          const elapsedTime = Date.now() - highlightingTime;
          if (minimumDurationInMilliseconds < elapsedTime) {
            this.highlighted = import_UIObject.NO;
          } else {
            setTimeout(function() {
              this.highlighted = import_UIObject.NO;
            }.bind(this), minimumDurationInMilliseconds - elapsedTime);
          }
        }.bind(this);
        this.addTargetForControlEvents([
          import_UIView.UIView.controlEvent.PointerLeave,
          import_UIView.UIView.controlEvent.PointerCancel,
          import_UIView.UIView.controlEvent.MultipleTouches
        ], setNotHighlighted);
        this.addTargetForControlEvent(import_UIView.UIView.controlEvent.PointerUp, setNotHighlightedWithMinimumDuration);
        this.addTargetForControlEvent(import_UIView.UIView.controlEvent.EnterDown, function() {
          setHighlighted();
          setNotHighlightedWithMinimumDuration();
        });
        this.addTargetForControlEvent(
          import_UIView.UIView.controlEvent.Focus,
          function(sender, event2) {
            this.focused = import_UIObject.YES;
          }.bind(this)
        );
        this.addTargetForControlEvent(
          import_UIView.UIView.controlEvent.Blur,
          function(sender, event2) {
            this.focused = import_UIObject.NO;
          }.bind(this)
        );
        this.updateContentForCurrentState();
        this.pausesPointerEvents = import_UIObject.YES;
        this.tabIndex = 1;
        this.style.cursor = "pointer";
        this.nativeSelectionEnabled = import_UIObject.NO;
        this.addTargetForControlEvents([
          import_UIView.UIView.controlEvent.EnterDown,
          import_UIView.UIView.controlEvent.PointerUpInside
        ], function(sender, event2) {
          if (this.isToggleable) {
            this.toggleSelectedState();
          }
        }.bind(this));
      }
      set hovered(hovered) {
        this._hovered = hovered;
        this.updateContentForCurrentState();
      }
      get hovered() {
        return this._hovered;
      }
      set highlighted(highlighted) {
        this._highlighted = highlighted;
        this.updateContentForCurrentState();
      }
      get highlighted() {
        return this._highlighted;
      }
      set focused(focused) {
        this._focused = focused;
        if (focused) {
          this.focus();
        } else {
          this.blur();
        }
        this.updateContentForCurrentState();
      }
      get focused() {
        return this._focused;
      }
      set selected(selected) {
        this._selected = selected;
        this.updateContentForCurrentState();
      }
      get selected() {
        return this._selected;
      }
      updateContentForCurrentState() {
        var updateFunction = this.updateContentForNormalState;
        if (this.selected && this.highlighted) {
          updateFunction = this.updateContentForSelectedAndHighlightedState;
        } else if (this.selected) {
          updateFunction = this.updateContentForSelectedState;
        } else if (this.focused) {
          updateFunction = this.updateContentForFocusedState;
        } else if (this.highlighted) {
          updateFunction = this.updateContentForHighlightedState;
        } else if (this.hovered) {
          updateFunction = this.updateContentForHoveredState;
        }
        if (!(0, import_UIObject.IS)(updateFunction)) {
          this.backgroundColor = import_UIColor.UIColor.nilColor;
        } else {
          updateFunction.call(this);
        }
      }
      updateContentForNormalState() {
      }
      updateContentForHoveredState() {
        this.updateContentForNormalState();
      }
      updateContentForFocusedState() {
        this.updateContentForHoveredState();
      }
      updateContentForHighlightedState() {
      }
      updateContentForSelectedState() {
      }
      updateContentForSelectedAndHighlightedState() {
        this.updateContentForSelectedState();
      }
      set enabled(enabled) {
        super.enabled = enabled;
        this.updateContentForCurrentEnabledState();
      }
      get enabled() {
        return super.enabled;
      }
      updateContentForCurrentEnabledState() {
        if (this.enabled) {
          this.alpha = 1;
        } else {
          this.alpha = 0.5;
        }
        this.userInteractionEnabled = this.enabled;
      }
      addStyleClass(styleClassName) {
        super.addStyleClass(styleClassName);
        if (this.styleClassName != styleClassName) {
          this.updateContentForCurrentState.call(this);
        }
      }
      didReceiveBroadcastEvent(event2) {
        super.didReceiveBroadcastEvent(event2);
        if (event2.name == import_UIView.UIView.broadcastEventName.PageDidScroll || event2.name == import_UIView.UIView.broadcastEventName.AddedToViewTree) {
          this.hovered = import_UIObject.NO;
          this.highlighted = import_UIObject.NO;
        }
      }
      toggleSelectedState() {
        this.selected = !this.selected;
      }
      set isToggleable(isToggleable) {
        this._isToggleable = isToggleable;
      }
      get isToggleable() {
        return this._isToggleable;
      }
      layoutSubviews() {
        super.layoutSubviews();
        const bounds = this.bounds;
      }
      sendControlEventForKey(eventKey, nativeEvent) {
        if (eventKey == import_UIView.UIView.controlEvent.PointerUpInside && !this.highlighted) {
          const asd = 1;
        } else {
          super.sendControlEventForKey(eventKey, nativeEvent);
        }
      }
      static getEventCoordinatesInDocument(touchOrMouseEvent) {
        var posx = 0;
        var posy = 0;
        var e = touchOrMouseEvent;
        if (!e) {
          e = window.event;
        }
        if (e.pageX || e.pageY) {
          posx = e.pageX;
          posy = e.pageY;
        } else if (e.clientX || e.clientY) {
          posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
          posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        const coordinates = { "x": posx, "y": posy };
        return coordinates;
      }
      static getElementPositionInDocument(el) {
        var xPosition = 0;
        var yPosition = 0;
        while (el) {
          if (el.tagName == "BODY") {
          } else {
            xPosition += el.offsetLeft - el.scrollLeft + el.clientLeft;
            yPosition += el.offsetTop - el.scrollTop + el.clientTop;
          }
          el = el.offsetParent;
        }
        return {
          x: xPosition,
          y: yPosition
        };
      }
      static convertCoordinatesFromDocumentToElement(x, y, element) {
        const elementPositionInDocument = this.getElementPositionInDocument(element);
        const coordinatesInElement = { "x": x - elementPositionInDocument.x, "y": y - elementPositionInDocument.y };
        return coordinatesInElement;
      }
      static getEventCoordinatesInElement(touchOrMouseEvent, element) {
        const coordinatesInDocument = this.getEventCoordinatesInDocument(touchOrMouseEvent);
        const coordinatesInElement = this.convertCoordinatesFromDocumentToElement(
          coordinatesInDocument.x,
          coordinatesInDocument.y,
          element
        );
        return coordinatesInElement;
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UIImageView.js
var require_UIImageView = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIImageView.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIImageView_exports = {};
    __export2(UIImageView_exports, {
      UIImageView: () => UIImageView4
    });
    module.exports = __toCommonJS2(UIImageView_exports);
    var import_UICoreValues = require_UICoreValues();
    var import_UIObject = require_UIObject();
    var import_UIRectangle = require_UIRectangle();
    var import_UIView = require_UIView();
    var _UIImageView = class extends import_UIView.UIView {
      constructor(elementID, viewHTMLElement = null) {
        super(elementID, viewHTMLElement, "img");
        this._hiddenWhenEmpty = import_UIObject.NO;
      }
      get viewHTMLElement() {
        return super.viewHTMLElement;
      }
      static objectURLFromDataURL(dataURL) {
        const blob = dataURLtoBlob(dataURL);
        const objectURL = URL.createObjectURL(blob);
        return objectURL;
      }
      static dataURL(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.responseType = "blob";
        xhr.onload = function() {
          const fr = new FileReader();
          fr.onload = function() {
            callback(this.result);
          };
          fr.readAsDataURL(xhr.response);
        };
        xhr.send();
      }
      static dataURLWithMaxSize(URLString, maxSize, completion) {
        const imageView = new _UIImageView();
        imageView.imageSource = URLString;
        imageView.viewHTMLElement.onload = function() {
          const originalSize = imageView.intrinsicContentSize();
          var multiplier = maxSize / Math.max(originalSize.height, originalSize.width);
          multiplier = Math.min(1, multiplier);
          const result = imageView.getDataURL((originalSize.height * multiplier).integerValue, (originalSize.width * multiplier).integerValue);
          completion(result);
        };
      }
      static dataURLWithSizes(URLString, height, width, completion) {
        const imageView = new _UIImageView();
        imageView.imageSource = URLString;
        imageView.viewHTMLElement.onload = function() {
          const result = imageView.getDataURL(height, width);
          completion(result);
        };
      }
      getDataURL(height, width) {
        const img = this.viewHTMLElement;
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        const dataURL = canvas.toDataURL("image/png");
        return dataURL;
      }
      get imageSource() {
        return this.viewHTMLElement.src;
      }
      set imageSource(sourceString) {
        if ((0, import_UIObject.IS_NOT)(sourceString)) {
          sourceString = "";
        }
        this.viewHTMLElement.src = sourceString;
        if (this.hiddenWhenEmpty) {
          this.hidden = (0, import_UIObject.IS_NOT)(this.imageSource);
        }
        if (!sourceString || !sourceString.length) {
          this.hidden = import_UIObject.YES;
          return;
        } else {
          this.hidden = import_UIObject.NO;
        }
        this.viewHTMLElement.onload = function(event2) {
          this.superview.setNeedsLayout();
        }.bind(this);
      }
      setImageSource(key, defaultString) {
        const languageName = import_UICoreValues.UICoreValues.languageService.currentLanguageKey;
        this.imageSource = import_UICoreValues.UICoreValues.languageService.stringForKey(key, languageName, defaultString, import_UIObject.nil);
      }
      didReceiveBroadcastEvent(event2) {
        super.didReceiveBroadcastEvent(event2);
        if (event2.name == import_UIView.UIView.broadcastEventName.LanguageChanged || event2.name == import_UIView.UIView.broadcastEventName.AddedToViewTree) {
          this._setImageSourceFromKeyIfPossible();
        }
      }
      willMoveToSuperview(superview) {
        super.willMoveToSuperview(superview);
        this._setImageSourceFromKeyIfPossible();
      }
      _setImageSourceFromKeyIfPossible() {
        if (this._sourceKey && this._defaultSource) {
          this.setImageSource(this._sourceKey, this._defaultSource);
        }
      }
      get fillMode() {
        return this._fillMode;
      }
      set fillMode(fillMode) {
        this._fillMode = fillMode;
        this.style.objectFit = fillMode;
      }
      get hiddenWhenEmpty() {
        return this._hiddenWhenEmpty;
      }
      set hiddenWhenEmpty(hiddenWhenEmpty) {
        this._hiddenWhenEmpty = hiddenWhenEmpty;
        if (hiddenWhenEmpty) {
          this.hidden = (0, import_UIObject.IS_NOT)(this.imageSource);
        }
      }
      didMoveToSuperview(superview) {
        super.didMoveToSuperview(superview);
      }
      layoutSubviews() {
        super.layoutSubviews();
      }
      intrinsicContentSize() {
        const result = new import_UIRectangle.UIRectangle(0, 0, this.viewHTMLElement.naturalHeight, this.viewHTMLElement.naturalWidth);
        return result;
      }
      intrinsicContentSizeWithConstraints(constrainingHeight = 0, constrainingWidth = 0) {
        const heightRatio = constrainingHeight / this.viewHTMLElement.naturalHeight;
        const widthRatio = constrainingWidth / this.viewHTMLElement.naturalWidth;
        const multiplier = Math.max(heightRatio, widthRatio);
        const result = new import_UIRectangle.UIRectangle(0, 0, this.viewHTMLElement.naturalHeight * multiplier, this.viewHTMLElement.naturalWidth * multiplier);
        return result;
      }
    };
    var UIImageView4 = _UIImageView;
    UIImageView4.fillMode = {
      "stretchToFill": "fill",
      "aspectFit": "contain",
      "aspectFill": "cover",
      "center": "none",
      "aspectFitIfLarger": "scale-down"
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UIButton.js
var require_UIButton = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIButton.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIButton_exports = {};
    __export2(UIButton_exports, {
      UIButton: () => UIButton10
    });
    module.exports = __toCommonJS2(UIButton_exports);
    var import_UIBaseButton = require_UIBaseButton();
    var import_UIColor = require_UIColor();
    var import_UIImageView = require_UIImageView();
    var import_UIObject = require_UIObject();
    var import_UIRectangle = require_UIRectangle();
    var import_UITextView = require_UITextView();
    var UIButton10 = class extends import_UIBaseButton.UIBaseButton {
      constructor(elementID, elementType, titleType = import_UITextView.UITextView.type.span) {
        super(elementID, elementType, { "titleType": titleType });
        this.usesAutomaticTitleFontSize = import_UIObject.NO;
        this.minAutomaticFontSize = import_UIObject.nil;
        this.maxAutomaticFontSize = 25;
      }
      initView(elementID, viewHTMLElement, initViewData) {
        this.class.superclass = import_UIBaseButton.UIBaseButton;
        this.colors = {
          titleLabel: {
            normal: import_UIColor.UIColor.whiteColor,
            highlighted: import_UIColor.UIColor.whiteColor,
            selected: import_UIColor.UIColor.whiteColor
          },
          background: {
            normal: import_UIColor.UIColor.blueColor,
            highlighted: import_UIColor.UIColor.greenColor,
            selected: import_UIColor.UIColor.redColor
          }
        };
        this._imageView = new import_UIImageView.UIImageView(elementID + "ImageView");
        this._imageView.hidden = import_UIObject.YES;
        this.addSubview(this.imageView);
        this.imageView.fillMode = import_UIImageView.UIImageView.fillMode.aspectFitIfLarger;
        if ((0, import_UIObject.IS_NOT_NIL)(initViewData.titleType)) {
          this._titleLabel = new import_UITextView.UITextView(elementID + "TitleLabel", initViewData.titleType);
          this.titleLabel.style.whiteSpace = "nowrap";
          this.addSubview(this.titleLabel);
          this.titleLabel.userInteractionEnabled = import_UIObject.NO;
        }
        this.contentPadding = 10;
        this.imageView.userInteractionEnabled = import_UIObject.NO;
        this.titleLabel.textAlignment = import_UITextView.UITextView.textAlignment.center;
        this.titleLabel.nativeSelectionEnabled = import_UIObject.NO;
      }
      get contentPadding() {
        return this._contentPadding.integerValue;
      }
      set contentPadding(contentPadding) {
        this._contentPadding = contentPadding;
        this.setNeedsLayout();
      }
      set hovered(hovered) {
        this._hovered = hovered;
        this.updateContentForCurrentState();
      }
      get hovered() {
        return this._hovered;
      }
      set highlighted(highlighted) {
        this._highlighted = highlighted;
        this.updateContentForCurrentState();
      }
      get highlighted() {
        return this._highlighted;
      }
      set focused(focused) {
        this._focused = focused;
        if (focused) {
          this.focus();
        } else {
          this.blur();
        }
        this.updateContentForCurrentState();
      }
      get focused() {
        return this._focused;
      }
      set selected(selected) {
        this._selected = selected;
        this.updateContentForCurrentState();
      }
      get selected() {
        return this._selected;
      }
      updateContentForCurrentState() {
        var updateFunction = this.updateContentForNormalState;
        if (this.selected && this.highlighted) {
          updateFunction = this.updateContentForSelectedAndHighlightedState;
        } else if (this.selected) {
          updateFunction = this.updateContentForSelectedState;
        } else if (this.focused) {
          updateFunction = this.updateContentForFocusedState;
        } else if (this.highlighted) {
          updateFunction = this.updateContentForHighlightedState;
        } else if (this.hovered) {
          updateFunction = this.updateContentForHoveredState;
        }
        if (!(0, import_UIObject.IS)(updateFunction)) {
          this.titleLabel.textColor = import_UIColor.UIColor.nilColor;
          this.backgroundColor = import_UIColor.UIColor.nilColor;
        } else {
          updateFunction.call(this);
        }
        this.updateContentForCurrentEnabledState();
      }
      updateContentForNormalState() {
        this.backgroundColor = this.colors.background.normal;
        this.titleLabel.textColor = this.colors.titleLabel.normal;
      }
      updateContentForHoveredState() {
        this.updateContentForNormalState();
        if (this.colors.background.hovered) {
          this.backgroundColor = this.colors.background.hovered;
        }
        if (this.colors.titleLabel.hovered) {
          this.titleLabel.textColor = this.colors.titleLabel.hovered;
        }
      }
      updateContentForFocusedState() {
        this.updateContentForHoveredState();
        if (this.colors.background.focused) {
          this.backgroundColor = this.colors.background.focused;
        }
        if (this.colors.titleLabel.focused) {
          this.titleLabel.textColor = this.colors.titleLabel.focused;
        }
      }
      updateContentForHighlightedState() {
        this.backgroundColor = this.colors.background.highlighted;
        this.titleLabel.textColor = this.colors.titleLabel.highlighted;
      }
      updateContentForSelectedState() {
        this.backgroundColor = this.colors.background.selected;
        this.titleLabel.textColor = this.colors.titleLabel.selected;
      }
      updateContentForSelectedAndHighlightedState() {
        this.updateContentForSelectedState();
        if (this.colors.background.selectedAndHighlighted) {
          this.backgroundColor = this.colors.background.selectedAndHighlighted;
        }
        if (this.colors.titleLabel.selectedAndHighlighted) {
          this.titleLabel.textColor = this.colors.titleLabel.selectedAndHighlighted;
        }
      }
      set enabled(enabled) {
        super.enabled = enabled;
        this.updateContentForCurrentState();
      }
      get enabled() {
        return super.enabled;
      }
      updateContentForCurrentEnabledState() {
        if (this.enabled) {
          this.alpha = 1;
        } else {
          this.alpha = 0.5;
        }
        this.userInteractionEnabled = this.enabled;
      }
      addStyleClass(styleClassName) {
        super.addStyleClass(styleClassName);
        if (this.styleClassName != styleClassName) {
          this.updateContentForCurrentState.call(this);
        }
      }
      get titleLabel() {
        return this._titleLabel;
      }
      get imageView() {
        return this._imageView;
      }
      layoutSubviews() {
        super.layoutSubviews();
        var bounds = this.bounds;
        this.hoverText = this.titleLabel.text;
        if ((0, import_UIObject.IS_NOT)(this.imageView.hidden) && !(0, import_UIObject.IS)(this.titleLabel.text)) {
          this.imageView.frame = bounds;
        }
        if ((0, import_UIObject.IS)(this.imageView.hidden) && (0, import_UIObject.IS)(this.titleLabel.text)) {
          var titleElement = this.titleLabel.viewHTMLElement;
          this.titleLabel.style.left = this.contentPadding;
          this.titleLabel.style.right = this.contentPadding;
          this.titleLabel.style.top = "50%";
          this.titleLabel.style.transform = "translateY(-50%)";
          this.titleLabel.frame = new import_UIRectangle.UIRectangle(import_UIObject.nil, import_UIObject.nil, import_UIObject.nil, import_UIObject.nil);
          if (this.usesAutomaticTitleFontSize) {
            var hidden = this.titleLabel.hidden;
            this.titleLabel.hidden = import_UIObject.YES;
            this.titleLabel.fontSize = 15;
            this.titleLabel.fontSize = import_UITextView.UITextView.automaticallyCalculatedFontSize(
              new import_UIRectangle.UIRectangle(
                0,
                0,
                this.bounds.height,
                1 * this.titleLabel.viewHTMLElement.offsetWidth
              ),
              this.titleLabel.intrinsicContentSize(),
              this.titleLabel.fontSize,
              this.minAutomaticFontSize,
              this.maxAutomaticFontSize
            );
            this.titleLabel.hidden = hidden;
          }
        }
        if ((0, import_UIObject.IS_NOT)(this.imageView.hidden) && (0, import_UIObject.IS)(this.titleLabel.text)) {
          const imageShareOfWidth = 0.25;
          bounds = bounds.rectangleWithInset(this.contentPadding);
          const imageFrame = bounds.copy();
          imageFrame.width = bounds.height - this.contentPadding * 0.5;
          this.imageView.frame = imageFrame;
          var titleElement = this.titleLabel.viewHTMLElement;
          this.titleLabel.style.left = imageFrame.max.x + this.contentPadding;
          this.titleLabel.style.right = this.contentPadding;
          this.titleLabel.style.top = "50%";
          this.titleLabel.style.transform = "translateY(-50%)";
          if (this.usesAutomaticTitleFontSize) {
            var hidden = this.titleLabel.hidden;
            this.titleLabel.hidden = import_UIObject.YES;
            this.titleLabel.fontSize = 15;
            this.titleLabel.fontSize = import_UITextView.UITextView.automaticallyCalculatedFontSize(
              new import_UIRectangle.UIRectangle(
                0,
                0,
                this.bounds.height,
                1 * this.titleLabel.viewHTMLElement.offsetWidth
              ),
              this.titleLabel.intrinsicContentSize(),
              this.titleLabel.fontSize,
              this.minAutomaticFontSize,
              this.maxAutomaticFontSize
            );
            this.titleLabel.hidden = hidden;
          }
        }
        this.applyClassesAndStyles();
      }
      initViewStyleSelectors() {
        this.initStyleSelector("." + this.styleClassName, "background-color: lightblue;");
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UINativeScrollView.js
var require_UINativeScrollView = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UINativeScrollView.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UINativeScrollView_exports = {};
    __export2(UINativeScrollView_exports, {
      UINativeScrollView: () => UINativeScrollView
    });
    module.exports = __toCommonJS2(UINativeScrollView_exports);
    var import_UIObject = require_UIObject();
    var import_UIPoint = require_UIPoint();
    var import_UIView = require_UIView();
    var UINativeScrollView = class extends import_UIView.UIView {
      constructor(elementID, viewHTMLElement) {
        super(elementID, viewHTMLElement);
        this.animationDuration = 0;
        this.style.cssText = this.style.cssText + "-webkit-overflow-scrolling: touch;";
        this.style.overflow = "auto";
        this.viewHTMLElement.addEventListener("scroll", function(event2) {
          this.didScrollToPosition(new import_UIPoint.UIPoint(this.viewHTMLElement.scrollLeft, this.viewHTMLElement.scrollTop));
          this.broadcastEventInSubtree({
            name: import_UIView.UIView.broadcastEventName.PageDidScroll,
            parameters: import_UIObject.nil
          });
        }.bind(this));
      }
      didScrollToPosition(offsetPosition) {
      }
      get scrollsX() {
        const result = this.style.overflowX == "scroll";
        return result;
      }
      set scrollsX(scrolls) {
        if (scrolls) {
          this.style.overflowX = "scroll";
        } else {
          this.style.overflowX = "hidden";
        }
      }
      get scrollsY() {
        const result = this.style.overflowY == "scroll";
        return result;
      }
      set scrollsY(scrolls) {
        if (scrolls) {
          this.style.overflowY = "scroll";
        } else {
          this.style.overflowY = "hidden";
        }
      }
      get contentOffset() {
        const result = new import_UIPoint.UIPoint(this.viewHTMLElement.scrollLeft, this.viewHTMLElement.scrollTop);
        return result;
      }
      set contentOffset(offsetPoint) {
        if (this.animationDuration) {
          this.scrollXTo(this.viewHTMLElement, offsetPoint.x, this.animationDuration);
          this.scrollYTo(this.viewHTMLElement, offsetPoint.y, this.animationDuration);
          return;
        }
        this.viewHTMLElement.scrollLeft = offsetPoint.x;
        this.viewHTMLElement.scrollTop = offsetPoint.y;
      }
      scrollToBottom() {
        this.contentOffset = new import_UIPoint.UIPoint(this.contentOffset.x, this.scrollSize.height - this.frame.height);
      }
      scrollToTop() {
        this.contentOffset = new import_UIPoint.UIPoint(this.contentOffset.x, 0);
      }
      get isScrolledToBottom() {
        return this.contentOffset.isEqualTo(new import_UIPoint.UIPoint(this.contentOffset.x, this.scrollSize.height - this.frame.height));
      }
      get isScrolledToTop() {
        return this.contentOffset.isEqualTo(new import_UIPoint.UIPoint(this.contentOffset.x, 0));
      }
      scrollYTo(element, to, duration) {
        duration = duration * 1e3;
        const start = element.scrollTop;
        const change = to - start;
        const increment = 10;
        const animateScroll = function(elapsedTime) {
          elapsedTime += increment;
          const position = this.easeInOut(elapsedTime, start, change, duration);
          element.scrollTop = position;
          if (elapsedTime < duration) {
            setTimeout(function() {
              animateScroll(elapsedTime);
            }, increment);
          }
        }.bind(this);
        animateScroll(0);
      }
      scrollXTo(element, to, duration) {
        duration = duration * 1e3;
        const start = element.scrollTop;
        const change = to - start;
        const increment = 10;
        const animateScroll = function(elapsedTime) {
          elapsedTime += increment;
          const position = this.easeInOut(elapsedTime, start, change, duration);
          element.scrollLeft = position;
          if (elapsedTime < duration) {
            setTimeout(function() {
              animateScroll(elapsedTime);
            }, increment);
          }
        }.bind(this);
        animateScroll(0);
      }
      easeInOut(currentTime, start, change, duration) {
        currentTime /= duration / 2;
        if (currentTime < 1) {
          return change / 2 * currentTime * currentTime + start;
        }
        currentTime -= 1;
        return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UITableView.js
var require_UITableView = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UITableView.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UITableView_exports = {};
    __export2(UITableView_exports, {
      UITableView: () => UITableView4
    });
    module.exports = __toCommonJS2(UITableView_exports);
    var import_UIButton = require_UIButton();
    var import_UINativeScrollView = require_UINativeScrollView();
    var import_UIObject = require_UIObject();
    var import_UIView = require_UIView();
    var UITableView4 = class extends import_UINativeScrollView.UINativeScrollView {
      constructor(elementID) {
        super(elementID);
        this.allRowsHaveEqualHeight = import_UIObject.NO;
        this._visibleRows = [];
        this._firstLayoutVisibleRows = [];
        this._rowPositions = [];
        this._highestValidRowPositionIndex = 0;
        this._reusableViews = {};
        this._removedReusableViews = {};
        this._rowIDIndex = 0;
        this.reloadsOnLanguageChange = import_UIObject.YES;
        this.sidePadding = 0;
        this._persistedData = [];
        this._needsDrawingOfVisibleRowsBeforeLayout = import_UIObject.NO;
        this._isDrawVisibleRowsScheduled = import_UIObject.NO;
        this.animationDuration = 0.25;
        this.scrollsX = import_UIObject.NO;
      }
      initView(elementID, viewHTMLElement) {
        super.initView(elementID, viewHTMLElement);
        this._fullHeightView = new import_UIView.UIView();
        this._fullHeightView.hidden = import_UIObject.YES;
        this._fullHeightView.userInteractionEnabled = import_UIObject.NO;
        this.addSubview(this._fullHeightView);
      }
      loadData() {
        this._persistedData = [];
        this._calculatePositionsUntilIndex(this.numberOfRows() - 1);
        this._needsDrawingOfVisibleRowsBeforeLayout = import_UIObject.YES;
        this.setNeedsLayout();
      }
      reloadData() {
        this._removeVisibleRows();
        this._removeAllReusableRows();
        this._rowPositions = [];
        this._highestValidRowPositionIndex = 0;
        this.loadData();
      }
      highlightChanges(previousData, newData) {
        previousData = previousData.map(function(dataPoint, index, array) {
          return JSON.stringify(dataPoint);
        });
        newData = newData.map(function(dataPoint, index, array) {
          return JSON.stringify(dataPoint);
        });
        const newIndexes = [];
        newData.forEach(function(value, index, array) {
          if (!previousData.contains(value)) {
            newIndexes.push(index);
          }
        });
        newIndexes.forEach(function(index) {
          if (this.isRowWithIndexVisible(index)) {
            this.highlightRowAsNew(this.viewForRowWithIndex(index));
          }
        }.bind(this));
      }
      highlightRowAsNew(row) {
      }
      invalidateSizeOfRowWithIndex(index, animateChange = import_UIObject.NO) {
        if (this._rowPositions[index]) {
          this._rowPositions[index].isValid = import_UIObject.NO;
        }
        this._highestValidRowPositionIndex = Math.min(this._highestValidRowPositionIndex, index - 1);
        this._needsDrawingOfVisibleRowsBeforeLayout = import_UIObject.YES;
        this._shouldAnimateNextLayout = animateChange;
      }
      _calculateAllPositions() {
        this._calculatePositionsUntilIndex(this.numberOfRows() - 1);
      }
      _calculatePositionsUntilIndex(maxIndex) {
        var validPositionObject = this._rowPositions[this._highestValidRowPositionIndex];
        if (!(0, import_UIObject.IS)(validPositionObject)) {
          validPositionObject = {
            bottomY: 0,
            topY: 0,
            isValid: import_UIObject.YES
          };
        }
        var previousBottomY = validPositionObject.bottomY;
        if (!this._rowPositions.length) {
          this._highestValidRowPositionIndex = -1;
        }
        for (var i = this._highestValidRowPositionIndex + 1; i <= maxIndex; i++) {
          var height;
          const rowPositionObject = this._rowPositions[i];
          if ((0, import_UIObject.IS)((rowPositionObject || import_UIObject.nil).isValid)) {
            height = rowPositionObject.bottomY - rowPositionObject.topY;
          } else {
            height = this.heightForRowWithIndex(i);
          }
          const positionObject = {
            bottomY: previousBottomY + height,
            topY: previousBottomY,
            isValid: import_UIObject.YES
          };
          if (i < this._rowPositions.length) {
            this._rowPositions[i] = positionObject;
          } else {
            this._rowPositions.push(positionObject);
          }
          this._highestValidRowPositionIndex = i;
          previousBottomY = previousBottomY + height;
        }
      }
      indexesForVisibleRows(paddingRatio = 0.5) {
        const firstVisibleY = this.contentOffset.y - this.bounds.height * paddingRatio;
        const lastVisibleY = firstVisibleY + this.bounds.height * (1 + paddingRatio);
        const numberOfRows = this.numberOfRows();
        if (this.allRowsHaveEqualHeight) {
          const rowHeight = this.heightForRowWithIndex(0);
          var firstIndex = firstVisibleY / rowHeight;
          var lastIndex = lastVisibleY / rowHeight;
          firstIndex = Math.trunc(firstIndex);
          lastIndex = Math.trunc(lastIndex) + 1;
          firstIndex = Math.max(firstIndex, 0);
          lastIndex = Math.min(lastIndex, numberOfRows - 1);
          var result = [];
          for (var i = firstIndex; i < lastIndex + 1; i++) {
            result.push(i);
          }
          return result;
        }
        var accumulatedHeight = 0;
        var result = [];
        this._calculateAllPositions();
        const rowPositions = this._rowPositions;
        for (var i = 0; i < numberOfRows; i++) {
          const height = rowPositions[i].bottomY - rowPositions[i].topY;
          accumulatedHeight = accumulatedHeight + height;
          if (accumulatedHeight >= firstVisibleY) {
            result.push(i);
          }
          if (accumulatedHeight >= lastVisibleY) {
            break;
          }
        }
        return result;
      }
      _removeVisibleRows() {
        const visibleRows = [];
        this._visibleRows.forEach(function(row, index, array) {
          this._persistedData[row._UITableViewRowIndex] = this.persistenceDataItemForRowWithIndex(
            row._UITableViewRowIndex,
            row
          );
          row.removeFromSuperview();
          this._removedReusableViews[row._UITableViewReusabilityIdentifier].push(row);
        }, this);
        this._visibleRows = visibleRows;
      }
      _removeAllReusableRows() {
        this._reusableViews.forEach(function(rows) {
          rows.forEach(function(row, index, array) {
            this._persistedData[row._UITableViewRowIndex] = this.persistenceDataItemForRowWithIndex(
              row._UITableViewRowIndex,
              row
            );
            row.removeFromSuperview();
            this._markReusableViewAsUnused(row);
          }.bind(this));
        }.bind(this));
      }
      _markReusableViewAsUnused(row) {
        if (!this._removedReusableViews[row._UITableViewReusabilityIdentifier].contains(row)) {
          this._removedReusableViews[row._UITableViewReusabilityIdentifier].push(row);
        }
      }
      _drawVisibleRows() {
        if (!this.isMemberOfViewTree) {
          return;
        }
        const visibleIndexes = this.indexesForVisibleRows();
        const minIndex = visibleIndexes[0];
        const maxIndex = visibleIndexes[visibleIndexes.length - 1];
        const removedViews = [];
        const visibleRows = [];
        this._visibleRows.forEach(function(row, index, array) {
          if (row._UITableViewRowIndex < minIndex || row._UITableViewRowIndex > maxIndex) {
            this._persistedData[row._UITableViewRowIndex] = this.persistenceDataItemForRowWithIndex(
              row._UITableViewRowIndex,
              row
            );
            this._removedReusableViews[row._UITableViewReusabilityIdentifier].push(row);
            removedViews.push(row);
          } else {
            visibleRows.push(row);
          }
        }, this);
        this._visibleRows = visibleRows;
        visibleIndexes.forEach(function(rowIndex, index, array) {
          if (this.isRowWithIndexVisible(rowIndex)) {
            return;
          }
          const view2 = this.viewForRowWithIndex(rowIndex);
          this._firstLayoutVisibleRows.push(view2);
          this._visibleRows.push(view2);
          this.addSubview(view2);
        }, this);
        for (var i = 0; i < removedViews.length; i++) {
          var view = removedViews[i];
          if (this._visibleRows.indexOf(view) == -1) {
            view.removeFromSuperview();
          }
        }
      }
      visibleRowWithIndex(rowIndex) {
        for (var i = 0; i < this._visibleRows.length; i++) {
          const row = this._visibleRows[i];
          if (row._UITableViewRowIndex == rowIndex) {
            return row;
          }
        }
        return import_UIObject.nil;
      }
      isRowWithIndexVisible(rowIndex) {
        return (0, import_UIObject.IS)(this.visibleRowWithIndex(rowIndex));
      }
      reusableViewForIdentifier(identifier, rowIndex) {
        if (!this._removedReusableViews[identifier]) {
          this._removedReusableViews[identifier] = [];
        }
        if (this._removedReusableViews[identifier] && this._removedReusableViews[identifier].length) {
          const view = this._removedReusableViews[identifier].pop();
          view._UITableViewRowIndex = rowIndex;
          Object.assign(view, this._persistedData[rowIndex] || this.defaultRowPersistenceDataItem());
          return view;
        }
        if (!this._reusableViews[identifier]) {
          this._reusableViews[identifier] = [];
        }
        const newView = this.newReusableViewForIdentifier(identifier, this._rowIDIndex);
        this._rowIDIndex = this._rowIDIndex + 1;
        if (this._rowIDIndex > 40) {
          const asd = 1;
        }
        newView._UITableViewReusabilityIdentifier = identifier;
        newView._UITableViewRowIndex = rowIndex;
        Object.assign(newView, this._persistedData[rowIndex] || this.defaultRowPersistenceDataItem());
        this._reusableViews[identifier].push(newView);
        return newView;
      }
      newReusableViewForIdentifier(identifier, rowIDIndex) {
        const view = new import_UIButton.UIButton(this.elementID + "Row" + rowIDIndex);
        view.stopsPointerEventPropagation = import_UIObject.NO;
        view.pausesPointerEvents = import_UIObject.NO;
        return view;
      }
      heightForRowWithIndex(index) {
        return 50;
      }
      numberOfRows() {
        return 1e4;
      }
      defaultRowPersistenceDataItem() {
      }
      persistenceDataItemForRowWithIndex(rowIndex, row) {
      }
      viewForRowWithIndex(rowIndex) {
        const row = this.reusableViewForIdentifier("Row", rowIndex);
        row.titleLabel.text = "Row " + rowIndex;
        return row;
      }
      didScrollToPosition(offsetPosition) {
        super.didScrollToPosition(offsetPosition);
        this.forEachViewInSubtree(function(view) {
          view._isPointerValid = import_UIObject.NO;
        });
        if (!this._isDrawVisibleRowsScheduled) {
          this._isDrawVisibleRowsScheduled = import_UIObject.YES;
          import_UIView.UIView.runFunctionBeforeNextFrame(function() {
            this._calculateAllPositions();
            this._drawVisibleRows();
            this.setNeedsLayout();
            this._isDrawVisibleRowsScheduled = import_UIObject.NO;
          }.bind(this));
        }
      }
      wasAddedToViewTree() {
        this.loadData();
      }
      setFrame(rectangle, zIndex, performUncheckedLayout) {
        const frame = this.frame;
        super.setFrame(rectangle, zIndex, performUncheckedLayout);
        if (frame.isEqualTo(rectangle) && !performUncheckedLayout) {
          return;
        }
        this._needsDrawingOfVisibleRowsBeforeLayout = import_UIObject.YES;
      }
      didReceiveBroadcastEvent(event2) {
        super.didReceiveBroadcastEvent(event2);
        if (event2.name == import_UIView.UIView.broadcastEventName.LanguageChanged && this.reloadsOnLanguageChange) {
          this.reloadData();
        }
      }
      _layoutAllRows(positions = this._rowPositions) {
        const bounds = this.bounds;
        this._visibleRows.forEach(function(row, index, array) {
          const frame = bounds.copy();
          const positionObject = positions[row._UITableViewRowIndex];
          frame.min.y = positionObject.topY;
          frame.max.y = positionObject.bottomY;
          row.frame = frame;
          row.style.width = "" + (bounds.width - this.sidePadding * 2).integerValue + "px";
          row.style.left = "" + this.sidePadding.integerValue + "px";
        }, this);
        this._fullHeightView.frame = bounds.rectangleWithHeight((positions.lastElement || import_UIObject.nil).bottomY).rectangleWithWidth(bounds.width * 0.5);
        this._firstLayoutVisibleRows = [];
      }
      _animateLayoutAllRows() {
        import_UIView.UIView.animateViewOrViewsWithDurationDelayAndFunction(
          this._visibleRows,
          this.animationDuration,
          0,
          void 0,
          function() {
            this._layoutAllRows();
          }.bind(this),
          function() {
          }.bind(this)
        );
      }
      layoutSubviews() {
        const previousPositions = JSON.parse(JSON.stringify(this._rowPositions));
        const previousVisibleRowsLength = this._visibleRows.length;
        if (this._needsDrawingOfVisibleRowsBeforeLayout) {
          this._drawVisibleRows();
          this._needsDrawingOfVisibleRowsBeforeLayout = import_UIObject.NO;
        }
        super.layoutSubviews();
        if (!this.numberOfRows() || !this.isMemberOfViewTree) {
          return;
        }
        if (this._shouldAnimateNextLayout) {
          this._layoutAllRows(previousPositions);
          if (previousVisibleRowsLength < this._visibleRows.length) {
            import_UIView.UIView.runFunctionBeforeNextFrame(function() {
              this._animateLayoutAllRows();
            }.bind(this));
          } else {
            this._animateLayoutAllRows();
          }
          this._shouldAnimateNextLayout = import_UIObject.NO;
        } else {
          this._calculateAllPositions();
          this._layoutAllRows();
        }
      }
      intrinsicContentHeight(constrainingWidth = 0) {
        var result = 0;
        this._calculateAllPositions();
        if (this._rowPositions.length) {
          result = this._rowPositions[this._rowPositions.length - 1].bottomY;
        }
        return result;
      }
    };
  }
});

// inline-worker:__inline-worker
function inlineWorker(scriptText) {
  let blob = new Blob([scriptText], { type: "text/javascript" });
  let url = URL.createObjectURL(blob);
  let worker = new Worker(url);
  URL.revokeObjectURL(url);
  return worker;
}
var init_inline_worker = __esm({
  "inline-worker:__inline-worker"() {
  }
});

// node_modules/uicore-ts/compiledScripts/UIStringFilterWebWorker.worker.js
var UIStringFilterWebWorker_worker_exports = {};
__export(UIStringFilterWebWorker_worker_exports, {
  default: () => Worker2
});
function Worker2() {
  return inlineWorker('"contains"in Array.prototype||(Array.prototype.contains=function(n){var r=this.indexOf(n)!=-1;return r});"contains"in String.prototype||(String.prototype.contains=function(n){var r=this.indexOf(n)!=-1;return r});onmessage=function(n){var r=h(n.data.filteringString,n.data.data,n.data.excludedData);r.identifier=n.data.identifier,r.instanceIdentifier=n.data.instanceIdentifier,postMessage(r)};function h(n,r,s){var a=[],e=[];if(n){var c=[];n.split(" ").forEach(function(i,t,o){i&&c.push(i.toLowerCase())}),r.forEach(function(i,t,o){var u=i.toLowerCase(),f=[];c.forEach(function(p){f.push(u.contains(p)&&!s.contains(i))}),f.contains(!0)&&!f.contains(!1)&&(a.push(i),e.push(t))})}else s.length?a=r.forEach(function(i,t,o){s.indexOf(i)==-1&&(a.push(i),e.push(t))}):(a=r,r.forEach(function(i,t,o){e.push(t)}));return{filteredData:a,filteredIndexes:e}}\n//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vdWljb3JlLXRzL3NjcmlwdHMvVUlTdHJpbmdGaWx0ZXJXZWJXb3JrZXIud29ya2VyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcbi8vIEB0cy1jaGVja1xuXG5pZiAoXCJjb250YWluc1wiIGluIEFycmF5LnByb3RvdHlwZSA9PSBmYWxzZSkge1xuICAgIFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBBcnJheS5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIHJlc3VsdCA9ICh0aGlzLmluZGV4T2YoZWxlbWVudCkgIT0gLTEpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICBcbiAgICB9XG4gICAgXG59XG5cbmlmIChcImNvbnRhaW5zXCIgaW4gU3RyaW5nLnByb3RvdHlwZSA9PSBmYWxzZSkge1xuICAgIFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICBcbiAgICAgICAgdmFyIHJlc3VsdCA9ICh0aGlzLmluZGV4T2Yoc3RyaW5nKSAhPSAtMSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbn1cblxuXG5cblxuXG5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBcbiAgICAvL2NvbnNvbGUubG9nKCdNZXNzYWdlIHJlY2VpdmVkIGZyb20gbWFpbiBzY3JpcHQnKTtcbiAgICB2YXIgd29ya2VyUmVzdWx0ID0gZmlsdGVyRGF0YShldmVudC5kYXRhLmZpbHRlcmluZ1N0cmluZywgZXZlbnQuZGF0YS5kYXRhLCBldmVudC5kYXRhLmV4Y2x1ZGVkRGF0YSk7XG4gICAgXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdvcmtlclJlc3VsdC5pZGVudGlmaWVyID0gZXZlbnQuZGF0YS5pZGVudGlmaWVyO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3b3JrZXJSZXN1bHQuaW5zdGFuY2VJZGVudGlmaWVyID0gZXZlbnQuZGF0YS5pbnN0YW5jZUlkZW50aWZpZXI7XG4gICAgXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHBvc3RNZXNzYWdlKHdvcmtlclJlc3VsdCk7XG4gICAgXG59XG5cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBmaWx0ZXJEYXRhKGZpbHRlcmluZ1N0cmluZywgZGF0YSwgZXhjbHVkZWREYXRhKSB7XG5cbiAgICB2YXIgZmlsdGVyZWREYXRhID0gW107XG4gICAgdmFyIGZpbHRlcmVkSW5kZXhlcyA9IFtdO1xuXG4gICAgaWYgKGZpbHRlcmluZ1N0cmluZykge1xuXG4gICAgICAgIHZhciBmaWx0ZXJpbmdTdHJpbmdXb3JkcyA9IFtdO1xuICAgICAgICBmaWx0ZXJpbmdTdHJpbmcuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKHdvcmQsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgaWYgKHdvcmQpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJpbmdTdHJpbmdXb3Jkcy5wdXNoKHdvcmQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGRhdGFTdHJpbmcsIGluZGV4LCBhcnJheSkge1xuXG4gICAgICAgICAgICB2YXIgbG93ZXJjYXNlRGF0YVN0cmluZyA9IGRhdGFTdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gTG9vayB0aHJvdWdoIGFsbCB0aGUgd29yZHMgaW4gdGhlIGlucHV0XG4gICAgICAgICAgICB2YXIgd29yZHNGb3VuZCA9IFtdO1xuICAgICAgICAgICAgZmlsdGVyaW5nU3RyaW5nV29yZHMuZm9yRWFjaChmdW5jdGlvbiAod29yZCkge1xuICAgICAgICAgICAgICAgIHdvcmRzRm91bmQucHVzaChsb3dlcmNhc2VEYXRhU3RyaW5nLmNvbnRhaW5zKHdvcmQpICYmICFleGNsdWRlZERhdGEuY29udGFpbnMoZGF0YVN0cmluZykpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gT25seSBzaG93IHRoZSBkYXRhU3RyaW5nIGlmIGl0IG1hdGNoZXMgYWxsIG9mIHRoZW1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmICh3b3Jkc0ZvdW5kLmNvbnRhaW5zKHRydWUpICYmICF3b3Jkc0ZvdW5kLmNvbnRhaW5zKGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YS5wdXNoKGRhdGFTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkSW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIFxuXG4gICAgfVxuICAgIGVsc2UgaWYgKGV4Y2x1ZGVkRGF0YS5sZW5ndGgpIHtcblxuICAgICAgICBcbiAgICAgICAgZmlsdGVyZWREYXRhID0gZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhU3RyaW5nLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkRGF0YS5pbmRleE9mKGRhdGFTdHJpbmcpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZmlsdGVyZWREYXRhLnB1c2goZGF0YVN0cmluZyk7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICAgICAgZmlsdGVyZWREYXRhID0gZGF0YTtcbiAgICAgICAgXG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoc3RyaW5nLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZmlsdGVyZWRJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBcbiAgICBcbiAgICByZXR1cm4geyBcImZpbHRlcmVkRGF0YVwiOiBmaWx0ZXJlZERhdGEsIFwiZmlsdGVyZWRJbmRleGVzXCI6IGZpbHRlcmVkSW5kZXhlcyB9O1xuICAgIFxuICAgIFxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwKICAibWFwcGluZ3MiOiAiQUFHSSxhQUFjLE1BQU0sWUFHcEIsTUFBTSxVQUFVLFNBQVcsU0FBVUEsRUFBUyxDQUUxQyxJQUFJQyxFQUFVLEtBQUssUUFBUUQsQ0FBTyxHQUFLLEdBQ3ZDLE9BQU9DLENBRVgsR0FJQSxhQUFjLE9BQU8sWUFHckIsT0FBTyxVQUFVLFNBQVcsU0FBVUMsRUFBUSxDQUUxQyxJQUFJRCxFQUFVLEtBQUssUUFBUUMsQ0FBTSxHQUFLLEdBQ3RDLE9BQU9ELENBRVgsR0FRSixVQUFZLFNBQVVFLEVBQU8sQ0FHekIsSUFBSUMsRUFBZUMsRUFBV0YsRUFBTSxLQUFLLGdCQUFpQkEsRUFBTSxLQUFLLEtBQU1BLEVBQU0sS0FBSyxZQUFZLEVBR2xHQyxFQUFhLFdBQWFELEVBQU0sS0FBSyxXQUVyQ0MsRUFBYSxtQkFBcUJELEVBQU0sS0FBSyxtQkFHN0MsWUFBWUMsQ0FBWSxDQUU1QixFQVVBLFNBQVNDLEVBQVdDLEVBQWlCQyxFQUFNQyxFQUFjLENBRXJELElBQUlDLEVBQWUsQ0FBQyxFQUNoQkMsRUFBa0IsQ0FBQyxFQUV2QixHQUFJSixFQUFpQixDQUVqQixJQUFJSyxFQUF1QixDQUFDLEVBQzVCTCxFQUFnQixNQUFNLEdBQUcsRUFBRSxRQUFRLFNBQVVNLEVBQU1DLEVBQU9DLEVBQU8sQ0FDekRGLEdBQ0FELEVBQXFCLEtBQUtDLEVBQUssWUFBWSxDQUFDLENBRXBELENBQUMsRUFFREwsRUFBSyxRQUFRLFNBQVVRLEVBQVlGLEVBQU9DLEVBQU8sQ0FFN0MsSUFBSUUsRUFBc0JELEVBQVcsWUFBWSxFQUc3Q0UsRUFBYSxDQUFDLEVBQ2xCTixFQUFxQixRQUFRLFNBQVVDLEVBQU0sQ0FDekNLLEVBQVcsS0FBS0QsRUFBb0IsU0FBU0osQ0FBSSxHQUFLLENBQUNKLEVBQWEsU0FBU08sQ0FBVSxDQUFDLENBQzVGLENBQUMsRUFJR0UsRUFBVyxTQUFTLEVBQUksR0FBSyxDQUFDQSxFQUFXLFNBQVMsRUFBSyxJQUV2RFIsRUFBYSxLQUFLTSxDQUFVLEVBQzVCTCxFQUFnQixLQUFLRyxDQUFLLEVBSWxDLENBQUMsQ0FJTCxNQUNTTCxFQUFhLE9BR2xCQyxFQUFlRixFQUFLLFFBQVEsU0FBVVEsRUFBWUYsRUFBT0MsRUFBTyxDQUV4RE4sRUFBYSxRQUFRTyxDQUFVLEdBQUssS0FFcENOLEVBQWEsS0FBS00sQ0FBVSxFQUM1QkwsRUFBZ0IsS0FBS0csQ0FBSyxFQUlsQyxDQUFDLEdBS0RKLEVBQWVGLEVBRWZBLEVBQUssUUFBUSxTQUFVTCxFQUFRVyxFQUFPQyxFQUFPLENBRXpDSixFQUFnQixLQUFLRyxDQUFLLENBRTlCLENBQUMsR0FNTCxNQUFPLENBQUUsYUFBZ0JKLEVBQWMsZ0JBQW1CQyxDQUFnQixDQUk5RSIsCiAgIm5hbWVzIjogWyJlbGVtZW50IiwgInJlc3VsdCIsICJzdHJpbmciLCAiZXZlbnQiLCAid29ya2VyUmVzdWx0IiwgImZpbHRlckRhdGEiLCAiZmlsdGVyaW5nU3RyaW5nIiwgImRhdGEiLCAiZXhjbHVkZWREYXRhIiwgImZpbHRlcmVkRGF0YSIsICJmaWx0ZXJlZEluZGV4ZXMiLCAiZmlsdGVyaW5nU3RyaW5nV29yZHMiLCAid29yZCIsICJpbmRleCIsICJhcnJheSIsICJkYXRhU3RyaW5nIiwgImxvd2VyY2FzZURhdGFTdHJpbmciLCAid29yZHNGb3VuZCJdCn0K\n');
}
var init_UIStringFilterWebWorker_worker = __esm({
  "node_modules/uicore-ts/compiledScripts/UIStringFilterWebWorker.worker.js"() {
    init_inline_worker();
  }
});

// node_modules/uicore-ts/compiledScripts/UIStringFilter.js
var require_UIStringFilter = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIStringFilter.js"(exports, module) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIStringFilter_exports = {};
    __export2(UIStringFilter_exports, {
      UIStringFilter: () => UIStringFilter
    });
    module.exports = __toCommonJS2(UIStringFilter_exports);
    var import_UIObject = require_UIObject();
    var import_UIStringFilterWebWorker_worker = __toESM2((init_UIStringFilterWebWorker_worker(), __toCommonJS(UIStringFilterWebWorker_worker_exports)));
    var _UIStringFilter = class extends import_UIObject.UIObject {
      constructor(useSeparateWebWorkerHolder = import_UIObject.NO) {
        super();
        this._isThreadClosed = import_UIObject.NO;
        this._webWorkerHolder = _UIStringFilter._sharedWebWorkerHolder;
        if (useSeparateWebWorkerHolder) {
          this._webWorkerHolder = {
            webWorker: new import_UIStringFilterWebWorker_worker.default()
          };
        }
        _UIStringFilter._instanceNumber = _UIStringFilter._instanceNumber + 1;
        this._instanceNumber = _UIStringFilter._instanceNumber;
        if ((0, import_UIObject.IS_NOT)(this._webWorkerHolder.webWorker.onmessage)) {
          this._webWorkerHolder.webWorker.onmessage = (message) => {
            this.isWorkerBusy = import_UIObject.NO;
            this.postNextMessageIfNeeded();
            const key = "" + message.data.identifier + message.data.instanceIdentifier;
            const completionFunction = this.completionFunctions[key];
            if ((0, import_UIObject.IS)(completionFunction)) {
              completionFunction(message.data.filteredData, message.data.filteredIndexes, message.data.identifier);
            }
            delete this.completionFunctions[key];
            var asd = 1;
          };
        }
      }
      get instanceIdentifier() {
        return this._instanceNumber;
      }
      get completionFunctions() {
        const key = "UICore_completionFunctions";
        var result = this._webWorkerHolder[key];
        if ((0, import_UIObject.IS_NOT)(result)) {
          result = {};
          this._webWorkerHolder[key] = result;
        }
        return result;
      }
      get messagesToPost() {
        const key = "UICore_messagesToPost";
        var result = this._webWorkerHolder[key];
        if ((0, import_UIObject.IS_NOT)(result)) {
          result = [];
          this._webWorkerHolder[key] = result;
        }
        return result;
      }
      set isWorkerBusy(isWorkerBusy) {
        this._webWorkerHolder["UICore_isWorking"] = isWorkerBusy;
      }
      get isWorkerBusy() {
        return (0, import_UIObject.IS)(this._webWorkerHolder["UICore_isWorking"]);
      }
      postNextMessageIfNeeded() {
        if (this.messagesToPost.length && (0, import_UIObject.IS_NOT)(this.isWorkerBusy)) {
          this._webWorkerHolder.webWorker.postMessage(this.messagesToPost.firstElement);
          this.messagesToPost.removeElementAtIndex(0);
          this.isWorkerBusy = import_UIObject.YES;
        }
      }
      filterData(filteringString, data, excludedData, identifier, completion) {
        if (this._isThreadClosed) {
          return;
        }
        const instanceIdentifier = this.instanceIdentifier;
        const key = "" + identifier + instanceIdentifier;
        this.completionFunctions[key] = completion;
        this.messagesToPost.push({
          "filteringString": filteringString,
          "data": data,
          "excludedData": excludedData,
          "identifier": identifier,
          "instanceIdentifier": instanceIdentifier
        });
        this.postNextMessageIfNeeded();
      }
      filteredData(filteringString, data, excludedData = [], identifier = (0, import_UIObject.MAKE_ID)()) {
        const result = new Promise((resolve, reject) => {
          this.filterData(
            filteringString,
            data,
            excludedData,
            identifier,
            (filteredData, filteredIndexes, filteredIdentifier) => {
              if (filteredIdentifier == identifier) {
                resolve({
                  filteredData,
                  filteredIndexes,
                  identifier: filteredIdentifier
                });
              }
            }
          );
        });
        return result;
      }
      closeThread() {
        this._isThreadClosed = import_UIObject.YES;
        if (this._webWorkerHolder != _UIStringFilter._sharedWebWorkerHolder) {
          this._webWorkerHolder.webWorker.terminate();
        }
      }
    };
    var UIStringFilter = _UIStringFilter;
    UIStringFilter._sharedWebWorkerHolder = { webWorker: new import_UIStringFilterWebWorker_worker.default() };
    UIStringFilter._instanceNumber = -1;
  }
});

// node_modules/uicore-ts/compiledScripts/UIScrollView.js
var require_UIScrollView = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIScrollView.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIScrollView_exports = {};
    __export2(UIScrollView_exports, {
      UIScrollView: () => UIScrollView
    });
    module.exports = __toCommonJS2(UIScrollView_exports);
    var import_UIObject = require_UIObject();
    var import_UIPoint = require_UIPoint();
    var import_UIView = require_UIView();
    var UIScrollView = class extends import_UIView.UIView {
      constructor(elementID, viewHTMLElement) {
        super(elementID, viewHTMLElement);
        this._contentOffset = new import_UIPoint.UIPoint(0, 0);
        this._contentScale = 1;
        this._scrollEnabled = import_UIObject.YES;
        this.containerView = new import_UIView.UIView(elementID + "ContainerView");
        super.addSubview(this.containerView);
        this.style.overflow = "hidden";
        this.pausesPointerEvents = import_UIObject.NO;
        this.addTargetForControlEvent(import_UIView.UIView.controlEvent.PointerDown, function() {
          this._pointerDown = import_UIObject.YES;
        }.bind(this));
        this.addTargetForControlEvent(import_UIView.UIView.controlEvent.PointerUp, function() {
          this._pointerDown = import_UIObject.NO;
          this._previousClientPoint = null;
          scrollStopped();
        }.bind(this));
        function scrollStopped() {
        }
        this.addTargetForControlEvent(import_UIView.UIView.controlEvent.PointerMove, function(sender, event2) {
          if (!(this._pointerDown && this._scrollEnabled && this._enabled)) {
            return;
          }
          const currentClientPoint = new import_UIPoint.UIPoint(import_UIObject.nil, import_UIObject.nil);
          if (window.MouseEvent && event2 instanceof MouseEvent) {
            currentClientPoint.x = event2.clientX;
            currentClientPoint.y = event2.clientY;
          }
          if (window.TouchEvent && event2 instanceof TouchEvent) {
            const touchEvent = event2;
            if (touchEvent.touches.length != 1) {
              this._pointerDown = import_UIObject.NO;
              this._previousClientPoint = null;
              scrollStopped();
              return;
            }
            currentClientPoint.x = touchEvent.touches[0].clientX;
            currentClientPoint.y = touchEvent.touches[0].clientY;
          }
          if (!this._previousClientPoint) {
            this._previousClientPoint = currentClientPoint;
            return;
          }
          const changePoint = currentClientPoint.copy().subtract(this._previousClientPoint);
          if (this.containerView.bounds.width <= this.bounds.width) {
            changePoint.x = 0;
          }
          if (0 < this.contentOffset.x + changePoint.x) {
            changePoint.x = -this.contentOffset.x;
          }
          if (this.contentOffset.x + changePoint.x < -this.bounds.width) {
            changePoint.x = -this.bounds.width - this.contentOffset.x;
          }
          if (this.containerView.bounds.height <= this.bounds.height) {
            changePoint.y = 0;
          }
          if (0 < this.contentOffset.y + changePoint.y) {
            changePoint.y = -this.contentOffset.y;
          }
          if (this.contentOffset.y + changePoint.y < -this.bounds.height) {
            changePoint.y = -this.bounds.height - this.contentOffset.y;
          }
          this.contentOffset = this.contentOffset.add(changePoint);
          this._previousClientPoint = currentClientPoint;
        }.bind(this));
      }
      invalidateIntrinsicContentFrame() {
        this._intrinsicContentFrame = import_UIObject.nil;
      }
      get contentOffset() {
        return this._contentOffset;
      }
      set contentOffset(offset) {
        this._contentOffset = offset;
        this.setNeedsLayout();
      }
      layoutSubviews() {
        super.layoutSubviews();
        this.containerView.frame = this.containerView.bounds.offsetByPoint(this.contentOffset);
      }
      hasSubview(view) {
        return this.containerView.hasSubview(view);
      }
      addSubview(view) {
        this.containerView.addSubview(view);
        this.invalidateIntrinsicContentFrame();
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UISlideScrollerView.js
var require_UISlideScrollerView = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UISlideScrollerView.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UISlideScrollerView_exports = {};
    __export2(UISlideScrollerView_exports, {
      UISlideScrollerView: () => UISlideScrollerView
    });
    module.exports = __toCommonJS2(UISlideScrollerView_exports);
    var import_UIButton = require_UIButton();
    var import_UIColor = require_UIColor();
    var import_UICoreValues = require_UICoreValues();
    var import_UIObject = require_UIObject();
    var import_UIRectangle = require_UIRectangle();
    var import_UIScrollView = require_UIScrollView();
    var import_UITimer = require_UITimer();
    var import_UIView = require_UIView();
    var UISlideScrollerView = class extends import_UIView.UIView {
      constructor(elementID, viewHTMLElement) {
        super(elementID, viewHTMLElement);
        this._targetIndex = 0;
        this._isAnimating = import_UIObject.NO;
        this._isAnimationOngoing = import_UIObject.NO;
        this._animationTimer = import_UIObject.nil;
        this._slideViews = [];
        this.wrapAround = import_UIObject.YES;
        this.animationDuration = 0.35;
        this.animationDelay = 2;
        this._currentPageIndex = 0;
        this._scrollView = new import_UIScrollView.UIScrollView(elementID + "ScrollView");
        this.addSubview(this._scrollView);
        this._scrollView._scrollEnabled = import_UIObject.NO;
        this._scrollView.addTargetForControlEvent(
          import_UIView.UIView.controlEvent.PointerMove,
          function(sender, event2) {
            if (event2 instanceof MouseEvent) {
              this._animationTimer.invalidate();
            }
          }.bind(this)
        );
        this._scrollView.addTargetForControlEvent(import_UIView.UIView.controlEvent.PointerLeave, function() {
          if (this._isAnimating && event instanceof MouseEvent) {
            this.startAnimating();
          }
        }.bind(this));
        this._scrollView.addTargetForControlEvent(import_UIView.UIView.controlEvent.PointerDown, function(sender, event2) {
          if (event2 instanceof TouchEvent) {
            this._animationTimer.invalidate();
          }
        }.bind(this));
        this._scrollView.addTargetForControlEvents([
          import_UIView.UIView.controlEvent.PointerUp,
          import_UIView.UIView.controlEvent.PointerCancel
        ], function(sender, event2) {
          if (event2 instanceof TouchEvent && this._isAnimating) {
            this.startAnimating();
          }
        }.bind(this));
        this.pageIndicatorsView = new import_UIView.UIView(elementID + "PageIndicatorsView");
        this.addSubview(this.pageIndicatorsView);
      }
      buttonForPageIndicatorWithIndex(index) {
        const result = new import_UIButton.UIButton(this.viewHTMLElement.id + "PageIndicatorButton" + index);
        result.addTargetForControlEvents([
          import_UIView.UIView.controlEvent.PointerUpInside,
          import_UIView.UIView.controlEvent.EnterUp
        ], function(sender, event2) {
          this.scrollToPageWithIndex(index, import_UIObject.YES);
          if (this._isAnimating) {
            this.startAnimating();
          }
        }.bind(this));
        result.addTargetForControlEvent(import_UIView.UIView.controlEvent.PointerMove, function() {
          this._animationTimer.invalidate();
        }.bind(this));
        result.updateContentForNormalState = function() {
          result.backgroundColor = import_UIColor.UIColor.blueColor;
          result.titleLabel.textColor = import_UIColor.UIColor.whiteColor;
        };
        result.frame = new import_UIRectangle.UIRectangle(import_UIObject.nil, import_UIObject.nil, 20, 50);
        result.style.display = "table-cell";
        result.style.position = "relative";
        return result;
      }
      addSlideView(view) {
        this.slideViews.push(view);
        this.updateSlideViews();
      }
      set slideViews(views) {
        this._slideViews = views;
        this.updateSlideViews();
      }
      get slideViews() {
        return this._slideViews;
      }
      get currentPageIndex() {
        const result = this._currentPageIndex;
        return result;
      }
      set currentPageIndex(index) {
        this._currentPageIndex = index;
        this._slideViews[index].willAppear();
        this._scrollView.contentOffset = this._scrollView.contentOffset.pointWithX(-this._slideViews[index].frame.min.x);
        this.pageIndicatorsView.subviews.forEach(function(button, index2, array) {
          button.selected = import_UIObject.NO;
        });
        this.pageIndicatorsView.subviews[index].selected = import_UIObject.YES;
      }
      scrollToPreviousPage(animated) {
        if (this.slideViews.length == 0) {
          return;
        }
        var targetIndex = this.currentPageIndex;
        if (this.wrapAround) {
          targetIndex = (this.currentPageIndex - 1) % this.slideViews.length;
        } else if (this.currentPageIndex - 1 < this.slideViews.length) {
          targetIndex = this.currentPageIndex - 1;
        } else {
          return;
        }
        this.scrollToPageWithIndex(targetIndex, animated);
      }
      scrollToNextPage(animated) {
        if (this.slideViews.length == 0) {
          return;
        }
        var targetIndex = this.currentPageIndex;
        if (this.wrapAround) {
          targetIndex = (this.currentPageIndex + 1) % this.slideViews.length;
        } else if (this.currentPageIndex + 1 < this.slideViews.length) {
          targetIndex = this.currentPageIndex + 1;
        } else {
          return;
        }
        this.scrollToPageWithIndex(targetIndex, animated);
      }
      scrollToPageWithIndex(targetIndex, animated = import_UIObject.YES) {
        this._targetIndex = targetIndex;
        this.willScrollToPageWithIndex(targetIndex);
        this._isAnimationOngoing = import_UIObject.YES;
        if (animated) {
          import_UIView.UIView.animateViewOrViewsWithDurationDelayAndFunction(
            this._scrollView.containerView,
            this.animationDuration,
            0,
            void 0,
            function() {
              this.currentPageIndex = targetIndex;
            }.bind(this),
            function() {
              this.didScrollToPageWithIndex(targetIndex);
              this._isAnimationOngoing = import_UIObject.NO;
            }.bind(this)
          );
        } else {
          this.currentPageIndex = targetIndex;
          this.didScrollToPageWithIndex(targetIndex);
        }
      }
      willScrollToPageWithIndex(index) {
        const targetView = this.slideViews[index];
        if ((0, import_UIObject.IS)(targetView) && targetView.willAppear && targetView.willAppear instanceof Function) {
          targetView.willAppear();
        }
      }
      didScrollToPageWithIndex(index) {
      }
      startAnimating() {
        this._isAnimating = import_UIObject.YES;
        this._animationTimer.invalidate();
        this._animationTimer = new import_UITimer.UITimer(this.animationDelay + this.animationDuration, import_UIObject.YES, function() {
          this.scrollToNextPage(import_UIObject.YES);
        }.bind(this));
      }
      stopAnimating() {
        this._isAnimating = import_UIObject.NO;
        this._animationTimer.invalidate();
      }
      updateSlideViews() {
        this._scrollView.containerView.subviews.slice().forEach(function(subview, index, array) {
          subview.removeFromSuperview();
        });
        this.pageIndicatorsView.subviews.slice().forEach(function(subview, index, array) {
          subview.removeFromSuperview();
        });
        this._slideViews.forEach(function(view, index, array) {
          this._scrollView.addSubview(view);
          this.pageIndicatorsView.addSubview(this.buttonForPageIndicatorWithIndex(index));
        }.bind(this));
      }
      didReceiveBroadcastEvent(event2) {
        super.didReceiveBroadcastEvent(event2);
        if (event2.name == import_UICoreValues.UICoreValues.broadcastEventName.WindowDidResize) {
          this.currentPageIndex = this.currentPageIndex;
        }
      }
      set frame(frame) {
        super.frame = frame;
        this.currentPageIndex = this.currentPageIndex;
      }
      get frame() {
        return super.frame;
      }
      layoutSubviews() {
        super.layoutSubviews();
        if (this.bounds.isEqualTo(this._previousLayoutBounds)) {
          return;
        }
        const bounds = this.bounds;
        this._previousLayoutBounds = bounds;
        this._scrollView.frame = bounds;
        this._scrollView.containerView.frame = bounds.rectangleWithWidth(bounds.width * this.slideViews.length).performFunctionWithSelf(function(self) {
          self.offsetByPoint(this._scrollView.contentOffset);
          return self;
        }.bind(this));
        this._slideViews.forEach(function(view, index, array) {
          view.frame = bounds.rectangleWithX((this.bounds.width + 1) * index);
        }.bind(this));
        this.layoutPageIndicators();
      }
      layoutPageIndicators() {
        this.pageIndicatorsView.centerXInContainer();
        this.pageIndicatorsView.style.bottom = "20px";
        this.pageIndicatorsView.style.height = "20px";
        this.pageIndicatorsView.style.display = "table-row";
      }
      removeFromSuperview() {
        super.removeFromSuperview();
        this.stopAnimating();
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UILink.js
var require_UILink = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UILink.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UILink_exports = {};
    __export2(UILink_exports, {
      UILink: () => UILink2
    });
    module.exports = __toCommonJS2(UILink_exports);
    var import_UIBaseButton = require_UIBaseButton();
    var import_UICoreValues = require_UICoreValues();
    var import_UIObject = require_UIObject();
    var import_UIRoute = require_UIRoute();
    var UILink2 = class extends import_UIBaseButton.UIBaseButton {
      constructor(elementID, initViewData = import_UIObject.nil) {
        super(elementID, "a", initViewData);
        this.stopsPointerEventPropagation = import_UIObject.NO;
        this.pausesPointerEvents = import_UIObject.NO;
      }
      initView(elementID, viewHTMLElement, initViewData) {
        super.initView(elementID, viewHTMLElement, initViewData);
        this.class.superclass = import_UIBaseButton.UIBaseButton;
        viewHTMLElement.onclick = this.blur.bind(this);
      }
      get colors() {
        return this._colors;
      }
      set colors(value) {
        this._colors = value;
      }
      get viewHTMLElement() {
        return super.viewHTMLElement;
      }
      set text(text) {
        this.viewHTMLElement.textContent = text;
      }
      get text() {
        return this.viewHTMLElement.textContent;
      }
      set target(target) {
        this.viewHTMLElement.setAttribute("href", target);
      }
      get target() {
        const result = this.viewHTMLElement.getAttribute("href");
        return result;
      }
      set targetRouteForCurrentState(targetRouteForCurrentState) {
        this._targetRouteForCurrentState = targetRouteForCurrentState;
        this.updateTarget();
      }
      get targetRouteForCurrentState() {
        return this._targetRouteForCurrentState;
      }
      _targetRouteForCurrentState() {
        const result = import_UIRoute.UIRoute.currentRoute.routeByRemovingComponentsOtherThanOnesNamed(["settings"]);
        return result;
      }
      didReceiveBroadcastEvent(event2) {
        super.didReceiveBroadcastEvent(event2);
        if (event2.name == import_UICoreValues.UICoreValues.broadcastEventName.RouteDidChange) {
          this.updateTarget();
        }
      }
      wasAddedToViewTree() {
        super.wasAddedToViewTree();
        this.updateTarget();
      }
      updateTarget() {
        const route = this.targetRouteForCurrentState();
        if (route instanceof import_UIRoute.UIRoute) {
          this.target = route.linkRepresentation;
          return;
        }
        this.target = route;
      }
      layoutSubviews() {
        super.layoutSubviews();
        const bounds = this.bounds;
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UILinkButton.js
var require_UILinkButton = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UILinkButton.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UILinkButton_exports = {};
    __export2(UILinkButton_exports, {
      UILinkButton: () => UILinkButton
    });
    module.exports = __toCommonJS2(UILinkButton_exports);
    var import_UIButton = require_UIButton();
    var import_UILink = require_UILink();
    var UILinkButton = class extends import_UILink.UILink {
      constructor(elementID, elementType, titleType) {
        super(elementID, { "elementType": elementType, "titleType": titleType });
        this.button.addTargetForControlEvents([
          import_UIButton.UIButton.controlEvent.EnterDown,
          import_UIButton.UIButton.controlEvent.PointerUpInside
        ], function(sender, event2) {
          window.location = this.target;
        }.bind(this));
      }
      initView(elementID, viewHTMLElement, initViewData) {
        super.initView(elementID, viewHTMLElement, initViewData);
        this.class.superclass = import_UILink.UILink;
        this.button = new import_UIButton.UIButton(this.elementID + "Button", initViewData.elementType, initViewData.titleType);
        this.addSubview(this.button);
        this.style.position = "absolute";
      }
      get titleLabel() {
        return this.button.titleLabel;
      }
      get imageView() {
        return this.button.imageView;
      }
      set colors(colors) {
        this.button.colors = colors;
      }
      get colors() {
        return this.button.colors;
      }
      get viewHTMLElement() {
        return super.viewHTMLElement;
      }
      set target(target) {
        this.viewHTMLElement.setAttribute("href", target);
      }
      get target() {
        const result = this.viewHTMLElement.getAttribute("href");
        return result;
      }
      layoutSubviews() {
        super.layoutSubviews();
        const bounds = this.bounds;
        this.button.frame = bounds;
        this.button.layoutSubviews();
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UILayoutGrid.js
var require_UILayoutGrid = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UILayoutGrid.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UILayoutGrid_exports = {};
    __export2(UILayoutGrid_exports, {
      UILayoutGrid: () => UILayoutGrid
    });
    module.exports = __toCommonJS2(UILayoutGrid_exports);
    var import_UIObject = require_UIObject();
    var UILayoutGrid = class extends import_UIObject.UIObject {
      constructor(frame) {
        super();
        this._subframes = [];
        this._frame = frame;
      }
      splitXInto(numberOfFrames) {
        if (this._subframes.length == 0) {
          for (var i = 0; i < numberOfFrames; i++) {
            const asd = 1;
          }
        }
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UIKeyValueStringFilterWebWorker.worker.js
var UIKeyValueStringFilterWebWorker_worker_exports = {};
__export(UIKeyValueStringFilterWebWorker_worker_exports, {
  default: () => Worker3
});
function Worker3() {
  return inlineWorker('"contains"in Array.prototype||(Array.prototype.contains=function(a){var r=this.indexOf(a)!=-1;return r});"contains"in String.prototype||(String.prototype.contains=function(a){var r=this.indexOf(a)!=-1;return r});onmessage=function(a){var r=y(a.data.filteringString,a.data.data,a.data.excludedData,a.data.dataKeyPath);r.identifier=a.data.identifier,r.instanceIdentifier=a.data.instanceIdentifier,postMessage(r)};function y(a,r,u,d){function l(t,n){var o=t.split("."),i=n;return o.forEach(function(c,f,p){i=i[c]}),i}var e=[],s=[];if(a){var h=[];a.split(" ").forEach(function(t,n,o){t&&h.push(t.toLowerCase())}),r.forEach(function(t,n,o){var i=l(d,t),c=i.toLowerCase(),f=[];h.forEach(function(p){f.push(c.contains(p)&&!u.contains(i))}),f.contains(!0)&&!f.contains(!1)&&(e.push(t),s.push(n))})}else u.length?e=r.forEach(function(t,n,o){u.indexOf(t)==-1&&(e.push(t),s.push(n))}):(e=r,r.forEach(function(t,n,o){s.push(n)}));return{filteredData:e,filteredIndexes:s}}\n//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vdWljb3JlLXRzL3NjcmlwdHMvVUlLZXlWYWx1ZVN0cmluZ0ZpbHRlcldlYldvcmtlci53b3JrZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuLy8gQHRzLWNoZWNrXG5cbmlmIChcImNvbnRhaW5zXCIgaW4gQXJyYXkucHJvdG90eXBlID09IGZhbHNlKSB7XG4gICAgXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEFycmF5LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgcmVzdWx0ID0gKHRoaXMuaW5kZXhPZihlbGVtZW50KSAhPSAtMSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbn1cblxuaWYgKFwiY29udGFpbnNcIiBpbiBTdHJpbmcucHJvdG90eXBlID09IGZhbHNlKSB7XG4gICAgXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFN0cmluZy5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgcmVzdWx0ID0gKHRoaXMuaW5kZXhPZihzdHJpbmcpICE9IC0xKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgXG4gICAgfVxuICAgIFxufVxuXG5cblxuXG5cbm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIFxuICAgIC8vY29uc29sZS5sb2coJ01lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBtYWluIHNjcmlwdCcpO1xuICAgIHZhciB3b3JrZXJSZXN1bHQgPSBmaWx0ZXJLZXlWYWx1ZVBhdGhEYXRhKGV2ZW50LmRhdGEuZmlsdGVyaW5nU3RyaW5nLCBldmVudC5kYXRhLmRhdGEsIGV2ZW50LmRhdGEuZXhjbHVkZWREYXRhLCBldmVudC5kYXRhLmRhdGFLZXlQYXRoKTtcbiAgICBcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd29ya2VyUmVzdWx0LmlkZW50aWZpZXIgPSBldmVudC5kYXRhLmlkZW50aWZpZXI7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdvcmtlclJlc3VsdC5pbnN0YW5jZUlkZW50aWZpZXIgPSBldmVudC5kYXRhLmluc3RhbmNlSWRlbnRpZmllcjtcbiAgICBcbiAgICBcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcG9zdE1lc3NhZ2Uod29ya2VyUmVzdWx0KTtcbiAgICBcbn1cblxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGZpbHRlcktleVZhbHVlUGF0aERhdGEoZmlsdGVyaW5nU3RyaW5nLCBkYXRhLCBleGNsdWRlZERhdGEsIGRhdGFLZXlQYXRoKSB7XG4gICAgXG4gICAgZnVuY3Rpb24gdmFsdWVGb3JLZXlQYXRoKGtleVBhdGgsIG9iamVjdCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIGtleXMgPSBrZXlQYXRoLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgdmFyIGN1cnJlbnRPYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIFxuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0ID0gY3VycmVudE9iamVjdFtrZXldO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRPYmplY3Q7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB2YXIgZmlsdGVyZWREYXRhID0gW107XG4gICAgdmFyIGZpbHRlcmVkSW5kZXhlcyA9IFtdO1xuXG4gICAgaWYgKGZpbHRlcmluZ1N0cmluZykge1xuXG4gICAgICAgIHZhciBmaWx0ZXJpbmdTdHJpbmdXb3JkcyA9IFtdO1xuICAgICAgICBmaWx0ZXJpbmdTdHJpbmcuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKHdvcmQsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgaWYgKHdvcmQpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJpbmdTdHJpbmdXb3Jkcy5wdXNoKHdvcmQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGRhdGFPYmplY3QsIGluZGV4LCBhcnJheSkge1xuXG4gICAgICAgICAgICB2YXIgZGF0YVN0cmluZyA9IHZhbHVlRm9yS2V5UGF0aChkYXRhS2V5UGF0aCwgZGF0YU9iamVjdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBsb3dlcmNhc2VEYXRhU3RyaW5nID0gZGF0YVN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBMb29rIHRocm91Z2ggYWxsIHRoZSB3b3JkcyBpbiB0aGUgaW5wdXRcbiAgICAgICAgICAgIHZhciB3b3Jkc0ZvdW5kID0gW107XG4gICAgICAgICAgICBmaWx0ZXJpbmdTdHJpbmdXb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgICAgICAgICAgd29yZHNGb3VuZC5wdXNoKGxvd2VyY2FzZURhdGFTdHJpbmcuY29udGFpbnMod29yZCkgJiYgIWV4Y2x1ZGVkRGF0YS5jb250YWlucyhkYXRhU3RyaW5nKSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBPbmx5IHNob3cgdGhlIGRhdGFTdHJpbmcgaWYgaXQgbWF0Y2hlcyBhbGwgb2YgdGhlbVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKHdvcmRzRm91bmQuY29udGFpbnModHJ1ZSkgJiYgIXdvcmRzRm91bmQuY29udGFpbnMoZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZmlsdGVyZWREYXRhLnB1c2goZGF0YU9iamVjdCk7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgXG5cbiAgICB9XG4gICAgZWxzZSBpZiAoZXhjbHVkZWREYXRhLmxlbmd0aCkge1xuXG4gICAgICAgIFxuICAgICAgICBmaWx0ZXJlZERhdGEgPSBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGRhdGFPYmplY3QsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZXhjbHVkZWREYXRhLmluZGV4T2YoZGF0YU9iamVjdCkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZERhdGEucHVzaChkYXRhT2JqZWN0KTtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBlbHNlIHtcblxuICAgICAgICBmaWx0ZXJlZERhdGEgPSBkYXRhO1xuICAgICAgICBcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaWx0ZXJlZEluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIFxuICAgIFxuICAgIHJldHVybiB7IFwiZmlsdGVyZWREYXRhXCI6IGZpbHRlcmVkRGF0YSwgXCJmaWx0ZXJlZEluZGV4ZXNcIjogZmlsdGVyZWRJbmRleGVzIH07XG4gICAgXG4gICAgXG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLAogICJtYXBwaW5ncyI6ICJBQUdJLGFBQWMsTUFBTSxZQUdwQixNQUFNLFVBQVUsU0FBVyxTQUFVQSxFQUFTLENBRTFDLElBQUlDLEVBQVUsS0FBSyxRQUFRRCxDQUFPLEdBQUssR0FDdkMsT0FBT0MsQ0FFWCxHQUlBLGFBQWMsT0FBTyxZQUdyQixPQUFPLFVBQVUsU0FBVyxTQUFVQyxFQUFRLENBRTFDLElBQUlELEVBQVUsS0FBSyxRQUFRQyxDQUFNLEdBQUssR0FDdEMsT0FBT0QsQ0FFWCxHQVFKLFVBQVksU0FBVUUsRUFBTyxDQUd6QixJQUFJQyxFQUFlQyxFQUF1QkYsRUFBTSxLQUFLLGdCQUFpQkEsRUFBTSxLQUFLLEtBQU1BLEVBQU0sS0FBSyxhQUFjQSxFQUFNLEtBQUssV0FBVyxFQUd0SUMsRUFBYSxXQUFhRCxFQUFNLEtBQUssV0FFckNDLEVBQWEsbUJBQXFCRCxFQUFNLEtBQUssbUJBSTdDLFlBQVlDLENBQVksQ0FFNUIsRUFVQSxTQUFTQyxFQUF1QkMsRUFBaUJDLEVBQU1DLEVBQWNDLEVBQWEsQ0FFOUUsU0FBU0MsRUFBZ0JDLEVBQVNDLEVBQVEsQ0FFdEMsSUFBSUMsRUFBT0YsRUFBUSxNQUFNLEdBQUcsRUFDeEJHLEVBQWdCRixFQUVwQixPQUFBQyxFQUFLLFFBQVEsU0FBVUUsRUFBS0MsRUFBT0MsRUFBTyxDQUN0Q0gsRUFBZ0JBLEVBQWNDLEVBQ2xDLENBQUMsRUFFTUQsQ0FFWCxDQUVBLElBQUlJLEVBQWUsQ0FBQyxFQUNoQkMsRUFBa0IsQ0FBQyxFQUV2QixHQUFJYixFQUFpQixDQUVqQixJQUFJYyxFQUF1QixDQUFDLEVBQzVCZCxFQUFnQixNQUFNLEdBQUcsRUFBRSxRQUFRLFNBQVVlLEVBQU1MLEVBQU9DLEVBQU8sQ0FDekRJLEdBQ0FELEVBQXFCLEtBQUtDLEVBQUssWUFBWSxDQUFDLENBRXBELENBQUMsRUFFRGQsRUFBSyxRQUFRLFNBQVVlLEVBQVlOLEVBQU9DLEVBQU8sQ0FFN0MsSUFBSU0sRUFBYWIsRUFBZ0JELEVBQWFhLENBQVUsRUFFcERFLEVBQXNCRCxFQUFXLFlBQVksRUFHN0NFLEVBQWEsQ0FBQyxFQUNsQkwsRUFBcUIsUUFBUSxTQUFVQyxFQUFNLENBQ3pDSSxFQUFXLEtBQUtELEVBQW9CLFNBQVNILENBQUksR0FBSyxDQUFDYixFQUFhLFNBQVNlLENBQVUsQ0FBQyxDQUM1RixDQUFDLEVBSUdFLEVBQVcsU0FBUyxFQUFJLEdBQUssQ0FBQ0EsRUFBVyxTQUFTLEVBQUssSUFFdkRQLEVBQWEsS0FBS0ksQ0FBVSxFQUM1QkgsRUFBZ0IsS0FBS0gsQ0FBSyxFQUlsQyxDQUFDLENBSUwsTUFDU1IsRUFBYSxPQUdsQlUsRUFBZVgsRUFBSyxRQUFRLFNBQVVlLEVBQVlOLEVBQU9DLEVBQU8sQ0FFeERULEVBQWEsUUFBUWMsQ0FBVSxHQUFLLEtBRXBDSixFQUFhLEtBQUtJLENBQVUsRUFDNUJILEVBQWdCLEtBQUtILENBQUssRUFJbEMsQ0FBQyxHQUtERSxFQUFlWCxFQUVmQSxFQUFLLFFBQVEsU0FBVUssRUFBUUksRUFBT0MsRUFBTyxDQUV6Q0UsRUFBZ0IsS0FBS0gsQ0FBSyxDQUU5QixDQUFDLEdBTUwsTUFBTyxDQUFFLGFBQWdCRSxFQUFjLGdCQUFtQkMsQ0FBZ0IsQ0FJOUUiLAogICJuYW1lcyI6IFsiZWxlbWVudCIsICJyZXN1bHQiLCAic3RyaW5nIiwgImV2ZW50IiwgIndvcmtlclJlc3VsdCIsICJmaWx0ZXJLZXlWYWx1ZVBhdGhEYXRhIiwgImZpbHRlcmluZ1N0cmluZyIsICJkYXRhIiwgImV4Y2x1ZGVkRGF0YSIsICJkYXRhS2V5UGF0aCIsICJ2YWx1ZUZvcktleVBhdGgiLCAia2V5UGF0aCIsICJvYmplY3QiLCAia2V5cyIsICJjdXJyZW50T2JqZWN0IiwgImtleSIsICJpbmRleCIsICJhcnJheSIsICJmaWx0ZXJlZERhdGEiLCAiZmlsdGVyZWRJbmRleGVzIiwgImZpbHRlcmluZ1N0cmluZ1dvcmRzIiwgIndvcmQiLCAiZGF0YU9iamVjdCIsICJkYXRhU3RyaW5nIiwgImxvd2VyY2FzZURhdGFTdHJpbmciLCAid29yZHNGb3VuZCJdCn0K\n');
}
var init_UIKeyValueStringFilterWebWorker_worker = __esm({
  "node_modules/uicore-ts/compiledScripts/UIKeyValueStringFilterWebWorker.worker.js"() {
    init_inline_worker();
  }
});

// node_modules/uicore-ts/compiledScripts/UIKeyValueStringFilter.js
var require_UIKeyValueStringFilter = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIKeyValueStringFilter.js"(exports, module) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIKeyValueStringFilter_exports = {};
    __export2(UIKeyValueStringFilter_exports, {
      UIKeyValueStringFilter: () => UIKeyValueStringFilter2
    });
    module.exports = __toCommonJS2(UIKeyValueStringFilter_exports);
    var import_UIObject = require_UIObject();
    var import_UIKeyValueStringFilterWebWorker_worker = __toESM2((init_UIKeyValueStringFilterWebWorker_worker(), __toCommonJS(UIKeyValueStringFilterWebWorker_worker_exports)));
    var _UIKeyValueStringFilter = class extends import_UIObject.UIObject {
      constructor(useSeparateWebWorkerHolder = import_UIObject.NO) {
        super();
        this._isThreadClosed = import_UIObject.NO;
        this._webWorkerHolder = _UIKeyValueStringFilter._sharedWebWorkerHolder;
        if (useSeparateWebWorkerHolder) {
          this._webWorkerHolder = { webWorker: new import_UIKeyValueStringFilterWebWorker_worker.default() };
        }
        _UIKeyValueStringFilter._instanceNumber = _UIKeyValueStringFilter._instanceNumber + 1;
        this._instanceNumber = _UIKeyValueStringFilter._instanceNumber;
        if ((0, import_UIObject.IS_NOT)(this._webWorkerHolder.webWorker.onmessage)) {
          this._webWorkerHolder.webWorker.onmessage = (message) => {
            this.isWorkerBusy = import_UIObject.NO;
            this.postNextMessageIfNeeded();
            const key = "" + message.data.identifier + message.data.instanceIdentifier;
            const completionFunction = this.completionFunctions[key];
            if ((0, import_UIObject.IS)(completionFunction)) {
              completionFunction(message.data.filteredData, message.data.filteredIndexes, message.data.identifier);
            }
            delete this.completionFunctions[key];
            var asd = 1;
          };
        }
      }
      get instanceIdentifier() {
        return this._instanceNumber;
      }
      get completionFunctions() {
        const key = "UICore_completionFunctions";
        var result = this._webWorkerHolder[key];
        if ((0, import_UIObject.IS_NOT)(result)) {
          result = {};
          this._webWorkerHolder[key] = result;
        }
        return result;
      }
      get messagesToPost() {
        const key = "UICore_messagesToPost";
        var result = this._webWorkerHolder[key];
        if ((0, import_UIObject.IS_NOT)(result)) {
          result = [];
          this._webWorkerHolder[key] = result;
        }
        return result;
      }
      set isWorkerBusy(isWorkerBusy) {
        this._webWorkerHolder["UICore_isWorking"] = isWorkerBusy;
      }
      get isWorkerBusy() {
        return (0, import_UIObject.IS)(this._webWorkerHolder["UICore_isWorking"]);
      }
      postNextMessageIfNeeded() {
        if (this.messagesToPost.length && (0, import_UIObject.IS_NOT)(this.isWorkerBusy)) {
          this._webWorkerHolder.webWorker.postMessage(this.messagesToPost.firstElement);
          this.messagesToPost.removeElementAtIndex(0);
          this.isWorkerBusy = import_UIObject.YES;
        }
      }
      filterData(filteringString, data, excludedData, dataKeyPath, identifier, completion) {
        if (this._isThreadClosed) {
          return;
        }
        const instanceIdentifier = this.instanceIdentifier;
        const key = "" + identifier + instanceIdentifier;
        this.completionFunctions[key] = completion;
        try {
          this.messagesToPost.push({
            "filteringString": filteringString,
            "data": data,
            "excludedData": excludedData,
            "dataKeyPath": dataKeyPath,
            "identifier": identifier,
            "instanceIdentifier": instanceIdentifier
          });
          this.postNextMessageIfNeeded();
        } catch (exception) {
          completion([], [], identifier);
        }
      }
      closeThread() {
        this._isThreadClosed = import_UIObject.YES;
        if (this._webWorkerHolder != _UIKeyValueStringFilter._sharedWebWorkerHolder) {
          this._webWorkerHolder.webWorker.terminate();
        }
      }
    };
    var UIKeyValueStringFilter2 = _UIKeyValueStringFilter;
    UIKeyValueStringFilter2._sharedWebWorkerHolder = { webWorker: new import_UIKeyValueStringFilterWebWorker_worker.default() };
    UIKeyValueStringFilter2._instanceNumber = -1;
  }
});

// node_modules/uicore-ts/compiledScripts/UIKeyValueStringSorterWebWorker.worker.js
var UIKeyValueStringSorterWebWorker_worker_exports = {};
__export(UIKeyValueStringSorterWebWorker_worker_exports, {
  default: () => Worker4
});
function Worker4() {
  return inlineWorker('onmessage=function(e){var a=g(e.data.data,e.data.sortingInstructions);a.identifier=e.data.identifier,a.instanceIdentifier=e.data.instanceIdentifier,postMessage(a)};function v(e,a){for(var i=e.split("."),r=a,n=0;n<i.length;n++){var u=i[n];if(u.substring(0,2)=="[]"){r=r[u.substring(2)];var t=i.slice(n+1).join("."),o=r;r=o.map(function(d,s,f){var c=v(t,d);return c});break}r=(r||{})[u]}return r}function l(e,a,i){if(i.length==0)return 0;var r=i[0],n=1;r.direction=="descending"&&(n=-1);var u=e[r.keyPath],t=a[r.keyPath];if(u<t)return-1*n;if(u>t)return 1*n;if(i.length>1){var o=i.slice(1);return l(e,a,o)}return 0}function g(e,a){var i=e.map(function(t,o,d){var s={_UIKeyValueStringSorterWebWorkerSortingObjectIndex:o};return a.forEach(function(f,c,y){s[f.keyPath]=JSON.stringify(v(f.keyPath,t)||{}).toLowerCase()}),s}),r=i.sort(function(t,o){return l(t,o,a)}),n=r.map(function(t,o,d){var s=t._UIKeyValueStringSorterWebWorkerSortingObjectIndex;return s}),u={sortedData:n.map(function(t,o,d){return e[t]}),sortedIndexes:n};return u}\n//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vdWljb3JlLXRzL3NjcmlwdHMvVUlLZXlWYWx1ZVN0cmluZ1NvcnRlcldlYldvcmtlci53b3JrZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuXG5cblxuXG5cblxuXG5cblxuXG5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBcbiAgICAvL2NvbnNvbGUubG9nKCdNZXNzYWdlIHJlY2VpdmVkIGZyb20gbWFpbiBzY3JpcHQnKTtcbiAgICB2YXIgd29ya2VyUmVzdWx0ID0gc29ydERhdGEoXG4gICAgICAgIGV2ZW50LmRhdGEuZGF0YSxcbiAgICAgICAgZXZlbnQuZGF0YS5zb3J0aW5nSW5zdHJ1Y3Rpb25zXG4gICAgKVxuICAgIFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3b3JrZXJSZXN1bHQuaWRlbnRpZmllciA9IGV2ZW50LmRhdGEuaWRlbnRpZmllcjtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd29ya2VyUmVzdWx0Lmluc3RhbmNlSWRlbnRpZmllciA9IGV2ZW50LmRhdGEuaW5zdGFuY2VJZGVudGlmaWVyO1xuICAgIFxuICAgIFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBwb3N0TWVzc2FnZSh3b3JrZXJSZXN1bHQpO1xuICAgIFxufVxuXG5cblxuXG5cbmZ1bmN0aW9uIHZhbHVlRm9yS2V5UGF0aChrZXlQYXRoLCBvYmplY3QpIHtcbiAgICAgICAgXG4gICAgdmFyIGtleXMgPSBrZXlQYXRoLnNwbGl0KFwiLlwiKTtcbiAgICB2YXIgY3VycmVudE9iamVjdCA9IG9iamVjdDtcbiAgICBcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBcbiAgICAgICAgaWYgKGtleS5zdWJzdHJpbmcoMCwgMikgPT0gXCJbXVwiKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFRoaXMgbmV4dCBvYmplY3Qgd2lsbCBiZSBhbiBhcnJheSBhbmQgdGhlIHJlc3Qgb2YgdGhlIGtleXMgbmVlZCB0byBiZSBydW4gZm9yIGVhY2ggb2YgdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3QgPSBjdXJyZW50T2JqZWN0W2tleS5zdWJzdHJpbmcoMildO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDdXJyZW50T2JqZWN0IGlzIG5vdyBhbiBhcnJheVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgcmVtYWluaW5nS2V5UGF0aCA9IGtleXMuc2xpY2UoaSArIDEpLmpvaW4oXCIuXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY3VycmVudEFycmF5ID0gY3VycmVudE9iamVjdDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3VycmVudE9iamVjdCA9IGN1cnJlbnRBcnJheS5tYXAoZnVuY3Rpb24gKHN1Yk9iamVjdCwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlRm9yS2V5UGF0aChyZW1haW5pbmdLZXlQYXRoLCBzdWJPYmplY3QpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjdXJyZW50T2JqZWN0ID0gKGN1cnJlbnRPYmplY3QgfHwge30pW2tleV07XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGN1cnJlbnRPYmplY3Q7XG4gICAgXG59XG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGNvbXBhcmUoZmlyc3RPYmplY3QsIHNlY29uZE9iamVjdCwgc29ydGluZ0luc3RydWN0aW9ucykge1xuICAgIFxuICAgIFxuICAgIGlmIChzb3J0aW5nSW5zdHJ1Y3Rpb25zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICB2YXIgc29ydGluZ0luc3RydWN0aW9uID0gc29ydGluZ0luc3RydWN0aW9uc1swXTtcbiAgICBcbiAgICBcbiAgICB2YXIgZGlyZWN0aW9uTXVsdGlwbGllciA9IDE7XG4gICAgaWYgKHNvcnRpbmdJbnN0cnVjdGlvbi5kaXJlY3Rpb24gPT0gXCJkZXNjZW5kaW5nXCIpIHtcbiAgICAgICAgZGlyZWN0aW9uTXVsdGlwbGllciA9IC0xO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICB2YXIgZmlyc3REYXRhU3RyaW5nID0gZmlyc3RPYmplY3Rbc29ydGluZ0luc3RydWN0aW9uLmtleVBhdGhdO1xuICAgIFxuICAgIHZhciBzZWNvbmREYXRhU3RyaW5nID0gc2Vjb25kT2JqZWN0W3NvcnRpbmdJbnN0cnVjdGlvbi5rZXlQYXRoXTtcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBpZiAoZmlyc3REYXRhU3RyaW5nIDwgc2Vjb25kRGF0YVN0cmluZykge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIC0xICogZGlyZWN0aW9uTXVsdGlwbGllcjtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGlmIChmaXJzdERhdGFTdHJpbmcgPiBzZWNvbmREYXRhU3RyaW5nKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gMSAqIGRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBpZiAoc29ydGluZ0luc3RydWN0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgcmVtYWluaW5nU29ydGluZ0luc3RydWN0aW9ucyA9IHNvcnRpbmdJbnN0cnVjdGlvbnMuc2xpY2UoMSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb21wYXJlKGZpcnN0T2JqZWN0LCBzZWNvbmRPYmplY3QsIHJlbWFpbmluZ1NvcnRpbmdJbnN0cnVjdGlvbnMpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAwO1xuICAgIFxuICB9XG5cbiAgXG4gIFxuICBcblxuZnVuY3Rpb24gc29ydERhdGEoZGF0YSwgc29ydGluZ0luc3RydWN0aW9ucykge1xuICAgIFxuICAgIFxuICAgIHZhciBzb3J0aW5nT2JqZWN0cyA9IGRhdGEubWFwKGZ1bmN0aW9uIChkYXRhSXRlbSwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcIl9VSUtleVZhbHVlU3RyaW5nU29ydGVyV2ViV29ya2VyU29ydGluZ09iamVjdEluZGV4XCI6IGluZGV4XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHNvcnRpbmdJbnN0cnVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihpbnN0cnVjdGlvbiwgaW5kZXgsIGluc3RydWN0aW9uc0FycmF5KSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc3VsdFtpbnN0cnVjdGlvbi5rZXlQYXRoXSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlRm9yS2V5UGF0aChpbnN0cnVjdGlvbi5rZXlQYXRoLCBkYXRhSXRlbSkgfHwge30pLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIFxuICAgIFxuICAgIH0pXG4gICAgXG4gICAgXG4gICAgdmFyIHNvcnRlZERhdGEgPSBzb3J0aW5nT2JqZWN0cy5zb3J0KGZ1bmN0aW9uIChmaXJzdE9iamVjdCwgc2Vjb25kT2JqZWN0KSB7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbXBhcmUoZmlyc3RPYmplY3QsIHNlY29uZE9iamVjdCwgc29ydGluZ0luc3RydWN0aW9ucyk7XG5cbiAgICB9KVxuICAgIFxuICAgIHZhciBzb3J0ZWRJbmRleGVzID0gc29ydGVkRGF0YS5tYXAoZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgc29ydGVkSW5kZXggPSBvYmplY3QuX1VJS2V5VmFsdWVTdHJpbmdTb3J0ZXJXZWJXb3JrZXJTb3J0aW5nT2JqZWN0SW5kZXg7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc29ydGVkSW5kZXg7XG4gICAgICAgIFxuICAgIH0pXG4gICAgXG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgXG4gICAgICAgIFwic29ydGVkRGF0YVwiOiBzb3J0ZWRJbmRleGVzLm1hcChmdW5jdGlvbiAoc29ydGVkSW5kZXgsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtzb3J0ZWRJbmRleF07XG4gICAgICAgICAgICBcbiAgICAgICAgfSksXG4gICAgICAgIFwic29ydGVkSW5kZXhlc1wiOiBzb3J0ZWRJbmRleGVzXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBcbiAgICByZXR1cm4gcmVzdWx0O1xuICAgIFxuICAgIFxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sCiAgIm1hcHBpbmdzIjogIkFBV0EsVUFBWSxTQUFVQSxFQUFPLENBR3pCLElBQUlDLEVBQWVDLEVBQ2ZGLEVBQU0sS0FBSyxLQUNYQSxFQUFNLEtBQUssbUJBQ2YsRUFHQUMsRUFBYSxXQUFhRCxFQUFNLEtBQUssV0FFckNDLEVBQWEsbUJBQXFCRCxFQUFNLEtBQUssbUJBSTdDLFlBQVlDLENBQVksQ0FFNUIsRUFNQSxTQUFTRSxFQUFnQkMsRUFBU0MsRUFBUSxDQUt0QyxRQUhJQyxFQUFPRixFQUFRLE1BQU0sR0FBRyxFQUN4QkcsRUFBZ0JGLEVBRVhHLEVBQUksRUFBR0EsRUFBSUYsRUFBSyxPQUFRRSxJQUFLLENBRWxDLElBQUlDLEVBQU1ILEVBQUtFLEdBRWYsR0FBSUMsRUFBSSxVQUFVLEVBQUcsQ0FBQyxHQUFLLEtBQU0sQ0FJN0JGLEVBQWdCQSxFQUFjRSxFQUFJLFVBQVUsQ0FBQyxHQUk3QyxJQUFJQyxFQUFtQkosRUFBSyxNQUFNRSxFQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFFN0NHLEVBQWVKLEVBRW5CQSxFQUFnQkksRUFBYSxJQUFJLFNBQVVDLEVBQVdDLEVBQU9DLEVBQU8sQ0FFaEUsSUFBSUMsRUFBU1osRUFBZ0JPLEVBQWtCRSxDQUFTLEVBRXhELE9BQU9HLENBRVgsQ0FBQyxFQUVELEtBRUosQ0FFQVIsR0FBaUJBLEdBQWlCLENBQUMsR0FBR0UsRUFHMUMsQ0FFQSxPQUFPRixDQUVYLENBUUEsU0FBU1MsRUFBUUMsRUFBYUMsRUFBY0MsRUFBcUIsQ0FHN0QsR0FBSUEsRUFBb0IsUUFBVSxFQUM5QixNQUFPLEdBSVgsSUFBSUMsRUFBcUJELEVBQW9CLEdBR3pDRSxFQUFzQixFQUN0QkQsRUFBbUIsV0FBYSxlQUNoQ0MsRUFBc0IsSUFJMUIsSUFBSUMsRUFBa0JMLEVBQVlHLEVBQW1CLFNBRWpERyxFQUFtQkwsRUFBYUUsRUFBbUIsU0FLdkQsR0FBSUUsRUFBa0JDLEVBRWxCLE1BQU8sR0FBS0YsRUFJaEIsR0FBSUMsRUFBa0JDLEVBRWxCLE1BQU8sR0FBSUYsRUFJZixHQUFJRixFQUFvQixPQUFTLEVBQUcsQ0FFaEMsSUFBSUssRUFBK0JMLEVBQW9CLE1BQU0sQ0FBQyxFQUk5RCxPQUFPSCxFQUFRQyxFQUFhQyxFQUFjTSxDQUE0QixDQUcxRSxDQUVBLE1BQU8sRUFFVCxDQU1GLFNBQVN0QixFQUFTdUIsRUFBTU4sRUFBcUIsQ0FHekMsSUFBSU8sRUFBaUJELEVBQUssSUFBSSxTQUFVRSxFQUFVZCxFQUFPQyxFQUFPLENBRTVELElBQUlDLEVBQVMsQ0FFVCxtREFBc0RGLENBRTFELEVBR0EsT0FBQU0sRUFBb0IsUUFBUSxTQUFTUyxFQUFhZixFQUFPZ0IsRUFBbUIsQ0FFeEVkLEVBQU9hLEVBQVksU0FBVyxLQUFLLFVBQVV6QixFQUFnQnlCLEVBQVksUUFBU0QsQ0FBUSxHQUFLLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FFbkgsQ0FBQyxFQUtNWixDQUdYLENBQUMsRUFHR2UsRUFBYUosRUFBZSxLQUFLLFNBQVVULEVBQWFDLEVBQWMsQ0FFdEUsT0FBT0YsRUFBUUMsRUFBYUMsRUFBY0MsQ0FBbUIsQ0FFakUsQ0FBQyxFQUVHWSxFQUFnQkQsRUFBVyxJQUFJLFNBQVV6QixFQUFRUSxFQUFPQyxFQUFPLENBRS9ELElBQUlrQixFQUFjM0IsRUFBTyxtREFFekIsT0FBTzJCLENBRVgsQ0FBQyxFQUVHakIsRUFBUyxDQUVULFdBQWNnQixFQUFjLElBQUksU0FBVUMsRUFBYW5CLEVBQU9DLEVBQU8sQ0FFakUsT0FBT1csRUFBS08sRUFFaEIsQ0FBQyxFQUNELGNBQWlCRCxDQUVyQixFQUdBLE9BQU9oQixDQUdYIiwKICAibmFtZXMiOiBbImV2ZW50IiwgIndvcmtlclJlc3VsdCIsICJzb3J0RGF0YSIsICJ2YWx1ZUZvcktleVBhdGgiLCAia2V5UGF0aCIsICJvYmplY3QiLCAia2V5cyIsICJjdXJyZW50T2JqZWN0IiwgImkiLCAia2V5IiwgInJlbWFpbmluZ0tleVBhdGgiLCAiY3VycmVudEFycmF5IiwgInN1Yk9iamVjdCIsICJpbmRleCIsICJhcnJheSIsICJyZXN1bHQiLCAiY29tcGFyZSIsICJmaXJzdE9iamVjdCIsICJzZWNvbmRPYmplY3QiLCAic29ydGluZ0luc3RydWN0aW9ucyIsICJzb3J0aW5nSW5zdHJ1Y3Rpb24iLCAiZGlyZWN0aW9uTXVsdGlwbGllciIsICJmaXJzdERhdGFTdHJpbmciLCAic2Vjb25kRGF0YVN0cmluZyIsICJyZW1haW5pbmdTb3J0aW5nSW5zdHJ1Y3Rpb25zIiwgImRhdGEiLCAic29ydGluZ09iamVjdHMiLCAiZGF0YUl0ZW0iLCAiaW5zdHJ1Y3Rpb24iLCAiaW5zdHJ1Y3Rpb25zQXJyYXkiLCAic29ydGVkRGF0YSIsICJzb3J0ZWRJbmRleGVzIiwgInNvcnRlZEluZGV4Il0KfQo=\n');
}
var init_UIKeyValueStringSorterWebWorker_worker = __esm({
  "node_modules/uicore-ts/compiledScripts/UIKeyValueStringSorterWebWorker.worker.js"() {
    init_inline_worker();
  }
});

// node_modules/uicore-ts/compiledScripts/UIKeyValueStringSorter.js
var require_UIKeyValueStringSorter = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIKeyValueStringSorter.js"(exports, module) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIKeyValueStringSorter_exports = {};
    __export2(UIKeyValueStringSorter_exports, {
      UIKeyValueStringSorter: () => UIKeyValueStringSorter
    });
    module.exports = __toCommonJS2(UIKeyValueStringSorter_exports);
    var import_UIObject = require_UIObject();
    var import_UIKeyValueStringSorterWebWorker_worker = __toESM2((init_UIKeyValueStringSorterWebWorker_worker(), __toCommonJS(UIKeyValueStringSorterWebWorker_worker_exports)));
    var _UIKeyValueStringSorter = class extends import_UIObject.UIObject {
      constructor(useSeparateWebWorkerHolder = import_UIObject.NO) {
        super();
        this._isThreadClosed = import_UIObject.NO;
        this._webWorkerHolder = _UIKeyValueStringSorter._sharedWebWorkerHolder;
        if (useSeparateWebWorkerHolder) {
          this._webWorkerHolder = { webWorker: new import_UIKeyValueStringSorterWebWorker_worker.default() };
        }
        _UIKeyValueStringSorter._instanceNumber = _UIKeyValueStringSorter._instanceNumber + 1;
        this._instanceNumber = _UIKeyValueStringSorter._instanceNumber;
        if ((0, import_UIObject.IS_NOT)(this._webWorkerHolder.webWorker.onmessage)) {
          this._webWorkerHolder.webWorker.onmessage = (message) => {
            this.isWorkerBusy = import_UIObject.NO;
            this.postNextMessageIfNeeded();
            const key = "" + message.data.identifier + message.data.instanceIdentifier;
            const completionFunction = this.completionFunctions[key];
            if ((0, import_UIObject.IS)(completionFunction)) {
              completionFunction(message.data.sortedData, message.data.sortedIndexes, message.data.identifier);
            }
            delete this.completionFunctions[key];
            var asd = 1;
          };
        }
      }
      get instanceIdentifier() {
        return this._instanceNumber;
      }
      get completionFunctions() {
        const key = "UICore_completionFunctions";
        var result = this._webWorkerHolder[key];
        if ((0, import_UIObject.IS_NOT)(result)) {
          result = {};
          this._webWorkerHolder[key] = result;
        }
        return result;
      }
      get messagesToPost() {
        const key = "UICore_messagesToPost";
        var result = this._webWorkerHolder[key];
        if ((0, import_UIObject.IS_NOT)(result)) {
          result = [];
          this._webWorkerHolder[key] = result;
        }
        return result;
      }
      set isWorkerBusy(isWorkerBusy) {
        this._webWorkerHolder["UICore_isWorking"] = isWorkerBusy;
      }
      get isWorkerBusy() {
        return (0, import_UIObject.IS)(this._webWorkerHolder["UICore_isWorking"]);
      }
      postNextMessageIfNeeded() {
        if (this.messagesToPost.length && (0, import_UIObject.IS_NOT)(this.isWorkerBusy)) {
          this._webWorkerHolder.webWorker.postMessage(this.messagesToPost.firstElement);
          this.messagesToPost.removeElementAtIndex(0);
          this.isWorkerBusy = import_UIObject.YES;
        }
      }
      sortData(data, sortingInstructions, identifier, completion) {
        if (this._isThreadClosed) {
          return;
        }
        const instanceIdentifier = this.instanceIdentifier;
        const key = "" + identifier + instanceIdentifier;
        this.completionFunctions[key] = completion;
        try {
          this.messagesToPost.push({
            "data": data,
            "sortingInstructions": sortingInstructions,
            "identifier": identifier,
            "instanceIdentifier": instanceIdentifier
          });
          this.postNextMessageIfNeeded();
        } catch (exception) {
          completion([], [], identifier);
        }
      }
      sortedData(data, sortingInstructions, identifier = (0, import_UIObject.MAKE_ID)()) {
        const result = new Promise((resolve, reject) => {
          this.sortData(data, sortingInstructions, identifier, (sortedData, sortedIndexes, sortedIdentifier) => {
            if (sortedIdentifier == identifier) {
              resolve({
                sortedData,
                sortedIndexes,
                identifier: sortedIdentifier
              });
            }
          });
        });
        return result;
      }
      closeThread() {
        this._isThreadClosed = import_UIObject.YES;
        if (this._webWorkerHolder != _UIKeyValueStringSorter._sharedWebWorkerHolder) {
          this._webWorkerHolder.webWorker.terminate();
        }
      }
    };
    var UIKeyValueStringSorter = _UIKeyValueStringSorter;
    UIKeyValueStringSorter._sharedWebWorkerHolder = { webWorker: new import_UIKeyValueStringSorterWebWorker_worker.default() };
    UIKeyValueStringSorter._instanceNumber = -1;
    UIKeyValueStringSorter.dataType = {
      "string": "string"
    };
    UIKeyValueStringSorter.direction = {
      "descending": "descending",
      "ascending": "ascending"
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UIDialogView.js
var require_UIDialogView = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIDialogView.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIDialogView_exports = {};
    __export2(UIDialogView_exports, {
      UIDialogView: () => UIDialogView3
    });
    module.exports = __toCommonJS2(UIDialogView_exports);
    var import_ClientCheckers = require_ClientCheckers();
    var import_UIColor = require_UIColor();
    var import_UICoreValues = require_UICoreValues();
    var import_UIObject = require_UIObject();
    var import_UIView = require_UIView();
    var UIDialogView3 = class extends import_UIView.UIView {
      constructor(elementID, viewHTMLElement) {
        super(elementID, viewHTMLElement);
        this._isAUIDialogView = import_UIObject.YES;
        this._view = import_UIObject.nil;
        this.animationDuration = 0.25;
        this._zIndex = 100;
        this.isVisible = import_UIObject.NO;
        this.dismissesOnTapOutside = import_UIObject.YES;
        this.addTargetForControlEvent(
          import_UIView.UIView.controlEvent.PointerTap,
          function(sender, event2) {
            this.didDetectTapOutside(sender, event2);
          }.bind(this)
        );
        this.backgroundColor = import_UIColor.UIColor.colorWithRGBA(0, 10, 25).colorWithAlpha(0.75);
        this.zIndex = this._zIndex;
      }
      didDetectTapOutside(sender, event2) {
        if (event2.target == this.viewHTMLElement && this.dismissesOnTapOutside) {
          this.dismiss(this._appearedAnimated);
        }
      }
      set zIndex(zIndex) {
        this._zIndex = zIndex;
        this.style.zIndex = "" + zIndex;
      }
      get zIndex() {
        return this._zIndex;
      }
      set view(view) {
        this._view.removeFromSuperview();
        this._view = view;
        this.addSubview(view);
      }
      get view() {
        return this._view;
      }
      willAppear(animated = import_UIObject.NO) {
        if (animated) {
          this.style.opacity = "0";
        }
        this.style.height = "";
        this._frame = null;
      }
      animateAppearing() {
        this.style.opacity = "1";
      }
      animateDisappearing() {
        this.style.opacity = "0";
      }
      showInView(containerView, animated) {
        animated = animated && !import_ClientCheckers.IS_FIREFOX;
        this._appearedAnimated = animated;
        this.willAppear(animated);
        containerView.addSubview(this);
        if (animated) {
          this.layoutSubviews();
          import_UIView.UIView.animateViewOrViewsWithDurationDelayAndFunction(
            this,
            this.animationDuration,
            0,
            void 0,
            function() {
              this.animateAppearing();
            }.bind(this),
            import_UIObject.nil
          );
        } else {
          this.setNeedsLayout();
        }
        this.isVisible = import_UIObject.YES;
      }
      showInRootView(animated) {
        this.showInView(import_UICoreValues.UICoreValues.main.rootViewController.view, animated);
      }
      dismiss(animated) {
        animated = animated && !import_ClientCheckers.IS_FIREFOX;
        if (animated == void 0) {
          animated = this._appearedAnimated;
        }
        if (animated) {
          import_UIView.UIView.animateViewOrViewsWithDurationDelayAndFunction(
            this,
            this.animationDuration,
            0,
            void 0,
            function() {
              this.animateDisappearing();
            }.bind(this),
            function() {
              if (this.isVisible == import_UIObject.NO) {
                this.removeFromSuperview();
              }
            }.bind(this)
          );
        } else {
          this.removeFromSuperview();
        }
        this.isVisible = import_UIObject.NO;
      }
      didReceiveBroadcastEvent(event2) {
        super.didReceiveBroadcastEvent(event2);
        if (event2.name == import_UICoreValues.UICoreValues.broadcastEventName.WindowDidResize) {
          this.setNeedsLayout();
        }
      }
      layoutSubviews() {
        if (!(0, import_UIObject.IS)(this.view)) {
          return;
        }
        this.setPosition(0, 0, 0, 0, 0, "100%");
        this.setPosition(0, 0, 0, 0, import_UIView.UIView.pageHeight, "100%");
        const bounds = this.bounds;
        const margin = 20;
        this.view.style.position = "relative";
        super.layoutSubviews();
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UIDateTimeInput.js
var require_UIDateTimeInput = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIDateTimeInput.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIDateTimeInput_exports = {};
    __export2(UIDateTimeInput_exports, {
      UIDateTimeInput: () => UIDateTimeInput
    });
    module.exports = __toCommonJS2(UIDateTimeInput_exports);
    var import_UIObject = require_UIObject();
    var import_UIView = require_UIView();
    var _UIDateTimeInput = class extends import_UIView.UIView {
      constructor(elementID, type = _UIDateTimeInput.type.DateTime) {
        super(elementID, import_UIObject.nil, "input");
        this.viewHTMLElement.setAttribute("type", type);
        this.viewHTMLElement.onchange = (event2) => {
          this.sendControlEventForKey(_UIDateTimeInput.controlEvent.ValueChange, event2);
        };
      }
      get addControlEventTarget() {
        return super.addControlEventTarget;
      }
      get date() {
        const result = new Date(this.viewHTMLElement.value);
        return result;
      }
    };
    var UIDateTimeInput = _UIDateTimeInput;
    UIDateTimeInput.controlEvent = Object.assign({}, import_UIView.UIView.controlEvent, {
      "ValueChange": "ValueChange"
    });
    UIDateTimeInput.type = {
      "Date": "date",
      "Time": "time",
      "DateTime": "datetime"
    };
    UIDateTimeInput.format = {
      "European": "DD-MM-YYYY",
      "ISOComputer": "YYYY-MM-DD",
      "American": "MM/DD/YYYY"
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UICore.js
var require_UICore = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UICore.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UICore_exports = {};
    __export2(UICore_exports, {
      UICore: () => UICore5
    });
    module.exports = __toCommonJS2(UICore_exports);
    var import_UICoreExtensions = require_UICoreExtensions();
    var import_UICoreValues = require_UICoreValues();
    var import_UIObject = require_UIObject();
    var import_UIRoute = require_UIRoute();
    var import_UIView = require_UIView();
    var import_UIViewController = require_UIViewController();
    var UICore5 = class extends import_UIObject.UIObject {
      constructor(rootDivElementID, rootViewControllerClass) {
        super();
        this.rootViewController = import_UIObject.nil;
        import_UICoreValues.UICoreValues.RootViewControllerClass = rootViewControllerClass;
        import_UICoreValues.UICoreValues.main = this;
        const rootViewElement = document.getElementById(rootDivElementID);
        const rootView = new import_UIView.UIView(rootDivElementID, rootViewElement);
        rootView.pausesPointerEvents = import_UIObject.NO;
        if (import_UICoreValues.UICoreValues.RootViewControllerClass) {
          if (!(import_UICoreValues.UICoreValues.RootViewControllerClass.prototype instanceof import_UIViewController.UIViewController) || import_UICoreValues.UICoreValues.RootViewControllerClass === import_UIViewController.UIViewController) {
            console.log(
              "Error, UICore.RootViewControllerClass must be a or a subclass of UIViewController, falling back to UIViewController."
            );
            import_UICoreValues.UICoreValues.RootViewControllerClass = import_UIViewController.UIViewController;
          }
          this.rootViewController = new import_UICoreValues.UICoreValues.RootViewControllerClass(rootView);
        } else {
          this.rootViewController = new import_UIViewController.UIViewController(rootView);
        }
        this.rootViewController.viewWillAppear();
        this.rootViewController.viewDidAppear();
        this.rootViewController.view.addTargetForControlEvent(
          import_UIView.UIView.controlEvent.PointerUpInside,
          function(sender, event2) {
            document.activeElement.blur();
          }
        );
        const windowDidResize = function() {
          this.rootViewController._triggerLayoutViewSubviews();
          import_UIView.UIView.layoutViewsIfNeeded();
          this.rootViewController._triggerLayoutViewSubviews();
          this.rootViewController.view.broadcastEventInSubtree({
            name: import_UICoreValues.UICoreValues.broadcastEventName.WindowDidResize,
            parameters: import_UIObject.nil
          });
        };
        window.addEventListener("resize", windowDidResize.bind(this));
        const didScroll = function() {
          this.rootViewController.view.broadcastEventInSubtree({
            name: import_UIView.UIView.broadcastEventName.PageDidScroll,
            parameters: import_UIObject.nil
          });
        }.bind(this);
        window.addEventListener("scroll", didScroll, false);
        const hashDidChange = function() {
          this.rootViewController.handleRouteRecursively(import_UIRoute.UIRoute.currentRoute);
          this.rootViewController.view.broadcastEventInSubtree({
            name: import_UICoreValues.UICoreValues.broadcastEventName.RouteDidChange,
            parameters: import_UIObject.nil
          });
        }.bind(this);
        window.addEventListener("hashchange", hashDidChange.bind(this), false);
        hashDidChange();
      }
      static loadClass(className) {
        if (window[className]) {
          return;
        }
        document.writeln("<script type='text/javascript' src='dist/UICore/" + className + ".js'><\/script>");
      }
    };
    import_UICoreValues.UICoreValues.RootViewControllerClass = import_UIObject.nil;
    Array.prototype.indexOf || (Array.prototype.indexOf = function(d, e) {
      var a;
      if (null == this) {
        throw new TypeError('"this" is null or not defined');
      }
      const c = Object(this), b = c.length >>> 0;
      if (0 === b) {
        return -1;
      }
      a = +e || 0;
      Infinity === Math.abs(a) && (a = 0);
      if (a >= b) {
        return -1;
      }
      for (a = Math.max(0 <= a ? a : b - Math.abs(a), 0); a < b; ) {
        if (a in c && c[a] === d) {
          return a;
        }
        a++;
      }
      return -1;
    });
  }
});

// node_modules/uicore-ts/compiledScripts/UIActionIndicator.js
var require_UIActionIndicator = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIActionIndicator.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIActionIndicator_exports = {};
    __export2(UIActionIndicator_exports, {
      UIActionIndicator: () => UIActionIndicator2
    });
    module.exports = __toCommonJS2(UIActionIndicator_exports);
    var import_UIObject = require_UIObject();
    var import_UIView = require_UIView();
    var UIActionIndicator2 = class extends import_UIView.UIView {
      constructor(elementID) {
        super(elementID);
        this._size = 50;
        this.indicatorView = new import_UIView.UIView(this.elementID + "IndicatorView");
        this.indicatorView.viewHTMLElement.classList.add("LukeHaasLoader");
        this.addSubview(this.indicatorView);
        this.hidden = import_UIObject.YES;
      }
      set size(size) {
        this._size = size;
        this.setNeedsLayoutUpToRootView();
      }
      get size() {
        return this._size;
      }
      set hidden(hidden) {
        super.hidden = hidden;
        if (hidden) {
          this.indicatorView.removeFromSuperview();
        } else {
          this.addSubview(this.indicatorView);
        }
      }
      start() {
        this.hidden = import_UIObject.NO;
      }
      stop() {
        this.hidden = import_UIObject.YES;
      }
      layoutSubviews() {
        super.layoutSubviews();
        const bounds = this.bounds;
        this.indicatorView.style.height = "" + this._size.integerValue + "px";
        this.indicatorView.style.width = "" + this._size.integerValue + "px";
        const minSize = Math.min(this.bounds.height, this.bounds.width);
        this.indicatorView.style.maxHeight = "" + minSize.integerValue + "px";
        this.indicatorView.style.maxWidth = "" + minSize.integerValue + "px";
        const size = Math.min(this._size, minSize);
        this.indicatorView.style.left = "" + ((bounds.width - size) * 0.5 - 11).integerValue + "px";
        this.indicatorView.style.top = "" + ((bounds.height - size) * 0.5 - 11).integerValue + "px";
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/UIInterfaces.js
var require_UIInterfaces = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIInterfaces.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var UIInterfaces_exports = {};
    module.exports = __toCommonJS2(UIInterfaces_exports);
  }
});

// node_modules/uicore-ts/compiledScripts/UIRootViewController.js
var require_UIRootViewController = __commonJS({
  "node_modules/uicore-ts/compiledScripts/UIRootViewController.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __reflectGet2 = Reflect.get;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var __superGet2 = (cls, obj, key) => __reflectGet2(__getProtoOf2(cls), key, obj);
    var __async2 = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    var UIRootViewController_exports = {};
    __export2(UIRootViewController_exports, {
      UIRootViewController: () => UIRootViewController2
    });
    module.exports = __toCommonJS2(UIRootViewController_exports);
    var import_UIColor = require_UIColor();
    var import_UICoreValues = require_UICoreValues();
    var import_UIDialogView = require_UIDialogView();
    var import_UIObject = require_UIObject();
    var import_UIRectangle = require_UIRectangle();
    var import_UIRoute = require_UIRoute();
    var import_UIView = require_UIView();
    var import_UIViewController = require_UIViewController();
    var UIRootViewController2 = class extends import_UIViewController.UIViewController {
      constructor(view) {
        super(view);
        this.topBarView = import_UIObject.nil;
        this.backgroundView = new import_UIView.UIView(this.view.elementID + "BackgroundView").configuredWithObject({
          style: {
            background: "linear-gradient(" + import_UIColor.UIColor.whiteColor.stringValue + ", " + import_UIColor.UIColor.blueColor.stringValue + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }
        });
        this.bottomBarView = import_UIObject.nil;
        this.contentViewControllers = {
          mainViewController: this.lazyViewControllerObjectWithClass(import_UIViewController.UIViewController)
        };
        this._detailsDialogView = new import_UIDialogView.UIDialogView(this.view.elementID + "DetailsDialogView").configuredWithObject({
          dismiss: (0, import_UIObject.EXTEND)(
            (animated) => {
              const route = import_UIRoute.UIRoute.currentRoute;
              this.detailsViewControllers.allValues.forEach(
                (value) => route.routeByRemovingComponentNamed(value.class.routeComponentName)
              );
              route.apply();
            }
          )
        });
        this.detailsViewControllers = {};
        this.view.addSubview(this.backgroundView);
      }
      lazyViewControllerObjectWithClass(classObject, shouldShow = () => import_UIObject.YES) {
        const result = {
          class: classObject,
          instance: import_UIObject.nil,
          shouldShow,
          isInitialized: import_UIObject.NO
        };
        import_UIObject.UIObject.configureWithObject(result, {
          instance: (0, import_UIObject.LAZY_VALUE)(
            () => {
              result.isInitialized = import_UIObject.YES;
              return new classObject(
                new import_UIView.UIView(classObject.name.replace("ViewController", "View"))
              );
            }
          )
        });
        return result;
      }
      handleRoute(route) {
        return __async2(this, null, function* () {
          __superGet2(UIRootViewController2.prototype, this, "handleRoute").call(this, route);
          import_UICoreValues.UICoreValues.languageService.updateCurrentLanguageKey();
          yield this.setContentViewControllerForRoute(route);
          yield this.setDetailsViewControllerForRoute(route);
        });
      }
      setContentViewControllerForRoute(route) {
        return __async2(this, null, function* () {
          const contentViewControllerObject = (0, import_UIObject.FIRST)(
            yield this.contentViewControllers.allValues.findAsyncSequential(
              (value) => __async2(this, null, function* () {
                return (0, import_UIObject.IS)(route.componentWithViewController(value.class)) && (yield value.shouldShow());
              })
            ),
            this.contentViewControllers.mainViewController
          );
          this.contentViewController = contentViewControllerObject.instance;
        });
      }
      setDetailsViewControllerForRoute(route) {
        return __async2(this, null, function* () {
          const detailsViewControllerObject = (0, import_UIObject.FIRST_OR_NIL)(
            yield this.detailsViewControllers.allValues.findAsyncSequential(
              (value) => __async2(this, null, function* () {
                return (0, import_UIObject.IS)(route.componentWithViewController(value.class)) && (yield value.shouldShow());
              })
            )
          );
          if ((0, import_UIObject.IS)(route) && (0, import_UIObject.IS)(this.detailsViewController) && (0, import_UIObject.IS_NOT)(detailsViewControllerObject)) {
            this.detailsViewController = import_UIObject.nil;
            this._detailsDialogView.dismiss();
            this.view.setNeedsLayout();
            return;
          }
          this.detailsViewController = detailsViewControllerObject.instance;
        });
      }
      get contentViewController() {
        return this._contentViewController || import_UIObject.nil;
      }
      set contentViewController(controller) {
        if (this.contentViewController == controller) {
          return;
        }
        if (this.contentViewController) {
          this.removeChildViewController(this.contentViewController);
        }
        this._contentViewController = controller;
        this.addChildViewControllerInContainer(controller, this.backgroundView);
        this._triggerLayoutViewSubviews();
        this.contentViewController.view.style.boxShadow = "0 3px 6px 0 rgba(0, 0, 0, 0.1)";
        this.view.setNeedsLayout();
      }
      get detailsViewController() {
        return this._detailsViewController;
      }
      set detailsViewController(controller) {
        if (this.detailsViewController == controller) {
          return;
        }
        if (this.detailsViewController) {
          this.removeChildViewController(this.detailsViewController);
        }
        this._detailsViewController = controller;
        if (!(0, import_UIObject.IS)(controller)) {
          return;
        }
        this.addChildViewControllerInDialogView(controller, this._detailsDialogView);
        this._triggerLayoutViewSubviews();
        this.detailsViewController.view.style.borderRadius = "5px";
        this._detailsDialogView.showInView(this.view, import_UIObject.YES);
      }
      updatePageScale() {
        const actualPageWidth = (import_UIView.UIView.pageWidth * import_UIView.UIView.pageScale).integerValue;
        const minScaleWidth = 700;
        const maxScaleWidth = 1500;
        const minScale = 0.7;
        const maxScale = 1;
        let scale = minScale + (maxScale - minScale) * ((actualPageWidth - minScaleWidth) / (maxScaleWidth - minScaleWidth));
        scale = Math.min(scale, maxScale);
        scale = Math.max(scale, minScale);
        import_UIView.UIView.pageScale = scale;
      }
      performDefaultLayout(paddingLength = 20, contentViewMaxWidth = 1e3, topBarHeight = 65, bottomBarMinHeight = 100) {
        const bounds = this.view.bounds;
        this.topBarView.frame = new import_UIRectangle.UIRectangle(0, 0, topBarHeight, bounds.width);
        this.backgroundView.style.top = "" + this.topBarView.frame.height.integerValue + "px";
        this.backgroundView.style.width = "100%";
        this.backgroundView.style.height = "fit-content";
        this.backgroundView.style.minHeight = "" + (bounds.height - this.topBarView.frame.height - this.bottomBarView.frame.height).integerValue + "px";
        this.contentViewController.view.style.position = "relative";
        this.contentViewController.view.style.bottom = "0";
        this.contentViewController.view.style.top = "0";
        this.contentViewController.view.style.width = "100%";
        this.contentViewController.view.setPaddings(import_UIObject.nil, import_UIObject.nil, paddingLength, import_UIObject.nil);
        this.contentViewController.view.setNeedsLayout();
        if (contentViewMaxWidth < this.backgroundView.bounds.width) {
          this.contentViewController.view.style.marginBottom = "" + Math.min(
            (this.backgroundView.bounds.width - contentViewMaxWidth) * 0.5,
            paddingLength
          ).integerValue + "px";
          this.contentViewController.view.style.marginTop = "" + Math.min(
            (this.backgroundView.bounds.width - contentViewMaxWidth) * 0.5,
            paddingLength
          ).integerValue + "px";
          this.contentViewController.view.style.maxWidth = contentViewMaxWidth + "px";
          this.contentViewController.view.style.left = "" + ((this.backgroundView.bounds.width - this.contentViewController.view.bounds.width) * 0.5).integerValue + "px";
        } else {
          this.contentViewController.view.style.margin = "";
          this.contentViewController.view.style.left = "";
          this.contentViewController.view.style.maxWidth = "";
        }
        this.contentViewController._triggerLayoutViewSubviews();
        let contentViewControllerViewHeight = this.contentViewController.view.intrinsicContentHeight(
          this.contentViewController.view.bounds.width
        );
        const detailsViewControllerViewHeight = (0, import_UIObject.FIRST_OR_NIL)(this.detailsViewController).view.intrinsicContentHeight(
          this.contentViewController.view.bounds.width
        );
        if (detailsViewControllerViewHeight > contentViewControllerViewHeight) {
          contentViewControllerViewHeight = detailsViewControllerViewHeight;
        }
        this.contentViewController.view.style.height = "" + contentViewControllerViewHeight.integerValue + "px";
        this.contentViewController.view.setNeedsLayout();
        if ((0, import_UIObject.IS)(this.detailsViewController)) {
          this.contentViewController.view.style.transform = "translateX(" + 0 + "px)";
          this.detailsViewController.view.frame = this.backgroundView.frame.rectangleWithInset(
            paddingLength
          ).rectangleWithWidth(
            this.contentViewController.view.bounds.width,
            0.5
          ).rectangleWithHeight(
            Math.max(
              this.detailsViewController.view.intrinsicContentHeight(
                this.detailsViewController.view.bounds.width
              ),
              this.contentViewController.view.bounds.height
            )
          );
        } else {
          this.contentViewController.view.style.transform = "translateX(" + 0 + "px)";
        }
        this.bottomBarView.frame = this.backgroundView.frame.rectangleWithY(
          this.backgroundView.frame.max.y
        ).rectangleWithHeight(
          Math.max(bottomBarMinHeight, this.bottomBarView.intrinsicContentHeight(this.backgroundView.frame.width))
        );
        (0, import_UIObject.wrapInNil)(this._detailsDialogView).setMaxSizes(this.bottomBarView.frame.max.y);
      }
    };
  }
});

// node_modules/uicore-ts/compiledScripts/index.js
var require_compiledScripts = __commonJS({
  "node_modules/uicore-ts/compiledScripts/index.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default"));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var scripts_exports = {};
    module.exports = __toCommonJS2(scripts_exports);
    __reExport(scripts_exports, require_UIObject(), module.exports);
    __reExport(scripts_exports, require_UIView(), module.exports);
    __reExport(scripts_exports, require_UIViewController(), module.exports);
    __reExport(scripts_exports, require_UITimer(), module.exports);
    __reExport(scripts_exports, require_UITextArea(), module.exports);
    __reExport(scripts_exports, require_UITextView(), module.exports);
    __reExport(scripts_exports, require_UITextField(), module.exports);
    __reExport(scripts_exports, require_UITableView(), module.exports);
    __reExport(scripts_exports, require_UIStringFilter(), module.exports);
    __reExport(scripts_exports, require_UISlideScrollerView(), module.exports);
    __reExport(scripts_exports, require_UIScrollView(), module.exports);
    __reExport(scripts_exports, require_UIRoute(), module.exports);
    __reExport(scripts_exports, require_UIRectangle(), module.exports);
    __reExport(scripts_exports, require_UIPoint(), module.exports);
    __reExport(scripts_exports, require_UINativeScrollView(), module.exports);
    __reExport(scripts_exports, require_UILink(), module.exports);
    __reExport(scripts_exports, require_UILinkButton(), module.exports);
    __reExport(scripts_exports, require_UILayoutGrid(), module.exports);
    __reExport(scripts_exports, require_UIKeyValueStringFilter(), module.exports);
    __reExport(scripts_exports, require_UIKeyValueStringSorter(), module.exports);
    __reExport(scripts_exports, require_UIImageView(), module.exports);
    __reExport(scripts_exports, require_UIDialogView(), module.exports);
    __reExport(scripts_exports, require_UIDateTimeInput(), module.exports);
    __reExport(scripts_exports, require_UICoreExtensions(), module.exports);
    __reExport(scripts_exports, require_UICore(), module.exports);
    __reExport(scripts_exports, require_UIColor(), module.exports);
    __reExport(scripts_exports, require_UIBaseButton(), module.exports);
    __reExport(scripts_exports, require_UIButton(), module.exports);
    __reExport(scripts_exports, require_UIActionIndicator(), module.exports);
    __reExport(scripts_exports, require_UICoreExtensionValueObject(), module.exports);
    __reExport(scripts_exports, require_UIInterfaces(), module.exports);
    __reExport(scripts_exports, require_ClientCheckers(), module.exports);
    __reExport(scripts_exports, require_UICoreValues(), module.exports);
    __reExport(scripts_exports, require_UIRootViewController(), module.exports);
  }
});

// scripts/RootViewController.ts
var import_uicore_ts24 = __toESM(require_compiledScripts());

// scripts/BottomBarView.ts
var import_uicore_ts = __toESM(require_compiledScripts());
var BottomBarView = class extends import_uicore_ts.UIView {
  constructor(elementID) {
    super(elementID);
  }
  initView(elementID, viewHTMLElement) {
    super.initView(elementID, viewHTMLElement);
    this.backgroundColor = import_uicore_ts.UIColor.colorWithRGBA(50, 50, 50);
    this.setInnerHTML("bottomBarContent", "bottomBarContent");
  }
  layoutSubviews() {
    super.layoutSubviews();
  }
};

// scripts/CBCore/CBColor.ts
var import_uicore_ts2 = __toESM(require_compiledScripts());
var CBColor = class extends import_uicore_ts2.UIColor {
  constructor(stringValue) {
    super(stringValue);
  }
  static get primaryTintColor() {
    return new CBColor("rgba(52, 127, 230, 1)");
  }
  static get secondaryTintColor() {
    return new CBColor("rgba(0, 196, 212, 1)");
  }
  static get primaryContentColor() {
    return new CBColor("rgb(35, 35, 35)");
  }
  static get greenTintColor() {
    return new CBColor("rgba(51, 188, 125, 1)");
  }
  static get redTintColor() {
    return new CBColor("rgba(236, 88, 111, 1)");
  }
};

// scripts/CBCore/CBCore.ts
var import_uicore_ts12 = __toESM(require_compiledScripts());

// scripts/Custom components/LanguageService.ts
var import_uicore_ts3 = __toESM(require_compiledScripts());
var _LanguageService = class {
  static useStoredLanguageValues(values = {}) {
    _LanguageService.languages = JSON.parse(JSON.stringify(_LanguageService.languageValues)).objectByCopyingValuesRecursivelyFromObject(
      values
    );
    _LanguageService.broadcastLanguageChangeEvent();
  }
  static broadcastLanguageChangeEvent() {
    import_uicore_ts3.UICoreValues.main.rootViewController.view.broadcastEventInSubtree({
      name: import_uicore_ts3.UIView.broadcastEventName.LanguageChanged,
      parameters: {}
    });
  }
  static get defaultLanguageKey() {
    return CBCoreInitializerObject.defaultLanguageKey || "en";
  }
  static get currentLanguageKey() {
    if (!_LanguageService._currentLanguageKey) {
      _LanguageService.updateCurrentLanguageKey();
    }
    return _LanguageService._currentLanguageKey;
  }
  updateCurrentLanguageKey() {
    _LanguageService.updateCurrentLanguageKey();
  }
  static updateCurrentLanguageKey(route = import_uicore_ts3.UIRoute.currentRoute) {
    let result = route.componentWithName("settings").parameters.language;
    if ((0, import_uicore_ts3.IS_NOT)(result)) {
      result = _LanguageService.defaultLanguageKey;
    }
    const isChanged = result == _LanguageService._currentLanguageKey;
    _LanguageService._currentLanguageKey = result;
    if (isChanged) {
      _LanguageService.broadcastLanguageChangeEvent();
    }
  }
  get currentLanguageKey() {
    const result = _LanguageService.currentLanguageKey;
    return result;
  }
  static stringForKey(key, languageKey, defaultString, parameters) {
    var result;
    if ((0, import_uicore_ts3.IS)(key) && _LanguageService.languages[languageKey] && (0, import_uicore_ts3.IS_DEFINED)(_LanguageService.languages[languageKey][key])) {
      result = _LanguageService.languages[languageKey][key];
    } else {
      result = defaultString;
    }
    if ((0, import_uicore_ts3.IS)(parameters)) {
      const parameterKeys = Object.keys(parameters);
      parameterKeys.forEach(function(key2, index, array) {
        const keyString = "%" + key2 + "%";
        const parameter = parameters[key2];
        var parameterString;
        if (parameter instanceof Object) {
          parameterString = import_uicore_ts3.UICoreValues.languageService.stringForCurrentLanguage(parameter);
        } else {
          parameterString = parameter;
        }
        result = result.replace(new RegExp(keyString, "g"), parameterString);
      });
    }
    return result;
  }
  stringForKey(key, languageKey, defaultString, parameters) {
    return _LanguageService.stringForKey(key, languageKey, defaultString, parameters);
  }
  static localizedTextObjectForKey(key, defaultString = key, parameters) {
    const result = {};
    _LanguageService.languages.forEach(function(languageObject, languageKey) {
      result[languageKey] = _LanguageService.stringForKey(key, languageKey, defaultString, parameters);
    });
    return result;
  }
  localizedTextObjectForKey(key, defaultString, parameters) {
    const result = _LanguageService.localizedTextObjectForKey(key, defaultString, parameters);
    return result;
  }
  static localizedTextObjectForText(text) {
    if ((0, import_uicore_ts3.IS_NOT)(text)) {
      return import_uicore_ts3.nil;
    }
    const result = {
      [_LanguageService.defaultLanguageKey]: text
    };
    return result;
  }
  localizedTextObjectForText(text) {
    const result = _LanguageService.localizedTextObjectForText(text);
    return result;
  }
  static stringForCurrentLanguage(localizedTextObject) {
    if (!_LanguageService || !localizedTextObject) {
      const asd = 1;
    }
    if (localizedTextObject === "" + localizedTextObject) {
      return localizedTextObject;
    }
    localizedTextObject = (0, import_uicore_ts3.FIRST_OR_NIL)(localizedTextObject);
    var result = localizedTextObject[_LanguageService.currentLanguageKey];
    if ((0, import_uicore_ts3.IS_NOT)(result)) {
      result = localizedTextObject[_LanguageService.defaultLanguageKey];
    }
    if ((0, import_uicore_ts3.IS_NOT)(result)) {
      result = localizedTextObject["en"];
    }
    if ((0, import_uicore_ts3.IS_NOT)(result)) {
      result = "";
    }
    return result;
  }
  stringForCurrentLanguage(localizedTextObject) {
    return _LanguageService.stringForCurrentLanguage(localizedTextObject);
  }
};
var LanguageService = _LanguageService;
LanguageService.languageValues = {
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
};
LanguageService.languages = JSON.parse(JSON.stringify(_LanguageService.languageValues));
import_uicore_ts3.UICoreValues.languageService = LanguageService;

// scripts/CBCore/CBServerClient.ts
var import_uicore_ts4 = __toESM(require_compiledScripts());
var CBServerClient = class extends import_uicore_ts4.UIObject {
  constructor(core) {
    super();
    this._core = core;
  }
  sendJSONObject(URL2, objectToSend, completion) {
    this.sendRequest("POST", URL2, objectToSend, function(status, response) {
      if (status != 200) {
        console.log("GET " + URL2 + " " + status);
        if ((0, import_uicore_ts4.IS)(completion)) {
          completion(import_uicore_ts4.nil);
        }
        return;
      }
      const result = JSON.parse(response);
      if ((0, import_uicore_ts4.IS)(completion)) {
        completion(result);
      }
    }.bind(this));
  }
  retrieveJSONObject(URL2, completion) {
    this.retrieveJSONObjectWithCaching(URL2, import_uicore_ts4.nil, import_uicore_ts4.nil, import_uicore_ts4.YES, completion);
  }
  retrieveJSONObjectWithCaching(URL2, cacheObject, cacheKey, forceUpdate, completion) {
    if ((0, import_uicore_ts4.IS)(cacheObject[cacheKey]) && !forceUpdate) {
      if ((0, import_uicore_ts4.IS)(completion)) {
        completion(cacheObject[cacheKey]);
      }
      return;
    }
    this.sendRequest("GET", URL2, null, function(status, response) {
      if (status != 200) {
        console.log("GET " + URL2 + " " + status);
        if ((0, import_uicore_ts4.IS)(completion)) {
          completion(import_uicore_ts4.nil);
        }
        return;
      }
      const result = JSON.parse(response);
      cacheObject[cacheKey] = result;
      if ((0, import_uicore_ts4.IS)(completion)) {
        completion(result);
      }
    }.bind(this));
  }
  sendRequest(method, URL2, data, completion) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, URL2, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = processRequest;
    function processRequest(event2) {
      if (xhr.readyState == 4) {
        if ((0, import_uicore_ts4.IS)(completion)) {
          completion(xhr.status, xhr.responseText);
        }
      }
    }
    xhr.send(JSON.stringify(data));
  }
};

// scripts/CBCore/CBSocketClient.ts
var import_uicore_ts11 = __toESM(require_compiledScripts());

// scripts/Custom components/CBDialogViewShower.ts
var import_uicore_ts9 = __toESM(require_compiledScripts());

// scripts/RootViewParameters.ts
var RootViewParameters = class {
  static get paddingLength() {
    return 20;
  }
};

// scripts/Custom components/CBDialogView.ts
var import_uicore_ts8 = __toESM(require_compiledScripts());

// scripts/Custom components/CBFlatButton.ts
var import_uicore_ts6 = __toESM(require_compiledScripts());

// scripts/Custom components/CBButton.ts
var import_uicore_ts5 = __toESM(require_compiledScripts());
var CBButton = class extends import_uicore_ts5.UIButton {
  constructor(elementID, elementType) {
    super(elementID, elementType);
  }
  initView(elementID, viewHTMLElement, initViewData) {
    super.initView(elementID, viewHTMLElement, initViewData);
    this.style.outline = "none";
    this.colors.titleLabel.normal = CBColor.whiteColor;
    this.setBackgroundColorsWithNormalColor(CBColor.primaryTintColor);
    this.colors.titleLabel.selected = CBColor.primaryTintColor;
  }
  setBackgroundColorsWithNormalColor(normalBackgroundColor) {
    this.colors.background.normal = normalBackgroundColor;
    this.colors.background.hovered = import_uicore_ts5.UIColor.colorWithRGBA(40, 168, 183);
    this.colors.background.focused = normalBackgroundColor;
    this.colors.background.highlighted = import_uicore_ts5.UIColor.colorWithRGBA(48, 196, 212);
    this.colors.background.selected = import_uicore_ts5.UIColor.whiteColor;
    this.updateContentForCurrentState();
  }
  updateContentForNormalState() {
    super.updateContentForNormalState();
    this.setBorder(0, 0);
  }
  updateContentForHoveredState() {
    super.updateContentForHoveredState();
    this.setBorder(0, 0);
  }
  updateContentForFocusedState() {
    super.updateContentForFocusedState();
    this.setBorder(0, 1, CBColor.primaryContentColor);
  }
  updateContentForHighlightedState() {
    super.updateContentForHighlightedState();
    this.setBorder(0, 0);
  }
  updateContentForCurrentEnabledState() {
    super.updateContentForCurrentEnabledState();
    if ((0, import_uicore_ts5.IS_NOT)(this.enabled)) {
      this.titleLabel.textColor = new import_uicore_ts5.UIColor("#adadad");
      this.backgroundColor = new import_uicore_ts5.UIColor("#e5e5e5");
      this.alpha = 1;
    }
  }
};

// scripts/Custom components/CBFlatButton.ts
var CBFlatButton = class extends CBButton {
  constructor(elementID, elementType) {
    super(elementID, elementType);
  }
  initView(elementID, viewHTMLElement, initViewData) {
    super.initView(elementID, viewHTMLElement, initViewData);
    this.colors = {
      titleLabel: {
        normal: CBColor.primaryTintColor,
        highlighted: CBColor.primaryTintColor,
        selected: CBColor.primaryTintColor
      },
      background: {
        normal: CBColor.transparentColor,
        hovered: new import_uicore_ts6.UIColor("#F8F8F8"),
        highlighted: new import_uicore_ts6.UIColor("#ebebeb"),
        selected: new import_uicore_ts6.UIColor("#ebebeb")
      }
    };
  }
  set titleLabelColor(titleLabelColor) {
    this.colors.titleLabel.normal = titleLabelColor;
    this.colors.titleLabel.highlighted = titleLabelColor;
    this.colors.titleLabel.selected = titleLabelColor;
    this.updateContentForCurrentState();
  }
  get titleLabelColor() {
    const result = this.colors.titleLabel.normal;
    return result;
  }
  updateContentForNormalState() {
    import_uicore_ts6.UIButton.prototype.updateContentForNormalState.call(this);
  }
  updateContentForHoveredState() {
    import_uicore_ts6.UIButton.prototype.updateContentForHoveredState.call(this);
  }
  updateContentForFocusedState() {
    import_uicore_ts6.UIButton.prototype.updateContentForFocusedState.call(this);
  }
  updateContentForHighlightedState() {
    import_uicore_ts6.UIButton.prototype.updateContentForHighlightedState.call(this);
  }
};
CBFlatButton.colors = {
  titleLabel: {
    normal: CBColor.primaryTintColor,
    highlighted: CBColor.primaryTintColor,
    selected: CBColor.primaryTintColor
  },
  background: {
    normal: CBColor.transparentColor,
    hovered: new import_uicore_ts6.UIColor("#F8F8F8"),
    highlighted: new import_uicore_ts6.UIColor("#ebebeb"),
    selected: new import_uicore_ts6.UIColor("#ebebeb")
  }
};

// scripts/Custom components/RowView.ts
var import_uicore_ts7 = __toESM(require_compiledScripts());
var RowView = class extends import_uicore_ts7.UIView {
  constructor(elementID, cells = [], cellWidths = []) {
    super(elementID);
    this.padding = 0;
    this._rowHeight = 50;
    this._cells = cells;
    this._cellWeights = cellWidths;
  }
  get cells() {
    return this._cells;
  }
  set cells(cells) {
    const previousCells = this.cells;
    const cellWeights = this.cellWeights.copy();
    previousCells.copy().forEach(function(cell, index, array) {
      if (!cells.contains(cell)) {
        cell.removeFromSuperview();
        this._cells.removeElement(cell);
        cellWeights[index] = import_uicore_ts7.nil;
      }
    }.bind(this));
    this.cellWeights = cellWeights.filter((value, index, array) => (0, import_uicore_ts7.IS_NOT_NIL)(value));
    cells.copy().forEach(function(cell, index, array) {
      if (!(0, import_uicore_ts7.IS)(cell.superview)) {
        this.addCell(cell, 1, index);
      }
    }, this);
    this._previousLayoutBounds = import_uicore_ts7.nil;
    this.setNeedsLayout();
  }
  removeCellAtIndex(index) {
    const remainingCells = this.cells.copy();
    remainingCells.removeElementAtIndex(index);
    this.cellWeights.removeElementAtIndex(index);
    this.cells = remainingCells;
  }
  removeFirstCell() {
    this.removeCellAtIndex(0);
  }
  removeLastCell() {
    this.removeCellAtIndex(this.cells.length - 1);
  }
  addCell(cell, weight = 1, index = this.cells.length) {
    if (this.cells.contains(cell) && (0, import_uicore_ts7.IS_NOT_NIL)(cell)) {
      return;
    }
    this.cells.insertElementAtIndex(index, cell);
    this.cellWeights.insertElementAtIndex(index, weight);
    this.addSubview(cell);
    this.setNeedsLayout();
  }
  get cellWeights() {
    return this._cellWeights;
  }
  set cellWeights(widths) {
    this._cellWeights = widths;
    this._previousLayoutBounds = import_uicore_ts7.nil;
    this.setNeedsLayout();
  }
  get cellWidths() {
    return this._cellWidths;
  }
  set cellWidths(widths) {
    this._cellWidths = widths;
    this._previousLayoutBounds = import_uicore_ts7.nil;
    this.setNeedsLayout();
  }
  get rowHeight() {
    var result = (0, import_uicore_ts7.IF)(this._rowHeight)(() => this._rowHeight).ELSE(() => this.cells.map((value, index, array) => value.intrinsicContentHeight(this.bounds.width)).max());
    return result;
  }
  layoutSubviews() {
    const bounds = this.bounds;
    if (bounds.isEqualTo(this._previousLayoutBounds)) {
      return;
    }
    super.layoutSubviews();
    this._previousLayoutBounds = bounds;
    bounds.distributeViewsAlongWidth(this._cells, this._cellWeights, this.padding, this._cellWidths);
    this.cells.forEach(function(cell, index, array) {
      cell.frame = cell.frame.rectangleWithHeight(this.rowHeight);
    }.bind(this));
  }
};

// scripts/Custom components/CBDialogView.ts
var CBDialogView = class extends import_uicore_ts8.UIView {
  constructor(elementID) {
    super(elementID);
    this.titleLabel = import_uicore_ts8.nil;
    this.titleRow = import_uicore_ts8.nil;
    this.placeholderLabel = import_uicore_ts8.nil;
    this._view = import_uicore_ts8.nil;
    this.questionLabel = import_uicore_ts8.nil;
    this.yesButton = import_uicore_ts8.nil;
    this.noButton = import_uicore_ts8.nil;
    this.cancelButton = import_uicore_ts8.nil;
    this.noButtonDismissesDialog = import_uicore_ts8.YES;
    this.updateContent();
  }
  initView(elementID, viewHTMLElement) {
    super.initView(elementID, viewHTMLElement);
    this.style.borderRadius = "5px";
  }
  set view(view) {
    this.view.removeFromSuperview();
    this._view = view;
    this.addSubview(view);
  }
  get view() {
    return this._view;
  }
  initCancelButtonIfNeeded() {
    if ((0, import_uicore_ts8.IS_NOT)(this.cancelButton)) {
      this.cancelButton = new CBFlatButton(this.elementID + "CancelButton");
      this.cancelButton.titleLabel.text = "OK";
      this.cancelButton.titleLabelColor = import_uicore_ts8.UIColor.greenColor;
      this.cancelButton.titleLabel.style.fontWeight = "600";
      this.addSubview(this.cancelButton);
      this.cancelButton.addTargetForControlEvents([
        import_uicore_ts8.UIButton.controlEvent.PointerUpInside,
        import_uicore_ts8.UIButton.controlEvent.EnterDown
      ], function(sender, event2) {
        this.dialogView.dismiss();
      }.bind(this));
    }
  }
  initYesNoButtonsIfNeeded() {
    if ((0, import_uicore_ts8.IS_NOT)(this.yesButton)) {
      this.yesButton = new CBFlatButton(this.elementID + "YesButton");
      this.yesButton.titleLabel.setText("cBDDialogViewYES", "YES");
      this.yesButton.titleLabelColor = import_uicore_ts8.UIColor.greenColor;
      this.yesButton.titleLabel.style.fontWeight = "600";
      this.addSubview(this.yesButton);
      this.noButton = new CBFlatButton(this.elementID + "NoButton");
      this.noButton.titleLabel.setText("cBDDialogViewNO", "NO");
      this.noButton.titleLabelColor = import_uicore_ts8.UIColor.redColor;
      this.noButton.titleLabel.style.fontWeight = "600";
      this.addSubview(this.noButton);
      this.noButton.addTargetForControlEvents([
        import_uicore_ts8.UIButton.controlEvent.PointerUpInside,
        import_uicore_ts8.UIButton.controlEvent.EnterDown
      ], function(sender, event2) {
        if (this.noButtonDismissesDialog) {
          this.dialogView.dismiss();
        }
      }.bind(this));
    }
  }
  initQuestionLabelIfNeeded() {
    if ((0, import_uicore_ts8.IS_NOT)(this.questionLabel)) {
      this.questionLabel = new import_uicore_ts8.UITextView(this.elementID + "QuestionLabel", import_uicore_ts8.UITextView.type.header3);
      this.questionLabel.text = LanguageService.stringForKey(
        "cBDDialogViewAreYouSure",
        LanguageService.currentLanguageKey,
        "Are you sure?"
      );
      this.questionLabel.textAlignment = import_uicore_ts8.UITextView.textAlignment.center;
      this.addSubview(this.questionLabel);
    }
  }
  initTitleRow() {
    if ((0, import_uicore_ts8.IS_NOT)(this.titleRow)) {
      this.titleRow = new RowView(this.elementID + "TitleRow");
      this.addSubview(this.titleRow);
    }
  }
  initTitleLabelIfNeeded() {
    if ((0, import_uicore_ts8.IS_NOT)(this.titleLabel)) {
      this.titleLabel = new import_uicore_ts8.UITextView(this.elementID + "TitleLabel", import_uicore_ts8.UITextView.type.header4);
      this.titleLabel.text = "Accept offer";
      this.titleLabel.style.fontSize = "24";
      this.addSubview(this.titleLabel);
    }
  }
  initPlaceholderLabelIfNeeded() {
    if ((0, import_uicore_ts8.IS_NOT)(this.placeholderLabel)) {
      this.placeholderLabel = new import_uicore_ts8.UITextView(this.elementID + "PlaceholderLabel", import_uicore_ts8.UITextView.type.header4);
      this.placeholderLabel.text = "No offers have been made yet.";
      this.addSubview(this.placeholderLabel);
    }
  }
  updateContent() {
    function stringFromValue(value) {
      if ((0, import_uicore_ts8.IS)(value)) {
        return value;
      }
      return "-";
    }
    this.layoutSubviews();
  }
  layoutSubviews() {
    super.layoutSubviews();
    const padding = RootViewParameters.paddingLength;
    const labelHeight = padding * 0.75;
    const bounds = this.bounds.rectangleWithInsets(padding * 0.5, padding * 0.5, 0, 0);
    const topObject = { frame: bounds.rectangleWithHeight(0) };
    this.titleLabel.frame = bounds.rectangleWithHeight(this.titleLabel.intrinsicContentHeight(bounds.width)).rectangleWithY(
      bounds.y + padding * 0.5
    );
    this.titleLabel.style.marginLeft = "" + padding * 0.5 + "px";
    this.titleRow.frame = (0, import_uicore_ts8.FIRST_OR_NIL)(this.titleLabel, topObject).frame.rectangleForNextRow(
      0,
      this.titleRow.intrinsicContentHeight(bounds.width)
    );
    this.view.frame = (0, import_uicore_ts8.FIRST_OR_NIL)(this.titleRow, this.titleLabel, topObject).frame.rectangleForNextRow(
      padding,
      this.view.intrinsicContentHeight(bounds.width)
    ).rectangleWithWidth(bounds.width).rectangleWithX(bounds.x);
    this.questionLabel.frame = (0, import_uicore_ts8.FIRST_OR_NIL)(
      this.view,
      this.titleRow,
      this.titleLabel,
      topObject
    ).frame.rectangleForNextRow(
      padding,
      this.questionLabel.intrinsicContentHeight(bounds.width)
    ).rectangleWithWidth(bounds.width).rectangleWithX(bounds.x);
    const buttons = [this.yesButton, this.noButton];
    const buttonsFrame = (0, import_uicore_ts8.FIRST_OR_NIL)(
      this.questionLabel,
      this.view,
      this.titleRow,
      this.titleLabel,
      topObject
    ).frame.rectangleForNextRow(padding, labelHeight * 2).rectangleWithWidth([buttons.everyElement.titleLabel.intrinsicContentWidth().max(), 120].max() * 2 + padding * 3, 0.5);
    buttonsFrame.distributeViewsAlongWidth(buttons);
    this.cancelButton.frame = buttonsFrame.rectangleWithWidth(150, 0.5);
    this.placeholderLabel.frame = bounds.rectangleWithInsets(padding * 0.5, padding * 0.5, 0, 0);
    if ((0, import_uicore_ts8.IS)(this.view)) {
      this.placeholderLabel.hidden = import_uicore_ts8.YES;
    } else {
      this.placeholderLabel.hidden = import_uicore_ts8.NO;
    }
  }
  intrinsicContentHeight(constrainingWidth = 0) {
    const padding = RootViewParameters.paddingLength;
    const labelHeight = padding * 0.75;
    function addPaddingIfNeeded(value) {
      return (0, import_uicore_ts8.IF)(value)(function() {
        return value + padding;
      })();
    }
    var result = padding;
    result = result + addPaddingIfNeeded(this.titleLabel.intrinsicContentHeight(constrainingWidth));
    result = result + addPaddingIfNeeded(this.titleRow.intrinsicContentHeight(constrainingWidth));
    result = result + addPaddingIfNeeded(this.view.intrinsicContentHeight(constrainingWidth) + padding);
    result = result + addPaddingIfNeeded(this.questionLabel.intrinsicContentHeight(constrainingWidth));
    result = result + (0, import_uicore_ts8.IF)((0, import_uicore_ts8.FIRST_OR_NIL)(this.yesButton, this.cancelButton))((0, import_uicore_ts8.RETURNER)(labelHeight))();
    return result;
  }
};

// scripts/Custom components/CBDialogViewShower.ts
var _CBDialogViewShower = class extends import_uicore_ts9.UIObject {
  constructor(elementID) {
    super();
    this.dialogView = new import_uicore_ts9.UIDialogView();
    this.dialogView.view = new CBDialogView(elementID);
    this.dialogView.view.backgroundColor = import_uicore_ts9.UIColor.whiteColor;
    const dialogLayoutFunction = this.dialogView.layoutSubviews.bind(this.dialogView);
    this.dialogView.layoutSubviews = function() {
      dialogLayoutFunction();
      this.dialogView.view.frame = new import_uicore_ts9.UIRectangle(
        0,
        0,
        window.innerHeight,
        window.innerWidth
      ).rectangleWithHeight(
        this.dialogView.view.intrinsicContentHeight(this.getDialogWidth()),
        0.5
      ).rectangleWithWidth(this.getDialogWidth(), 0.5);
      this.dialogView.frame = import_uicore_ts9.UICoreValues.main.rootViewController.view.bounds;
    }.bind(this);
    this.dialogView.view.yesButton.addTargetForControlEvents([
      import_uicore_ts9.UIButton.controlEvent.PointerUpInside,
      import_uicore_ts9.UIButton.controlEvent.EnterDown
    ], function(sender, event2) {
      this.yesButtonWasPressed();
    }.bind(this));
    this.dialogView.view.noButton.addTargetForControlEvents([
      import_uicore_ts9.UIButton.controlEvent.PointerUpInside,
      import_uicore_ts9.UIButton.controlEvent.EnterDown
    ], function(sender, event2) {
      this.noButtonWasPressed();
    }.bind(this));
  }
  getDialogWidth() {
    const padding = RootViewParameters.paddingLength;
    const labelHeight = padding * 0.75;
    var result = 250;
    const width = this.dialogView.view.titleLabel.intrinsicContentWidth() + padding * 2;
    result = Math.max(result, this.dialogView.view.view.intrinsicContentWidth(this.dialogView.view.view.viewHTMLElement.naturalHeight || 1e9));
    result = Math.max(result, width);
    result = Math.min(result, 1e3);
    const dialogMaxWidth = (this.dialogView.superview || { "bounds": new import_uicore_ts9.UIRectangle(0, 0, 0, result) }).bounds.width;
    result = Math.min(result, dialogMaxWidth);
    return result;
  }
  yesButtonWasPressed() {
  }
  noButtonWasPressed() {
  }
  cancelButtonWasPressed() {
  }
  showQuestionDialogInRootView(titleTextObject, questionTextObject) {
    this.dialogView.view.initTitleLabelIfNeeded();
    this.dialogView.view.titleLabel.localizedTextObject = titleTextObject;
    this.dialogView.view.initQuestionLabelIfNeeded();
    if ((0, import_uicore_ts9.IS)(questionTextObject)) {
      this.dialogView.view.questionLabel.localizedTextObject = questionTextObject;
    }
    this.dialogView.view.initYesNoButtonsIfNeeded();
    this.dialogView.view.noButton.addTargetForControlEvents([
      import_uicore_ts9.UIButton.controlEvent.EnterDown,
      import_uicore_ts9.UIButton.controlEvent.PointerUpInside
    ], function(sender, event2) {
      this.noButtonWasPressed();
    }.bind(this));
    this.dialogView.view.yesButton.addTargetForControlEvents([
      import_uicore_ts9.UIButton.controlEvent.EnterDown,
      import_uicore_ts9.UIButton.controlEvent.PointerUpInside
    ], function(sender, event2) {
      this.yesButtonWasPressed();
    }.bind(this));
    this.dialogView.showInRootView(import_uicore_ts9.YES);
  }
  showMessageDialogInRootView(titleTextObject) {
    this.dialogView.view.initTitleLabelIfNeeded();
    this.dialogView.view.titleLabel.localizedTextObject = titleTextObject;
    this.dialogView.view.initCancelButtonIfNeeded();
    this.dialogView.view.cancelButton.addTargetForControlEvents([
      import_uicore_ts9.UIButton.controlEvent.EnterDown,
      import_uicore_ts9.UIButton.controlEvent.PointerUpInside
    ], function(sender, event2) {
      this.cancelButtonWasPressed();
    }.bind(this));
    this.dialogView.showInRootView(import_uicore_ts9.YES);
    this.dialogView.view.cancelButton.focus();
  }
  showDialogInRootView(view) {
    this.dialogView.view.view = view;
    this.dialogView.view.initCancelButtonIfNeeded();
    this.dialogView.view.cancelButton.addTargetForControlEvents([
      import_uicore_ts9.UIButton.controlEvent.EnterDown,
      import_uicore_ts9.UIButton.controlEvent.PointerUpInside
    ], function(sender, event2) {
      this.cancelButtonWasPressed();
    }.bind(this));
    this.dialogView.showInRootView(import_uicore_ts9.YES);
    this.dialogView.view.cancelButton.focus();
  }
  showImageDialogInRootView(imageURL, deleteImageCallback) {
    var loadingLabel = new import_uicore_ts9.UITextView();
    loadingLabel.text = "Loading image.";
    loadingLabel.textAlignment = import_uicore_ts9.UITextView.textAlignment.center;
    this.dialogView.view.view = loadingLabel;
    const imageView = new import_uicore_ts9.UIImageView();
    imageView.imageSource = imageURL;
    imageView.viewHTMLElement.onload = (event2) => {
      this.dialogView.view.view = imageView;
      imageView.setNeedsLayoutUpToRootView();
    };
    imageView.fillMode = import_uicore_ts9.UIImageView.fillMode.aspectFitIfLarger;
    if ((0, import_uicore_ts9.IS)(deleteImageCallback)) {
      this.dialogView.view.initYesNoButtonsIfNeeded();
      this.dialogView.view.yesButton.titleLabel.text = "Close";
      this.dialogView.view.noButton.titleLabel.text = "Delete";
      this.dialogView.view.noButtonDismissesDialog = import_uicore_ts9.NO;
      this.dialogView.view.noButton.addTargetForControlEvents([
        import_uicore_ts9.UIButton.controlEvent.EnterDown,
        import_uicore_ts9.UIButton.controlEvent.PointerUpInside
      ], function(sender, event2) {
        const dialogShower = _CBDialogViewShower._dialogShowerWithDismissCallback(function() {
        }.bind(this));
        var textObject = LanguageService.localizedTextObjectForText("Delete this image.");
        dialogShower.showQuestionDialogInRootView(textObject);
        dialogShower.yesButtonWasPressed = function() {
          deleteImageCallback();
          dialogShower.dialogView.dismiss();
        };
      }.bind(this));
      this.dialogView.view.yesButton.addTargetForControlEvents([
        import_uicore_ts9.UIButton.controlEvent.EnterDown,
        import_uicore_ts9.UIButton.controlEvent.PointerUpInside
      ], function(sender, event2) {
        this.dialogView.dismiss();
      }.bind(this));
    } else {
      this.dialogView.view.initCancelButtonIfNeeded();
      this.dialogView.view.cancelButton.titleLabel.text = "Close";
    }
    this.dialogView.showInRootView(import_uicore_ts9.YES);
    this.dialogView.view.cancelButton.focus();
  }
  showActionIndicatorDialogInRootView(message) {
    const actionIndicator = new import_uicore_ts9.UIActionIndicator();
    this.dialogView.zIndex = 150;
    this.dialogView.view.view = actionIndicator;
    actionIndicator.style.minHeight = "100px";
    this.dialogView.view.initQuestionLabelIfNeeded();
    this.dialogView.view.questionLabel.text = message;
    actionIndicator.start();
    this.dialogView.view.backgroundColor = CBColor.primaryContentColor.colorWithAlpha(0.5);
    this.dialogView.view.questionLabel.textColor = import_uicore_ts9.UIColor.whiteColor;
    this.dialogView.dismissesOnTapOutside = import_uicore_ts9.NO;
    _CBDialogViewShower.currentActionIndicatorDialogViewShower = this;
    this.dialogView.showInRootView(import_uicore_ts9.NO);
    this.dialogView.view.cancelButton.focus();
  }
  static showNextDialog() {
    (_CBDialogViewShower.nextShowDialogFunctions.firstElement || import_uicore_ts9.nil)();
    _CBDialogViewShower.nextShowDialogFunctions.removeElementAtIndex(0);
  }
  static alert(text, dismissCallback = import_uicore_ts9.nil) {
    const dialogShower = _CBDialogViewShower._dialogShowerWithDismissCallback(dismissCallback);
    const textObject = LanguageService.localizedTextObjectForText(text);
    const showDialogFunction = dialogShower.showMessageDialogInRootView.bind(dialogShower, textObject);
    _CBDialogViewShower._showDialogWithFunction(showDialogFunction, dialogShower);
  }
  static localizedAlert(textObject, dismissCallback = import_uicore_ts9.nil) {
    const dialogShower = _CBDialogViewShower._dialogShowerWithDismissCallback(dismissCallback);
    const showDialogFunction = dialogShower.showMessageDialogInRootView.bind(dialogShower, textObject);
    _CBDialogViewShower._showDialogWithFunction(showDialogFunction, dialogShower);
  }
  static showQuestionDialog(questionText, dismissCallback = import_uicore_ts9.nil) {
    const dialogShower = _CBDialogViewShower._dialogShowerWithDismissCallback(dismissCallback);
    const textObject = LanguageService.localizedTextObjectForText(questionText);
    const showDialogFunction = dialogShower.showQuestionDialogInRootView.bind(dialogShower, textObject);
    _CBDialogViewShower._showDialogWithFunction(showDialogFunction, dialogShower);
    return dialogShower;
  }
  static showImageDialog(imageURL, deleteImageCallback = import_uicore_ts9.nil, dismissCallback = import_uicore_ts9.nil) {
    var dialogShower = _CBDialogViewShower._dialogShowerWithDismissCallback(dismissCallback);
    var showDialogFunction = dialogShower.showImageDialogInRootView.bind(
      dialogShower,
      imageURL,
      deleteImageCallback
    );
    _CBDialogViewShower._showDialogWithFunction(showDialogFunction, dialogShower);
    return dialogShower;
  }
  static showDialog(view, dismissCallback = import_uicore_ts9.nil) {
    const dialogShower = _CBDialogViewShower._dialogShowerWithDismissCallback(dismissCallback);
    const showDialogFunction = dialogShower.showDialogInRootView.bind(dialogShower, view);
    _CBDialogViewShower._showDialogWithFunction(showDialogFunction, dialogShower);
    return dialogShower;
  }
  static showActionIndicatorDialog(message, dismissCallback = import_uicore_ts9.nil) {
    if ((0, import_uicore_ts9.IS)(_CBDialogViewShower.currentActionIndicatorDialogViewShower)) {
      _CBDialogViewShower.currentActionIndicatorDialogViewShower.dialogView.view.questionLabel.text = message;
      _CBDialogViewShower.currentActionIndicatorDialogViewShower.dialogView.view.setNeedsLayoutUpToRootView();
      return;
    }
    const dialogShower = _CBDialogViewShower._dialogShowerWithDismissCallback(dismissCallback);
    dialogShower.showActionIndicatorDialogInRootView(message);
    return dialogShower;
  }
  static hideActionIndicatorDialog() {
    _CBDialogViewShower.currentActionIndicatorDialogViewShower.dialogView.dismiss();
    _CBDialogViewShower.currentActionIndicatorDialogViewShower = import_uicore_ts9.nil;
  }
  static _dialogShowerWithDismissCallback(dismissCallback) {
    const dialogShower = new _CBDialogViewShower();
    const dismissFunction = dialogShower.dialogView.dismiss.bind(dialogShower.dialogView);
    dialogShower.dialogView.dismiss = function() {
      dismissFunction();
      dismissCallback();
      _CBDialogViewShower.currentDialogViewShower = null;
      _CBDialogViewShower.showNextDialog();
    };
    return dialogShower;
  }
  static _showDialogWithFunction(showDialogFunction, dialogShower) {
    if ((0, import_uicore_ts9.IS)(_CBDialogViewShower.currentDialogViewShower)) {
      _CBDialogViewShower.nextShowDialogFunctions.push(showDialogFunction);
    } else {
      _CBDialogViewShower.currentDialogViewShower = dialogShower;
      showDialogFunction();
    }
  }
};
var CBDialogViewShower = _CBDialogViewShower;
CBDialogViewShower.nextShowDialogFunctions = [];
CBDialogViewShower.currentActionIndicatorDialogViewShower = import_uicore_ts9.nil;

// scripts/CBCore/CBSocketCallbackHolder.ts
var import_uicore_ts10 = __toESM(require_compiledScripts());
var CBSocketCallbackHolder = class extends import_uicore_ts10.UIObject {
  constructor(socketClient, previousCallbackHolder) {
    super();
    this.messageDescriptors = {};
    this.handlers = {};
    this.onetimeHandlers = {};
    this.keysForIdentifiers = {};
    this.isValid = import_uicore_ts10.YES;
    this._verifiedResponseHashesDictionary = {};
    this._socketClient = socketClient;
    if ((0, import_uicore_ts10.IS)(previousCallbackHolder)) {
      this.handlers = previousCallbackHolder.handlers;
      this._verifiedResponseHashesDictionary = previousCallbackHolder._verifiedResponseHashesDictionary;
    }
  }
  triggerDisconnectHandlers() {
    this.messageDescriptors.forEach(function(descriptor, key) {
      if (descriptor.mainResponseReceived) {
        descriptor.completionFunction(CBSocketClient.disconnectionMessage, import_uicore_ts10.nil);
      }
    });
  }
  registerHandler(key, handlerFunction) {
    if (!this.handlers[key]) {
      this.handlers[key] = [];
    }
    this.handlers[key].push(handlerFunction);
  }
  registerOnetimeHandler(key, handlerFunction) {
    if (!this.onetimeHandlers[key]) {
      this.onetimeHandlers[key] = [];
    }
    this.onetimeHandlers[key].push(handlerFunction);
  }
  get storedResponseHashesDictionary() {
    if ((0, import_uicore_ts10.IS_NOT)(this._storedResponseHashesDictionary)) {
      this._storedResponseHashesDictionary = JSON.parse(localStorage["CBSocketResponseHashesDictionary"] || "{}");
    }
    return this._storedResponseHashesDictionary;
  }
  storedResponseHashObjectForKey(requestKey, requestDataHash) {
    const localStorageKey = this.keyForRequestKeyAndRequestDataHash(requestKey, requestDataHash);
    const hashObject = this.storedResponseHashesDictionary[localStorageKey];
    const result = (0, import_uicore_ts10.FIRST)(hashObject, {});
    return result;
  }
  storedResponseForKey(requestKey, requestDataHash) {
    const localStorageKey = this.keyForRequestKeyAndRequestDataHash(requestKey, requestDataHash);
    const storedObject = JSON.parse(localStorage[localStorageKey] || "{}");
    return storedObject.responseMessageData;
  }
  keyForRequestKeyAndRequestDataHash(requestKey, requestDataHash) {
    const result = "_CBSCH_LS_key_" + requestKey + "_" + requestDataHash;
    return result;
  }
  storeResponse(requestKey, requestDataHash, responseMessage, responseDataHash) {
    if (!responseMessage.canBeStoredAsResponse || (0, import_uicore_ts10.IS_NOT)(responseMessage.messageData) && (0, import_uicore_ts10.IS_NOT)(responseMessage.messageDataHash)) {
      return;
    }
    const localStorageKey = this.keyForRequestKeyAndRequestDataHash(requestKey, requestDataHash);
    var validityDate;
    if (responseMessage.responseValidityDuration) {
      validityDate = Date.now() + responseMessage.responseValidityDuration;
    }
    const storedResponseHashesDictionary = this.storedResponseHashesDictionary;
    storedResponseHashesDictionary[localStorageKey] = {
      hash: responseDataHash,
      validityDate
    };
    this.saveInLocalStorage(localStorageKey, {
      responseMessageData: responseMessage.messageData,
      responseHash: responseDataHash
    });
    this.saveStoredResponseHashesDictionary(storedResponseHashesDictionary);
  }
  saveStoredResponseHashesDictionary(storedResponseHashesDictionary) {
    this.saveInLocalStorage("CBSocketResponseHashesDictionary", storedResponseHashesDictionary);
  }
  saveInLocalStorage(key, object) {
    const stringToSave = JSON.stringify(object);
    if (stringToSave != localStorage[key]) {
      localStorage[key] = stringToSave;
    }
  }
  socketShouldSendMessage(key, message, completionPolicy, completionFunction) {
    var result = import_uicore_ts10.YES;
    var triggerStoredResponseImmediately = import_uicore_ts10.NO;
    const messageDataHash = objectHash(message.messageData || import_uicore_ts10.nil);
    const descriptorKey = "socketMessageDescriptor_" + key + messageDataHash;
    this.messageDescriptors[descriptorKey] = this.messageDescriptors[descriptorKey] || [];
    const hashObject = this.storedResponseHashObjectForKey(key, messageDataHash);
    message.storedResponseHash = hashObject.hash;
    if (completionPolicy == CBSocketClient.completionPolicy.first) {
      const descriptorsForKey = this.messageDescriptors[descriptorKey] || [];
      const matchingDescriptor = descriptorsForKey.find(function(descriptor, index, array) {
        return descriptor.messageDataHash == messageDataHash;
      });
      if (matchingDescriptor) {
        result = import_uicore_ts10.NO;
      }
    }
    if (completionPolicy == CBSocketClient.completionPolicy.storedOrFirst) {
      const descriptorsForKey = this.messageDescriptors[descriptorKey] || [];
      const matchingDescriptor = descriptorsForKey.find(function(descriptor, index, array) {
        return descriptor.messageDataHash == messageDataHash;
      });
      const storedResponse = (0, import_uicore_ts10.IS)(message.storedResponseHash);
      if (matchingDescriptor || storedResponse && this._verifiedResponseHashesDictionary[message.storedResponseHash]) {
        result = import_uicore_ts10.NO;
        triggerStoredResponseImmediately = import_uicore_ts10.YES;
      }
    }
    if (completionPolicy == CBSocketClient.completionPolicy.firstOnly) {
      const descriptorsForKey = this.messageDescriptors[descriptorKey] || [];
      const matchingDescriptor = descriptorsForKey.find(function(descriptor, index, array) {
        return descriptor.messageDataHash == messageDataHash;
      });
      if (matchingDescriptor) {
        return import_uicore_ts10.NO;
      }
    }
    if (hashObject && hashObject.hash && hashObject.validityDate && message.storedResponseHash && this._verifiedResponseHashesDictionary[message.storedResponseHash] && hashObject.validityDate > Date.now()) {
      result = import_uicore_ts10.NO;
      triggerStoredResponseImmediately = import_uicore_ts10.YES;
    }
    if ((0, import_uicore_ts10.IS)(completionFunction)) {
      this.messageDescriptors[descriptorKey].push({
        key,
        message: {
          identifier: message.identifier,
          inResponseToIdentifier: message.inResponseToIdentifier,
          keepWaitingForResponses: message.keepWaitingForResponses
        },
        sentAtTime: Date.now(),
        messageDataHash,
        mainResponseReceived: import_uicore_ts10.NO,
        anyMainResponseReceived: import_uicore_ts10.NO,
        completionPolicy,
        completionFunction
      });
      this.keysForIdentifiers[message.identifier] = descriptorKey;
    }
    if (triggerStoredResponseImmediately) {
      this.socketDidReceiveMessageForKey(
        CBSocketClient.responseMessageKey,
        {
          identifier: import_uicore_ts10.nil,
          messageData: import_uicore_ts10.nil,
          inResponseToIdentifier: message.identifier,
          useStoredResponse: import_uicore_ts10.YES
        },
        import_uicore_ts10.nil
      );
    }
    return result;
  }
  static defaultMultipleMessagecompletionFunction(responseMessages, callcompletionFunctions) {
    callcompletionFunctions();
  }
  socketWillSendMultipleMessage(messageToSend, completionFunction = CBSocketCallbackHolder.defaultMultipleMessagecompletionFunction) {
    const key = CBSocketClient.multipleMessageKey;
    const messageDataHash = objectHash(messageToSend.messageData || import_uicore_ts10.nil);
    const descriptorKey = "socketMessageDescriptor_" + key + messageDataHash;
    this.messageDescriptors[descriptorKey] = this.messageDescriptors[descriptorKey] || [];
    messageToSend.storedResponseHash = this.storedResponseHashObjectForKey(key, messageDataHash).hash;
    this.messageDescriptors[descriptorKey].push({
      key,
      message: {
        identifier: messageToSend.identifier,
        inResponseToIdentifier: messageToSend.inResponseToIdentifier,
        keepWaitingForResponses: messageToSend.keepWaitingForResponses
      },
      sentAtTime: Date.now(),
      messageDataHash,
      mainResponseReceived: import_uicore_ts10.NO,
      anyMainResponseReceived: import_uicore_ts10.NO,
      completionPolicy: CBSocketClient.completionPolicy.directOnly,
      completionFunction: function(responseMessage, respondWithMessage) {
        completionFunction(
          responseMessage.map(function(messageObject, index, array) {
            return messageObject.message.messageData;
          }),
          function() {
            responseMessage.forEach(function(messageObject, index, array) {
              this._socketClient.didReceiveMessageForKey(messageObject.key, messageObject.message);
            }.bind(this));
          }.bind(this)
        );
      }.bind(this)
    });
    this.keysForIdentifiers[messageToSend.identifier] = descriptorKey;
  }
  socketDidReceiveMessageForKey(key, message, sendResponseFunction) {
    if (!this.isValid) {
      return;
    }
    if (this.handlers[key]) {
      this.handlers[key].forEach(function(handler, index, array) {
        handler(message.messageData, sendResponseFunction);
      }.bind(this));
    }
    if (this.onetimeHandlers[key]) {
      this.onetimeHandlers[key].forEach(function(handler, index, array) {
        handler(message.messageData, sendResponseFunction);
      }.bind(this));
      delete this.onetimeHandlers[key];
    }
    if (message.inResponseToIdentifier && (CBSocketClient.responseMessageKey == key || CBSocketClient.multipleMessageKey == key)) {
      const descriptorKey = this.keysForIdentifiers[message.inResponseToIdentifier];
      const descriptorsForKey = this.messageDescriptors[descriptorKey] || [];
      const responseDataHash = message.messageDataHash;
      if (!message.keepWaitingForResponses) {
        delete this.keysForIdentifiers[message.inResponseToIdentifier];
        delete this.messageDescriptors[descriptorKey];
      }
      const callCompletionFunction = (descriptor, storedResponseCondition = import_uicore_ts10.NO) => {
        var messageData = message.messageData;
        if (message.useStoredResponse && storedResponseCondition) {
          messageData = this.storedResponseForKey(descriptor.key, descriptor.messageDataHash);
          const responseHash = this.storedResponseHashObjectForKey(
            descriptor.key,
            descriptor.messageDataHash
          ).hash;
          const localStorageKey = this.keyForRequestKeyAndRequestDataHash(
            descriptor.key,
            descriptor.messageDataHash
          );
          if (message.responseValidityDuration && this.storedResponseHashesDictionary[localStorageKey]) {
            this.storedResponseHashesDictionary[localStorageKey].validityDate = Date.now() + message.responseValidityDuration;
            this.saveStoredResponseHashesDictionary(this.storedResponseHashesDictionary);
          }
          this._verifiedResponseHashesDictionary[responseHash] = import_uicore_ts10.YES;
          console.log("Using stored response.");
        }
        descriptor.completionFunction(messageData, sendResponseFunction);
        descriptor.responseDataHash = responseDataHash;
      };
      descriptorsForKey.copy().forEach(function(descriptor, index, array) {
        if (descriptor.completionPolicy == CBSocketClient.completionPolicy.directOnly && descriptor.message.identifier == message.inResponseToIdentifier || descriptor.completionPolicy == CBSocketClient.completionPolicy.first || descriptor.completionPolicy == CBSocketClient.completionPolicy.firstOnly || descriptor.completionPolicy == CBSocketClient.completionPolicy.storedOrFirst) {
          if (!message.keepWaitingForResponses) {
            this.storeResponse(descriptor.key, descriptor.messageDataHash, message, responseDataHash);
            descriptorsForKey.removeElement(descriptor);
            sendResponseFunction.respondingToMainResponse = import_uicore_ts10.YES;
          }
          callCompletionFunction(descriptor, !message.keepWaitingForResponses);
        } else if (descriptor.completionPolicy == CBSocketClient.completionPolicy.all) {
          callCompletionFunction(descriptor, !message.keepWaitingForResponses);
          if (!message.keepWaitingForResponses) {
            if (message.inResponseToIdentifier == descriptor.message.identifier) {
              sendResponseFunction.respondingToMainResponse = import_uicore_ts10.YES;
              descriptor.mainResponseReceived = import_uicore_ts10.YES;
              descriptorsForKey.removeElement(descriptor);
            }
            descriptor.anyMainResponseReceived = import_uicore_ts10.YES;
          }
        } else if (descriptor.completionPolicy == CBSocketClient.completionPolicy.allDifferent) {
          if (descriptor.responseDataHash != responseDataHash) {
            callCompletionFunction(descriptor, !message.keepWaitingForResponses);
          }
          if (!message.keepWaitingForResponses) {
            if (message.inResponseToIdentifier == descriptor.message.identifier) {
              sendResponseFunction.respondingToMainResponse = import_uicore_ts10.YES;
              descriptor.mainResponseReceived = import_uicore_ts10.YES;
              descriptorsForKey.removeElement(descriptor);
            }
            descriptor.anyMainResponseReceived = import_uicore_ts10.YES;
          }
        } else if (descriptor.completionPolicy == CBSocketClient.completionPolicy.last && descriptor.message.identifier == message.inResponseToIdentifier) {
          if (!message.keepWaitingForResponses) {
            descriptor.mainResponseReceived = import_uicore_ts10.YES;
            descriptor.anyMainResponseReceived = import_uicore_ts10.YES;
            sendResponseFunction.respondingToMainResponse = import_uicore_ts10.YES;
          } else {
            descriptor.completionFunction(message.messageData, sendResponseFunction);
          }
        } else if (descriptor.completionPolicy == CBSocketClient.completionPolicy.firstAndLast || descriptor.completionPolicy == CBSocketClient.completionPolicy.firstAndLastIfDifferent) {
          if (!message.keepWaitingForResponses) {
            if (!descriptor.anyMainResponseReceived) {
              callCompletionFunction(descriptor, !message.keepWaitingForResponses);
            }
            if (descriptor.message.identifier == message.inResponseToIdentifier) {
              descriptor.mainResponseReceived = import_uicore_ts10.YES;
              sendResponseFunction.respondingToMainResponse = import_uicore_ts10.YES;
            }
            descriptor.anyMainResponseReceived = import_uicore_ts10.YES;
          } else if (descriptor.message.identifier == message.inResponseToIdentifier && message.keepWaitingForResponses) {
            descriptor.completionFunction(message.messageData, sendResponseFunction);
          }
        }
      }.bind(this));
      const allResponsesReceived = descriptorsForKey.allMatch(function(descriptorObject, index, array) {
        return descriptorObject.mainResponseReceived;
      });
      descriptorsForKey.copy().forEach(function(descriptor, index, array) {
        if ((descriptor.completionPolicy == CBSocketClient.completionPolicy.last || descriptor.completionPolicy == CBSocketClient.completionPolicy.firstAndLast) && allResponsesReceived && !message.keepWaitingForResponses) {
          callCompletionFunction(descriptor, !message.keepWaitingForResponses);
          descriptorsForKey.removeElement(descriptor);
        } else if (descriptor.completionPolicy == CBSocketClient.completionPolicy.firstAndLastIfDifferent && allResponsesReceived && !message.keepWaitingForResponses) {
          if (descriptor.responseDataHash != responseDataHash) {
            callCompletionFunction(descriptor, !message.keepWaitingForResponses);
          }
          descriptorsForKey.removeElement(descriptor);
        }
      }.bind(this));
    }
  }
};

// scripts/CBCore/CBSocketClient.ts
function IS_SOCKET_ERROR(object) {
  const result = (0, import_uicore_ts11.IS)(object) && object._isCBSocketErrorMessage;
  return result;
}
function IS_NOT_SOCKET_ERROR(object) {
  return !IS_SOCKET_ERROR(object);
}
var _CBSocketClient = class extends import_uicore_ts11.UIObject {
  constructor(core) {
    super();
    this._socket = io();
    this._isConnectionEstablished = import_uicore_ts11.NO;
    this._collectMessagesToSendLater = import_uicore_ts11.NO;
    this._messagesToBeSent = [];
    this._subscribedKeys = {};
    this._callbackHolder = new CBSocketCallbackHolder(this);
    this._core = core;
    this.socket.on("connect", function(socket) {
      console.log("Socket.io connected to server. clientID = " + socket + ", socketID = " + socket);
      var instanceIdentifier = localStorage.getItem("InstanceIdentifier");
      if ((0, import_uicore_ts11.IS_NOT)(instanceIdentifier)) {
        instanceIdentifier = (0, import_uicore_ts11.MAKE_ID)();
        localStorage.setItem("InstanceIdentifier", instanceIdentifier);
      }
      const handshakeMessage = {
        accessToken: null,
        userID: this._core.userProfile._id,
        inquiryAccessKey: null,
        instanceIdentifier
      };
      this.socket.emit("CBSocketHandshakeInitMessage", {
        identifier: (0, import_uicore_ts11.MAKE_ID)(),
        messageData: handshakeMessage
      });
    }.bind(this));
    this.socket.on(
      "CBSocketHandshakeResponseMessage",
      function(message) {
        this._isConnectionEstablished = message.messageData.accepted;
        if (!message.messageData.accepted) {
          console.log("SocketIO connection failed.");
          CBDialogViewShower.alert("Failed to establish connection to server.", function() {
          });
        } else {
          console.log("SocketIO connection handshake completed.");
          this._callbackHolder = new CBSocketCallbackHolder(this, this._callbackHolder);
          core.userProfile = message.messageData.userProfile;
          this.sendUnsentMessages();
        }
      }.bind(this)
    );
    this.socket.on("disconnect", function(socket) {
      console.log("Socket.io disconnected from server. clientID = " + socket + ".");
      this._isConnectionEstablished = import_uicore_ts11.NO;
      this._callbackHolder.isValid = import_uicore_ts11.NO;
      this._callbackHolder.triggerDisconnectHandlers();
    }.bind(this));
    this.socket.on("CBPerformReconnect", function(message) {
      console.log("Performing socket reconnection.");
      core.reloadSocketConnection();
      if (message) {
        CBDialogViewShower.alert(message);
      }
    }.bind(this));
    this._socket.on(
      _CBSocketClient.responseMessageKey,
      function(message) {
        this.didReceiveMessageForKey(_CBSocketClient.responseMessageKey, message);
      }.bind(this)
    );
    this._socket.on(
      _CBSocketClient.multipleMessageKey,
      (message) => {
        console.log("Received " + message.messageData.length + " messages.");
        this.didReceiveMessageForKey(_CBSocketClient.multipleMessageKey, message);
      }
    );
  }
  get socket() {
    return this._socket;
  }
  cancelUnsentMessages(messagesToCancel) {
    this._messagesToBeSent = this._messagesToBeSent.filter(function(messageObject, index, array) {
      return !messagesToCancel.contains(messageObject);
    }.bind(this));
  }
  sendUnsentMessages(receiveResponsesTogether = import_uicore_ts11.NO, completion) {
    if (!this._isConnectionEstablished || this._collectMessagesToSendLater) {
      return;
    }
    const groupedMessages = [];
    const didSendFunctions = [];
    this._messagesToBeSent.copy().forEach(function(messageToBeSentObject, index, array) {
      if (this._isConnectionEstablished) {
        var message = messageToBeSentObject.message;
        if ((0, import_uicore_ts11.IS_NOT)(message)) {
          message = "";
        }
        const identifier = (0, import_uicore_ts11.MAKE_ID)();
        const completion2 = messageToBeSentObject.completion;
        const messageObject2 = {
          messageData: message,
          identifier,
          keepWaitingForResponses: messageToBeSentObject.keepWaitingForResponses,
          inResponseToIdentifier: messageToBeSentObject.inResponseToMessage.identifier
        };
        const shouldSendMessage = this._callbackHolder.socketShouldSendMessage(
          messageToBeSentObject.key,
          messageObject2,
          messageToBeSentObject.completionPolicy,
          completion2
        );
        if (shouldSendMessage) {
          groupedMessages.push({
            key: messageToBeSentObject.key,
            message: messageObject2
          });
        }
        didSendFunctions.push(messageToBeSentObject.didSendFunction);
      }
    }.bind(this));
    this._messagesToBeSent = [];
    if ((0, import_uicore_ts11.IS_NOT)(groupedMessages.length)) {
      return;
    }
    if (groupedMessages.length == 1) {
      console.log("sending 1 unsent message.");
    } else {
      console.log("Sending " + groupedMessages.length + " unsent messages.");
    }
    const messageObject = {
      messageData: groupedMessages,
      identifier: (0, import_uicore_ts11.MAKE_ID)(),
      shouldGroupResponses: receiveResponsesTogether
    };
    this._callbackHolder.socketWillSendMultipleMessage(messageObject, completion);
    this.socket.emit(_CBSocketClient.multipleMessageKey, messageObject);
    didSendFunctions.forEach(function(didSendFunction, index, array) {
      didSendFunction();
    });
  }
  sendUserBoundMessageForKeyWithPolicy(key, message, completionPolicy, completion) {
    this._sendMessageForKey(key, message, void 0, import_uicore_ts11.NO, completionPolicy, import_uicore_ts11.YES, import_uicore_ts11.nil, completion);
  }
  sendUserBoundMessageForKey(key, message, completion) {
    this._sendMessageForKey(key, message, void 0, import_uicore_ts11.NO, void 0, import_uicore_ts11.YES, import_uicore_ts11.nil, completion);
  }
  sendMessageForKeyWithPolicy(key, message, completionPolicy, completion) {
    this._sendMessageForKey(key, message, void 0, import_uicore_ts11.NO, completionPolicy, import_uicore_ts11.NO, import_uicore_ts11.nil, completion);
  }
  sendMessageForKey(key, message, completion) {
    this._sendMessageForKey(key, message, void 0, import_uicore_ts11.NO, void 0, import_uicore_ts11.NO, import_uicore_ts11.nil, completion);
  }
  resultForMessageForKey(key, message, completionPolicy, isUserBound = import_uicore_ts11.NO) {
    const result = new Promise((resolve, reject) => {
      this._sendMessageForKey(
        key,
        message,
        void 0,
        import_uicore_ts11.NO,
        completionPolicy,
        isUserBound,
        import_uicore_ts11.nil,
        (responseMessage, respondWithMessage) => resolve({
          responseMessage,
          result: (0, import_uicore_ts11.IF)(IS_NOT_SOCKET_ERROR(responseMessage))(() => responseMessage).ELSE((0, import_uicore_ts11.RETURNER)(void 0)),
          errorResult: (0, import_uicore_ts11.IF)(IS_SOCKET_ERROR(responseMessage))(() => responseMessage).ELSE((0, import_uicore_ts11.RETURNER)(void 0)),
          respondWithMessage
        })
      );
    });
    return result;
  }
  _sendMessageForKey(key, message, inResponseToMessage = {}, keepMessageConnectionOpen = import_uicore_ts11.NO, completionPolicy = _CBSocketClient.completionPolicy.directOnly, isUserBound = import_uicore_ts11.NO, didSendFunction = import_uicore_ts11.nil, completion = import_uicore_ts11.nil) {
    if ((0, import_uicore_ts11.IS_NIL)(message)) {
      message = "";
    }
    if (this._isConnectionEstablished && !this._collectMessagesToSendLater) {
      const identifier = (0, import_uicore_ts11.MAKE_ID)();
      const messageObject = {
        messageData: message,
        identifier,
        keepWaitingForResponses: keepMessageConnectionOpen,
        inResponseToIdentifier: inResponseToMessage.identifier
      };
      const shouldSendMessage = this._callbackHolder.socketShouldSendMessage(
        key,
        messageObject,
        completionPolicy,
        completion
      );
      if (shouldSendMessage) {
        this.socket.emit(key, messageObject);
      }
      didSendFunction();
    } else {
      this._messagesToBeSent.push({
        key,
        message,
        inResponseToMessage,
        keepWaitingForResponses: keepMessageConnectionOpen,
        completionPolicy,
        isBoundToUserWithID: (0, import_uicore_ts11.IF)(isUserBound)((0, import_uicore_ts11.RETURNER)((0, import_uicore_ts11.FIRST_OR_NIL)(CBCore.sharedInstance.userProfile._id)))(),
        didSendFunction,
        completion
      });
      return this._messagesToBeSent.lastElement;
    }
  }
  sendMessagesAsGroup(functionToCall) {
    const collectMessagesToSendLater = this._collectMessagesToSendLater;
    this._collectMessagesToSendLater = import_uicore_ts11.YES;
    var result = functionToCall();
    this._collectMessagesToSendLater = collectMessagesToSendLater;
    this.sendUnsentMessages();
    return result;
  }
  sendAndReceiveMessagesAsGroup(functionToCall, completion) {
    const collectMessagesToSendLater = this._collectMessagesToSendLater;
    this._collectMessagesToSendLater = import_uicore_ts11.YES;
    var result = functionToCall();
    this._collectMessagesToSendLater = collectMessagesToSendLater;
    this.sendUnsentMessages(import_uicore_ts11.YES, completion);
    return result;
  }
  didReceiveMessageForKey(key, message) {
    const sendResponseFunction = function(responseMessage, completion) {
      this._sendMessageForKey(
        _CBSocketClient.responseMessageKey,
        responseMessage,
        message,
        import_uicore_ts11.NO,
        void 0,
        import_uicore_ts11.NO,
        import_uicore_ts11.nil,
        completion
      );
    }.bind(this);
    sendResponseFunction.sendIntermediateResponse = function(updateMessage, completion) {
      this._sendMessageForKey(
        _CBSocketClient.responseMessageKey,
        updateMessage,
        message,
        import_uicore_ts11.YES,
        void 0,
        import_uicore_ts11.NO,
        import_uicore_ts11.nil,
        completion
      );
    }.bind(this);
    const sendUserBoundResponseFunction = function(responseMessage, completion) {
      this._sendMessageForKey(
        _CBSocketClient.responseMessageKey,
        responseMessage,
        message,
        import_uicore_ts11.NO,
        void 0,
        import_uicore_ts11.YES,
        import_uicore_ts11.nil,
        completion
      );
    }.bind(this);
    sendUserBoundResponseFunction.sendIntermediateResponse = function(updateMessage, completion) {
      this._sendMessageForKey(
        _CBSocketClient.responseMessageKey,
        updateMessage,
        message,
        import_uicore_ts11.YES,
        void 0,
        import_uicore_ts11.YES,
        import_uicore_ts11.nil,
        completion
      );
    }.bind(this);
    if (IS_SOCKET_ERROR(message.messageData)) {
      console.log("CBSocketClient did receive error message.");
      console.log(message.messageData);
    }
    this._callbackHolder.socketDidReceiveMessageForKey(key, message, sendResponseFunction);
  }
  addTargetForMessagesForKeys(keys, handlerFunction) {
    keys.forEach(function(key, index, array) {
      this.addTargetForMessagesForKey(key, handlerFunction);
    }.bind(this));
  }
  addTargetForMessagesForKey(key, handlerFunction) {
    this._callbackHolder.registerHandler(key, handlerFunction);
    if ((0, import_uicore_ts11.IS_NOT)(this._subscribedKeys[key])) {
      this._socket.on(key, function(message) {
        this.didReceiveMessageForKey(key, message);
      }.bind(this));
      this._subscribedKeys[key] = true;
    }
  }
  addTargetForOneMessageForKey(key, handlerFunction) {
    this._callbackHolder.registerOnetimeHandler(key, handlerFunction);
    if ((0, import_uicore_ts11.IS_NOT)(this._subscribedKeys[key])) {
      this._socket.on(key, function(message) {
        this.didReceiveMessageForKey(key, message);
      }.bind(this));
      this._subscribedKeys[key] = true;
    }
  }
};
var CBSocketClient = _CBSocketClient;
CBSocketClient.responseMessageKey = "CBSocketResponseMessage";
CBSocketClient.multipleMessageKey = "CBSocketMultipleMessage";
CBSocketClient.disconnectionMessage = {
  _isCBSocketErrorMessage: import_uicore_ts11.YES,
  messageData: "Server disconnected"
};
CBSocketClient.completionPolicy = {
  "all": "all",
  "allDifferent": "allDifferent",
  "first": "first",
  "last": "last",
  "firstAndLast": "firstAndLast",
  "firstAndLastIfDifferent": "firstAndLastIfDifferent",
  "directOnly": "directOnly",
  "firstOnly": "firstOnly",
  "storedOrFirst": "storedOrFirst"
};
var SocketClient = new Proxy({ "name": "SocketClient" }, {
  get(target, key) {
    const result = (messageData, completionPolicy, isUserBound) => CBCore.sharedInstance.socketClient.resultForMessageForKey(
      key,
      messageData,
      completionPolicy,
      isUserBound
    );
    return result;
  }
});

// scripts/CBCore/CBCore.ts
var _CBCore = class extends import_uicore_ts12.UIObject {
  constructor() {
    super();
    this._isUserLoggedIn = import_uicore_ts12.nil;
    this._cachedMinimizedChatInquiryIDs = import_uicore_ts12.nil;
    this._socketClient = new CBSocketClient(this);
    this._serverClient = new CBServerClient(this);
    this._functionsToCallForEachSocketClient = [];
    this._models = [];
    if (CBCoreInitializerObject) {
      LanguageService.useStoredLanguageValues(CBCoreInitializerObject.languageValues);
    }
    window.addEventListener("storage", function(event2) {
      if (event2.newValue == event2.oldValue) {
        return;
      }
      if (event2.key == "CBLanguageKey") {
        this.didSetLanguageKey();
      }
    }.bind(this));
    this.didSetLanguageKey();
  }
  static get sharedInstance() {
    if (!_CBCore._sharedInstance) {
      _CBCore._sharedInstance = new _CBCore();
    }
    return _CBCore._sharedInstance;
  }
  broadcastMessageInRootViewTree(message) {
    import_uicore_ts12.UICoreValues.main.rootViewController.view.broadcastEventInSubtree(message);
  }
  get socketClient() {
    return this._socketClient;
  }
  get serverClient() {
    return this._serverClient;
  }
  set isUserLoggedIn(isUserLoggedIn) {
    const previousValue = this.isUserLoggedIn;
    localStorage.setItem("CBIsUserLoggedIn", "" + isUserLoggedIn);
    this.didSetIsUserLoggedIn(previousValue);
  }
  didSetIsUserLoggedIn(previousValue) {
    const isUserLoggedIn = this.isUserLoggedIn;
    if (isUserLoggedIn && previousValue != isUserLoggedIn) {
      this.broadcastMessageInRootViewTree({
        name: _CBCore.broadcastEventName.userDidLogIn,
        parameters: import_uicore_ts12.nil
      });
      this.updateLinkTargets();
    } else if (previousValue != isUserLoggedIn) {
      this.performFunctionWithDelay(0.01, function() {
        import_uicore_ts12.UIRoute.currentRoute.routeByRemovingComponentsOtherThanOnesNamed([
          "settings",
          "inquiry"
        ]).apply();
        this.broadcastMessageInRootViewTree({
          name: _CBCore.broadcastEventName.userDidLogOut,
          parameters: import_uicore_ts12.nil
        });
        this.updateLinkTargets();
      }.bind(this));
    }
  }
  updateLinkTargets() {
    import_uicore_ts12.UICoreValues.main.rootViewController.view.forEachViewInSubtree(function(view) {
      if (view instanceof import_uicore_ts12.UILink) {
        view.updateTarget();
      }
    });
  }
  get isUserLoggedIn() {
    const result = localStorage.getItem("CBIsUserLoggedIn") == "true";
    return result;
  }
  get userProfile() {
    var result = import_uicore_ts12.nil;
    try {
      result = JSON.parse(localStorage.getItem("CBUserProfile"));
    } catch (error) {
    }
    return (0, import_uicore_ts12.FIRST_OR_NIL)(result);
  }
  set userProfile(userProfile) {
    if ((0, import_uicore_ts12.IS_NOT)(userProfile)) {
      localStorage.removeItem("CBUserProfile");
    }
    localStorage.setItem("CBUserProfile", JSON.stringify(userProfile));
    this.didSetUserProfile();
  }
  didSetUserProfile() {
    this.isUserLoggedIn = (0, import_uicore_ts12.IS)(this.userProfile);
  }
  set languageKey(languageKey) {
    if ((0, import_uicore_ts12.IS_NOT)(languageKey)) {
      localStorage.removeItem("CBLanguageKey");
    }
    localStorage.setItem("CBLanguageKey", JSON.stringify(languageKey));
    this.didSetLanguageKey();
  }
  get languageKey() {
    const result = (0, import_uicore_ts12.FIRST)(localStorage.getItem("CBLanguageKey"), LanguageService.defaultLanguageKey).replace(
      '"',
      ""
    ).replace('"', "");
    return result;
  }
  didSetLanguageKey() {
    import_uicore_ts12.UIRoute.currentRoute.routeWithComponent(
      "settings",
      { "language": this.languageKey },
      import_uicore_ts12.YES
    ).applyByReplacingCurrentRouteInHistory();
  }
  get externalServiceIdentifier() {
    const result = JSON.parse(localStorage.getItem("CBExternalServiceIdentifier"));
    return result;
  }
  set externalServiceIdentifier(externalServiceIdentifier) {
    localStorage.setItem("CBExternalServiceIdentifier", JSON.stringify(externalServiceIdentifier));
  }
  reloadSocketConnection() {
    this.socketClient.socket.disconnect();
    const messagesToBeSent = this.socketClient._messagesToBeSent.filter(function(messageItem, index, array) {
      return !messageItem.isBoundToUserWithID || messageItem.isBoundToUserWithID == _CBCore.sharedInstance.userProfile._id;
    });
    this._socketClient = new CBSocketClient(this);
    this._socketClient._messagesToBeSent = messagesToBeSent;
    const socketClient = this._socketClient;
    this._models.forEach(function(model, index, array) {
      model.setSocketClient(socketClient);
    });
    this._functionsToCallForEachSocketClient.forEach(function(functionToCall, index, array) {
      functionToCall();
    });
  }
  callFunctionForEachSocketClient(functionToCall) {
    this._functionsToCallForEachSocketClient.push(functionToCall);
    functionToCall();
  }
};
var CBCore = _CBCore;
CBCore.broadcastEventName = {
  "userDidLogIn": "UserDidLogIn",
  "userDidLogOut": "UserDidLogOut"
};

// scripts/InformationViewController.ts
var import_uicore_ts13 = __toESM(require_compiledScripts());
var _InformationViewController = class extends import_uicore_ts13.UIViewController {
  constructor(view) {
    super(view);
    this.view.backgroundColor = import_uicore_ts13.UIColor.whiteColor;
  }
  handleRoute(route) {
    return __async(this, null, function* () {
      __superGet(_InformationViewController.prototype, this, "handleRoute").call(this, route);
      CBCore.sharedInstance.didSetLanguageKey();
      const inquiryComponent = route.componentWithName(_InformationViewController.routeComponentName);
      const key = inquiryComponent.parameters[_InformationViewController.ParameterIdentifierName.key];
      this.view.setInnerHTML(key, "Failed to load data for key");
      this.view.setNeedsLayoutUpToRootView();
      const imgLoad = imagesLoaded(this.view.viewHTMLElement);
      const imagesDidLoad = function(instance) {
        console.log("ALWAYS - all images have been loaded");
        this.view.setNeedsLayoutUpToRootView();
        imgLoad.off("always", imagesDidLoad);
      }.bind(this);
      imgLoad.on("always", imagesDidLoad);
    });
  }
  updateViewConstraints() {
    super.updateViewConstraints();
  }
  updateViewStyles() {
    super.updateViewStyles();
  }
  viewDidLayoutSubviews() {
    super.viewDidLayoutSubviews();
  }
  layoutViewSubviews() {
    super.layoutViewSubviews();
    const padding = RootViewParameters.paddingLength;
    const labelHeight = padding;
    const bounds = this.view.bounds.rectangleWithInset(padding);
  }
};
var InformationViewController = _InformationViewController;
InformationViewController.routeComponentName = "information";
InformationViewController.ParameterIdentifierName = {
  "key": "key"
};

// scripts/InternalDropdownSettingsViewController.ts
var import_uicore_ts19 = __toESM(require_compiledScripts());

// scripts/Custom components/CBCheckbox.ts
var import_uicore_ts14 = __toESM(require_compiledScripts());
var _CBCheckbox = class extends import_uicore_ts14.UIView {
  constructor(elementID) {
    super(elementID, import_uicore_ts14.nil, "label");
  }
  initView(elementID, viewHTMLElement) {
    super.initView(elementID, viewHTMLElement);
    this.checkbox = new import_uicore_ts14.UIView(elementID + "Checkbox", import_uicore_ts14.nil, "input");
    this.checkbox.viewHTMLElement.setAttribute("type", "checkbox");
    this.addSubview(this.checkbox);
    this.titleLabel = new import_uicore_ts14.UITextView(elementID + "TitleLabel", import_uicore_ts14.UITextView.type.span);
    this.addSubview(this.titleLabel);
    this.checkbox.userInteractionEnabled = import_uicore_ts14.NO;
    this.titleLabel.userInteractionEnabled = import_uicore_ts14.NO;
    this.titleLabel.style.overflow = "visible";
    this.titleLabel.style.lineHeight = "1.5";
    this.style.cursor = "pointer";
    this.viewHTMLElement.onchange = (event2) => {
      this.sendControlEventForKey(_CBCheckbox.controlEvent.SelectionChange, event2);
    };
  }
  get isStatic() {
    const result = this.checkbox.viewHTMLElement.classList.contains("staticCheckbox");
    return result;
  }
  set isStatic(isStatic) {
    if (isStatic) {
      this.checkbox.viewHTMLElement.classList.add("staticCheckbox");
    } else {
      this.checkbox.viewHTMLElement.classList.remove("staticCheckbox");
    }
  }
  get selected() {
    return this.checkbox.viewHTMLElement.checked;
  }
  set selected(selected) {
    this.checkbox.viewHTMLElement.checked = selected;
  }
  layoutSubviews() {
    super.layoutSubviews();
    const titleWidth = this.bounds.width - 35;
    this.titleLabel.setMaxSizes(import_uicore_ts14.nil, titleWidth);
    this.titleLabel.textPrefix = '<span style="position: absolute; overflow: hidden; left: 0; top: 0;text-overflow: ellipsis; white-space: pre; padding-left: 35px; width: ' + titleWidth + 'px;">';
    this.titleLabel.textSuffix = "</span>";
    this.hoverText = this.titleLabel.text.replace(
      this.titleLabel.textPrefix,
      ""
    ).replace(this.titleLabel.textSuffix, "");
  }
};
var CBCheckbox = _CBCheckbox;
CBCheckbox.controlEvent = Object.assign({}, import_uicore_ts14.UIView.controlEvent, {
  "SelectionChange": "SelectionChange"
});

// scripts/Custom components/CBTextField.ts
var import_uicore_ts15 = __toESM(require_compiledScripts());
var CBTextField = class extends import_uicore_ts15.UIView {
  constructor(elementID) {
    super(elementID);
  }
  initView(elementID, viewHTMLElement) {
    super.initView(elementID, viewHTMLElement);
    viewHTMLElement.classList.add("input");
    this.textField = new import_uicore_ts15.UITextField(elementID + "TextField");
    this.addSubview(this.textField);
    this.titleLabel = new import_uicore_ts15.UITextView(elementID + "TitleLabel", import_uicore_ts15.UITextView.type.label);
    this.titleLabel.textColor = import_uicore_ts15.UIColor.greyColor;
    this.titleLabel.style.fontStyle = "italic";
    this.addSubview(this.titleLabel);
    this.titleLabel.viewHTMLElement.setAttribute("for", this.textField.elementID);
    this.textField.addTargetForControlEvent(import_uicore_ts15.UIView.controlEvent.Focus, (event2) => {
      this.titleLabel.viewHTMLElement.classList.add("active");
      this.titleLabel.textColor = CBColor.primaryTintColor;
    });
    this.textField.addTargetForControlEvent(import_uicore_ts15.UIView.controlEvent.Blur, (event2) => {
      if ((0, import_uicore_ts15.IS_NOT)(this.text)) {
        this.titleLabel.viewHTMLElement.classList.remove("active");
      }
      this.titleLabel.textColor = import_uicore_ts15.UIColor.greyColor;
    });
    this.textField.style.webkitUserSelect = "text";
  }
  setPlaceholderText(key, defaultString, parameters) {
    this.titleLabel.setText(key, defaultString, parameters);
  }
  set placeholderText(placeholderText) {
    this.titleLabel.text = placeholderText;
  }
  get placeholderText() {
    return this.titleLabel.text;
  }
  get text() {
    return this.textField.text;
  }
  set text(text) {
    if ((0, import_uicore_ts15.IS_NOT)(text)) {
      text = "";
    }
    this.textField.text = text;
    if ((0, import_uicore_ts15.IS)(this.text)) {
      this.titleLabel.viewHTMLElement.classList.add("active");
    } else {
      this.titleLabel.viewHTMLElement.classList.remove("active");
    }
  }
  updateContentForCurrentEnabledState() {
    this.userInteractionEnabled = this.enabled;
    if (this.enabled) {
      this.alpha = 1;
    } else {
      this.alpha = 0.5;
    }
  }
  didMoveToSuperview(superview) {
    super.didMoveToSuperview(superview);
    this.text = this.text;
  }
  set enabled(enabled) {
    super.enabled = enabled;
    if ((0, import_uicore_ts15.IS_NOT)(enabled)) {
      this.textField.viewHTMLElement.setAttribute("readonly", "" + !enabled);
    } else {
      this.textField.viewHTMLElement.removeAttribute("readonly");
    }
  }
  get enabled() {
    return super.enabled;
  }
  focus() {
    this.textField.focus();
  }
  blur() {
    this.textField.blur();
  }
};

// scripts/Custom components/SearchableDropdown.ts
var import_uicore_ts18 = __toESM(require_compiledScripts());

// scripts/Custom components/SearchableDropdownRow.ts
var import_uicore_ts16 = __toESM(require_compiledScripts());
var _SearchableDropdownRow = class extends import_uicore_ts16.UIButton {
  constructor(elementID) {
    super(elementID);
    this.type = _SearchableDropdownRow.type.selectableItem;
  }
  initView(elementID, viewHTMLElement, initViewData) {
    super.initView(elementID, viewHTMLElement, initViewData);
    this._checkbox = new CBCheckbox(elementID + "Checkbox");
    this._checkbox.userInteractionEnabled = import_uicore_ts16.NO;
    this.addSubview(this._checkbox);
    this.style.outline = "none";
  }
  set titleText(titleText) {
    this.titleLabel.text = titleText;
    this._checkbox.titleLabel.text = titleText;
  }
  get titleText() {
    return this.titleLabel.text;
  }
  set selected(selected) {
    super.selected = selected;
    this._checkbox.selected = selected;
  }
  get selected() {
    return super.selected;
  }
  set focused(focused) {
    this._focused = focused;
    this.updateContentForCurrentState();
  }
  get focused() {
    return this._focused;
  }
  updateContentForNormalState() {
    if (this.type == _SearchableDropdownRow.type.sectionTitle) {
      this.backgroundColor = import_uicore_ts16.UIColor.transparentColor;
      this.titleLabel.textColor = CBColor.primaryContentColor.colorWithAlpha(0.5);
      this.style.borderTop = "1px solid rgba(0, 0, 0, 0.3)";
      this.titleLabel.style.marginLeft = "";
      this.textSuffix = "";
      if (this._checkbox) {
        this._checkbox.hidden = import_uicore_ts16.YES;
      }
      this.titleLabel.hidden = import_uicore_ts16.NO;
    } else if (this.type == _SearchableDropdownRow.type.selectedItem) {
      this.backgroundColor = import_uicore_ts16.UIColor.transparentColor;
      this.titleLabel.textColor = CBColor.primaryTintColor;
      this.style.borderTop = "";
      this.textSuffix = "";
      if (this._checkbox) {
        this._checkbox.hidden = import_uicore_ts16.NO;
        this._checkbox.titleLabel.textColor = CBColor.primaryContentColor;
      }
      this.titleLabel.hidden = import_uicore_ts16.YES;
    } else if (this.type == _SearchableDropdownRow.type.customItem) {
      this.backgroundColor = import_uicore_ts16.UIColor.transparentColor;
      this.titleLabel.textColor = CBColor.primaryTintColor;
      this.style.borderTop = "1px solid rgba(0, 0, 0, 0.3)";
      this.titleLabel.style.marginLeft = "";
      this.textSuffix = LanguageService.stringForKey(
        "searchableDropdownCustomItem",
        LanguageService.currentLanguageKey,
        "-Custom item"
      );
      if (this._checkbox) {
        this._checkbox.hidden = import_uicore_ts16.YES;
      }
      this.titleLabel.hidden = import_uicore_ts16.NO;
    } else {
      this.backgroundColor = import_uicore_ts16.UIColor.transparentColor;
      this.titleLabel.textColor = CBColor.primaryTintColor;
      this.style.borderTop = "";
      this.titleLabel.style.marginLeft = "20px";
      this.textSuffix = "";
      if (this._checkbox) {
        this._checkbox.hidden = import_uicore_ts16.YES;
      }
      this.titleLabel.hidden = import_uicore_ts16.NO;
    }
    this.userInteractionEnabled = import_uicore_ts16.YES;
  }
  get textSuffix() {
    return this.titleLabel.textSuffix;
  }
  set textSuffix(textSuffix) {
    this.titleLabel.textSuffix = textSuffix;
    this._checkbox.titleLabel.textSuffix = textSuffix;
  }
  updateContentForHoveredState() {
    this.backgroundColor = CBColor.primaryContentColor.colorWithAlpha(0.05);
  }
  updateContentForHighlightedState() {
    this.backgroundColor = CBColor.primaryContentColor.colorWithAlpha(0.08);
  }
  updateContentForFocusedState() {
    this.backgroundColor = CBColor.primaryContentColor.colorWithAlpha(0.08);
  }
  updateContentForSelectedState() {
    this.updateContentForNormalState();
    if (this.type == _SearchableDropdownRow.type.selectableItem || this.type == _SearchableDropdownRow.type.customItem) {
      this._checkbox.hidden = import_uicore_ts16.NO;
      this._checkbox.titleLabel.textColor = CBColor.primaryTintColor;
      this._titleLabel.hidden = import_uicore_ts16.YES;
    }
  }
  wasRemovedFromViewTree() {
    super.wasRemovedFromViewTree();
    this.highlighted = import_uicore_ts16.NO;
    this.hovered = import_uicore_ts16.NO;
  }
  layoutSubviews() {
    super.layoutSubviews();
    if (this._checkbox) {
      this._checkbox.style.top = "25%";
      this._checkbox.style.height = "30px";
      this._checkbox.style.left = "" + this.contentPadding + "px";
      this._checkbox.style.right = "" + this.contentPadding + "px";
    }
  }
};
var SearchableDropdownRow = _SearchableDropdownRow;
SearchableDropdownRow.type = {
  "sectionTitle": "SectionTitle",
  "selectedItem": "SelectedItem",
  "selectableItem": "SelectableItem",
  "customItem": "CustomItem"
};

// scripts/Custom components/SearchTextField.ts
var import_uicore_ts17 = __toESM(require_compiledScripts());
var SearchTextField = class extends import_uicore_ts17.UIView {
  constructor(elementID) {
    super(elementID);
  }
  initView(elementID, viewHTMLElement) {
    super.initView(elementID, viewHTMLElement);
    viewHTMLElement.classList.add("input", "input--search");
    viewHTMLElement.innerHTML = '            <button type="button" class="input__button">                <i class="material-icons">search</i>            </button>            <input type="search" class="input__field" placeholder="Search">';
    this._textField = new import_uicore_ts17.UIView(import_uicore_ts17.nil, this.textFieldElement);
    this._searchButton = new import_uicore_ts17.UIView(import_uicore_ts17.nil, this.searchButtonElement);
    this._searchButton.addTargetForControlEvents([
      import_uicore_ts17.UIView.controlEvent.EnterDown,
      import_uicore_ts17.UIView.controlEvent.PointerUpInside
    ], function(sender, event2) {
      this.performSearch();
    }.bind(this));
    this._textField.addTargetForControlEvent(
      import_uicore_ts17.UIView.controlEvent.EnterDown,
      function(sender, event2) {
        this.performSearch();
      }.bind(this)
    );
    this._textField.viewHTMLElement.oninput = function(event2) {
      this._textField.sendControlEventForKey(import_uicore_ts17.UITextField.controlEvent.TextChange, event2);
    }.bind(this);
  }
  get searchButtonElement() {
    return this.viewHTMLElement.querySelector("button");
  }
  get textFieldElement() {
    return this.viewHTMLElement.querySelector("input");
  }
  set placeholderText(placeholderText) {
    this.textFieldElement.setAttribute("placeholder", placeholderText);
  }
  get placeholderText() {
    return this.textFieldElement.getAttribute("placeholder");
  }
  get text() {
    return this.textFieldElement.value;
  }
  set text(text) {
    this.textFieldElement.value = text;
  }
  focus() {
    this.textFieldElement.focus();
  }
  blur() {
    this.textFieldElement.blur();
  }
  performSearch() {
  }
  layoutSubviews() {
    super.layoutSubviews();
  }
};

// scripts/Custom components/SearchableDropdown.ts
var _SearchableDropdown = class extends import_uicore_ts18.UIButton {
  constructor(elementID) {
    super(elementID);
    this._data = [];
    this._filteredData = [];
    this._excludedData = [];
    this.tintColor = CBColor.primaryTintColor;
    this.selectedIndices = [];
    this._selectedData = [];
    this._drawingData = [];
    this._isDrawingDataValid = import_uicore_ts18.NO;
    this.isSingleSelection = import_uicore_ts18.NO;
    this.showsSelectedSectionInMultipleSelectionMode = import_uicore_ts18.NO;
    this.allowsCustomItem = import_uicore_ts18.NO;
    this.keepFocusedRowVisible = import_uicore_ts18.YES;
  }
  initView(elementID, viewHTMLElement, initViewData) {
    super.initView(elementID, viewHTMLElement, initViewData);
    this._titleLabel.text = "Current value";
    this._titleLabel.textAlignment = import_uicore_ts18.UITextView.textAlignment.left;
    this.overflowLabel = new import_uicore_ts18.UITextView(elementID + "OverflowLabel");
    this.overflowLabel.textColor = CBColor.primaryContentColor;
    this.overflowLabel.textAlignment = import_uicore_ts18.UITextView.textAlignment.right;
    this.addSubview(this.overflowLabel);
    this._rightImageView = new import_uicore_ts18.UIImageView(this.elementID + "RightImageView");
    this._rightImageView.imageSource = "images/baseline-arrow_drop_down-24px.svg";
    this._rightImageView.userInteractionEnabled = import_uicore_ts18.NO;
    this.addSubview(this._rightImageView);
    this.setNeedsLayout();
    this._containerView = new import_uicore_ts18.UIView(elementID + "ContainerView");
    this._containerView.style.boxShadow = "0 9px 13px 0 rgba(0,0,0,0.26)";
    this._containerView.style.borderRadius = "2px";
    this._searchTextField = new SearchTextField(elementID + "SearchTextField");
    this._searchTextField.placeholderText = LanguageService.stringForKey(
      "searchableDropdownSearch",
      LanguageService.currentLanguageKey,
      "Search"
    );
    this._containerView.addSubview(this._searchTextField);
    this._searchTextField._textField.addTargetForControlEvent(
      import_uicore_ts18.UITextField.controlEvent.TextChange,
      function(sender, event2) {
        this.updateFilteredData(this._searchTextField.text);
      }.bind(this)
    );
    this._searchTextField._textField.addTargetForControlEvent(
      import_uicore_ts18.UIView.controlEvent.EscDown,
      function(sender, event2) {
        if ((0, import_uicore_ts18.IS)(this._searchTextField.text)) {
          this._searchTextField.text = "";
          this.updateFilteredData("");
        } else {
          this._dialogView.dismiss(import_uicore_ts18.YES);
        }
      }.bind(this)
    );
    this._searchTextField._textField.addTargetForControlEvent(
      import_uicore_ts18.UIView.controlEvent.DownArrowDown,
      function(sender, event2) {
        if (this.focusedRowIndex < this.drawingData.length - 1) {
          this.focusedRowIndex = this.focusedRowIndex + 1;
        }
      }.bind(this)
    );
    this._searchTextField._textField.addTargetForControlEvent(
      import_uicore_ts18.UIView.controlEvent.UpArrowDown,
      function(sender, event2) {
        if (this.focusedRowIndex > 0) {
          this.focusedRowIndex = this.focusedRowIndex - 1;
        }
      }.bind(this)
    );
    this._searchTextField._textField.addTargetForControlEvent(
      import_uicore_ts18.UIView.controlEvent.EnterDown,
      function(sender, event2) {
        const isTouchDevice = "ontouchstart" in document.documentElement;
        if (isTouchDevice) {
          this._searchTextField.blur();
          return;
        }
        const datapoint = this.drawingData[this.focusedRowIndex];
        const alreadySelected = this.selectedDataContains(datapoint);
        if (alreadySelected) {
          this.selectedData.removeElement(datapoint);
        } else if (this.isSingleSelection) {
          this.selectedIndices = [this.focusedRowIndex];
          this.selectedData = [datapoint];
          this.selectionDidChange(this.selectedData);
          this.updateContentForCurrentSelection();
          this._dialogView.dismiss();
        } else {
          this.selectedData.push(datapoint);
        }
      }.bind(this)
    );
    this._tableView = new import_uicore_ts18.UITableView(elementID + "TableView");
    this._containerView.addSubview(this._tableView);
    this._tableView.backgroundColor = import_uicore_ts18.UIColor.whiteColor;
    this._dialogView = new import_uicore_ts18.UIDialogView(elementID + "DialogView");
    this._dialogView.view = this._containerView;
    this._dialogView.backgroundColor = import_uicore_ts18.UIColor.transparentColor;
    this.addTargetForControlEvents([
      import_uicore_ts18.UIView.controlEvent.PointerUpInside,
      import_uicore_ts18.UIView.controlEvent.EnterDown
    ], function(sender, event2) {
      if (this._dialogView.isVisible) {
        this.closeDropdown();
      } else {
        this.openDropdown();
      }
    }.bind(this));
    this._dialogView.addTargetForControlEvent(
      import_uicore_ts18.UIView.controlEvent.PointerDown,
      function(sender, event2) {
        if (sender.viewHTMLElement == event2.target) {
          sender.dismiss();
        }
      }
    );
    const dialogLayoutFunction = this._dialogView.layoutSubviews;
    this._dialogView.layoutSubviews = function() {
      this._dialogView.frame = this.rootView.bounds;
      const padding = RootViewParameters.paddingLength;
      const labelHeight = padding;
      const searchTextFieldHeight = this.bounds.height;
      this._containerView.frame = this.superview.rectangleInView(this.frame, this.rootView).rectangleWithHeight(this.expandedContainerViewHeight);
      this._searchTextField.frame = this._containerView.bounds.rectangleWithHeight(searchTextFieldHeight).rectangleWithInsets(
        0,
        16,
        0,
        0
      );
      this._tableView.frame = this._containerView.bounds.rectangleWithInsets(0, 0, 0, searchTextFieldHeight);
    }.bind(this);
    this._tableView.numberOfRows = function() {
      var result = this.drawingData.length;
      if ((0, import_uicore_ts18.IS_NOT)(this.isSingleSelection) && this.showsSelectedSectionInMultipleSelectionMode) {
        result = result + this.selectedData.length;
      }
      return result;
    }.bind(this);
    const newReusableViewForIdentifierFunction = this._tableView.newReusableViewForIdentifier.bind(this._tableView);
    this._tableView.newReusableViewForIdentifier = function(identifier, rowIndex) {
      const view = new SearchableDropdownRow(elementID + identifier + rowIndex);
      view.stopsPointerEventPropagation = import_uicore_ts18.NO;
      view.pausesPointerEvents = import_uicore_ts18.NO;
      return view;
    }.bind(this);
    const viewForSelectedItemRow = function(index) {
      const view = this._tableView.reusableViewForIdentifier("SelectedItemRow", index);
      view.titleLabel.text = LanguageService.stringForCurrentLanguage(this.selectedData[index].title);
      view.selected = import_uicore_ts18.YES;
      return view;
    }.bind(this);
    this._tableView.viewForRowWithIndex = function(index) {
      const view = this._tableView.reusableViewForIdentifier("SubjectView", index);
      view.style.borderBottomColor = "";
      view.style.borderBottomStyle = "";
      view.style.borderBottomWidth = "";
      const rowWasHovered = function(sender, event2) {
        this.focusedRowIndex = index;
      }.bind(this);
      view.addTargetForControlEvent(import_uicore_ts18.UIButton.controlEvent.PointerHover, rowWasHovered);
      view.removeTargetForControlEvent(
        import_uicore_ts18.UIButton.controlEvent.PointerHover,
        view._SearchableDropdownRowWasHoveredFunction
      );
      view._SearchableDropdownRowWasHoveredFunction = rowWasHovered;
      view.focused = this.focusedRowIndex == index;
      if (!this.isSingleSelection && this.showsSelectedSectionInMultipleSelectionMode) {
        if (index < this.selectedData.length) {
          view.type = SearchableDropdownRow.type.selectedItem;
          view.titleText = LanguageService.stringForCurrentLanguage(this.selectedData[index].title);
          view.selected = import_uicore_ts18.YES;
          view.updateContentForCurrentState();
          if (index == this.selectedData.length - 1) {
            view.style.borderBottomColor = import_uicore_ts18.UIColor.colorWithRGBA(100, 100, 100).stringValue;
            view.style.borderBottomStyle = "solid";
            view.style.borderBottomWidth = "1px";
          }
          var viewWasTapped = function(sender, event2) {
            this.selectedIndices.removeElementAtIndex(index);
            const selectedItem = this.selectedData[index];
            this.selectedData.removeElement(selectedItem);
            view.selected = import_uicore_ts18.NO;
            this.selectionDidChange(this.selectedData);
            this.updateContentForCurrentSelection();
            this._searchTextField.focus();
            if (view.viewWasTappedFunction) {
              view.removeTargetForControlEvents([
                import_uicore_ts18.UIView.controlEvent.EnterDown,
                import_uicore_ts18.UIView.controlEvent.PointerTap
              ], view.viewWasTappedFunction);
            }
          }.bind(this);
          if (view.viewWasTappedFunction) {
            view.removeTargetForControlEvents([
              import_uicore_ts18.UIView.controlEvent.EnterDown,
              import_uicore_ts18.UIView.controlEvent.PointerTap
            ], view.viewWasTappedFunction);
          }
          view.addTargetForControlEvents([
            import_uicore_ts18.UIView.controlEvent.EnterDown,
            import_uicore_ts18.UIView.controlEvent.PointerTap
          ], viewWasTapped);
          view.viewWasTappedFunction = viewWasTapped;
          return view;
        }
        index = index - this.selectedData.length;
      }
      const datapoint = this.drawingData[index];
      if ((0, import_uicore_ts18.IS_NOT)(datapoint)) {
        return;
      }
      if (datapoint.isADropdownDataSection) {
        view.type = SearchableDropdownRow.type.sectionTitle;
        view.userInteractionEnabled = import_uicore_ts18.NO;
      } else {
        view.type = SearchableDropdownRow.type.selectableItem;
        view.userInteractionEnabled = import_uicore_ts18.YES;
      }
      if (datapoint._id == (this._customItem || import_uicore_ts18.nil)._id) {
        view.type = SearchableDropdownRow.type.customItem;
      }
      view.updateContentForNormalState();
      view.updateContentForCurrentState();
      view.titleText = LanguageService.stringForCurrentLanguage(datapoint.title);
      view.titleLabel.textAlignment = import_uicore_ts18.UITextView.textAlignment.left;
      view.selected = this.selectedRowIdentifiers.contains(datapoint._id);
      var viewWasTapped = function(sender, event2) {
        if (view.selected) {
          this.selectedIndices.removeElement(index);
          this.selectedData.removeElement(datapoint);
        } else {
          if (this.isSingleSelection) {
            this.selectedIndices = [index];
            this.selectedData = [datapoint];
            this.selectionDidChange(this.selectedData);
            this.updateContentForCurrentSelection();
            this._dialogView.dismiss();
            return;
          } else {
            this.selectedIndices.push(index);
            this.selectedData.push(datapoint);
          }
        }
        const selectedData = this.selectedData;
        if (!view.selected) {
          view.selected = import_uicore_ts18.YES;
          this.performFunctionWithDelay(0.25, function() {
            this.selectionDidChange(selectedData);
            this.updateContentForCurrentSelection();
            if (this.showsSelectedSectionInMultipleSelectionMode) {
              this._tableView.contentOffset = this._tableView.contentOffset.pointByAddingY(view.frame.height);
            }
          }.bind(this));
        } else {
          view._checkbox.selected = import_uicore_ts18.NO;
          this.selectionDidChange(selectedData);
          this.performFunctionWithDelay(0.15, function() {
            view.selected = import_uicore_ts18.NO;
            this.updateContentForCurrentSelection();
            if (this.showsSelectedSectionInMultipleSelectionMode) {
              this._tableView.contentOffset = this._tableView.contentOffset.pointByAddingY(-view.frame.height);
            }
          }.bind(this));
        }
        this._searchTextField.focus();
      }.bind(this);
      if (view.viewWasTappedFunction) {
        view.removeTargetForControlEvents([
          import_uicore_ts18.UIView.controlEvent.EnterDown,
          import_uicore_ts18.UIView.controlEvent.PointerUpInside
        ], view.viewWasTappedFunction);
      }
      view.addTargetForControlEvents([
        import_uicore_ts18.UIView.controlEvent.EnterDown,
        import_uicore_ts18.UIView.controlEvent.PointerUpInside
      ], viewWasTapped);
      view.viewWasTappedFunction = viewWasTapped;
      return view;
    }.bind(this);
    this._keyValueStringFilter = new import_uicore_ts18.UIKeyValueStringFilter();
  }
  openDropdown() {
    this._dialogView.showInView(this.rootView, import_uicore_ts18.YES);
    this._searchTextField.focus();
  }
  closeDropdown() {
    this._dialogView.dismiss(import_uicore_ts18.YES);
  }
  boundsDidChange() {
    super.boundsDidChange();
    this.setNeedsLayout();
  }
  set dropdownCode(dropdownCode) {
    this._dropdownCode = dropdownCode;
    this.fetchDropdownDataForCode(dropdownCode);
  }
  get dropdownCode() {
    return this._dropdownCode;
  }
  fetchDropdownDataForCode(dropdownCode) {
    CBCore.sharedInstance.socketClient.sendMessageForKeyWithPolicy(
      "RetrieveDropdownDataForCode",
      dropdownCode,
      CBSocketClient.completionPolicy.storedOrFirst,
      function(responseMessage) {
        if ((0, import_uicore_ts18.IS)(responseMessage)) {
        } else {
          return;
        }
        const dropdownData = [];
        responseMessage.data.forEach(function(sectionOrRow, index, array) {
          if (sectionOrRow.isADropdownDataSection) {
            const dataSection = {
              _id: sectionOrRow._id,
              title: sectionOrRow.title,
              rowsData: [],
              isADropdownDataSection: import_uicore_ts18.YES,
              isADropdownDataRow: import_uicore_ts18.NO,
              attachedObject: sectionOrRow.attachedObject,
              itemCode: sectionOrRow.itemCode,
              dropdownCode: sectionOrRow.dropdownCode
            };
            const rowsData = dataSection.rowsData;
            sectionOrRow.rowsData.forEach(function(rowData, index2, array2) {
              rowsData.push({
                _id: rowData._id,
                title: rowData.title,
                isADropdownDataSection: import_uicore_ts18.NO,
                isADropdownDataRow: import_uicore_ts18.YES,
                attachedObject: rowData.attachedObject,
                itemCode: rowData.itemCode,
                dropdownCode: rowData.dropdownCode
              });
            });
            dataSection.rowsData = rowsData;
            dropdownData.push(dataSection);
          } else {
            dropdownData.push({
              _id: sectionOrRow._id,
              title: sectionOrRow.title,
              isADropdownDataRow: import_uicore_ts18.YES,
              itemCode: sectionOrRow.itemCode,
              dropdownCode: sectionOrRow.dropdownCode,
              attachedObject: sectionOrRow.attachedObject
            });
          }
        });
        this.data = dropdownData;
        this.didLoadDataForDropdownCode();
      }.bind(this)
    );
  }
  didLoadDataForDropdownCode() {
  }
  get focusedRowIndex() {
    return this._focusedRowIndex;
  }
  set focusedRowIndex(focusedRowIndex) {
    const previousFocusedRowIndex = this.focusedRowIndex;
    this._focusedRowIndex = focusedRowIndex;
    if (previousFocusedRowIndex != focusedRowIndex) {
      this._tableView.visibleRowWithIndex(previousFocusedRowIndex).focused = import_uicore_ts18.NO;
      const focusedRow = this._tableView.visibleRowWithIndex(this.focusedRowIndex);
      focusedRow.focused = import_uicore_ts18.YES;
      if (!this.keepFocusedRowVisible) {
        return;
      }
      var contentOffset = this._tableView.contentOffset;
      if (focusedRow.frame.y < contentOffset.y) {
        contentOffset.y = focusedRow.frame.y;
      }
      if (focusedRow.frame.max.y > contentOffset.y + this._tableView.bounds.height) {
        contentOffset = contentOffset.pointByAddingY(-(contentOffset.y + this._tableView.bounds.height - focusedRow.frame.max.y));
      }
      const animationDuration = this._tableView.animationDuration;
      this._tableView.animationDuration = 0;
      this._tableView.contentOffset = contentOffset;
      this._tableView.animationDuration = animationDuration;
    }
  }
  set expandedContainerViewHeight(expandedContainerViewHeight) {
    this._expandedContainerViewHeight = expandedContainerViewHeight;
    this._dialogView.setNeedsLayout();
  }
  get expandedContainerViewHeight() {
    if ((0, import_uicore_ts18.IS)(this._expandedContainerViewHeight)) {
      return this._expandedContainerViewHeight;
    }
    const padding = RootViewParameters.paddingLength;
    const labelHeight = padding;
    const result = this.superview.bounds.height - this.frame.max.y - padding;
    return result;
  }
  selectedDataContains(datapoint) {
    for (var i = 0; i < this.selectedData.length; i++) {
      const value = this.selectedData[i];
      if (value._id == datapoint._id) {
        return import_uicore_ts18.YES;
      }
    }
    return import_uicore_ts18.NO;
  }
  updateContentForNormalState() {
    this.style.borderBottom = "1px solid rgba(0,0,0,0.12)";
    this.titleLabel.textColor = CBColor.primaryContentColor;
    this.backgroundColor = import_uicore_ts18.UIColor.transparentColor;
    this.style.borderBottomColor = CBColor.primaryContentColor.colorWithAlpha(0.12).stringValue;
  }
  updateContentForHighlightedState() {
    this.style.borderBottomWidth = "2px";
    this.style.borderBottomColor = this.tintColor.stringValue;
  }
  selectionDidChange(selectedRows) {
    this.updateTitleWithSelection(selectedRows);
    this.sendControlEventForKey(_SearchableDropdown.controlEvent.SelectionDidChange, import_uicore_ts18.nil);
  }
  updateContentForCurrentSelection() {
    this._tableView.reloadData();
    this.setNeedsLayout();
  }
  get placeholderText() {
    if ((0, import_uicore_ts18.IS_UNDEFINED)(this._placeholderText)) {
      this._placeholderText = "Not selected";
    }
    return this._placeholderText;
  }
  set placeholderText(placeholderText) {
    this._placeholderText = placeholderText;
    this.updateTitleWithSelection(this.selectedData);
  }
  setPlaceholderText(key, defaultString, parameters) {
    this.placeholderLocalizedTextObject = LanguageService.localizedTextObjectForKey(key, defaultString, parameters);
  }
  get placeholderLocalizedTextObject() {
    if ((0, import_uicore_ts18.IS_UNDEFINED)(this._placeholderLocalizedTextObject)) {
      this._placeholderLocalizedTextObject = LanguageService.localizedTextObjectForKey(
        "searchableDropdownNotSelected"
      );
    }
    return this._placeholderLocalizedTextObject;
  }
  set placeholderLocalizedTextObject(placeholderText) {
    this._placeholderLocalizedTextObject = placeholderText;
    this.updateTitleWithSelection(this.selectedData);
  }
  updateTitleWithSelection(selectedRows) {
    this.titleLabel.localizedTextObject = this.placeholderLocalizedTextObject;
    if (selectedRows && selectedRows.length) {
      const maxWidth = this.titleLabel.bounds.width;
      this.titleLabel.localizedTextObject = import_uicore_ts18.nil;
      this.titleLabel.text = "";
      var stopLooping = import_uicore_ts18.NO;
      selectedRows.forEach(function(selectedDatapoint, index, array) {
        if (stopLooping) {
          return;
        }
        var selectedString = LanguageService.stringForCurrentLanguage(selectedDatapoint.title);
        if (index) {
          selectedString = ", " + selectedString;
        }
        const previousText = this.titleLabel.text;
        this.titleLabel.text = this.titleLabel.text + selectedString;
        this.overflowLabel.text = "+" + (array.length - index - 1);
        if (index == array.length - 1) {
          this.overflowLabel.text = "";
        }
        if (index && this.bounds.width - (this.overflowLabel.intrinsicContentWidth() + this.titleLabel.intrinsicContentWidth()) - 20 < 0) {
          this.titleLabel.text = previousText;
          this.overflowLabel.text = "+" + (array.length - index - 2 * 0);
          stopLooping = import_uicore_ts18.YES;
        }
      }, this);
    }
  }
  updateFilteredData(filteringString) {
    this._filteredData = [];
    this.data.forEach(function(sectionOrRow, index, array) {
      if (LanguageService.stringForCurrentLanguage(sectionOrRow.title).toLowerCase().contains(filteringString.toLowerCase())) {
        this.filteredData.push(sectionOrRow);
      } else if (sectionOrRow.isADropdownDataSection) {
        this._keyValueStringFilter.filterData(
          filteringString,
          sectionOrRow.rowsData,
          this._excludedData,
          "title." + LanguageService.currentLanguageKey,
          sectionOrRow,
          function(filteredData, filteredIndexes, sectionFromThread) {
            if (filteredData.length) {
              this.filteredData.push({
                _id: sectionFromThread._id,
                title: sectionFromThread.title,
                rowsData: filteredData,
                isADropdownDataSection: sectionFromThread.isADropdownDataSection,
                isADropdownDataRow: sectionFromThread.isADropdownDataRow,
                attachedObject: sectionFromThread.attachedObject,
                itemCode: sectionFromThread.itemCode,
                dropdownCode: sectionFromThread.dropdownCode
              });
              if (this.allowsCustomItem && this._searchTextField.text && this._customItem) {
                this.filteredData.removeElement(this._customItem);
                this.filteredData.push(this._customItem);
              }
              this._isDrawingDataValid = import_uicore_ts18.NO;
              this._tableView.reloadData();
            }
          }.bind(this)
        );
      }
    }.bind(this));
    if (this.allowsCustomItem && this._searchTextField.text) {
      this.filteredData.removeElement(this._customItem);
      this.initCustomItemWithTitle(this._searchTextField.text);
      this.filteredData.push(this._customItem);
    }
    if (this.filteredData.length) {
      this.focusedRowIndex = 0;
    } else {
      this.focusedRowIndex = null;
    }
    this._isDrawingDataValid = import_uicore_ts18.NO;
    this._tableView.reloadData();
  }
  initCustomItemWithTitle(title) {
    if ((0, import_uicore_ts18.IS_NOT)(title)) {
      this._customItem = void 0;
    } else {
      this._customItem = {
        _id: "" + (0, import_uicore_ts18.MAKE_ID)(),
        title: LanguageService.localizedTextObjectForText(title),
        rowsData: [],
        isADropdownDataSection: import_uicore_ts18.NO,
        isADropdownDataRow: import_uicore_ts18.YES,
        attachedObject: void 0,
        itemCode: "custom_item",
        dropdownCode: this.dropdownCode
      };
    }
  }
  selectItemOrCustomItemWithTitle(title) {
    if ((0, import_uicore_ts18.IS_NOT)(title)) {
      this._customItem = void 0;
    } else {
      var item = this.drawingData.find(function(dataItem, index, array) {
        return LanguageService.stringForCurrentLanguage(dataItem.title) == title;
      });
      if (this.allowsCustomItem && (0, import_uicore_ts18.IS_NOT)(item)) {
        this._searchTextField.text = title;
        this.updateFilteredData(title);
        item = this._customItem;
      }
      if ((0, import_uicore_ts18.IS_NOT)(this.isSingleSelection)) {
        if ((0, import_uicore_ts18.IS_NOT)(this.selectedDataContains(item))) {
          const selectedItemCodes = this.selectedItemCodes.copy();
          selectedItemCodes.push(item.itemCode);
          this.selectedItemCodes = selectedItemCodes;
        }
        return;
      }
      this.selectedItemCodes = [item.itemCode];
    }
  }
  set data(data) {
    this._data = data;
    this.updateFilteredData(this._searchTextField.text);
  }
  get data() {
    return this._data;
  }
  set filteredData(data) {
    this._filteredData = data;
    this._isDrawingDataValid = import_uicore_ts18.NO;
  }
  get filteredData() {
    return this._filteredData;
  }
  get drawingData() {
    if (this._isDrawingDataValid) {
      return this._drawingData;
    }
    const result = [];
    this._filteredData.forEach(function(section) {
      result.push({
        _id: section._id,
        title: section.title,
        rowsData: null,
        isADropdownDataSection: section.isADropdownDataSection,
        isADropdownDataRow: import_uicore_ts18.NO,
        attachedObject: section.attachedObject,
        itemCode: section.itemCode,
        dropdownCode: section.dropdownCode
      });
      if (section.rowsData) {
        section.rowsData.forEach(function(row) {
          result.push(row);
        }.bind(this));
      }
    }.bind(this));
    this._drawingData = result;
    this._isDrawingDataValid = import_uicore_ts18.YES;
    return result;
  }
  get selectedData() {
    return this._selectedData;
  }
  set selectedData(selectedData) {
    this._selectedData = selectedData;
  }
  clearSelection() {
    this.selectedData = [];
    this.selectedIndices = [];
    this.updateTitleWithSelection(this.selectedData);
    this.updateContentForCurrentSelection();
    this.selectionDidChange(this.selectedData);
  }
  get selectedItemCodes() {
    return this.selectedData.map(function(item) {
      return item.itemCode;
    });
  }
  set selectedItemCodes(selectedItemCodes) {
    const selectedData = [];
    const selectedIndices = [];
    this._drawingData.forEach(function(item, index, array) {
      if (selectedItemCodes.contains(item.itemCode)) {
        selectedData.push(item);
        selectedIndices.push(index);
      }
    });
    this.selectedData = selectedData;
    this.selectedIndices = selectedIndices;
    this.updateTitleWithSelection(this.selectedData);
    this.updateContentForCurrentSelection();
    this.selectionDidChange(this.selectedData);
  }
  get selectedRowIdentifiers() {
    const result = [];
    this.selectedData.forEach(function(selectedDatapoint) {
      result.push(selectedDatapoint._id);
    }.bind(this));
    return result;
  }
  wasAddedToViewTree() {
    super.wasAddedToViewTree();
    this.setNeedsLayout();
  }
  layoutSubviews() {
    super.layoutSubviews();
    const bounds = this.bounds;
    const padding = RootViewParameters.paddingLength;
    const labelHeight = padding;
    this.updateTitleWithSelection(this.selectedData);
    if (this._rightImageView) {
      this._rightImageView.frame = bounds.rectangleWithInsets(0, padding * 0.5, 0, 0).rectangleWithWidth(24, 1).rectangleWithHeight(24, 0.5);
    }
    if (this.overflowLabel) {
      this.overflowLabel.style.width = "36px";
      this.overflowLabel.style.right = "32px";
      this.overflowLabel.centerYInContainer();
      this.titleLabel.style.marginRight = "60px";
    }
  }
};
var SearchableDropdown = _SearchableDropdown;
SearchableDropdown.controlEvent = Object.assign({}, import_uicore_ts18.UIView.controlEvent, {
  "SelectionDidChange": "SelectionDidChange"
});

// scripts/InternalDropdownSettingsViewController.ts
var _InternalDropdownSettingsViewController = class extends import_uicore_ts19.UIViewController {
  constructor(view) {
    super(view);
    this.loadSubviews();
  }
  loadSubviews() {
    this.view.backgroundColor = import_uicore_ts19.UIColor.whiteColor;
    this.titleLabel = new import_uicore_ts19.UITextView(this.view.elementID + "TitleLabel", import_uicore_ts19.UITextView.type.header2);
    this.titleLabel.text = "Internal dropdown settings";
    this.view.addSubview(this.titleLabel);
    this.dropdownCodeTextField = new CBTextField(this.view.elementID + "DropdownCodeTextField");
    this.dropdownCodeTextField.placeholderText = "Dropdown code";
    this.view.addSubview(this.dropdownCodeTextField);
    this.dropdownCodesTextArea = new import_uicore_ts19.UITextArea(this.view.elementID + "DropdownCodesTextArea");
    this.dropdownCodesTextArea.placeholderText = "Available dropdown codes";
    this.view.addSubview(this.dropdownCodesTextArea);
    this.loadButton = new CBButton(this.view.elementID + "LoadButton");
    this.loadButton.titleLabel.text = "Load";
    this.view.addSubview(this.loadButton);
    this.saveButton = new CBButton(this.view.elementID + "SaveButton");
    this.saveButton.titleLabel.setText("internalDropdownSettingsViewControllerSaveButton", "Save");
    this.view.addSubview(this.saveButton);
    this.dropdown = new SearchableDropdown(this.view.elementID + "SearchableDropdown");
    this.dropdown._controlEventTargets[import_uicore_ts19.UIView.controlEvent.PointerUpInside] = [];
    this.dropdown._controlEventTargets[import_uicore_ts19.UIView.controlEvent.EnterDown] = [];
    this.dropdown._dialogView = import_uicore_ts19.nil;
    this.dropdown.isSingleSelection = import_uicore_ts19.YES;
    this.dropdown._rightImageView.imageSource = import_uicore_ts19.nil;
    this.dropdown.keepFocusedRowVisible = import_uicore_ts19.NO;
    this.view.addSubview(this.dropdown);
    this.dropdown._tableView.style.borderWidth = "1px";
    this.dropdown._tableView.style.borderStyle = "solid";
    this.dropdown._tableView.style.borderColor = CBColor.primaryContentColor.stringValue;
    this.view.addSubview(this.dropdown._tableView);
    this.addButton = new CBButton(this.view.elementID + "AddButton");
    this.addButton.titleLabel.text = "Add row";
    this.addButton.setBackgroundColorsWithNormalColor(import_uicore_ts19.UIColor.greenColor);
    this.view.addSubview(this.addButton);
    this.deleteButton = new CBButton(this.view.elementID + "DeleteButton");
    this.deleteButton.titleLabel.text = "Delete row";
    this.deleteButton.setBackgroundColorsWithNormalColor(import_uicore_ts19.UIColor.redColor);
    this.view.addSubview(this.deleteButton);
    this.deleteDropdownButton = new CBButton(this.view.elementID + "DeleteDropdownButton");
    this.deleteDropdownButton.titleLabel.text = "Delete dropdown";
    this.deleteDropdownButton.setBackgroundColorsWithNormalColor(import_uicore_ts19.UIColor.redColor);
    this.view.addSubview(this.deleteDropdownButton);
    this.clearDropdownButton = new CBButton(this.view.elementID + "ClearDropdownButton");
    this.clearDropdownButton.titleLabel.text = "Clear dropdown";
    this.clearDropdownButton.setBackgroundColorsWithNormalColor(import_uicore_ts19.UIColor.redColor);
    this.view.addSubview(this.clearDropdownButton);
    this.itemTitleCheckbox = new CBCheckbox(this.view.elementID + "ItemTitleCheckbox");
    this.itemAttachedObjectCheckbox = new CBCheckbox(this.view.elementID + "ItemTitleCheckbox");
    this.itemTitleCheckbox.titleLabel.text = "Item title";
    this.itemAttachedObjectCheckbox.titleLabel.text = "Attached object";
    this.itemTitleCheckbox.selected = import_uicore_ts19.YES;
    this.view.addSubviews([this.itemTitleCheckbox, this.itemAttachedObjectCheckbox]);
    this.itemTitleOrAttachedObjectTextArea = new import_uicore_ts19.UITextArea(this.view.elementID + "ItemTitleOrAttachedObjectTextArea");
    this.itemTitleOrAttachedObjectTextArea.placeholderText = "Title";
    this.view.addSubview(this.itemTitleOrAttachedObjectTextArea);
    this.itemTitleJSONLabel = new import_uicore_ts19.UITextView(this.view.elementID + "ItemTitleJSONLabel");
    this.view.addSubview(this.itemTitleJSONLabel);
    this.itemTitleDidChange();
    this.isASectionCheckbox = new CBCheckbox(this.view.elementID + "IsASectionCheckbox");
    this.isASectionCheckbox.titleLabel.text = "Is a section";
    this.view.addSubview(this.isASectionCheckbox);
    this.itemCodeTextField = new CBTextField(this.view.elementID + "ItemCodeTextField");
    this.itemCodeTextField.placeholderText = "Item code";
    this.view.addSubview(this.itemCodeTextField);
    this.downButton = new CBButton(this.view.elementID + "DownButton");
    this.downButton.titleLabel.text = "Down";
    this.view.addSubview(this.downButton);
    this.upButton = new CBButton(this.view.elementID + "UpButton");
    this.upButton.titleLabel.text = "Up";
    this.view.addSubview(this.upButton);
    this.dataTextJSONLabel = new import_uicore_ts19.UITextView(this.view.elementID + "DataTextJSONLabel");
    this.dataTextJSONLabel.text = "Data in JSON format";
    this.view.addSubview(this.dataTextJSONLabel);
    this.dataTextArea = new import_uicore_ts19.UITextArea(this.view.elementID + "DataTextArea");
    this.dataTextArea.placeholderText = "Data in JSON format";
    this.view.addSubview(this.dataTextArea);
    this.loadPlainDataButton = new CBButton(this.view.elementID + "LoadPlainDataButton");
    this.loadPlainDataButton.titleLabel.text = "Load plain data";
    this.view.addSubview(this.loadPlainDataButton);
    this.loadJSONDataButton = new CBButton(this.view.elementID + "LoadJSONDataButton");
    this.loadJSONDataButton.titleLabel.text = "Load JSON data";
    this.view.addSubview(this.loadJSONDataButton);
    [
      this.itemTitleCheckbox,
      this.itemAttachedObjectCheckbox
    ].forEach(function(checkbox, index, array) {
      checkbox.addTargetForControlEvents([
        CBCheckbox.controlEvent.EnterDown,
        CBCheckbox.controlEvent.SelectionChange
      ], function(sender, event2) {
        [
          this.itemTitleCheckbox,
          this.itemAttachedObjectCheckbox
        ].forEach(function(checkboxObject, index2, array2) {
          checkboxObject.selected = checkboxObject == sender;
        });
        this.updateitemDetailsView();
      }.bind(this));
    }.bind(this));
    this.downButton.addTargetForControlEvent(
      import_uicore_ts19.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        const data = this.dropdown.drawingData;
        const rowIndex = this.dropdown.selectedIndices.firstElement;
        if (this.dropdown.selectedData.firstElement && rowIndex < data.length - 1) {
          const row = data[rowIndex];
          data.removeElementAtIndex(rowIndex);
          data.insertElementAtIndex(rowIndex + 1, row);
          this.dropdown.selectedIndices[0] = rowIndex + 1;
          this.dropdown._drawingData = data;
          this.reloadTableData();
        }
      }.bind(this)
    );
    this.upButton.addTargetForControlEvent(
      import_uicore_ts19.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        const data = this.dropdown.drawingData;
        const rowIndex = this.dropdown.selectedIndices.firstElement;
        if (this.dropdown.selectedData.firstElement && rowIndex > 0) {
          const row = data[rowIndex];
          data.removeElementAtIndex(rowIndex);
          data.insertElementAtIndex(rowIndex - 1, row);
          this.dropdown.selectedIndices[0] = rowIndex - 1;
          this.dropdown._drawingData = data;
          this.reloadTableData();
        }
      }.bind(this)
    );
    this.dropdown.addTargetForControlEvent(
      SearchableDropdown.controlEvent.SelectionDidChange,
      function(sender, event2) {
        this.updateitemDetailsView();
      }.bind(this)
    );
    this.isASectionCheckbox.addTargetForControlEvent(
      CBCheckbox.controlEvent.SelectionChange,
      function(sender, event2) {
        const selectedItem = this.dropdown.selectedData.firstElement || import_uicore_ts19.nil;
        selectedItem.isADropdownDataSection = sender.selected;
        selectedItem.isADropdownDataRow = (0, import_uicore_ts19.IS_NOT)(sender.selected);
        this.reloadTableData();
      }.bind(this)
    );
    this.itemCodeTextField.textField.addTargetForControlEvent(
      import_uicore_ts19.UITextArea.controlEvent.TextChange,
      function(sender, event2) {
        const selectedItem = this.dropdown.selectedData.firstElement || import_uicore_ts19.nil;
        selectedItem.itemCode = this.itemCodeTextField.text;
      }.bind(this)
    );
    this.itemTitleOrAttachedObjectTextArea.addTargetForControlEvent(
      import_uicore_ts19.UITextArea.controlEvent.TextChange,
      function(sender, event2) {
        if (this.itemTitleCheckbox.selected) {
          this.itemTitleDidChange();
        } else {
          this.itemAttachedObjectDidChange();
        }
        this.reloadTableData();
      }.bind(this)
    );
    this.updateAvailableCodes();
    this.loadButton.addTargetForControlEvent(
      import_uicore_ts19.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        this.loadData();
      }.bind(this)
    );
    this.saveButton.addTargetForControlEvent(
      import_uicore_ts19.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        CBCore.sharedInstance.socketClient.sendMessageForKey(
          "RetrieveDropdownCodes",
          import_uicore_ts19.nil,
          function(codes) {
            this.saveData();
          }.bind(this)
        );
      }.bind(this)
    );
    this.addButton.addTargetForControlEvent(
      import_uicore_ts19.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        const title = JSON.parse(this.itemTitleOrAttachedObjectTextArea.text);
        if ((0, import_uicore_ts19.IS_NOT)(LanguageService.stringForCurrentLanguage(title))) {
          title[LanguageService.defaultLanguageKey] = "<Title>";
        }
        const itemID = (0, import_uicore_ts19.MAKE_ID)();
        const dataRow = {
          _id: itemID,
          title,
          isADropdownDataRow: !this.isASectionCheckbox.selected,
          isADropdownDataSection: this.isASectionCheckbox.selected,
          attachedObject: void 0,
          itemCode: import_uicore_ts19.nil,
          dropdownCode: (this.dropdown.selectedData.firstElement || {}).dropdownCodes
        };
        const rowIndex = this.dropdown.selectedIndices.firstElement;
        if ((0, import_uicore_ts19.IS_DEFINED)(rowIndex)) {
          this.dropdown.drawingData.insertElementAtIndex(rowIndex + 1, dataRow);
          this.reloadTableData();
        } else {
          this.dropdown.drawingData.push(dataRow);
          this.reloadTableData();
          this.dropdown._tableView.scrollToBottom();
        }
      }.bind(this)
    );
    this.deleteButton.addTargetForControlEvent(
      import_uicore_ts19.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        const rowIndex = this.dropdown.selectedIndices.firstElement;
        if ((0, import_uicore_ts19.IS_DEFINED)(rowIndex)) {
          this.dropdown.drawingData.removeElementAtIndex(rowIndex);
          this.dropdown.selectedData.removeElementAtIndex(0);
          this.dropdown.selectedIndices.removeElementAtIndex(0);
          this.dropdown.selectionDidChange(this.dropdown.selectedData);
        }
        this.reloadTableData();
      }.bind(this)
    );
    this.deleteDropdownButton.addTargetForControlEvent(
      import_uicore_ts19.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        if (this.dropdownCodeTextField.text && confirm("Are you sure you want to delete this dropdown?")) {
          if (this.dropdownCodeTextField.text && confirm("This will REMOVE THE DROPDOWN FROM THE SERVER, are you definitely sure?")) {
            CBCore.sharedInstance.socketClient.sendMessageForKey(
              "DeleteDropdownDataForCode",
              this.dropdownCodeTextField.text,
              function() {
                this.updateAvailableCodes();
              }.bind(this)
            );
            this.dropdownCodeTextField.text = import_uicore_ts19.nil;
            this.dropdown.data = [];
            this.updateitemDetailsView();
          }
        }
      }.bind(this)
    );
    this.clearDropdownButton.addTargetForControlEvent(
      import_uicore_ts19.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        if (this.dropdownCodeTextField.text && confirm("Are you sure you want to clear this dropdown?")) {
          this.dropdown.data = [];
          this.dropdown.selectedData = [];
          this.dropdown.selectedIndices = [];
          this.updateitemDetailsView();
        }
      }.bind(this)
    );
    this.loadPlainDataButton.addTargetForControlEvent(
      import_uicore_ts19.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        this.loadPlainData();
      }.bind(this)
    );
    this.loadJSONDataButton.addTargetForControlEvent(
      import_uicore_ts19.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        this.loadJSONData();
      }.bind(this)
    );
  }
  reloadTableData() {
    this.dropdown._tableView.reloadData();
    const dataToShow = {};
    this.dropdown.drawingData.forEach(function(dataItem, index, array) {
      dataToShow[(0, import_uicore_ts19.FIRST)(dataItem.itemCode, dataItem._id)] = dataItem.title;
    });
    this.dataTextArea.text = JSON.stringify(dataToShow, null, 2);
  }
  updateAvailableCodes() {
    return __async(this, null, function* () {
      var { result: codes } = yield SocketClient.RetrieveDropdownCodes();
      this.dropdownCodesTextArea.text = "Saved codes: " + JSON.stringify(codes);
      if (codes.length && (0, import_uicore_ts19.IS_NOT)(this.dropdownCodeTextField.text)) {
        this.dropdownCodeTextField.text = codes.firstElement;
        this.loadData();
      }
    });
  }
  updateitemDetailsView() {
    const selectedItem = this.dropdown.selectedData.firstElement || import_uicore_ts19.nil;
    if ((0, import_uicore_ts19.IS)(selectedItem)) {
      if (this.itemTitleCheckbox.selected) {
        this.itemTitleOrAttachedObjectTextArea.text = JSON.stringify(selectedItem.title, null, 2);
        this.itemTitleDidChange();
      } else {
        this.itemTitleOrAttachedObjectTextArea.text = JSON.stringify(selectedItem.attachedObject, null, 2);
        this.itemAttachedObjectDidChange();
      }
      this.itemCodeTextField.text = selectedItem.itemCode;
    }
    this.isASectionCheckbox.selected = (0, import_uicore_ts19.IS)(selectedItem.isADropdownDataSection);
  }
  loadData() {
    return __async(this, null, function* () {
      if ((0, import_uicore_ts19.IS_NOT)(this.dropdownCodeTextField.text)) {
        this.loadSubjectData();
        return;
      }
      var { result: responseMessage } = yield SocketClient.RetrieveDropdownDataForCode(this.dropdownCodeTextField.text);
      this._triggerLayoutViewSubviews();
      if ((0, import_uicore_ts19.IS)(responseMessage)) {
        CBDialogViewShower.alert("Loaded data.");
      } else {
        CBDialogViewShower.alert("Failed to load data.");
        return;
      }
      const dropdownData = [];
      responseMessage.data.forEach(function(sectionOrRow, index, array) {
        if (sectionOrRow.isADropdownDataSection) {
          const dataSection = {
            _id: sectionOrRow._id,
            title: sectionOrRow.title,
            rowsData: [],
            isADropdownDataSection: import_uicore_ts19.YES,
            isADropdownDataRow: import_uicore_ts19.NO,
            attachedObject: sectionOrRow.attachedObject,
            itemCode: sectionOrRow.itemCode,
            dropdownCode: sectionOrRow.dropdownCode
          };
          const rowsData = dataSection.rowsData;
          sectionOrRow.rowsData.forEach(function(rowData, index2, array2) {
            rowsData.push({
              _id: rowData._id,
              title: rowData.title,
              isADropdownDataSection: import_uicore_ts19.NO,
              isADropdownDataRow: import_uicore_ts19.YES,
              attachedObject: rowData.attachedObject,
              itemCode: rowData.itemCode,
              dropdownCode: rowData.dropdownCode
            });
          });
          dataSection.rowsData = rowsData;
          dropdownData.push(dataSection);
        } else {
          dropdownData.push({
            _id: sectionOrRow._id,
            title: sectionOrRow.title,
            attachedObject: sectionOrRow.attachedObject,
            isADropdownDataRow: import_uicore_ts19.YES,
            itemCode: sectionOrRow.itemCode,
            dropdownCode: sectionOrRow.dropdownCode
          });
        }
      });
      this.dropdown.selectedData.removeElementAtIndex(0);
      this.dropdown.selectedIndices.removeElementAtIndex(0);
      this.dropdown.data = dropdownData;
      this.reloadTableData();
      this.updateitemDetailsView();
    });
  }
  saveData() {
    return __async(this, null, function* () {
      const uploadData = {
        dropdownCode: this.dropdownCodeTextField.text,
        data: []
      };
      var currentRowsTarget = uploadData.data;
      this.dropdown.drawingData.forEach(function(item, index, array) {
        if (item.isADropdownDataSection) {
          currentRowsTarget = [];
          uploadData.data.push({
            title: item.title,
            attachedObject: item.attachedObject,
            rowsData: currentRowsTarget,
            isADropdownDataSection: import_uicore_ts19.YES,
            isADropdownDataRow: import_uicore_ts19.NO,
            itemCode: (0, import_uicore_ts19.FIRST)(item.itemCode, item._id),
            dropdownCode: uploadData.dropdownCode
          });
        } else {
          currentRowsTarget.push({
            title: item.title,
            attachedObject: item.attachedObject,
            isADropdownDataSection: import_uicore_ts19.NO,
            isADropdownDataRow: import_uicore_ts19.YES,
            itemCode: (0, import_uicore_ts19.FIRST)(item.itemCode, item._id),
            dropdownCode: uploadData.dropdownCode
          });
        }
      }.bind(this));
      var { result: response } = yield SocketClient.SaveDropdownData(uploadData);
      this.updateAvailableCodes();
      if ((0, import_uicore_ts19.IS)(response)) {
        CBDialogViewShower.alert("Saved successfully.");
        this.loadData();
      } else {
        CBDialogViewShower.alert("Failed to save dropdown data.");
      }
    });
  }
  loadPlainData() {
    const drawingData = [];
    const lines = this.dataTextArea.text.split("\n");
    lines.forEach(function(line, index, array) {
      const lineItems = line.trim().split(" ");
      drawingData.push({
        _id: "" + index,
        title: {
          "en": lineItems.lastElement
        },
        isADropdownDataRow: import_uicore_ts19.YES,
        isADropdownDataSection: import_uicore_ts19.NO,
        attachedObject: void 0,
        itemCode: lineItems.firstElement,
        dropdownCode: this.dropdownCodeTextField.text
      });
    }.bind(this));
    this.dropdown._drawingData = drawingData;
    this.dropdown._isDrawingDataValid = import_uicore_ts19.YES;
    this.reloadTableData();
    if (this.dropdown.selectedIndices.length) {
      this.dropdown._selectedData = [this.dropdown.drawingData[this.dropdown.selectedIndices.firstElement]];
    }
    this.updateitemDetailsView();
  }
  loadJSONData() {
    const drawingData = [];
    var itemTitles = {};
    try {
      itemTitles = JSON.parse(this.dataTextArea.text);
    } catch (exception) {
      CBDialogViewShower.alert(exception);
      return;
    }
    var index = 0;
    itemTitles.forEach(function(itemTitle, itemCode) {
      drawingData.push({
        _id: "" + index,
        title: itemTitle,
        isADropdownDataRow: import_uicore_ts19.YES,
        isADropdownDataSection: import_uicore_ts19.NO,
        attachedObject: void 0,
        itemCode,
        dropdownCode: this.dropdownCodeTextField.text
      });
      index = index + 1;
    }.bind(this));
    this.dropdown._drawingData = drawingData;
    this.dropdown._isDrawingDataValid = import_uicore_ts19.YES;
    this.reloadTableData();
    if (this.dropdown.selectedIndices.length) {
      this.dropdown._selectedData = [this.dropdown.drawingData[this.dropdown.selectedIndices.firstElement]];
    }
    this.updateitemDetailsView();
  }
  itemTitleDidChange() {
    const selectedItem = this.dropdown.selectedData.firstElement || import_uicore_ts19.nil;
    if ((0, import_uicore_ts19.IS_NOT)(this.itemTitleOrAttachedObjectTextArea.text) || this.itemTitleOrAttachedObjectTextArea.text == "undefined") {
      this.itemTitleOrAttachedObjectTextArea.text = "{  }";
    }
    try {
      const selectedItemTitle = JSON.parse(this.itemTitleOrAttachedObjectTextArea.text);
      if (selectedItemTitle instanceof Object && !(selectedItemTitle instanceof Array)) {
        this.itemTitleJSONLabel.textColor = CBColor.primaryContentColor;
        this.itemTitleJSONLabel.text = "No issues detected";
        selectedItem.title = selectedItemTitle;
      } else {
        this.itemTitleJSONLabel.textColor = import_uicore_ts19.UIColor.redColor;
        this.itemTitleJSONLabel.text = "JSON has to describe a CBLocalizedTextObject.";
      }
    } catch (error) {
      this.itemTitleJSONLabel.text = error.message;
      this.itemTitleJSONLabel.textColor = import_uicore_ts19.UIColor.redColor;
    }
  }
  itemAttachedObjectDidChange() {
    const selectedItem = this.dropdown.selectedData.firstElement || import_uicore_ts19.nil;
    if ((0, import_uicore_ts19.IS_NOT)(this.itemTitleOrAttachedObjectTextArea.text) || this.itemTitleOrAttachedObjectTextArea.text == "undefined") {
      this.itemTitleOrAttachedObjectTextArea.text = "{ undefined }";
    }
    try {
      var selectedItemAttachedObject;
      if (this.itemTitleOrAttachedObjectTextArea.text != "{ undefined }") {
        selectedItemAttachedObject = JSON.parse(this.itemTitleOrAttachedObjectTextArea.text);
      }
      if (selectedItemAttachedObject == null || selectedItemAttachedObject instanceof Object && !(selectedItemAttachedObject instanceof Array)) {
        this.itemTitleJSONLabel.textColor = CBColor.primaryContentColor;
        this.itemTitleJSONLabel.text = "No issues detected";
        selectedItem.attachedObject = selectedItemAttachedObject;
      } else {
        this.itemTitleJSONLabel.textColor = import_uicore_ts19.UIColor.redColor;
        this.itemTitleJSONLabel.text = "JSON has to describe an object.";
      }
    } catch (error) {
      this.itemTitleJSONLabel.text = error.message;
      this.itemTitleJSONLabel.textColor = import_uicore_ts19.UIColor.redColor;
    }
  }
  loadSubjectData() {
  }
  viewDidAppear() {
    return __async(this, null, function* () {
    });
  }
  viewWillDisappear() {
    return __async(this, null, function* () {
    });
  }
  handleRoute(route) {
    return __async(this, null, function* () {
      __superGet(_InternalDropdownSettingsViewController.prototype, this, "handleRoute").call(this, route);
      const inquiryComponent = route.componentWithName(_InternalDropdownSettingsViewController.routeComponentName);
      this.reloadTableData();
    });
  }
  updateViewConstraints() {
    super.updateViewConstraints();
  }
  updateViewStyles() {
    super.updateViewStyles();
  }
  viewDidLayoutSubviews() {
    super.viewDidLayoutSubviews();
  }
  layoutViewSubviews() {
    super.layoutViewSubviews();
    const padding = RootViewParameters.paddingLength;
    const labelHeight = padding;
    const bounds = this.view.bounds.rectangleWithInset(padding);
    this.titleLabel.frame = bounds.rectangleWithHeight(labelHeight * 2);
    var rowFrame = this.titleLabel.frame.rectangleForNextRow(padding);
    rowFrame.distributeViewsAlongWidth([this.dropdownCodeTextField, this.loadButton, this.saveButton], [
      2,
      1,
      1
    ], padding);
    rowFrame = rowFrame.rectangleForNextRow(padding, labelHeight * 5);
    this.dropdownCodesTextArea.frame = rowFrame;
    rowFrame = rowFrame.rectangleForNextRow(padding, labelHeight * 2);
    this.dropdown.frame = rowFrame.rectangleWithWidth(bounds.width * 0.5 - padding * 0.5);
    this.dropdown._tableView.frame = this.dropdown.frame.rectangleForNextRow(padding, 500);
    this.dropdown._tableView.setMargins(0, 0, padding, 0);
    var deleteAddFrame = this.dropdown.frame.rectangleForNextColumn(padding * 0.5, this.dropdown.frame.width + padding * 0.5);
    deleteAddFrame.distributeViewsAlongWidth([this.deleteButton, this.addButton], 1, padding);
    this.itemCodeTextField.frame = deleteAddFrame.rectangleForNextRow(padding);
    var itemTextAreaPurposesFrame = this.itemCodeTextField.frame.rectangleForNextRow(padding, labelHeight * 2);
    itemTextAreaPurposesFrame.distributeViewsEquallyAlongWidth([
      this.itemTitleCheckbox,
      this.itemAttachedObjectCheckbox
    ], padding);
    this.itemTitleOrAttachedObjectTextArea.frame = itemTextAreaPurposesFrame.rectangleForNextRow(
      padding,
      labelHeight * 11
    );
    this.itemTitleJSONLabel.frame = this.itemTitleOrAttachedObjectTextArea.frame.rectangleForNextRow(
      padding,
      labelHeight
    );
    this.isASectionCheckbox.frame = this.itemTitleJSONLabel.frame.rectangleForNextRow(padding, labelHeight);
    const downUpFrame = this.isASectionCheckbox.frame.rectangleForNextRow(padding, labelHeight * 2);
    downUpFrame.distributeViewsAlongWidth([this.downButton, this.upButton], 1, padding);
    downUpFrame.rectangleForNextRow(padding).distributeViewsEquallyAlongWidth([
      this.deleteDropdownButton,
      this.clearDropdownButton
    ], padding);
    this.dataTextJSONLabel.frame = this.dropdownCodesTextArea.frame.rectangleWithY(this.dropdown._tableView.frame.max.y + padding).rectangleWithHeight(labelHeight);
    this.dataTextArea.frame = this.dataTextJSONLabel.frame.rectangleForNextRow(padding, 500);
    this.dataTextArea.frame.rectangleForNextRow(padding, labelHeight * 2).distributeViewsEquallyAlongWidth([this.loadPlainDataButton, this.loadJSONDataButton], padding);
    this.loadPlainDataButton.setMargins(0, 0, padding, 0);
  }
};
var InternalDropdownSettingsViewController = _InternalDropdownSettingsViewController;
InternalDropdownSettingsViewController.routeComponentName = "internal_dropdown_settings";
InternalDropdownSettingsViewController.ParameterIdentifierName = {};

// scripts/InternalLanguageSettingsViewController.ts
var import_uicore_ts20 = __toESM(require_compiledScripts());
var _InternalLanguageSettingsViewController = class extends import_uicore_ts20.UIViewController {
  constructor(view) {
    super(view);
    this.loadSubviews();
  }
  loadSubviews() {
    this.view.backgroundColor = import_uicore_ts20.UIColor.whiteColor;
    this.titleLabel = new import_uicore_ts20.UITextView(this.view.elementID + "TitleLabel", import_uicore_ts20.UITextView.type.header2);
    this.titleLabel.text = "Internal language settings";
    this.view.addSubview(this.titleLabel);
    this.languageKeyTextField = new CBTextField(this.view.elementID + "LanguageKeyTextField");
    this.languageKeyTextField.placeholderText = "Language key";
    this.view.addSubview(this.languageKeyTextField);
    this.languageKeysTextArea = new import_uicore_ts20.UITextArea(this.view.elementID + "LanguageKeysTextArea");
    this.languageKeysTextArea.placeholderText = "Available language keys";
    this.view.addSubview(this.languageKeysTextArea);
    this.loadButton = new CBButton(this.view.elementID + "LoadButton");
    this.loadButton.titleLabel.text = "Load";
    this.view.addSubview(this.loadButton);
    this.saveButton = new CBButton(this.view.elementID + "SaveButton");
    this.saveButton.titleLabel.setText("internalLanguageSettingsViewControllerSaveButton", "Save");
    this.view.addSubview(this.saveButton);
    this.dropdown = new SearchableDropdown(this.view.elementID + "SearchableDropdown");
    this.dropdown._controlEventTargets[import_uicore_ts20.UIView.controlEvent.PointerUpInside] = [];
    this.dropdown._controlEventTargets[import_uicore_ts20.UIView.controlEvent.EnterDown] = [];
    this.dropdown._dialogView = import_uicore_ts20.nil;
    this.dropdown.isSingleSelection = import_uicore_ts20.YES;
    this.dropdown._rightImageView.imageSource = import_uicore_ts20.nil;
    this.dropdown.keepFocusedRowVisible = import_uicore_ts20.NO;
    this.view.addSubview(this.dropdown);
    this.dropdown._tableView.style.borderWidth = "1px";
    this.dropdown._tableView.style.borderStyle = "solid";
    this.dropdown._tableView.style.borderColor = CBColor.primaryContentColor.stringValue;
    this.view.addSubview(this.dropdown._tableView);
    this.addButton = new CBButton(this.view.elementID + "AddButton");
    this.addButton.titleLabel.text = "Add text";
    this.addButton.setBackgroundColorsWithNormalColor(import_uicore_ts20.UIColor.greenColor);
    this.view.addSubview(this.addButton);
    this.deleteButton = new CBButton(this.view.elementID + "DeleteButton");
    this.deleteButton.titleLabel.text = "Delete text";
    this.deleteButton.setBackgroundColorsWithNormalColor(import_uicore_ts20.UIColor.redColor);
    this.view.addSubview(this.deleteButton);
    this.deleteLanguageButton = new CBButton(this.view.elementID + "DeleteLanguageButton");
    this.deleteLanguageButton.titleLabel.text = "Delete language";
    this.deleteLanguageButton.setBackgroundColorsWithNormalColor(import_uicore_ts20.UIColor.redColor);
    this.view.addSubview(this.deleteLanguageButton);
    this.clearLanguageButton = new CBButton(this.view.elementID + "ClearLanguageButton");
    this.clearLanguageButton.titleLabel.text = "Clear language";
    this.clearLanguageButton.setBackgroundColorsWithNormalColor(import_uicore_ts20.UIColor.redColor);
    this.view.addSubview(this.clearLanguageButton);
    this.itemKeyTextField = new CBTextField(this.view.elementID + "ItemKeyTextField");
    this.itemKeyTextField.placeholderText = "Item key";
    this.view.addSubview(this.itemKeyTextField);
    this.itemTitleOrAttachedObjectTextArea = new import_uicore_ts20.UITextArea(this.view.elementID + "ItemTitleOrAttachedObjectTextArea");
    this.itemTitleOrAttachedObjectTextArea.placeholderText = "Title";
    this.view.addSubview(this.itemTitleOrAttachedObjectTextArea);
    this.itemTitleDidChange();
    this.dataTextJSONLabel = new import_uicore_ts20.UITextView(this.view.elementID + "DataTextJSONLabel");
    this.dataTextJSONLabel.text = "Data in JSON format";
    this.view.addSubview(this.dataTextJSONLabel);
    this.dataTextArea = new import_uicore_ts20.UITextArea(this.view.elementID + "DataTextArea");
    this.dataTextArea.placeholderText = "Data in JSON format";
    this.view.addSubview(this.dataTextArea);
    this.loadJSONDataButton = new CBButton(this.view.elementID + "LoadJSONDataButton");
    this.loadJSONDataButton.titleLabel.text = "Load JSON data";
    this.view.addSubview(this.loadJSONDataButton);
    this.dropdown.addTargetForControlEvent(
      SearchableDropdown.controlEvent.SelectionDidChange,
      function(sender, event2) {
        this.updateitemDetailsView();
      }.bind(this)
    );
    const dropdownViewForRowWithIndexFunction = this.dropdown._tableView.viewForRowWithIndex.bind(this.dropdown._tableView);
    this.dropdown._tableView.viewForRowWithIndex = function(rowIndex) {
      const row = dropdownViewForRowWithIndexFunction(rowIndex);
      const dataItem = this.dropdown.drawingData[rowIndex];
      const key = dataItem.itemCode;
      const value = dataItem.attachedObject;
      if (LanguageService.languageValues[this.languageKeyTextField.text][key] == value) {
        row.titleText = row.titleText + " - static";
        row.alpha = 0.5;
      } else {
        row.alpha = 1;
      }
      return row;
    }.bind(this);
    this.itemKeyTextField.textField.addTargetForControlEvent(
      import_uicore_ts20.UITextArea.controlEvent.TextChange,
      function(sender, event2) {
        const selectedItem = this.dropdown.selectedData.firstElement || import_uicore_ts20.nil;
        const previousKey = selectedItem.itemCode;
        const languageObject = LanguageService.languages[this.languageKeyTextField.text];
        const languageValuesValue = languageObject[previousKey];
        if ((0, import_uicore_ts20.IS_NOT)(languageValuesValue)) {
          delete languageObject[previousKey];
        }
        languageObject[this.itemKeyTextField.text] = selectedItem.attachedObject;
        selectedItem.title = LanguageService.localizedTextObjectForText(this.itemKeyTextField.text);
        selectedItem.itemCode = this.itemKeyTextField.text;
        selectedItem._id = this.itemKeyTextField.text;
        this.reloadTableData();
      }.bind(this)
    );
    this.itemTitleOrAttachedObjectTextArea.addTargetForControlEvent(
      import_uicore_ts20.UITextArea.controlEvent.TextChange,
      function(sender, event2) {
        this.itemTitleDidChange();
        this.reloadTableData();
      }.bind(this)
    );
    this.updateAvailableKeys();
    this.loadButton.addTargetForControlEvent(
      import_uicore_ts20.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        this.loadData();
      }.bind(this)
    );
    this.saveButton.addTargetForControlEvent(
      import_uicore_ts20.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        CBCore.sharedInstance.socketClient.sendMessageForKey(
          "RetrieveLanguageData",
          import_uicore_ts20.nil,
          function(codes) {
            this.saveData();
          }.bind(this)
        );
      }.bind(this)
    );
    this.addButton.addTargetForControlEvent(
      import_uicore_ts20.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        const title = LanguageService.localizedTextObjectForText(this.itemKeyTextField.text);
        const itemID = (0, import_uicore_ts20.MAKE_ID)();
        const dataRow = {
          _id: itemID,
          title,
          isADropdownDataRow: import_uicore_ts20.YES,
          isADropdownDataSection: import_uicore_ts20.NO,
          attachedObject: void 0,
          itemCode: import_uicore_ts20.nil,
          dropdownCode: (this.dropdown.selectedData.firstElement || {}).dropdownCodes
        };
        const rowIndex = this.dropdown.selectedIndices.firstElement;
        if ((0, import_uicore_ts20.IS_DEFINED)(rowIndex)) {
          this.dropdown.drawingData.insertElementAtIndex(rowIndex + 1, dataRow);
          this.reloadTableData();
        } else {
          this.dropdown.drawingData.push(dataRow);
          this.reloadTableData();
          this.dropdown._tableView.scrollToBottom();
        }
      }.bind(this)
    );
    this.deleteButton.addTargetForControlEvent(
      import_uicore_ts20.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        const rowIndex = this.dropdown.selectedIndices.firstElement;
        if ((0, import_uicore_ts20.IS_DEFINED)(rowIndex)) {
          var selectedItem = this.dropdown.selectedData.firstElement || import_uicore_ts20.nil;
          var key = LanguageService.stringForCurrentLanguage(selectedItem.title);
          delete LanguageService.languages[this.languageKeyTextField.text][key];
          this.dropdown.drawingData.removeElementAtIndex(rowIndex);
          this.dropdown.selectedData.removeElementAtIndex(0);
          this.dropdown.selectedIndices.removeElementAtIndex(0);
          this.dropdown.selectionDidChange(this.dropdown.selectedData);
        }
        this.reloadTableData();
      }.bind(this)
    );
    this.deleteLanguageButton.addTargetForControlEvent(
      import_uicore_ts20.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        if (this.languageKeyTextField.text && confirm("Are you sure you want to delete this language?")) {
          if (confirm("This will REMOVE THE LANGUAGE FROM THE SERVER, are you definitely sure?")) {
            CBCore.sharedInstance.socketClient.sendMessageForKey(
              "DeleteLanguageWithKey",
              this.languageKeyTextField.text,
              function(responseMessage, respondWithMessage) {
                LanguageService.useStoredLanguageValues(responseMessage);
                this.updateAvailableKeys();
                this.languageKeyTextField.text = import_uicore_ts20.nil;
                this.dropdown.data = [];
                this.updateitemDetailsView();
              }.bind(this)
            );
          }
        }
      }.bind(this)
    );
    this.clearLanguageButton.addTargetForControlEvent(
      import_uicore_ts20.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        if (this.languageKeyTextField.text && confirm("Are you sure you want to clear this language?")) {
          LanguageService.languages[this.languageKeyTextField.text] = {};
          this.dropdown.data = [];
          this.dropdown.selectedData = [];
          this.dropdown.selectedIndices = [];
          this.updateitemDetailsView();
        }
      }.bind(this)
    );
    this.loadJSONDataButton.addTargetForControlEvent(
      import_uicore_ts20.UIView.controlEvent.PointerUpInside,
      function(sender, event2) {
        this.loadJSONData();
      }.bind(this)
    );
  }
  reloadTableData() {
    this.dropdown._tableView.reloadData();
    const dataToShow = {};
    this.dropdown.drawingData.forEach(function(dataItem, index, array) {
      dataToShow[(0, import_uicore_ts20.FIRST)(dataItem.itemCode, dataItem._id)] = dataItem.attachedObject;
    });
    this.dataTextArea.text = JSON.stringify(dataToShow, null, 2);
  }
  updateAvailableKeys() {
    const codes = LanguageService.languages.allKeys;
    this.languageKeysTextArea.text = "Saved keys: " + JSON.stringify(codes);
    if (codes.length && (0, import_uicore_ts20.IS_NOT)(this.languageKeyTextField.text)) {
      this.languageKeyTextField.text = codes.firstElement;
      this.loadData();
    }
  }
  updateitemDetailsView() {
    const selectedItem = this.dropdown.selectedData.firstElement || import_uicore_ts20.nil;
    if ((0, import_uicore_ts20.IS)(selectedItem)) {
      this.itemKeyTextField.text = LanguageService.stringForCurrentLanguage(selectedItem.title);
      this.itemTitleOrAttachedObjectTextArea.text = selectedItem.attachedObject;
      this.itemTitleDidChange();
    }
  }
  loadData() {
    this._triggerLayoutViewSubviews();
    const dropdownData = [];
    LanguageService.languages[this.languageKeyTextField.text].forEach(function(value, key) {
      dropdownData.push({
        _id: key,
        title: LanguageService.localizedTextObjectForText(key),
        itemCode: key,
        dropdownCode: "Aasdasdasdasdasdasdasd",
        isADropdownDataRow: import_uicore_ts20.YES,
        isADropdownDataSection: import_uicore_ts20.NO,
        attachedObject: value
      });
    });
    this.dropdown.selectedData.removeElementAtIndex(0);
    this.dropdown.selectedIndices.removeElementAtIndex(0);
    this.dropdown.data = dropdownData;
    this.reloadTableData();
    this.updateitemDetailsView();
  }
  saveData() {
    const languageObject = {};
    const languageKey = this.languageKeyTextField.text;
    this.dropdown.drawingData.forEach(function(dataItem, index, array) {
      const staticLanguageObject = LanguageService.languageValues[languageKey];
      if ((0, import_uicore_ts20.IS_NOT)(staticLanguageObject[dataItem.itemCode] == dataItem.attachedObject)) {
        languageObject[dataItem.itemCode] = dataItem.attachedObject;
      }
    });
    CBCore.sharedInstance.socketClient.sendMessageForKey(
      "RetrieveLanguageData",
      import_uicore_ts20.nil,
      function(responseMessage, respondWithMessage) {
        responseMessage[this.languageKeyTextField.text] = languageObject;
        CBCore.sharedInstance.socketClient.sendMessageForKey(
          "SaveLanguagesData",
          responseMessage,
          function(response) {
            if (IS_NOT_SOCKET_ERROR(response)) {
              CBDialogViewShower.alert("Saved successfully.");
              LanguageService.useStoredLanguageValues(response);
              this.loadData();
              LanguageService.broadcastLanguageChangeEvent();
              import_uicore_ts20.UICoreValues.main.rootViewController.view.setNeedsLayout();
            } else {
              CBDialogViewShower.alert("Failed to save dropdown data.");
            }
            this.updateAvailableKeys();
          }.bind(this)
        );
      }.bind(this)
    );
  }
  loadJSONData() {
    let itemTitles = {};
    try {
      itemTitles = JSON.parse(this.dataTextArea.text);
    } catch (exception) {
      CBDialogViewShower.alert(exception);
      return;
    }
    LanguageService.languages[this.languageKeyTextField.text] = JSON.parse(JSON.stringify(
      LanguageService.languageValues[this.languageKeyTextField.text]
    )).objectByCopyingValuesRecursivelyFromObject(itemTitles);
    this.loadData();
    this.reloadTableData();
    if (this.dropdown.selectedIndices.length) {
      this.dropdown._selectedData = [this.dropdown.drawingData[this.dropdown.selectedIndices.firstElement]];
    }
    this.updateitemDetailsView();
  }
  itemTitleDidChange() {
    const selectedItem = this.dropdown.selectedData.firstElement || import_uicore_ts20.nil;
    selectedItem.attachedObject = this.itemTitleOrAttachedObjectTextArea.text;
    const languageObject = LanguageService.languages[this.languageKeyTextField.text] || {};
    languageObject[selectedItem.itemCode] = this.itemTitleOrAttachedObjectTextArea.text;
  }
  loadSubjectData() {
  }
  handleRoute(route) {
    return __async(this, null, function* () {
      __superGet(_InternalLanguageSettingsViewController.prototype, this, "handleRoute").call(this, route);
      const inquiryComponent = route.componentWithName(_InternalLanguageSettingsViewController.routeComponentName);
      this.reloadTableData();
    });
  }
  layoutViewSubviews() {
    super.layoutViewSubviews();
    const padding = RootViewParameters.paddingLength;
    const labelHeight = padding;
    const bounds = this.view.bounds.rectangleWithInset(padding);
    this.titleLabel.frame = bounds.rectangleWithHeight(labelHeight * 2);
    let rowFrame = this.titleLabel.frame.rectangleForNextRow(padding);
    rowFrame.distributeViewsAlongWidth([this.languageKeyTextField, this.loadButton, this.saveButton], [
      2,
      1,
      1
    ], padding);
    rowFrame = rowFrame.rectangleForNextRow(padding, labelHeight * 5);
    this.languageKeysTextArea.frame = rowFrame;
    rowFrame = rowFrame.rectangleForNextRow(padding, labelHeight * 2);
    this.dropdown.frame = rowFrame.rectangleWithWidth(bounds.width * 0.5 - padding * 0.5);
    this.dropdown._tableView.frame = this.dropdown.frame.rectangleForNextRow(padding, 500);
    this.dropdown._tableView.setMargins(0, 0, padding, 0);
    const deleteAddFrame = this.dropdown.frame.rectangleForNextColumn(padding * 0.5, this.dropdown.frame.width + padding * 0.5);
    deleteAddFrame.distributeViewsAlongWidth([this.deleteButton, this.addButton], 1, padding);
    this.itemKeyTextField.frame = deleteAddFrame.rectangleForNextRow(padding);
    this.itemTitleOrAttachedObjectTextArea.frame = this.itemKeyTextField.frame.rectangleForNextRow(
      padding,
      labelHeight * 11
    );
    this.itemTitleOrAttachedObjectTextArea.frame.rectangleForNextRow(padding, labelHeight * 2).distributeViewsEquallyAlongWidth([this.deleteLanguageButton, this.clearLanguageButton], padding);
    this.dataTextJSONLabel.frame = this.languageKeysTextArea.frame.rectangleWithY(this.dropdown._tableView.frame.max.y + padding).rectangleWithHeight(labelHeight);
    this.dataTextArea.frame = this.dataTextJSONLabel.frame.rectangleForNextRow(padding, 500);
    this.dataTextArea.frame.rectangleForNextRow(padding, labelHeight * 2).distributeViewsEquallyAlongWidth([this.loadJSONDataButton], padding);
    this.loadJSONDataButton.setMargins(0, 0, padding, 0);
  }
};
var InternalLanguageSettingsViewController = _InternalLanguageSettingsViewController;
InternalLanguageSettingsViewController.routeComponentName = "internal_language_settings";
InternalLanguageSettingsViewController.ParameterIdentifierName = {};

// scripts/LanguagesDialogView.ts
var import_uicore_ts21 = __toESM(require_compiledScripts());
var LanguagesDialogView = class extends import_uicore_ts21.UIView {
  constructor(elementID, element) {
    super(elementID, element);
  }
  initView(elementID, viewHTMLElement) {
    super.initView(elementID, viewHTMLElement);
    this.titleLabel = new import_uicore_ts21.UITextView("LanguagesDialogTitleLabel", import_uicore_ts21.UITextView.type.header1);
    this.titleLabel.setText("selectLanguageTitle", "Select language");
    this.titleLabel.textAlignment = import_uicore_ts21.UITextView.textAlignment.center;
    this.titleLabel.textColor = import_uicore_ts21.UIColor.whiteColor;
    this.addSubview(this.titleLabel);
    this.buttons = [];
    const languageKeys = Object.keys(LanguageService.languages);
    languageKeys.forEach(function(languageKey, index, array) {
      const language = LanguageService.languages[languageKey];
      const languageButton = new import_uicore_ts21.UIButton("LeftBarLanguageButton" + language.languageNameShort);
      languageButton.titleLabel.text = language.languageName;
      this.buttons.push(languageButton);
      this.addSubview(languageButton);
      const selectedImageView = new import_uicore_ts21.UIImageView("SelectedImage" + language.languageNameShort);
      selectedImageView.imageSource = "images/baseline-check-24px.svg";
      selectedImageView.style.filter = "invert(0.35) sepia(1) saturate(5) hue-rotate(175deg)";
      languageButton.addSubview(selectedImageView);
      const buttonLayoutFunction = languageButton.layoutSubviews;
      languageButton.layoutSubviews = function() {
        const bounds = languageButton.bounds;
        const padding = 10;
        const imageHeight = bounds.height - 2 * padding;
        selectedImageView.frame = new import_uicore_ts21.UIRectangle(bounds.width - imageHeight - padding, padding, imageHeight, imageHeight);
        buttonLayoutFunction.call(languageButton);
      };
      languageButton.setNeedsLayout();
      languageButton.updateContentForNormalState = function() {
        languageButton.titleLabel.textColor = CBColor.primaryContentColor;
        languageButton.backgroundColor = import_uicore_ts21.UIColor.whiteColor;
        selectedImageView.hidden = import_uicore_ts21.YES;
      };
      languageButton.updateContentForHighlightedState = function() {
        languageButton.titleLabel.textColor = CBColor.primaryContentColor;
        languageButton.backgroundColor = import_uicore_ts21.UIColor.colorWithRGBA(200, 200, 200);
      };
      languageButton.updateContentForSelectedAndHighlightedState = languageButton.updateContentForHighlightedState;
      languageButton.updateContentForSelectedState = function() {
        languageButton.titleLabel.textColor = CBColor.primaryContentColor;
        languageButton.backgroundColor = import_uicore_ts21.UIColor.whiteColor;
        selectedImageView.hidden = import_uicore_ts21.NO;
      };
      languageButton.updateContentForCurrentState();
      const currentLanguageKey = import_uicore_ts21.UIRoute.currentRoute.componentWithName("settings").parameters.language;
      if ((0, import_uicore_ts21.IS)(currentLanguageKey)) {
        if (currentLanguageKey == languageKey) {
          languageButton.selected = import_uicore_ts21.YES;
        }
      } else if (languageKey == "en") {
        languageButton.selected = import_uicore_ts21.YES;
      }
      languageButton.addTargetForControlEvents([
        import_uicore_ts21.UIView.controlEvent.EnterDown,
        import_uicore_ts21.UIView.controlEvent.PointerUpInside
      ], function(sender, event2) {
        CBCore.sharedInstance.languageKey = languageKey;
        this.buttons.forEach(function(button, index2, array2) {
          button.selected = import_uicore_ts21.NO;
        });
        languageButton.selected = import_uicore_ts21.YES;
        LanguageService.updateCurrentLanguageKey();
        this.rootView.broadcastEventInSubtree({
          name: import_uicore_ts21.UIView.broadcastEventName.LanguageChanged,
          parameters: import_uicore_ts21.nil
        });
      }.bind(this));
    }, this);
  }
  wasAddedToViewTree() {
    super.wasAddedToViewTree();
    this._previousLanguageKey = LanguageService.currentLanguageKey;
  }
  didReceiveBroadcastEvent(event2) {
    super.didReceiveBroadcastEvent(event2);
    if (event2.name == import_uicore_ts21.UICoreValues.broadcastEventName.RouteDidChange && this._previousLanguageKey != LanguageService.currentLanguageKey) {
      this._previousLanguageKey = LanguageService.currentLanguageKey;
      this.rootView.broadcastEventInSubtree({
        name: import_uicore_ts21.UIView.broadcastEventName.LanguageChanged,
        parameters: import_uicore_ts21.nil
      });
    }
  }
  layoutSubviews() {
    super.layoutSubviews();
    if (this.hidden) {
      return;
    }
    const maxWidth = 350;
    if (this.bounds.width > maxWidth) {
      this.bounds = this.bounds.rectangleWithWidth(maxWidth);
    }
    const bounds = this.bounds;
    const sidePadding = 20 * 0;
    this.titleLabel.frame = new import_uicore_ts21.UIRectangle(sidePadding, sidePadding, 50, bounds.width - sidePadding * 2);
    var previousFrame = this.titleLabel.frame;
    this.buttons.forEach(function(button, index, array) {
      button.frame = previousFrame.rectangleWithY(previousFrame.max.y + 1).rectangleWithWidth(bounds.width - sidePadding * 2);
      previousFrame = button.frame;
    });
    this.bounds = bounds.rectangleWithHeight(this.intrinsicContentHeight(bounds.width));
    this.style.maxHeight = "" + bounds.height.integerValue + "px";
    this.centerInContainer();
  }
};

// scripts/SomeContentViewController.ts
var import_uicore_ts22 = __toESM(require_compiledScripts());
var _SomeContentViewController = class extends import_uicore_ts22.UIViewController {
  constructor(view) {
    super(view);
    this.view.backgroundColor = import_uicore_ts22.UIColor.whiteColor;
    this.titleLabel = new import_uicore_ts22.UITextView(this.view.elementID + "TitleLabel", import_uicore_ts22.UITextView.type.header2);
    this.titleLabel.localizedTextObject = { en: "Some content", est: "Mingi sisu" };
    this.view.addSubview(this.titleLabel);
  }
  viewDidAppear() {
    return __async(this, null, function* () {
    });
  }
  viewWillDisappear() {
    return __async(this, null, function* () {
    });
  }
  handleRoute(route) {
    return __async(this, null, function* () {
      __superGet(_SomeContentViewController.prototype, this, "handleRoute").call(this, route);
      const inquiryComponent = route.componentWithName(_SomeContentViewController.routeComponentName);
    });
  }
  updateViewConstraints() {
    super.updateViewConstraints();
  }
  updateViewStyles() {
    super.updateViewStyles();
  }
  viewDidLayoutSubviews() {
    super.viewDidLayoutSubviews();
  }
  layoutViewSubviews() {
    super.layoutViewSubviews();
    const padding = RootViewParameters.paddingLength;
    const labelHeight = padding;
    const bounds = this.view.bounds.rectangleWithInset(padding);
    this.titleLabel.frame = bounds.rectangleWithHeight(labelHeight * 2);
  }
};
var SomeContentViewController = _SomeContentViewController;
SomeContentViewController.routeComponentName = "somecontent";
SomeContentViewController.ParameterIdentifierName = {};

// scripts/TopBarView.ts
var import_uicore_ts23 = __toESM(require_compiledScripts());
var TopBarView = class extends import_uicore_ts23.UIView {
  constructor(elementID, element) {
    super(elementID, element);
  }
  initView() {
    super.initView(import_uicore_ts23.nil, import_uicore_ts23.nil);
    this.backgroundColor = CBColor.whiteColor;
    this.initStyleSelector("." + this.styleClassName, "position: static; left: 0; right: 0; top: 0; height: 50px;");
    this.addStyleClass("TopBarView");
    this.setBorder(import_uicore_ts23.nil, 0, CBColor.primaryContentColor);
    this.style.borderBottomWidth = "1px";
    this.style.fontSize = "15pt";
    this.titleLabel = new import_uicore_ts23.UITextView("TopBarTitleLabel");
    this.titleLabel.setText("topBarTitle", "TestPage");
    this.titleLabel.style.color = "white";
    this.titleLabel.style.fontSize = "25pt";
    this.style.zIndex = "10";
  }
  layoutSubviews() {
    super.layoutSubviews();
    const bounds = this.bounds;
    const sidePadding = 10;
    this.titleLabel.centerInContainer();
  }
};

// scripts/RootViewController.ts
var RootViewController = class extends import_uicore_ts24.UIRootViewController {
  constructor(view) {
    super(view);
    this.languagesDialogViewController = new import_uicore_ts24.UIViewController(new LanguagesDialogView("LanguagesDialogView"));
    this.contentViewControllers = {
      informationViewController: this.lazyViewControllerObjectWithClass(InformationViewController),
      internalDropdownSettingsViewController: this.lazyViewControllerObjectWithClass(
        InternalDropdownSettingsViewController,
        () => __async(this, null, function* () {
          return (0, import_uicore_ts24.IS)((yield SocketClient.AreCBInternalSettingsAvailableForCurrentUser()).result) || import_uicore_ts24.YES;
        })
      ),
      internalLanguageSettingsViewController: this.lazyViewControllerObjectWithClass(
        InternalLanguageSettingsViewController,
        () => __async(this, null, function* () {
          return (0, import_uicore_ts24.IS)((yield SocketClient.AreCBInternalSettingsAvailableForCurrentUser()).result) || import_uicore_ts24.YES;
        })
      ),
      mainViewController: this.lazyViewControllerObjectWithClass(SomeContentViewController)
    };
    import_uicore_ts24.UITextView.defaultTextColor = CBColor.primaryContentColor;
    this.topBarView = new TopBarView("TopBarView", import_uicore_ts24.nil);
    this.topBarView.titleLabel.setText("topBarTitle", LanguageService.languageValues.en.topBarTitle);
    this.view.addSubview(this.topBarView);
    this.bottomBarView = new BottomBarView("BottomBarView").configuredWithObject({
      style: { overflow: "hidden" }
    });
    this.view.addSubview(this.bottomBarView);
    CBCore.sharedInstance;
  }
  viewDidAppear() {
    return __async(this, null, function* () {
      yield __superGet(RootViewController.prototype, this, "viewDidAppear").call(this);
      this.topBarView.setNeedsLayout();
    });
  }
  handleRoute(route) {
    return __async(this, null, function* () {
      yield __superGet(RootViewController.prototype, this, "handleRoute").call(this, route);
      LanguageService.updateCurrentLanguageKey(route);
      const currentURL = "" + window.location;
      if ((0, import_uicore_ts24.IS)(currentURL)) {
        SocketClient.RouteDidChange(currentURL).then(import_uicore_ts24.nil);
      }
    });
  }
  viewDidReceiveBroadcastEvent(event2) {
    super.viewDidReceiveBroadcastEvent(event2);
    if ([CBCore.broadcastEventName.userDidLogIn, CBCore.broadcastEventName.userDidLogOut].contains(event2.name)) {
      this.handleRoute(import_uicore_ts24.UIRoute.currentRoute);
    }
    if (event2.name == import_uicore_ts24.UIView.broadcastEventName.LanguageChanged) {
      this.detailsViewController = import_uicore_ts24.nil;
      this._detailsDialogView.dismiss();
      this._triggerLayoutViewSubviews();
    }
  }
  updateViewStyles() {
  }
  viewDidLayoutSubviews() {
    super.viewDidLayoutSubviews();
  }
  layoutViewSubviews() {
    super.layoutViewSubviews();
    this.updatePageScale();
    const contentViewMaxWidth = 1e3;
    const topBarHeight = 65;
    const bottomBarMinHeight = 100;
    this.performDefaultLayout(
      RootViewParameters.paddingLength,
      contentViewMaxWidth,
      topBarHeight,
      bottomBarMinHeight
    );
  }
};
try {
  const languageKey = (localStorage.getItem("CBLanguageKey") || CBCoreInitializerObject.defaultLanguageKey || "en").replace(
    '"',
    ""
  ).replace('"', "");
  const loadingLabelElement = document.getElementById("LoadingLabel");
  const loadingTextObject = { "en": "Loading." };
  loadingLabelElement.innerHTML = loadingTextObject[languageKey] || loadingTextObject["en"];
  new import_uicore_ts24.UICore("RootView", RootViewController);
  const loadingViewElement = document.getElementById("LoadingView");
  const rootViewElement = document.getElementById("RootView");
  rootViewElement.removeChild(loadingViewElement);
} catch (exception) {
  console.log(exception);
}
//# sourceMappingURL=webclient.js.map
