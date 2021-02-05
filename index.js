!function(){"use strict";
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
     */const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,r=new RegExp(`${s}|${i}`),n="$lit$";class o{constructor(t,e){this.parts=[],this.element=e;const i=[],o=[],l=document.createTreeWalker(e.content,133,null,!1);let c=0,u=-1,p=0;const{strings:m,values:{length:g}}=t;for(;p<g;){const t=l.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)a(e[t].name,n)&&i++;for(;i-- >0;){const e=m[p],s=d.exec(e)[2],i=s.toLowerCase()+n,o=t.getAttribute(i);t.removeAttribute(i);const a=o.split(r);this.parts.push({type:"attribute",index:u,name:s,strings:a}),p+=a.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,o=e.split(r),l=o.length-1;for(let e=0;e<l;e++){let i,r=o[e];if(""===r)i=h();else{const t=d.exec(r);null!==t&&a(t[2],n)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-n.length)+t[3]),i=document.createTextNode(r)}s.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===o[l]?(s.insertBefore(h(),t),i.push(t)):t.data=o[l],p+=l}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&u!==c||(u++,e.insertBefore(h(),t)),c=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),p++}}else l.currentNode=o.pop()}for(const t of i)t.parentNode.removeChild(t)}}const a=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},l=t=>-1!==t.index,h=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(t,e){const{element:{content:s},parts:i}=t,r=document.createTreeWalker(s,133,null,!1);let n=p(i),o=i[n],a=-1,l=0;const h=[];let d=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(h.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,n=p(i,n),o=i[n]}h.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},p=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(l(e))return s}return-1};
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
const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),f={},v={};
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
class y{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let n,o=0,a=0,h=r.nextNode();for(;o<i.length;)if(n=i[o],l(n)){for(;a<n.index;)a++,"TEMPLATE"===h.nodeName&&(s.push(h),r.currentNode=h.content),null===(h=r.nextNode())&&(r.currentNode=s.pop(),h=r.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(h.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(h,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
     */const _=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${s} `;class w{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let o=0;o<t;o++){const t=this.strings[o],a=t.lastIndexOf("\x3c!--");r=(a>-1||r)&&-1===t.indexOf("--\x3e",a+1);const l=d.exec(t);e+=null===l?t+(r?b:i):t.substr(0,l.index)+l[1]+l[2]+n+l[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==_&&(e=_.createHTML(e)),t.innerHTML=e,t}}
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
     */const S=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new M(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let i="";for(let r=0;r<e;r++){i+=t[r];const e=s[r];if(void 0!==e){const t=e.value;if(S(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class M{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||S(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=h()),t.__insert(this.endNode=h())}insertAfterPart(t){t.__insert(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===v?(this.value=v,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const r of t)s=e[i],void 0===s&&(s=new C(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(r),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class E extends P{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends M{}let $=!1;(()=>{try{const t={get capture(){return $=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class T{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=k(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&($?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function V(t){let e=U.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},U.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(s);return i=e.keyString.get(r),void 0===i&&(i=new o(t,t.getTemplateElement()),e.keyString.set(r,i)),e.stringsArray.set(t.strings,i),i}const U=new Map,O=new WeakMap;
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
     */const L=new
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
class{handleAttributeExpressions(t,e,s,i){const r=e[0];if("."===r){return new E(t,e.slice(1),s).parts}if("@"===r)return[new T(t,e.slice(1),i.eventContext)];if("?"===r)return[new N(t,e.slice(1),s)];return new P(t,e,s).parts}handleTextExpression(t){return new C(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const z=(t,...e)=>new w(t,e,"html",L)
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
     */,R=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const q=t=>e=>{const i=R(e.type,t);let r=U.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},U.set(i,r));let n=r.stringsArray.get(e.strings);if(void 0!==n)return n;const a=e.strings.join(s);if(n=r.keyString.get(a),void 0===n){const s=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(s,t),n=new o(e,s),r.keyString.set(a,n)}return r.stringsArray.set(e.strings,n),n},j=["html","svg"],I=new Set,F=(t,e,s)=>{I.add(t);const i=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<n;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{j.forEach((e=>{const s=U.get(R(e,t));void 0!==s&&s.keyString.forEach((t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{s.add(t)})),c(t,s)}))}))})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:r}=t;if(null==s)return void i.appendChild(e);const n=document.createTreeWalker(i,133,null,!1);let o=p(r),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===s&&(a=u(e),s.parentNode.insertBefore(e,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=p(r,o);return}o=p(r,o)}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),c(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),D={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:B},J="finalized";class X extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=D){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdateInternal(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||D}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=B){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||W,r="function"==typeof i?i:i.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||W.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=D){const i=this.constructor,r=i._attributeNameForProperty(t,s);if(void 0!==r){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let i=!0;if(void 0!==t){const r=this.constructor;s=s||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}X.finalized=!0;
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
const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class Q{constructor(t,e){if(e!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Y=(t,...e)=>{const s=e.reduce(((e,s,i)=>e+(t=>{if(t instanceof Q)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1]),t[0]);return new Q(s,G)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Z={};class tt extends X{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight(((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t)),s),s=e(t,new Set),i=[];s.forEach((t=>i.unshift(t))),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new Q(String(e),G)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Z&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Z}}tt.finalized=!0,tt.render=(t,s,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,n=O.has(s),o=H&&11===s.nodeType&&!!s.host,a=o&&!I.has(r),l=a?document.createDocumentFragment():s;if(((t,s,i)=>{let r=O.get(s);void 0===r&&(e(s,s.firstChild),O.set(s,r=new C(Object.assign({templateFactory:V},i))),r.appendInto(s)),r.setValue(t),r.commit()})(t,l,Object.assign({templateFactory:q(r)},i)),a){const t=O.get(l);O.delete(l);const i=t.value instanceof y?t.value.template:void 0;F(r,l,i),e(s,s.firstChild),s.appendChild(l),O.set(s,t)}!n&&o&&window.ShadyCSS.styleElement(s.host)};class et extends tt{get root(){return this.shadowRoot}render(){return z`<p>Element</p>`}}const st=()=>{const t=new CustomEvent("didNavigate",{bubbles:!0,composed:!0});document.dispatchEvent(t),console.log("didNavigate")};const it=navigator.userAgent,rt=[/Build\/MRA58K/i],nt={get is_ios(){return nt.isiOS},get is_android(){return nt.isAndroid},get is_mobile(){return nt.isMobile},get isWindows(){return/Win/.test(it)},get isMac(){return/Mac/.test(it)},get isLinux(){return/Linux/.test(it)},get minScreenSize(){return window.outerWidth<window.outerHeight?window.outerWidth:window.outerHeight},get isSmallDevice(){return this.minScreenSize<=699},get isiOS(){return/iPad|iPhone|iPod/.test(it)||nt.isMac&&void 0!==navigator.standalone},get isiPad(){return/iPad/.test(it)||!nt.isiOS&&nt.isMac&&void 0!==navigator.standalone},get isAndroid(){return/android/i.test(it)},get isTouch(){return"ontouchstart"in window},get isMobile(){return nt.isiOS||nt.isAndroid},get isHandheldScanner(){return!!rt.find((t=>t.test(it)))},get isiOSChrome(){return/CriOS/.test(it)},get isElectron(){return/Electron/.test(it)},get electronVersion(){let t=it.match(/Electron\/([\d\.]+) /);return t?t[1]:0},get isChromeInstalledApp(){return this.isInstalled&&/Chrome/.test(it)},get isInstalled(){return navigator.standalone||window.matchMedia("(display-mode: standalone)").matches},get isStandalone(){return nt.isInstalled},applyClasses(){const t=document.documentElement;t&&(t.classList.toggle("mobile",nt.isMobile),t.classList.toggle("ios",nt.isiOS),t.classList.toggle("electron",nt.isElectron),t.classList.toggle("android",nt.isAndroid),t.classList.toggle("mac",nt.isMac),t.classList.toggle("windows",nt.isWindows),t.classList.toggle("installed",nt.isInstalled))}};customElements.define("range-slider",class extends tt{static get properties(){return{min:{type:Number},max:{type:Number},step:{type:Number},range:{type:Boolean,reflect:!0},value:{type:Object},label:{type:String,reflect:!0}}}constructor(){super(),this.mouseUp=this.mouseUp.bind(this),this.mouseMove=this.mouseMove.bind(this),this.label="auto",this.range=!1,this.min=0,this.max=100,this.step=1,this.valMin=0,this.valMax=0,this.value=[0,0]}static get styles(){return Y`
        :host {
            --size: 6px;
            --thumbSize: 18px;
            --color: var(--fc-theme);
            --thumbColor: var(--color);
            --bgd: var(--theme-text-accent, rgba(0,0,0,.4));
            --padding: 10px;

            display: inline-block;
            vertical-align: middle;
            position:relative;
            width: 140px;
            height: var(--size);
            margin: 0 auto;
            padding: var(--padding) 0;
            cursor: pointer;
            font-size: .9em;
            user-select: none;
            --label-rotation: 45deg;
        }

        rail, track {
            display: block;
            height: var(--size);
            width: 100%;
            background: var(--color);
            border-radius: 6px;
            position: absolute;
            top: var(--padding);
            left: 0;
        }

        rail {
            background: var(--bgd);
        }

        thumb {
            height: var(--thumbSize);
            width: var(--thumbSize);
            transform: translate(-50%, -50%);
            position: absolute;
            left: 0;
            top: calc(var(--padding) + (var(--size) / 2));
            background: var(--thumbColor);
            border-radius: var(--thumbSize);
            box-shadow: 0 0 0 1px var(--theme-bgd, var(--thumb-shadow, #fff)) inset
        }

        thumb:before {
            content: '';
            position: absolute;
            height: 250%;
            width: 250%;
            left: -75%;
            top: -75%;
            background: var(--thumbColor);
            opacity: .2;
            border-radius: 30px;
            z-index: -1;
            transform: scale(.3);
            transform-origin: center center;
            opacity: 0;
            transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        thumb:hover:before {
            transform: scale(.9);
            opacity: .2;
        }

        thumb[active]:before {
            transform: scale(1);
            opacity: .2;
        }

        thumb[active] {
            background: var(--color);
        }

        thumb > div {
            position: absolute;
            font-size: .9em;
            background: var(--color);
            color: #fff;
            height: 2.2em;
            width: 2.2em;
            display: flex;
            justify-content: center;
            align-items: center;
            bottom: 100%;
            left: 50%;
            position: absolute;
            transform-origin: bottom left;
            transform: translate(0%,-4px) rotate(calc(-1 * var(--label-rotation))) scale(0);
            border-radius: 50% 50% 50% 0;
            transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            
        }

        :host([label*="bottom"]) thumb > div{
            bottom: auto;
            top: calc(0% - 4px);
            --label-rotation: -135deg;
        }

        thumb > div > span {
            transform: rotate(var(--label-rotation))
        }

        :host([label*="show"]) thumb > div,
        thumb:hover > div,
        thumb[active] > div {
            transform: translate(0%,-4px) rotate(calc(-1 * var(--label-rotation))) scale(1);
        }

        :host([label*="none"]) thumb > div {
            display: none !important;
        }

        :host(:not([range])) thumb[min] {
            display: none;
        }

        .labels {
            display: flex;
            justify-content: space-between;
            margin-top: .75em;
        }
    `}_polishVal(t){return(t=parseFloat((Math.round(t/this.step)*this.step).toFixed(2)))<this.min&&(t=this.min),t>this.max&&(t=this.max),t}set value(t){let e=this.value,s=this.valMin,i=this.valMax;if("string"==typeof t&&(t=t.split(",").map((t=>parseFloat(t)))),Array.isArray(t)){if("number"!=typeof t[0]||"number"!=typeof t[1])return;return t.sort(),this.range&&(this.valMin=this._polishVal(t[0])),this.valMax=this._polishVal(t[1]),void this.requestUpdate("value",e)}if("number"!=typeof t)return;t=this._polishVal(t);let r=Math.abs(this.valMin-t),n=Math.abs(this.valMax-t);if("max"==this._active&&t==this.valMin?(this.valMax=t,this.range&&(this._active="min")):"min"==this._active&&t==this.valMax?(this.valMin=t,this._active="max"):!this.range||r==n&&this.valMax>this.valMin&&"max"==this._active||n<r||t>this.valMax?(this.valMax=t,this._active="max"):(this.valMin=t,this.range&&(this._active="min")),this._mouseDown||(this._active=null),s==this.valMin&&i==this.valMax)return;this._didChange=!0;let o=this.parentElement&&"FORM-CONTROL"==this.parentElement.tagName?this.parentElement:this;this.range?(o.style.setProperty("--range-slider-min-val",`'${this.valMin}'`),o.style.setProperty("--range-slider-max-val",`'${this.valMax}'`)):o.style.setProperty("--range-slider-val",`'${this.valMax}'`),this.requestUpdate("value",e)}get value(){return this.range?[this.valMin,this.valMax]:this.valMax}connectedCallback(){super.connectedCallback(),this.addEventListener(nt.isMobile?"touchstart":"mousedown",this.mouseDown,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(nt.isMobile?"touchstart":"mousedown",this.mouseDown,!0)}get _len(){return this.max-this.min}get _minLeft(){return(this.valMin-this.min)/this._len*100}get _maxLeft(){return(this.valMax-this.min)/this._len*100}get _trackLength(){return this._maxLeft-this._minLeft}get atMin(){return(this.range?this.valMin:this.valMax)==this.min}get atMax(){return this.valMax==this.max}reset(){this.valMin=this.min,this.valMax=this.min,this.value=[this.valMin,this.valMax],this.update()}render(){return z`
        <rail></rail>
        <track style="left:${this._minLeft}%; width:${this._trackLength}%"></track>
        <thumb min ?active=${"min"==this._active} style="left:${this._minLeft}%">
            <div><span>${this.valMin}</span></div>
        </thumb>
        <thumb max ?active=${"max"==this._active} style="left:${this._maxLeft}%">
            <div><span>${this.valMax}</span></div>
        </thumb>
        <div class="labels">
            <b-text sm muted><slot name="label:min"></slot></b-text>
            <b-text sm muted><slot name="label:max"></slot></b-text>
        </div>
    `}mouseDown(t){(nt.isMobile||1===t.which)&&(window.addEventListener(nt.isMobile?"touchend":"mouseup",this.mouseUp,!0),window.addEventListener(nt.isMobile?"touchmove":"mousemove",this.mouseMove,!0),this._mouseDown=!0,this.mouseMove(t))}mouseUp(){this._active=null,this._mouseDown=!1,window.removeEventListener(nt.isMobile?"touchend":"mouseup",this.mouseUp,!0),window.removeEventListener(nt.isMobile?"touchmove":"mousemove",this.mouseMove,!0),this.update(),this._didChange&&(this._didChange=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:this.value}})))}mouseMove(t){if("min"==this._active&&t.pageX<this._lastMousePos&&this.atMin)return;if("max"==this._active&&t.pageX>this._lastMousePos&&this.atMax)return;this._lastMousePos=t.pageX;let e=this.getBoundingClientRect(),s=e.x,i=(e.y,((t.touches?t.touches[0].screenX:t.screenX)-window.screenX-s)/this.clientWidth*100/100*this._len+this.min),r=this.value;this.value=i,r!=this.value&&this.dispatchEvent(new CustomEvent("changing",{bubbles:!0,composed:!0,detail:{value:this.value}}))}}),customElements.get("range-slider");window.addEventListener("popstate",(()=>st())),customElements.define("base-element",et),customElements.define("shop-subcategory-list",class extends et{static get styles(){return Y`
            :host {
                display: block;
            }
            .subs {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
                margin: 1rem 0 0;
            }
            @media (min-width: 767px) {
                .subs {
                    grid-template-columns: repeat(5, 1fr);
                }
            }
            .breadcrumbs {
                margin: 0 0 1rem;
            }
            .breadcrumbs a {
                color: #313333;
                font-size: 0.85rem;
                text-decoration: none;
            }

            .breadcrumbs a + a:before {
                font-family: icomoon;
                content: "\\e92a";
                font-size: 0.6em;
                margin: 0 0.25em;
                position: relative;
                top: -1px;
            }
        `}static get properties(){return{current:{type:Object},subs:{type:Array},id:{type:String}}}get categories(){return window.siteConfig.categoryIndex.slice(0)}get breadcrumbs(){return this.current.path.slice(0).reverse().map((t=>this.categories.find((e=>e.id==t))))}navigate(){const t=document.location.pathname.replace(/^\/|\/$/g,"");this.current=this.categories.find((e=>e.url==t)),this.id=this.current.id,this.subs=this.categories.filter((t=>t.path.slice(1).shift()==this.current.id)),this.requestUpdate()}async firstUpdated(){this.navigate(),document.addEventListener("didNavigate",(()=>this.navigate()))}fixHeaderHeights(){const t=[...this.root.querySelectorAll("shop-subcategory-tile")];t.map((t=>t.headerHeight=0));const e={};t.map((t=>{const s=t.headerPosition;return e[s.top]=e[s.top]||[],e[s.top].push(s.height),t})).map((t=>{const s=t.headerPosition,i=e[s.top].reduce(((t,e)=>e>t?e:t),0);t.headerHeight=i}))}render(){const t=(t,e)=>(t.preventDefault(),history.pushState({},this.title,e),st(),!1);if(this.current)return setTimeout((()=>this.fixHeaderHeights()),80),setTimeout((()=>this.fixHeaderHeights()),500),z`
            <div class="breadcrumbs">
                <a href="/">Home</a>
                ${this.breadcrumbs.map((e=>{const s=`/${e.url}/`;return z`
                        <a @click=${e=>t(e,s)} href=${s}>
                            ${e.title}
                        </a>
                    `}))}
            </div>
            <div class="subs">
                ${this.subs.map((t=>z`
                        <shop-subcategory-tile
                            id=${t.id}
                            title=${t.title}
                            url=${t.url}
                            description=${t.description}
                            image=${t.image}
                            path=${t.path}
                        ></shop-subcategory-tile>
                    `))}
            </div>
        `}}),customElements.define("shop-subcategory-tile",class extends et{static get properties(){return{id:{type:String},title:{type:String},url:{type:String},description:{type:String},image:{type:String},path:{type:Array}}}static get styles(){return Y`
            :host {
                display: block;
            }
            a {
                cursor: pointer;
            }
            .tile {
                display: block;
            }
            img {
                width: 100%;
            }
            header {
                font-size: 20px;
                font-weight: 700;
                padding: 0.5rem 0;
                box-sizing: border-box;
            }
        `}get headerPosition(){const t=this.root.querySelector("header");return{top:t.offsetTop,height:t.offsetHeight}}get headerHeight(){return this.root.querySelector("header").offsetHeight}set headerHeight(t){const e=t?`${t}px`:"auto";this.root.querySelector("header").style.height=e}render(){return z`
            <a @click=${()=>{history.pushState({},this.title,`/${this.url}/`),st()}} class="tile">
                <header>${this.title}</header>
                <main><img src=${this.image} /></main>
                <footer></footer>
            </a>
        `}}),customElements.define("shop-category-view",class extends et{static get styles(){return Y`
            :host {
                display: grid;
                margin: 1rem 0 3rem;
                gap: 1rem;
            }
            .filters {
                grid-row: 2;
            }
            @media (min-width: 767px) {
                :host {
                    grid-template-columns: 1fr 4fr;
                }
                .filters {
                    grid-row: 1;
                }
            }
        `}static get properties(){return{url:{type:Object},min:{type:Number},max:{type:Number},page:{type:Number},limit:{type:Number},count:{type:Number},filters:{type:Array},products:{type:Array}}}constructor(){super(),this.products=[],this.filters=[]}get endpoint(){return window.siteConfig.collectionEndpoint}get categories(){return window.siteConfig.categoryIndex.slice(0)}async fetch(t){const e=t.pathname.replace(/^\/|\/$/g,""),s=this.categories.find((t=>t.url==e));if(!s)throw`Could not find category ${s}`;Object.assign(this,{url:t,products:[]});const i=new URL(`${this.endpoint}`,window.origin);i.searchParams.set("category",s.id);const r=await fetch(i),n=await r.json(),o=(n.filters||[]).map((t=>(t.selection=n.filter[t.id]||[],t)));Object.assign(this,{min:n.min,max:n.max,page:n.page,limit:n.limit,count:n.count,filters:o,products:n.products})}navigate(){const t=new URL(window.location);t!=this.url&&this.fetch(t)}firstUpdated(){document.addEventListener("didNavigate",(()=>this.navigate())),this.navigate()}render(){return z`
            <div class="filters">
                ${this.filters.map((t=>z`
                        <shop-category-filter
                            .id=${t._id}
                            .display_name=${t.display_name}
                            .type=${t.type}
                            .values=${t.values}
                            .selection=${t.selection}
                        ></shop-category-filter>
                    `))}
            </div>
            <div class="results">
                ${this.products.map((t=>z`
                        <shop-category-product
                            .priceExcl=${t.priceExcl}
                            .url=${t.url}
                            .title=${t.title}
                            .fulltitle=${t.fulltitle}
                            .image_url=${t.image_url}
                            .product_set=${t.product_set}
                            .variants=${t.variants}
                        ></shop-category-product>
                    `))}
            </div>
        `}}),customElements.define("shop-category-product",class extends et{static get styles(){return Y``}render(){return z`<p>Product</p>`}}),customElements.define("shop-category-filter",class extends et{static get styles(){return Y`
            :host {
                display: block;
            }
            header {
                position: relative;
                font-family: "Nunito Sans", Helvetica, sans-serif;
                color: #313333;
                font-size: 0.9rem;
                line-height: 1.5rem;
                font-weight: 700;
                letter-spacing: 0.05em;
                text-transform: none;
                cursor: pointer;
            }
            main {
                display: none;
            }
            main.open {
                display: block;
            }
            .toggle {
                position: absolute;
                top: 0;
                right: 0;
                line-height: 1.5rem;
            }
            .toggle:before {
                font-family: icomoon;
                content: "\\e922";
                font-size: 10px;
            }
            .toggle.open:before {
                content: "\\e920";
            }
        `}static get properties(){return{open:{type:Boolean},id:{type:String},display_name:{type:String},type:{type:String},values:{type:Array},selection:{type:Array}}}constructor(){super(),this.open=!0}render(){const t=this.open?"open":"",e=this.open?"toggle open":"toggle";return z`
            <header @click=${()=>this.open=!this.open}>
                ${this.display_name}
                <span class=${e}></span>
            </header>
            <main class=${t}>
                <p>Filter values</p>
                <range-slider
                    range
                    min="300"
                    max="1000"
                    .value=${[400,800]}
                    style="width: 100%"
                ></range-slider>
            </main>
        `}})}();
//# sourceMappingURL=index.js.map
