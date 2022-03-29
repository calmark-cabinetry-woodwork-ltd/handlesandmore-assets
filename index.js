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
     */const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${s}`),n="$lit$";class o{constructor(t,e){this.parts=[],this.element=e;const s=[],o=[],l=document.createTreeWalker(e.content,133,null,!1);let d=0,p=-1,u=0;const{strings:m,values:{length:g}}=t;for(;u<g;){const t=l.nextNode();if(null!==t){if(p++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)a(e[t].name,n)&&s++;for(;s-- >0;){const e=m[u],i=h.exec(e)[2],s=i.toLowerCase()+n,o=t.getAttribute(s);t.removeAttribute(s);const a=o.split(r);this.parts.push({type:"attribute",index:p,name:i,strings:a}),u+=a.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,o=e.split(r),l=o.length-1;for(let e=0;e<l;e++){let s,r=o[e];if(""===r)s=c();else{const t=h.exec(r);null!==t&&a(t[2],n)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-n.length)+t[3]),s=document.createTextNode(r)}i.insertBefore(s,t),this.parts.push({type:"node",index:++p})}""===o[l]?(i.insertBefore(c(),t),s.push(t)):t.data=o[l],u+=l}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&p!==d||(p++,e.insertBefore(c(),t)),d=p,this.parts.push({type:"node",index:p}),null===t.nextSibling?t.data="":(s.push(t),p--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),u++}}else l.currentNode=o.pop()}for(const t of s)t.parentNode.removeChild(t)}}const a=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:i},parts:s}=t,r=document.createTreeWalker(i,133,null,!1);let n=u(s),o=s[n],a=-1,l=0;const c=[];let h=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,n=u(s,n),o=s[n]}c.forEach((t=>t.parentNode.removeChild(t)))}const p=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},u=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
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
const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),b={},v={};
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
class f{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let n,o=0,a=0,c=r.nextNode();for(;o<s.length;)if(n=s[o],l(n)){for(;a<n.index;)a++,"TEMPLATE"===c.nodeName&&(i.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=i.pop(),c=r.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
     */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${i} `;class x{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let o=0;o<t;o++){const t=this.strings[o],a=t.lastIndexOf("\x3c!--");r=(a>-1||r)&&-1===t.indexOf("--\x3e",a+1);const l=h.exec(t);e+=null===l?t+(r?w:s):t.substr(0,l.index)+l[1]+l[2]+n+l[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==y&&(e=y.createHTML(e)),t.innerHTML=e,t}}
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
     */const _=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new $(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let s="";for(let r=0;r<e;r++){s+=t[r];const e=i[r];if(void 0!==e){const t=e.value;if(_(t)||!S(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(t){this.value=void 0,this.committer=t}setValue(t){t===b||_(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=b,t(this)}this.value!==b&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}const t=this.__pendingValue;t!==b&&(_(t)?t!==this.value&&this.__commitText(t):t instanceof x?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===v?(this.value=v,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof f&&this.value.template===e)this.value.update(t.values);else{const i=new f(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const r of t)i=e[s],void 0===i&&(i=new C(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(r),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}if(this.__pendingValue===b)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=b}}class P extends k{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends ${}let A=!1;(()=>{try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class N{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}if(this.__pendingValue===b)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=L(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=b}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const L=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function T(t){let e=z.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},z.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const r=t.strings.join(i);return s=e.keyString.get(r),void 0===s&&(s=new o(t,t.getTemplateElement()),e.keyString.set(r,s)),e.stringsArray.set(t.strings,s),s}const z=new Map,O=new WeakMap;
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
     */const U=new
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
class{handleAttributeExpressions(t,e,i,s){const r=e[0];if("."===r){return new P(t,e.slice(1),i).parts}if("@"===r)return[new N(t,e.slice(1),s.eventContext)];if("?"===r)return[new E(t,e.slice(1),i)];return new k(t,e,i).parts}handleTextExpression(t){return new C(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const V=(t,...e)=>new x(t,e,"html",U)
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
     */,R=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const H=t=>e=>{const s=R(e.type,t);let r=z.get(s);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},z.set(s,r));let n=r.stringsArray.get(e.strings);if(void 0!==n)return n;const a=e.strings.join(i);if(n=r.keyString.get(a),void 0===n){const i=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(i,t),n=new o(e,i),r.keyString.set(a,n)}return r.stringsArray.set(e.strings,n),n},j=["html","svg"],F=new Set,q=(t,e,i)=>{F.add(t);const s=i?i.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<n;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{j.forEach((e=>{const i=z.get(R(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),d(t,i)}))}))})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:r}=t;if(null==i)return void s.appendChild(e);const n=document.createTreeWalker(s,133,null,!1);let o=u(r),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===i&&(a=p(e),i.parentNode.insertBefore(e,i));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=u(r,o);return}o=u(r,o)}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),d(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const B={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),D={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:W},J="finalized";class X extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=D){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdateInternal(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||D}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=W){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||B,r="function"==typeof s?s:s.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||B.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=D){const s=this.constructor,r=s._attributeNameForProperty(t,i);if(void 0!==r){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const r=this.constructor;i=i||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}X.finalized=!0;
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
const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(t,e){if(e!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Z=(t,...e)=>{const i=e.reduce(((e,i,s)=>e+(t=>{if(t instanceof Q)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]);return new Q(i,K)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Y={};class tt extends X{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),s=[];i.forEach((t=>s.unshift(t))),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!G){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new Q(String(e),K)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Y}}tt.finalized=!0,tt.render=(t,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,n=O.has(i),o=I&&11===i.nodeType&&!!i.host,a=o&&!F.has(r),l=a?document.createDocumentFragment():i;if(((t,i,s)=>{let r=O.get(i);void 0===r&&(e(i,i.firstChild),O.set(i,r=new C(Object.assign({templateFactory:T},s))),r.appendInto(i)),r.setValue(t),r.commit()})(t,l,Object.assign({templateFactory:H(r)},s)),a){const t=O.get(l);O.delete(l);const s=t.value instanceof f?t.value.template:void 0;q(r,l,s),e(i,i.firstChild),i.appendChild(l),O.set(i,t)}!n&&o&&window.ShadyCSS.styleElement(i.host)};class et extends tt{get root(){return this.shadowRoot}static getOption(t){const e=window.localStorage.getItem(t)||null;return e?JSON.parse(e):null}static setOption(t,e){const i=e?JSON.stringify(e):null;window.localStorage.setItem(t,i)}render(){return V`<p>Element</p>`}trigger(t,e={},i=!0,s=!0){const r=new CustomEvent(t,{detail:e,bubbles:i,composed:s});this.dispatchEvent(r)}on(t,e){this.addEventListener(t,e)}off(t,e){this.removeEventListener(t,e)}}(()=>{const t=new URL(window.location),e=t.searchParams.get("tid");if(e){const i="tagview",s=e;if(window&&window.gtag&&window.gtag("event","tagview",{event_category:i,event_label:s}),window&&window.ga){const t="tagview",[e,s]=[i,s];window.ga("send","event",{eventAction:t,eventCategory:e,eventLabel:s})}t.searchParams.delete("tid"),history.pushState({},document.title,`${t}`)}})();const it=()=>{const t=new CustomEvent("didNavigate",{bubbles:!0,composed:!0});if(document.dispatchEvent(t),window&&window.gtag&&window.gtag("event","page_view",{page_title:document.title,page_location:window.location.href,page_path:window.location.pathname}),window&&window.ga){const t="page_view";window.ga("send","event",{eventAction:t,page_title:document.title,page_location:window.location.href,page_path:window.location.pathname})}},st=(async()=>(await(await fetch(window.siteConfig.categoryEndpoint)).json()).categories)(),rt=(t,e)=>{try{if(!t)return"";const i=new URL(t),s=i.pathname.split("/"),r=s.pop(),n=`${e}x${e}x1`;return s.push(n),s.push(r),i.pathname=s.join("/"),i.toString()}catch(t){return console.log({error:t}),""}};const nt=t=>Array.isArray(t)?t.map((t=>nt(t))):Math.round(parseFloat(t)/25.4*16)/16,ot=t=>Array.isArray(t)?t.map((t=>ot(t))):Math.round(25.5*parseFloat(t)*10)/10;class at extends et{static get properties(){return{key:{type:String},values:{type:Array},selection:{type:Array}}}get filterid(){return this.key.replace(/.*\[(.*)\].*/,"$1")}}customElements.define("shop-category-toggles",class extends at{static get styles(){return Z`
            .label span {
                font-size: 0.75rem;
                color: #313333;
                line-height: 1.8;
            }
            check-box {
                position: relative;
                left: -8px;
                width: 100%;
            }
            .wrapper.tall {
                max-height: 300px;
                overflow-y: scroll;
            }
        `}constructor(){super(),this.values=[],this.selection=[]}get $wrapper(){return this.root.querySelector(".wrapper")}render(){const t=t=>e=>{const i=e.detail.value?this.selection.concat(t):this.selection.filter((e=>e!==t));this.trigger("selection",{key:this.key,selection:i}),this.selection=i},e=this.values.length>20?"wrapper tall":"wrapper";return V`
            <div class=${e}>
                ${this.values.map((e=>V`
                        <check-box
                            @change=${t(e)}
                            type="switch"
                            label=${e}
                            .value=${this.selection.includes(e)}
                        >
                            <span class="label" slot="label">
                                <span>${e}</span>
                            </span>
                        </check-box>
                    `))}
            </div>
        `}});customElements.define("shop-category-minmax",class extends at{static get styles(){return Z`
            :host {
                display: block;
                padding: 0;
            }
            .range-slider-wrapper {
                padding: 0 8px 3px;
            }
            .input-min-max {
                display: grid;
                grid-template-columns: 1fr 10px 1fr;
                gap: 0;
            }
            .input-min-max div {
                position: relative;
                display: grid;
                grid-template-columns: 1fr auto;
                font-size: 0.85rem;
                align-items: baseline;
                opacity: 0.8;
                color: rgb(49, 51, 51);
                background-color: rgb(220, 218, 214);
                padding: 3px;
                border-bottom: 1px solid rgb(49, 51, 51);
            }
            .input-min-max div:after {
                content: " ";
                display: block;
                position: absolute;
                background-color: rgb(255, 68, 56);
                width: 100%;
                height: 1px;
                bottom: -1px;
                left: 0px;
                right: 0px;
                opacity: 0;
                transition: 0.1s opacity ease 0.1s;
            }
            .input-min-max div:focus-within:after {
                bottom: -1px;
                opacity: 1;
                height: 2px;
            }
            input {
                width: 100%;
                box-sizing: border-box;
                background-color: transparent;
                border: none;
                outline: none;
                font-size: 0.8rem;
            }
            .display-unit {
                display: none;
            }
            .display-unit.active {
                display: block;
            }
            check-box {
                position: relative;
                left: -8px;
                width: 100%;
            }
            .label span {
                font-size: 0.75rem;
                color: #313333;
                line-height: 1.8;
            }
        `}get autoconvert(){return"mm"==`${this.label}`.toLowerCase()}static get properties(){return Object.assign({min:{type:Number},max:{type:Number},label:{type:String},unit:{type:String},displayUnit:{type:String}},at.properties)}render(){const t=this.values.map((t=>parseFloat(t))),e=t.reduce(((t,e)=>t<e?t:e),1/0),i=t.reduce(((t,e)=>t>e?t:e),0);this.min!=e&&(this.min=e),this.max!=i&&(this.max=i);const s=(this.selection.length&&this.selection||[this.min,this.max]).map((t=>parseFloat(t))),r=t=>{const e=t[0]==this.min&&t[1]==this.max?[]:t;this.trigger("selection",{key:this.key,selection:e})},n=t=>e=>{let i=parseFloat(e.target.value);i=i>this.max?this.max:i<this.min?this.min:i,s[t]=i,r(s)},o=t=>e=>{let i=ot(e.target.value);i=i>this.max?this.max:i<this.min?this.min:i,s[t]=i,r(s)},{key:a,autoconvert:l,filterid:c}=this,h=`${c}-unit`,d=(et.getOption(h)||this.unit)==this.unit;return V`
            <div class="display-unit ${d?"active":""}">
                <div class="range-slider-wrapper">
                    <range-slider
                        range
                        step="1"
                        min=${this.min}
                        max=${this.max}
                        .value=${s}
                        style="width: 100%"
                        @change=${t=>{const e=t.detail.value;r(e)}}
                    ></range-slider>
                </div>
                <div class="input-min-max">
                    <div>
                        <input
                            @change=${n(0)}
                            type="number"
                            min=${this.min}
                            max=${s[1]}
                            .value=${s[0]}
                        />
                        <span> ${this.label} </span>
                    </div>
                    <span></span>
                    <div>
                        <input
                            @change=${n(1)}
                            type="number"
                            min=${s[0]}
                            max=${this.max}
                            .value=${s[1]}
                        />
                        <span> ${this.label} </span>
                    </div>
                </div>
            </div>

            ${l?V`
                      <div
                          class="display-unit ${d?"":"active"}"
                      >
                          <div class="range-slider-wrapper">
                              <range-slider
                                  range
                                  step="0.0625"
                                  min=${nt(this.min)}
                                  max=${nt(this.max)}
                                  .value=${nt(s)}
                                  style="width: 100%"
                                  @change=${t=>{const e=t.detail.value;r(ot(e))}}
                              ></range-slider>
                          </div>
                          <div class="input-min-max">
                              <div>
                                  <input
                                      @change=${o(0)}
                                      type="number"
                                      min=${nt(this.min)}
                                      max=${nt(s[1])}
                                      step="0.0625"
                                      .value=${nt(s[0])}
                                  />
                                  <span>in</span>
                              </div>
                              <span></span>
                              <div>
                                  <input
                                      @change=${o(1)}
                                      type="number"
                                      min=${nt(s[0])}
                                      max=${nt(this.max)}
                                      step="0.0625"
                                      .value=${nt(s[1])}
                                  />
                                  <span>in</span>
                              </div>
                          </div>
                      </div>
                      <check-box
                          @change=${t=>{const{value:e}=t.detail,i=e?this.unit:"alt";et.setOption(h,i),this.displayUnit=i}}
                          type="switch"
                          .value=${d}
                      >
                          <span class="label" slot="label">
                              <span>Metric</span>
                          </span>
                      </check-box>
                  `:V``}
        `}});customElements.define("shop-category-presets",class extends et{static get properties(){return{key:{type:String},selection:{type:Array},presets:{type:Array},mcat:{type:String}}}static get styles(){return Z`
            :host {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 0.5rem;
                margin: 1rem 0 1rem;
            }
            button {
                background-color: #dcdad6;
                color: #555;
                box-shadow: none;
                outline: none;
                border: 1px solid #b7b6b5;
                font-size: 0.8rem;
                padding: 0.35em 0em;
                box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
                transition: filter 200ms ease;
                transition-timing-function: ease-in-out;
                font-family: "Nunito Sans", sans-serif;
                border-radius: 50px;
                letter-spacing: 0.0625em;
                text-transform: none;
                text-decoration: none;
                line-height: 2em;
                font-weight: 400;
                cursor: pointer;
            }
            button.active {
                background-color: #ff4438;
                border: 1px solid #ff4438;
                color: white;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            }
        `}render(){const t=t=>t.values.find(((t,e)=>t!==this.selection[e]))?"":"active",e=e=>i=>{const s="active"==t(e)?[]:e.values;s.length&&this.mcat&&((t,e)=>{if(window&&window.ga){const i="click";window.ga("send","event",{eventAction:i,eventCategory:t,eventLabel:e})}})("measurement",this.mcat),this.trigger("selection",{key:this.key,selection:s})};return V`
            ${this.presets.map((i=>V`
                    <button @click=${e(i)} class="${t(i)}">
                        ${i.name}
                    </button>
                `))}
        `}});const lt=navigator.userAgent,ct=[/Build\/MRA58K/i],ht={get is_ios(){return ht.isiOS},get is_android(){return ht.isAndroid},get is_mobile(){return ht.isMobile},get isWindows(){return/Win/.test(lt)},get isMac(){return/Mac/.test(lt)},get isLinux(){return/Linux/.test(lt)},get minScreenSize(){return window.outerWidth<window.outerHeight?window.outerWidth:window.outerHeight},get isSmallDevice(){return this.minScreenSize<=699},get isiOS(){return/iPad|iPhone|iPod/.test(lt)||ht.isMac&&void 0!==navigator.standalone},get isiPad(){return/iPad/.test(lt)||!ht.isiOS&&ht.isMac&&void 0!==navigator.standalone},get isAndroid(){return/android/i.test(lt)},get isTouch(){return"ontouchstart"in window},get isMobile(){return ht.isiOS||ht.isAndroid},get isHandheldScanner(){return!!ct.find((t=>t.test(lt)))},get isiOSChrome(){return/CriOS/.test(lt)},get isElectron(){return/Electron/.test(lt)},get electronVersion(){let t=lt.match(/Electron\/([\d\.]+) /);return t?t[1]:0},get isChromeInstalledApp(){return this.isInstalled&&/Chrome/.test(lt)},get isInstalled(){return navigator.standalone||window.matchMedia("(display-mode: standalone)").matches},get isStandalone(){return ht.isInstalled},applyClasses(){const t=document.documentElement;t&&(t.classList.toggle("mobile",ht.isMobile),t.classList.toggle("ios",ht.isiOS),t.classList.toggle("electron",ht.isElectron),t.classList.toggle("android",ht.isAndroid),t.classList.toggle("mac",ht.isMac),t.classList.toggle("windows",ht.isWindows),t.classList.toggle("installed",ht.isInstalled))}};customElements.define("range-slider",class extends tt{static get properties(){return{min:{type:Number},max:{type:Number},step:{type:Number},range:{type:Boolean,reflect:!0},value:{type:Object},label:{type:String,reflect:!0}}}constructor(){super(),this.mouseUp=this.mouseUp.bind(this),this.mouseMove=this.mouseMove.bind(this),this.label="auto",this.range=!1,this.min=0,this.max=100,this.step=1,this.valMin=0,this.valMax=0,this.value=[0,0]}static get styles(){return Z`
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
    `}_polishVal(t){return(t=parseFloat((Math.round(t/this.step)*this.step).toFixed(2)))<this.min&&(t=this.min),t>this.max&&(t=this.max),t}set value(t){let e=this.value,i=this.valMin,s=this.valMax;if("string"==typeof t&&(t=t.split(",").map((t=>parseFloat(t)))),Array.isArray(t)){if("number"!=typeof t[0]||"number"!=typeof t[1])return;return t.sort(((t,e)=>t-e)),this.range&&(this.valMin=this._polishVal(t[0])),this.valMax=this._polishVal(t[1]),void this.requestUpdate("value",e)}if("number"!=typeof t)return;t=this._polishVal(t);let r=Math.abs(this.valMin-t),n=Math.abs(this.valMax-t);if("max"==this._active&&t==this.valMin?(this.valMax=t,this.range&&(this._active="min")):"min"==this._active&&t==this.valMax?(this.valMin=t,this._active="max"):!this.range||r==n&&this.valMax>this.valMin&&"max"==this._active||n<r||t>this.valMax?(this.valMax=t,this._active="max"):(this.valMin=t,this.range&&(this._active="min")),this._mouseDown||(this._active=null),i==this.valMin&&s==this.valMax)return;this._didChange=!0;let o=this.parentElement&&"FORM-CONTROL"==this.parentElement.tagName?this.parentElement:this;this.range?(o.style.setProperty("--range-slider-min-val",`'${this.valMin}'`),o.style.setProperty("--range-slider-max-val",`'${this.valMax}'`)):o.style.setProperty("--range-slider-val",`'${this.valMax}'`),this.requestUpdate("value",e)}get value(){return this.range?[this.valMin,this.valMax]:this.valMax}connectedCallback(){super.connectedCallback(),this.addEventListener(ht.isMobile?"touchstart":"mousedown",this.mouseDown,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(ht.isMobile?"touchstart":"mousedown",this.mouseDown,!0)}get _len(){return this.max-this.min}get _minLeft(){return(this.valMin-this.min)/this._len*100}get _maxLeft(){return(this.valMax-this.min)/this._len*100}get _trackLength(){return this._maxLeft-this._minLeft}get atMin(){return(this.range?this.valMin:this.valMax)==this.min}get atMax(){return this.valMax==this.max}reset(){this.valMin=this.min,this.valMax=this.min,this.value=[this.valMin,this.valMax],this.update()}render(){return V`
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
    `}mouseDown(t){(ht.isMobile||1===t.which)&&(window.addEventListener(ht.isMobile?"touchend":"mouseup",this.mouseUp,!0),window.addEventListener(ht.isMobile?"touchmove":"mousemove",this.mouseMove,!0),this._mouseDown=!0,this.mouseMove(t))}mouseUp(){this._active=null,this._mouseDown=!1,window.removeEventListener(ht.isMobile?"touchend":"mouseup",this.mouseUp,!0),window.removeEventListener(ht.isMobile?"touchmove":"mousemove",this.mouseMove,!0),this.update(),this._didChange&&(this._didChange=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:this.value}})))}mouseMove(t){if("min"==this._active&&t.pageX<this._lastMousePos&&this.atMin)return;if("max"==this._active&&t.pageX>this._lastMousePos&&this.atMax)return;this._lastMousePos=t.pageX;let e=this.getBoundingClientRect(),i=e.x,s=(e.y,((t.touches?t.touches[0].screenX:t.screenX)-window.screenX-i)/this.clientWidth*100/100*this._len+this.min),r=this.value;this.value=s,r!=this.value&&this.dispatchEvent(new CustomEvent("changing",{bubbles:!0,composed:!0,detail:{value:this.value}}))}}),customElements.get("range-slider");const dt=Z`

:host {
	opacity: 0;
	position: absolute;
	/* left: -7px;
	top: -7px;
	width: 48px;
	height: 48px; */
	width: 120%;
	height: 120%;
	left: -10%;
	top: -10%;
	display: block;
	z-index: 100;
	background: currentColor;
	border-radius: 50px;
}

:host(.enter) {
	opacity: 0.3;
	/* transform: scale(.5); */
	animation: ripple-enter 550ms cubic-bezier(0.4, 0, 0.2, 1);
	animation-name: ripple-enter;
}

:host(.exit) {
	opacity: 0;
	/* transform: scale(1); */
	animation: ripple-exit 550ms cubic-bezier(0.4, 0, 0.2, 1);
	animation-name: ripple-exit;
}


@-webkit-keyframes ripple-enter {
  0% {
    opacity: 0.1;
    transform: scale(0);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}
@-webkit-keyframes ripple-exit {
  0% {
    opacity: .3;
	transform: scale(.7);
  }
  100% {
    opacity: 0;
	transform: scale(1.2);
  }
}
@-webkit-keyframes ripple-pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  100% {
    transform: scale(1);
  }
}
`;class pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});let t=document.createElement("template");t.innerHTML=`\n\t\t\t<style>${dt.cssText}</style>\n\t\t`,this.shadowRoot.appendChild(t.content.cloneNode(!0))}ripple(){this.animate("exit")}enter(){this.classList.add("enter")}hide(){this.classList.remove("exit"),this.classList.remove("enter")}animate(t){this.hide(),this.classList.add(t),setTimeout((()=>this.classList.remove(t)),550)}}customElements.define("touch-ripple",pt),customElements.get("touch-ripple");const ut=Z`

:host {
	--size: 1.6em;
	--color: var(--fc-theme);
	--colorDisabled: var(--fc-disabled-color, rgba(0, 0, 0, 0.26));
	display: inline-block;
	vertical-align: middle;
	flex-grow: 0 !important;
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	outline: none;
}

:host([hidden]) { display: none; }

:host([checked]) svg.uncheck,
:host(:not([checked])) svg.check {
	display: none
}

main {
	position: relative;
	display: inherit;
}

:host([placement="top"]) { flex-direction: column-reverse; }
:host([placement="bottom"]) { flex-direction: column; }
:host([placement="left"]) { flex-direction: row-reverse; }
:host([placement="right"]) { flex-direction: row; }

svg {
	fill: currentColor;
	width: var(--size);
	height: var(--size);
	display: inline-block;
	transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	user-select: none;
	flex-shrink: 0;
	padding: .25em;
}

.switch {
	display: none
}

:host([type="switch"]) svg { display: none; }

:host([type="switch"]) .switch {
	display: inline-block;
}

:host([checked]) {
	color: var(--color)
}

:host([disabled]) {
	cursor: default;
}

:host([disabled]) svg {
	fill: var(--colorDisabled)
}

:host([disabled]) label {
	color: var(--colorDisabled);
}

main label {
	cursor: pointer;
}

.indeterminate {
	display: none;
}

.switch {
	position: relative;
	align-items: center;
	margin: .5em;
}

.switch:before, .switch:after {
	content: "";
	margin: 0;
	outline: 0;
	transition: all 0.3s ease;
}

.switch:before {
	display: block;
	width: 2em;
	height: 1em;
	background-color: #9E9E9E;
	border-radius: 1em;
}

.switch:after {
	position: absolute;
	left: 0;
	top: 50%;
	transform: translate(0, -50%);
	width: 1.3em;
	height: 1.3em;
	background-color: #FAFAFA;
	border-radius: 50%;
	box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);
}


:host([checked]) .switch:before {
	background-color: var(--color);
	opacity: .5
}

:host([checked]) .switch:after {
	background-color: var(--color);
	transform: translate(80%, -50%);
}
`;class mt extends HTMLElement{get key(){return this.getAttribute("key")}constructor(){super(),this.attachShadow({mode:"open"});let t=document.createElement("template"),e=this.getAttribute("label")||'<slot name="label"></slot>';t.innerHTML=`\n\t\t\t<style>\n\t\t\t${ut.cssText}\n\t\t\t</style>\n\t\t\t<main>\n\t\t\t\t<svg class="uncheck" focusable="false" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>\n\t\t\t\t<svg class="check" focusable="false" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>\n\t\t\t\t<div class="switch"></div>\n\t\t\t\t<touch-ripple></touch-ripple>\n\t\t\t</main>\n\t\t\t<label>${e}</label>\n\t\t\t`,this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.ripple=this.shadowRoot.querySelector("touch-ripple"),this.addEventListener("click",this._onClick.bind(this)),this.addEventListener("keydown",(t=>{["Space","Enter"].includes(t.code)&&this._onClick()})),this.addEventListener("focus",(t=>{t.relatedTarget&&t.relatedTarget!=this&&this.ripple.enter()})),this.addEventListener("blur",(t=>{t.relatedTarget&&t.relatedTarget!=this&&this.ripple.hide()}))}connectedCallback(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}_onClick(){if(!this.disabled){this.ripple.ripple(),this.checked=!this.checked;var t=new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:this.checked}});this.dispatchEvent(t)}}set checked(t){"0"!==t&&""!==t||(t=!1),t?this.setAttribute("checked",""):this.removeAttribute("checked")}get checked(){return this.hasAttribute("checked")}get value(){return this.checked}set value(t){this.checked=t}get disabled(){return this.hasAttribute("disabled")}set disabled(t=!0){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}}customElements.define("check-box",mt),customElements.get("check-box");class gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});let t=document.createElement("template");t.innerHTML='<style>\n\t\t\t:host {\n\t\t\t\t--size: .8em;\n\t\t\t\theight: var(--size);\n\t\t\t    width: var(--size);\n\t\t\t    display: inline-block;\n\t\t\t    vertical-align: middle;\n\t\t\t}\n\t\t\t\n\t\t\t:host(.overlay) {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translate(-50%, -50%);\n\t\t\t\tz-index: 10000;\n\t\t\t}\n\t\t\t\n\t\t\t@keyframes spin {\n\t\t\t\t100% {\n\t\t\t\t    transform: rotate(360deg);\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tsvg {\n\t\t\t\tanimation: spin 1s infinite linear;\n\t\t\t\ttransform-origin: center center;\n\t\t\t}\n\t\t\t</style>\n\t\t\t<svg viewBox="0 0 1024 1024" class="spin" data-icon="loading" width="100%" height="100%" fill="currentColor" aria-hidden="true">\n\t\t\t\t<path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>\n\t\t\t</svg>',this.shadowRoot.appendChild(t.content.cloneNode(!0))}}customElements.define("b-spinner",gt);const bt=new Map;let vt=!1;class ft extends HTMLElement{static register(...t){t.forEach((t=>{let e="";Array.isArray(t)&&([e,t]=t),function(t,e,{prefix:i="icon-"}={}){let s=document.createElement("div");s.innerHTML=e,e=s.firstElementChild,t||(t=(t=e.id||e.name||"").replace(i,"")),t?bt.get(t)?console.warn("There is already an icon registered with that name"):bt.set(t,e):console.warn("Icons must have a name")}(e,t)}))}get styles(){return'\n\t\t:host {\n\t\t\tdisplay: inline-flex;\n\t\t\tvertical-align: middle;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tcolor: inherit;\n\t\t\t--size: 1em;\n\t\t\theight: var(--size);\n\t\t}\n\n\t\t:host([hidden]) {\n\t\t\tdisplay: none !important;\n\t\t}\n\n\t\t:host([link]) {\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t:host([muted]) {\n\t\t\topacity: .5;\n\t\t}\n\n\t\t:host([square]) {\n\t\t\twidth: var(--size);\n\t\t}\n\n\t\t:host([invalid]) {\n\t\t\tbackground: #f44336;\n\t\t}\n\n\t\tsvg {\n\t\t\theight: 100%;\n\t\t\t/* width: 100%; */\n\t\t\tdisplay: inline-block;\n\t\t\tfill: currentColor;\n\t\t\tcolor: currentColor;\n\t\t}\n\n\t\t@keyframes rotate360 {\n\t\t\tto { transform: rotate(360deg); }\n\t\t}\n\n\t\t@keyframes rotate360CCW {\n\t\t\tto { transform: rotate(-360deg); }\n\t\t}\n\n\t\t:host([spin]) svg {\n\t\t\tanimation: 1600ms rotate360 infinite linear;\n\t\t}\n\n\t\t:host([name="arrows-ccw"][spin]) svg {\n\t\t\tanimation: 1600ms rotate360CCW infinite linear;\n\t\t}\n\t'}constructor(){super(),this.attachShadow({mode:"open"});let t=document.createElement("template");t.innerHTML=`<style>\n\t\t${this.styles}\n\t\t</style>\n\t\t<slot></slot>\n\t\t`,this.shadowRoot.appendChild(t.content.cloneNode(!0))}_setSVG(){0==bt.size&&(vt||(vt=!0,console.warn("No icons have been registered. Do so with `IconElement.register()` – Or import `bui/elements/icons/_all`"))),this._svg&&this._svg.remove();let t=bt.get(this.name);t?(this._svg=t.cloneNode(!0),this.removeAttribute("invalid"),this.shadowRoot.appendChild(this._svg)):this.setAttribute("invalid","")}static get observedAttributes(){return["name"]}attributeChangedCallback(t,e,i){"name"===t&&this._setSVG()}get name(){return this.getAttribute("name")}set name(t){return this.setAttribute("name",t)}set spin(t){this.toggleAttribute("spin",Boolean(t))}get spin(){return this.hasAttribute("spin")}}customElements.define("b-icon",ft);customElements.define("b-icon-list",class extends tt{static get properties(){return{cols:{type:Number,reflect:!0}}}constructor(){super(),this.cols=6}static get styles(){return Z`
		:host {
			display: block;
			column-count: 6;
			gap: 1em;
			width: 100%;
			font-size:1.2em;
			padding: 1em;
			overflow: auto;
		}

		:host([cols="1"]) { column-count: 1}
		:host([cols="2"]) { column-count: 2}
		:host([cols="3"]) { column-count: 3}
		:host([cols="4"]) { column-count: 4}
		:host([cols="5"]) { column-count: 5}
		:host([cols="6"]) { column-count: 6}

		:host > div {
			margin: .75em;
		}

		:host > div:first-child {
			margin-top: 0;
		}

		b-icon {
			width: 1.6em;
		}

		small {
			color: var(--theme-text-accent);
		}

		@media (max-width: 550px) {
            :host {
                column-count: 1 !important;
            }
        }
	`}render(){return V`
		${Array.from(bt.keys()).map((t=>V`
			<div>
				<b-icon name=${t}></b-icon> <small>${t}</small>
			</div>
		`))}
	`}});customElements.define("b-btn",class extends tt{static get properties(){return{href:{type:String,reflect:!0},value:{type:String,reflect:!0},icon:{type:String},spin:{type:Boolean,reflect:!0,attribute:"spin"}}}static get styles(){return Z`
    
        :host{
            --red: var(--red-700);
            /* --black: #333;
            --orange: #F57C00;
            --blue: #2196F3;
            --red: #d32f2f;
            --gray: #444444;
            --green: #27ae60;
            --yellow: #f2d57e;
            --teal: #009688;
            --purple: #7E57C2;
            --brown: #795548;
            --pink: #E91E63; */

            --radius: 3px;
            --color: var(--b-btn-bgd, var(--black)) ;
            --bgdColor: var(--color);
            --hoverBgdColor: rgba(255,255,255,.1);
            --textColor: var(--b-btn-color, #fff);
            --borderColor: var(--color);
            --borderStyle: solid;
            --borderWidth: 1px;
            --padding: .4em .6em;

            display: inline-grid;
            position: relative;
            box-sizing: border-box;
            background: var(--bgdColor);
            color: var(--textColor);
            border-radius: var(--radius);
            cursor: pointer;
            transition: 
                color 160ms,
                background-color 160ms,
                border 160ms;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            font-size: .9rem;
            line-height: 1rem;
            font-weight: bold;
            font-family: var(--b-btn-font);

            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; 
        }

        /* hide by default */
        @media print {
            :host {
                display: none;
            }
        }

        :host([hidden]) {
            display: none !important;
        }

        main {
            border-radius: var(--radius);
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: var(--padding);
            box-sizing: border-box;
            /*padding-bottom: .3em;*/ /* remove descender line to make it look more centered*/
            text-overflow: ellipsis;
            border: var(--borderStyle) var(--borderWidth) var(--borderColor);
            min-width: 0;
            /* word-break: break-all; */
            /* transition: 120ms; */
        }

        main > span {
            display: inline-flex;
            justify-content: center;
        }

        slot {
            display: block;
            margin-bottom: -.1em; /* remove descender line to make it look more centered*/
        }

        slot::slotted(*) {
            display: inline-block;
            margin-top: 0;
            margin-bottom: 0;
        }

        .hover {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: var(--hoverBgdColor);
            visibility: hidden;
            opacity: 0;
            /* mix-blend-mode: saturation; */
            border-radius: var(--radius);
            /* transition: 120ms; */
        }

        @media (hover) {
            :host(:hover) .hover {
                opacity: 1;
                visibility: visible;
            }
        }

        /* b-icon,
        ::slotted(b-icon) {
            vertical-align: bottom;
        } */

        b-spinner {
            opacity: 0;
            visibility: hidden;
            --size: 1em;
            margin-left: -1.35em;
            margin-right: .35em;
            transition: 120ms;
        }

        :host([spin]) b-spinner {
            opacity: 1;
            visibility: visible;
            margin-left: 0;
        }

        :host([spin]) b-icon {
            display: none;
        }

        main b-icon {
            margin-right: .35em;
            margin-left: -.15em;
        }

        :host([stacked]) {
            --padding: .3em .5em .1em .5em;
        }

        :host([stacked]) main {
            display: inline-grid;
            align-content: center;
        }

        :host([stacked]) b-icon {
            font-size: 1.2em;
            margin: 0;
        }

        :host([stacked]) slot {
            font-size: .6em;
            line-height: 1em;
        }

        :host([stacked]) slot::slotted(*) {
            opacity: var(--b-btn-stacked-label-opacity, .5);
        }

        :host([stacked]) slot[name="icon"] {
            font-size: 1em;
            display: contents;
        }

        :host([stacked]) slot[name="icon"]::slotted(*),
        :host([stacked]) slot[name="icon"] b-icon{
            opacity: var(--b-btn-stacked-icon-opacity, 1);
        }

        :host([stacked]) b-spinner {
            font-size: 1.2em;
            margin-right: 0;
            margin-left: -1em;
        }
        :host([stacked][spin]) b-spinner {
            margin-left: 0;
        }

        :host([block]) {
            display: block;
            text-align: center
        }

        :host([block]) main {
            display: flex;
            justify-content: center
        }

        :host(:empty) {
            --padding: .4em .5em;
        }

        :host(:empty) main b-icon {
            margin-left: 0;
            margin-right: 0;
        }

        /* offset play icon to make it appear more centered */
        :host(:empty) main b-icon[name="play"] {
			margin: 0 -.1em 0 .1em;
        }

        :host([color^="primary"])  { --color: var(--color-primary); }
        :host([color^="theme"])  { --color: var(--theme); }
        :host([color^="black"])  { --color: var(--black); }
        :host([color^="white"])  { --color: var(--white); --textColor: var(--black); }
        :host([color^="orange"]) { --color: var(--orange); }
        :host([color^="blue"])   { --color: var(--blue); }
        :host([color^="red"])    { --color: var(--red); }
        :host([color^="gray"])   { --color: var(--gray); }
        :host([color^="green"])  { --color: var(--green); }
        :host([color^="yellow"]) { --color: var(--yellow); }
        :host([color^="teal"])   { --color: var(--teal); }
        :host([color^="purple"]) { --color: var(--purple); }
        :host([color^="brown"])  { --color: var(--brown); }
        :host([color^="pink"])   { --color: var(--pink); }

        @media (hover){
        :host([color*="hover-black"]:hover)  { --color: var(--black); }
        :host([color*="hover-orange"]:hover) { --color: var(--orange); }
        :host([color*="hover-blue"]:hover)   { --color: var(--blue); }
        :host([color*="hover-red"]:hover)    { --color: var(--red); }
        :host([color*="hover-gray"]:hover)   { --color: var(--gray); }
        :host([color*="hover-green"]:hover)  { --color: var(--green); }
        :host([color*="hover-yellow"]:hover) { --color: var(--yellow); }
        :host([color*="hover-teal"]:hover)   { --color: var(--teal); }
        :host([color*="hover-purple"]:hover) { --color: var(--purple); }
        :host([color*="hover-brown"]:hover)  { --color: var(--brown); }
        :host([color*="hover-pink"]:hover)   { --color: var(--pink); }
        }

        :host([pill]) {
            --radius: 1em;
        }

        /* @media (hover) { */
        :host([outline]:not(:hover)) {
            --bgdColor: transparent;
            --textColor: var(--color);
        }
        /* } */

        /* :host([outline]:hover){
            --bgdColor: var(--color);
            --textColor: inherit;
        } */

        :host([text]),
        :host([clear]) {
            --bgdColor: transparent;
            --textColor: var(--color);
            --borderColor: transparent;
        }

        /* :host([text]) .hover,
        :host([clear]) .hover {
            display: none;
        } */

        :host([text]) {
            font-size: 1em;
            font-weight: normal;
        }

        @media (hover){
        :host([text]:hover),
        :host([clear]:hover) {
            --bgdColor: rgba(0,0,0,.05);
        }}

        :host([text].popover-open),
        :host([clear].popover-open) {
            --bgdColor: rgba(0,0,0,.05);
        }

        :host([xs]) { font-size: .6rem; }
        :host([sm]) { font-size: .8rem; }
        :host([lg]) { font-size: 1.2rem; }
        :host([xl]) { font-size: 1.4rem; }

        /* floating action btn */
        :host([fab]) {
            position: absolute;
            z-index: 100;
            box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
                        0px 6px 10px 0px rgba(0,0,0,0.14),
                        0px 1px 18px 0px rgba(0,0,0,0.12);
            bottom: 1rem;
            right: 1rem;
            font-size: 1.4em;
            width: 2em;
            height: 2em;
            --radius: 2em;
            overflow: hidden;
        }

        :host([fab]) b-spinner {
            margin-right: 0;
            margin-left: -1em;
        }

        :host([fab][spin]) b-spinner {
            margin-left: 0;
        }

        @keyframes shake {
            from,
            to {
                transform: translate3d(0, 0, 0);
            }

            15%,
            45%,
            75% {
                transform: translate3d(-.25em, 0, 0);
            }

            30%,
            60%,
            90% {
                transform: translate3d(.25em, 0, 0);
            }
        }

        :host(.shake) {
            animation-name: shake;
            animation-duration: 700ms;
            animation-fill-mode: both;
        }
    `}render(){return V`
        <div class="hover" part="hover"></div>
        <main part="main">
            <span>
                <b-spinner></b-spinner>
                <slot name="icon">
                    ${this.icon?V`<b-icon part="icon" name="${this.icon}"></b-icon>`:""}
                </slot>
            </span>
            <slot></slot>
        </main>
    `}constructor(){super(),this.icon="",this.spin=!1}firstUpdated(){this.addEventListener("click",(()=>{this.href&&("_blank"==this.getAttribute("target")?window.open(this.href):window.location=this.href)}),!0)}shake(){this.classList.add("shake"),setTimeout((()=>{this.classList.remove("shake")}),1e3)}}),customElements.define("b-btn-group",class extends tt{static get styles(){return Z`
        :host {
            display: inline-flex;
        }

        :host([hidden]) {
            display: none;
        }

        ::slotted(b-btn:first-of-type:not(:last-of-type)){
            border-radius: var(--radius) 0 0 var(--radius);
        }

        ::slotted(b-btn:not(:first-of-type):not(:last-of-type)){
            border-radius: 0;
            border-left: solid 1px rgba(0,0,0,.2);
        }

        ::slotted(b-btn:last-of-type:not(:first-of-type)){
            border-radius: 0 var(--radius) var(--radius) 0;
            border-left: solid 1px rgba(0,0,0,.2);
        }

        ::slotted(b-btn:not(:first-of-type)[clear]) {
            border-left: solid 1px rgba(0,0,0,.1);
        }


        :host([vert]) {
            flex-direction: column;
        }

        :host([vert]) ::slotted(b-btn:first-of-type:not(:last-of-type)){
            border-radius: var(--radius) var(--radius) 0 0;
        }

        :host([vert]) ::slotted(b-btn:not(:first-of-type):not(:last-of-type)){
            border-radius: 0;
            border-top: solid 1px rgba(0,0,0,.2);
            border-left: none;
        }

        :host([vert]) ::slotted(b-btn:last-of-type:not(:first-of-type)){
            border-radius: 0 0 var(--radius) var(--radius);
            border-top: solid 1px rgba(0,0,0,.2);
            border-left: none;
        }
    `}render(){return V`
        <slot></slot>
    `}}),customElements.get("b-btn-group"),window.addEventListener("popstate",(()=>it())),customElements.define("base-element",et),customElements.define("shop-subcategory-list",class extends et{static get styles(){return Z`
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
                font-family: hfont;
                content: var(--icon-content-caret-right);
                font-size: 0.6em;
                margin: 0 0.25em;
                position: relative;
                top: -1px;
            }
        `}static get properties(){return{current:{type:Object},subs:{type:Array},id:{type:String},search:{type:String,reflect:!0}}}get breadcrumbs(){return this.current.path.slice(0).reverse().map((t=>this.categories.find((e=>e.id==t))))}navigate(t=!1){const e=document.location.pathname.replace(/^\/|\/$/g,""),i=this.categories.find((t=>t.url==e));i?Object.assign(this,{current:i,id:i.id,subs:this.categories.filter((t=>t.path.slice(1).shift()==i.id)).sort(((t,e)=>{const i=parseInt(t.sortOrder),s=parseInt(e.sortOrder);return i==s?0:i>s?1:-1}))}):Object.assign(this,{current:{url:"",path:[]},id:null,subs:this.categories.filter((t=>1==t.path.length)).sort(((t,e)=>{const i=parseInt(t.sortOrder),s=parseInt(e.sortOrder);return i==s?0:i>s?1:-1}))})}async firstUpdated(){this.categories=await st,this.navigate(!0),document.addEventListener("didNavigate",(()=>this.navigate()))}fixHeaderHeights(){const t=[...this.root.querySelectorAll("shop-subcategory-tile")];t.map((t=>t.headerHeight=0));const e={};t.map((t=>{const i=t.headerPosition;return e[i.top]=e[i.top]||[],e[i.top].push(i.height),t})).map((t=>{const i=t.headerPosition,s=e[i.top].reduce(((t,e)=>e>t?e:t),0);t.headerHeight=s}))}render(){const t=(t,e)=>(t.preventDefault(),history.pushState({},this.title,e),it(),!1);if(this.current&&!this.search)return setTimeout((()=>this.fixHeaderHeights()),80),setTimeout((()=>this.fixHeaderHeights()),500),V`
            <div class="breadcrumbs">
                <a href="/">Home</a>
                ${this.breadcrumbs.map((e=>{const i=`/${e.url}/`;return V`
                        <a @click=${e=>t(e,i)} href=${i}>
                            ${e.title}
                        </a>
                    `}))}
            </div>
            <div class="subs">
                ${this.subs.map((t=>V`
                        <shop-subcategory-tile
                            id=${t.id}
                            title=${t.title}
                            url=${t.url}
                            description=${t.description}
                            image=${t.image_url}
                            path=${t.path}
                        ></shop-subcategory-tile>
                    `))}
            </div>
        `}}),customElements.define("shop-subcategory-tile",class extends et{static get properties(){return{id:{type:String},title:{type:String},url:{type:String},description:{type:String},image:{type:String},path:{type:Array}}}static get styles(){return Z`
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
        `}get headerPosition(){const t=this.root.querySelector("header");return{top:t.offsetTop,height:t.offsetHeight}}get headerHeight(){return this.root.querySelector("header").offsetHeight}set headerHeight(t){const e=t?`${t}px`:"auto";this.root.querySelector("header").style.height=e}get defaultImage(){return'<svg viewBox="0 0 550 550" xmlns="http://www.w3.org/2000/svg">\n            <rect x="0" y="0" width="550" height="550" fill="#c9c6c3"/>\n            <rect x="210" y="235" width="110" height="81" rx="4" fill="transparent" stroke="rgba(255,255,255,0.4)" stroke-width="10" />\n            <circle cx="244" cy="266" r="12" fill="rgba(255,255,255,0.4)"/>\n            <path d="M220 304Q226 282 248 292Q260 297 268 286C277 270,312 270,310 304Z" fill="rgba(255,255,255,0.4)"/>\n        </svg>'.replace(/\n\s+/gm,"")}get defaultImageBase64(){return`data:image/svg+xml;base64,${btoa(this.defaultImage)}`}render(){const t=rt(this.image,400);return V`
            <a @click=${()=>{history.pushState({},this.title,`/${this.url}/`),it()}} class="tile">
                <header>${this.title}</header>
                <main>
                    <img src=${t||this.defaultImageBase64} />
                </main>
                <footer></footer>
            </a>
        `}}),customElements.define("shop-category-view",class extends et{static get styles(){return Z`
            :host {
                display: grid;
                margin: 1rem 0 3rem;
                gap: 1rem;
                align-items: start;
            }
            .filters {
                grid-row: 1 / auto;
            }
            .results {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
                grid-row: 2 / auto;
            }
            shop-category-pagination {
                grid-column: span 2;
            }

            shop-category-filter {
                display: none;
                padding: 0 1rem;
                margin: 0 0 5px;
            }

            .showfilter shop-category-filter {
                display: block;
                background: rgba(255, 255, 255, 0.7);
                border-radius: 3px;
            }

            .mobile-filter-toggle a {
                display: block;
                border: 2px solid #ff4438;
                color: #ff4438;
                letter-spacing: 0.0625em;
                text-transform: none;
                text-decoration: none;
                line-height: 2em;
                font-weight: 400;
                cursor: pointer;
                padding: 0.5em 0em;
                text-align: center;
                margin: 0 0 1rem;
                border-radius: 50px;
            }
            .showfilter .mobile-filter-toggle a {
                color: white;
                background-color: #ff4438;
            }

            @media (min-width: 767px) {
                .mobile-filter-toggle {
                    display: none;
                }
                :host {
                    grid-template-columns: repeat(5, 1fr);
                }
                .filters {
                    grid-row: 1 / auto;
                }
                .results {
                    grid-row: 1 / auto;
                    grid-template-columns: repeat(4, 1fr);
                    grid-column: span 4;
                }
                shop-category-pagination {
                    grid-column: span 4;
                }
                shop-category-filter {
                    display: block;
                    padding: 0;
                    margin: 0 0 1rem;
                }
                .showfilter shop-category-filter {
                    background: transparent;
                }
            }
        `}static get properties(){return{url:{type:Object},page:{type:Number},title:{type:String},limit:{type:Number},count:{type:Number},filters:{type:Array},products:{type:Array},type:{type:String},search:{type:String,reflect:!0},showfilter:{type:Boolean},resultId:{type:Number}}}constructor(){super(),this.resultId=0,this.products=[],this.filters=[],this.url=new URL("http://example.com"),this.type="",this.title="",this.showfilter=window.innerWidth>767,this.currentFetch=null,this.on("selection",(t=>{const{key:e,selection:i}=t.detail,s=new URL(window.location);s.searchParams.set(e,i.join("|")),s.searchParams.set("page","1");for(const[t,e]of s.searchParams.entries())e||s.searchParams.delete(t);history.pushState({},null,s.toString()),it()})),this.on("page",(t=>{const e=new URL(window.location);e.searchParams.set("page",t.detail),history.pushState({},null,e.toString()),it()}))}get endpoint(){return window.siteConfig.collectionEndpoint}async fetch(t){this.currentFetch&&this.currentFetch.abort();const e=t.pathname.replace(/^\/|\/$/g,""),i=(await st).find((t=>t.url==e))||{type:"index",title:"Collection"},s=this.resultId+1;if(Object.assign(this,{url:t,products:null,page:1,limit:16,count:0,title:i.title,type:i.type,resultId:s}),"category"!==i.type)return;const r=new URL(`${this.endpoint}`,window.origin);for(const[e,i]of t.searchParams.entries())r.searchParams.set(e,i);r.searchParams.set("category",i.id),r.searchParams.set("limit",t.searchParams.get("limit")||16),r.searchParams.set("page",t.searchParams.get("page")||1);try{this.currentFetch=((t,e={})=>{const i=new AbortController,{signal:s}=i;return{abort:()=>i.abort(),ready:fetch(t,{...e,signal:s})}})(r);const t=await this.currentFetch.ready,e=await t.json();this.currentFetch=null;const i=new URL(window.location),n=(e.filters||[]).map((t=>{t.key=`filter[${t._id}]`,t.unit=t.unit||"";const e=i.searchParams.get(t.key)||"";return t.selection=e.split("|").filter((t=>t)),t}));s==this.resultId&&Object.assign(this,{page:e.page,limit:e.limit,count:e.count,filters:n,products:e.products||[]})}catch(t){if("AbortError"!=t.name)throw t;console.log(`Fetch cancelled ${r}`)}}async fetchSearch(t,e){const i=this.resultId+1;Object.assign(this,{url:t,products:null,page:1,limit:16,count:0,title:"Search",type:"category",resultId:i});const s=new URL(`${this.endpoint}`,window.origin);for(const[e,i]of t.searchParams.entries())s.searchParams.set(e,i);s.searchParams.set("q",e),s.searchParams.set("category",""),s.searchParams.set("limit",t.searchParams.get("limit")||16),s.searchParams.set("page",t.searchParams.get("page")||1);const r=await fetch(s),n=await r.json(),o=new URL(window.location),a=(n.filters||[]).map((t=>{t.key=`filter[${t._id}]`,t.unit=t.unit||"";const e=o.searchParams.get(t.key)||"";return t.selection=e.split("|").filter((t=>t)),t}));i==this.resultId&&Object.assign(this,{page:n.page,limit:n.limit,count:n.count,filters:a,products:n.products||[]})}async navigate(t=!0){const e=new URL(window.location),i={behavior:"smooth",block:"start",inline:"nearest"},s=this.getBoundingClientRect(),r=t&&this.scrollIntoView&&s&&s.y&&s.y<0,n=this.search;e.toString()!=this.url.toString()&&(n?await this.fetchSearch(e,n):await this.fetch(e),r&&this.root.querySelector(".results").scrollIntoView(i))}firstUpdated(){document.addEventListener("didNavigate",(()=>this.navigate())),this.navigate(!1)}get h1(){return document.querySelector(".page-title h1")}set h1(t){const e=this.h1;e&&(e.innerText=t)}render(){if(this.h1=this.title,"category"!==this.type)return V``;return V`
            <div class="filters ${this.showfilter?"showfilter":""}">
                <div class="mobile-filter-toggle">
                    <a href="#" @click=${t=>(t.preventDefault(),this.showfilter=!this.showfilter,!1)}>Filter Results</a>
                </div>
                ${this.filters.map((t=>V`
                        <shop-category-filter
                            .key=${t.key}
                            .display_name=${t.display_name}
                            .type=${t.type}
                            .values=${t.values}
                            .selection=${t.selection}
                            .unit=${t.unit}
                            .presets=${t.presets}
                        ></shop-category-filter>
                    `))}
            </div>
            <div class="results">
                ${null===this.products?V` <p>Loading</p> `:V`
                          ${this.products.length?V`
                                    ${this.products.map((t=>V`
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
                                `:V` <p>No results</p> `}
                      `}
                <shop-category-pagination
                    .page=${this.page}
                    .limit=${this.limit}
                    .count=${this.count}
                ></shop-category-pagination>
            </div>
        `}}),customElements.define("shop-category-product",class extends et{static get styles(){return Z`
            :host {
                display: block;
            }
            a {
                display: block;
                text-decoration: none;
                color: #313333;
            }
            .product-image {
                background-color: rgba(255, 253, 240, 0.3);
                padding: 50%;
                background-size: cover;
                background-position: center;
            }
            .variants {
                margin: 0.5rem 0;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 0.5rem;
            }
            .price {
                color: #ff4438;
                font-weight: 600;
            }
            .call-for-pricing {}
            .price-single {}
            .price-from-number {}
            .price-from-label {
                font-weight: 700;
            }
        `}static get properties(){return{priceExcl:{type:String},url:{type:String},title:{type:String},fulltitle:{type:String},image_url:{type:String},product_set:{type:Object},variants:{type:Array}}}get prices(){return[this.priceExcl,...this.variants.map((t=>t.priceExcl))].map((t=>parseFloat(t)))}get price(){const t=this.prices;let e=t.reduce(((t,e)=>e>0&&e<t?e:t),this.priceExcl),i=t.reduce(((t,e)=>e>0&&e>t?e:t),this.priceExcl);return 0==e?V`<span class="call-for-pricing">Call for pricing</span>`:e==i?V`<span class="price-single">$${e.toFixed(2)}</span>`:V`<span class="price-from-label">From </span><span class="price-from-number">$${e.toFixed(2)}</span>`}render(){const t=rt(this.image_url,400),e=0==this.variants.length;return V`
            <a href="/${this.url}.html" title=${this.title}>
                <div
                    class="product-image"
                    style="background-image: url(${t})"
                ></div>
            </a>
            ${e?V``:V`
                      <div class="variants">
                          ${this.variants.slice(0,5).map((t=>{const e=rt(t.image_url,80);return V`
                                  <a href="/${t.url}.html" title=${t.title}>
                                      <div
                                          class="product-image"
                                          style="background-image: url(${e})"
                                      ></div>
                                  </a>
                              `}))}
                      </div>
                  `}
            <a href="/${this.url}.html">
                <div>${this.fulltitle}</div>
                <div class="price">${this.price}</div>
            </a>
        `}}),customElements.define("shop-category-filter",class extends et{static get styles(){return Z`
            :host {
                display: block;
                margin: 0 0 2rem;
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
                padding: 1rem 0;
            }
            header.selected {
                color: #ff4438;
            }
            main {
                display: none;
            }
            main.open {
                display: block;
                margin: 0;
                padding: 0 0 2rem;
            }
            .toggle {
                position: absolute;
                top: 1rem;
                right: 0;
                line-height: 1.5rem;
            }
            .toggle:before {
                font-family: hfont;
                content: var(--icon-content-caret-right);
                font-size: 10px;
            }
            .toggle.open:before {
                content: var(--icon-content-caret-down);
            }
            .preset-display-unit {
                display: grid;
                grid-template-columns: 1fr 1fr;
                line-height: 1.65em;
                gap: 4px;
            }
            .preset-display-unit > div {
                display: block;
                text-align: center;
                padding: 0.35em 0em;
                border-style: solid;
                border-color: #bbb;
                font-size: 0.8rem;
                cursor: pointer;
                border-width: 0px 0px 2px;
            }
            .preset-display-unit.unit-mm .mm,
            .preset-display-unit.unit-in .in {
                border-bottom-color: var(--fc-theme);
                font-weight: bold;
            }
            @media (min-width: 767px) {
                header {
                    padding: 0;
                }
                main.open,
                main {
                    margin: 0;
                    padding: 0;
                }
                .toggle {
                    top: 0;
                }
            }
            select {
                font-size: 0.8rem;
                box-sizing: border-box;
                padding: 0.25rem;
                color: #555;
                background-color: #dcdad6;
                border: 1px solid rgb(183, 182, 181);
                border-radius: 5px;
                box-shadow: rgb(0 0 0 / 5%) 0px 3px 5px;
                outline: none;
                width: 100%;
            }
        `}static get properties(){return{open:{type:Boolean},key:{type:String},display_name:{type:String},type:{type:String},values:{type:Array},selection:{type:Array},unit:{type:String},presets:{type:Array}}}get filterid(){return this.key.replace(/.*\[(.*)\].*/,"$1")}constructor(){super(),this.open=window.innerWidth>767}render(){const{filterid:t}=this,e=`${t}-unit`,i=(et.getOption(e)||this.unit)==this.unit,s=this.open?"open":"",r=this.open?"toggle open":"toggle",n=this.selection.length?"selected":"",o=(this.presets||[]).filter((t=>/\d+\s*in$/i.exec(t.name))),a=(this.presets||[]).filter((t=>/\d+\s*mm$/i.exec(t.name))),l=o.length+a.length>0,c=i?"unit-mm":"unit-in",h=t=>i=>{et.setOption(e,t),this.unit="alt"==t?"in":"mm",this.requestUpdate()};return V`
            <header class=${n} @click=${()=>this.open=!this.open}>
                ${this.display_name}
                <span class=${r}></span>
            </header>
            <main class=${s}>
            ${"Text"==this.type?V`
                    <shop-category-toggles
                        .key=${this.key}
                        .values=${this.values}
                        .selection=${this.selection}
                    ></shop-category-toggles>
                `:V``}
            ${"Select"==this.type?V`
                    <select @change=${t=>{const e=[t.target.value];this.trigger("selection",{key:this.key,selection:e})}}>
                        ${this.values.map((t=>{return V`
                            <option value="${t}" ?selected="${t==(this.selection[0]||null)}">
                                ${e=t,{popular:"Popular",price:"Price (Low to High)",price_1:"Price (High to Low)"}[e]||e}
                            </option>
                        `;var e}))}
                    </select>
                `:V``}
            ${"MinMax"==this.type?V`
                          ${l?V`
                                    <div
                                        class="preset-display-unit ${c}"
                                    >
                                        <div @click=${h("")} class="mm">
                                            Metric
                                        </div>
                                        <div
                                            @click=${h("alt")}
                                            class="in"
                                        >
                                            Imperial
                                        </div>
                                    </div>
                                    <shop-category-presets
                                        .key=${this.key}
                                        .selection=${this.selection}
                                        .mcat=${i?"metric":"imperial"}
                                        .presets=${i?a:o}
                                    ></shop-category-presets>
                                `:V`
                                    <shop-category-minmax
                                        .key=${this.key}
                                        .values=${this.values}
                                        .selection=${this.selection}
                                        .label=${this.unit}
                                        .unit=${this.unit}
                                    ></shop-category-minmax>
                                    <shop-category-presets
                                        .key=${this.key}
                                        .selection=${this.selection}
                                        .presets=${this.presets}
                                    ></shop-category-presets>
                                `}
                      `:V``}
            </main>
        `}}),customElements.define("shop-category-pagination",class extends et{static get styles(){return Z`
            :host {
                display: block;
                text-align: right;
                padding: 1rem 0;
                margin: 1rem 0;
            }
            b-btn {
                --theme: transparent;
                --color: transparent;
                --textColor: #456;
                padding: 4px 0.25rem;
            }
            b-btn.active {
                --theme: #ff4438;
                --color: #ff4438;
                --textColor: #fff;
            }
            b-btn-group {
                border: 1px solid #9e9e9e;
                border-radius: 5px;
            }
            b-btn:before {
                font-family: hfont !important;
                position: absolute;
                top: 9px;
                left: 9px;
            }
            b-btn.next:before {
                content: var(--icon-content-caret-right);
            }
            b-btn.prev:before {
                content: var(--icon-content-caret-left);
            }
        `}static get properties(){return{page:{type:Number},limit:{type:Number},count:{type:Number}}}get pageCount(){return Math.ceil(this.count/this.limit)}get pages(){const t={},e=[...new Array(this.pageCount)].map(((t,e)=>{const i=e+1;return{number:i,index:e,current:i==this.page,next:this.page+1==i,prev:this.page-1==i,showInPagination:[-2,-1,0,1,2].includes(this.page-i)}}));return this.pageCount>8?(t.limitStart=this.page>3,t.limitEnd=this.pageCount-this.page>2,t.limitPages=!0,t.entries=e.filter((t=>t.showInPagination))):(t.limitPages=!1,t.entries=e),t}render(){if(!this.page||!this.limit)return V``;const t=this.pages;if(1==t.length)return V``;const e=t.entries.find((t=>t.prev)),i=t.entries.find((t=>t.next)),s=t=>e=>{this.trigger("page",t)};return V`
            <b-btn-group>
                ${e?V`
                          <b-btn class="prev" @click=${s(e.number)}
                              >&nbsp;</b-btn
                          >
                          <a href="?page=${e.number}" style="display: none">Previous Page</a>
                      `:V``}
                ${t.limitPages&&t.limitStart?V` <b-btn>&hellip;</b-btn> `:V``}
                ${t.entries.map((t=>V`
                            <b-btn
                                class=${t.current?"active":""}
                                @click=${s(t.number)}
                            >
                                ${t.number}
                            </b-btn>
                        `))}
                ${t.limitPages&&t.limitEnd?V` <b-btn>&hellip;</b-btn> `:V``}
                ${i?V`
                          <b-btn class="next" @click=${s(i.number)}
                              >&nbsp;</b-btn
                          >
                          <a href="?page=${i.number}" style="display: none">Next Page</a>
                      `:V``}
            </b-btn-group>
        `}}),customElements.define("shop-wishlist",class extends et{static get properties(){return{accountid:{type:String},wishlist:{type:Object}}}static get styles(){return Z`
            :host {
                display: none;
            }
        `}updateEvent(){const t=new CustomEvent("wishlist",{detail:this,bubbles:!0,composed:!0});document.querySelector("body").dispatchEvent(t)}async firstUpdated(){try{this.accountid?this.wishlist=await(await fetch("/account/wishlist/?format=json")).json():this.wishlist={},this.updateEvent()}catch(t){console.log({err:t})}}render(){return V``}})}();
//# sourceMappingURL=index.js.map
