/**
 * Interjs
 * Version - 2.2.0
 * MIT LICENSED BY - Denis Power
 * Repo - https://github.com/interjs/inter
 * 2021 - 2024
 * GENERATED BY INTER BUILDER
 *
 */

!function(){function e(e){W(`The "${e}" event was not created because\n    its handler is not a function, in the tempate function.`)}function t(e){W(`"${e}" doesn't seem to be a valid dom event.`)}function n(e){W(`"${e}" doesn't seem to be a valid style name.`)}function o(e){M(`"${z(e)}" is an invalid tag name,\n     in the template function.`)}function r(){M('The "events", "attrs" and "styles" options in the template function\n     must be plain Javascript objects, and you didn\'t define\n     one or more of those options as plain Javascript object.')}function i(e){const t=`You shoud not use "${e}" as an attribute name, it seems to be a dom event,\n     use it as property of the "events" object, like:\n\n     {\n      tag: "button", text: "Some text", events: { ${e}: () => { //Some code here }  }\n     }\n     `;q(e.startsWith("on")?t:'You should not use the style attribute(in attrs object) to create styles for the element,\n         use the "styles" object instead, like:\n\n         {\n          tag: "p", text: "Some text", styles: { color: "green" }\n         }\n')}function s(e){q(`"${e}" is a reserved property, do not create a property with this name.`)}function a(e){M(`The value of "setProps" must be a plain Javascript object, and you\n          defined "${z(e)}" as its value`)}function c(){H("Inter failed to define the reactivity,\n        because the Array  of the each option is not configurable.")}function f(e){M(`"${z(e)}" is not a valid value for the "each" option in renderList.\n    The values that are accepted in "each" option, are:\n    Array.\n    Plain js object.\n    Number.\n    Map.\n    Set.`)}function l(){M('The template function is not being returned inside the "do" method in\n           renderList(reactive listing), just return the template function.')}function u(){M('The arguments of "okay", "error" and "response"  methods must be\n     functions.')}function d(e){q(`"${e}" is a reserved reference name, use other name.`)}function h(e){q(`"${e}" was not defined as a conditional property.`)}function p(e){H(`The value of a conditional property must be boolean(true/false),\n    and the value of  "${e}" property is not boolean.`)}function m(e){W(`The conditional rendering parser found a/an "${A(e)}"\n    element which has more than one conditional atribute, it's forbidden.`)}function b(e,t,n){W(`\n                    \n    The conditional rendering parser found\n    an element with the "_ifNot" attribute and the value\n    of this attribute is not a conditional property.\n  \n    {\n        element: ${e.nodeName.toLowerCase()},\n        _ifNot: ${t},\n        data: { ${Object.keys(n)} }\n    }\n    \n    `)}function y(e){W(`a/an "${A(e)}" element has the "_elseIf" attribute,\n    but it does not come after an element with the "_if" or a valid "_elseIf" attribute.`)}function g(e,t,n){W(`\n    The conditional rendering parser found\n    an element which has the "_if" attribute and the value\n    of this attribute is not a conditional property.\n  \n    {\n        element: ${t.nodeName.toLowerCase()},\n        _if: ${e},\n        data: { ${Object.keys(n)} }\n    }\n    \n    `)}function v(e){q(` \n    The "${e}" property was not defined in the manager object.\n    `)}function w(e){return O(e)&&e.element&&e[Symbol.for("template")]}function j(e){return Object.isFrozen(e)||Object.isSealed(e)||!Object.isExtensible(e)}function O(e){return"[object Object]"==Object.prototype.toString.apply(e,void 0)}function A(e){return e.nodeName.toLowerCase()}function x(e){return e instanceof Set}function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function T(e){return e instanceof Map}function S(e){return null!=e}function I(e){return Object.is(e,!0)}function $(e){return Object.is(e,!1)}function k(e){return"function"==typeof e}function P(e){return 0==Object.keys(e).length}function R(e){return e instanceof HTMLElement}function N(e){return e in HTMLElement.prototype}function E(e){return e in document.createElement("p").style}function _(e){return document.createTextNode(e)}function L(e){return"string"==typeof e}function J(e,t,n){return O(e)&&O(t)&&O(n)}function B(e){"string"!=typeof e&&M("The value of the id attribute must be a string.");const t=document.getElementById(e);if(null!=t)return t;H(`There's not an element on the document with id "${e}".`)}function z(e){return void 0===e||"symbol"==typeof e||"bigint"==typeof e||"boolean"==typeof e||"function"==typeof e||"number"==typeof e||"string"==typeof e?typeof e:function(e){const t=S(e)&&Object.prototype.toString.call(e).startsWith("[object");return t?Object.prototype.toString.call(e).replace("[object","").replace("]","").replace(/\s/g,"").toLowerCase():"null"}(e)}function M(e){throw new Error(`Inter syntaxError : ${e}`)}function H(e){throw new Error(`Inter error: ${e}`)}function q(e){console.warn(`Inter warning: ${e}`)}function W(e){console.error(`Inter parser error: ${e}`)}function Y(e){return Array.isArray(e)}function D(e){return 1==e||0==e}function F(e){return e instanceof Array||O(e)||e instanceof Map||e instanceof Set||"number"==typeof e}function U(e){this.source=function(e){const t={values:new Array,type:void 0};if(Y(e))t.values=e,t.type="array";else if(O(e))t.values=Object.entries(e),t.type="object";else if(e instanceof Map)e.forEach(((e,n)=>{t.values.push([n,e])})),t.type="object";else if(e instanceof Set)t.values=Array.from(e),t.type="set";else if("number"==typeof e){for(let n=0;n<e;n++)t.values.push(n);t.type="number"}return t}(e)}function X(e){e="string"==typeof e?e.trim():e;return new Set([0,!1,null,void 0,""]).has(e)}function G(e){return/{\s*.*\s*}/.test(e)}function K(e){const t=new Set;return e.replace(/{\s*(:?[\w-\s]+)\s*}/g,(e=>{const n=e.replace("{","").replace("}","").trim();t.add(n)})),Array.from(t)}function Q(e,t){return new RegExp(`{\\s*${t}\\s*}`).test(e)}U.prototype.each=function(e){let t=-1;for(const n of this.source.values)t++,e(n,t,this.source.type)};const V=new Set(["currentTime","value"]);function Z(e,t,n){const o=e.getElementsByTagName("*");function r(e){function o(e){for(const o in t)if(e.textContent.trim().length>0&&Q(e.textContent,o)){const t={target:e,text:e.textContent};n.add(t);break}}if(1==e.nodeType)for(const t of e.childNodes)t.hasChildNodes()&&1==t.nodeType?r(t):o(t);else 3==e.nodeType&&o(e)}function i(e){const o={target:e,attrs:Object.create(null),refs:t};for(const r of e.attributes)for(const i in t)if(Q(r.value,i)){V.has(r.name)?(n.specialAttrs.add({target:e,attr:{[r.name]:r.value}}),e.removeAttribute(r.name)):o.attrs[r.name]=r.value;break}var r;r=o.attrs,Object.keys(r).length>0&&n.add(o,!0)}const s=function(e){const t=new Set;if(e.hasChildNodes())for(const n of e.childNodes)3==n.nodeType&&n.textContent.trim().length>0&&G(n.textContent)&&t.add(n);return Array.from(t)}(e);if(s.length>0)for(const e of s)r(e);for(const e of o)r(e),i(e);n.updateRefs()}function ee(e){return null==e}function te(e){return e.replace("{...","").replace("}","")}function ne(e,t){return C(e,t)}function oe(e){return/{(:?\.){3}(:?\S+)}/.test(e)}function re(e){return/{(:?[\s\S]+)}/.test(e)}function ie(e,t){const n=new Set(["value","currentTime"]),o=e=>!n.has(e),r=e=>e.startsWith("on")&&N(e),i=new Map;for(const[n,s]of Object.entries(t))!o(n)||r(n)||ee(s)?o(n)||ee(s)?r(n)&&!ee(s)&&ce(e,n,s,t):ae(e,n,s):se(e,n,s),fe(t,n,s,e,i);var s;s=t,Object.defineProperty(s,"setAttrs",{set(e){O(e)||function(e){M(`\n    "${z(e)}" is an invalid value for the "setAttrs" property.\n    The "setAttrs" property only accepts a plain Javascript object as its\n    value.\n    `)}(e);for(const[t,n]of Object.entries(e))C(this,t)?this[t]=n:v(t)}}),function(e,t){Object.defineProperty(e,"observe",{value:e=>0===t.size&&(k(e)||M(`The argument of the observe method must be a function,\n    and you defined ${z(e)} as its argument.`),t.set("observeCallBack",e),!0)})}(t,i)}function se(e,t,n){ee(n)||n===(()=>e.getAttribute(t))?ee(n)&&e.hasAttribute(t)&&e.removeAttribute(t):e.setAttribute(t,n)}function ae(e,t,n){S(n)?e[t]=n:ee(n)&&(e[t]="")}function ce(e,t,n,o){S(n)&&!k(n)?function(e,t){M(`\n    "${z(t)}" is an invalid\n     handler for the "${e}" event, you must\n     define only a function as the handler of a dom event.\n    `)}(t,n):ee(n)?e[t]=void 0:e[t]=e=>n.call(o,e)}function fe(e,t,n,o,r){const i=new Set(["value","currentTime","checked"]),s=()=>!i.has(t),a=()=>t.startsWith("on")&&N(t),c=()=>!s();let f=n;Object.defineProperty(e,t,{set(e){a()?ce(o,t,e,this):s()?se(o,t,e):c()&&ae(o,t,e),f=e;const n=r.get("observeCallBack");r.has("observeCallBack")&&n(t,e)},get:()=>c()?o[t]:a()?(function(e){q(`\n     you are trying to get the value of "${e}",\n     it's an event, and you can not get the value of an event.\n    `)}(t),!1):f})}function le(e){const t=new Array;return e.childNodes.forEach((e=>{(1==e.nodeType||3==e.nodeType&&0==!e.textContent.trim().length)&&t.push(e)})),t}function ue(e){q(`"${e}" is a reserved property, you can not use it as a conditional property.`)}const de={store:new Set,set(e){for(const t of e)S(t)&&this.store.add(t)},getSize(){const e=this.store.size;return this.store.clear(),e}};function he(e){const t=e.getAttribute("_if"),n=e.getAttribute("_elseIf"),o=e.getAttribute("_ifNot"),r=!!e.hasAttribute("_else")||void 0;return de.set([t,n,o,r]),de.getSize()>1}function pe(e){const t=e.hasAttribute("_if"),n=e.hasAttribute("_elseIf"),o=e.hasAttribute("_ifNot"),r=e.hasAttribute("_else");return!(t||n||o||r)}function me(n,o){Object.entries(n).forEach((n=>{const[r,i]=n;N(r)?k(i)?o[r]=i:e(r):t(r)}))}function be(e,t){Object.entries(e).forEach((e=>{let[n,o]=e,r=!1;const s=new Set(["value","currentTime","checked"]);(n.startsWith("on")&&N(n)||"style"==n)&&(i(n),r=!0);const a=e=>{S(e)&&!$(e)&&(s.has(n)?t[n]=e:t.setAttribute(n,e)),t.template.attrs[n]=e};r||(k(o)?(o=o(),a(o)):a(o))}))}function ye(e,t){Object.entries(e).forEach((e=>{const[o,r]=e;if(E(o)){const e=k(r)?r():r;S(e)&&(t.style[o]=e,t.template.styles[o]=e)}else n(o)}))}function ge(e,t,n){if(S(e)&&0==t.length){const t=k(e)?_(e()):_(e);S(t)&&n.appendChild(t)}else S(e)&&t.length>0?(W("The template parser found an element \n    with both the text property and the children property,\n    and in this case Inter ignores the text property."),we(n,t)):t.length>0&&we(n,t)}function ve(e,t,n){let{tag:i,text:s,attrs:a={},events:c={},styles:f={},children:l=[]}=e;i=k(i)?i():i,s=k(s)?s():s;C(e,"renderIf")&&!t&&W("You can not conditionally render the main\n     container in the template function."),L(i)||o(i),J(a,f,c)||r();const u=document.createElement(i);return u.template=Object.assign(e,{target:u,tag:i,text:s}),t&&(u.index=n),be(a,u),me(c,u),ye(f,u),ge(s,l,u),u}function we(e,t){let n=-1;for(const i of t){let{tag:t,text:s,attrs:a={},events:c={},styles:f={},children:l=[],renderIf:u}=i;if(n++,i.index=n,t=k(t)?t():t,s=k(s)?s():s,X(u)&&C(i,"renderIf"))continue;L(t)||o(t),J(a,f,c)||r();const d=document.createElement(t);d.index=n,d.template=Object.assign(i,{target:d,tag:t,text:s}),be(a,d),me(c,d),ye(f,d),ge(s,l,d),e.appendChild(d)}}function je(e,t){O(e)?function(e,t){const n=new Set(["setProps","defineProps","deleteProps"]);function o(t){for(const{name:n,setHandler:o}of t)Object.defineProperty(e,n,{set:o})}function r(n){let o=e[n];e[n]=void 0,Object.defineProperty(e,n,{set(e){o=e,t(),je(e,t)},get:()=>o,configurable:!0})}function i(o){Y(o)||function(e){M(`The value of "deleteProps" must be an Array object, and you\n          defined "${z(e)}" as its value`)}(o);for(const t of o)"string"==typeof t&&C(e,t)&&(n.has(t)||delete e[t]);t()}function c(o){O(o)||function(e){M(`The value of "defineProps" must be a plain Javascript object, and you\n          defined "${z(e)}" as its value`)}(o);for(const[i,s]of Object.entries(o))i in this||n.has(i)||(e[i]=s,r(i)),t()}function f(o){O(o)||a(o);for(const[r,i]of Object.entries(o))n.has(r)||(e[r]=i),je(i,t)}if(Ae(e))return!0;if(j(e))return q("Inter failed to define reactivity\n        in a plain Javascript object, because it is not  configurable."),!1;for(const o of Object.keys(e))n.has(o)&&s(o),r(o),je(e[o],t);o([{name:"defineProps",setHandler:c},{name:"setProps",setHandler:f},{name:"deleteProps",setHandler:i}]),Oe(e)}(e,t):Y(e)?function(e,t){if(Ae(e))return!1;const n=["push","unshift","pop","shift","splice","sort","reverse"];for(const o of n)Object.defineProperty(e,o,{value(e,n,...r){"pop"==o?this.mutationInfo={method:"pop",renderingSystem:t}:"shift"==o?this.mutationInfo={method:"shift",renderingSystem:t}:"push"==o?this.mutationInfo={method:"push",itemsLength:arguments.length,renderingSystem:t}:"unshift"==o?this.mutationInfo={method:"unshift",itemsLength:arguments.length,renderingSystem:t}:"splice"==o&&(this.mutationInfo={method:"splice",start:e,deleteCount:n,itemsLength:S(r)?r.length:0,renderingSystem:t});const i=Array.prototype[o].apply(this,arguments);if(t(),this.mutationInfo=void 0,"push"===o||"unshift"===o)for(const e of arguments)je(e,t);else if("splice"===o&&S(r))for(const e of r)je(e,t);return i}});(function(e,t){for(const n of e)je(n,t)})(e,t),Oe(e),function(e){Object.defineProperty(e,"map",{value(e){const t=new Array;t.reactor=this;let n=-1;for(const o of this){n++;const r=e(o,n,this);t.push(r)}return t}})}(e)}(e,t):T(e)?$e(e,t):x(e)&&ke(e,t)}function Oe(e){if(Ae(e))return!1;const t=Symbol.for("reactive");Object.defineProperty(e,t,{get:()=>!0})}function Ae(e){return C(e,Symbol.for("reactive"))}function xe(e){O(e)?function(e,t,n){const o=Object.keys(e);o.some(((e,o)=>{e==t&&Ce(n,o)}))}(...arguments):x(e)?function(e,t,n){const o=Array.from(e);o.some(((e,o)=>{e==t&&Ce(n,o)}))}(...arguments):function(e,t,n){let o=-1;e.forEach((()=>{o++;arguments[1]==t&&Ce(n,o)}))}(...arguments)}function Ce(e,t){const n=e.children[t];R(n)&&e.removeChild(n)}function Te(e,t){const n=Symbol.for("observe");"function"==typeof e[n]&&e[n](S(t)?t:e)}function Se(e,t){Object.defineProperty(e,"setProps",{set(n){O(n)||a();for(const[o,r]of Object.entries(n))O(e)?this[o]=r:T(e)&&e.set(o,r),je(r,t);O(e)&&t()}})}function Ie(e,t,n){j(e)&&c(),Se(e,t);const o=new Set(["observe"]),r=new Set(["setEach","setProps"]);return Oe(e),new Proxy(e,{set(n,i,s,a){return!o.has(i)&&(Reflect.set(...arguments),function(e){return!r.has(e)}(i)&&(t(),Te(e,a),"number"!=typeof s&&F(s)&&je(s,t)),!0)},get(){return Reflect.get(...arguments)},deleteProperty(o,r,i){if(r in o)return xe(o,r,n),Reflect.deleteProperty(...arguments),t(),Te(e,i),!0;q(`You are trying to delete the "${r}" property in the list\n            reactor, but that property does not exist in the list reactor.`)}})}function $e(e,t,n,o){if(Ae(e))return!1;const r=["set","delete","clear"];for(const i of r)Object.defineProperty(e,i,{value(){"delete"==i&&n&&xe(this,arguments[0],o);const e=Map.prototype[i].apply(this,arguments);if(n&&Te(this),t(),"set"==i){je(arguments[1],t)}return e}});!function(e,t){e.forEach((e=>{je(e,t)}))}(e,t),Oe(e),n&&Se(e,t)}function ke(e,t,n,o){if(Ae(e))return!1;const r=["add","clear","delete"];for(const i of r)Object.defineProperty(e,i,{value(){"delete"==i&&n&&xe(this,arguments[0],o);const e=Set.prototype[i].apply(this,arguments);return t(),n&&Te(this),"add"===i&&je(arguments[0],t),e}});!function(e,t){e.forEach((e=>{je(e,t)}))}(e,t),Oe(e)}function Pe(e){return"function"==typeof e&&(e=e()),e}function Re(e,t){Object.assign(e,t)}function Ne(e,t){return e.length>t.length?e:t}function Ee(e,t,n){function o(t){e.hasAttribute(t)?e.removeAttribute(t):c.has(t)&&("checked"===t?e.checked=!1:e[t]="")}const r=Object.keys(t),s=Object.keys(n),a=Ne(r,s),c=new Set(["value","currentTime","checked"]);for(let f=0;a.length>f;f++){const a=r[f],l=s[f],u=Pe(t[a]),d=Pe(n[l]);a in n?!S(d)||$(d)?o(l):S(d)&&!$(d)&&(l.startsWith("on")&&N(l)||"style"==l?i(l):l===a&&d===u||(c.has(l)?e[l]=d:e.setAttribute(l,d))):o(a),t[a]=d}}function _e(e,t,o){const r=Object.keys(t),i=Object.keys(o),s=Ne(r,i);for(let a=0;s.length>a;a++){const s=r[a],c=i[a],f=Pe(t[s]),l=Pe(o[c]);if(s in o&&S(l))S(l)&&l!==f&&(E(c)?(e.style[c]=l,e.style[c]!==l&&W(`"${l}" is an invalid value for the "${c}" style.`)):n(c));else{const t=e.style[s],n=e.getAttribute("style");S(t)&&0!==t.trim().length&&(e.style[s]=null),n&&0==n.trim().length&&e.removeAttribute("style")}t[s]=l}}function Le(n,o,r){const i=Object.keys(o),s=Object.keys(r),a=Ne(i,s);for(let o=0;a.length>o;o++){const a=i[o],c=s[o];a in r&&S(r[a])||(n[a]=void 0),k(r[c])||!N(c)?S(r[c])&&(N(c)?n[c]=r[c]:t(c)):(n[a]=void 0,e(c))}}function Je(e,t,n){for(let o=0;o<e.children.length;o++){const r=e.children[o];if(r.index>t){e.insertBefore(n,r);break}}}function Be(e,t,n){const o=Array.from(e),r=Array.from(t);for(let f=0;f<o.length;f++){const l=o[f],u=r[f];let d=!1;const{children:h=[],events:p={},attrs:m={},styles:b={},renderIf:y}=l,{children:g=[],events:v={},attrs:w={},styles:j={},target:O,index:A}=u;let x;const T=Pe(l.text),S=Pe(u.text),I=Pe(l.tag),$=Pe(u.tag);function i(){const e=ve(l,!0,A);Object.assign(u,l),u.target=e,x&&x.index>A?Je(n,A,e):n.appendChild(e)}if(n&&(x=n.children[n.children.length-1]),h.length!==g.length){const{reactor:k}=h;if(null!=k){const{mutationInfo:{method:P,start:R,deleteCount:N,itemsLength:E}}=k;function s(){let e=E;for(;e>0;e--){const t=h[h.length-e];O.appendChild(ve(t,!0,t.index)),g.push(t)}}function a(e){function t(e,t){for(let o=t-1;o>-1;o--){const t=O.children[e],r=h[o],i=ve(r,!0,r.index);t?O.insertBefore(i,t):O.appendChild(i),n.unshift(r)}}const n=new Array;if("splice"==e&&0==N&&E>0)t(R,E),g.splice(R,N,...n);else if("splice"==e&&N>0){for(let e=0;e<N;e++){const e=O.children[R];e&&O.removeChild(e)}t(R,E),g.splice(R,N,n)}else"unshift"==e&&(t(0,E),g.unshift(...n))}function c(){let e=R;for(;h.length<O.children.length;e++){const e=O.children[R];e&&O.removeChild(e)}g.splice(R,N)}const _=O.children[O.children.length-1],L=O.children[0];if("pop"==P&&_)O.removeChild(_),g.pop();else if("shift"==P&&L)O.removeChild(L),g.shift();else if("push"==P)s();else if("unshift"==P)a(P);else if("splice"==P)if("number"==typeof R&&"number"==typeof N&&0==E)c();else if(E>0)a(P);else if(null==N){ze(O,{source:{values:h}})}}else if(O&&null!=O.parentNode){const J=ve(l,!0,A);n.replaceChild(J,O),Object.assign(u,l),u.target=J;continue}}if(I===$)X(y)&&C(l,"renderIf")?O&&null!=O.parentNode&&n.removeChild(O):X(y)||(O&&null==O.parentNode?i():O||i()),h.length==g.length&&0!==h.length&&(d=!0,Be(h,g,O)),S!==T&&O&&!d&&(O.textContent=T,u.text=T),u.tag=I,O&&(Ee(O,w,m),_e(O,j,b),Le(O,v,p));else{const B=ve(l,!0,A);Object.assign(u,l),O&&null!=O.parentNode&&(n.replaceChild(B,O),u.target=B)}}}function ze(e,t){if(e.children.length>t.source.values.length){let n=e.children.length-t.source.values.length;for(;n--;){const t=e.children.length-1,n=e.children[t];e.removeChild(n)}}}function Me(e,t,n,o,r){e.open(t,n,!0,o,r)}function He(e,t,n){Object.entries(t).forEach((([t,o])=>{n.has(t)?"onprogress"!==t?e[t]=()=>{o()}:e.onprogress=t=>{const n={abort:()=>e.abort(),progress:100*t.loaded/t.total};o(n)}:function(e){q(`There's not any event named "${e}" in Ajax request.`)}(t)}))}function qe(e,t){const n={};return e.replace(/(:?[\S]+):/g,(e=>{var o,r;e=e.replace(":",""),t.getResponseHeader(e)&&((o=n)[r=e]=void 0,Object.defineProperty(o,r,{get:()=>t.getResponseHeader(r)}))})),Object.freeze(n)}function We(){void 0===new.target&&H("Backend is a constructor, call it with the new keyword.")}We.prototype={get[Symbol.toStringTag](){return"Ajax"},request(e){O(e)||M(`The argument of [Backend instance].request method\n      must be a plain javascript object, and you defined "${z(e)}"\n      as its argument.`);const{type:t,path:n,events:o={},timeout:r,withCredentials:i,body:s=null,headers:a={},security:c}=e,f=new Set(["connect","trace"]);S(t)&&"string"==typeof t||M('You must define the type(method) of request, in Ajax with the "type" option and\n    it must be a string.'),S(n)&&"string"==typeof n||M('You must define the path where the request will be sent, with the "path" option and \n    it must be a string.'),f.has(n.toLowerCase())&&function(e){H(`"${e}" is an unsupported request type in Ajax.`)}(t);const l=new Map;let d=!1;function h(){const e=new XMLHttpRequest,f=t.toUpperCase(),u=new Set(["onprogress","ontimeout","onabort"]),h={get status(){return e.status},get statusText(){return e.statusText},get headers(){return qe(e.getAllResponseHeaders(),e)},get data(){return function(e){if(void 0!==e)try{return JSON.parse(e)}catch(t){return e}}(e.responseText)},get[Symbol.toStringTag](){return"AjaxResponse"},isObj:()=>function(e){try{return O(JSON.parse(e))}catch(e){return!1}}(e.responseText)};O(c)&&Object.keys(c).length>=2&&(c.username&&c.password?(Me(e,f,n,c.username,c.password),d=!0):q('Invalid "security" object, security object must have the username and passoword \n    properties.')),d||(Me(e,f,n),d=!0),O(a)||function(e){M(`the "headers" property must be an object, and\n    you defined it as : ${z(e)}.`)}(a),O(o)||function(e){M(`the "events" property must be an object, and\n    you defined it as : ${z(e)}.`)}(o),P(a)||function(e,t){Object.entries(e).forEach((([e,n])=>{t.setRequestHeader(e,n)}))}(a,e),P(o)||He(e,o,u),e.onreadystatechange=function(){4==this.readyState&&(this.status>=200&&this.status<300?l.has("okay")&&l.get("okay")(h):l.has("error")&&l.get("error")(h))},D(i)&&(e.withCredentials=i),"number"!=typeof r&&(e.timeout=r),e.send(function(e){return S(e)?e instanceof FormData||"string"==typeof e?e:JSON.stringify(e):null}(s))}const p={okay(e){k(e)||u(),l.set("okay",e),h()},error(e){k(e)||u(),l.set("error",e),h()},response(e,t){const n=arguments.length;n<2&&function(e){M(`The response method must have two arguments and you only\n    defined ${e} argument.`)}(n),k(e)||k(t)||u(),l.set("okay",e),l.set("error",t),h()}};return p}},Object.freeze(We.prototype),window.Ref=function(e){if(null!=new.target)M("Do not call the Ref function with the new keyword.");else{if(O(e)){const{in:n,data:o}=e;"string"!=typeof n&&M("The value of the 'in' property on the Ref function must be a string."),O(o)||M("The value of the 'data' property on the Ref function must be a plain Javascript object. ");const r=new Set(["setRefs","observe"]);for(const c in o)r.has(c)?(d(c),delete o[c]):k(o[c])&&(o[c]=o[c].call(o));const i=Object.assign({},o),s={attrs:new Set,texts:new Set,specialAttrs:new Set,observed:new Map,refs:i,hadIteratedOverSpecialAttrs:!1,add(e,t){t?this.attrs.add(e):this.texts.add(e)},updateSpecialAttrs(){for(const e of this.specialAttrs){const{target:t}=e;let[n,o]=Object.entries(e.attr)[0];const i=K(o);for(const e of i)if(!r.has(e)&&e in this.refs){const t=new RegExp(`{\\s*(:?${e})\\s*}`,"g");if(o=o.replace(t,this.refs[e]),!G(o))break}t[n]=o}},updateAttrRef(){for(const e of this.attrs){const{target:t,attrs:n}=e;for(let[e,o]of Object.entries(n)){const n=K(o);for(const e of n)if(!r.has(e)&&e in this.refs){const t=new RegExp(`{\\s*(:?${e})\\s*}`,"g");if(o=o.replace(t,this.refs[e]),!G(o))break}t.getAttribute(e)!==o&&t.setAttribute(e,o)}}},updateTextRef(){if(this.texts.size>0)for(const e of this.texts){let{target:t,text:n}=e;const o=K(n);for(const e of o)if(!r.has(e)&&e in this.refs){const t=new RegExp(`{\\s*(:?${e})\\s*}`,"g");if(n=n.replace(t,this.refs[e]),!G(n))break}t.textContent!==n&&(t.textContent=n)}},updateRefs(){this.texts.size>0&&this.updateTextRef(),this.attrs.size>0&&this.updateAttrRef(),this.specialAttrs.size>0&&this.updateSpecialAttrs()}};function t(e,t,n){if(1==s.observed.size&&!r.has(e)){s.observed.get("callBack")(e,t,n)}}Z(B(n),i,s);const a=new Proxy(i,{set(e,o,r,a){if(o in e&&e[o]==r)return!1;const c=e[o];if(k(r)&&(r=r.call(a)),Reflect.set(...arguments),t(o,r,c),o in a)return s.updateRefs(),!0;Z(B(n),i,s)},get:(...e)=>Reflect.get(...e)});return Object.defineProperties(a,{setRefs:{set(e){if(O(e)){let o=!1;for(const[n,s]of Object.entries(e)){if(r.has(n)){d(n);continue}if(C(this,n)||(o=!0),C(this,n)&&this[n]==s)continue;const e=i[n];k(s)?i[n]=s.call(this):i[n]=s,t(n,s,e)}o&&Z(B(n),i,s)}else M(`"${z(e)}" is not a valid value for the "setRefs" property.\n          The value of the setRefs property must be a plain Javascript object.`)},enumerable:!1},observe:{value:e=>(k(e)||M("The argument of [Reference reactor].observe() must be a function."),0===s.observed.size&&(s.observed.set("callBack",e),!0)),enumerable:!1,writable:!1}}),a}M("The argument of the Ref function must be a plain Javascript object.")}},window.renderIf=function(e){if(O(e)||M("The argument of renderIf must be a  plain Javascript object."),void 0===new.target){const{in:t,data:n}=e,o=new Set(["setConds","observe"]),r=B(t),i=new Array;"string"!=typeof t&&M('The value of the "in" property in the renderIf function\n     must be a string.'),O(n)||M('The value of the "data" property in the renderIf function \n    must be a plain Javascript object.');for(let[e,t]of Object.entries(n))o.has(e)?ue(e):(t=k(t)?t.call(n):t,D(t)||p(e),n[e]=t);!function e(t){let o=-1;const r={target:void 0,if:void 0,else:void 0,ifNot:void 0,elseIfs:new Set,index:void 0,lastRendered:{target:void 0,prop:void 0},conditionalProps:new Set,rootElement:t,set setOptions(e){for(const[t,n]of Object.entries(e))this[t]=n,"if"==t&&S(n)&&this.conditionalProps.add(n)},canCache(){return null!=this.if},addElseIf(e){const{elseIf:t}=e;this.conditionalProps.has(t)?function(e){H(`\n    Two elements with the "_elseIf" attribute can not have the same conditional property.\n    Property: "${e}"\n    `)}(t):(this.elseIfs.add(e),this.conditionalProps.add(t))},deleteData(){this.setOptions={target:void 0,if:void 0,else:void 0,ifNot:void 0,index:void 0},this.elseIfs.clear(),this.conditionalProps.clear()},getOptions(){const e=Object.assign({},this);return e.elseIfs=Array.from(this.elseIfs),e.conditionalProps=Array.from(this.conditionalProps),this.deleteData(),e}},s=()=>{const e=r.elseIfs.size,t=r.getOptions();e?i.unshift(t):i.push(t)},a=le(t),c=a.length;for(const t of a){o++,t.index=o;const i=c-1==o;if(3!=t.nodeType)if(pe(t)||t.parentNode.removeChild(t),t.children.length>0&&e(t),he(t))m(t);else if(pe(t)&&r.canCache())s();else{if(t.hasAttribute("_ifNot")){const e=t.getAttribute("_ifNot");if(C(n,e)){t.removeAttribute("_ifNot"),r.canCache()&&s(),r.setOptions={ifNot:e,target:t,index:o},s();continue}b(t,e,n)}else if(t.hasAttribute("_else"))r.if?(r.else=t,t.removeAttribute("_else"),s()):W('The parser found an element with the "_else" attribute,\n    but there is not an element with the "_if" or a valid "_elseIf" attribute before it.');else if(t.hasAttribute("_elseIf")){const e=t.getAttribute("_elseIf");t.removeAttribute("_elseIf"),r.if?C(n,e)?r.addElseIf({target:t,index:o,elseIf:e}):W(`The conditional rendering parser found an element which has the "_elseIf"\n     conditional property whose the value is: "${e}",\n     but you did not define any conditional property with that name.\n  \n    `):y(t)}else if(t.hasAttribute("_if")){r.canCache()&&s();const e=t.getAttribute("_if");if(t.removeAttribute("_if"),!C(n,e)){g(e,t,n);continue}r.setOptions={if:e,target:t,index:o}}i&&r.canCache()&&s()}else r.canCache()&&s()}}(r);const s=function(e,t){function n(e,t){if(!($(f[t])||e.length<2))for(const n of e){I(f[n])&&n!==t&&(f[n]=!1)}}function o(e,t){function n(){return null!=t.lastRendered.target.parentNode}let o=!1;for(const{target:r,elseIf:s}of e){const e=t.lastRendered;if(e.target&&I(f[e.prop])){o=!0;break}e.target&&$(f[e.prop])&&n()&&(t.rootElement.removeChild(e.target),t.lastRendered={prop:void 0,target:void 0}),I(f[s])&&(i(t.rootElement,r),t.lastRendered={prop:s,target:r},o=!0,e.target&&!S(e.prop)&&n()&&t.rootElement.removeChild(e.target))}return o}function r(t,r){for(const s of e){const{target:e,if:a,elseIfs:c,else:f,ifNot:l,rootElement:u}=s,d=s.conditionalProps,h=new Set(d).has(r);if(S(r)&&h&&n(d,r),l)$(t[l])&&null==e.parentNode?u.textContent.trim().length>0?i(u,e):u.appendChild(e):e.parentNode==u&&I(t[l])&&u.removeChild(e);else if($(t[a]))if(e.parentNode!=u||f){if(f||c.length>0){const t=o(c,s);null!=e.parentNode&&u.removeChild(e),t&&f&&null!=f.parentNode?f.parentNode.removeChild(f):!t&&f&&null==f.parentNode&&(i(u,f),s.lastRendered={target:f,prop:void 0})}}else u.removeChild(e),o(c,s);else if(I(t[a])&&null==e.parentNode){f&&null!=f.parentNode?(u.removeChild(f),i(u,e)):i(u,e);const{target:t}=s.lastRendered;R(t)&&null!=t.parentNode&&!t.isSameNode(e)&&t.parentNode.removeChild(t),s.lastRendered={target:e,prop:a}}}}function i(e,t){const n=le(e),o=n[n.length-1];if(t&&null==t.parentNode)if(o&&o.index>t.index){for(const o of n)if(o.index>t.index){e.insertBefore(t,o);break}}else e.appendChild(t)}function s(e,t){if(1==c.size){c.get("callBack")(e,t)}}const a=new Set(["setConds","observe"]),c=new Map,f=Object.assign({},t);r(f);const l=new Proxy(f,{set:(e,n,o)=>(!(n in e)||e[n]!=o)&&(n in t||a.has(n)?D(o)||a.has(n)?(Reflect.set(e,n,o),a.has(n)||(r(f,n),s(n,o)),!0):(p(n),!1):(h(n),!1)),deleteProperty:()=>!1});return Object.defineProperties(l,{observe:{value:e=>(k(e)||M("The argument of [renderIf reactor].observe()\n    must be a function."),0==c.size&&(c.set("callBack",e),!0)),enumerable:!1,writable:!1},setConds:{set(e){O(e)||M(`The value of [renderIf reactor].setConds must be\n      a plain Javascript object, and you defined ${z(e)}\n      as its value.`);for(let[n,o]of Object.entries(e))a.has(n)?ue(n):(o=k(o)?o.call(t):o,D(o)||p(n),C(this,n)?this[n]!=o&&(f[n]=o,s(n,o)):h(n));r(f)},enumerable:!1}}),l}(i,n);return s}H("renderIf is not a constructor, do not call it with\n        the new keyword.")},window.renderList=function(e){function t(e,t,n){return Y(e)?(function(e){if(Ae(e))return!1;function t(e,t){if(S(t)&&"number"!=typeof t&&M("The second argument of [LIST REACTOR].addItems must be a number."),Y(e)||M("The first argument of [LIST REACTOR ].addItems must be an Array."),!S(t)||t>this.length-1)for(const t of e)this.push(t);else if(0==t||t<0)for(let t=e.length-1;t>-1;t--)this.unshift(e[t]);else for(let n=e.length-1;n>-1;n--)this.splice(t,0,e[n])}const n=[{name:"addItems",handler:t}];for(const{name:t,handler:o}of n)h(e,t,{value:o})}(e),function(e,t){j(e)&&c();const n=new Set(["addItems","setEach"]);return new Proxy(e,{set(o,r,i,s){return n.has(r)?(Reflect.set(...arguments),!0):(Reflect.set(...arguments),Te(e,s),t(),"number"!=typeof i&&F(i)&&je(i,t),!0)},get:(e,t)=>e[t]})}(e,t)):O(e)?Ie(e,t,n):x(e)?(ke(e,t,!0,n),e):T(e)?($e(e,t,!0,n),e):void 0}void 0!==new.target&&M('renderList is not a constructor, do not call\n        it with the "new" keyword.'),O(e)||M("The options(the argument of renderList) must be a plain Javascript object.");let{in:n,each:o,do:r}=e;const i=B(n);(function(e){return"string"==typeof e})(n)||M("The 'in' option in renderList must be a string."),F(o)||f(o),k(r)||M("The value of the 'do' option in renderList must be only a function.");let s,a=!0;function u(e){F(e)||f(e);const t=Symbol.for("observe");if(e[t]=o[t],o=e,Ae(e)||d(),p(),Te(o),"number"!=typeof o){new U(o).each(((e,t,n)=>{"object"==n?je(e[1],p):"array"!=n&&"set"!=n||je(e,p)}))}}function d(){if(Ae(o))return!1;Object.defineProperties(o,{setEach:{set:u},observe:{value(e){const t=Symbol.for("observe");return"function"!=typeof this[t]&&(k(e)?(Object.defineProperty(this,t,{value:e,configurable:!1}),!0):void M("The argument of the observe method must be a function."))}}}),s=t(o,p,i),Y(o)&&function(e,t,n,o,r){function i(e,i,s){const a=o.call(r,e,i,r),c=ve(a.element),f=t.children[s];w(a)||l(),c&&S(s)?t.insertBefore(c,f):t.appendChild(c),je(e,n)}const s=[{name:"unshift",handler:function(){const t=Array.prototype.unshift.apply(e,arguments);if(arguments.length>1){let e=arguments.length-1;for(;e>-1;e--)i(arguments[e],0,0)}else 1==arguments.length&&i(...arguments,0,0);return n(),Te(e),t}},{name:"shift",handler:function(){const o=Array.prototype.shift.apply(e,void 0),r=t.children[0];return r&&(t.removeChild(r),n(),Te(e)),o}},{name:"push",handler:function(){const t=Array.prototype.push.apply(e,arguments);if(1==arguments.length)i(...arguments,e.length-1);else if(arguments.length>1)for(const t of arguments)i(t,e.length-1);return n(),Te(e),t}},{name:"pop",handler:function(){const o=Array.prototype.pop.apply(e,arguments),r=t.children,i=r[r.length-1];return i&&(t.removeChild(i),n(),Te(e)),o}},{name:"splice",handler:function(o,r,...s){const a=Array.prototype.splice.apply(e,arguments);function c(){const e=r;for(let n=0;n<e;n++){const e=t.children[o];e&&t.removeChild(e)}}function f(){for(let e=s.length-1;e>-1;e--)i(s[e],e,o)}return r>0&&s.length>0&&(c(),f()),0==s.length?c():0==r&&s.length>0&&f(),n(),Te(e),a}}];if(j(e))return!1;if(Ae(e))return!1;for(const{name:t,handler:n}of s)Object.defineProperty(e,t,{value:n})}(o,i,p,r,s),Oe(o)}function h(e,t,n){Object.defineProperty(e,t,n)}function p(){const e=new U(o);ze(i,e),e.each(((e,t,n)=>{let o;if(a&&je("object"!==n?e:e[1],p),o="array"===n?r.call(s,e,t,s):"object"===n?r.call(s,e[0],e[1],s):"number"===n?r(e):r.call(s,e,s),w(o)){const e=i.children[t];R(e)?e.template?function(e,t,n){const o={children:!0,continue:!0};(function(e,t,n){const{attrs:o={},events:r={},styles:i={},children:s}=e,{attrs:a={},events:c={},styles:f={},children:l,target:u}=t,d=u.parentNode,h=Pe(e.text),p=Pe(t.text),m=Pe(e.tag),b=Pe(t.tag);if(m!==b){const o=ve(e);d.replaceChild(o,u),n.children=!1,Re(t,e),t.target=o}else if(y=s,g=l,Y(y)&&!Y(g)||!Y(y)&&Y(g)){const o=ve(e);d.replaceChild(o,u),n.children=!1,Re(t,e),t.target=o}else if(function(e,t){return Y(e)&&Y(t)}(s,l)&&s.length!==l.length){const o=ve(e);d.replaceChild(o,u),n.children=!1,Re(t,e),t.target=o}else S(s)||S(l)||h!==p&&(u.textContent=h,Re(t,e));var y,g;Ee(u,a,o),Le(u,c,r),_e(u,f,i)})(e,t,o),o.children&&e.children&&e.children.length>0&&Be(e.children,t.children,n)}(o.element,e.template,e):(q("Avoid manipulating what Inter manipulates."),i.replaceChild(ve(o.element),e)):i.appendChild(ve(o.element))}else l()}))}return"number"!=typeof o&&d(),p(),a=!1,s},window.template=function(e){if(O(e)){return{[Symbol.for("template")]:!0,element:e}}M(`The argument of the template function must be a plain Javascript object,\n    but you defined "${z(e)}" as its argument.\n    \n    `)},window.toAttrs=function(e){if(void 0!==new.target)M('the "toAttrs" function is not a constructor, do not call it with the\n    new keyword.');else{if(O(e)){const{in:t,data:n}=e;return function(e,t){const n=e.getElementsByTagName("*");for(const e of n)if(1==e.attributes.length){const{name:n}=e.attributes[0];if(re(n)&&oe(n)){const o=te(n);e.removeAttribute(n),ne(t,o)?ie(e,t[o]):W(`\n    The attribute manager parser found an attribute manager\n    named "${o}", but you did not define it in the "data" object.\n    `)}}}(B(t),n),n}M(`"${z(e)}" is an invalid argument for\n    "toAttrs" function, the argument must be a plain Javascript object.`)}},window.Backend=We,console.log("The global version 2.2.0 of Inter was loaded successfully.")}();