//
// import UICoreLibrary, { FIRST, FIRST_OR_NIL, NO, UIBaseButton, UIButton, UILink } from "uicore-ts"
// import { SocketClient } from "../CBCore/CBSocketClient"
//
//
// if ("useSairaFont" in UICoreLibrary.UIView.prototype == NO) {
//
//
//     (UICoreLibrary.UIView.prototype as any).useSairaFont = function (this: UIView) {
//
//         this.style.fontFamily = "'Saira Condensed', sans-serif"
//
//     }
//
// }
//
//
// if ("useNormalFont" in UICoreLibrary.UIView.prototype == NO) {
//
//
//     (UICoreLibrary.UIView.prototype as any).useNormalFont = function (this: UIView) {
//
//         this.style.fontFamily = ""
//
//     }
//
// }
//
//
// export type UIView = {
//
//     useSairaFont();
//
//     useNormalFont();
//
// } & UICoreLibrary.UIView
//
//
// (function () {
//
//     const sendControlEventForKeyFunction = UIBaseButton.prototype.sendControlEventForKey
//
//     UIBaseButton.prototype.sendControlEventForKey = function (this: UIButton & UILink, eventKey, nativeEvent) {
//
//         sendControlEventForKeyFunction.call(this, eventKey, nativeEvent)
//
//         if (eventKey == UIBaseButton.controlEvent.PointerUpInside || eventKey == UIBaseButton.controlEvent.EnterDown) {
//
//             SocketClient.ButtonWasPressed(FIRST(FIRST_OR_NIL(this.titleLabel).text, this.target, this.elementID))
//
//         }
//
//     }
//
//
// })()
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
