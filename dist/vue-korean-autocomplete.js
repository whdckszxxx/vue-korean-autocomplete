!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueKoreanAutocomplete=e():t.VueKoreanAutocomplete=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=1)}([function(t,e,n){"use strict";var r=n(9);e.a={name:"vue-korean-autocomplete",data:function(){return{input:null,data:null,debounceTimer:null,matches:null,cursorOffset:null,lastInputValue:null}},props:{debounceTime:{type:Number,default:50},inputClass:{type:String,required:!1,default:""},ulClass:{type:String,required:!1,default:""},liClass:{type:String,required:!1,default:""},activeClass:{type:String,required:!1,default:"cursor"},autoFocus:{type:Boolean,required:!1,default:!1}},beforeMount:function(){var t=this;this.$emit("load",{setter:function(e){if(!(e instanceof Array))return void console.error("@load 이벤트의 setter 넘기는 인자는 array of string 이어야 합니다.");t.data=e.map(function(t){return{original:t,disassembled:r.disassemble(t).join("").toLowerCase()}})}})},methods:{onInput:function(t){var e=this;t.target.value!==this.lastInputValue&&(this.debounceTimer&&clearTimeout(this.debounceTimer),this.input=t.target.value,this.debounceTimer=setTimeout(function(){e.search(e.input),e.debounceTimer=null,e.lastInputValue=t.target.value},this.debounceTime))},search:function(t){if(null===t||0===t.length)return void(this.matches=[]);this.matches=this.findMatches(t),this.initCursor()},findMatches:function(t){var e=r.disassemble(t).join("").toLowerCase(),n=[];return null===this.data?(console.warn("data is not set. make sure you implemented function for @load"),[]):(this.data.forEach(function(t){var r=t.original;t.disassembled.indexOf(e)>-1&&n.push(r)}),n)},initCursor:function(){this.cursorOffset=-1},cursorUp:function(t){t.preventDefault(),this.cursorOffset>-1&&this.cursorOffset--},cursorDown:function(t){t.preventDefault(),this.cursorOffset<this.matches.length&&this.cursorOffset++},cursorSelect:function(){this.cursorOffset<0||(this.input=this.matches[this.cursorOffset],this.initCursor(),this.resetMatches())},resetMatches:function(){this.matches=null},blur:function(t){this.$emit("blur",t)},focus:function(t){this.$emit("focus",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default=r.a,void 0!==window&&window.Vue&&window.Vue.component("korean-autocomplete",r.a)},function(t,e,n){"use strict";function r(t){n(3)}var o=n(0),i=n(10),u=n(8),s=r,a=u(o.a,i.a,!1,s,"data-v-1be0ef4a",null);e.a=a.exports},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(6)("88f5318a",r,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,".kr-auto-complete .matches-box ul[data-v-1be0ef4a]{list-style-type:none;padding:0}.kr-auto-complete .matches-box ul li.cursor[data-v-1be0ef4a]{background-color:#ddd}.kr-auto-complete input[data-v-1be0ef4a]{width:100%}",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var u=[],o=0;o<n.parts.length;o++)u.push(i(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:u}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var e,n,r=document.querySelector("style["+g+'~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(C){var i=p++;r=d||(d=o()),e=u.bind(null,r,i,!1),n=u.bind(null,r,i,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function u(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),m.ssrId&&t.setAttribute(g,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),f={},l=a&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},m=null,g="data-vue-ssr-id",C="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){h=n,m=o||{};var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var u=i[o],s=f[u.id];s.refs--,n.push(s)}e?(i=c(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete f[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],u=i[0],s=i[1],a=i[2],c=i[3],f={id:t+":"+o,css:s,media:a,sourceMap:c};r[u]?r[u].parts.push(f):n.push(r[u]={id:u,parts:[f]})}return n}},function(t,e){t.exports=function(t,e,n,r,o,i){var u,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(u=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var f;if(i?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=f):r&&(f=r),f){var l=c.functional,d=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(t,e){return f.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,f):[f]}return{esModule:u,exports:s,options:c}}},function(t,e,n){var r;!function(){"use strict";function o(t){for(var e=t.length,n={0:0},r=0;r<e;r++)t[r]&&(n[t[r].charCodeAt(0)]=r);return n}function i(t){for(var e,n,r=t.length,o={},i=0;i<r;i++)e=t[i][0].charCodeAt(0),n=t[i][1].charCodeAt(0),void 0===o[e]&&(o[e]={}),o[e][n]=t[i][2].charCodeAt(0);return o}function u(t){return void 0!==h[t]}function s(t){return void 0!==v[t]}function a(t){return void 0!==m[t]}function c(t){return void 0!==g[t]}function f(t){return 44032<=t&&t<=55203}function l(t,e){return!(!y[t]||!y[t][e])&&y[t][e]}function d(t,e){return!(!C[t]||!C[t][e])&&C[t][e]}function p(t){this.string=t,this.disassembled=U(t).join("")}var h,v,m,g,C,y,b=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],A=["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ",["ㅗ","ㅏ"],["ㅗ","ㅐ"],["ㅗ","ㅣ"],"ㅛ","ㅜ",["ㅜ","ㅓ"],["ㅜ","ㅔ"],["ㅜ","ㅣ"],"ㅠ","ㅡ",["ㅡ","ㅣ"],"ㅣ"],x=["","ㄱ","ㄲ",["ㄱ","ㅅ"],"ㄴ",["ㄴ","ㅈ"],["ㄴ","ㅎ"],"ㄷ","ㄹ",["ㄹ","ㄱ"],["ㄹ","ㅁ"],["ㄹ","ㅂ"],["ㄹ","ㅅ"],["ㄹ","ㅌ"],["ㄹ","ㅍ"],["ㄹ","ㅎ"],"ㅁ","ㅂ",["ㅂ","ㅅ"],"ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],_=44032,j=["ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄸ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅃ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],w=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],S=["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"],k=["","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],O=[["ㄱ","ㅅ","ㄳ"],["ㄴ","ㅈ","ㄵ"],["ㄴ","ㅎ","ㄶ"],["ㄹ","ㄱ","ㄺ"],["ㄹ","ㅁ","ㄻ"],["ㄹ","ㅂ","ㄼ"],["ㄹ","ㅅ","ㄽ"],["ㄹ","ㅌ","ㄾ"],["ㄹ","ㅍ","ㄿ"],["ㄹ","ㅎ","ㅀ"],["ㅂ","ㅅ","ㅄ"]],T=[["ㅗ","ㅏ","ㅘ"],["ㅗ","ㅐ","ㅙ"],["ㅗ","ㅣ","ㅚ"],["ㅜ","ㅓ","ㅝ"],["ㅜ","ㅔ","ㅞ"],["ㅜ","ㅣ","ㅟ"],["ㅡ","ㅣ","ㅢ"]];h=o(j),v=o(w),m=o(S),g=o(k),C=i(O),y=i(T);var U=function(t,e){if(null===t)throw new Error("Arguments cannot be null");"object"==typeof t&&(t=t.join(""));for(var n,r,o,i,c,l=[],d=t.length,p=0;p<d;p++){var h=[];i=t.charCodeAt(p),f(i)?(i-=_,o=i%28,r=(i-o)/28%21,n=parseInt((i-o)/28/21),h.push(b[n]),"object"==typeof A[r]?h=h.concat(A[r]):h.push(A[r]),o>0&&("object"==typeof x[o]?h=h.concat(x[o]):h.push(x[o]))):u(i)?(c=s(i)?b[v[i]]:x[g[i]],"string"==typeof c?h.push(c):h=h.concat(c)):a(i)?(c=A[m[i]],"string"==typeof c?h.push(c):h=h.concat(c)):h.push(t.charAt(p)),e?l.push(h):l=l.concat(h)}return l},E=function(t){return"string"!=typeof t?"":(t=U(t),t.join(""))},M=function(t){function e(e){var n,r,i,u,c=0,p="";if(!(f+1>e))for(var h=1;;h++){if(1===h){if(n=t[f+h].charCodeAt(0),a(n))return f+h+1<=e&&a(r=t[f+h+1].charCodeAt(0))?(o.push(String.fromCharCode(l(n,r))),void(f=e)):(o.push(t[f+h]),void(f=e));if(!s(n))return o.push(t[f+h]),void(f=e);p=t[f+h]}else if(2===h){if(r=t[f+h].charCodeAt(0),s(r))return n=d(n,r),p=String.fromCharCode(n),o.push(p),void(f=e);p=String.fromCharCode(28*(21*v[n]+m[r])+_)}else 3===h?(i=t[f+h].charCodeAt(0),l(r,i)?r=l(r,i):c=i,p=String.fromCharCode(28*(21*v[n]+m[r])+g[c]+_)):4===h?(u=t[f+h].charCodeAt(0),c=d(c,u)?d(c,u):u,p=String.fromCharCode(28*(21*v[n]+m[r])+g[c]+_)):5===h&&(u=t[f+h].charCodeAt(0),c=d(c,u),p=String.fromCharCode(28*(21*v[n]+m[r])+g[c]+_));if(f+h>=e)return o.push(p),void(f=e)}}"string"==typeof t&&(t=U(t));for(var n,r,o=[],i=t.length,u=0,f=-1,p=0;p<i;p++)n=t[p].charCodeAt(0),s(n)||a(n)||c(n)?(0===u?s(n)?u=1:a(n)&&(u=4):1==u?a(n)?u=2:d(r,n)?u=5:e(p-1):2==u?c(n)?u=3:a(n)?l(r,n)||(e(p-1),u=4):(e(p-1),u=1):3==u?c(n)?d(r,n)||(e(p-1),u=1):s(n)?(e(p-1),u=1):a(n)&&(e(p-2),u=2):4==u?a(n)?l(r,n)?(e(p),u=0):e(p-1):(e(p-1),u=1):5==u&&(a(n)?(e(p-2),u=2):(e(p-1),u=1)),r=n):(e(p-1),e(p),u=0);return e(p-1),o.join("")},R=function(t,e){var n=U(t).join(""),r=U(e).join("");return n.indexOf(r)},N=function(t,e){function n(t){for(var e=0,n=0;e<s.length;++e)if(n+=s[e].length,t<n)return e}function r(t){for(var e=0,n=0;e<s.length;++e)if(n+=s[e].length,t+u.length<=n)return e}var o,i=U(t).join(""),u=U(e).join(""),s=U(t,!0),a=new RegExp(u,"gi"),c=[];if(!e.length)return[];for(;o=a.exec(i);)c.push(o.index);return c.map(function(t){return[n(t),r(t)]})};p.prototype.search=function(t){return U(t).join("").indexOf(this.disassembled)};var V=function(t){"object"==typeof t&&(t=t.join(""));var e=t.charCodeAt(t.length-1);if(f(e)){e-=_;if(e%28>0)return!0}else if(u(e))return!0;return!1},D={disassemble:U,d:U,disassembleToString:E,ds:E,assemble:M,a:M,search:R,rangeSearch:N,Searcher:p,endsWithConsonant:V,isHangul:function(t){return"string"==typeof t&&(t=t.charCodeAt(0)),f(t)},isComplete:function(t){return"string"==typeof t&&(t=t.charCodeAt(0)),f(t)},isConsonant:function(t){return"string"==typeof t&&(t=t.charCodeAt(0)),u(t)},isVowel:function(t){return"string"==typeof t&&(t=t.charCodeAt(0)),a(t)},isCho:function(t){return"string"==typeof t&&(t=t.charCodeAt(0)),s(t)},isJong:function(t){return"string"==typeof t&&(t=t.charCodeAt(0)),c(t)},isHangulAll:function(t){if("string"!=typeof t)return!1;for(var e=0;e<t.length;e++)if(!f(t.charCodeAt(e)))return!1;return!0},isCompleteAll:function(t){if("string"!=typeof t)return!1;for(var e=0;e<t.length;e++)if(!f(t.charCodeAt(e)))return!1;return!0},isConsonantAll:function(t){if("string"!=typeof t)return!1;for(var e=0;e<t.length;e++)if(!u(t.charCodeAt(e)))return!1;return!0},isVowelAll:function(t){if("string"!=typeof t)return!1;for(var e=0;e<t.length;e++)if(!a(t.charCodeAt(e)))return!1;return!0},isChoAll:function(t){if("string"!=typeof t)return!1;for(var e=0;e<t.length;e++)if(!s(t.charCodeAt(e)))return!1;return!0},isJongAll:function(t){if("string"!=typeof t)return!1;for(var e=0;e<t.length;e++)if(!c(t.charCodeAt(e)))return!1;return!0}};void 0!==(r=function(){return D}.call(e,n,e,t))&&(t.exports=r)}()},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"kr-auto-complete"},[n("input",{class:t.inputClass,attrs:{type:"text",autofocus:t.autoFocus},domProps:{value:t.input},on:{input:t.onInput,keydown:[function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?(e.preventDefault(),t.cursorUp(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?(e.preventDefault(),t.cursorDown(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.cursorSelect(e):null}],blur:t.blur,focus:t.focus}}),t._v(" "),t.matches?n("div",{staticClass:"matches-box"},[0===t.matches.length?[t._t("no-matches",[t._v("\n        Could not find any matches\n      ")])]:[n("ul",{class:t.ulClass},t._l(t.matches,function(e,r){return n("li",{key:r,class:[t.liClass,t.cursorOffset===r?t.activeClass:""]},[t._v(t._s(e))])}))]],2):t._e()])},o=[],i={render:r,staticRenderFns:o};e.a=i}])});