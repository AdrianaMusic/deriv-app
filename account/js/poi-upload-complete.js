!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(window,(function(e,t,n,a){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="./Components/poi-upload-complete/index.js")}({"../node_modules/classnames/index.js":function(e,t,n){var a;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var c=o.apply(null,a);c&&e.push(c)}else if("object"===r)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},"./Components/icon-message-content/index.js":function(e,t,n){"use strict";n.r(t);var a=n("react"),o=n.n(a),r=n("../node_modules/classnames/index.js"),c=n.n(r),i=n("@deriv/components"),s=n("@deriv/shared");function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){var t=e.className,n=e.children,a=e.icon,r=e.icon_row,l=e.message,d=e.text;return o.a.createElement(i.Div100vhContainer,{className:"account-management__message-wrapper",is_disabled:Object(s.isDesktop)(),height_offset:"110px"},o.a.createElement("div",{className:c()("account-management__message-content",u({},"".concat(t,"__message-content"),t))},a&&o.a.createElement("div",{className:c()("account-management__message-icon",u({},"".concat(t,"__message-icon"),t))},a),r&&o.a.createElement("div",null,r),o.a.createElement("div",{className:c()("account-management__message",u({},"".concat(t,"__message"),t))},l),d&&o.a.createElement("div",{className:"account-management__text-container"},o.a.createElement("p",{className:c()("account-management__text",u({},"".concat(t,"__text"),t))},d)),n))};t.default=l},"./Components/poa-button/index.js":function(e,t,n){"use strict";var a=n("@deriv/components"),o=n("@deriv/translations"),r=n("react"),c=n.n(r);t.a=function(){return c.a.createElement(a.ButtonLink,{to:"/account/proof-of-address"},c.a.createElement("p",{className:"dc-btn__text"},Object(o.localize)("Submit proof of address")))}},"./Components/poa-continue-trading-button/continue-trading-button.jsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("@deriv/components"),o=n("@deriv/translations"),r=n("react"),c=n.n(r),i=function(){return c.a.createElement(a.ButtonLink,{to:"/"},c.a.createElement("p",{className:"dc-btn__text"},Object(o.localize)("Continue trading")))}},"./Components/poa-continue-trading-button/index.js":function(e,t,n){"use strict";var a=n("./Components/poa-continue-trading-button/continue-trading-button.jsx");t.a=a.a},"./Components/poi-upload-complete/index.js":function(e,t,n){"use strict";n.r(t);var a=n("@deriv/components"),o=n("@deriv/translations"),r=n("react"),c=n.n(r),i=n("./Components/poa-continue-trading-button/index.js"),s=n("./Components/poa-button/index.js"),u=n("./Components/icon-message-content/index.js");t.default=function(e){var t=e.has_poa,n=e.is_description_enabled,r=e.redirect_button,l=Object(o.localize)("Your proof of identity was submitted successfully");return t?c.a.createElement(u.default,{message:l,text:Object(o.localize)("Your document is being reviewed, please check back in 1-3 days."),icon:c.a.createElement(a.Icon,{icon:"IcPoiVerified",size:128})},n&&c.a.createElement(i.a,null)):c.a.createElement(u.default,{message:l,icon:c.a.createElement(a.Icon,{icon:"IcPoiVerified",size:128})},n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"account-management__text-container"},c.a.createElement("p",{className:"account-management__text"},Object(o.localize)("Your document is being reviewed, please check back in 1-3 days.")),c.a.createElement("p",{className:"account-management__text"},Object(o.localize)("You must also submit a proof of address."))),c.a.createElement(s.a,null)),r)}},"@deriv/components":function(t,n){t.exports=e},"@deriv/shared":function(e,n){e.exports=t},"@deriv/translations":function(e,t){e.exports=n},react:function(e,t){e.exports=a}}).default}));
//# sourceMappingURL=poi-upload-complete.js.map