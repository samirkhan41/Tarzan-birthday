(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function d_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var fd={exports:{}},Ia={},dd={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function N1(){if(W0)return wt;W0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function p(w){return w===null||typeof w!="object"?null:(w=v&&w[v]||w["@@iterator"],typeof w=="function"?w:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function x(w,H,fe){this.props=w,this.context=H,this.refs=A,this.updater=fe||y}x.prototype.isReactComponent={},x.prototype.setState=function(w,H){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,H,"setState")},x.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function _(){}_.prototype=x.prototype;function C(w,H,fe){this.props=w,this.context=H,this.refs=A,this.updater=fe||y}var F=C.prototype=new _;F.constructor=C,M(F,x.prototype),F.isPureReactComponent=!0;var b=Array.isArray,D=Object.prototype.hasOwnProperty,N={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(w,H,fe){var Se,Ee={},Te=null,q=null;if(H!=null)for(Se in H.ref!==void 0&&(q=H.ref),H.key!==void 0&&(Te=""+H.key),H)D.call(H,Se)&&!O.hasOwnProperty(Se)&&(Ee[Se]=H[Se]);var ie=arguments.length-2;if(ie===1)Ee.children=fe;else if(1<ie){for(var ye=Array(ie),ke=0;ke<ie;ke++)ye[ke]=arguments[ke+2];Ee.children=ye}if(w&&w.defaultProps)for(Se in ie=w.defaultProps,ie)Ee[Se]===void 0&&(Ee[Se]=ie[Se]);return{$$typeof:n,type:w,key:Te,ref:q,props:Ee,_owner:N.current}}function I(w,H){return{$$typeof:n,type:w.type,key:H,ref:w.ref,props:w.props,_owner:w._owner}}function U(w){return typeof w=="object"&&w!==null&&w.$$typeof===n}function V(w){var H={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(fe){return H[fe]})}var W=/\/+/g;function te(w,H){return typeof w=="object"&&w!==null&&w.key!=null?V(""+w.key):H.toString(36)}function X(w,H,fe,Se,Ee){var Te=typeof w;(Te==="undefined"||Te==="boolean")&&(w=null);var q=!1;if(w===null)q=!0;else switch(Te){case"string":case"number":q=!0;break;case"object":switch(w.$$typeof){case n:case e:q=!0}}if(q)return q=w,Ee=Ee(q),w=Se===""?"."+te(q,0):Se,b(Ee)?(fe="",w!=null&&(fe=w.replace(W,"$&/")+"/"),X(Ee,H,fe,"",function(ke){return ke})):Ee!=null&&(U(Ee)&&(Ee=I(Ee,fe+(!Ee.key||q&&q.key===Ee.key?"":(""+Ee.key).replace(W,"$&/")+"/")+w)),H.push(Ee)),1;if(q=0,Se=Se===""?".":Se+":",b(w))for(var ie=0;ie<w.length;ie++){Te=w[ie];var ye=Se+te(Te,ie);q+=X(Te,H,fe,ye,Ee)}else if(ye=p(w),typeof ye=="function")for(w=ye.call(w),ie=0;!(Te=w.next()).done;)Te=Te.value,ye=Se+te(Te,ie++),q+=X(Te,H,fe,ye,Ee);else if(Te==="object")throw H=String(w),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return q}function ee(w,H,fe){if(w==null)return w;var Se=[],Ee=0;return X(w,Se,"","",function(Te){return H.call(fe,Te,Ee++)}),Se}function ne(w){if(w._status===-1){var H=w._result;H=H(),H.then(function(fe){(w._status===0||w._status===-1)&&(w._status=1,w._result=fe)},function(fe){(w._status===0||w._status===-1)&&(w._status=2,w._result=fe)}),w._status===-1&&(w._status=0,w._result=H)}if(w._status===1)return w._result.default;throw w._result}var K={current:null},j={transition:null},Y={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:j,ReactCurrentOwner:N};function L(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:ee,forEach:function(w,H,fe){ee(w,function(){H.apply(this,arguments)},fe)},count:function(w){var H=0;return ee(w,function(){H++}),H},toArray:function(w){return ee(w,function(H){return H})||[]},only:function(w){if(!U(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},wt.Component=x,wt.Fragment=t,wt.Profiler=o,wt.PureComponent=C,wt.StrictMode=r,wt.Suspense=d,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,wt.act=L,wt.cloneElement=function(w,H,fe){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var Se=M({},w.props),Ee=w.key,Te=w.ref,q=w._owner;if(H!=null){if(H.ref!==void 0&&(Te=H.ref,q=N.current),H.key!==void 0&&(Ee=""+H.key),w.type&&w.type.defaultProps)var ie=w.type.defaultProps;for(ye in H)D.call(H,ye)&&!O.hasOwnProperty(ye)&&(Se[ye]=H[ye]===void 0&&ie!==void 0?ie[ye]:H[ye])}var ye=arguments.length-2;if(ye===1)Se.children=fe;else if(1<ye){ie=Array(ye);for(var ke=0;ke<ye;ke++)ie[ke]=arguments[ke+2];Se.children=ie}return{$$typeof:n,type:w.type,key:Ee,ref:Te,props:Se,_owner:q}},wt.createContext=function(w){return w={$$typeof:c,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:a,_context:w},w.Consumer=w},wt.createElement=E,wt.createFactory=function(w){var H=E.bind(null,w);return H.type=w,H},wt.createRef=function(){return{current:null}},wt.forwardRef=function(w){return{$$typeof:u,render:w}},wt.isValidElement=U,wt.lazy=function(w){return{$$typeof:m,_payload:{_status:-1,_result:w},_init:ne}},wt.memo=function(w,H){return{$$typeof:h,type:w,compare:H===void 0?null:H}},wt.startTransition=function(w){var H=j.transition;j.transition={};try{w()}finally{j.transition=H}},wt.unstable_act=L,wt.useCallback=function(w,H){return K.current.useCallback(w,H)},wt.useContext=function(w){return K.current.useContext(w)},wt.useDebugValue=function(){},wt.useDeferredValue=function(w){return K.current.useDeferredValue(w)},wt.useEffect=function(w,H){return K.current.useEffect(w,H)},wt.useId=function(){return K.current.useId()},wt.useImperativeHandle=function(w,H,fe){return K.current.useImperativeHandle(w,H,fe)},wt.useInsertionEffect=function(w,H){return K.current.useInsertionEffect(w,H)},wt.useLayoutEffect=function(w,H){return K.current.useLayoutEffect(w,H)},wt.useMemo=function(w,H){return K.current.useMemo(w,H)},wt.useReducer=function(w,H,fe){return K.current.useReducer(w,H,fe)},wt.useRef=function(w){return K.current.useRef(w)},wt.useState=function(w){return K.current.useState(w)},wt.useSyncExternalStore=function(w,H,fe){return K.current.useSyncExternalStore(w,H,fe)},wt.useTransition=function(){return K.current.useTransition()},wt.version="18.3.1",wt}var X0;function Cp(){return X0||(X0=1,dd.exports=N1()),dd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function I1(){if(j0)return Ia;j0=1;var n=Cp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var m,v={},p=null,y=null;h!==void 0&&(p=""+h),d.key!==void 0&&(p=""+d.key),d.ref!==void 0&&(y=d.ref);for(m in d)r.call(d,m)&&!a.hasOwnProperty(m)&&(v[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:u,key:p,ref:y,props:v,_owner:o.current}}return Ia.Fragment=t,Ia.jsx=c,Ia.jsxs=c,Ia}var Y0;function F1(){return Y0||(Y0=1,fd.exports=I1()),fd.exports}var B=F1(),we=Cp();const U1=d_(we);var pc={},hd={exports:{}},Qn={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function O1(){return $0||($0=1,(function(n){function e(j,Y){var L=j.length;j.push(Y);e:for(;0<L;){var w=L-1>>>1,H=j[w];if(0<o(H,Y))j[w]=Y,j[L]=H,L=w;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var Y=j[0],L=j.pop();if(L!==Y){j[0]=L;e:for(var w=0,H=j.length,fe=H>>>1;w<fe;){var Se=2*(w+1)-1,Ee=j[Se],Te=Se+1,q=j[Te];if(0>o(Ee,L))Te<H&&0>o(q,Ee)?(j[w]=q,j[Te]=L,w=Te):(j[w]=Ee,j[Se]=L,w=Se);else if(Te<H&&0>o(q,L))j[w]=q,j[Te]=L,w=Te;else break e}}return Y}function o(j,Y){var L=j.sortIndex-Y.sortIndex;return L!==0?L:j.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],m=1,v=null,p=3,y=!1,M=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(j){for(var Y=t(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=j)r(h),Y.sortIndex=Y.expirationTime,e(d,Y);else break;Y=t(h)}}function b(j){if(A=!1,F(j),!M)if(t(d)!==null)M=!0,ne(D);else{var Y=t(h);Y!==null&&K(b,Y.startTime-j)}}function D(j,Y){M=!1,A&&(A=!1,_(E),E=-1),y=!0;var L=p;try{for(F(Y),v=t(d);v!==null&&(!(v.expirationTime>Y)||j&&!V());){var w=v.callback;if(typeof w=="function"){v.callback=null,p=v.priorityLevel;var H=w(v.expirationTime<=Y);Y=n.unstable_now(),typeof H=="function"?v.callback=H:v===t(d)&&r(d),F(Y)}else r(d);v=t(d)}if(v!==null)var fe=!0;else{var Se=t(h);Se!==null&&K(b,Se.startTime-Y),fe=!1}return fe}finally{v=null,p=L,y=!1}}var N=!1,O=null,E=-1,I=5,U=-1;function V(){return!(n.unstable_now()-U<I)}function W(){if(O!==null){var j=n.unstable_now();U=j;var Y=!0;try{Y=O(!0,j)}finally{Y?te():(N=!1,O=null)}}else N=!1}var te;if(typeof C=="function")te=function(){C(W)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ee=X.port2;X.port1.onmessage=W,te=function(){ee.postMessage(null)}}else te=function(){x(W,0)};function ne(j){O=j,N||(N=!0,te())}function K(j,Y){E=x(function(){j(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){M||y||(M=!0,ne(D))},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(j){switch(p){case 1:case 2:case 3:var Y=3;break;default:Y=p}var L=p;p=Y;try{return j()}finally{p=L}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,Y){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var L=p;p=j;try{return Y()}finally{p=L}},n.unstable_scheduleCallback=function(j,Y,L){var w=n.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?w+L:w):L=w,j){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=L+H,j={id:m++,callback:Y,priorityLevel:j,startTime:L,expirationTime:H,sortIndex:-1},L>w?(j.sortIndex=L,e(h,j),t(d)===null&&j===t(h)&&(A?(_(E),E=-1):A=!0,K(b,L-w))):(j.sortIndex=H,e(d,j),M||y||(M=!0,ne(D))),j},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(j){var Y=p;return function(){var L=p;p=Y;try{return j.apply(this,arguments)}finally{p=L}}}})(md)),md}var q0;function k1(){return q0||(q0=1,pd.exports=O1()),pd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function B1(){if(K0)return Qn;K0=1;var n=Cp(),e=k1();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function p(i){return d.call(v,i)?!0:d.call(m,i)?!1:h.test(i)?v[i]=!0:(m[i]=!0,!1)}function y(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,f){if(s===null||typeof s>"u"||y(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(i,s,l,f,g,S,R){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=S,this.removeEmptyString=R}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new A(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new A(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new A(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new A(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new A(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new A(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new A(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new A(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new A(i,5,!1,i.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(_,C);x[s]=new A(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(_,C);x[s]=new A(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(_,C);x[s]=new A(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new A(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new A(i,1,!1,i.toLowerCase(),null,!0,!0)});function F(i,s,l,f){var g=x.hasOwnProperty(s)?x[s]:null;(g!==null?g.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,g,f)&&(l=null),f||g===null?p(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):g.mustUseProperty?i[g.propertyName]=l===null?g.type===3?!1:"":l:(s=g.attributeName,f=g.attributeNamespace,l===null?i.removeAttribute(s):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),N=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),V=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),j=Symbol.iterator;function Y(i){return i===null||typeof i!="object"?null:(i=j&&i[j]||i["@@iterator"],typeof i=="function"?i:null)}var L=Object.assign,w;function H(i){if(w===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);w=s&&s[1]||""}return`
`+w+i}var fe=!1;function Se(i,s){if(!i||fe)return"";fe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(pe){var f=pe}Reflect.construct(i,[],s)}else{try{s.call()}catch(pe){f=pe}i.call(s.prototype)}else{try{throw Error()}catch(pe){f=pe}i()}}catch(pe){if(pe&&f&&typeof pe.stack=="string"){for(var g=pe.stack.split(`
`),S=f.stack.split(`
`),R=g.length-1,z=S.length-1;1<=R&&0<=z&&g[R]!==S[z];)z--;for(;1<=R&&0<=z;R--,z--)if(g[R]!==S[z]){if(R!==1||z!==1)do if(R--,z--,0>z||g[R]!==S[z]){var $=`
`+g[R].replace(" at new "," at ");return i.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",i.displayName)),$}while(1<=R&&0<=z);break}}}finally{fe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?H(i):""}function Ee(i){switch(i.tag){case 5:return H(i.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return i=Se(i.type,!1),i;case 11:return i=Se(i.type.render,!1),i;case 1:return i=Se(i.type,!0),i;default:return""}}function Te(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case N:return"Portal";case I:return"Profiler";case E:return"StrictMode";case te:return"Suspense";case X:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case U:return(i._context.displayName||"Context")+".Provider";case W:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ee:return s=i.displayName||null,s!==null?s:Te(i.type)||"Memo";case ne:s=i._payload,i=i._init;try{return Te(i(s))}catch{}}return null}function q(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ie(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function ye(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ke(i){var s=ye(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,S=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return g.call(this)},set:function(R){f=""+R,S.call(this,R)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(R){f=""+R},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Re(i){i._valueTracker||(i._valueTracker=ke(i))}function Ze(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=ye(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function gt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function He(i,s){var l=s.checked;return L({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function ot(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=ie(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function pt(i,s){s=s.checked,s!=null&&F(i,"checked",s,!1)}function at(i,s){pt(i,s);var l=ie(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Nt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Nt(i,s.type,ie(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function yt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Nt(i,s,l){(s!=="number"||gt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var bt=Array.isArray;function Et(i,s,l,f){if(i=i.options,s){s={};for(var g=0;g<l.length;g++)s["$"+l[g]]=!0;for(l=0;l<i.length;l++)g=s.hasOwnProperty("$"+i[l].value),i[l].selected!==g&&(i[l].selected=g),g&&f&&(i[l].defaultSelected=!0)}else{for(l=""+ie(l),s=null,g=0;g<i.length;g++){if(i[g].value===l){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}s!==null||i[g].disabled||(s=i[g])}s!==null&&(s.selected=!0)}}function Gt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return L({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function J(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(bt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:ie(l)}}function Kt(i,s){var l=ie(s.value),f=ie(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function Tt(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function k(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?k(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var re,ce=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,g){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,g)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=re.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function me(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=["Webkit","ms","Moz","O"];Object.keys(Pe).forEach(function(i){Ue.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Pe[s]=Pe[i]})});function ge(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Pe.hasOwnProperty(i)&&Pe[i]?(""+s).trim():s+"px"}function xe(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,g=ge(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,g):i[l]=g}}var Be=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(i,s){if(s){if(Be[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ze(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oe=null;function ve(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ie=null,Le=null,G=null;function be(i){if(i=_a(i)){if(typeof Ie!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Rl(s),Ie(i.stateNode,i.type,s))}}function de(i){Le?G?G.push(i):G=[i]:Le=i}function Me(){if(Le){var i=Le,s=G;if(G=Le=null,be(i),s)for(i=0;i<s.length;i++)be(s[i])}}function Ne(i,s){return i(s)}function _e(){}var We=!1;function Ye(i,s,l){if(We)return i(s,l);We=!0;try{return Ne(i,s,l)}finally{We=!1,(Le!==null||G!==null)&&(_e(),Me())}}function vt(i,s){var l=i.stateNode;if(l===null)return null;var f=Rl(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var ht=!1;if(u)try{var Vt={};Object.defineProperty(Vt,"passive",{get:function(){ht=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch{ht=!1}function Ln(i,s,l,f,g,S,R,z,$){var pe=Array.prototype.slice.call(arguments,3);try{s.apply(l,pe)}catch(Ce){this.onError(Ce)}}var ii=!1,Or=null,cr=!1,ur=null,Qo={onError:function(i){ii=!0,Or=i}};function kr(i,s,l,f,g,S,R,z,$){ii=!1,Or=null,Ln.apply(Qo,arguments)}function Br(i,s,l,f,g,S,R,z,$){if(kr.apply(this,arguments),ii){if(ii){var pe=Or;ii=!1,Or=null}else throw Error(t(198));cr||(cr=!0,ur=pe)}}function dn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function fr(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function zr(i){if(dn(i)!==i)throw Error(t(188))}function dr(i){var s=i.alternate;if(!s){if(s=dn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var g=l.return;if(g===null)break;var S=g.alternate;if(S===null){if(f=g.return,f!==null){l=f;continue}break}if(g.child===S.child){for(S=g.child;S;){if(S===l)return zr(g),i;if(S===f)return zr(g),s;S=S.sibling}throw Error(t(188))}if(l.return!==f.return)l=g,f=S;else{for(var R=!1,z=g.child;z;){if(z===l){R=!0,l=g,f=S;break}if(z===f){R=!0,f=g,l=S;break}z=z.sibling}if(!R){for(z=S.child;z;){if(z===l){R=!0,l=S,f=g;break}if(z===f){R=!0,f=S,l=g;break}z=z.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function hr(i){return i=dr(i),i!==null?pr(i):null}function pr(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=pr(i);if(s!==null)return s;i=i.sibling}return null}var ys=e.unstable_scheduleCallback,ea=e.unstable_cancelCallback,pl=e.unstable_shouldYield,Iu=e.unstable_requestPaint,tn=e.unstable_now,Fu=e.unstable_getCurrentPriorityLevel,ta=e.unstable_ImmediatePriority,na=e.unstable_UserBlockingPriority,P=e.unstable_NormalPriority,Z=e.unstable_LowPriority,he=e.unstable_IdlePriority,oe=null,se=null;function Xe(i){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(oe,i,void 0,(i.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:rt,Ge=Math.log,Qe=Math.LN2;function rt(i){return i>>>=0,i===0?32:31-(Ge(i)/Qe|0)|0}var mt=64,_t=4194304;function Ke(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ct(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,g=i.suspendedLanes,S=i.pingedLanes,R=l&268435455;if(R!==0){var z=R&~g;z!==0?f=Ke(z):(S&=R,S!==0&&(f=Ke(S)))}else R=l&~g,R!==0?f=Ke(R):S!==0&&(f=Ke(S));if(f===0)return 0;if(s!==0&&s!==f&&(s&g)===0&&(g=f&-f,S=s&-s,g>=S||g===16&&(S&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-Ve(s),g=1<<l,f|=i[l],s&=~g;return f}function on(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,S=i.pendingLanes;0<S;){var R=31-Ve(S),z=1<<R,$=g[R];$===-1?((z&l)===0||(z&f)!==0)&&(g[R]=on(z,s)):$<=s&&(i.expiredLanes|=z),S&=~z}}function kt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function vn(){var i=mt;return mt<<=1,(mt&4194240)===0&&(mt=64),i}function $e(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function un(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Ve(s),i[s]=l}function Rt(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var g=31-Ve(l),S=1<<g;s[g]=0,f[g]=-1,i[g]=-1,l&=~S}}function Nn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-Ve(l),g=1<<f;g&s|i[f]&s&&(i[f]|=s),l&=~g}}var St=0;function Ti(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var mr,Ft,Zt,Ai,Bt,pi=!1,bi=[],Ci=null,Vr=null,Hr=null,ia=new Map,ra=new Map,Gr=[],tM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bm(i,s){switch(i){case"focusin":case"focusout":Ci=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":ia.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(s.pointerId)}}function sa(i,s,l,f,g,S){return i===null||i.nativeEvent!==S?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:S,targetContainers:[g]},s!==null&&(s=_a(s),s!==null&&Ft(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),i)}function nM(i,s,l,f,g){switch(s){case"focusin":return Ci=sa(Ci,i,s,l,f,g),!0;case"dragenter":return Vr=sa(Vr,i,s,l,f,g),!0;case"mouseover":return Hr=sa(Hr,i,s,l,f,g),!0;case"pointerover":var S=g.pointerId;return ia.set(S,sa(ia.get(S)||null,i,s,l,f,g)),!0;case"gotpointercapture":return S=g.pointerId,ra.set(S,sa(ra.get(S)||null,i,s,l,f,g)),!0}return!1}function Cm(i){var s=Ss(i.target);if(s!==null){var l=dn(s);if(l!==null){if(s=l.tag,s===13){if(s=fr(l),s!==null){i.blockedOn=s,Bt(i.priority,function(){Zt(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ml(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Ou(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);Oe=f,l.target.dispatchEvent(f),Oe=null}else return s=_a(l),s!==null&&Ft(s),i.blockedOn=l,!1;s.shift()}return!0}function Rm(i,s,l){ml(i)&&l.delete(s)}function iM(){pi=!1,Ci!==null&&ml(Ci)&&(Ci=null),Vr!==null&&ml(Vr)&&(Vr=null),Hr!==null&&ml(Hr)&&(Hr=null),ia.forEach(Rm),ra.forEach(Rm)}function oa(i,s){i.blockedOn===s&&(i.blockedOn=null,pi||(pi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,iM)))}function aa(i){function s(g){return oa(g,i)}if(0<bi.length){oa(bi[0],i);for(var l=1;l<bi.length;l++){var f=bi[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Ci!==null&&oa(Ci,i),Vr!==null&&oa(Vr,i),Hr!==null&&oa(Hr,i),ia.forEach(s),ra.forEach(s),l=0;l<Gr.length;l++)f=Gr[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<Gr.length&&(l=Gr[0],l.blockedOn===null);)Cm(l),l.blockedOn===null&&Gr.shift()}var Js=b.ReactCurrentBatchConfig,gl=!0;function rM(i,s,l,f){var g=St,S=Js.transition;Js.transition=null;try{St=1,Uu(i,s,l,f)}finally{St=g,Js.transition=S}}function sM(i,s,l,f){var g=St,S=Js.transition;Js.transition=null;try{St=4,Uu(i,s,l,f)}finally{St=g,Js.transition=S}}function Uu(i,s,l,f){if(gl){var g=Ou(i,s,l,f);if(g===null)ef(i,s,f,vl,l),bm(i,f);else if(nM(g,i,s,l,f))f.stopPropagation();else if(bm(i,f),s&4&&-1<tM.indexOf(i)){for(;g!==null;){var S=_a(g);if(S!==null&&mr(S),S=Ou(i,s,l,f),S===null&&ef(i,s,f,vl,l),S===g)break;g=S}g!==null&&f.stopPropagation()}else ef(i,s,f,null,l)}}var vl=null;function Ou(i,s,l,f){if(vl=null,i=ve(f),i=Ss(i),i!==null)if(s=dn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=fr(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return vl=i,null}function Pm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fu()){case ta:return 1;case na:return 4;case P:case Z:return 16;case he:return 536870912;default:return 16}default:return 16}}var Wr=null,ku=null,xl=null;function Dm(){if(xl)return xl;var i,s=ku,l=s.length,f,g="value"in Wr?Wr.value:Wr.textContent,S=g.length;for(i=0;i<l&&s[i]===g[i];i++);var R=l-i;for(f=1;f<=R&&s[l-f]===g[S-f];f++);return xl=g.slice(i,1<f?1-f:void 0)}function _l(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function yl(){return!0}function Lm(){return!1}function ri(i){function s(l,f,g,S,R){this._reactName=l,this._targetInst=g,this.type=f,this.nativeEvent=S,this.target=R,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(S):S[z]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?yl:Lm,this.isPropagationStopped=Lm,this}return L(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),s}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=ri(Qs),la=L({},Qs,{view:0,detail:0}),oM=ri(la),zu,Vu,ca,Sl=L({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ca&&(ca&&i.type==="mousemove"?(zu=i.screenX-ca.screenX,Vu=i.screenY-ca.screenY):Vu=zu=0,ca=i),zu)},movementY:function(i){return"movementY"in i?i.movementY:Vu}}),Nm=ri(Sl),aM=L({},Sl,{dataTransfer:0}),lM=ri(aM),cM=L({},la,{relatedTarget:0}),Hu=ri(cM),uM=L({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),fM=ri(uM),dM=L({},Qs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),hM=ri(dM),pM=L({},Qs,{data:0}),Im=ri(pM),mM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xM(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=vM[i])?!!s[i]:!1}function Gu(){return xM}var _M=L({},la,{key:function(i){if(i.key){var s=mM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=_l(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?gM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(i){return i.type==="keypress"?_l(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?_l(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),yM=ri(_M),SM=L({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fm=ri(SM),MM=L({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),wM=ri(MM),EM=L({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),TM=ri(EM),AM=L({},Sl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),bM=ri(AM),CM=[9,13,27,32],Wu=u&&"CompositionEvent"in window,ua=null;u&&"documentMode"in document&&(ua=document.documentMode);var RM=u&&"TextEvent"in window&&!ua,Um=u&&(!Wu||ua&&8<ua&&11>=ua),Om=" ",km=!1;function Bm(i,s){switch(i){case"keyup":return CM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var eo=!1;function PM(i,s){switch(i){case"compositionend":return zm(s);case"keypress":return s.which!==32?null:(km=!0,Om);case"textInput":return i=s.data,i===Om&&km?null:i;default:return null}}function DM(i,s){if(eo)return i==="compositionend"||!Wu&&Bm(i,s)?(i=Dm(),xl=ku=Wr=null,eo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Um&&s.locale!=="ko"?null:s.data;default:return null}}var LM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!LM[i.type]:s==="textarea"}function Hm(i,s,l,f){de(f),s=Al(s,"onChange"),0<s.length&&(l=new Bu("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var fa=null,da=null;function NM(i){og(i,0)}function Ml(i){var s=so(i);if(Ze(s))return i}function IM(i,s){if(i==="change")return s}var Gm=!1;if(u){var Xu;if(u){var ju="oninput"in document;if(!ju){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),ju=typeof Wm.oninput=="function"}Xu=ju}else Xu=!1;Gm=Xu&&(!document.documentMode||9<document.documentMode)}function Xm(){fa&&(fa.detachEvent("onpropertychange",jm),da=fa=null)}function jm(i){if(i.propertyName==="value"&&Ml(da)){var s=[];Hm(s,da,i,ve(i)),Ye(NM,s)}}function FM(i,s,l){i==="focusin"?(Xm(),fa=s,da=l,fa.attachEvent("onpropertychange",jm)):i==="focusout"&&Xm()}function UM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ml(da)}function OM(i,s){if(i==="click")return Ml(s)}function kM(i,s){if(i==="input"||i==="change")return Ml(s)}function BM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Ri=typeof Object.is=="function"?Object.is:BM;function ha(i,s){if(Ri(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var g=l[f];if(!d.call(s,g)||!Ri(i[g],s[g]))return!1}return!0}function Ym(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function $m(i,s){var l=Ym(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ym(l)}}function qm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?qm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Km(){for(var i=window,s=gt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=gt(i.document)}return s}function Yu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function zM(i){var s=Km(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&qm(l.ownerDocument.documentElement,l)){if(f!==null&&Yu(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var g=l.textContent.length,S=Math.min(f.start,g);f=f.end===void 0?S:Math.min(f.end,g),!i.extend&&S>f&&(g=f,f=S,S=g),g=$m(l,S);var R=$m(l,f);g&&R&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==R.node||i.focusOffset!==R.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),i.removeAllRanges(),S>f?(i.addRange(s),i.extend(R.node,R.offset)):(s.setEnd(R.node,R.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var VM=u&&"documentMode"in document&&11>=document.documentMode,to=null,$u=null,pa=null,qu=!1;function Zm(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;qu||to==null||to!==gt(f)||(f=to,"selectionStart"in f&&Yu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),pa&&ha(pa,f)||(pa=f,f=Al($u,"onSelect"),0<f.length&&(s=new Bu("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=to)))}function wl(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var no={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},Ku={},Jm={};u&&(Jm=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function El(i){if(Ku[i])return Ku[i];if(!no[i])return i;var s=no[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Jm)return Ku[i]=s[l];return i}var Qm=El("animationend"),eg=El("animationiteration"),tg=El("animationstart"),ng=El("transitionend"),ig=new Map,rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(i,s){ig.set(i,s),a(s,[i])}for(var Zu=0;Zu<rg.length;Zu++){var Ju=rg[Zu],HM=Ju.toLowerCase(),GM=Ju[0].toUpperCase()+Ju.slice(1);Xr(HM,"on"+GM)}Xr(Qm,"onAnimationEnd"),Xr(eg,"onAnimationIteration"),Xr(tg,"onAnimationStart"),Xr("dblclick","onDoubleClick"),Xr("focusin","onFocus"),Xr("focusout","onBlur"),Xr(ng,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function sg(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,Br(f,s,void 0,i),i.currentTarget=null}function og(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],g=f.event;f=f.listeners;e:{var S=void 0;if(s)for(var R=f.length-1;0<=R;R--){var z=f[R],$=z.instance,pe=z.currentTarget;if(z=z.listener,$!==S&&g.isPropagationStopped())break e;sg(g,z,pe),S=$}else for(R=0;R<f.length;R++){if(z=f[R],$=z.instance,pe=z.currentTarget,z=z.listener,$!==S&&g.isPropagationStopped())break e;sg(g,z,pe),S=$}}}if(cr)throw i=ur,cr=!1,ur=null,i}function $t(i,s){var l=s[af];l===void 0&&(l=s[af]=new Set);var f=i+"__bubble";l.has(f)||(ag(s,i,2,!1),l.add(f))}function Qu(i,s,l){var f=0;s&&(f|=4),ag(l,i,f,s)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function ga(i){if(!i[Tl]){i[Tl]=!0,r.forEach(function(l){l!=="selectionchange"&&(WM.has(l)||Qu(l,!1,i),Qu(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Tl]||(s[Tl]=!0,Qu("selectionchange",!1,s))}}function ag(i,s,l,f){switch(Pm(s)){case 1:var g=rM;break;case 4:g=sM;break;default:g=Uu}l=g.bind(null,s,l,i),g=void 0,!ht||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(s,l,{capture:!0,passive:g}):i.addEventListener(s,l,!0):g!==void 0?i.addEventListener(s,l,{passive:g}):i.addEventListener(s,l,!1)}function ef(i,s,l,f,g){var S=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var R=f.tag;if(R===3||R===4){var z=f.stateNode.containerInfo;if(z===g||z.nodeType===8&&z.parentNode===g)break;if(R===4)for(R=f.return;R!==null;){var $=R.tag;if(($===3||$===4)&&($=R.stateNode.containerInfo,$===g||$.nodeType===8&&$.parentNode===g))return;R=R.return}for(;z!==null;){if(R=Ss(z),R===null)return;if($=R.tag,$===5||$===6){f=S=R;continue e}z=z.parentNode}}f=f.return}Ye(function(){var pe=S,Ce=ve(l),De=[];e:{var Ae=ig.get(i);if(Ae!==void 0){var qe=Bu,et=i;switch(i){case"keypress":if(_l(l)===0)break e;case"keydown":case"keyup":qe=yM;break;case"focusin":et="focus",qe=Hu;break;case"focusout":et="blur",qe=Hu;break;case"beforeblur":case"afterblur":qe=Hu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=Nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=lM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=wM;break;case Qm:case eg:case tg:qe=fM;break;case ng:qe=TM;break;case"scroll":qe=oM;break;case"wheel":qe=bM;break;case"copy":case"cut":case"paste":qe=hM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=Fm}var it=(s&4)!==0,fn=!it&&i==="scroll",ae=it?Ae!==null?Ae+"Capture":null:Ae;it=[];for(var Q=pe,ue;Q!==null;){ue=Q;var Fe=ue.stateNode;if(ue.tag===5&&Fe!==null&&(ue=Fe,ae!==null&&(Fe=vt(Q,ae),Fe!=null&&it.push(va(Q,Fe,ue)))),fn)break;Q=Q.return}0<it.length&&(Ae=new qe(Ae,et,null,l,Ce),De.push({event:Ae,listeners:it}))}}if((s&7)===0){e:{if(Ae=i==="mouseover"||i==="pointerover",qe=i==="mouseout"||i==="pointerout",Ae&&l!==Oe&&(et=l.relatedTarget||l.fromElement)&&(Ss(et)||et[gr]))break e;if((qe||Ae)&&(Ae=Ce.window===Ce?Ce:(Ae=Ce.ownerDocument)?Ae.defaultView||Ae.parentWindow:window,qe?(et=l.relatedTarget||l.toElement,qe=pe,et=et?Ss(et):null,et!==null&&(fn=dn(et),et!==fn||et.tag!==5&&et.tag!==6)&&(et=null)):(qe=null,et=pe),qe!==et)){if(it=Nm,Fe="onMouseLeave",ae="onMouseEnter",Q="mouse",(i==="pointerout"||i==="pointerover")&&(it=Fm,Fe="onPointerLeave",ae="onPointerEnter",Q="pointer"),fn=qe==null?Ae:so(qe),ue=et==null?Ae:so(et),Ae=new it(Fe,Q+"leave",qe,l,Ce),Ae.target=fn,Ae.relatedTarget=ue,Fe=null,Ss(Ce)===pe&&(it=new it(ae,Q+"enter",et,l,Ce),it.target=ue,it.relatedTarget=fn,Fe=it),fn=Fe,qe&&et)t:{for(it=qe,ae=et,Q=0,ue=it;ue;ue=io(ue))Q++;for(ue=0,Fe=ae;Fe;Fe=io(Fe))ue++;for(;0<Q-ue;)it=io(it),Q--;for(;0<ue-Q;)ae=io(ae),ue--;for(;Q--;){if(it===ae||ae!==null&&it===ae.alternate)break t;it=io(it),ae=io(ae)}it=null}else it=null;qe!==null&&lg(De,Ae,qe,it,!1),et!==null&&fn!==null&&lg(De,fn,et,it,!0)}}e:{if(Ae=pe?so(pe):window,qe=Ae.nodeName&&Ae.nodeName.toLowerCase(),qe==="select"||qe==="input"&&Ae.type==="file")var st=IM;else if(Vm(Ae))if(Gm)st=kM;else{st=UM;var ct=FM}else(qe=Ae.nodeName)&&qe.toLowerCase()==="input"&&(Ae.type==="checkbox"||Ae.type==="radio")&&(st=OM);if(st&&(st=st(i,pe))){Hm(De,st,l,Ce);break e}ct&&ct(i,Ae,pe),i==="focusout"&&(ct=Ae._wrapperState)&&ct.controlled&&Ae.type==="number"&&Nt(Ae,"number",Ae.value)}switch(ct=pe?so(pe):window,i){case"focusin":(Vm(ct)||ct.contentEditable==="true")&&(to=ct,$u=pe,pa=null);break;case"focusout":pa=$u=to=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,Zm(De,l,Ce);break;case"selectionchange":if(VM)break;case"keydown":case"keyup":Zm(De,l,Ce)}var ut;if(Wu)e:{switch(i){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else eo?Bm(i,l)&&(ft="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ft="onCompositionStart");ft&&(Um&&l.locale!=="ko"&&(eo||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&eo&&(ut=Dm()):(Wr=Ce,ku="value"in Wr?Wr.value:Wr.textContent,eo=!0)),ct=Al(pe,ft),0<ct.length&&(ft=new Im(ft,i,null,l,Ce),De.push({event:ft,listeners:ct}),ut?ft.data=ut:(ut=zm(l),ut!==null&&(ft.data=ut)))),(ut=RM?PM(i,l):DM(i,l))&&(pe=Al(pe,"onBeforeInput"),0<pe.length&&(Ce=new Im("onBeforeInput","beforeinput",null,l,Ce),De.push({event:Ce,listeners:pe}),Ce.data=ut))}og(De,s)})}function va(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Al(i,s){for(var l=s+"Capture",f=[];i!==null;){var g=i,S=g.stateNode;g.tag===5&&S!==null&&(g=S,S=vt(i,l),S!=null&&f.unshift(va(i,S,g)),S=vt(i,s),S!=null&&f.push(va(i,S,g))),i=i.return}return f}function io(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function lg(i,s,l,f,g){for(var S=s._reactName,R=[];l!==null&&l!==f;){var z=l,$=z.alternate,pe=z.stateNode;if($!==null&&$===f)break;z.tag===5&&pe!==null&&(z=pe,g?($=vt(l,S),$!=null&&R.unshift(va(l,$,z))):g||($=vt(l,S),$!=null&&R.push(va(l,$,z)))),l=l.return}R.length!==0&&i.push({event:s,listeners:R})}var XM=/\r\n?/g,jM=/\u0000|\uFFFD/g;function cg(i){return(typeof i=="string"?i:""+i).replace(XM,`
`).replace(jM,"")}function bl(i,s,l){if(s=cg(s),cg(i)!==s&&l)throw Error(t(425))}function Cl(){}var tf=null,nf=null;function rf(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var sf=typeof setTimeout=="function"?setTimeout:void 0,YM=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,$M=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(i){return ug.resolve(null).then(i).catch(qM)}:sf;function qM(i){setTimeout(function(){throw i})}function of(i,s){var l=s,f=0;do{var g=l.nextSibling;if(i.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(f===0){i.removeChild(g),aa(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=g}while(l);aa(s)}function jr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function fg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var ro=Math.random().toString(36).slice(2),ji="__reactFiber$"+ro,xa="__reactProps$"+ro,gr="__reactContainer$"+ro,af="__reactEvents$"+ro,KM="__reactListeners$"+ro,ZM="__reactHandles$"+ro;function Ss(i){var s=i[ji];if(s)return s;for(var l=i.parentNode;l;){if(s=l[gr]||l[ji]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=fg(i);i!==null;){if(l=i[ji])return l;i=fg(i)}return s}i=l,l=i.parentNode}return null}function _a(i){return i=i[ji]||i[gr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function so(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Rl(i){return i[xa]||null}var lf=[],oo=-1;function Yr(i){return{current:i}}function qt(i){0>oo||(i.current=lf[oo],lf[oo]=null,oo--)}function Yt(i,s){oo++,lf[oo]=i.current,i.current=s}var $r={},In=Yr($r),$n=Yr(!1),Ms=$r;function ao(i,s){var l=i.type.contextTypes;if(!l)return $r;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var g={},S;for(S in l)g[S]=s[S];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=g),g}function qn(i){return i=i.childContextTypes,i!=null}function Pl(){qt($n),qt(In)}function dg(i,s,l){if(In.current!==$r)throw Error(t(168));Yt(In,s),Yt($n,l)}function hg(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var g in f)if(!(g in s))throw Error(t(108,q(i)||"Unknown",g));return L({},l,f)}function Dl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||$r,Ms=In.current,Yt(In,i),Yt($n,$n.current),!0}function pg(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=hg(i,s,Ms),f.__reactInternalMemoizedMergedChildContext=i,qt($n),qt(In),Yt(In,i)):qt($n),Yt($n,l)}var vr=null,Ll=!1,cf=!1;function mg(i){vr===null?vr=[i]:vr.push(i)}function JM(i){Ll=!0,mg(i)}function qr(){if(!cf&&vr!==null){cf=!0;var i=0,s=St;try{var l=vr;for(St=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}vr=null,Ll=!1}catch(g){throw vr!==null&&(vr=vr.slice(i+1)),ys(ta,qr),g}finally{St=s,cf=!1}}return null}var lo=[],co=0,Nl=null,Il=0,mi=[],gi=0,ws=null,xr=1,_r="";function Es(i,s){lo[co++]=Il,lo[co++]=Nl,Nl=i,Il=s}function gg(i,s,l){mi[gi++]=xr,mi[gi++]=_r,mi[gi++]=ws,ws=i;var f=xr;i=_r;var g=32-Ve(f)-1;f&=~(1<<g),l+=1;var S=32-Ve(s)+g;if(30<S){var R=g-g%5;S=(f&(1<<R)-1).toString(32),f>>=R,g-=R,xr=1<<32-Ve(s)+g|l<<g|f,_r=S+i}else xr=1<<S|l<<g|f,_r=i}function uf(i){i.return!==null&&(Es(i,1),gg(i,1,0))}function ff(i){for(;i===Nl;)Nl=lo[--co],lo[co]=null,Il=lo[--co],lo[co]=null;for(;i===ws;)ws=mi[--gi],mi[gi]=null,_r=mi[--gi],mi[gi]=null,xr=mi[--gi],mi[gi]=null}var si=null,oi=null,Jt=!1,Pi=null;function vg(i,s){var l=yi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function xg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,si=i,oi=jr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,si=i,oi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ws!==null?{id:xr,overflow:_r}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=yi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,si=i,oi=null,!0):!1;default:return!1}}function df(i){return(i.mode&1)!==0&&(i.flags&128)===0}function hf(i){if(Jt){var s=oi;if(s){var l=s;if(!xg(i,s)){if(df(i))throw Error(t(418));s=jr(l.nextSibling);var f=si;s&&xg(i,s)?vg(f,l):(i.flags=i.flags&-4097|2,Jt=!1,si=i)}}else{if(df(i))throw Error(t(418));i.flags=i.flags&-4097|2,Jt=!1,si=i}}}function _g(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;si=i}function Fl(i){if(i!==si)return!1;if(!Jt)return _g(i),Jt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!rf(i.type,i.memoizedProps)),s&&(s=oi)){if(df(i))throw yg(),Error(t(418));for(;s;)vg(i,s),s=jr(s.nextSibling)}if(_g(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){oi=jr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}oi=null}}else oi=si?jr(i.stateNode.nextSibling):null;return!0}function yg(){for(var i=oi;i;)i=jr(i.nextSibling)}function uo(){oi=si=null,Jt=!1}function pf(i){Pi===null?Pi=[i]:Pi.push(i)}var QM=b.ReactCurrentBatchConfig;function ya(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var g=f,S=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===S?s.ref:(s=function(R){var z=g.refs;R===null?delete z[S]:z[S]=R},s._stringRef=S,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Ul(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Sg(i){var s=i._init;return s(i._payload)}function Mg(i){function s(ae,Q){if(i){var ue=ae.deletions;ue===null?(ae.deletions=[Q],ae.flags|=16):ue.push(Q)}}function l(ae,Q){if(!i)return null;for(;Q!==null;)s(ae,Q),Q=Q.sibling;return null}function f(ae,Q){for(ae=new Map;Q!==null;)Q.key!==null?ae.set(Q.key,Q):ae.set(Q.index,Q),Q=Q.sibling;return ae}function g(ae,Q){return ae=is(ae,Q),ae.index=0,ae.sibling=null,ae}function S(ae,Q,ue){return ae.index=ue,i?(ue=ae.alternate,ue!==null?(ue=ue.index,ue<Q?(ae.flags|=2,Q):ue):(ae.flags|=2,Q)):(ae.flags|=1048576,Q)}function R(ae){return i&&ae.alternate===null&&(ae.flags|=2),ae}function z(ae,Q,ue,Fe){return Q===null||Q.tag!==6?(Q=sd(ue,ae.mode,Fe),Q.return=ae,Q):(Q=g(Q,ue),Q.return=ae,Q)}function $(ae,Q,ue,Fe){var st=ue.type;return st===O?Ce(ae,Q,ue.props.children,Fe,ue.key):Q!==null&&(Q.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===ne&&Sg(st)===Q.type)?(Fe=g(Q,ue.props),Fe.ref=ya(ae,Q,ue),Fe.return=ae,Fe):(Fe=oc(ue.type,ue.key,ue.props,null,ae.mode,Fe),Fe.ref=ya(ae,Q,ue),Fe.return=ae,Fe)}function pe(ae,Q,ue,Fe){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ue.containerInfo||Q.stateNode.implementation!==ue.implementation?(Q=od(ue,ae.mode,Fe),Q.return=ae,Q):(Q=g(Q,ue.children||[]),Q.return=ae,Q)}function Ce(ae,Q,ue,Fe,st){return Q===null||Q.tag!==7?(Q=Ls(ue,ae.mode,Fe,st),Q.return=ae,Q):(Q=g(Q,ue),Q.return=ae,Q)}function De(ae,Q,ue){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=sd(""+Q,ae.mode,ue),Q.return=ae,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case D:return ue=oc(Q.type,Q.key,Q.props,null,ae.mode,ue),ue.ref=ya(ae,null,Q),ue.return=ae,ue;case N:return Q=od(Q,ae.mode,ue),Q.return=ae,Q;case ne:var Fe=Q._init;return De(ae,Fe(Q._payload),ue)}if(bt(Q)||Y(Q))return Q=Ls(Q,ae.mode,ue,null),Q.return=ae,Q;Ul(ae,Q)}return null}function Ae(ae,Q,ue,Fe){var st=Q!==null?Q.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return st!==null?null:z(ae,Q,""+ue,Fe);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case D:return ue.key===st?$(ae,Q,ue,Fe):null;case N:return ue.key===st?pe(ae,Q,ue,Fe):null;case ne:return st=ue._init,Ae(ae,Q,st(ue._payload),Fe)}if(bt(ue)||Y(ue))return st!==null?null:Ce(ae,Q,ue,Fe,null);Ul(ae,ue)}return null}function qe(ae,Q,ue,Fe,st){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return ae=ae.get(ue)||null,z(Q,ae,""+Fe,st);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case D:return ae=ae.get(Fe.key===null?ue:Fe.key)||null,$(Q,ae,Fe,st);case N:return ae=ae.get(Fe.key===null?ue:Fe.key)||null,pe(Q,ae,Fe,st);case ne:var ct=Fe._init;return qe(ae,Q,ue,ct(Fe._payload),st)}if(bt(Fe)||Y(Fe))return ae=ae.get(ue)||null,Ce(Q,ae,Fe,st,null);Ul(Q,Fe)}return null}function et(ae,Q,ue,Fe){for(var st=null,ct=null,ut=Q,ft=Q=0,Tn=null;ut!==null&&ft<ue.length;ft++){ut.index>ft?(Tn=ut,ut=null):Tn=ut.sibling;var Ut=Ae(ae,ut,ue[ft],Fe);if(Ut===null){ut===null&&(ut=Tn);break}i&&ut&&Ut.alternate===null&&s(ae,ut),Q=S(Ut,Q,ft),ct===null?st=Ut:ct.sibling=Ut,ct=Ut,ut=Tn}if(ft===ue.length)return l(ae,ut),Jt&&Es(ae,ft),st;if(ut===null){for(;ft<ue.length;ft++)ut=De(ae,ue[ft],Fe),ut!==null&&(Q=S(ut,Q,ft),ct===null?st=ut:ct.sibling=ut,ct=ut);return Jt&&Es(ae,ft),st}for(ut=f(ae,ut);ft<ue.length;ft++)Tn=qe(ut,ae,ft,ue[ft],Fe),Tn!==null&&(i&&Tn.alternate!==null&&ut.delete(Tn.key===null?ft:Tn.key),Q=S(Tn,Q,ft),ct===null?st=Tn:ct.sibling=Tn,ct=Tn);return i&&ut.forEach(function(rs){return s(ae,rs)}),Jt&&Es(ae,ft),st}function it(ae,Q,ue,Fe){var st=Y(ue);if(typeof st!="function")throw Error(t(150));if(ue=st.call(ue),ue==null)throw Error(t(151));for(var ct=st=null,ut=Q,ft=Q=0,Tn=null,Ut=ue.next();ut!==null&&!Ut.done;ft++,Ut=ue.next()){ut.index>ft?(Tn=ut,ut=null):Tn=ut.sibling;var rs=Ae(ae,ut,Ut.value,Fe);if(rs===null){ut===null&&(ut=Tn);break}i&&ut&&rs.alternate===null&&s(ae,ut),Q=S(rs,Q,ft),ct===null?st=rs:ct.sibling=rs,ct=rs,ut=Tn}if(Ut.done)return l(ae,ut),Jt&&Es(ae,ft),st;if(ut===null){for(;!Ut.done;ft++,Ut=ue.next())Ut=De(ae,Ut.value,Fe),Ut!==null&&(Q=S(Ut,Q,ft),ct===null?st=Ut:ct.sibling=Ut,ct=Ut);return Jt&&Es(ae,ft),st}for(ut=f(ae,ut);!Ut.done;ft++,Ut=ue.next())Ut=qe(ut,ae,ft,Ut.value,Fe),Ut!==null&&(i&&Ut.alternate!==null&&ut.delete(Ut.key===null?ft:Ut.key),Q=S(Ut,Q,ft),ct===null?st=Ut:ct.sibling=Ut,ct=Ut);return i&&ut.forEach(function(L1){return s(ae,L1)}),Jt&&Es(ae,ft),st}function fn(ae,Q,ue,Fe){if(typeof ue=="object"&&ue!==null&&ue.type===O&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case D:e:{for(var st=ue.key,ct=Q;ct!==null;){if(ct.key===st){if(st=ue.type,st===O){if(ct.tag===7){l(ae,ct.sibling),Q=g(ct,ue.props.children),Q.return=ae,ae=Q;break e}}else if(ct.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===ne&&Sg(st)===ct.type){l(ae,ct.sibling),Q=g(ct,ue.props),Q.ref=ya(ae,ct,ue),Q.return=ae,ae=Q;break e}l(ae,ct);break}else s(ae,ct);ct=ct.sibling}ue.type===O?(Q=Ls(ue.props.children,ae.mode,Fe,ue.key),Q.return=ae,ae=Q):(Fe=oc(ue.type,ue.key,ue.props,null,ae.mode,Fe),Fe.ref=ya(ae,Q,ue),Fe.return=ae,ae=Fe)}return R(ae);case N:e:{for(ct=ue.key;Q!==null;){if(Q.key===ct)if(Q.tag===4&&Q.stateNode.containerInfo===ue.containerInfo&&Q.stateNode.implementation===ue.implementation){l(ae,Q.sibling),Q=g(Q,ue.children||[]),Q.return=ae,ae=Q;break e}else{l(ae,Q);break}else s(ae,Q);Q=Q.sibling}Q=od(ue,ae.mode,Fe),Q.return=ae,ae=Q}return R(ae);case ne:return ct=ue._init,fn(ae,Q,ct(ue._payload),Fe)}if(bt(ue))return et(ae,Q,ue,Fe);if(Y(ue))return it(ae,Q,ue,Fe);Ul(ae,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,Q!==null&&Q.tag===6?(l(ae,Q.sibling),Q=g(Q,ue),Q.return=ae,ae=Q):(l(ae,Q),Q=sd(ue,ae.mode,Fe),Q.return=ae,ae=Q),R(ae)):l(ae,Q)}return fn}var fo=Mg(!0),wg=Mg(!1),Ol=Yr(null),kl=null,ho=null,mf=null;function gf(){mf=ho=kl=null}function vf(i){var s=Ol.current;qt(Ol),i._currentValue=s}function xf(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function po(i,s){kl=i,mf=ho=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Kn=!0),i.firstContext=null)}function vi(i){var s=i._currentValue;if(mf!==i)if(i={context:i,memoizedValue:s,next:null},ho===null){if(kl===null)throw Error(t(308));ho=i,kl.dependencies={lanes:0,firstContext:i}}else ho=ho.next=i;return s}var Ts=null;function _f(i){Ts===null?Ts=[i]:Ts.push(i)}function Eg(i,s,l,f){var g=s.interleaved;return g===null?(l.next=l,_f(s)):(l.next=g.next,g.next=l),s.interleaved=l,yr(i,f)}function yr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Kr=!1;function yf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Sr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Zr(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(It&2)!==0){var g=f.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s,yr(i,l)}return g=f.interleaved,g===null?(s.next=s,_f(f)):(s.next=g.next,g.next=s),f.interleaved=s,yr(i,l)}function Bl(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Nn(i,l)}}function Ag(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var g=null,S=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};S===null?g=S=R:S=S.next=R,l=l.next}while(l!==null);S===null?g=S=s:S=S.next=s}else g=S=s;l={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:S,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function zl(i,s,l,f){var g=i.updateQueue;Kr=!1;var S=g.firstBaseUpdate,R=g.lastBaseUpdate,z=g.shared.pending;if(z!==null){g.shared.pending=null;var $=z,pe=$.next;$.next=null,R===null?S=pe:R.next=pe,R=$;var Ce=i.alternate;Ce!==null&&(Ce=Ce.updateQueue,z=Ce.lastBaseUpdate,z!==R&&(z===null?Ce.firstBaseUpdate=pe:z.next=pe,Ce.lastBaseUpdate=$))}if(S!==null){var De=g.baseState;R=0,Ce=pe=$=null,z=S;do{var Ae=z.lane,qe=z.eventTime;if((f&Ae)===Ae){Ce!==null&&(Ce=Ce.next={eventTime:qe,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var et=i,it=z;switch(Ae=s,qe=l,it.tag){case 1:if(et=it.payload,typeof et=="function"){De=et.call(qe,De,Ae);break e}De=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=it.payload,Ae=typeof et=="function"?et.call(qe,De,Ae):et,Ae==null)break e;De=L({},De,Ae);break e;case 2:Kr=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,Ae=g.effects,Ae===null?g.effects=[z]:Ae.push(z))}else qe={eventTime:qe,lane:Ae,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Ce===null?(pe=Ce=qe,$=De):Ce=Ce.next=qe,R|=Ae;if(z=z.next,z===null){if(z=g.shared.pending,z===null)break;Ae=z,z=Ae.next,Ae.next=null,g.lastBaseUpdate=Ae,g.shared.pending=null}}while(!0);if(Ce===null&&($=De),g.baseState=$,g.firstBaseUpdate=pe,g.lastBaseUpdate=Ce,s=g.shared.interleaved,s!==null){g=s;do R|=g.lane,g=g.next;while(g!==s)}else S===null&&(g.shared.lanes=0);Cs|=R,i.lanes=R,i.memoizedState=De}}function bg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],g=f.callback;if(g!==null){if(f.callback=null,f=l,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var Sa={},Yi=Yr(Sa),Ma=Yr(Sa),wa=Yr(Sa);function As(i){if(i===Sa)throw Error(t(174));return i}function Sf(i,s){switch(Yt(wa,s),Yt(Ma,i),Yt(Yi,Sa),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:T(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=T(s,i)}qt(Yi),Yt(Yi,s)}function mo(){qt(Yi),qt(Ma),qt(wa)}function Cg(i){As(wa.current);var s=As(Yi.current),l=T(s,i.type);s!==l&&(Yt(Ma,i),Yt(Yi,l))}function Mf(i){Ma.current===i&&(qt(Yi),qt(Ma))}var nn=Yr(0);function Vl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var wf=[];function Ef(){for(var i=0;i<wf.length;i++)wf[i]._workInProgressVersionPrimary=null;wf.length=0}var Hl=b.ReactCurrentDispatcher,Tf=b.ReactCurrentBatchConfig,bs=0,rn=null,xn=null,wn=null,Gl=!1,Ea=!1,Ta=0,e1=0;function Fn(){throw Error(t(321))}function Af(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Ri(i[l],s[l]))return!1;return!0}function bf(i,s,l,f,g,S){if(bs=S,rn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Hl.current=i===null||i.memoizedState===null?r1:s1,i=l(f,g),Ea){S=0;do{if(Ea=!1,Ta=0,25<=S)throw Error(t(301));S+=1,wn=xn=null,s.updateQueue=null,Hl.current=o1,i=l(f,g)}while(Ea)}if(Hl.current=jl,s=xn!==null&&xn.next!==null,bs=0,wn=xn=rn=null,Gl=!1,s)throw Error(t(300));return i}function Cf(){var i=Ta!==0;return Ta=0,i}function $i(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?rn.memoizedState=wn=i:wn=wn.next=i,wn}function xi(){if(xn===null){var i=rn.alternate;i=i!==null?i.memoizedState:null}else i=xn.next;var s=wn===null?rn.memoizedState:wn.next;if(s!==null)wn=s,xn=i;else{if(i===null)throw Error(t(310));xn=i,i={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},wn===null?rn.memoizedState=wn=i:wn=wn.next=i}return wn}function Aa(i,s){return typeof s=="function"?s(i):s}function Rf(i){var s=xi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=xn,g=f.baseQueue,S=l.pending;if(S!==null){if(g!==null){var R=g.next;g.next=S.next,S.next=R}f.baseQueue=g=S,l.pending=null}if(g!==null){S=g.next,f=f.baseState;var z=R=null,$=null,pe=S;do{var Ce=pe.lane;if((bs&Ce)===Ce)$!==null&&($=$.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),f=pe.hasEagerState?pe.eagerState:i(f,pe.action);else{var De={lane:Ce,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};$===null?(z=$=De,R=f):$=$.next=De,rn.lanes|=Ce,Cs|=Ce}pe=pe.next}while(pe!==null&&pe!==S);$===null?R=f:$.next=z,Ri(f,s.memoizedState)||(Kn=!0),s.memoizedState=f,s.baseState=R,s.baseQueue=$,l.lastRenderedState=f}if(i=l.interleaved,i!==null){g=i;do S=g.lane,rn.lanes|=S,Cs|=S,g=g.next;while(g!==i)}else g===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Pf(i){var s=xi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,g=l.pending,S=s.memoizedState;if(g!==null){l.pending=null;var R=g=g.next;do S=i(S,R.action),R=R.next;while(R!==g);Ri(S,s.memoizedState)||(Kn=!0),s.memoizedState=S,s.baseQueue===null&&(s.baseState=S),l.lastRenderedState=S}return[S,f]}function Rg(){}function Pg(i,s){var l=rn,f=xi(),g=s(),S=!Ri(f.memoizedState,g);if(S&&(f.memoizedState=g,Kn=!0),f=f.queue,Df(Ng.bind(null,l,f,i),[i]),f.getSnapshot!==s||S||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,ba(9,Lg.bind(null,l,f,g,s),void 0,null),En===null)throw Error(t(349));(bs&30)!==0||Dg(l,s,g)}return g}function Dg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=rn.updateQueue,s===null?(s={lastEffect:null,stores:null},rn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Lg(i,s,l,f){s.value=l,s.getSnapshot=f,Ig(s)&&Fg(i)}function Ng(i,s,l){return l(function(){Ig(s)&&Fg(i)})}function Ig(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Ri(i,l)}catch{return!0}}function Fg(i){var s=yr(i,1);s!==null&&Ii(s,i,1,-1)}function Ug(i){var s=$i();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:i},s.queue=i,i=i.dispatch=i1.bind(null,rn,i),[s.memoizedState,i]}function ba(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=rn.updateQueue,s===null?(s={lastEffect:null,stores:null},rn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function Og(){return xi().memoizedState}function Wl(i,s,l,f){var g=$i();rn.flags|=i,g.memoizedState=ba(1|s,l,void 0,f===void 0?null:f)}function Xl(i,s,l,f){var g=xi();f=f===void 0?null:f;var S=void 0;if(xn!==null){var R=xn.memoizedState;if(S=R.destroy,f!==null&&Af(f,R.deps)){g.memoizedState=ba(s,l,S,f);return}}rn.flags|=i,g.memoizedState=ba(1|s,l,S,f)}function kg(i,s){return Wl(8390656,8,i,s)}function Df(i,s){return Xl(2048,8,i,s)}function Bg(i,s){return Xl(4,2,i,s)}function zg(i,s){return Xl(4,4,i,s)}function Vg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Hg(i,s,l){return l=l!=null?l.concat([i]):null,Xl(4,4,Vg.bind(null,s,i),l)}function Lf(){}function Gg(i,s){var l=xi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Af(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function Wg(i,s){var l=xi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Af(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function Xg(i,s,l){return(bs&21)===0?(i.baseState&&(i.baseState=!1,Kn=!0),i.memoizedState=l):(Ri(l,s)||(l=vn(),rn.lanes|=l,Cs|=l,i.baseState=!0),s)}function t1(i,s){var l=St;St=l!==0&&4>l?l:4,i(!0);var f=Tf.transition;Tf.transition={};try{i(!1),s()}finally{St=l,Tf.transition=f}}function jg(){return xi().memoizedState}function n1(i,s,l){var f=ts(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Yg(i))$g(s,l);else if(l=Eg(i,s,l,f),l!==null){var g=Wn();Ii(l,i,f,g),qg(l,s,f)}}function i1(i,s,l){var f=ts(i),g={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Yg(i))$g(s,g);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=s.lastRenderedReducer,S!==null))try{var R=s.lastRenderedState,z=S(R,l);if(g.hasEagerState=!0,g.eagerState=z,Ri(z,R)){var $=s.interleaved;$===null?(g.next=g,_f(s)):(g.next=$.next,$.next=g),s.interleaved=g;return}}catch{}finally{}l=Eg(i,s,g,f),l!==null&&(g=Wn(),Ii(l,i,f,g),qg(l,s,f))}}function Yg(i){var s=i.alternate;return i===rn||s!==null&&s===rn}function $g(i,s){Ea=Gl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function qg(i,s,l){if((l&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Nn(i,l)}}var jl={readContext:vi,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useInsertionEffect:Fn,useLayoutEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useMutableSource:Fn,useSyncExternalStore:Fn,useId:Fn,unstable_isNewReconciler:!1},r1={readContext:vi,useCallback:function(i,s){return $i().memoizedState=[i,s===void 0?null:s],i},useContext:vi,useEffect:kg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Wl(4194308,4,Vg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Wl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Wl(4,2,i,s)},useMemo:function(i,s){var l=$i();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=$i();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=n1.bind(null,rn,i),[f.memoizedState,i]},useRef:function(i){var s=$i();return i={current:i},s.memoizedState=i},useState:Ug,useDebugValue:Lf,useDeferredValue:function(i){return $i().memoizedState=i},useTransition:function(){var i=Ug(!1),s=i[0];return i=t1.bind(null,i[1]),$i().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=rn,g=$i();if(Jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),En===null)throw Error(t(349));(bs&30)!==0||Dg(f,s,l)}g.memoizedState=l;var S={value:l,getSnapshot:s};return g.queue=S,kg(Ng.bind(null,f,S,i),[i]),f.flags|=2048,ba(9,Lg.bind(null,f,S,l,s),void 0,null),l},useId:function(){var i=$i(),s=En.identifierPrefix;if(Jt){var l=_r,f=xr;l=(f&~(1<<32-Ve(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ta++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=e1++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},s1={readContext:vi,useCallback:Gg,useContext:vi,useEffect:Df,useImperativeHandle:Hg,useInsertionEffect:Bg,useLayoutEffect:zg,useMemo:Wg,useReducer:Rf,useRef:Og,useState:function(){return Rf(Aa)},useDebugValue:Lf,useDeferredValue:function(i){var s=xi();return Xg(s,xn.memoizedState,i)},useTransition:function(){var i=Rf(Aa)[0],s=xi().memoizedState;return[i,s]},useMutableSource:Rg,useSyncExternalStore:Pg,useId:jg,unstable_isNewReconciler:!1},o1={readContext:vi,useCallback:Gg,useContext:vi,useEffect:Df,useImperativeHandle:Hg,useInsertionEffect:Bg,useLayoutEffect:zg,useMemo:Wg,useReducer:Pf,useRef:Og,useState:function(){return Pf(Aa)},useDebugValue:Lf,useDeferredValue:function(i){var s=xi();return xn===null?s.memoizedState=i:Xg(s,xn.memoizedState,i)},useTransition:function(){var i=Pf(Aa)[0],s=xi().memoizedState;return[i,s]},useMutableSource:Rg,useSyncExternalStore:Pg,useId:jg,unstable_isNewReconciler:!1};function Di(i,s){if(i&&i.defaultProps){s=L({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Nf(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:L({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Yl={isMounted:function(i){return(i=i._reactInternals)?dn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=Wn(),g=ts(i),S=Sr(f,g);S.payload=s,l!=null&&(S.callback=l),s=Zr(i,S,g),s!==null&&(Ii(s,i,g,f),Bl(s,i,g))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=Wn(),g=ts(i),S=Sr(f,g);S.tag=1,S.payload=s,l!=null&&(S.callback=l),s=Zr(i,S,g),s!==null&&(Ii(s,i,g,f),Bl(s,i,g))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Wn(),f=ts(i),g=Sr(l,f);g.tag=2,s!=null&&(g.callback=s),s=Zr(i,g,f),s!==null&&(Ii(s,i,f,l),Bl(s,i,f))}};function Kg(i,s,l,f,g,S,R){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,S,R):s.prototype&&s.prototype.isPureReactComponent?!ha(l,f)||!ha(g,S):!0}function Zg(i,s,l){var f=!1,g=$r,S=s.contextType;return typeof S=="object"&&S!==null?S=vi(S):(g=qn(s)?Ms:In.current,f=s.contextTypes,S=(f=f!=null)?ao(i,g):$r),s=new s(l,S),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Yl,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=S),s}function Jg(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&Yl.enqueueReplaceState(s,s.state,null)}function If(i,s,l,f){var g=i.stateNode;g.props=l,g.state=i.memoizedState,g.refs={},yf(i);var S=s.contextType;typeof S=="object"&&S!==null?g.context=vi(S):(S=qn(s)?Ms:In.current,g.context=ao(i,S)),g.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Nf(i,s,S,l),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&Yl.enqueueReplaceState(g,g.state,null),zl(i,l,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function go(i,s){try{var l="",f=s;do l+=Ee(f),f=f.return;while(f);var g=l}catch(S){g=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:s,stack:g,digest:null}}function Ff(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Uf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var a1=typeof WeakMap=="function"?WeakMap:Map;function Qg(i,s,l){l=Sr(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){ec||(ec=!0,Zf=f),Uf(i,s)},l}function e0(i,s,l){l=Sr(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=s.value;l.payload=function(){return f(g)},l.callback=function(){Uf(i,s)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(l.callback=function(){Uf(i,s),typeof f!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})}),l}function t0(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new a1;var g=new Set;f.set(s,g)}else g=f.get(s),g===void 0&&(g=new Set,f.set(s,g));g.has(l)||(g.add(l),i=S1.bind(null,i,s,l),s.then(i,i))}function n0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function i0(i,s,l,f,g){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Sr(-1,1),s.tag=2,Zr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var l1=b.ReactCurrentOwner,Kn=!1;function Gn(i,s,l,f){s.child=i===null?wg(s,null,l,f):fo(s,i.child,l,f)}function r0(i,s,l,f,g){l=l.render;var S=s.ref;return po(s,g),f=bf(i,s,l,f,S,g),l=Cf(),i!==null&&!Kn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,Mr(i,s,g)):(Jt&&l&&uf(s),s.flags|=1,Gn(i,s,f,g),s.child)}function s0(i,s,l,f,g){if(i===null){var S=l.type;return typeof S=="function"&&!rd(S)&&S.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=S,o0(i,s,S,f,g)):(i=oc(l.type,null,f,s,s.mode,g),i.ref=s.ref,i.return=s,s.child=i)}if(S=i.child,(i.lanes&g)===0){var R=S.memoizedProps;if(l=l.compare,l=l!==null?l:ha,l(R,f)&&i.ref===s.ref)return Mr(i,s,g)}return s.flags|=1,i=is(S,f),i.ref=s.ref,i.return=s,s.child=i}function o0(i,s,l,f,g){if(i!==null){var S=i.memoizedProps;if(ha(S,f)&&i.ref===s.ref)if(Kn=!1,s.pendingProps=f=S,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Kn=!0);else return s.lanes=i.lanes,Mr(i,s,g)}return Of(i,s,l,f,g)}function a0(i,s,l){var f=s.pendingProps,g=f.children,S=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Yt(xo,ai),ai|=l;else{if((l&1073741824)===0)return i=S!==null?S.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Yt(xo,ai),ai|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=S!==null?S.baseLanes:l,Yt(xo,ai),ai|=f}else S!==null?(f=S.baseLanes|l,s.memoizedState=null):f=l,Yt(xo,ai),ai|=f;return Gn(i,s,g,l),s.child}function l0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Of(i,s,l,f,g){var S=qn(l)?Ms:In.current;return S=ao(s,S),po(s,g),l=bf(i,s,l,f,S,g),f=Cf(),i!==null&&!Kn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,Mr(i,s,g)):(Jt&&f&&uf(s),s.flags|=1,Gn(i,s,l,g),s.child)}function c0(i,s,l,f,g){if(qn(l)){var S=!0;Dl(s)}else S=!1;if(po(s,g),s.stateNode===null)ql(i,s),Zg(s,l,f),If(s,l,f,g),f=!0;else if(i===null){var R=s.stateNode,z=s.memoizedProps;R.props=z;var $=R.context,pe=l.contextType;typeof pe=="object"&&pe!==null?pe=vi(pe):(pe=qn(l)?Ms:In.current,pe=ao(s,pe));var Ce=l.getDerivedStateFromProps,De=typeof Ce=="function"||typeof R.getSnapshotBeforeUpdate=="function";De||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(z!==f||$!==pe)&&Jg(s,R,f,pe),Kr=!1;var Ae=s.memoizedState;R.state=Ae,zl(s,f,R,g),$=s.memoizedState,z!==f||Ae!==$||$n.current||Kr?(typeof Ce=="function"&&(Nf(s,l,Ce,f),$=s.memoizedState),(z=Kr||Kg(s,l,z,f,Ae,$,pe))?(De||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(s.flags|=4194308)):(typeof R.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=$),R.props=f,R.state=$,R.context=pe,f=z):(typeof R.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{R=s.stateNode,Tg(i,s),z=s.memoizedProps,pe=s.type===s.elementType?z:Di(s.type,z),R.props=pe,De=s.pendingProps,Ae=R.context,$=l.contextType,typeof $=="object"&&$!==null?$=vi($):($=qn(l)?Ms:In.current,$=ao(s,$));var qe=l.getDerivedStateFromProps;(Ce=typeof qe=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(z!==De||Ae!==$)&&Jg(s,R,f,$),Kr=!1,Ae=s.memoizedState,R.state=Ae,zl(s,f,R,g);var et=s.memoizedState;z!==De||Ae!==et||$n.current||Kr?(typeof qe=="function"&&(Nf(s,l,qe,f),et=s.memoizedState),(pe=Kr||Kg(s,l,pe,f,Ae,et,$)||!1)?(Ce||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(f,et,$),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(f,et,$)),typeof R.componentDidUpdate=="function"&&(s.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof R.componentDidUpdate!="function"||z===i.memoizedProps&&Ae===i.memoizedState||(s.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&Ae===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=et),R.props=f,R.state=et,R.context=$,f=pe):(typeof R.componentDidUpdate!="function"||z===i.memoizedProps&&Ae===i.memoizedState||(s.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&Ae===i.memoizedState||(s.flags|=1024),f=!1)}return kf(i,s,l,f,S,g)}function kf(i,s,l,f,g,S){l0(i,s);var R=(s.flags&128)!==0;if(!f&&!R)return g&&pg(s,l,!1),Mr(i,s,S);f=s.stateNode,l1.current=s;var z=R&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&R?(s.child=fo(s,i.child,null,S),s.child=fo(s,null,z,S)):Gn(i,s,z,S),s.memoizedState=f.state,g&&pg(s,l,!0),s.child}function u0(i){var s=i.stateNode;s.pendingContext?dg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&dg(i,s.context,!1),Sf(i,s.containerInfo)}function f0(i,s,l,f,g){return uo(),pf(g),s.flags|=256,Gn(i,s,l,f),s.child}var Bf={dehydrated:null,treeContext:null,retryLane:0};function zf(i){return{baseLanes:i,cachePool:null,transitions:null}}function d0(i,s,l){var f=s.pendingProps,g=nn.current,S=!1,R=(s.flags&128)!==0,z;if((z=R)||(z=i!==null&&i.memoizedState===null?!1:(g&2)!==0),z?(S=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Yt(nn,g&1),i===null)return hf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(R=f.children,i=f.fallback,S?(f=s.mode,S=s.child,R={mode:"hidden",children:R},(f&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=R):S=ac(R,f,0,null),i=Ls(i,f,l,null),S.return=s,i.return=s,S.sibling=i,s.child=S,s.child.memoizedState=zf(l),s.memoizedState=Bf,i):Vf(s,R));if(g=i.memoizedState,g!==null&&(z=g.dehydrated,z!==null))return c1(i,s,R,f,z,g,l);if(S){S=f.fallback,R=s.mode,g=i.child,z=g.sibling;var $={mode:"hidden",children:f.children};return(R&1)===0&&s.child!==g?(f=s.child,f.childLanes=0,f.pendingProps=$,s.deletions=null):(f=is(g,$),f.subtreeFlags=g.subtreeFlags&14680064),z!==null?S=is(z,S):(S=Ls(S,R,l,null),S.flags|=2),S.return=s,f.return=s,f.sibling=S,s.child=f,f=S,S=s.child,R=i.child.memoizedState,R=R===null?zf(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},S.memoizedState=R,S.childLanes=i.childLanes&~l,s.memoizedState=Bf,f}return S=i.child,i=S.sibling,f=is(S,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function Vf(i,s){return s=ac({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function $l(i,s,l,f){return f!==null&&pf(f),fo(s,i.child,null,l),i=Vf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function c1(i,s,l,f,g,S,R){if(l)return s.flags&256?(s.flags&=-257,f=Ff(Error(t(422))),$l(i,s,R,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(S=f.fallback,g=s.mode,f=ac({mode:"visible",children:f.children},g,0,null),S=Ls(S,g,R,null),S.flags|=2,f.return=s,S.return=s,f.sibling=S,s.child=f,(s.mode&1)!==0&&fo(s,i.child,null,R),s.child.memoizedState=zf(R),s.memoizedState=Bf,S);if((s.mode&1)===0)return $l(i,s,R,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var z=f.dgst;return f=z,S=Error(t(419)),f=Ff(S,f,void 0),$l(i,s,R,f)}if(z=(R&i.childLanes)!==0,Kn||z){if(f=En,f!==null){switch(R&-R){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|R))!==0?0:g,g!==0&&g!==S.retryLane&&(S.retryLane=g,yr(i,g),Ii(f,i,g,-1))}return id(),f=Ff(Error(t(421))),$l(i,s,R,f)}return g.data==="$?"?(s.flags|=128,s.child=i.child,s=M1.bind(null,i),g._reactRetry=s,null):(i=S.treeContext,oi=jr(g.nextSibling),si=s,Jt=!0,Pi=null,i!==null&&(mi[gi++]=xr,mi[gi++]=_r,mi[gi++]=ws,xr=i.id,_r=i.overflow,ws=s),s=Vf(s,f.children),s.flags|=4096,s)}function h0(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),xf(i.return,s,l)}function Hf(i,s,l,f,g){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:g}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=f,S.tail=l,S.tailMode=g)}function p0(i,s,l){var f=s.pendingProps,g=f.revealOrder,S=f.tail;if(Gn(i,s,f.children,l),f=nn.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&h0(i,l,s);else if(i.tag===19)h0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Yt(nn,f),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(l=s.child,g=null;l!==null;)i=l.alternate,i!==null&&Vl(i)===null&&(g=l),l=l.sibling;l=g,l===null?(g=s.child,s.child=null):(g=l.sibling,l.sibling=null),Hf(s,!1,g,l,S);break;case"backwards":for(l=null,g=s.child,s.child=null;g!==null;){if(i=g.alternate,i!==null&&Vl(i)===null){s.child=g;break}i=g.sibling,g.sibling=l,l=g,g=i}Hf(s,!0,l,null,S);break;case"together":Hf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ql(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Mr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Cs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=is(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=is(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function u1(i,s,l){switch(s.tag){case 3:u0(s),uo();break;case 5:Cg(s);break;case 1:qn(s.type)&&Dl(s);break;case 4:Sf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,g=s.memoizedProps.value;Yt(Ol,f._currentValue),f._currentValue=g;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Yt(nn,nn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?d0(i,s,l):(Yt(nn,nn.current&1),i=Mr(i,s,l),i!==null?i.sibling:null);Yt(nn,nn.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(i.flags&128)!==0){if(f)return p0(i,s,l);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Yt(nn,nn.current),f)break;return null;case 22:case 23:return s.lanes=0,a0(i,s,l)}return Mr(i,s,l)}var m0,Gf,g0,v0;m0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Gf=function(){},g0=function(i,s,l,f){var g=i.memoizedProps;if(g!==f){i=s.stateNode,As(Yi.current);var S=null;switch(l){case"input":g=He(i,g),f=He(i,f),S=[];break;case"select":g=L({},g,{value:void 0}),f=L({},f,{value:void 0}),S=[];break;case"textarea":g=Gt(i,g),f=Gt(i,f),S=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Cl)}nt(l,f);var R;l=null;for(pe in g)if(!f.hasOwnProperty(pe)&&g.hasOwnProperty(pe)&&g[pe]!=null)if(pe==="style"){var z=g[pe];for(R in z)z.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?S||(S=[]):(S=S||[]).push(pe,null));for(pe in f){var $=f[pe];if(z=g!=null?g[pe]:void 0,f.hasOwnProperty(pe)&&$!==z&&($!=null||z!=null))if(pe==="style")if(z){for(R in z)!z.hasOwnProperty(R)||$&&$.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in $)$.hasOwnProperty(R)&&z[R]!==$[R]&&(l||(l={}),l[R]=$[R])}else l||(S||(S=[]),S.push(pe,l)),l=$;else pe==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,z=z?z.__html:void 0,$!=null&&z!==$&&(S=S||[]).push(pe,$)):pe==="children"?typeof $!="string"&&typeof $!="number"||(S=S||[]).push(pe,""+$):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?($!=null&&pe==="onScroll"&&$t("scroll",i),S||z===$||(S=[])):(S=S||[]).push(pe,$))}l&&(S=S||[]).push("style",l);var pe=S;(s.updateQueue=pe)&&(s.flags|=4)}},v0=function(i,s,l,f){l!==f&&(s.flags|=4)};function Ca(i,s){if(!Jt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function Un(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var g=i.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function f1(i,s,l){var f=s.pendingProps;switch(ff(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Un(s),null;case 1:return qn(s.type)&&Pl(),Un(s),null;case 3:return f=s.stateNode,mo(),qt($n),qt(In),Ef(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Fl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Pi!==null&&(ed(Pi),Pi=null))),Gf(i,s),Un(s),null;case 5:Mf(s);var g=As(wa.current);if(l=s.type,i!==null&&s.stateNode!=null)g0(i,s,l,f,g),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Un(s),null}if(i=As(Yi.current),Fl(s)){f=s.stateNode,l=s.type;var S=s.memoizedProps;switch(f[ji]=s,f[xa]=S,i=(s.mode&1)!==0,l){case"dialog":$t("cancel",f),$t("close",f);break;case"iframe":case"object":case"embed":$t("load",f);break;case"video":case"audio":for(g=0;g<ma.length;g++)$t(ma[g],f);break;case"source":$t("error",f);break;case"img":case"image":case"link":$t("error",f),$t("load",f);break;case"details":$t("toggle",f);break;case"input":ot(f,S),$t("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!S.multiple},$t("invalid",f);break;case"textarea":J(f,S),$t("invalid",f)}nt(l,S),g=null;for(var R in S)if(S.hasOwnProperty(R)){var z=S[R];R==="children"?typeof z=="string"?f.textContent!==z&&(S.suppressHydrationWarning!==!0&&bl(f.textContent,z,i),g=["children",z]):typeof z=="number"&&f.textContent!==""+z&&(S.suppressHydrationWarning!==!0&&bl(f.textContent,z,i),g=["children",""+z]):o.hasOwnProperty(R)&&z!=null&&R==="onScroll"&&$t("scroll",f)}switch(l){case"input":Re(f),yt(f,S,!0);break;case"textarea":Re(f),Tt(f);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(f.onclick=Cl)}f=g,s.updateQueue=f,f!==null&&(s.flags|=4)}else{R=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=k(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=R.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=R.createElement(l,{is:f.is}):(i=R.createElement(l),l==="select"&&(R=i,f.multiple?R.multiple=!0:f.size&&(R.size=f.size))):i=R.createElementNS(i,l),i[ji]=s,i[xa]=f,m0(i,s,!1,!1),s.stateNode=i;e:{switch(R=ze(l,f),l){case"dialog":$t("cancel",i),$t("close",i),g=f;break;case"iframe":case"object":case"embed":$t("load",i),g=f;break;case"video":case"audio":for(g=0;g<ma.length;g++)$t(ma[g],i);g=f;break;case"source":$t("error",i),g=f;break;case"img":case"image":case"link":$t("error",i),$t("load",i),g=f;break;case"details":$t("toggle",i),g=f;break;case"input":ot(i,f),g=He(i,f),$t("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=L({},f,{value:void 0}),$t("invalid",i);break;case"textarea":J(i,f),g=Gt(i,f),$t("invalid",i);break;default:g=f}nt(l,g),z=g;for(S in z)if(z.hasOwnProperty(S)){var $=z[S];S==="style"?xe(i,$):S==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&ce(i,$)):S==="children"?typeof $=="string"?(l!=="textarea"||$!=="")&&me(i,$):typeof $=="number"&&me(i,""+$):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(o.hasOwnProperty(S)?$!=null&&S==="onScroll"&&$t("scroll",i):$!=null&&F(i,S,$,R))}switch(l){case"input":Re(i),yt(i,f,!1);break;case"textarea":Re(i),Tt(i);break;case"option":f.value!=null&&i.setAttribute("value",""+ie(f.value));break;case"select":i.multiple=!!f.multiple,S=f.value,S!=null?Et(i,!!f.multiple,S,!1):f.defaultValue!=null&&Et(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=Cl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Un(s),null;case 6:if(i&&s.stateNode!=null)v0(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=As(wa.current),As(Yi.current),Fl(s)){if(f=s.stateNode,l=s.memoizedProps,f[ji]=s,(S=f.nodeValue!==l)&&(i=si,i!==null))switch(i.tag){case 3:bl(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&bl(f.nodeValue,l,(i.mode&1)!==0)}S&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[ji]=s,s.stateNode=f}return Un(s),null;case 13:if(qt(nn),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Jt&&oi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)yg(),uo(),s.flags|=98560,S=!1;else if(S=Fl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=s.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[ji]=s}else uo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Un(s),S=!1}else Pi!==null&&(ed(Pi),Pi=null),S=!0;if(!S)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(nn.current&1)!==0?_n===0&&(_n=3):id())),s.updateQueue!==null&&(s.flags|=4),Un(s),null);case 4:return mo(),Gf(i,s),i===null&&ga(s.stateNode.containerInfo),Un(s),null;case 10:return vf(s.type._context),Un(s),null;case 17:return qn(s.type)&&Pl(),Un(s),null;case 19:if(qt(nn),S=s.memoizedState,S===null)return Un(s),null;if(f=(s.flags&128)!==0,R=S.rendering,R===null)if(f)Ca(S,!1);else{if(_n!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(R=Vl(i),R!==null){for(s.flags|=128,Ca(S,!1),f=R.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)S=l,i=f,S.flags&=14680066,R=S.alternate,R===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=R.childLanes,S.lanes=R.lanes,S.child=R.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=R.memoizedProps,S.memoizedState=R.memoizedState,S.updateQueue=R.updateQueue,S.type=R.type,i=R.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Yt(nn,nn.current&1|2),s.child}i=i.sibling}S.tail!==null&&tn()>_o&&(s.flags|=128,f=!0,Ca(S,!1),s.lanes=4194304)}else{if(!f)if(i=Vl(R),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ca(S,!0),S.tail===null&&S.tailMode==="hidden"&&!R.alternate&&!Jt)return Un(s),null}else 2*tn()-S.renderingStartTime>_o&&l!==1073741824&&(s.flags|=128,f=!0,Ca(S,!1),s.lanes=4194304);S.isBackwards?(R.sibling=s.child,s.child=R):(l=S.last,l!==null?l.sibling=R:s.child=R,S.last=R)}return S.tail!==null?(s=S.tail,S.rendering=s,S.tail=s.sibling,S.renderingStartTime=tn(),s.sibling=null,l=nn.current,Yt(nn,f?l&1|2:l&1),s):(Un(s),null);case 22:case 23:return nd(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(ai&1073741824)!==0&&(Un(s),s.subtreeFlags&6&&(s.flags|=8192)):Un(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function d1(i,s){switch(ff(s),s.tag){case 1:return qn(s.type)&&Pl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return mo(),qt($n),qt(In),Ef(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Mf(s),null;case 13:if(qt(nn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));uo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return qt(nn),null;case 4:return mo(),null;case 10:return vf(s.type._context),null;case 22:case 23:return nd(),null;case 24:return null;default:return null}}var Kl=!1,On=!1,h1=typeof WeakSet=="function"?WeakSet:Set,Je=null;function vo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){an(i,s,f)}else l.current=null}function Wf(i,s,l){try{l()}catch(f){an(i,s,f)}}var x0=!1;function p1(i,s){if(tf=gl,i=Km(),Yu(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var g=f.anchorOffset,S=f.focusNode;f=f.focusOffset;try{l.nodeType,S.nodeType}catch{l=null;break e}var R=0,z=-1,$=-1,pe=0,Ce=0,De=i,Ae=null;t:for(;;){for(var qe;De!==l||g!==0&&De.nodeType!==3||(z=R+g),De!==S||f!==0&&De.nodeType!==3||($=R+f),De.nodeType===3&&(R+=De.nodeValue.length),(qe=De.firstChild)!==null;)Ae=De,De=qe;for(;;){if(De===i)break t;if(Ae===l&&++pe===g&&(z=R),Ae===S&&++Ce===f&&($=R),(qe=De.nextSibling)!==null)break;De=Ae,Ae=De.parentNode}De=qe}l=z===-1||$===-1?null:{start:z,end:$}}else l=null}l=l||{start:0,end:0}}else l=null;for(nf={focusedElem:i,selectionRange:l},gl=!1,Je=s;Je!==null;)if(s=Je,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Je=i;else for(;Je!==null;){s=Je;try{var et=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(et!==null){var it=et.memoizedProps,fn=et.memoizedState,ae=s.stateNode,Q=ae.getSnapshotBeforeUpdate(s.elementType===s.type?it:Di(s.type,it),fn);ae.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var ue=s.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Fe){an(s,s.return,Fe)}if(i=s.sibling,i!==null){i.return=s.return,Je=i;break}Je=s.return}return et=x0,x0=!1,et}function Ra(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var S=g.destroy;g.destroy=void 0,S!==void 0&&Wf(s,l,S)}g=g.next}while(g!==f)}}function Zl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Xf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function _0(i){var s=i.alternate;s!==null&&(i.alternate=null,_0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[ji],delete s[xa],delete s[af],delete s[KM],delete s[ZM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function y0(i){return i.tag===5||i.tag===3||i.tag===4}function S0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||y0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function jf(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Cl));else if(f!==4&&(i=i.child,i!==null))for(jf(i,s,l),i=i.sibling;i!==null;)jf(i,s,l),i=i.sibling}function Yf(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Yf(i,s,l),i=i.sibling;i!==null;)Yf(i,s,l),i=i.sibling}var bn=null,Li=!1;function Jr(i,s,l){for(l=l.child;l!==null;)M0(i,s,l),l=l.sibling}function M0(i,s,l){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(oe,l)}catch{}switch(l.tag){case 5:On||vo(l,s);case 6:var f=bn,g=Li;bn=null,Jr(i,s,l),bn=f,Li=g,bn!==null&&(Li?(i=bn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):bn.removeChild(l.stateNode));break;case 18:bn!==null&&(Li?(i=bn,l=l.stateNode,i.nodeType===8?of(i.parentNode,l):i.nodeType===1&&of(i,l),aa(i)):of(bn,l.stateNode));break;case 4:f=bn,g=Li,bn=l.stateNode.containerInfo,Li=!0,Jr(i,s,l),bn=f,Li=g;break;case 0:case 11:case 14:case 15:if(!On&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var S=g,R=S.destroy;S=S.tag,R!==void 0&&((S&2)!==0||(S&4)!==0)&&Wf(l,s,R),g=g.next}while(g!==f)}Jr(i,s,l);break;case 1:if(!On&&(vo(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(z){an(l,s,z)}Jr(i,s,l);break;case 21:Jr(i,s,l);break;case 22:l.mode&1?(On=(f=On)||l.memoizedState!==null,Jr(i,s,l),On=f):Jr(i,s,l);break;default:Jr(i,s,l)}}function w0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new h1),s.forEach(function(f){var g=w1.bind(null,i,f);l.has(f)||(l.add(f),f.then(g,g))})}}function Ni(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var g=l[f];try{var S=i,R=s,z=R;e:for(;z!==null;){switch(z.tag){case 5:bn=z.stateNode,Li=!1;break e;case 3:bn=z.stateNode.containerInfo,Li=!0;break e;case 4:bn=z.stateNode.containerInfo,Li=!0;break e}z=z.return}if(bn===null)throw Error(t(160));M0(S,R,g),bn=null,Li=!1;var $=g.alternate;$!==null&&($.return=null),g.return=null}catch(pe){an(g,s,pe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)E0(s,i),s=s.sibling}function E0(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ni(s,i),qi(i),f&4){try{Ra(3,i,i.return),Zl(3,i)}catch(it){an(i,i.return,it)}try{Ra(5,i,i.return)}catch(it){an(i,i.return,it)}}break;case 1:Ni(s,i),qi(i),f&512&&l!==null&&vo(l,l.return);break;case 5:if(Ni(s,i),qi(i),f&512&&l!==null&&vo(l,l.return),i.flags&32){var g=i.stateNode;try{me(g,"")}catch(it){an(i,i.return,it)}}if(f&4&&(g=i.stateNode,g!=null)){var S=i.memoizedProps,R=l!==null?l.memoizedProps:S,z=i.type,$=i.updateQueue;if(i.updateQueue=null,$!==null)try{z==="input"&&S.type==="radio"&&S.name!=null&&pt(g,S),ze(z,R);var pe=ze(z,S);for(R=0;R<$.length;R+=2){var Ce=$[R],De=$[R+1];Ce==="style"?xe(g,De):Ce==="dangerouslySetInnerHTML"?ce(g,De):Ce==="children"?me(g,De):F(g,Ce,De,pe)}switch(z){case"input":at(g,S);break;case"textarea":Kt(g,S);break;case"select":var Ae=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!S.multiple;var qe=S.value;qe!=null?Et(g,!!S.multiple,qe,!1):Ae!==!!S.multiple&&(S.defaultValue!=null?Et(g,!!S.multiple,S.defaultValue,!0):Et(g,!!S.multiple,S.multiple?[]:"",!1))}g[xa]=S}catch(it){an(i,i.return,it)}}break;case 6:if(Ni(s,i),qi(i),f&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,S=i.memoizedProps;try{g.nodeValue=S}catch(it){an(i,i.return,it)}}break;case 3:if(Ni(s,i),qi(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{aa(s.containerInfo)}catch(it){an(i,i.return,it)}break;case 4:Ni(s,i),qi(i);break;case 13:Ni(s,i),qi(i),g=i.child,g.flags&8192&&(S=g.memoizedState!==null,g.stateNode.isHidden=S,!S||g.alternate!==null&&g.alternate.memoizedState!==null||(Kf=tn())),f&4&&w0(i);break;case 22:if(Ce=l!==null&&l.memoizedState!==null,i.mode&1?(On=(pe=On)||Ce,Ni(s,i),On=pe):Ni(s,i),qi(i),f&8192){if(pe=i.memoizedState!==null,(i.stateNode.isHidden=pe)&&!Ce&&(i.mode&1)!==0)for(Je=i,Ce=i.child;Ce!==null;){for(De=Je=Ce;Je!==null;){switch(Ae=Je,qe=Ae.child,Ae.tag){case 0:case 11:case 14:case 15:Ra(4,Ae,Ae.return);break;case 1:vo(Ae,Ae.return);var et=Ae.stateNode;if(typeof et.componentWillUnmount=="function"){f=Ae,l=Ae.return;try{s=f,et.props=s.memoizedProps,et.state=s.memoizedState,et.componentWillUnmount()}catch(it){an(f,l,it)}}break;case 5:vo(Ae,Ae.return);break;case 22:if(Ae.memoizedState!==null){b0(De);continue}}qe!==null?(qe.return=Ae,Je=qe):b0(De)}Ce=Ce.sibling}e:for(Ce=null,De=i;;){if(De.tag===5){if(Ce===null){Ce=De;try{g=De.stateNode,pe?(S=g.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(z=De.stateNode,$=De.memoizedProps.style,R=$!=null&&$.hasOwnProperty("display")?$.display:null,z.style.display=ge("display",R))}catch(it){an(i,i.return,it)}}}else if(De.tag===6){if(Ce===null)try{De.stateNode.nodeValue=pe?"":De.memoizedProps}catch(it){an(i,i.return,it)}}else if((De.tag!==22&&De.tag!==23||De.memoizedState===null||De===i)&&De.child!==null){De.child.return=De,De=De.child;continue}if(De===i)break e;for(;De.sibling===null;){if(De.return===null||De.return===i)break e;Ce===De&&(Ce=null),De=De.return}Ce===De&&(Ce=null),De.sibling.return=De.return,De=De.sibling}}break;case 19:Ni(s,i),qi(i),f&4&&w0(i);break;case 21:break;default:Ni(s,i),qi(i)}}function qi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(y0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(me(g,""),f.flags&=-33);var S=S0(i);Yf(i,S,g);break;case 3:case 4:var R=f.stateNode.containerInfo,z=S0(i);jf(i,z,R);break;default:throw Error(t(161))}}catch($){an(i,i.return,$)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function m1(i,s,l){Je=i,T0(i)}function T0(i,s,l){for(var f=(i.mode&1)!==0;Je!==null;){var g=Je,S=g.child;if(g.tag===22&&f){var R=g.memoizedState!==null||Kl;if(!R){var z=g.alternate,$=z!==null&&z.memoizedState!==null||On;z=Kl;var pe=On;if(Kl=R,(On=$)&&!pe)for(Je=g;Je!==null;)R=Je,$=R.child,R.tag===22&&R.memoizedState!==null?C0(g):$!==null?($.return=R,Je=$):C0(g);for(;S!==null;)Je=S,T0(S),S=S.sibling;Je=g,Kl=z,On=pe}A0(i)}else(g.subtreeFlags&8772)!==0&&S!==null?(S.return=g,Je=S):A0(i)}}function A0(i){for(;Je!==null;){var s=Je;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:On||Zl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!On)if(l===null)f.componentDidMount();else{var g=s.elementType===s.type?l.memoizedProps:Di(s.type,l.memoizedProps);f.componentDidUpdate(g,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var S=s.updateQueue;S!==null&&bg(s,S,f);break;case 3:var R=s.updateQueue;if(R!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}bg(s,R,l)}break;case 5:var z=s.stateNode;if(l===null&&s.flags&4){l=z;var $=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&l.focus();break;case"img":$.src&&(l.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var pe=s.alternate;if(pe!==null){var Ce=pe.memoizedState;if(Ce!==null){var De=Ce.dehydrated;De!==null&&aa(De)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||s.flags&512&&Xf(s)}catch(Ae){an(s,s.return,Ae)}}if(s===i){Je=null;break}if(l=s.sibling,l!==null){l.return=s.return,Je=l;break}Je=s.return}}function b0(i){for(;Je!==null;){var s=Je;if(s===i){Je=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Je=l;break}Je=s.return}}function C0(i){for(;Je!==null;){var s=Je;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Zl(4,s)}catch($){an(s,l,$)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var g=s.return;try{f.componentDidMount()}catch($){an(s,g,$)}}var S=s.return;try{Xf(s)}catch($){an(s,S,$)}break;case 5:var R=s.return;try{Xf(s)}catch($){an(s,R,$)}}}catch($){an(s,s.return,$)}if(s===i){Je=null;break}var z=s.sibling;if(z!==null){z.return=s.return,Je=z;break}Je=s.return}}var g1=Math.ceil,Jl=b.ReactCurrentDispatcher,$f=b.ReactCurrentOwner,_i=b.ReactCurrentBatchConfig,It=0,En=null,hn=null,Cn=0,ai=0,xo=Yr(0),_n=0,Pa=null,Cs=0,Ql=0,qf=0,Da=null,Zn=null,Kf=0,_o=1/0,wr=null,ec=!1,Zf=null,Qr=null,tc=!1,es=null,nc=0,La=0,Jf=null,ic=-1,rc=0;function Wn(){return(It&6)!==0?tn():ic!==-1?ic:ic=tn()}function ts(i){return(i.mode&1)===0?1:(It&2)!==0&&Cn!==0?Cn&-Cn:QM.transition!==null?(rc===0&&(rc=vn()),rc):(i=St,i!==0||(i=window.event,i=i===void 0?16:Pm(i.type)),i)}function Ii(i,s,l,f){if(50<La)throw La=0,Jf=null,Error(t(185));un(i,l,f),((It&2)===0||i!==En)&&(i===En&&((It&2)===0&&(Ql|=l),_n===4&&ns(i,Cn)),Jn(i,f),l===1&&It===0&&(s.mode&1)===0&&(_o=tn()+500,Ll&&qr()))}function Jn(i,s){var l=i.callbackNode;Wt(i,s);var f=Ct(i,i===En?Cn:0);if(f===0)l!==null&&ea(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&ea(l),s===1)i.tag===0?JM(P0.bind(null,i)):mg(P0.bind(null,i)),$M(function(){(It&6)===0&&qr()}),l=null;else{switch(Ti(f)){case 1:l=ta;break;case 4:l=na;break;case 16:l=P;break;case 536870912:l=he;break;default:l=P}l=k0(l,R0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function R0(i,s){if(ic=-1,rc=0,(It&6)!==0)throw Error(t(327));var l=i.callbackNode;if(yo()&&i.callbackNode!==l)return null;var f=Ct(i,i===En?Cn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=sc(i,f);else{s=f;var g=It;It|=2;var S=L0();(En!==i||Cn!==s)&&(wr=null,_o=tn()+500,Ps(i,s));do try{_1();break}catch(z){D0(i,z)}while(!0);gf(),Jl.current=S,It=g,hn!==null?s=0:(En=null,Cn=0,s=_n)}if(s!==0){if(s===2&&(g=kt(i),g!==0&&(f=g,s=Qf(i,g))),s===1)throw l=Pa,Ps(i,0),ns(i,f),Jn(i,tn()),l;if(s===6)ns(i,f);else{if(g=i.current.alternate,(f&30)===0&&!v1(g)&&(s=sc(i,f),s===2&&(S=kt(i),S!==0&&(f=S,s=Qf(i,S))),s===1))throw l=Pa,Ps(i,0),ns(i,f),Jn(i,tn()),l;switch(i.finishedWork=g,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Ds(i,Zn,wr);break;case 3:if(ns(i,f),(f&130023424)===f&&(s=Kf+500-tn(),10<s)){if(Ct(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){Wn(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=sf(Ds.bind(null,i,Zn,wr),s);break}Ds(i,Zn,wr);break;case 4:if(ns(i,f),(f&4194240)===f)break;for(s=i.eventTimes,g=-1;0<f;){var R=31-Ve(f);S=1<<R,R=s[R],R>g&&(g=R),f&=~S}if(f=g,f=tn()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*g1(f/1960))-f,10<f){i.timeoutHandle=sf(Ds.bind(null,i,Zn,wr),f);break}Ds(i,Zn,wr);break;case 5:Ds(i,Zn,wr);break;default:throw Error(t(329))}}}return Jn(i,tn()),i.callbackNode===l?R0.bind(null,i):null}function Qf(i,s){var l=Da;return i.current.memoizedState.isDehydrated&&(Ps(i,s).flags|=256),i=sc(i,s),i!==2&&(s=Zn,Zn=l,s!==null&&ed(s)),i}function ed(i){Zn===null?Zn=i:Zn.push.apply(Zn,i)}function v1(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var g=l[f],S=g.getSnapshot;g=g.value;try{if(!Ri(S(),g))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ns(i,s){for(s&=~qf,s&=~Ql,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Ve(s),f=1<<l;i[l]=-1,s&=~f}}function P0(i){if((It&6)!==0)throw Error(t(327));yo();var s=Ct(i,0);if((s&1)===0)return Jn(i,tn()),null;var l=sc(i,s);if(i.tag!==0&&l===2){var f=kt(i);f!==0&&(s=f,l=Qf(i,f))}if(l===1)throw l=Pa,Ps(i,0),ns(i,s),Jn(i,tn()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ds(i,Zn,wr),Jn(i,tn()),null}function td(i,s){var l=It;It|=1;try{return i(s)}finally{It=l,It===0&&(_o=tn()+500,Ll&&qr())}}function Rs(i){es!==null&&es.tag===0&&(It&6)===0&&yo();var s=It;It|=1;var l=_i.transition,f=St;try{if(_i.transition=null,St=1,i)return i()}finally{St=f,_i.transition=l,It=s,(It&6)===0&&qr()}}function nd(){ai=xo.current,qt(xo)}function Ps(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,YM(l)),hn!==null)for(l=hn.return;l!==null;){var f=l;switch(ff(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Pl();break;case 3:mo(),qt($n),qt(In),Ef();break;case 5:Mf(f);break;case 4:mo();break;case 13:qt(nn);break;case 19:qt(nn);break;case 10:vf(f.type._context);break;case 22:case 23:nd()}l=l.return}if(En=i,hn=i=is(i.current,null),Cn=ai=s,_n=0,Pa=null,qf=Ql=Cs=0,Zn=Da=null,Ts!==null){for(s=0;s<Ts.length;s++)if(l=Ts[s],f=l.interleaved,f!==null){l.interleaved=null;var g=f.next,S=l.pending;if(S!==null){var R=S.next;S.next=g,f.next=R}l.pending=f}Ts=null}return i}function D0(i,s){do{var l=hn;try{if(gf(),Hl.current=jl,Gl){for(var f=rn.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Gl=!1}if(bs=0,wn=xn=rn=null,Ea=!1,Ta=0,$f.current=null,l===null||l.return===null){_n=1,Pa=s,hn=null;break}e:{var S=i,R=l.return,z=l,$=s;if(s=Cn,z.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var pe=$,Ce=z,De=Ce.tag;if((Ce.mode&1)===0&&(De===0||De===11||De===15)){var Ae=Ce.alternate;Ae?(Ce.updateQueue=Ae.updateQueue,Ce.memoizedState=Ae.memoizedState,Ce.lanes=Ae.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var qe=n0(R);if(qe!==null){qe.flags&=-257,i0(qe,R,z,S,s),qe.mode&1&&t0(S,pe,s),s=qe,$=pe;var et=s.updateQueue;if(et===null){var it=new Set;it.add($),s.updateQueue=it}else et.add($);break e}else{if((s&1)===0){t0(S,pe,s),id();break e}$=Error(t(426))}}else if(Jt&&z.mode&1){var fn=n0(R);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),i0(fn,R,z,S,s),pf(go($,z));break e}}S=$=go($,z),_n!==4&&(_n=2),Da===null?Da=[S]:Da.push(S),S=R;do{switch(S.tag){case 3:S.flags|=65536,s&=-s,S.lanes|=s;var ae=Qg(S,$,s);Ag(S,ae);break e;case 1:z=$;var Q=S.type,ue=S.stateNode;if((S.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Qr===null||!Qr.has(ue)))){S.flags|=65536,s&=-s,S.lanes|=s;var Fe=e0(S,z,s);Ag(S,Fe);break e}}S=S.return}while(S!==null)}I0(l)}catch(st){s=st,hn===l&&l!==null&&(hn=l=l.return);continue}break}while(!0)}function L0(){var i=Jl.current;return Jl.current=jl,i===null?jl:i}function id(){(_n===0||_n===3||_n===2)&&(_n=4),En===null||(Cs&268435455)===0&&(Ql&268435455)===0||ns(En,Cn)}function sc(i,s){var l=It;It|=2;var f=L0();(En!==i||Cn!==s)&&(wr=null,Ps(i,s));do try{x1();break}catch(g){D0(i,g)}while(!0);if(gf(),It=l,Jl.current=f,hn!==null)throw Error(t(261));return En=null,Cn=0,_n}function x1(){for(;hn!==null;)N0(hn)}function _1(){for(;hn!==null&&!pl();)N0(hn)}function N0(i){var s=O0(i.alternate,i,ai);i.memoizedProps=i.pendingProps,s===null?I0(i):hn=s,$f.current=null}function I0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=f1(l,s,ai),l!==null){hn=l;return}}else{if(l=d1(l,s),l!==null){l.flags&=32767,hn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{_n=6,hn=null;return}}if(s=s.sibling,s!==null){hn=s;return}hn=s=i}while(s!==null);_n===0&&(_n=5)}function Ds(i,s,l){var f=St,g=_i.transition;try{_i.transition=null,St=1,y1(i,s,l,f)}finally{_i.transition=g,St=f}return null}function y1(i,s,l,f){do yo();while(es!==null);if((It&6)!==0)throw Error(t(327));l=i.finishedWork;var g=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=l.lanes|l.childLanes;if(Rt(i,S),i===En&&(hn=En=null,Cn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||tc||(tc=!0,k0(P,function(){return yo(),null})),S=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||S){S=_i.transition,_i.transition=null;var R=St;St=1;var z=It;It|=4,$f.current=null,p1(i,l),E0(l,i),zM(nf),gl=!!tf,nf=tf=null,i.current=l,m1(l),Iu(),It=z,St=R,_i.transition=S}else i.current=l;if(tc&&(tc=!1,es=i,nc=g),S=i.pendingLanes,S===0&&(Qr=null),Xe(l.stateNode),Jn(i,tn()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)g=s[l],f(g.value,{componentStack:g.stack,digest:g.digest});if(ec)throw ec=!1,i=Zf,Zf=null,i;return(nc&1)!==0&&i.tag!==0&&yo(),S=i.pendingLanes,(S&1)!==0?i===Jf?La++:(La=0,Jf=i):La=0,qr(),null}function yo(){if(es!==null){var i=Ti(nc),s=_i.transition,l=St;try{if(_i.transition=null,St=16>i?16:i,es===null)var f=!1;else{if(i=es,es=null,nc=0,(It&6)!==0)throw Error(t(331));var g=It;for(It|=4,Je=i.current;Je!==null;){var S=Je,R=S.child;if((Je.flags&16)!==0){var z=S.deletions;if(z!==null){for(var $=0;$<z.length;$++){var pe=z[$];for(Je=pe;Je!==null;){var Ce=Je;switch(Ce.tag){case 0:case 11:case 15:Ra(8,Ce,S)}var De=Ce.child;if(De!==null)De.return=Ce,Je=De;else for(;Je!==null;){Ce=Je;var Ae=Ce.sibling,qe=Ce.return;if(_0(Ce),Ce===pe){Je=null;break}if(Ae!==null){Ae.return=qe,Je=Ae;break}Je=qe}}}var et=S.alternate;if(et!==null){var it=et.child;if(it!==null){et.child=null;do{var fn=it.sibling;it.sibling=null,it=fn}while(it!==null)}}Je=S}}if((S.subtreeFlags&2064)!==0&&R!==null)R.return=S,Je=R;else e:for(;Je!==null;){if(S=Je,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:Ra(9,S,S.return)}var ae=S.sibling;if(ae!==null){ae.return=S.return,Je=ae;break e}Je=S.return}}var Q=i.current;for(Je=Q;Je!==null;){R=Je;var ue=R.child;if((R.subtreeFlags&2064)!==0&&ue!==null)ue.return=R,Je=ue;else e:for(R=Q;Je!==null;){if(z=Je,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Zl(9,z)}}catch(st){an(z,z.return,st)}if(z===R){Je=null;break e}var Fe=z.sibling;if(Fe!==null){Fe.return=z.return,Je=Fe;break e}Je=z.return}}if(It=g,qr(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(oe,i)}catch{}f=!0}return f}finally{St=l,_i.transition=s}}return!1}function F0(i,s,l){s=go(l,s),s=Qg(i,s,1),i=Zr(i,s,1),s=Wn(),i!==null&&(un(i,1,s),Jn(i,s))}function an(i,s,l){if(i.tag===3)F0(i,i,l);else for(;s!==null;){if(s.tag===3){F0(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Qr===null||!Qr.has(f))){i=go(l,i),i=e0(s,i,1),s=Zr(s,i,1),i=Wn(),s!==null&&(un(s,1,i),Jn(s,i));break}}s=s.return}}function S1(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=Wn(),i.pingedLanes|=i.suspendedLanes&l,En===i&&(Cn&l)===l&&(_n===4||_n===3&&(Cn&130023424)===Cn&&500>tn()-Kf?Ps(i,0):qf|=l),Jn(i,s)}function U0(i,s){s===0&&((i.mode&1)===0?s=1:(s=_t,_t<<=1,(_t&130023424)===0&&(_t=4194304)));var l=Wn();i=yr(i,s),i!==null&&(un(i,s,l),Jn(i,l))}function M1(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),U0(i,l)}function w1(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(l=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),U0(i,l)}var O0;O0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||$n.current)Kn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Kn=!1,u1(i,s,l);Kn=(i.flags&131072)!==0}else Kn=!1,Jt&&(s.flags&1048576)!==0&&gg(s,Il,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;ql(i,s),i=s.pendingProps;var g=ao(s,In.current);po(s,l),g=bf(null,s,f,i,g,l);var S=Cf();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,qn(f)?(S=!0,Dl(s)):S=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,yf(s),g.updater=Yl,s.stateNode=g,g._reactInternals=s,If(s,f,i,l),s=kf(null,s,f,!0,S,l)):(s.tag=0,Jt&&S&&uf(s),Gn(null,s,g,l),s=s.child),s;case 16:f=s.elementType;e:{switch(ql(i,s),i=s.pendingProps,g=f._init,f=g(f._payload),s.type=f,g=s.tag=T1(f),i=Di(f,i),g){case 0:s=Of(null,s,f,i,l);break e;case 1:s=c0(null,s,f,i,l);break e;case 11:s=r0(null,s,f,i,l);break e;case 14:s=s0(null,s,f,Di(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Di(f,g),Of(i,s,f,g,l);case 1:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Di(f,g),c0(i,s,f,g,l);case 3:e:{if(u0(s),i===null)throw Error(t(387));f=s.pendingProps,S=s.memoizedState,g=S.element,Tg(i,s),zl(s,f,null,l);var R=s.memoizedState;if(f=R.element,S.isDehydrated)if(S={element:f,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},s.updateQueue.baseState=S,s.memoizedState=S,s.flags&256){g=go(Error(t(423)),s),s=f0(i,s,f,l,g);break e}else if(f!==g){g=go(Error(t(424)),s),s=f0(i,s,f,l,g);break e}else for(oi=jr(s.stateNode.containerInfo.firstChild),si=s,Jt=!0,Pi=null,l=wg(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(uo(),f===g){s=Mr(i,s,l);break e}Gn(i,s,f,l)}s=s.child}return s;case 5:return Cg(s),i===null&&hf(s),f=s.type,g=s.pendingProps,S=i!==null?i.memoizedProps:null,R=g.children,rf(f,g)?R=null:S!==null&&rf(f,S)&&(s.flags|=32),l0(i,s),Gn(i,s,R,l),s.child;case 6:return i===null&&hf(s),null;case 13:return d0(i,s,l);case 4:return Sf(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=fo(s,null,f,l):Gn(i,s,f,l),s.child;case 11:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Di(f,g),r0(i,s,f,g,l);case 7:return Gn(i,s,s.pendingProps,l),s.child;case 8:return Gn(i,s,s.pendingProps.children,l),s.child;case 12:return Gn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,g=s.pendingProps,S=s.memoizedProps,R=g.value,Yt(Ol,f._currentValue),f._currentValue=R,S!==null)if(Ri(S.value,R)){if(S.children===g.children&&!$n.current){s=Mr(i,s,l);break e}}else for(S=s.child,S!==null&&(S.return=s);S!==null;){var z=S.dependencies;if(z!==null){R=S.child;for(var $=z.firstContext;$!==null;){if($.context===f){if(S.tag===1){$=Sr(-1,l&-l),$.tag=2;var pe=S.updateQueue;if(pe!==null){pe=pe.shared;var Ce=pe.pending;Ce===null?$.next=$:($.next=Ce.next,Ce.next=$),pe.pending=$}}S.lanes|=l,$=S.alternate,$!==null&&($.lanes|=l),xf(S.return,l,s),z.lanes|=l;break}$=$.next}}else if(S.tag===10)R=S.type===s.type?null:S.child;else if(S.tag===18){if(R=S.return,R===null)throw Error(t(341));R.lanes|=l,z=R.alternate,z!==null&&(z.lanes|=l),xf(R,l,s),R=S.sibling}else R=S.child;if(R!==null)R.return=S;else for(R=S;R!==null;){if(R===s){R=null;break}if(S=R.sibling,S!==null){S.return=R.return,R=S;break}R=R.return}S=R}Gn(i,s,g.children,l),s=s.child}return s;case 9:return g=s.type,f=s.pendingProps.children,po(s,l),g=vi(g),f=f(g),s.flags|=1,Gn(i,s,f,l),s.child;case 14:return f=s.type,g=Di(f,s.pendingProps),g=Di(f.type,g),s0(i,s,f,g,l);case 15:return o0(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:Di(f,g),ql(i,s),s.tag=1,qn(f)?(i=!0,Dl(s)):i=!1,po(s,l),Zg(s,f,g),If(s,f,g,l),kf(null,s,f,!0,i,l);case 19:return p0(i,s,l);case 22:return a0(i,s,l)}throw Error(t(156,s.tag))};function k0(i,s){return ys(i,s)}function E1(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(i,s,l,f){return new E1(i,s,l,f)}function rd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function T1(i){if(typeof i=="function")return rd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===W)return 11;if(i===ee)return 14}return 2}function is(i,s){var l=i.alternate;return l===null?(l=yi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function oc(i,s,l,f,g,S){var R=2;if(f=i,typeof i=="function")rd(i)&&(R=1);else if(typeof i=="string")R=5;else e:switch(i){case O:return Ls(l.children,g,S,s);case E:R=8,g|=8;break;case I:return i=yi(12,l,s,g|2),i.elementType=I,i.lanes=S,i;case te:return i=yi(13,l,s,g),i.elementType=te,i.lanes=S,i;case X:return i=yi(19,l,s,g),i.elementType=X,i.lanes=S,i;case K:return ac(l,g,S,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case U:R=10;break e;case V:R=9;break e;case W:R=11;break e;case ee:R=14;break e;case ne:R=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=yi(R,l,s,g),s.elementType=i,s.type=f,s.lanes=S,s}function Ls(i,s,l,f){return i=yi(7,i,f,s),i.lanes=l,i}function ac(i,s,l,f){return i=yi(22,i,f,s),i.elementType=K,i.lanes=l,i.stateNode={isHidden:!1},i}function sd(i,s,l){return i=yi(6,i,null,s),i.lanes=l,i}function od(i,s,l){return s=yi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function A1(i,s,l,f,g){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$e(0),this.expirationTimes=$e(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function ad(i,s,l,f,g,S,R,z,$){return i=new A1(i,s,l,z,$),s===1?(s=1,S===!0&&(s|=8)):s=0,S=yi(3,null,null,s),i.current=S,S.stateNode=i,S.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(S),i}function b1(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function B0(i){if(!i)return $r;i=i._reactInternals;e:{if(dn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(qn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(qn(l))return hg(i,l,s)}return s}function z0(i,s,l,f,g,S,R,z,$){return i=ad(l,f,!0,i,g,S,R,z,$),i.context=B0(null),l=i.current,f=Wn(),g=ts(l),S=Sr(f,g),S.callback=s??null,Zr(l,S,g),i.current.lanes=g,un(i,g,f),Jn(i,f),i}function lc(i,s,l,f){var g=s.current,S=Wn(),R=ts(g);return l=B0(l),s.context===null?s.context=l:s.pendingContext=l,s=Sr(S,R),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Zr(g,s,R),i!==null&&(Ii(i,g,R,S),Bl(i,g,R)),R}function cc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function V0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function ld(i,s){V0(i,s),(i=i.alternate)&&V0(i,s)}function C1(){return null}var H0=typeof reportError=="function"?reportError:function(i){console.error(i)};function cd(i){this._internalRoot=i}uc.prototype.render=cd.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));lc(i,s,null,null)},uc.prototype.unmount=cd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Rs(function(){lc(null,i,null,null)}),s[gr]=null}};function uc(i){this._internalRoot=i}uc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ai();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Gr.length&&s!==0&&s<Gr[l].priority;l++);Gr.splice(l,0,i),l===0&&Cm(i)}};function ud(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function fc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function G0(){}function R1(i,s,l,f,g){if(g){if(typeof f=="function"){var S=f;f=function(){var pe=cc(R);S.call(pe)}}var R=z0(s,f,i,0,null,!1,!1,"",G0);return i._reactRootContainer=R,i[gr]=R.current,ga(i.nodeType===8?i.parentNode:i),Rs(),R}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var z=f;f=function(){var pe=cc($);z.call(pe)}}var $=ad(i,0,!1,null,null,!1,!1,"",G0);return i._reactRootContainer=$,i[gr]=$.current,ga(i.nodeType===8?i.parentNode:i),Rs(function(){lc(s,$,l,f)}),$}function dc(i,s,l,f,g){var S=l._reactRootContainer;if(S){var R=S;if(typeof g=="function"){var z=g;g=function(){var $=cc(R);z.call($)}}lc(s,R,i,g)}else R=R1(l,s,i,g,f);return cc(R)}mr=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Ke(s.pendingLanes);l!==0&&(Nn(s,l|1),Jn(s,tn()),(It&6)===0&&(_o=tn()+500,qr()))}break;case 13:Rs(function(){var f=yr(i,1);if(f!==null){var g=Wn();Ii(f,i,1,g)}}),ld(i,1)}},Ft=function(i){if(i.tag===13){var s=yr(i,134217728);if(s!==null){var l=Wn();Ii(s,i,134217728,l)}ld(i,134217728)}},Zt=function(i){if(i.tag===13){var s=ts(i),l=yr(i,s);if(l!==null){var f=Wn();Ii(l,i,s,f)}ld(i,s)}},Ai=function(){return St},Bt=function(i,s){var l=St;try{return St=i,s()}finally{St=l}},Ie=function(i,s,l){switch(s){case"input":if(at(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var g=Rl(f);if(!g)throw Error(t(90));Ze(f),at(f,g)}}}break;case"textarea":Kt(i,l);break;case"select":s=l.value,s!=null&&Et(i,!!l.multiple,s,!1)}},Ne=td,_e=Rs;var P1={usingClientEntryPoint:!1,Events:[_a,so,Rl,de,Me,td]},Na={findFiberByHostInstance:Ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D1={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=hr(i),i===null?null:i.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||C1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{oe=hc.inject(D1),se=hc}catch{}}return Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1,Qn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(s))throw Error(t(200));return b1(i,s,null,l)},Qn.createRoot=function(i,s){if(!ud(i))throw Error(t(299));var l=!1,f="",g=H0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=ad(i,1,!1,null,null,l,!1,f,g),i[gr]=s.current,ga(i.nodeType===8?i.parentNode:i),new cd(s)},Qn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=hr(s),i=i===null?null:i.stateNode,i},Qn.flushSync=function(i){return Rs(i)},Qn.hydrate=function(i,s,l){if(!fc(s))throw Error(t(200));return dc(null,i,s,!0,l)},Qn.hydrateRoot=function(i,s,l){if(!ud(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,g=!1,S="",R=H0;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(S=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),s=z0(s,null,i,1,l??null,g,!1,S,R),i[gr]=s.current,ga(i),f)for(i=0;i<f.length;i++)l=f[i],g=l._getVersion,g=g(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,g]:s.mutableSourceEagerHydrationData.push(l,g);return new uc(s)},Qn.render=function(i,s,l){if(!fc(s))throw Error(t(200));return dc(null,i,s,!1,l)},Qn.unmountComponentAtNode=function(i){if(!fc(i))throw Error(t(40));return i._reactRootContainer?(Rs(function(){dc(null,null,i,!1,function(){i._reactRootContainer=null,i[gr]=null})}),!0):!1},Qn.unstable_batchedUpdates=td,Qn.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!fc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return dc(i,s,l,!1,f)},Qn.version="18.3.1-next-f1338f8080-20240426",Qn}var Z0;function z1(){if(Z0)return hd.exports;Z0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),hd.exports=B1(),hd.exports}var J0;function V1(){if(J0)return pc;J0=1;var n=z1();return pc.createRoot=n.createRoot,pc.hydrateRoot=n.hydrateRoot,pc}var H1=V1();const G1=d_(H1),Rp=we.createContext({});function Pp(n){const e=we.useRef(null);return e.current===null&&(e.current=n()),e.current}const W1=typeof window<"u",Dp=W1?we.useLayoutEffect:we.useEffect,Eu=we.createContext(null);function Lp(n,e){n.indexOf(e)===-1&&n.push(e)}function nu(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const sr=(n,e,t)=>t>e?e:t<n?n:t;let Tu=()=>{};const gs={},h_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),p_=n=>typeof n=="object"&&n!==null,m_=n=>/^0[^.\s]+$/u.test(n);function g_(n){let e;return()=>(e===void 0&&(e=n()),e)}const Ei=n=>n,ol=(...n)=>n.reduce((e,t)=>r=>t(e(r))),Za=(n,e,t)=>{const r=e-n;return r?(t-n)/r:1};class Np{constructor(){this.subscriptions=[]}add(e){return Lp(this.subscriptions,e),()=>nu(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const hi=n=>n*1e3,wi=n=>n/1e3,v_=(n,e)=>e?n*(1e3/e):0,x_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,X1=1e-7,j1=12;function Y1(n,e,t,r,o){let a,c,u=0;do c=e+(t-e)/2,a=x_(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>X1&&++u<j1);return c}function al(n,e,t,r){if(n===e&&t===r)return Ei;const o=a=>Y1(a,0,1,n,t);return a=>a===0||a===1?a:x_(o(a),e,r)}const __=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,y_=n=>e=>1-n(1-e),S_=al(.33,1.53,.69,.99),Ip=y_(S_),M_=__(Ip),w_=n=>n>=1?1:(n*=2)<1?.5*Ip(n):.5*(2-Math.pow(2,-10*(n-1))),Fp=n=>1-Math.sin(Math.acos(n)),E_=y_(Fp),T_=__(Fp),$1=al(.42,0,1,1),q1=al(0,0,.58,1),A_=al(.42,0,.58,1),K1=n=>Array.isArray(n)&&typeof n[0]!="number",b_=n=>Array.isArray(n)&&typeof n[0]=="number",Z1={linear:Ei,easeIn:$1,easeInOut:A_,easeOut:q1,circIn:Fp,circInOut:T_,circOut:E_,backIn:Ip,backInOut:M_,backOut:S_,anticipate:w_},J1=n=>typeof n=="string",Q0=n=>{if(b_(n)){Tu(n.length===4);const[e,t,r,o]=n;return al(e,t,r,o)}else if(J1(n))return Z1[n];return n},mc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Q1(n){let e=new Set,t=new Set,r=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){a.has(h)&&(d.schedule(h),n()),h(c)}const d={schedule:(h,m=!1,v=!1)=>{const y=v&&r?e:t;return m&&a.add(h),y.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(c=h,r){o=!0;return}r=!0;const m=e;e=t,t=m,e.forEach(u),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const ew=40;function C_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=mc.reduce((F,b)=>(F[b]=Q1(a),F),{}),{setup:u,read:d,resolveKeyframes:h,preUpdate:m,update:v,preRender:p,render:y,postRender:M}=c,A=()=>{const F=gs.useManualTiming,b=F?o.timestamp:performance.now();t=!1,F||(o.delta=r?1e3/60:Math.max(Math.min(b-o.timestamp,ew),1)),o.timestamp=b,o.isProcessing=!0,u.process(o),d.process(o),h.process(o),m.process(o),v.process(o),p.process(o),y.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(A))},x=()=>{t=!0,r=!0,o.isProcessing||n(A)};return{schedule:mc.reduce((F,b)=>{const D=c[b];return F[b]=(N,O=!1,E=!1)=>(t||x(),D.schedule(N,O,E)),F},{}),cancel:F=>{for(let b=0;b<mc.length;b++)c[mc[b]].cancel(F)},state:o,steps:c}}const{schedule:jt,cancel:vs,state:Rn,steps:gd}=C_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ei,!0);let Hc;function tw(){Hc=void 0}const jn={now:()=>(Hc===void 0&&jn.set(Rn.isProcessing||gs.useManualTiming?Rn.timestamp:performance.now()),Hc),set:n=>{Hc=n,queueMicrotask(tw)}},R_=n=>e=>typeof e=="string"&&e.startsWith(n),P_=R_("--"),nw=R_("var(--"),Up=n=>nw(n)?iw.test(n.split("/*")[0].trim()):!1,iw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ev(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Yo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ja={...Yo,transform:n=>sr(0,1,n)},gc={...Yo,default:1},ja=n=>Math.round(n*1e5)/1e5,Op=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function rw(n){return n==null}const sw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,kp=(n,e)=>t=>!!(typeof t=="string"&&sw.test(t)&&t.startsWith(n)||e&&!rw(t)&&Object.prototype.hasOwnProperty.call(t,e)),D_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,u]=r.match(Op);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},ow=n=>sr(0,255,n),vd={...Yo,transform:n=>Math.round(ow(n))},Vs={test:kp("rgb","red"),parse:D_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+vd.transform(n)+", "+vd.transform(e)+", "+vd.transform(t)+", "+ja(Ja.transform(r))+")"};function aw(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const hh={test:kp("#"),parse:aw,transform:Vs.transform},ll=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Rr=ll("deg"),ir=ll("%"),tt=ll("px"),lw=ll("vh"),cw=ll("vw"),tv={...ir,parse:n=>ir.parse(n)/100,transform:n=>ir.transform(n*100)},Oo={test:kp("hsl","hue"),parse:D_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+ir.transform(ja(e))+", "+ir.transform(ja(t))+", "+ja(Ja.transform(r))+")"},mn={test:n=>Vs.test(n)||hh.test(n)||Oo.test(n),parse:n=>Vs.test(n)?Vs.parse(n):Oo.test(n)?Oo.parse(n):hh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Vs.transform(n):Oo.transform(n),getAnimatableNone:n=>{const e=mn.parse(n);return e.alpha=0,mn.transform(e)}},uw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function fw(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Op))==null?void 0:e.length)||0)+(((t=n.match(uw))==null?void 0:t.length)||0)>0}const L_="number",N_="color",dw="var",hw="var(",nv="${}",pw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Go(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(pw,d=>(mn.test(d)?(r.color.push(a),o.push(N_),t.push(mn.parse(d))):d.startsWith(hw)?(r.var.push(a),o.push(dw),t.push(d)):(r.number.push(a),o.push(L_),t.push(parseFloat(d))),++a,nv)).split(nv);return{values:t,split:u,indexes:r,types:o}}function mw(n){return Go(n).values}function I_({split:n,types:e}){const t=n.length;return r=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],r[a]!==void 0){const c=e[a];c===L_?o+=ja(r[a]):c===N_?o+=mn.transform(r[a]):o+=r[a]}return o}}function gw(n){return I_(Go(n))}const vw=n=>typeof n=="number"?0:mn.test(n)?mn.getAnimatableNone(n):n,xw=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:vw(n);function _w(n){const e=Go(n);return I_(e)(e.values.map((r,o)=>xw(r,e.split[o])))}const Wi={test:fw,parse:mw,createTransformer:gw,getAnimatableNone:_w};function xd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function yw({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;o=xd(d,u,n+1/3),a=xd(d,u,n),c=xd(d,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function iu(n,e){return t=>t>0?e:n}const Xt=(n,e,t)=>n+(e-n)*t,_d=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},Sw=[hh,Vs,Oo],Mw=n=>Sw.find(e=>e.test(n));function iv(n){const e=Mw(n);if(!e)return!1;let t=e.parse(n);return e===Oo&&(t=yw(t)),t}const rv=(n,e)=>{const t=iv(n),r=iv(e);if(!t||!r)return iu(n,e);const o={...t};return a=>(o.red=_d(t.red,r.red,a),o.green=_d(t.green,r.green,a),o.blue=_d(t.blue,r.blue,a),o.alpha=Xt(t.alpha,r.alpha,a),Vs.transform(o))},ph=new Set(["none","hidden"]);function ww(n,e){return ph.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function Ew(n,e){return t=>Xt(n,e,t)}function Bp(n){return typeof n=="number"?Ew:typeof n=="string"?Up(n)?iu:mn.test(n)?rv:bw:Array.isArray(n)?F_:typeof n=="object"?mn.test(n)?rv:Tw:iu}function F_(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>Bp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function Tw(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Bp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function Aw(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][r[a]],u=n.values[c]??0;t[o]=u,r[a]++}return t}const bw=(n,e)=>{const t=Wi.createTransformer(e),r=Go(n),o=Go(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?ph.has(n)&&!o.values.length||ph.has(e)&&!r.values.length?ww(n,e):ol(F_(Aw(r,o),o.values),t):iu(n,e)};function U_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Xt(n,e,t):Bp(n)(n,e)}const Cw=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>jt.update(e,t),stop:()=>vs(e),now:()=>Rn.isProcessing?Rn.timestamp:jn.now()}},O_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},ru=2e4;function zp(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<ru;)e+=t,r=n.next(e);return e>=ru?1/0:e}function Rw(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(zp(r),ru);return{type:"keyframes",ease:a=>r.next(o*a).value/e,duration:wi(o)}}const ln={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function mh(n,e){return n*Math.sqrt(1-e*e)}const Pw=12;function Dw(n,e,t){let r=t;for(let o=1;o<Pw;o++)r=r-n(r)/e(r);return r}const yd=.001;function Lw({duration:n=ln.duration,bounce:e=ln.bounce,velocity:t=ln.velocity,mass:r=ln.mass}){let o,a,c=1-e;c=sr(ln.minDamping,ln.maxDamping,c),n=sr(ln.minDuration,ln.maxDuration,wi(n)),c<1?(o=h=>{const m=h*c,v=m*n,p=m-t,y=mh(h,c),M=Math.exp(-v);return yd-p/y*M},a=h=>{const v=h*c*n,p=v*t+t,y=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),A=mh(Math.pow(h,2),c);return(-o(h)+yd>0?-1:1)*((p-y)*M)/A}):(o=h=>{const m=Math.exp(-h*n),v=(h-t)*n+1;return-yd+m*v},a=h=>{const m=Math.exp(-h*n),v=(t-h)*(n*n);return m*v});const u=5/n,d=Dw(o,a,u);if(n=hi(n),isNaN(d))return{stiffness:ln.stiffness,damping:ln.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const Nw=["duration","bounce"],Iw=["stiffness","damping","mass"];function sv(n,e){return e.some(t=>n[t]!==void 0)}function Fw(n){let e={velocity:ln.velocity,stiffness:ln.stiffness,damping:ln.damping,mass:ln.mass,isResolvedFromDuration:!1,...n};if(!sv(n,Iw)&&sv(n,Nw))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*sr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:ln.mass,stiffness:o,damping:a}}else{const t=Lw({...n,velocity:0});e={...e,...t,mass:ln.mass},e.isResolvedFromDuration=!0}return e}function su(n=ln.visualDuration,e=ln.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:d,damping:h,mass:m,duration:v,velocity:p,isResolvedFromDuration:y}=Fw({...t,velocity:-wi(t.velocity||0)}),M=p||0,A=h/(2*Math.sqrt(d*m)),x=c-a,_=wi(Math.sqrt(d/m)),C=Math.abs(x)<5;r||(r=C?ln.restSpeed.granular:ln.restSpeed.default),o||(o=C?ln.restDelta.granular:ln.restDelta.default);let F,b,D,N,O,E;if(A<1)D=mh(_,A),N=(M+A*_*x)/D,F=U=>{const V=Math.exp(-A*_*U);return c-V*(N*Math.sin(D*U)+x*Math.cos(D*U))},O=A*_*N+x*D,E=A*_*x-N*D,b=U=>Math.exp(-A*_*U)*(O*Math.sin(D*U)+E*Math.cos(D*U));else if(A===1){F=V=>c-Math.exp(-_*V)*(x+(M+_*x)*V);const U=M+_*x;b=V=>Math.exp(-_*V)*(_*U*V-M)}else{const U=_*Math.sqrt(A*A-1);F=X=>{const ee=Math.exp(-A*_*X),ne=Math.min(U*X,300);return c-ee*((M+A*_*x)*Math.sinh(ne)+U*x*Math.cosh(ne))/U};const V=(M+A*_*x)/U,W=A*_*V-x*U,te=A*_*x-V*U;b=X=>{const ee=Math.exp(-A*_*X),ne=Math.min(U*X,300);return ee*(W*Math.sinh(ne)+te*Math.cosh(ne))}}const I={calculatedDuration:y&&v||null,velocity:U=>hi(b(U)),next:U=>{if(!y&&A<1){const W=Math.exp(-A*_*U),te=Math.sin(D*U),X=Math.cos(D*U),ee=c-W*(N*te+x*X),ne=hi(W*(O*te+E*X));return u.done=Math.abs(ne)<=r&&Math.abs(c-ee)<=o,u.value=u.done?c:ee,u}const V=F(U);if(y)u.done=U>=v;else{const W=hi(b(U));u.done=Math.abs(W)<=r&&Math.abs(c-V)<=o}return u.value=u.done?c:V,u},toString:()=>{const U=Math.min(zp(I),ru),V=O_(W=>I.next(U*W).value,U,30);return U+"ms "+V},toTransition:()=>{}};return I}su.applyToOptions=n=>{const e=Rw(n,100,su);return n.ease=e.ease,n.duration=hi(e.duration),n.type="keyframes",n};const Uw=5;function k_(n,e,t){const r=Math.max(e-Uw,0);return v_(t-n(r),e-r)}function gh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:m}){const v=n[0],p={done:!1,value:v},y=E=>u!==void 0&&E<u||d!==void 0&&E>d,M=E=>u===void 0?d:d===void 0||Math.abs(u-E)<Math.abs(d-E)?u:d;let A=t*e;const x=v+A,_=c===void 0?x:c(x);_!==x&&(A=_-v);const C=E=>-A*Math.exp(-E/r),F=E=>_+C(E),b=E=>{const I=C(E),U=F(E);p.done=Math.abs(I)<=h,p.value=p.done?_:U};let D,N;const O=E=>{y(p.value)&&(D=E,N=su({keyframes:[p.value,M(p.value)],velocity:k_(F,E,p.value),damping:o,stiffness:a,restDelta:h,restSpeed:m}))};return O(0),{calculatedDuration:null,next:E=>{let I=!1;return!N&&D===void 0&&(I=!0,b(E),O(E)),D!==void 0&&E>=D?N.next(E-D):(!I&&b(E),p)}}}function Ow(n,e,t){const r=[],o=t||gs.mix||U_,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||Ei:e;u=ol(d,u)}r.push(u)}return r}function kw(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(Tu(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=Ow(e,r,o),d=u.length,h=m=>{if(c&&m<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(m<n[v+1]);v++);const p=Za(n[v],n[v+1],m);return u[v](p)};return t?m=>h(sr(n[0],n[a-1],m)):h}function Bw(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Za(0,e,r);n.push(Xt(t,1,o))}}function zw(n){const e=[0];return Bw(e,n.length-1),e}function Vw(n,e){return n.map(t=>t*e)}function Hw(n,e){return n.map(()=>e||A_).splice(0,n.length-1)}function Ya({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=K1(r)?r.map(Q0):Q0(r),a={done:!1,value:e[0]},c=Vw(t&&t.length===e.length?t:zw(e),n),u=kw(c,e,{ease:Array.isArray(o)?o:Hw(e,o)});return{calculatedDuration:n,next:d=>(a.value=u(d),a.done=d>=n,a)}}const Gw=n=>n!==null;function Au(n,{repeat:e,repeatType:t="loop"},r,o=1){const a=n.filter(Gw),u=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!u||r===void 0?a[u]:r}const Ww={decay:gh,inertia:gh,tween:Ya,keyframes:Ya,spring:su};function B_(n){typeof n.type=="string"&&(n.type=Ww[n.type])}class Vp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const Xw=n=>n/100;class ou extends Vp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:t}=this.options;t&&t.updatedAt!==jn.now()&&this.tick(jn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;B_(e);const{type:t=Ya,repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:u}=e;const d=t||Ya;d!==Ya&&typeof u[0]!="number"&&(this.mixKeyframes=ol(Xw,U_(u[0],u[1])),u=[0,100]);const h=d({...e,keyframes:u});a==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...u].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=zp(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:m,repeat:v,repeatType:p,repeatDelay:y,type:M,onUpdate:A,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const _=this.currentTime-h*(this.playbackSpeed>=0?1:-1),C=this.playbackSpeed>=0?_<0:_>o;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let F=this.currentTime,b=r;if(v){const E=Math.min(this.currentTime,o)/u;let I=Math.floor(E),U=E%1;!U&&E>=1&&(U=1),U===1&&I--,I=Math.min(I,v+1),!!(I%2)&&(p==="reverse"?(U=1-U,y&&(U-=y/u)):p==="mirror"&&(b=c)),F=sr(0,1,U)*u}let D;C?(this.delayState.value=m[0],D=this.delayState):D=b.next(F),a&&!C&&(D.value=a(D.value));let{done:N}=D;!C&&d!==null&&(N=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return O&&M!==gh&&(D.value=Au(m,this.options,x,this.speed)),A&&A(D.value),O&&this.finish(),D}then(e,t){return this.finished.then(e,t)}get duration(){return wi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+wi(e)}get time(){return wi(this.currentTime)}set time(e){e=hi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return k_(r=>this.generator.next(r).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(jn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=wi(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=Cw,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(jn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function jw(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Hs=n=>n*180/Math.PI,vh=n=>{const e=Hs(Math.atan2(n[1],n[0]));return xh(e)},Yw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:vh,rotateZ:vh,skewX:n=>Hs(Math.atan(n[1])),skewY:n=>Hs(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},xh=n=>(n=n%360,n<0&&(n+=360),n),ov=vh,av=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),lv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),$w={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:av,scaleY:lv,scale:n=>(av(n)+lv(n))/2,rotateX:n=>xh(Hs(Math.atan2(n[6],n[5]))),rotateY:n=>xh(Hs(Math.atan2(-n[2],n[0]))),rotateZ:ov,rotate:ov,skewX:n=>Hs(Math.atan(n[4])),skewY:n=>Hs(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function _h(n){return n.includes("scale")?1:0}function yh(n,e){if(!n||n==="none")return _h(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=$w,o=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Yw,o=u}if(!o)return _h(e);const a=r[e],c=o[1].split(",").map(Kw);return typeof a=="function"?a(c):c[a]}const qw=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return yh(t,e)};function Kw(n){return parseFloat(n.trim())}const $o=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qo=new Set([...$o,"pathRotation"]),cv=n=>n===Yo||n===tt,Zw=new Set(["x","y","z"]),Jw=$o.filter(n=>!Zw.has(n));function Qw(n){const e=[];return Jw.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const ps={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>yh(e,"x"),y:(n,{transform:e})=>yh(e,"y")};ps.translateX=ps.x;ps.translateY=ps.y;const js=new Set;let Sh=!1,Mh=!1,wh=!1;function z_(){if(Mh){const n=Array.from(js).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=Qw(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var u;(u=r.getValue(a))==null||u.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Mh=!1,Sh=!1,js.forEach(n=>n.complete(wh)),js.clear()}function V_(){js.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Mh=!0)})}function eE(){wh=!0,V_(),z_(),wh=!1}class Hp{constructor(e,t,r,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(js.add(this),Sh||(Sh=!0,jt.read(V_),jt.resolveKeyframes(z_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&t){const u=r.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}jw(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),js.delete(this)}cancel(){this.state==="scheduled"&&(js.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const tE=n=>n.startsWith("--");function H_(n,e,t){tE(e)?n.style.setProperty(e,t):n.style[e]=t}const nE={};function G_(n,e){const t=g_(n);return()=>nE[e]??t()}const iE=G_(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),W_=G_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ga=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,uv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ga([0,.65,.55,1]),circOut:Ga([.55,0,1,.45]),backIn:Ga([.31,.01,.66,-.59]),backOut:Ga([.33,1.53,.69,.99])};function X_(n,e){if(n)return typeof n=="function"?W_()?O_(n,e):"ease-out":b_(n)?Ga(n):Array.isArray(n)?n.map(t=>X_(t,e)||uv.easeOut):uv[n]}function rE(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeOut",times:d}={},h=void 0){const m={[e]:t};d&&(m.offset=d);const v=X_(u,o);Array.isArray(v)&&(m.easing=v);const p={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return h&&(p.pseudoElement=h),n.animate(m,p)}function j_(n){return typeof n=="function"&&"applyToOptions"in n}function sE({type:n,...e}){return j_(n)&&W_()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class Y_ extends Vp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:u,onComplete:d}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,Tu(typeof e.type!="string");const h=sE(e);this.animation=rE(t,r,o,h,a),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const m=Au(o,this.options,u,this.speed);this.updateMotionValue&&this.updateMotionValue(m),H_(t,r,m),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,r,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var t,r;const e=((r=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:r.call(t).duration)||0;return wi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+wi(e)}get time(){return wi(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=hi(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:r,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&iE()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),r&&(this.animation.rangeEnd=r),Ei):o(this)}}const $_={anticipate:w_,backInOut:M_,circInOut:T_};function oE(n){return n in $_}function aE(n){typeof n.ease=="string"&&oE(n.ease)&&(n.ease=$_[n.ease])}const Sd=10;class lE extends Y_{constructor(e){aE(e),B_(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new ou({...c,autoplay:!1}),d=Math.max(Sd,jn.now()-this.startTime),h=sr(0,Sd,d-Sd),m=u.sample(d).value,{name:v}=this.options;a&&v&&H_(a,v,m),t.setWithVelocity(u.sample(Math.max(0,d-h)).value,m,h),u.stop()}}const fv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Wi.test(n)||n==="0")&&!n.startsWith("url("));function cE(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function uE(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=fv(o,e),u=fv(a,e);return!c||!u?!1:cE(n)||(t==="spring"||j_(t))&&r}function Eh(n){n.duration=0,n.type="keyframes"}const q_=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),fE=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function dE(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&fE.test(n[e]))return!0;return!1}const hE=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),pE=g_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function mE(n){var v;const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:a,type:c,keyframes:u}=n,d=(v=e==null?void 0:e.owner)==null?void 0:v.current;if(!(d instanceof HTMLElement)&&!(d instanceof SVGElement))return!1;const{onUpdate:h,transformTemplate:m}=e.owner.getProps();return pE()&&t&&(q_.has(t)||hE.has(t)&&dE(u))&&(t!=="transform"||!m)&&!h&&!r&&o!=="mirror"&&a!==0&&c!=="inertia"}const gE=40;class vE extends Vp{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:u,name:d,motionValue:h,element:m,...v}){var M;super(),this.stop=()=>{var A,x;this._animation&&(this._animation.stop(),(A=this.stopTimeline)==null||A.call(this)),(x=this.keyframeResolver)==null||x.cancel()},this.createdAt=jn.now();const p={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,name:d,motionValue:h,element:m,...v},y=(m==null?void 0:m.KeyframeResolver)||Hp;this.keyframeResolver=new y(u,(A,x,_)=>this.onKeyframesResolved(A,x,p,!_),d,h,m),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,t,r,o){var _,C;this.keyframeResolver=void 0;const{name:a,type:c,velocity:u,delay:d,isHandoff:h,onUpdate:m}=r;this.resolvedAt=jn.now();let v=!0;uE(e,a,c,u)||(v=!1,(gs.instantAnimations||!d)&&(m==null||m(Au(e,r,t))),e[0]=e[e.length-1],Eh(r),r.repeat=0);const y={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>gE?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},M=v&&!h&&mE(y),A=(C=(_=y.motionValue)==null?void 0:_.owner)==null?void 0:C.current;let x;if(M)try{x=new lE({...y,element:A})}catch{x=new ou(y)}else x=new ou(y);x.finished.then(()=>{this.notifyFinished()}).catch(Ei),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),eE()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function K_(n,e,t,r=0,o=1){const a=Array.from(n).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),c=n.size,u=(c-1)*r;return typeof t=="function"?t(a,c):o===1?a*r:u-a*r}const dv=30,xE=n=>!isNaN(parseFloat(n));class _E{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const o=jn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=jn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=xE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Np);const r=this.events[e].add(t);return e==="change"?()=>{r(),jt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=jn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>dv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,dv);return v_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Wo(n,e){return new _E(n,e)}function Z_(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...r}=n;return{...e,...r}}return n}function Gp(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?Z_(t,n):t}const yE={type:"spring",stiffness:500,damping:25,restSpeed:10},SE=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),ME={type:"keyframes",duration:.8},wE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},EE=(n,{keyframes:e})=>e.length>2?ME:qo.has(n)?n.startsWith("scale")?SE(e[1]):yE:wE,TE=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function AE(n){for(const e in n)if(!TE.has(e))return!0;return!1}const Wp=(n,e,t,r={},o,a)=>c=>{const u=Gp(r,n)||{},d=u.delay||r.delay||0;let{elapsed:h=0}=r;h=h-hi(d);const m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:p=>{e.set(p),u.onUpdate&&u.onUpdate(p)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};AE(u)||Object.assign(m,EE(n,m)),m.duration&&(m.duration=hi(m.duration)),m.repeatDelay&&(m.repeatDelay=hi(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(Eh(m),m.delay===0&&(v=!0)),(gs.instantAnimations||gs.skipAnimations||o!=null&&o.shouldSkipAnimations||u.skipAnimations)&&(v=!0,Eh(m),m.delay=0),m.allowFlatten=!u.type&&!u.ease,v&&!a&&e.get()!==void 0){const p=Au(m.keyframes,u);if(p!==void 0){jt.update(()=>{m.onUpdate(p),m.onComplete()});return}}return u.isSync?new ou(m):new vE(m)},bE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function CE(n){const e=bE.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function J_(n,e,t=1){const[r,o]=CE(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return h_(c)?parseFloat(c):c}return Up(o)?J_(o,e,t+1):o}function hv(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Xp(n,e,t,r){if(typeof e=="function"){const[o,a]=hv(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=hv(r);e=e(t!==void 0?t:n.custom,o,a)}return e}function Ys(n,e,t){const r=n.getProps();return Xp(r,e,t!==void 0?t:r.custom,n)}const Q_=new Set(["width","height","top","left","right","bottom",...$o]),Th=n=>Array.isArray(n);function RE(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Wo(t))}function PE(n){return Th(n)?n[n.length-1]||0:n}function DE(n,e){const t=Ys(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const u=PE(a[c]);RE(n,c,u)}}const Pn=n=>!!(n&&n.getVelocity);function LE(n){return!!(Pn(n)&&n.add)}function Ah(n,e){const t=n.getValue("willChange");if(LE(t))return t.add(e);if(!t&&gs.WillChange){const r=new gs.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function jp(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const NE="framerAppearId",ey="data-"+jp(NE);function ty(n){return n.props[ey]}function IE({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function ny(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:a,transitionEnd:c,...u}=e;const d=n.getDefaultTransition();a=a?Z_(a,d):d;const h=a==null?void 0:a.reduceMotion,m=a==null?void 0:a.skipAnimations;r&&(a=r);const v=[],p=o&&n.animationState&&n.animationState.getState()[o],y=a==null?void 0:a.path;y&&y.animateVisualElement(n,u,a,t,v);for(const M in u){const A=n.getValue(M,n.latestValues[M]??null),x=u[M];if(x===void 0||p&&IE(p,M))continue;const _={delay:t,...Gp(a||{},M)};m&&(_.skipAnimations=!0);const C=A.get();if(C!==void 0&&!A.isAnimating()&&!Array.isArray(x)&&x===C&&!_.velocity){jt.update(()=>A.set(x));continue}let F=!1;if(window.MotionHandoffAnimation){const N=ty(n);if(N){const O=window.MotionHandoffAnimation(N,M,jt);O!==null&&(_.startTime=O,F=!0)}}Ah(n,M);const b=h??n.shouldReduceMotion;A.start(Wp(M,A,x,b&&Q_.has(M)?{type:!1}:_,n,F));const D=A.animation;D&&v.push(D)}if(c){const M=()=>jt.update(()=>{c&&DE(n,c)});v.length?Promise.all(v).then(M):M()}return v}function bh(n,e,t={}){var d;const r=Ys(n,e,t.type==="exit"?(d=n.presenceContext)==null?void 0:d.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const a=r?()=>Promise.all(ny(n,r,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:p}=o;return FE(n,e,h,m,v,p,t)}:()=>Promise.resolve(),{when:u}=o;if(u){const[h,m]=u==="beforeChildren"?[a,c]:[c,a];return h().then(()=>m())}else return Promise.all([a(),c(t.delay)])}function FE(n,e,t=0,r=0,o=0,a=1,c){const u=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),u.push(bh(d,e,{...c,delay:t+(typeof r=="function"?0:r)+K_(n.variantChildren,d,r,o,a)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(u)}function UE(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>bh(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=bh(n,e,t);else{const o=typeof e=="function"?Ys(n,e,t.custom):e;r=Promise.all(ny(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const OE={test:n=>n==="auto",parse:n=>n},iy=n=>e=>e.test(n),ry=[Yo,tt,ir,Rr,cw,lw,OE],pv=n=>ry.find(iy(n));function kE(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||m_(n):!0}const BE=new Set(["brightness","contrast","saturate","opacity"]);function zE(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Op)||[];if(!r)return n;const o=t.replace(r,"");let a=BE.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const VE=/\b([a-z-]*)\(.*?\)/gu,Ch={...Wi,getAnimatableNone:n=>{const e=n.match(VE);return e?e.map(zE).join(" "):n}},Rh={...Wi,getAnimatableNone:n=>{const e=Wi.parse(n);return Wi.createTransformer(n)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},mv={...Yo,transform:Math.round},HE={rotate:Rr,pathRotation:Rr,rotateX:Rr,rotateY:Rr,rotateZ:Rr,scale:gc,scaleX:gc,scaleY:gc,scaleZ:gc,skew:Rr,skewX:Rr,skewY:Rr,distance:tt,translateX:tt,translateY:tt,translateZ:tt,x:tt,y:tt,z:tt,perspective:tt,transformPerspective:tt,opacity:Ja,originX:tv,originY:tv,originZ:tt},au={borderWidth:tt,borderTopWidth:tt,borderRightWidth:tt,borderBottomWidth:tt,borderLeftWidth:tt,borderRadius:tt,borderTopLeftRadius:tt,borderTopRightRadius:tt,borderBottomRightRadius:tt,borderBottomLeftRadius:tt,width:tt,maxWidth:tt,height:tt,maxHeight:tt,top:tt,right:tt,bottom:tt,left:tt,inset:tt,insetBlock:tt,insetBlockStart:tt,insetBlockEnd:tt,insetInline:tt,insetInlineStart:tt,insetInlineEnd:tt,padding:tt,paddingTop:tt,paddingRight:tt,paddingBottom:tt,paddingLeft:tt,paddingBlock:tt,paddingBlockStart:tt,paddingBlockEnd:tt,paddingInline:tt,paddingInlineStart:tt,paddingInlineEnd:tt,margin:tt,marginTop:tt,marginRight:tt,marginBottom:tt,marginLeft:tt,marginBlock:tt,marginBlockStart:tt,marginBlockEnd:tt,marginInline:tt,marginInlineStart:tt,marginInlineEnd:tt,fontSize:tt,backgroundPositionX:tt,backgroundPositionY:tt,...HE,zIndex:mv,fillOpacity:Ja,strokeOpacity:Ja,numOctaves:mv},GE={...au,color:mn,backgroundColor:mn,outlineColor:mn,fill:mn,stroke:mn,borderColor:mn,borderTopColor:mn,borderRightColor:mn,borderBottomColor:mn,borderLeftColor:mn,filter:Ch,WebkitFilter:Ch,mask:Rh,WebkitMask:Rh},sy=n=>GE[n],WE=new Set([Ch,Rh]);function oy(n,e){let t=sy(n);return WE.has(t)||(t=Wi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const XE=new Set(["auto","none","0"]);function jE(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!XE.has(a)&&Go(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=oy(t,o)}class YE extends Hp{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let v=e[m];if(typeof v=="string"&&(v=v.trim(),Up(v))){const p=J_(v,t.current);p!==void 0&&(e[m]=p),m===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!Q_.has(r)||e.length!==2)return;const[o,a]=e,c=pv(o),u=pv(a),d=ev(o),h=ev(a);if(d!==h&&ps[r]){this.needsMeasurement=!0;return}if(c!==u)if(cv(c)&&cv(u))for(let m=0;m<e.length;m++){const v=e[m];typeof v=="string"&&(e[m]=parseFloat(v))}else ps[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||kE(e[o]))&&r.push(o);r.length&&jE(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ps[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var u;const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=r.length-1,c=r[a];r[a]=ps[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([d,h])=>{e.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const Yp=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function ay(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const o=(t==null?void 0:t[n])??r.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(r=>r!=null)}const Ph=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function Gc(n){return p_(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:$p}=C_(queueMicrotask,!1),zi={x:!1,y:!1};function ly(){return zi.x||zi.y}function $E(n){return n==="x"||n==="y"?zi[n]?null:(zi[n]=!0,()=>{zi[n]=!1}):zi.x||zi.y?null:(zi.x=zi.y=!0,()=>{zi.x=zi.y=!1})}function cy(n,e){const t=ay(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function qE(n){return!(n.pointerType==="touch"||ly())}function KE(n,e,t={}){const[r,o,a]=cy(n,t);return r.forEach(c=>{let u=!1,d=!1,h;const m=()=>{c.removeEventListener("pointerleave",M)},v=x=>{h&&(h(x),h=void 0),m()},p=x=>{u=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),d&&(d=!1,v(x))},y=()=>{u=!0,window.addEventListener("pointerup",p,o),window.addEventListener("pointercancel",p,o)},M=x=>{if(x.pointerType!=="touch"){if(u){d=!0;return}v(x)}},A=x=>{if(!qE(x))return;d=!1;const _=e(c,x);typeof _=="function"&&(h=_,c.addEventListener("pointerleave",M,o))};c.addEventListener("pointerenter",A,o),c.addEventListener("pointerdown",y,o)}),a}const uy=(n,e)=>e?n===e?!0:uy(n,e.parentElement):!1,qp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,ZE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function JE(n){return ZE.has(n.tagName)||n.isContentEditable===!0}const QE=new Set(["INPUT","SELECT","TEXTAREA"]);function eT(n){return QE.has(n.tagName)||n.isContentEditable===!0}const Wc=new WeakSet;function gv(n){return e=>{e.key==="Enter"&&n(e)}}function Md(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const tT=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=gv(()=>{if(Wc.has(t))return;Md(t,"down");const o=gv(()=>{Md(t,"up")}),a=()=>Md(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function vv(n){return qp(n)&&!ly()}const xv=new WeakSet;function nT(n,e,t={}){const[r,o,a]=cy(n,t),c=u=>{const d=u.currentTarget;if(!vv(u)||xv.has(u))return;Wc.add(d),t.stopPropagation&&xv.add(u);const h=e(d,u),m={...o,capture:!0},v=(M,A)=>{window.removeEventListener("pointerup",p,m),window.removeEventListener("pointercancel",y,m),Wc.has(d)&&Wc.delete(d),vv(M)&&typeof h=="function"&&h(M,{success:A})},p=M=>{v(M,d===window||d===document||t.useGlobalTarget||uy(d,M.target))},y=M=>{v(M,!1)};window.addEventListener("pointerup",p,m),window.addEventListener("pointercancel",y,m)};return r.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),Gc(u)&&(u.addEventListener("focus",h=>tT(h,o)),!JE(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),a}function Kp(n){return p_(n)&&"ownerSVGElement"in n}const Xc=new WeakMap;let us;const fy=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:Kp(r)&&"getBBox"in r?r.getBBox()[e]:r[t],iT=fy("inline","width","offsetWidth"),rT=fy("block","height","offsetHeight");function sT({target:n,borderBoxSize:e}){var t;(t=Xc.get(n))==null||t.forEach(r=>{r(n,{get width(){return iT(n,e)},get height(){return rT(n,e)}})})}function oT(n){n.forEach(sT)}function aT(){typeof ResizeObserver>"u"||(us=new ResizeObserver(oT))}function lT(n,e){us||aT();const t=ay(n);return t.forEach(r=>{let o=Xc.get(r);o||(o=new Set,Xc.set(r,o)),o.add(e),us==null||us.observe(r)}),()=>{t.forEach(r=>{const o=Xc.get(r);o==null||o.delete(e),o!=null&&o.size||us==null||us.unobserve(r)})}}const jc=new Set;let ko;function cT(){ko=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};jc.forEach(e=>e(n))},window.addEventListener("resize",ko)}function uT(n){return jc.add(n),ko||cT(),()=>{jc.delete(n),!jc.size&&typeof ko=="function"&&(window.removeEventListener("resize",ko),ko=void 0)}}function _v(n,e){return typeof n=="function"?uT(n):lT(n,e)}function fT(n){return Kp(n)&&n.tagName==="svg"}const dT=[...ry,mn,Wi],hT=n=>dT.find(iy(n)),yv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Bo=()=>({x:yv(),y:yv()}),Sv=()=>({min:0,max:0}),yn=()=>({x:Sv(),y:Sv()}),pT=new WeakMap;function bu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Qa(n){return typeof n=="string"||Array.isArray(n)}const Zp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Jp=["initial",...Zp];function Cu(n){return bu(n.animate)||Jp.some(e=>Qa(n[e]))}function dy(n){return!!(Cu(n)||n.variants)}function mT(n,e,t){for(const r in e){const o=e[r],a=t[r];if(Pn(o))n.addValue(r,o);else if(Pn(a))n.addValue(r,Wo(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Wo(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Dh={current:null},hy={current:!1},gT=typeof window<"u";function vT(){if(hy.current=!0,!!gT)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Dh.current=n.matches;n.addEventListener("change",e),e()}else Dh.current=!1}const Mv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let lu={};function py(n){lu=n}function xT(){return lu}class _T{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Hp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=jn.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,jt.render(this.render,!1,!0))};const{latestValues:h,renderState:m}=u;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=m,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=d,this.blockInitialAnimation=!!c,this.isControllingVariants=Cu(t),this.isVariantNode=dy(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...p}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in p){const M=p[y];h[y]!==void 0&&Pn(M)&&M.set(h[y])}}mount(e){var t,r;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,pT.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(hy.current||vT(),this.shouldReduceMotion=Dh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),vs(this.notifyUpdate),vs(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&q_.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:u,times:d,ease:h,duration:m}=t.accelerate,v=new Y_({element:this.current,name:e,keyframes:u,times:d,ease:h,duration:hi(m)}),p=c(v);this.valueSubscriptions.set(e,()=>{p(),v.cancel()});return}const r=qo.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&jt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in lu){const t=lu[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):yn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Mv.length;r++){const o=Mv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=mT(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Wo(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(h_(r)||m_(r))?r=parseFloat(r):!hT(r)&&Wi.test(t)&&(r=oy(e,t)),this.setBaseTarget(e,Pn(r)?r.get():r)),Pn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const c=Xp(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(r=c[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Pn(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Np),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){$p.render(this.render)}}class my extends _T{constructor(){super(...arguments),this.KeyframeResolver=YE}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const r=e.style;return r?r[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Pn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class _s{constructor(e){this.isMounted=!1,this.node=e}update(){}}function gy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function yT({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function ST(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function wd(n){return n===void 0||n===1}function Lh({scale:n,scaleX:e,scaleY:t}){return!wd(n)||!wd(e)||!wd(t)}function zs(n){return Lh(n)||vy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function vy(n){return wv(n.x)||wv(n.y)}function wv(n){return n&&n!=="0%"}function cu(n,e,t){const r=n-t,o=e*r;return t+o}function Ev(n,e,t,r,o){return o!==void 0&&(n=cu(n,o,r)),cu(n,t,r)+e}function Nh(n,e=0,t=1,r,o){n.min=Ev(n.min,e,t,r,o),n.max=Ev(n.max,e,t,r,o)}function xy(n,{x:e,y:t}){Nh(n.x,e.translate,e.scale,e.originPoint),Nh(n.y,t.translate,t.scale,t.originPoint)}const Tv=.999999999999,Av=1.0000000000001;function MT(n,e,t,r=!1){var u;const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let d=0;d<o;d++){a=t[d],c=a.projectionDelta;const{visualElement:h}=a.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Qi(n.x,-a.scroll.offset.x),Qi(n.y,-a.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,xy(n,c)),r&&zs(a.latestValues)&&Yc(n,a.latestValues,(u=a.layout)==null?void 0:u.layoutBox))}e.x<Av&&e.x>Tv&&(e.x=1),e.y<Av&&e.y>Tv&&(e.y=1)}function Qi(n,e){n.min+=e,n.max+=e}function bv(n,e,t,r,o=.5){const a=Xt(n.min,n.max,o);Nh(n,e,t,a,r)}function Cv(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function Yc(n,e,t){const r=t??n;bv(n.x,Cv(e.x,r.x),e.scaleX,e.scale,e.originX),bv(n.y,Cv(e.y,r.y),e.scaleY,e.scale,e.originY)}function _y(n,e){return gy(ST(n.getBoundingClientRect(),e))}function wT(n,e,t){const r=_y(n,t),{scroll:o}=e;return o&&(Qi(r.x,o.offset.x),Qi(r.y,o.offset.y)),r}const ET={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},TT=$o.length;function AT(n,e,t){let r="",o=!0;for(let c=0;c<TT;c++){const u=$o[c],d=n[u];if(d===void 0)continue;let h=!0;if(typeof d=="number")h=d===(u.startsWith("scale")?1:0);else{const m=parseFloat(d);h=u.startsWith("scale")?m===1:m===0}if(!h||t){const m=Ph(d,au[u]);if(!h){o=!1;const v=ET[u]||u;r+=`${v}(${m}) `}t&&(e[u]=m)}}const a=n.pathRotation;return a&&(o=!1,r+=`rotate(${Ph(a,au.pathRotation)}) `),r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function Qp(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const d in e){const h=e[d];if(qo.has(d)){c=!0;continue}else if(P_(d)){o[d]=h;continue}else{const m=Ph(h,au[d]);d.startsWith("origin")?(u=!0,a[d]=m):r[d]=m}}if(e.transform||(c||t?r.transform=AT(e,n.transform,t):r.transform&&(r.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:m=0}=a;r.transformOrigin=`${d} ${h} ${m}`}}function yy(n,{style:e,vars:t},r,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,r);for(c in t)a.setProperty(c,t[c])}function Rv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Fa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(tt.test(n))n=parseFloat(n);else return n;const t=Rv(n,e.target.x),r=Rv(n,e.target.y);return`${t}% ${r}%`}},bT={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Wi.parse(n);if(o.length>5)return r;const a=Wi.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=d;const h=Xt(u,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}},Ih={borderRadius:{...Fa,applyTo:[...Yp]},borderTopLeftRadius:Fa,borderTopRightRadius:Fa,borderBottomLeftRadius:Fa,borderBottomRightRadius:Fa,boxShadow:bT};function Sy(n,{layout:e,layoutId:t}){return qo.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Ih[n]||n==="opacity")}function em(n,e,t){var c;const r=n.style,o=e==null?void 0:e.style,a={};if(!r)return a;for(const u in r)(Pn(r[u])||o&&Pn(o[u])||Sy(u,n)||((c=t==null?void 0:t.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(a[u]=r[u]);return a}function CT(n){return window.getComputedStyle(n)}class RT extends my{constructor(){super(...arguments),this.type="html",this.renderInstance=yy}mount(e){Tu(!!e.style),super.mount(e)}readValueFromInstance(e,t){var r;if(qo.has(t))return(r=this.projection)!=null&&r.isProjecting?_h(t):qw(e,t);{const o=CT(e),a=(P_(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return _y(e,t)}build(e,t,r){Qp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return em(e,t,r)}}const PT={offset:"stroke-dashoffset",array:"stroke-dasharray"},DT={offset:"strokeDashoffset",array:"strokeDasharray"};function LT(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?PT:DT;n[a.offset]=`${-r}`,n[a.array]=`${e} ${t}`}const NT=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function My(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...u},d,h,m){if(Qp(n,u,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:p}=n;v.transform&&(p.transform=v.transform,delete v.transform),(p.transform||v.transformOrigin)&&(p.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),p.transform&&(p.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete v.transformBox);for(const y of NT)v[y]!==void 0&&(p[y]=v[y],delete v[y]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),o!==void 0&&LT(v,o,a,c,!1)}const wy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Ey=n=>typeof n=="string"&&n.toLowerCase()==="svg";function IT(n,e,t,r){yy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(wy.has(o)?o:jp(o),e.attrs[o])}function Ty(n,e,t){const r=em(n,e,t);for(const o in n)if(Pn(n[o])||Pn(e[o])){const a=$o.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}class FT extends my{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=yn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(qo.has(t)){const r=sy(t);return r&&r.default||0}return t=wy.has(t)?t:jp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Ty(e,t,r)}build(e,t,r){My(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){IT(e,t,r,o)}mount(e){this.isSVGTag=Ey(e.tagName),super.mount(e)}}const UT=Jp.length;function Ay(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Ay(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<UT;t++){const r=Jp[t],o=n.props[r];(Qa(o)||o===!1)&&(e[r]=o)}return e}function by(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const OT=[...Zp].reverse(),kT=Zp.length;function BT(n){return e=>Promise.all(e.map(({animation:t,options:r})=>UE(n,t,r)))}function zT(n){let e=BT(n),t=Pv(),r=!0,o=!1;const a=h=>(m,v)=>{var y;const p=Ys(n,v,h==="exit"?(y=n.presenceContext)==null?void 0:y.custom:void 0);if(p){const{transition:M,transitionEnd:A,...x}=p;m={...m,...x,...A}}return m};function c(h){e=h(n)}function u(h){const{props:m}=n,v=Ay(n.parent)||{},p=[],y=new Set;let M={},A=1/0;for(let _=0;_<kT;_++){const C=OT[_],F=t[C],b=m[C]!==void 0?m[C]:v[C],D=Qa(b),N=C===h?F.isActive:null;N===!1&&(A=_);let O=b===v[C]&&b!==m[C]&&D;if(O&&(r||o)&&n.manuallyAnimateOnMount&&(O=!1),F.protectedKeys={...M},!F.isActive&&N===null||!b&&!F.prevProp||bu(b)||typeof b=="boolean")continue;if(C==="exit"&&F.isActive&&N!==!0){F.prevResolvedValues&&(M={...M,...F.prevResolvedValues});continue}const E=VT(F.prevProp,b);let I=E||C===h&&F.isActive&&!O&&D||_>A&&D,U=!1;const V=Array.isArray(b)?b:[b];let W=V.reduce(a(C),{});N===!1&&(W={});const{prevResolvedValues:te={}}=F,X={...te,...W},ee=j=>{I=!0,y.has(j)&&(U=!0,y.delete(j)),F.needsAnimating[j]=!0;const Y=n.getValue(j);Y&&(Y.liveStyle=!1)};for(const j in X){const Y=W[j],L=te[j];if(M.hasOwnProperty(j))continue;let w=!1;Th(Y)&&Th(L)?w=!by(Y,L)||E:w=Y!==L,w?Y!=null?ee(j):y.add(j):Y!==void 0&&y.has(j)?ee(j):F.protectedKeys[j]=!0}F.prevProp=b,F.prevResolvedValues=W,F.isActive&&(M={...M,...W}),(r||o)&&n.blockInitialAnimation&&(I=!1);const ne=O&&E;I&&(!ne||U)&&p.push(...V.map(j=>{const Y={type:C};if(typeof j=="string"&&(r||o)&&!ne&&n.manuallyAnimateOnMount&&n.parent){const{parent:L}=n,w=Ys(L,j);if(L.enteringChildren&&w){const{delayChildren:H}=w.transition||{};Y.delay=K_(L.enteringChildren,n,H)}}return{animation:j,options:Y}}))}if(y.size){const _={};if(typeof m.initial!="boolean"){const C=Ys(n,Array.isArray(m.initial)?m.initial[0]:m.initial);C&&C.transition&&(_.transition=C.transition)}y.forEach(C=>{const F=n.getBaseTarget(C),b=n.getValue(C);b&&(b.liveStyle=!0),_[C]=F??null}),p.push({animation:_})}let x=!!p.length;return r&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(x=!1),r=!1,o=!1,x?e(p):Promise.resolve()}function d(h,m){var p;if(t[h].isActive===m)return Promise.resolve();(p=n.variantChildren)==null||p.forEach(y=>{var M;return(M=y.animationState)==null?void 0:M.setActive(h,m)}),t[h].isActive=m;const v=u(h);for(const y in t)t[y].protectedKeys={};return v}return{animateChanges:u,setActive:d,setAnimateFunction:c,getState:()=>t,reset:()=>{t=Pv(),o=!0}}}function VT(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!by(e,n):!1}function Ns(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Pv(){return{animate:Ns(!0),whileInView:Ns(),whileHover:Ns(),whileTap:Ns(),whileDrag:Ns(),whileFocus:Ns(),exit:Ns()}}function Fh(n,e){n.min=e.min,n.max=e.max}function Fi(n,e){Fh(n.x,e.x),Fh(n.y,e.y)}function Dv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const Cy=1e-4,HT=1-Cy,GT=1+Cy,Ry=.01,WT=0-Ry,XT=0+Ry;function Yn(n){return n.max-n.min}function jT(n,e,t){return Math.abs(n-e)<=t}function Lv(n,e,t,r=.5){n.origin=r,n.originPoint=Xt(e.min,e.max,n.origin),n.scale=Yn(t)/Yn(e),n.translate=Xt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=HT&&n.scale<=GT||isNaN(n.scale))&&(n.scale=1),(n.translate>=WT&&n.translate<=XT||isNaN(n.translate))&&(n.translate=0)}function $a(n,e,t,r){Lv(n.x,e.x,t.x,r?r.originX:void 0),Lv(n.y,e.y,t.y,r?r.originY:void 0)}function Nv(n,e,t,r=0){const o=r?Xt(t.min,t.max,r):t.min;n.min=o+e.min,n.max=n.min+Yn(e)}function YT(n,e,t,r){Nv(n.x,e.x,t.x,r==null?void 0:r.x),Nv(n.y,e.y,t.y,r==null?void 0:r.y)}function Iv(n,e,t,r=0){const o=r?Xt(t.min,t.max,r):t.min;n.min=e.min-o,n.max=n.min+Yn(e)}function uu(n,e,t,r){Iv(n.x,e.x,t.x,r==null?void 0:r.x),Iv(n.y,e.y,t.y,r==null?void 0:r.y)}function Fv(n,e,t,r,o){return n-=e,n=cu(n,1/t,r),o!==void 0&&(n=cu(n,1/o,r)),n}function $T(n,e=0,t=1,r=.5,o,a=n,c=n){if(ir.test(e)&&(e=parseFloat(e),e=Xt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=Xt(a.min,a.max,r);n===a&&(u-=e),n.min=Fv(n.min,e,t,u,o),n.max=Fv(n.max,e,t,u,o)}function Uv(n,e,[t,r,o],a,c){$T(n,e[t],e[r],e[o],e.scale,a,c)}const qT=["x","scaleX","originX"],KT=["y","scaleY","originY"];function Ov(n,e,t,r){Uv(n.x,e,qT,t?t.x:void 0,r?r.x:void 0),Uv(n.y,e,KT,t?t.y:void 0,r?r.y:void 0)}function kv(n){return n.translate===0&&n.scale===1}function Py(n){return kv(n.x)&&kv(n.y)}function Bv(n,e){return n.min===e.min&&n.max===e.max}function ZT(n,e){return Bv(n.x,e.x)&&Bv(n.y,e.y)}function zv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Dy(n,e){return zv(n.x,e.x)&&zv(n.y,e.y)}function Vv(n){return Yn(n.x)/Yn(n.y)}function Hv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Ji(n){return[n("x"),n("y")]}function JT(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,pathRotation:v,rotateX:p,rotateY:y,skewX:M,skewY:A}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),v&&(r+=`rotate(${v}deg) `),p&&(r+=`rotateX(${p}deg) `),y&&(r+=`rotateY(${y}deg) `),M&&(r+=`skewX(${M}deg) `),A&&(r+=`skewY(${A}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(r+=`scale(${u}, ${d})`),r||"none"}const QT=Yp.length,Gv=n=>typeof n=="string"?parseFloat(n):n,Wv=n=>typeof n=="number"||tt.test(n);function eA(n,e,t,r,o,a){o?(n.opacity=Xt(0,t.opacity??1,tA(r)),n.opacityExit=Xt(e.opacity??1,0,nA(r))):a&&(n.opacity=Xt(e.opacity??1,t.opacity??1,r));for(let c=0;c<QT;c++){const u=Yp[c];let d=Xv(e,u),h=Xv(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Wv(d)===Wv(h)?(n[u]=Math.max(Xt(Gv(d),Gv(h),r),0),(ir.test(h)||ir.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=Xt(e.rotate||0,t.rotate||0,r))}function Xv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const tA=Ly(0,.5,E_),nA=Ly(.5,.95,Ei);function Ly(n,e,t){return r=>r<n?0:r>e?1:t(Za(n,e,r))}function iA(n,e,t){const r=Pn(n)?n:Wo(n);return r.start(Wp("",r,e,t)),r.animation}function el(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}const rA=(n,e)=>n.depth-e.depth;class sA{constructor(){this.children=[],this.isDirty=!1}add(e){Lp(this.children,e),this.isDirty=!0}remove(e){nu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(rA),this.isDirty=!1,this.children.forEach(e)}}function oA(n,e){const t=jn.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(vs(r),n(a-e))};return jt.setup(r,!0),()=>vs(r)}function $c(n){return Pn(n)?n.get():n}class aA{constructor(){this.members=[]}add(e){Lp(this.members,e);for(let t=this.members.length-1;t>=0;t--){const r=this.members[t];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(nu(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(nu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=r,t&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,r,o,a,c;(r=(t=e.options).onExitComplete)==null||r.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const qc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ed=["","X","Y","Z"],lA=1e3;let cA=0;function Td(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function Ny(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=ty(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",jt,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Ny(r)}function Iy({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=cA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(dA),this.nodes.forEach(xA),this.nodes.forEach(_A),this.nodes.forEach(hA)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new sA)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Np),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=Kp(c)&&!fT(c),this.instance=c;const{layoutId:u,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||u)&&(this.isLayoutDirty=!0),n){let m,v=0;const p=()=>this.root.updateBlockedByResize=!1;jt.read(()=>{v=window.innerWidth}),n(c,()=>{const y=window.innerWidth;y!==v&&(v=y,this.root.updateBlockedByResize=!0,m&&m(),m=oA(p,250),qc.hasAnimatedSinceResize&&(qc.hasAnimatedSinceResize=!1,this.nodes.forEach($v)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:v,hasRelativeLayoutChanged:p,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||EA,{onLayoutAnimationStart:A,onLayoutAnimationComplete:x}=h.getProps(),_=!this.targetLayout||!Dy(this.targetLayout,y),C=!v&&p;if(this.options.layoutRoot||this.resumeFrom||C||v&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const F={...Gp(M,"layout"),onPlay:A,onComplete:x};(h.shouldReduceMotion||this.options.layoutRoot)&&(F.delay=0,F.type=!1),this.startAnimation(F),this.setAnimationOrigin(m,C,F.path)}else v||$v(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),vs(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(yA),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ny(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const d=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),d&&this.nodes.forEach(mA),this.nodes.forEach(jv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Yv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(gA),this.nodes.forEach(vA),this.nodes.forEach(uA),this.nodes.forEach(fA)):this.nodes.forEach(Yv),this.clearAllSnapshots();const u=jn.now();Rn.delta=sr(0,1e3/60,u-Rn.timestamp),Rn.timestamp=u,Rn.isProcessing=!0,gd.update.process(Rn),gd.preRender.process(Rn),gd.render.process(Rn),Rn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(pA),this.sharedNodes.forEach(SA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,jt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){jt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Yn(this.snapshot.measuredBox.x)&&!Yn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=yn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!Py(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;c&&this.instance&&(u||zs(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),TA(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:c}=this.options;if(!c)return yn();const u=c.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(AA))){const{scroll:m}=this.root;m&&(Qi(u.x,m.offset.x),Qi(u.y,m.offset.y))}return u}removeElementScroll(c){var d;const u=yn();if(Fi(u,c),(d=this.scroll)!=null&&d.wasRoot)return u;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:v,options:p}=m;m!==this.root&&v&&p.layoutScroll&&(v.wasRoot&&Fi(u,c),Qi(u.x,v.offset.x),Qi(u.y,v.offset.y))}return u}applyTransform(c,u=!1,d){var m,v;const h=d||yn();Fi(h,c);for(let p=0;p<this.path.length;p++){const y=this.path[p];!u&&y.options.layoutScroll&&y.scroll&&y!==y.root&&(Qi(h.x,-y.scroll.offset.x),Qi(h.y,-y.scroll.offset.y)),zs(y.latestValues)&&Yc(h,y.latestValues,(m=y.layout)==null?void 0:m.layoutBox)}return zs(this.latestValues)&&Yc(h,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),h}removeTransform(c){var d;const u=yn();Fi(u,c);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!zs(m.latestValues))continue;let v;m.instance&&(Lh(m.latestValues)&&m.updateSnapshot(),v=yn(),Fi(v,m.measurePageBox())),Ov(u,m.latestValues,(d=m.snapshot)==null?void 0:d.layoutBox,v)}return zs(this.latestValues)&&Ov(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Rn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var y;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:v}=this.options;if(!this.layout||!(m||v))return;this.resolvedRelativeTargetAt=Rn.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=yn(),this.targetWithTransforms=yn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),YT(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Fi(this.target,this.layout.layoutBox),xy(this.target,this.targetDelta)):Fi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Lh(this.parent.latestValues)||vy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,u,d){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=yn(),this.relativeTargetOrigin=yn(),uu(this.relativeTargetOrigin,u,d,this.options.layoutAnchor||void 0),Fi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Rn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;Fi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,p=this.treeScale.y;MT(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=yn());const{target:y}=c;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Dv(this.prevProjectionDelta.x,this.projectionDelta.x),Dv(this.prevProjectionDelta.y,this.projectionDelta.y)),$a(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==p||!Hv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Bo(),this.projectionDelta=Bo(),this.projectionDeltaWithTransform=Bo()}setAnimationOrigin(c,u=!1,d){const h=this.snapshot,m=h?h.latestValues:{},v={...this.latestValues},p=Bo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const y=yn(),M=h?h.source:void 0,A=this.layout?this.layout.source:void 0,x=M!==A,_=this.getStack(),C=!_||_.members.length<=1,F=!!(x&&!C&&this.options.crossfade===!0&&!this.path.some(wA));this.animationProgress=0;let b;const D=d==null?void 0:d.interpolateProjection(c);this.mixTargetDelta=N=>{const O=N/1e3,E=D==null?void 0:D(O);E?(p.x.translate=E.x,p.x.scale=Xt(c.x.scale,1,O),p.x.origin=c.x.origin,p.x.originPoint=c.x.originPoint,p.y.translate=E.y,p.y.scale=Xt(c.y.scale,1,O),p.y.origin=c.y.origin,p.y.originPoint=c.y.originPoint):(qv(p.x,c.x,O),qv(p.y,c.y,O)),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(uu(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),MA(this.relativeTarget,this.relativeTargetOrigin,y,O),b&&ZT(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=yn()),Fi(b,this.relativeTarget)),x&&(this.animationValues=v,eA(v,m,this.latestValues,O,F,C)),E&&E.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=E.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var u,d,h;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(h=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||h.stop(),this.pendingAnimation&&(vs(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=jt.update(()=>{qc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Wo(0)),this.motionValue.jump(0,!1),this.currentAnimation=iA(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),c.onUpdate&&c.onUpdate(m)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(lA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:m}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&Fy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||yn();const v=Yn(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const p=Yn(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+p}Fi(u,d),Yc(u,m),$a(this.projectionDeltaWithTransform,this.layoutCorrected,u,m)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new aA),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&Td("z",c,h,this.animationValues);for(let m=0;m<Ed.length;m++)Td(`rotate${Ed[m]}`,c,h,this.animationValues),Td(`skew${Ed[m]}`,c,h,this.animationValues);c.render();for(const m in h)c.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=$c(u==null?void 0:u.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=$c(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!zs(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=JT(this.projectionDeltaWithTransform,this.treeScale,m);d&&(v=d(m,v)),c.transform=v;const{x:p,y}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${y.origin*100}% 0`,h.animationValues?c.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:c.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const M in Ih){if(m[M]===void 0)continue;const{correct:A,applyTo:x,isCSSVariable:_}=Ih[M],C=v==="none"?m[M]:A(m[M],h);if(x){const F=x.length;for(let b=0;b<F;b++)c[x[b]]=C}else _?this.options.visualElement.renderState.vars[M]=C:c[M]=C}this.options.layoutId&&(c.pointerEvents=h===this?$c(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(jv),this.root.sharedNodes.clear()}}}function uA(n){n.updateLayout()}function fA(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;if(a==="size")Ji(v=>{const p=c?e.measuredBox[v]:e.layoutBox[v],y=Yn(p);p.min=r[v].min,p.max=p.min+y});else if(a==="x"||a==="y"){const v=a==="x"?"y":"x";Fh(c?e.measuredBox[v]:e.layoutBox[v],r[v])}else Fy(a,e.layoutBox,r)&&Ji(v=>{const p=c?e.measuredBox[v]:e.layoutBox[v],y=Yn(r[v]);p.max=p.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+y)});const u=Bo();$a(u,r,e.layoutBox);const d=Bo();c?$a(d,n.applyTransform(o,!0),e.measuredBox):$a(d,r,e.layoutBox);const h=!Py(u);let m=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:p,layout:y}=v;if(p&&y){const M=n.options.layoutAnchor||void 0,A=yn();uu(A,e.layoutBox,p.layoutBox,M);const x=yn();uu(x,r,y.layoutBox,M),Dy(A,x)||(m=!0),v.options.layoutRoot&&(n.relativeTarget=x,n.relativeTargetOrigin=A,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:d,layoutDelta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function dA(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function hA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function pA(n){n.clearSnapshot()}function jv(n){n.clearMeasurements()}function mA(n){n.isLayoutDirty=!0,n.updateLayout()}function Yv(n){n.isLayoutDirty=!1}function gA(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function vA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function $v(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function xA(n){n.resolveTargetDelta()}function _A(n){n.calcProjection()}function yA(n){n.resetSkewAndRotation()}function SA(n){n.removeLeadSnapshot()}function qv(n,e,t){n.translate=Xt(e.translate,0,t),n.scale=Xt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Kv(n,e,t,r){n.min=Xt(e.min,t.min,r),n.max=Xt(e.max,t.max,r)}function MA(n,e,t,r){Kv(n.x,e.x,t.x,r),Kv(n.y,e.y,t.y,r)}function wA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const EA={duration:.45,ease:[.4,0,.1,1]},Zv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Jv=Zv("applewebkit/")&&!Zv("chrome/")?Math.round:Ei;function Qv(n){n.min=Jv(n.min),n.max=Jv(n.max)}function TA(n){Qv(n.x),Qv(n.y)}function Fy(n,e,t){return n==="position"||n==="preserve-aspect"&&!jT(Vv(e),Vv(t),.2)}function AA(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const bA=Iy({attachResizeListener:(n,e)=>el(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Ad={current:void 0},Uy=Iy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Ad.current){const n=new bA({});n.mount(window),n.setOptions({layoutScroll:!0}),Ad.current=n}return Ad.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),tm=we.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function ex(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function CA(...n){return e=>{let t=!1;const r=n.map(o=>{const a=ex(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():ex(n[o],null)}}}}function RA(...n){return we.useCallback(CA(...n),n)}class PA extends we.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(Gc(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=t.offsetParent,o=Gc(r)&&r.offsetWidth||0,a=Gc(r)&&r.offsetHeight||0,c=getComputedStyle(t),u=this.props.sizeRef.current;u.height=parseFloat(c.height),u.width=parseFloat(c.width),u.top=t.offsetTop,u.left=t.offsetLeft,u.right=o-u.width-u.left,u.bottom=a-u.height-u.top,u.direction=c.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function DA({children:n,isPresent:e,anchorX:t,anchorY:r,root:o,pop:a}){var p;const c=we.useId(),u=we.useRef(null),d=we.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:h}=we.useContext(tm),m=a!==!1?((p=n.props)==null?void 0:p.ref)??(n==null?void 0:n.ref):void 0,v=RA(u,m);return we.useInsertionEffect(()=>{const{width:y,height:M,top:A,left:x,right:_,bottom:C,direction:F}=d.current;if(e||a===!1||!u.current||!y||!M)return;const b=F==="rtl",D=t==="left"?b?`right: ${_}`:`left: ${x}`:b?`left: ${x}`:`right: ${_}`,N=r==="bottom"?`bottom: ${C}`:`top: ${A}`;u.current.dataset.motionPopId=c;const O=document.createElement("style");h&&(O.nonce=h);const E=o??document.head;return E.appendChild(O),O.sheet&&O.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${M}px !important;
            ${D}px !important;
            ${N}px !important;
          }
        `),()=>{var I;(I=u.current)==null||I.removeAttribute("data-motion-pop-id"),E.contains(O)&&E.removeChild(O)}},[e]),B.jsx(PA,{isPresent:e,childRef:u,sizeRef:d,pop:a,children:a===!1?n:we.cloneElement(n,{ref:v})})}const LA=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:c,anchorX:u,anchorY:d,root:h})=>{const m=Pp(NA),v=we.useId(),p=we.useRef(t),y=we.useRef(r);Dp(()=>{p.current=t,y.current=r});let M=!0,A=we.useMemo(()=>(M=!1,{id:v,initial:e,isPresent:t,custom:o,onExitComplete:x=>{m.set(x,!0);for(const _ of m.values())if(!_)return;r&&r()},register:x=>(m.set(x,!1),()=>{var _;m.delete(x),!p.current&&!m.size&&((_=y.current)==null||_.call(y))})}),[t,m,r]);return a&&M&&(A={...A}),we.useMemo(()=>{m.forEach((x,_)=>m.set(_,!1))},[t]),we.useEffect(()=>{!t&&!m.size&&r&&r()},[t]),n=B.jsx(DA,{pop:c==="popLayout",isPresent:t,anchorX:u,anchorY:d,root:h,children:n}),B.jsx(Eu.Provider,{value:A,children:n})};function NA(){return new Map}function Oy(n=!0){const e=we.useContext(Eu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=we.useId();we.useEffect(()=>{if(n)return o(a)},[n]);const c=we.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const vc=n=>n.key||"";function tx(n){const e=[];return we.Children.forEach(n,t=>{we.isValidElement(t)&&e.push(t)}),e}const ms=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1,anchorX:u="left",anchorY:d="top",root:h})=>{const[m,v]=Oy(c),p=we.useMemo(()=>tx(n),[n]),y=c&&!m?[]:p.map(vc),M=we.useRef(!0),A=we.useRef(p),x=Pp(()=>new Map),_=we.useRef(new Set),[C,F]=we.useState(p),[b,D]=we.useState(p);Dp(()=>{M.current=!1,A.current=p;for(let E=0;E<b.length;E++){const I=vc(b[E]);y.includes(I)?(x.delete(I),_.current.delete(I)):x.get(I)!==!0&&x.set(I,!1)}},[b,y.length,y.join("-")]);const N=[];if(p!==C){let E=[...p];for(let I=0;I<b.length;I++){const U=b[I],V=vc(U);y.includes(V)||(E.splice(I,0,U),N.push(U))}return a==="wait"&&N.length&&(E=N),D(tx(E)),F(p),null}const{forceRender:O}=we.useContext(Rp);return B.jsx(B.Fragment,{children:b.map(E=>{const I=vc(E),U=c&&!m?!1:p===b||y.includes(I),V=()=>{if(_.current.has(I))return;if(x.has(I))_.current.add(I),x.set(I,!0);else return;let W=!0;x.forEach(te=>{te||(W=!1)}),W&&(O==null||O(),D(A.current),c&&(v==null||v()),r&&r())};return B.jsx(LA,{isPresent:U,initial:!M.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:a,root:h,onExitComplete:U?void 0:V,anchorX:u,anchorY:d,children:E},I)})})},ky=we.createContext({strict:!1}),nx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let ix=!1;function IA(){if(ix)return;const n={};for(const e in nx)n[e]={isEnabled:t=>nx[e].some(r=>!!t[r])};py(n),ix=!0}function By(){return IA(),xT()}function FA(n){const e=By();for(const t in n)e[t]={...e[t],...n[t]};py(e)}const UA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function fu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||UA.has(n)}let zy=n=>!fu(n);function OA(n){typeof n=="function"&&(zy=e=>e.startsWith("on")?!fu(e):n(e))}try{OA(require("@emotion/is-prop-valid").default)}catch{}function kA(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||Pn(n[o])||(zy(o)||t===!0&&fu(o)||!e&&!fu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Ru=we.createContext({});function BA(n,e){if(Cu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Qa(t)?t:void 0,animate:Qa(r)?r:void 0}}return n.inherit!==!1?e:{}}function zA(n){const{initial:e,animate:t}=BA(n,we.useContext(Ru));return we.useMemo(()=>({initial:e,animate:t}),[rx(e),rx(t)])}function rx(n){return Array.isArray(n)?n.join(" "):n}const nm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Vy(n,e,t){for(const r in e)!Pn(e[r])&&!Sy(r,t)&&(n[r]=e[r])}function VA({transformTemplate:n},e){return we.useMemo(()=>{const t=nm();return Qp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function HA(n,e){const t=n.style||{},r={};return Vy(r,t,n),Object.assign(r,VA(n,e)),r}function GA(n,e){const t={},r=HA(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const Hy=()=>({...nm(),attrs:{}});function WA(n,e,t,r){const o=we.useMemo(()=>{const a=Hy();return My(a,e,Ey(r),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};Vy(a,n.style,n),o.style={...a,...o.style}}return o}const XA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function im(n){return typeof n!="string"||n.includes("-")?!1:!!(XA.indexOf(n)>-1||/[A-Z]/u.test(n))}function jA(n,e,t,{latestValues:r},o,a=!1,c){const d=(c??im(n)?WA:GA)(e,r,o,n),h=kA(e,typeof n=="string",a),m=n!==we.Fragment?{...h,...d,ref:t}:{},{children:v}=e,p=we.useMemo(()=>Pn(v)?v.get():v,[v]);return we.createElement(n,{...m,children:p})}function YA({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:$A(t,r,o,n),renderState:e()}}function $A(n,e,t,r){const o={},a=r(n,{});for(const p in a)o[p]=$c(a[p]);let{initial:c,animate:u}=n;const d=Cu(n),h=dy(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let m=t?t.initial===!1:!1;m=m||c===!1;const v=m?u:c;if(v&&typeof v!="boolean"&&!bu(v)){const p=Array.isArray(v)?v:[v];for(let y=0;y<p.length;y++){const M=Xp(n,p[y]);if(M){const{transitionEnd:A,transition:x,..._}=M;for(const C in _){let F=_[C];if(Array.isArray(F)){const b=m?F.length-1:0;F=F[b]}F!==null&&(o[C]=F)}for(const C in A)o[C]=A[C]}}}return o}const Gy=n=>(e,t)=>{const r=we.useContext(Ru),o=we.useContext(Eu),a=()=>YA(n,e,r,o);return t?a():Pp(a)},qA=Gy({scrapeMotionValuesFromProps:em,createRenderState:nm}),KA=Gy({scrapeMotionValuesFromProps:Ty,createRenderState:Hy}),ZA=Symbol.for("motionComponentSymbol");function JA(n,e,t){const r=we.useRef(t);we.useInsertionEffect(()=>{r.current=t});const o=we.useRef(null);return we.useCallback(a=>{var u;a&&((u=n.onMount)==null||u.call(n,a)),e&&(a?e.mount(a):e.unmount());const c=r.current;if(typeof c=="function")if(a){const d=c(a);typeof d=="function"&&(o.current=d)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a)},[e])}const Wy=we.createContext({});function Fo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function QA(n,e,t,r,o,a){var F,b;const{visualElement:c}=we.useContext(Ru),u=we.useContext(ky),d=we.useContext(Eu),h=we.useContext(tm),m=h.reducedMotion,v=h.skipAnimations,p=we.useRef(null),y=we.useRef(!1);r=r||u.renderer,!p.current&&r&&(p.current=r(n,{visualState:e,parent:c,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:m,skipAnimations:v,isSVG:a}),y.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const M=p.current,A=we.useContext(Wy);M&&!M.projection&&o&&(M.type==="html"||M.type==="svg")&&eb(p.current,t,o,A);const x=we.useRef(!1);we.useInsertionEffect(()=>{M&&x.current&&M.update(t,d)});const _=t[ey],C=we.useRef(!!_&&typeof window<"u"&&!((F=window.MotionHandoffIsComplete)!=null&&F.call(window,_))&&((b=window.MotionHasOptimisedAnimation)==null?void 0:b.call(window,_)));return Dp(()=>{y.current=!0,M&&(x.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),C.current&&M.animationState&&M.animationState.animateChanges())}),we.useEffect(()=>{M&&(!C.current&&M.animationState&&M.animationState.animateChanges(),C.current&&(queueMicrotask(()=>{var D;(D=window.MotionHandoffMarkAsComplete)==null||D.call(window,_)}),C.current=!1),M.enteringChildren=void 0)}),M}function eb(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h,layoutAnchor:m,layoutCrossfade:v}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Xy(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&Fo(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:d,layoutRoot:h,layoutAnchor:m})}function Xy(n){if(n)return n.options.allowProjection!==!1?n.projection:Xy(n.parent)}function bd(n,{forwardMotionProps:e=!1,type:t}={},r,o){r&&FA(r);const a=t?t==="svg":im(n),c=a?KA:qA;function u(h,m){let v;const p={...we.useContext(tm),...h,layoutId:tb(h)},{isStatic:y}=p,M=zA(h),A=c(h,y);if(!y&&typeof window<"u"){nb();const x=ib(p);v=x.MeasureLayout,M.visualElement=QA(n,A,p,o,x.ProjectionNode,a)}return B.jsxs(Ru.Provider,{value:M,children:[v&&M.visualElement?B.jsx(v,{visualElement:M.visualElement,...p}):null,jA(n,h,JA(A,M.visualElement,m),A,y,e,a)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=we.forwardRef(u);return d[ZA]=n,d}function tb({layoutId:n}){const e=we.useContext(Rp).id;return e&&n!==void 0?e+"-"+n:n}function nb(n,e){we.useContext(ky).strict}function ib(n){const e=By(),{drag:t,layout:r}=e;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function rb(n,e){if(typeof Proxy>"u")return bd;const t=new Map,r=(a,c)=>bd(a,c,n,e),o=(a,c)=>r(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?r:(t.has(c)||t.set(c,bd(c,void 0,n,e)),t.get(c))})}const sb=(n,e)=>e.isSVG??im(n)?new FT(e):new RT(e,{allowProjection:n!==we.Fragment});class ob extends _s{constructor(e){super(e),e.animationState||(e.animationState=zT(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();bu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let ab=0;class lb extends _s{constructor(){super(...arguments),this.id=ab++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:c,custom:u}=this.node.getProps();if(typeof c=="string"||typeof c=="object"&&c!==null&&!Array.isArray(c)){const d=Ys(this.node,c,u);if(d){const{transition:h,transitionEnd:m,...v}=d;for(const p in v)(a=this.node.getValue(p))==null||a.jump(v[p])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const cb={animation:{Feature:ob},exit:{Feature:lb}};function cl(n){return{point:{x:n.pageX,y:n.pageY}}}const ub=n=>e=>qp(e)&&n(e,cl(e));function qa(n,e,t,r){return el(n,e,ub(t),r)}const jy=({current:n})=>n?n.ownerDocument.defaultView:null,sx=(n,e)=>Math.abs(n-e);function fb(n,e){const t=sx(n.x,e.x),r=sx(n.y,e.y);return Math.sqrt(t**2+r**2)}const ox=new Set(["auto","scroll"]);class Yy{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:u}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=M=>{this.handleScroll(M.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=xc(this.lastRawMoveEventInfo,this.transformPagePoint));const M=Cd(this.lastMoveEventInfo,this.history),A=this.startEvent!==null,x=fb(M.offset,{x:0,y:0})>=this.distanceThreshold;if(!A&&!x)return;const{point:_}=M,{timestamp:C}=Rn;this.history.push({..._,timestamp:C});const{onStart:F,onMove:b}=this.handlers;A||(F&&F(this.lastMoveEvent,M),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,M)},this.handlePointerMove=(M,A)=>{this.lastMoveEvent=M,this.lastRawMoveEventInfo=A,this.lastMoveEventInfo=xc(A,this.transformPagePoint),jt.update(this.updatePoint,!0)},this.handlePointerUp=(M,A)=>{this.end();const{onEnd:x,onSessionEnd:_,resumeAnimation:C}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const F=Cd(M.type==="pointercancel"?this.lastMoveEventInfo:xc(A,this.transformPagePoint),this.history);this.startEvent&&x&&x(M,F),_&&_(M,F)},!qp(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=o||window;const d=cl(e),h=xc(d,this.transformPagePoint),{point:m}=h,{timestamp:v}=Rn;this.history=[{...m,timestamp:v}];const{onSessionStart:p}=t;p&&p(e,Cd(h,this.history));const y={passive:!0,capture:!0};this.removeListeners=ol(qa(this.contextWindow,"pointermove",this.handlePointerMove,y),qa(this.contextWindow,"pointerup",this.handlePointerUp,y),qa(this.contextWindow,"pointercancel",this.handlePointerUp,y)),u&&this.startScrollTracking(u)}startScrollTracking(e){let t=e.parentElement;for(;t;){const r=getComputedStyle(t);(ox.has(r.overflowX)||ox.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),jt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),vs(this.updatePoint)}}function xc(n,e){return e?{point:e(n.point)}:n}function ax(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Cd({point:n},e){return{point:n,delta:ax(n,$y(e)),offset:ax(n,db(e)),velocity:hb(e,.1)}}function db(n){return n[0]}function $y(n){return n[n.length-1]}function hb(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=$y(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>hi(e)));)t--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&o.timestamp-r.timestamp>hi(e)*2&&(r=n[1]);const a=wi(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function pb(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Xt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Xt(t,n,r.max):Math.min(n,t)),n}function lx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function mb(n,{top:e,left:t,bottom:r,right:o}){return{x:lx(n.x,t,o),y:lx(n.y,e,r)}}function cx(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function gb(n,e){return{x:cx(n.x,e.x),y:cx(n.y,e.y)}}function vb(n,e){let t=.5;const r=Yn(n),o=Yn(e);return o>r?t=Za(e.min,e.max-r,n.min):r>o&&(t=Za(n.min,n.max-o,e.min)),sr(0,1,t)}function xb(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Uh=.35;function _b(n=Uh){return n===!1?n=0:n===!0&&(n=Uh),{x:ux(n,"left","right"),y:ux(n,"top","bottom")}}function ux(n,e,t){return{min:fx(n,e),max:fx(n,t)}}function fx(n,e){return typeof n=="number"?n:n[e]||0}const yb=new WeakMap;class Sb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=yn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=v=>{t&&this.snapToCursor(cl(v).point),this.stopAnimation()},c=(v,p)=>{const{drag:y,dragPropagation:M,onDragStart:A}=this.getProps();if(y&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=$E(y),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ji(_=>{let C=this.getAxisMotionValue(_).get()||0;if(ir.test(C)){const{projection:F}=this.visualElement;if(F&&F.layout){const b=F.layout.layoutBox[_];b&&(C=Yn(b)*(parseFloat(C)/100))}}this.originPoint[_]=C}),A&&jt.update(()=>A(v,p),!1,!0),Ah(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},u=(v,p)=>{this.latestPointerEvent=v,this.latestPanInfo=p;const{dragPropagation:y,dragDirectionLock:M,onDirectionLock:A,onDrag:x}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:_}=p;if(M&&this.currentDirection===null){this.currentDirection=wb(_),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",p.point,_),this.updateAxis("y",p.point,_),this.visualElement.render(),x&&jt.update(()=>x(v,p),!1,!0)},d=(v,p)=>{this.latestPointerEvent=v,this.latestPanInfo=p,this.stop(v,p),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new Yy(e,{onSessionStart:a,onStart:c,onMove:u,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:jy(this.visualElement),element:this.visualElement.current})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!r)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&jt.postRender(()=>u(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!_c(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=pb(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&Fo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=mb(r.layoutBox,e):this.constraints=!1,this.elastic=_b(t),o!==this.constraints&&!Fo(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Ji(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=xb(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Fo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const a=wT(r,o.root,this.visualElement.getTransformPagePoint());let c=gb(o.layout.layoutBox,a);if(t){const u=t(yT(c));this.hasMutatedConstraints=!!u,u&&(c=gy(u))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=Ji(m=>{if(!_c(m,t,this.currentDirection))return;let v=d&&d[m]||{};(c===!0||c===m)&&(v={min:0,max:0});const p=o?200:1e6,y=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Ah(this.visualElement,e),r.start(Wp(e,r,0,t,this.visualElement,!1))}stopAnimation(){Ji(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[t];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Ji(t=>{const{drag:r}=this.getProps();if(!_c(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t],d=a.get()||0;a.set(e[t]-Xt(c,u,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Fo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ji(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();o[c]=vb({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ji(c=>{if(!_c(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(Xt(d,h,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;yb.set(this.visualElement,this);const e=this.visualElement.current,t=qa(e,"pointerdown",h=>{const{drag:m,dragListener:v=!0}=this.getProps(),p=h.target,y=p!==e&&eT(p);m&&v&&!y&&this.start(h)});let r;const o=()=>{const{dragConstraints:h}=this.getProps();Fo(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),r||(r=Mb(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),jt.read(o);const u=el(window,"resize",()=>this.scalePositionWithinConstraints()),d=a.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(Ji(v=>{const p=this.getAxisMotionValue(v);p&&(this.originPoint[v]+=h[v].translate,p.set(p.get()+h[v].translate))}),this.visualElement.render())}));return()=>{u(),t(),c(),d&&d(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=Uh,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function dx(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function Mb(n,e,t){const r=_v(n,dx(t)),o=_v(e,dx(t));return()=>{r(),o()}}function _c(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function wb(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class Eb extends _s{constructor(e){super(e),this.removeGroupControls=Ei,this.removeListeners=Ei,this.controls=new Sb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ei}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Rd=n=>(e,t)=>{n&&jt.update(()=>n(e,t),!1,!0)};class Tb extends _s{constructor(){super(...arguments),this.removePointerDownListener=Ei}onPointerDown(e){this.session=new Yy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:jy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Rd(e),onStart:Rd(t),onMove:Rd(r),onEnd:(a,c)=>{delete this.session,o&&jt.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=qa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Pd=!1;class Ab extends we.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),Pd&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),qc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,{projection:c}=r;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),Pd=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||jt.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=t,r.root.didUpdate(),$p.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;Pd=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function qy(n){const[e,t]=Oy(),r=we.useContext(Rp);return B.jsx(Ab,{...n,layoutGroup:r,switchLayoutGroup:we.useContext(Wy),isPresent:e,safeToRemove:t})}const bb={pan:{Feature:Tb},drag:{Feature:Eb,ProjectionNode:Uy,MeasureLayout:qy}};function hx(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&jt.postRender(()=>a(e,cl(e)))}class Cb extends _s{mount(){const{current:e}=this.node;e&&(this.unmount=KE(e,(t,r)=>(hx(this.node,r,"Start"),o=>hx(this.node,o,"End"))))}unmount(){}}class Rb extends _s{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ol(el(this.node.current,"focus",()=>this.onFocus()),el(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function px(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&jt.postRender(()=>a(e,cl(e)))}class Pb extends _s{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:r}=this.node.props;this.unmount=nT(e,(o,a)=>(px(this.node,a,"Start"),(c,{success:u})=>px(this.node,c,u?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Oh=new WeakMap,Dd=new WeakMap,Db=n=>{const e=Oh.get(n.target);e&&e(n)},Lb=n=>{n.forEach(Db)};function Nb({root:n,...e}){const t=n||document;Dd.has(t)||Dd.set(t,{});const r=Dd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(Lb,{root:n,...e})),r[o]}function Ib(n,e,t){const r=Nb(e);return Oh.set(n,t),r.observe(n),()=>{Oh.delete(n),r.unobserve(n)}}const Fb={some:0,all:1};class Ub extends _s{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var d;(d=this.stopObserver)==null||d.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:Fb[o]},u=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,a&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:v,onViewportLeave:p}=this.node.getProps(),y=m?v:p;y&&y(h)};this.stopObserver=Ib(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(Ob(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Ob({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const kb={inView:{Feature:Ub},tap:{Feature:Pb},focus:{Feature:Rb},hover:{Feature:Cb}},Bb={layout:{ProjectionNode:Uy,MeasureLayout:qy}},zb={...cb,...kb,...bb,...Bb},Ht=rb(zb,sb);function Vb(){const n=we.useMemo(()=>{const e=["#F6AFC4","#D7B8F8","#C5F0E3","#FFEAA7","#FFD7DF","#D91F55"],t=[];for(let r=0;r<24;r++)t.push({id:`confetti-${r}`,type:"rect",color:e[r%e.length],left:`${(r*4.2+Math.random()*3)%100}%`,top:`${Math.random()*100}%`,size:Math.random()*6+6,aspectRatio:Math.random()*2+1.5,rotation:Math.random()*360,delay:Math.random()*5,duration:Math.random()*6+8});for(let r=0;r<8;r++)t.push({id:`heart-${r}`,type:"heart",left:`${(r*12+5)%94}%`,top:`${Math.random()*85+5}%`,size:Math.random()*8+14,color:r%2===0?"#F6AFC4":"#D91F55",rotation:(Math.random()-.5)*30,delay:Math.random()*4,duration:Math.random()*4+6});for(let r=0;r<6;r++)t.push({id:`sparkle-${r}`,type:"sparkle",left:`${(r*16+8)%92}%`,top:`${Math.random()*80+10}%`,size:Math.random()*6+12,color:"#F6AFC4",delay:Math.random()*3,duration:Math.random()*3+2.5});return t},[]);return B.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden z-0",children:[B.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#FFD7DF]/40 via-[#FFF1E7]/20 to-transparent blur-3xl"}),n.map(e=>e.type==="rect"?B.jsx("div",{className:"absolute rounded-sm animate-float-gentle opacity-75",style:{left:e.left,top:e.top,width:`${e.size}px`,height:`${e.size*e.aspectRatio}px`,backgroundColor:e.color,transform:`rotate(${e.rotation}deg)`,animationDelay:`${e.delay}s`,animationDuration:`${e.duration}s`}},e.id):e.type==="heart"?B.jsx("div",{className:"absolute animate-float-gentle",style:{left:e.left,top:e.top,animationDelay:`${e.delay}s`,animationDuration:`${e.duration}s`,transform:`rotate(${e.rotation}deg)`},children:B.jsx("svg",{width:e.size,height:e.size,viewBox:"0 0 24 24",fill:"none",stroke:e.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-70",children:B.jsx("path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"})})},e.id):e.type==="sparkle"?B.jsx("div",{className:"absolute animate-sparkle-twinkle",style:{left:e.left,top:e.top,animationDelay:`${e.delay}s`,animationDuration:`${e.duration}s`},children:B.jsx("svg",{width:e.size,height:e.size,viewBox:"0 0 24 24",fill:"none",stroke:e.color,strokeWidth:"1.5",className:"opacity-60",children:B.jsx("path",{d:"M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"})})},e.id):null)]})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=n=>n==null?void 0:n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Gb(n,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Hb(n),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=n=>{let e="",t=!1;for(const r of n){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=n=>{const e=Wb(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ld(n){return n!=null}function jb(n,e={}){var p,y;const t=e.attributeNames??{},r=M=>t[M]??M,o=n.size??n.width??Is.width,a=n.size??n.height??Is.height,c=((p=n.aliases)==null?void 0:p.filter(M=>typeof M=="string"&&M.trim()!=="").map(M=>`lucide-${M}`))??[],u=[...n.name?[`lucide-${n.name}`]:[],...c],d=((y=e.className)==null?void 0:y.split(" ").filter(Boolean))??[],h=e.includeDefaultClasses===!1?kh(...d):kh("lucide",...u,...d),m=e.absoluteStrokeWidth?Number(e.strokeWidth??Is["stroke-width"])*Number(n.size??n.width??Is.width)/Number(e.size??e.width??Is.width):e.strokeWidth??Is["stroke-width"];return["svg",{...Object.entries(Is).reduce((M,[A,x])=>(M[r(A)]=x,M),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Ld(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Ld(e.width)&&{[r("width")]:e.width},..."height"in e&&Ld(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:m,...h&&{[r("class")]:h},[r("viewBox")]:`0 0 ${o} ${a}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},n.node.map(M=>{const[A,x,_]=M,C=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...x}:x;return _?[A,C,_]:[A,C]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Yb(n,e={}){return jb(n,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},qb=we.createContext({}),Kb=()=>we.useContext(qb),Zb=we.forwardRef(({color:n,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:a,nonScalingStroke:c,className:u="",children:d,iconNode:h=[],icon:m={node:h,aliases:[],size:24},...v},p)=>{const{size:y=24,strokeWidth:M=2,absoluteStrokeWidth:A=!1,nonScalingStroke:x=!1,color:_="currentColor",className:C=""}=Kb()??{},F=!!d||$b(v),[b,D,N=[]]=Yb(m,{color:n??_,width:t??e??y,height:r??e??y,strokeWidth:o??M,absoluteStrokeWidth:a??A,nonScalingStroke:c??x,className:kh(C,u),hasA11yProp:F,attributes:v});return we.createElement(b,{ref:p,...D},[...N.map(([O,E])=>we.createElement(O,E)),...Array.isArray(d)?d:[d]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function gn(n,e=[],t=[]){const r=typeof n=="string"?Gb(n,e,t):n,o=we.forwardRef(({className:a,...c},u)=>we.createElement(Zb,{ref:u,icon:r,className:a,...c}));return r.name&&(o.displayName=Xb(r.name)),o}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Ky.node;const Pu=gn(Ky);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};Zy.node;const Bh=gn(Zy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};Jy.node;const Jb=gn(Jy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Qy.node;const Qb=gn(Qy);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};eS.node;const eC=gn(eS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};tS.node;const tC=gn(tS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};nS.node;const nC=gn(nS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS={name:"crown",size:24,node:[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]};iS.node;const iC=gn(iS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS={name:"gift",size:24,node:[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]]};rS.node;const sS=gn(rS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS={name:"grid-3x3",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],aliases:["grid","grid-3-x-3"]};oS.node;const rC=gn(oS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};aS.node;const du=gn(aS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};lS.node;const sC=gn(lS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS={name:"mic",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]};cS.node;const oC=gn(cS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS={name:"party-popper",size:24,node:[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]};uS.node;const aC=gn(uS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};fS.node;const lC=gn(fS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};dS.node;const cC=gn(dS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};hS.node;const hu=gn(hS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS={name:"wind",size:24,node:[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]};pS.node;const uC=gn(pS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};mS.node;const gS=gn(mS);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS={name:"zoom-in",size:24,node:[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]};vS.node;const fC=gn(vS),dC=["The gift","The letter","Our moments","The candles","The wish"];function hC({currentPage:n=1,totalPages:e=5,onPrev:t,onNext:r,onSelectPage:o}){return B.jsxs("nav",{"aria-label":"Birthday Story Navigation",className:"w-full max-w-xs mx-auto px-2 py-2 rounded-full bg-[#FFFDF8]/90 backdrop-blur-md border border-[#F6AFC4]/40 shadow-soft-card flex items-center justify-between text-[#38213D] z-40 select-none",children:[B.jsx("button",{onClick:t,disabled:n<=1,"aria-label":"Previous screen",className:`w-9 h-9 rounded-full flex items-center justify-center transition-all ${n<=1?"opacity-30 cursor-not-allowed text-slate-400":"text-[#38213D] hover:bg-rose-100 hover:text-raspberry active:scale-90"}`,children:B.jsx(Jb,{className:"w-5 h-5"})}),B.jsxs("div",{className:"flex flex-col items-center",children:[B.jsx("span",{className:"text-xs font-serif font-bold text-[#38213D] tracking-wide capitalize",children:dC[n-1]}),B.jsxs("div",{className:"flex items-center gap-1.5 mt-1",children:[Array.from({length:e},(a,c)=>{const u=c+1,d=u===n;return B.jsx("button",{onClick:()=>o(u),"aria-label":`Go to page ${u}`,className:`transition-all duration-300 rounded-full ${d?"w-4 h-1.5 bg-[#D91F55]":"w-1.5 h-1.5 bg-[#F6AFC4]/60 hover:bg-[#F6AFC4]"}`},u)}),B.jsxs("span",{className:"text-[10px] font-sans font-bold text-slate-400 ml-1.5 font-mono",children:[n,"/",e]})]})]}),B.jsx("button",{onClick:r,disabled:n>=e,"aria-label":"Next screen",className:`w-9 h-9 rounded-full flex items-center justify-center transition-all ${n>=e?"opacity-30 cursor-not-allowed text-slate-400":"text-[#38213D] hover:bg-rose-100 hover:text-raspberry active:scale-90"}`,children:B.jsx(Qb,{className:"w-5 h-5"})})]})}var rm={};(function n(e,t,r,o){var a=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),c=typeof Path2D=="function"&&typeof DOMMatrix=="function",u=(function(){if(!e.OffscreenCanvas)return!1;try{var L=new OffscreenCanvas(1,1),w=L.getContext("2d");w.fillRect(0,0,1,1);var H=L.transferToImageBitmap();w.createPattern(H,"no-repeat")}catch{return!1}return!0})();function d(){}function h(L){var w=t.exports.Promise,H=w!==void 0?w:e.Promise;return typeof H=="function"?new H(L):(L(d,d),null)}var m=(function(L,w){return{transform:function(H){if(L)return H;if(w.has(H))return w.get(H);var fe=new OffscreenCanvas(H.width,H.height),Se=fe.getContext("2d");return Se.drawImage(H,0,0),w.set(H,fe),fe},clear:function(){w.clear()}}})(u,new Map),v=(function(){var L=Math.floor(16.666666666666668),w,H,fe={},Se=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(Ee){var Te=Math.random();return fe[Te]=requestAnimationFrame(function q(ie){Se===ie||Se+L-1<ie?(Se=ie,delete fe[Te],Ee()):fe[Te]=requestAnimationFrame(q)}),Te},H=function(Ee){fe[Ee]&&cancelAnimationFrame(fe[Ee])}):(w=function(Ee){return setTimeout(Ee,L)},H=function(Ee){return clearTimeout(Ee)}),{frame:w,cancel:H}})(),p=(function(){var L,w,H={};function fe(Se){function Ee(Te,q){Se.postMessage({options:Te||{},callback:q})}Se.init=function(q){var ie=q.transferControlToOffscreen();Se.postMessage({canvas:ie},[ie])},Se.fire=function(q,ie,ye){if(w)return Ee(q,null),w;var ke=Math.random().toString(36).slice(2);return w=h(function(Re){function Ze(gt){gt.data.callback===ke&&(delete H[ke],Se.removeEventListener("message",Ze),w=null,m.clear(),ye(),Re())}Se.addEventListener("message",Ze),Ee(q,ke),H[ke]=Ze.bind(null,{data:{callback:ke}})}),w},Se.reset=function(){Se.postMessage({reset:!0});for(var q in H)H[q](),delete H[q]}}return function(){if(L)return L;if(!r&&a){var Se=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{L=new Worker(URL.createObjectURL(new Blob([Se])))}catch(Ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Ee),null}fe(L)}return L}})(),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function M(L,w){return w?w(L):L}function A(L){return L!=null}function x(L,w,H){return M(L&&A(L[w])?L[w]:y[w],H)}function _(L){return L<0?0:Math.floor(L)}function C(L,w){return Math.floor(Math.random()*(w-L))+L}function F(L){return parseInt(L,16)}function b(L){return L.map(D)}function D(L){var w=String(L).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:F(w.substring(0,2)),g:F(w.substring(2,4)),b:F(w.substring(4,6))}}function N(L){var w=x(L,"origin",Object);return w.x=x(w,"x",Number),w.y=x(w,"y",Number),w}function O(L){L.width=document.documentElement.clientWidth,L.height=document.documentElement.clientHeight}function E(L){var w=L.getBoundingClientRect();L.width=w.width,L.height=w.height}function I(L){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=L,w}function U(L,w,H,fe,Se,Ee,Te,q,ie){L.save(),L.translate(w,H),L.rotate(Ee),L.scale(fe,Se),L.arc(0,0,1,Te,q,ie),L.restore()}function V(L){var w=L.angle*(Math.PI/180),H=L.spread*(Math.PI/180);return{x:L.x,y:L.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:L.startVelocity*.5+Math.random()*L.startVelocity,angle2D:-w+(.5*H-Math.random()*H),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:L.color,shape:L.shape,tick:0,totalTicks:L.ticks,decay:L.decay,drift:L.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:L.gravity*3,ovalScalar:.6,scalar:L.scalar,flat:L.flat}}function W(L,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var H=w.tick++/w.totalTicks,fe=w.x+w.random*w.tiltCos,Se=w.y+w.random*w.tiltSin,Ee=w.wobbleX+w.random*w.tiltCos,Te=w.wobbleY+w.random*w.tiltSin;if(L.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-H)+")",L.beginPath(),c&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))L.fill(K(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(Ee-fe)*.1,Math.abs(Te-Se)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var q=Math.PI/10*w.wobble,ie=Math.abs(Ee-fe)*.1,ye=Math.abs(Te-Se)*.1,ke=w.shape.bitmap.width*w.scalar,Re=w.shape.bitmap.height*w.scalar,Ze=new DOMMatrix([Math.cos(q)*ie,Math.sin(q)*ie,-Math.sin(q)*ye,Math.cos(q)*ye,w.x,w.y]);Ze.multiplySelf(new DOMMatrix(w.shape.matrix));var gt=L.createPattern(m.transform(w.shape.bitmap),"no-repeat");gt.setTransform(Ze),L.globalAlpha=1-H,L.fillStyle=gt,L.fillRect(w.x-ke/2,w.y-Re/2,ke,Re),L.globalAlpha=1}else if(w.shape==="circle")L.ellipse?L.ellipse(w.x,w.y,Math.abs(Ee-fe)*w.ovalScalar,Math.abs(Te-Se)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):U(L,w.x,w.y,Math.abs(Ee-fe)*w.ovalScalar,Math.abs(Te-Se)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var He=Math.PI/2*3,ot=4*w.scalar,pt=8*w.scalar,at=w.x,yt=w.y,Nt=5,bt=Math.PI/Nt;Nt--;)at=w.x+Math.cos(He)*pt,yt=w.y+Math.sin(He)*pt,L.lineTo(at,yt),He+=bt,at=w.x+Math.cos(He)*ot,yt=w.y+Math.sin(He)*ot,L.lineTo(at,yt),He+=bt;else L.moveTo(Math.floor(w.x),Math.floor(w.y)),L.lineTo(Math.floor(w.wobbleX),Math.floor(Se)),L.lineTo(Math.floor(Ee),Math.floor(Te)),L.lineTo(Math.floor(fe),Math.floor(w.wobbleY));return L.closePath(),L.fill(),w.tick<w.totalTicks}function te(L,w,H,fe,Se){var Ee=w.slice(),Te=L.getContext("2d"),q,ie,ye=h(function(ke){function Re(){q=ie=null,Te.clearRect(0,0,fe.width,fe.height),m.clear(),Se(),ke()}function Ze(){r&&!(fe.width===o.width&&fe.height===o.height)&&(fe.width=L.width=o.width,fe.height=L.height=o.height),!fe.width&&!fe.height&&(H(L),fe.width=L.width,fe.height=L.height),Te.clearRect(0,0,fe.width,fe.height),Ee=Ee.filter(function(gt){return W(Te,gt)}),Ee.length?q=v.frame(Ze):Re()}q=v.frame(Ze),ie=Re});return{addFettis:function(ke){return Ee=Ee.concat(ke),ye},canvas:L,promise:ye,reset:function(){q&&v.cancel(q),ie&&ie()}}}function X(L,w){var H=!L,fe=!!x(w||{},"resize"),Se=!1,Ee=x(w,"disableForReducedMotion",Boolean),Te=a&&!!x(w||{},"useWorker"),q=Te?p():null,ie=H?O:E,ye=L&&q?!!L.__confetti_initialized:!1,ke=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Re;function Ze(He,ot,pt){for(var at=x(He,"particleCount",_),yt=x(He,"angle",Number),Nt=x(He,"spread",Number),bt=x(He,"startVelocity",Number),Et=x(He,"decay",Number),Gt=x(He,"gravity",Number),J=x(He,"drift",Number),Kt=x(He,"colors",b),Tt=x(He,"ticks",Number),k=x(He,"shapes"),T=x(He,"scalar"),re=!!x(He,"flat"),ce=N(He),me=at,Pe=[],Ue=L.width*ce.x,ge=L.height*ce.y;me--;)Pe.push(V({x:Ue,y:ge,angle:yt,spread:Nt,startVelocity:bt,color:Kt[me%Kt.length],shape:k[C(0,k.length)],ticks:Tt,decay:Et,gravity:Gt,drift:J,scalar:T,flat:re}));return Re?Re.addFettis(Pe):(Re=te(L,Pe,ie,ot,pt),Re.promise)}function gt(He){var ot=Ee||x(He,"disableForReducedMotion",Boolean),pt=x(He,"zIndex",Number);if(ot&&ke)return h(function(bt){bt()});H&&Re?L=Re.canvas:H&&!L&&(L=I(pt),document.body.appendChild(L)),fe&&!ye&&ie(L);var at={width:L.width,height:L.height};q&&!ye&&q.init(L),ye=!0,q&&(L.__confetti_initialized=!0);function yt(){if(q){var bt={getBoundingClientRect:function(){if(!H)return L.getBoundingClientRect()}};ie(bt),q.postMessage({resize:{width:bt.width,height:bt.height}});return}at.width=at.height=null}function Nt(){Re=null,fe&&(Se=!1,e.removeEventListener("resize",yt)),H&&L&&(document.body.contains(L)&&document.body.removeChild(L),L=null,ye=!1)}return fe&&!Se&&(Se=!0,e.addEventListener("resize",yt,!1)),q?q.fire(He,at,Nt):Ze(He,at,Nt)}return gt.reset=function(){q&&q.reset(),Re&&Re.reset()},gt}var ee;function ne(){return ee||(ee=X(null,{useWorker:!0,resize:!0})),ee}function K(L,w,H,fe,Se,Ee,Te){var q=new Path2D(L),ie=new Path2D;ie.addPath(q,new DOMMatrix(w));var ye=new Path2D;return ye.addPath(ie,new DOMMatrix([Math.cos(Te)*Se,Math.sin(Te)*Se,-Math.sin(Te)*Ee,Math.cos(Te)*Ee,H,fe])),ye}function j(L){if(!c)throw new Error("path confetti are not supported in this browser");var w,H;typeof L=="string"?w=L:(w=L.path,H=L.matrix);var fe=new Path2D(w),Se=document.createElement("canvas"),Ee=Se.getContext("2d");if(!H){for(var Te=1e3,q=Te,ie=Te,ye=0,ke=0,Re,Ze,gt=0;gt<Te;gt+=2)for(var He=0;He<Te;He+=2)Ee.isPointInPath(fe,gt,He,"nonzero")&&(q=Math.min(q,gt),ie=Math.min(ie,He),ye=Math.max(ye,gt),ke=Math.max(ke,He));Re=ye-q,Ze=ke-ie;var ot=10,pt=Math.min(ot/Re,ot/Ze);H=[pt,0,0,pt,-Math.round(Re/2+q)*pt,-Math.round(Ze/2+ie)*pt]}return{type:"path",path:w,matrix:H}}function Y(L){var w,H=1,fe="#000000",Se='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof L=="string"?w=L:(w=L.text,H="scalar"in L?L.scalar:H,Se="fontFamily"in L?L.fontFamily:Se,fe="color"in L?L.color:fe);var Ee=10*H,Te=""+Ee+"px "+Se,q=new OffscreenCanvas(Ee,Ee),ie=q.getContext("2d");ie.font=Te;var ye=ie.measureText(w),ke=Math.ceil(ye.actualBoundingBoxRight+ye.actualBoundingBoxLeft),Re=Math.ceil(ye.actualBoundingBoxAscent+ye.actualBoundingBoxDescent),Ze=2,gt=ye.actualBoundingBoxLeft+Ze,He=ye.actualBoundingBoxAscent+Ze;ke+=Ze+Ze,Re+=Ze+Ze,q=new OffscreenCanvas(ke,Re),ie=q.getContext("2d"),ie.font=Te,ie.fillStyle=fe,ie.fillText(w,gt,He);var ot=1/H;return{type:"bitmap",bitmap:q.transferToImageBitmap(),matrix:[ot,0,0,ot,-ke*ot/2,-Re*ot/2]}}t.exports=function(){return ne().apply(this,arguments)},t.exports.reset=function(){ne().reset()},t.exports.create=X,t.exports.shapeFromPath=j,t.exports.shapeFromText=Y})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),rm,!1);const pu=rm.exports;rm.exports.create;const Qt={name:"Bhai",screen1:{badge:"A GIFT FOR YOU",title:"Happy Birthday,",subtitleLead:"for being so",subtitleAccent:"awesome",supportingText:"Someone made this little surprise just for you.",buttonText:"Open my gift"},screen2:{title:"A letter for you",instruction:"Pull up to read",signOff:"With all my love,",author:"Your Brother for Life ♾️"},screen3:{topTag:"SAY CHEESE!",title:"Our Moments",instruction:"Tap the mint camera button to print our memories!"},screen4:{badge:"MAKE A WISH",title:"Blow out the candles",instruction:"Blow into your microphone or hold the button to blow out the candles.",successText:"Your wish is on its way! ❤️"},screen5:{badge:"MAKE A WISH",title:"Happy Birthday!",subtitle:"With all my love",buttonText:"Watch Again"}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sm="186",pC=0,mx=1,mC=2,Kc=1,xS=2,Wa=3,$s=0,ti=1,Dr=2,Nr=0,Ka=1,gx=2,vx=3,xx=4,gC=5,Uo=100,vC=101,xC=102,_C=103,yC=104,SC=200,MC=201,wC=202,EC=203,_S=204,yS=205,TC=206,AC=207,bC=208,CC=209,RC=210,PC=211,DC=212,LC=213,NC=214,zh=0,Vh=1,Hh=2,tl=3,Gh=4,Wh=5,Xh=6,jh=7,SS=0,IC=1,FC=2,rr=0,MS=1,wS=2,ES=3,om=4,TS=5,AS=6,bS=7,CS=300,qs=301,Xo=302,Nd=303,Id=304,Du=306,Gs=1e3,Lr=1001,Yh=1002,Dn=1003,UC=1004,yc=1005,zn=1006,Fd=1007,Ws=1008,di=1009,RS=1010,PS=1011,nl=1012,am=1013,or=1014,tr=1015,ar=1016,lm=1017,cm=1018,il=1020,DS=35902,LS=35899,NS=1021,IS=1022,Gi=1023,Ur=1026,Xs=1027,FS=1028,um=1029,Ks=1030,fm=1031,dm=1033,Zc=33776,Jc=33777,Qc=33778,eu=33779,$h=35840,qh=35841,Kh=35842,Zh=35843,Jh=36196,Qh=37492,ep=37496,tp=37488,np=37489,mu=37490,ip=37491,rp=37808,sp=37809,op=37810,ap=37811,lp=37812,cp=37813,up=37814,fp=37815,dp=37816,hp=37817,pp=37818,mp=37819,gp=37820,vp=37821,xp=36492,_p=36494,yp=36495,Sp=36283,Mp=36284,gu=36285,wp=36286,OC=3200,Ep=0,kC=1,hs="",Mi="srgb",vu="srgb-linear",xu="linear",zt="srgb",Ud=7680,BC=519,zC=512,VC=513,HC=514,hm=515,GC=516,WC=517,pm=518,XC=519,jC=35044,_x="300 es",nr=2e3,rl=2001;function YC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _u(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $C(){const n=_u("canvas");return n.style.display="block",n}const yx={};function Sx(...n){const e="THREE."+n.shift();console.log(e,...n)}function US(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function dt(...n){n=US(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ot(...n){n=US(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Vo(...n){const e=n.join(" ");e in yx||(yx[e]=!0,dt(...n))}function qC(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const KC={[zh]:Vh,[Hh]:Xh,[Gh]:jh,[tl]:Wh,[Vh]:zh,[Xh]:Hh,[jh]:Gh,[Wh]:tl};class Zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=Math.PI/180,Tp=180/Math.PI;function ul(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function ZC(n,e){return(n%e+e)%e}function kd(n,e,t){return(1-t)*n+t*e}function Ua(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Mm=class Mm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mm.prototype.isVector2=!0;let lt=Mm;class Ko{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,u){let d=r[o+0],h=r[o+1],m=r[o+2],v=r[o+3],p=a[c+0],y=a[c+1],M=a[c+2],A=a[c+3];if(v!==A||d!==p||h!==y||m!==M){let x=d*p+h*y+m*M+v*A;x<0&&(p=-p,y=-y,M=-M,A=-A,x=-x);let _=1-u;if(x<.9995){const C=Math.acos(x),F=Math.sin(C);_=Math.sin(_*C)/F,u=Math.sin(u*C)/F,d=d*_+p*u,h=h*_+y*u,m=m*_+M*u,v=v*_+A*u}else{d=d*_+p*u,h=h*_+y*u,m=m*_+M*u,v=v*_+A*u;const C=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=C,h*=C,m*=C,v*=C}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,c){const u=r[o],d=r[o+1],h=r[o+2],m=r[o+3],v=a[c],p=a[c+1],y=a[c+2],M=a[c+3];return e[t]=u*M+m*v+d*y-h*p,e[t+1]=d*M+m*p+h*v-u*y,e[t+2]=h*M+m*y+u*p-d*v,e[t+3]=m*M-u*v-d*p-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(r/2),m=u(o/2),v=u(a/2),p=d(r/2),y=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=p*m*v+h*y*M,this._y=h*y*v-p*m*M,this._z=h*m*M+p*y*v,this._w=h*m*v-p*y*M;break;case"YXZ":this._x=p*m*v+h*y*M,this._y=h*y*v-p*m*M,this._z=h*m*M-p*y*v,this._w=h*m*v+p*y*M;break;case"ZXY":this._x=p*m*v-h*y*M,this._y=h*y*v+p*m*M,this._z=h*m*M+p*y*v,this._w=h*m*v-p*y*M;break;case"ZYX":this._x=p*m*v-h*y*M,this._y=h*y*v+p*m*M,this._z=h*m*M-p*y*v,this._w=h*m*v+p*y*M;break;case"YZX":this._x=p*m*v+h*y*M,this._y=h*y*v+p*m*M,this._z=h*m*M-p*y*v,this._w=h*m*v-p*y*M;break;case"XZY":this._x=p*m*v-h*y*M,this._y=h*y*v-p*m*M,this._z=h*m*M+p*y*v,this._w=h*m*v+p*y*M;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],m=t[6],v=t[10],p=r+u+v;if(p>0){const y=.5/Math.sqrt(p+1);this._w=.25/y,this._x=(m-d)*y,this._y=(a-h)*y,this._z=(c-o)*y}else if(r>u&&r>v){const y=2*Math.sqrt(1+r-u-v);this._w=(m-d)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+h)/y}else if(u>v){const y=2*Math.sqrt(1+u-r-v);this._w=(a-h)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+v-r-u);this._w=(c-o)/y,this._x=(a+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+c*u+o*h-a*d,this._y=o*m+c*d+a*u-r*h,this._z=a*m+c*h+r*d-o*u,this._w=c*m-r*u-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(r=-r,o=-o,a=-a,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wm=class wm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*o-u*r),m=2*(u*t-a*o),v=2*(a*r-c*t);return this.x=t+d*h+c*v-u*m,this.y=r+d*m+u*h-a*v,this.z=o+d*v+a*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-r*d,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bd.copy(this).projectOnVector(e),this.sub(Bd)}reflect(e){return this.sub(Bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wm.prototype.isVector3=!0;let le=wm;const Bd=new le,Mx=new Ko,Em=class Em{constructor(e,t,r,o,a,c,u,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,d,h)}set(e,t,r,o,a,c,u,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=u,m[3]=t,m[4]=a,m[5]=d,m[6]=r,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[3],d=r[6],h=r[1],m=r[4],v=r[7],p=r[2],y=r[5],M=r[8],A=o[0],x=o[3],_=o[6],C=o[1],F=o[4],b=o[7],D=o[2],N=o[5],O=o[8];return a[0]=c*A+u*C+d*D,a[3]=c*x+u*F+d*N,a[6]=c*_+u*b+d*O,a[1]=h*A+m*C+v*D,a[4]=h*x+m*F+v*N,a[7]=h*_+m*b+v*O,a[2]=p*A+y*C+M*D,a[5]=p*x+y*F+M*N,a[8]=p*_+y*b+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*u*h-r*a*m+r*u*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8],v=m*c-u*h,p=u*d-m*a,y=h*a-c*d,M=t*v+r*p+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*h-m*r)*A,e[2]=(u*r-o*c)*A,e[3]=p*A,e[4]=(m*t-o*d)*A,e[5]=(o*a-u*t)*A,e[6]=y*A,e[7]=(r*d-h*t)*A,e[8]=(c*t-r*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*c+h*u)+c+e,-o*h,o*d,-o*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return Vo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zd.makeScale(e,t)),this}rotate(e){return Vo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zd.makeRotation(-e)),this}translate(e,t){return Vo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Em.prototype.isMatrix3=!0;let xt=Em;const zd=new xt,wx=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ex=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JC(){const n={enabled:!0,workingColorSpace:vu,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===zt&&(o.r=Ir(o.r),o.g=Ir(o.g),o.b=Ir(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===zt&&(o.r=Ho(o.r),o.g=Ho(o.g),o.b=Ho(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===hs?xu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[vu]:{primaries:e,whitePoint:r,transfer:xu,toXYZ:wx,fromXYZ:Ex,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:wx,fromXYZ:Ex,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),n}const Pt=JC();function Ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ho(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let So;class QC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{So===void 0&&(So=_u("canvas")),So.width=e.width,So.height=e.height;const o=So.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=So}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_u("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Ir(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ir(t[r]/255)*255):t[r]=Ir(t[r]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eR=0;class mm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eR++}),this.uuid=ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Vd(o[c].image)):a.push(Vd(o[c]))}else a=Vd(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Vd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?QC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let tR=0;const Hd=new le;class Vn extends Zs{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,r=Lr,o=Lr,a=zn,c=Ws,u=Gi,d=di,h=Vn.DEFAULT_ANISOTROPY,m=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tR++}),this.uuid=ul(),this.name="",this.source=new mm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hd).x}get height(){return this.source.getSize(Hd).y}get depth(){return this.source.getSize(Hd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==CS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case Lr:e.x=e.x<0?0:1;break;case Yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case Lr:e.y=e.y<0?0:1;break;case Yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=CS;Vn.DEFAULT_ANISOTROPY=1;const Tm=class Tm{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],m=d[4],v=d[8],p=d[1],y=d[5],M=d[9],A=d[2],x=d[6],_=d[10];if(Math.abs(m-p)<.01&&Math.abs(v-A)<.01&&Math.abs(M-x)<.01){if(Math.abs(m+p)<.1&&Math.abs(v+A)<.1&&Math.abs(M+x)<.1&&Math.abs(h+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(h+1)/2,b=(y+1)/2,D=(_+1)/2,N=(m+p)/4,O=(v+A)/4,E=(M+x)/4;return F>b&&F>D?F<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(F),o=N/r,a=O/r):b>D?b<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(b),r=N/o,a=E/o):D<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(D),r=O/a,o=E/a),this.set(r,o,a,t),this}let C=Math.sqrt((x-M)*(x-M)+(v-A)*(v-A)+(p-m)*(p-m));return Math.abs(C)<.001&&(C=1),this.x=(x-M)/C,this.y=(v-A)/C,this.z=(p-m)/C,this.w=Math.acos((h+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tm.prototype.isVector4=!0;let sn=Tm;class nR extends Zs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new Vn(o),c=r.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new mm(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends nR{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class OS extends Vn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iR extends Vn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const wu=class wu{constructor(e,t,r,o,a,c,u,d,h,m,v,p,y,M,A,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,d,h,m,v,p,y,M,A,x)}set(e,t,r,o,a,c,u,d,h,m,v,p,y,M,A,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=a,_[5]=c,_[9]=u,_[13]=d,_[2]=h,_[6]=m,_[10]=v,_[14]=p,_[3]=y,_[7]=M,_[11]=A,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Mo.setFromMatrixColumn(e,0).length(),a=1/Mo.setFromMatrixColumn(e,1).length(),c=1/Mo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),u=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const p=c*m,y=c*v,M=u*m,A=u*v;t[0]=d*m,t[4]=-d*v,t[8]=h,t[1]=y+M*h,t[5]=p-A*h,t[9]=-u*d,t[2]=A-p*h,t[6]=M+y*h,t[10]=c*d}else if(e.order==="YXZ"){const p=d*m,y=d*v,M=h*m,A=h*v;t[0]=p+A*u,t[4]=M*u-y,t[8]=c*h,t[1]=c*v,t[5]=c*m,t[9]=-u,t[2]=y*u-M,t[6]=A+p*u,t[10]=c*d}else if(e.order==="ZXY"){const p=d*m,y=d*v,M=h*m,A=h*v;t[0]=p-A*u,t[4]=-c*v,t[8]=M+y*u,t[1]=y+M*u,t[5]=c*m,t[9]=A-p*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const p=c*m,y=c*v,M=u*m,A=u*v;t[0]=d*m,t[4]=M*h-y,t[8]=p*h+A,t[1]=d*v,t[5]=A*h+p,t[9]=y*h-M,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const p=c*d,y=c*h,M=u*d,A=u*h;t[0]=d*m,t[4]=A-p*v,t[8]=M*v+y,t[1]=v,t[5]=c*m,t[9]=-u*m,t[2]=-h*m,t[6]=y*v+M,t[10]=p-A*v}else if(e.order==="XZY"){const p=c*d,y=c*h,M=u*d,A=u*h;t[0]=d*m,t[4]=-v,t[8]=h*m,t[1]=p*v+A,t[5]=c*m,t[9]=y*v-M,t[2]=M*v-y,t[6]=u*m,t[10]=A*v+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rR,e,sR)}lookAt(e,t,r){const o=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),ss.crossVectors(r,li),ss.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ss.crossVectors(r,li)),ss.normalize(),Sc.crossVectors(li,ss),o[0]=ss.x,o[4]=Sc.x,o[8]=li.x,o[1]=ss.y,o[5]=Sc.y,o[9]=li.y,o[2]=ss.z,o[6]=Sc.z,o[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[4],d=r[8],h=r[12],m=r[1],v=r[5],p=r[9],y=r[13],M=r[2],A=r[6],x=r[10],_=r[14],C=r[3],F=r[7],b=r[11],D=r[15],N=o[0],O=o[4],E=o[8],I=o[12],U=o[1],V=o[5],W=o[9],te=o[13],X=o[2],ee=o[6],ne=o[10],K=o[14],j=o[3],Y=o[7],L=o[11],w=o[15];return a[0]=c*N+u*U+d*X+h*j,a[4]=c*O+u*V+d*ee+h*Y,a[8]=c*E+u*W+d*ne+h*L,a[12]=c*I+u*te+d*K+h*w,a[1]=m*N+v*U+p*X+y*j,a[5]=m*O+v*V+p*ee+y*Y,a[9]=m*E+v*W+p*ne+y*L,a[13]=m*I+v*te+p*K+y*w,a[2]=M*N+A*U+x*X+_*j,a[6]=M*O+A*V+x*ee+_*Y,a[10]=M*E+A*W+x*ne+_*L,a[14]=M*I+A*te+x*K+_*w,a[3]=C*N+F*U+b*X+D*j,a[7]=C*O+F*V+b*ee+D*Y,a[11]=C*E+F*W+b*ne+D*L,a[15]=C*I+F*te+b*K+D*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],m=e[2],v=e[6],p=e[10],y=e[14],M=e[3],A=e[7],x=e[11],_=e[15],C=d*y-h*p,F=u*y-h*v,b=u*p-d*v,D=c*y-h*m,N=c*p-d*m,O=c*v-u*m;return t*(A*C-x*F+_*b)-r*(M*C-x*D+_*N)+o*(M*F-A*D+_*O)-a*(M*b-A*N+x*O)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[1],c=e[5],u=e[9],d=e[2],h=e[6],m=e[10];return t*(c*m-u*h)-r*(a*m-u*d)+o*(a*h-c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8],v=e[9],p=e[10],y=e[11],M=e[12],A=e[13],x=e[14],_=e[15],C=t*u-r*c,F=t*d-o*c,b=t*h-a*c,D=r*d-o*u,N=r*h-a*u,O=o*h-a*d,E=m*A-v*M,I=m*x-p*M,U=m*_-y*M,V=v*x-p*A,W=v*_-y*A,te=p*_-y*x,X=C*te-F*W+b*V+D*U-N*I+O*E;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/X;return e[0]=(u*te-d*W+h*V)*ee,e[1]=(o*W-r*te-a*V)*ee,e[2]=(A*O-x*N+_*D)*ee,e[3]=(p*N-v*O-y*D)*ee,e[4]=(d*U-c*te-h*I)*ee,e[5]=(t*te-o*U+a*I)*ee,e[6]=(x*b-M*O-_*F)*ee,e[7]=(m*O-p*b+y*F)*ee,e[8]=(c*W-u*U+h*E)*ee,e[9]=(r*U-t*W-a*E)*ee,e[10]=(M*N-A*b+_*C)*ee,e[11]=(v*b-m*N-y*C)*ee,e[12]=(u*I-c*V-d*E)*ee,e[13]=(t*V-r*I+o*E)*ee,e[14]=(A*F-M*D-x*C)*ee,e[15]=(m*D-v*F+p*C)*ee,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,u=e.y,d=e.z,h=a*c,m=a*u;return this.set(h*c+r,h*u-o*d,h*d+o*u,0,h*u+o*d,m*u+r,m*d-o*c,0,h*d-o*u,m*d+o*c,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,m=c+c,v=u+u,p=a*h,y=a*m,M=a*v,A=c*m,x=c*v,_=u*v,C=d*h,F=d*m,b=d*v,D=r.x,N=r.y,O=r.z;return o[0]=(1-(A+_))*D,o[1]=(y+b)*D,o[2]=(M-F)*D,o[3]=0,o[4]=(y-b)*N,o[5]=(1-(p+_))*N,o[6]=(x+C)*N,o[7]=0,o[8]=(M+F)*O,o[9]=(x-C)*O,o[10]=(1-(p+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let c=Mo.set(o[0],o[1],o[2]).length();const u=Mo.set(o[4],o[5],o[6]).length(),d=Mo.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ui.copy(this);const h=1/c,m=1/u,v=1/d;return Ui.elements[0]*=h,Ui.elements[1]*=h,Ui.elements[2]*=h,Ui.elements[4]*=m,Ui.elements[5]*=m,Ui.elements[6]*=m,Ui.elements[8]*=v,Ui.elements[9]*=v,Ui.elements[10]*=v,t.setFromRotationMatrix(Ui),r.x=c,r.y=u,r.z=d,this}makePerspective(e,t,r,o,a,c,u=nr,d=!1){const h=this.elements,m=2*a/(t-e),v=2*a/(r-o),p=(t+e)/(t-e),y=(r+o)/(r-o);let M,A;if(d)M=a/(c-a),A=c*a/(c-a);else if(u===nr)M=-(c+a)/(c-a),A=-2*c*a/(c-a);else if(u===rl)M=-c/(c-a),A=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=m,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,c,u=nr,d=!1){const h=this.elements,m=2/(t-e),v=2/(r-o),p=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,A;if(d)M=1/(c-a),A=c/(c-a);else if(u===nr)M=-2/(c-a),A=-(c+a)/(c-a);else if(u===rl)M=-1/(c-a),A=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=m,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};wu.prototype.isMatrix4=!0;let cn=wu;const Mo=new le,Ui=new cn,rR=new le(0,0,0),sR=new le(1,1,1),ss=new le,Sc=new le,li=new le,Tx=new cn,Ax=new Ko;class xs{constructor(e=0,t=0,r=0,o=xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],h=o[5],m=o[9],v=o[2],p=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-At(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-At(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(p,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Tx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tx,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ax.setFromEuler(this),this.setFromQuaternion(Ax,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xs.DEFAULT_ORDER="XYZ";class kS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oR=0;const bx=new le,wo=new Ko,Er=new cn,Mc=new le,Oa=new le,aR=new le,lR=new Ko,Cx=new le(1,0,0),Rx=new le(0,1,0),Px=new le(0,0,1),Dx={type:"added"},cR={type:"removed"},Eo={type:"childadded",child:null},Gd={type:"childremoved",child:null};class Hn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new le,t=new xs,r=new Ko,o=new le(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new cn},normalMatrix:{value:new xt}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(Cx,e)}rotateY(e){return this.rotateOnAxis(Rx,e)}rotateZ(e){return this.rotateOnAxis(Px,e)}translateOnAxis(e,t){return bx.copy(e).applyQuaternion(this.quaternion),this.position.add(bx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cx,e)}translateY(e){return this.translateOnAxis(Rx,e)}translateZ(e){return this.translateOnAxis(Px,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Mc.copy(e):Mc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(Oa,Mc,this.up):Er.lookAt(Mc,Oa,this.up),this.quaternion.setFromRotationMatrix(Er),o&&(Er.extractRotation(o.matrixWorld),wo.setFromRotationMatrix(Er),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dx),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cR),Gd.child=e,this.dispatchEvent(Gd),Gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dx),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,aR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,lR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),v=c(e.shapes),p=c(e.skeletons),y=c(e.animations),M=c(e.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),v.length>0&&(r.shapes=v),p.length>0&&(r.skeletons=p),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Hn.DEFAULT_UP=new le(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vi extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uR={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,r),_=this._getHandJoint(h,A);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],p=m.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&p>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(uR)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Vi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const BS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Xd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Lt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Pt.workingColorSpace){if(e=ZC(e,1),t=At(t,0,1),r=At(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=Xd(c,a,e+1/3),this.g=Xd(c,a,e),this.b=Xd(c,a,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,t=Mi){function r(a){a!==void 0&&parseFloat(a)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mi){const r=BS[e.toLowerCase()];return r!==void 0?this.setHex(r,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Pt.workingToColorSpace(Bn.copy(this),e),Math.round(At(Bn.r*255,0,255))*65536+Math.round(At(Bn.g*255,0,255))*256+Math.round(At(Bn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Bn.copy(this),t);const r=Bn.r,o=Bn.g,a=Bn.b,c=Math.max(r,o,a),u=Math.min(r,o,a);let d,h;const m=(u+c)/2;if(u===c)d=0,h=0;else{const v=c-u;switch(h=m<=.5?v/(c+u):v/(2-c-u),c){case r:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-r)/v+2;break;case a:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Mi){Pt.workingToColorSpace(Bn.copy(this),e);const t=Bn.r,r=Bn.g,o=Bn.b;return e!==Mi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(wc);const r=kd(os.h,wc.h,t),o=kd(os.s,wc.s,t),a=kd(os.l,wc.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Lt;Lt.NAMES=BS;class fR extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xs,this.environmentIntensity=1,this.environmentRotation=new xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oi=new le,Tr=new le,jd=new le,Ar=new le,To=new le,Ao=new le,Lx=new le,Yd=new le,$d=new le,qd=new le,Kd=new sn,Zd=new sn,Jd=new sn;class Hi{constructor(e=new le,t=new le,r=new le){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Oi.subVectors(e,t),o.cross(Oi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Oi.subVectors(o,t),Tr.subVectors(r,t),jd.subVectors(e,t);const c=Oi.dot(Oi),u=Oi.dot(Tr),d=Oi.dot(jd),h=Tr.dot(Tr),m=Tr.dot(jd),v=c*h-u*u;if(v===0)return a.set(0,0,0),null;const p=1/v,y=(h*d-u*m)*p,M=(c*m-u*d)*p;return a.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,r,o,a,c,u,d){return this.getBarycoord(e,t,r,o,Ar)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Ar.x),d.addScaledVector(c,Ar.y),d.addScaledVector(u,Ar.z),d)}static getInterpolatedAttribute(e,t,r,o,a,c){return Kd.setScalar(0),Zd.setScalar(0),Jd.setScalar(0),Kd.fromBufferAttribute(e,t),Zd.fromBufferAttribute(e,r),Jd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Kd,a.x),c.addScaledVector(Zd,a.y),c.addScaledVector(Jd,a.z),c}static isFrontFacing(e,t,r,o){return Oi.subVectors(r,t),Tr.subVectors(e,t),Oi.cross(Tr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),Oi.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Hi.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,u;To.subVectors(o,r),Ao.subVectors(a,r),Yd.subVectors(e,r);const d=To.dot(Yd),h=Ao.dot(Yd);if(d<=0&&h<=0)return t.copy(r);$d.subVectors(e,o);const m=To.dot($d),v=Ao.dot($d);if(m>=0&&v<=m)return t.copy(o);const p=d*v-m*h;if(p<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(r).addScaledVector(To,c);qd.subVectors(e,a);const y=To.dot(qd),M=Ao.dot(qd);if(M>=0&&y<=M)return t.copy(a);const A=y*h-d*M;if(A<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(r).addScaledVector(Ao,u);const x=m*M-y*v;if(x<=0&&v-m>=0&&y-M>=0)return Lx.subVectors(a,o),u=(v-m)/(v-m+(y-M)),t.copy(o).addScaledVector(Lx,u);const _=1/(x+A+p);return c=A*_,u=p*_,t.copy(r).addScaledVector(To,c).addScaledVector(Ao,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fl{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,ki):ki.fromBufferAttribute(a,c),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ec.copy(r.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),Tc.subVectors(this.max,ka),bo.subVectors(e.a,ka),Co.subVectors(e.b,ka),Ro.subVectors(e.c,ka),as.subVectors(Co,bo),ls.subVectors(Ro,Co),Fs.subVectors(bo,Ro);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Fs.z,Fs.y,as.z,0,-as.x,ls.z,0,-ls.x,Fs.z,0,-Fs.x,-as.y,as.x,0,-ls.y,ls.x,0,-Fs.y,Fs.x,0];return!Qd(t,bo,Co,Ro,Tc)||(t=[1,0,0,0,1,0,0,0,1],!Qd(t,bo,Co,Ro,Tc))?!1:(Ac.crossVectors(as,ls),t=[Ac.x,Ac.y,Ac.z],Qd(t,bo,Co,Ro,Tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const br=[new le,new le,new le,new le,new le,new le,new le,new le],ki=new le,Ec=new fl,bo=new le,Co=new le,Ro=new le,as=new le,ls=new le,Fs=new le,ka=new le,Tc=new le,Ac=new le,Us=new le;function Qd(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){Us.fromArray(n,a);const u=o.x*Math.abs(Us.x)+o.y*Math.abs(Us.y)+o.z*Math.abs(Us.z),d=e.dot(Us),h=t.dot(Us),m=r.dot(Us);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>u)return!1}return!0}const pn=new le,bc=new lt;let dR=0;class Fr extends Zs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=jC,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bc.fromBufferAttribute(this,t),bc.applyMatrix3(e),this.setXY(t,bc.x,bc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ua(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ei(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),r=ei(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),r=ei(r,this.array),o=ei(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),r=ei(r,this.array),o=ei(o,this.array),a=ei(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class zS extends Fr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class VS extends Fr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class en extends Fr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const hR=new fl,Ba=new le,eh=new le;class gm{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):hR.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const t=Ba.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ba,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(eh)),this.expandByPoint(Ba.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pR=0;const Si=new cn,th=new Hn,Po=new le,ci=new fl,za=new fl,An=new le;class ni extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(YC(e)?VS:zS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new xt().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,r){return Si.makeTranslation(e,t,r),this.applyMatrix4(Si),this}scale(e,t,r){return Si.makeScale(e,t,r),this.applyMatrix4(Si),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Po).negate(),this.translate(Po.x,Po.y,Po.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new en(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ci.setFromBufferAttribute(a),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];za.setFromBufferAttribute(u),this.morphTargetsRelative?(An.addVectors(ci.min,za.min),ci.expandByPoint(An),An.addVectors(ci.max,za.max),ci.expandByPoint(An)):(ci.expandByPoint(za.min),ci.expandByPoint(za.max))}ci.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)An.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(An));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)An.fromBufferAttribute(u,h),d&&(Po.fromBufferAttribute(e,h),An.add(Po)),o=Math.max(o,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Fr(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const u=[],d=[];for(let E=0;E<r.count;E++)u[E]=new le,d[E]=new le;const h=new le,m=new le,v=new le,p=new lt,y=new lt,M=new lt,A=new le,x=new le;function _(E,I,U){h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,I),v.fromBufferAttribute(r,U),p.fromBufferAttribute(a,E),y.fromBufferAttribute(a,I),M.fromBufferAttribute(a,U),m.sub(h),v.sub(h),y.sub(p),M.sub(p);const V=1/(y.x*M.y-M.x*y.y);isFinite(V)&&(A.copy(m).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(V),x.copy(v).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(V),u[E].add(A),u[I].add(A),u[U].add(A),d[E].add(x),d[I].add(x),d[U].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let E=0,I=C.length;E<I;++E){const U=C[E],V=U.start,W=U.count;for(let te=V,X=V+W;te<X;te+=3)_(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const F=new le,b=new le,D=new le,N=new le;function O(E){D.fromBufferAttribute(o,E),N.copy(D);const I=u[E];F.copy(I),F.sub(D.multiplyScalar(D.dot(I))).normalize(),b.crossVectors(N,I);const V=b.dot(d[E])<0?-1:1;c.setXYZW(E,F.x,F.y,F.z,V)}for(let E=0,I=C.length;E<I;++E){const U=C[E],V=U.start,W=U.count;for(let te=V,X=V+W;te<X;te+=3)O(e.getX(te+0)),O(e.getX(te+1)),O(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Fr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let p=0,y=r.count;p<y;p++)r.setXYZ(p,0,0,0);const o=new le,a=new le,c=new le,u=new le,d=new le,h=new le,m=new le,v=new le;if(e)for(let p=0,y=e.count;p<y;p+=3){const M=e.getX(p+0),A=e.getX(p+1),x=e.getX(p+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,A),c.fromBufferAttribute(t,x),m.subVectors(c,a),v.subVectors(o,a),m.cross(v),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,x),u.add(m),d.add(m),h.add(m),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let p=0,y=t.count;p<y;p+=3)o.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),c.fromBufferAttribute(t,p+2),m.subVectors(c,a),v.subVectors(o,a),m.cross(v),r.setXYZ(p+0,m.x,m.y,m.z),r.setXYZ(p+1,m.x,m.y,m.z),r.setXYZ(p+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(u,d){const h=u.array,m=u.itemSize,v=u.normalized,p=new h.constructor(d.length*m);let y=0,M=0;for(let A=0,x=d.length;A<x;A++){u.isInterleavedBufferAttribute?y=d[A]*u.data.stride+u.offset:y=d[A]*m;for(let _=0;_<m;_++)p[M++]=h[y++]}return new Fr(p,m,v)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,r=this.index.array,o=this.attributes;for(const u in o){const d=o[u],h=e(d,r);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let m=0,v=h.length;m<v;m++){const p=h[m],y=e(p,r);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,p=h.length;v<p;v++){const y=h[v];m.push(y.toJSON(e.data))}m.length>0&&(o[d]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],v=a[h];for(let p=0,y=v.length;p<y;p++)m.push(v[p].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nh=new le,mR=new le,gR=new xt;class fs{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=nh.subVectors(r,t).cross(mR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(nh),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||gR.getNormalMatrix(e),o=this.coplanarPoint(nh).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let vR=0;class Zo extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vR++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=Ka,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_S,this.blendDst=yS,this.blendEquation=Uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=BC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ud,this.stencilZFail=Ud,this.stencilZPass=Ud,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new fs().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new lt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Cr=new le,ih=new le,Cc=new le,Rc=new le;class xR{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cr.copy(this.origin).addScaledVector(this.direction,t),Cr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ih.copy(e).add(t).multiplyScalar(.5),Cc.copy(t).sub(e).normalize(),Rc.copy(this.origin).sub(ih);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Cc),u=Rc.dot(this.direction),d=-Rc.dot(Cc),h=Rc.lengthSq(),m=Math.abs(1-c*c);let v,p,y,M;if(m>0)if(v=c*d-u,p=c*u-d,M=a*m,v>=0)if(p>=-M)if(p<=M){const A=1/m;v*=A,p*=A,y=v*(v+c*p+2*u)+p*(c*v+p+2*d)+h}else p=a,v=Math.max(0,-(c*p+u)),y=-v*v+p*(p+2*d)+h;else p=-a,v=Math.max(0,-(c*p+u)),y=-v*v+p*(p+2*d)+h;else p<=-M?(v=Math.max(0,-(-c*a+u)),p=v>0?-a:Math.min(Math.max(-a,-d),a),y=-v*v+p*(p+2*d)+h):p<=M?(v=0,p=Math.min(Math.max(-a,-d),a),y=p*(p+2*d)+h):(v=Math.max(0,-(c*a+u)),p=v>0?a:Math.min(Math.max(-a,-d),a),y=-v*v+p*(p+2*d)+h);else p=c>0?-a:a,v=Math.max(0,-(c*p+u)),y=-v*v+p*(p+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(ih).addScaledVector(Cc,p),y}intersectSphere(e,t){if(e.radius<0)return null;Cr.subVectors(e.center,this.origin);const r=Cr.dot(this.direction),o=Cr.dot(Cr)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=r-c,d=r+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,u,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,p=this.origin;return h>=0?(r=(e.min.x-p.x)*h,o=(e.max.x-p.x)*h):(r=(e.max.x-p.x)*h,o=(e.min.x-p.x)*h),m>=0?(a=(e.min.y-p.y)*m,c=(e.max.y-p.y)*m):(a=(e.max.y-p.y)*m,c=(e.min.y-p.y)*m),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),v>=0?(u=(e.min.z-p.z)*v,d=(e.max.z-p.z)*v):(u=(e.max.z-p.z)*v,d=(e.min.z-p.z)*v),r>d||u>o)||((u>r||r!==r)&&(r=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Cr)!==null}intersectTriangle(e,t,r,o,a){const c=this.origin,u=this.direction,d=u.x,h=u.y,m=u.z,v=e.x-c.x,p=e.y-c.y,y=e.z-c.z,M=t.x-c.x,A=t.y-c.y,x=t.z-c.z,_=r.x-c.x,C=r.y-c.y,F=r.z-c.z,b=Math.abs(d),D=Math.abs(h),N=Math.abs(m);let O,E,I,U,V,W,te,X,ee,ne,K,j;if(b>=D&&b>=N?(I=d,W=v,ee=M,j=_,d>=0?(O=h,E=m,U=p,V=y,te=A,X=x,ne=C,K=F):(O=m,E=h,U=y,V=p,te=x,X=A,ne=F,K=C)):D>=N?(I=h,W=p,ee=A,j=C,h>=0?(O=m,E=d,U=y,V=v,te=x,X=M,ne=F,K=_):(O=d,E=m,U=v,V=y,te=M,X=x,ne=_,K=F)):(I=m,W=y,ee=x,j=F,m>=0?(O=d,E=h,U=v,V=p,te=M,X=A,ne=_,K=C):(O=h,E=d,U=p,V=v,te=A,X=M,ne=C,K=_)),I===0)return null;const Y=O/I,L=E/I,w=1/I,H=U-Y*W,fe=V-L*W,Se=te-Y*ee,Ee=X-L*ee,Te=ne-Y*j,q=K-L*j,ie=Te*Ee-q*Se,ye=H*q-fe*Te,ke=Se*fe-Ee*H;if(o){if(ie<0||ye<0||ke<0)return null}else if((ie<0||ye<0||ke<0)&&(ie>0||ye>0||ke>0))return null;const Re=ie+ye+ke;if(Re===0)return null;const Ze=w*(ie*W+ye*ee+ke*j);return(Re>0?Ze<0:Ze>0)?null:this.at(Ze/Re,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ds extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=SS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nx=new cn,Os=new xR,Pc=new gm,Ix=new le,Dc=new le,Lc=new le,Nc=new le,rh=new le,Ic=new le,Fx=new le,Fc=new le;class Dt extends Hn{constructor(e=new ni,t=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Ic.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const m=u[d],v=a[d];m!==0&&(rh.fromBufferAttribute(v,e),c?Ic.addScaledVector(rh,m):Ic.addScaledVector(rh.sub(t),m))}t.add(Ic)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(a),Os.copy(e.ray).recast(e.near),!(Pc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Pc,Ix)===null||Os.origin.distanceToSquared(Ix)>(e.far-e.near)**2))&&(Nx.copy(a).invert(),Os.copy(e.ray).applyMatrix4(Nx),!(r.boundingBox!==null&&Os.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,v=a.attributes.normal,p=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,A=p.length;M<A;M++){const x=p[M],_=c[x.materialIndex],C=Math.max(x.start,y.start),F=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let b=C,D=F;b<D;b+=3){const N=u.getX(b),O=u.getX(b+1),E=u.getX(b+2);o=Uc(this,_,e,r,h,m,v,N,O,E),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(u.count,y.start+y.count);for(let x=M,_=A;x<_;x+=3){const C=u.getX(x),F=u.getX(x+1),b=u.getX(x+2);o=Uc(this,c,e,r,h,m,v,C,F,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,A=p.length;M<A;M++){const x=p[M],_=c[x.materialIndex],C=Math.max(x.start,y.start),F=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let b=C,D=F;b<D;b+=3){const N=b,O=b+1,E=b+2;o=Uc(this,_,e,r,h,m,v,N,O,E),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let x=M,_=A;x<_;x+=3){const C=x,F=x+1,b=x+2;o=Uc(this,c,e,r,h,m,v,C,F,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function _R(n,e,t,r,o,a,c,u){let d;if(e.side===ti?d=r.intersectTriangle(c,a,o,!0,u):d=r.intersectTriangle(o,a,c,e.side===$s,u),d===null)return null;Fc.copy(u),Fc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Fc);return h<t.near||h>t.far?null:{distance:h,point:Fc.clone(),object:n}}function Uc(n,e,t,r,o,a,c,u,d,h){n.getVertexPosition(u,Dc),n.getVertexPosition(d,Lc),n.getVertexPosition(h,Nc);const m=_R(n,e,t,r,Dc,Lc,Nc,Fx);if(m){const v=new le;Hi.getBarycoord(Fx,Dc,Lc,Nc,v),o&&(m.uv=Hi.getInterpolatedAttribute(o,u,d,h,v,new lt)),a&&(m.uv1=Hi.getInterpolatedAttribute(a,u,d,h,v,new lt)),c&&(m.normal=Hi.getInterpolatedAttribute(c,u,d,h,v,new le),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const p={a:u,b:d,c:h,normal:new le,materialIndex:0};Hi.getNormal(Dc,Lc,Nc,p.normal),m.face=p,m.barycoord=v}return m}class yR extends Vn{constructor(e=null,t=1,r=1,o,a,c,u,d,h=Dn,m=Dn,v,p){super(null,c,u,d,h,m,o,a,v,p),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ks=new gm,SR=new lt(.5,.5),Oc=new le;class vm{constructor(e=new fs,t=new fs,r=new fs,o=new fs,a=new fs,c=new fs){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr,r=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],m=a[4],v=a[5],p=a[6],y=a[7],M=a[8],A=a[9],x=a[10],_=a[11],C=a[12],F=a[13],b=a[14],D=a[15];if(o[0].setComponents(h-c,y-m,_-M,D-C).normalize(),o[1].setComponents(h+c,y+m,_+M,D+C).normalize(),o[2].setComponents(h+u,y+v,_+A,D+F).normalize(),o[3].setComponents(h-u,y-v,_-A,D-F).normalize(),r)o[4].setComponents(d,p,x,b).normalize(),o[5].setComponents(h-d,y-p,_-x,D-b).normalize();else if(o[4].setComponents(h-d,y-p,_-x,D-b).normalize(),t===nr)o[5].setComponents(h+d,y+p,_+x,D+b).normalize();else if(t===rl)o[5].setComponents(d,p,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){ks.center.set(0,0,0);const t=SR.distanceTo(e.center);return ks.radius=.7071067811865476+t,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Oc.x=o.normal.x>0?e.max.x:e.min.x,Oc.y=o.normal.y>0?e.max.y:e.min.y,Oc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class HS extends Vn{constructor(e=[],t=qs,r,o,a,c,u,d,h,m){super(e,t,r,o,a,c,u,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ux extends Vn{constructor(e,t,r,o,a,c,u,d,h){super(e,t,r,o,a,c,u,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sl extends Vn{constructor(e,t,r=or,o,a,c,u=Dn,d=Dn,h,m=Ur,v=1){if(m!==Ur&&m!==Xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:v};super(p,o,a,c,u,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class MR extends sl{constructor(e,t=or,r=qs,o,a,c=Dn,u=Dn,d,h=Ur){const m={width:e,height:e,depth:1},v=[m,m,m,m,m,m];super(e,e,t,r,o,a,c,u,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class GS extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dl extends ni{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],m=[],v=[];let p=0,y=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new en(h,3)),this.setAttribute("normal",new en(m,3)),this.setAttribute("uv",new en(v,2));function M(A,x,_,C,F,b,D,N,O,E,I){const U=b/O,V=D/E,W=b/2,te=D/2,X=N/2,ee=O+1,ne=E+1;let K=0,j=0;const Y=new le;for(let L=0;L<ne;L++){const w=L*V-te;for(let H=0;H<ee;H++){const fe=H*U-W;Y[A]=fe*C,Y[x]=w*F,Y[_]=X,h.push(Y.x,Y.y,Y.z),Y[A]=0,Y[x]=0,Y[_]=N>0?1:-1,m.push(Y.x,Y.y,Y.z),v.push(H/O),v.push(1-L/E),K+=1}}for(let L=0;L<E;L++)for(let w=0;w<O;w++){const H=p+w+ee*L,fe=p+w+ee*(L+1),Se=p+(w+1)+ee*(L+1),Ee=p+(w+1)+ee*L;d.push(H,fe,Ee),d.push(fe,Se,Ee),j+=6}u.addGroup(y,j,I),y+=j,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xm extends ni{constructor(e=1,t=1,r=4,o=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:o,heightSegments:a},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),o=Math.max(3,Math.floor(o)),a=Math.max(1,Math.floor(a));const c=[],u=[],d=[],h=[],m=t/2,v=Math.PI/2*e,p=t,y=2*v+p,M=r*2+a,A=o+1,x=new le,_=new le;for(let C=0;C<=M;C++){let F=0,b=0,D=0,N=0;if(C<=r){const I=C/r,U=I*Math.PI/2;b=-m-e*Math.cos(U),D=e*Math.sin(U),N=-e*Math.cos(U),F=I*v}else if(C<=r+a){const I=(C-r)/a;b=-m+I*t,D=e,N=0,F=v+I*p}else{const I=(C-r-a)/r,U=I*Math.PI/2;b=m+e*Math.sin(U),D=e*Math.cos(U),N=e*Math.sin(U),F=v+p+I*v}const O=Math.max(0,Math.min(1,F/y));let E=0;C===0?E=.5/o:C===M&&(E=-.5/o);for(let I=0;I<=o;I++){const U=I/o,V=U*Math.PI*2,W=Math.sin(V),te=Math.cos(V);_.x=-D*te,_.y=b,_.z=D*W,u.push(_.x,_.y,_.z),x.set(-D*te,N,D*W),x.normalize(),d.push(x.x,x.y,x.z),h.push(U+E,O)}if(C>0){const I=(C-1)*A;for(let U=0;U<o;U++){const V=I+U,W=I+U+1,te=C*A+U,X=C*A+U+1;c.push(V,W,te),c.push(W,X,te)}}}this.setIndex(c),this.setAttribute("position",new en(u,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xm(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ui extends ni{constructor(e=1,t=1,r=1,o=32,a=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:d};const h=this;o=Math.floor(o),a=Math.floor(a);const m=[],v=[],p=[],y=[];let M=0;const A=[],x=r/2;let _=0;C(),c===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(m),this.setAttribute("position",new en(v,3)),this.setAttribute("normal",new en(p,3)),this.setAttribute("uv",new en(y,2));function C(){const b=new le,D=new le;let N=0;const O=(t-e)/r;for(let E=0;E<=a;E++){const I=[],U=E/a,V=U*(t-e)+e;for(let W=0;W<=o;W++){const te=W/o,X=te*d+u,ee=Math.sin(X),ne=Math.cos(X);D.x=V*ee,D.y=-U*r+x,D.z=V*ne,v.push(D.x,D.y,D.z),b.set(ee,O,ne).normalize(),p.push(b.x,b.y,b.z),y.push(te,1-U),I.push(M++)}A.push(I)}for(let E=0;E<o;E++)for(let I=0;I<a;I++){const U=A[I][E],V=A[I+1][E],W=A[I+1][E+1],te=A[I][E+1];(e>0||I!==0)&&(m.push(U,V,te),N+=3),(t>0||I!==a-1)&&(m.push(V,W,te),N+=3)}h.addGroup(_,N,0),_+=N}function F(b){const D=M,N=new lt,O=new le;let E=0;const I=b===!0?e:t,U=b===!0?1:-1;for(let W=1;W<=o;W++)v.push(0,x*U,0),p.push(0,U,0),y.push(.5,.5),M++;const V=M;for(let W=0;W<=o;W++){const X=W/o*d+u,ee=Math.cos(X),ne=Math.sin(X);O.x=I*ne,O.y=x*U,O.z=I*ee,v.push(O.x,O.y,O.z),p.push(0,U,0),N.x=ee*.5+.5,N.y=ne*.5*U+.5,y.push(N.x,N.y),M++}for(let W=0;W<o;W++){const te=D+W,X=V+W;b===!0?m.push(X,X+1,te):m.push(X+1,X,te),E+=3}h.addGroup(_,E,b===!0?1:2),_+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yu extends ui{constructor(e=1,t=1,r=32,o=1,a=!1,c=0,u=Math.PI*2){super(0,e,t,r,o,a,c,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:u}}static fromJSON(e){return new yu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Su extends ni{constructor(e=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],t=12,r=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:r,phiLength:o},t=Math.floor(t),o=At(o,0,Math.PI*2);const a=[],c=[],u=[],d=[],h=[],m=1/t,v=new le,p=new lt,y=new le,M=new le,A=new le;let x=0,_=0;for(let C=0;C<=e.length-1;C++)switch(C){case 0:x=e[C+1].x-e[C].x,_=e[C+1].y-e[C].y,y.x=_*1,y.y=-x,y.z=_*0,A.copy(y),y.normalize(),d.push(y.x,y.y,y.z);break;case e.length-1:d.push(A.x,A.y,A.z);break;default:x=e[C+1].x-e[C].x,_=e[C+1].y-e[C].y,y.x=_*1,y.y=-x,y.z=_*0,M.copy(y),y.x+=A.x,y.y+=A.y,y.z+=A.z,y.normalize(),d.push(y.x,y.y,y.z),A.copy(M)}for(let C=0;C<=t;C++){const F=r+C*m*o,b=Math.sin(F),D=Math.cos(F);for(let N=0;N<=e.length-1;N++){v.x=e[N].x*b,v.y=e[N].y,v.z=e[N].x*D,c.push(v.x,v.y,v.z),p.x=C/t,p.y=N/(e.length-1),u.push(p.x,p.y);const O=d[3*N+0]*b,E=d[3*N+1],I=d[3*N+0]*D;h.push(O,E,I)}}for(let C=0;C<t;C++)for(let F=0;F<e.length-1;F++){const b=F+C*e.length,D=b,N=b+e.length,O=b+e.length+1,E=b+1;a.push(D,N,E),a.push(O,E,N)}this.setIndex(a),this.setAttribute("position",new en(c,3)),this.setAttribute("uv",new en(u,2)),this.setAttribute("normal",new en(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.points,e.segments,e.phiStart,e.phiLength)}}class hl extends ni{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(r),d=Math.floor(o),h=u+1,m=d+1,v=e/u,p=t/d,y=[],M=[],A=[],x=[];for(let _=0;_<m;_++){const C=_*p-c;for(let F=0;F<h;F++){const b=F*v-a;M.push(b,-C,0),A.push(0,0,1),x.push(F/u),x.push(1-_/d)}}for(let _=0;_<d;_++)for(let C=0;C<u;C++){const F=C+h*_,b=C+h*(_+1),D=C+1+h*(_+1),N=C+1+h*_;y.push(F,b,N),y.push(b,D,N)}this.setIndex(y),this.setAttribute("position",new en(M,3)),this.setAttribute("normal",new en(A,3)),this.setAttribute("uv",new en(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pr extends ni{constructor(e=1,t=32,r=16,o=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+u,Math.PI);let h=0;const m=[],v=new le,p=new le,y=[],M=[],A=[],x=[];for(let _=0;_<=r;_++){const C=[],F=_/r,b=c+F*u,D=e*Math.cos(b),N=Math.sqrt(e*e-D*D);let O=0;_===0&&c===0?O=.5/t:_===r&&d===Math.PI&&(O=-.5/t);for(let E=0;E<=t;E++){const I=E/t,U=o+I*a;v.x=-N*Math.cos(U),v.y=D,v.z=N*Math.sin(U),M.push(v.x,v.y,v.z),p.copy(v).normalize(),A.push(p.x,p.y,p.z),x.push(I+O,1-F),C.push(h++)}m.push(C)}for(let _=0;_<r;_++)for(let C=0;C<t;C++){const F=m[_][C+1],b=m[_][C],D=m[_+1][C],N=m[_+1][C+1];(_!==0||c>0)&&y.push(F,b,N),(_!==r-1||d<Math.PI)&&y.push(b,D,N)}this.setIndex(y),this.setAttribute("position",new en(M,3)),this.setAttribute("normal",new en(A,3)),this.setAttribute("uv",new en(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mu extends ni{constructor(e=1,t=.4,r=12,o=48,a=Math.PI*2,c=0,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:a,thetaStart:c,thetaLength:u},r=Math.floor(r),o=Math.floor(o);const d=[],h=[],m=[],v=[],p=new le,y=new le,M=new le;for(let A=0;A<=r;A++){const x=c+A/r*u;for(let _=0;_<=o;_++){const C=_/o*a;y.x=(e+t*Math.cos(x))*Math.cos(C),y.y=(e+t*Math.cos(x))*Math.sin(C),y.z=t*Math.sin(x),h.push(y.x,y.y,y.z),p.x=e*Math.cos(C),p.y=e*Math.sin(C),M.subVectors(y,p).normalize(),m.push(M.x,M.y,M.z),v.push(_/o),v.push(A/r)}}for(let A=1;A<=r;A++)for(let x=1;x<=o;x++){const _=(o+1)*A+x-1,C=(o+1)*(A-1)+x-1,F=(o+1)*(A-1)+x,b=(o+1)*A+x;d.push(_,C,b),d.push(C,F,b)}this.setIndex(d),this.setAttribute("position",new en(h,3)),this.setAttribute("normal",new en(m,3)),this.setAttribute("uv",new en(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class wR extends Zo{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Lt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function jo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(Ox(o))o.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Ox(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Xn(n){const e={};for(let t=0;t<n.length;t++){const r=jo(n[t]);for(const o in r)e[o]=r[o]}return e}function Ox(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ER(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function WS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const TR={clone:jo,merge:Xn};var AR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AR,this.fragmentShader=bR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=ER(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Lt().setHex(o.value);break;case"v2":this.uniforms[r].value=new lt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new le().fromArray(o.value);break;case"v4":this.uniforms[r].value=new sn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new xt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new cn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class CR extends lr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bi extends Zo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class RR extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PR extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _m extends Hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const sh=new cn,kx=new le,Bx=new le;class XS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vm,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;kx.setFromMatrixPosition(e.matrixWorld),t.position.copy(kx),Bx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bx),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){sh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(sh,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,c=o?o.z/a.x:1,u=o?o.w/a.y:1,d=o?o.x/a.x:0,h=o?o.y/a.y:0;e.coordinateSystem===rl||e.reversedDepth?t.set(.5*c,0,0,.5*c+d,0,.5*u,0,.5*u+h,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+d,0,.5*u,0,.5*u+h,0,0,.5,.5,0,0,0,1),t.multiply(sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kc=new le,Bc=new Ko,Ki=new le;class jS extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kc,Bc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Bc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(kc,Bc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Bc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cs=new le,zx=new lt,Vx=new lt;class fi extends jS{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Od*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tp*2*Math.atan(Math.tan(Od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,zx,Vx),t.subVectors(Vx,zx)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Od*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class DR extends XS{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0}}class LR extends _m{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new DR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ym extends jS{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class NR extends XS{constructor(){super(new ym(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oh extends _m{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new NR}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class IR extends _m{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Do=-90,Lo=1;class FR extends Hn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new fi(Do,Lo,e,t);o.layers=this.layers,this.add(o);const a=new fi(Do,Lo,e,t);a.layers=this.layers,this.add(a);const c=new fi(Do,Lo,e,t);c.layers=this.layers,this.add(c);const u=new fi(Do,Lo,e,t);u.layers=this.layers,this.add(u);const d=new fi(Do,Lo,e,t);d.layers=this.layers,this.add(d);const h=new fi(Do,Lo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===rl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,m]=this.children,v=e.getRenderTarget(),p=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(v,p,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class UR extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class OR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,dt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Am=class Am{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=o,this}};Am.prototype.isMatrix2=!0;let Hx=Am;function Gx(n,e,t,r){const o=kR(r);switch(t){case NS:return n*e;case FS:return n*e/o.components*o.byteLength;case um:return n*e/o.components*o.byteLength;case Ks:return n*e*2/o.components*o.byteLength;case fm:return n*e*2/o.components*o.byteLength;case IS:return n*e*3/o.components*o.byteLength;case Gi:return n*e*4/o.components*o.byteLength;case dm:return n*e*4/o.components*o.byteLength;case Zc:case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qc:case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qh:case Zh:return Math.max(n,16)*Math.max(e,8)/4;case $h:case Kh:return Math.max(n,8)*Math.max(e,8)/2;case Jh:case Qh:case tp:case np:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ep:case mu:case ip:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case op:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ap:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case up:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case pp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case mp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case gp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xp:case _p:case yp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sp:case Mp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gu:case wp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kR(n){switch(n){case di:case RS:return{byteLength:1,components:1};case nl:case PS:case ar:return{byteLength:2,components:1};case lm:case cm:return{byteLength:2,components:4};case or:case am:case tr:return{byteLength:4,components:1};case DS:case LS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sm}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function YS(){let n=null,e=!1,t=null,r=null;function o(a,c){r=n.requestAnimationFrame(o),t(a,c)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function BR(n){const e=new WeakMap;function t(u,d){const h=u.array,m=u.usage,v=h.byteLength,p=n.createBuffer();n.bindBuffer(d,p),n.bufferData(d,h,m),u.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:v}}function r(u,d,h){const m=d.array,v=d.updateRanges;if(n.bindBuffer(h,u),v.length===0)n.bufferSubData(h,0,m);else{v.sort((y,M)=>y.start-M.start);let p=0;for(let y=1;y<v.length;y++){const M=v[p],A=v[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++p,v[p]=A)}v.length=p+1;for(let y=0,M=v.length;y<M;y++){const A=v[y];n.bufferSubData(h,A.start*m.BYTES_PER_ELEMENT,m,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,d),h.version=u.version}}return{get:o,remove:a,update:c}}var zR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$R=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gP="gl_FragColor = linearToOutputTexel( gl_FragColor );",vP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_P=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,SP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,LP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,NP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HP=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,GP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$P=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,g2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,w2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,E2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mt={alphahash_fragment:zR,alphahash_pars_fragment:VR,alphamap_fragment:HR,alphamap_pars_fragment:GR,alphatest_fragment:WR,alphatest_pars_fragment:XR,aomap_fragment:jR,aomap_pars_fragment:YR,batching_pars_vertex:$R,batching_vertex:qR,begin_vertex:KR,beginnormal_vertex:ZR,bsdfs:JR,iridescence_fragment:QR,bumpmap_pars_fragment:eP,clipping_planes_fragment:tP,clipping_planes_pars_fragment:nP,clipping_planes_pars_vertex:iP,clipping_planes_vertex:rP,color_fragment:sP,color_pars_fragment:oP,color_pars_vertex:aP,color_vertex:lP,common:cP,cube_uv_reflection_fragment:uP,defaultnormal_vertex:fP,displacementmap_pars_vertex:dP,displacementmap_vertex:hP,emissivemap_fragment:pP,emissivemap_pars_fragment:mP,colorspace_fragment:gP,colorspace_pars_fragment:vP,envmap_fragment:xP,envmap_common_pars_fragment:_P,envmap_pars_fragment:yP,envmap_pars_vertex:SP,envmap_physical_pars_fragment:LP,envmap_vertex:MP,fog_vertex:wP,fog_pars_vertex:EP,fog_fragment:TP,fog_pars_fragment:AP,gradientmap_pars_fragment:bP,lightmap_pars_fragment:CP,lights_lambert_fragment:RP,lights_lambert_pars_fragment:PP,lights_pars_begin:DP,lights_toon_fragment:NP,lights_toon_pars_fragment:IP,lights_phong_fragment:FP,lights_phong_pars_fragment:UP,lights_physical_fragment:OP,lights_physical_pars_fragment:kP,lights_fragment_begin:BP,lights_fragment_maps:zP,lights_fragment_end:VP,lightprobes_pars_fragment:HP,logdepthbuf_fragment:GP,logdepthbuf_pars_fragment:WP,logdepthbuf_pars_vertex:XP,logdepthbuf_vertex:jP,map_fragment:YP,map_pars_fragment:$P,map_particle_fragment:qP,map_particle_pars_fragment:KP,metalnessmap_fragment:ZP,metalnessmap_pars_fragment:JP,morphinstance_vertex:QP,morphcolor_vertex:e2,morphnormal_vertex:t2,morphtarget_pars_vertex:n2,morphtarget_vertex:i2,normal_fragment_begin:r2,normal_fragment_maps:s2,normal_pars_fragment:o2,normal_pars_vertex:a2,normal_vertex:l2,normalmap_pars_fragment:c2,clearcoat_normal_fragment_begin:u2,clearcoat_normal_fragment_maps:f2,clearcoat_pars_fragment:d2,iridescence_pars_fragment:h2,opaque_fragment:p2,packing:m2,premultiplied_alpha_fragment:g2,project_vertex:v2,dithering_fragment:x2,dithering_pars_fragment:_2,roughnessmap_fragment:y2,roughnessmap_pars_fragment:S2,shadowmap_pars_fragment:M2,shadowmap_pars_vertex:w2,shadowmap_vertex:E2,shadowmask_pars_fragment:T2,skinbase_vertex:A2,skinning_pars_vertex:b2,skinning_vertex:C2,skinnormal_vertex:R2,specularmap_fragment:P2,specularmap_pars_fragment:D2,tonemapping_fragment:L2,tonemapping_pars_fragment:N2,transmission_fragment:I2,transmission_pars_fragment:F2,uv_pars_fragment:U2,uv_pars_vertex:O2,uv_vertex:k2,worldpos_vertex:B2,background_vert:z2,background_frag:V2,backgroundCube_vert:H2,backgroundCube_frag:G2,cube_vert:W2,cube_frag:X2,depth_vert:j2,depth_frag:Y2,distance_vert:$2,distance_frag:q2,equirect_vert:K2,equirect_frag:Z2,linedashed_vert:J2,linedashed_frag:Q2,meshbasic_vert:e3,meshbasic_frag:t3,meshlambert_vert:n3,meshlambert_frag:i3,meshmatcap_vert:r3,meshmatcap_frag:s3,meshnormal_vert:o3,meshnormal_frag:a3,meshphong_vert:l3,meshphong_frag:c3,meshphysical_vert:u3,meshphysical_frag:f3,meshtoon_vert:d3,meshtoon_frag:h3,points_vert:p3,points_frag:m3,shadow_vert:g3,shadow_frag:v3,sprite_vert:x3,sprite_frag:_3},je={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},er={basic:{uniforms:Xn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Xn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Xn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Xn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Xn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Xn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Xn([je.points,je.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Xn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Xn([je.common,je.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Xn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Xn([je.sprite,je.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Xn([je.common,je.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Xn([je.lights,je.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};er.physical={uniforms:Xn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const zc={r:0,b:0,g:0},y3=new cn,$S=new xt;$S.set(-1,0,0,0,1,0,0,0,1);function S3(n,e,t,r,o,a){const c=new Lt(0);let u=o===!0?0:1,d,h,m=null,v=0,p=null;function y(C){let F=C.isScene===!0?C.background:null;if(F&&F.isTexture){const b=C.backgroundBlurriness>0;F=e.get(F,b)}return F}function M(C){let F=!1;const b=y(C);b===null?x(c,u):b&&b.isColor&&(x(b,1),F=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(C,F){const b=y(F);b&&(b.isCubeTexture||b.mapping===Du)?(h===void 0&&(h=new Dt(new dl(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:jo(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(y3.makeRotationFromEuler(F.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply($S),h.material.toneMapped=Pt.getTransfer(b.colorSpace)!==zt,(m!==b||v!==b.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,m=b,v=b.version,p=n.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new Dt(new hl(2,2),new lr({name:"BackgroundMaterial",uniforms:jo(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,d.material.toneMapped=Pt.getTransfer(b.colorSpace)!==zt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(m!==b||v!==b.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,m=b,v=b.version,p=n.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function x(C,F){C.getRGB(zc,WS(n)),t.buffers.color.setClear(zc.r,zc.g,zc.b,F,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,F=1){c.set(C),u=F,x(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(C){u=C,x(c,u)},render:M,addToRenderList:A,dispose:_}}function M3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=p(null);let a=o,c=!1;function u(V,W,te,X,ee){let ne=!1;const K=v(V,X,te,W);a!==K&&(a=K,h(a.object)),ne=y(V,X,te,ee),ne&&M(V,X,te,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,b(V,W,te,X),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function d(){return n.createVertexArray()}function h(V){return n.bindVertexArray(V)}function m(V){return n.deleteVertexArray(V)}function v(V,W,te,X){const ee=X.wireframe===!0;let ne=r[W.id];ne===void 0&&(ne={},r[W.id]=ne);const K=V.isInstancedMesh===!0?V.id:0;let j=ne[K];j===void 0&&(j={},ne[K]=j);let Y=j[te.id];Y===void 0&&(Y={},j[te.id]=Y);let L=Y[ee];return L===void 0&&(L=p(d()),Y[ee]=L),L}function p(V){const W=[],te=[],X=[];for(let ee=0;ee<t;ee++)W[ee]=0,te[ee]=0,X[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:te,attributeDivisors:X,object:V,attributes:{},index:null}}function y(V,W,te,X){const ee=a.attributes,ne=W.attributes;let K=0;const j=te.getAttributes();for(const Y in j)if(j[Y].location>=0){const w=ee[Y];let H=ne[Y];if(H===void 0&&(Y==="instanceMatrix"&&V.instanceMatrix&&(H=V.instanceMatrix),Y==="instanceColor"&&V.instanceColor&&(H=V.instanceColor)),w===void 0||w.attribute!==H||H&&w.data!==H.data)return!0;K++}return a.attributesNum!==K||a.index!==X}function M(V,W,te,X){const ee={},ne=W.attributes;let K=0;const j=te.getAttributes();for(const Y in j)if(j[Y].location>=0){let w=ne[Y];w===void 0&&(Y==="instanceMatrix"&&V.instanceMatrix&&(w=V.instanceMatrix),Y==="instanceColor"&&V.instanceColor&&(w=V.instanceColor));const H={};H.attribute=w,w&&w.data&&(H.data=w.data),ee[Y]=H,K++}a.attributes=ee,a.attributesNum=K,a.index=X}function A(){const V=a.newAttributes;for(let W=0,te=V.length;W<te;W++)V[W]=0}function x(V){_(V,0)}function _(V,W){const te=a.newAttributes,X=a.enabledAttributes,ee=a.attributeDivisors;te[V]=1,X[V]===0&&(n.enableVertexAttribArray(V),X[V]=1),ee[V]!==W&&(n.vertexAttribDivisor(V,W),ee[V]=W)}function C(){const V=a.newAttributes,W=a.enabledAttributes;for(let te=0,X=W.length;te<X;te++)W[te]!==V[te]&&(n.disableVertexAttribArray(te),W[te]=0)}function F(V,W,te,X,ee,ne,K){K===!0?n.vertexAttribIPointer(V,W,te,ee,ne):n.vertexAttribPointer(V,W,te,X,ee,ne)}function b(V,W,te,X){A();const ee=X.attributes,ne=te.getAttributes(),K=W.defaultAttributeValues;for(const j in ne){const Y=ne[j];if(Y.location>=0){let L=ee[j];if(L===void 0&&(j==="instanceMatrix"&&V.instanceMatrix&&(L=V.instanceMatrix),j==="instanceColor"&&V.instanceColor&&(L=V.instanceColor)),L!==void 0){const w=L.normalized,H=L.itemSize,fe=e.get(L);if(fe===void 0)continue;const Se=fe.buffer,Ee=fe.type,Te=fe.bytesPerElement,q=Ee===n.INT||Ee===n.UNSIGNED_INT||L.gpuType===am;if(L.isInterleavedBufferAttribute){const ie=L.data,ye=ie.stride,ke=L.offset;if(ie.isInstancedInterleavedBuffer){for(let Re=0;Re<Y.locationSize;Re++)_(Y.location+Re,ie.meshPerAttribute);V.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Re=0;Re<Y.locationSize;Re++)x(Y.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Re=0;Re<Y.locationSize;Re++)F(Y.location+Re,H/Y.locationSize,Ee,w,ye*Te,(ke+H/Y.locationSize*Re)*Te,q)}else{if(L.isInstancedBufferAttribute){for(let ie=0;ie<Y.locationSize;ie++)_(Y.location+ie,L.meshPerAttribute);V.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ie=0;ie<Y.locationSize;ie++)x(Y.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let ie=0;ie<Y.locationSize;ie++)F(Y.location+ie,H/Y.locationSize,Ee,w,H*Te,H/Y.locationSize*ie*Te,q)}}else if(K!==void 0){const w=K[j];if(w!==void 0)switch(w.length){case 2:n.vertexAttrib2fv(Y.location,w);break;case 3:n.vertexAttrib3fv(Y.location,w);break;case 4:n.vertexAttrib4fv(Y.location,w);break;default:n.vertexAttrib1fv(Y.location,w)}}}}C()}function D(){I();for(const V in r){const W=r[V];for(const te in W){const X=W[te];for(const ee in X){const ne=X[ee];for(const K in ne)m(ne[K].object),delete ne[K];delete X[ee]}}delete r[V]}}function N(V){if(r[V.id]===void 0)return;const W=r[V.id];for(const te in W){const X=W[te];for(const ee in X){const ne=X[ee];for(const K in ne)m(ne[K].object),delete ne[K];delete X[ee]}}delete r[V.id]}function O(V){for(const W in r){const te=r[W];for(const X in te){const ee=te[X];if(ee[V.id]===void 0)continue;const ne=ee[V.id];for(const K in ne)m(ne[K].object),delete ne[K];delete ee[V.id]}}}function E(V){for(const W in r){const te=r[W],X=V.isInstancedMesh===!0?V.id:0,ee=te[X];if(ee!==void 0){for(const ne in ee){const K=ee[ne];for(const j in K)m(K[j].object),delete K[j];delete ee[ne]}delete te[X],Object.keys(te).length===0&&delete r[W]}}}function I(){U(),c=!0,a!==o&&(a=o,h(a.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:I,resetDefaultState:U,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:x,disableUnusedAttributes:C}}function w3(n,e,t){let r;function o(d){r=d}function a(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,m){m!==0&&(n.drawArraysInstanced(r,d,h,m),t.update(h,r,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,m);let p=0;for(let y=0;y<m;y++)p+=h[y];t.update(p,r,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function E3(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==Gi&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const E=O===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==di&&O!==tr&&!E&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function d(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(dt("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),F=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),N=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:p,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:C,maxVaryings:F,maxFragmentUniforms:b,maxSamples:D,samples:N}}function T3(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new fs,u=new xt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,p){const y=v.length!==0||p||r!==0||o;return o=p,r=v.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,p){t=m(v,p,0)},this.setState=function(v,p,y){const M=v.clippingPlanes,A=v.clipIntersection,x=v.clipShadows,_=n.get(v);if(!o||M===null||M.length===0||a&&!x)a?m(null):h();else{const C=a?0:r,F=C*4;let b=_.clippingState||null;d.value=b,b=m(M,p,F,y);for(let D=0;D!==F;++D)b[D]=t[D];_.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(v,p,y,M){const A=v!==null?v.length:0;let x=null;if(A!==0){if(x=d.value,M!==!0||x===null){const _=y+A*4,C=p.matrixWorldInverse;u.getNormalMatrix(C),(x===null||x.length<_)&&(x=new Float32Array(_));for(let F=0,b=y;F!==A;++F,b+=4)c.copy(v[F]).applyMatrix4(C,u),c.normal.toArray(x,b),x[b+3]=c.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}const zo=4,A3=6,b3=20,C3=256,Va=new ym,Wx=new Lt;let ah=null,lh=0,ch=0,uh=!1;const R3=new le,Bs=new le;class Xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:u=R3}=a;ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$x(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,lh,ch),this._renderer.xr.enabled=uh,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ar,format:Gi,colorSpace:vu,depthBuffer:!1},o=jx(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jx(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=P3(a)),this._blurMaterial=L3(a,e,t),this._ggxMaterial=D3(a,e,t)}return o}_compileMaterial(e){const t=new Dt(new ni,e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,r,o,a){const d=new fi(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,p=v.autoClear,y=v.toneMapping;v.getClearColor(Wx),v.toneMapping=rr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dt(new dl,new ds({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,x=A.material;let _=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,_=!0):(x.color.copy(Wx),_=!0);for(let F=0;F<6;F++){const b=F%3;b===0?(d.up.set(0,h[F],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+m[F],a.y,a.z)):b===1?(d.up.set(0,0,h[F]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+m[F],a.z)):(d.up.set(0,h[F],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+m[F]));const D=this._cubeSize;No(o,b*D,F>2?D:0,D,D),v.setRenderTarget(o),_&&v.render(A,d),v.render(e,d)}v.toneMapping=y,v.autoClear=p,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===qs||e.mapping===Xo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=$x()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yx());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;No(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,Va)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),p=h*1.25,y=v*p,{_lodMax:M}=this,A=this._sizeLods[r],x=3*A*(r>M-zo?r-M+zo:0),_=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-t,No(a,x,_,3*A,2*A),o.setRenderTarget(a),o.render(u,Va),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-r,No(e,x,_,3*A,2*A),o.setRenderTarget(e),o.render(u,Va)}_blur(e,t,r,o){const a=this._pingPongRenderTarget,c=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,r,c),this._blurPass(a,e,r,r,c)}_blurPass(e,t,r,o,a){const c=this._renderer,u=this._blurMaterial,d=this._lodMeshes[o];d.material=u;const h=u.uniforms;h.envMap.value=e.texture,h.sigma.value=a,h.mipInt.value=this._lodMax-r;const m=this._sizeLods[o],v=3*m*(o>this._lodMax-zo?o-this._lodMax+zo:0),p=4*(this._cubeSize-m);No(t,v,p,3*m,2*m),c.setRenderTarget(t),c.render(d,Va)}}function P3(n){const e=[],t=[];let r=n;const o=n-zo+1+A3;for(let a=0;a<o;a++){const c=Math.pow(2,r);e.push(c);const u=1/(c-2),d=-u,h=1+u,m=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,p=6,y=3,M=new Float32Array(y*p*v),A=new Float32Array(y*p*v);for(let _=0;_<v;_++){const C=_%3*2/3-1,F=_>2?0:-1,b=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];M.set(b,y*p*_);for(let D=0;D<p;D++){const N=m[D*2]*2-1,O=m[D*2+1]*2-1;_===0?Bs.set(1,O,N):_===1?Bs.set(-N,1,-O):_===2?Bs.set(-N,O,1):_===3?Bs.set(-1,O,-N):_===4?Bs.set(-N,-1,O):Bs.set(N,O,-1),Bs.toArray(A,(_*p+D)*y)}}const x=new ni;x.setAttribute("position",new Fr(M,y)),x.setAttribute("outputDirection",new Fr(A,y)),t.push(new Dt(x,null)),r>zo&&r--}return{lodMeshes:t,sizeLods:e}}function jx(n,e,t){const r=new Xi(n,e,t);return r.texture.mapping=Du,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function No(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function D3(n,e,t){return new lr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function L3(n,e,t){return new lr({name:"SphericalGaussianBlur",defines:{SAMPLES:b3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Yx(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function $x(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Lu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class qS extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new HS(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new dl(5,5,5),a=new lr({name:"CubemapFromEquirect",uniforms:jo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:Nr});a.uniforms.tEquirect.value=t;const c=new Dt(o,a),u=t.minFilter;return t.minFilter===Ws&&(t.minFilter=zn),new FR(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function N3(n){let e=new WeakMap,t=new WeakMap,r=null;function o(p,y=!1){return p==null?null:y?c(p):a(p)}function a(p){if(p&&p.isTexture){const y=p.mapping;if(y===Nd||y===Id)if(e.has(p)){const M=e.get(p).texture;return u(M,p.mapping)}else{const M=p.image;if(M&&M.height>0){const A=new qS(M.height);return A.fromEquirectangularTexture(n,p),e.set(p,A),p.addEventListener("dispose",h),u(A.texture,p.mapping)}else return null}}return p}function c(p){if(p&&p.isTexture){const y=p.mapping,M=y===Nd||y===Id,A=y===qs||y===Xo;if(M||A){let x=t.get(p);const _=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return r===null&&(r=new Xx(n)),x=M?r.fromEquirectangular(p,x):r.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),x.texture;if(x!==void 0)return x.texture;{const C=p.image;return M&&C&&C.height>0||A&&C&&d(C)?(r===null&&(r=new Xx(n)),x=M?r.fromEquirectangular(p):r.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),p.addEventListener("dispose",m),x.texture):null}}}return p}function u(p,y){return y===Nd?p.mapping=qs:y===Id&&(p.mapping=Xo),p}function d(p){let y=0;const M=6;for(let A=0;A<M;A++)p[A]!==void 0&&y++;return y===M}function h(p){const y=p.target;y.removeEventListener("dispose",h);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function m(p){const y=p.target;y.removeEventListener("dispose",m);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function I3(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Vo("WebGLRenderer: "+r+" extension not supported."),o}}}function F3(n,e,t,r){const o={},a=new WeakMap;function c(v){const p=v.target;p.index!==null&&e.remove(p.index);for(const M in p.attributes)e.remove(p.attributes[M]);p.removeEventListener("dispose",c),delete o[p.id];const y=a.get(p);y&&(e.remove(y),a.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function u(v,p){return o[p.id]===!0||(p.addEventListener("dispose",c),o[p.id]=!0,t.memory.geometries++),p}function d(v){const p=v.attributes;for(const y in p)e.update(p[y],n.ARRAY_BUFFER)}function h(v){const p=[],y=v.index,M=v.attributes.position;let A=0;if(M===void 0)return;if(y!==null){const C=y.array;A=y.version;for(let F=0,b=C.length;F<b;F+=3){const D=C[F+0],N=C[F+1],O=C[F+2];p.push(D,N,N,O,O,D)}}else{const C=M.array;A=M.version;for(let F=0,b=C.length/3-1;F<b;F+=3){const D=F+0,N=F+1,O=F+2;p.push(D,N,N,O,O,D)}}const x=new(M.count>=65535?VS:zS)(p,1);x.version=A;const _=a.get(v);_&&e.remove(_),a.set(v,x)}function m(v){const p=a.get(v);if(p){const y=v.index;y!==null&&p.version<y.version&&h(v)}else h(v);return a.get(v)}return{get:u,update:d,getWireframeAttribute:m}}function U3(n,e,t){let r;function o(v){r=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function d(v,p){n.drawElements(r,p,a,v*c),t.update(p,r,1)}function h(v,p,y){y!==0&&(n.drawElementsInstanced(r,p,a,v*c,y),t.update(p,r,y))}function m(v,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,a,v,0,y);let A=0;for(let x=0;x<y;x++)A+=p[x];t.update(A,r,1)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=m}function O3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Ot("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function k3(n,e,t){const r=new WeakMap,o=new sn;function a(c,u,d){const h=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let p=r.get(u);if(p===void 0||p.count!==v){let U=function(){E.dispose(),r.delete(u),u.removeEventListener("dispose",U)};var y=U;p!==void 0&&p.texture.dispose();const M=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let b=0;M===!0&&(b=1),A===!0&&(b=2),x===!0&&(b=3);let D=u.attributes.position.count*b,N=1;D>e.maxTextureSize&&(N=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*N*4*v),E=new OS(O,D,N,v);E.type=tr,E.needsUpdate=!0;const I=b*4;for(let V=0;V<v;V++){const W=_[V],te=C[V],X=F[V],ee=D*N*4*V;for(let ne=0;ne<W.count;ne++){const K=ne*I;M===!0&&(o.fromBufferAttribute(W,ne),O[ee+K+0]=o.x,O[ee+K+1]=o.y,O[ee+K+2]=o.z,O[ee+K+3]=0),A===!0&&(o.fromBufferAttribute(te,ne),O[ee+K+4]=o.x,O[ee+K+5]=o.y,O[ee+K+6]=o.z,O[ee+K+7]=0),x===!0&&(o.fromBufferAttribute(X,ne),O[ee+K+8]=o.x,O[ee+K+9]=o.y,O[ee+K+10]=o.z,O[ee+K+11]=X.itemSize===4?o.w:1)}}p={count:v,texture:E,size:new lt(D,N)},r.set(u,p),u.addEventListener("dispose",U)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const A=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:a}}function B3(n,e,t,r,o){let a=new WeakMap;function c(h){const m=o.render.frame,v=h.geometry,p=e.get(h,v);if(a.get(p)!==m&&(e.update(p),a.set(p,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return p}function u(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:u}}const z3={[MS]:"LINEAR_TONE_MAPPING",[wS]:"REINHARD_TONE_MAPPING",[ES]:"CINEON_TONE_MAPPING",[om]:"ACES_FILMIC_TONE_MAPPING",[AS]:"AGX_TONE_MAPPING",[bS]:"NEUTRAL_TONE_MAPPING",[TS]:"CUSTOM_TONE_MAPPING"};function V3(n,e,t,r,o,a){const c=new Xi(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let u=null,d=null;const h=new ni;h.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new en([0,2,0,0,2,0],2));const m=new CR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Dt(h,m),p=new ym(-1,1,1,-1,0,1);let y=null,M=null,A=!1,x,_=null,C=[],F=!1;this.setSize=function(b,D){c.setSize(b,D),u!==null&&u.setSize(b,D),d!==null&&d.setSize(b,D);for(let N=0;N<C.length;N++){const O=C[N];O.setSize&&O.setSize(b,D)}},this.setEffects=function(b){C=b,F=C.length>0&&C[0].isRenderPass===!0;const D=c.width,N=c.height;C.length>0&&u===null&&(u=new Xi(D,N,{type:ar,depthBuffer:!1,stencilBuffer:!1}),d=new Xi(D,N,{type:ar,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<C.length;O++){const E=C[O];E.setSize&&E.setSize(D,N)}},this.begin=function(b,D){if(A||b.toneMapping===rr&&C.length===0)return!1;if(_=D,D!==null){const N=D.width,O=D.height;(c.width!==N||c.height!==O)&&this.setSize(N,O)}return F===!1&&b.setRenderTarget(c),x=b.toneMapping,b.toneMapping=rr,!0},this.hasRenderPass=function(){return F},this.end=function(b,D){b.toneMapping=x,A=!0;let N=c,O=u;for(let E=0;E<C.length;E++){const I=C[E];I.enabled!==!1&&(I.render(b,O,N,D),I.needsSwap!==!1&&(N=O,O=O===u?d:u))}if(y!==b.outputColorSpace||M!==b.toneMapping){y=b.outputColorSpace,M=b.toneMapping,m.defines={},Pt.getTransfer(y)===zt&&(m.defines.SRGB_TRANSFER="");const E=z3[M];E&&(m.defines[E]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,b.setRenderTarget(_),b.render(v,p),_=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),d!==null&&d.dispose(),h.dispose(),m.dispose()}}const KS=new Vn,Ap=new sl(1,1),ZS=new OS,JS=new iR,QS=new HS,qx=[],Kx=[],Zx=new Float32Array(16),Jx=new Float32Array(9),Qx=new Float32Array(4);function Jo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=qx[o];if(a===void 0&&(a=new Float32Array(o),qx[o]=a),e!==0){r.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function Sn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Mn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Nu(n,e){let t=Kx[e];t===void 0&&(t=new Int32Array(e),Kx[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function H3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function G3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;n.uniform2fv(this.addr,e),Mn(t,e)}}function W3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;n.uniform3fv(this.addr,e),Mn(t,e)}}function X3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;n.uniform4fv(this.addr,e),Mn(t,e)}}function j3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;Qx.set(r),n.uniformMatrix2fv(this.addr,!1,Qx),Mn(t,r)}}function Y3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;Jx.set(r),n.uniformMatrix3fv(this.addr,!1,Jx),Mn(t,r)}}function $3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;Zx.set(r),n.uniformMatrix4fv(this.addr,!1,Zx),Mn(t,r)}}function q3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function K3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;n.uniform2iv(this.addr,e),Mn(t,e)}}function Z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;n.uniform3iv(this.addr,e),Mn(t,e)}}function J3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;n.uniform4iv(this.addr,e),Mn(t,e)}}function Q3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;n.uniform2uiv(this.addr,e),Mn(t,e)}}function tD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;n.uniform3uiv(this.addr,e),Mn(t,e)}}function nD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;n.uniform4uiv(this.addr,e),Mn(t,e)}}function iD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Ap.compareFunction=t.isReversedDepthBuffer()?pm:hm,a=Ap):a=KS,t.setTexture2D(e||a,o)}function rD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||JS,o)}function sD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||QS,o)}function oD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||ZS,o)}function aD(n){switch(n){case 5126:return H3;case 35664:return G3;case 35665:return W3;case 35666:return X3;case 35674:return j3;case 35675:return Y3;case 35676:return $3;case 5124:case 35670:return q3;case 35667:case 35671:return K3;case 35668:case 35672:return Z3;case 35669:case 35673:return J3;case 5125:return Q3;case 36294:return eD;case 36295:return tD;case 36296:return nD;case 35678:case 36198:case 36298:case 36306:case 35682:return iD;case 35679:case 36299:case 36307:return rD;case 35680:case 36300:case 36308:case 36293:return sD;case 36289:case 36303:case 36311:case 36292:return oD}}function lD(n,e){n.uniform1fv(this.addr,e)}function cD(n,e){const t=Jo(e,this.size,2);n.uniform2fv(this.addr,t)}function uD(n,e){const t=Jo(e,this.size,3);n.uniform3fv(this.addr,t)}function fD(n,e){const t=Jo(e,this.size,4);n.uniform4fv(this.addr,t)}function dD(n,e){const t=Jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hD(n,e){const t=Jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pD(n,e){const t=Jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mD(n,e){n.uniform1iv(this.addr,e)}function gD(n,e){n.uniform2iv(this.addr,e)}function vD(n,e){n.uniform3iv(this.addr,e)}function xD(n,e){n.uniform4iv(this.addr,e)}function _D(n,e){n.uniform1uiv(this.addr,e)}function yD(n,e){n.uniform2uiv(this.addr,e)}function SD(n,e){n.uniform3uiv(this.addr,e)}function MD(n,e){n.uniform4uiv(this.addr,e)}function wD(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);Sn(r,a)||(n.uniform1iv(this.addr,a),Mn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=Ap:c=KS;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function ED(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);Sn(r,a)||(n.uniform1iv(this.addr,a),Mn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||JS,a[c])}function TD(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);Sn(r,a)||(n.uniform1iv(this.addr,a),Mn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||QS,a[c])}function AD(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);Sn(r,a)||(n.uniform1iv(this.addr,a),Mn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||ZS,a[c])}function bD(n){switch(n){case 5126:return lD;case 35664:return cD;case 35665:return uD;case 35666:return fD;case 35674:return dD;case 35675:return hD;case 35676:return pD;case 5124:case 35670:return mD;case 35667:case 35671:return gD;case 35668:case 35672:return vD;case 35669:case 35673:return xD;case 5125:return _D;case 36294:return yD;case 36295:return SD;case 36296:return MD;case 35678:case 36198:case 36298:case 36306:case 35682:return wD;case 35679:case 36299:case 36307:return ED;case 35680:case 36300:case 36308:case 36293:return TD;case 36289:case 36303:case 36311:case 36292:return AD}}class CD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=aD(t.type)}}class RD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bD(t.type)}}class PD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],r)}}}const fh=/(\w+)(\])?(\[|\.)?/g;function e_(n,e){n.seq.push(e),n.map[e.id]=e}function DD(n,e,t){const r=n.name,o=r.length;for(fh.lastIndex=0;;){const a=fh.exec(r),c=fh.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===o){e_(t,h===void 0?new CD(u,n,e):new RD(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new PD(u),e_(t,v)),t=v}}}class tu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);DD(u,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=r[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function t_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const LD=37297;let ND=0;function ID(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const n_=new xt;function FD(n){Pt._getMatrix(n_,Pt.workingColorSpace,n);const e=`mat3( ${n_.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(n)){case xu:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function i_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+ID(n.getShaderSource(e),u)}else return a}function UD(n,e){const t=FD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OD={[MS]:"Linear",[wS]:"Reinhard",[ES]:"Cineon",[om]:"ACESFilmic",[AS]:"AgX",[bS]:"Neutral",[TS]:"Custom"};function kD(n,e){const t=OD[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vc=new le;function BD(){Pt.getLuminanceCoefficients(Vc);const n=Vc.x.toFixed(4),e=Vc.y.toFixed(4),t=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function VD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function HD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Xa(n){return n!==""}function r_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GD=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(n){return n.replace(GD,XD)}const WD=new Map;function XD(n,e){let t=Mt[e];if(t===void 0){const r=WD.get(e);if(r!==void 0)t=Mt[r],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bp(t)}const jD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o_(n){return n.replace(jD,YD)}function YD(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function a_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const $D={[Kc]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function qD(n){return $D[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KD={[qs]:"ENVMAP_TYPE_CUBE",[Xo]:"ENVMAP_TYPE_CUBE",[Du]:"ENVMAP_TYPE_CUBE_UV"};function ZD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":KD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const JD={[Xo]:"ENVMAP_MODE_REFRACTION"};function QD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":JD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eL={[SS]:"ENVMAP_BLENDING_MULTIPLY",[IC]:"ENVMAP_BLENDING_MIX",[FC]:"ENVMAP_BLENDING_ADD"};function tL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":eL[n.combine]||"ENVMAP_BLENDING_NONE"}function nL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function iL(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=qD(t),h=ZD(t),m=QD(t),v=tL(t),p=nL(t),y=zD(t),M=VD(a),A=o.createProgram();let x,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xa).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xa).join(`
`),_.length>0&&(_+=`
`)):(x=[a_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),_=[a_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?Mt.tonemapping_pars_fragment:"",t.toneMapping!==rr?kD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,UD("linearToOutputTexel",t.outputColorSpace),BD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),c=bp(c),c=r_(c,t),c=s_(c,t),u=bp(u),u=r_(u,t),u=s_(u,t),c=o_(c),u=o_(u),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===_x?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_x?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const F=C+x+c,b=C+_+u,D=t_(o,o.VERTEX_SHADER,F),N=t_(o,o.FRAGMENT_SHADER,b);o.attachShader(A,D),o.attachShader(A,N),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(V){if(n.debug.checkShaderErrors){const W=o.getProgramInfoLog(A)||"",te=o.getShaderInfoLog(D)||"",X=o.getShaderInfoLog(N)||"",ee=W.trim(),ne=te.trim(),K=X.trim();let j=!0,Y=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,A,D,N);else{const L=i_(o,D,"vertex"),w=i_(o,N,"fragment");Ot("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ee+`
`+L+`
`+w)}else ee!==""?dt("WebGLProgram: Program Info Log:",ee):(ne===""||K==="")&&(Y=!1);Y&&(V.diagnostics={runnable:j,programLog:ee,vertexShader:{log:ne,prefix:x},fragmentShader:{log:K,prefix:_}})}o.deleteShader(D),o.deleteShader(N),E=new tu(o,A),I=HD(o,A)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let I;this.getAttributes=function(){return I===void 0&&O(this),I};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=o.getProgramParameter(A,LD)),U},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ND++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=N,this}let rL=0;class sL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new oL(e),t.set(e,r)),r}}class oL{constructor(e){this.id=rL++,this.code=e,this.usedTimes=0}}function aL(n){return n===Ks||n===mu||n===gu}function lL(n,e,t,r,o,a){const c=new kS,u=new sL,d=new Set,h=[],m=new Map,v=r.logarithmicDepthBuffer;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return d.add(E),E===0?"uv":`uv${E}`}function A(E,I,U,V,W,te){const X=V.fog,ee=W.geometry,ne=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,K=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,j=e.get(E.envMap||ne,K),Y=j&&j.mapping===Du?j.image.height:null,L=y[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&dt("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const w=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,H=w!==void 0?w.length:0;let fe=0;ee.morphAttributes.position!==void 0&&(fe=1),ee.morphAttributes.normal!==void 0&&(fe=2),ee.morphAttributes.color!==void 0&&(fe=3);let Se,Ee,Te,q;if(L){const vt=er[L];Se=vt.vertexShader,Ee=vt.fragmentShader}else{Se=E.vertexShader,Ee=E.fragmentShader;const vt=u.getVertexShaderStage(E),ht=u.getFragmentShaderStage(E);u.update(E,vt,ht),Te=vt.id,q=ht.id}const ie=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),ke=W.isInstancedMesh===!0,Re=W.isBatchedMesh===!0,Ze=!!E.map,gt=!!E.matcap,He=!!j,ot=!!E.aoMap,pt=!!E.lightMap,at=!!E.bumpMap&&E.wireframe===!1,yt=!!E.normalMap,Nt=!!E.displacementMap,bt=!!E.emissiveMap,Et=!!E.metalnessMap,Gt=!!E.roughnessMap,J=E.anisotropy>0,Kt=E.clearcoat>0,Tt=E.dispersion>0,k=E.retroreflectivity>0,T=E.iridescence>0,re=E.sheen>0,ce=E.transmission>0,me=J&&!!E.anisotropyMap,Pe=Kt&&!!E.clearcoatMap,Ue=Kt&&!!E.clearcoatNormalMap,ge=Kt&&!!E.clearcoatRoughnessMap,xe=T&&!!E.iridescenceMap,Be=T&&!!E.iridescenceThicknessMap,nt=re&&!!E.sheenColorMap,ze=re&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,ve=!!E.specularColorMap,Ie=!!E.specularIntensityMap,Le=ce&&!!E.transmissionMap,G=ce&&!!E.thicknessMap,be=!!E.gradientMap,de=!!E.alphaMap,Me=E.alphaTest>0,Ne=!!E.alphaHash,_e=!!E.extensions;let We=rr;E.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(We=n.toneMapping);const Ye={shaderID:L,shaderType:E.type,shaderName:E.name,vertexShader:Se,fragmentShader:Ee,defines:E.defines,customVertexShaderID:Te,customFragmentShaderID:q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Re,batchingColor:Re&&W._colorsTexture!==null,instancing:ke,instancingColor:ke&&W.instanceColor!==null,instancingMorph:ke&&W.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ze,matcap:gt,envMap:He,envMapMode:He&&j.mapping,envMapCubeUVHeight:Y,aoMap:ot,lightMap:pt,bumpMap:at,normalMap:yt,displacementMap:Nt,emissiveMap:bt,normalMapObjectSpace:yt&&E.normalMapType===kC,normalMapTangentSpace:yt&&E.normalMapType===Ep,packedNormalMap:yt&&E.normalMapType===Ep&&aL(E.normalMap.format),metalnessMap:Et,roughnessMap:Gt,anisotropy:J,anisotropyMap:me,clearcoat:Kt,clearcoatMap:Pe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ge,dispersion:Tt,retroreflection:k,iridescence:T,iridescenceMap:xe,iridescenceThicknessMap:Be,sheen:re,sheenColorMap:nt,sheenRoughnessMap:ze,specularMap:Oe,specularColorMap:ve,specularIntensityMap:Ie,transmission:ce,transmissionMap:Le,thicknessMap:G,gradientMap:be,opaque:E.transparent===!1&&E.blending===Ka&&E.alphaToCoverage===!1,alphaMap:de,alphaTest:Me,alphaHash:Ne,combine:E.combine,mapUv:Ze&&M(E.map.channel),aoMapUv:ot&&M(E.aoMap.channel),lightMapUv:pt&&M(E.lightMap.channel),bumpMapUv:at&&M(E.bumpMap.channel),normalMapUv:yt&&M(E.normalMap.channel),displacementMapUv:Nt&&M(E.displacementMap.channel),emissiveMapUv:bt&&M(E.emissiveMap.channel),metalnessMapUv:Et&&M(E.metalnessMap.channel),roughnessMapUv:Gt&&M(E.roughnessMap.channel),anisotropyMapUv:me&&M(E.anisotropyMap.channel),clearcoatMapUv:Pe&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(E.sheenRoughnessMap.channel),specularMapUv:Oe&&M(E.specularMap.channel),specularColorMapUv:ve&&M(E.specularColorMap.channel),specularIntensityMapUv:Ie&&M(E.specularIntensityMap.channel),transmissionMapUv:Le&&M(E.transmissionMap.channel),thicknessMapUv:G&&M(E.thicknessMap.channel),alphaMapUv:de&&M(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(yt||J),vertexNormals:!!ee.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ee.attributes.uv&&(Ze||de),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ee.attributes.normal===void 0&&yt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ye,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:fe,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:We,decodeVideoTexture:Ze&&E.map.isVideoTexture===!0&&Pt.getTransfer(E.map.colorSpace)===zt,decodeVideoTextureEmissive:bt&&E.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(E.emissiveMap.colorSpace)===zt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Dr,flipSided:E.side===ti,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:_e&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&E.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ye.vertexUv1s=d.has(1),Ye.vertexUv2s=d.has(2),Ye.vertexUv3s=d.has(3),d.clear(),Ye}function x(E){const I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)I.push(U),I.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(_(I,E),C(I,E),I.push(n.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function _(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numSunLights),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numSunLightShadows),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function C(E,I){c.disableAll(),I.instancing&&c.enable(0),I.instancingColor&&c.enable(1),I.instancingMorph&&c.enable(2),I.matcap&&c.enable(3),I.envMap&&c.enable(4),I.normalMapObjectSpace&&c.enable(5),I.normalMapTangentSpace&&c.enable(6),I.clearcoat&&c.enable(7),I.iridescence&&c.enable(8),I.alphaTest&&c.enable(9),I.vertexColors&&c.enable(10),I.vertexAlphas&&c.enable(11),I.vertexUv1s&&c.enable(12),I.vertexUv2s&&c.enable(13),I.vertexUv3s&&c.enable(14),I.vertexTangents&&c.enable(15),I.anisotropy&&c.enable(16),I.alphaHash&&c.enable(17),I.batching&&c.enable(18),I.dispersion&&c.enable(19),I.retroreflection&&c.enable(24),I.batchingColor&&c.enable(20),I.gradientMap&&c.enable(21),I.packedNormalMap&&c.enable(22),I.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.reversedDepthBuffer&&c.enable(4),I.skinning&&c.enable(5),I.morphTargets&&c.enable(6),I.morphNormals&&c.enable(7),I.morphColors&&c.enable(8),I.premultipliedAlpha&&c.enable(9),I.shadowMapEnabled&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.decodeVideoTextureEmissive&&c.enable(20),I.alphaToCoverage&&c.enable(21),I.numLightProbeGrids>0&&c.enable(22),I.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function F(E){const I=y[E.type];let U;if(I){const V=er[I];U=TR.clone(V.uniforms)}else U=E.uniforms;return U}function b(E,I){let U=m.get(I);return U!==void 0?++U.usedTimes:(U=new iL(n,I,E,o),h.push(U),m.set(I,U)),U}function D(E){if(--E.usedTimes===0){const I=h.indexOf(E);h[I]=h[h.length-1],h.pop(),m.delete(E.cacheKey),E.destroy()}}function N(E){u.remove(E)}function O(){u.dispose()}return{getParameters:A,getProgramCacheKey:x,getUniforms:F,acquireProgram:b,releaseProgram:D,releaseShaderCache:N,programs:h,dispose:O}}function cL(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function o(c,u,d){n.get(c)[u]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function uL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function l_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function c_(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(p){let y=0;return p.isInstancedMesh&&(y+=2),p.isSkinnedMesh&&(y+=1),y}function u(p,y,M,A,x,_){let C=n[e];return C===void 0?(C={id:p.id,object:p,geometry:y,material:M,materialVariant:c(p),groupOrder:A,renderOrder:p.renderOrder,z:x,group:_},n[e]=C):(C.id=p.id,C.object=p,C.geometry=y,C.material=M,C.materialVariant=c(p),C.groupOrder=A,C.renderOrder=p.renderOrder,C.z=x,C.group=_),e++,C}function d(p,y,M,A,x,_,C){C.reversedDepth===!0&&(x=-x);const F=u(p,y,M,A,x,_);M.transmission>0?r.push(F):M.transparent===!0?o.push(F):t.push(F)}function h(p,y,M,A,x,_){const C=u(p,y,M,A,x,_);M.transmission>0?r.unshift(C):M.transparent===!0?o.unshift(C):t.unshift(C)}function m(p,y){t.length>1&&t.sort(p||uL),r.length>1&&r.sort(y||l_),o.length>1&&o.sort(y||l_)}function v(){for(let p=e,y=n.length;p<y;p++){const M=n[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:d,unshift:h,finish:v,sort:m}}function fL(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new c_,n.set(r,[c])):o>=a.length?(c=new c_,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function dL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new le,color:new Lt};break;case"SpotLight":t={position:new le,direction:new le,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new le,halfWidth:new le,halfHeight:new le};break}return n[e.id]=t,t}}}function hL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pL=0;function mL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gL(n){const e=new dL,t=hL(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new le);const o=new le,a=new cn,c=new cn;function u(h){let m=0,v=0,p=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let y=0,M=0,A=0,x=0,_=0,C=0,F=0,b=0,D=0,N=0,O=0,E=0,I=0,U=0;h.sort(mL);for(let W=0,te=h.length;W<te;W++){const X=h[W],ee=X.color,ne=X.intensity,K=X.distance;let j=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Ks?j=X.shadow.map.texture:j=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)m+=ee.r*ne,v+=ee.g*ne,p+=ee.b*ne;else if(X.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(X.sh.coefficients[Y],ne);U++}else if(X.isSunLight){const Y=e.get(X);if(Y.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const L=X.shadow,w=t.get(X);w.shadowIntensity=L.intensity,w.shadowBias=L.bias,w.shadowNormalBias=L.normalBias,w.shadowRadius=L.radius,w.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),r.sunShadow[M]=w,r.sunShadowMap[M]=j;const H=L.getViewportCount();for(let fe=0;fe<H;fe++)r.sunShadowMatrix[A+fe]=L.getMatrix(fe),r.sunShadowCascade[A+fe]=L._cascadeData[fe];A+=H,M++}r.sun[y]=Y,y++}else if(X.isDirectionalLight){const Y=e.get(X);if(Y.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const L=X.shadow,w=t.get(X);w.shadowIntensity=L.intensity,w.shadowBias=L.bias,w.shadowNormalBias=L.normalBias,w.shadowRadius=L.radius,w.shadowMapSize=L.mapSize,r.directionalShadow[x]=w,r.directionalShadowMap[x]=j,r.directionalShadowMatrix[x]=X.shadow.matrix,D++}r.directional[x]=Y,x++}else if(X.isSpotLight){const Y=e.get(X);Y.position.setFromMatrixPosition(X.matrixWorld),Y.color.copy(ee).multiplyScalar(ne),Y.distance=K,Y.coneCos=Math.cos(X.angle),Y.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),Y.decay=X.decay,r.spot[C]=Y;const L=X.shadow;if(X.map&&(r.spotLightMap[E]=X.map,E++,L.updateMatrices(X),X.castShadow&&I++),r.spotLightMatrix[C]=L.matrix,X.castShadow){const w=t.get(X);w.shadowIntensity=L.intensity,w.shadowBias=L.bias,w.shadowNormalBias=L.normalBias,w.shadowRadius=L.radius,w.shadowMapSize=L.mapSize,r.spotShadow[C]=w,r.spotShadowMap[C]=j,O++}C++}else if(X.isRectAreaLight){const Y=e.get(X);Y.color.copy(ee).multiplyScalar(ne),Y.halfWidth.set(X.width*.5,0,0),Y.halfHeight.set(0,X.height*.5,0),r.rectArea[F]=Y,F++}else if(X.isPointLight){const Y=e.get(X);if(Y.color.copy(X.color).multiplyScalar(X.intensity),Y.distance=X.distance,Y.decay=X.decay,X.castShadow){const L=X.shadow,w=t.get(X);w.shadowIntensity=L.intensity,w.shadowBias=L.bias,w.shadowNormalBias=L.normalBias,w.shadowRadius=L.radius,w.shadowMapSize=L.mapSize,w.shadowCameraNear=L.camera.near,w.shadowCameraFar=L.camera.far,r.pointShadow[_]=w,r.pointShadowMap[_]=j,r.pointShadowMatrix[_]=X.shadow.matrix,N++}r.point[_]=Y,_++}else if(X.isHemisphereLight){const Y=e.get(X);Y.skyColor.copy(X.color).multiplyScalar(ne),Y.groundColor.copy(X.groundColor).multiplyScalar(ne),r.hemi[b]=Y,b++}}F>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=je.LTC_FLOAT_1,r.rectAreaLTC2=je.LTC_FLOAT_2):(r.rectAreaLTC1=je.LTC_HALF_1,r.rectAreaLTC2=je.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=p;const V=r.hash;(V.sunLength!==y||V.directionalLength!==x||V.pointLength!==_||V.spotLength!==C||V.rectAreaLength!==F||V.hemiLength!==b||V.numSunShadows!==M||V.numDirectionalShadows!==D||V.numPointShadows!==N||V.numSpotShadows!==O||V.numSpotMaps!==E||V.numLightProbes!==U)&&(r.sun.length=y,r.directional.length=x,r.spot.length=C,r.rectArea.length=F,r.point.length=_,r.hemi.length=b,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.directionalShadowMatrix.length=D,r.pointShadow.length=N,r.pointShadowMap.length=N,r.pointShadowMatrix.length=N,r.spotShadow.length=O,r.spotShadowMap.length=O,r.spotLightMatrix.length=O+E-I,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=U,V.sunLength=y,V.directionalLength=x,V.pointLength=_,V.spotLength=C,V.rectAreaLength=F,V.hemiLength=b,V.numSunShadows=M,V.numDirectionalShadows=D,V.numPointShadows=N,V.numSpotShadows=O,V.numSpotMaps=E,V.numLightProbes=U,r.version=pL++)}function d(h,m){let v=0,p=0,y=0,M=0,A=0,x=0;const _=m.matrixWorldInverse;for(let C=0,F=h.length;C<F;C++){const b=h[C];if(b.isSunLight){const D=r.sun[v];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(_),v++}else if(b.isDirectionalLight){const D=r.directional[p];D.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(_),p++}else if(b.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(_),M++}else if(b.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(_),c.identity(),a.copy(b.matrixWorld),a.premultiply(_),c.extractRotation(a),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),A++}else if(b.isPointLight){const D=r.point[y];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(_),y++}else if(b.isHemisphereLight){const D=r.hemi[x];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(_),x++}}}return{setup:u,setupView:d,state:r}}function u_(n){const e=new gL(n),t=[],r=[],o=[];function a(p){v.camera=p,t.length=0,r.length=0,o.length=0}function c(p){t.push(p)}function u(p){r.push(p)}function d(p){o.push(p)}function h(){e.setup(t)}function m(p){e.setupView(t,p)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:u,pushLightProbeGrid:d}}function vL(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new u_(n),e.set(o,[u])):a>=c.length?(u=new u_(n),c.push(u)):u=c[a],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const xL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_L=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yL=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],SL=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],f_=new cn,Ha=new le,dh=new le;function ML(n,e,t){let r=new vm;const o=new lt,a=new lt,c=new sn,u=new RR,d=new PR,h={},m=t.maxTextureSize,v={[$s]:ti,[ti]:$s,[Dr]:Dr},p=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:xL,fragmentShader:_L}),y=p.clone();y.defines.HORIZONTAL_PASS=1;const M=new ni;M.setAttribute("position",new Fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Dt(M,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let _=this.type;this.render=function(N,O,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;this.type===xS&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kc);const I=n.getRenderTarget(),U=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Nr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const te=_!==this.type;te&&O.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(ee=>ee.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,ee=N.length;X<ee;X++){const ne=N[X],K=ne.shadow;if(K===void 0){dt("WebGLShadowMap:",ne,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const j=K.getFrameExtents();o.multiply(j),a.copy(K.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/j.x),o.x=a.x*j.x,K.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/j.y),o.y=a.y*j.y,K.mapSize.y=a.y));const Y=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Y,K.map===null||te===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Wa){if(ne.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Xi(o.x,o.y,{format:Ks,type:ar,minFilter:zn,magFilter:zn,generateMipmaps:!1}),K.map.texture.name=ne.name+".shadowMap",K.map.depthTexture=new sl(o.x,o.y,tr),K.map.depthTexture.name=ne.name+".shadowMapDepth",K.map.depthTexture.format=Ur,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Dn,K.map.depthTexture.magFilter=Dn}else ne.isPointLight?(K.map=new qS(o.x),K.map.depthTexture=new MR(o.x,or)):(K.map=new Xi(o.x,o.y),K.map.depthTexture=new sl(o.x,o.y,or)),K.map.depthTexture.name=ne.name+".shadowMap",K.map.depthTexture.format=Ur,this.type===Kc?(K.map.depthTexture.compareFunction=Y?pm:hm,K.map.depthTexture.minFilter=zn,K.map.depthTexture.magFilter=zn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Dn,K.map.depthTexture.magFilter=Dn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==o.x||K.map.height!==o.y)&&K.map.setSize(o.x,o.y);const L=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();ne.isPointLight!==!0&&K.updateMatrices(ne,E);for(let w=0;w<L;w++){const H=K.getCamera(w);if(ne.isPointLight){const fe=K.camera,Se=K.matrix,Ee=ne.distance||fe.far;Ee!==fe.far&&(fe.far=Ee,fe.updateProjectionMatrix()),Ha.setFromMatrixPosition(ne.matrixWorld),fe.position.copy(Ha),dh.copy(fe.position),dh.add(yL[w]),fe.up.copy(SL[w]),fe.lookAt(dh),fe.updateMatrixWorld(),Se.makeTranslation(-Ha.x,-Ha.y,-Ha.z),f_.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),K._frustum.setFromProjectionMatrix(f_,fe.coordinateSystem,fe.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,w),n.clear();else{w===0&&(n.setRenderTarget(K.map),n.clear());const fe=K.getViewport(w);c.set(a.x*fe.x,a.y*fe.y,a.x*fe.z,a.y*fe.w),W.viewport(c)}r=K.getFrustum(w),b(O,E,H,ne,this.type)}K.isPointLightShadow!==!0&&this.type===Wa&&C(K,E),K.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(I,U,V)};function C(N,O){const E=e.update(A);p.defines.VSM_SAMPLES!==N.blurSamples&&(p.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,p.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null?N.mapPass=new Xi(o.x,o.y,{format:Ks,type:ar}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),p.uniforms.shadow_pass.value=N.map.depthTexture,p.uniforms.resolution.value.set(N.map.width,N.map.height),p.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(O,null,E,p,A,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value.set(N.map.width,N.map.height),y.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(O,null,E,y,A,null)}function F(N,O,E,I){let U=null;const V=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)U=V;else if(U=E.isPointLight===!0?d:u,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const W=U.uuid,te=O.uuid;let X=h[W];X===void 0&&(X={},h[W]=X);let ee=X[te];ee===void 0&&(ee=U.clone(),X[te]=ee,O.addEventListener("dispose",D)),U=ee}if(U.visible=O.visible,U.wireframe=O.wireframe,I===Wa?U.side=O.shadowSide!==null?O.shadowSide:O.side:U.side=O.shadowSide!==null?O.shadowSide:v[O.side],U.alphaMap=O.alphaMap,U.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,U.map=O.map,U.clipShadows=O.clipShadows,U.clippingPlanes=O.clippingPlanes,U.clipIntersection=O.clipIntersection,U.displacementMap=O.displacementMap,U.displacementScale=O.displacementScale,U.displacementBias=O.displacementBias,U.wireframeLinewidth=O.wireframeLinewidth,U.linewidth=O.linewidth,E.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const W=n.properties.get(U);W.light=E}return U}function b(N,O,E,I,U){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&U===Wa)&&(!N.frustumCulled||N.intersectsFrustum(r))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const te=e.update(N),X=N.material;if(Array.isArray(X)){const ee=te.groups;for(let ne=0,K=ee.length;ne<K;ne++){const j=ee[ne],Y=X[j.materialIndex];if(Y&&Y.visible){const L=F(N,Y,I,U);N.onBeforeShadow(n,N,O,E,te,L,j),n.renderBufferDirect(E,null,te,L,N,j),N.onAfterShadow(n,N,O,E,te,L,j)}}}else if(X.visible){const ee=F(N,X,I,U);N.onBeforeShadow(n,N,O,E,te,ee,null),n.renderBufferDirect(E,null,te,ee,N,null),N.onAfterShadow(n,N,O,E,te,ee,null)}}const W=N.children;for(let te=0,X=W.length;te<X;te++)b(W[te],O,E,I,U)}function D(N){N.target.removeEventListener("dispose",D);for(const E in h){const I=h[E],U=N.target.uuid;U in I&&(I[U].dispose(),delete I[U])}}}function wL(n,e){function t(){let G=!1;const be=new sn;let de=null;const Me=new sn(0,0,0,0);return{setMask:function(Ne){de!==Ne&&!G&&(n.colorMask(Ne,Ne,Ne,Ne),de=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,_e,We,Ye,vt){vt===!0&&(Ne*=Ye,_e*=Ye,We*=Ye),be.set(Ne,_e,We,Ye),Me.equals(be)===!1&&(n.clearColor(Ne,_e,We,Ye),Me.copy(be))},reset:function(){G=!1,de=null,Me.set(-1,0,0,0)}}}function r(){let G=!1,be=!1,de=null,Me=null,Ne=null;return{setReversed:function(_e){if(be!==_e){const We=e.get("EXT_clip_control");_e?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),be=_e;const Ye=Ne;Ne=null,this.setClear(Ye)}},getReversed:function(){return be},setTest:function(_e){_e?ie(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(_e){de!==_e&&!G&&(n.depthMask(_e),de=_e)},setFunc:function(_e){if(be&&(_e=KC[_e]),Me!==_e){switch(_e){case zh:n.depthFunc(n.NEVER);break;case Vh:n.depthFunc(n.ALWAYS);break;case Hh:n.depthFunc(n.LESS);break;case tl:n.depthFunc(n.LEQUAL);break;case Gh:n.depthFunc(n.EQUAL);break;case Wh:n.depthFunc(n.GEQUAL);break;case Xh:n.depthFunc(n.GREATER);break;case jh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=_e}},setLocked:function(_e){G=_e},setClear:function(_e){Ne!==_e&&(Ne=_e,be&&(_e=1-_e),n.clearDepth(_e))},reset:function(){G=!1,de=null,Me=null,Ne=null,be=!1}}}function o(){let G=!1,be=null,de=null,Me=null,Ne=null,_e=null,We=null,Ye=null,vt=null;return{setTest:function(ht){G||(ht?ie(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(ht){be!==ht&&!G&&(n.stencilMask(ht),be=ht)},setFunc:function(ht,Vt,Ln){(de!==ht||Me!==Vt||Ne!==Ln)&&(n.stencilFunc(ht,Vt,Ln),de=ht,Me=Vt,Ne=Ln)},setOp:function(ht,Vt,Ln){(_e!==ht||We!==Vt||Ye!==Ln)&&(n.stencilOp(ht,Vt,Ln),_e=ht,We=Vt,Ye=Ln)},setLocked:function(ht){G=ht},setClear:function(ht){vt!==ht&&(n.clearStencil(ht),vt=ht)},reset:function(){G=!1,be=null,de=null,Me=null,Ne=null,_e=null,We=null,Ye=null,vt=null}}}const a=new t,c=new r,u=new o,d=new WeakMap,h=new WeakMap;let m={},v={},p={},y=new WeakMap,M=[],A=null,x=!1,_=null,C=null,F=null,b=null,D=null,N=null,O=null,E=new Lt(0,0,0),I=0,U=!1,V=null,W=null,te=null,X=null,ee=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=j>=2);let L=null,w={};const H=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),Se=new sn().fromArray(H),Ee=new sn().fromArray(fe);function Te(G,be,de,Me){const Ne=new Uint8Array(4),_e=n.createTexture();n.bindTexture(G,_e),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<de;We++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(be+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return _e}const q={};q[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ie(n.DEPTH_TEST),c.setFunc(tl),at(!1),yt(mx),ie(n.CULL_FACE),ot(Nr);function ie(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function ye(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function ke(G,be){return p[G]!==be?(n.bindFramebuffer(G,be),p[G]=be,G===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=be),G===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Re(G,be){let de=M,Me=!1;if(G){de=y.get(be),de===void 0&&(de=[],y.set(be,de));const Ne=G.textures;if(de.length!==Ne.length||de[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,We=Ne.length;_e<We;_e++)de[_e]=n.COLOR_ATTACHMENT0+_e;de.length=Ne.length,Me=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Me=!0);Me&&n.drawBuffers(de)}function Ze(G){return A!==G?(n.useProgram(G),A=G,!0):!1}const gt={[Uo]:n.FUNC_ADD,[vC]:n.FUNC_SUBTRACT,[xC]:n.FUNC_REVERSE_SUBTRACT};gt[_C]=n.MIN,gt[yC]=n.MAX;const He={[SC]:n.ZERO,[MC]:n.ONE,[wC]:n.SRC_COLOR,[_S]:n.SRC_ALPHA,[RC]:n.SRC_ALPHA_SATURATE,[bC]:n.DST_COLOR,[TC]:n.DST_ALPHA,[EC]:n.ONE_MINUS_SRC_COLOR,[yS]:n.ONE_MINUS_SRC_ALPHA,[CC]:n.ONE_MINUS_DST_COLOR,[AC]:n.ONE_MINUS_DST_ALPHA,[PC]:n.CONSTANT_COLOR,[DC]:n.ONE_MINUS_CONSTANT_COLOR,[LC]:n.CONSTANT_ALPHA,[NC]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(G,be,de,Me,Ne,_e,We,Ye,vt,ht){if(G===Nr){x===!0&&(ye(n.BLEND),x=!1);return}if(x===!1&&(ie(n.BLEND),x=!0),G!==gC){if(G!==_||ht!==U){if((C!==Uo||D!==Uo)&&(n.blendEquation(n.FUNC_ADD),C=Uo,D=Uo),ht)switch(G){case Ka:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gx:n.blendFunc(n.ONE,n.ONE);break;case vx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xx:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ot("WebGLState: Invalid blending: ",G);break}else switch(G){case Ka:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gx:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vx:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xx:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",G);break}F=null,b=null,N=null,O=null,E.set(0,0,0),I=0,_=G,U=ht}return}Ne=Ne||be,_e=_e||de,We=We||Me,(be!==C||Ne!==D)&&(n.blendEquationSeparate(gt[be],gt[Ne]),C=be,D=Ne),(de!==F||Me!==b||_e!==N||We!==O)&&(n.blendFuncSeparate(He[de],He[Me],He[_e],He[We]),F=de,b=Me,N=_e,O=We),(Ye.equals(E)===!1||vt!==I)&&(n.blendColor(Ye.r,Ye.g,Ye.b,vt),E.copy(Ye),I=vt),_=G,U=!1}function pt(G,be){G.side===Dr?ye(n.CULL_FACE):ie(n.CULL_FACE);let de=G.side===ti;be&&(de=!de),at(de),G.blending===Ka&&G.transparent===!1?ot(Nr):ot(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const Me=G.stencilWrite;u.setTest(Me),Me&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(G){V!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),V=G)}function yt(G){G!==pC?(ie(n.CULL_FACE),G!==W&&(G===mx?n.cullFace(n.BACK):G===mC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),W=G}function Nt(G){G!==te&&(K&&n.lineWidth(G),te=G)}function bt(G,be,de){G?(ie(n.POLYGON_OFFSET_FILL),(X!==be||ee!==de)&&(X=be,ee=de,c.getReversed()&&(be=-be),n.polygonOffset(be,de))):ye(n.POLYGON_OFFSET_FILL)}function Et(G){G?ie(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Gt(G){G===void 0&&(G=n.TEXTURE0+ne-1),L!==G&&(n.activeTexture(G),L=G)}function J(G,be,de){de===void 0&&(L===null?de=n.TEXTURE0+ne-1:de=L);let Me=w[de];Me===void 0&&(Me={type:void 0,texture:void 0},w[de]=Me),(Me.type!==G||Me.texture!==be)&&(L!==de&&(n.activeTexture(de),L=de),n.bindTexture(G,be||q[G]),Me.type=G,Me.texture=be)}function Kt(){const G=w[L];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Tt(){try{n.compressedTexImage2D(...arguments)}catch(G){Ot("WebGLState:",G)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(G){Ot("WebGLState:",G)}}function T(){try{n.texSubImage2D(...arguments)}catch(G){Ot("WebGLState:",G)}}function re(){try{n.texSubImage3D(...arguments)}catch(G){Ot("WebGLState:",G)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Ot("WebGLState:",G)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Ot("WebGLState:",G)}}function Pe(){try{n.texStorage2D(...arguments)}catch(G){Ot("WebGLState:",G)}}function Ue(){try{n.texStorage3D(...arguments)}catch(G){Ot("WebGLState:",G)}}function ge(){try{n.texImage2D(...arguments)}catch(G){Ot("WebGLState:",G)}}function xe(){try{n.texImage3D(...arguments)}catch(G){Ot("WebGLState:",G)}}function Be(G){return v[G]!==void 0?v[G]:n.getParameter(G)}function nt(G,be){v[G]!==be&&(n.pixelStorei(G,be),v[G]=be)}function ze(G){Se.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Se.copy(G))}function Oe(G){Ee.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Ee.copy(G))}function ve(G,be){let de=h.get(be);de===void 0&&(de=new WeakMap,h.set(be,de));let Me=de.get(G);Me===void 0&&(Me=n.getUniformBlockIndex(be,G.name),de.set(G,Me))}function Ie(G,be){const Me=h.get(be).get(G);d.get(be)!==Me&&(n.uniformBlockBinding(be,Me,G.__bindingPointIndex),d.set(be,Me))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},v={},L=null,w={},p={},y=new WeakMap,M=[],A=null,x=!1,_=null,C=null,F=null,b=null,D=null,N=null,O=null,E=new Lt(0,0,0),I=0,U=!1,V=null,W=null,te=null,X=null,ee=null,Se.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ie,disable:ye,bindFramebuffer:ke,drawBuffers:Re,useProgram:Ze,setBlending:ot,setMaterial:pt,setFlipSided:at,setCullFace:yt,setLineWidth:Nt,setPolygonOffset:bt,setScissorTest:Et,activeTexture:Gt,bindTexture:J,unbindTexture:Kt,compressedTexImage2D:Tt,compressedTexImage3D:k,texImage2D:ge,texImage3D:xe,pixelStorei:nt,getParameter:Be,updateUBOMapping:ve,uniformBlockBinding:Ie,texStorage2D:Pe,texStorage3D:Ue,texSubImage2D:T,texSubImage3D:re,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:ze,viewport:Oe,reset:Le}}function EL(n,e,t,r,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new lt,m=new WeakMap,v=new Set;let p;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(k,T){return M?new OffscreenCanvas(k,T):_u("canvas")}function x(k,T,re){let ce=1;const me=Tt(k);if((me.width>re||me.height>re)&&(ce=re/Math.max(me.width,me.height)),ce<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Pe=Math.floor(ce*me.width),Ue=Math.floor(ce*me.height);p===void 0&&(p=A(Pe,Ue));const ge=T?A(Pe,Ue):p;return ge.width=Pe,ge.height=Ue,ge.getContext("2d").drawImage(k,0,0,Pe,Ue),dt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Pe+"x"+Ue+")."),ge}else return"data"in k&&dt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),k;return k}function _(k){return k.generateMipmaps}function C(k){n.generateMipmap(k)}function F(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(k,T,re,ce,me,Pe=!1){if(k!==null){if(n[k]!==void 0)return n[k];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Ue;ce&&(Ue=e.get("EXT_texture_norm16"),Ue||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=T;if(T===n.RED&&(re===n.FLOAT&&(ge=n.R32F),re===n.HALF_FLOAT&&(ge=n.R16F),re===n.UNSIGNED_BYTE&&(ge=n.R8),re===n.UNSIGNED_SHORT&&Ue&&(ge=Ue.R16_EXT),re===n.SHORT&&Ue&&(ge=Ue.R16_SNORM_EXT)),T===n.RED_INTEGER&&(re===n.UNSIGNED_BYTE&&(ge=n.R8UI),re===n.UNSIGNED_SHORT&&(ge=n.R16UI),re===n.UNSIGNED_INT&&(ge=n.R32UI),re===n.BYTE&&(ge=n.R8I),re===n.SHORT&&(ge=n.R16I),re===n.INT&&(ge=n.R32I)),T===n.RG&&(re===n.FLOAT&&(ge=n.RG32F),re===n.HALF_FLOAT&&(ge=n.RG16F),re===n.UNSIGNED_BYTE&&(ge=n.RG8),re===n.UNSIGNED_SHORT&&Ue&&(ge=Ue.RG16_EXT),re===n.SHORT&&Ue&&(ge=Ue.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(re===n.UNSIGNED_BYTE&&(ge=n.RG8UI),re===n.UNSIGNED_SHORT&&(ge=n.RG16UI),re===n.UNSIGNED_INT&&(ge=n.RG32UI),re===n.BYTE&&(ge=n.RG8I),re===n.SHORT&&(ge=n.RG16I),re===n.INT&&(ge=n.RG32I)),T===n.RGB_INTEGER&&(re===n.UNSIGNED_BYTE&&(ge=n.RGB8UI),re===n.UNSIGNED_SHORT&&(ge=n.RGB16UI),re===n.UNSIGNED_INT&&(ge=n.RGB32UI),re===n.BYTE&&(ge=n.RGB8I),re===n.SHORT&&(ge=n.RGB16I),re===n.INT&&(ge=n.RGB32I)),T===n.RGBA_INTEGER&&(re===n.UNSIGNED_BYTE&&(ge=n.RGBA8UI),re===n.UNSIGNED_SHORT&&(ge=n.RGBA16UI),re===n.UNSIGNED_INT&&(ge=n.RGBA32UI),re===n.BYTE&&(ge=n.RGBA8I),re===n.SHORT&&(ge=n.RGBA16I),re===n.INT&&(ge=n.RGBA32I)),T===n.RGB&&(re===n.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGB16_EXT),re===n.SHORT&&Ue&&(ge=Ue.RGB16_SNORM_EXT),re===n.UNSIGNED_INT_5_9_9_9_REV&&(ge=n.RGB9_E5),re===n.UNSIGNED_INT_10F_11F_11F_REV&&(ge=n.R11F_G11F_B10F)),T===n.RGBA){const xe=Pe?xu:Pt.getTransfer(me);re===n.FLOAT&&(ge=n.RGBA32F),re===n.HALF_FLOAT&&(ge=n.RGBA16F),re===n.UNSIGNED_BYTE&&(ge=xe===zt?n.SRGB8_ALPHA8:n.RGBA8),re===n.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGBA16_EXT),re===n.SHORT&&Ue&&(ge=Ue.RGBA16_SNORM_EXT),re===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),re===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function D(k,T){let re;return k?T===null||T===or||T===il?re=n.DEPTH24_STENCIL8:T===tr?re=n.DEPTH32F_STENCIL8:T===nl&&(re=n.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===or||T===il?re=n.DEPTH_COMPONENT24:T===tr?re=n.DEPTH_COMPONENT32F:T===nl&&(re=n.DEPTH_COMPONENT16),re}function N(k,T){return _(k)===!0||k.isFramebufferTexture&&k.minFilter!==Dn&&k.minFilter!==zn?Math.log2(Math.max(T.width,T.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?T.mipmaps.length:1}function O(k){const T=k.target;T.removeEventListener("dispose",O),I(T),T.isVideoTexture&&m.delete(T),T.isHTMLTexture&&v.delete(T)}function E(k){const T=k.target;T.removeEventListener("dispose",E),V(T)}function I(k){const T=r.get(k);if(T.__webglInit===void 0)return;const re=k.source,ce=y.get(re);if(ce){const me=ce[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&U(k),Object.keys(ce).length===0&&y.delete(re)}r.remove(k)}function U(k){const T=r.get(k);n.deleteTexture(T.__webglTexture);const re=k.source,ce=y.get(re);delete ce[T.__cacheKey],c.memory.textures--}function V(k){const T=r.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),r.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(T.__webglFramebuffer[ce]))for(let me=0;me<T.__webglFramebuffer[ce].length;me++)n.deleteFramebuffer(T.__webglFramebuffer[ce][me]);else n.deleteFramebuffer(T.__webglFramebuffer[ce]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ce])}else{if(Array.isArray(T.__webglFramebuffer))for(let ce=0;ce<T.__webglFramebuffer.length;ce++)n.deleteFramebuffer(T.__webglFramebuffer[ce]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ce=0;ce<T.__webglColorRenderbuffer.length;ce++)T.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ce]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const re=k.textures;for(let ce=0,me=re.length;ce<me;ce++){const Pe=r.get(re[ce]);Pe.__webglTexture&&(n.deleteTexture(Pe.__webglTexture),c.memory.textures--),r.remove(re[ce])}r.remove(k)}let W=0;function te(){W=0}function X(){return W}function ee(k){W=k}function ne(){const k=W;return k>=o.maxTextures&&dt("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+o.maxTextures),W+=1,k}function K(k){const T=[];return T.push(k.wrapS),T.push(k.wrapT),T.push(k.wrapR||0),T.push(k.magFilter),T.push(k.minFilter),T.push(k.anisotropy),T.push(k.internalFormat),T.push(k.format),T.push(k.type),T.push(k.generateMipmaps),T.push(k.premultiplyAlpha),T.push(k.flipY),T.push(k.unpackAlignment),T.push(k.colorSpace),T.join()}function j(k,T){const re=r.get(k);if(k.isVideoTexture&&J(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&re.__version!==k.version){const ce=k.image;if(ce===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(re,k,T);return}}else k.isExternalTexture&&(re.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,re.__webglTexture,n.TEXTURE0+T)}function Y(k,T){const re=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){ye(re,k,T);return}else k.isExternalTexture&&(re.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,re.__webglTexture,n.TEXTURE0+T)}function L(k,T){const re=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){ye(re,k,T);return}t.bindTexture(n.TEXTURE_3D,re.__webglTexture,n.TEXTURE0+T)}function w(k,T){const re=r.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&re.__version!==k.version){ke(re,k,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture,n.TEXTURE0+T)}const H={[Gs]:n.REPEAT,[Lr]:n.CLAMP_TO_EDGE,[Yh]:n.MIRRORED_REPEAT},fe={[Dn]:n.NEAREST,[UC]:n.NEAREST_MIPMAP_NEAREST,[yc]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[Fd]:n.LINEAR_MIPMAP_NEAREST,[Ws]:n.LINEAR_MIPMAP_LINEAR},Se={[zC]:n.NEVER,[XC]:n.ALWAYS,[VC]:n.LESS,[hm]:n.LEQUAL,[HC]:n.EQUAL,[pm]:n.GEQUAL,[GC]:n.GREATER,[WC]:n.NOTEQUAL};function Ee(k,T){if(T.type===tr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===zn||T.magFilter===Fd||T.magFilter===yc||T.magFilter===Ws||T.minFilter===zn||T.minFilter===Fd||T.minFilter===yc||T.minFilter===Ws)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,H[T.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,H[T.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,H[T.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,fe[T.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,fe[T.minFilter]),T.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,Se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Dn||T.minFilter!==yc&&T.minFilter!==Ws||T.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Te(k,T){let re=!1;k.__webglInit===void 0&&(k.__webglInit=!0,T.addEventListener("dispose",O));const ce=T.source;let me=y.get(ce);me===void 0&&(me={},y.set(ce,me));const Pe=K(T);if(Pe!==k.__cacheKey){me[Pe]===void 0&&(me[Pe]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,re=!0),me[Pe].usedTimes++;const Ue=me[k.__cacheKey];Ue!==void 0&&(me[k.__cacheKey].usedTimes--,Ue.usedTimes===0&&U(T)),k.__cacheKey=Pe,k.__webglTexture=me[Pe].texture}return re}function q(k,T,re){return Math.floor(Math.floor(k/re)/T)}function ie(k,T,re,ce){const Pe=k.updateRanges;if(Pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,re,ce,T.data);else{Pe.sort((nt,ze)=>nt.start-ze.start);let Ue=0;for(let nt=1;nt<Pe.length;nt++){const ze=Pe[Ue],Oe=Pe[nt],ve=ze.start+ze.count,Ie=q(Oe.start,T.width,4),Le=q(ze.start,T.width,4);Oe.start<=ve+1&&Ie===Le&&q(Oe.start+Oe.count-1,T.width,4)===Ie?ze.count=Math.max(ze.count,Oe.start+Oe.count-ze.start):(++Ue,Pe[Ue]=Oe)}Pe.length=Ue+1;const ge=t.getParameter(n.UNPACK_ROW_LENGTH),xe=t.getParameter(n.UNPACK_SKIP_PIXELS),Be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let nt=0,ze=Pe.length;nt<ze;nt++){const Oe=Pe[nt],ve=Math.floor(Oe.start/4),Ie=Math.ceil(Oe.count/4),Le=ve%T.width,G=Math.floor(ve/T.width),be=Ie,de=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,Le,G,be,de,re,ce,T.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ge),t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Be)}}function ye(k,T,re){let ce=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ce=n.TEXTURE_3D);const me=Te(k,T),Pe=T.source;t.bindTexture(ce,k.__webglTexture,n.TEXTURE0+re);const Ue=r.get(Pe);if(Pe.version!==Ue.__version||me===!0){if(t.activeTexture(n.TEXTURE0+re),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const de=Pt.getPrimaries(Pt.workingColorSpace),Me=T.colorSpace===hs?null:Pt.getPrimaries(T.colorSpace),Ne=T.colorSpace===hs||de===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let xe=x(T.image,!1,o.maxTextureSize);xe=Kt(T,xe);const Be=a.convert(T.format,T.colorSpace),nt=a.convert(T.type);let ze=b(T.internalFormat,Be,nt,T.normalized,T.colorSpace,T.isVideoTexture);Ee(ce,T);let Oe;const ve=T.mipmaps,Ie=T.isVideoTexture!==!0,Le=Ue.__version===void 0||me===!0,G=Pe.dataReady,be=N(T,xe);if(T.isDepthTexture)ze=D(T.format===Xs,T.type),Le&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,ze,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,ze,xe.width,xe.height,0,Be,nt,null));else if(T.isDataTexture)if(ve.length>0){Ie&&Le&&t.texStorage2D(n.TEXTURE_2D,be,ze,ve[0].width,ve[0].height);for(let de=0,Me=ve.length;de<Me;de++)Oe=ve[de],Ie?G&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Oe.width,Oe.height,Be,nt,Oe.data):t.texImage2D(n.TEXTURE_2D,de,ze,Oe.width,Oe.height,0,Be,nt,Oe.data);T.generateMipmaps=!1}else Ie?(Le&&t.texStorage2D(n.TEXTURE_2D,be,ze,xe.width,xe.height),G&&ie(T,xe,Be,nt)):t.texImage2D(n.TEXTURE_2D,0,ze,xe.width,xe.height,0,Be,nt,xe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ie&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,ze,ve[0].width,ve[0].height,xe.depth);for(let de=0,Me=ve.length;de<Me;de++)if(Oe=ve[de],T.format!==Gi)if(Be!==null)if(Ie){if(G)if(T.layerUpdates.size>0){const Ne=Gx(Oe.width,Oe.height,T.format,T.type);for(const _e of T.layerUpdates){const We=Oe.data.subarray(_e*Ne/Oe.data.BYTES_PER_ELEMENT,(_e+1)*Ne/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,_e,Oe.width,Oe.height,1,Be,We)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Oe.width,Oe.height,xe.depth,Be,Oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,ze,Oe.width,Oe.height,xe.depth,0,Oe.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Oe.width,Oe.height,xe.depth,Be,nt,Oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,ze,Oe.width,Oe.height,xe.depth,0,Be,nt,Oe.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ie&&Le&&t.texStorage2D(n.TEXTURE_2D,be,ze,ve[0].width,ve[0].height);for(let de=0,Me=ve.length;de<Me;de++)Oe=ve[de],T.format!==Gi?Be!==null?Ie?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Oe.width,Oe.height,Be,Oe.data):t.compressedTexImage2D(n.TEXTURE_2D,de,ze,Oe.width,Oe.height,0,Oe.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?G&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Oe.width,Oe.height,Be,nt,Oe.data):t.texImage2D(n.TEXTURE_2D,de,ze,Oe.width,Oe.height,0,Be,nt,Oe.data)}else if(T.isDataArrayTexture)if(Ie){if(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,ze,xe.width,xe.height,xe.depth),G)if(T.layerUpdates.size>0){const de=Gx(xe.width,xe.height,T.format,T.type);for(const Me of T.layerUpdates){const Ne=xe.data.subarray(Me*de/xe.data.BYTES_PER_ELEMENT,(Me+1)*de/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,xe.width,xe.height,1,Be,nt,Ne)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Be,nt,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,xe.width,xe.height,xe.depth,0,Be,nt,xe.data);else if(T.isData3DTexture)Ie?(Le&&t.texStorage3D(n.TEXTURE_3D,be,ze,xe.width,xe.height,xe.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Be,nt,xe.data)):t.texImage3D(n.TEXTURE_3D,0,ze,xe.width,xe.height,xe.depth,0,Be,nt,xe.data);else if(T.isFramebufferTexture){if(Le)if(Ie)t.texStorage2D(n.TEXTURE_2D,be,ze,xe.width,xe.height);else{let de=xe.width,Me=xe.height;for(let Ne=0;Ne<be;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,ze,de,Me,0,Be,nt,null),de>>=1,Me>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const de=n.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),xe.parentNode!==de){de.appendChild(xe),v.add(T),de.onpaint=Me=>{const Ne=Me.changedElements;for(const _e of v)Ne.includes(_e.image)&&(_e.needsUpdate=!0)},de.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xe);else{const Ne=n.RGBA,_e=n.RGBA,We=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,_e,We,xe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ve.length>0){if(Ie&&Le){const de=Tt(ve[0]);t.texStorage2D(n.TEXTURE_2D,be,ze,de.width,de.height)}for(let de=0,Me=ve.length;de<Me;de++)Oe=ve[de],Ie?G&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Be,nt,Oe):t.texImage2D(n.TEXTURE_2D,de,ze,Be,nt,Oe);T.generateMipmaps=!1}else if(Ie){if(Le){const de=Tt(xe);t.texStorage2D(n.TEXTURE_2D,be,ze,de.width,de.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,nt,xe)}else t.texImage2D(n.TEXTURE_2D,0,ze,Be,nt,xe);_(T)&&C(ce),Ue.__version=Pe.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function ke(k,T,re){if(T.image.length!==6)return;const ce=Te(k,T),me=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+re);const Pe=r.get(me);if(me.version!==Pe.__version||ce===!0){t.activeTexture(n.TEXTURE0+re);const Ue=Pt.getPrimaries(Pt.workingColorSpace),ge=T.colorSpace===hs?null:Pt.getPrimaries(T.colorSpace),xe=T.colorSpace===hs||Ue===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Be=T.isCompressedTexture||T.image[0].isCompressedTexture,nt=T.image[0]&&T.image[0].isDataTexture,ze=[];for(let _e=0;_e<6;_e++)!Be&&!nt?ze[_e]=x(T.image[_e],!0,o.maxCubemapSize):ze[_e]=nt?T.image[_e].image:T.image[_e],ze[_e]=Kt(T,ze[_e]);const Oe=ze[0],ve=a.convert(T.format,T.colorSpace),Ie=a.convert(T.type),Le=b(T.internalFormat,ve,Ie,T.normalized,T.colorSpace),G=T.isVideoTexture!==!0,be=Pe.__version===void 0||ce===!0,de=me.dataReady;let Me=N(T,Oe);Ee(n.TEXTURE_CUBE_MAP,T);let Ne;if(Be){G&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Le,Oe.width,Oe.height);for(let _e=0;_e<6;_e++){Ne=ze[_e].mipmaps;for(let We=0;We<Ne.length;We++){const Ye=Ne[We];T.format!==Gi?ve!==null?G?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,Ye.width,Ye.height,ve,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,Le,Ye.width,Ye.height,0,Ye.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,Ye.width,Ye.height,ve,Ie,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,Le,Ye.width,Ye.height,0,ve,Ie,Ye.data)}}}else{if(Ne=T.mipmaps,G&&be){Ne.length>0&&Me++;const _e=Tt(ze[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Le,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(nt){G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ze[_e].width,ze[_e].height,ve,Ie,ze[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Le,ze[_e].width,ze[_e].height,0,ve,Ie,ze[_e].data);for(let We=0;We<Ne.length;We++){const vt=Ne[We].image[_e].image;G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,vt.width,vt.height,ve,Ie,vt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,Le,vt.width,vt.height,0,ve,Ie,vt.data)}}else{G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ve,Ie,ze[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Le,ve,Ie,ze[_e]);for(let We=0;We<Ne.length;We++){const Ye=Ne[We];G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,ve,Ie,Ye.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,Le,ve,Ie,Ye.image[_e])}}}_(T)&&C(n.TEXTURE_CUBE_MAP),Pe.__version=me.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function Re(k,T,re,ce,me,Pe){const Ue=a.convert(re.format,re.colorSpace),ge=a.convert(re.type),xe=b(re.internalFormat,Ue,ge,re.normalized,re.colorSpace),Be=r.get(T),nt=r.get(re);if(nt.__renderTarget=T,!Be.__hasExternalTextures){const ze=Math.max(1,T.width>>Pe),Oe=Math.max(1,T.height>>Pe);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,Pe,xe,ze,Oe,T.depth,0,Ue,ge,null):t.texImage2D(me,Pe,xe,ze,Oe,0,Ue,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),Gt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,me,nt.__webglTexture,0,Et(T)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,me,nt.__webglTexture,Pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(k,T,re){if(n.bindRenderbuffer(n.RENDERBUFFER,k),T.depthBuffer){const ce=T.depthTexture,me=ce&&ce.isDepthTexture?ce.type:null,Pe=D(T.stencilBuffer,me),Ue=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Gt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(T),Pe,T.width,T.height):re?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(T),Pe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,k)}else{const ce=T.textures;for(let me=0;me<ce.length;me++){const Pe=ce[me],Ue=a.convert(Pe.format,Pe.colorSpace),ge=a.convert(Pe.type),xe=b(Pe.internalFormat,Ue,ge,Pe.normalized,Pe.colorSpace);Gt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(T),xe,T.width,T.height):re?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(T),xe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,xe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(k,T,re){const ce=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(T.depthTexture);if(me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce){if(me.__webglInit===void 0&&(me.__webglInit=!0,T.depthTexture.addEventListener("dispose",O)),me.__webglTexture===void 0){me.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,T.depthTexture);const Be=a.convert(T.depthTexture.format),nt=a.convert(T.depthTexture.type);let ze;T.depthTexture.format===Ur?ze=n.DEPTH_COMPONENT24:T.depthTexture.format===Xs&&(ze=n.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,ze,T.width,T.height,0,Be,nt,null)}}else j(T.depthTexture,0);const Pe=me.__webglTexture,Ue=Et(T),ge=ce?n.TEXTURE_CUBE_MAP_POSITIVE_X+re:n.TEXTURE_2D,xe=T.depthTexture.format===Xs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ur)Gt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ge,Pe,0,Ue):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ge,Pe,0);else if(T.depthTexture.format===Xs)Gt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ge,Pe,0,Ue):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ge,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(k){const T=r.get(k),re=k.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==k.depthTexture){const ce=k.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ce){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ce.removeEventListener("dispose",me)};ce.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=ce}if(k.depthTexture&&!T.__autoAllocateDepthBuffer)if(re)for(let ce=0;ce<6;ce++)gt(T.__webglFramebuffer[ce],k,ce);else{const ce=k.texture.mipmaps;ce&&ce.length>0?gt(T.__webglFramebuffer[0],k,0):gt(T.__webglFramebuffer,k,0)}else if(re){T.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ce]),T.__webglDepthbuffer[ce]===void 0)T.__webglDepthbuffer[ce]=n.createRenderbuffer(),Ze(T.__webglDepthbuffer[ce],k,!1);else{const me=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=T.__webglDepthbuffer[ce];n.bindRenderbuffer(n.RENDERBUFFER,Pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,Pe)}}else{const ce=k.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Ze(T.__webglDepthbuffer,k,!1);else{const me=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,Pe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(k,T,re){const ce=r.get(k);T!==void 0&&Re(ce.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),re!==void 0&&He(k)}function pt(k){const T=k.texture,re=r.get(k),ce=r.get(T);k.addEventListener("dispose",E);const me=k.textures,Pe=k.isWebGLCubeRenderTarget===!0,Ue=me.length>1;if(Ue||(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=T.version,c.memory.textures++),Pe){re.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer[ge]=[];for(let xe=0;xe<T.mipmaps.length;xe++)re.__webglFramebuffer[ge][xe]=n.createFramebuffer()}else re.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)re.__webglFramebuffer[ge]=n.createFramebuffer()}else re.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let ge=0,xe=me.length;ge<xe;ge++){const Be=r.get(me[ge]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),c.memory.textures++)}if(k.samples>0&&Gt(k)===!1){re.__webglMultisampledFramebuffer=n.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let ge=0;ge<me.length;ge++){const xe=me[ge];re.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,re.__webglColorRenderbuffer[ge]);const Be=a.convert(xe.format,xe.colorSpace),nt=a.convert(xe.type),ze=b(xe.internalFormat,Be,nt,xe.normalized,xe.colorSpace,k.isXRRenderTarget===!0),Oe=Et(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ze,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,re.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(re.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(re.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,T);for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)Re(re.__webglFramebuffer[ge][xe],k,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else Re(re.__webglFramebuffer[ge],k,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(T)&&C(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ge=0,xe=me.length;ge<xe;ge++){const Be=me[ge],nt=r.get(Be);let ze=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ze=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ze,nt.__webglTexture),Ee(ze,Be),Re(re.__webglFramebuffer,k,Be,n.COLOR_ATTACHMENT0+ge,ze,0),_(Be)&&C(ze)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ge=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ce.__webglTexture),Ee(ge,T),T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)Re(re.__webglFramebuffer[xe],k,T,n.COLOR_ATTACHMENT0,ge,xe);else Re(re.__webglFramebuffer,k,T,n.COLOR_ATTACHMENT0,ge,0);_(T)&&C(ge),t.unbindTexture()}k.depthBuffer&&He(k)}function at(k){const T=k.textures;for(let re=0,ce=T.length;re<ce;re++){const me=T[re];if(_(me)){const Pe=F(k),Ue=r.get(me).__webglTexture;t.bindTexture(Pe,Ue),C(Pe),t.unbindTexture()}}}const yt=[],Nt=[];function bt(k){if(k.samples>0){if(Gt(k)===!1){const T=k.textures,re=k.width,ce=k.height;let me=n.COLOR_BUFFER_BIT;const Pe=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=r.get(k),ge=T.length>1;if(ge)for(let Be=0;Be<T.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const xe=k.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Be=0;Be<T.length;Be++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Be]);const nt=r.get(T[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,re,ce,0,0,re,ce,me,n.NEAREST),d===!0&&(yt.length=0,Nt.length=0,yt.push(n.COLOR_ATTACHMENT0+Be),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(yt.push(Pe),Nt.push(Pe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Be=0;Be<T.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Be]);const nt=r.get(T[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&d){const T=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Et(k){return Math.min(o.maxSamples,k.samples)}function Gt(k){const T=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function J(k){const T=c.render.frame;m.get(k)!==T&&(m.set(k,T),k.update())}function Kt(k,T){const re=k.colorSpace,ce=k.format,me=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||re!==vu&&re!==hs&&(Pt.getTransfer(re)===zt?(ce!==Gi||me!==di)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",re)),T}function Tt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=ne,this.resetTextureUnits=te,this.getTextureUnits=X,this.setTextureUnits=ee,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=L,this.setTextureCube=w,this.rebindTextures=ot,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function TL(n,e){function t(r,o=hs){let a;const c=Pt.getTransfer(o);if(r===di)return n.UNSIGNED_BYTE;if(r===lm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===cm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===DS)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===LS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===RS)return n.BYTE;if(r===PS)return n.SHORT;if(r===nl)return n.UNSIGNED_SHORT;if(r===am)return n.INT;if(r===or)return n.UNSIGNED_INT;if(r===tr)return n.FLOAT;if(r===ar)return n.HALF_FLOAT;if(r===NS)return n.ALPHA;if(r===IS)return n.RGB;if(r===Gi)return n.RGBA;if(r===Ur)return n.DEPTH_COMPONENT;if(r===Xs)return n.DEPTH_STENCIL;if(r===FS)return n.RED;if(r===um)return n.RED_INTEGER;if(r===Ks)return n.RG;if(r===fm)return n.RG_INTEGER;if(r===dm)return n.RGBA_INTEGER;if(r===Zc||r===Jc||r===Qc||r===eu)if(c===zt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Zc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Zc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$h||r===qh||r===Kh||r===Zh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===$h)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jh||r===Qh||r===ep||r===tp||r===np||r===mu||r===ip)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Jh||r===Qh)return c===zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ep)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===tp)return a.COMPRESSED_R11_EAC;if(r===np)return a.COMPRESSED_SIGNED_R11_EAC;if(r===mu)return a.COMPRESSED_RG11_EAC;if(r===ip)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===rp||r===sp||r===op||r===ap||r===lp||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===vp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===rp)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sp)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===op)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ap)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lp)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cp)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===up)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fp)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dp)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hp)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pp)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mp)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gp)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vp)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xp||r===_p||r===yp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===xp)return c===zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_p)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sp||r===Mp||r===gu||r===wp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Sp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Mp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===il?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const AL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new GS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new lr({vertexShader:AL,fragmentShader:bL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RL extends Zs{constructor(e,t){super();const r=this;let o=null,a=1,c=null,u="local-floor",d=1,h=null,m=null,v=null,p=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",x=new CL,_={},C=t.getContextAttributes();let F=null,b=null;const D=[],N=[],O=new lt;let E=null,I=null;const U=new fi;U.viewport=new sn;const V=new fi;V.viewport=new sn;const W=[U,V],te=new UR;let X=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=D[q];return ie===void 0&&(ie=new Wd,D[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=D[q];return ie===void 0&&(ie=new Wd,D[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=D[q];return ie===void 0&&(ie=new Wd,D[q]=ie),ie.getHandSpace()};function ne(q){const ie=N.indexOf(q.inputSource);if(ie===-1)return;const ye=D[ie];ye!==void 0&&(ye.update(q.inputSource,q.frame,h||c),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){o.removeEventListener("select",ne),o.removeEventListener("selectstart",ne),o.removeEventListener("selectend",ne),o.removeEventListener("squeeze",ne),o.removeEventListener("squeezestart",ne),o.removeEventListener("squeezeend",ne),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",j);for(let q=0;q<D.length;q++){const ie=N[q];ie!==null&&(N[q]=null,D[q].disconnect(ie))}X=null,ee=null,x.reset();for(const q in _)delete _[q];if(e.setRenderTarget(F),y=null,p=null,v=null,o=null,b=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),I!==null){const q=I.camera;q.fov=I.fov,q.zoom=I.zoom,q.updateProjectionMatrix(),I=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){u=q,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return p!==null?p:y},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",ne),o.addEventListener("selectstart",ne),o.addEventListener("selectend",ne),o.addEventListener("squeeze",ne),o.addEventListener("squeezestart",ne),o.addEventListener("squeezeend",ne),o.addEventListener("end",K),o.addEventListener("inputsourceschange",j),C.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,Re=null;C.depth&&(Re=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=C.stencil?Xs:Ur,ke=C.stencil?il:or);const Ze={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:a};v=this.getBinding(),p=v.createProjectionLayer(Ze),o.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new Xi(p.textureWidth,p.textureHeight,{format:Gi,type:di,depthTexture:new sl(p.textureWidth,p.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{const ye={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new Xi(y.framebufferWidth,y.framebufferHeight,{format:Gi,type:di,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(u),Te.setContext(o),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(q){for(let ie=0;ie<q.removed.length;ie++){const ye=q.removed[ie],ke=N.indexOf(ye);ke>=0&&(N[ke]=null,D[ke].disconnect(ye))}for(let ie=0;ie<q.added.length;ie++){const ye=q.added[ie];let ke=N.indexOf(ye);if(ke===-1){for(let Ze=0;Ze<D.length;Ze++)if(Ze>=N.length){N.push(ye),ke=Ze;break}else if(N[Ze]===null){N[Ze]=ye,ke=Ze;break}if(ke===-1)break}const Re=D[ke];Re&&Re.connect(ye)}}const Y=new le,L=new le;function w(q,ie,ye){Y.setFromMatrixPosition(ie.matrixWorld),L.setFromMatrixPosition(ye.matrixWorld);const ke=Y.distanceTo(L),Re=ie.projectionMatrix.elements,Ze=ye.projectionMatrix.elements,gt=Re[14]/(Re[10]-1),He=Re[14]/(Re[10]+1),ot=(Re[9]+1)/Re[5],pt=(Re[9]-1)/Re[5],at=(Re[8]-1)/Re[0],yt=(Ze[8]+1)/Ze[0],Nt=gt*at,bt=gt*yt,Et=ke/(-at+yt),Gt=Et*-at;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Gt),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const J=gt+Et,Kt=He+Et,Tt=Nt-Gt,k=bt+(ke-Gt),T=ot*He/Kt*J,re=pt*He/Kt*J;q.projectionMatrix.makePerspective(Tt,k,T,re,J,Kt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function H(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;let ie=q.near,ye=q.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),te.near=V.near=U.near=ie,te.far=V.far=U.far=ye,(X!==te.near||ee!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),X=te.near,ee=te.far),te.layers.mask=q.layers.mask|6,U.layers.mask=te.layers.mask&-5,V.layers.mask=te.layers.mask&-3;const ke=q.parent,Re=te.cameras;H(te,ke);for(let Ze=0;Ze<Re.length;Ze++)H(Re[Ze],ke);Re.length===2?w(te,U,V):te.projectionMatrix.copy(U.projectionMatrix),I===null&&q.isPerspectiveCamera&&(I={camera:q,fov:q.fov,zoom:q.zoom}),fe(q,te,ke)};function fe(q,ie,ye){ye===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Tp*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(p===null&&y===null))return d},this.setFoveation=function(q){d=q,p!==null&&(p.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(te)},this.getCameraTexture=function(q){return _[q]};let Se=null;function Ee(q,ie){if(m=ie.getViewerPose(h||c),M=ie,m!==null){const ye=m.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let ke=!1;ye.length!==te.cameras.length&&(te.cameras.length=0,ke=!0);for(let He=0;He<ye.length;He++){const ot=ye[He];let pt=null;if(y!==null)pt=y.getViewport(ot);else{const yt=v.getViewSubImage(p,ot);pt=yt.viewport,He===0&&(e.setRenderTargetTextures(b,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(b))}let at=W[He];at===void 0&&(at=new fi,at.layers.enable(He),at.viewport=new sn,W[He]=at),at.matrix.fromArray(ot.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ot.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(pt.x,pt.y,pt.width,pt.height),He===0&&(te.matrix.copy(at.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),ke===!0&&te.cameras.push(at)}const Re=o.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const He=v.getDepthInformation(ye[0]);He&&He.isValid&&He.texture&&x.init(He,o.renderState)}if(Re&&Re.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let He=0;He<ye.length;He++){const ot=ye[He].camera;if(ot){let pt=_[ot];pt||(pt=new GS,_[ot]=pt);const at=v.getCameraImage(ot);pt.sourceTexture=at}}}}for(let ye=0;ye<D.length;ye++){const ke=N[ye],Re=D[ye];ke!==null&&Re!==void 0&&Re.update(ke,ie,h||c)}Se&&Se(q,ie),ie.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ie}),M=null}const Te=new YS;Te.setAnimationLoop(Ee),this.setAnimationLoop=function(q){Se=q},this.dispose=function(){}}}const PL=new cn,eM=new xt;eM.set(-1,0,0,0,1,0,0,0,1);function DL(n,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,WS(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function o(x,_,C,F,b){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?a(x,_):_.isMeshLambertMaterial?(a(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(a(x,_),v(x,_)):_.isMeshPhongMaterial?(a(x,_),m(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(a(x,_),p(x,_),_.isMeshPhysicalMaterial&&y(x,_,b)):_.isMeshMatcapMaterial?(a(x,_),M(x,_)):_.isMeshDepthMaterial?a(x,_):_.isMeshDistanceMaterial?(a(x,_),A(x,_)):_.isMeshNormalMaterial?a(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&u(x,_)):_.isPointsMaterial?d(x,_,C,F):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===ti&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===ti&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const C=e.get(_),F=C.envMap,b=C.envMapRotation;F&&(x.envMap.value=F,x.envMapRotation.value.setFromMatrix4(PL.makeRotationFromEuler(b)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(eM),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function u(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function d(x,_,C,F){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*C,x.scale.value=F*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function p(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function y(x,_,C){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ti&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,_){_.matcap&&(x.matcap.value=_.matcap)}function A(x,_){const C=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function LL(n,e,t,r){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,D){const N=D.program;r.uniformBlockBinding(b,N)}function h(b,D){let N=o[b.id];N===void 0&&(x(b),N=m(b),o[b.id]=N,b.addEventListener("dispose",C));const O=D.program;r.updateUBOMapping(b,O);const E=e.render.frame;a[b.id]!==E&&(p(b),a[b.id]=E)}function m(b){const D=v();b.__bindingPointIndex=D;const N=n.createBuffer(),O=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,N),n.bufferData(n.UNIFORM_BUFFER,O,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,N),N}function v(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const D=o[b.id],N=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let E=0,I=N.length;E<I;E++){const U=N[E];if(Array.isArray(U))for(let V=0,W=U.length;V<W;V++)y(U[V],E,V,O);else y(U,E,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(b,D,N,O){if(A(b,D,N,O)===!0){const E=b.__offset,I=b.value;if(Array.isArray(I)){let U=0;for(let V=0;V<I.length;V++){const W=I[V],te=_(W);M(W,b.__data,U),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(U+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(I,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,b.__data)}}function M(b,D,N){typeof b=="number"||typeof b=="boolean"?D[0]=b:b.isMatrix3?(D[0]=b.elements[0],D[1]=b.elements[1],D[2]=b.elements[2],D[3]=0,D[4]=b.elements[3],D[5]=b.elements[4],D[6]=b.elements[5],D[7]=0,D[8]=b.elements[6],D[9]=b.elements[7],D[10]=b.elements[8],D[11]=0):ArrayBuffer.isView(b)?D.set(new b.constructor(b.buffer,b.byteOffset,D.length)):b.toArray(D,N)}function A(b,D,N,O){const E=b.value,I=D+"_"+N;if(O[I]===void 0)return typeof E=="number"||typeof E=="boolean"?O[I]=E:ArrayBuffer.isView(E)?O[I]=E.slice():O[I]=E.clone(),!0;{const U=O[I];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return O[I]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(U.equals(E)===!1)return U.copy(E),!0}}return!1}function x(b){const D=b.uniforms;let N=0;const O=16;for(let I=0,U=D.length;I<U;I++){const V=Array.isArray(D[I])?D[I]:[D[I]];for(let W=0,te=V.length;W<te;W++){const X=V[W],ee=Array.isArray(X.value)?X.value:[X.value];for(let ne=0,K=ee.length;ne<K;ne++){const j=ee[ne],Y=_(j),L=N%O,w=L%Y.boundary,H=L+w;N+=w,H!==0&&O-H<Y.storage&&(N+=O-H),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=N,N+=Y.storage}}}const E=N%O;return E>0&&(N+=O-E),b.__size=N,b.__cache={},this}function _(b){const D={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(D.boundary=4,D.storage=4):b.isVector2?(D.boundary=8,D.storage=8):b.isVector3||b.isColor?(D.boundary=16,D.storage=12):b.isVector4?(D.boundary=16,D.storage=16):b.isMatrix3?(D.boundary=48,D.storage=48):b.isMatrix4?(D.boundary=64,D.storage=64):b.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(D.boundary=16,D.storage=b.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",b),D}function C(b){const D=b.target;D.removeEventListener("dispose",C);const N=c.indexOf(D.__bindingPointIndex);c.splice(N,1),n.deleteBuffer(o[D.id]),delete o[D.id],delete a[D.id]}function F(){for(const b in o)n.deleteBuffer(o[b]);c=[],o={},a={}}return{bind:d,update:h,dispose:F}}const NL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function IL(){return Zi===null&&(Zi=new yR(NL,16,16,Ks,ar),Zi.name="DFG_LUT",Zi.minFilter=zn,Zi.magFilter=zn,Zi.wrapS=Lr,Zi.wrapT=Lr,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class FL{constructor(e={}){const{canvas:t=$C(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:p=!1,outputBufferType:y=di}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const A=y,x=new Set([dm,fm,um]),_=new Set([di,or,nl,il,lm,cm]),C=new Uint32Array(4),F=new Int32Array(4),b=new le;let D=null,N=null;const O=[],E=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let V=!1,W=null,te=null,X=null,ee=null;this._outputColorSpace=Mi;let ne=0,K=0,j=null,Y=-1,L=null;const w=new sn,H=new sn;let fe=null;const Se=new Lt(0);let Ee=0,Te=t.width,q=t.height,ie=1,ye=null,ke=null;const Re=new sn(0,0,Te,q),Ze=new sn(0,0,Te,q);let gt=!1;const He=new vm;let ot=!1,pt=!1;const at=new cn,yt=new le,Nt=new sn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Gt(){return j===null?ie:1}let J=r;function Kt(P,Z){return t.getContext(P,Z)}let Tt,k,T,re,ce,me,Pe,Ue,ge,xe,Be,nt,ze,Oe,ve,Ie,Le,G,be,de,Me,Ne,_e;try{const P={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sm}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Vt,!1),J===null){const Z="webgl2";if(J=Kt(Z,P),J===null)throw Kt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(P){throw t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),Ot("WebGLRenderer: "+P.message),P}function We(){Tt=new I3(J),Tt.init(),Me=new TL(J,Tt),k=new E3(J,Tt,e,Me),T=new wL(J,Tt),k.reversedDepthBuffer&&p&&T.buffers.depth.setReversed(!0),te=J.createFramebuffer(),X=J.createFramebuffer(),ee=J.createFramebuffer(),re=new O3(J),ce=new cL,me=new EL(J,Tt,T,ce,k,Me,re),Pe=new N3(U),Ue=new BR(J),Ne=new M3(J,Ue),ge=new F3(J,Ue,re,Ne),xe=new B3(J,ge,Ue,Ne,re),G=new k3(J,k,me),ve=new T3(ce),Be=new lL(U,Pe,Tt,k,Ne,ve),nt=new DL(U,ce),ze=new fL,Oe=new vL(Tt),Le=new S3(U,Pe,T,xe,M,d),Ie=new ML(U,xe,k),_e=new LL(J,re,k,T),be=new w3(J,Tt,re),de=new U3(J,Tt,re),re.programs=Be.programs,U.capabilities=k,U.extensions=Tt,U.properties=ce,U.renderLists=ze,U.shadowMap=Ie,U.state=T,U.info=re}A!==di&&(I=new V3(A,t.width,t.height,u,o,a));const Ye=new RL(U,J);this.xr=Ye,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const P=Tt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Tt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(P){P!==void 0&&(ie=P,this.setSize(Te,q,!1))},this.getSize=function(P){return P.set(Te,q)},this.setSize=function(P,Z,he=!0){if(Ye.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=P,q=Z,t.width=Math.floor(P*ie),t.height=Math.floor(Z*ie),he===!0&&(t.style.width=P+"px",t.style.height=Z+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(Te*ie,q*ie).floor()},this.setDrawingBufferSize=function(P,Z,he){Te=P,q=Z,ie=he,t.width=Math.floor(P*he),t.height=Math.floor(Z*he),this.setViewport(0,0,P,Z)},this.setEffects=function(P){if(A===di){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let Z=0;Z<P.length;Z++)if(P[Z].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(Re)},this.setViewport=function(P,Z,he,oe){P.isVector4?Re.set(P.x,P.y,P.z,P.w):Re.set(P,Z,he,oe),T.viewport(w.copy(Re).multiplyScalar(ie).round())},this.getScissor=function(P){return P.copy(Ze)},this.setScissor=function(P,Z,he,oe){P.isVector4?Ze.set(P.x,P.y,P.z,P.w):Ze.set(P,Z,he,oe),T.scissor(H.copy(Ze).multiplyScalar(ie).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(P){T.setScissorTest(gt=P)},this.setOpaqueSort=function(P){ye=P},this.setTransparentSort=function(P){ke=P},this.getClearColor=function(P){return P.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(P=!0,Z=!0,he=!0){let oe=0;if(P){let se=!1;if(j!==null){const Xe=j.texture.format;se=x.has(Xe)}if(se){const Xe=j.texture.type,Ve=_.has(Xe),Ge=Le.getClearColor(),Qe=Le.getClearAlpha(),rt=Ge.r,mt=Ge.g,_t=Ge.b;Ve?(C[0]=rt,C[1]=mt,C[2]=_t,C[3]=Qe,J.clearBufferuiv(J.COLOR,0,C)):(F[0]=rt,F[1]=mt,F[2]=_t,F[3]=Qe,J.clearBufferiv(J.COLOR,0,F))}else oe|=J.COLOR_BUFFER_BIT}Z&&(oe|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(oe|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&J.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),W=P},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),Le.dispose(),ze.dispose(),Oe.dispose(),ce.dispose(),Pe.dispose(),xe.dispose(),Ne.dispose(),_e.dispose(),Be.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",kr),Ye.removeEventListener("sessionend",Br),dn.stop()};function vt(P){P.preventDefault(),Sx("WebGLRenderer: Context Lost."),V=!0}function ht(){Sx("WebGLRenderer: Context Restored."),V=!1;const P=re.autoReset,Z=Ie.enabled,he=Ie.autoUpdate,oe=Ie.needsUpdate,se=Ie.type;We(),re.autoReset=P,Ie.enabled=Z,Ie.autoUpdate=he,Ie.needsUpdate=oe,Ie.type=se}function Vt(P){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ln(P){const Z=P.target;Z.removeEventListener("dispose",Ln),ii(Z)}function ii(P){Or(P),ce.remove(P)}function Or(P){const Z=ce.get(P).programs;Z!==void 0&&(Z.forEach(function(he){Be.releaseProgram(he)}),P.isShaderMaterial&&Be.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,he,oe,se,Xe){Z===null&&(Z=bt);const Ve=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ge=tn(P,Z,he,oe,se);T.setMaterial(oe,Ve);let Qe=he.index,rt=1;if(oe.wireframe===!0){if(Qe=ge.getWireframeAttribute(he),Qe===void 0)return;rt=2}const mt=he.drawRange,_t=he.attributes.position;let Ke=mt.start*rt,Ct=(mt.start+mt.count)*rt;Xe!==null&&(Ke=Math.max(Ke,Xe.start*rt),Ct=Math.min(Ct,(Xe.start+Xe.count)*rt)),Qe!==null?(Ke=Math.max(Ke,0),Ct=Math.min(Ct,Qe.count)):_t!=null&&(Ke=Math.max(Ke,0),Ct=Math.min(Ct,_t.count));const on=Ct-Ke;if(on<0||on===1/0)return;Ne.setup(se,oe,Ge,he,Qe);let Wt,kt=be;if(Qe!==null&&(Wt=Ue.get(Qe),kt=de,kt.setIndex(Wt)),se.isMesh)oe.wireframe===!0?(T.setLineWidth(oe.wireframeLinewidth*Gt()),kt.setMode(J.LINES)):kt.setMode(J.TRIANGLES);else if(se.isLine){let vn=oe.linewidth;vn===void 0&&(vn=1),T.setLineWidth(vn*Gt()),se.isLineSegments?kt.setMode(J.LINES):se.isLineLoop?kt.setMode(J.LINE_LOOP):kt.setMode(J.LINE_STRIP)}else se.isPoints?kt.setMode(J.POINTS):se.isSprite&&kt.setMode(J.TRIANGLES);if(se.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))kt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const vn=se._multiDrawStarts,$e=se._multiDrawCounts,un=se._multiDrawCount,Rt=Qe?Ue.get(Qe).bytesPerElement:1,Nn=ce.get(oe).currentProgram.getUniforms();for(let St=0;St<un;St++)Nn.setValue(J,"_gl_DrawID",St),kt.render(vn[St]/Rt,$e[St])}else if(se.isInstancedMesh)kt.renderInstances(Ke,on,se.count);else if(he.isInstancedBufferGeometry){const vn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,$e=Math.min(he.instanceCount,vn);kt.renderInstances(Ke,on,$e)}else kt.render(Ke,on)};function cr(P,Z,he,oe){W!==null&&P.isNodeMaterial&&W.setObject(oe,P),ot===!0&&ve.setState(P,he,!1),P.transparent===!0&&P.side===Dr&&P.forceSinglePass===!1?(P.side=ti,P.needsUpdate=!0,ys(P,Z,oe),P.side=$s,P.needsUpdate=!0,ys(P,Z,oe),P.side=Dr):ys(P,Z,oe)}this.compile=function(P,Z,he=null){he===null&&(he=P),W!==null&&W.renderStart(P,Z,he),N=Oe.get(he),N.init(Z),E.push(N),he.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),P!==he&&P.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),N.setupLights(),W!==null&&W.updateLights(N.state.lightsArray),pt=this.localClippingEnabled,ot=ve.init(this.clippingPlanes,pt),ot===!0&&ve.setGlobalState(this.clippingPlanes,Z),W!==null&&Ie.render(N.state.shadowsArray,he,Z);const oe=new Set;return P.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Xe=se.material;if(Xe)if(Array.isArray(Xe))for(let Ve=0;Ve<Xe.length;Ve++){const Ge=Xe[Ve];cr(Ge,he,Z,se),oe.add(Ge)}else cr(Xe,he,Z,se),oe.add(Xe)}),N=E.pop(),W!==null&&W.renderEnd(),oe},this.compileAsync=function(P,Z,he=null){const oe=this.compile(P,Z,he);return new Promise(se=>{function Xe(){if(oe.forEach(function(Ve){const Qe=ce.get(Ve).currentProgram;(Qe===void 0||Qe.isReady())&&oe.delete(Ve)}),oe.size===0){se(P);return}setTimeout(Xe,10)}Tt.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let ur=null;function Qo(P){ur&&ur(P)}function kr(){dn.stop()}function Br(){dn.start()}const dn=new YS;dn.setAnimationLoop(Qo),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(P){ur=P,Ye.setAnimationLoop(P),P===null?dn.stop():dn.start()},Ye.addEventListener("sessionstart",kr),Ye.addEventListener("sessionend",Br),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;W!==null&&W.renderStart(P,Z);const he=Ye.enabled===!0&&Ye.isPresenting===!0,oe=I!==null&&(j===null||he)&&I.begin(U,j);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(Z),Z=Ye.getCamera()),P.isScene===!0&&P.onBeforeRender(U,P,Z,j),N=Oe.get(P,E.length),N.init(Z),N.state.textureUnits=me.getTextureUnits(),E.push(N),at.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),He.setFromProjectionMatrix(at,nr,Z.reversedDepth),pt=this.localClippingEnabled,ot=ve.init(this.clippingPlanes,pt),D=ze.get(P,O.length),D.init(),O.push(D),Ye.enabled===!0&&Ye.isPresenting===!0){const Ve=U.xr.getDepthSensingMesh();Ve!==null&&fr(Ve,Z,-1/0,U.sortObjects)}fr(P,Z,0,U.sortObjects),D.finish(),W!==null&&W.updateLights(N.state.lightsArray),U.sortObjects===!0&&D.sort(ye,ke),Et=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Et&&Le.addToRenderList(D,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&ve.beginShadows();const se=N.state.shadowsArray;if(Ie.render(se,P,Z),ot===!0&&ve.endShadows(),(oe&&I.hasRenderPass())===!1){const Ve=D.opaque,Ge=D.transmissive;if(N.setupLights(),Z.isArrayCamera){const Qe=Z.cameras;if(Ge.length>0)for(let rt=0,mt=Qe.length;rt<mt;rt++){const _t=Qe[rt];dr(Ve,Ge,P,_t)}Et&&Le.render(P);for(let rt=0,mt=Qe.length;rt<mt;rt++){const _t=Qe[rt];zr(D,P,_t,_t.viewport)}}else Ge.length>0&&dr(Ve,Ge,P,Z),Et&&Le.render(P),zr(D,P,Z)}j!==null&&K===0&&(me.updateMultisampleRenderTarget(j),me.updateRenderTargetMipmap(j)),oe&&I.end(U),P.isScene===!0&&P.onAfterRender(U,P,Z),Ne.resetDefaultState(),Y=-1,L=null,E.pop(),E.length>0?(N=E[E.length-1],me.setTextureUnits(N.state.textureUnits),ot===!0&&ve.setGlobalState(U.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?D=O[O.length-1]:D=null,W!==null&&W.renderEnd()};function fr(P,Z,he,oe){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)he=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLightProbeGrid)N.pushLightProbeGrid(P);else if(P.isLight)N.pushLight(P),P.castShadow&&N.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(He)){oe&&Nt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(at);const Ve=xe.update(P),Ge=P.material;Ge.visible&&D.push(P,Ve,Ge,he,Nt.z,null,Z)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(He))){const Ve=xe.update(P),Ge=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Nt.copy(P.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Nt.copy(Ve.boundingSphere.center)),Nt.applyMatrix4(P.matrixWorld).applyMatrix4(at)),Array.isArray(Ge)){const Qe=Ve.groups;for(let rt=0,mt=Qe.length;rt<mt;rt++){const _t=Qe[rt],Ke=Ge[_t.materialIndex];Ke&&Ke.visible&&D.push(P,Ve,Ke,he,Nt.z,_t,Z)}}else Ge.visible&&D.push(P,Ve,Ge,he,Nt.z,null,Z)}}const Xe=P.children;for(let Ve=0,Ge=Xe.length;Ve<Ge;Ve++)fr(Xe[Ve],Z,he,oe)}function zr(P,Z,he,oe){const{opaque:se,transmissive:Xe,transparent:Ve}=P;N.setupLightsView(he),ot===!0&&ve.setGlobalState(U.clippingPlanes,he),oe&&T.viewport(w.copy(oe)),se.length>0&&hr(se,Z,he),Xe.length>0&&hr(Xe,Z,he),Ve.length>0&&hr(Ve,Z,he),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function dr(P,Z,he,oe){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[oe.id]===void 0){const Ke=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[oe.id]=new Xi(1,1,{generateMipmaps:!0,type:Ke?ar:di,minFilter:Ws,samples:Math.max(4,k.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Xe=N.state.transmissionRenderTarget[oe.id],Ve=oe.viewport||w;Xe.setSize(Ve.z*U.transmissionResolutionScale,Ve.w*U.transmissionResolutionScale);const Ge=U.getRenderTarget(),Qe=U.getActiveCubeFace(),rt=U.getActiveMipmapLevel();U.setRenderTarget(Xe),U.getClearColor(Se),Ee=U.getClearAlpha(),Ee<1&&U.setClearColor(16777215,.5),U.clear(),Et&&Le.render(he);const mt=U.toneMapping;U.toneMapping=rr;const _t=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),N.setupLightsView(oe),ot===!0&&ve.setGlobalState(U.clippingPlanes,oe),hr(P,he,oe),me.updateMultisampleRenderTarget(Xe),me.updateRenderTargetMipmap(Xe),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ct=0,on=Z.length;Ct<on;Ct++){const Wt=Z[Ct],{object:kt,geometry:vn,material:$e,group:un}=Wt;if($e.side===Dr&&kt.layers.test(oe.layers)){const Rt=$e.side;$e.side=ti,$e.needsUpdate=!0,pr(kt,he,oe,vn,$e,un),$e.side=Rt,$e.needsUpdate=!0,Ke=!0}}Ke===!0&&(me.updateMultisampleRenderTarget(Xe),me.updateRenderTargetMipmap(Xe))}U.setRenderTarget(Ge,Qe,rt),U.setClearColor(Se,Ee),_t!==void 0&&(oe.viewport=_t),U.toneMapping=mt}function hr(P,Z,he){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let se=0,Xe=P.length;se<Xe;se++){const Ve=P[se],{object:Ge,geometry:Qe,group:rt}=Ve;let mt=Ve.material;mt.allowOverride===!0&&oe!==null&&(mt=oe),Ge.layers.test(he.layers)&&pr(Ge,Z,he,Qe,mt,rt)}}function pr(P,Z,he,oe,se,Xe){W!==null&&se.isNodeMaterial&&W.setObject(P,se),P.onBeforeRender(U,Z,he,oe,se,Xe),P.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),se.onBeforeRender(U,Z,he,oe,P,Xe),se.transparent===!0&&se.side===Dr&&se.forceSinglePass===!1?(se.side=ti,se.needsUpdate=!0,U.renderBufferDirect(he,Z,oe,se,P,Xe),se.side=$s,se.needsUpdate=!0,U.renderBufferDirect(he,Z,oe,se,P,Xe),se.side=Dr):U.renderBufferDirect(he,Z,oe,se,P,Xe),P.onAfterRender(U,Z,he,oe,se,Xe)}function ys(P,Z,he){Z.isScene!==!0&&(Z=bt);const oe=ce.get(P),se=N.state.lights,Xe=N.state.shadowsArray,Ve=se.state.version,Ge=Be.getParameters(P,se.state,Xe,Z,he,N.state.lightProbeGridArray),Qe=Be.getProgramCacheKey(Ge);let rt=oe.programs;oe.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?Z.environment:null,oe.fog=Z.fog;const mt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;oe.envMap=Pe.get(P.envMap||oe.environment,mt),oe.envMapRotation=oe.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,rt===void 0&&(P.addEventListener("dispose",Ln),rt=new Map,oe.programs=rt);let _t=rt.get(Qe);if(_t!==void 0){if(oe.currentProgram===_t&&oe.lightsStateVersion===Ve)return pl(P,Ge),_t}else Ge.uniforms=Be.getUniforms(P),W!==null&&P.isNodeMaterial&&W.build(P,he,Ge),P.onBeforeCompile(Ge,U),_t=Be.acquireProgram(Ge,Qe),rt.set(Qe,_t),oe.uniforms=Ge.uniforms;const Ke=oe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ke.clippingPlanes=ve.uniform),pl(P,Ge),oe.needsLights=ta(P),oe.lightsStateVersion=Ve,oe.needsLights&&(Ke.ambientLightColor.value=se.state.ambient,Ke.lightProbe.value=se.state.probe,Ke.sunLights.value=se.state.sun,Ke.sunLightShadows.value=se.state.sunShadow,Ke.directionalLights.value=se.state.directional,Ke.directionalLightShadows.value=se.state.directionalShadow,Ke.spotLights.value=se.state.spot,Ke.spotLightShadows.value=se.state.spotShadow,Ke.rectAreaLights.value=se.state.rectArea,Ke.ltc_1.value=se.state.rectAreaLTC1,Ke.ltc_2.value=se.state.rectAreaLTC2,Ke.pointLights.value=se.state.point,Ke.pointLightShadows.value=se.state.pointShadow,Ke.hemisphereLights.value=se.state.hemi,Ke.sunShadowMatrix.value=se.state.sunShadowMatrix,Ke.sunShadowCascade.value=se.state.sunShadowCascade,Ke.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ke.spotLightMatrix.value=se.state.spotLightMatrix,Ke.spotLightMap.value=se.state.spotLightMap,Ke.pointShadowMatrix.value=se.state.pointShadowMatrix),oe.lightProbeGrid=N.state.lightProbeGridArray.length>0,oe.currentProgram=_t,oe.uniformsList=null,_t}function ea(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=tu.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function pl(P,Z){const he=ce.get(P);he.outputColorSpace=Z.outputColorSpace,he.batching=Z.batching,he.batchingColor=Z.batchingColor,he.instancing=Z.instancing,he.instancingColor=Z.instancingColor,he.instancingMorph=Z.instancingMorph,he.skinning=Z.skinning,he.morphTargets=Z.morphTargets,he.morphNormals=Z.morphNormals,he.morphColors=Z.morphColors,he.morphTargetsCount=Z.morphTargetsCount,he.numClippingPlanes=Z.numClippingPlanes,he.numIntersection=Z.numClipIntersection,he.vertexAlphas=Z.vertexAlphas,he.vertexTangents=Z.vertexTangents,he.toneMapping=Z.toneMapping}function Iu(P,Z){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;b.setFromMatrixPosition(Z.matrixWorld);for(let he=0,oe=P.length;he<oe;he++){const se=P[he];if(se.texture!==null&&se.boundingBox.containsPoint(b))return se}return null}function tn(P,Z,he,oe,se){Z.isScene!==!0&&(Z=bt),me.resetTextureUnits();const Xe=Z.fog,Ve=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?Z.environment:null,Ge=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Pt.workingColorSpace,Qe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,rt=Pe.get(oe.envMap||Ve,Qe),mt=oe.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,_t=!!he.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ke=!!he.morphAttributes.position,Ct=!!he.morphAttributes.normal,on=!!he.morphAttributes.color;let Wt=rr;oe.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Wt=U.toneMapping);const kt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,vn=kt!==void 0?kt.length:0,$e=ce.get(oe),un=N.state.lights;if(ot===!0&&(pt===!0||P!==L)){const Bt=P===L&&oe.id===Y;ve.setState(oe,P,Bt)}let Rt=!1;oe.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==un.state.version||$e.outputColorSpace!==Ge||se.isBatchedMesh&&$e.batching===!1||!se.isBatchedMesh&&$e.batching===!0||se.isBatchedMesh&&$e.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&$e.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&$e.instancing===!1||!se.isInstancedMesh&&$e.instancing===!0||se.isSkinnedMesh&&$e.skinning===!1||!se.isSkinnedMesh&&$e.skinning===!0||se.isInstancedMesh&&$e.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&$e.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&$e.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&$e.instancingMorph===!1&&se.morphTexture!==null||$e.envMap!==rt||oe.fog===!0&&$e.fog!==Xe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ve.numPlanes||$e.numIntersection!==ve.numIntersection)||$e.vertexAlphas!==mt||$e.vertexTangents!==_t||$e.morphTargets!==Ke||$e.morphNormals!==Ct||$e.morphColors!==on||$e.toneMapping!==Wt||$e.morphTargetsCount!==vn||!!$e.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Rt=!0):(Rt=!0,$e.__version=oe.version);let Nn=$e.currentProgram;Rt===!0&&(Nn=ys(oe,Z,se),W&&oe.isNodeMaterial&&W.onUpdateProgram(oe,Nn,$e));let St=!1,Ti=!1,mr=!1;const Ft=Nn.getUniforms(),Zt=$e.uniforms;if(T.useProgram(Nn.program)&&(St=!0,Ti=!0,mr=!0),oe.id!==Y&&(Y=oe.id,Ti=!0),$e.needsLights){const Bt=Iu(N.state.lightProbeGridArray,se);$e.lightProbeGrid!==Bt&&($e.lightProbeGrid=Bt,Ti=!0)}if(St||L!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ft.setValue(J,"projectionMatrix",P.projectionMatrix),Ft.setValue(J,"viewMatrix",P.matrixWorldInverse);const pi=Ft.map.cameraPosition;pi!==void 0&&pi.setValue(J,yt.setFromMatrixPosition(P.matrixWorld)),k.logarithmicDepthBuffer&&Ft.setValue(J,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ft.setValue(J,"isOrthographic",P.isOrthographicCamera===!0),L!==P&&(L=P,Ti=!0,mr=!0)}if($e.needsLights&&(un.state.sunShadowMap.length>0&&Ft.setValue(J,"sunShadowMap",un.state.sunShadowMap,me),un.state.directionalShadowMap.length>0&&Ft.setValue(J,"directionalShadowMap",un.state.directionalShadowMap,me),un.state.spotShadowMap.length>0&&Ft.setValue(J,"spotShadowMap",un.state.spotShadowMap,me),un.state.pointShadowMap.length>0&&Ft.setValue(J,"pointShadowMap",un.state.pointShadowMap,me)),se.isSkinnedMesh){Ft.setOptional(J,se,"bindMatrix"),Ft.setOptional(J,se,"bindMatrixInverse");const Bt=se.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ft.setValue(J,"boneTexture",Bt.boneTexture,me))}se.isBatchedMesh&&(Ft.setOptional(J,se,"batchingTexture"),Ft.setValue(J,"batchingTexture",se._matricesTexture,me),Ft.setOptional(J,se,"batchingIdTexture"),Ft.setValue(J,"batchingIdTexture",se._indirectTexture,me),Ft.setOptional(J,se,"batchingColorTexture"),se._colorsTexture!==null&&Ft.setValue(J,"batchingColorTexture",se._colorsTexture,me));const Ai=he.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&G.update(se,he,Nn),(Ti||$e.receiveShadow!==se.receiveShadow)&&($e.receiveShadow=se.receiveShadow,Ft.setValue(J,"receiveShadow",se.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&Z.environment!==null&&(Zt.envMapIntensity.value=Z.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=IL()),Ti){if(Ft.setValue(J,"toneMappingExposure",U.toneMappingExposure),$e.needsLights&&Fu(Zt,mr),Xe&&oe.fog===!0&&nt.refreshFogUniforms(Zt,Xe),nt.refreshMaterialUniforms(Zt,oe,ie,q,N.state.transmissionRenderTarget[P.id]),$e.needsLights&&$e.lightProbeGrid){const Bt=$e.lightProbeGrid;Zt.probesSH.value=Bt.texture,Zt.probesMin.value.copy(Bt.boundingBox.min),Zt.probesMax.value.copy(Bt.boundingBox.max),Zt.probesResolution.value.copy(Bt.resolution)}tu.upload(J,ea($e),Zt,me)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(tu.upload(J,ea($e),Zt,me),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ft.setValue(J,"center",se.center),Ft.setValue(J,"modelViewMatrix",se.modelViewMatrix),Ft.setValue(J,"normalMatrix",se.normalMatrix),Ft.setValue(J,"modelMatrix",se.matrixWorld),oe.uniformsGroups!==void 0){const Bt=oe.uniformsGroups;for(let pi=0,bi=Bt.length;pi<bi;pi++){const Ci=Bt[pi];_e.update(Ci,Nn),_e.bind(Ci,Nn)}}return Nn}function Fu(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.sunLights.needsUpdate=Z,P.sunLightShadows.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function ta(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(P,Z,he){const oe=ce.get(P);oe.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ce.get(P.texture).__webglTexture=Z,ce.get(P.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:he,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Z){const he=ce.get(P);he.__webglFramebuffer=Z,he.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,he=0){j=P,ne=Z,K=he;let oe=null,se=!1,Xe=!1;if(P){const Ge=ce.get(P);if(Ge.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(J.FRAMEBUFFER,Ge.__webglFramebuffer),w.copy(P.viewport),H.copy(P.scissor),fe=P.scissorTest,T.viewport(w),T.scissor(H),T.setScissorTest(fe),Y=-1;return}else if(Ge.__webglFramebuffer===void 0)me.setupRenderTarget(P);else if(Ge.__hasExternalTextures)me.rebindTextures(P,ce.get(P.texture).__webglTexture,ce.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const mt=P.depthTexture;if(Ge.__boundDepthTexture!==mt){if(mt!==null&&ce.has(mt)&&(P.width!==mt.image.width||P.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(P)}}const Qe=P.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Xe=!0);const rt=ce.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(rt[Z])?oe=rt[Z][he]:oe=rt[Z],se=!0):P.samples>0&&me.useMultisampledRTT(P)===!1?oe=ce.get(P).__webglMultisampledFramebuffer:Array.isArray(rt)?oe=rt[he]:oe=rt,w.copy(P.viewport),H.copy(P.scissor),fe=P.scissorTest}else w.copy(Re).multiplyScalar(ie).floor(),H.copy(Ze).multiplyScalar(ie).floor(),fe=gt;if(he!==0&&(oe=te),T.bindFramebuffer(J.FRAMEBUFFER,oe)&&T.drawBuffers(P,oe),T.viewport(w),T.scissor(H),T.setScissorTest(fe),se){const Ge=ce.get(P.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ge.__webglTexture,he)}else if(Xe){const Ge=Z;for(let Qe=0;Qe<P.textures.length;Qe++){const rt=ce.get(P.textures[Qe]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Qe,rt.__webglTexture,he,Ge)}}else if(P!==null&&he!==0){const Ge=ce.get(P.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ge.__webglTexture,he)}Y=-1};function na(P){const Z=ce.get(P);return(Z.__readFormat!==P.format||Z.__readType!==P.type)&&(Z.__readFormat=P.format,Z.__readType=P.type,Z.__formatReadable=k.textureFormatReadable(P.format),Z.__typeReadable=k.textureTypeReadable(P.type)),Z}this.readRenderTargetPixels=function(P,Z,he,oe,se,Xe,Ve,Ge=0){if(!(P&&P.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=ce.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ve!==void 0&&(Qe=Qe[Ve]),Qe){T.bindFramebuffer(J.FRAMEBUFFER,Qe);try{const rt=P.textures[Ge],mt=rt.format,_t=rt.type;P.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ge);const Ke=na(rt);if(Ke.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-oe&&he>=0&&he<=P.height-se&&J.readPixels(Z,he,oe,se,Me.convert(mt),Me.convert(_t),Xe)}finally{const rt=j!==null?ce.get(j).__webglFramebuffer:null;T.bindFramebuffer(J.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(P,Z,he,oe,se,Xe,Ve,Ge=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=ce.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ve!==void 0&&(Qe=Qe[Ve]),Qe)if(Z>=0&&Z<=P.width-oe&&he>=0&&he<=P.height-se){T.bindFramebuffer(J.FRAMEBUFFER,Qe);const rt=P.textures[Ge],mt=rt.format,_t=rt.type;P.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ge);const Ke=na(rt);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,Ct),J.bufferData(J.PIXEL_PACK_BUFFER,Xe.byteLength,J.STREAM_READ),J.readPixels(Z,he,oe,se,Me.convert(mt),Me.convert(_t),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);const on=j!==null?ce.get(j).__webglFramebuffer:null;T.bindFramebuffer(J.FRAMEBUFFER,on);const Wt=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await qC(J,Wt,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,Ct),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Xe),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(Ct),J.deleteSync(Wt),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Z=null,he=0){const oe=Math.pow(2,-he),se=Math.floor(P.image.width*oe),Xe=Math.floor(P.image.height*oe),Ve=Z!==null?Z.x:0,Ge=Z!==null?Z.y:0;me.setTexture2D(P,0),J.copyTexSubImage2D(J.TEXTURE_2D,he,0,0,Ve,Ge,se,Xe),T.unbindTexture()},this.copyTextureToTexture=function(P,Z,he=null,oe=null,se=0,Xe=0){let Ve,Ge,Qe,rt,mt,_t,Ke,Ct,on;const Wt=P.isCompressedTexture?P.mipmaps[Xe]:P.image;if(he!==null)Ve=he.max.x-he.min.x,Ge=he.max.y-he.min.y,Qe=he.isBox3?he.max.z-he.min.z:1,rt=he.min.x,mt=he.min.y,_t=he.isBox3?he.min.z:0;else{const Zt=Math.pow(2,-se);Ve=Math.floor(Wt.width*Zt),Ge=Math.floor(Wt.height*Zt),P.isDataArrayTexture?Qe=Wt.depth:P.isData3DTexture?Qe=Math.floor(Wt.depth*Zt):Qe=1,rt=0,mt=0,_t=0}oe!==null?(Ke=oe.x,Ct=oe.y,on=oe.z):(Ke=0,Ct=0,on=0);const kt=Me.convert(Z.format),vn=Me.convert(Z.type);let $e;Z.isData3DTexture?(me.setTexture3D(Z,0),$e=J.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(me.setTexture2DArray(Z,0),$e=J.TEXTURE_2D_ARRAY):(me.setTexture2D(Z,0),$e=J.TEXTURE_2D),T.activeTexture(J.TEXTURE0),T.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,Z.flipY),T.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),T.pixelStorei(J.UNPACK_ALIGNMENT,Z.unpackAlignment);const un=T.getParameter(J.UNPACK_ROW_LENGTH),Rt=T.getParameter(J.UNPACK_IMAGE_HEIGHT),Nn=T.getParameter(J.UNPACK_SKIP_PIXELS),St=T.getParameter(J.UNPACK_SKIP_ROWS),Ti=T.getParameter(J.UNPACK_SKIP_IMAGES);T.pixelStorei(J.UNPACK_ROW_LENGTH,Wt.width),T.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Wt.height),T.pixelStorei(J.UNPACK_SKIP_PIXELS,rt),T.pixelStorei(J.UNPACK_SKIP_ROWS,mt),T.pixelStorei(J.UNPACK_SKIP_IMAGES,_t);const mr=P.isDataArrayTexture||P.isData3DTexture,Ft=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isDepthTexture){const Zt=ce.get(P),Ai=ce.get(Z),Bt=ce.get(Zt.__renderTarget),pi=ce.get(Ai.__renderTarget);T.bindFramebuffer(J.READ_FRAMEBUFFER,Bt.__webglFramebuffer),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let bi=0;bi<Qe;bi++)mr&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ce.get(P).__webglTexture,se,_t+bi),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ce.get(Z).__webglTexture,Xe,on+bi)),J.blitFramebuffer(rt,mt,Ve,Ge,Ke,Ct,Ve,Ge,J.DEPTH_BUFFER_BIT,J.NEAREST);T.bindFramebuffer(J.READ_FRAMEBUFFER,null),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(se!==0||P.isRenderTargetTexture||ce.has(P)){const Zt=ce.get(P),Ai=ce.get(Z);T.bindFramebuffer(J.READ_FRAMEBUFFER,X),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,ee);for(let Bt=0;Bt<Qe;Bt++)mr?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Zt.__webglTexture,se,_t+Bt):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Zt.__webglTexture,se),Ft?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Ai.__webglTexture,Xe,on+Bt):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ai.__webglTexture,Xe),se!==0?J.blitFramebuffer(rt,mt,Ve,Ge,Ke,Ct,Ve,Ge,J.COLOR_BUFFER_BIT,J.NEAREST):Ft?J.copyTexSubImage3D($e,Xe,Ke,Ct,on+Bt,rt,mt,Ve,Ge):J.copyTexSubImage2D($e,Xe,Ke,Ct,rt,mt,Ve,Ge);T.bindFramebuffer(J.READ_FRAMEBUFFER,null),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Ft?P.isDataTexture||P.isData3DTexture?J.texSubImage3D($e,Xe,Ke,Ct,on,Ve,Ge,Qe,kt,vn,Wt.data):Z.isCompressedArrayTexture?J.compressedTexSubImage3D($e,Xe,Ke,Ct,on,Ve,Ge,Qe,kt,Wt.data):J.texSubImage3D($e,Xe,Ke,Ct,on,Ve,Ge,Qe,kt,vn,Wt):P.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Xe,Ke,Ct,Ve,Ge,kt,vn,Wt.data):P.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Xe,Ke,Ct,Wt.width,Wt.height,kt,Wt.data):J.texSubImage2D(J.TEXTURE_2D,Xe,Ke,Ct,Ve,Ge,kt,vn,Wt);T.pixelStorei(J.UNPACK_ROW_LENGTH,un),T.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Rt),T.pixelStorei(J.UNPACK_SKIP_PIXELS,Nn),T.pixelStorei(J.UNPACK_SKIP_ROWS,St),T.pixelStorei(J.UNPACK_SKIP_IMAGES,Ti),Xe===0&&Z.generateMipmaps&&J.generateMipmap($e),T.unbindTexture()},this.initRenderTarget=function(P){ce.get(P).__webglFramebuffer===void 0&&me.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?me.setTextureCube(P,0):P.isData3DTexture?me.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?me.setTexture2DArray(P,0):me.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){ne=0,K=0,j=null,T.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}function Sm({isBlowing:n=!1,flameBendAngle:e=0,extinguishedCount:t=0,scale:r=1,focusedMode:o=!1,className:a=""}){const c=we.useRef(null),u=we.useRef([]),d=we.useRef([]),h=we.useRef([]),m=we.useRef([]),v=we.useRef(null),p=we.useRef({isBlowing:n,flameBendAngle:e,extinguishedCount:t,focusedMode:o});return we.useEffect(()=>{p.current={isBlowing:n,flameBendAngle:e,extinguishedCount:t,focusedMode:o}},[n,e,t,o]),we.useEffect(()=>{const y=c.current;if(!y)return;const M=y.clientWidth||340,A=y.clientHeight||360,x=new fR,_=new fi(40,M/A,.1,50);o?(_.position.set(0,3,5.1),_.lookAt(0,1.95,0)):(_.position.set(0,2.4,7.2),_.lookAt(0,1.25,0));const C=new FL({antialias:!0,alpha:!0,powerPreference:"high-performance"});C.setSize(M,A),C.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.toneMapping=om,C.toneMappingExposure=1.18,C.shadowMap.enabled=!0,C.shadowMap.type=xS,y.appendChild(C.domElement);const F=new IR(16774635,1.15);x.add(F);const b=new oh(16775406,2.6);b.position.set(3.5,7,4.5),b.castShadow=!0,b.shadow.mapSize.width=1024,b.shadow.mapSize.height=1024,b.shadow.bias=-.001,x.add(b);const D=new oh(16048891,1.3);D.position.set(-4,3.5,3),x.add(D);const N=new oh(16769743,2.8);N.position.set(0,6,-4.5),x.add(N);const O=()=>{const ve=document.createElement("canvas");ve.width=256,ve.height=256;const Ie=ve.getContext("2d");Ie.fillStyle="#808080",Ie.fillRect(0,0,256,256);for(let G=0;G<400;G++){const be=Math.random()*256,de=Math.random()*256,Me=Math.random()*15+4,Ne=Math.random()*.08;Ie.fillStyle=Math.random()>.5?`rgba(255,255,255,${Ne})`:`rgba(0,0,0,${Ne})`,Ie.beginPath(),Ie.ellipse(be,de,Me,Me*.4,Math.random()*Math.PI,0,Math.PI*2),Ie.fill()}const Le=new Ux(ve);return Le.wrapS=Gs,Le.wrapT=Gs,Le.repeat.set(2,2),Le},E=ve=>{const Ie=document.createElement("canvas");Ie.width=128,Ie.height=256;const Le=Ie.getContext("2d");Le.fillStyle=`#${ve.toString(16).padStart(6,"0")}`,Le.fillRect(0,0,128,256),Le.fillStyle="#ffffff";for(let be=-128;be<384;be+=36)Le.beginPath(),Le.moveTo(0,be),Le.lineTo(128,be+62),Le.lineTo(128,be+80),Le.lineTo(0,be+18),Le.closePath(),Le.fill();const G=new Ux(Ie);return G.wrapS=Gs,G.wrapT=Gs,G},I=O(),U=new Vi;v.current=U,x.add(U);const V=new Bi({color:16777215,roughness:.16,metalness:.05}),W=new Vi,te=new ui(2.35,2.35,.1,64),X=new Dt(te,V);X.position.y=-.05,X.receiveShadow=!0,W.add(X);const ee=new Mu(2.33,.05,16,64);ee.rotateX(Math.PI/2);const ne=new Dt(ee,V);ne.position.y=-.05,W.add(ne);const K=new ui(.38,.72,.85,48),j=new Dt(K,V);j.position.y=-.52,j.castShadow=!0,j.receiveShadow=!0,W.add(j);const Y=new ui(.85,1.48,.22,64),L=new Dt(Y,V);L.position.y=-1.02,L.castShadow=!0,L.receiveShadow=!0,W.add(L);const w=new Mu(1.48,.06,16,64);w.rotateX(Math.PI/2);const H=new Dt(w,V);H.position.y=-1.13,W.add(H),U.add(W);const fe=new hl(3.8,3.8);fe.rotateX(-Math.PI/2);const Se=new wR({opacity:.22}),Ee=new Dt(fe,Se);Ee.position.y=-1.18,Ee.receiveShadow=!0,x.add(Ee);const Te=new Bi({color:13349105,roughness:.65,metalness:.02,bumpMap:I,bumpScale:.015}),q=new ui(1.95,1.95,1.1,64),ie=new Dt(q,Te);ie.position.y=.55,ie.castShadow=!0,ie.receiveShadow=!0,U.add(ie);const ye=new Bi({color:14732538,roughness:.45}),ke=new Pr(.08,16,16);for(let ve=0;ve<38;ve++){const Ie=ve/38*Math.PI*2,Le=new Dt(ke,ye);Le.position.set(Math.cos(Ie)*1.95,.05,Math.sin(Ie)*1.95),Le.scale.set(1,.9,1),Le.castShadow=!0,U.add(Le)}const Re=[16745890,16771751,9889490,16777215,14137592],Ze=new ui(.025,.025,.08,8);for(let ve=0;ve<65;ve++){const Ie=Math.random()*Math.PI*2,Le=Math.random()*.95+.1,G=Re[Math.floor(Math.random()*Re.length)],be=new Bi({color:G,roughness:.4}),de=new Dt(Ze,be);de.position.set(Math.cos(Ie)*1.96,Le,Math.sin(Ie)*1.96),de.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),U.add(de)}const gt=new Bi({color:16756162,roughness:.6,metalness:.02,bumpMap:I,bumpScale:.012}),He=new ui(1.42,1.42,.95,64),ot=new Dt(He,gt);ot.position.y=1.57,ot.castShadow=!0,ot.receiveShadow=!0,U.add(ot);const pt=new Bi({color:14229333,roughness:.22,metalness:.08}),at=new ui(1.44,1.44,.07,64),yt=new Dt(at,pt);yt.position.y=2.06,yt.castShadow=!0,U.add(yt);for(let ve=0;ve<24;ve++){const Ie=ve/24*Math.PI*2+(Math.random()*.1-.05),Le=.22+Math.sin(ve*1.8)*.16+Math.random()*.12,G=1.43,be=new xm(.065,Le,8,16),de=new Dt(be,pt);de.position.set(Math.cos(Ie)*G,2.02-Le/2,Math.sin(Ie)*G),de.castShadow=!0,U.add(de);const Me=new Pr(.08,14,14),Ne=new Dt(Me,pt);Ne.position.set(Math.cos(Ie)*(G+.015),2.02-Le,Math.sin(Ie)*(G+.015)),Ne.scale.set(1,1.25,.9),Ne.castShadow=!0,U.add(Ne)}const Nt=(ve,Ie=16777215)=>{const Le=new Vi,G=new Bi({color:ve,roughness:.35}),be=new Pr(.24,24,16);be.scale(1,.45,1);const de=new Dt(be,G);de.position.y=.08,de.castShadow=!0,Le.add(de);const Me=new Pr(.24,24,16);Me.scale(1,.45,1);const Ne=new Dt(Me,G);Ne.position.y=-.08,Ne.castShadow=!0,Le.add(Ne);const _e=new Bi({color:Ie,roughness:.6}),We=new ui(.22,.22,.06,24),Ye=new Dt(We,_e);return Le.add(Ye),Le},bt=Nt(14137592);bt.position.set(-.85,2.18,.35),bt.rotation.set(.3,.5,.25),U.add(bt);const Et=Nt(16771751);Et.position.set(.85,2.18,-.3),Et.rotation.set(-.25,-.6,-.3),U.add(Et);const J=(()=>{const ve=new Vi,Ie=new yu(.2,.38,24);Ie.rotateX(Math.PI);const Le=new Bi({color:14227e3,roughness:.28}),G=new Dt(Ie,Le);G.castShadow=!0,ve.add(G);const be=new Bi({color:2600544,roughness:.4});for(let de=0;de<5;de++){const Me=de/5*Math.PI*2,Ne=new yu(.06,.14,4);Ne.rotateX(Math.PI/2.2);const _e=new Dt(Ne,be);_e.position.set(Math.cos(Me)*.07,.18,Math.sin(Me)*.07),_e.rotation.y=Me,ve.add(_e)}return ve})();J.position.set(.8,2.24,.35),J.rotation.set(-.2,.4,.15),U.add(J);const Kt=[16728177,165063,15381256,9647082,1096065],Tt=[{x:-.66,z:.06,h:.9},{x:-.33,z:.2,h:1},{x:0,z:.24,h:1.06},{x:.33,z:.2,h:1},{x:.66,z:.06,h:.9}],k=[new lt(.001,0),new lt(.045,.03),new lt(.082,.09),new lt(.086,.15),new lt(.064,.23),new lt(.03,.3),new lt(.001,.35)],T=new Su(k,24),re=[new lt(.001,0),new lt(.03,.02),new lt(.052,.07),new lt(.054,.12),new lt(.038,.17),new lt(.016,.22),new lt(.001,.25)],ce=new Su(re,24),me=[],Pe=[],Ue=[],ge=[],xe=[];Tt.forEach((ve,Ie)=>{const Le=new Vi;Le.position.set(ve.x,2.06,ve.z);const G=E(Kt[Ie]);xe.push(G);const be=new Bi({map:G,roughness:.3,metalness:.05}),de=new ui(.076,.076,ve.h,24),Me=new Dt(de,be);Me.position.y=ve.h/2,Me.castShadow=!0,Le.add(Me);const Ne=new ds({color:1315860}),_e=new ui(.014,.014,.11,8),We=new Dt(_e,Ne);We.position.y=ve.h+.055,Le.add(We);const Ye=new ds({color:16724736,transparent:!0,opacity:0}),vt=new Pr(.022,8,8),ht=new Dt(vt,Ye);ht.position.y=ve.h+.11,Le.add(ht),ge.push({mesh:ht,material:Ye});const Vt=new Vi;Vt.position.y=ve.h+.08;const Ln=new ds({color:16739072,transparent:!0,opacity:.94}),ii=new Dt(T,Ln);Vt.add(ii);const Or=new ds({color:16775914,transparent:!0,opacity:.98}),cr=new Dt(ce,Or);Vt.add(cr);const ur=new Pr(.052,16,16),Qo=new ds({color:3718648,transparent:!0,opacity:.85}),kr=new Dt(ur,Qo);kr.position.y=.025,kr.scale.set(1,.65,1),Vt.add(kr),Le.add(Vt),me.push({container:Vt,baseY:ve.h+.08});const Br=new LR(16750882,2.5,4.2,1.8);Br.position.set(ve.x,2.06+ve.h+.25,ve.z),x.add(Br),Pe.push(Br);const dn=new Vi;dn.position.set(0,ve.h+.12,0);const fr=new ds({color:14604518,transparent:!0,opacity:0,depthWrite:!1}),zr=[];for(let dr=0;dr<3;dr++){const hr=new Pr(.045+dr*.022,10,10),pr=new Dt(hr,fr);pr.position.y=dr*.09,dn.add(pr),zr.push(pr)}Le.add(dn),Ue.push({group:dn,puffs:zr,material:fr,baseLocalY:ve.h+.12}),U.add(Le)}),u.current=me,d.current=Pe,h.current=Ue,m.current=ge;let Be,nt=new OR;const ze=()=>{Be=requestAnimationFrame(ze);const ve=nt.getElapsedTime(),{isBlowing:Ie,flameBendAngle:Le,extinguishedCount:G,focusedMode:be}=p.current;be?(U.rotation.y=Math.sin(ve*.5)*.12,U.position.y=-.12+Math.sin(ve*1.5)*.03):(U.rotation.y=ve*(Math.PI*2)/14,U.position.y=Math.sin(ve*1.5)*.04),u.current.forEach((de,Me)=>{const Ne=Me<G,_e=d.current[Me],We=h.current[Me],Ye=m.current[Me];if(Ne){if(de.container.scale.lerp(new le(0,0,0),.35),_e&&(_e.intensity=0),Ye){const vt=(ve*1.2+Me*.4)%2.5;Ye.material.opacity=Math.max(0,.85-vt*.35)}if(We){const ht=(ve*.9+Me*.35)%1.5/1.5;We.material.opacity=Math.max(0,.28*(1-Math.pow(ht,1.2))),We.group.position.y=We.baseLocalY+ht*.36,We.group.position.x=Math.sin(ve*3.2+Me)*(.03+ht*.08),We.group.position.z=Math.cos(ve*2.8+Me)*(.02+ht*.06),We.puffs.forEach((Vt,Ln)=>{const ii=1+ht*1.8+Ln*.25;Vt.scale.set(ii,ii*1.1,ii)})}}else{const vt=.95+Math.sin(ve*16+Me*2)*.08+Math.cos(ve*28+Me)*.05;if(Ie){const ht=Math.sin(ve*45+Me*5)*.2,Vt=Math.cos(ve*40+Me*4)*.14;de.container.rotation.z=-.75+ht-Le*.025,de.container.rotation.x=-.4+Vt,de.container.scale.set(vt*1.3,vt*.58,vt*.85),_e&&(_e.intensity=1.3+Math.sin(ve*32+Me)*.8)}else de.container.rotation.z=Math.sin(ve*6+Me)*.08,de.container.rotation.x=Math.cos(ve*5+Me)*.05,de.container.scale.set(vt,vt*1.04,vt),_e&&(_e.intensity=2.5+Math.sin(ve*18+Me*3)*.5);We&&(We.material.opacity=0),Ye&&(Ye.material.opacity=0)}}),C.render(x,_)};ze();const Oe=()=>{if(!y)return;const ve=y.clientWidth||340,Ie=y.clientHeight||360;_.aspect=ve/Ie,_.updateProjectionMatrix(),C.setSize(ve,Ie)};return window.addEventListener("resize",Oe),()=>{window.removeEventListener("resize",Oe),cancelAnimationFrame(Be),x.traverse(ve=>{ve.isMesh&&(ve.geometry&&ve.geometry.dispose(),ve.material&&(Array.isArray(ve.material)?ve.material.forEach(Ie=>Ie.dispose()):ve.material.dispose()))}),I.dispose(),T.dispose(),ce.dispose(),xe.forEach(ve=>ve.dispose()),C.dispose(),C.domElement&&y.contains(C.domElement)&&y.removeChild(C.domElement)}},[o]),B.jsx("div",{ref:c,className:`relative flex items-center justify-center overflow-visible select-none ${a}`,style:{width:o?"340px":"330px",height:o?"340px":"350px",maxWidth:"100vw",transform:`scale(${r})`,touchAction:"none"}})}function UL({onNext:n}){const e=()=>{try{pu({particleCount:75,spread:80,origin:{y:.8},colors:["#D91F55","#F6AFC4","#D7B8F8","#FFEAA7","#C5F0E3"]})}catch{}n&&n()};return B.jsxs("div",{className:"relative w-full h-full flex flex-col justify-between items-center text-center px-4 pt-4 pb-6 overflow-hidden",children:[B.jsxs(Ht.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"w-full max-w-sm flex flex-col items-center z-10",children:[B.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold tracking-widest text-rose-500 uppercase mb-2",children:[B.jsx("span",{className:"w-3 h-0.5 bg-rose-400 rounded-full"}),B.jsx("span",{children:Qt.screen1.badge}),B.jsx("span",{className:"w-3 h-0.5 bg-rose-400 rounded-full"})]}),B.jsxs("h1",{className:"font-serif text-4xl sm:text-5xl font-extrabold text-[#38213D] tracking-tight leading-tight",children:[Qt.screen1.title,B.jsx("br",{}),B.jsxs("span",{className:"text-[#38213D]",children:[Qt.name,"! ",B.jsx("span",{className:"font-handwriting text-rose-500 font-normal",children:"♡"})]})]}),B.jsxs("div",{className:"font-handwriting text-2xl sm:text-3xl text-[#38213D] mt-1.5 flex items-center justify-center gap-1.5",children:[B.jsx("span",{children:Qt.screen1.subtitleLead}),B.jsxs("span",{className:"text-raspberry font-bold relative",children:[Qt.screen1.subtitleAccent,B.jsx("svg",{className:"absolute -bottom-1 left-0 w-full text-raspberry",height:"4",viewBox:"0 0 100 4",fill:"none",preserveAspectRatio:"none",children:B.jsx("path",{d:"M0,2 Q50,4 100,2",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"})})]})]}),B.jsx("p",{className:"text-xs sm:text-sm text-[#38213D]/70 font-medium mt-3 max-w-xs leading-relaxed",children:Qt.screen1.supportingText}),B.jsx("div",{className:"text-rose-400 font-handwriting text-lg mt-0.5",children:"♡"})]}),B.jsx(Ht.div,{initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},transition:{duration:1,delay:.2,ease:"easeOut"},className:"my-auto py-2 z-10",children:B.jsx(Sm,{scale:1.05})}),B.jsx(Ht.div,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},className:"w-full max-w-xs z-10",children:B.jsxs("button",{onClick:e,id:"open-gift-btn",className:"group relative w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#D91F55] via-[#E82C64] to-[#D91F55] text-white font-sans font-bold text-base sm:text-lg shadow-raspberry-glow hover:shadow-[0_12px_35px_-4px_rgba(217,31,85,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 overflow-hidden",children:[B.jsx("div",{className:"absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"}),B.jsx(sS,{className:"w-5 h-5 text-white animate-bounce"}),B.jsx("span",{children:Qt.screen1.buttonText})]})})]})}function OL({onNext:n}){const[e,t]=we.useState(!1),r=()=>{t(!e)};return B.jsxs("div",{className:"relative w-full max-w-sm mx-auto flex flex-col items-center justify-center my-auto perspective-1200",children:[B.jsx(ms,{children:e&&B.jsx(Ht.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>t(!1),className:"fixed inset-0 bg-[#38213D]/40 backdrop-blur-xs z-30 pointer-events-auto"})}),B.jsxs("div",{className:"relative w-full aspect-[4/3] flex items-center justify-center z-40",children:[B.jsxs(Ht.div,{animate:e?{y:-140,scale:1,zIndex:50,boxShadow:"0 25px 50px -12px rgba(56, 33, 61, 0.35)"}:{y:10,scale:.9,zIndex:10,boxShadow:"0 4px 6px -1px rgba(56, 33, 61, 0.05)"},transition:{duration:.7,ease:[.34,1.56,.64,1]},className:"absolute inset-x-3 letter-paper rounded-2xl p-5 sm:p-6 border border-[#F6AFC4]/30 max-h-[460px] overflow-y-auto cursor-pointer",onClick:()=>!e&&t(!0),children:[e&&B.jsx("button",{onClick:o=>{o.stopPropagation(),t(!1)},className:"absolute top-3 right-3 w-7 h-7 rounded-full bg-[#FFF1E7] border border-[#F6AFC4] text-[#38213D] flex items-center justify-center hover:bg-rose-100 transition-colors","aria-label":"Close letter",children:B.jsx(gS,{className:"w-4 h-4 text-rose-500"})}),B.jsxs("div",{className:"text-left font-handwriting text-xl sm:text-2xl text-[#38213D] leading-relaxed space-y-3",children:[B.jsxs("h3",{className:"font-serif text-2xl sm:text-3xl font-bold text-[#38213D] leading-tight",children:["Hey ",Qt.name," ❤️,"]}),B.jsx("p",{className:"font-sans text-xs font-bold uppercase tracking-wider text-raspberry",children:"Happy Birthday!"}),B.jsx("p",{children:"Some people become more than just friends, and you're definitely one of them."}),B.jsx("p",{children:"Life is better with a brother like you. Thank you for all the laughs, crazy conversations and unforgettable moments."}),B.jsx("p",{children:"I hope this year brings you happiness, success, good health and everything you've been working towards."}),B.jsx("p",{children:"No matter where life takes us, the bond stays the same."}),B.jsx("p",{children:"Stay happy, stay crazy, and keep being the amazing person you are."}),B.jsxs("div",{className:"pt-3 border-t border-[#F6AFC4]/40 flex items-center justify-between",children:[B.jsxs("div",{children:[B.jsx("p",{className:"text-sm font-sans font-semibold text-slate-500",children:Qt.screen2.signOff}),B.jsx("p",{className:"font-handwriting text-2xl font-bold text-raspberry",children:Qt.screen2.author})]}),B.jsx(du,{className:"w-6 h-6 text-rose-500 fill-rose-500 animate-pulse"})]})]})]}),B.jsxs("div",{onClick:r,className:"relative w-full h-full rounded-2xl bg-gradient-to-b from-[#F6AFC4] to-[#FFA7BD] shadow-envelope overflow-hidden border-2 border-white/60 cursor-pointer z-20 flex items-center justify-center",children:[B.jsx("div",{className:"absolute inset-0 bg-[#FFD7DF]/40"}),B.jsx("div",{className:"absolute left-0 bottom-0 top-0 w-1/2 bg-gradient-to-tr from-[#FFAEC3] to-[#F6AFC4]",style:{clipPath:"polygon(0 0, 100% 50%, 0 100%)"}}),B.jsx("div",{className:"absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-tl from-[#FFAEC3] to-[#F6AFC4]",style:{clipPath:"polygon(100% 0, 0 50%, 100% 100%)"}}),B.jsx("div",{className:"absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FF9EBA] to-[#FFAEC3]",style:{clipPath:"polygon(0 100%, 50% 0, 100% 100%)"}}),B.jsx(Ht.div,{animate:{rotateX:e?-180:0,zIndex:e?5:25},transition:{duration:.6,ease:"easeInOut"},className:"absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#FFAEC3] to-[#F6AFC4] origin-top preserve-3d",style:{clipPath:"polygon(0 0, 100% 0, 50% 100%)"}}),B.jsx(ms,{children:!e&&B.jsx(Ht.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.3,opacity:0},transition:{duration:.3},className:"absolute z-30 w-12 h-12 rounded-full bg-gradient-to-br from-[#D91F55] via-[#E82C64] to-[#B01442] shadow-md border-2 border-rose-300 flex items-center justify-center text-white",children:B.jsx(du,{className:"w-6 h-6 fill-white text-white drop-shadow-sm"})})}),!e&&B.jsxs(Ht.div,{animate:{y:[0,-6,0]},transition:{repeat:1/0,duration:1.5},className:"absolute bottom-3 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-xs text-[11px] font-bold text-[#38213D] shadow-xs",children:[B.jsx(eC,{className:"w-3.5 h-3.5 text-rose-500"}),B.jsx("span",{children:Qt.screen2.instruction})]})]})]})]})}function kL({onNext:n}){return B.jsxs("div",{className:"relative w-full h-full flex flex-col justify-between items-center text-center px-4 pt-6 pb-6 overflow-hidden",children:[B.jsxs(Ht.div,{initial:{opacity:0,y:-15},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-sm z-10",children:[B.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2",children:[B.jsx(sC,{className:"w-3.5 h-3.5"}),B.jsx("span",{children:"From My Heart"})]}),B.jsx("h2",{className:"font-serif text-3xl sm:text-4xl font-extrabold text-[#38213D]",children:Qt.screen2.title}),B.jsx("p",{className:"text-xs sm:text-sm text-[#38213D]/70 font-medium mt-1",children:Qt.screen2.instruction})]}),B.jsx("div",{className:"w-full my-auto z-20",children:B.jsx(OL,{onNext:n})}),B.jsx(Ht.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"w-full max-w-xs z-10",children:B.jsxs("button",{onClick:n,id:"letter-next-btn",className:"w-full py-3.5 px-6 rounded-full bg-[#FFFDF8] hover:bg-white text-[#38213D] font-bold text-sm sm:text-base border-2 border-[#F6AFC4] shadow-soft-card hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95",children:[B.jsx("span",{children:"See Our Moments"}),B.jsx(Pu,{className:"w-4 h-4 text-raspberry group-hover:translate-x-1 transition-transform"})]})})]})}const Io=[{id:1,image:"/images/photo1.jpg",caption:"The beginning of this legendary brotherhood! ✨",date:"Day One",accentColor:"#F6AFC4",placeholderTitle:"Memory #1"},{id:2,image:"/images/photo2.jpg",caption:"Late night laughs and 2 AM crazy plans 🌙☕",date:"Late Night Talks",accentColor:"#D7B8F8",placeholderTitle:"Memory #2"},{id:3,image:"/images/photo3.jpg",caption:"Adventures, journeys, and making every moment count 🚗💨",date:"Epic Adventures",accentColor:"#C5F0E3",placeholderTitle:"Memory #3"},{id:4,image:"/images/photo4.jpg",caption:"When someone says 'act normal' and we do this 😂",date:"Pure Chaos",accentColor:"#FFEAA7",placeholderTitle:"Memory #4"},{id:5,image:"/images/photo5.jpg",caption:"Through every high and low, always got your back 🤝",date:"Unbreakable",accentColor:"#FFD7DF",placeholderTitle:"Memory #5"},{id:6,image:"/images/photo6.jpg",caption:"The greatest partner in crime anyone could ask for! 🔥",date:"Partners in Crime",accentColor:"#D7B8F8",placeholderTitle:"Memory #6"},{id:7,image:"/images/photo7.jpg",caption:"Same madness, different day, best memories forever ⭐",date:"Good Times",accentColor:"#C5F0E3",placeholderTitle:"Memory #7"},{id:8,image:"/images/photo8.jpg",caption:"Brothers for life! Here's to 100 more years of friendship ♾️❤️",date:"Forever Friends",accentColor:"#F6AFC4",placeholderTitle:"Memory #8"}];function BL({onNext:n}){const[e,t]=we.useState(0),[r,o]=we.useState(!1),[a,c]=we.useState(!1),[u,d]=we.useState([]),[h,m]=we.useState(null),[v,p]=we.useState(!1),y=()=>{a||e>=Io.length||(o(!0),c(!0),setTimeout(()=>{o(!1)},250),setTimeout(()=>{const A=Io[e];d(x=>[A,...x]),t(x=>x+1),c(!1)},700))},M=()=>{t(0),d([]),p(!1)};return B.jsxs("div",{className:"relative w-full max-w-sm mx-auto flex flex-col items-center",children:[B.jsx(ms,{children:r&&B.jsx(Ht.div,{initial:{opacity:.95},animate:{opacity:0},exit:{opacity:0},transition:{duration:.3},className:"fixed inset-0 bg-white z-50 pointer-events-none"})}),v?B.jsxs(Ht.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"w-full bg-[#FFFDF8] rounded-3xl p-4 sm:p-5 border-2 border-[#F6AFC4] shadow-soft-card",children:[B.jsxs("div",{className:"flex items-center justify-between mb-3 pb-2 border-b border-[#F6AFC4]/40",children:[B.jsxs("div",{children:[B.jsx("h3",{className:"font-serif text-lg font-bold text-[#38213D]",children:"Our Memory Reel 📸"}),B.jsxs("p",{className:"text-[11px] text-slate-500 font-sans",children:["All ",Io.length," moments saved with love"]})]}),B.jsxs("div",{className:"flex items-center gap-2",children:[B.jsx("button",{onClick:()=>p(!1),className:"px-2.5 py-1 rounded-full bg-slate-100 text-xs font-bold text-[#38213D] hover:bg-slate-200",children:"Booth Mode"}),B.jsx("button",{onClick:M,className:"p-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200",title:"Print again",children:B.jsx(lC,{className:"w-3.5 h-3.5"})})]})]}),B.jsx("div",{className:"grid grid-cols-2 gap-2.5 max-h-[380px] overflow-y-auto p-1",children:Io.map((A,x)=>B.jsxs(Ht.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{delay:x*.06},onClick:()=>m(A),className:"cursor-pointer bg-white p-2 rounded-xl shadow-xs border border-pink-100 text-center transform hover:scale-102 transition-transform",style:{transform:`rotate(${x%2===0?-1.5:1.5}deg)`},children:[B.jsx("div",{className:"aspect-square w-full rounded-lg overflow-hidden bg-slate-100 mb-1 relative",children:B.jsx("img",{src:A.image,alt:A.caption,className:"w-full h-full object-cover"})}),B.jsx("p",{className:"font-handwriting text-xs font-bold text-[#38213D] truncate",children:A.caption})]},A.id))})]}):B.jsxs(Ht.div,{animate:a?{x:[-3,3,-2,2,0]}:{},transition:{duration:.4},className:"relative w-full rounded-3xl bg-gradient-to-b from-[#D7B8F8] to-[#C39BEE] p-4 border-4 border-white shadow-photo-booth overflow-hidden",children:[B.jsxs("div",{className:"rounded-2xl bg-[#D91F55] py-2 px-3 mb-3 border-2 border-rose-300 shadow-inner flex flex-col items-center",children:[B.jsx("div",{className:"flex items-center justify-around w-full mb-1",children:[0,1,2,3,4,5,6].map(A=>B.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#FFEAA7] border border-amber-300 animate-bulb-blink shadow-[0_0_6px_rgba(255,234,167,0.8)]",style:{animationDelay:`${A*.15}s`}},`bulb-${A}`))}),B.jsxs("div",{className:"flex items-center justify-between w-full px-2",children:[B.jsx("span",{className:"font-serif font-black text-white text-sm sm:text-base tracking-widest uppercase drop-shadow-sm",children:"★ PHOTO BOOTH ★"}),B.jsxs("button",{onClick:()=>p(!0),className:"text-[10px] font-sans font-bold text-white bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded-full transition-colors flex items-center gap-1",title:"View all 8 photos",children:[B.jsx(rC,{className:"w-3 h-3"}),B.jsx("span",{children:"All (8)"})]})]})]}),B.jsxs("div",{onClick:y,className:"cursor-pointer relative w-full aspect-[16/9] rounded-2xl bg-gradient-to-b from-[#683677] to-[#451C53] p-3 overflow-hidden flex flex-col items-center justify-center border-2 border-purple-900/30 group",children:[B.jsx("div",{className:"absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-purple-900 to-purple-800 opacity-90 rounded-r-lg"}),B.jsx("div",{className:"absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-purple-900 to-purple-800 opacity-90 rounded-l-lg"}),B.jsxs(Ht.div,{animate:a?{scale:[1,1.15,.95,1]}:{scale:1},whileHover:{scale:1.05},whileTap:{scale:.95},className:"relative w-28 h-20 rounded-2xl bg-gradient-to-b from-[#C5F0E3] to-[#A3E5D2] border-2 border-white shadow-md flex items-center justify-center",children:[B.jsx("div",{className:"w-12 h-12 rounded-full bg-slate-800 border-4 border-white shadow-inner flex items-center justify-center",children:B.jsx("div",{className:"w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-400 opacity-80"})}),B.jsx("div",{className:"absolute top-1.5 right-2",children:B.jsx(du,{className:"w-3.5 h-3.5 fill-rose-500 text-rose-500"})})]}),B.jsxs("span",{className:"text-[10px] font-sans font-bold text-pink-200 mt-1 drop-shadow-sm flex items-center gap-1",children:[B.jsx(Bh,{className:"w-3 h-3"})," Tap camera or button below"]})]}),B.jsxs("div",{className:"my-2.5 flex items-center justify-between px-1",children:[B.jsxs("span",{className:"text-xs font-bold text-[#38213D] font-sans",children:["Printed: ",e," / ",Io.length]}),B.jsx("div",{className:"flex items-center gap-1.5",children:e<Io.length?B.jsxs("button",{onClick:y,disabled:a,id:"camera-print-btn",className:"px-4 py-2 rounded-full bg-[#D91F55] hover:bg-rose-600 text-white font-bold text-xs sm:text-sm border border-white/60 shadow-md flex items-center gap-1.5 active:scale-95 transition-all",children:[B.jsx(Bh,{className:"w-3.5 h-3.5 text-white"}),B.jsx("span",{children:a?"Printing...":"Snap & Print!"})]}):B.jsxs("button",{onClick:()=>p(!0),id:"view-gallery-btn",className:"px-4 py-2 rounded-full bg-[#D91F55] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-rose-600 transition-all active:scale-95 flex items-center gap-1",children:[B.jsx("span",{children:"See All (8) Memories"}),B.jsx(hu,{className:"w-3.5 h-3.5"})]})})]}),B.jsx("div",{className:"px-4",children:B.jsx("div",{className:"h-2.5 w-3/4 mx-auto bg-slate-900 rounded-full shadow-inner border border-purple-300/40"})}),B.jsx("div",{className:"relative min-h-[170px] flex items-center justify-center pt-2",children:B.jsx(ms,{mode:"popLayout",children:u.length>0?B.jsxs(Ht.div,{initial:{y:-40,opacity:0,scale:.8},animate:{y:0,opacity:1,scale:1,rotate:-1.5},transition:{type:"spring",damping:14,stiffness:120},onClick:()=>m(u[0]),className:"cursor-pointer bg-white p-2.5 pb-4 rounded-xl shadow-lg border border-purple-200 w-48 text-center transform hover:scale-105 transition-transform",children:[B.jsxs("div",{className:"aspect-square w-full rounded-lg overflow-hidden bg-[#FFF1E7] mb-1.5 relative group",children:[B.jsx("img",{src:u[0].image,alt:u[0].caption,className:"w-full h-full object-cover"}),B.jsx("div",{className:"absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity",children:B.jsx(fC,{className:"w-6 h-6 text-white drop-shadow"})})]}),B.jsx("span",{className:"font-handwriting text-base font-bold text-[#38213D] block truncate",children:u[0].caption}),B.jsx("span",{className:"text-[10px] text-slate-400 font-sans block mt-0.5",children:"Tap to enlarge ♡"})]},u[0].id):B.jsx("div",{className:"text-xs font-handwriting text-[#38213D]/70 py-8 text-center",children:'Tap camera or "Snap & Print!" to print memories...'})})})]}),B.jsx(ms,{children:h&&B.jsx(Ht.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>m(null),className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#38213D]/70 backdrop-blur-sm",children:B.jsxs(Ht.div,{initial:{scale:.9,y:20},animate:{scale:1,y:0},exit:{scale:.9,y:20},onClick:A=>A.stopPropagation(),className:"relative max-w-sm w-full bg-[#FFFDF8] rounded-3xl p-4 sm:p-5 border-2 border-[#F6AFC4] shadow-2xl",children:[B.jsx("button",{onClick:()=>m(null),className:"absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FFF1E7] border border-[#F6AFC4] text-[#38213D] flex items-center justify-center hover:bg-rose-100",children:B.jsx(gS,{className:"w-4 h-4 text-rose-500"})}),B.jsx("div",{className:"aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 mb-3 shadow-inner relative",children:B.jsx("img",{src:h.image,alt:h.caption,className:"w-full h-full object-cover"})}),B.jsxs("div",{className:"text-left px-1",children:[B.jsx("span",{className:"text-[11px] font-sans font-bold uppercase tracking-wider text-raspberry",children:h.date}),B.jsx("h4",{className:"font-handwriting text-2xl font-bold text-[#38213D] mt-0.5 leading-snug",children:h.caption})]})]})})})]})}function zL({onNext:n}){return B.jsxs("div",{className:"relative w-full h-full flex flex-col justify-between items-center text-center px-4 pt-5 pb-6 overflow-hidden",children:[B.jsxs(Ht.div,{initial:{opacity:0,y:-15},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-sm z-10",children:[B.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2",children:[B.jsx(Bh,{className:"w-3.5 h-3.5"}),B.jsx("span",{children:Qt.screen3.topTag})]}),B.jsx("h2",{className:"font-serif text-3xl sm:text-4xl font-extrabold text-[#38213D]",children:Qt.screen3.title}),B.jsx("p",{className:"text-xs sm:text-sm text-[#38213D]/70 font-medium mt-1",children:Qt.screen3.instruction})]}),B.jsx("div",{className:"w-full my-auto z-20 py-1",children:B.jsx(BL,{onNext:n})}),B.jsx(Ht.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"w-full max-w-xs z-10",children:B.jsxs("button",{onClick:n,id:"moments-next-btn",className:"w-full py-3.5 px-6 rounded-full bg-[#FFFDF8] hover:bg-white text-[#38213D] font-bold text-sm sm:text-base border-2 border-[#D7B8F8] shadow-soft-card hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95",children:[B.jsx("span",{children:"Time to Make a Wish 🎂"}),B.jsx(Pu,{className:"w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform"})]})})]})}const VL=[{id:1,label:"Pink",bg:"#ff4071",text:"#ffffff"},{id:2,label:"Sky",bg:"#0284c7",text:"#ffffff"},{id:3,label:"Gold",bg:"#eab308",text:"#ffffff"},{id:4,label:"Purple",bg:"#9333ea",text:"#ffffff"},{id:5,label:"Emerald",bg:"#10b981",text:"#ffffff"}];function HL({onCompleted:n}){const[e,t]=we.useState(0),[r,o]=we.useState(!1),[a,c]=we.useState(0),[u,d]=we.useState(!1),[h,m]=we.useState(!1),[v,p]=we.useState(null),[y,M]=we.useState(!1),[A,x]=we.useState(null),_=we.useRef(null),C=we.useRef(null),F=we.useRef(null),b=we.useRef(null),D=we.useRef(null),N=we.useRef(0),O=()=>{try{const ne=window.AudioContext||window.webkitAudioContext;if(!ne)return;const K=new ne,j=Math.floor(K.sampleRate*.16),Y=K.createBuffer(1,j,K.sampleRate),L=Y.getChannelData(0);for(let Se=0;Se<j;Se++)L[Se]=(Math.random()*2-1)*Math.exp(-Se/(j*.35));const w=K.createBufferSource();w.buffer=Y;const H=K.createBiquadFilter();H.type="lowpass",H.frequency.setValueAtTime(800,K.currentTime),H.frequency.exponentialRampToValueAtTime(120,K.currentTime+.16);const fe=K.createGain();fe.gain.setValueAtTime(.28,K.currentTime),fe.gain.exponentialRampToValueAtTime(.01,K.currentTime+.16),w.connect(H),H.connect(fe),fe.connect(K.destination),w.start()}catch{}},E=()=>{try{const ne=window.AudioContext||window.webkitAudioContext;if(!ne)return;const K=new ne;[523.25,659.25,783.99,1046.5].forEach((Y,L)=>{const w=K.createOscillator(),H=K.createGain();w.type="sine",w.frequency.setValueAtTime(Y,K.currentTime+L*.11),H.gain.setValueAtTime(0,K.currentTime+L*.11),H.gain.linearRampToValueAtTime(.22,K.currentTime+L*.11+.02),H.gain.exponentialRampToValueAtTime(.001,K.currentTime+L*.11+.7),w.connect(H),H.connect(K.destination),w.start(K.currentTime+L*.11),w.stop(K.currentTime+L*.11+.7)})}catch{}};we.useEffect(()=>()=>{W(),D.current&&clearInterval(D.current)},[]);const I=()=>{o(!1),M(!0),W(),E();try{pu({particleCount:110,spread:90,origin:{y:.65},colors:["#D91F55","#F6AFC4","#D7B8F8","#FFEAA7","#C5F0E3"]})}catch{}},U=()=>{t(ne=>{if(ne>=5)return 5;const K=ne+1;if(O(),x(K),setTimeout(()=>x(null),900),navigator.vibrate)try{navigator.vibrate(60)}catch{}return K>=5&&I(),K})},V=async()=>{if(!(e>=5)){p(null);try{const ne=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});F.current=ne;const K=window.AudioContext||window.webkitAudioContext,j=new K;_.current=j;const Y=j.createAnalyser();Y.fftSize=256,C.current=Y,j.createMediaStreamSource(ne).connect(Y),m(!0);const w=Y.frequencyBinCount,H=new Uint8Array(w),fe=()=>{if(!C.current)return;C.current.getByteFrequencyData(H);let Se=0;for(let Te=0;Te<w;Te++)Se+=H[Te];Se/w>32?(o(!0),N.current++,N.current%7===0&&U()):(o(!1),N.current=0),b.current=requestAnimationFrame(fe)};fe()}catch(ne){console.warn("Microphone access error:",ne),p("Mic unavailable. Use 'Press & Hold' or tap candles!"),m(!1)}}},W=()=>{b.current&&(cancelAnimationFrame(b.current),b.current=null),F.current&&(F.current.getTracks().forEach(ne=>ne.stop()),F.current=null),_.current&&(_.current.close().catch(()=>{}),_.current=null),m(!1),o(!1)},te=ne=>{e>=5||(ne.cancelable&&ne.preventDefault(),d(!0),o(!0),D.current&&clearInterval(D.current),D.current=setInterval(()=>{c(K=>{const j=Math.min(100,K+5),Y=Math.min(5,Math.floor(j/100*5));return t(L=>{if(Y>L&&(O(),x(Y),setTimeout(()=>x(null),900),navigator.vibrate))try{navigator.vibrate(50)}catch{}return Math.max(L,Y)}),j>=100?(clearInterval(D.current),d(!1),I(),100):j})},60))},X=()=>{D.current&&clearInterval(D.current),d(!1),e<5&&o(!1)},ee=ne=>{e>=5||ne>=e&&U()};return B.jsxs("div",{className:"relative w-full max-w-sm mx-auto flex flex-col items-center",children:[B.jsxs("div",{className:"relative my-0 flex items-center justify-center",children:[B.jsx(ms,{children:r&&B.jsxs(Ht.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 pointer-events-none z-20 overflow-hidden flex items-center justify-center",children:[[1,2,3].map(ne=>B.jsx(Ht.div,{initial:{y:80,x:-60+ne*40,opacity:0,scale:.8},animate:{y:-120,x:-20+ne*30,opacity:[0,.85,0],scale:[.8,1.2,1.4]},transition:{duration:.7,repeat:1/0,delay:ne*.18,ease:"easeOut"},className:"absolute text-rose-300 font-bold text-2xl filter blur-[0.5px]",children:"💨"},ne)),B.jsxs("svg",{className:"absolute w-full h-full opacity-40 text-raspberry",viewBox:"0 0 300 300",fill:"none",children:[B.jsx("path",{d:"M40 240 Q150 160 260 200",stroke:"currentColor",strokeWidth:"3",strokeDasharray:"8 8",className:"animate-pulse"}),B.jsx("path",{d:"M60 200 Q160 120 240 150",stroke:"currentColor",strokeWidth:"2.5",strokeDasharray:"6 6",className:"animate-pulse"})]})]})}),B.jsx(ms,{children:A&&B.jsx(Ht.div,{initial:{scale:.5,y:0,opacity:0},animate:{scale:1.15,y:-45,opacity:1},exit:{scale:.9,opacity:0},transition:{duration:.5},className:"absolute top-10 z-30 px-3.5 py-1 rounded-full bg-white/95 border-2 border-raspberry text-raspberry font-serif font-bold text-xs shadow-lg flex items-center gap-1",children:B.jsxs("span",{children:["💨 Puff! Candle #",A," Out!"]})})}),B.jsx(Sm,{scale:1,focusedMode:!0,isBlowing:r,flameBendAngle:u?a/100*30:20,extinguishedCount:e})]}),B.jsxs("div",{className:"w-full flex items-center justify-between px-3 py-1.5 mb-1 bg-white/70 backdrop-blur-xs rounded-2xl border border-rose-200/80 shadow-xs z-10",children:[B.jsxs("span",{className:"text-[11px] font-bold text-[#38213D]/80",children:["Candles: ",B.jsxs("span",{className:"text-raspberry",children:[e,"/5"]})," Blown"]}),B.jsx("div",{className:"flex items-center gap-1.5",children:VL.map((ne,K)=>{const j=K<e;return B.jsx("button",{onClick:()=>ee(K),title:j?`Candle ${ne.id}: Blown out`:`Tap to blow Candle ${ne.id}`,className:`relative w-7 h-7 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${j?"bg-slate-200 text-slate-400 scale-90 border border-slate-300":"bg-white shadow-xs border-2 hover:scale-110 active:scale-95 animate-bounce"}`,style:{borderColor:j?"#cbd5e1":ne.bg},children:j?"💨":"🕯️"},ne.id)})})]}),B.jsx("div",{className:"w-full rounded-3xl bg-[#FFFDF8] border-2 border-[#F6AFC4] shadow-soft-card p-4 text-center z-10",children:y?B.jsxs(Ht.div,{initial:{scale:.85,opacity:0},animate:{scale:1,opacity:1},className:"py-1 flex flex-col items-center space-y-2",children:[B.jsx("div",{className:"w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm",children:B.jsx(nC,{className:"w-7 h-7"})}),B.jsx("h3",{className:"font-serif text-2xl font-bold text-[#38213D]",children:"All Candles Blown! 🎂"}),B.jsxs("p",{className:"font-handwriting text-2xl text-raspberry font-bold",children:['"',Qt.screen4.successText,'"']}),B.jsxs("button",{onClick:n,id:"wish-granted-next-btn",className:"mt-1 w-full py-3 px-6 rounded-full bg-gradient-to-r from-raspberry to-rose-600 text-white font-bold text-sm shadow-raspberry-glow flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all",children:[B.jsx("span",{children:"See Final Celebration 🎉"}),B.jsx(Pu,{className:"w-4 h-4"})]})]}):B.jsxs(B.Fragment,{children:[B.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-raspberry mb-1",children:[B.jsx(hu,{className:"w-3.5 h-3.5"}),B.jsx("span",{children:Qt.screen4.badge})]}),B.jsx("h3",{className:"font-serif text-2xl font-bold text-[#38213D] mb-1",children:Qt.screen4.title}),B.jsx("p",{className:"text-xs text-[#38213D]/70 font-sans max-w-xs mx-auto mb-3 leading-relaxed",children:Qt.screen4.instruction}),v&&B.jsxs("div",{className:"mb-2 px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-[11px] flex items-center justify-center gap-1.5",children:[B.jsx(tC,{className:"w-3.5 h-3.5 text-amber-600 flex-shrink-0"}),B.jsx("span",{children:v})]}),B.jsxs("div",{className:"grid grid-cols-2 gap-2.5",children:[B.jsxs("button",{onClick:h?W:V,id:"blow-mic-btn",className:`py-3 px-3 rounded-2xl border-2 font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-1 transition-all ${h?"bg-rose-50 border-raspberry text-raspberry shadow-inner animate-pulse":"bg-[#FFF1E7] hover:bg-rose-50 border-[#F6AFC4] text-[#38213D]"}`,children:[B.jsx(oC,{className:`w-5 h-5 ${h?"text-raspberry animate-bounce":"text-slate-600"}`}),B.jsx("span",{children:h?"Listening... Blow!":"🎤 Microphone"})]}),B.jsxs("button",{onPointerDown:te,onPointerUp:X,onPointerLeave:X,id:"blow-hold-btn",className:"relative py-3 px-3 rounded-2xl border-2 border-raspberry bg-gradient-to-r from-raspberry to-rose-600 text-white font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-1 shadow-raspberry-glow active:scale-95 transition-all overflow-hidden select-none",children:[B.jsx("div",{className:"absolute left-0 bottom-0 top-0 bg-white/35 transition-all duration-75 pointer-events-none",style:{width:`${a}%`}}),B.jsx(uC,{className:"w-5 h-5 animate-pulse text-white z-10"}),B.jsx("span",{className:"z-10 font-bold",children:u?`Blowing (${a}%)`:"💨 Press & Hold"})]})]})]})})]})}function GL({onNext:n}){return B.jsxs("div",{className:"relative w-full h-full flex flex-col justify-between items-center text-center px-4 pt-4 pb-4 overflow-y-auto",children:[B.jsx("div",{className:"w-full max-w-sm z-10",children:B.jsx("span",{className:"font-handwriting text-xl text-rose-500 font-bold block",children:"Make a special birthday wish... ✨"})}),B.jsx("div",{className:"w-full my-auto z-20",children:B.jsx(HL,{onCompleted:n})}),B.jsx("div",{className:"w-full max-w-xs z-10 pt-2 pb-1",children:B.jsxs("button",{onClick:n,id:"candles-next-btn",className:"w-full py-2.5 px-4 rounded-full bg-[#FFFDF8] hover:bg-white text-[#38213D] font-bold text-xs sm:text-sm border border-[#F6AFC4] shadow-xs hover:shadow-sm transition-all duration-300 flex items-center justify-center gap-1.5 group active:scale-95",children:[B.jsx("span",{children:"Skip to Celebration"}),B.jsx(Pu,{className:"w-3.5 h-3.5 text-raspberry group-hover:translate-x-1 transition-transform"})]})})]})}function WL({onReset:n}){return we.useEffect(()=>{try{const t=Date.now()+2500,r={startVelocity:30,spread:360,ticks:60,zIndex:100},o=(c,u)=>Math.random()*(u-c)+c,a=setInterval(()=>{const c=t-Date.now();if(c<=0)return clearInterval(a);const u=45*(c/2500);pu({...r,particleCount:u,origin:{x:o(.1,.4),y:Math.random()-.2},colors:["#D91F55","#F6AFC4","#D7B8F8","#FFEAA7"]}),pu({...r,particleCount:u,origin:{x:o(.6,.9),y:Math.random()-.2},colors:["#C5F0E3","#D91F55","#FFEAA7","#FFD7DF"]})},250);return()=>clearInterval(a)}catch{}},[]),B.jsxs("div",{className:"relative w-full h-full flex flex-col justify-between items-center text-center px-4 pt-4 pb-6 overflow-hidden",children:[B.jsxs(Ht.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.7},className:"w-full max-w-sm flex flex-col items-center z-10",children:[B.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-rose-100 to-purple-100 border border-rose-200 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2 shadow-xs",children:[B.jsx(iC,{className:"w-3.5 h-3.5 text-amber-500 animate-bounce"}),B.jsx("span",{children:Qt.screen5.badge}),B.jsx(hu,{className:"w-3 h-3 text-rose-400"})]}),B.jsx("h1",{className:"font-serif text-4xl sm:text-5xl font-extrabold text-[#38213D] tracking-tight leading-tight",children:Qt.screen5.title}),B.jsx("p",{className:"font-handwriting text-3xl sm:text-4xl text-raspberry font-bold mt-1",children:Qt.screen5.subtitle}),B.jsxs("div",{className:"flex items-center justify-center gap-4 mt-2 text-rose-400",children:[B.jsx(aC,{className:"w-4 h-4 animate-bounce"}),B.jsx(du,{className:"w-4 h-4 fill-rose-500 animate-pulse"}),B.jsx(sS,{className:"w-4 h-4 text-purple-500 animate-bounce"})]})]}),B.jsx(Ht.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.9,delay:.2},className:"my-auto py-2 z-10",children:B.jsx(Sm,{scale:1.05})}),B.jsx(Ht.div,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.7,delay:.4},className:"w-full max-w-xs z-10",children:B.jsxs("button",{onClick:n,id:"watch-again-btn",className:"group relative w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#D91F55] via-[#E82C64] to-[#D91F55] text-white font-sans font-bold text-base sm:text-lg shadow-raspberry-glow hover:shadow-[0_12px_35px_-4px_rgba(217,31,85,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 overflow-hidden",children:[B.jsx(cC,{className:"w-5 h-5 group-hover:-rotate-90 transition-transform duration-300"}),B.jsx("span",{children:Qt.screen5.buttonText}),B.jsx(hu,{className:"w-4 h-4 text-amber-200"})]})})]})}function XL(){const[n,e]=we.useState(1),[t,r]=we.useState(1),[o,a]=we.useState(0),c=5,u=()=>{n<c&&(r(1),e(p=>p+1))},d=()=>{n>1&&(r(-1),e(p=>p-1))},h=p=>{r(p>n?1:-1),e(p)},m=()=>{r(-1),e(1),a(p=>p+1)},v={enter:p=>({x:p>0?80:-80,opacity:0,scale:.98}),center:{x:0,opacity:1,scale:1,transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.3},scale:{duration:.3}}},exit:p=>({x:p>0?-80:80,opacity:0,scale:.98,transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.25},scale:{duration:.25}}})};return B.jsx("div",{className:"min-h-screen w-full bg-[#FCECE3] flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden select-none",children:B.jsxs("div",{className:"relative w-full sm:max-w-[410px] h-[100dvh] sm:h-[860px] sm:max-h-[92vh] bg-pastel-gradient sm:rounded-[44px] shadow-2xl overflow-hidden flex flex-col justify-between border-0 sm:border-8 sm:border-white/80",children:[B.jsx(Vb,{}),B.jsx("div",{className:"relative flex-1 w-full overflow-hidden z-10",children:B.jsx(ms,{mode:"wait",custom:t,children:B.jsxs(Ht.div,{custom:t,variants:v,initial:"enter",animate:"center",exit:"exit",className:"w-full h-full",children:[n===1&&B.jsx(UL,{onNext:u}),n===2&&B.jsx(kL,{onNext:u}),n===3&&B.jsx(zL,{onNext:u}),n===4&&B.jsx(GL,{onNext:u}),n===5&&B.jsx(WL,{onReset:m})]},`${n}-${o}`)})}),B.jsx("div",{className:"relative w-full pb-4 sm:pb-5 pt-1 px-4 z-30",children:B.jsx(hC,{currentPage:n,totalPages:c,onPrev:d,onNext:u,onSelectPage:h})})]})})}G1.createRoot(document.getElementById("root")).render(B.jsx(U1.StrictMode,{children:B.jsx(XL,{})}));
