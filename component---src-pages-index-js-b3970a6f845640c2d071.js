/*! For license information please see component---src-pages-index-js-b3970a6f845640c2d071.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{9591:function(e,t,n){var r=n(8).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(O){s=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=E(a,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=$(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,a),i}function $(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=f;var p={};function h(){}function d(){}function m(){}var y={};s(y,u,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(R([])));g&&g!==n&&i.call(g,u)&&(y=g);var b=m.prototype=h.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(o,a,u,l){var c=$(e[o],e,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==r(f)&&i.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,u,l)}),(function(e){n("throw",e,u,l)})):t.resolve(f).then((function(e){s.value=e,u(s)}),(function(e){return n("throw",e,u,l)}))}l(c.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=$(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function R(e){if(e){var t=e[u];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=m,s(b,"constructor",m),s(m,"constructor",d),d.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},t.awrap=function(e){return{__await:e}},w(x.prototype),s(x.prototype,l,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(b),s(b,c,"Generator"),s(b,u,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(u&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:R(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7757:function(e,t,n){var r=n(9591)();e.exports=r;try{regeneratorRuntime=r}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},9047:function(e,t,n){var r={"./deckgo-highlight-code.entry.js":[9548,548]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=9047,e.exports=o},5397:function(e,t,n){"use strict";n.d(t,{H:function(){return z},b:function(){return Ee},c:function(){return ae},g:function(){return ie},h:function(){return F},p:function(){return R},r:function(){return Se}});var r=n(5671),o=n(3144);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=n(9611);function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,a.Z)(e,t)}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function $(e,t,n){return $=f()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&(0,a.Z)(o,n.prototype),o},$.apply(null,arguments)}function p(e){var t="function"==typeof Map?new Map:void 0;return p=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return $(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,a.Z)(r,e)},p(e)}var h=n(5861),d=n(2982);var m=n(181);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||(0,m.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=n(7757),g=n.n(v);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var w,x,E=!1,L="undefined"!=typeof window?window:{},k=L.document||{head:{}},S={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},R=function(e){return Promise.resolve(e)},j=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1}(),O=function(e,t,n,r){n&&n.map((function(n){var r=y(n,3),o=r[0],i=r[1],a=r[2],u=_(e,o),l=P(t,a),c=N(o);S.ael(u,i,l,c),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return S.rel(u,i,l,c)}))}))},P=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){Oe(r)}}},_=function(e,t){return 4&t?k:8&t?L:e},N=function(e){return 0!=(2&e)},T="{visibility:hidden}.hydrated{visibility:inherit}",M="http://www.w3.org/1999/xlink",C=new WeakMap,A=function(e,t,n){var r=Ne.get(e);j&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Ne.set(e,r)},Z=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=(t.$tagName$,function(){}),i=function(e,t,n,r){var o=I(t),i=Ne.get(o);if(e=11===e.nodeType?e:k,i)if("string"==typeof i){e=e.head||e;var a,u=C.get(e);u||C.set(e,u=new Set),u.has(o)||((a=k.createElement("style")).innerHTML=i,e.insertBefore(a,e.querySelector("link")),u&&u.add(o))}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=[].concat((0,d.Z)(e.adoptedStyleSheets),[i]));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=i,n.classList.add(i+"-h")),o()},I=function(e,t){return"sc-"+e.$tagName$},H={},B=function(e){return"object"===(e=typeof e)||"function"===e},F=function(e,t){for(var n=null,r=null,o=!1,i=!1,a=[],u=function t(r){for(var u=0;u<r.length;u++)n=r[u],Array.isArray(n)?t(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!B(n))&&(n=String(n)),o&&i?a[a.length-1].$text$+=n:a.push(o?q(null,n):n),i=o)},l=arguments.length,c=new Array(l>2?l-2:0),s=2;s<l;s++)c[s-2]=arguments[s];if(u(c),t){t.key&&(r=t.key);var f=t.className||t.class;f&&(t.class="object"!=typeof f?f:Object.keys(f).filter((function(e){return f[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,a,G);var $=q(e,null);return $.$attrs$=t,a.length>0&&($.$children$=a),$.$key$=r,$},q=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},z={},G={forEach:function(e,t){return e.map(U).forEach(t)},map:function(e,t){return e.map(U).map(t).map(D)}},U=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},D=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),F.apply(void 0,[e.vtag,t].concat((0,d.Z)(e.vchildren||[])))}var n=q(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},V=function(e,t,n,r,o,i){if(n!==r){var a=je(e,t),u=t.toLowerCase();if("class"===t){var l=e.classList,c=Y(n),s=Y(r);l.remove.apply(l,(0,d.Z)(c.filter((function(e){return e&&!s.includes(e)})))),l.add.apply(l,(0,d.Z)(s.filter((function(e){return e&&!c.includes(e)}))))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var $ in r)n&&r[$]===n[$]||($.includes("-")?e.style.setProperty($,r[$]):e.style[$]=r[$])}else if("key"===t);else if("ref"===t)r&&r(e);else if(a||"o"!==t[0]||"n"!==t[1]){var p=B(r);if((a||p&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var h=null==r?"":r;"list"===t?a=!1:null!=n&&e[t]==h||(e[t]=h)}}catch(y){}var m=!1;u!==(u=u.replace(/^xlink\:?/,""))&&(t=u,m=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(m?e.removeAttributeNS(M,t):e.removeAttribute(t)):(!a||4&i||o)&&!p&&(r=!0===r?"":r,m?e.setAttributeNS(M,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):je(L,u)?u.slice(2):u[2]+t.slice(3),n&&S.rel(e,t,n,!1),r&&S.ael(e,t,r,!1)}},W=/\s/,Y=function(e){return e?e.split(W):[]},J=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||H,a=t.$attrs$||H;for(r in i)r in a||V(o,r,i[r],void 0,n,t.$flags$);for(r in a)V(o,r,i[r],a[r],n,t.$flags$)},K=function e(t,n,r,o){var i,a,u=n.$children$[r],l=0;if(null!==u.$text$)i=u.$elm$=k.createTextNode(u.$text$);else if(i=u.$elm$=k.createElement(u.$tag$),J(null,u,false),null!=w&&i["s-si"]!==w&&i.classList.add(i["s-si"]=w),u.$children$)for(l=0;l<u.$children$.length;++l)(a=e(t,u,l))&&i.appendChild(a);return i},Q=function(e,t,n,r,o,i){var a,u=e;for(u.shadowRoot&&u.tagName===x&&(u=u.shadowRoot);o<=i;++o)r[o]&&(a=K(null,n,o))&&(r[o].$elm$=a,u.insertBefore(a,t))},X=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,re(r),o.remove())},ee=function(e,t,n,r){for(var o,i,a=0,u=0,l=0,c=0,s=t.length-1,f=t[0],$=t[s],p=r.length-1,h=r[0],d=r[p];a<=s&&u<=p;)if(null==f)f=t[++a];else if(null==$)$=t[--s];else if(null==h)h=r[++u];else if(null==d)d=r[--p];else if(te(f,h))ne(f,h),f=t[++a],h=r[++u];else if(te($,d))ne($,d),$=t[--s],d=r[--p];else if(te(f,d))ne(f,d),e.insertBefore(f.$elm$,$.$elm$.nextSibling),f=t[++a],d=r[--p];else if(te($,h))ne($,h),e.insertBefore($.$elm$,f.$elm$),$=t[--s],h=r[++u];else{for(l=-1,c=a;c<=s;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===h.$key$){l=c;break}l>=0?((i=t[l]).$tag$!==h.$tag$?o=K(t&&t[u],n,l):(ne(i,h),t[l]=void 0,o=i.$elm$),h=r[++u]):(o=K(t&&t[u],n,u),h=r[++u]),o&&f.$elm$.parentNode.insertBefore(o,f.$elm$)}a>s?Q(e,null==r[p+1]?null:r[p+1].$elm$,n,r,u,p):u>p&&X(t,a,s)},te=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},ne=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$,i=t.$tag$,a=t.$text$;null===a?("slot"===i||J(e,t,false),null!==r&&null!==o?ee(n,r,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),Q(n,null,t,o,0,o.length-1)):null!==r&&X(r,0,r.length-1)):e.$text$!==a&&(n.data=a)},re=function e(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(e)},oe=function(e,t){var n,r=e.$hostElement$,o=e.$cmpMeta$,i=e.$vnode$||q(null,null),a=(n=t)&&n.$tag$===z?t:F(null,null,t);x=r.tagName,o.$attrsToReflect$&&(a.$attrs$=a.$attrs$||{},o.$attrsToReflect$.map((function(e){var t=y(e,2),n=t[0],o=t[1];return a.$attrs$[o]=r[n]}))),a.$tag$=null,a.$flags$|=4,e.$vnode$=a,a.$elm$=i.$elm$=r.shadowRoot||r,w=r["s-sc"],ne(i,a)},ie=function(e){return ke(e).$hostElement$},ae=function(e,t,n){var r=ie(e);return{emit:function(e){return ue(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},ue=function(e,t,n){var r=S.ce(t,n);return e.dispatchEvent(r),r},le=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},ce=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){le(e,e.$ancestorComponent$);return He((function(){return se(e,t)}))}e.$flags$|=512},se=function(e,t){var n,r=(e.$cmpMeta$.$tagName$,function(){}),o=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=y(e,2),n=t[0],r=t[1];return de(o,n,r)})),e.$queuedListeners$=null),n=de(o,"componentWillLoad")),r(),me(n,(function(){return fe(e,o,t)}))},fe=function(){var e=(0,h.Z)(g().mark((function e(t,n,r){var o,i,a,u,l,c;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$hostElement$,t.$cmpMeta$.$tagName$,i=function(){},a=o["s-rc"],r&&Z(t),t.$cmpMeta$.$tagName$,u=function(){},$e(t,n),a&&(a.map((function(e){return e()})),o["s-rc"]=void 0),u(),i(),l=o["s-p"],c=function(){return pe(t)},0===l.length?c():(Promise.all(l).then(c),t.$flags$|=4,l.length=0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),$e=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,oe(e,t)}catch(r){Oe(r,e.$hostElement$)}return null},pe=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$lazyInstance$,o=e.$ancestorComponent$;64&e.$flags$?(de(r,"componentDidUpdate"),n()):(e.$flags$|=64,ye(t),de(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),o||he()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Ie((function(){return ce(e,!1)})),e.$flags$&=-517},he=function(e){ye(k.documentElement),Ie((function(){return ue(L,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})}))},de=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){Oe(r)}},me=function(e,t){return e&&e.then?e.then(t):t()},ye=function(e){return e.classList.add("hydrated")},ve=function(e,t,n,r){var o,i,a=ke(e),u=a.$hostElement$,l=a.$instanceValues$.get(t),c=a.$flags$,s=a.$lazyInstance$;if(o=n,i=r.$members$[t][0],n=null==o||B(o)?o:4&i?"false"!==o&&(""===o||!!o):1&i?String(o):o,!(8&c&&void 0!==l||n===l)&&(a.$instanceValues$.set(t,n),s)){if(r.$watchers$&&128&c){var f=r.$watchers$[t];f&&f.map((function(e){try{s[e](n,l,t)}catch(r){Oe(r,u)}}))}2==(18&c)&&ce(a,!1)}},ge=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=y(e,2),i=r[0],a=y(r[1],1)[0];31&a||2&n&&32&a?Object.defineProperty(o,i,{get:function(){return e=i,ke(this).$instanceValues$.get(e);var e},set:function(e){ve(this,i,e,t)},configurable:!0,enumerable:!0}):1&n&&64&a&&Object.defineProperty(o,i,{value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=ke(this);return r.$onInstancePromise$.then((function(){var e;return(e=r.$lazyInstance$)[i].apply(e,t)}))}})})),1&n){var i=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;S.jmp((function(){var t=i.get(e);if(r.hasOwnProperty(t))n=r[t],delete r[t];else if(o.hasOwnProperty(t)&&"number"==typeof r[t]&&r[t]==n)return;r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){var t=y(e,2);t[0];return 15&t[1][0]})).map((function(e){var n=y(e,2),r=n[0],o=n[1],a=o[1]||r;return i.set(a,r),512&o[0]&&t.$attrsToReflect$.push([r,a]),a}))}}return e},be=function(){var e=(0,h.Z)(g().mark((function e(t,n,r,o,i){var a,u,l,c,s,f,$;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(32&n.$flags$)){e.next=17;break}if(n.$flags$|=32,!(i=_e(r)).then){e.next=9;break}return a=function(){},e.next=7,i;case 7:i=e.sent,a();case 9:i.isProxied||(r.$watchers$=i.watchers,ge(i,r,2),i.isProxied=!0),r.$tagName$,u=function(){},n.$flags$|=8;try{new i(n)}catch(t){Oe(t)}n.$flags$&=-9,n.$flags$|=128,u(),i.style&&(l=i.style,c=I(r),Ne.has(c)||(r.$tagName$,s=function(){},A(c,l,!!(1&r.$flags$)),s()));case 17:f=n.$ancestorComponent$,$=function(){return ce(n,!0)},f&&f["s-rc"]?f["s-rc"].push($):$();case 20:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i){return e.apply(this,arguments)}}(),we=function(e){if(0==(1&S.$flags$)){var t=ke(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(1&t.$flags$)O(e,t,n.$listeners$);else{t.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){le(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=y(t,2),r=n[0];if(31&y(n[1],1)[0]&&e.hasOwnProperty(r)){var o=e[r];delete e[r],e[r]=o}})),be(e,t,n)}r()}},xe=function(e){if(0==(1&S.$flags$)){var t=ke(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0)}},Ee=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=function(){},l=[],c=n.exclude||[],s=L.customElements,f=k.head,$=f.querySelector("meta[charset]"),h=k.createElement("style"),d=[],m=!0;Object.assign(S,n),S.$resourcesUrl$=new URL(n.resourcesUrl||"./",k.baseURI).href,e.map((function(e){e[1].map((function(n){var a={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};a.$members$=n[2],a.$listeners$=n[3],a.$attrsToReflect$=[],a.$watchers$={};var f=a.$tagName$,$=function(e){u(l,e);var n=b(l);function l(e){var t;return(0,r.Z)(this,l),e=i(t=n.call(this,e)),Re(e,a),1&a.$flags$&&e.attachShadow({mode:"open"}),t}return(0,o.Z)(l,[{key:"connectedCallback",value:function(){var e=this;t&&(clearTimeout(t),t=null),m?d.push(this):S.jmp((function(){return we(e)}))}},{key:"disconnectedCallback",value:function(){var e=this;S.jmp((function(){return xe(e)}))}},{key:"componentOnReady",value:function(){return ke(this).$onReadyPromise$}}]),l}(p(HTMLElement));a.$lazyBundleId$=e[0],c.includes(f)||s.get(f)||(l.push(f),s.define(f,ge($,a,1)))}))})),h.innerHTML=l+T,h.setAttribute("data-styles",""),f.insertBefore(h,$?$.nextSibling:f.firstChild),m=!1,d.length?d.map((function(e){return e.connectedCallback()})):S.jmp((function(){return t=setTimeout(he,30)})),a()},Le=new WeakMap,ke=function(e){return Le.get(e)},Se=function(e,t){return Le.set(t.$lazyInstance$=e,t)},Re=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],O(e,n,t.$listeners$),Le.set(e,n)},je=function(e,t){return t in e},Oe=function(e,t){return(0,console.error)(e,t)},Pe=new Map,_e=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),i=e.$lazyBundleId$,a=Pe.get(i);return a?a[o]:n(9047)("./".concat(i,".entry.js")).then((function(e){return Pe.set(i,e),e[o]}),Oe)},Ne=new Map,Te=[],Me=[],Ce=function(e,t){return function(n){e.push(n),E||(E=!0,t&&4&S.$flags$?Ie(Ze):S.raf(Ze))}},Ae=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){Oe(n)}e.length=0},Ze=function e(){Ae(Te),Ae(Me),(E=Te.length>0)&&S.raf(e)},Ie=function(e){return R().then(e)},He=Ce(Me,!0)},4574:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r,o=n(7294),i=n(1597),a=n(8771),u=n(8678),l=n(262),c=n(5397);!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,c.p)().then((function(){return(0,c.b)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"],[8,"copy","onCopyCleanZeroWidthSpaces"]]]]]],r)}));var s=function(e){var t,n=e.data,r=e.location,c=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=n.allMarkdownRemark.nodes;return 0===s.length?o.createElement(u.Z,{location:r,title:c},o.createElement(l.Z,{title:"All posts"}),o.createElement(a.Z,null),o.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):o.createElement(u.Z,{location:r,title:c},o.createElement(l.Z,{title:"All posts"}),o.createElement(a.Z,null),o.createElement("ol",{style:{listStyle:"none"}},s.map((function(e){var t=e.frontmatter.title||e.fields.slug;return o.createElement("li",{key:e.fields.slug},o.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("header",null,o.createElement("h2",null,o.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},o.createElement("span",{itemProp:"headline"},t))),o.createElement("small",null,e.frontmatter.date)),o.createElement("section",null,o.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},5861:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function u(e){r(a,o,i,u,l,"next",e)}function l(e){r(a,o,i,u,l,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return o}})},5671:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-pages-index-js-b3970a6f845640c2d071.js.map