(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rt=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=t[n++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=t[n++],i=t[n++],o=t[n++],l=((s&7)<<18|(a&63)<<12|(i&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const a=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|i&63)}}return e.join("")},st={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const a=t[s],i=s+1<t.length,o=i?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=a>>2,f=(a&3)<<4|o>>4;let p=(o&15)<<2|c>>6,m=c&63;l||(m=64,i||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Te(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const a=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,a==null||o==null||c==null||f==null)throw Error();const p=a<<2|o>>4;if(r.push(p),c!==64){const m=o<<4&240|c>>2;if(r.push(m),f!==64){const g=c<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},at=function(t){const e=Te(t);return st.encodeByteArray(e,!0)},Ae=function(t){return at(t).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function ve(){return typeof indexedDB=="object"}function ot(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="FirebaseError";class w extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ct,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,a=this.errors[e],i=a?lt(a,r):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new w(s,o,r)}}function lt(t,e){return t.replace(ht,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ht=/\{\$([^}]+)}/g;function Z(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const a=t[s],i=e[s];if(fe(a)&&fe(i)){if(!Z(a,i))return!1}else if(a!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fe(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=1e3,ft=2,dt=4*60*60*1e3,gt=.5;function pt(t,e=ut,n=ft){const r=e*Math.pow(n,t),s=Math.round(gt*r*(Math.random()-.5)*2);return Math.min(dt,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){return t&&t._delegate?t._delegate:t}class S{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new it;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_t(e))try{this.getOrInitializeService({instanceIdentifier:I})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=I){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=I){return this.instances.has(e)}getOptions(e=I){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);r===o&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const i=this.instances.get(s);return i&&e(i,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bt(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=I){return this.component?this.component.multipleInstances?e:I:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bt(t){return t===I?void 0:t}function _t(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(h||(h={}));const Et={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},It=h.INFO,yt={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},Ct=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yt[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class De{constructor(e){this.name=e,this._logLevel=It,this._logHandler=Ct,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in h))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Et[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...e),this._logHandler(this,h.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...e),this._logHandler(this,h.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,h.INFO,...e),this._logHandler(this,h.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,h.WARN,...e),this._logHandler(this,h.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...e),this._logHandler(this,h.ERROR,...e)}}const St=(t,e)=>e.some(n=>t instanceof n);let de,ge;function Tt(){return de||(de=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function At(){return ge||(ge=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Me=new WeakMap,Q=new WeakMap,Oe=new WeakMap,U=new WeakMap,ae=new WeakMap;function vt(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",a),t.removeEventListener("error",i)},a=()=>{n(b(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",a),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Me.set(n,t)}).catch(()=>{}),ae.set(e,t),e}function Dt(t){if(Q.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",i),t.removeEventListener("abort",i)},a=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",a),t.addEventListener("error",i),t.addEventListener("abort",i)});Q.set(t,e)}let ee={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Q.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Oe.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mt(t){ee=t(ee)}function Ot(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(z(this),e,...n);return Oe.set(r,e.sort?e.sort():[e]),b(r)}:At().includes(t)?function(...e){return t.apply(z(this),e),b(Me.get(this))}:function(...e){return b(t.apply(z(this),e))}}function Rt(t){return typeof t=="function"?Ot(t):(t instanceof IDBTransaction&&Dt(t),St(t,Tt())?new Proxy(t,ee):t)}function b(t){if(t instanceof IDBRequest)return vt(t);if(U.has(t))return U.get(t);const e=Rt(t);return e!==t&&(U.set(t,e),ae.set(e,t)),e}const z=t=>ae.get(t);function Re(t,e,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const i=indexedDB.open(t,e),o=b(i);return r&&i.addEventListener("upgradeneeded",l=>{r(b(i.result),l.oldVersion,l.newVersion,b(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),o.then(l=>{a&&l.addEventListener("close",()=>a()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),o}const Nt=["get","getKey","getAll","getAllKeys","count"],Bt=["put","add","delete","clear"],q=new Map;function pe(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(q.get(e))return q.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Bt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Nt.includes(n)))return;const a=async function(i,...o){const l=this.transaction(i,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),s&&l.done]))[0]};return q.set(e,a),a}Mt(t=>({...t,get:(e,n,r)=>pe(e,n)||t.get(e,n,r),has:(e,n)=>!!pe(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ft(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ft(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const te="@firebase/app",me="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=new De("@firebase/app"),Lt="@firebase/app-compat",$t="@firebase/analytics-compat",kt="@firebase/analytics",xt="@firebase/app-check-compat",Ht="@firebase/app-check",jt="@firebase/auth",Vt="@firebase/auth-compat",Ut="@firebase/database",zt="@firebase/database-compat",qt="@firebase/functions",Kt="@firebase/functions-compat",Wt="@firebase/installations",Gt="@firebase/installations-compat",Yt="@firebase/messaging",Jt="@firebase/messaging-compat",Xt="@firebase/performance",Zt="@firebase/performance-compat",Qt="@firebase/remote-config",en="@firebase/remote-config-compat",tn="@firebase/storage",nn="@firebase/storage-compat",rn="@firebase/firestore",sn="@firebase/firestore-compat",an="firebase",on="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="[DEFAULT]",cn={[te]:"fire-core",[Lt]:"fire-core-compat",[kt]:"fire-analytics",[$t]:"fire-analytics-compat",[Ht]:"fire-app-check",[xt]:"fire-app-check-compat",[jt]:"fire-auth",[Vt]:"fire-auth-compat",[Ut]:"fire-rtdb",[zt]:"fire-rtdb-compat",[qt]:"fire-fn",[Kt]:"fire-fn-compat",[Wt]:"fire-iid",[Gt]:"fire-iid-compat",[Yt]:"fire-fcm",[Jt]:"fire-fcm-compat",[Xt]:"fire-perf",[Zt]:"fire-perf-compat",[Qt]:"fire-rc",[en]:"fire-rc-compat",[tn]:"fire-gcs",[nn]:"fire-gcs-compat",[rn]:"fire-fst",[sn]:"fire-fst-compat","fire-js":"fire-js",[an]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=new Map,ne=new Map;function ln(t,e){try{t.container.addComponent(e)}catch(n){T.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function R(t){const e=t.name;if(ne.has(e))return T.debug(`There were multiple attempts to register component ${e}.`),!1;ne.set(e,t);for(const n of $.values())ln(n,t);return!0}function ie(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},A=new x("app","Firebase",hn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new S("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw A.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=on;function dn(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ne,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw A.create("bad-app-name",{appName:String(r)});const s=$.get(r);if(s){if(Z(t,s.options)&&Z(n,s.config))return s;throw A.create("duplicate-app",{appName:r})}const a=new wt(r);for(const o of ne.values())a.addComponent(o);const i=new un(t,n,a);return $.set(r,i),i}function gn(t=Ne){const e=$.get(t);if(!e)throw A.create("no-app",{appName:t});return e}function _(t,e,n){var r;let s=(r=cn[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const a=s.match(/\s|\//),i=e.match(/\s|\//);if(a||i){const o=[`Unable to register library "${s}" with version "${e}":`];a&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),T.warn(o.join(" "));return}R(new S(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="firebase-heartbeat-database",mn=1,F="firebase-heartbeat-store";let K=null;function Be(){return K||(K=Re(pn,mn,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(F)}}}).catch(t=>{throw A.create("idb-open",{originalErrorMessage:t.message})})),K}async function bn(t){var e;try{return(await Be()).transaction(F).objectStore(F).get(Pe(t))}catch(n){if(n instanceof w)T.warn(n.message);else{const r=A.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});T.warn(r.message)}}}async function be(t,e){var n;try{const s=(await Be()).transaction(F,"readwrite");return await s.objectStore(F).put(e,Pe(t)),s.done}catch(r){if(r instanceof w)T.warn(r.message);else{const s=A.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});T.warn(s.message)}}}function Pe(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=1024,wn=30*24*60*60*1e3;class En{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_e();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=wn}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_e(),{heartbeatsToSend:n,unsentEntries:r}=In(this._heartbeatsCache.heartbeats),s=Ae(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function _e(){return new Date().toISOString().substring(0,10)}function In(t,e=_n){const n=[];let r=t.slice();for(const s of t){const a=n.find(i=>i.agent===s.agent);if(a){if(a.dates.push(s.date),we(n)>e){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),we(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ve()?ot().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bn(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return be(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return be(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function we(t){return Ae(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){R(new S("platform-logger",e=>new Pt(e),"PRIVATE")),R(new S("heartbeat",e=>new En(e),"PRIVATE")),_(te,me,t),_(te,me,"esm2017"),_("fire-js","")}Cn("");var Sn="firebase",Tn="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_(Sn,Tn,"app");const Fe="@firebase/installations",oe="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=1e4,$e=`w:${oe}`,ke="FIS_v2",An="https://firebaseinstallations.googleapis.com/v1",vn=60*60*1e3,Dn="installations",Mn="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},v=new x(Dn,Mn,On);function xe(t){return t instanceof w&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He({projectId:t}){return`${An}/projects/${t}/installations`}function je(t){return{token:t.token,requestStatus:2,expiresIn:Nn(t.expiresIn),creationTime:Date.now()}}async function Ve(t,e){const r=(await e.json()).error;return v.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ue({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Rn(t,{refreshToken:e}){const n=Ue(t);return n.append("Authorization",Bn(e)),n}async function ze(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Nn(t){return Number(t.replace("s","000"))}function Bn(t){return`${ke} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=He(t),s=Ue(t),a=e.getImmediate({optional:!0});if(a){const c=await a.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const i={fid:n,authVersion:ke,appId:t.appId,sdkVersion:$e},o={method:"POST",headers:s,body:JSON.stringify(i)},l=await ze(()=>fetch(r,o));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:je(c.authToken)}}else throw await Ve("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=/^[cdef][\w-]{21}$/,re="";function $n(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=kn(t);return Ln.test(n)?n:re}catch{return re}}function kn(t){return Fn(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new Map;function We(t,e){const n=H(t);Ge(n,e),xn(n,e)}function Ge(t,e){const n=Ke.get(t);if(!!n)for(const r of n)r(e)}function xn(t,e){const n=Hn();n&&n.postMessage({key:t,fid:e}),jn()}let C=null;function Hn(){return!C&&"BroadcastChannel"in self&&(C=new BroadcastChannel("[Firebase] FID Change"),C.onmessage=t=>{Ge(t.data.key,t.data.fid)}),C}function jn(){Ke.size===0&&C&&(C.close(),C=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="firebase-installations-database",Un=1,D="firebase-installations-store";let W=null;function ce(){return W||(W=Re(Vn,Un,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(D)}}})),W}async function k(t,e){const n=H(t),s=(await ce()).transaction(D,"readwrite"),a=s.objectStore(D),i=await a.get(n);return await a.put(e,n),await s.done,(!i||i.fid!==e.fid)&&We(t,e.fid),e}async function Ye(t){const e=H(t),r=(await ce()).transaction(D,"readwrite");await r.objectStore(D).delete(e),await r.done}async function j(t,e){const n=H(t),s=(await ce()).transaction(D,"readwrite"),a=s.objectStore(D),i=await a.get(n),o=e(i);return o===void 0?await a.delete(n):await a.put(o,n),await s.done,o&&(!i||i.fid!==o.fid)&&We(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function le(t){let e;const n=await j(t.appConfig,r=>{const s=zn(r),a=qn(t,s);return e=a.registrationPromise,a.installationEntry});return n.fid===re?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function zn(t){const e=t||{fid:$n(),registrationStatus:0};return Je(e)}function qn(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(v.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Kn(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Wn(t)}:{installationEntry:e}}async function Kn(t,e){try{const n=await Pn(t,e);return k(t.appConfig,n)}catch(n){throw xe(n)&&n.customData.serverCode===409?await Ye(t.appConfig):await k(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Wn(t){let e=await Ee(t.appConfig);for(;e.registrationStatus===1;)await qe(100),e=await Ee(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await le(t);return r||n}return e}function Ee(t){return j(t,e=>{if(!e)throw v.create("installation-not-found");return Je(e)})}function Je(t){return Gn(t)?{fid:t.fid,registrationStatus:0}:t}function Gn(t){return t.registrationStatus===1&&t.registrationTime+Le<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn({appConfig:t,heartbeatServiceProvider:e},n){const r=Jn(t,n),s=Rn(t,n),a=e.getImmediate({optional:!0});if(a){const c=await a.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const i={installation:{sdkVersion:$e,appId:t.appId}},o={method:"POST",headers:s,body:JSON.stringify(i)},l=await ze(()=>fetch(r,o));if(l.ok){const c=await l.json();return je(c)}else throw await Ve("Generate Auth Token",l)}function Jn(t,{fid:e}){return`${He(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(t,e=!1){let n;const r=await j(t.appConfig,a=>{if(!Xe(a))throw v.create("not-registered");const i=a.authToken;if(!e&&Qn(i))return a;if(i.requestStatus===1)return n=Xn(t,e),a;{if(!navigator.onLine)throw v.create("app-offline");const o=tr(a);return n=Zn(t,o),o}});return n?await n:r.authToken}async function Xn(t,e){let n=await Ie(t.appConfig);for(;n.authToken.requestStatus===1;)await qe(100),n=await Ie(t.appConfig);const r=n.authToken;return r.requestStatus===0?he(t,e):r}function Ie(t){return j(t,e=>{if(!Xe(e))throw v.create("not-registered");const n=e.authToken;return nr(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Zn(t,e){try{const n=await Yn(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await k(t.appConfig,r),n}catch(n){if(xe(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ye(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await k(t.appConfig,r)}throw n}}function Xe(t){return t!==void 0&&t.registrationStatus===2}function Qn(t){return t.requestStatus===2&&!er(t)}function er(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+vn}function tr(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nr(t){return t.requestStatus===1&&t.requestTime+Le<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(t){const e=t,{installationEntry:n,registrationPromise:r}=await le(e);return r?r.catch(console.error):he(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(t,e=!1){const n=t;return await ar(n),(await he(n,e)).token}async function ar(t){const{registrationPromise:e}=await le(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t){if(!t||!t.options)throw G("App Configuration");if(!t.name)throw G("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw G(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function G(t){return v.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="installations",or="installations-internal",cr=t=>{const e=t.getProvider("app").getImmediate(),n=ir(e),r=ie(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},lr=t=>{const e=t.getProvider("app").getImmediate(),n=ie(e,Ze).getImmediate();return{getId:()=>rr(n),getToken:s=>sr(n,s)}};function hr(){R(new S(Ze,cr,"PUBLIC")),R(new S(or,lr,"PRIVATE"))}hr();_(Fe,oe);_(Fe,oe,"esm2017");const Y="@firebase/remote-config",ye="0.3.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="remote-config";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},d=new x("remoteconfig","Remote Config",fr);function dr(t,e){return t instanceof w&&t.code.indexOf(e)!==-1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=!1,pr="",Ce=0,mr=["1","true","t","yes","y","on"];class J{constructor(e,n=pr){this._source=e,this._value=n}asString(){return this._value}asBoolean(){return this._source==="static"?gr:mr.indexOf(this._value.toLowerCase())>=0}asNumber(){if(this._source==="static")return Ce;let e=Number(this._value);return isNaN(e)&&(e=Ce),e}getSource(){return this._source}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t=gn()){return t=N(t),ie(t,Qe).getImmediate()}async function _r(t){const e=N(t),[n,r]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);return!n||!n.config||!n.eTag||n.eTag===r?!1:(await Promise.all([e._storageCache.setActiveConfig(n.config),e._storage.setActiveConfigEtag(n.eTag)]),!0)}function wr(t){const e=N(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}async function Er(t){const e=N(t),n=new ur;setTimeout(async()=>{n.abort()},e.settings.fetchTimeoutMillis);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:n}),await e._storageCache.setLastFetchStatus("success")}catch(r){const s=dr(r,"fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(s),r}}function Se(t,e){const n=N(t);n._isInitializationComplete||n._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const r=n._storageCache.getActiveConfig();return r&&r[e]!==void 0?new J("remote",r[e]):n.defaultConfig&&n.defaultConfig[e]!==void 0?new J("default",String(n.defaultConfig[e])):(n._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new J("static"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,r,s){this.client=e,this.storage=n,this.storageCache=r,this.logger=s}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,s=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${s}.`),s}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const s=await this.client.fetch(e),a=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return s.status===200&&a.push(this.storage.setLastSuccessfulFetchResponse(s)),await Promise.all(a),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t=navigator){return t.languages&&t.languages[0]||t.language}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r,s,a,i){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=s,this.apiKey=a,this.appId=i}async fetch(e){var n,r,s;const[a,i]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),l=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,c={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},u={sdk_version:this.sdkVersion,app_instance_id:a,app_instance_id_token:i,app_id:this.appId,language_code:yr()},f={method:"POST",headers:c,body:JSON.stringify(u)},p=fetch(l,f),m=new Promise((E,O)=>{e.signal.addEventListener(()=>{const ue=new Error("The operation was aborted.");ue.name="AbortError",O(ue)})});let g;try{await Promise.race([p,m]),g=await p}catch(E){let O="fetch-client-network";throw((n=E)===null||n===void 0?void 0:n.name)==="AbortError"&&(O="fetch-timeout"),d.create(O,{originalErrorMessage:(r=E)===null||r===void 0?void 0:r.message})}let M=g.status;const nt=g.headers.get("ETag")||void 0;let V,B;if(g.status===200){let E;try{E=await g.json()}catch(O){throw d.create("fetch-client-parse",{originalErrorMessage:(s=O)===null||s===void 0?void 0:s.message})}V=E.entries,B=E.state}if(B==="INSTANCE_STATE_UNSPECIFIED"?M=500:B==="NO_CHANGE"?M=304:(B==="NO_TEMPLATE"||B==="EMPTY_CONFIG")&&(V={}),M!==304&&M!==200)throw d.create("fetch-status",{httpStatus:M});return{status:M,eTag:nt,config:V}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),a=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(a),r(d.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Tr(t){if(!(t instanceof w)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ar{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await Sr(e.signal,n);try{const s=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),s}catch(s){if(!Tr(s))throw s;const a={throttleEndTimeMillis:Date.now()+pt(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(a),this.attemptFetch(e,a)}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=60*1e3,Dr=12*60*60*1e3;class Mr{constructor(e,n,r,s,a){this.app=e,this._client=n,this._storageCache=r,this._storage=s,this._logger=a,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:vr,minimumFetchIntervalMillis:Dr},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){var n;const r=t.target.error||void 0;return d.create(e,{originalErrorMessage:r&&((n=r)===null||n===void 0?void 0:n.message)})}const y="app_namespace_store",Or="firebase_remote_config",Rr=1;function Nr(){return new Promise((t,e)=>{var n;try{const r=indexedDB.open(Or,Rr);r.onerror=s=>{e(L(s,"storage-open"))},r.onsuccess=s=>{t(s.target.result)},r.onupgradeneeded=s=>{const a=s.target.result;switch(s.oldVersion){case 0:a.createObjectStore(y,{keyPath:"compositeKey"})}}}catch(r){e(d.create("storage-open",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message}))}})}class Br{constructor(e,n,r,s=Nr()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=s}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,s)=>{var a;const o=n.transaction([y],"readonly").objectStore(y),l=this.createCompositeKey(e);try{const c=o.get(l);c.onerror=u=>{s(L(u,"storage-get"))},c.onsuccess=u=>{const f=u.target.result;r(f?f.value:void 0)}}catch(c){s(d.create("storage-get",{originalErrorMessage:(a=c)===null||a===void 0?void 0:a.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((s,a)=>{var i;const l=r.transaction([y],"readwrite").objectStore(y),c=this.createCompositeKey(e);try{const u=l.put({compositeKey:c,value:n});u.onerror=f=>{a(L(f,"storage-set"))},u.onsuccess=()=>{s()}}catch(u){a(d.create("storage-set",{originalErrorMessage:(i=u)===null||i===void 0?void 0:i.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,s)=>{var a;const o=n.transaction([y],"readwrite").objectStore(y),l=this.createCompositeKey(e);try{const c=o.delete(l);c.onerror=u=>{s(L(u,"storage-delete"))},c.onsuccess=()=>{r()}}catch(c){s(d.create("storage-delete",{originalErrorMessage:(a=c)===null||a===void 0?void 0:a.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),s=await e;s&&(this.lastFetchStatus=s);const a=await n;a&&(this.lastSuccessfulFetchTimestampMillis=a);const i=await r;i&&(this.activeConfig=i)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(){R(new S(Qe,t,"PUBLIC").setMultipleInstances(!0)),_(Y,ye),_(Y,ye,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw d.create("registration-window");if(!ve())throw d.create("indexed-db-unavailable");const{projectId:a,apiKey:i,appId:o}=r.options;if(!a)throw d.create("registration-project-id");if(!i)throw d.create("registration-api-key");if(!o)throw d.create("registration-app-id");n=n||"firebase";const l=new Br(o,r.name,n),c=new Pr(l),u=new De(Y);u.logLevel=h.ERROR;const f=new Cr(s,fn,n,a,i,o),p=new Ar(f,l),m=new Ir(p,l,c,u),g=new Mr(r,m,c,l,u);return wr(g),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t){return t=N(t),await Er(t),_r(t)}Fr();const $r="#"+((1<<24)*Math.random()|0).toString(16),kr={apiKey:"AIzaSyACACC3OqR3vch3_usClwWB0a_18HtRzjM",authDomain:"ist-euer-kind-schon-da.firebaseapp.com",projectId:"ist-euer-kind-schon-da",storageBucket:"ist-euer-kind-schon-da.appspot.com",messagingSenderId:"224820046496",appId:"1:224820046496:web:784f8d0fbe9b35490eb7c5",measurementId:"G-L6EYV8GD8V"},xr=dn(kr),P=br(xr);P.settings.minimumFetchIntervalMillis=3600;P.defaultConfig={child_born:!1,born_at:""};document.documentElement.style.setProperty("--main-bg-color",$r);let et="NEIN",se="";Lr(P).then(()=>{Se(P,"child_born").asBoolean()==!0&&(se=Se(P,"born_at").asString(),et="JA",Hr(),tt())}).catch(t=>{console.log(t)});tt();function tt(){document.querySelector("#app").innerHTML=`
  <div>
    <h1>${et}<h1>
`,se!=""&&(document.querySelector("#app").innerHTML+=`
  <div>
    <h2>Geboren am ${se}<h2>
  </div>
`),document.querySelector("#app").innerHTML+=`
  </div>
`}function X(t,e){return Math.random()*(e-t)+t}function Hr(){confetti({angle:X(55,125),spread:X(50,70),particleCount:X(50,100),origin:{y:.6}})}
