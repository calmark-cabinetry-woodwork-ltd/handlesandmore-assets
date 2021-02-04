!function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(i,o){var a=e.apply(n,r);function s(e){t(a,i,o,s,u,"next",e)}function u(e){t(a,i,o,s,u,"throw",e)}s(void 0)}))}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,n){return(c=l()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&u(i,n.prototype),i}).apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)})(e)}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){var t=l();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return p(this,n)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=m(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */var S="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,b=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var r=t.nextSibling;e.removeChild(t),t=r}},w="{{lit-".concat(String(Math.random()).slice(2),"}}"),k="\x3c!--".concat(w,"--\x3e"),x=new RegExp("".concat(w,"|").concat(k)),P="$lit$",N=function e(t,n){r(this,e),this.parts=[],this.element=n;for(var i=[],o=[],a=document.createTreeWalker(n.content,133,null,!1),s=0,u=-1,l=0,c=t.strings,h=t.values.length;l<h;){var p=a.nextNode();if(null!==p){if(u++,1===p.nodeType){if(p.hasAttributes()){for(var d=p.attributes,f=d.length,v=0,y=0;y<f;y++)C(d[y].name,P)&&v++;for(;v-- >0;){var m=c[l],g=E.exec(m)[2],_=g.toLowerCase()+P,S=p.getAttribute(_);p.removeAttribute(_);var b=S.split(x);this.parts.push({type:"attribute",index:u,name:g,strings:b}),l+=b.length-1}}"TEMPLATE"===p.tagName&&(o.push(p),a.currentNode=p.content)}else if(3===p.nodeType){var k=p.data;if(k.indexOf(w)>=0){for(var N=p.parentNode,A=k.split(x),O=A.length-1,V=0;V<O;V++){var R=void 0,U=A[V];if(""===U)R=T();else{var j=E.exec(U);null!==j&&C(j[2],P)&&(U=U.slice(0,j.index)+j[1]+j[2].slice(0,-P.length)+j[3]),R=document.createTextNode(U)}N.insertBefore(R,p),this.parts.push({type:"node",index:++u})}""===A[O]?(N.insertBefore(T(),p),i.push(p)):p.data=A[O],l+=O}}else if(8===p.nodeType)if(p.data===w){var M=p.parentNode;null!==p.previousSibling&&u!==s||(u++,M.insertBefore(T(),p)),s=u,this.parts.push({type:"node",index:u}),null===p.nextSibling?p.data="":(i.push(p),u--),l++}else for(var H=-1;-1!==(H=p.data.indexOf(w,H+1));)this.parts.push({type:"node",index:-1}),l++}else a.currentNode=o.pop()}for(var q=0,I=i;q<I.length;q++){var z=I[q];z.parentNode.removeChild(z)}},C=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},A=function(e){return-1!==e.index},T=function(){return document.createComment("")},E=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,O=133;function V(e,t){for(var n=e.element.content,r=e.parts,i=document.createTreeWalker(n,O,null,!1),o=U(r),a=r[o],s=-1,u=0,l=[],c=null;i.nextNode();){s++;var h=i.currentNode;for(h.previousSibling===c&&(c=null),t.has(h)&&(l.push(h),null===c&&(c=h)),null!==c&&u++;void 0!==a&&a.index===s;)a.index=null!==c?-1:a.index-u,a=r[o=U(r,o)]}l.forEach((function(e){return e.parentNode.removeChild(e)}))}var R=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,O,null,!1);n.nextNode();)t++;return t},U=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=t+1;n<e.length;n++){var r=e[n];if(A(r))return n}return-1};
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
var j=new WeakMap,M=function(e){return"function"==typeof e&&j.has(e)},H={},q={},I=function(){function e(t,n,i){r(this,e),this.__parts=[],this.template=t,this.processor=n,this.options=i}return o(e,[{key:"update",value:function(e){var t,n=0,r=_(this.__parts);try{for(r.s();!(t=r.n()).done;){var i=t.value;void 0!==i&&i.setValue(e[n]),n++}}catch(e){r.e(e)}finally{r.f()}var o,a=_(this.__parts);try{for(a.s();!(o=a.n()).done;){var s=o.value;void 0!==s&&s.commit()}}catch(e){a.e(e)}finally{a.f()}}},{key:"_clone",value:function(){for(var e,t=S?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1),o=0,a=0,s=i.nextNode();o<r.length;)if(e=r[o],A(e)){for(;a<e.index;)a++,"TEMPLATE"===s.nodeName&&(n.push(s),i.currentNode=s.content),null===(s=i.nextNode())&&(i.currentNode=n.pop(),s=i.nextNode());if("node"===e.type){var u=this.processor.handleTextExpression(this.options);u.insertAfterNode(s.previousSibling),this.__parts.push(u)}else{var l;(l=this.__parts).push.apply(l,y(this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return S&&(document.adoptNode(t),customElements.upgrade(t)),t}}]),e}(),z=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function(e){return e}}),L=" ".concat(w," "),F=function(){function e(t,n,i,o){r(this,e),this.strings=t,this.values=n,this.type=i,this.processor=o}return o(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,r=0;r<e;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var a=E.exec(i);t+=null===a?i+(n?L:k):i.substr(0,a.index)+a[1]+a[2]+P+a[3]+w}return t+=this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template"),t=this.getHTML();return void 0!==z&&(t=z.createHTML(t)),e.innerHTML=t,e}}]),e}(),B=function(t){return null===t||!("object"===e(t)||"function"==typeof t)},D=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},W=function(){function t(e,n,i){r(this,t),this.dirty=!0,this.element=e,this.name=n,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return o(t,[{key:"_createPart",value:function(){return new J(this)}},{key:"_getValue",value:function(){var t=this.strings,n=t.length-1,r=this.parts;if(1===n&&""===t[0]&&""===t[1]){var i=r[0].value;if("symbol"===e(i))return String(i);if("string"==typeof i||!D(i))return i}for(var o="",a=0;a<n;a++){o+=t[a];var s=r[a];if(void 0!==s){var u=s.value;if(B(u)||!D(u))o+="string"==typeof u?u:String(u);else{var l,c=_(u);try{for(c.s();!(l=c.n()).done;){var h=l.value;o+="string"==typeof h?h:String(h)}}catch(e){c.e(e)}finally{c.f()}}}}return o+=t[n]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),t}(),J=function(){function e(t){r(this,e),this.value=void 0,this.committer=t}return o(e,[{key:"setValue",value:function(e){e===H||B(e)&&e===this.value||(this.value=e,M(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;M(this.value);){var e=this.value;this.value=H,e(this)}this.value!==H&&this.committer.commit()}}]),e}(),$=function(){function e(t){r(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return o(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(T()),this.endNode=e.appendChild(T())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=T()),e.__insert(this.endNode=T())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=T()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;M(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=H,e(this)}var t=this.__pendingValue;t!==H&&(B(t)?t!==this.value&&this.__commitText(t):t instanceof F?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):D(t)?this.__commitIterable(t):t===q?(this.value=q,this.clear()):this.__commitText(t))}}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof I&&this.value.template===t)this.value.update(e.values);else{var n=new I(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,i=this.value,o=0,a=_(t);try{for(a.s();!(r=a.n()).done;){var s=r.value;void 0===(n=i[o])&&(n=new e(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(s),n.commit(),o++}}catch(e){a.e(e)}finally{a.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;b(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),G=function(){function e(t,n,i){if(r(this,e),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=n,this.strings=i}return o(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;M(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=H,e(this)}if(this.__pendingValue!==H){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=H}}}]),e}(),K=function(e){a(n,e);var t=d(n);function n(e,i,o){var a;return r(this,n),(a=t.call(this,e,i,o)).single=2===o.length&&""===o[0]&&""===o[1],a}return o(n,[{key:"_createPart",value:function(){return new Q(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:f(s(n.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),n}(W),Q=function(e){a(n,e);var t=d(n);function n(){return r(this,n),t.apply(this,arguments)}return n}(J),X=!1;!function(){try{var e={get capture(){return X=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}}();var Y=function(){function e(t,n,i){var o=this;r(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=n,this.eventContext=i,this.__boundHandleEvent=function(e){return o.handleEvent(e)}}return o(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;M(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=H,e(this)}if(this.__pendingValue!==H){var t=this.__pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),i=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Z(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=H}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),Z=function(e){return e&&(X?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)};
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
function ee(e){var t=te.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},te.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(w);return void 0===(n=t.keyString.get(r))&&(n=new N(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var te=new Map,ne=new WeakMap,re=new(function(){function e(){r(this,e)}return o(e,[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new K(e,t.slice(1),n).parts:"@"===i?[new Y(e,t.slice(1),r.eventContext)]:"?"===i?[new G(e,t.slice(1),n)]:new W(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new $(e)}}]),e}());
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");var ie=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new F(e,n,"html",re)},oe=function(e,t){return"".concat(e,"--").concat(t)},ae=!0;void 0===window.ShadyCSS?ae=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ae=!1);var se=function(e){return function(t){var n=oe(t.type,e),r=te.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},te.set(n,r));var i=r.stringsArray.get(t.strings);if(void 0!==i)return i;var o=t.strings.join(w);if(void 0===(i=r.keyString.get(o))){var a=t.getTemplateElement();ae&&window.ShadyCSS.prepareTemplateDom(a,e),i=new N(t,a),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i}},ue=["html","svg"],le=new Set,ce=function(e,t,n){le.add(e);var r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),o=i.length;if(0!==o){for(var a=document.createElement("style"),s=0;s<o;s++){var u=i[s];u.parentNode.removeChild(u),a.textContent+=u.textContent}!function(e){ue.forEach((function(t){var n=te.get(oe(t,e));void 0!==n&&n.keyString.forEach((function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach((function(e){n.add(e)})),V(e,n)}))}))}(e);var l=r.content;n?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.element.content,i=e.parts;if(null!=n)for(var o=document.createTreeWalker(r,O,null,!1),a=U(i),s=0,u=-1;o.nextNode();){for(u++,o.currentNode===n&&(s=R(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===u;){if(s>0){for(;-1!==a;)i[a].index+=s,a=U(i,a);return}a=U(i,a)}}else r.appendChild(t)}(n,a,l.firstChild):l.insertBefore(a,l.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);var c=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){l.insertBefore(a,l.firstChild);var h=new Set;h.add(a),V(n,h)}}else window.ShadyCSS.prepareTemplateStyles(r,e)};window.JSCompiler_renameProperty=function(e,t){return e};var he={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},pe=function(e,t){return t!==e&&(t==t||e==e)},de={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:pe},fe="finalized",ve=function(t){a(u,t);var i,s=d(u);function u(){var e;return r(this,u),(e=s.call(this)).initialize(),e}return o(u,[{key:"initialize",value:function(){var e=this;this._updateState=0,this._updatePromise=new Promise((function(t){return e._enableUpdatingResolver=t})),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach((function(t,n){if(e.hasOwnProperty(n)){var r=e[n];delete e[n],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(n,r)}}))}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach((function(t,n){return e[n]=t})),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this.enableUpdating()}},{key:"enableUpdating",value:function(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this._attributeToProperty(e,n)}},{key:"_propertyToAttribute",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:de,r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){var o=r._propertyValueToAttribute(t,n);if(void 0===o)return;this._updateState=8|this._updateState,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){var i=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,i),this._updateState=-17&this._updateState}}}},{key:"requestUpdateInternal",value:function(e,t,n){var r=!0;if(void 0!==e){var i=this.constructor;n=n||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}},{key:"requestUpdate",value:function(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:(i=n(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,e.prev=1,e.next=4,this._updatePromise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:if(null==(t=this.performUpdate())){e.next=12;break}return e.next=12,t;case 12:return e.abrupt("return",!this._hasRequestedUpdate);case 13:case"end":return e.stop()}}),e,this,[[1,6]])}))),function(){return i.apply(this,arguments)})},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"performUpdate",value:function(){if(this._hasRequestedUpdate){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"updateComplete",get:function(){return this._getUpdateComplete()}},{key:"_getUpdateComplete",value:function(){return this._updatePromise}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((function(e,n){return t._propertyToAttribute(n,t[n],e)})),this._reflectingProperties=void 0),this._markUpdated()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}}],[{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach((function(n,r){var i=e._attributeNameForProperty(r,n);void 0!==i&&(e._attributeToPropertyMap.set(i,r),t.push(i))})),t}},{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((function(t,n){return e._classProperties.set(n,t)}))}}},{key:"createProperty",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:de;if(this._ensureClassProperties(),this._classProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){var r="symbol"===e(t)?Symbol():"__".concat(t),i=this.getPropertyDescriptor(t,r,n);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}},{key:"getPropertyDescriptor",value:function(e,t,n){return{get:function(){return this[t]},set:function(r){var i=this[e];this[t]=r,this.requestUpdateInternal(e,i,n)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){return this._classProperties&&this._classProperties.get(e)||de}},{key:"finalize",value:function(){var e=Object.getPrototypeOf(this);if(e.hasOwnProperty(fe)||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t,n=this.properties,r=_([].concat(y(Object.getOwnPropertyNames(n)),y("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n):[])));try{for(r.s();!(t=r.n()).done;){var i=t.value;this.createProperty(i,n[i])}}catch(e){r.e(e)}finally{r.f()}}}},{key:"_attributeNameForProperty",value:function(e,t){var n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:pe;return n(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var n=t.type,r=t.converter||he,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var n=t.type,r=t.converter;return(r&&r.toAttribute||he.toAttribute)(e,n)}}}]),u}(h(HTMLElement));ve.finalized=!0;
/**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
var ye=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,me=Symbol(),ge=function(){function e(t,n){if(r(this,e),n!==me)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}return o(e,[{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(ye?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}},{key:"toString",value:function(){return this.cssText}}]),e}(),_e=function(e){if(e instanceof ge)return e.cssText;if("number"==typeof e)return e;throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(e,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))},Se=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n.reduce((function(t,n,r){return t+_e(n)+e[r+1]}),e[0]);return new ge(i,me)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");var be,we,ke,xe,Pe,Ne,Ce,Ae,Te={},Ee=function(e){a(n,e);var t=d(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"initialize",value:function(){f(s(n.prototype),"initialize",this).call(this),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ye?this.renderRoot.adoptedStyleSheets=e.map((function(e){return e instanceof CSSStyleSheet?e:e.styleSheet})):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((function(e){return e.cssText})),this.localName))}},{key:"connectedCallback",value:function(){f(s(n.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var t=this,r=this.render();f(s(n.prototype),"update",this).call(this,e),r!==Te&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((function(e){var n=document.createElement("style");n.textContent=e.cssText,t.renderRoot.appendChild(n)})))}},{key:"render",value:function(){return Te}}],[{key:"getStyles",value:function(){return this.styles}},{key:"_getUniqueStyles",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){var e=this.getStyles();if(Array.isArray(e)){var t=function e(t,n){return t.reduceRight((function(t,n){return Array.isArray(n)?e(n,t):(t.add(n),t)}),n)}(e,new Set),n=[];t.forEach((function(e){return n.unshift(e)})),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((function(e){if(e instanceof CSSStyleSheet&&!ye){var t=Array.prototype.slice.call(e.cssRules).reduce((function(e,t){return e+t.cssText}),"");return new ge(String(t),me)}return e}))}}}]),n}(ve);Ee.finalized=!0,Ee.render=function(t,n,r){if(!r||"object"!==e(r)||!r.scopeName)throw new Error("The `scopeName` option is required.");var i=r.scopeName,o=ne.has(n),a=ae&&11===n.nodeType&&!!n.host,s=a&&!le.has(i),u=s?document.createDocumentFragment():n;if(function(e,t,n){var r=ne.get(t);void 0===r&&(b(t,t.firstChild),ne.set(t,r=new $(Object.assign({templateFactory:ee},n))),r.appendInto(t)),r.setValue(e),r.commit()}(t,u,Object.assign({templateFactory:se(i)},r)),s){var l=ne.get(u);ne.delete(u);var c=l.value instanceof I?l.value.template:void 0;ce(i,u,c),b(n,n.firstChild),n.appendChild(u),ne.set(n,l)}!o&&a&&window.ShadyCSS.styleElement(n.host)};var Oe=function(e){a(n,e);var t=d(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"root",get:function(){return this.shadowRoot}},{key:"render",value:function(){return ie(be||(be=v(["<p>Element</p>"])))}}],[{key:"styles",get:function(){return Se(we||(we=v(["\n            :host {\n                display: block;\n                font-family: Helvetica Neue, Helvetica, sans-serif;\n            }\n        "])))}}]),n}(Ee),Ve=function(){var e=new CustomEvent("didNavigate",{bubbles:!0,composed:!0});document.dispatchEvent(e),console.log("didNavigate")};window.addEventListener("popstate",(function(){return Ve()})),customElements.define("base-element",Oe);var Re=function(e){a(s,e);var t,i=d(s);function s(){return r(this,s),i.apply(this,arguments)}return o(s,[{key:"categories",get:function(){return window.categoryIndex.slice(0)}},{key:"breadcrumbs",get:function(){var e=this;return this.current.path.slice(0).reverse().map((function(t){return e.categories.find((function(e){return e.id==t}))}))}},{key:"navigate",value:function(){var e=this,t=document.location.pathname.replace(/^\/|\/$/g,"");this.current=this.categories.find((function(e){return e.url==t})),this.id=this.current.id,this.subs=this.categories.filter((function(t){return t.path.slice(1).shift()==e.current.id})),this.requestUpdate()}},{key:"firstUpdated",value:(t=n(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.navigate(),document.addEventListener("didNavigate",(function(){return t.navigate()}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"fixHeaderHeights",value:function(){var e=y(this.root.querySelectorAll("shop-subcategory-tile"));e.map((function(e){return e.headerHeight=0}));var t={};e.map((function(e){var n=e.headerPosition;return t[n.top]=t[n.top]||[],t[n.top].push(n.height),e})).map((function(e){var n=e.headerPosition,r=t[n.top].reduce((function(e,t){return t>e?t:e}),0);e.headerHeight=r}))}},{key:"render",value:function(){var e=this;if(this.current)return setTimeout((function(){return e.fixHeaderHeights()}),80),setTimeout((function(){return e.fixHeaderHeights()}),500),ie(ke||(ke=v(['\n            <div class="breadcrumbs">\n                <a href="/">Home</a>\n                ','\n            </div>\n            <div class="subs">\n                ',"\n            </div>\n        "])),this.breadcrumbs.map((function(t){var n="/".concat(t.url,"/");return ie(xe||(xe=v(["\n                        <a @click="," href=",">\n                            ","\n                        </a>\n                    "])),(function(t){return function(t,n){return t.preventDefault(),history.pushState({},e.title,n),Ve(),!1}(t,n)}),n,t.title)})),this.subs.map((function(e){return ie(Pe||(Pe=v(["\n                        <shop-subcategory-tile\n                            id=","\n                            title=","\n                            url=","\n                            description=","\n                            image=","\n                            path=","\n                        ></shop-subcategory-tile>\n                    "])),e.id,e.title,e.url,e.description,e.image,e.path)})))}}],[{key:"styles",get:function(){return Se(Ne||(Ne=v(['\n            :host {\n                display: block;\n            }\n            .subs {\n                display: grid;\n                grid-template-columns: repeat(2, 1fr);\n                gap: 1rem;\n                margin: 1rem 0 0;\n            }\n            @media (min-width: 767px) {\n                .subs {\n                    grid-template-columns: repeat(5, 1fr);\n                }\n            }\n            .breadcrumbs {\n                margin: 0 0 1rem;\n            }\n            .breadcrumbs a {\n                color: #313333;\n                font-size: 0.85rem;\n                text-decoration: none;\n            }\n\n            .breadcrumbs a + a:before {\n                font-family: icomoon;\n                content: "\\e92a";\n                font-size: 0.6em;\n                margin: 0 0.25em;\n                position: relative;\n                top: -1px;\n            }\n        '],['\n            :host {\n                display: block;\n            }\n            .subs {\n                display: grid;\n                grid-template-columns: repeat(2, 1fr);\n                gap: 1rem;\n                margin: 1rem 0 0;\n            }\n            @media (min-width: 767px) {\n                .subs {\n                    grid-template-columns: repeat(5, 1fr);\n                }\n            }\n            .breadcrumbs {\n                margin: 0 0 1rem;\n            }\n            .breadcrumbs a {\n                color: #313333;\n                font-size: 0.85rem;\n                text-decoration: none;\n            }\n\n            .breadcrumbs a + a:before {\n                font-family: icomoon;\n                content: "\\\\e92a";\n                font-size: 0.6em;\n                margin: 0 0.25em;\n                position: relative;\n                top: -1px;\n            }\n        '])))}},{key:"attributes",get:function(){return{current:{type:Object},subs:{type:Array},id:{type:String}}}}]),s}(Oe);customElements.define("shop-subcategory-list",Re);var Ue=function(e){a(n,e);var t=d(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"headerPosition",get:function(){var e=this.root.querySelector("header");return{top:e.offsetTop,height:e.offsetHeight}}},{key:"headerHeight",get:function(){return this.root.querySelector("header").offsetHeight},set:function(e){var t=e?"".concat(e,"px"):"auto";this.root.querySelector("header").style.height=t}},{key:"render",value:function(){var e=this;return ie(Ce||(Ce=v(["\n            <a @click=",' class="tile">\n                <header>',"</header>\n                <main><img src="," /></main>\n                <footer></footer>\n            </a>\n        "])),(function(){history.pushState({},e.title,"/".concat(e.url,"/")),Ve()}),this.title,this.image)}}],[{key:"properties",get:function(){return{id:{type:String},title:{type:String},url:{type:String},description:{type:String},image:{type:String},path:{type:Array}}}},{key:"styles",get:function(){return Se(Ae||(Ae=v(['\n            :host {\n                font-family: "Nunito Sans", sans-serif;\n            }\n            a {\n                cursor: pointer;\n            }\n            .tile {\n                display: block;\n            }\n            img {\n                width: 100%;\n            }\n            header {\n                font-size: 20px;\n                font-weight: 700;\n                padding: 0.5rem 0;\n                box-sizing: border-box;\n            }\n        '])))}}]),n}(Oe);customElements.define("shop-subcategory-tile",Ue)}();
//# sourceMappingURL=index.nomodule.js.map