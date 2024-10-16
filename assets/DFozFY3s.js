const __vite__fileDeps=["./UeH6KKp5.js","./index.BgKJmuVt.css","./BT72A3UZ.js","./CUhVcY8e.js","./error-404.JekaaCis.css","./Bah5xAuu.js","./error-500.CNP9nqm1.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $c(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const Ne={},Gs=[],Lt=()=>{},Uv=()=>!1,Rr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vc=t=>t.startsWith("onUpdate:"),$e=Object.assign,Wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hv=Object.prototype.hasOwnProperty,_e=(t,e)=>Hv.call(t,e),re=Array.isArray,qs=t=>Ar(t)==="[object Map]",Wp=t=>Ar(t)==="[object Set]",jv=t=>Ar(t)==="[object RegExp]",ae=t=>typeof t=="function",Fe=t=>typeof t=="string",Ps=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",Kc=t=>(Re(t)||ae(t))&&ae(t.then)&&ae(t.catch),Kp=Object.prototype.toString,Ar=t=>Kp.call(t),Bv=t=>Ar(t).slice(8,-1),Gp=t=>Ar(t)==="[object Object]",Gc=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zs=$c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$v=/-(\w)/g,sn=pa(t=>t.replace($v,(e,n)=>n?n.toUpperCase():"")),Vv=/\B([A-Z])/g,gi=pa(t=>t.replace(Vv,"-$1").toLowerCase()),ga=pa(t=>t.charAt(0).toUpperCase()+t.slice(1)),sl=pa(t=>t?`on${ga(t)}`:""),Zn=(t,e)=>!Object.is(t,e),Xi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qp=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Wv=t=>{const e=parseFloat(t);return isNaN(e)?t:e},zp=t=>{const e=Fe(t)?Number(t):NaN;return isNaN(e)?t:e};let Qh;const Yp=()=>Qh||(Qh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _a(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Fe(s)?zv(s):_a(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Fe(t)||Re(t))return t}const Kv=/;(?![^(]*\))/g,Gv=/:([^]+)/,qv=/\/\*[^]*?\*\//g;function zv(t){const e={};return t.replace(qv,"").split(Kv).forEach(n=>{if(n){const s=n.split(Gv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ma(t){let e="";if(Fe(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const s=ma(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Yv(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Fe(e)&&(t.class=ma(e)),n&&(t.style=_a(n)),t}const Xv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jv=$c(Xv);function Xp(t){return!!t||t===""}const e1=t=>Fe(t)?t:t==null?"":re(t)||Re(t)&&(t.toString===Kp||!ae(t.toString))?JSON.stringify(t,Jp,2):String(t),Jp=(t,e)=>e&&e.__v_isRef?Jp(t,e.value):qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[il(s,r)+" =>"]=i,n),{})}:Wp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>il(n))}:Ps(e)?il(e):Re(e)&&!re(e)&&!Gp(e)?String(e):e,il=(t,e="")=>{var n;return Ps(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class Qp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function qc(t){return new Qp(t)}function Qv(t,e=Et){e&&e.active&&e.effects.push(t)}function Zv(){return Et}function t1(t){Et&&Et.cleanups.push(t)}let vs;class zc{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Qv(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ts();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(eE(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ns()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=zn,n=vs;try{return zn=!0,vs=this,this._runnings++,Zh(this),this.fn()}finally{ef(this),this._runnings--,vs=n,zn=e}}stop(){this.active&&(Zh(this),ef(this),this.onStop&&this.onStop(),this.active=!1)}}function eE(t){return t.value}function Zh(t){t._trackId++,t._depsLength=0}function ef(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Zp(t.deps[e],t);t.deps.length=t._depsLength}}function Zp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let zn=!0,Ul=0;const eg=[];function ts(){eg.push(zn),zn=!1}function ns(){const t=eg.pop();zn=t===void 0?!0:t}function Yc(){Ul++}function Xc(){for(Ul--;!Ul&&Hl.length;)Hl.shift()()}function tg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Zp(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Hl=[];function ng(t,e,n){Yc();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Hl.push(s.scheduler)))}Xc()}const sg=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Po=new WeakMap,Es=Symbol(""),jl=Symbol("");function mt(t,e,n){if(zn&&vs){let s=Po.get(t);s||Po.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=sg(()=>s.delete(n))),tg(vs,i)}}function En(t,e,n,s,i,r){const o=Po.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&re(t)){const c=Number(s);o.forEach((u,f)=>{(f==="length"||!Ps(f)&&f>=c)&&l.push(u)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":re(t)?Gc(n)&&l.push(o.get("length")):(l.push(o.get(Es)),qs(t)&&l.push(o.get(jl)));break;case"delete":re(t)||(l.push(o.get(Es)),qs(t)&&l.push(o.get(jl)));break;case"set":qs(t)&&l.push(o.get(Es));break}Yc();for(const c of l)c&&ng(c,4);Xc()}function tE(t,e){const n=Po.get(t);return n&&n.get(e)}const nE=$c("__proto__,__v_isRef,__isVue"),ig=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ps)),tf=sE();function sE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ve(this);for(let r=0,o=this.length;r<o;r++)mt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ve)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ts(),Yc();const s=ve(this)[e].apply(this,n);return Xc(),ns(),s}}),t}function iE(t){Ps(t)||(t=String(t));const e=ve(this);return mt(e,"has",t),e.hasOwnProperty(t)}class rg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?mE:cg:r?lg:ag).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=re(e);if(!i){if(o&&_e(tf,n))return Reflect.get(tf,n,s);if(n==="hasOwnProperty")return iE}const l=Reflect.get(e,n,s);return(Ps(n)?ig.has(n):nE(n))||(i||mt(e,"get",n),r)?l:at(l)?o&&Gc(n)?l:l.value:Re(l)?i?ug(l):ss(l):l}}class og extends rg{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=ri(r);if(!No(s)&&!ri(s)&&(r=ve(r),s=ve(s)),!re(e)&&at(r)&&!at(s))return c?!1:(r.value=s,!0)}const o=re(e)&&Gc(n)?Number(n)<e.length:_e(e,n),l=Reflect.set(e,n,s,i);return e===ve(i)&&(o?Zn(s,r)&&En(e,"set",n,s):En(e,"add",n,s)),l}deleteProperty(e,n){const s=_e(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&En(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ps(n)||!ig.has(n))&&mt(e,"has",n),s}ownKeys(e){return mt(e,"iterate",re(e)?"length":Es),Reflect.ownKeys(e)}}class rE extends rg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const oE=new og,aE=new rE,lE=new og(!0);const Jc=t=>t,ya=t=>Reflect.getPrototypeOf(t);function eo(t,e,n=!1,s=!1){t=t.__v_raw;const i=ve(t),r=ve(e);n||(Zn(e,r)&&mt(i,"get",e),mt(i,"get",r));const{has:o}=ya(i),l=s?Jc:n?eu:fr;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function to(t,e=!1){const n=this.__v_raw,s=ve(n),i=ve(t);return e||(Zn(t,i)&&mt(s,"has",t),mt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function no(t,e=!1){return t=t.__v_raw,!e&&mt(ve(t),"iterate",Es),Reflect.get(t,"size",t)}function nf(t){t=ve(t);const e=ve(this);return ya(e).has.call(e,t)||(e.add(t),En(e,"add",t,t)),this}function sf(t,e){e=ve(e);const n=ve(this),{has:s,get:i}=ya(n);let r=s.call(n,t);r||(t=ve(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Zn(e,o)&&En(n,"set",t,e):En(n,"add",t,e),this}function rf(t){const e=ve(this),{has:n,get:s}=ya(e);let i=n.call(e,t);i||(t=ve(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&En(e,"delete",t,void 0),r}function of(){const t=ve(this),e=t.size!==0,n=t.clear();return e&&En(t,"clear",void 0,void 0),n}function so(t,e){return function(s,i){const r=this,o=r.__v_raw,l=ve(o),c=e?Jc:t?eu:fr;return!t&&mt(l,"iterate",Es),o.forEach((u,f)=>s.call(i,c(u),c(f),r))}}function io(t,e,n){return function(...s){const i=this.__v_raw,r=ve(i),o=qs(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),f=n?Jc:e?eu:fr;return!e&&mt(r,"iterate",c?jl:Es),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:l?[f(d[0]),f(d[1])]:f(d),done:g}},[Symbol.iterator](){return this}}}}function On(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function cE(){const t={get(r){return eo(this,r)},get size(){return no(this)},has:to,add:nf,set:sf,delete:rf,clear:of,forEach:so(!1,!1)},e={get(r){return eo(this,r,!1,!0)},get size(){return no(this)},has:to,add:nf,set:sf,delete:rf,clear:of,forEach:so(!1,!0)},n={get(r){return eo(this,r,!0)},get size(){return no(this,!0)},has(r){return to.call(this,r,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:so(!0,!1)},s={get(r){return eo(this,r,!0,!0)},get size(){return no(this,!0)},has(r){return to.call(this,r,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:so(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=io(r,!1,!1),n[r]=io(r,!0,!1),e[r]=io(r,!1,!0),s[r]=io(r,!0,!0)}),[t,n,e,s]}const[uE,hE,fE,dE]=cE();function Qc(t,e){const n=e?t?dE:fE:t?hE:uE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(_e(n,i)&&i in s?n:s,i,r)}const pE={get:Qc(!1,!1)},gE={get:Qc(!1,!0)},_E={get:Qc(!0,!1)};const ag=new WeakMap,lg=new WeakMap,cg=new WeakMap,mE=new WeakMap;function yE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vE(t){return t.__v_skip||!Object.isExtensible(t)?0:yE(Bv(t))}function ss(t){return ri(t)?t:Zc(t,!1,oE,pE,ag)}function kr(t){return Zc(t,!1,lE,gE,lg)}function ug(t){return Zc(t,!0,aE,_E,cg)}function Zc(t,e,n,s,i){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=vE(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Ji(t){return ri(t)?Ji(t.__v_raw):!!(t&&t.__v_isReactive)}function ri(t){return!!(t&&t.__v_isReadonly)}function No(t){return!!(t&&t.__v_isShallow)}function hg(t){return t?!!t.__v_raw:!1}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function Oo(t){return Object.isExtensible(t)&&qp(t,"__v_skip",!0),t}const fr=t=>Re(t)?ss(t):t,eu=t=>Re(t)?ug(t):t;class fg{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new zc(()=>e(this._value),()=>Qi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ve(this);return(!e._cacheable||e.effect.dirty)&&Zn(e._value,e._value=e.effect.run())&&Qi(e,4),tu(e),e.effect._dirtyLevel>=2&&Qi(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function EE(t,e,n=!1){let s,i;const r=ae(t);return r?(s=t,i=Lt):(s=t.get,i=t.set),new fg(s,i,r||!i,n)}function tu(t){var e;zn&&vs&&(t=ve(t),tg(vs,(e=t.dep)!=null?e:t.dep=sg(()=>t.dep=void 0,t instanceof fg?t:void 0)))}function Qi(t,e=4,n){t=ve(t);const s=t.dep;s&&ng(s,e)}function at(t){return!!(t&&t.__v_isRef===!0)}function Kt(t){return dg(t,!1)}function dr(t){return dg(t,!0)}function dg(t,e){return at(t)?t:new wE(t,e)}class wE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ve(e),this._value=n?e:fr(e)}get value(){return tu(this),this._value}set value(e){const n=this.__v_isShallow||No(e)||ri(e);e=n?e:ve(e),Zn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:fr(e),Qi(this,4))}}function Pe(t){return at(t)?t.value:t}const TE={get:(t,e,n)=>Pe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return at(i)&&!at(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function pg(t){return Ji(t)?t:new Proxy(t,TE)}class bE{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>tu(this),()=>Qi(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function n1(t){return new bE(t)}function s1(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=gg(t,n);return e}class IE{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return tE(ve(this._object),this._key)}}class CE{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function SE(t,e,n){return at(t)?t:ae(t)?new CE(t):Re(t)&&arguments.length>1?gg(t,e,n):Kt(t)}function gg(t,e,n){const s=t[e];return at(s)?s:new IE(t,e,n)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yn(t,e,n,s){try{return s?t(...s):t()}catch(i){_i(i,e,n)}}function xt(t,e,n,s){if(ae(t)){const i=Yn(t,e,n,s);return i&&Kc(i)&&i.catch(r=>{_i(r,e,n)}),i}if(re(t)){const i=[];for(let r=0;r<t.length;r++)i.push(xt(t[r],e,n,s));return i}}function _i(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){ts(),Yn(c,null,10,[t,o,l]),ns();return}}RE(t,n,i,s)}function RE(t,e,n,s=!0){console.error(t)}let pr=!1,Bl=!1;const it=[];let Zt=0;const Ys=[];let Un=null,gs=0;const _g=Promise.resolve();let nu=null;function mi(t){const e=nu||_g;return t?e.then(this?t.bind(this):t):e}function AE(t){let e=Zt+1,n=it.length;for(;e<n;){const s=e+n>>>1,i=it[s],r=gr(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function va(t){(!it.length||!it.includes(t,pr&&t.allowRecurse?Zt+1:Zt))&&(t.id==null?it.push(t):it.splice(AE(t.id),0,t),mg())}function mg(){!pr&&!Bl&&(Bl=!0,nu=_g.then(yg))}function kE(t){const e=it.indexOf(t);e>Zt&&it.splice(e,1)}function $l(t){re(t)?Ys.push(...t):(!Un||!Un.includes(t,t.allowRecurse?gs+1:gs))&&Ys.push(t),mg()}function af(t,e,n=pr?Zt+1:0){for(;n<it.length;n++){const s=it[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;it.splice(n,1),n--,s()}}}function Lo(t){if(Ys.length){const e=[...new Set(Ys)].sort((n,s)=>gr(n)-gr(s));if(Ys.length=0,Un){Un.push(...e);return}for(Un=e,gs=0;gs<Un.length;gs++)Un[gs]();Un=null,gs=0}}const gr=t=>t.id==null?1/0:t.id,PE=(t,e)=>{const n=gr(t)-gr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function yg(t){Bl=!1,pr=!0,it.sort(PE);try{for(Zt=0;Zt<it.length;Zt++){const e=it[Zt];e&&e.active!==!1&&Yn(e,null,14)}}finally{Zt=0,it.length=0,Lo(),pr=!1,nu=null,(it.length||Ys.length)&&yg()}}function NE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ne;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:g}=s[f]||Ne;g&&(i=n.map(T=>Fe(T)?T.trim():T)),d&&(i=n.map(Wv))}let l,c=s[l=sl(e)]||s[l=sl(sn(e))];!c&&r&&(c=s[l=sl(gi(e))]),c&&xt(c,t,6,i);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,xt(u,t,6,i)}}function vg(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!ae(t)){const c=u=>{const f=vg(u,e,!0);f&&(l=!0,$e(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(Re(t)&&s.set(t,null),null):(re(r)?r.forEach(c=>o[c]=null):$e(o,r),Re(t)&&s.set(t,o),o)}function Ea(t,e){return!t||!Rr(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,gi(e))||_e(t,e))}let Be=null,wa=null;function Mo(t){const e=Be;return Be=t,wa=t&&t.type.__scopeId||null,e}function i1(t){wa=t}function r1(){wa=null}function su(t,e=Be,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&wf(-1);const r=Mo(e);let o;try{o=t(...i)}finally{Mo(r),s._d&&wf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function rl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:d,data:g,setupState:T,ctx:C,inheritAttrs:O}=t,F=Mo(t);let B,k;try{if(n.shapeFlag&4){const P=i||s,D=P;B=Nt(u.call(D,P,f,d,T,g,C)),k=l}else{const P=e;B=Nt(P.length>1?P(d,{attrs:l,slots:o,emit:c}):P(d,null)),k=e.props?l:LE(l)}}catch(P){tr.length=0,_i(P,t,1),B=xe(rt)}let A=B;if(k&&O!==!1){const P=Object.keys(k),{shapeFlag:D}=A;P.length&&D&7&&(r&&P.some(Vc)&&(k=ME(k,r)),A=Tn(A,k,!1,!0))}return n.dirs&&(A=Tn(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),B=A,Mo(F),B}function OE(t,e=!0){let n;for(let s=0;s<t.length;s++){const i=t[s];if(li(i)){if(i.type!==rt||i.children==="v-if"){if(n)return;n=i}}else return}return n}const LE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Rr(n))&&((e||(e={}))[n]=t[n]);return e},ME=(t,e)=>{const n={};for(const s in t)(!Vc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function DE(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?lf(s,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const g=f[d];if(o[g]!==s[g]&&!Ea(u,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?lf(s,o,u):!0:!!o;return!1}function lf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ea(n,r))return!0}return!1}function iu({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Eg="components";function o1(t,e){return Tg(Eg,t,!0,e)||t}const wg=Symbol.for("v-ndc");function xE(t){return Fe(t)?Tg(Eg,t,!1)||t:t||wg}function Tg(t,e,n=!0,s=!1){const i=Be||Ve;if(i){const r=i.type;{const l=Ql(r,!1);if(l&&(l===e||l===sn(e)||l===ga(sn(e))))return r}const o=cf(i[t]||r[t],e)||cf(i.appContext[t],e);return!o&&s?r:o}}function cf(t,e){return t&&(t[e]||t[sn(e)]||t[ga(sn(e))])}const bg=t=>t.__isSuspense;let Vl=0;const FE={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,l,c,u){if(t==null)UE(e,n,s,i,r,o,l,c,u);else{if(r&&r.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}HE(t,e,n,s,i,o,l,c,u)}},hydrate:jE,create:ou,normalize:BE},ru=FE;function _r(t,e){const n=t.props&&t.props[e];ae(n)&&n()}function UE(t,e,n,s,i,r,o,l,c){const{p:u,o:{createElement:f}}=c,d=f("div"),g=t.suspense=ou(t,i,s,e,d,n,r,o,l,c);u(null,g.pendingBranch=t.ssContent,d,null,s,g,r,o),g.deps>0?(_r(t,"onPending"),_r(t,"onFallback"),u(null,t.ssFallback,e,n,s,null,r,o),Xs(g,t.ssFallback)):g.resolve(!1,!0)}function HE(t,e,n,s,i,r,o,l,{p:c,um:u,o:{createElement:f}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const g=e.ssContent,T=e.ssFallback,{activeBranch:C,pendingBranch:O,isInFallback:F,isHydrating:B}=d;if(O)d.pendingBranch=g,Bt(g,O)?(c(O,g,d.hiddenContainer,null,i,d,r,o,l),d.deps<=0?d.resolve():F&&(B||(c(C,T,n,s,i,null,r,o,l),Xs(d,T)))):(d.pendingId=Vl++,B?(d.isHydrating=!1,d.activeBranch=O):u(O,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=f("div"),F?(c(null,g,d.hiddenContainer,null,i,d,r,o,l),d.deps<=0?d.resolve():(c(C,T,n,s,i,null,r,o,l),Xs(d,T))):C&&Bt(g,C)?(c(C,g,n,s,i,d,r,o,l),d.resolve(!0)):(c(null,g,d.hiddenContainer,null,i,d,r,o,l),d.deps<=0&&d.resolve()));else if(C&&Bt(g,C))c(C,g,n,s,i,d,r,o,l),Xs(d,g);else if(_r(e,"onPending"),d.pendingBranch=g,g.shapeFlag&512?d.pendingId=g.component.suspenseId:d.pendingId=Vl++,c(null,g,d.hiddenContainer,null,i,d,r,o,l),d.deps<=0)d.resolve();else{const{timeout:k,pendingId:A}=d;k>0?setTimeout(()=>{d.pendingId===A&&d.fallback(T)},k):k===0&&d.fallback(T)}}function ou(t,e,n,s,i,r,o,l,c,u,f=!1){const{p:d,m:g,um:T,n:C,o:{parentNode:O,remove:F}}=u;let B;const k=$E(t);k&&e&&e.pendingBranch&&(B=e.pendingId,e.deps++);const A=t.props?zp(t.props.timeout):void 0,P=r,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:s,hiddenContainer:i,deps:0,pendingId:Vl++,timeout:typeof A=="number"?A:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(M=!1,b=!1){const{vnode:_,activeBranch:y,pendingBranch:E,pendingId:R,effects:I,parentComponent:v,container:ce}=D;let me=!1;D.isHydrating?D.isHydrating=!1:M||(me=y&&E.transition&&E.transition.mode==="out-in",me&&(y.transition.afterLeave=()=>{R===D.pendingId&&(g(E,ce,r===P?C(y):r,0),$l(I))}),y&&(O(y.el)!==D.hiddenContainer&&(r=C(y)),T(y,v,D,!0)),me||g(E,ce,r,0)),Xs(D,E),D.pendingBranch=null,D.isInFallback=!1;let Q=D.parent,oe=!1;for(;Q;){if(Q.pendingBranch){Q.effects.push(...I),oe=!0;break}Q=Q.parent}!oe&&!me&&$l(I),D.effects=[],k&&e&&e.pendingBranch&&B===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),_r(_,"onResolve")},fallback(M){if(!D.pendingBranch)return;const{vnode:b,activeBranch:_,parentComponent:y,container:E,namespace:R}=D;_r(b,"onFallback");const I=C(_),v=()=>{D.isInFallback&&(d(null,M,E,I,y,null,R,l,c),Xs(D,M))},ce=M.transition&&M.transition.mode==="out-in";ce&&(_.transition.afterLeave=v),D.isInFallback=!0,T(_,y,null,!0),ce||v()},move(M,b,_){D.activeBranch&&g(D.activeBranch,M,b,_),D.container=M},next(){return D.activeBranch&&C(D.activeBranch)},registerDep(M,b){const _=!!D.pendingBranch;_&&D.deps++;const y=M.vnode.el;M.asyncDep.catch(E=>{_i(E,M,0)}).then(E=>{if(M.isUnmounted||D.isUnmounted||D.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:R}=M;Jl(M,E,!1),y&&(R.el=y);const I=!y&&M.subTree.el;b(M,R,O(y||M.subTree.el),y?null:C(M.subTree),D,o,c),I&&F(I),iu(M,R.el),_&&--D.deps===0&&D.resolve()})},unmount(M,b){D.isUnmounted=!0,D.activeBranch&&T(D.activeBranch,n,M,b),D.pendingBranch&&T(D.pendingBranch,n,M,b)}};return D}function jE(t,e,n,s,i,r,o,l,c){const u=e.suspense=ou(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,l,!0),f=c(t,u.pendingBranch=e.ssContent,n,u,r,o);return u.deps===0&&u.resolve(!1,!0),f}function BE(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=uf(s?n.default:n),t.ssFallback=s?uf(n.fallback):xe(rt)}function uf(t){let e;if(ae(t)){const n=ai&&t._c;n&&(t._d=!1,en()),t=t(),n&&(t._d=!0,e=Mt,Xg())}return re(t)&&(t=OE(t)),t=Nt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Ig(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):$l(t)}function Xs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t;let i=e.el;for(;!i&&e.component;)e=e.component.subTree,i=e.el;n.el=i,s&&s.subTree===n&&(s.vnode.el=i,iu(s,i))}function $E(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const VE=Symbol.for("v-scx"),WE=()=>Xe(VE);function a1(t,e){return au(t,null,e)}const ro={};function Js(t,e,n){return au(t,e,n)}function au(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:l}=Ne){if(e&&r){const M=e;e=(...b)=>{M(...b),D()}}const c=Ve,u=M=>s===!0?M:_s(M,s===!1?1:void 0);let f,d=!1,g=!1;if(at(t)?(f=()=>t.value,d=No(t)):Ji(t)?(f=()=>u(t),d=!0):re(t)?(g=!0,d=t.some(M=>Ji(M)||No(M)),f=()=>t.map(M=>{if(at(M))return M.value;if(Ji(M))return u(M);if(ae(M))return Yn(M,c,2)})):ae(t)?e?f=()=>Yn(t,c,2):f=()=>(T&&T(),xt(t,c,3,[C])):f=Lt,e&&s){const M=f;f=()=>_s(M())}let T,C=M=>{T=A.onStop=()=>{Yn(M,c,4),T=A.onStop=void 0}},O;if(Nr)if(C=Lt,e?n&&xt(e,c,3,[f(),g?[]:void 0,C]):f(),i==="sync"){const M=WE();O=M.__watcherHandles||(M.__watcherHandles=[])}else return Lt;let F=g?new Array(t.length).fill(ro):ro;const B=()=>{if(!(!A.active||!A.dirty))if(e){const M=A.run();(s||d||(g?M.some((b,_)=>Zn(b,F[_])):Zn(M,F)))&&(T&&T(),xt(e,c,3,[M,F===ro?void 0:g&&F[0]===ro?[]:F,C]),F=M)}else A.run()};B.allowRecurse=!!e;let k;i==="sync"?k=B:i==="post"?k=()=>Qe(B,c&&c.suspense):(B.pre=!0,c&&(B.id=c.uid),k=()=>va(B));const A=new zc(f,Lt,k),P=Zv(),D=()=>{A.stop(),P&&Wc(P.effects,A)};return e?n?B():F=A.run():i==="post"?Qe(A.run.bind(A),c&&c.suspense):A.run(),O&&O.push(D),D}function KE(t,e,n){const s=this.proxy,i=Fe(t)?t.includes(".")?Cg(s,t):()=>s[t]:t.bind(s,s);let r;ae(e)?r=e:(r=e.handler,n=e);const o=Is(this),l=au(i,r.bind(s),n);return o(),l}function Cg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function _s(t,e=1/0,n){if(e<=0||!Re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,at(t))_s(t.value,e,n);else if(re(t))for(let s=0;s<t.length;s++)_s(t[s],e,n);else if(Wp(t)||qs(t))t.forEach(s=>{_s(s,e,n)});else if(Gp(t))for(const s in t)_s(t[s],e,n);return t}function l1(t,e){if(Be===null)return t;const n=ba(Be)||Be.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=Ne]=e[i];r&&(ae(r)&&(r={mounted:r,updated:r}),r.deep&&_s(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Qt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(ts(),xt(c,n,8,[t.el,l,t,e]),ns())}}const Hn=Symbol("_leaveCb"),oo=Symbol("_enterCb");function GE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lu(()=>{t.isMounted=!0}),cu(()=>{t.isUnmounting=!0}),t}const Pt=[Function,Array],Sg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt},qE={name:"BaseTransition",props:Sg,setup(t,{slots:e}){const n=yi(),s=GE();return()=>{const i=e.default&&Ag(e.default(),!0);if(!i||!i.length)return;let r=i[0];if(i.length>1){for(const g of i)if(g.type!==rt){r=g;break}}const o=ve(t),{mode:l}=o;if(s.isLeaving)return ol(r);const c=hf(r);if(!c)return ol(r);const u=Wl(c,o,s,n);Do(c,u);const f=n.subTree,d=f&&hf(f);if(d&&d.type!==rt&&!Bt(c,d)){const g=Wl(d,o,s,n);if(Do(d,g),l==="out-in"&&c.type!==rt)return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},ol(r);l==="in-out"&&c.type!==rt&&(g.delayLeave=(T,C,O)=>{const F=Rg(s,d);F[String(d.key)]=d,T[Hn]=()=>{C(),T[Hn]=void 0,delete u.delayedLeave},u.delayedLeave=O})}return r}}},zE=qE;function Rg(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Wl(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:g,onAfterLeave:T,onLeaveCancelled:C,onBeforeAppear:O,onAppear:F,onAfterAppear:B,onAppearCancelled:k}=e,A=String(t.key),P=Rg(n,t),D=(_,y)=>{_&&xt(_,s,9,y)},M=(_,y)=>{const E=y[1];D(_,y),re(_)?_.every(R=>R.length<=1)&&E():_.length<=1&&E()},b={mode:r,persisted:o,beforeEnter(_){let y=l;if(!n.isMounted)if(i)y=O||l;else return;_[Hn]&&_[Hn](!0);const E=P[A];E&&Bt(t,E)&&E.el[Hn]&&E.el[Hn](),D(y,[_])},enter(_){let y=c,E=u,R=f;if(!n.isMounted)if(i)y=F||c,E=B||u,R=k||f;else return;let I=!1;const v=_[oo]=ce=>{I||(I=!0,ce?D(R,[_]):D(E,[_]),b.delayedLeave&&b.delayedLeave(),_[oo]=void 0)};y?M(y,[_,v]):v()},leave(_,y){const E=String(t.key);if(_[oo]&&_[oo](!0),n.isUnmounting)return y();D(d,[_]);let R=!1;const I=_[Hn]=v=>{R||(R=!0,y(),v?D(C,[_]):D(T,[_]),_[Hn]=void 0,P[E]===t&&delete P[E])};P[E]=t,g?M(g,[_,I]):I()},clone(_){return Wl(_,e,n,s)}};return b}function ol(t){if(Pr(t))return t=Tn(t),t.children=null,t}function hf(t){if(!Pr(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ae(n.default))return n.default()}}function Do(t,e){t.shapeFlag&6&&t.component?Do(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ag(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===gt?(o.patchFlag&128&&i++,s=s.concat(Ag(o.children,e,l))):(e||o.type!==rt)&&s.push(l!=null?Tn(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function is(t,e){return ae(t)?$e({name:t.name},e,{setup:t}):t}const ws=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function ff(t){ae(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:l}=t;let c=null,u,f=0;const d=()=>(f++,c=null,g()),g=()=>{let T;return c||(T=c=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),l)return new Promise((O,F)=>{l(C,()=>O(d()),()=>F(C),f+1)});throw C}).then(C=>T!==c&&c?c:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),u=C,C)))};return is({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return u},setup(){const T=Ve;if(u)return()=>al(u,T);const C=k=>{c=null,_i(k,T,13,!s)};if(o&&T.suspense||Nr)return g().then(k=>()=>al(k,T)).catch(k=>(C(k),()=>s?xe(s,{error:k}):null));const O=Kt(!1),F=Kt(),B=Kt(!!i);return i&&setTimeout(()=>{B.value=!1},i),r!=null&&setTimeout(()=>{if(!O.value&&!F.value){const k=new Error(`Async component timed out after ${r}ms.`);C(k),F.value=k}},r),g().then(()=>{O.value=!0,T.parent&&Pr(T.parent.vnode)&&(T.parent.effect.dirty=!0,va(T.parent.update))}).catch(k=>{C(k),F.value=k}),()=>{if(O.value&&u)return al(u,T);if(F.value&&s)return xe(s,{error:F.value});if(n&&!B.value)return xe(n)}}})}function al(t,e){const{ref:n,props:s,children:i,ce:r}=e.vnode,o=xe(t,s,i);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const Pr=t=>t.type.__isKeepAlive,YE={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=yi(),s=n.ctx;if(!s.renderer)return()=>{const k=e.default&&e.default();return k&&k.length===1?k[0]:k};const i=new Map,r=new Set;let o=null;const l=n.suspense,{renderer:{p:c,m:u,um:f,o:{createElement:d}}}=s,g=d("div");s.activate=(k,A,P,D,M)=>{const b=k.component;u(k,A,P,0,l),c(b.vnode,k,A,P,b,l,D,k.slotScopeIds,M),Qe(()=>{b.isDeactivated=!1,b.a&&Xi(b.a);const _=k.props&&k.props.onVnodeMounted;_&&dt(_,b.parent,k)},l)},s.deactivate=k=>{const A=k.component;u(k,g,null,1,l),Qe(()=>{A.da&&Xi(A.da);const P=k.props&&k.props.onVnodeUnmounted;P&&dt(P,A.parent,k),A.isDeactivated=!0},l)};function T(k){ll(k),f(k,n,l,!0)}function C(k){i.forEach((A,P)=>{const D=Ql(A.type);D&&(!k||!k(D))&&O(P)})}function O(k){const A=i.get(k);!o||!Bt(A,o)?T(A):o&&ll(o),i.delete(k),r.delete(k)}Js(()=>[t.include,t.exclude],([k,A])=>{k&&C(P=>qi(k,P)),A&&C(P=>!qi(A,P))},{flush:"post",deep:!0});let F=null;const B=()=>{F!=null&&i.set(F,cl(n.subTree))};return lu(B),Pg(B),cu(()=>{i.forEach(k=>{const{subTree:A,suspense:P}=n,D=cl(A);if(k.type===D.type&&k.key===D.key){ll(D);const M=D.component.da;M&&Qe(M,P);return}T(k)})}),()=>{if(F=null,!e.default)return null;const k=e.default(),A=k[0];if(k.length>1)return o=null,k;if(!li(A)||!(A.shapeFlag&4)&&!(A.shapeFlag&128))return o=null,A;let P=cl(A);const D=P.type,M=Ql(ws(P)?P.type.__asyncResolved||{}:D),{include:b,exclude:_,max:y}=t;if(b&&(!M||!qi(b,M))||_&&M&&qi(_,M))return o=P,A;const E=P.key==null?D:P.key,R=i.get(E);return P.el&&(P=Tn(P),A.shapeFlag&128&&(A.ssContent=P)),F=E,R?(P.el=R.el,P.component=R.component,P.transition&&Do(P,P.transition),P.shapeFlag|=512,r.delete(E),r.add(E)):(r.add(E),y&&r.size>parseInt(y,10)&&O(r.values().next().value)),P.shapeFlag|=256,o=P,bg(A.type)?A:P}}},XE=YE;function qi(t,e){return re(t)?t.some(n=>qi(n,e)):Fe(t)?t.split(",").includes(e):jv(t)?t.test(e):!1}function JE(t,e){kg(t,"a",e)}function QE(t,e){kg(t,"da",e)}function kg(t,e,n=Ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ta(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Pr(i.parent.vnode)&&ZE(s,e,n,i),i=i.parent}}function ZE(t,e,n,s){const i=Ta(e,t,s,!0);Ng(()=>{Wc(s[e],i)},n)}function ll(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function cl(t){return t.shapeFlag&128?t.ssContent:t}function Ta(t,e,n=Ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ts();const l=Is(n),c=xt(e,n,t,o);return l(),ns(),c});return s?i.unshift(r):i.push(r),r}}const Cn=t=>(e,n=Ve)=>(!Nr||t==="sp")&&Ta(t,(...s)=>e(...s),n),ew=Cn("bm"),lu=Cn("m"),tw=Cn("bu"),Pg=Cn("u"),cu=Cn("bum"),Ng=Cn("um"),nw=Cn("sp"),sw=Cn("rtg"),iw=Cn("rtc");function Og(t,e=Ve){Ta("ec",t,e)}function c1(t,e,n,s){let i;const r=n;if(re(t)||Fe(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(Re(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}function u1(t,e,n={},s,i){if(Be.isCE||Be.parent&&ws(Be.parent)&&Be.parent.isCE)return xe("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),en();const o=r&&Lg(r(n)),l=pn(gt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Lg(t){return t.some(e=>li(e)?!(e.type===rt||e.type===gt&&!Lg(e.children)):!0)?t:null}const Kl=t=>t?s_(t)?ba(t)||t.proxy:Kl(t.parent):null,Zi=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kl(t.parent),$root:t=>Kl(t.root),$emit:t=>t.emit,$options:t=>uu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,va(t.update)}),$nextTick:t=>t.n||(t.n=mi.bind(t.proxy)),$watch:t=>KE.bind(t)}),ul=(t,e)=>t!==Ne&&!t.__isScriptSetup&&_e(t,e),rw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const T=o[e];if(T!==void 0)switch(T){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ul(s,e))return o[e]=1,s[e];if(i!==Ne&&_e(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&_e(u,e))return o[e]=3,r[e];if(n!==Ne&&_e(n,e))return o[e]=4,n[e];Gl&&(o[e]=0)}}const f=Zi[e];let d,g;if(f)return e==="$attrs"&&mt(t.attrs,"get",""),f(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Ne&&_e(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,_e(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ul(i,e)?(i[e]=n,!0):s!==Ne&&_e(s,e)?(s[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==Ne&&_e(t,o)||ul(e,o)||(l=r[0])&&_e(l,o)||_e(s,o)||_e(Zi,o)||_e(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function h1(){return Mg().slots}function f1(){return Mg().attrs}function Mg(){const t=yi();return t.setupContext||(t.setupContext=r_(t))}function df(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function d1(t){const e=yi();let n=t();return Xl(),Kc(n)&&(n=n.catch(s=>{throw Is(e),s})),[n,()=>Is(e)]}let Gl=!0;function ow(t){const e=uu(t),n=t.proxy,s=t.ctx;Gl=!1,e.beforeCreate&&pf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:d,mounted:g,beforeUpdate:T,updated:C,activated:O,deactivated:F,beforeDestroy:B,beforeUnmount:k,destroyed:A,unmounted:P,render:D,renderTracked:M,renderTriggered:b,errorCaptured:_,serverPrefetch:y,expose:E,inheritAttrs:R,components:I,directives:v,filters:ce}=e;if(u&&aw(u,s,null),o)for(const oe in o){const Z=o[oe];ae(Z)&&(s[oe]=Z.bind(n))}if(i){const oe=i.call(n,n);Re(oe)&&(t.data=ss(oe))}if(Gl=!0,r)for(const oe in r){const Z=r[oe],lt=ae(Z)?Z.bind(n,n):ae(Z.get)?Z.get.bind(n,n):Lt,Ut=!ae(Z)&&ae(Z.set)?Z.set.bind(n):Lt,St=Ot({get:lt,set:Ut});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>St.value,set:Me=>St.value=Me})}if(l)for(const oe in l)Dg(l[oe],s,n,oe);if(c){const oe=ae(c)?c.call(n):c;Reflect.ownKeys(oe).forEach(Z=>{Ts(Z,oe[Z])})}f&&pf(f,t,"c");function Q(oe,Z){re(Z)?Z.forEach(lt=>oe(lt.bind(n))):Z&&oe(Z.bind(n))}if(Q(ew,d),Q(lu,g),Q(tw,T),Q(Pg,C),Q(JE,O),Q(QE,F),Q(Og,_),Q(iw,M),Q(sw,b),Q(cu,k),Q(Ng,P),Q(nw,y),re(E))if(E.length){const oe=t.exposed||(t.exposed={});E.forEach(Z=>{Object.defineProperty(oe,Z,{get:()=>n[Z],set:lt=>n[Z]=lt})})}else t.exposed||(t.exposed={});D&&t.render===Lt&&(t.render=D),R!=null&&(t.inheritAttrs=R),I&&(t.components=I),v&&(t.directives=v)}function aw(t,e,n=Lt){re(t)&&(t=ql(t));for(const s in t){const i=t[s];let r;Re(i)?"default"in i?r=Xe(i.from||s,i.default,!0):r=Xe(i.from||s):r=Xe(i),at(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function pf(t,e,n){xt(re(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Dg(t,e,n,s){const i=s.includes(".")?Cg(n,s):()=>n[s];if(Fe(t)){const r=e[t];ae(r)&&Js(i,r)}else if(ae(t))Js(i,t.bind(n));else if(Re(t))if(re(t))t.forEach(r=>Dg(r,e,n,s));else{const r=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(r)&&Js(i,r,t)}}function uu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>xo(c,u,o,!0)),xo(c,e,o)),Re(e)&&r.set(e,c),c}function xo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&xo(t,r,n,!0),i&&i.forEach(o=>xo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=lw[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const lw={data:gf,props:_f,emits:_f,methods:zi,computed:zi,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:zi,directives:zi,watch:uw,provide:gf,inject:cw};function gf(t,e){return e?t?function(){return $e(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function cw(t,e){return zi(ql(t),ql(e))}function ql(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function zi(t,e){return t?$e(Object.create(null),t,e):e}function _f(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:$e(Object.create(null),df(t),df(e??{})):e}function uw(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const s in e)n[s]=ht(t[s],e[s]);return n}function xg(){return{app:null,config:{isNativeTag:Uv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hw=0;function fw(t,e){return function(s,i=null){ae(s)||(s=$e({},s)),i!=null&&!Re(i)&&(i=null);const r=xg(),o=new WeakSet;let l=!1;const c=r.app={_uid:hw++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:o_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&ae(u.install)?(o.add(u),u.install(c,...f)):ae(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const g=xe(s,i);return g.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(g,u):t(g,u,d),l=!0,c._container=u,u.__vue_app__=c,ba(g.component)||g.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Qs;Qs=c;try{return u()}finally{Qs=f}}};return c}}let Qs=null;function Ts(t,e){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[t]=e}}function Xe(t,e,n=!1){const s=Ve||Be;if(s||Qs){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Qs._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ae(e)?e.call(s&&s.proxy):e}}function Fg(){return!!(Ve||Be||Qs)}const Ug={},Hg=()=>Object.create(Ug),jg=t=>Object.getPrototypeOf(t)===Ug;function dw(t,e,n,s=!1){const i={},r=Hg();t.propsDefaults=Object.create(null),Bg(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:kr(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function pw(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=ve(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let g=f[d];if(Ea(t.emitsOptions,g))continue;const T=e[g];if(c)if(_e(r,g))T!==r[g]&&(r[g]=T,u=!0);else{const C=sn(g);i[C]=zl(c,l,C,T,t,!1)}else T!==r[g]&&(r[g]=T,u=!0)}}}else{Bg(t,e,i,r)&&(u=!0);let f;for(const d in l)(!e||!_e(e,d)&&((f=gi(d))===d||!_e(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(i[d]=zl(c,l,d,void 0,t,!0)):delete i[d]);if(r!==l)for(const d in r)(!e||!_e(e,d))&&(delete r[d],u=!0)}u&&En(t.attrs,"set","")}function Bg(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(zs(c))continue;const u=e[c];let f;i&&_e(i,f=sn(c))?!r||!r.includes(f)?n[f]=u:(l||(l={}))[f]=u:Ea(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=ve(n),u=l||Ne;for(let f=0;f<r.length;f++){const d=r[f];n[d]=zl(i,c,d,u[d],t,!_e(u,d))}}return o}function zl(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=_e(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ae(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const f=Is(i);s=u[n]=c.call(null,e),f()}}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===gi(n))&&(s=!0))}return s}function $g(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!ae(t)){const f=d=>{c=!0;const[g,T]=$g(d,e,!0);$e(o,g),T&&l.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!c)return Re(t)&&s.set(t,Gs),Gs;if(re(r))for(let f=0;f<r.length;f++){const d=sn(r[f]);mf(d)&&(o[d]=Ne)}else if(r)for(const f in r){const d=sn(f);if(mf(d)){const g=r[f],T=o[d]=re(g)||ae(g)?{type:g}:$e({},g);if(T){const C=Ef(Boolean,T.type),O=Ef(String,T.type);T[0]=C>-1,T[1]=O<0||C<O,(C>-1||_e(T,"default"))&&l.push(d)}}}const u=[o,l];return Re(t)&&s.set(t,u),u}function mf(t){return t[0]!=="$"&&!zs(t)}function yf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function vf(t,e){return yf(t)===yf(e)}function Ef(t,e){return re(e)?e.findIndex(n=>vf(n,t)):ae(e)&&vf(e,t)?0:-1}const Vg=t=>t[0]==="_"||t==="$stable",hu=t=>re(t)?t.map(Nt):[Nt(t)],gw=(t,e,n)=>{if(e._n)return e;const s=su((...i)=>hu(e(...i)),n);return s._c=!1,s},Wg=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Vg(i))continue;const r=t[i];if(ae(r))e[i]=gw(i,r,s);else if(r!=null){const o=hu(r);e[i]=()=>o}}},Kg=(t,e)=>{const n=hu(e);t.slots.default=()=>n},_w=(t,e)=>{const n=t.slots=Hg();if(t.vnode.shapeFlag&32){const s=e._;s?($e(n,e),qp(n,"_",s,!0)):Wg(e,n)}else e&&Kg(t,e)},mw=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ne;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:($e(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Wg(e,i)),o=e}else e&&(Kg(t,e),o={default:1});if(r)for(const l in i)!Vg(l)&&o[l]==null&&delete i[l]};function Fo(t,e,n,s,i=!1){if(re(t)){t.forEach((g,T)=>Fo(g,e&&(re(e)?e[T]:e),n,s,i));return}if(ws(s)&&!i)return;const r=s.shapeFlag&4?ba(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ne?l.refs={}:l.refs,d=l.setupState;if(u!=null&&u!==c&&(Fe(u)?(f[u]=null,_e(d,u)&&(d[u]=null)):at(u)&&(u.value=null)),ae(c))Yn(c,l,12,[o,f]);else{const g=Fe(c),T=at(c);if(g||T){const C=()=>{if(t.f){const O=g?_e(d,c)?d[c]:f[c]:c.value;i?re(O)&&Wc(O,r):re(O)?O.includes(r)||O.push(r):g?(f[c]=[r],_e(d,c)&&(d[c]=f[c])):(c.value=[r],t.k&&(f[t.k]=c.value))}else g?(f[c]=o,_e(d,c)&&(d[c]=o)):T&&(c.value=o,t.k&&(f[t.k]=o))};o?(C.id=-1,Qe(C,n)):C()}}}let Ln=!1;const yw=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",vw=t=>t.namespaceURI.includes("MathML"),ao=t=>{if(yw(t))return"svg";if(vw(t))return"mathml"},lo=t=>t.nodeType===8;function Ew(t){const{mt:e,p:n,o:{patchProp:s,createText:i,nextSibling:r,parentNode:o,remove:l,insert:c,createComment:u}}=t,f=(A,P)=>{if(!P.hasChildNodes()){n(null,A,P),Lo(),P._vnode=A;return}Ln=!1,d(P.firstChild,A,null,null,null),Lo(),P._vnode=A,Ln&&console.error("Hydration completed but contains mismatches.")},d=(A,P,D,M,b,_=!1)=>{_=_||!!P.dynamicChildren;const y=lo(A)&&A.data==="[",E=()=>O(A,P,D,M,b,y),{type:R,ref:I,shapeFlag:v,patchFlag:ce}=P;let me=A.nodeType;P.el=A,ce===-2&&(_=!1,P.dynamicChildren=null);let Q=null;switch(R){case oi:me!==3?P.children===""?(c(P.el=i(""),o(A),A),Q=A):Q=E():(A.data!==P.children&&(Ln=!0,A.data=P.children),Q=r(A));break;case rt:k(A)?(Q=r(A),B(P.el=A.content.firstChild,A,D)):me!==8||y?Q=E():Q=r(A);break;case er:if(y&&(A=r(A),me=A.nodeType),me===1||me===3){Q=A;const oe=!P.children.length;for(let Z=0;Z<P.staticCount;Z++)oe&&(P.children+=Q.nodeType===1?Q.outerHTML:Q.data),Z===P.staticCount-1&&(P.anchor=Q),Q=r(Q);return y?r(Q):Q}else E();break;case gt:y?Q=C(A,P,D,M,b,_):Q=E();break;default:if(v&1)(me!==1||P.type.toLowerCase()!==A.tagName.toLowerCase())&&!k(A)?Q=E():Q=g(A,P,D,M,b,_);else if(v&6){P.slotScopeIds=b;const oe=o(A);if(y?Q=F(A):lo(A)&&A.data==="teleport start"?Q=F(A,A.data,"teleport end"):Q=r(A),e(P,oe,null,D,M,ao(oe),_),ws(P)){let Z;y?(Z=xe(gt),Z.anchor=Q?Q.previousSibling:oe.lastChild):Z=A.nodeType===3?t_(""):xe("div"),Z.el=A,P.component.subTree=Z}}else v&64?me!==8?Q=E():Q=P.type.hydrate(A,P,D,M,b,_,t,T):v&128&&(Q=P.type.hydrate(A,P,D,M,ao(o(A)),b,_,t,d))}return I!=null&&Fo(I,null,M,P),Q},g=(A,P,D,M,b,_)=>{_=_||!!P.dynamicChildren;const{type:y,props:E,patchFlag:R,shapeFlag:I,dirs:v,transition:ce}=P,me=y==="input"||y==="option";if(me||R!==-1){v&&Qt(P,null,D,"created");let Q=!1;if(k(A)){Q=qg(M,ce)&&D&&D.vnode.props&&D.vnode.props.appear;const Z=A.content.firstChild;Q&&ce.beforeEnter(Z),B(Z,A,D),P.el=A=Z}if(I&16&&!(E&&(E.innerHTML||E.textContent))){let Z=T(A.firstChild,P,A,D,M,b,_);for(;Z;){Ln=!0;const lt=Z;Z=Z.nextSibling,l(lt)}}else I&8&&A.textContent!==P.children&&(Ln=!0,A.textContent=P.children);if(E)if(me||!_||R&48)for(const Z in E)(me&&(Z.endsWith("value")||Z==="indeterminate")||Rr(Z)&&!zs(Z)||Z[0]===".")&&s(A,Z,null,E[Z],void 0,void 0,D);else E.onClick&&s(A,"onClick",null,E.onClick,void 0,void 0,D);let oe;(oe=E&&E.onVnodeBeforeMount)&&dt(oe,D,P),v&&Qt(P,null,D,"beforeMount"),((oe=E&&E.onVnodeMounted)||v||Q)&&Ig(()=>{oe&&dt(oe,D,P),Q&&ce.enter(A),v&&Qt(P,null,D,"mounted")},M)}return A.nextSibling},T=(A,P,D,M,b,_,y)=>{y=y||!!P.dynamicChildren;const E=P.children,R=E.length;for(let I=0;I<R;I++){const v=y?E[I]:E[I]=Nt(E[I]);if(A)A=d(A,v,M,b,_,y);else{if(v.type===oi&&!v.children)continue;Ln=!0,n(null,v,D,null,M,b,ao(D),_)}}return A},C=(A,P,D,M,b,_)=>{const{slotScopeIds:y}=P;y&&(b=b?b.concat(y):y);const E=o(A),R=T(r(A),P,E,D,M,b,_);return R&&lo(R)&&R.data==="]"?r(P.anchor=R):(Ln=!0,c(P.anchor=u("]"),E,R),R)},O=(A,P,D,M,b,_)=>{if(Ln=!0,P.el=null,_){const R=F(A);for(;;){const I=r(A);if(I&&I!==R)l(I);else break}}const y=r(A),E=o(A);return l(A),n(null,P,E,y,D,M,ao(E),b),y},F=(A,P="[",D="]")=>{let M=0;for(;A;)if(A=r(A),A&&lo(A)&&(A.data===P&&M++,A.data===D)){if(M===0)return r(A);M--}return A},B=(A,P,D)=>{const M=P.parentNode;M&&M.replaceChild(A,P);let b=D;for(;b;)b.vnode.el===P&&(b.vnode.el=b.subTree.el=A),b=b.parent},k=A=>A.nodeType===1&&A.tagName.toLowerCase()==="template";return[f,d]}const Qe=Ig;function ww(t){return Gg(t)}function Tw(t){return Gg(t,Ew)}function Gg(t,e){const n=Yp();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:d,nextSibling:g,setScopeId:T=Lt,insertStaticContent:C}=t,O=(w,S,L,j=null,U=null,W=null,q=void 0,V=null,K=!!S.dynamicChildren)=>{if(w===S)return;w&&!Bt(w,S)&&(j=H(w),Me(w,U,W,!0),w=null),S.patchFlag===-2&&(K=!1,S.dynamicChildren=null);const{type:$,ref:X,shapeFlag:se}=S;switch($){case oi:F(w,S,L,j);break;case rt:B(w,S,L,j);break;case er:w==null&&k(S,L,j,q);break;case gt:I(w,S,L,j,U,W,q,V,K);break;default:se&1?D(w,S,L,j,U,W,q,V,K):se&6?v(w,S,L,j,U,W,q,V,K):(se&64||se&128)&&$.process(w,S,L,j,U,W,q,V,K,ee)}X!=null&&U&&Fo(X,w&&w.ref,W,S||w,!S)},F=(w,S,L,j)=>{if(w==null)s(S.el=l(S.children),L,j);else{const U=S.el=w.el;S.children!==w.children&&u(U,S.children)}},B=(w,S,L,j)=>{w==null?s(S.el=c(S.children||""),L,j):S.el=w.el},k=(w,S,L,j)=>{[w.el,w.anchor]=C(w.children,S,L,j,w.el,w.anchor)},A=({el:w,anchor:S},L,j)=>{let U;for(;w&&w!==S;)U=g(w),s(w,L,j),w=U;s(S,L,j)},P=({el:w,anchor:S})=>{let L;for(;w&&w!==S;)L=g(w),i(w),w=L;i(S)},D=(w,S,L,j,U,W,q,V,K)=>{S.type==="svg"?q="svg":S.type==="math"&&(q="mathml"),w==null?M(S,L,j,U,W,q,V,K):y(w,S,U,W,q,V,K)},M=(w,S,L,j,U,W,q,V)=>{let K,$;const{props:X,shapeFlag:se,transition:ne,dirs:te}=w;if(K=w.el=o(w.type,W,X&&X.is,X),se&8?f(K,w.children):se&16&&_(w.children,K,null,j,U,hl(w,W),q,V),te&&Qt(w,null,j,"created"),b(K,w,w.scopeId,q,j),X){for(const ge in X)ge!=="value"&&!zs(ge)&&r(K,ge,null,X[ge],W,w.children,j,U,Ge);"value"in X&&r(K,"value",null,X.value,W),($=X.onVnodeBeforeMount)&&dt($,j,w)}te&&Qt(w,null,j,"beforeMount");const ie=qg(U,ne);ie&&ne.beforeEnter(K),s(K,S,L),(($=X&&X.onVnodeMounted)||ie||te)&&Qe(()=>{$&&dt($,j,w),ie&&ne.enter(K),te&&Qt(w,null,j,"mounted")},U)},b=(w,S,L,j,U)=>{if(L&&T(w,L),j)for(let W=0;W<j.length;W++)T(w,j[W]);if(U){let W=U.subTree;if(S===W){const q=U.vnode;b(w,q,q.scopeId,q.slotScopeIds,U.parent)}}},_=(w,S,L,j,U,W,q,V,K=0)=>{for(let $=K;$<w.length;$++){const X=w[$]=V?jn(w[$]):Nt(w[$]);O(null,X,S,L,j,U,W,q,V)}},y=(w,S,L,j,U,W,q)=>{const V=S.el=w.el;let{patchFlag:K,dynamicChildren:$,dirs:X}=S;K|=w.patchFlag&16;const se=w.props||Ne,ne=S.props||Ne;let te;if(L&&cs(L,!1),(te=ne.onVnodeBeforeUpdate)&&dt(te,L,S,w),X&&Qt(S,w,L,"beforeUpdate"),L&&cs(L,!0),$?E(w.dynamicChildren,$,V,L,j,hl(S,U),W):q||Z(w,S,V,null,L,j,hl(S,U),W,!1),K>0){if(K&16)R(V,S,se,ne,L,j,U);else if(K&2&&se.class!==ne.class&&r(V,"class",null,ne.class,U),K&4&&r(V,"style",se.style,ne.style,U),K&8){const ie=S.dynamicProps;for(let ge=0;ge<ie.length;ge++){const Ce=ie[ge],He=se[Ce],yt=ne[Ce];(yt!==He||Ce==="value")&&r(V,Ce,He,yt,U,w.children,L,j,Ge)}}K&1&&w.children!==S.children&&f(V,S.children)}else!q&&$==null&&R(V,S,se,ne,L,j,U);((te=ne.onVnodeUpdated)||X)&&Qe(()=>{te&&dt(te,L,S,w),X&&Qt(S,w,L,"updated")},j)},E=(w,S,L,j,U,W,q)=>{for(let V=0;V<S.length;V++){const K=w[V],$=S[V],X=K.el&&(K.type===gt||!Bt(K,$)||K.shapeFlag&70)?d(K.el):L;O(K,$,X,null,j,U,W,q,!0)}},R=(w,S,L,j,U,W,q)=>{if(L!==j){if(L!==Ne)for(const V in L)!zs(V)&&!(V in j)&&r(w,V,L[V],null,q,S.children,U,W,Ge);for(const V in j){if(zs(V))continue;const K=j[V],$=L[V];K!==$&&V!=="value"&&r(w,V,$,K,q,S.children,U,W,Ge)}"value"in j&&r(w,"value",L.value,j.value,q)}},I=(w,S,L,j,U,W,q,V,K)=>{const $=S.el=w?w.el:l(""),X=S.anchor=w?w.anchor:l("");let{patchFlag:se,dynamicChildren:ne,slotScopeIds:te}=S;te&&(V=V?V.concat(te):te),w==null?(s($,L,j),s(X,L,j),_(S.children||[],L,X,U,W,q,V,K)):se>0&&se&64&&ne&&w.dynamicChildren?(E(w.dynamicChildren,ne,L,U,W,q,V),(S.key!=null||U&&S===U.subTree)&&zg(w,S,!0)):Z(w,S,L,X,U,W,q,V,K)},v=(w,S,L,j,U,W,q,V,K)=>{S.slotScopeIds=V,w==null?S.shapeFlag&512?U.ctx.activate(S,L,j,q,K):ce(S,L,j,U,W,q,K):me(w,S,K)},ce=(w,S,L,j,U,W,q)=>{const V=w.component=Aw(w,j,U);if(Pr(w)&&(V.ctx.renderer=ee),kw(V),V.asyncDep){if(U&&U.registerDep(V,Q),!w.el){const K=V.subTree=xe(rt);B(null,K,S,L)}}else Q(V,w,S,L,U,W,q)},me=(w,S,L)=>{const j=S.component=w.component;if(DE(w,S,L))if(j.asyncDep&&!j.asyncResolved){oe(j,S,L);return}else j.next=S,kE(j.update),j.effect.dirty=!0,j.update();else S.el=w.el,j.vnode=S},Q=(w,S,L,j,U,W,q)=>{const V=()=>{if(w.isMounted){let{next:X,bu:se,u:ne,parent:te,vnode:ie}=w;{const Rt=Yg(w);if(Rt){X&&(X.el=ie.el,oe(w,X,q)),Rt.asyncDep.then(()=>{w.isUnmounted||V()});return}}let ge=X,Ce;cs(w,!1),X?(X.el=ie.el,oe(w,X,q)):X=ie,se&&Xi(se),(Ce=X.props&&X.props.onVnodeBeforeUpdate)&&dt(Ce,te,X,ie),cs(w,!0);const He=rl(w),yt=w.subTree;w.subTree=He,O(yt,He,d(yt.el),H(yt),w,U,W),X.el=He.el,ge===null&&iu(w,He.el),ne&&Qe(ne,U),(Ce=X.props&&X.props.onVnodeUpdated)&&Qe(()=>dt(Ce,te,X,ie),U)}else{let X;const{el:se,props:ne}=S,{bm:te,m:ie,parent:ge}=w,Ce=ws(S);if(cs(w,!1),te&&Xi(te),!Ce&&(X=ne&&ne.onVnodeBeforeMount)&&dt(X,ge,S),cs(w,!0),se&&be){const He=()=>{w.subTree=rl(w),be(se,w.subTree,w,U,null)};Ce?S.type.__asyncLoader().then(()=>!w.isUnmounted&&He()):He()}else{const He=w.subTree=rl(w);O(null,He,L,j,w,U,W),S.el=He.el}if(ie&&Qe(ie,U),!Ce&&(X=ne&&ne.onVnodeMounted)){const He=S;Qe(()=>dt(X,ge,He),U)}(S.shapeFlag&256||ge&&ws(ge.vnode)&&ge.vnode.shapeFlag&256)&&w.a&&Qe(w.a,U),w.isMounted=!0,S=L=j=null}},K=w.effect=new zc(V,Lt,()=>va($),w.scope),$=w.update=()=>{K.dirty&&K.run()};$.id=w.uid,cs(w,!0),$()},oe=(w,S,L)=>{S.component=w;const j=w.vnode.props;w.vnode=S,w.next=null,pw(w,S.props,j,L),mw(w,S.children,L),ts(),af(w),ns()},Z=(w,S,L,j,U,W,q,V,K=!1)=>{const $=w&&w.children,X=w?w.shapeFlag:0,se=S.children,{patchFlag:ne,shapeFlag:te}=S;if(ne>0){if(ne&128){Ut($,se,L,j,U,W,q,V,K);return}else if(ne&256){lt($,se,L,j,U,W,q,V,K);return}}te&8?(X&16&&Ge($,U,W),se!==$&&f(L,se)):X&16?te&16?Ut($,se,L,j,U,W,q,V,K):Ge($,U,W,!0):(X&8&&f(L,""),te&16&&_(se,L,j,U,W,q,V,K))},lt=(w,S,L,j,U,W,q,V,K)=>{w=w||Gs,S=S||Gs;const $=w.length,X=S.length,se=Math.min($,X);let ne;for(ne=0;ne<se;ne++){const te=S[ne]=K?jn(S[ne]):Nt(S[ne]);O(w[ne],te,L,null,U,W,q,V,K)}$>X?Ge(w,U,W,!0,!1,se):_(S,L,j,U,W,q,V,K,se)},Ut=(w,S,L,j,U,W,q,V,K)=>{let $=0;const X=S.length;let se=w.length-1,ne=X-1;for(;$<=se&&$<=ne;){const te=w[$],ie=S[$]=K?jn(S[$]):Nt(S[$]);if(Bt(te,ie))O(te,ie,L,null,U,W,q,V,K);else break;$++}for(;$<=se&&$<=ne;){const te=w[se],ie=S[ne]=K?jn(S[ne]):Nt(S[ne]);if(Bt(te,ie))O(te,ie,L,null,U,W,q,V,K);else break;se--,ne--}if($>se){if($<=ne){const te=ne+1,ie=te<X?S[te].el:j;for(;$<=ne;)O(null,S[$]=K?jn(S[$]):Nt(S[$]),L,ie,U,W,q,V,K),$++}}else if($>ne)for(;$<=se;)Me(w[$],U,W,!0),$++;else{const te=$,ie=$,ge=new Map;for($=ie;$<=ne;$++){const ct=S[$]=K?jn(S[$]):Nt(S[$]);ct.key!=null&&ge.set(ct.key,$)}let Ce,He=0;const yt=ne-ie+1;let Rt=!1,Ri=0;const An=new Array(yt);for($=0;$<yt;$++)An[$]=0;for($=te;$<=se;$++){const ct=w[$];if(He>=yt){Me(ct,U,W,!0);continue}let At;if(ct.key!=null)At=ge.get(ct.key);else for(Ce=ie;Ce<=ne;Ce++)if(An[Ce-ie]===0&&Bt(ct,S[Ce])){At=Ce;break}At===void 0?Me(ct,U,W,!0):(An[At-ie]=$+1,At>=Ri?Ri=At:Rt=!0,O(ct,S[At],L,null,U,W,q,V,K),He++)}const Ms=Rt?bw(An):Gs;for(Ce=Ms.length-1,$=yt-1;$>=0;$--){const ct=ie+$,At=S[ct],Ds=ct+1<X?S[ct+1].el:j;An[$]===0?O(null,At,L,Ds,U,W,q,V,K):Rt&&(Ce<0||$!==Ms[Ce]?St(At,L,Ds,2):Ce--)}}},St=(w,S,L,j,U=null)=>{const{el:W,type:q,transition:V,children:K,shapeFlag:$}=w;if($&6){St(w.component.subTree,S,L,j);return}if($&128){w.suspense.move(S,L,j);return}if($&64){q.move(w,S,L,ee);return}if(q===gt){s(W,S,L);for(let se=0;se<K.length;se++)St(K[se],S,L,j);s(w.anchor,S,L);return}if(q===er){A(w,S,L);return}if(j!==2&&$&1&&V)if(j===0)V.beforeEnter(W),s(W,S,L),Qe(()=>V.enter(W),U);else{const{leave:se,delayLeave:ne,afterLeave:te}=V,ie=()=>s(W,S,L),ge=()=>{se(W,()=>{ie(),te&&te()})};ne?ne(W,ie,ge):ge()}else s(W,S,L)},Me=(w,S,L,j=!1,U=!1)=>{const{type:W,props:q,ref:V,children:K,dynamicChildren:$,shapeFlag:X,patchFlag:se,dirs:ne}=w;if(V!=null&&Fo(V,null,L,w,!0),X&256){S.ctx.deactivate(w);return}const te=X&1&&ne,ie=!ws(w);let ge;if(ie&&(ge=q&&q.onVnodeBeforeUnmount)&&dt(ge,S,w),X&6)Jt(w.component,L,j);else{if(X&128){w.suspense.unmount(L,j);return}te&&Qt(w,null,S,"beforeUnmount"),X&64?w.type.remove(w,S,L,U,ee,j):$&&(W!==gt||se>0&&se&64)?Ge($,S,L,!1,!0):(W===gt&&se&384||!U&&X&16)&&Ge(K,S,L),j&&De(w)}(ie&&(ge=q&&q.onVnodeUnmounted)||te)&&Qe(()=>{ge&&dt(ge,S,w),te&&Qt(w,null,S,"unmounted")},L)},De=w=>{const{type:S,el:L,anchor:j,transition:U}=w;if(S===gt){Rn(L,j);return}if(S===er){P(w);return}const W=()=>{i(L),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(w.shapeFlag&1&&U&&!U.persisted){const{leave:q,delayLeave:V}=U,K=()=>q(L,W);V?V(w.el,W,K):K()}else W()},Rn=(w,S)=>{let L;for(;w!==S;)L=g(w),i(w),w=L;i(S)},Jt=(w,S,L)=>{const{bum:j,scope:U,update:W,subTree:q,um:V}=w;j&&Xi(j),U.stop(),W&&(W.active=!1,Me(q,w,S,L)),V&&Qe(V,S),Qe(()=>{w.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},Ge=(w,S,L,j=!1,U=!1,W=0)=>{for(let q=W;q<w.length;q++)Me(w[q],S,L,j,U)},H=w=>w.shapeFlag&6?H(w.component.subTree):w.shapeFlag&128?w.suspense.next():g(w.anchor||w.el);let J=!1;const Y=(w,S,L)=>{w==null?S._vnode&&Me(S._vnode,null,null,!0):O(S._vnode||null,w,S,null,null,null,L),J||(J=!0,af(),Lo(),J=!1),S._vnode=w},ee={p:O,um:Me,m:St,r:De,mt:ce,mc:_,pc:Z,pbc:E,n:H,o:t};let ue,be;return e&&([ue,be]=e(ee)),{render:Y,hydrate:ue,createApp:fw(Y,ue)}}function hl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function zg(t,e,n=!1){const s=t.children,i=e.children;if(re(s)&&re(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=jn(i[r]),l.el=o.el),n||zg(o,l)),l.type===oi&&(l.el=o.el)}}function bw(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Yg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yg(e)}const Iw=t=>t.__isTeleport,gt=Symbol.for("v-fgt"),oi=Symbol.for("v-txt"),rt=Symbol.for("v-cmt"),er=Symbol.for("v-stc"),tr=[];let Mt=null;function en(t=!1){tr.push(Mt=t?null:[])}function Xg(){tr.pop(),Mt=tr[tr.length-1]||null}let ai=1;function wf(t){ai+=t}function Jg(t){return t.dynamicChildren=ai>0?Mt||Gs:null,Xg(),ai>0&&Mt&&Mt.push(t),t}function p1(t,e,n,s,i,r){return Jg(Zg(t,e,n,s,i,r,!0))}function pn(t,e,n,s,i){return Jg(xe(t,e,n,s,i,!0))}function li(t){return t?t.__v_isVNode===!0:!1}function Bt(t,e){return t.type===e.type&&t.key===e.key}const Qg=({key:t})=>t??null,Eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||at(t)||ae(t)?{i:Be,r:t,k:e,f:!!n}:t:null);function Zg(t,e=null,n=null,s=0,i=null,r=t===gt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qg(e),ref:e&&Eo(e),scopeId:wa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Be};return l?(fu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),ai>0&&!o&&Mt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Mt.push(c),c}const xe=Cw;function Cw(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===wg)&&(t=rt),li(t)){const l=Tn(t,e,!0);return n&&fu(l,n),ai>0&&!r&&Mt&&(l.shapeFlag&6?Mt[Mt.indexOf(t)]=l:Mt.push(l)),l.patchFlag|=-2,l}if(Ow(t)&&(t=t.__vccOpts),e){e=e_(e);let{class:l,style:c}=e;l&&!Fe(l)&&(e.class=ma(l)),Re(c)&&(hg(c)&&!re(c)&&(c=$e({},c)),e.style=_a(c))}const o=Fe(t)?1:bg(t)?128:Iw(t)?64:Re(t)?4:ae(t)?2:0;return Zg(t,e,n,s,i,o,r,!0)}function e_(t){return t?hg(t)||jg(t)?$e({},t):t:null}function Tn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,u=e?n_(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Qg(u),ref:e&&e.ref?n&&r?re(r)?r.concat(Eo(e)):[r,Eo(e)]:Eo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tn(t.ssContent),ssFallback:t.ssFallback&&Tn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&(f.transition=c.clone(f)),f}function t_(t=" ",e=0){return xe(oi,null,t,e)}function g1(t,e){const n=xe(er,null,t);return n.staticCount=e,n}function _1(t="",e=!1){return e?(en(),pn(rt,null,t)):xe(rt,null,t)}function Nt(t){return t==null||typeof t=="boolean"?xe(rt):re(t)?xe(gt,null,t.slice()):typeof t=="object"?jn(t):xe(oi,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tn(t)}function fu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),fu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!jg(e)?e._ctx=Be:i===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),s&64?(n=16,e=[t_(e)]):n=8);t.children=e,t.shapeFlag|=n}function n_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ma([e.class,s.class]));else if(i==="style")e.style=_a([e.style,s.style]);else if(Rr(i)){const r=e[i],o=s[i];o&&r!==o&&!(re(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function dt(t,e,n,s=null){xt(t,e,7,[n,s])}const Sw=xg();let Rw=0;function Aw(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Sw,r={uid:Rw++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$g(s,i),emitsOptions:vg(s,i),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:s.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=NE.bind(null,r),t.ce&&t.ce(r),r}let Ve=null;const yi=()=>Ve||Be;let Uo,Yl;{const t=Yp(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Uo=e("__VUE_INSTANCE_SETTERS__",n=>Ve=n),Yl=e("__VUE_SSR_SETTERS__",n=>Nr=n)}const Is=t=>{const e=Ve;return Uo(t),t.scope.on(),()=>{t.scope.off(),Uo(e)}},Xl=()=>{Ve&&Ve.scope.off(),Uo(null)};function s_(t){return t.vnode.shapeFlag&4}let Nr=!1;function kw(t,e=!1){e&&Yl(e);const{props:n,children:s}=t.vnode,i=s_(t);dw(t,n,i,e),_w(t,s);const r=i?Pw(t,e):void 0;return e&&Yl(!1),r}function Pw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,rw);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?r_(t):null,r=Is(t);ts();const o=Yn(s,t,0,[t.props,i]);if(ns(),r(),Kc(o)){if(o.then(Xl,Xl),e)return o.then(l=>{Jl(t,l,e)}).catch(l=>{_i(l,t,0)});t.asyncDep=o}else Jl(t,o,e)}else i_(t,e)}function Jl(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=pg(e)),i_(t,n)}let Tf;function i_(t,e,n){const s=t.type;if(!t.render){if(!e&&Tf&&!s.render){const i=s.template||uu(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,u=$e($e({isCustomElement:r,delimiters:l},o),c);s.render=Tf(i,u)}}t.render=s.render||Lt}{const i=Is(t);ts();try{ow(t)}finally{ns(),i()}}}const Nw={get(t,e){return mt(t,"get",""),t[e]}};function r_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Nw),slots:t.slots,emit:t.emit,expose:e}}function ba(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(pg(Oo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zi)return Zi[n](t)},has(e,n){return n in e||n in Zi}}))}function Ql(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function Ow(t){return ae(t)&&"__vccOpts"in t}const Ot=(t,e)=>EE(t,e,Nr);function Tt(t,e,n){const s=arguments.length;return s===2?Re(e)&&!re(e)?li(e)?xe(t,null,[e]):xe(t,e):xe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&li(n)&&(n=[n]),xe(t,e,n))}const o_="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Lw="http://www.w3.org/2000/svg",Mw="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,bf=Bn&&Bn.createElement("template"),Dw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Bn.createElementNS(Lw,t):e==="mathml"?Bn.createElementNS(Mw,t):Bn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{bf.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const l=bf.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Mn="transition",ji="animation",mr=Symbol("_vtc"),Ia=(t,{slots:e})=>Tt(zE,xw(t),e);Ia.displayName="Transition";const a_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ia.props=$e({},Sg,a_);const us=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},If=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function xw(t){const e={};for(const I in t)I in a_||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,C=Fw(i),O=C&&C[0],F=C&&C[1],{onBeforeEnter:B,onEnter:k,onEnterCancelled:A,onLeave:P,onLeaveCancelled:D,onBeforeAppear:M=B,onAppear:b=k,onAppearCancelled:_=A}=e,y=(I,v,ce)=>{hs(I,v?f:l),hs(I,v?u:o),ce&&ce()},E=(I,v)=>{I._isLeaving=!1,hs(I,d),hs(I,T),hs(I,g),v&&v()},R=I=>(v,ce)=>{const me=I?b:k,Q=()=>y(v,I,ce);us(me,[v,Q]),Cf(()=>{hs(v,I?c:r),Dn(v,I?f:l),If(me)||Sf(v,s,O,Q)})};return $e(e,{onBeforeEnter(I){us(B,[I]),Dn(I,r),Dn(I,o)},onBeforeAppear(I){us(M,[I]),Dn(I,c),Dn(I,u)},onEnter:R(!1),onAppear:R(!0),onLeave(I,v){I._isLeaving=!0;const ce=()=>E(I,v);Dn(I,d),Dn(I,g),jw(),Cf(()=>{I._isLeaving&&(hs(I,d),Dn(I,T),If(P)||Sf(I,s,F,ce))}),us(P,[I,ce])},onEnterCancelled(I){y(I,!1),us(A,[I])},onAppearCancelled(I){y(I,!0),us(_,[I])},onLeaveCancelled(I){E(I),us(D,[I])}})}function Fw(t){if(t==null)return null;if(Re(t))return[fl(t.enter),fl(t.leave)];{const e=fl(t);return[e,e]}}function fl(t){return zp(t)}function Dn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[mr]||(t[mr]=new Set)).add(e)}function hs(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[mr];n&&(n.delete(e),n.size||(t[mr]=void 0))}function Cf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Uw=0;function Sf(t,e,n,s){const i=t._endId=++Uw,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:l,propCount:c}=Hw(t,e);if(!o)return s();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,g),r()},g=T=>{T.target===t&&++f>=c&&d()};setTimeout(()=>{f<c&&d()},l+1),t.addEventListener(u,g)}function Hw(t,e){const n=window.getComputedStyle(t),s=C=>(n[C]||"").split(", "),i=s(`${Mn}Delay`),r=s(`${Mn}Duration`),o=Rf(i,r),l=s(`${ji}Delay`),c=s(`${ji}Duration`),u=Rf(l,c);let f=null,d=0,g=0;e===Mn?o>0&&(f=Mn,d=o,g=r.length):e===ji?u>0&&(f=ji,d=u,g=c.length):(d=Math.max(o,u),f=d>0?o>u?Mn:ji:null,g=f?f===Mn?r.length:c.length:0);const T=f===Mn&&/\b(transform|all)(,|$)/.test(s(`${Mn}Property`).toString());return{type:f,timeout:d,propCount:g,hasTransform:T}}function Rf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Af(n)+Af(t[s])))}function Af(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function jw(){return document.body.offsetHeight}function Bw(t,e,n){const s=t[mr];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ho=Symbol("_vod"),l_=Symbol("_vsh"),m1={beforeMount(t,{value:e},{transition:n}){t[Ho]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Bi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Bi(t,!0),s.enter(t)):s.leave(t,()=>{Bi(t,!1)}):Bi(t,e))},beforeUnmount(t,{value:e}){Bi(t,e)}};function Bi(t,e){t.style.display=e?t[Ho]:"none",t[l_]=!e}const $w=Symbol(""),Vw=/(^|;)\s*display\s*:/;function Ww(t,e,n){const s=t.style,i=Fe(n);let r=!1;if(n&&!i){if(e)if(Fe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&wo(s,l,"")}else for(const o in e)n[o]==null&&wo(s,o,"");for(const o in n)o==="display"&&(r=!0),wo(s,o,n[o])}else if(i){if(e!==n){const o=s[$w];o&&(n+=";"+o),s.cssText=n,r=Vw.test(n)}}else e&&t.removeAttribute("style");Ho in t&&(t[Ho]=r?s.display:"",t[l_]&&(s.display="none"))}const kf=/\s*!important$/;function wo(t,e,n){if(re(n))n.forEach(s=>wo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Kw(t,e);kf.test(n)?t.setProperty(gi(s),n.replace(kf,""),"important"):t[s]=n}}const Pf=["Webkit","Moz","ms"],dl={};function Kw(t,e){const n=dl[e];if(n)return n;let s=sn(e);if(s!=="filter"&&s in t)return dl[e]=s;s=ga(s);for(let i=0;i<Pf.length;i++){const r=Pf[i]+s;if(r in t)return dl[e]=r}return e}const Nf="http://www.w3.org/1999/xlink";function Gw(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Nf,e.slice(6,e.length)):t.setAttributeNS(Nf,e,n);else{const r=Jv(e);n==null||r&&!Xp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function qw(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const u=l==="OPTION"?t.getAttribute("value")||"":t.value,f=n??"";(u!==f||!("_value"in t))&&(t.value=f),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Xp(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function zw(t,e,n,s){t.addEventListener(e,n,s)}function Yw(t,e,n,s){t.removeEventListener(e,n,s)}const Of=Symbol("_vei");function Xw(t,e,n,s,i=null){const r=t[Of]||(t[Of]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Jw(e);if(s){const u=r[e]=eT(s,i);zw(t,l,u,c)}else o&&(Yw(t,l,o,c),r[e]=void 0)}}const Lf=/(?:Once|Passive|Capture)$/;function Jw(t){let e;if(Lf.test(t)){e={};let s;for(;s=t.match(Lf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gi(t.slice(2)),e]}let pl=0;const Qw=Promise.resolve(),Zw=()=>pl||(Qw.then(()=>pl=0),pl=Date.now());function eT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;xt(tT(s,n.value),e,5,[s])};return n.value=t,n.attached=Zw(),n}function tT(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Mf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,nT=(t,e,n,s,i,r,o,l,c)=>{const u=i==="svg";e==="class"?Bw(t,s,u):e==="style"?Ww(t,n,s):Rr(e)?Vc(e)||Xw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sT(t,e,s,u))?qw(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Gw(t,e,s,u))};function sT(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mf(e)&&ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Mf(e)&&Fe(n)?!1:e in t}const c_=$e({patchProp:nT},Dw);let nr,Df=!1;function u_(){return nr||(nr=ww(c_))}function iT(){return nr=Df?nr:Tw(c_),Df=!0,nr}const y1=(...t)=>{u_().render(...t)},rT=(...t)=>{const e=u_().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=f_(s);if(!i)return;const r=e._component;!ae(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,h_(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},oT=(...t)=>{const e=iT().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=f_(s);if(i)return n(i,!0,h_(i))},e};function h_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function f_(t){return Fe(t)?document.querySelector(t):t}const aT=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,lT=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,cT=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function uT(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){hT(t);return}return e}function hT(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function jo(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const s=n.toLowerCase();if(s==="true")return!0;if(s==="false")return!1;if(s==="undefined")return;if(s==="null")return null;if(s==="nan")return Number.NaN;if(s==="infinity")return Number.POSITIVE_INFINITY;if(s==="-infinity")return Number.NEGATIVE_INFINITY}if(!cT.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(aT.test(t)||lT.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,uT)}return JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}const fT=/#/g,dT=/&/g,pT=/\//g,gT=/=/g,du=/\+/g,_T=/%5e/gi,mT=/%60/gi,yT=/%7c/gi,vT=/%20/gi;function ET(t){return encodeURI(""+t).replace(yT,"|")}function Zl(t){return ET(typeof t=="string"?t:JSON.stringify(t)).replace(du,"%2B").replace(vT,"+").replace(fT,"%23").replace(dT,"%26").replace(mT,"`").replace(_T,"^").replace(pT,"%2F")}function gl(t){return Zl(t).replace(gT,"%3D")}function Bo(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function wT(t){return Bo(t.replace(du," "))}function TT(t){return Bo(t.replace(du," "))}function bT(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const i=wT(s[1]);if(i==="__proto__"||i==="constructor")continue;const r=TT(s[2]||"");e[i]===void 0?e[i]=r:Array.isArray(e[i])?e[i].push(r):e[i]=[e[i],r]}return e}function IT(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${gl(t)}=${Zl(n)}`).join("&"):`${gl(t)}=${Zl(e)}`:gl(t)}function CT(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>IT(e,t[e])).filter(Boolean).join("&")}const ST=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,RT=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,AT=/^([/\\]\s*){2,}[^/\\]/,kT=/^[\s\0]*(blob|data|javascript|vbscript):$/i,PT=/\/$|\/\?|\/#/,NT=/^\.?\//;function Ns(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?ST.test(t):RT.test(t)||(e.acceptRelative?AT.test(t):!1)}function OT(t){return!!t&&kT.test(t)}function ec(t="",e){return e?PT.test(t):t.endsWith("/")}function pu(t="",e){if(!e)return(ec(t)?t.slice(0,-1):t)||"/";if(!ec(t,!0))return t||"/";let n=t,s="";const i=t.indexOf("#");i>=0&&(n=t.slice(0,i),s=t.slice(i));const[r,...o]=n.split("?");return((r.endsWith("/")?r.slice(0,-1):r)||"/")+(o.length>0?`?${o.join("?")}`:"")+s}function tc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(ec(t,!0))return t||"/";let n=t,s="";const i=t.indexOf("#");if(i>=0&&(n=t.slice(0,i),s=t.slice(i),!n))return s;const[r,...o]=n.split("?");return r+"/"+(o.length>0?`?${o.join("?")}`:"")+s}function LT(t=""){return t.startsWith("/")}function xf(t=""){return LT(t)?t:"/"+t}function MT(t,e){if(p_(e)||Ns(t))return t;const n=pu(e);return t.startsWith(n)?t:gu(n,t)}function Ff(t,e){if(p_(e))return t;const n=pu(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function d_(t,e){const n=Ca(t),s={...bT(n.search),...e};return n.search=CT(s),FT(n)}function p_(t){return!t||t==="/"}function DT(t){return t&&t!=="/"}function gu(t,...e){let n=t||"";for(const s of e.filter(i=>DT(i)))if(n){const i=s.replace(NT,"");n=tc(n)+i}else n=s;return n}function g_(...t){var o,l,c,u;const e=/\/(?!\/)/,n=t.filter(Boolean),s=[];let i=0;for(const f of n)if(!(!f||f==="/")){for(const[d,g]of f.split(e).entries())if(!(!g||g===".")){if(g===".."){if(s.length===1&&Ns(s[0]))continue;s.pop(),i--;continue}if(d===1&&((o=s[s.length-1])!=null&&o.endsWith(":/"))){s[s.length-1]+="/"+g;continue}s.push(g),i++}}let r=s.join("/");return i>=0?(l=n[0])!=null&&l.startsWith("/")&&!r.startsWith("/")?r="/"+r:(c=n[0])!=null&&c.startsWith("./")&&!r.startsWith("./")&&(r="./"+r):r="../".repeat(-1*i)+r,(u=n[n.length-1])!=null&&u.endsWith("/")&&!r.endsWith("/")&&(r+="/"),r}function xT(t,e,n={}){return n.trailingSlash||(t=tc(t),e=tc(e)),n.leadingSlash||(t=xf(t),e=xf(e)),n.encoding||(t=Bo(t),e=Bo(e)),t===e}const __=Symbol.for("ufo:protocolRelative");function Ca(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,g=""]=n;return{protocol:d.toLowerCase(),pathname:g,href:d+g,auth:"",host:"",search:"",hash:""}}if(!Ns(t,{acceptRelative:!0}))return e?Ca(e+t):Uf(t);const[,s="",i,r=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",l=""]=r.match(/([^#/?]*)(.*)?/)||[];s==="file:"&&(l=l.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:f}=Uf(l);return{protocol:s.toLowerCase(),auth:i?i.slice(0,Math.max(0,i.length-1)):"",host:o,pathname:c,search:u,hash:f,[__]:!s}}function Uf(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function FT(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",s=t.hash||"",i=t.auth?t.auth+"@":"",r=t.host||"";return(t.protocol||t[__]?(t.protocol||"")+"//":"")+i+r+e+n+s}class UT extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function HT(t){var c,u,f,d,g;const e=((c=t.error)==null?void 0:c.message)||((u=t.error)==null?void 0:u.toString())||"",n=((f=t.request)==null?void 0:f.method)||((d=t.options)==null?void 0:d.method)||"GET",s=((g=t.request)==null?void 0:g.url)||String(t.request)||"/",i=`[${n}] ${JSON.stringify(s)}`,r=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${i}: ${r}${e?` ${e}`:""}`,l=new UT(o,t.error?{cause:t.error}:void 0);for(const T of["request","options","response"])Object.defineProperty(l,T,{get(){return t[T]}});for(const[T,C]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(l,T,{get(){return t.response&&t.response[C]}});return l}const jT=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Hf(t="GET"){return jT.has(t.toUpperCase())}function BT(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const $T=new Set(["image/svg","application/xml","application/xhtml","application/html"]),VT=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function WT(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return VT.test(e)?"json":$T.has(e)||e.startsWith("text/")?"text":"blob"}function KT(t,e,n=globalThis.Headers){const s={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(s.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(s.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){s.headers=new n((e==null?void 0:e.headers)||{});for(const[i,r]of new n((t==null?void 0:t.headers)||{}))s.headers.set(i,r)}return s}const GT=new Set([408,409,425,429,500,502,503,504]),qT=new Set([101,204,205,304]);function m_(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:s=globalThis.AbortController}=t;async function i(l){const c=l.error&&l.error.name==="AbortError"&&!l.options.timeout||!1;if(l.options.retry!==!1&&!c){let f;typeof l.options.retry=="number"?f=l.options.retry:f=Hf(l.options.method)?0:1;const d=l.response&&l.response.status||500;if(f>0&&(Array.isArray(l.options.retryStatusCodes)?l.options.retryStatusCodes.includes(d):GT.has(d))){const g=l.options.retryDelay||0;return g>0&&await new Promise(T=>setTimeout(T,g)),r(l.request,{...l.options,retry:f-1})}}const u=HT(l);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}const r=async function(c,u={}){var T;const f={request:c,options:KT(u,t.defaults,n),response:void 0,error:void 0};f.options.method=(T=f.options.method)==null?void 0:T.toUpperCase(),f.options.onRequest&&await f.options.onRequest(f),typeof f.request=="string"&&(f.options.baseURL&&(f.request=MT(f.request,f.options.baseURL)),(f.options.query||f.options.params)&&(f.request=d_(f.request,{...f.options.params,...f.options.query}))),f.options.body&&Hf(f.options.method)&&(BT(f.options.body)?(f.options.body=typeof f.options.body=="string"?f.options.body:JSON.stringify(f.options.body),f.options.headers=new n(f.options.headers||{}),f.options.headers.has("content-type")||f.options.headers.set("content-type","application/json"),f.options.headers.has("accept")||f.options.headers.set("accept","application/json")):("pipeTo"in f.options.body&&typeof f.options.body.pipeTo=="function"||typeof f.options.body.pipe=="function")&&("duplex"in f.options||(f.options.duplex="half")));let d;if(!f.options.signal&&f.options.timeout){const C=new s;d=setTimeout(()=>C.abort(),f.options.timeout),f.options.signal=C.signal}try{f.response=await e(f.request,f.options)}catch(C){return f.error=C,f.options.onRequestError&&await f.options.onRequestError(f),await i(f)}finally{d&&clearTimeout(d)}if(f.response.body&&!qT.has(f.response.status)&&f.options.method!=="HEAD"){const C=(f.options.parseResponse?"json":f.options.responseType)||WT(f.response.headers.get("content-type")||"");switch(C){case"json":{const O=await f.response.text(),F=f.options.parseResponse||jo;f.response._data=F(O);break}case"stream":{f.response._data=f.response.body;break}default:f.response._data=await f.response[C]()}}return f.options.onResponse&&await f.options.onResponse(f),!f.options.ignoreResponseError&&f.response.status>=400&&f.response.status<600?(f.options.onResponseError&&await f.options.onResponseError(f),await i(f)):f.response},o=async function(c,u){return(await r(c,u))._data};return o.raw=r,o.native=(...l)=>e(...l),o.create=(l={})=>m_({...t,defaults:{...t.defaults,...l}}),o}const _u=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),zT=_u.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),YT=_u.Headers,XT=_u.AbortController,JT=m_({fetch:zT,Headers:YT,AbortController:XT}),QT=JT,ZT=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},$o=ZT().app,eb=()=>$o.baseURL,tb=()=>$o.buildAssetsDir,mu=(...t)=>g_(y_(),tb(),...t),y_=(...t)=>{const e=$o.cdnURL||$o.baseURL;return t.length?g_(e,...t):e};globalThis.__buildAssetsURL=mu,globalThis.__publicAssetsURL=y_;globalThis.$fetch||(globalThis.$fetch=QT.create({baseURL:eb()}));function nc(t,e={},n){for(const s in t){const i=t[s],r=n?`${n}:${s}`:s;typeof i=="object"&&i!==null?nc(i,e,r):typeof i=="function"&&(e[r]=i)}return e}const nb={run:t=>t()},sb=()=>nb,v_=typeof console.createTask<"u"?console.createTask:sb;function ib(t,e){const n=e.shift(),s=v_(n);return t.reduce((i,r)=>i.then(()=>s.run(()=>r(...e))),Promise.resolve())}function rb(t,e){const n=e.shift(),s=v_(n);return Promise.all(t.map(i=>s.run(()=>i(...e))))}function _l(t,e){for(const n of[...t])n(e)}class ob{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const i=e;let r;for(;this._deprecatedHooks[e];)r=this._deprecatedHooks[e],e=r.to;if(r&&!s.allowDeprecated){let o=r.message;o||(o=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,i=(...r)=>(typeof s=="function"&&s(),s=void 0,i=void 0,n(...r));return s=this.hook(e,i),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];delete this._hooks[e];for(const i of s)this.hook(e,i)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=nc(e),s=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{for(const i of s.splice(0,s.length))i()}}removeHooks(e){const n=nc(e);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(ib,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(rb,e,...n)}callHookWith(e,n,...s){const i=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&_l(this._before,i);const r=e(n in this._hooks?[...this._hooks[n]]:[],s);return r instanceof Promise?r.finally(()=>{this._after&&i&&_l(this._after,i)}):(this._after&&i&&_l(this._after,i),r)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function E_(){return new ob}function ab(t={}){let e,n=!1;const s=o=>{if(e&&e!==o)throw new Error("Context conflict")};let i;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?i=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const r=()=>{if(i&&e===void 0){const o=i.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=r();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>r(),set:(o,l)=>{l||s(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,l)=>{s(o),e=o;try{return i?i.run(o,l):l()}finally{n||(e=void 0)}},async callAsync(o,l){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;sc.add(u);try{const f=i?i.run(o,l):l();return n||(e=void 0),await f}finally{sc.delete(u)}}}}function lb(t={}){const e={};return{get(n,s={}){return e[n]||(e[n]=ab({...t,...s})),e[n],e[n]}}}const Vo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},jf="__unctx__",cb=Vo[jf]||(Vo[jf]=lb()),ub=(t,e={})=>cb.get(t,e),Bf="__unctx_async_handlers__",sc=Vo[Bf]||(Vo[Bf]=new Set);function yr(t){const e=[];for(const i of sc){const r=i();r&&e.push(r)}const n=()=>{for(const i of e)i()};let s=t();return s&&typeof s=="object"&&"catch"in s&&(s=s.catch(i=>{throw n(),i})),[s,n]}const w_=ub("nuxt-app",{asyncContext:!1}),hb="__nuxt_plugin";function fb(t){let e=0;const n={_scope:qc(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.11.2"},get vue(){return n.vueApp.version}},payload:ss({data:{},state:{},once:new Set,_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:i=>n._scope.run(()=>_b(n,i)),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=E_(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,r)=>{const o="$"+i;co(n,o,r),co(n.vueApp.config.globalProperties,o,r)},co(n.vueApp,"$nuxt",n),co(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",r=>{n.callHook("app:chunkError",{error:r.payload})}),window.useNuxtApp=window.useNuxtApp||Ue;const i=n.hook("app:error",(...r)=>{console.error("[nuxt] error caught during app initialization",...r)});n.hook("app:mounted",i)}const s=n.payload.config;return n.provide("config",s),n}async function db(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}}async function pb(t,e){const n=[],s=[],i=[],r=[];let o=0;async function l(c){var f;const u=((f=c.dependsOn)==null?void 0:f.filter(d=>e.some(g=>g._name===d)&&!n.includes(d)))??[];if(u.length>0)s.push([new Set(u),c]);else{const d=db(t,c).then(async()=>{c._name&&(n.push(c._name),await Promise.all(s.map(async([g,T])=>{g.has(c._name)&&(g.delete(c._name),g.size===0&&(o++,await l(T)))})))});c.parallel?i.push(d.catch(g=>r.push(g))):await d}}for(const c of e)await l(c);if(await Promise.all(i),o)for(let c=0;c<o;c++)await Promise.all(i);if(r.length)throw r[0]}function Ct(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[hb]:!0,_name:e})}const gb=Ct;function _b(t,e,n){const s=()=>e();return w_.set(t),t.vueApp.runWithContext(s)}function mb(){var e;let t;return Fg()&&(t=(e=yi())==null?void 0:e.appContext.app.$nuxt),t=t||w_.tryUse(),t||null}function Ue(){const t=mb();if(!t)throw new Error("[nuxt] instance unavailable");return t}function Sa(t){return Ue().$config}function co(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function yb(t,e){return{ctx:{table:t},matchAll:n=>b_(n,t)}}function T_(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([s,i])=>[s,T_(i)])):new Map(Object.entries(t[n]));return e}function vb(t){return yb(T_(t))}function b_(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const s=[];for(const[r,o]of $f(e.wildcard))(t===r||t.startsWith(r+"/"))&&s.push(o);for(const[r,o]of $f(e.dynamic))if(t.startsWith(r+"/")){const l="/"+t.slice(r.length).split("/").splice(2).join("/");s.push(...b_(l,o))}const i=e.static.get(t);return i&&s.push(i),s.filter(Boolean)}function $f(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function ml(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function ic(t,e,n=".",s){if(!ml(e))return ic(t,{},n,s);const i=Object.assign({},e);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const o=t[r];o!=null&&(s&&s(i,r,o,n)||(Array.isArray(o)&&Array.isArray(i[r])?i[r]=[...o,...i[r]]:ml(o)&&ml(i[r])?i[r]=ic(o,i[r],(n?`${n}.`:"")+r.toString(),s):i[r]=o))}return i}function I_(t){return(...e)=>e.reduce((n,s)=>ic(n,s,"",t),{})}const C_=I_(),Eb=I_((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function wb(t,e){try{return e in t}catch{return!1}}var Tb=Object.defineProperty,bb=(t,e,n)=>e in t?Tb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,fs=(t,e,n)=>(bb(t,typeof e!="symbol"?e+"":e,n),n);class rc extends Error{constructor(e,n={}){super(e,n),fs(this,"statusCode",500),fs(this,"fatal",!1),fs(this,"unhandled",!1),fs(this,"statusMessage"),fs(this,"data"),fs(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:ac(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=S_(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}fs(rc,"__h3_error__",!0);function oc(t){if(typeof t=="string")return new rc(t);if(Ib(t))return t;const e=new rc(t.message??t.statusMessage??"",{cause:t.cause||t});if(wb(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=ac(t.statusCode,e.statusCode):t.status&&(e.statusCode=ac(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;S_(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Ib(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Cb=/[^\u0009\u0020-\u007E]/g;function S_(t=""){return t.replace(Cb,"")}function ac(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const R_=Symbol("layout-meta"),Or=Symbol("route"),ln=()=>{var t;return(t=Ue())==null?void 0:t.$router},yu=()=>Fg()?Xe(Or,Ue()._route):Ue()._route;const Sb=()=>{try{if(Ue()._processingMiddleware)return!0}catch{return!1}return!1},v1=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:d_(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){const{target:l="_blank",windowFeatures:c={}}=e.open,u=Object.entries(c).filter(([f,d])=>d!==void 0).map(([f,d])=>`${f.toLowerCase()}=${d}`).join(", ");return open(n,l,u),Promise.resolve()}const s=(e==null?void 0:e.external)||Ns(n,{acceptRelative:!0});if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const l=Ca(n).protocol;if(l&&OT(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=Sb();if(!s&&i)return t;const r=ln(),o=Ue();return s?(o._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?r.replace(t):r.push(t)},A_="__nuxt_error",Ra=()=>SE(Ue().payload,"error"),Vs=t=>{const e=Aa(t);try{const n=Ue(),s=Ra();n.hooks.callHook("app:error",e),s.value=s.value||e}catch{throw e}return e},Rb=async(t={})=>{const e=Ue(),n=Ra();e.callHook("app:error:cleared",t),t.redirect&&await ln().replace(t.redirect),n.value=null},Ab=t=>!!t&&typeof t=="object"&&A_ in t,Aa=t=>{const e=oc(t);return Object.defineProperty(e,A_,{value:!0,configurable:!1,writable:!1}),e},kb=-1,Pb=-2,Nb=-3,Ob=-4,Lb=-5,Mb=-6;function Db(t,e){return xb(JSON.parse(t),e)}function xb(t,e){if(typeof t=="number")return i(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,s=Array(n.length);function i(r,o=!1){if(r===kb)return;if(r===Nb)return NaN;if(r===Ob)return 1/0;if(r===Lb)return-1/0;if(r===Mb)return-0;if(o)throw new Error("Invalid input");if(r in s)return s[r];const l=n[r];if(!l||typeof l!="object")s[r]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const c=l[0],u=e==null?void 0:e[c];if(u)return s[r]=u(i(l[1]));switch(c){case"Date":s[r]=new Date(l[1]);break;case"Set":const f=new Set;s[r]=f;for(let T=1;T<l.length;T+=1)f.add(i(l[T]));break;case"Map":const d=new Map;s[r]=d;for(let T=1;T<l.length;T+=2)d.set(i(l[T]),i(l[T+1]));break;case"RegExp":s[r]=new RegExp(l[1],l[2]);break;case"Object":s[r]=Object(l[1]);break;case"BigInt":s[r]=BigInt(l[1]);break;case"null":const g=Object.create(null);s[r]=g;for(let T=1;T<l.length;T+=2)g[l[T]]=i(l[T+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(l.length);s[r]=c;for(let u=0;u<l.length;u+=1){const f=l[u];f!==Pb&&(c[u]=i(f))}}else{const c={};s[r]=c;for(const u in l){const f=l[u];c[u]=i(f)}}return s[r]}return i(0)}function Fb(t){return Array.isArray(t)?t:[t]}const Ub=["title","titleTemplate","script","style","noscript"],To=["base","meta","link","style","script","noscript"],Hb=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],jb=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],k_=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],Bb=typeof window<"u";function vu(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Vf(t){return t._h||vu(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function P_(t,e){const{props:n,tag:s}=t;if(jb.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const i=["id"];s==="meta"&&i.push("name","property","http-equiv");for(const r of i)if(typeof n[r]<"u"){const o=String(n[r]);return`${s}:${r}:${o}`}return!1}function Wf(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function $b(t,e,n){const s={tag:t,props:await N_(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return k_.forEach(i=>{const r=typeof s.props[i]<"u"?s.props[i]:n[i];typeof r<"u"&&((!["innerHTML","textContent","children"].includes(i)||Ub.includes(s.tag))&&(s[i==="children"?"innerHTML":i]=r),delete s.props[i])}),s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(i=>({...s,props:{...s.props,content:i}})):s}function Vb(t,e){var s;const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,i])=>i).map(([i,r])=>t==="style"?`${i}:${r}`:i)),(s=Array.isArray(e)?e.join(n):e)==null?void 0:s.split(n).filter(i=>i.trim()).filter(Boolean).join(n)}async function N_(t,e){for(const n of Object.keys(t)){if(["class","style"].includes(n)){t[n]=Vb(n,t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!k_.includes(n)){const s=String(t[n]),i=n.startsWith("data-");s==="true"||s===""?t[n]=i?"true":!0:t[n]||(i&&s==="false"?t[n]="false":delete t[n])}}return t}const Wb=10;async function Kb(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,s])=>typeof s<"u"&&Hb.includes(n)).forEach(([n,s])=>{const i=Fb(s);e.push(...i.map(r=>$b(n,r,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,s)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<Wb)+s,n))}const Kf={base:-10,title:10},Gf={critical:-80,high:-10,low:20};function Wo(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in Kf&&(e=Kf[t.tag]),typeof n=="string"&&n in Gf?e+Gf[n]:e)}const Gb=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],qf=["onload","onerror","onabort","onprogress","onloadstart"],xn="%separator";function bo(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function s(o){let l;return["s","pageTitle"].includes(o)?l=e.pageTitle:o.includes(".")?l=o.split(".").reduce((c,u)=>c&&c[u]||void 0,e):l=e[o],typeof l<"u"?(l||"").replace(/"/g,'\\"'):!1}let i=t;try{i=decodeURI(t)}catch{}return(i.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const l=s(o.slice(1));typeof l=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(c,u)=>`${l}${u}`).trim())}),t.includes(xn)&&(t.endsWith(xn)&&(t=t.slice(0,-xn.length).trim()),t.startsWith(xn)&&(t=t.slice(xn.length).trim()),t=t.replace(new RegExp(`\\${xn}\\s*\\${xn}`,"g"),xn),t=bo(t,{separator:n},n)),t}async function O_(t,e={}){var f;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const s={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const i=(await t.resolveTags()).map(d=>({tag:d,id:To.includes(d.tag)?Vf(d):d.tag,shouldRender:!0}));let r=t._dom;if(!r){r={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const d of["body","head"]){const g=(f=n[d])==null?void 0:f.children,T=[];for(const C of[...g].filter(O=>To.includes(O.tagName.toLowerCase()))){const O={tag:C.tagName.toLowerCase(),props:await N_(C.getAttributeNames().reduce((k,A)=>({...k,[A]:C.getAttribute(A)}),{})),innerHTML:C.innerHTML};let F=1,B=P_(O);for(;B&&T.find(k=>k._d===B);)B=`${B}:${F++}`;O._d=B||void 0,T.push(O),r.elMap[C.getAttribute("data-hid")||Vf(O)]=C}}}r.pendingSideEffects={...r.sideEffects||{}},r.sideEffects={};function o(d,g,T){const C=`${d}:${g}`;r.sideEffects[C]=T,delete r.pendingSideEffects[C]}function l({id:d,$el:g,tag:T}){const C=T.tag.endsWith("Attrs");r.elMap[d]=g,C||(["textContent","innerHTML"].forEach(O=>{T[O]&&T[O]!==g[O]&&(g[O]=T[O])}),o(d,"el",()=>{var O;(O=r.elMap[d])==null||O.remove(),delete r.elMap[d]}));for(const[O,F]of Object.entries(T._eventHandlers||{}))g.getAttribute(`data-${O}`)!==""&&((T.tag==="bodyAttrs"?n.defaultView:g).addEventListener(O.replace("on",""),F.bind(g)),g.setAttribute(`data-${O}`,""));Object.entries(T.props).forEach(([O,F])=>{const B=`attr:${O}`;if(O==="class")for(const k of(F||"").split(" ").filter(Boolean))C&&o(d,`${B}:${k}`,()=>g.classList.remove(k)),!g.classList.contains(k)&&g.classList.add(k);else if(O==="style")for(const k of(F||"").split(";").filter(Boolean)){const[A,...P]=k.split(":").map(D=>D.trim());o(d,`${B}:${k}:${A}`,()=>{g.style.removeProperty(A)}),g.style.setProperty(A,P.join(":"))}else g.getAttribute(O)!==F&&g.setAttribute(O,F===!0?"":String(F)),C&&o(d,B,()=>g.removeAttribute(O))})}const c=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of i){const{tag:g,shouldRender:T,id:C}=d;if(T){if(g.tag==="title"){n.title=g.textContent;continue}d.$el=d.$el||r.elMap[C],d.$el?l(d):To.includes(g.tag)&&c.push(d)}}for(const d of c){const g=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),l(d),u[g]=u[g]||n.createDocumentFragment(),u[g].appendChild(d.$el)}for(const d of i)await t.hooks.callHook("dom:renderTag",d,n,o);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose),Object.values(r.pendingSideEffects).forEach(d=>d()),t._dom=r,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:i})}async function qb(t,e={}){const n=e.delayFn||(s=>setTimeout(s,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(s=>n(async()=>{await O_(t,e),delete t._domUpdatePromise,s()}))}function zb(t){return e=>{var s,i;const n=((i=(s=e.resolvedOptions.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(r){qb(r,t)}}}}}const Yb=["templateParams","htmlAttrs","bodyAttrs"],Xb={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(s=>{t.props[s]&&(t.key=t.props[s],delete t.props[s])});const n=P_(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(s=>{const i=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,r=e[i];if(r){let l=s==null?void 0:s.tagDuplicateStrategy;if(!l&&Yb.includes(s.tag)&&(l="merge"),l==="merge"){const c=r.props;["class","style"].forEach(u=>{c[u]&&(s.props[u]?(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),s.props[u]=`${c[u]} ${s.props[u]}`):s.props[u]=c[u])}),e[i].props={...c,...s.props};return}else if(s._e===r._e){r._duped=r._duped||[],s._d=`${r._d}:${r._duped.length+1}`,r._duped.push(s);return}else if(Wo(s)>Wo(r))return}const o=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(To.includes(s.tag)&&o===0){delete e[i];return}e[i]=s});const n=[];Object.values(e).forEach(s=>{const i=s._duped;delete s._duped,n.push(s),i&&n.push(...i)}),t.tags=n,t.tags=t.tags.filter(s=>!(s.tag==="meta"&&(s.props.name||s.props.property)&&!s.props.content))}}},Jb={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Qb=["script","link","bodyAttrs"],Zb=t=>({hooks:{"tags:resolve":function(e){for(const n of e.tags.filter(s=>Qb.includes(s.tag)))Object.entries(n.props).forEach(([s,i])=>{s.startsWith("on")&&typeof i=="function"&&(t.ssr&&qf.includes(s)?n.props[s]=`this.dataset.${s}fired = true`:delete n.props[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}),t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||vu(n.props.src||n.props.href))},"dom:renderTag":function({$el:e,tag:n}){var s,i;for(const r of Object.keys((e==null?void 0:e.dataset)||{}).filter(o=>qf.some(l=>`${l}fired`===o))){const o=r.replace("fired","");(i=(s=n._eventHandlers)==null?void 0:s[o])==null||i.call(e,new Event(o.replace("on","")))}}}}),e0=["link","style","script","noscript"],t0={hooks:{"tag:normalise":({tag:t})=>{t.key&&e0.includes(t.tag)&&(t.props["data-hid"]=t._h=vu(t.key))}}},n0={hooks:{"tags:resolve":t=>{const e=n=>{var s;return(s=t.tags.find(i=>i._d===n))==null?void 0:s._p};for(const{prefix:n,offset:s}of Gb)for(const i of t.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(n))){const r=e(i.tagPriority.replace(n,""));typeof r<"u"&&(i._p=r+s)}t.tags.sort((n,s)=>n._p-s._p).sort((n,s)=>Wo(n)-Wo(s))}}},s0={meta:"content",link:"href",htmlAttrs:"lang"},i0=t=>({hooks:{"tags:resolve":e=>{var l;const{tags:n}=e,s=(l=n.find(c=>c.tag==="title"))==null?void 0:l.textContent,i=n.findIndex(c=>c.tag==="templateParams"),r=i!==-1?n[i].props:{},o=r.separator||"|";delete r.separator,r.pageTitle=bo(r.pageTitle||s||"",r,o);for(const c of n.filter(u=>u.processTemplateParams!==!1)){const u=s0[c.tag];u&&typeof c.props[u]=="string"?c.props[u]=bo(c.props[u],r,o):(c.processTemplateParams===!0||["titleTemplate","title"].includes(c.tag))&&["innerHTML","textContent"].forEach(f=>{typeof c[f]=="string"&&(c[f]=bo(c[f],r,o))})}t._templateParams=r,t._separator=o,e.tags=n.filter(c=>c.tag!=="templateParams")}}}),r0={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(i=>i.tag==="titleTemplate");const s=e.findIndex(i=>i.tag==="title");if(s!==-1&&n!==-1){const i=Wf(e[n].textContent,e[s].textContent);i!==null?e[s].textContent=i||e[s].textContent:delete e[s]}else if(n!==-1){const i=Wf(e[n].textContent);i!==null&&(e[n].textContent=i,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}},o0={hooks:{"tags:afterResolve":function(t){for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let L_;function a0(t={}){const e=l0(t);return e.use(zb()),L_=e}function zf(t,e){return!t||t==="server"&&e||t==="client"&&!e}function l0(t={}){const e=E_();e.addHooks(t.hooks||{}),t.document=t.document||(Bb?document:void 0);const n=!t.document,s=()=>{l.dirty=!0,e.callHook("entries:updated",l)};let i=0,r=[];const o=[],l={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return r},use(c){const u=typeof c=="function"?c(l):c;(!u.key||!o.some(f=>f.key===u.key))&&(o.push(u),zf(u.mode,n)&&e.addHooks(u.hooks||{}))},push(c,u){u==null||delete u.head;const f={_i:i++,input:c,...u};return zf(f.mode,n)&&(r.push(f),s()),{dispose(){r=r.filter(d=>d._i!==f._i),e.callHook("entries:updated",l),s()},patch(d){r=r.map(g=>(g._i===f._i&&(g.input=f.input=d),g)),s()}}},async resolveTags(){const c={tags:[],entries:[...r]};await e.callHook("entries:resolve",c);for(const u of c.entries){const f=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(f):f),u.resolvedInput)for(const d of await Kb(u)){const g={tag:d,entry:u,resolvedOptions:l.resolvedOptions};await e.callHook("tag:normalise",g),c.tags.push(g.tag)}}return await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c),c.tags},ssr:n};return[Xb,Jb,Zb,t0,n0,i0,r0,o0,...(t==null?void 0:t.plugins)||[]].forEach(c=>l.use(c)),l.hooks.callHook("init",l),l}function c0(){return L_}const u0=o_.startsWith("3");function h0(t){return typeof t=="function"?t():Pe(t)}function lc(t,e=""){if(t instanceof Promise)return t;const n=h0(t);return!t||!n?n:Array.isArray(n)?n.map(s=>lc(s,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,i])=>s==="titleTemplate"||s.startsWith("on")?[s,Pe(i)]:[s,lc(i,s)])):n}const f0={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=lc(e.input)}}},M_="usehead";function d0(t){return{install(n){u0&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(M_,t))}}.install}function p0(t={}){t.domDelayFn=t.domDelayFn||(n=>mi(()=>setTimeout(()=>n(),0)));const e=a0(t);return e.use(f0),e.install=d0(e),e}const cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},uc="__unhead_injection_handler__";function g0(t){cc[uc]=t}function E1(){if(uc in cc)return cc[uc]();const t=Xe(M_);return t||c0()}const _0={nuxt:{buildId:"a60f1d6f-3360-44fd-aefd-de36bfbd722c"}},m0=Eb(_0);function D_(){const t=Ue();return t._appConfig||(t._appConfig=ss(m0)),t._appConfig}const y0=!1,hc=!1,v0=!1,w1={componentName:"NuxtLink"},E0="#__nuxt";let Io,x_;function w0(){var e;const t=(e=D_().nuxt)==null?void 0:e.buildId;return Io=$fetch(mu(`builds/meta/${t}.json`)),Io.then(n=>{x_=vb(n.matcher)}),Io}function ka(){return Io||w0()}async function Eu(t){return await ka(),C_({},...x_.matchAll(t).reverse())}function Yf(t,e={}){const n=b0(t,e),s=Ue(),i=s._payloadCache=s._payloadCache||{};return n in i||(i[n]=I0(t).then(r=>r?F_(n).then(o=>o||(delete i[n],null)):(i[n]=null,null))),i[n]}const T0="_payload.json";function b0(t,e={}){var i;const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Ns(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const s=e.hash||(e.fresh?Date.now():(i=D_().nuxt)==null?void 0:i.buildId);return gu(Sa().app.baseURL,n.pathname,T0+(s?`?${s}`:""))}async function F_(t){const e=fetch(t).then(n=>n.text().then(U_));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function I0(t=yu().path){if(t=pu(t),(await ka()).prerendered.includes(t))return!0;const n=await Eu(t);return!!n.prerender&&!n.redirect}let uo=null;async function C0(){if(uo)return uo;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await U_(t.textContent||""),n=t.dataset.src?await F_(t.dataset.src):void 0;return uo={...e,...n,...window.__NUXT__},uo}async function U_(t){return await Db(t,Ue()._payloadRevivers)}function Co(t,e){Ue()._payloadRevivers[t]=e}var Xf={};/**
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
 */const H_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const z=function(t,e){if(!t)throw vi(e)},vi=function(t){return new Error("Firebase Database ("+H_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const j_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},S0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=r>>2,d=(r&3)<<4|l>>4;let g=(l&15)<<2|u>>6,T=u&63;c||(T=64,o||(g=64)),s.push(n[f],n[d],n[g],n[T])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(j_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):S0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||d==null)throw new R0;const g=r<<2|l>>4;if(s.push(g),u!==64){const T=l<<4&240|u>>2;if(s.push(T),d!==64){const C=u<<6&192|d;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class R0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B_=function(t){const e=j_(t);return Pa.encodeByteArray(e,!0)},$_=function(t){return B_(t).replace(/\./g,"")},Ko=function(t){try{return Pa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function A0(t){return V_(void 0,t)}function V_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!k0(n)||(t[n]=V_(t[n],e[n]));return t}function k0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function P0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const N0=()=>P0().__FIREBASE_DEFAULTS__,O0=()=>{if(typeof process>"u"||typeof Xf>"u")return;const t=Xf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ko(t[1]);return e&&JSON.parse(e)},W_=()=>{try{return N0()||O0()||L0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},K_=()=>{var t;return(t=W_())===null||t===void 0?void 0:t.config},M0=t=>{var e;return(e=W_())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function D0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function G_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function x0(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function q_(){return H_.NODE_ADMIN===!0}function z_(){try{return typeof indexedDB=="object"}catch{return!1}}function F0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const U0="FirebaseError";class cn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=U0,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?H0(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cn(i,l,s)}}function H0(t,e){return t.replace(j0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const j0=/\{\$([^}]+)}/g;/**
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
 */function Er(t){return JSON.parse(t)}function Ze(t){return JSON.stringify(t)}/**
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
 */const Y_=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Er(Ko(r[0])||""),n=Er(Ko(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},B0=function(t){const e=Y_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$0=function(t){const e=Y_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ci(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Go(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function qo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Jf(r)&&Jf(o)){if(!qo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Jf(t){return t!==null&&typeof t=="object"}/**
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
 */function wi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class V0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const g=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,f;for(let d=0;d<80;d++){d<40?d<20?(u=l^r&(o^l),f=1518500249):(u=r^o^l,f=1859775393):d<60?(u=r&o|l&(r|o),f=2400959708):(u=r^o^l,f=3395469782);const g=(i<<5|i>>>27)+u+c+f+s[d]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function W0(t,e){const n=new K0(t,e);return n.subscribe.bind(n)}class K0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");G0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=yl),i.error===void 0&&(i.error=yl),i.complete===void 0&&(i.complete=yl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yl(){}function q0(t,e){return`${t} failed: ${e} argument `}/**
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
 */const z0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,z(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Na=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ti(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ds="[DEFAULT]";/**
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
 */class Y0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new vr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(J0(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:X0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function X0(t){return t===ds?void 0:t}function J0(t){return t.instantiationMode==="EAGER"}/**
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
 */class Q0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Y0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const Z0={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},eI=Ee.INFO,tI={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},nI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=tI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lr{constructor(e){this.name=e,this._logLevel=eI,this._logHandler=nI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Z0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const sI=(t,e)=>e.some(n=>t instanceof n);let Qf,Zf;function iI(){return Qf||(Qf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rI(){return Zf||(Zf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const X_=new WeakMap,dc=new WeakMap,J_=new WeakMap,vl=new WeakMap,Tu=new WeakMap;function oI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Xn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&X_.set(n,t)}).catch(()=>{}),Tu.set(e,t),e}function aI(t){if(dc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});dc.set(t,e)}let pc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||J_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lI(t){pc=t(pc)}function cI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(El(this),e,...n);return J_.set(s,e.sort?e.sort():[e]),Xn(s)}:rI().includes(t)?function(...e){return t.apply(El(this),e),Xn(X_.get(this))}:function(...e){return Xn(t.apply(El(this),e))}}function uI(t){return typeof t=="function"?cI(t):(t instanceof IDBTransaction&&aI(t),sI(t,iI())?new Proxy(t,pc):t)}function Xn(t){if(t instanceof IDBRequest)return oI(t);if(vl.has(t))return vl.get(t);const e=uI(t);return e!==t&&(vl.set(t,e),Tu.set(e,t)),e}const El=t=>Tu.get(t);function hI(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Xn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Xn(o.result),c.oldVersion,c.newVersion,Xn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const fI=["get","getKey","getAll","getAllKeys","count"],dI=["put","add","delete","clear"],wl=new Map;function ed(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wl.get(e))return wl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=dI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||fI.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return wl.set(e,r),r}lI(t=>({...t,get:(e,n,s)=>ed(e,n)||t.get(e,n,s),has:(e,n)=>!!ed(e,n)||t.has(e,n)}));/**
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
 */class pI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function gI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gc="@firebase/app",td="0.10.10";/**
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
 */const bn=new Lr("@firebase/app"),_I="@firebase/app-compat",mI="@firebase/analytics-compat",yI="@firebase/analytics",vI="@firebase/app-check-compat",EI="@firebase/app-check",wI="@firebase/auth",TI="@firebase/auth-compat",bI="@firebase/database",II="@firebase/database-compat",CI="@firebase/functions",SI="@firebase/functions-compat",RI="@firebase/installations",AI="@firebase/installations-compat",kI="@firebase/messaging",PI="@firebase/messaging-compat",NI="@firebase/performance",OI="@firebase/performance-compat",LI="@firebase/remote-config",MI="@firebase/remote-config-compat",DI="@firebase/storage",xI="@firebase/storage-compat",FI="@firebase/firestore",UI="@firebase/vertexai-preview",HI="@firebase/firestore-compat",jI="firebase",BI="10.13.1";/**
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
 */const _c="[DEFAULT]",$I={[gc]:"fire-core",[_I]:"fire-core-compat",[yI]:"fire-analytics",[mI]:"fire-analytics-compat",[EI]:"fire-app-check",[vI]:"fire-app-check-compat",[wI]:"fire-auth",[TI]:"fire-auth-compat",[bI]:"fire-rtdb",[II]:"fire-rtdb-compat",[CI]:"fire-fn",[SI]:"fire-fn-compat",[RI]:"fire-iid",[AI]:"fire-iid-compat",[kI]:"fire-fcm",[PI]:"fire-fcm-compat",[NI]:"fire-perf",[OI]:"fire-perf-compat",[LI]:"fire-rc",[MI]:"fire-rc-compat",[DI]:"fire-gcs",[xI]:"fire-gcs-compat",[FI]:"fire-fst",[HI]:"fire-fst-compat",[UI]:"fire-vertex","fire-js":"fire-js",[jI]:"fire-js-all"};/**
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
 */const zo=new Map,VI=new Map,mc=new Map;function nd(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rn(t){const e=t.name;if(mc.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;mc.set(e,t);for(const n of zo.values())nd(n,t);for(const n of VI.values())nd(n,t);return!0}function WI(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t.settings!==void 0}/**
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
 */const KI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Ei("app","Firebase",KI);/**
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
 */class GI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=BI;function Q_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_c,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Jn.create("bad-app-name",{appName:String(i)});if(n||(n=K_()),!n)throw Jn.create("no-options");const r=zo.get(i);if(r){if(qo(n,r.options)&&qo(s,r.config))return r;throw Jn.create("duplicate-app",{appName:i})}const o=new Q0(i);for(const c of mc.values())o.addComponent(c);const l=new GI(n,s,o);return zo.set(i,l),l}function qI(t=_c){const e=zo.get(t);if(!e&&t===_c&&K_())return Q_();if(!e)throw Jn.create("no-app",{appName:t});return e}function bt(t,e,n){var s;let i=(s=$I[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(l.join(" "));return}rn(new zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const zI="firebase-heartbeat-database",YI=1,wr="firebase-heartbeat-store";let Tl=null;function Z_(){return Tl||(Tl=hI(zI,YI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),Tl}async function XI(t){try{const n=(await Z_()).transaction(wr),s=await n.objectStore(wr).get(em(t));return await n.done,s}catch(e){if(e instanceof cn)bn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function sd(t,e){try{const s=(await Z_()).transaction(wr,"readwrite");await s.objectStore(wr).put(e,em(t)),await s.done}catch(n){if(n instanceof cn)bn.warn(n.message);else{const s=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(s.message)}}}function em(t){return`${t.name}!${t.options.appId}`}/**
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
 */const JI=1024,QI=30*24*60*60*1e3;class ZI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=id();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=QI}),this._storage.overwrite(this._heartbeatsCache))}catch(s){bn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=id(),{heartbeatsToSend:s,unsentEntries:i}=eC(this._heartbeatsCache.heartbeats),r=$_(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return bn.warn(n),""}}}function id(){return new Date().toISOString().substring(0,10)}function eC(t,e=JI){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),rd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class tC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z_()?F0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rd(t){return $_(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nC(t){rn(new zt("platform-logger",e=>new pI(e),"PRIVATE")),rn(new zt("heartbeat",e=>new ZI(e),"PRIVATE")),bt(gc,td,t),bt(gc,td,"esm2017"),bt("fire-js","")}nC("");var od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function y(){}y.prototype=_.prototype,b.D=_.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(E,R,I){for(var v=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)v[ce-2]=arguments[ce];return _.prototype[R].apply(E,v)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,_,y){y||(y=0);var E=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)E[R]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(R=0;16>R;++R)E[R]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=b.g[0],y=b.g[1],R=b.g[2];var I=b.g[3],v=_+(I^y&(R^I))+E[0]+3614090360&4294967295;_=y+(v<<7&4294967295|v>>>25),v=I+(R^_&(y^R))+E[1]+3905402710&4294967295,I=_+(v<<12&4294967295|v>>>20),v=R+(y^I&(_^y))+E[2]+606105819&4294967295,R=I+(v<<17&4294967295|v>>>15),v=y+(_^R&(I^_))+E[3]+3250441966&4294967295,y=R+(v<<22&4294967295|v>>>10),v=_+(I^y&(R^I))+E[4]+4118548399&4294967295,_=y+(v<<7&4294967295|v>>>25),v=I+(R^_&(y^R))+E[5]+1200080426&4294967295,I=_+(v<<12&4294967295|v>>>20),v=R+(y^I&(_^y))+E[6]+2821735955&4294967295,R=I+(v<<17&4294967295|v>>>15),v=y+(_^R&(I^_))+E[7]+4249261313&4294967295,y=R+(v<<22&4294967295|v>>>10),v=_+(I^y&(R^I))+E[8]+1770035416&4294967295,_=y+(v<<7&4294967295|v>>>25),v=I+(R^_&(y^R))+E[9]+2336552879&4294967295,I=_+(v<<12&4294967295|v>>>20),v=R+(y^I&(_^y))+E[10]+4294925233&4294967295,R=I+(v<<17&4294967295|v>>>15),v=y+(_^R&(I^_))+E[11]+2304563134&4294967295,y=R+(v<<22&4294967295|v>>>10),v=_+(I^y&(R^I))+E[12]+1804603682&4294967295,_=y+(v<<7&4294967295|v>>>25),v=I+(R^_&(y^R))+E[13]+4254626195&4294967295,I=_+(v<<12&4294967295|v>>>20),v=R+(y^I&(_^y))+E[14]+2792965006&4294967295,R=I+(v<<17&4294967295|v>>>15),v=y+(_^R&(I^_))+E[15]+1236535329&4294967295,y=R+(v<<22&4294967295|v>>>10),v=_+(R^I&(y^R))+E[1]+4129170786&4294967295,_=y+(v<<5&4294967295|v>>>27),v=I+(y^R&(_^y))+E[6]+3225465664&4294967295,I=_+(v<<9&4294967295|v>>>23),v=R+(_^y&(I^_))+E[11]+643717713&4294967295,R=I+(v<<14&4294967295|v>>>18),v=y+(I^_&(R^I))+E[0]+3921069994&4294967295,y=R+(v<<20&4294967295|v>>>12),v=_+(R^I&(y^R))+E[5]+3593408605&4294967295,_=y+(v<<5&4294967295|v>>>27),v=I+(y^R&(_^y))+E[10]+38016083&4294967295,I=_+(v<<9&4294967295|v>>>23),v=R+(_^y&(I^_))+E[15]+3634488961&4294967295,R=I+(v<<14&4294967295|v>>>18),v=y+(I^_&(R^I))+E[4]+3889429448&4294967295,y=R+(v<<20&4294967295|v>>>12),v=_+(R^I&(y^R))+E[9]+568446438&4294967295,_=y+(v<<5&4294967295|v>>>27),v=I+(y^R&(_^y))+E[14]+3275163606&4294967295,I=_+(v<<9&4294967295|v>>>23),v=R+(_^y&(I^_))+E[3]+4107603335&4294967295,R=I+(v<<14&4294967295|v>>>18),v=y+(I^_&(R^I))+E[8]+1163531501&4294967295,y=R+(v<<20&4294967295|v>>>12),v=_+(R^I&(y^R))+E[13]+2850285829&4294967295,_=y+(v<<5&4294967295|v>>>27),v=I+(y^R&(_^y))+E[2]+4243563512&4294967295,I=_+(v<<9&4294967295|v>>>23),v=R+(_^y&(I^_))+E[7]+1735328473&4294967295,R=I+(v<<14&4294967295|v>>>18),v=y+(I^_&(R^I))+E[12]+2368359562&4294967295,y=R+(v<<20&4294967295|v>>>12),v=_+(y^R^I)+E[5]+4294588738&4294967295,_=y+(v<<4&4294967295|v>>>28),v=I+(_^y^R)+E[8]+2272392833&4294967295,I=_+(v<<11&4294967295|v>>>21),v=R+(I^_^y)+E[11]+1839030562&4294967295,R=I+(v<<16&4294967295|v>>>16),v=y+(R^I^_)+E[14]+4259657740&4294967295,y=R+(v<<23&4294967295|v>>>9),v=_+(y^R^I)+E[1]+2763975236&4294967295,_=y+(v<<4&4294967295|v>>>28),v=I+(_^y^R)+E[4]+1272893353&4294967295,I=_+(v<<11&4294967295|v>>>21),v=R+(I^_^y)+E[7]+4139469664&4294967295,R=I+(v<<16&4294967295|v>>>16),v=y+(R^I^_)+E[10]+3200236656&4294967295,y=R+(v<<23&4294967295|v>>>9),v=_+(y^R^I)+E[13]+681279174&4294967295,_=y+(v<<4&4294967295|v>>>28),v=I+(_^y^R)+E[0]+3936430074&4294967295,I=_+(v<<11&4294967295|v>>>21),v=R+(I^_^y)+E[3]+3572445317&4294967295,R=I+(v<<16&4294967295|v>>>16),v=y+(R^I^_)+E[6]+76029189&4294967295,y=R+(v<<23&4294967295|v>>>9),v=_+(y^R^I)+E[9]+3654602809&4294967295,_=y+(v<<4&4294967295|v>>>28),v=I+(_^y^R)+E[12]+3873151461&4294967295,I=_+(v<<11&4294967295|v>>>21),v=R+(I^_^y)+E[15]+530742520&4294967295,R=I+(v<<16&4294967295|v>>>16),v=y+(R^I^_)+E[2]+3299628645&4294967295,y=R+(v<<23&4294967295|v>>>9),v=_+(R^(y|~I))+E[0]+4096336452&4294967295,_=y+(v<<6&4294967295|v>>>26),v=I+(y^(_|~R))+E[7]+1126891415&4294967295,I=_+(v<<10&4294967295|v>>>22),v=R+(_^(I|~y))+E[14]+2878612391&4294967295,R=I+(v<<15&4294967295|v>>>17),v=y+(I^(R|~_))+E[5]+4237533241&4294967295,y=R+(v<<21&4294967295|v>>>11),v=_+(R^(y|~I))+E[12]+1700485571&4294967295,_=y+(v<<6&4294967295|v>>>26),v=I+(y^(_|~R))+E[3]+2399980690&4294967295,I=_+(v<<10&4294967295|v>>>22),v=R+(_^(I|~y))+E[10]+4293915773&4294967295,R=I+(v<<15&4294967295|v>>>17),v=y+(I^(R|~_))+E[1]+2240044497&4294967295,y=R+(v<<21&4294967295|v>>>11),v=_+(R^(y|~I))+E[8]+1873313359&4294967295,_=y+(v<<6&4294967295|v>>>26),v=I+(y^(_|~R))+E[15]+4264355552&4294967295,I=_+(v<<10&4294967295|v>>>22),v=R+(_^(I|~y))+E[6]+2734768916&4294967295,R=I+(v<<15&4294967295|v>>>17),v=y+(I^(R|~_))+E[13]+1309151649&4294967295,y=R+(v<<21&4294967295|v>>>11),v=_+(R^(y|~I))+E[4]+4149444226&4294967295,_=y+(v<<6&4294967295|v>>>26),v=I+(y^(_|~R))+E[11]+3174756917&4294967295,I=_+(v<<10&4294967295|v>>>22),v=R+(_^(I|~y))+E[2]+718787259&4294967295,R=I+(v<<15&4294967295|v>>>17),v=y+(I^(R|~_))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(R+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+I&4294967295}s.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var y=_-this.blockSize,E=this.B,R=this.h,I=0;I<_;){if(R==0)for(;I<=y;)i(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<_;)if(E[R++]=b.charCodeAt(I++),R==this.blockSize){i(this,E),R=0;break}}else for(;I<_;)if(E[R++]=b[I++],R==this.blockSize){i(this,E),R=0;break}}this.h=R,this.o+=_},s.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var y=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.u(b),b=Array(16),_=y=0;4>_;++_)for(var E=0;32>E;E+=8)b[y++]=this.g[_]>>>E&255;return b};function r(b,_){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=_(b)}function o(b,_){this.h=_;for(var y=[],E=!0,R=b.length-1;0<=R;R--){var I=b[R]|0;E&&I==_||(y[R]=I,E=!1)}this.g=y}var l={};function c(b){return-128<=b&&128>b?r(b,function(_){return new o([_|0],0>_?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return F(u(-b));for(var _=[],y=1,E=0;b>=y;E++)_[E]=b/y|0,y*=4294967296;return new o(_,0)}function f(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return F(f(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(_,8)),E=d,R=0;R<b.length;R+=8){var I=Math.min(8,b.length-R),v=parseInt(b.substring(R,R+I),_);8>I?(I=u(Math.pow(_,I)),E=E.j(I).add(u(v))):(E=E.j(y),E=E.add(u(v)))}return E}var d=c(0),g=c(1),T=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-F(this).m();for(var b=0,_=1,y=0;y<this.g.length;y++){var E=this.i(y);b+=(0<=E?E:4294967296+E)*_,_*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(O(this))return"-"+F(this).toString(b);for(var _=u(Math.pow(b,6)),y=this,E="";;){var R=P(y,_).g;y=B(y,R.j(_));var I=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=R,C(y))return I+E;for(;6>I.length;)I="0"+I;E=I+E}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function O(b){return b.h==-1}t.l=function(b){return b=B(this,b),O(b)?-1:C(b)?0:1};function F(b){for(var _=b.g.length,y=[],E=0;E<_;E++)y[E]=~b.g[E];return new o(y,~b.h).add(g)}t.abs=function(){return O(this)?F(this):this},t.add=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],E=0,R=0;R<=_;R++){var I=E+(this.i(R)&65535)+(b.i(R)&65535),v=(I>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);E=v>>>16,I&=65535,v&=65535,y[R]=v<<16|I}return new o(y,y[y.length-1]&-2147483648?-1:0)};function B(b,_){return b.add(F(_))}t.j=function(b){if(C(this)||C(b))return d;if(O(this))return O(b)?F(this).j(F(b)):F(F(this).j(b));if(O(b))return F(this.j(F(b)));if(0>this.l(T)&&0>b.l(T))return u(this.m()*b.m());for(var _=this.g.length+b.g.length,y=[],E=0;E<2*_;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var R=0;R<b.g.length;R++){var I=this.i(E)>>>16,v=this.i(E)&65535,ce=b.i(R)>>>16,me=b.i(R)&65535;y[2*E+2*R]+=v*me,k(y,2*E+2*R),y[2*E+2*R+1]+=I*me,k(y,2*E+2*R+1),y[2*E+2*R+1]+=v*ce,k(y,2*E+2*R+1),y[2*E+2*R+2]+=I*ce,k(y,2*E+2*R+2)}for(E=0;E<_;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=_;E<2*_;E++)y[E]=0;return new o(y,0)};function k(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function A(b,_){this.g=b,this.h=_}function P(b,_){if(C(_))throw Error("division by zero");if(C(b))return new A(d,d);if(O(b))return _=P(F(b),_),new A(F(_.g),F(_.h));if(O(_))return _=P(b,F(_)),new A(F(_.g),_.h);if(30<b.g.length){if(O(b)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var y=g,E=_;0>=E.l(b);)y=D(y),E=D(E);var R=M(y,1),I=M(E,1);for(E=M(E,2),y=M(y,2);!C(E);){var v=I.add(E);0>=v.l(b)&&(R=R.add(y),I=v),E=M(E,1),y=M(y,1)}return _=B(b,R.j(_)),new A(R,_)}for(R=d;0<=b.l(_);){for(y=Math.max(1,Math.floor(b.m()/_.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),I=u(y),v=I.j(_);O(v)||0<v.l(b);)y-=E,I=u(y),v=I.j(_);C(I)&&(I=g),R=R.add(I),b=B(b,v)}return new A(R,b)}t.A=function(b){return P(this,b).h},t.and=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],E=0;E<_;E++)y[E]=this.i(E)&b.i(E);return new o(y,this.h&b.h)},t.or=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],E=0;E<_;E++)y[E]=this.i(E)|b.i(E);return new o(y,this.h|b.h)},t.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],E=0;E<_;E++)y[E]=this.i(E)^b.i(E);return new o(y,this.h^b.h)};function D(b){for(var _=b.g.length+1,y=[],E=0;E<_;E++)y[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(y,b.h)}function M(b,_){var y=_>>5;_%=32;for(var E=b.g.length-y,R=[],I=0;I<E;I++)R[I]=0<_?b.i(I+y)>>>_|b.i(I+y+1)<<32-_:b.i(I+y);return new o(R,b.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,tm=o}).apply(typeof od<"u"?od:typeof self<"u"?self:typeof window<"u"?window:{});var ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ho=="object"&&ho];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function i(a,h){if(h)e:{var p=s;a=a.split(".");for(var m=0;m<a.length-1;m++){var N=a[m];if(!(N in p))break e;p=p[N]}a=a[a.length-1],m=p[a],h=h(m),h!=m&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function r(a,h){a instanceof String&&(a+="");var p=0,m=!1,N={next:function(){if(!m&&p<a.length){var x=p++;return{value:h(x,a[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return r(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function d(a,h,p){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,m),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,g.apply(null,arguments)}function T(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(m,N,x){for(var G=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)G[Se-2]=arguments[Se];return h.prototype[N].apply(m,G)}}function O(a){const h=a.length;if(0<h){const p=Array(h);for(let m=0;m<h;m++)p[m]=a[m];return p}return[]}function F(a,h){for(let p=1;p<arguments.length;p++){const m=arguments[p];if(c(m)){const N=a.length||0,x=m.length||0;a.length=N+x;for(let G=0;G<x;G++)a[N+G]=m[G]}else a.push(m)}}class B{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var D=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function M(a,h,p){for(const m in a)h.call(p,a[m],m,a)}function b(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function _(a){const h={};for(const p in a)h[p]=a[p];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let p,m;for(let N=1;N<arguments.length;N++){m=arguments[N];for(p in m)a[p]=m[p];for(let x=0;x<y.length;x++)p=y[x],Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}}function R(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function I(a){l.setTimeout(()=>{throw a},0)}function v(){var a=lt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ce{constructor(){this.h=this.g=null}add(h,p){const m=me.get();m.set(h,p),this.h?this.h.next=m:this.g=m,this.h=m}}var me=new B(()=>new Q,a=>a.reset());class Q{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,Z=!1,lt=new ce,Ut=()=>{const a=l.Promise.resolve(void 0);oe=()=>{a.then(St)}};var St=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(p){I(p)}var h=me;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Z=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function De(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var Rn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Jt(a,h){if(De.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(D){e:{try{P(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ge[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Jt.aa.h.call(this)}}C(Jt,De);var Ge={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var H="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(a,h,p,m,N){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!m,this.ha=N,this.key=++J,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ue(a){this.src=a,this.g={},this.h=0}ue.prototype.add=function(a,h,p,m,N){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var G=w(a,h,m,N);return-1<G?(h=a[G],p||(h.fa=!1)):(h=new Y(h,this.src,x,!!m,N),h.fa=p,a.push(h)),h};function be(a,h){var p=h.type;if(p in a.g){var m=a.g[p],N=Array.prototype.indexOf.call(m,h,void 0),x;(x=0<=N)&&Array.prototype.splice.call(m,N,1),x&&(ee(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function w(a,h,p,m){for(var N=0;N<a.length;++N){var x=a[N];if(!x.da&&x.listener==h&&x.capture==!!p&&x.ha==m)return N}return-1}var S="closure_lm_"+(1e6*Math.random()|0),L={};function j(a,h,p,m,N){if(Array.isArray(h)){for(var x=0;x<h.length;x++)j(a,h[x],p,m,N);return null}return p=ne(p),a&&a[H]?a.K(h,p,u(m)?!!m.capture:!!m,N):U(a,h,p,!1,m,N)}function U(a,h,p,m,N,x){if(!h)throw Error("Invalid event type");var G=u(N)?!!N.capture:!!N,Se=X(a);if(Se||(a[S]=Se=new ue(a)),p=Se.add(h,p,m,G,x),p.proxy)return p;if(m=W(),p.proxy=m,m.src=a,m.listener=p,a.addEventListener)Rn||(N=G),N===void 0&&(N=!1),a.addEventListener(h.toString(),m,N);else if(a.attachEvent)a.attachEvent(K(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function W(){function a(p){return h.call(a.src,a.listener,p)}const h=$;return a}function q(a,h,p,m,N){if(Array.isArray(h))for(var x=0;x<h.length;x++)q(a,h[x],p,m,N);else m=u(m)?!!m.capture:!!m,p=ne(p),a&&a[H]?(a=a.i,h=String(h).toString(),h in a.g&&(x=a.g[h],p=w(x,p,m,N),-1<p&&(ee(x[p]),Array.prototype.splice.call(x,p,1),x.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,p,m,N)),(p=-1<a?h[a]:null)&&V(p))}function V(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[H])be(h.i,a);else{var p=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(p,m,a.capture):h.detachEvent?h.detachEvent(K(p),m):h.addListener&&h.removeListener&&h.removeListener(m),(p=X(h))?(be(p,a),p.h==0&&(p.src=null,h[S]=null)):ee(a)}}}function K(a){return a in L?L[a]:L[a]="on"+a}function $(a,h){if(a.da)a=!0;else{h=new Jt(h,this);var p=a.listener,m=a.ha||a.src;a.fa&&V(a),a=p.call(m,h)}return a}function X(a){return a=a[S],a instanceof ue?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function te(){Me.call(this),this.i=new ue(this),this.M=this,this.F=null}C(te,Me),te.prototype[H]=!0,te.prototype.removeEventListener=function(a,h,p,m){q(this,a,h,p,m)};function ie(a,h){var p,m=a.F;if(m)for(p=[];m;m=m.F)p.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new De(h,a);else if(h instanceof De)h.target=h.target||a;else{var N=h;h=new De(m,a),E(h,N)}if(N=!0,p)for(var x=p.length-1;0<=x;x--){var G=h.g=p[x];N=ge(G,m,!0,h)&&N}if(G=h.g=a,N=ge(G,m,!0,h)&&N,N=ge(G,m,!1,h)&&N,p)for(x=0;x<p.length;x++)G=h.g=p[x],N=ge(G,m,!1,h)&&N}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],m=0;m<p.length;m++)ee(p[m]);delete a.g[h],a.h--}}this.F=null},te.prototype.K=function(a,h,p,m){return this.i.add(String(a),h,!1,p,m)},te.prototype.L=function(a,h,p,m){return this.i.add(String(a),h,!0,p,m)};function ge(a,h,p,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,x=0;x<h.length;++x){var G=h[x];if(G&&!G.da&&G.capture==p){var Se=G.listener,Je=G.ha||G.src;G.fa&&be(a.i,G),N=Se.call(Je,m)!==!1&&N}}return N&&!m.defaultPrevented}function Ce(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function He(a){a.g=Ce(()=>{a.g=null,a.i&&(a.i=!1,He(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class yt extends Me{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:He(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rt(a){Me.call(this),this.h=a,this.g={}}C(Rt,Me);var Ri=[];function An(a){M(a.g,function(h,p){this.g.hasOwnProperty(p)&&V(h)},a),a.g={}}Rt.prototype.N=function(){Rt.aa.N.call(this),An(this)},Rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ms=l.JSON.stringify,ct=l.JSON.parse,At=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ds(){}Ds.prototype.h=null;function ch(a){return a.h||(a.h=a.i())}function dv(){}var Ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ba(){De.call(this,"d")}C(Ba,De);function $a(){De.call(this,"c")}C($a,De);var xs={},uh=null;function Va(){return uh=uh||new te}xs.La="serverreachability";function hh(a){De.call(this,xs.La,a)}C(hh,De);function ki(a){const h=Va();ie(h,new hh(h))}xs.STAT_EVENT="statevent";function fh(a,h){De.call(this,xs.STAT_EVENT,a),this.stat=h}C(fh,De);function ut(a){const h=Va();ie(h,new fh(h,a))}xs.Ma="timingevent";function dh(a,h){De.call(this,xs.Ma,a),this.size=h}C(dh,De);function Pi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ni(){this.g=!0}Ni.prototype.xa=function(){this.g=!1};function pv(a,h,p,m,N,x){a.info(function(){if(a.g)if(x)for(var G="",Se=x.split("&"),Je=0;Je<Se.length;Je++){var ye=Se[Je].split("=");if(1<ye.length){var et=ye[0];ye=ye[1];var tt=et.split("_");G=2<=tt.length&&tt[1]=="type"?G+(et+"="+ye+"&"):G+(et+"=redacted&")}}else G=null;else G=x;return"XMLHTTP REQ ("+m+") [attempt "+N+"]: "+h+`
`+p+`
`+G})}function gv(a,h,p,m,N,x,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+N+"]: "+h+`
`+p+`
`+x+" "+G})}function Fs(a,h,p,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+mv(a,p)+(m?" "+m:"")})}function _v(a,h){a.info(function(){return"TIMEOUT: "+h})}Ni.prototype.info=function(){};function mv(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var m=p[a];if(!(2>m.length)){var N=m[1];if(Array.isArray(N)&&!(1>N.length)){var x=N[0];if(x!="noop"&&x!="stop"&&x!="close")for(var G=1;G<N.length;G++)N[G]=""}}}}return Ms(p)}catch{return h}}var Wa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ka;function $r(){}C($r,Ds),$r.prototype.g=function(){return new XMLHttpRequest},$r.prototype.i=function(){return{}},Ka=new $r;function kn(a,h,p,m){this.j=a,this.i=h,this.l=p,this.R=m||1,this.U=new Rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ph}function ph(){this.i=null,this.g="",this.h=!1}var gh={},Ga={};function qa(a,h,p){a.L=1,a.v=Gr(hn(h)),a.m=p,a.P=!0,_h(a,null)}function _h(a,h){a.F=Date.now(),Vr(a),a.A=hn(a.v);var p=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Ph(p.i,"t",m),a.C=0,p=a.j.J,a.h=new ph,a.g=zh(a.j,p?h:null,!a.m),0<a.O&&(a.M=new yt(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,m=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Ri[0]=N.toString()),N=Ri);for(var x=0;x<N.length;x++){var G=j(p,N[x],m||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ki(),pv(a.i,a.u,a.A,a.l,a.R,a.m)}kn.prototype.ca=function(a){a=a.target;const h=this.M;h&&fn(a)==3?h.j():this.Y(a)},kn.prototype.Y=function(a){try{if(a==this.g)e:{const tt=fn(this.g);var h=this.g.Ba();const js=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||Fh(this.g)))){this.J||tt!=4||h==7||(h==8||0>=js?ki(3):ki(2)),za(this);var p=this.g.Z();this.X=p;t:if(mh(this)){var m=Fh(this.g);a="";var N=m.length,x=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){os(this),Oi(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(x&&h==N-1)});m.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,gv(this.i,this.u,this.A,this.l,this.R,tt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Je=this.g;if((Se=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(Se)){var ye=Se;break t}}ye=null}if(p=ye)Fs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ya(this,p);else{this.o=!1,this.s=3,ut(12),os(this),Oi(this);break e}}if(this.P){p=!0;let Ht;for(;!this.J&&this.C<G.length;)if(Ht=vv(this,G),Ht==Ga){tt==4&&(this.s=4,ut(14),p=!1),Fs(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==gh){this.s=4,ut(15),Fs(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else Fs(this.i,this.l,Ht,null),Ya(this,Ht);if(mh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||G.length!=0||this.h.h||(this.s=1,ut(16),p=!1),this.o=this.o&&p,!p)Fs(this.i,this.l,G,"[Invalid Chunked Response]"),os(this),Oi(this);else if(0<G.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),tl(et),et.M=!0,ut(11))}}else Fs(this.i,this.l,G,null),Ya(this,G);tt==4&&os(this),this.o&&!this.J&&(tt==4?Wh(this.j,this):(this.o=!1,Vr(this)))}else xv(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),os(this),Oi(this)}}}catch{}finally{}};function mh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function vv(a,h){var p=a.C,m=h.indexOf(`
`,p);return m==-1?Ga:(p=Number(h.substring(p,m)),isNaN(p)?gh:(m+=1,m+p>h.length?Ga:(h=h.slice(m,m+p),a.C=m+p,h)))}kn.prototype.cancel=function(){this.J=!0,os(this)};function Vr(a){a.S=Date.now()+a.I,yh(a,a.I)}function yh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Pi(g(a.ba,a),h)}function za(a){a.B&&(l.clearTimeout(a.B),a.B=null)}kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(_v(this.i,this.A),this.L!=2&&(ki(),ut(17)),os(this),this.s=2,Oi(this)):yh(this,this.S-a)};function Oi(a){a.j.G==0||a.J||Wh(a.j,a)}function os(a){za(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,An(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ya(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Xa(p.h,a))){if(!a.K&&Xa(p.h,a)&&p.G==3){try{var m=p.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var N=m;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Qr(p),Xr(p);else break e;el(p),ut(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=Pi(g(p.Za,p),6e3));if(1>=wh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ls(p,11)}else if((a.K||p.g==a)&&Qr(p),!k(h))for(N=p.Da.g.parse(h),h=0;h<N.length;h++){let ye=N[h];if(p.T=ye[0],ye=ye[1],p.G==2)if(ye[0]=="c"){p.K=ye[1],p.ia=ye[2];const et=ye[3];et!=null&&(p.la=et,p.j.info("VER="+p.la));const tt=ye[4];tt!=null&&(p.Aa=tt,p.j.info("SVER="+p.Aa));const js=ye[5];js!=null&&typeof js=="number"&&0<js&&(m=1.5*js,p.L=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const Ht=a.g;if(Ht){const Zr=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zr){var x=m.h;x.g||Zr.indexOf("spdy")==-1&&Zr.indexOf("quic")==-1&&Zr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Ja(x,x.h),x.h=null))}if(m.D){const nl=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;nl&&(m.ya=nl,Ae(m.I,m.D,nl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),m=p;var G=a;if(m.qa=qh(m,m.J?m.ia:null,m.W),G.K){Th(m.h,G);var Se=G,Je=m.L;Je&&(Se.I=Je),Se.B&&(za(Se),Vr(Se)),m.g=G}else $h(m);0<p.i.length&&Jr(p)}else ye[0]!="stop"&&ye[0]!="close"||ls(p,7);else p.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?ls(p,7):Za(p):ye[0]!="noop"&&p.l&&p.l.ta(ye),p.v=0)}}ki(4)}catch{}}var Ev=class{constructor(a,h){this.g=a,this.map=h}};function vh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function wh(a){return a.h?1:a.g?a.g.size:0}function Xa(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ja(a,h){a.g?a.g.add(h):a.h=h}function Th(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}vh.prototype.cancel=function(){if(this.i=bh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return O(a.i)}function wv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,m=0;m<p;m++)h.push(a[m]);return h}h=[],p=0;for(m in a)h[p++]=a[m];return h}function Tv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const m in a)h[p++]=m;return h}}}function Ih(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=Tv(a),m=wv(a),N=m.length,x=0;x<N;x++)h.call(void 0,m[x],p&&p[x],a)}var Ch=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bv(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var m=a[p].indexOf("="),N=null;if(0<=m){var x=a[p].substring(0,m);N=a[p].substring(m+1)}else x=a[p];h(x,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function as(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof as){this.h=a.h,Wr(this,a.j),this.o=a.o,this.g=a.g,Kr(this,a.s),this.l=a.l;var h=a.i,p=new Di;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Sh(this,p),this.m=a.m}else a&&(h=String(a).match(Ch))?(this.h=!1,Wr(this,h[1]||"",!0),this.o=Li(h[2]||""),this.g=Li(h[3]||"",!0),Kr(this,h[4]),this.l=Li(h[5]||"",!0),Sh(this,h[6]||"",!0),this.m=Li(h[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}as.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Mi(h,Rh,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Mi(h,Rh,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Mi(p,p.charAt(0)=="/"?Sv:Cv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Mi(p,Av)),a.join("")};function hn(a){return new as(a)}function Wr(a,h,p){a.j=p?Li(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Kr(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Sh(a,h,p){h instanceof Di?(a.i=h,kv(a.i,a.h)):(p||(h=Mi(h,Rv)),a.i=new Di(h,a.h))}function Ae(a,h,p){a.i.set(h,p)}function Gr(a){return Ae(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Li(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Mi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Iv),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Iv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Rh=/[#\/\?@]/g,Cv=/[#\?:]/g,Sv=/[#\?]/g,Rv=/[#\?@]/g,Av=/#/g;function Di(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Pn(a){a.g||(a.g=new Map,a.h=0,a.i&&bv(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Di.prototype,t.add=function(a,h){Pn(this),this.i=null,a=Us(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Ah(a,h){Pn(a),h=Us(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function kh(a,h){return Pn(a),h=Us(a,h),a.g.has(h)}t.forEach=function(a,h){Pn(this),this.g.forEach(function(p,m){p.forEach(function(N){a.call(h,N,m,this)},this)},this)},t.na=function(){Pn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let m=0;m<h.length;m++){const N=a[m];for(let x=0;x<N.length;x++)p.push(h[m])}return p},t.V=function(a){Pn(this);let h=[];if(typeof a=="string")kh(this,a)&&(h=h.concat(this.g.get(Us(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Pn(this),this.i=null,a=Us(this,a),kh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Ph(a,h,p){Ah(a,h),0<p.length&&(a.i=null,a.g.set(Us(a,h),O(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var m=h[p];const x=encodeURIComponent(String(m)),G=this.V(m);for(m=0;m<G.length;m++){var N=x;G[m]!==""&&(N+="="+encodeURIComponent(String(G[m]))),a.push(N)}}return this.i=a.join("&")};function Us(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function kv(a,h){h&&!a.j&&(Pn(a),a.i=null,a.g.forEach(function(p,m){var N=m.toLowerCase();m!=N&&(Ah(this,m),Ph(this,N,p))},a)),a.j=h}function Pv(a,h){const p=new Ni;if(l.Image){const m=new Image;m.onload=T(Nn,p,"TestLoadImage: loaded",!0,h,m),m.onerror=T(Nn,p,"TestLoadImage: error",!1,h,m),m.onabort=T(Nn,p,"TestLoadImage: abort",!1,h,m),m.ontimeout=T(Nn,p,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Nv(a,h){const p=new Ni,m=new AbortController,N=setTimeout(()=>{m.abort(),Nn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(x=>{clearTimeout(N),x.ok?Nn(p,"TestPingServer: ok",!0,h):Nn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Nn(p,"TestPingServer: error",!1,h)})}function Nn(a,h,p,m,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),m(p)}catch{}}function Ov(){this.g=new At}function Lv(a,h,p){const m=p||"";try{Ih(a,function(N,x){let G=N;u(N)&&(G=Ms(N)),h.push(m+x+"="+encodeURIComponent(G))})}catch(N){throw h.push(m+"type="+encodeURIComponent("_badmap")),N}}function qr(a){this.l=a.Ub||null,this.j=a.eb||!1}C(qr,Ds),qr.prototype.g=function(){return new zr(this.l,this.j)},qr.prototype.i=function(a){return function(){return a}}({});function zr(a,h){te.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(zr,te),t=zr.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Fi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?xi(this):Fi(this),this.readyState==3&&Nh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,xi(this))},t.Qa=function(a){this.g&&(this.response=a,xi(this))},t.ga=function(){this.g&&xi(this)};function xi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Fi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Fi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Oh(a){let h="";return M(a,function(p,m){h+=m,h+=":",h+=p,h+=`\r
`}),h}function Qa(a,h,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=Oh(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ae(a,h,p))}function je(a){te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(je,te);var Mv=/^https?$/i,Dv=["POST","PUT"];t=je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ka.g(),this.v=this.o?ch(this.o):ch(Ka),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){Lh(this,x);return}if(a=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var N in m)p.set(N,m[N]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())p.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(x=>x.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Dv,h,void 0))||m||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,G]of p)this.g.setRequestHeader(x,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xh(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){Lh(this,x)}};function Lh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Mh(a),Yr(a)}function Mh(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),Yr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yr(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Dh(this):this.bb())},t.bb=function(){Dh(this)};function Dh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)Ce(a.Ea,0,a);else if(ie(a,"readystatechange"),fn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var m;if(m=G===0){var N=String(a.D).match(Ch)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),m=!Mv.test(N?N.toLowerCase():"")}p=m}if(p)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var x=2<fn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",Mh(a)}}finally{Yr(a)}}}}function Yr(a,h){if(a.g){xh(a);const p=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ie(a,"ready");try{p.onreadystatechange=m}catch{}}}function xh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ct(h)}};function Fh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xv(a){const h={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(k(a[m]))continue;var p=R(a[m]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const x=h[N]||[];h[N]=x,x.push(p)}b(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ui(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Uh(a){this.Aa=0,this.i=[],this.j=new Ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ui("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ui("baseRetryDelayMs",5e3,a),this.cb=Ui("retryDelaySeedMs",1e4,a),this.Wa=Ui("forwardChannelMaxRetries",2,a),this.wa=Ui("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new vh(a&&a.concurrentRequestLimit),this.Da=new Ov,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Uh.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,m){ut(0),this.W=a,this.H=h||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.I=qh(this,null,this.W),Jr(this)};function Za(a){if(Hh(a),a.G==3){var h=a.U++,p=hn(a.I);if(Ae(p,"SID",a.K),Ae(p,"RID",h),Ae(p,"TYPE","terminate"),Hi(a,p),h=new kn(a,a.j,h),h.L=2,h.v=Gr(hn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=zh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Vr(h)}Gh(a)}function Xr(a){a.g&&(tl(a),a.g.cancel(),a.g=null)}function Hh(a){Xr(a),a.u&&(l.clearTimeout(a.u),a.u=null),Qr(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Jr(a){if(!Eh(a.h)&&!a.s){a.s=!0;var h=a.Ga;oe||Ut(),Z||(oe(),Z=!0),lt.add(h,a),a.B=0}}function Fv(a,h){return wh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Pi(g(a.Ga,a,h),Kh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new kn(this,this.j,a);let x=this.o;if(this.S&&(x?(x=_(x),E(x,this.S)):x=this.S),this.m!==null||this.O||(N.H=x,x=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Bh(this,N,h),p=hn(this.I),Ae(p,"RID",a),Ae(p,"CVER",22),this.D&&Ae(p,"X-HTTP-Session-Id",this.D),Hi(this,p),x&&(this.O?h="headers="+encodeURIComponent(String(Oh(x)))+"&"+h:this.m&&Qa(p,this.m,x)),Ja(this.h,N),this.Ua&&Ae(p,"TYPE","init"),this.P?(Ae(p,"$req",h),Ae(p,"SID","null"),N.T=!0,qa(N,p,null)):qa(N,p,h),this.G=2}}else this.G==3&&(a?jh(this,a):this.i.length==0||Eh(this.h)||jh(this))};function jh(a,h){var p;h?p=h.l:p=a.U++;const m=hn(a.I);Ae(m,"SID",a.K),Ae(m,"RID",p),Ae(m,"AID",a.T),Hi(a,m),a.m&&a.o&&Qa(m,a.m,a.o),p=new kn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Bh(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ja(a.h,p),qa(p,m,h)}function Hi(a,h){a.H&&M(a.H,function(p,m){Ae(h,m,p)}),a.l&&Ih({},function(p,m){Ae(h,m,p)})}function Bh(a,h,p){p=Math.min(a.i.length,p);var m=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let x=-1;for(;;){const G=["count="+p];x==-1?0<p?(x=N[0].g,G.push("ofs="+x)):x=0:G.push("ofs="+x);let Se=!0;for(let Je=0;Je<p;Je++){let ye=N[Je].g;const et=N[Je].map;if(ye-=x,0>ye)x=Math.max(0,N[Je].g-100),Se=!1;else try{Lv(et,G,"req"+ye+"_")}catch{m&&m(et)}}if(Se){m=G.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,m}function $h(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;oe||Ut(),Z||(oe(),Z=!0),lt.add(h,a),a.v=0}}function el(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Pi(g(a.Fa,a),Kh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Vh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Pi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Xr(this),Vh(this))};function tl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Vh(a){a.g=new kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=hn(a.qa);Ae(h,"RID","rpc"),Ae(h,"SID",a.K),Ae(h,"AID",a.T),Ae(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ae(h,"TO",a.ja),Ae(h,"TYPE","xmlhttp"),Hi(a,h),a.m&&a.o&&Qa(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Gr(hn(h)),p.m=null,p.P=!0,_h(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Xr(this),el(this),ut(19))};function Qr(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Wh(a,h){var p=null;if(a.g==h){Qr(a),tl(a),a.g=null;var m=2}else if(Xa(a.h,h))p=h.D,Th(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;m=Va(),ie(m,new dh(m,p)),Jr(a)}else $h(a);else if(N=h.s,N==3||N==0&&0<h.X||!(m==1&&Fv(a,h)||m==2&&el(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),N){case 1:ls(a,5);break;case 4:ls(a,10);break;case 3:ls(a,6);break;default:ls(a,2)}}}function Kh(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function ls(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),m=a.Xa;const N=!m;m=new as(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Wr(m,"https"),Gr(m),N?Pv(m.toString(),p):Nv(m.toString(),p)}else ut(2);a.G=0,a.l&&a.l.sa(h),Gh(a),Hh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Gh(a){if(a.G=0,a.ka=[],a.l){const h=bh(a.h);(h.length!=0||a.i.length!=0)&&(F(a.ka,h),F(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function qh(a,h,p){var m=p instanceof as?hn(p):new as(p);if(m.g!="")h&&(m.g=h+"."+m.g),Kr(m,m.s);else{var N=l.location;m=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var x=new as(null);m&&Wr(x,m),h&&(x.g=h),N&&Kr(x,N),p&&(x.l=p),m=x}return p=a.D,h=a.ya,p&&h&&Ae(m,p,h),Ae(m,"VER",a.la),Hi(a,m),m}function zh(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new je(new qr({eb:p})):new je(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yh(){}t=Yh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function kt(a,h){te.call(this),this.g=new Uh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!k(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!k(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Hs(this)}C(kt,te),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Za(this.g)},kt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Ms(a),a=p);h.i.push(new Ev(h.Ya++,a)),h.G==3&&Jr(h)},kt.prototype.N=function(){this.g.l=null,delete this.j,Za(this.g),delete this.g,kt.aa.N.call(this)};function Xh(a){Ba.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(Xh,Ba);function Jh(){$a.call(this),this.status=1}C(Jh,$a);function Hs(a){this.g=a}C(Hs,Yh),Hs.prototype.ua=function(){ie(this.g,"a")},Hs.prototype.ta=function(a){ie(this.g,new Xh(a))},Hs.prototype.sa=function(a){ie(this.g,new Jh)},Hs.prototype.ra=function(){ie(this.g,"b")},kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,Wa.NO_ERROR=0,Wa.TIMEOUT=8,Wa.HTTP_ERROR=6,yv.COMPLETE="complete",dv.EventType=Ai,Ai.OPEN="a",Ai.CLOSE="b",Ai.ERROR="c",Ai.MESSAGE="d",te.prototype.listen=te.prototype.K,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha}).apply(typeof ho<"u"?ho:typeof self<"u"?self:typeof window<"u"?window:{});const ad="@firebase/firestore";/**
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
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Oa="10.13.1";/**
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
 */const Yo=new Lr("@firebase/firestore");function wt(t,...e){if(Yo.logLevel<=Ee.DEBUG){const n=e.map(nm);Yo.debug(`Firestore (${Oa}): ${t}`,...n)}}function bu(t,...e){if(Yo.logLevel<=Ee.ERROR){const n=e.map(nm);Yo.error(`Firestore (${Oa}): ${t}`,...n)}}function nm(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function sm(t="Unexpected state"){const e=`FIRESTORE (${Oa}) INTERNAL ASSERTION FAILED: `+t;throw bu(e),new Error(e)}function yc(t,e){t||sm()}/**
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
 */const We={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ke extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class sC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class rC{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Zs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Zs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{wt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(wt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Zs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(wt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(yc(typeof s.accessToken=="string"),new sC(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return yc(e===null||typeof e=="string"),new pt(e)}}class oC{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class aC{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new oC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&wt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,wt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{wt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):wt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(yc(typeof n.token=="string"),this.R=n.token,new lC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function uC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class hC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=uC(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Xo(t,e){return t<e?-1:t>e?1:0}/**
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
 */class sr{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Ke(We.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ke(We.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Ke(We.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ke(We.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return sr.fromMillis(Date.now())}static fromDate(e){return sr.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new sr(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xo(this.nanoseconds,e.nanoseconds):Xo(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}function im(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class fC{constructor(e,n,s,i,r,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Jo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Jo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Jo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var ld,fe;(fe=ld||(ld={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
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
 */new tm([4294967295,4294967295],0);function bl(){return typeof document<"u"?document:null}/**
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
 */class dC{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ui=e,this.timerId=n,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-s);i>0&&wt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Iu{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Zs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,l=new Iu(e,n,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ke(We.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pC(t,e){if(bu("AsyncQueue",`${e}: ${t}`),im(t))return new Ke(We.UNAVAILABLE,`${e}: ${t}`);throw t}var cd,ud;(ud=cd||(cd={})).ea="default",ud.Cache="cache";/**
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
 */class gC{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=hC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{wt("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(wt("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ke(We.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=pC(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function rm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const hd=new Map;function _C(t,e,n,s){if(e===!0&&s===!0)throw new Ke(We.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class fd{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Ke(We.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Ke(We.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_C("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rm((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Ke(We.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Ke(We.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Ke(We.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mC{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ke(We.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Ke(We.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fd(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new iC;switch(s.type){case"firstParty":return new aC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Ke(We.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=hd.get(n);s&&(wt("ComponentProvider","Removing Datastore"),hd.delete(n),s.terminate())}(this),Promise.resolve()}}/**
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
 */class yC{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new dC(this,"async_queue_retry"),this.Eu=()=>{const n=bl();n&&wt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=bl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=bl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Zs;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!im(e))throw e;wt("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(s=>{this.hu=s,this.Pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(s);throw bu("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Pu=!1,s))));return this.au=n,n}enqueueAfterDelay(e,n,s){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=Iu.createAndSchedule(this,e,n,s,r=>this.Vu(r));return this.lu.push(i),i}du(){this.hu&&sm()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class vC extends mC{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new yC}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||EC(this),this._firestoreClient.terminate()}}function EC(t){var e,n,s;const i=t._freezeSettings(),r=function(l,c,u,f){return new fC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,rm(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new gC(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class wC{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Ke(We.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Ke(We.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xo(this._lat,e._lat)||Xo(this._long,e._long)}}(function(e,n=!0){(function(i){Oa=i})(rs),rn(new zt("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new vC(new rC(s.getProvider("auth-internal")),new cC(s.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Ke(We.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jo(u.options.projectId,f)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),bt(ad,"4.7.1",e),bt(ad,"4.7.1","esm2017")})();const TC=gb(()=>{Co("FirebaseTimestamp",t=>Oo(new sr(t.seconds,t.nanoseconds))),Co("FirebaseGeoPoint",t=>Oo(new wC(t.latitude,t.longitude))),Co("DocumentData",t=>{const e=typeof t=="string"?JSON.parse(t):t,n=e.id;return delete e.id,Object.defineProperty(e,"id",{value:n})})}),dd={NuxtError:t=>Aa(t),EmptyShallowRef:t=>dr(t==="_"?void 0:t==="0n"?BigInt(0):jo(t)),EmptyRef:t=>Kt(t==="_"?void 0:t==="0n"?BigInt(0):jo(t)),ShallowRef:t=>dr(t),ShallowReactive:t=>kr(t),Ref:t=>Kt(t),Reactive:t=>ss(t)},bC=Ct({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const s in dd)Co(s,dd[s]);Object.assign(t.payload,([e,n]=yr(()=>t.runWithContext(C0)),e=await e,n(),e)),window.__NUXT__=t.payload}}),IC=[],CC=Ct({name:"nuxt:head",enforce:"pre",setup(t){const e=p0({plugins:IC});g0(()=>Ue().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const s=async()=>{n=!1,await O_(e)};e.hooks.hook("dom:beforeRender",i=>{i.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||s()}),t.hooks.hook("app:error",s),t.hooks.hook("app:suspense:resolve",s)}}});/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const $s=typeof document<"u";function SC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function Il(t,e){const n={};for(const s in e){const i=e[s];n[s]=Yt(i)?i.map(t):t(i)}return n}const ir=()=>{},Yt=Array.isArray,om=/#/g,RC=/&/g,AC=/\//g,kC=/=/g,PC=/\?/g,am=/\+/g,NC=/%5B/g,OC=/%5D/g,lm=/%5E/g,LC=/%60/g,cm=/%7B/g,MC=/%7C/g,um=/%7D/g,DC=/%20/g;function Cu(t){return encodeURI(""+t).replace(MC,"|").replace(NC,"[").replace(OC,"]")}function xC(t){return Cu(t).replace(cm,"{").replace(um,"}").replace(lm,"^")}function vc(t){return Cu(t).replace(am,"%2B").replace(DC,"+").replace(om,"%23").replace(RC,"%26").replace(LC,"`").replace(cm,"{").replace(um,"}").replace(lm,"^")}function FC(t){return vc(t).replace(kC,"%3D")}function UC(t){return Cu(t).replace(om,"%23").replace(PC,"%3F")}function HC(t){return t==null?"":UC(t).replace(AC,"%2F")}function Tr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const jC=/\/$/,BC=t=>t.replace(jC,"");function Cl(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=KC(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Tr(o)}}function $C(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function VC(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ui(e.matched[s],n.matched[i])&&hm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ui(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!WC(t[n],e[n]))return!1;return!0}function WC(t,e){return Yt(t)?gd(t,e):Yt(e)?gd(e,t):t===e}function gd(t,e){return Yt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function KC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}var br;(function(t){t.pop="pop",t.push="push"})(br||(br={}));var rr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(rr||(rr={}));function GC(t){if(!t)if($s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),BC(t)}const qC=/^[^#]+#/;function zC(t,e){return t.replace(qC,"#")+e}function YC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const La=()=>({left:window.scrollX,top:window.scrollY});function XC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=YC(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _d(t,e){return(history.state?history.state.position-e:-1)+t}const Ec=new Map;function JC(t,e){Ec.set(t,e)}function QC(t){const e=Ec.get(t);return Ec.delete(t),e}let ZC=()=>location.protocol+"//"+location.host;function fm(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),pd(c,"")}return pd(n,t)+s+i}function eS(t,e,n,s){let i=[],r=[],o=null;const l=({state:g})=>{const T=fm(t,location),C=n.value,O=e.value;let F=0;if(g){if(n.value=T,e.value=g,o&&o===C){o=null;return}F=O?g.position-O.position:0}else s(T);i.forEach(B=>{B(n.value,C,{delta:F,type:br.pop,direction:F?F>0?rr.forward:rr.back:rr.unknown})})};function c(){o=n.value}function u(g){i.push(g);const T=()=>{const C=i.indexOf(g);C>-1&&i.splice(C,1)};return r.push(T),T}function f(){const{history:g}=window;g.state&&g.replaceState(Te({},g.state,{scroll:La()}),"")}function d(){for(const g of r)g();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function md(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?La():null}}function tS(t){const{history:e,location:n}=window,s={value:fm(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,f){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:ZC()+t+c;try{e[f?"replaceState":"pushState"](u,"",g),i.value=u}catch(T){console.error(T),n[f?"replace":"assign"](g)}}function o(c,u){const f=Te({},e.state,md(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});r(c,f,!0),s.value=c}function l(c,u){const f=Te({},i.value,e.state,{forward:c,scroll:La()});r(f.current,f,!0);const d=Te({},md(s.value,c,null),{position:f.position+1},u);r(c,d,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function dm(t){t=GC(t);const e=tS(t),n=eS(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Te({location:"",base:t,go:s,createHref:zC.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function nS(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),dm(t)}function sS(t){return typeof t=="string"||t&&typeof t=="object"}function pm(t){return typeof t=="string"||typeof t=="symbol"}const jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gm=Symbol("");var yd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yd||(yd={}));function hi(t,e){return Te(new Error,{type:t,[gm]:!0},e)}function dn(t,e){return t instanceof Error&&gm in t&&(e==null||!!(t.type&e))}const vd="[^/]+?",iS={sensitive:!1,strict:!1,start:!0,end:!0},rS=/[.+*?^${}()[\]/\\]/g;function oS(t,e){const n=Te({},iS,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let d=0;d<u.length;d++){const g=u[d];let T=40+(n.sensitive?.25:0);if(g.type===0)d||(i+="/"),i+=g.value.replace(rS,"\\$&"),T+=40;else if(g.type===1){const{value:C,repeatable:O,optional:F,regexp:B}=g;r.push({name:C,repeatable:O,optional:F});const k=B||vd;if(k!==vd){T+=10;try{new RegExp(`(${k})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${C}" (${k}): `+P.message)}}let A=O?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(A=F&&u.length<2?`(?:/${A})`:"/"+A),F&&(A+="?"),i+=A,T+=20,F&&(T+=-8),O&&(T+=-20),k===".*"&&(T+=-50)}f.push(T)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(u){const f=u.match(o),d={};if(!f)return null;for(let g=1;g<f.length;g++){const T=f[g]||"",C=r[g-1];d[C.name]=T&&C.repeatable?T.split("/"):T}return d}function c(u){let f="",d=!1;for(const g of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const T of g)if(T.type===0)f+=T.value;else if(T.type===1){const{value:C,repeatable:O,optional:F}=T,B=C in u?u[C]:"";if(Yt(B)&&!O)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const k=Yt(B)?B.join("/"):B;if(!k)if(F)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);f+=k}}return f||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function aS(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lS(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=aS(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ed(s))return 1;if(Ed(i))return-1}return i.length-s.length}function Ed(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const cS={type:0,value:""},uS=/[a-zA-Z0-9_]/;function hS(t){if(!t)return[[]];if(t==="/")return[[cS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${u}": ${T}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,u="",f="";function d(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):g();break;case 4:g(),n=s;break;case 1:c==="("?n=2:uS.test(c)?g():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),i}function fS(t,e,n){const s=oS(hS(t.path),n),i=Te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function dS(t,e){const n=[],s=new Map;e=bd({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,d,g){const T=!g,C=pS(f);C.aliasOf=g&&g.record;const O=bd(e,f),F=[C];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of A)F.push(Te({},C,{components:g?g.record.components:C.components,path:P,aliasOf:g?g.record:C}))}let B,k;for(const A of F){const{path:P}=A;if(d&&P[0]!=="/"){const D=d.record.path,M=D[D.length-1]==="/"?"":"/";A.path=d.record.path+(P&&M+P)}if(B=fS(A,d,O),g?g.alias.push(B):(k=k||B,k!==B&&k.alias.push(B),T&&f.name&&!Td(B)&&o(f.name)),C.children){const D=C.children;for(let M=0;M<D.length;M++)r(D[M],B,g&&g.children[M])}g=g||B,(B.record.components&&Object.keys(B.record.components).length||B.record.name||B.record.redirect)&&c(B)}return k?()=>{o(k)}:ir}function o(f){if(pm(f)){const d=s.get(f);d&&(s.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){let d=0;for(;d<n.length&&lS(f,n[d])>=0&&(f.record.path!==n[d].record.path||!_m(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!Td(f)&&s.set(f.record.name,f)}function u(f,d){let g,T={},C,O;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw hi(1,{location:f});O=g.record.name,T=Te(wd(d.params,g.keys.filter(k=>!k.optional).concat(g.parent?g.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),f.params&&wd(f.params,g.keys.map(k=>k.name))),C=g.stringify(T)}else if(f.path!=null)C=f.path,g=n.find(k=>k.re.test(C)),g&&(T=g.parse(C),O=g.record.name);else{if(g=d.name?s.get(d.name):n.find(k=>k.re.test(d.path)),!g)throw hi(1,{location:f,currentLocation:d});O=g.record.name,T=Te({},d.params,f.params),C=g.stringify(T)}const F=[];let B=g;for(;B;)F.unshift(B.record),B=B.parent;return{name:O,path:C,params:T,matched:F,meta:_S(F)}}return t.forEach(f=>r(f)),{addRoute:r,resolve:u,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function wd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function pS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function gS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Td(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _S(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function bd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function _m(t,e){return e.children.some(n=>n===t||_m(t,n))}function mS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(am," "),o=r.indexOf("="),l=Tr(o<0?r:r.slice(0,o)),c=o<0?null:Tr(r.slice(o+1));if(l in e){let u=e[l];Yt(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Id(t){let e="";for(let n in t){const s=t[n];if(n=FC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(s)?s.map(r=>r&&vc(r)):[s&&vc(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function yS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Yt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const vS=Symbol(""),Cd=Symbol(""),Su=Symbol(""),Ru=Symbol(""),wc=Symbol("");function $i(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function $n(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(hi(4,{from:n,to:e})):g instanceof Error?c(g):sS(g)?c(hi(2,{from:e,to:g})):(o&&s.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),l())},f=r(()=>t.call(s&&s.instances[i],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(g=>c(g))})}function Sl(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(ES(c)){const f=(c.__vccOpts||c)[e];f&&r.push($n(f,n,s,o,l,i))}else{let u=c();r.push(()=>u.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const d=SC(f)?f.default:f;o.components[l]=d;const T=(d.__vccOpts||d)[e];return T&&$n(T,n,s,o,l,i)()}))}}return r}function ES(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sd(t){const e=Xe(Su),n=Xe(Ru),s=Ot(()=>{const c=Pe(t.to);return e.resolve(c)}),i=Ot(()=>{const{matched:c}=s.value,{length:u}=c,f=c[u-1],d=n.matched;if(!f||!d.length)return-1;const g=d.findIndex(ui.bind(null,f));if(g>-1)return g;const T=Rd(c[u-2]);return u>1&&Rd(f)===T&&d[d.length-1].path!==T?d.findIndex(ui.bind(null,c[u-2])):g}),r=Ot(()=>i.value>-1&&IS(n.params,s.value.params)),o=Ot(()=>i.value>-1&&i.value===n.matched.length-1&&hm(n.params,s.value.params));function l(c={}){return bS(c)?e[Pe(t.replace)?"replace":"push"](Pe(t.to)).catch(ir):Promise.resolve()}return{route:s,href:Ot(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const wS=is({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sd,setup(t,{slots:e}){const n=ss(Sd(t)),{options:s}=Xe(Su),i=Ot(()=>({[Ad(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ad(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Tt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),TS=wS;function bS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function IS(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Yt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Rd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ad=(t,e,n)=>t??e??n,CS=is({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Xe(wc),i=Ot(()=>t.route||s.value),r=Xe(Cd,0),o=Ot(()=>{let u=Pe(r);const{matched:f}=i.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),l=Ot(()=>i.value.matched[o.value]);Ts(Cd,Ot(()=>o.value+1)),Ts(vS,l),Ts(wc,i);const c=Kt();return Js(()=>[c.value,l.value,t.name],([u,f,d],[g,T,C])=>{f&&(f.instances[d]=u,T&&T!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=T.leaveGuards),f.updateGuards.size||(f.updateGuards=T.updateGuards))),u&&f&&(!T||!ui(f,T)||!g)&&(f.enterCallbacks[d]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=i.value,f=t.name,d=l.value,g=d&&d.components[f];if(!g)return kd(n.default,{Component:g,route:u});const T=d.props[f],C=T?T===!0?u.params:typeof T=="function"?T(u):T:null,F=Tt(g,Te({},C,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return kd(n.default,{Component:F,route:u})||F}}});function kd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const mm=CS;function SS(t){const e=dS(t.routes,t),n=t.parseQuery||mS,s=t.stringifyQuery||Id,i=t.history,r=$i(),o=$i(),l=$i(),c=dr(jt);let u=jt;$s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Il.bind(null,H=>""+H),d=Il.bind(null,HC),g=Il.bind(null,Tr);function T(H,J){let Y,ee;return pm(H)?(Y=e.getRecordMatcher(H),ee=J):ee=H,e.addRoute(ee,Y)}function C(H){const J=e.getRecordMatcher(H);J&&e.removeRoute(J)}function O(){return e.getRoutes().map(H=>H.record)}function F(H){return!!e.getRecordMatcher(H)}function B(H,J){if(J=Te({},J||c.value),typeof H=="string"){const S=Cl(n,H,J.path),L=e.resolve({path:S.path},J),j=i.createHref(S.fullPath);return Te(S,L,{params:g(L.params),hash:Tr(S.hash),redirectedFrom:void 0,href:j})}let Y;if(H.path!=null)Y=Te({},H,{path:Cl(n,H.path,J.path).path});else{const S=Te({},H.params);for(const L in S)S[L]==null&&delete S[L];Y=Te({},H,{params:d(S)}),J.params=d(J.params)}const ee=e.resolve(Y,J),ue=H.hash||"";ee.params=f(g(ee.params));const be=$C(s,Te({},H,{hash:xC(ue),path:ee.path})),w=i.createHref(be);return Te({fullPath:be,hash:ue,query:s===Id?yS(H.query):H.query||{}},ee,{redirectedFrom:void 0,href:w})}function k(H){return typeof H=="string"?Cl(n,H,c.value.path):Te({},H)}function A(H,J){if(u!==H)return hi(8,{from:J,to:H})}function P(H){return b(H)}function D(H){return P(Te(k(H),{replace:!0}))}function M(H){const J=H.matched[H.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let ee=typeof Y=="function"?Y(H):Y;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=k(ee):{path:ee},ee.params={}),Te({query:H.query,hash:H.hash,params:ee.path!=null?{}:H.params},ee)}}function b(H,J){const Y=u=B(H),ee=c.value,ue=H.state,be=H.force,w=H.replace===!0,S=M(Y);if(S)return b(Te(k(S),{state:typeof S=="object"?Te({},ue,S.state):ue,force:be,replace:w}),J||Y);const L=Y;L.redirectedFrom=J;let j;return!be&&VC(s,ee,Y)&&(j=hi(16,{to:L,from:ee}),St(ee,ee,!0,!1)),(j?Promise.resolve(j):E(L,ee)).catch(U=>dn(U)?dn(U,2)?U:Ut(U):Z(U,L,ee)).then(U=>{if(U){if(dn(U,2))return b(Te({replace:w},k(U.to),{state:typeof U.to=="object"?Te({},ue,U.to.state):ue,force:be}),J||L)}else U=I(L,ee,!0,w,ue);return R(L,ee,U),U})}function _(H,J){const Y=A(H,J);return Y?Promise.reject(Y):Promise.resolve()}function y(H){const J=Rn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(H):H()}function E(H,J){let Y;const[ee,ue,be]=RS(H,J);Y=Sl(ee.reverse(),"beforeRouteLeave",H,J);for(const S of ee)S.leaveGuards.forEach(L=>{Y.push($n(L,H,J))});const w=_.bind(null,H,J);return Y.push(w),Ge(Y).then(()=>{Y=[];for(const S of r.list())Y.push($n(S,H,J));return Y.push(w),Ge(Y)}).then(()=>{Y=Sl(ue,"beforeRouteUpdate",H,J);for(const S of ue)S.updateGuards.forEach(L=>{Y.push($n(L,H,J))});return Y.push(w),Ge(Y)}).then(()=>{Y=[];for(const S of be)if(S.beforeEnter)if(Yt(S.beforeEnter))for(const L of S.beforeEnter)Y.push($n(L,H,J));else Y.push($n(S.beforeEnter,H,J));return Y.push(w),Ge(Y)}).then(()=>(H.matched.forEach(S=>S.enterCallbacks={}),Y=Sl(be,"beforeRouteEnter",H,J,y),Y.push(w),Ge(Y))).then(()=>{Y=[];for(const S of o.list())Y.push($n(S,H,J));return Y.push(w),Ge(Y)}).catch(S=>dn(S,8)?S:Promise.reject(S))}function R(H,J,Y){l.list().forEach(ee=>y(()=>ee(H,J,Y)))}function I(H,J,Y,ee,ue){const be=A(H,J);if(be)return be;const w=J===jt,S=$s?history.state:{};Y&&(ee||w?i.replace(H.fullPath,Te({scroll:w&&S&&S.scroll},ue)):i.push(H.fullPath,ue)),c.value=H,St(H,J,Y,w),Ut()}let v;function ce(){v||(v=i.listen((H,J,Y)=>{if(!Jt.listening)return;const ee=B(H),ue=M(ee);if(ue){b(Te(ue,{replace:!0}),ee).catch(ir);return}u=ee;const be=c.value;$s&&JC(_d(be.fullPath,Y.delta),La()),E(ee,be).catch(w=>dn(w,12)?w:dn(w,2)?(b(w.to,ee).then(S=>{dn(S,20)&&!Y.delta&&Y.type===br.pop&&i.go(-1,!1)}).catch(ir),Promise.reject()):(Y.delta&&i.go(-Y.delta,!1),Z(w,ee,be))).then(w=>{w=w||I(ee,be,!1),w&&(Y.delta&&!dn(w,8)?i.go(-Y.delta,!1):Y.type===br.pop&&dn(w,20)&&i.go(-1,!1)),R(ee,be,w)}).catch(ir)}))}let me=$i(),Q=$i(),oe;function Z(H,J,Y){Ut(H);const ee=Q.list();return ee.length?ee.forEach(ue=>ue(H,J,Y)):console.error(H),Promise.reject(H)}function lt(){return oe&&c.value!==jt?Promise.resolve():new Promise((H,J)=>{me.add([H,J])})}function Ut(H){return oe||(oe=!H,ce(),me.list().forEach(([J,Y])=>H?Y(H):J()),me.reset()),H}function St(H,J,Y,ee){const{scrollBehavior:ue}=t;if(!$s||!ue)return Promise.resolve();const be=!Y&&QC(_d(H.fullPath,0))||(ee||!Y)&&history.state&&history.state.scroll||null;return mi().then(()=>ue(H,J,be)).then(w=>w&&XC(w)).catch(w=>Z(w,H,J))}const Me=H=>i.go(H);let De;const Rn=new Set,Jt={currentRoute:c,listening:!0,addRoute:T,removeRoute:C,hasRoute:F,getRoutes:O,resolve:B,options:t,push:P,replace:D,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Q.add,isReady:lt,install(H){const J=this;H.component("RouterLink",TS),H.component("RouterView",mm),H.config.globalProperties.$router=J,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>Pe(c)}),$s&&!De&&c.value===jt&&(De=!0,P(i.location).catch(ue=>{}));const Y={};for(const ue in jt)Object.defineProperty(Y,ue,{get:()=>c.value[ue],enumerable:!0});H.provide(Su,J),H.provide(Ru,kr(Y)),H.provide(wc,c);const ee=H.unmount;Rn.add(H),H.unmount=function(){Rn.delete(H),Rn.size<1&&(u=jt,v&&v(),v=null,c.value=jt,De=!1,oe=!1),ee()}}};function Ge(H){return H.reduce((J,Y)=>J.then(()=>y(Y)),Promise.resolve())}return Jt}function RS(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(u=>ui(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>ui(u,c))||i.push(c))}return[n,s,i]}function AS(){return Xe(Ru)}const kS=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),Tc=(t,e)=>{const n=t.route.matched.find(i=>{var r;return((r=i.components)==null?void 0:r.default)===t.Component.type}),s=e??(n==null?void 0:n.meta.key)??(n&&kS(t.route,n));return typeof s=="function"?s(t.route):s},PS=(t,e)=>({default:()=>t?Tt(XE,t===!0?{}:t,e):e});function Au(t){return Array.isArray(t)?t:[t]}const NS="modulepreload",OS=function(t,e){return t[0]==="."?new URL(t,e).href:t},Pd={},LS=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.all(n.map(c=>{if(c=OS(c,s),c in Pd)return;Pd[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!s)for(let T=r.length-1;T>=0;T--){const C=r[T];if(C.href===c&&(!u||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":NS,u||(g.as="script",g.crossOrigin=""),g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((T,C)=>{g.addEventListener("load",T),g.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${c}`)))})}))}return i.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},bc=(...t)=>LS(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),Rl=null,Nd=[{name:"index",path:"/",meta:{},alias:[],redirect:Rl==null?void 0:Rl.redirect,component:()=>bc(()=>import("./UeH6KKp5.js"),__vite__mapDeps([0,1]),import.meta.url).then(t=>t.default||t)}],ym=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var s;return e?Tt(t,e,n):(s=n.default)==null?void 0:s.call(n)}});function Od(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""});return typeof e=="function"?e(t):e}function MS(t,e){return t===e||e===jt?!1:Od(t)!==Od(e)?!0:!t.matched.every((s,i)=>{var r,o;return s.components&&s.components.default===((o=(r=e.matched[i])==null?void 0:r.components)==null?void 0:o.default)})}function T1(t,e=!1){if(t){if(t.nodeName==="#comment"&&t.nodeValue==="[")return vm(t,[],e);if(e){const n=t.cloneNode(!0);return n.querySelectorAll("[data-island-slot]").forEach(s=>{s.innerHTML=""}),[n.outerHTML]}return[t.outerHTML]}return null}function vm(t,e=[],n=!1){if(t&&t.nodeName){if(xS(t))return e;if(!DS(t)){const s=t.cloneNode(!0);n&&s.querySelectorAll("[data-island-slot]").forEach(i=>{i.innerHTML=""}),e.push(s.outerHTML)}vm(t.nextSibling,e,n)}return e}function DS(t){return t.nodeName==="#comment"&&t.nodeValue==="["}function xS(t){return t.nodeName==="#comment"&&t.nodeValue==="]"}const FS={scrollBehavior(t,e,n){var u;const s=Ue(),i=((u=ln().options)==null?void 0:u.scrollBehaviorType)??"auto";let r=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!r&&e&&t&&o!==!1&&MS(t,e)&&(r={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Ld(t.hash),behavior:i}:!1;const l=f=>!!(f.meta.pageTransition??hc),c=l(e)&&l(t)?"page:transition:finish":"page:finish";return new Promise(f=>{s.hooks.hookOnce(c,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(r={el:t.hash,top:Ld(t.hash),behavior:i}),f(r)})})}};function Ld(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}const US={hashMode:!1,scrollBehaviorType:"auto"},vt={...US,...FS},HS=async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const s=Ue(),i=ln();if(([e,n]=yr(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=Aa({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),l=i.beforeResolve(u=>{if(l(),u===t){const f=i.afterEach(async()=>{f(),await s.runWithContext(()=>Vs(o)),window.history.pushState({},"",t.fullPath)});return!1}})},jS=async t=>{let e,n;const s=([e,n]=yr(()=>Eu(t.path)),e=await e,n(),e);if(s.redirect)return Ns(s.redirect,{acceptRelative:!0})?(window.location.href=s.redirect,!1):s.redirect},BS=[HS,jS],or={};function $S(t,e,n){const{pathname:s,search:i,hash:r}=e,o=t.indexOf("#");if(o>-1){const u=r.includes(t.slice(o))?t.slice(o).length:1;let f=r.slice(u);return f[0]!=="/"&&(f="/"+f),Ff(f,"")}const l=Ff(s,t),c=!n||xT(l,n,{trailingSlash:!0})?l:n;return c+(c.includes("?")?"":i)+r}const VS=Ct({name:"nuxt:router",enforce:"pre",async setup(t){var F,B;let e,n,s=Sa().app.baseURL;vt.hashMode&&!s.includes("#")&&(s+="#");const i=((F=vt.history)==null?void 0:F.call(vt,s))??(vt.hashMode?nS(s):dm(s)),r=((B=vt.routes)==null?void 0:B.call(vt,Nd))??Nd;let o;const l=SS({...vt,scrollBehavior:(k,A,P)=>{if(A===jt){o=P;return}if(vt.scrollBehavior){if(l.options.scrollBehavior=vt.scrollBehavior,"scrollRestoration"in window.history){const D=l.beforeEach(()=>{D(),window.history.scrollRestoration="manual"})}return vt.scrollBehavior(k,jt,o||P)}},history:i,routes:r});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(l);const c=dr(l.currentRoute.value);l.afterEach((k,A)=>{c.value=A}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=$S(s,window.location,t.payload.path),f=dr(l.currentRoute.value),d=()=>{f.value=l.currentRoute.value};t.hook("page:finish",d),l.afterEach((k,A)=>{var P,D,M,b;((D=(P=k.matched[0])==null?void 0:P.components)==null?void 0:D.default)===((b=(M=A.matched[0])==null?void 0:M.components)==null?void 0:b.default)&&d()});const g={};for(const k in f.value)Object.defineProperty(g,k,{get:()=>f.value[k]});t._route=kr(g),t._middleware=t._middleware||{global:[],named:{}};try{[e,n]=yr(()=>l.isReady()),await e,n()}catch(k){[e,n]=yr(()=>t.runWithContext(()=>Vs(k))),await e,n()}const T=u!==l.currentRoute.value.fullPath?l.resolve(u):l.currentRoute.value;d();const C=t.payload.state._layout;l.beforeEach(async(k,A)=>{var P;await t.callHook("page:loading:start"),k.meta=ss(k.meta),t.isHydrating&&C&&!ri(k.meta.layout)&&(k.meta.layout=C),t._processingMiddleware=!0;{const D=new Set([...BS,...t._middleware.global]);for(const M of k.matched){const b=M.meta.middleware;if(b)for(const _ of Au(b))D.add(_)}{const M=await t.runWithContext(()=>Eu(k.path));if(M.appMiddleware)for(const b in M.appMiddleware)M.appMiddleware[b]?D.add(b):D.delete(b)}for(const M of D){const b=typeof M=="string"?t._middleware.named[M]||await((P=or[M])==null?void 0:P.call(or).then(y=>y.default||y)):M;if(!b)throw new Error(`Unknown route middleware: '${M}'.`);const _=await t.runWithContext(()=>b(k,A));if(!t.payload.serverRendered&&t.isHydrating&&(_===!1||_ instanceof Error)){const y=_||oc({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Vs(y)),!1}if(_!==!0&&(_||_===!1))return _}}}),l.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")});const O=Ra();return l.afterEach(async(k,A,P)=>{delete t._processingMiddleware,!t.isHydrating&&O.value&&await t.runWithContext(Rb),P&&await t.callHook("page:loading:end"),k.matched.length===0&&await t.runWithContext(()=>Vs(oc({statusCode:404,fatal:!1,statusMessage:`Page not found: ${k.fullPath}`,data:{path:k.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in T&&(T.name=void 0),await l.replace({...T,force:!0}),l.options.scrollBehavior=vt.scrollBehavior}catch(k){await t.runWithContext(()=>Vs(k))}}),{provide:{router:l}}}}),Md=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),b1=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Em=t=>{const e=Ue();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Md(t)}):Md(t)},WS=Ct({name:"nuxt:payload",setup(t){ln().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const s=await Yf(e.path);s&&Object.assign(t.static.data,s.data)}),Em(()=>{var e;t.hooks.hook("link:prefetch",async n=>{Ca(n).protocol||await Yf(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(ka,1e3)})}}),KS=Ct(t=>{let e;async function n(){const s=await ka();e&&clearTimeout(e),e=setTimeout(n,1e3*60*60);try{const i=await $fetch(mu("builds/latest.json")+`?${Date.now()}`);i.id!==s.id&&t.hooks.callHook("app:manifest:update",i)}catch{}}Em(()=>{e=setTimeout(n,1e3*60*60)})}),GS=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const qS=Symbol();var Dd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Dd||(Dd={}));function zS(){const t=qc(!0),e=t.run(()=>Kt({}));let n=[],s=[];const i=Oo({install(r){i._a=r,r.provide(qS,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!GS?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}function YS(t={}){const e=t.path||window.location.pathname;let n={};try{n=jo(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ue().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const XS=Ct({name:"pinia",setup(t){const e=zS();return t.vueApp.use(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}}),JS=Ct({name:"nuxt:global-components"}),qn={},QS=Ct({name:"nuxt:prefetch",setup(t){const e=ln();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var i;const s=(i=n==null?void 0:n.meta)==null?void 0:i.layout;s&&typeof qn[s]=="function"&&await qn[s]()})}),t.hooks.hook("link:prefetch",n=>{if(Ns(n))return;const s=e.resolve(n);if(!s)return;const i=s.meta.layout;let r=Au(s.meta.middleware);r=r.filter(o=>typeof o=="string");for(const o of r)typeof or[o]=="function"&&or[o]();i&&typeof qn[i]=="function"&&qn[i]()})}});var ZS="firebase",eR="10.13.1";/**
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
 */bt(ZS,eR,"app");const tR=Ct(()=>({provide:{firebaseApp:Q_(Sa().public.vuefire.config)}}));function ku(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function wm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tm=wm,bm=new Ei("auth","Firebase",wm());/**
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
 */const Qo=new Lr("@firebase/auth");function nR(t,...e){Qo.logLevel<=Ee.WARN&&Qo.warn(`Auth (${rs}): ${t}`,...e)}function So(t,...e){Qo.logLevel<=Ee.ERROR&&Qo.error(`Auth (${rs}): ${t}`,...e)}/**
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
 */function on(t,...e){throw Nu(t,...e)}function Gt(t,...e){return Nu(t,...e)}function Pu(t,e,n){const s=Object.assign(Object.assign({},Tm()),{[e]:n});return new Ei("auth","Firebase",s).create(e,{appName:t.name})}function bs(t){return Pu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sR(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&on(t,"argument-error"),Pu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return bm.create(t,...e)}function le(t,e,...n){if(!t)throw Nu(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw So(e),new Error(e)}function In(t,e){t||_n(e)}/**
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
 */function Ic(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iR(){return xd()==="http:"||xd()==="https:"}function xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iR()||D0()||"connection"in navigator)?navigator.onLine:!0}function oR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Mr{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=wu()||G_()}get(){return rR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ou(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Im{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lR=new Mr(3e4,6e4);function Lu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bi(t,e,n,s,i={}){return Cm(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=wi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Im.fetch()(Sm(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Cm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},aR),e);try{const i=new uR(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw fo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw fo(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Pu(t,f,u);on(t,f)}}catch(i){if(i instanceof cn)throw i;on(t,"network-request-failed",{message:String(i)})}}async function cR(t,e,n,s,i={}){const r=await bi(t,e,n,s,i);return"mfaPendingCredential"in r&&on(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Sm(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ou(t.config,i):`${t.config.apiScheme}://${i}`}class uR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gt(this.auth,"network-request-failed")),lR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Gt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function hR(t,e){return bi(t,"POST","/v1/accounts:delete",e)}async function Rm(t,e){return bi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ar(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fR(t,e=!1){const n=Ti(t),s=await n.getIdToken(e),i=Mu(s);le(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ar(Al(i.auth_time)),issuedAtTime:ar(Al(i.iat)),expirationTime:ar(Al(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Al(t){return Number(t)*1e3}function Mu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ko(n);return i?JSON.parse(i):(So("Failed to decode base64 JWT payload"),null)}catch(i){return So("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fd(t){const e=Mu(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ir(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof cn&&dR(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function dR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ir(t,Rm(n,{idToken:s}));le(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Am(r.providerUserInfo):[],l=_R(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Cc(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function gR(t){const e=Ti(t);await Zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _R(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Am(t){return t.map(e=>{var{providerId:n}=e,s=ku(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function mR(t,e){const n=await Cm(t,{},async()=>{const s=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Sm(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Im.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yR(t,e){return bi(t,"POST","/v2/accounts:revokeToken",Lu(t,e))}/**
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
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Fd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await mR(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ei;return s&&(le(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(le(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(le(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
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
 */function Fn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ku(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Cc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ir(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fR(this,e)}reload(){return gR(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(bs(this.auth));const e=await this.getIdToken();return await Ir(this,hR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,l,c,u,f;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,T=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:P,isAnonymous:D,providerData:M,stsTokenManager:b}=n;le(A&&b,e,"internal-error");const _=ei.fromJSON(this.name,b);le(typeof A=="string",e,"internal-error"),Fn(d,e.name),Fn(g,e.name),le(typeof P=="boolean",e,"internal-error"),le(typeof D=="boolean",e,"internal-error"),Fn(T,e.name),Fn(C,e.name),Fn(O,e.name),Fn(F,e.name),Fn(B,e.name),Fn(k,e.name);const y=new mn({uid:A,auth:e,email:g,emailVerified:P,displayName:d,isAnonymous:D,photoURL:C,phoneNumber:T,tenantId:O,stsTokenManager:_,createdAt:B,lastLoginAt:k});return M&&Array.isArray(M)&&(y.providerData=M.map(E=>Object.assign({},E))),F&&(y._redirectEventId=F),y}static async _fromIdTokenResponse(e,n,s=!1){const i=new ei;i.updateFromServerResponse(n);const r=new mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Zo(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];le(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Am(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),l=new ei;l.updateFromIdToken(s);const c=new mn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Cc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
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
 */const Ud=new Map;function yn(t){In(t instanceof Function,"Expected a class definition");let e=Ud.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ud.set(t,e),e)}/**
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
 */class km{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}km.type="NONE";const Hd=km;/**
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
 */function Ro(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ro(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ro("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ti(yn(Hd),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||yn(Hd);const o=Ro(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){const d=mn._fromJSON(e,f);u!==r&&(l=d),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ti(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ti(r,e,s))}}/**
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
 */function jd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dm(e))return"Blackberry";if(xm(e))return"Webos";if(Nm(e))return"Safari";if((e.includes("chrome/")||Om(e))&&!e.includes("edge/"))return"Chrome";if(Mm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Pm(t=ft()){return/firefox\//i.test(t)}function Nm(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Om(t=ft()){return/crios\//i.test(t)}function Lm(t=ft()){return/iemobile/i.test(t)}function Mm(t=ft()){return/android/i.test(t)}function Dm(t=ft()){return/blackberry/i.test(t)}function xm(t=ft()){return/webos/i.test(t)}function Du(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vR(t=ft()){var e;return Du(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ER(){return x0()&&document.documentMode===10}function Fm(t=ft()){return Du(t)||Mm(t)||xm(t)||Dm(t)||/windows phone/i.test(t)||Lm(t)}/**
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
 */function Um(t,e=[]){let n;switch(t){case"Browser":n=jd(ft());break;case"Worker":n=`${jd(ft())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class wR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function TR(t,e={}){return bi(t,"GET","/v2/passwordPolicy",Lu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const bR=6;class IR{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:bR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class CR{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bd(this),this.idTokenSubscription=new Bd(this),this.beforeStateQueue=new wR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Rm(this,{idToken:e}),s=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(bs(this));const n=e?Ti(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(bs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(bs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TR(this),n=new IR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await yR(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Um(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xu(t){return Ti(t)}class Bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=W0(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SR(t){Fu=t}function RR(t){return Fu.loadJS(t)}function AR(){return Fu.gapiScript}function kR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function PR(t,e){const n=WI(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(qo(r,e??{}))return i;on(i,"already-initialized")}return n.initialize({options:e})}function NR(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class Hm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}/**
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
 */async function ni(t,e){return cR(t,"POST","/v1/accounts:signInWithIdp",Lu(t,e))}/**
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
 */const OR="http://localhost";class Cs extends Hm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ku(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Cs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ni(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:OR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
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
 */class Uu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Dr extends Uu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vn extends Dr{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
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
 */class Wn extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cs._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Wn.credential(n,s)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
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
 */class Kn extends Dr{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Gn extends Dr{constructor(){super("twitter.com")}static credential(e,n){return Cs._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Gn.credential(n,s)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
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
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await mn._fromIdTokenResponse(e,s,i),o=$d(s);return new fi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=$d(s);return new fi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function $d(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ea extends cn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ea(e,n,s,i)}}function jm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(t,r,e,s):r})}async function LR(t,e,n=!1){const s=await Ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",s)}/**
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
 */async function MR(t,e,n=!1){const{auth:s}=t;if(gn(s.app))return Promise.reject(bs(s));const i="reauthenticate";try{const r=await Ir(t,jm(s,i,e,t),n);le(r.idToken,s,"internal-error");const o=Mu(r.idToken);le(o,s,"internal-error");const{sub:l}=o;return le(t.uid===l,s,"user-mismatch"),fi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&on(s,"user-mismatch"),r}}/**
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
 */async function DR(t,e,n=!1){if(gn(t.app))return Promise.reject(bs(t));const s="signIn",i=await jm(t,s,e),r=await fi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function xR(t,e,n,s){return Ti(t).onIdTokenChanged(e,n,s)}const ta="__sak";/**
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
 */class Bm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FR=1e3,UR=10;class $m extends Bm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);ER()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UR):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},FR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$m.type="LOCAL";const HR=$m;/**
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
 */class Vm extends Bm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vm.type="SESSION";const jR=Vm;/**
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
 */function BR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ma(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,r)),c=await BR(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ma.receivers=[];/**
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
 */function Hu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $R{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const u=Hu("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(g.data.response);break;default:clearTimeout(f),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nn(){return window}function VR(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Wm(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function WR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GR(){return Wm()?self:null}/**
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
 */const Km="firebaseLocalStorageDb",qR=1,na="firebaseLocalStorage",Gm="fbase_key";class xr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Da(t,e){return t.transaction([na],e?"readwrite":"readonly").objectStore(na)}function zR(){const t=indexedDB.deleteDatabase(Km);return new xr(t).toPromise()}function Sc(){const t=indexedDB.open(Km,qR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(na,{keyPath:Gm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(na)?e(s):(s.close(),await zR(),e(await Sc()))})})}async function Vd(t,e,n){const s=Da(t,!0).put({[Gm]:e,value:n});return new xr(s).toPromise()}async function YR(t,e){const n=Da(t,!1).get(e),s=await new xr(n).toPromise();return s===void 0?null:s.value}function Wd(t,e){const n=Da(t,!0).delete(e);return new xr(n).toPromise()}const XR=800,JR=3;class qm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>JR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(GR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WR(),!this.activeServiceWorker)return;this.sender=new $R(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sc();return await Vd(e,ta,"1"),await Wd(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>YR(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Da(i,!1).getAll();return new xr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qm.type="LOCAL";const QR=qm;new Mr(3e4,6e4);/**
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
 */function zm(t,e){return e?yn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ju extends Hm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZR(t){return DR(t.auth,new ju(t),t.bypassAuthState)}function eA(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),MR(n,new ju(t),t.bypassAuthState)}async function tA(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),LR(n,new ju(t),t.bypassAuthState)}/**
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
 */class Ym{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZR;case"linkViaPopup":case"linkViaRedirect":return tA;case"reauthViaPopup":case"reauthViaRedirect":return eA;default:on(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nA=new Mr(2e3,1e4);async function I1(t,e,n){if(gn(t.app))return Promise.reject(Gt(t,"operation-not-supported-in-this-environment"));const s=xu(t);sR(t,e,Uu);const i=zm(s,n);return new ms(s,"signInViaPopup",e,i).executeNotNull()}class ms extends Ym{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nA.get())};e()}}ms.currentPopupAction=null;/**
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
 */const sA="pendingRedirect",Ao=new Map;class iA extends Ym{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ao.get(this.auth._key());if(!e){try{const s=await rA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ao.set(this.auth._key(),e)}return this.bypassAuthState||Ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rA(t,e){const n=lA(e),s=aA(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function oA(t,e){Ao.set(t._key(),e)}function aA(t){return yn(t._redirectPersistence)}function lA(t){return Ro(sA,t.config.apiKey,t.name)}async function cA(t,e,n=!1){if(gn(t.app))return Promise.reject(bs(t));const s=xu(t),i=zm(s,e),o=await new iA(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const uA=10*60*1e3;class hA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Xm(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kd(e))}saveEventToCache(e){this.cachedEventUids.add(Kd(e)),this.lastProcessedEventTime=Date.now()}}function Kd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xm(t);default:return!1}}/**
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
 */async function dA(t,e={}){return bi(t,"GET","/v1/projects",e)}/**
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
 */const pA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gA=/^https?/;async function _A(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dA(t);for(const n of e)try{if(mA(n))return}catch{}on(t,"unauthorized-domain")}function mA(t){const e=Ic(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!gA.test(n))return!1;if(pA.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const yA=new Mr(3e4,6e4);function Gd(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vA(t){return new Promise((e,n)=>{var s,i,r;function o(){Gd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gd(),n(Gt(t,"network-request-failed"))},timeout:yA.get()})}if(!((i=(s=nn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=nn().gapi)===null||r===void 0)&&r.load)o();else{const l=kR("iframefcb");return nn()[l]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},RR(`${AR()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ko=null,e})}let ko=null;function EA(t){return ko=ko||vA(t),ko}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const wA=new Mr(5e3,15e3),TA="__/auth/iframe",bA="emulator/auth/iframe",IA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SA(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ou(e,bA):`https://${t.config.authDomain}/${TA}`,s={apiKey:e.apiKey,appName:t.name,v:rs},i=CA.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${wi(s).slice(1)}`}async function RA(t){const e=await EA(t),n=nn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:SA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IA,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),l=nn().setTimeout(()=>{r(o)},wA.get());function c(){nn().clearTimeout(l),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const AA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kA=500,PA=600,NA="_blank",OA="http://localhost";class qd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LA(t,e,n,s=kA,i=PA){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},AA),{width:s.toString(),height:i.toString(),top:r,left:o}),u=ft().toLowerCase();n&&(l=Om(u)?NA:n),Pm(u)&&(e=e||OA,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[T,C])=>`${g}${T}=${C},`,"");if(vR(u)&&l!=="_self")return MA(e||"",l),new qd(null);const d=window.open(e||"",l,f);le(d,t,"popup-blocked");try{d.focus()}catch{}return new qd(d)}function MA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const DA="__/auth/handler",xA="emulator/auth/handler",FA=encodeURIComponent("fac");async function zd(t,e,n,s,i,r){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:rs,eventId:i};if(e instanceof Uu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Dr){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${FA}=${encodeURIComponent(c)}`:"";return`${UA(t)}?${wi(l).slice(1)}${u}`}function UA({config:t}){return t.emulator?Ou(t,xA):`https://${t.authDomain}/${DA}`}/**
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
 */const kl="webStorageSupport";class HA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jR,this._completeRedirectFn=cA,this._overrideRedirectResult=oA}async _openPopup(e,n,s,i){var r;In((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await zd(e,n,s,Ic(),i);return LA(e,o,Hu())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await zd(e,n,s,Ic(),i);return VR(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(In(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await RA(e),s=new hA(e);return n.register("authEvent",i=>(le(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kl,{type:kl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[kl];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_A(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fm()||Nm()||Du()}}const jA=HA;var Yd="@firebase/auth",Xd="1.7.8";/**
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
 */class BA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $A(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VA(t){rn(new zt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Um(t)},u=new CR(s,i,r,c);return NR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),rn(new zt("auth-internal",e=>{const n=xu(e.getProvider("auth").getImmediate());return(s=>new BA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(Yd,Xd,$A(t)),bt(Yd,Xd,"esm2017")}/**
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
 */const WA=5*60;M0("authIdTokenMaxAge");function KA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}SR({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Gt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",KA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VA("Browser");/**
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
 */const GA=new Map,qA={activated:!1,tokenObservers:[]};function Xt(t){return GA.get(t)||Object.assign({},qA)}const Jd={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class zA{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new vr,this.pending.promise.catch(n=>{}),await YA(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new vr,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function YA(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const XA={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},sa=new Ei("appCheck","AppCheck",XA);function Jm(t){if(!Xt(t).activated)throw sa.create("use-before-activation",{appName:t.name})}/**
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
 */const JA="firebase-app-check-database",QA=1,Rc="firebase-app-check-store";let po=null;function ZA(){return po||(po=new Promise((t,e)=>{try{const n=indexedDB.open(JA,QA);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(sa.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Rc,{keyPath:"compositeKey"})}}}catch(n){e(sa.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),po)}function ek(t,e){return tk(nk(t),e)}async function tk(t,e){const s=(await ZA()).transaction(Rc,"readwrite"),r=s.objectStore(Rc).put({compositeKey:t,value:e});return new Promise((o,l)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var u;l(sa.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function nk(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Ac=new Lr("@firebase/app-check");function Qd(t,e){return z_()?ek(t,e).catch(n=>{Ac.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const sk={error:"UNKNOWN_ERROR"};function ik(t){return Pa.encodeString(JSON.stringify(t),!1)}async function kc(t,e=!1){const n=t.app;Jm(n);const s=Xt(n);let i=s.token,r;if(i&&!Yi(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(Yi(c)?i=c:await Qd(n,void 0))}if(!e&&i&&Yi(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Xt(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Ac.warn(c.message):Ac.error(c),r=c}let l;return i?r?Yi(i)?l={token:i.token,internalError:r}:l=ep(r):(l={token:i.token},s.token=i,await Qd(n,i)):l=ep(r),o&&lk(n,l),l}async function rk(t){const e=t.app;Jm(e);const{provider:n}=Xt(e);{const{token:s}=await n.getToken();return{token:s}}}function ok(t,e,n,s){const{app:i}=t,r=Xt(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Yi(r.token)){const l=r.token;Promise.resolve().then(()=>{n({token:l.token}),Zd(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Zd(t))}function Qm(t,e){const n=Xt(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Zd(t){const{app:e}=t,n=Xt(e);let s=n.tokenRefresher;s||(s=ak(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function ak(t){const{app:e}=t;return new zA(async()=>{const n=Xt(e);let s;if(n.token?s=await kc(t,!0):s=await kc(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Xt(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Jd.RETRIAL_MIN_WAIT,Jd.RETRIAL_MAX_WAIT)}function lk(t,e){const n=Xt(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Yi(t){return t.expireTimeMillis-Date.now()>0}function ep(t){return{token:ik(sk),error:t}}/**
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
 */class ck{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Xt(this.app);for(const n of e)Qm(this.app,n.next);return Promise.resolve()}}function uk(t,e){return new ck(t,e)}function hk(t){return{getToken:e=>kc(t,e),getLimitedUseToken:()=>rk(t),addTokenListener:e=>ok(t,"INTERNAL",e),removeTokenListener:e=>Qm(t.app,e)}}const fk="@firebase/app-check",dk="0.8.7",pk="app-check",tp="app-check-internal";function gk(){rn(new zt(pk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return uk(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(tp).initialize()})),rn(new zt(tp,t=>{const e=t.getProvider("app-check").getImmediate();return hk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),bt(fk,dk)}gk();const Zm=Symbol("firebaseApp");function _k(t){return yi()&&Xe(Zm,null)||qI(t)}const mk=typeof window<"u",go=new WeakMap;function yk(t,e){if(!go.has(t)){const n=qc(!0);go.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),go.delete(t)}}return go.get(t)}const vk=new WeakMap,_o=new WeakMap;function Ek(t){const e=_k(t);if(!_o.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{_o.set(e,r),n(r.value)}];_o.set(e,i)}return _o.get(e)}function wk(t,e){xR(e,n=>{const s=Ek();t.value=n,Array.isArray(s)&&s[1](t)})}var np={};const sp="@firebase/database",ip="1.0.7";/**
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
 */let ey="";function Tk(t){ey=t}/**
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
 */class bk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Er(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Ik{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ty=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bk(e)}}catch{}return new Ik},ys=ty("localStorage"),Ck=ty("sessionStorage");/**
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
 */const si=new Lr("@firebase/database"),Sk=function(){let t=1;return function(){return t++}}(),ny=function(t){const e=z0(t),n=new V0;n.update(e);const s=n.digest();return Pa.encodeByteArray(s)},Fr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fr.apply(null,s):typeof s=="object"?e+=Ze(s):e+=s,e+=" "}return e};let lr=null,rp=!0;const Rk=function(t,e){z(!e,"Can't turn on custom loggers persistently."),si.logLevel=Ee.VERBOSE,lr=si.log.bind(si)},nt=function(...t){if(rp===!0&&(rp=!1,lr===null&&Ck.get("logging_enabled")===!0&&Rk()),lr){const e=Fr.apply(null,t);lr(e)}},Ur=function(t){return function(...e){nt(t,...e)}},Pc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fr(...t);si.error(e)},Ss=function(...t){const e=`FIREBASE FATAL ERROR: ${Fr(...t)}`;throw si.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+Fr(...t);si.warn(e)},Ak=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},di="[MIN_NAME]",Rs="[MAX_NAME]",Ii=function(t,e){if(t===e)return 0;if(t===di||e===Rs)return-1;if(e===di||t===Rs)return 1;{const n=op(t),s=op(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Pk=function(t,e){return t===e?0:t<e?-1:1},Vi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ze(e))},Bu=function(t){if(typeof t!="object"||t===null)return Ze(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ze(e[s]),n+=":",n+=Bu(t[e[s]]);return n+="}",n},iy=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ft(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ry=function(t){z(!sy(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const f=u.join("");let d="";for(c=0;c<64;c+=8){let g=parseInt(f.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),d=d+g}return d.toLowerCase()},Nk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ok=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Lk=new RegExp("^-?(0*)\\d{1,10}$"),Mk=-2147483648,Dk=2147483647,op=function(t){if(Lk.test(t)){const e=Number(t);if(e>=Mk&&e<=Dk)return e}return null},Hr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},xk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},cr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Fk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Uk{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}/**
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
 */const $u="5",oy="v",ay="s",ly="r",cy="f",uy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hy="ls",fy="p",Nc="ac",dy="websocket",py="long_polling";/**
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
 */class Hk{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ys.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ys.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function jk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function gy(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let s;if(e===dy)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===py)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jk(t)&&(n.ns=t.namespace);const i=[];return Ft(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Bk{constructor(){this.counters_={}}incrementCounter(e,n=1){Sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return A0(this.counters_)}}/**
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
 */const Pl={},Nl={};function Vu(t){const e=t.toString();return Pl[e]||(Pl[e]=new Bk),Pl[e]}function $k(t,e){const n=t.toString();return Nl[n]||(Nl[n]=e()),Nl[n]}/**
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
 */class Vk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Hr(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ap="start",Wk="close",Kk="pLPCommand",Gk="pRTLPCB",_y="id",my="pw",yy="ser",qk="cb",zk="seg",Yk="ts",Xk="d",Jk="dframe",vy=1870,Ey=30,Qk=vy-Ey,Zk=25e3,eP=3e4;class Ws{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ur(e),this.stats_=Vu(n),this.urlFn=c=>(this.appCheckToken&&(c[Nc]=this.appCheckToken),gy(n,py,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Vk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eP)),kk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wu((...r)=>{const[o,l,c,u,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ap)this.id=l,this.password=c;else if(o===Wk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ap]="t",s[yy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[qk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[oy]=$u,this.transportSessionId&&(s[ay]=this.transportSessionId),this.lastSessionId&&(s[hy]=this.lastSessionId),this.applicationId&&(s[fy]=this.applicationId),this.appCheckToken&&(s[Nc]=this.appCheckToken),typeof location<"u"&&location.hostname&&uy.test(location.hostname)&&(s[ly]=cy);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ws.forceAllow_=!0}static forceDisallow(){Ws.forceDisallow_=!0}static isAvailable(){return Ws.forceAllow_?!0:!Ws.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Nk()&&!Ok()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=B_(n),i=iy(s,Qk);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Jk]="t",s[_y]=e,s[my]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wu{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Sk(),window[Kk+this.uniqueCallbackIdentifier]=e,window[Gk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){nt("frame writing exception"),l.stack&&nt(l.stack),nt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_y]=this.myID,e[my]=this.myPW,e[yy]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ey+s.length<=vy;){const o=this.pendingSegs.shift();s=s+"&"+zk+i+"="+o.seg+"&"+Yk+i+"="+o.ts+"&"+Xk+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Zk)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const tP=16384,nP=45e3;let ia=null;typeof MozWebSocket<"u"?ia=MozWebSocket:typeof WebSocket<"u"&&(ia=WebSocket);class $t{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ur(this.connId),this.stats_=Vu(n),this.connURL=$t.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[oy]=$u,typeof location<"u"&&location.hostname&&uy.test(location.hostname)&&(o[ly]=cy),n&&(o[ay]=n),s&&(o[hy]=s),i&&(o[Nc]=i),r&&(o[fy]=r),gy(e,dy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ys.set("previous_websocket_failure",!0);try{let s;q_(),this.mySock=new ia(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ia!==null&&!$t.forceDisallow_}static previouslyFailed(){return ys.isInMemoryStorage||ys.get("previous_websocket_failure")===!0}markConnectionHealthy(){ys.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Er(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=iy(n,tP);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
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
 */class Cr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ws,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=$t&&$t.isAvailable();let s=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$t];else{const i=this.transports_=[];for(const r of Cr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Cr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Cr.globalTransportInitialized_=!1;/**
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
 */const sP=6e4,iP=5e3,rP=10*1024,oP=100*1024,Ol="t",lp="d",aP="s",cp="r",lP="e",up="o",hp="a",fp="n",dp="p",cP="h";class uP{constructor(e,n,s,i,r,o,l,c,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ur("c:"+this.id+":"),this.transportManager_=new Cr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=cr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ol in e){const n=e[Ol];n===hp?this.upgradeIfSecondaryHealthy_():n===cp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===up&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Vi("t",e),s=Vi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Vi("t",e),s=Vi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Vi(Ol,e);if(lp in e){const s=e[lp];if(n===cP){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===fp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===aP?this.onConnectionShutdown_(s):n===cp?this.onReset_(s):n===lP?Pc("Server Error: "+s):n===up?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$u!==s&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),cr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):cr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ys.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class wy{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Ty{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ra extends Ty{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ra}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const pp=32,gp=768;class Le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ie(){return new Le("")}function de(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function es(t){return t.pieces_.length-t.pieceNum_}function Oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Le(t.pieces_,e)}function by(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function hP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Iy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Cy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Le(e,0)}function Ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Le)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Le(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function Dt(t,e){const n=de(t),s=de(e);if(n===null)return e;if(n===s)return Dt(Oe(t),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Sy(t,e){if(es(t)!==es(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Vt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(es(t)>es(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class fP{constructor(e,n){this.errorPrefix_=n,this.parts_=Iy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Na(this.parts_[s]);Ry(this)}}function dP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Na(e),Ry(t)}function pP(t){const e=t.parts_.pop();t.byteLength_-=Na(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ry(t){if(t.byteLength_>gp)throw new Error(t.errorPrefix_+"has a key path longer than "+gp+" bytes ("+t.byteLength_+").");if(t.parts_.length>pp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pp+") or object contains a cycle "+ps(t))}function ps(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ku extends Ty{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ku}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Wi=1e3,gP=60*5*1e3,_p=30*1e3,_P=1.3,mP=3e4,yP="server_kill",mp=3;class wn extends wy{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=wn.nextPersistentConnectionId_++,this.log_=Ur("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wi,this.maxReconnectDelay_=gP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!q_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ku.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ra.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ze(r)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new vr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,u=l.s;wn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Sn(e,"w")){const s=ci(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_p)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=B0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Pc("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mP&&(this.reconnectDelay_=Wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_P)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+wn.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},u=function(d){z(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?nt("getToken() completed but was canceled"):(nt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=g&&g.token,l=new uP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,T=>{It(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(yP)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&It(d),c())}}}interrupt(e){nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fc(this.interruptReasons_)&&(this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Bu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Le(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mp&&(this.reconnectDelay_=_p,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ey.replace(/\./g,"-")]=1,wu()?e["framework.cordova"]=1:G_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ra.getInstance().currentlyOnline();return fc(this.interruptReasons_)&&e}}wn.nextPersistentConnectionId_=0;wn.nextConnectionId_=0;/**
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
 */class pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new pe(e,n)}}/**
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
 */class xa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new pe(di,e),i=new pe(di,n);return this.compare(s,i)!==0}minPost(){return pe.MIN}}/**
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
 */let mo;class Ay extends xa{static get __EMPTY_NODE(){return mo}static set __EMPTY_NODE(e){mo=e}compare(e,n){return Ii(e.name,n.name)}isDefinedOn(e){throw vi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(Rs,mo)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,mo)}toString(){return".key"}}const ii=new Ay;/**
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
 */class yo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ze{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ze.RED,this.left=i??_t.EMPTY_NODE,this.right=r??_t.EMPTY_NODE}copy(e,n,s,i,r){return new ze(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ze.RED=!0;ze.BLACK=!1;class vP{copy(e,n,s,i,r){return this}insert(e,n,s){return new ze(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ze.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ze.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yo(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new vP;/**
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
 */function EP(t,e){return Ii(t.name,e.name)}function Gu(t,e){return Ii(t,e)}/**
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
 */let Oc;function wP(t){Oc=t}const ky=function(t){return typeof t=="number"?"number:"+ry(t):"string:"+t},Py=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Sn(e,".sv"),"Priority must be a string or number.")}else z(t===Oc||t.isEmpty(),"priority of unexpected type.");z(t===Oc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let yp;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Py(this.priorityNode_)}static set __childrenNodeConstructor(e){yp=e}static get __childrenNodeConstructor(){return yp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:de(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=de(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(z(s!==".priority"||es(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ky(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ry(this.value_):e+=this.value_,this.lazyHash_=ny(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),r=qe.VALUE_TYPE_ORDER.indexOf(s);return z(i>=0,"Unknown leaf type: "+n),z(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ny,Oy;function TP(t){Ny=t}function bP(t){Oy=t}class IP extends xa{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ii(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(Rs,new qe("[PRIORITY-POST]",Oy))}makePost(e,n){const s=Ny(e);return new pe(n,new qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const ot=new IP;/**
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
 */const CP=Math.log(2);class SP{constructor(e){const n=r=>parseInt(Math.log(r)/CP,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const oa=function(t,e,n,s){t.sort(e);const i=function(c,u){const f=u-c;let d,g;if(f===0)return null;if(f===1)return d=t[c],g=n?n(d):d,new ze(g,d.node,ze.BLACK,null,null);{const T=parseInt(f/2,10)+c,C=i(c,T),O=i(T+1,u);return d=t[T],g=n?n(d):d,new ze(g,d.node,ze.BLACK,C,O)}},r=function(c){let u=null,f=null,d=t.length;const g=function(C,O){const F=d-C,B=d;d-=C;const k=i(F+1,B),A=t[F],P=n?n(A):A;T(new ze(P,A.node,O,null,k))},T=function(C){u?(u.left=C,u=C):(f=C,u=C)};for(let C=0;C<c.count;++C){const O=c.nextBitIsOne(),F=Math.pow(2,c.count-(C+1));O?g(F,ze.BLACK):(g(F,ze.BLACK),g(F,ze.RED))}return f},o=new SP(t.length),l=r(o);return new _t(s||e,l)};/**
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
 */let Ll;const Bs={};class vn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(Bs&&ot,"ChildrenNode.ts has not been loaded"),Ll=Ll||new vn({".priority":Bs},{".priority":ot}),Ll}get(e){const n=ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return Sn(this.indexSet_,e.toString())}addIndex(e,n){z(e!==ii,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(pe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=oa(s,e.getCompare()):l=Bs;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const f=Object.assign({},this.indexes_);return f[c]=l,new vn(f,u)}addToIndexes(e,n){const s=Go(this.indexes_,(i,r)=>{const o=ci(this.indexSet_,r);if(z(o,"Missing index implementation for "+r),i===Bs)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(pe.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),oa(l,o.getCompare())}else return Bs;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new pe(e.name,l))),c.insert(e,e.node)}});return new vn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Go(this.indexes_,i=>{if(i===Bs)return i;{const r=n.get(e.name);return r?i.remove(new pe(e.name,r)):i}});return new vn(s,this.indexSet_)}}/**
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
 */let Ki;class we{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Py(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ki||(Ki=new we(new _t(Gu),null,vn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ki}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ki:n}}getChild(e){const n=de(e);return n===null?this:this.getImmediateChild(n).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new pe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ki:this.priorityNode_;return new we(i,o,r)}}updateChild(e,n){const s=de(e);if(s===null)return n;{z(de(e)!==".priority"||es(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Oe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ot,(o,l)=>{n[o]=l.val(e),s++,r&&we.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ky(this.getPriority().val())+":"),this.forEachChild(ot,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ny(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new pe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===jr?-1:0}withIndex(e){if(e===ii||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ii||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ot),i=n.getIterator(ot);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ii?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class RP extends we{constructor(){super(new _t(Gu),we.EMPTY_NODE,vn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const jr=new RP;Object.defineProperties(pe,{MIN:{value:new pe(di,we.EMPTY_NODE)},MAX:{value:new pe(Rs,jr)}});Ay.__EMPTY_NODE=we.EMPTY_NODE;qe.__childrenNodeConstructor=we;wP(jr);bP(jr);/**
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
 */const AP=!0;function st(t,e=null){if(t===null)return we.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,st(e))}if(!(t instanceof Array)&&AP){const n=[];let s=!1;if(Ft(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=st(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new pe(o,c)))}}),n.length===0)return we.EMPTY_NODE;const r=oa(n,EP,o=>o.name,Gu);if(s){const o=oa(n,ot.getCompare());return new we(r,st(e),new vn({".priority":o},{".priority":ot}))}else return new we(r,st(e),vn.Default)}else{let n=we.EMPTY_NODE;return Ft(t,(s,i)=>{if(Sn(t,s)&&s.substring(0,1)!=="."){const r=st(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(st(e))}}TP(st);/**
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
 */class kP extends xa{constructor(e){super(),this.indexPath_=e,z(!he(e)&&de(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ii(e.name,n.name):r}makePost(e,n){const s=st(e),i=we.EMPTY_NODE.updateChild(this.indexPath_,s);return new pe(n,i)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,jr);return new pe(Rs,e)}toString(){return Iy(this.indexPath_,0).join("/")}}/**
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
 */class PP extends xa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ii(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const s=st(e);return new pe(n,s)}toString(){return".value"}}const NP=new PP;/**
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
 */function OP(t){return{type:"value",snapshotNode:t}}function LP(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function MP(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function DP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class qu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ot}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:di}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ot}copy(){const e=new qu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ep(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ot?n="$priority":t.index_===NP?n="$value":t.index_===ii?n="$key":(z(t.index_ instanceof kP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ze(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ze(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ze(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ze(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ot&&(e.i=t.index_.toString()),e}/**
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
 */class aa extends wy{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ur("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=aa.getListenId_(e,s),l={};this.listens_[o]=l;const c=Ep(e._queryParams);this.restRequest_(r+".json",c,(u,f)=>{let d=f;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(r,d,!1,s),ci(this.listens_,o)===l){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",i(g,null)}})}unlisten(e,n){const s=aa.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ep(e._queryParams),s=e._path.toString(),i=new vr;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Er(l.responseText)}catch{It("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class xP{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function la(){return{value:null,children:new Map}}function Ly(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=de(e);t.children.has(s)||t.children.set(s,la());const i=t.children.get(s);e=Oe(e),Ly(i,e,n)}}function Lc(t,e,n){t.value!==null?n(e,t.value):FP(t,(s,i)=>{const r=new Le(e.toString()+"/"+s);Lc(i,r,n)})}function FP(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class UP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ft(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Tp=10*1e3,HP=30*1e3,jP=5*60*1e3;class BP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new UP(e);const s=Tp+(HP-Tp)*Math.random();cr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ft(e,(i,r)=>{r>0&&Sn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),cr(this.reportStats_.bind(this),Math.floor(Math.random()*2*jP))}}/**
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
 */var tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function My(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Dy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ca{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=tn.ACK_USER_WRITE,this.source=My()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Le(e));return new ca(Ie(),n,this.revert)}}else return z(de(this.path)===e,"operationForChild called for unrelated child."),new ca(Oe(this.path),this.affectedTree,this.revert)}}/**
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
 */class As{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=tn.OVERWRITE}operationForChild(e){return he(this.path)?new As(this.source,Ie(),this.snap.getImmediateChild(e)):new As(this.source,Oe(this.path),this.snap)}}/**
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
 */class Sr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=tn.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Le(e));return n.isEmpty()?null:n.value?new As(this.source,Ie(),n.value):new Sr(this.source,Ie(),n)}else return z(de(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Sr(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class zu{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=de(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function $P(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(DP(o.childName,o.snapshotNode))}),Gi(t,i,"child_removed",e,s,n),Gi(t,i,"child_added",e,s,n),Gi(t,i,"child_moved",r,s,n),Gi(t,i,"child_changed",e,s,n),Gi(t,i,"value",e,s,n),i}function Gi(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>WP(t,l,c)),o.forEach(l=>{const c=VP(t,l,r);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function VP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function WP(t,e,n){if(e.childName==null||n.childName==null)throw vi("Should only compare child_ events.");const s=new pe(e.childName,e.snapshotNode),i=new pe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Fy(t,e){return{eventCache:t,serverCache:e}}function ur(t,e,n,s){return Fy(new zu(e,n,s),t.serverCache)}function Uy(t,e,n,s){return Fy(t.eventCache,new zu(e,n,s))}function Mc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ks(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ml;const KP=()=>(Ml||(Ml=new _t(Pk)),Ml);class ke{constructor(e,n=KP()){this.value=e,this.children=n}static fromObject(e){let n=new ke(null);return Ft(e,(s,i)=>{n=n.set(new Le(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ie(),value:this.value};if(he(e))return null;{const s=de(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Oe(e),n);return r!=null?{path:Ye(new Le(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=de(e),s=this.children.get(n);return s!==null?s.subtree(Oe(e)):new ke(null)}}set(e,n){if(he(e))return new ke(n,this.children);{const s=de(e),r=(this.children.get(s)||new ke(null)).set(Oe(e),n),o=this.children.insert(s,r);return new ke(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=de(e),s=this.children.get(n);if(s){const i=s.remove(Oe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ke(null):new ke(this.value,r)}else return this}}get(e){if(he(e))return this.value;{const n=de(e),s=this.children.get(n);return s?s.get(Oe(e)):null}}setTree(e,n){if(he(e))return n;{const s=de(e),r=(this.children.get(s)||new ke(null)).setTree(Oe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ke(this.value,o)}}fold(e){return this.fold_(Ie(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ie(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(he(e))return null;{const r=de(e),o=this.children.get(r);return o?o.findOnPath_(Oe(e),Ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ie(),n)}foreachOnPath_(e,n,s){if(he(e))return this;{this.value&&s(n,this.value);const i=de(e),r=this.children.get(i);return r?r.foreachOnPath_(Oe(e),Ye(n,i),s):new ke(null)}}foreach(e){this.foreach_(Ie(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new ke(null))}}function hr(t,e,n){if(he(e))return new qt(new ke(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Dt(i,e);return r=r.updateChild(o,n),new qt(t.writeTree_.set(i,r))}else{const i=new ke(n),r=t.writeTree_.setTree(e,i);return new qt(r)}}}function bp(t,e,n){let s=t;return Ft(n,(i,r)=>{s=hr(s,Ye(e,i),r)}),s}function Ip(t,e){if(he(e))return qt.empty();{const n=t.writeTree_.setTree(e,new ke(null));return new qt(n)}}function Dc(t,e){return Os(t,e)!=null}function Os(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Dt(n.path,e)):null}function Cp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ot,(s,i)=>{e.push(new pe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new pe(s,i.value))}),e}function Qn(t,e){if(he(e))return t;{const n=Os(t,e);return n!=null?new qt(new ke(n)):new qt(t.writeTree_.subtree(e))}}function xc(t){return t.writeTree_.isEmpty()}function pi(t,e){return Hy(Ie(),t.writeTree_,e)}function Hy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(z(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Hy(Ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ye(t,".priority"),s)),n}}/**
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
 */function jy(t,e){return Ky(e,t)}function GP(t,e,n,s,i){z(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=hr(t.visibleWrites,e,n)),t.lastWriteId=s}function qP(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function zP(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&YP(l,s.path)?i=!1:Vt(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return XP(t),!0;if(s.snap)t.visibleWrites=Ip(t.visibleWrites,s.path);else{const l=s.children;Ft(l,c=>{t.visibleWrites=Ip(t.visibleWrites,Ye(s.path,c))})}return!0}else return!1}function YP(t,e){if(t.snap)return Vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Vt(Ye(t.path,n),e))return!0;return!1}function XP(t){t.visibleWrites=By(t.allWrites,JP,Ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function JP(t){return t.visible}function By(t,e,n){let s=qt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Vt(n,o)?(l=Dt(n,o),s=hr(s,l,r.snap)):Vt(o,n)&&(l=Dt(o,n),s=hr(s,Ie(),r.snap.getChild(l)));else if(r.children){if(Vt(n,o))l=Dt(n,o),s=bp(s,l,r.children);else if(Vt(o,n))if(l=Dt(o,n),he(l))s=bp(s,Ie(),r.children);else{const c=ci(r.children,de(l));if(c){const u=c.getChild(Oe(l));s=hr(s,Ie(),u)}}}else throw vi("WriteRecord should have .snap or .children")}}return s}function $y(t,e,n,s,i){if(!s&&!i){const r=Os(t.visibleWrites,e);if(r!=null)return r;{const o=Qn(t.visibleWrites,e);if(xc(o))return n;if(n==null&&!Dc(o,Ie()))return null;{const l=n||we.EMPTY_NODE;return pi(o,l)}}}else{const r=Qn(t.visibleWrites,e);if(!i&&xc(r))return n;if(!i&&n==null&&!Dc(r,Ie()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(Vt(u.path,e)||Vt(e,u.path))},l=By(t.allWrites,o,e),c=n||we.EMPTY_NODE;return pi(l,c)}}}function QP(t,e,n){let s=we.EMPTY_NODE;const i=Os(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ot,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Qn(t.visibleWrites,e);return n.forEachChild(ot,(o,l)=>{const c=pi(Qn(r,new Le(o)),l);s=s.updateImmediateChild(o,c)}),Cp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Qn(t.visibleWrites,e);return Cp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ZP(t,e,n,s,i){z(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ye(e,n);if(Dc(t.visibleWrites,r))return null;{const o=Qn(t.visibleWrites,r);return xc(o)?i.getChild(n):pi(o,i.getChild(n))}}function eN(t,e,n,s){const i=Ye(e,n),r=Os(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Qn(t.visibleWrites,i);return pi(o,s.getNode().getImmediateChild(n))}else return null}function tN(t,e){return Os(t.visibleWrites,e)}function nN(t,e,n,s,i,r,o){let l;const c=Qn(t.visibleWrites,e),u=Os(c,Ie());if(u!=null)l=u;else if(n!=null)l=pi(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],d=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let T=g.getNext();for(;T&&f.length<i;)d(T,s)!==0&&f.push(T),T=g.getNext();return f}else return[]}function sN(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function Fc(t,e,n,s){return $y(t.writeTree,t.treePath,e,n,s)}function Vy(t,e){return QP(t.writeTree,t.treePath,e)}function Sp(t,e,n,s){return ZP(t.writeTree,t.treePath,e,n,s)}function ua(t,e){return tN(t.writeTree,Ye(t.treePath,e))}function iN(t,e,n,s,i,r){return nN(t.writeTree,t.treePath,e,n,s,i,r)}function Yu(t,e,n){return eN(t.writeTree,t.treePath,e,n)}function Wy(t,e){return Ky(Ye(t.treePath,e),t.writeTree)}function Ky(t,e){return{treePath:t,writeTree:e}}/**
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
 */class rN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,vp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,MP(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,LP(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,vp(s,e.snapshotNode,i.oldSnap));else throw vi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class oN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Gy=new oN;class Xu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new zu(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ks(this.viewCache_),r=iN(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function aN(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lN(t,e,n,s,i){const r=new rN;let o,l;if(n.type===tn.OVERWRITE){const u=n;u.source.fromUser?o=Uc(t,e,u.path,u.snap,s,i,r):(z(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!he(u.path),o=ha(t,e,u.path,u.snap,s,i,l,r))}else if(n.type===tn.MERGE){const u=n;u.source.fromUser?o=uN(t,e,u.path,u.children,s,i,r):(z(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Hc(t,e,u.path,u.children,s,i,l,r))}else if(n.type===tn.ACK_USER_WRITE){const u=n;u.revert?o=dN(t,e,u.path,s,i,r):o=hN(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===tn.LISTEN_COMPLETE)o=fN(t,e,n.path,s,r);else throw vi("Unknown operation type: "+n.type);const c=r.getChanges();return cN(e,o,c),{viewCache:o,changes:c}}function cN(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Mc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(OP(Mc(e)))}}function qy(t,e,n,s,i,r){const o=e.eventCache;if(ua(s,n)!=null)return e;{let l,c;if(he(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ks(e),f=u instanceof we?u:we.EMPTY_NODE,d=Vy(s,f);l=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const u=Fc(s,ks(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=de(n);if(u===".priority"){z(es(n)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const d=Sp(s,n,f,c);d!=null?l=t.filter.updatePriority(f,d):l=o.getNode()}else{const f=Oe(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=Sp(s,n,o.getNode(),c);g!=null?d=o.getNode().getImmediateChild(u).updateChild(f,g):d=o.getNode().getImmediateChild(u)}else d=Yu(s,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,f,i,r):l=o.getNode()}}return ur(e,l,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function ha(t,e,n,s,i,r,o,l){const c=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(he(n))u=f.updateFullNode(c.getNode(),s,null);else if(f.filtersNodes()&&!c.isFiltered()){const T=c.getNode().updateChild(n,s);u=f.updateFullNode(c.getNode(),T,null)}else{const T=de(n);if(!c.isCompleteForPath(n)&&es(n)>1)return e;const C=Oe(n),F=c.getNode().getImmediateChild(T).updateChild(C,s);T===".priority"?u=f.updatePriority(c.getNode(),F):u=f.updateChild(c.getNode(),T,F,C,Gy,null)}const d=Uy(e,u,c.isFullyInitialized()||he(n),f.filtersNodes()),g=new Xu(i,d,r);return qy(t,d,n,i,g,l)}function Uc(t,e,n,s,i,r,o){const l=e.eventCache;let c,u;const f=new Xu(i,e,r);if(he(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ur(e,u,!0,t.filter.filtersNodes());else{const d=de(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=ur(e,u,l.isFullyInitialized(),l.isFiltered());else{const g=Oe(n),T=l.getNode().getImmediateChild(d);let C;if(he(g))C=s;else{const O=f.getCompleteChild(d);O!=null?by(g)===".priority"&&O.getChild(Cy(g)).isEmpty()?C=O:C=O.updateChild(g,s):C=we.EMPTY_NODE}if(T.equals(C))c=e;else{const O=t.filter.updateChild(l.getNode(),d,C,g,f,o);c=ur(e,O,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Rp(t,e){return t.eventCache.isCompleteForChild(e)}function uN(t,e,n,s,i,r,o){let l=e;return s.foreach((c,u)=>{const f=Ye(n,c);Rp(e,de(f))&&(l=Uc(t,l,f,u,i,r,o))}),s.foreach((c,u)=>{const f=Ye(n,c);Rp(e,de(f))||(l=Uc(t,l,f,u,i,r,o))}),l}function Ap(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Hc(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;he(n)?u=s:u=new ke(null).setTree(n,s);const f=e.serverCache.getNode();return u.children.inorderTraversal((d,g)=>{if(f.hasChild(d)){const T=e.serverCache.getNode().getImmediateChild(d),C=Ap(t,T,g);c=ha(t,c,new Le(d),C,i,r,o,l)}}),u.children.inorderTraversal((d,g)=>{const T=!e.serverCache.isCompleteForChild(d)&&g.value===null;if(!f.hasChild(d)&&!T){const C=e.serverCache.getNode().getImmediateChild(d),O=Ap(t,C,g);c=ha(t,c,new Le(d),O,i,r,o,l)}}),c}function hN(t,e,n,s,i,r,o){if(ua(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(he(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ha(t,e,n,c.getNode().getChild(n),i,r,l,o);if(he(n)){let u=new ke(null);return c.getNode().forEachChild(ii,(f,d)=>{u=u.set(new Le(f),d)}),Hc(t,e,n,u,i,r,l,o)}else return e}else{let u=new ke(null);return s.foreach((f,d)=>{const g=Ye(n,f);c.isCompleteForPath(g)&&(u=u.set(f,c.getNode().getChild(g)))}),Hc(t,e,n,u,i,r,l,o)}}function fN(t,e,n,s,i){const r=e.serverCache,o=Uy(e,r.getNode(),r.isFullyInitialized()||he(n),r.isFiltered());return qy(t,o,n,s,Gy,i)}function dN(t,e,n,s,i,r){let o;if(ua(s,n)!=null)return e;{const l=new Xu(s,e,i),c=e.eventCache.getNode();let u;if(he(n)||de(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Fc(s,ks(e));else{const d=e.serverCache.getNode();z(d instanceof we,"serverChildren would be complete if leaf node"),f=Vy(s,d)}f=f,u=t.filter.updateFullNode(c,f,r)}else{const f=de(n);let d=Yu(s,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=c.getImmediateChild(f)),d!=null?u=t.filter.updateChild(c,f,d,Oe(n),l,r):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(c,f,we.EMPTY_NODE,Oe(n),l,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fc(s,ks(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||ua(s,Ie())!=null,ur(e,u,o,t.filter.filtersNodes())}}function pN(t,e){const n=ks(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(de(e)).isEmpty())?n.getChild(e):null}function kp(t,e,n,s){e.type===tn.MERGE&&e.source.queryId!==null&&(z(ks(t.viewCache_),"We should always have a full cache before handling merges"),z(Mc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=lN(t.processor_,i,e,n,s);return aN(t.processor_,r.viewCache),z(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,gN(t,r.changes,r.viewCache.eventCache.getNode())}function gN(t,e,n,s){const i=t.eventRegistrations_;return $P(t.eventGenerator_,e,n,i)}/**
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
 */let Pp;function _N(t){z(!Pp,"__referenceConstructor has already been defined"),Pp=t}function Ju(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return z(r!=null,"SyncTree gave us an op for an invalid query."),kp(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(kp(o,e,n,s));return r}}function Qu(t,e){let n=null;for(const s of t.views.values())n=n||pN(s,e);return n}/**
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
 */let Np;function mN(t){z(!Np,"__referenceConstructor has already been defined"),Np=t}class Op{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=sN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yN(t,e,n,s,i){return GP(t.pendingWriteTree_,e,n,s,i),i?Ua(t,new As(My(),e,n)):[]}function Ks(t,e,n=!1){const s=qP(t.pendingWriteTree_,e);if(zP(t.pendingWriteTree_,e)){let r=new ke(null);return s.snap!=null?r=r.set(Ie(),!0):Ft(s.children,o=>{r=r.set(new Le(o),!0)}),Ua(t,new ca(s.path,r,n))}else return[]}function Fa(t,e,n){return Ua(t,new As(Dy(),e,n))}function vN(t,e,n){const s=ke.fromObject(n);return Ua(t,new Sr(Dy(),e,s))}function EN(t,e,n,s){const i=Jy(t,s);if(i!=null){const r=Qy(i),o=r.path,l=r.queryId,c=Dt(o,e),u=new As(xy(l),c,n);return Zy(t,o,u)}else return[]}function wN(t,e,n,s){const i=Jy(t,s);if(i){const r=Qy(i),o=r.path,l=r.queryId,c=Dt(o,e),u=ke.fromObject(n),f=new Sr(xy(l),c,u);return Zy(t,o,f)}else return[]}function zy(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Dt(o,e),u=Qu(l,c);if(u)return u});return $y(i,e,r,n,!0)}function Ua(t,e){return Yy(e,t.syncPointTree_,null,jy(t.pendingWriteTree_,Ie()))}function Yy(t,e,n,s){if(he(t.path))return Xy(t,e,n,s);{const i=e.get(Ie());n==null&&i!=null&&(n=Qu(i,Ie()));let r=[];const o=de(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,f=Wy(s,o);r=r.concat(Yy(l,c,u,f))}return i&&(r=r.concat(Ju(i,t,s,n))),r}}function Xy(t,e,n,s){const i=e.get(Ie());n==null&&i!=null&&(n=Qu(i,Ie()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=Wy(s,o),f=t.operationForChild(o);f&&(r=r.concat(Xy(f,l,c,u)))}),i&&(r=r.concat(Ju(i,t,s,n))),r}function Jy(t,e){return t.tagToQueryMap.get(e)}function Qy(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Le(t.substr(0,e))}}function Zy(t,e,n){const s=t.syncPointTree_.get(e);z(s,"Missing sync point for query tag that we're tracking");const i=jy(t.pendingWriteTree_,e);return Ju(s,n,i,null)}/**
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
 */class Zu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zu(n)}node(){return this.node_}}class eh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ye(this.path_,e);return new eh(this.syncTree_,n)}node(){return zy(this.syncTree_,this.path_)}}const TN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Lp=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return bN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return IN(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},bN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},IN=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&z(!1,"Unexpected increment value: "+s);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},CN=function(t,e,n,s){return th(e,new eh(n,t),s)},SN=function(t,e,n){return th(t,new Zu(e),n)};function th(t,e,n){const s=t.getPriority().val(),i=Lp(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Lp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new qe(l,st(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new qe(i))),o.forEachChild(ot,(l,c)=>{const u=th(c,e.getImmediateChild(l),n);u!==c&&(r=r.updateImmediateChild(l,u))}),r}}/**
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
 */class nh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function sh(t,e){let n=e instanceof Le?e:new Le(e),s=t,i=de(n);for(;i!==null;){const r=ci(s.node.children,i)||{children:{},childCount:0};s=new nh(i,s,r),n=Oe(n),i=de(n)}return s}function Ci(t){return t.node.value}function ev(t,e){t.node.value=e,jc(t)}function tv(t){return t.node.childCount>0}function RN(t){return Ci(t)===void 0&&!tv(t)}function Ha(t,e){Ft(t.node.children,(n,s)=>{e(new nh(n,t,s))})}function nv(t,e,n,s){n&&!s&&e(t),Ha(t,i=>{nv(i,e,!0,s)}),n&&s&&e(t)}function AN(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Br(t){return new Le(t.parent===null?t.name:Br(t.parent)+"/"+t.name)}function jc(t){t.parent!==null&&kN(t.parent,t.name,t)}function kN(t,e,n){const s=RN(n),i=Sn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,jc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jc(t))}/**
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
 */const PN=/[\[\].#$\/\u0000-\u001F\u007F]/,NN=/[\[\].#$\u0000-\u001F\u007F]/,Dl=10*1024*1024,sv=function(t){return typeof t=="string"&&t.length!==0&&!PN.test(t)},ON=function(t){return typeof t=="string"&&t.length!==0&&!NN.test(t)},LN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ON(t)},iv=function(t,e,n){const s=n instanceof Le?new fP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ps(s));if(typeof e=="function")throw new Error(t+"contains a function "+ps(s)+" with contents = "+e.toString());if(sy(e))throw new Error(t+"contains "+e.toString()+" "+ps(s));if(typeof e=="string"&&e.length>Dl/3&&Na(e)>Dl)throw new Error(t+"contains a string greater than "+Dl+" utf8 bytes "+ps(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ft(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!sv(o)))throw new Error(t+" contains an invalid key ("+o+") "+ps(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dP(s,o),iv(t,l,s),pP(s)}),i&&r)throw new Error(t+' contains ".value" child '+ps(s)+" in addition to actual children.")}},MN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!LN(n))throw new Error(q0(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class DN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xN(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Sy(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ls(t,e,n){xN(t,n),FN(t,s=>Vt(s,e)||Vt(e,s))}function FN(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(UN(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function UN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();lr&&nt("event: "+n.toString()),Hr(s)}}}/**
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
 */const HN="repo_interrupt",jN=25;class BN{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new DN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=la(),this.transactionQueueTree_=new nh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $N(t,e,n){if(t.stats_=Vu(t.repoInfo_),t.forceRestClient_||xk())t.server_=new aa(t.repoInfo_,(s,i,r,o)=>{Mp(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Dp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new wn(t.repoInfo_,e,(s,i,r,o)=>{Mp(t,s,i,r,o)},s=>{Dp(t,s)},s=>{WN(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=$k(t.repoInfo_,()=>new BP(t.stats_,t.server_)),t.infoData_=new xP,t.infoSyncTree_=new Op({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Fa(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ih(t,"connected",!1),t.serverSyncTree_=new Op({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const u=o(l,c);Ls(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function VN(t){const n=t.infoData_.getNode(new Le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rv(t){return TN({timestamp:VN(t)})}function Mp(t,e,n,s,i){t.dataUpdateCount++;const r=new Le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Go(n,u=>st(u));o=wN(t.serverSyncTree_,r,c,i)}else{const c=st(n);o=EN(t.serverSyncTree_,r,c,i)}else if(s){const c=Go(n,u=>st(u));o=vN(t.serverSyncTree_,r,c)}else{const c=st(n);o=Fa(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=oh(t,r)),Ls(t.eventQueue_,l,o)}function Dp(t,e){ih(t,"connected",e),e===!1&&GN(t)}function WN(t,e){Ft(e,(n,s)=>{ih(t,n,s)})}function ih(t,e,n){const s=new Le("/.info/"+e),i=st(n);t.infoData_.updateSnapshot(s,i);const r=Fa(t.infoSyncTree_,s,i);Ls(t.eventQueue_,s,r)}function KN(t){return t.nextWriteId_++}function GN(t){ov(t,"onDisconnectEvents");const e=rv(t),n=la();Lc(t.onDisconnect_,Ie(),(i,r)=>{const o=CN(i,r,t.serverSyncTree_,e);Ly(n,i,o)});let s=[];Lc(n,Ie(),(i,r)=>{s=s.concat(Fa(t.serverSyncTree_,i,r));const o=XN(t,i);oh(t,o)}),t.onDisconnect_=la(),Ls(t.eventQueue_,Ie(),s)}function qN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(HN)}function ov(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),nt(n,...e)}function av(t,e,n){return zy(t.serverSyncTree_,e,n)||we.EMPTY_NODE}function rh(t,e=t.transactionQueueTree_){if(e||ja(t,e),Ci(e)){const n=cv(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&zN(t,Br(e),n)}else tv(e)&&Ha(e,n=>{rh(t,n)})}function zN(t,e,n){const s=n.map(u=>u.currentWriteId),i=av(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];z(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=Dt(e,f.path);r=r.updateChild(d,f.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,u=>{ov(t,"transaction put response",{path:c.toString(),status:u});let f=[];if(u==="ok"){const d=[];for(let g=0;g<n.length;g++)n[g].status=2,f=f.concat(Ks(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&d.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();ja(t,sh(t.transactionQueueTree_,e)),rh(t,t.transactionQueueTree_),Ls(t.eventQueue_,e,f);for(let g=0;g<d.length;g++)Hr(d[g])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{It("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}oh(t,e)}},o)}function oh(t,e){const n=lv(t,e),s=Br(n),i=cv(t,n);return YN(t,i,s),s}function YN(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=Dt(n,c.path);let f=!1,d;if(z(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,d=c.abortReason,i=i.concat(Ks(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=jN)f=!0,d="maxretry",i=i.concat(Ks(t.serverSyncTree_,c.currentWriteId,!0));else{const g=av(t,c.path,o);c.currentInputSnapshot=g;const T=e[l].update(g.val());if(T!==void 0){iv("transaction failed: Data returned ",T,c.path);let C=st(T);typeof T=="object"&&T!=null&&Sn(T,".priority")||(C=C.updatePriority(g.getPriority()));const F=c.currentWriteId,B=rv(t),k=SN(C,g,B);c.currentOutputSnapshotRaw=C,c.currentOutputSnapshotResolved=k,c.currentWriteId=KN(t),o.splice(o.indexOf(F),1),i=i.concat(yN(t.serverSyncTree_,c.path,k,c.currentWriteId,c.applyLocally)),i=i.concat(Ks(t.serverSyncTree_,F,!0))}else f=!0,d="nodata",i=i.concat(Ks(t.serverSyncTree_,c.currentWriteId,!0))}Ls(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}ja(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Hr(s[l]);rh(t,t.transactionQueueTree_)}function lv(t,e){let n,s=t.transactionQueueTree_;for(n=de(e);n!==null&&Ci(s)===void 0;)s=sh(s,n),e=Oe(e),n=de(e);return s}function cv(t,e){const n=[];return uv(t,e,n),n.sort((s,i)=>s.order-i.order),n}function uv(t,e,n){const s=Ci(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ha(e,i=>{uv(t,i,n)})}function ja(t,e){const n=Ci(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ev(e,n.length>0?n:void 0)}Ha(e,s=>{ja(t,s)})}function XN(t,e){const n=Br(lv(t,e)),s=sh(t.transactionQueueTree_,e);return AN(s,i=>{xl(t,i)}),xl(t,s),nv(s,i=>{xl(t,i)}),n}function xl(t,e){const n=Ci(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ks(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ev(e,void 0):n.length=r+1,Ls(t.eventQueue_,Br(e),i);for(let o=0;o<s.length;o++)Hr(s[o])}}/**
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
 */function JN(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function QN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const xp=function(t,e){const n=ZN(t),s=n.namespace;n.domain==="firebase.com"&&Ss(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ss("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ak();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Hk(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Le(n.pathString)}},ZN=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(f,d)),f<d&&(i=JN(t.substring(f,d)));const g=QN(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const T=e.slice(0,u);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),n=e.substring(C+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class ah{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return he(this._path)?null:by(this._path)}get ref(){return new Si(this._repo,this._path)}get _queryIdentifier(){const e=wp(this._queryParams),n=Bu(e);return n==="{}"?"default":n}get _queryObject(){return wp(this._queryParams)}isEqual(e){if(e=Ti(e),!(e instanceof ah))return!1;const n=this._repo===e._repo,s=Sy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+hP(this._path)}}class Si extends ah{constructor(e,n){super(e,n,new qu,!1)}get parent(){const e=Cy(this._path);return e===null?null:new Si(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}_N(Si);mN(Si);/**
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
 */const eO="FIREBASE_DATABASE_EMULATOR_HOST",Bc={};let tO=!1;function nO(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ss("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xp(r,i),l=o.repoInfo,c;typeof process<"u"&&np&&(c=np[eO]),c?(r=`http://${c}?ns=${l.namespace}`,o=xp(r,i),l=o.repoInfo):o.repoInfo.secure;const u=new Uk(t.name,t.options,e);MN("Invalid Firebase Database URL",o),he(o.path)||Ss("Database URL must point to the root of a Firebase Database (not including a child path).");const f=iO(l,t,u,new Fk(t.name,n));return new rO(f,t)}function sO(t,e){const n=Bc[e];(!n||n[t.key]!==t)&&Ss(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qN(t),delete n[t.key]}function iO(t,e,n,s){let i=Bc[e.name];i||(i={},Bc[e.name]=i);let r=i[t.toURLString()];return r&&Ss("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new BN(t,tO,n,s),i[t.toURLString()]=r,r}class rO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($N(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Si(this._repo,Ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ss("Cannot call "+e+" on a deleted database.")}}/**
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
 */function oO(t){Tk(rs),rn(new zt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return nO(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),bt(sp,ip,t),bt(sp,ip,"esm2017")}wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};oO();/**
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
 */const hv="firebasestorage.googleapis.com",aO="storageBucket",lO=2*60*1e3,cO=10*60*1e3;/**
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
 */class un extends cn{constructor(e,n,s=0){super(Fl(e),`Firebase Storage: ${n} (${Fl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,un.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var an;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(an||(an={}));function Fl(t){return"storage/"+t}function uO(){const t="An unknown error occurred, please check the error payload for server response.";return new un(an.UNKNOWN,t)}function hO(){return new un(an.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fO(){return new un(an.CANCELED,"User canceled the upload/download.")}function dO(t){return new un(an.INVALID_URL,"Invalid URL '"+t+"'.")}function pO(t){return new un(an.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Fp(t){return new un(an.INVALID_ARGUMENT,t)}function fv(){return new un(an.APP_DELETED,"The Firebase app was deleted.")}function gO(t){return new un(an.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Wt.makeFromUrl(e,n)}catch{return new Wt(e,"")}if(s.path==="")return s;throw pO(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}const f="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",T=new RegExp(`^https?://${d}/${f}/b/${i}/o${g}`,"i"),C={bucket:1,path:3},O=n===hv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,F="([^?#]*)",B=new RegExp(`^https?://${O}/${i}/${F}`,"i"),A=[{regex:l,indices:c,postModify:r},{regex:T,indices:C,postModify:u},{regex:B,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<A.length;P++){const D=A[P],M=D.regex.exec(e);if(M){const b=M[D.indices.bucket];let _=M[D.indices.path];_||(_=""),s=new Wt(b,_),D.postModify(s);break}}if(s==null)throw dO(e);return s}}class _O{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function mO(t,e,n){let s=1,i=null,r=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...F){u||(u=!0,e.apply(null,F))}function d(F){i=setTimeout(()=>{i=null,t(T,c())},F)}function g(){r&&clearTimeout(r)}function T(F,...B){if(u){g();return}if(F){g(),f.call(null,F,...B);return}if(c()||o){g(),f.call(null,F,...B);return}s<64&&(s*=2);let A;l===1?(l=2,A=0):A=(s+Math.random())*1e3,d(A)}let C=!1;function O(F){C||(C=!0,g(),!u&&(i!==null?(F||(l=2),clearTimeout(i),d(0)):F||(l=1)))}return d(0),r=setTimeout(()=>{o=!0,O(!0)},n),O}function yO(t){t(!1)}/**
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
 */function vO(t){return t!==void 0}function Up(t,e,n,s){if(s<e)throw Fp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Fp(`Invalid value for '${t}'. Expected ${n} or less.`)}function EO(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var fa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fa||(fa={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function wO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class TO{constructor(e,n,s,i,r,o,l,c,u,f,d,g=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=d,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,C)=>{this.resolve_=T,this.reject_=C,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new vo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===fa.NO_ERROR,c=r.getStatus();if(!l||wO(c,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===fa.ABORT;s(!1,new vo(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new vo(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());vO(c)?r(c):r()}catch(c){o(c)}else if(l!==null){const c=uO();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?fv():fO();o(c)}else{const c=hO();o(c)}};this.canceled_?n(!1,new vo(!1,null,!0)):this.backoffId_=mO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&yO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function bO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function IO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function CO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function SO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function RO(t,e,n,s,i,r,o=!0){const l=EO(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return CO(u,e),bO(u,n),IO(u,r),SO(u,s),new TO(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function AO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class da{constructor(e,n){this._service=e,n instanceof Wt?this._location=n:this._location=Wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new da(e,n)}get root(){const e=new Wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kO(this._location.path)}get storage(){return this._service}get parent(){const e=AO(this._location.path);if(e===null)return null;const n=new Wt(this._location.bucket,e);return new da(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw gO(e)}}function Hp(t,e){const n=e==null?void 0:e[aO];return n==null?null:Wt.makeFromBucketSpec(n,t)}class PO{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=hv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lO,this._maxUploadRetryTime=cO,this._requests=new Set,i!=null?this._bucket=Wt.makeFromBucketSpec(i,this._host):this._bucket=Hp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,e):this._bucket=Hp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Up("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Up("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new da(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new _O(fv());{const o=RO(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const jp="@firebase/storage",Bp="0.13.1";/**
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
 */const NO="storage";function OO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new PO(n,s,i,e,rs)}function LO(){rn(new zt(NO,OO,"PUBLIC").setMultipleInstances(!0)),bt(jp,Bp,""),bt(jp,Bp,"esm2017")}LO();const lh=Symbol("VueFireAuth");function MO({dependencies:t,initialUser:e}){return(n,s)=>{const[i,r]=DO(n,s,e,t);wk(i,r)}}function DO(t,e,n,s,i=PR(t,s)){const r=yk(t,e).run(()=>Kt(n));return vk.set(t,r),e.provide(lh,i),[r,i]}function C1(t){return mk?Xe(lh):null}function xO(t,{firebaseApp:e,modules:n=[]}){t.provide(Zm,e);for(const s of n)s(e,t)}const FO=Ct(t=>{const e=t.$firebaseApp;return MO({initialUser:t.payload.vuefireUser,dependencies:{errorMap:Tm,persistence:[QR,HR],popupRedirectResolver:jA}})(e,t.vueApp),{provide:{firebaseAuth:t.vueApp.runWithContext(()=>Xe(lh))}}}),UO=Ct(t=>{const e=t.$firebaseApp;t.vueApp.use(xO,{firebaseApp:e})}),HO=Ct({name:"nuxt:chunk-reload",setup(t){const e=ln(),n=Sa(),s=new Set;e.beforeEach(()=>{s.clear()}),t.hook("app:chunkError",({error:r})=>{s.add(r)});function i(r){const l="href"in r&&r.href[0]==="#"?n.app.baseURL+r.href:gu(n.app.baseURL,r.fullPath);YS({path:l,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(i)}),e.onError((r,o)=>{s.has(r)&&i(o)})}}),jO=[TC,bC,CC,VS,WS,KS,XS,JS,QS,tR,FO,UO,HO],BO=is({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,s={};for(const i in t.route)Object.defineProperty(s,i,{get:()=>e===t.renderKey?t.route[i]:n[i]});return Ts(Or,kr(s)),()=>Tt(t.vnode,{ref:t.vnodeRef})}}),$O=is({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,expose:n}){const s=Ue(),i=Kt(),r=Xe(Or,null);let o;n({pageRef:i});const l=Xe(R_,null);let c;const u=s.deferHydration();if(s.isHydrating){const f=s.hooks.hookOnce("app:error",u);ln().beforeEach(f)}return t.pageKey&&Js(()=>t.pageKey,(f,d)=>{f!==d&&s.callHook("page:loading:start")}),()=>Tt(mm,{name:t.name,route:t.route,...e},{default:f=>{const d=WO(r,f.route,f.Component),g=r&&r.matched.length===f.route.matched.length;if(!f.Component){if(c&&!g)return c;u();return}if(c&&l&&!l.isCurrent(f.route))return c;if(d&&r&&(!l||l!=null&&l.isCurrent(r)))return g?c:null;const T=Tc(f,t.pageKey);!s.isHydrating&&!KO(r,f.route,f.Component)&&o===T&&s.callHook("page:loading:end"),o=T;const C=!!(t.transition??f.route.meta.pageTransition??hc),O=C&&VO([t.transition,f.route.meta.pageTransition,hc,{onAfterLeave:()=>{s.callHook("page:transition:finish",f.Component)}}].filter(Boolean)),F=t.keepalive??f.route.meta.keepalive??v0;return c=ym(Ia,C&&O,PS(F,Tt(ru,{suspensible:!0,onPending:()=>s.callHook("page:start",f.Component),onResolve:()=>{mi(()=>s.callHook("page:finish",f.Component).then(()=>s.callHook("page:loading:end")).finally(u))}},{default:()=>{const B=Tt(BO,{key:T||void 0,vnode:f.Component,route:f.route,renderKey:T||void 0,trackRootNodes:C,vnodeRef:i});return F&&(B.type.name=f.Component.type.name||f.Component.type.__name||"RouteProvider"),B}}))).default(),c}})}});function VO(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?Au(n.onAfterLeave):void 0}));return C_(...e)}function WO(t,e,n){if(!t)return!1;const s=e.matched.findIndex(i=>{var r;return((r=i.components)==null?void 0:r.default)===(n==null?void 0:n.type)});return!s||s===-1?!1:e.matched.slice(0,s).some((i,r)=>{var o,l,c;return((o=i.components)==null?void 0:o.default)!==((c=(l=t.matched[r])==null?void 0:l.components)==null?void 0:c.default)})||n&&Tc({route:e,Component:n})!==Tc({route:t,Component:n})}function KO(t,e,n){return t?e.matched.findIndex(i=>{var r;return((r=i.components)==null?void 0:r.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const GO=is({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await qn[t.name]().then(s=>s.default||s);return()=>Tt(n,t.layoutProps,e.slots)}}),qO=is({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=Ue(),s=Xe(Or),i=s===yu()?AS():s,r=Ot(()=>{let c=Pe(t.name)??i.meta.layout??"default";return c&&!(c in qn)&&t.fallback&&(c=Pe(t.fallback)),c}),o=Kt();e.expose({layoutRef:o});const l=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",l);ln().beforeEach(c)}return()=>{const c=r.value&&r.value in qn,u=i.meta.layoutTransition??y0;return ym(Ia,c&&u,{default:()=>Tt(ru,{suspensible:!0,onResolve:()=>{mi(l)}},{default:()=>Tt(zO,{layoutProps:n_(e.attrs,{ref:o}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),zO=is({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&Ts(R_,{isCurrent:s=>n===(s.meta.layout??"default")}),()=>{var s,i;return!n||typeof n=="string"&&!(n in qn)?(i=(s=e.slots).default)==null?void 0:i.call(s):Tt(GO,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),YO=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},XO={};function JO(t,e){const n=$O,s=qO;return en(),pn(s,null,{default:su(()=>[xe(n)]),_:1})}const QO=YO(XO,[["render",JO]]),ZO={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const s=Number(n.statusCode||500),i=s===404,r=n.statusMessage??(i?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),l=void 0,f=i?ff(()=>bc(()=>import("./BT72A3UZ.js"),__vite__mapDeps([2,3,4]),import.meta.url).then(d=>d.default||d)):ff(()=>bc(()=>import("./Bah5xAuu.js"),__vite__mapDeps([5,3,6]),import.meta.url).then(d=>d.default||d));return(d,g)=>(en(),pn(Pe(f),Yv(e_({statusCode:Pe(s),statusMessage:Pe(r),description:Pe(o),stack:Pe(l)})),null,16))}},$p={__name:"nuxt-root",setup(t){const e=()=>null,n=Ue(),s=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",s);ln().beforeEach(l)}const i=!1;Ts(Or,yu()),n.hooks.callHookWith(l=>l.map(c=>c()),"vue:setup");const r=Ra();Og((l,c,u)=>{if(n.hooks.callHook("vue:error",l,c,u).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),Ab(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Vs(l)),!1});const o=!1;return(l,c)=>(en(),pn(ru,{onResolve:Pe(s)},{default:su(()=>[Pe(r)?(en(),pn(Pe(ZO),{key:0,error:Pe(r)},null,8,["error"])):Pe(o)?(en(),pn(Pe(e),{key:1,context:Pe(o)},null,8,["context"])):Pe(i)?(en(),pn(xE(Pe(i)),{key:2})):(en(),pn(Pe(QO),{key:3}))]),_:1},8,["onResolve"]))}};let Vp;{let t;Vp=async function(){var o,l;if(t)return t;const s=!!((o=window.__NUXT__)!=null&&o.serverRendered||((l=document.getElementById("__NUXT_DATA__"))==null?void 0:l.dataset.ssr)==="true")?oT($p):rT($p),i=fb({vueApp:s});async function r(c){await i.callHook("app:error",c),i.payload.error=i.payload.error||Aa(c)}s.config.errorHandler=r;try{await pb(i,jO)}catch(c){r(c)}try{await i.hooks.callHook("app:created",s),await i.hooks.callHook("app:beforeMount",s),s.mount(E0),await i.hooks.callHook("app:mounted",s),await mi()}catch(c){r(c)}return s.config.errorHandler===r&&(s.config.errorHandler=void 0),s},t=Vp().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{h1 as $,su as A,t_ as B,i1 as C,r1 as D,E1 as E,a1 as F,lc as G,Js as H,QE as I,JE as J,yi as K,Tn as L,T1 as M,g1 as N,Zv as O,t1 as P,mi as Q,Pe as R,ug as S,at as T,s1 as U,n1 as V,dr as W,ww as X,ss as Y,Xe as Z,YO as _,Em as a,ma as a0,_a as a1,Ts as a2,Ng as a3,gt as a4,u1 as a5,f1 as a6,_1 as a7,kr as a8,y1 as a9,d1 as aa,pn as ab,Ji as ac,c1 as ad,l1 as ae,m1 as af,Ia as ag,C1 as ah,ru as ai,I1 as aj,Wn as ak,Md as b,Ot as c,is as d,cu as e,b1 as f,Tt as g,Ns as h,o1 as i,gu as j,bT as k,Sa as l,Ue as m,w1 as n,lu as o,Ca as p,v1 as q,Kt as r,pu as s,en as t,ln as u,p1 as v,tc as w,Zg as x,e1 as y,xe as z};
