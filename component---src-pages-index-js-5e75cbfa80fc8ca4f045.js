/*! For license information please see component---src-pages-index-js-5e75cbfa80fc8ca4f045.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{9591:function(e,t,n){var r=n(8).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},n=Object.prototype,a=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},l=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(j){u=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=x(i,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=d(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}t.wrap=f;var p={};function h(){}function m(){}function $(){}var g={};u(g,l,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(R([])));v&&v!==n&&a.call(v,l)&&(g=v);var w=$.prototype=h.prototype=Object.create(g);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,i,l,s){var c=d(e[o],e,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==r(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,l,s)}),(function(e){n("throw",e,l,s)})):t.resolve(f).then((function(e){u.value=e,l(u)}),(function(e){return n("throw",e,l,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function x(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=d(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function R(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=$,u(w,"constructor",$),u($,"constructor",m),m.displayName=u($,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,$):(e.__proto__=$,u(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},b(E.prototype),u(E.prototype,s,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(f(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(w),u(w,c,"Generator"),u(w,l,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:R(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7757:function(e,t,n){var r=n(9591)();e.exports=r;try{regeneratorRuntime=r}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},9047:function(e,t,n){var r={"./deckgo-highlight-code.entry.js":[9548,548]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=9047,e.exports=o},5397:function(e,t,n){"use strict";n.d(t,{H:function(){return U},b:function(){return xe},c:function(){return ie},g:function(){return ae},h:function(){return H},p:function(){return R},r:function(){return Se}});var r=n(5671),o=n(3144);function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=n(9611);function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,i.Z)(e,t)}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function d(e,t,n){return d=f()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&(0,i.Z)(o,n.prototype),o},d.apply(null,arguments)}function p(e){var t="function"==typeof Map?new Map:void 0;return p=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return d(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,i.Z)(r,e)},p(e)}var h=n(5861),m=n(2982);var $=n(181);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(s){l=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||(0,$.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=n(7757),v=n.n(y);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var b,E,x=!1,L="undefined"!=typeof window?window:{},k=L.document||{head:{}},S={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},R=function(e){return Promise.resolve(e)},O=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1}(),j=function(e,t,n,r){n&&n.map((function(n){var r=g(n,3),o=r[0],a=r[1],i=r[2],l=C(e,o),s=T(t,i),c=N(o);S.ael(l,a,s,c),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return S.rel(l,a,s,c)}))}))},T=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){je(r)}}},C=function(e,t){return 4&t?k:8&t?L:e},N=function(e){return 0!=(2&e)},P="{visibility:hidden}.hydrated{visibility:inherit}",_="http://www.w3.org/1999/xlink",M=new WeakMap,I=function(e,t,n){var r=Ne.get(e);O&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Ne.set(e,r)},A=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=(t.$tagName$,function(){}),a=function(e,t,n,r){var o=q(t),a=Ne.get(o);if(e=11===e.nodeType?e:k,a)if("string"==typeof a){e=e.head||e;var i,l=M.get(e);l||M.set(e,l=new Set),l.has(o)||((i=k.createElement("style")).innerHTML=a,e.insertBefore(i,e.querySelector("link")),l&&l.add(o))}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=[].concat((0,m.Z)(e.adoptedStyleSheets),[a]));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=a,n.classList.add(a+"-h")),o()},q=function(e,t){return"sc-"+e.$tagName$},z={},Z=function(e){return"object"===(e=typeof e)||"function"===e},H=function(e,t){for(var n=null,r=null,o=!1,a=!1,i=[],l=function t(r){for(var l=0;l<r.length;l++)n=r[l],Array.isArray(n)?t(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!Z(n))&&(n=String(n)),o&&a?i[i.length-1].$text$+=n:i.push(o?F(null,n):n),a=o)},s=arguments.length,c=new Array(s>2?s-2:0),u=2;u<s;u++)c[u-2]=arguments[u];if(l(c),t){t.key&&(r=t.key);var f=t.className||t.class;f&&(t.class="object"!=typeof f?f:Object.keys(f).filter((function(e){return f[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,i,W);var d=F(e,null);return d.$attrs$=t,i.length>0&&(d.$children$=i),d.$key$=r,d},F=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},U={},W={forEach:function(e,t){return e.map(B).forEach(t)},map:function(e,t){return e.map(B).map(t).map(G)}},B=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},G=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),H.apply(void 0,[e.vtag,t].concat((0,m.Z)(e.vchildren||[])))}var n=F(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},D=function(e,t,n,r,o,a){if(n!==r){var i=Oe(e,t),l=t.toLowerCase();if("class"===t){var s=e.classList,c=J(n),u=J(r);s.remove.apply(s,(0,m.Z)(c.filter((function(e){return e&&!u.includes(e)})))),s.add.apply(s,(0,m.Z)(u.filter((function(e){return e&&!c.includes(e)}))))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var d in r)n&&r[d]===n[d]||(d.includes("-")?e.style.setProperty(d,r[d]):e.style[d]=r[d])}else if("key"===t);else if("ref"===t)r&&r(e);else if(i||"o"!==t[0]||"n"!==t[1]){var p=Z(r);if((i||p&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var h=null==r?"":r;"list"===t?i=!1:null!=n&&e[t]==h||(e[t]=h)}}catch(g){}var $=!1;l!==(l=l.replace(/^xlink\:?/,""))&&(t=l,$=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||($?e.removeAttributeNS(_,t):e.removeAttribute(t)):(!i||4&a||o)&&!p&&(r=!0===r?"":r,$?e.setAttributeNS(_,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):Oe(L,l)?l.slice(2):l[2]+t.slice(3),n&&S.rel(e,t,n,!1),r&&S.ael(e,t,r,!1)}},V=/\s/,J=function(e){return e?e.split(V):[]},Y=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||z,i=t.$attrs$||z;for(r in a)r in i||D(o,r,a[r],void 0,n,t.$flags$);for(r in i)D(o,r,a[r],i[r],n,t.$flags$)},K=function e(t,n,r,o){var a,i,l=n.$children$[r],s=0;if(null!==l.$text$)a=l.$elm$=k.createTextNode(l.$text$);else if(a=l.$elm$=k.createElement(l.$tag$),Y(null,l,false),null!=b&&a["s-si"]!==b&&a.classList.add(a["s-si"]=b),l.$children$)for(s=0;s<l.$children$.length;++s)(i=e(t,l,s))&&a.appendChild(i);return a},Q=function(e,t,n,r,o,a){var i,l=e;for(l.shadowRoot&&l.tagName===E&&(l=l.shadowRoot);o<=a;++o)r[o]&&(i=K(null,n,o))&&(r[o].$elm$=i,l.insertBefore(i,t))},X=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,re(r),o.remove())},ee=function(e,t,n,r){for(var o,a,i=0,l=0,s=0,c=0,u=t.length-1,f=t[0],d=t[u],p=r.length-1,h=r[0],m=r[p];i<=u&&l<=p;)if(null==f)f=t[++i];else if(null==d)d=t[--u];else if(null==h)h=r[++l];else if(null==m)m=r[--p];else if(te(f,h))ne(f,h),f=t[++i],h=r[++l];else if(te(d,m))ne(d,m),d=t[--u],m=r[--p];else if(te(f,m))ne(f,m),e.insertBefore(f.$elm$,d.$elm$.nextSibling),f=t[++i],m=r[--p];else if(te(d,h))ne(d,h),e.insertBefore(d.$elm$,f.$elm$),d=t[--u],h=r[++l];else{for(s=-1,c=i;c<=u;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===h.$key$){s=c;break}s>=0?((a=t[s]).$tag$!==h.$tag$?o=K(t&&t[l],n,s):(ne(a,h),t[s]=void 0,o=a.$elm$),h=r[++l]):(o=K(t&&t[l],n,l),h=r[++l]),o&&f.$elm$.parentNode.insertBefore(o,f.$elm$)}i>u?Q(e,null==r[p+1]?null:r[p+1].$elm$,n,r,l,p):l>p&&X(t,i,u)},te=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},ne=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$,a=t.$tag$,i=t.$text$;null===i?("slot"===a||Y(e,t,false),null!==r&&null!==o?ee(n,r,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),Q(n,null,t,o,0,o.length-1)):null!==r&&X(r,0,r.length-1)):e.$text$!==i&&(n.data=i)},re=function e(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(e)},oe=function(e,t){var n,r=e.$hostElement$,o=e.$cmpMeta$,a=e.$vnode$||F(null,null),i=(n=t)&&n.$tag$===U?t:H(null,null,t);E=r.tagName,o.$attrsToReflect$&&(i.$attrs$=i.$attrs$||{},o.$attrsToReflect$.map((function(e){var t=g(e,2),n=t[0],o=t[1];return i.$attrs$[o]=r[n]}))),i.$tag$=null,i.$flags$|=4,e.$vnode$=i,i.$elm$=a.$elm$=r.shadowRoot||r,b=r["s-sc"],ne(a,i)},ae=function(e){return ke(e).$hostElement$},ie=function(e,t,n){var r=ae(e);return{emit:function(e){return le(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},le=function(e,t,n){var r=S.ce(t,n);return e.dispatchEvent(r),r},se=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},ce=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){se(e,e.$ancestorComponent$);return ze((function(){return ue(e,t)}))}e.$flags$|=512},ue=function(e,t){var n,r=(e.$cmpMeta$.$tagName$,function(){}),o=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=g(e,2),n=t[0],r=t[1];return me(o,n,r)})),e.$queuedListeners$=null),n=me(o,"componentWillLoad")),r(),$e(n,(function(){return fe(e,o,t)}))},fe=function(){var e=(0,h.Z)(v().mark((function e(t,n,r){var o,a,i,l,s,c;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$hostElement$,t.$cmpMeta$.$tagName$,a=function(){},i=o["s-rc"],r&&A(t),t.$cmpMeta$.$tagName$,l=function(){},de(t,n),i&&(i.map((function(e){return e()})),o["s-rc"]=void 0),l(),a(),s=o["s-p"],c=function(){return pe(t)},0===s.length?c():(Promise.all(s).then(c),t.$flags$|=4,s.length=0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),de=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,oe(e,t)}catch(r){je(r,e.$hostElement$)}return null},pe=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$lazyInstance$,o=e.$ancestorComponent$;64&e.$flags$?(me(r,"componentDidUpdate"),n()):(e.$flags$|=64,ge(t),me(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),o||he()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&qe((function(){return ce(e,!1)})),e.$flags$&=-517},he=function(e){ge(k.documentElement),qe((function(){return le(L,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})}))},me=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){je(r)}},$e=function(e,t){return e&&e.then?e.then(t):t()},ge=function(e){return e.classList.add("hydrated")},ye=function(e,t,n,r){var o,a,i=ke(e),l=i.$hostElement$,s=i.$instanceValues$.get(t),c=i.$flags$,u=i.$lazyInstance$;if(o=n,a=r.$members$[t][0],n=null==o||Z(o)?o:4&a?"false"!==o&&(""===o||!!o):1&a?String(o):o,!(8&c&&void 0!==s||n===s)&&(i.$instanceValues$.set(t,n),u)){if(r.$watchers$&&128&c){var f=r.$watchers$[t];f&&f.map((function(e){try{u[e](n,s,t)}catch(r){je(r,l)}}))}2==(18&c)&&ce(i,!1)}},ve=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=g(e,2),a=r[0],i=g(r[1],1)[0];31&i||2&n&&32&i?Object.defineProperty(o,a,{get:function(){return e=a,ke(this).$instanceValues$.get(e);var e},set:function(e){ye(this,a,e,t)},configurable:!0,enumerable:!0}):1&n&&64&i&&Object.defineProperty(o,a,{value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=ke(this);return r.$onInstancePromise$.then((function(){var e;return(e=r.$lazyInstance$)[a].apply(e,t)}))}})})),1&n){var a=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;S.jmp((function(){var t=a.get(e);if(r.hasOwnProperty(t))n=r[t],delete r[t];else if(o.hasOwnProperty(t)&&"number"==typeof r[t]&&r[t]==n)return;r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){var t=g(e,2);t[0];return 15&t[1][0]})).map((function(e){var n=g(e,2),r=n[0],o=n[1],i=o[1]||r;return a.set(i,r),512&o[0]&&t.$attrsToReflect$.push([r,i]),i}))}}return e},we=function(){var e=(0,h.Z)(v().mark((function e(t,n,r,o,a){var i,l,s,c,u,f,d;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(32&n.$flags$)){e.next=17;break}if(n.$flags$|=32,!(a=Ce(r)).then){e.next=9;break}return i=function(){},e.next=7,a;case 7:a=e.sent,i();case 9:a.isProxied||(r.$watchers$=a.watchers,ve(a,r,2),a.isProxied=!0),r.$tagName$,l=function(){},n.$flags$|=8;try{new a(n)}catch(t){je(t)}n.$flags$&=-9,n.$flags$|=128,l(),a.style&&(s=a.style,c=q(r),Ne.has(c)||(r.$tagName$,u=function(){},I(c,s,!!(1&r.$flags$)),u()));case 17:f=n.$ancestorComponent$,d=function(){return ce(n,!0)},f&&f["s-rc"]?f["s-rc"].push(d):d();case 20:case"end":return e.stop()}}),e)})));return function(t,n,r,o,a){return e.apply(this,arguments)}}(),be=function(e){if(0==(1&S.$flags$)){var t=ke(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(1&t.$flags$)j(e,t,n.$listeners$);else{t.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){se(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=g(t,2),r=n[0];if(31&g(n[1],1)[0]&&e.hasOwnProperty(r)){var o=e[r];delete e[r],e[r]=o}})),we(e,t,n)}r()}},Ee=function(e){if(0==(1&S.$flags$)){var t=ke(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0)}},xe=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=function(){},s=[],c=n.exclude||[],u=L.customElements,f=k.head,d=f.querySelector("meta[charset]"),h=k.createElement("style"),m=[],$=!0;Object.assign(S,n),S.$resourcesUrl$=new URL(n.resourcesUrl||"./",k.baseURI).href,e.map((function(e){e[1].map((function(n){var i={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};i.$members$=n[2],i.$listeners$=n[3],i.$attrsToReflect$=[],i.$watchers$={};var f=i.$tagName$,d=function(e){l(s,e);var n=w(s);function s(e){var t;return(0,r.Z)(this,s),e=a(t=n.call(this,e)),Re(e,i),1&i.$flags$&&e.attachShadow({mode:"open"}),t}return(0,o.Z)(s,[{key:"connectedCallback",value:function(){var e=this;t&&(clearTimeout(t),t=null),$?m.push(this):S.jmp((function(){return be(e)}))}},{key:"disconnectedCallback",value:function(){var e=this;S.jmp((function(){return Ee(e)}))}},{key:"componentOnReady",value:function(){return ke(this).$onReadyPromise$}}]),s}(p(HTMLElement));i.$lazyBundleId$=e[0],c.includes(f)||u.get(f)||(s.push(f),u.define(f,ve(d,i,1)))}))})),h.innerHTML=s+P,h.setAttribute("data-styles",""),f.insertBefore(h,d?d.nextSibling:f.firstChild),$=!1,m.length?m.map((function(e){return e.connectedCallback()})):S.jmp((function(){return t=setTimeout(he,30)})),i()},Le=new WeakMap,ke=function(e){return Le.get(e)},Se=function(e,t){return Le.set(t.$lazyInstance$=e,t)},Re=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],j(e,n,t.$listeners$),Le.set(e,n)},Oe=function(e,t){return t in e},je=function(e,t){return(0,console.error)(e,t)},Te=new Map,Ce=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),a=e.$lazyBundleId$,i=Te.get(a);return i?i[o]:n(9047)("./".concat(a,".entry.js")).then((function(e){return Te.set(a,e),e[o]}),je)},Ne=new Map,Pe=[],_e=[],Me=function(e,t){return function(n){e.push(n),x||(x=!0,t&&4&S.$flags$?qe(Ae):S.raf(Ae))}},Ie=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){je(n)}e.length=0},Ae=function e(){Ie(Pe),Ie(_e),(x=Pe.length>0)&&S.raf(e)},qe=function(e){return R().then(e)},ze=Me(_e,!0)},4811:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,r=!1,o=0;o<e.length;o++){var a=e[o];t&&/[a-zA-Z]/.test(a)&&a.toUpperCase()===a?(e=e.slice(0,o)+"-"+e.slice(o),t=!1,r=n,n=!0,o++):n&&r&&/[a-zA-Z]/.test(a)&&a.toLowerCase()===a?(e=e.slice(0,o-1)+"-"+e.slice(o-1),r=n,n=!1,t=!0):(t=a.toLowerCase()===a&&a.toUpperCase()!==a,r=n,n=a.toUpperCase()===a&&a.toLowerCase()!==a)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},7059:function(e,t,n){"use strict";n.d(t,{L:function(){return h},M:function(){return b},P:function(){return w},S:function(){return I},_:function(){return l},a:function(){return i},b:function(){return c},g:function(){return u},h:function(){return s}});var r=n(7294),o=(n(4811),n(5697)),a=n.n(o);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,n,r,o){return void 0===o&&(o={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},o,{opacity:t?1:0})})}function u(e,t,n,r,o,a,l,s){var c={};a&&(c.backgroundColor=a,"fixed"===n?(c.width=r,c.height=o,c.backgroundColor=a,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var f,d=["children"],p=function(e){var t=e.layout,n=e.width,o=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+o+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,n=l(e,d);return r.createElement(r.Fragment,null,r.createElement(p,i({},n)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],$=["fallback","sources","shouldLoad"],g=function(e){var t=e.src,n=e.srcSet,o=e.loading,a=e.alt,s=void 0===a?"":a,c=e.shouldLoad,u=l(e,m);return r.createElement("img",i({},u,{decoding:"async",loading:o,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:s}))},y=function(e){var t=e.fallback,n=e.sources,o=void 0===n?[]:n,a=e.shouldLoad,s=void 0===a||a,c=l(e,$),u=c.sizes||(null==t?void 0:t.sizes),f=r.createElement(g,i({},c,t,{sizes:u,shouldLoad:s}));return o.length?r.createElement("picture",null,o.map((function(e){var t=e.media,n=e.srcSet,o=e.type;return r.createElement("source",{key:t+"-"+o+"-"+n,type:o,media:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,sizes:u})})),f):f};g.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},y.displayName="Picture",y.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};var v=["fallback"],w=function(e){var t=e.fallback,n=l(e,v);return t?r.createElement(y,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};w.displayName="Placeholder",w.propTypes={fallback:o.string,sources:null==(f=y.propTypes)?void 0:f.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var b=function(e){return r.createElement(r.Fragment,null,r.createElement(y,i({},e)),r.createElement("noscript",null,r.createElement(y,i({},e,{shouldLoad:!0}))))};b.displayName="MainImage",b.propTypes=y.propTypes;var E,x,L=function(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return e.alt||""===e.alt?a().string.apply(a(),[e,t,n].concat(o)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:a().object.isRequired,alt:L},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],R=["style","className"],O=new Set,j=function(e){var t=e.as,o=void 0===t?"div":t,a=e.image,c=e.style,u=e.backgroundColor,f=e.className,d=e.class,p=e.onStartLoad,h=e.onLoad,m=e.onError,$=l(e,S),g=a.width,y=a.height,v=a.layout,w=function(e,t,n){var r={},o="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:r}}(g,y,v),b=w.style,L=w.className,k=l(w,R),j=(0,r.useRef)(),T=(0,r.useMemo)((function(){return JSON.stringify(a.images)}),[a.images]);d&&(f=d);var C=function(e,t,n){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,g,y);return(0,r.useEffect)((function(){E||(E=Promise.all([n.e(774),n.e(826)]).then(n.bind(n,8826)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return x=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,r=j.current.querySelector("[data-gatsby-image-ssr]");return r&&s()?(r.complete?(null==p||p({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void O.add(T)):x&&O.has(T)?void 0:(E.then((function(n){var r=n.renderImageToString,o=n.swapPlaceholderImage;j.current&&(j.current.innerHTML=r(i({isLoading:!0,isLoaded:O.has(T),image:a},$)),O.has(T)||(e=requestAnimationFrame((function(){j.current&&(t=o(j.current,T,O,c,p,h,m))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[a]),(0,r.useLayoutEffect)((function(){O.has(T)&&x&&(j.current.innerHTML=x(i({isLoading:O.has(T),isLoaded:O.has(T),image:a},$)),null==p||p({wasCached:!0}),null==h||h({wasCached:!0}))}),[a]),(0,r.createElement)(o,i({},k,{style:i({},b,c,{backgroundColor:u}),className:L+(f?" "+f:""),ref:j,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));T.propTypes=k,T.displayName="GatsbyImage";var C,N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],P=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?a().number.apply(a(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),M={src:a().string.isRequired,alt:L,width:P,height:P,sizes:a().string,layout:function(e){if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},I=(C=T,function(e){var t=e.src,n=e.__imageData,o=e.__error,a=l(e,N);return o&&console.warn(o),n?r.createElement(C,i({image:n},a)):(console.warn("Image not loaded",t),null)});I.displayName="StaticImage",I.propTypes=M},3121:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r,o=n(7294),a=n(1597),i=n(7059),l=function(){var e,t,r=(0,a.useStaticQuery)("3257411868"),l=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=r.site.siteMetadata)||void 0===t||t.social;return o.createElement("div",{className:"bio"},o.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.jpeg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:n(8765)}),(null==l?void 0:l.name)&&o.createElement("p",null,"My name is ",o.createElement("strong",null,"Nils Eriksson"),". I'm a software educator at ",o.createElement("a",{href:"https://jameskoppelcoaching.com/advanced-software-design-web-course/#register"},"James Koppel Coaching"),". I enjoy thinking deeply about software, this blog is a collection of my thoughts."))},s=n(8678),c=n(262),u=n(5397);!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,u.p)().then((function(){return(0,u.b)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"],[8,"copy","onCopyCleanZeroWidthSpaces"]]]]]],r)}));var f=function(e){var t,n=e.data,r=e.location,i=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=n.allMarkdownRemark.nodes;return 0===u.length?o.createElement(s.Z,{location:r,title:i},o.createElement(c.Z,{title:"All posts"}),o.createElement(l,null),o.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):o.createElement(s.Z,{location:r,title:i},o.createElement(c.Z,{title:"All posts"}),o.createElement(l,null),o.createElement("div",{style:{paddingTop:"10px",paddingBottom:"10px"}},o.createElement("ol",{style:{listStyle:"none"}},u.map((function(e){var t=e.frontmatter.title||e.fields.slug;return o.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},o.createElement("li",{key:e.fields.slug,className:"bg-slate-100 p-3 py-4 rounded-xl shadow-lg hover:bg-slate-50 cursor-pointer"},o.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("header",null,o.createElement("h2",null,o.createElement("span",{itemProp:"headline"},t)),o.createElement("small",null,e.frontmatter.date)),o.createElement("section",null,o.createElement("p",{className:"text-slate-800",dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})))))})))))}},5861:function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var l=e[a](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function l(e){r(i,o,a,l,s,"next",e)}function s(e){r(i,o,a,l,s,"throw",e)}l(void 0)}))}}n.d(t,{Z:function(){return o}})},5671:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return o}})},8765:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#281838","images":{"fallback":{"src":"/static/79977020e69335e5a24f2d04c9860414/d24ee/profile-pic.jpg","srcSet":"/static/79977020e69335e5a24f2d04c9860414/d24ee/profile-pic.jpg 50w,\\n/static/79977020e69335e5a24f2d04c9860414/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/79977020e69335e5a24f2d04c9860414/d4bf4/profile-pic.avif 50w,\\n/static/79977020e69335e5a24f2d04c9860414/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/79977020e69335e5a24f2d04c9860414/3faea/profile-pic.webp 50w,\\n/static/79977020e69335e5a24f2d04c9860414/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-5e75cbfa80fc8ca4f045.js.map