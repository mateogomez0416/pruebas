(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ma});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa;
if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;
function v(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.oa=b.prototype}
function ta(){this.H=!1;this.m=null;this.i=void 0;this.h=1;this.v=this.s=0;this.X=this.j=null}
function ua(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
ta.prototype.N=function(a){this.i=a};
function va(a,b){a.j={cc:b,nc:!0};a.h=a.s||a.v}
ta.prototype.return=function(a){this.j={return:a};this.h=this.v};
function w(a,b,c){a.h=c;return{value:b}}
ta.prototype.D=function(a){this.h=a};
function wa(a,b,c){a.s=b;void 0!=c&&(a.v=c)}
function xa(a,b){a.h=b;a.s=0}
function Aa(a){a.s=0;var b=a.j.cc;a.j=null;return b}
function Ba(a){a.X=[a.j];a.s=0;a.v=0}
function Ca(a){var b=a.X.splice(0)[0];(b=a.j=a.j||b)?b.nc?a.h=a.s||a.v:void 0!=b.D&&a.v<b.D?(a.h=b.D,a.j=null):a.h=a.v:a.h=0}
function Da(a){this.h=new ta;this.i=a}
function Ea(a,b){ua(a.h);var c=a.h.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.H=!1,e;var f=e.value}catch(g){return a.h.m=null,va(a.h,g),Ga(a)}a.h.m=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.H=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,va(a.h,c)}a.h.H=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.nc)throw b.cc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ua(a.h);a.h.m?b=Fa(a,a.h.m.next,b,a.h.N):(a.h.N(b),b=Ga(a));return b};
this.throw=function(b){ua(a.h);a.h.m?b=Fa(a,a.h.m["throw"],b,a.h.N):(va(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ha(new Da(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.H=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.h=null};
c.prototype.m=function(g){this.j(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Fb),reject:g(this.v)}};
b.prototype.Fb=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Fc(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Eb(g):this.s(g)}};
b.prototype.Eb=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.Gc(h,g):this.s(g)};
b.prototype.v=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Gb();this.X()};
b.prototype.Gb=function(){var g=this;e(function(){if(g.Fa()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.Fa=function(){if(this.H)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.X=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Fc=function(g){var h=this.m();g.sb(h.resolve,h.reject)};
b.prototype.Gc=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(y){try{l(r(y))}catch(A){m(A)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.sb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.sb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).sb(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(y){return function(A){r[y]=A;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).sb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ha(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&la(h.data_,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
t("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
t("Object.setPrototypeOf",function(a){return a||sa});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var z=this||self;function B(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Wa;return Xa.apply(null,arguments)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.oa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ld=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
D(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function fb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function gb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){}
function sb(a){return new rb(tb,a)}
var tb={};sb("");var ub=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},vb=/&/g,wb=/</g,xb=/>/g,yb=/"/g,zb=/'/g,Ab=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.h=b===Ib?a:""}
Hb.prototype.toString=function(){return this.h.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);var Kb,Lb=C("CLOSURE_FLAGS"),Mb=Lb&&Lb[610401301];Kb=null!=Mb?Mb:!1;function Nb(){var a=z.navigator;return a&&(a=a.userAgent)?a:""}
var Ob,Pb=z.navigator;Ob=Pb?Pb.userAgentData||null:null;function Qb(a){return Kb?Ob?Ob.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function E(a){return-1!=Nb().indexOf(a)}
;function Rb(){return Kb?!!Ob&&0<Ob.brands.length:!1}
function Sb(){return Rb()?!1:E("Trident")||E("MSIE")}
function Tb(){return Rb()?Qb("Chromium"):(E("Chrome")||E("CriOS"))&&!(Rb()?0:E("Edge"))||E("Silk")}
;var Ub={};function Vb(a){this.h=Ub===Ub?a:""}
Vb.prototype.toString=function(){return this.h.toString()};function Wb(a){Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(vb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(wb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(xb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(yb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(zb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Ab,"&#0;")));return a}
;var Xb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yb(a){return a?decodeURI(a):a}
function Zb(a){return Yb(a.match(Xb)[3]||null)}
function $b(a){var b=a.match(Xb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function ac(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ac(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function bc(a){var b=[],c;for(c in a)ac(c,a[c],b);return b.join("&")}
var cc=/#|$/;function dc(a,b){var c=a.search(cc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function ec(a){z.setTimeout(function(){throw a;},0)}
;function fc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function kc(a){kc[" "](a);return a}
kc[" "]=function(){};var lc=Rb()?!1:E("Opera"),mc=Sb(),nc=E("Edge"),oc=E("Gecko")&&!(-1!=Nb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),pc=-1!=Nb().toLowerCase().indexOf("webkit")&&!E("Edge");function qc(){var a=z.document;return a?a.documentMode:void 0}
var rc;a:{var sc="",tc=function(){var a=Nb();if(oc)return/rv:([^\);]+)(\)|;)/.exec(a);if(nc)return/Edge\/([\d\.]+)/.exec(a);if(mc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pc)return/WebKit\/(\S+)/.exec(a);if(lc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
tc&&(sc=tc?tc[1]:"");if(mc){var uc=qc();if(null!=uc&&uc>parseFloat(sc)){rc=String(uc);break a}}rc=sc}var vc=rc,wc;if(z.document&&mc){var xc=qc();wc=xc?xc:parseInt(vc,10)||void 0}else wc=void 0;var yc=wc;var zc=fc()||E("iPod"),Ac=E("iPad");!E("Android")||Tb();Tb();var Bc=E("Safari")&&!(Tb()||(Rb()?0:E("Coast"))||(Rb()?0:E("Opera"))||(Rb()?0:E("Edge"))||(Rb()?Qb("Microsoft Edge"):E("Edg/"))||(Rb()?Qb("Opera"):E("OPR"))||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(fc()||E("iPad")||E("iPod"));var Cc={},Dc=null;
function Ec(a,b){Oa(a);void 0===b&&(b=0);if(!Dc){Dc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Cc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Dc[h]&&(Dc[h]=g)}}}b=Cc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Fc="undefined"!==typeof Uint8Array,Gc=!mc&&"function"===typeof btoa;var Hc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Ic(a,b){if(Hc)return a[Hc]|=b;if(void 0!==a.la)return a.la|=b;Object.defineProperties(a,{la:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Jc(a,b){Hc?a[Hc]&&(a[Hc]&=~b):void 0!==a.la&&(a.la&=~b)}
function F(a){var b;Hc?b=a[Hc]:b=a.la;return null==b?0:b}
function Kc(a,b){Hc?a[Hc]=b:void 0!==a.la?a.la=b:Object.defineProperties(a,{la:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Lc(a){Ic(a,1);return a}
function Nc(a,b){Kc(b,(a|0)&-51)}
function Oc(a,b){Kc(b,(a|18)&-41)}
;var Pc={};function Qc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Rc,Sc=Object.freeze(Kc([],23));function Tc(a){if(F(a.M)&2)throw Error();}
function Uc(a){var b=a.length;(b=b?a[b-1]:void 0)&&Qc(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;function Vc(a){return a.displayName||a.name||"unknown type name"}
function Wc(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Vc(b)+" but got "+(a&&Vc(a.constructor)));return a}
function Xc(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Pb===Pc)return a;if(d){var e=d=F(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Kc(a,e);return new b(a)}}
;function Yc(a){var b=a.h+a.Ga;return a.ga||(a.ga=a.M[b]={})}
function Zc(a,b,c){return-1===b?null:b>=a.h?a.ga?a.ga[b]:void 0:c&&a.ga&&(c=a.ga[b],null!=c)?c:a.M[b+a.Ga]}
function G(a,b,c,d){Tc(a);return $c(a,b,c,d)}
function $c(a,b,c,d){a.i&&(a.i=void 0);if(b>=a.h||d)return Yc(a)[b]=c,a;a.M[b+a.Ga]=c;(c=a.ga)&&b in c&&delete c[b];return a}
function ad(a,b,c,d,e){var f=Zc(a,b,d);Array.isArray(f)||(f=Sc);var g=F(f);g&1||Lc(f);if(e)g&2||Ic(f,18),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&Jc(f,16):(f=Lc(Array.prototype.slice.call(f)),$c(a,b,f,d))}return f}
function bd(a,b,c,d){Tc(a);(c=cd(a,c))&&c!==b&&null!=d&&$c(a,c,void 0,!1);$c(a,b,d)}
function cd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Zc(a,e)&&(0!==c&&$c(a,c,void 0,!1),c=e)}return c}
function gd(a,b,c){var d=void 0===d?!1:d;var e=Zc(a,c,d);b=Xc(e,b,F(a.M));b!==e&&null!=b&&$c(a,c,b,d);e=b;if(null==e)return e;if(!(F(a.M)&2)){b=e;if(F(b.M)&2){var f=hd(b,!1);f.i=b;b=f}b!==e&&(e=b,$c(a,c,e,d))}return e}
function H(a,b,c,d){Tc(a);null!=d?Wc(d,b):d=void 0;return $c(a,c,d)}
function id(a,b,c,d,e){Tc(a);null!=e?Wc(e,b):e=void 0;bd(a,c,d,e)}
function jd(a,b,c,d){var e=F(a.M);if(e&2)throw Error();var f=!!(e&2),g=ad(a,b,1,void 0,f);if(g!==Sc&&F(g)&4){if(!f){f=Object.isFrozen(g);var h=F(g);e=h&-19;f&&(g=Array.prototype.slice.call(g),h=0,$c(a,b,g));h!==e&&Kc(g,e)}a=g}else{h=g;g=!!(e&2);var k=!!(F(h)&2);f=h;!g&&k&&(h=Array.prototype.slice.call(h));e|=k?2:0;for(var l=0,m=0;l<h.length;l++){var n=Xc(h[l],c,e);void 0!==n&&(k||(k=!!(2&F(n.M))),h[m++]=n)}m<l&&(h.length=m);k=!k;l=F(h);e=l|5;e=k?e|8:e&-9;l!=e&&(Object.isFrozen(h)&&(h=Array.prototype.slice.call(h)),
Kc(h,e));f!==h&&$c(a,b,h);g&&Object.freeze(h);a=h}c=null!=d?Wc(d,c):new c;a.push(c);F(c.M)&2&&Jc(a,8)}
function kd(a,b){a=Zc(a,b);return null==a?"":a}
function ld(a,b){var c=cd(a,md)===b;return Zc(a,c?b:-1)}
;var nd;function od(a,b){return pd(b)}
function pd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(F(a)&128))return a=Array.prototype.slice.call(a),Uc(a),a}else if(Fc&&null!=a&&a instanceof Uint8Array){if(Gc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Ec(a);return a}}return a}
;function qd(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&F(a)&1?void 0:f&&F(a)&2?a:rd(a,b,c,void 0!==d,e,f);else if(Qc(a)){var g={},h;for(h in a)g[h]=qd(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function rd(a,b,c,d,e,f){var g=F(a);d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=qd(a[h],b,c,d,e,f);c(g,a);return a}
function sd(a){return a.Pb===Pc?a.toJSON():pd(a)}
function td(a,b){a&128&&Uc(b)}
;function ud(a,b,c){c=void 0===c?Oc:c;if(null!=a){if(Fc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=F(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Kc(a,d|18),a;a=rd(a,ud,d&4?Oc:c,!0,!1,!0);b=F(a);b&4&&b&2&&Object.freeze(a);return a}a.Pb===Pc&&(F(a.M)&2||(a=hd(a,!0),Ic(a.M,18)));return a}}
function hd(a,b){var c=a.M,d=[];Ic(d,16);var e=a.constructor.h;e&&d.push(e);e=a.ga;if(e){d.length=c.length;var f={};d[d.length-1]=f}0!==(F(c)&128)&&Uc(d);b=b||F(a.M)&2?Oc:Nc;f=a.constructor;F(d);nd=d;d=new f(d);nd=void 0;a.mc&&(d.mc=a.mc.slice());f=!!(F(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)G(d,h-a.Ga,ud(c[h],f,b),!1);if(e)for(var k in e)a=e[k],c=+k,Number.isNaN(c),G(d,c,ud(a,f,b),!0);return d}
;function J(a,b,c,d){null==a&&(a=nd);nd=void 0;var e=this.constructor.h;if(null==a){a=e?[e]:[];var f=48;var g=!0;d&&(f|=128);Kc(a,f)}else{if(!Array.isArray(a))throw Error();if(e&&e!==a[0])throw Error();f=Ic(a,0)|32;g=0!==(16&f);if(d){if(f|=128,0<a.length){var h=a[a.length-1];if(Qc(h)&&"g"in h){delete h.g;var k=!0,l;for(l in h){k=!1;break}k&&a.pop()}}}else if(128&f)throw Error();Kc(a,f)}this.Ga=e?0:-1;this.M=a;a:{f=this.M.length;e=f-1;if(f&&(f=this.M[e],Qc(f))){this.ga=f;this.h=e-this.Ga;break a}void 0!==
b&&-1<b?(this.h=Math.max(b,e+1-this.Ga),this.ga=void 0):this.h=Number.MAX_VALUE}if(!d&&this.ga&&"g"in this.ga)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=g&&!0;d=this.h;var m;for(g=0;g<c.length;g++)e=c[g],e<d?(e+=this.Ga,(f=a[e])?vd(f,b):a[e]=Sc):(m||(m=Yc(this)),(f=m[e])?vd(f,b):m[e]=Sc)}F(this.M)}
J.prototype.toJSON=function(){var a=this.M,b;Rc?b=a:b=rd(a,sd,td,void 0,!1,!1);return b};
function wd(a){Rc=!0;try{return JSON.stringify(a.toJSON(),od)}finally{Rc=!1}}
J.prototype.clone=function(){return hd(this,!1)};
function vd(a,b){if(Array.isArray(a)){var c=F(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Kc(a,c|d)}}
J.prototype.Pb=Pc;J.prototype.toString=function(){return this.M.toString()};var xd=window;sb("csi.gstatic.com");sb("googleads.g.doubleclick.net");sb("partner.googleadservices.com");sb("pubads.g.doubleclick.net");sb("securepubads.g.doubleclick.net");sb("tpc.googlesyndication.com");function yd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
q=yd.prototype;q.clone=function(){return new yd(this.x,this.y)};
q.equals=function(a){return a instanceof yd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
q.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
q.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
q.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function zd(a,b){this.width=a;this.height=b}
q=zd.prototype;q.clone=function(){return new zd(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ad(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Bd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Cd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Dd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ed[c])c=Ed[c];else{c=String(c);if(!Ed[c]){var f=/function\s+([^\(]+)/m.exec(c);Ed[c]=f?f[1]:"[Anonymous]"}c=Ed[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Dd(a,b){b||(b={});b[Fd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Fd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Dd(a,b));return c}
function Fd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ed={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Gd;try{new URL("s://g"),Gd=!0}catch(a){Gd=!1}var Hd=Gd;function Id(a,b){a.removeAttribute("srcdoc");for(var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Hb)b instanceof Hb&&b.constructor===Hb?b=b.h:(Na(b),b="type_error:SafeUrl");else{b:if(Hd){try{var e=new URL(b)}catch(f){c="https:";break b}c=
e.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function Jd(a){this.cd=a}
function Kd(a){return new Jd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ld=[Kd("data"),Kd("http"),Kd("https"),Kd("mailto"),Kd("ftp"),new Jd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Md(a,b){b=void 0===b?Ld:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Jd&&d.cd(a))return new Hb(a,Ib)}}
function Nd(a){var b=void 0===b?Ld:b;return Md(a,b)||Jb}
;function Od(a){var b=Pd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Qd(){var a=[];Od(function(b){a.push(b)});
return a}
var Pd={sd:"allow-forms",td:"allow-modals",ud:"allow-orientation-lock",vd:"allow-pointer-lock",wd:"allow-popups",xd:"allow-popups-to-escape-sandbox",yd:"allow-presentation",zd:"allow-same-origin",Ad:"allow-scripts",Bd:"allow-top-navigation",Cd:"allow-top-navigation-by-user-activation"},Rd=bb(function(){return Qd()});
function Sd(){var a=Td(),b={};db(Rd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Td(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Ud=(new Date).getTime();function Vd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Wd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Wd);function Xd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var y=e[1],A=e[2],I=e[3],O=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var T=I^y&(A^I);var Q=1518500249}else T=y^A^I,Q=1859775393;else 60>p?(T=y&A|I&(y|A),Q=2400959708):(T=y^A^I,Q=3395469782);T=((n<<5|n>>>27)&4294967295)+T+O+Q+r[p]&4294967295;O=I;I=A;A=(y<<30|y>>>2)&4294967295;y=n;n=T}e[0]=e[0]+n&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+I&4294967295;e[4]=e[4]+O&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],y=0,A=n.length;y<A;++y)p.push(n.charCodeAt(y));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var y=24;0<=y;y-=8)n[r++]=e[p]>>y&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Mc:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function Yd(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,Zd(Vd(d),a,c||null)].join(" "):null}
function Zd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),$d(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=$d(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function $d(a){var b=Xd();b.update(a);return b.Mc().toLowerCase()}
;var ae={};function be(a){this.h=a||{cookie:""}}
q=be.prototype;q.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Mb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Td;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Mb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ub(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Mb:0,path:b,domain:c});return d};
q.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ub(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ce=new be("undefined"==typeof document?null:document);function de(a){return!!ae.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ee(a,b,c,d){(a=z[a])||(a=(new be(document)).get(b));return a?Yd(a,c,d):null}
function fe(a){var b=void 0===b?!1:b;var c=Vd(String(z.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;de(e)&&(f=f||z.__1PSAPISID);if(f)e=!0;else{var g=new be(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");de(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,e||(e=new be(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Yd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&de(b)&&((b=ee("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ee("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var ge="undefined"!==typeof TextEncoder?new TextEncoder:null,he=ge?function(a){return ge.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ie(){this.j=this.j;this.v=this.v}
ie.prototype.j=!1;ie.prototype.dispose=function(){this.j||(this.j=!0,this.Ra())};
ie.prototype.Ra=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function je(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
je.prototype.stopPropagation=function(){this.j=!0};
je.prototype.preventDefault=function(){this.defaultPrevented=!0};var ke=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
z.addEventListener("test",c,b);z.removeEventListener("test",c,b)}catch(d){}return a}();function le(a,b){je.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(le,je);var me={2:"touch",3:"pen",4:"mouse"};
le.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(oc){a:{try{kc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:me[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&le.oa.preventDefault.call(this)};
le.prototype.stopPropagation=function(){le.oa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
le.prototype.preventDefault=function(){le.oa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pe="closure_listenable_"+(1E6*Math.random()|0);var qe=0;function re(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.wb=e;this.key=++qe;this.kb=this.rb=!1}
function se(a){a.kb=!0;a.listener=null;a.proxy=null;a.src=null;a.wb=null}
;function te(a){this.src=a;this.listeners={};this.h=0}
te.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ue(a,b,d,e);-1<g?(b=a[g],c||(b.rb=!1)):(b=new re(b,this.src,f,!!d,e),b.rb=c,a.push(b));return b};
te.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ue(e,b,c,d);return-1<b?(se(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ve(a,b){var c=b.type;c in a.listeners&&fb(a.listeners[c],b)&&(se(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ue(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.kb&&f.listener==b&&f.capture==!!c&&f.wb==d)return e}return-1}
;var we="closure_lm_"+(1E6*Math.random()|0),xe={},ye=0;function ze(a,b,c,d,e){if(d&&d.once)Ae(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else c=Be(c),a&&a[pe]?a.Ia(b,c,Pa(d)?!!d.capture:!!d,e):Ce(a,b,c,!1,d,e)}
function Ce(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=De(a);h||(a[we]=h=new te(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ee();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ke||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Fe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ye++}}
function Ee(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ge;return a}
function Ae(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ae(a,b[f],c,d,e);else c=Be(c),a&&a[pe]?a.h.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):Ce(a,b,c,!0,d,e)}
function He(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)He(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=Be(c),a&&a[pe])?a.h.remove(String(b),c,d,e):a&&(a=De(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ue(b,c,d,e)),(c=-1<a?b[a]:null)&&Ie(c))}
function Ie(a){if("number"!==typeof a&&a&&!a.kb){var b=a.src;if(b&&b[pe])ve(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Fe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ye--;(c=De(b))?(ve(c,a),0==c.h&&(c.src=null,b[we]=null)):se(a)}}}
function Fe(a){return a in xe?xe[a]:xe[a]="on"+a}
function Ge(a,b){if(a.kb)a=!0;else{b=new le(b,this);var c=a.listener,d=a.wb||a.src;a.rb&&Ie(a);a=c.call(d,b)}return a}
function De(a){a=a[we];return a instanceof te?a:null}
var Je="__closure_events_fn_"+(1E9*Math.random()>>>0);function Be(a){if("function"===typeof a)return a;a[Je]||(a[Je]=function(b){return a.handleEvent(b)});
return a[Je]}
;function Ke(){ie.call(this);this.h=new te(this);this.Fa=this;this.N=null}
D(Ke,ie);Ke.prototype[pe]=!0;Ke.prototype.addEventListener=function(a,b,c,d){ze(this,a,b,c,d)};
Ke.prototype.removeEventListener=function(a,b,c,d){He(this,a,b,c,d)};
function Le(a,b){var c=a.N;if(c){var d=[];for(var e=1;c;c=c.N)d.push(c),++e}a=a.Fa;c=b.type||b;"string"===typeof b?b=new je(b,a):b instanceof je?b.target=b.target||a:(e=b,b=new je(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Me(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Me(g,c,!0,b)&&e,b.j||(e=Me(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Me(g,c,!1,b)&&e}
Ke.prototype.Ra=function(){Ke.oa.Ra.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,se(d[e]);delete a.listeners[c];a.h--}}this.N=null};
Ke.prototype.Ia=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function Me(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.kb&&g.capture==c){var h=g.listener,k=g.wb||g.src;g.rb&&ve(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ne(a){Ke.call(this);var b=this;this.X=this.m=0;this.ha=null!=a?a:{ja:function(e,f){return setTimeout(e,f)},
Pa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.s=function(){return x(function(e){return w(e,Oe(b),0)})};
window.addEventListener("offline",this.s);window.addEventListener("online",this.s);this.X||Pe(this)}
v(Ne,Ke);function Qe(){var a=Re;Ne.h||(Ne.h=new Ne(a));return Ne.h}
Ne.prototype.dispose=function(){window.removeEventListener("offline",this.s);window.removeEventListener("online",this.s);this.ha.Pa(this.X);delete Ne.h};
Ne.prototype.ca=function(){return this.i};
function Pe(a){a.X=a.ha.ja(function(){var b;return x(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.D(3):w(c,Oe(a),3):w(c,Oe(a),3);Pe(a);c.h=0})},3E4)}
function Oe(a,b){return a.H?a.H:a.H=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.m=a.ha.ja(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.H=void 0;a.m&&(a.ha.Pa(a.m),a.m=0);g!==a.i&&(a.i=g,a.i?Le(a,"networkstatus-online"):Le(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Aa(h),g=!1,h.D(3)}})})}
;function Se(){this.data_=[];this.h=-1}
Se.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
Se.prototype.get=function(a){return!!this.data_[a]};
function Te(a){-1===a.h&&(a.h=eb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ue(a){J.call(this,a)}
v(Ue,J);function Ve(a){J.call(this,a,-1,We)}
v(Ve,J);function Xe(a,b){return G(a,2,b)}
function Ye(a,b){return G(a,3,b)}
function Ze(a,b){return G(a,4,b)}
function $e(a,b){return G(a,5,b)}
function af(a,b){return G(a,9,b)}
function bf(a,b){Tc(a);var c=null==b?Sc:b;if(null!=b){for(var d=!!b.length,e=0;e<b.length;e++){var f=b[e];Wc(f,Ue);d=d&&!(F(f.M)&2)}b=c;d=(d?8:0)|5;c=F(b);(c&d)!==d&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Kc(b,c|d));c=b}return $c(a,10,c)}
function cf(a,b){return G(a,11,b)}
function df(a,b){return G(a,1,b)}
function ef(a,b){return G(a,7,b)}
var We=[10,6];var ff="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function gf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function hf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function jf(){var a=window;if(!hf(a))return null;var b=gf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(ff).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function kf(a){var b;return cf(bf($e(Xe(df(Ze(ef(af(Ye(new Ve,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Ue;d=G(d,1,c.brand);return G(d,2,c.version)}))||[]),a.wow64||!1)}
function lf(){var a,b;return null!=(b=null==(a=jf())?void 0:a.then(function(c){return kf(c)}))?b:null}
;function mf(a,b){this.j=a;this.m=b;this.i=0;this.h=null}
mf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function nf(a,b){a.m(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var of;function pf(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Ad();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Sb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Yb;c.Yb=null;e()}};
return function(e){d.next={Yb:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function qf(){this.i=this.h=null}
qf.prototype.add=function(a,b){var c=rf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
qf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var rf=new mf(function(){return new sf},function(a){return a.reset()});
function sf(){this.next=this.scope=this.h=null}
sf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
sf.prototype.reset=function(){this.next=this.scope=this.h=null};var tf,uf=!1,vf=new qf;function wf(a,b){tf||xf();uf||(tf(),uf=!0);vf.add(a,b)}
function xf(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);tf=function(){a.then(yf)}}else tf=function(){var b=yf;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&(Rb()||!E("Edge"))&&z.Window.prototype.setImmediate==z.setImmediate?(of||(of=pf()),of(b)):z.setImmediate(b)}}
function yf(){for(var a;a=vf.remove();){try{a.h.call(a.scope)}catch(b){ec(b)}nf(rf,a)}uf=!1}
;function zf(a,b){this.h=a[z.Symbol.iterator]();this.i=b}
zf.prototype[Symbol.iterator]=function(){return this};
zf.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Af(a,b){return new zf(a,b)}
;function Bf(){this.blockSize=-1}
;function Cf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.m=this.i=0;this.reset()}
D(Cf,Bf);Cf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.i=0};
function Df(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Cf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Df(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Df(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Df(this,e);f=0;break}}this.i=f;this.m+=b}};
Cf.prototype.digest=function(){var a=[],b=8*this.m;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;Df(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ef(){}
Ef.prototype.next=function(){return Ff};
var Ff={done:!0,value:void 0};function Gf(a){return{value:a,done:!1}}
Ef.prototype.ia=function(){return this};function Hf(a){if(a instanceof If||a instanceof Jf||a instanceof Kf)return a;if("function"==typeof a.next)return new If(function(){return a});
if("function"==typeof a[Symbol.iterator])return new If(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new If(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function If(a){this.i=a}
If.prototype.ia=function(){return new Jf(this.i())};
If.prototype[Symbol.iterator]=function(){return new Kf(this.i())};
If.prototype.h=function(){return new Kf(this.i())};
function Jf(a){this.i=a}
v(Jf,Ef);Jf.prototype.next=function(){return this.i.next()};
Jf.prototype[Symbol.iterator]=function(){return new Kf(this.i)};
Jf.prototype.h=function(){return new Kf(this.i)};
function Kf(a){If.call(this,function(){return a});
this.j=a}
v(Kf,If);Kf.prototype.next=function(){return this.j.next()};function Lf(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Lf)for(c=Mf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Mf(a){Nf(a);return a.h.concat()}
q=Lf.prototype;q.has=function(a){return Of(this.i,a)};
q.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Pf;Nf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Pf(a,b){return a===b}
q.clear=function(){this.i={};this.j=this.size=this.h.length=0};
q.remove=function(a){return this.delete(a)};
q.delete=function(a){return Of(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&Nf(this),!0):!1};
function Nf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Of(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Of(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
q.get=function(a,b){return Of(this.i,a)?this.i[a]:b};
q.set=function(a,b){Of(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
q.forEach=function(a,b){for(var c=Mf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Lf(this)};
q.keys=function(){return Hf(this.ia(!0)).h()};
q.values=function(){return Hf(this.ia(!1)).h()};
q.entries=function(){var a=this;return Af(this.keys(),function(b){return[b,a.get(b)]})};
q.ia=function(a){Nf(this);var b=0,c=this.j,d=this,e=new Ef;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ff;var f=d.h[b++];return Gf(a?f:d.i[f])};
return e};
function Of(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Qf=z.JSON.stringify;function Rf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Sf(a){this.h=0;this.H=void 0;this.m=this.i=this.j=null;this.v=this.s=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Tf(b,2,c)},function(c){Tf(b,3,c)})}catch(c){Tf(this,3,c)}}
function Uf(){this.next=this.context=this.i=this.j=this.h=null;this.m=!1}
Uf.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.m=!1};
var Vf=new mf(function(){return new Uf},function(a){a.reset()});
function Wf(a,b,c){var d=Vf.get();d.j=a;d.i=b;d.context=c;return d}
Sf.prototype.then=function(a,b,c){return Xf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Sf.prototype.$goog_Thenable=!0;Sf.prototype.cancel=function(a){if(0==this.h){var b=new Yf(a);wf(function(){Zf(this,b)},this)}};
function Zf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.m||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Zf(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):$f(c),ag(c,e,3,b)))}a.j=null}else Tf(a,3,b)}
function bg(a,b){a.i||2!=a.h&&3!=a.h||cg(a);a.m?a.m.next=b:a.i=b;a.m=b}
function Xf(a,b,c,d){var e=Wf(null,null,null);e.h=new Sf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Yf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;bg(a,e);return e.h}
Sf.prototype.X=function(a){this.h=0;Tf(this,2,a)};
Sf.prototype.Fa=function(a){this.h=0;Tf(this,3,a)};
function Tf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.X,f=a.Fa;if(d instanceof Sf){bg(d,Wf(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){dg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.h=b,a.j=null,cg(a),3!=b||c instanceof Yf||eg(a,c))}}
function dg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function cg(a){a.s||(a.s=!0,wf(a.N,a))}
function $f(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.m=null);return b}
Sf.prototype.N=function(){for(var a;a=$f(this);)ag(this,a,this.h,this.H);this.s=!1};
function ag(a,b,c,d){if(3==c&&b.i&&!b.m)for(;a&&a.v;a=a.j)a.v=!1;if(b.h)b.h.j=null,fg(b,c,d);else try{b.m?b.j.call(b.context):fg(b,c,d)}catch(e){gg.call(null,e)}nf(Vf,b)}
function fg(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function eg(a,b){a.v=!0;wf(function(){a.v&&gg.call(null,b)})}
var gg=ec;function Yf(a){Za.call(this,a)}
D(Yf,Za);Yf.prototype.name="cancel";function K(a){ie.call(this);this.H=1;this.m=[];this.s=0;this.h=[];this.i={};this.N=!!a}
D(K,ie);q=K.prototype;q.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.H;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.H=e+3;d.push(e);return e};
function hg(a,b,c){var d=ig;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.mb(a)}}
q.mb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.s?(this.m.push(a),this.h[a+1]=function(){}):(c&&fb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.Za=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.N)for(e=0;e<c.length;e++){var g=c[e];jg(this.h[g+1],this.h[g+2],d)}else{this.s++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.s--,0<this.m.length&&0==this.s)for(;c=this.m.pop();)this.mb(c)}}return 0!=e}return!1};
function jg(a,b,c){wf(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.mb,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.Ra=function(){K.oa.Ra.call(this);this.clear();this.m.length=0};function kg(a){this.h=a}
kg.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Qf(b))};
kg.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
kg.prototype.remove=function(a){this.h.remove(a)};function lg(a){this.h=a}
D(lg,kg);function mg(a){this.data=a}
function ng(a){return void 0===a||a instanceof mg?a:new mg(a)}
lg.prototype.set=function(a,b){lg.oa.set.call(this,a,ng(b))};
lg.prototype.i=function(a){a=lg.oa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
lg.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function og(a){this.h=a}
D(og,lg);og.prototype.set=function(a,b,c){if(b=ng(b)){if(c){if(c<Date.now()){og.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}og.oa.set.call(this,a,b)};
og.prototype.i=function(a){var b=og.oa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())og.prototype.remove.call(this,a);else return b}};function pg(){}
;function qg(){}
D(qg,pg);qg.prototype[Symbol.iterator]=function(){return Hf(this.ia(!0)).h()};
qg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function rg(a){this.h=a}
D(rg,qg);q=rg.prototype;q.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeItem(a)};
q.ia=function(a){var b=0,c=this.h,d=new Ef;d.next=function(){if(b>=c.length)return Ff;var e=c.key(b++);if(a)return Gf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Gf(e)};
return d};
q.clear=function(){this.h.clear()};
q.key=function(a){return this.h.key(a)};function sg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(sg,rg);function tg(a,b){this.i=a;this.h=null;var c;if(c=mc)c=!(9<=Number(yc));if(c){ug||(ug=new Lf);this.h=ug.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),ug.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
D(tg,qg);var vg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ug=null;function wg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return vg[b]})}
q=tg.prototype;q.set=function(a,b){this.h.setAttribute(wg(a),b);xg(this)};
q.get=function(a){a=this.h.getAttribute(wg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeAttribute(wg(a));xg(this)};
q.ia=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ef;d.next=function(){if(b>=c.length)return Ff;var e=c[b++];if(a)return Gf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Gf(e)};
return d};
q.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);xg(this)};
function xg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function yg(a,b){this.i=a;this.h=b+"::"}
D(yg,qg);yg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
yg.prototype.get=function(a){return this.i.get(this.h+a)};
yg.prototype.remove=function(a){this.i.remove(this.h+a)};
yg.prototype.ia=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ef;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Gf(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var L={},zg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;L.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
L.Tb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Ag={Oa:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
dc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Bg={Oa:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
dc:function(a){return[].concat.apply([],a)}};
L.md=function(){zg?(L.Na=Uint8Array,L.pa=Uint16Array,L.Ec=Int32Array,L.assign(L,Ag)):(L.Na=Array,L.pa=Array,L.Ec=Array,L.assign(L,Bg))};
L.md();var Cg=!0;try{new Uint8Array(1)}catch(a){Cg=!1}
function Dg(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new L.Na(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Eg={};Eg=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Fg={},Gg,Hg=[],Ig=0;256>Ig;Ig++){Gg=Ig;for(var Jg=0;8>Jg;Jg++)Gg=Gg&1?3988292384^Gg>>>1:Gg>>>1;Hg[Ig]=Gg}Fg=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Hg[(a^b[d])&255];return a^-1};var Kg={};Kg={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function eh(a){for(var b=a.length;0<=--b;)a[b]=0}
var fh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],gh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],hh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ih=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],jh=Array(576);eh(jh);var kh=Array(60);eh(kh);var lh=Array(512);eh(lh);var mh=Array(256);eh(mh);var nh=Array(29);eh(nh);var oh=Array(30);eh(oh);function ph(a,b,c,d,e){this.zc=a;this.Rc=b;this.Qc=c;this.Nc=d;this.gd=e;this.hc=a&&a.length}
var qh,rh,sh;function th(a,b){this.ac=a;this.Wa=0;this.Ba=b}
function uh(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function N(a,b,c){a.P>16-c?(a.V|=b<<a.P&65535,uh(a,a.V),a.V=b>>16-a.P,a.P+=c-16):(a.V|=b<<a.P&65535,a.P+=c)}
function vh(a,b,c){N(a,c[2*b],c[2*b+1])}
function wh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function xh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=wh(d[e]++,e))}
function yh(a){var b;for(b=0;286>b;b++)a.Y[2*b]=0;for(b=0;30>b;b++)a.Ha[2*b]=0;for(b=0;19>b;b++)a.S[2*b]=0;a.Y[512]=1;a.va=a.ab=0;a.da=a.matches=0}
function zh(a){8<a.P?uh(a,a.V):0<a.P&&(a.K[a.pending++]=a.V);a.V=0;a.P=0}
function Ah(a,b,c){zh(a);uh(a,c);uh(a,~c);L.Oa(a.K,a.window,b,c,a.pending);a.pending+=c}
function Bh(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Ch(a,b,c){for(var d=a.L[c],e=c<<1;e<=a.ta;){e<a.ta&&Bh(b,a.L[e+1],a.L[e],a.depth)&&e++;if(Bh(b,d,a.L[e],a.depth))break;a.L[c]=a.L[e];c=e;e<<=1}a.L[c]=d}
function Dh(a,b,c){var d=0;if(0!==a.da){do{var e=a.K[a.eb+2*d]<<8|a.K[a.eb+2*d+1];var f=a.K[a.Lb+d];d++;if(0===e)vh(a,f,b);else{var g=mh[f];vh(a,g+256+1,b);var h=fh[g];0!==h&&(f-=nh[g],N(a,f,h));e--;g=256>e?lh[e]:lh[256+(e>>>7)];vh(a,g,c);h=gh[g];0!==h&&(e-=oh[g],N(a,e,h))}}while(d<a.da)}vh(a,256,b)}
function Eh(a,b){var c=b.ac,d=b.Ba.zc,e=b.Ba.hc,f=b.Ba.Nc,g,h=-1;a.ta=0;a.Ta=573;for(g=0;g<f;g++)0!==c[2*g]?(a.L[++a.ta]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.ta;){var k=a.L[++a.ta]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.va--;e&&(a.ab-=d[2*k+1])}b.Wa=h;for(g=a.ta>>1;1<=g;g--)Ch(a,c,g);k=f;do g=a.L[1],a.L[1]=a.L[a.ta--],Ch(a,c,1),d=a.L[1],a.L[--a.Ta]=g,a.L[--a.Ta]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.L[1]=k++,Ch(a,c,1);while(2<=a.ta);a.L[--a.Ta]=
a.L[1];g=b.ac;k=b.Wa;d=b.Ba.zc;e=b.Ba.hc;f=b.Ba.Rc;var l=b.Ba.Qc,m=b.Ba.gd,n,r=0;for(n=0;15>=n;n++)a.qa[n]=0;g[2*a.L[a.Ta]+1]=0;for(b=a.Ta+1;573>b;b++){var p=a.L[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,r++);g[2*p+1]=n;if(!(p>k)){a.qa[n]++;var y=0;p>=l&&(y=f[p-l]);var A=g[2*p];a.va+=A*(n+y);e&&(a.ab+=A*(d[2*p+1]+y))}}if(0!==r){do{for(n=m-1;0===a.qa[n];)n--;a.qa[n]--;a.qa[n+1]+=2;a.qa[m]--;r-=2}while(0<r);for(n=m;0!==n;n--)for(p=a.qa[n];0!==p;)d=a.L[--b],d>k||(g[2*d+1]!==n&&(a.va+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}xh(c,h,a.qa)}
function Fh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.S[2*l]+=g:0!==l?(l!==e&&a.S[2*l]++,a.S[32]++):10>=g?a.S[34]++:a.S[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Gh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do vh(a,l,a.S);while(0!==--g)}else 0!==l?(l!==e&&(vh(a,l,a.S),g--),vh(a,16,a.S),N(a,g-3,2)):10>=g?(vh(a,17,a.S),N(a,g-3,3)):(vh(a,18,a.S),N(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Hh(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.Y[2*c])return 0;if(0!==a.Y[18]||0!==a.Y[20]||0!==a.Y[26])return 1;for(c=32;256>c;c++)if(0!==a.Y[2*c])return 1;return 0}
var Ih=!1;function Jh(a,b,c){a.K[a.eb+2*a.da]=b>>>8&255;a.K[a.eb+2*a.da+1]=b&255;a.K[a.Lb+a.da]=c&255;a.da++;0===b?a.Y[2*c]++:(a.matches++,b--,a.Y[2*(mh[c]+256+1)]++,a.Ha[2*(256>b?lh[b]:lh[256+(b>>>7)])]++);return a.da===a.hb-1}
;function Kh(a,b){a.msg=Kg[b];return b}
function Lh(a){for(var b=a.length;0<=--b;)a[b]=0}
function Mh(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(L.Oa(a.ib,b.K,b.jb,c,a.Xa),a.Xa+=c,b.jb+=c,a.Ub+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.jb=0))}
function P(a,b){var c=0<=a.aa?a.aa:-1,d=a.l-a.aa,e=0;if(0<a.level){2===a.B.Ib&&(a.B.Ib=Hh(a));Eh(a,a.yb);Eh(a,a.ub);Fh(a,a.Y,a.yb.Wa);Fh(a,a.Ha,a.ub.Wa);Eh(a,a.Wb);for(e=18;3<=e&&0===a.S[2*ih[e]+1];e--);a.va+=3*(e+1)+14;var f=a.va+3+7>>>3;var g=a.ab+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)N(a,b?1:0,3),Ah(a,c,d);else if(4===a.strategy||g===f)N(a,2+(b?1:0),3),Dh(a,jh,kh);else{N(a,4+(b?1:0),3);c=a.yb.Wa+1;d=a.ub.Wa+1;e+=1;N(a,c-257,5);N(a,d-1,5);N(a,e-4,4);for(f=0;f<e;f++)N(a,a.S[2*ih[f]+
1],3);Gh(a,a.Y,c-1);Gh(a,a.Ha,d-1);Dh(a,a.Y,a.Ha)}yh(a);b&&zh(a);a.aa=a.l;Mh(a.B)}
function R(a,b){a.K[a.pending++]=b}
function Nh(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function Oh(a,b){var c=a.oc,d=a.l,e=a.ba,f=a.qc,g=a.l>a.T-262?a.l-(a.T-262):0,h=a.window,k=a.Ca,l=a.na,m=a.l+258,n=h[d+e-1],r=h[d+e];a.ba>=a.fc&&(c>>=2);f>a.o&&(f=a.o);do{var p=b;if(h[p+e]===r&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Va=b;e=p;if(p>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.o?e:a.o}
function Ph(a){var b=a.T,c;do{var d=a.Cc-a.o-a.l;if(a.l>=b+(b-262)){L.Oa(a.window,a.window,b,b,0);a.Va-=b;a.l-=b;a.aa-=b;var e=c=a.xb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.na[--e],a.na[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.B.U)break;e=a.B;c=a.window;f=a.l+a.o;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,L.Oa(c,e.input,e.La,g,f),1===e.state.wrap?e.A=Eg(e.A,c,g,f):2===e.state.wrap&&(e.A=Fg(e.A,c,g,f)),e.La+=g,e.Ma+=g,c=g);a.o+=c;if(3<=a.o+a.Z)for(d=a.l-a.Z,a.C=a.window[d],a.C=
(a.C<<a.sa^a.window[d+1])&a.ra;a.Z&&!(a.C=(a.C<<a.sa^a.window[d+3-1])&a.ra,a.na[d&a.Ca]=a.head[a.C],a.head[a.C]=d,d++,a.Z--,3>a.o+a.Z););}while(262>a.o&&0!==a.B.U)}
function Qh(a,b){for(var c;;){if(262>a.o){Ph(a);if(262>a.o&&0===b)return 1;if(0===a.o)break}c=0;3<=a.o&&(a.C=(a.C<<a.sa^a.window[a.l+3-1])&a.ra,c=a.na[a.l&a.Ca]=a.head[a.C],a.head[a.C]=a.l);0!==c&&a.l-c<=a.T-262&&(a.G=Oh(a,c));if(3<=a.G)if(c=Jh(a,a.l-a.Va,a.G-3),a.o-=a.G,a.G<=a.Nb&&3<=a.o){a.G--;do a.l++,a.C=(a.C<<a.sa^a.window[a.l+3-1])&a.ra,a.na[a.l&a.Ca]=a.head[a.C],a.head[a.C]=a.l;while(0!==--a.G);a.l++}else a.l+=a.G,a.G=0,a.C=a.window[a.l],a.C=(a.C<<a.sa^a.window[a.l+1])&a.ra;else c=Jh(a,0,a.window[a.l]),
a.o--,a.l++;if(c&&(P(a,!1),0===a.B.F))return 1}a.Z=2>a.l?a.l:2;return 4===b?(P(a,!0),0===a.B.F?3:4):a.da&&(P(a,!1),0===a.B.F)?1:2}
function Rh(a,b){for(var c,d;;){if(262>a.o){Ph(a);if(262>a.o&&0===b)return 1;if(0===a.o)break}c=0;3<=a.o&&(a.C=(a.C<<a.sa^a.window[a.l+3-1])&a.ra,c=a.na[a.l&a.Ca]=a.head[a.C],a.head[a.C]=a.l);a.ba=a.G;a.uc=a.Va;a.G=2;0!==c&&a.ba<a.Nb&&a.l-c<=a.T-262&&(a.G=Oh(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.l-a.Va)&&(a.G=2));if(3<=a.ba&&a.G<=a.ba){d=a.l+a.o-3;c=Jh(a,a.l-1-a.uc,a.ba-3);a.o-=a.ba-1;a.ba-=2;do++a.l<=d&&(a.C=(a.C<<a.sa^a.window[a.l+3-1])&a.ra,a.na[a.l&a.Ca]=a.head[a.C],a.head[a.C]=a.l);while(0!==
--a.ba);a.Ja=0;a.G=2;a.l++;if(c&&(P(a,!1),0===a.B.F))return 1}else if(a.Ja){if((c=Jh(a,0,a.window[a.l-1]))&&P(a,!1),a.l++,a.o--,0===a.B.F)return 1}else a.Ja=1,a.l++,a.o--}a.Ja&&(Jh(a,0,a.window[a.l-1]),a.Ja=0);a.Z=2>a.l?a.l:2;return 4===b?(P(a,!0),0===a.B.F?3:4):a.da&&(P(a,!1),0===a.B.F)?1:2}
function Sh(a,b){for(var c,d,e,f=a.window;;){if(258>=a.o){Ph(a);if(258>=a.o&&0===b)return 1;if(0===a.o)break}a.G=0;if(3<=a.o&&0<a.l&&(d=a.l-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.l+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.o&&(a.G=a.o)}3<=a.G?(c=Jh(a,1,a.G-3),a.o-=a.G,a.l+=a.G,a.G=0):(c=Jh(a,0,a.window[a.l]),a.o--,a.l++);if(c&&(P(a,!1),0===a.B.F))return 1}a.Z=0;return 4===b?(P(a,!0),0===a.B.F?3:4):a.da&&
(P(a,!1),0===a.B.F)?1:2}
function Th(a,b){for(var c;;){if(0===a.o&&(Ph(a),0===a.o)){if(0===b)return 1;break}a.G=0;c=Jh(a,0,a.window[a.l]);a.o--;a.l++;if(c&&(P(a,!1),0===a.B.F))return 1}a.Z=0;return 4===b?(P(a,!0),0===a.B.F?3:4):a.da&&(P(a,!1),0===a.B.F)?1:2}
function Uh(a,b,c,d,e){this.Uc=a;this.fd=b;this.jd=c;this.ed=d;this.Sc=e}
var Vh;Vh=[new Uh(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.o){Ph(a);if(0===a.o&&0===b)return 1;if(0===a.o)break}a.l+=a.o;a.o=0;var d=a.aa+c;if(0===a.l||a.l>=d)if(a.o=a.l-d,a.l=d,P(a,!1),0===a.B.F)return 1;if(a.l-a.aa>=a.T-262&&(P(a,!1),0===a.B.F))return 1}a.Z=0;if(4===b)return P(a,!0),0===a.B.F?3:4;a.l>a.aa&&P(a,!1);return 1}),
new Uh(4,4,8,4,Qh),new Uh(4,5,16,8,Qh),new Uh(4,6,32,32,Qh),new Uh(4,4,16,16,Rh),new Uh(8,16,32,32,Rh),new Uh(8,16,128,128,Rh),new Uh(8,32,128,256,Rh),new Uh(32,128,258,1024,Rh),new Uh(32,258,258,4096,Rh)];
function Wh(){this.B=null;this.status=0;this.K=null;this.wrap=this.pending=this.jb=this.ea=0;this.u=null;this.fa=0;this.method=8;this.Ua=-1;this.Ca=this.Vb=this.T=0;this.window=null;this.Cc=0;this.head=this.na=null;this.qc=this.fc=this.strategy=this.level=this.Nb=this.oc=this.ba=this.o=this.Va=this.l=this.Ja=this.uc=this.G=this.aa=this.sa=this.ra=this.Jb=this.xb=this.C=0;this.Y=new L.pa(1146);this.Ha=new L.pa(122);this.S=new L.pa(78);Lh(this.Y);Lh(this.Ha);Lh(this.S);this.Wb=this.ub=this.yb=null;
this.qa=new L.pa(16);this.L=new L.pa(573);Lh(this.L);this.Ta=this.ta=0;this.depth=new L.pa(573);Lh(this.depth);this.P=this.V=this.Z=this.matches=this.ab=this.va=this.eb=this.da=this.hb=this.Lb=0}
function Xh(a,b){if(!a||!a.state||5<b||0>b)return a?Kh(a,-2):-2;var c=a.state;if(!a.ib||!a.input&&0!==a.U||666===c.status&&4!==b)return Kh(a,0===a.F?-5:-2);c.B=a;var d=c.Ua;c.Ua=b;if(42===c.status)if(2===c.wrap)a.A=0,R(c,31),R(c,139),R(c,8),c.u?(R(c,(c.u.text?1:0)+(c.u.za?2:0)+(c.u.ya?4:0)+(c.u.name?8:0)+(c.u.comment?16:0)),R(c,c.u.time&255),R(c,c.u.time>>8&255),R(c,c.u.time>>16&255),R(c,c.u.time>>24&255),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,c.u.Rd&255),c.u.ya&&c.u.ya.length&&(R(c,
c.u.ya.length&255),R(c,c.u.ya.length>>8&255)),c.u.za&&(a.A=Fg(a.A,c.K,c.pending,0)),c.fa=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,3),c.status=113);else{var e=8+(c.Vb-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.l&&(e|=32);c.status=113;Nh(c,e+(31-e%31));0!==c.l&&(Nh(c,a.A>>>16),Nh(c,a.A&65535));a.A=1}if(69===c.status)if(c.u.ya){for(e=c.pending;c.fa<(c.u.ya.length&65535)&&(c.pending!==c.ea||(c.u.za&&c.pending>
e&&(a.A=Fg(a.A,c.K,c.pending-e,e)),Mh(a),e=c.pending,c.pending!==c.ea));)R(c,c.u.ya[c.fa]&255),c.fa++;c.u.za&&c.pending>e&&(a.A=Fg(a.A,c.K,c.pending-e,e));c.fa===c.u.ya.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.u.name){e=c.pending;do{if(c.pending===c.ea&&(c.u.za&&c.pending>e&&(a.A=Fg(a.A,c.K,c.pending-e,e)),Mh(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.u.name.length?c.u.name.charCodeAt(c.fa++)&255:0;R(c,f)}while(0!==f);c.u.za&&c.pending>e&&(a.A=Fg(a.A,c.K,c.pending-
e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.u.comment){e=c.pending;do{if(c.pending===c.ea&&(c.u.za&&c.pending>e&&(a.A=Fg(a.A,c.K,c.pending-e,e)),Mh(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.u.comment.length?c.u.comment.charCodeAt(c.fa++)&255:0;R(c,f)}while(0!==f);c.u.za&&c.pending>e&&(a.A=Fg(a.A,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.u.za?(c.pending+2>c.ea&&Mh(a),c.pending+2<=c.ea&&(R(c,a.A&255),R(c,a.A>>8&255),a.A=0,
c.status=113)):c.status=113);if(0!==c.pending){if(Mh(a),0===a.F)return c.Ua=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Kh(a,-5);if(666===c.status&&0!==a.U)return Kh(a,-5);if(0!==a.U||0!==c.o||0!==b&&666!==c.status){d=2===c.strategy?Th(c,b):3===c.strategy?Sh(c,b):Vh[c.level].Sc(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Ua=-1),0;if(2===d&&(1===b?(N(c,2,3),vh(c,256,jh),16===c.P?(uh(c,c.V),c.V=0,c.P=0):8<=c.P&&(c.K[c.pending++]=c.V&255,c.V>>=8,c.P-=
8)):5!==b&&(N(c,0,3),Ah(c,0,0),3===b&&(Lh(c.head),0===c.o&&(c.l=0,c.aa=0,c.Z=0))),Mh(a),0===a.F))return c.Ua=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(R(c,a.A&255),R(c,a.A>>8&255),R(c,a.A>>16&255),R(c,a.A>>24&255),R(c,a.Ma&255),R(c,a.Ma>>8&255),R(c,a.Ma>>16&255),R(c,a.Ma>>24&255)):(Nh(c,a.A>>>16),Nh(c,a.A&65535));Mh(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Yh={};Yh=function(){this.input=null;this.Ma=this.U=this.La=0;this.ib=null;this.Ub=this.F=this.Xa=0;this.msg="";this.state=null;this.Ib=2;this.A=0};var Zh=Object.prototype.toString;
function $h(a){if(!(this instanceof $h))return new $h(a);a=this.options=L.assign({level:-1,method:8,chunkSize:16384,Da:15,hd:8,strategy:0,Bc:""},a||{});a.raw&&0<a.Da?a.Da=-a.Da:a.Vc&&0<a.Da&&16>a.Da&&(a.Da+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.B=new Yh;this.B.F=0;var b=this.B;var c=a.level,d=a.method,e=a.Da,f=a.hd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Kh(b,-2);else{8===e&&(e=9);var k=new Wh;
b.state=k;k.B=b;k.wrap=h;k.u=null;k.Vb=e;k.T=1<<k.Vb;k.Ca=k.T-1;k.Jb=f+7;k.xb=1<<k.Jb;k.ra=k.xb-1;k.sa=~~((k.Jb+3-1)/3);k.window=new L.Na(2*k.T);k.head=new L.pa(k.xb);k.na=new L.pa(k.T);k.hb=1<<f+6;k.ea=4*k.hb;k.K=new L.Na(k.ea);k.eb=1*k.hb;k.Lb=3*k.hb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Ma=b.Ub=0;b.Ib=2;c=b.state;c.pending=0;c.jb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Ua=0;if(!Ih){d=Array(16);for(f=g=0;28>f;f++)for(nh[f]=g,e=0;e<1<<fh[f];e++)mh[g++]=
f;mh[g-1]=f;for(f=g=0;16>f;f++)for(oh[f]=g,e=0;e<1<<gh[f];e++)lh[g++]=f;for(g>>=7;30>f;f++)for(oh[f]=g<<7,e=0;e<1<<gh[f]-7;e++)lh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)jh[2*e+1]=8,e++,d[8]++;for(;255>=e;)jh[2*e+1]=9,e++,d[9]++;for(;279>=e;)jh[2*e+1]=7,e++,d[7]++;for(;287>=e;)jh[2*e+1]=8,e++,d[8]++;xh(jh,287,d);for(e=0;30>e;e++)kh[2*e+1]=5,kh[2*e]=wh(e,5);qh=new ph(jh,fh,257,286,15);rh=new ph(kh,gh,0,30,15);sh=new ph([],hh,0,19,7);Ih=!0}c.yb=new th(c.Y,qh);c.ub=new th(c.Ha,rh);c.Wb=new th(c.S,
sh);c.V=0;c.P=0;yh(c);c=0}else c=Kh(b,-2);0===c&&(b=b.state,b.Cc=2*b.T,Lh(b.head),b.Nb=Vh[b.level].fd,b.fc=Vh[b.level].Uc,b.qc=Vh[b.level].jd,b.oc=Vh[b.level].ed,b.l=0,b.aa=0,b.o=0,b.Z=0,b.G=b.ba=2,b.Ja=0,b.C=0);b=c}}else b=-2;if(0!==b)throw Error(Kg[b]);a.header&&(b=this.B)&&b.state&&2===b.state.wrap&&(b.state.u=a.header);if(a.fb){var l;"string"===typeof a.fb?l=Dg(a.fb):"[object ArrayBuffer]"===Zh.call(a.fb)?l=new Uint8Array(a.fb):l=a.fb;a=this.B;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.o)b=-2;else{1===b&&(a.A=Eg(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&(Lh(l.head),l.l=0,l.aa=0,l.Z=0),c=new L.Na(l.T),L.Oa(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.La;e=a.input;a.U=g;a.La=0;a.input=f;for(Ph(l);3<=l.o;){f=l.l;g=l.o-2;do l.C=(l.C<<l.sa^l.window[f+3-1])&l.ra,l.na[f&l.Ca]=l.head[l.C],l.head[l.C]=f,f++;while(--g);l.l=f;l.o=2;Ph(l)}l.l+=l.o;l.aa=l.l;l.Z=l.o;l.o=0;l.G=l.ba=2;l.Ja=0;a.La=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Kg[b]);this.Id=!0}}
$h.prototype.push=function(a,b){var c=this.B,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Dg(a):"[object ArrayBuffer]"===Zh.call(a)?c.input=new Uint8Array(a):c.input=a;c.La=0;c.U=c.input.length;do{0===c.F&&(c.ib=new L.Na(d),c.Xa=0,c.F=d);a=Xh(c,e);if(1!==a&&0!==a)return ai(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Bc){var f=L.Tb(c.ib,c.Xa);b=f;f=f.length;if(65537>f&&(b.subarray&&Cg||!b.subarray))b=
String.fromCharCode.apply(null,L.Tb(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=L.Tb(c.ib,c.Xa),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.B)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Kh(c,-2):(c.state=null,a=113===d?Kh(c,-3):0)):a=-2,ai(this,a),this.ended=!0,0===a;2===e&&(ai(this,0),c.F=0);return!0};
function ai(a,b){0===b&&(a.result="string"===a.options.Bc?a.chunks.join(""):L.dc(a.chunks));a.chunks=[];a.err=b;a.msg=a.B.msg}
;function bi(a){this.name=a}
;var ci=new bi("rawColdConfigGroup");var di=new bi("rawHotConfigGroup");function ei(a){J.call(this,a)}
v(ei,J);function fi(a){J.call(this,a)}
v(fi,J);function gi(a){J.call(this,a,-1,hi)}
v(gi,J);var hi=[2];function ii(a){J.call(this,a,-1,ji)}
v(ii,J);ii.prototype.getPlayerType=function(){var a=Zc(this,36);return null==a?0:a};
ii.prototype.setHomeGroupInfo=function(a){return H(this,gi,81,a)};
var ji=[9,66,24,32,86,100,101];function ki(a){J.call(this,a)}
v(ki,J);ki.prototype.getKey=function(){return kd(this,1)};
ki.prototype.ka=function(){return kd(this,2===cd(this,li)?2:-1)};
var li=[2,3,4,5,6];function mi(a){J.call(this,a,-1,ni)}
v(mi,J);var ni=[15,26,28];function oi(a){J.call(this,a,-1,pi)}
v(oi,J);var pi=[5];function qi(a){J.call(this,a)}
v(qi,J);function ri(a){J.call(this,a,-1,si)}
v(ri,J);ri.prototype.setSafetyMode=function(a){return G(this,5,a)};
var si=[12];function ti(a){J.call(this,a,-1,ui)}
v(ti,J);var ui=[12];var vi={Hd:"WEB_DISPLAY_MODE_UNKNOWN",Dd:"WEB_DISPLAY_MODE_BROWSER",Fd:"WEB_DISPLAY_MODE_MINIMAL_UI",Gd:"WEB_DISPLAY_MODE_STANDALONE",Ed:"WEB_DISPLAY_MODE_FULLSCREEN"};function wi(a){J.call(this,a)}
v(wi,J);wi.prototype.getKey=function(){return kd(this,1)};
wi.prototype.ka=function(){return kd(this,2)};function xi(a){J.call(this,a,-1,yi)}
v(xi,J);var yi=[4,5];function zi(a){J.call(this,a)}
v(zi,J);function Ai(a){J.call(this,a)}
v(Ai,J);var Bi=[2,3,4,5];function Ci(a){J.call(this,a)}
v(Ci,J);function Di(a){J.call(this,a)}
v(Di,J);function Ei(a){J.call(this,a)}
v(Ei,J);function Fi(a){J.call(this,a,-1,Gi)}
v(Fi,J);var Gi=[10,17];function Hi(a){J.call(this,a)}
v(Hi,J);function Ii(a){J.call(this,a)}
v(Ii,J);function Ji(a){J.call(this,a)}
v(Ji,J);function Ki(a){J.call(this,a,475)}
v(Ki,J);
var Li=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474];function Mi(a){J.call(this,a)}
v(Mi,J);function Ni(a){J.call(this,a)}
v(Ni,J);Ni.prototype.getPlaylistId=function(){return ld(this,2)};
var md=[1,2];function Oi(a){J.call(this,a,-1,Pi)}
v(Oi,J);var Pi=[3];var Qi=z.window,Ri,Si,Ti=(null==Qi?void 0:null==(Ri=Qi.yt)?void 0:Ri.config_)||(null==Qi?void 0:null==(Si=Qi.ytcfg)?void 0:Si.data_)||{};B("yt.config_",Ti);function Ui(){var a=arguments;1<a.length?Ti[a[0]]=a[1]:1===a.length&&Object.assign(Ti,a[0])}
function S(a,b){return a in Ti?Ti[a]:b}
function Vi(){return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Wi(){var a=Ti.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Xi=[];function Yi(a){Xi.forEach(function(b){return b(a)})}
function Zi(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){$i(b)}}:a}
function $i(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Ui("ERRORS",b));Yi(a)}
function aj(a,b,c,d,e){var f=C("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Ui("ERRORS",f))}
;function U(a){a=bj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function cj(a,b){a=bj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function bj(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
function dj(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var ej=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++ej});var fj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function gj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in fj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function hj(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
gj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
gj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
gj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=z.ytEventsEventsListeners||{};B("ytEventsEventsListeners",lb);var ij=z.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",ij);
function jj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function kj(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?lj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var lj=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function mj(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=jj(a,b,c,d);if(e)return e;e=++ij.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new gj(h);if(!Bd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new gj(h);
h.currentTarget=a;return c.call(a,h)};
g=Zi(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),lj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
;function nj(a,b){"function"===typeof a&&(a=Zi(a));return window.setTimeout(a,b)}
function oj(a,b){"function"===typeof a&&(a=Zi(a));return window.setInterval(a,b)}
;var pj=/^[\w.]*$/,qj={q:!0,search_query:!0};function rj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=sj(f[0]||""),h=sj(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(rj);k.args=[{key:l,value:f[1],query:a,method:tj==m?"unchanged":m}];qj.hasOwnProperty(l)||aj(k)}}return c}
var tj=String(rj);function uj(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function vj(a){"?"==a.charAt(0)&&(a=a.substr(1));return rj(a,"&")}
function wj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=vj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=bc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function xj(a){if(!b)var b=window.location.href;var c=a.match(Xb)[1]||null,d=Zb(a);c&&d?(a=a.match(Xb),b=b.match(Xb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Zb(b)==d&&(Number(b.match(Xb)[4]||null)||null)==(Number(a.match(Xb)[4]||null)||null):!0;return a}
function sj(a){return a&&a.match(pj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function yj(a){var b=zj;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ud;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ca){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?xd:g;try{var h=g.history.length}catch(ca){h=0}e.u_his=h;var k;e.u_h=null==(k=xd.screen)?void 0:k.height;var l;e.u_w=null==(l=xd.screen)?void 0:l.width;var m;e.u_ah=null==(m=xd.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=xd.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=xd.screen)?void 0:r.colorDepth}catch(ca){}h=b.h;try{var p=h.screenX;var y=h.screenY}catch(ca){}try{var A=h.outerWidth;var I=h.outerHeight}catch(ca){}try{var O=h.innerWidth;var T=h.innerHeight}catch(ca){}try{var Q=h.screenLeft;var ya=h.screenTop}catch(ca){}try{O=h.innerWidth,T=h.innerHeight}catch(ca){}try{var Mc=h.screen.availWidth;var Ia=h.screen.availTop}catch(ca){}p=[Q,ya,p,y,Mc,Ia,A,I,O,T];y=b.h.top;try{var za=(y||window).document,da=
"CSS1Compat"==za.compatMode?za.documentElement:za.body;var ja=(new zd(da.clientWidth,da.clientHeight)).round()}catch(ca){ja=new zd(-12245933,-12245933)}za=ja;ja={};var ka=void 0===ka?z:ka;da=new Se;"SVGElement"in ka&&"createElementNS"in ka.document&&da.set(0);y=Sd();y["allow-top-navigation-by-user-activation"]&&da.set(1);y["allow-popups-to-escape-sandbox"]&&da.set(2);ka.crypto&&ka.crypto.subtle&&da.set(3);"TextDecoder"in ka&&"TextEncoder"in ka&&da.set(4);ka=Te(da);ja.bc=ka;ja.bih=za.height;ja.biw=
za.width;ja.brdim=p.join();b=b.i;b=(ja.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ja.wgl=!!xd.WebGLRenderingContext,ja);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var zj=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return uj(yj(a))});Date.now();var Aj="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function Bj(){if(!Aj)return null;var a=Aj();return"open"in a?a:null}
;var Cj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Dj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Wd)),Ej=!1;
function Fj(a,b){b=void 0===b?{}:b;var c=xj(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in Cj){var f=S(Cj[e]);"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&Zb(a)||d&&void 0!==b[e]||!(U("move_vss_away_from_login_info_cookie")||"X-Goog-AuthUser"!==e&&"X-Goog-PageId"!==e)||(b[e]=f)}U("move_vss_away_from_login_info_cookie")&&c&&S("SESSION_INDEX")&&(b["X-Yt-Auth-Test"]="test");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Zb(a))b["X-YouTube-Utc-Offset"]=
String(-(new Date).getTimezoneOffset());if(c||!Zb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Zb(a)||(b["X-YouTube-Ad-Signals"]=uj(yj()));return b}
function Gj(a){var b=window.location.search,c=Zb(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&xj(a)&&(c=document.location.hostname);var d=Yb(a.match(Xb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=vj(b),f={};db(Dj,function(g){e[g]&&(f[g]=e[g])});
return wj(a,f||{},!1)}
function Hj(a,b){var c=b.format||"JSON";a=Ij(a,b);var d=Jj(a,b),e=!1,f=Kj(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Lj(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||z;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=nj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||z,f))},d)}return f}
function Ij(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=wj(a,b||{},!0);return a}
function Jj(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams;var g=S("XSRF_FIELD_NAME");var h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Zb(a)&&!b.withCredentials&&Zb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=vj(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):bc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Ej&&a&&"POST"!=b.method&&(Ej=!0,$i(Error("AJAX request with postData should use POST")));return e}
function Lj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,aj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Mj(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Nj(g)})}d&&Oj(e);
return e}
function Oj(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===qb){var e=null;var f=z.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(g){z.console&&z.console.error(g.message)}qb=e}else qb=e}d=(e=qb)?e.createHTML(d):d;a[c]=new Vb(d)}else Oj(a[b])}}
function Mj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Nj(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Pj(a,b){b.method="POST";b.postParams||(b.postParams={});return Hj(a,b)}
function Kj(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Zi(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Bj();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;U("debug_forward_web_query_parameters")&&(a=Gj(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Fj(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Qj=[{Ob:function(a){return"Cannot read property '"+a.key+"'"},
zb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ob:function(a){return"Cannot call '"+a.key+"'"},
zb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ob:function(a){return a.key+" is not defined"},
zb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Sj={Aa:[],xa:[{Kc:Rj,weight:500}]};function Rj(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Tj(){this.xa=[];this.Aa=[]}
var Uj;function Vj(){if(!Uj){var a=Uj=new Tj;a.Aa.length=0;a.xa.length=0;Sj.Aa&&a.Aa.push.apply(a.Aa,Sj.Aa);Sj.xa&&a.xa.push.apply(a.xa,Sj.xa)}return Uj}
;var Wj=new K;function Xj(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Yj(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Yj(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Yj(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Yj(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Zj(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=ak(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Xj(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?ak(e+".ve",f,g,h):0;d+=g;d+=ak(e,a[e],b,c);if(500<d)break}}else c[b]=bk(a),d+=c[b].length;else c[b]=bk(a),d+=c[b].length;return d}
function ak(a,b,c,d){c+="."+a;a=bk(b);d[c]=a;return c.length+a.length}
function bk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function ck(){}
;function dk(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var ek={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},fk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},gk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},hk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function ik(){var a=z.navigator;return a?a.connection:void 0}
;function jk(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(jk,Error);function kk(){try{return lk(),!0}catch(a){return!1}}
function lk(){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new jk("Datasync ID not set","unknown");}
;function mk(){}
function nk(a,b){return ok(a,0,b)}
mk.prototype.ja=function(a,b){return ok(a,1,b)};function pk(){mk.apply(this,arguments)}
v(pk,mk);function qk(){pk.h||(pk.h=new pk);return pk.h}
function ok(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):nj(a,c||0)}
pk.prototype.Pa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
pk.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
var Re=qk();function rk(a){var b=new sg;if(b.h)try{b.h.setItem("__sak","1");b.h.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new yg(b,a):b:null)||(a=new tg(a||"UserDataSharedStore"),b=a.h?a:null);this.h=(a=b)?new og(a):null;this.i=document.domain||window.location.hostname}
rk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Qf(b))}catch(f){return}else e=escape(b);b=this.i;ce.set(""+a,e,{Mb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
rk.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=ce.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
rk.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;ce.remove(""+a,"/",void 0===b?"youtube.com":b)};var sk=function(){var a;return function(){a||(a=new rk("ytidb"));return a}}();
function tk(){var a;return null==(a=sk())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var uk=[],vk=!1;function wk(a){vk||(uk.push({type:"ERROR",payload:a}),10<uk.length&&uk.shift())}
function xk(a,b){vk||(uk.push({type:"EVENT",eventType:a,payload:b}),10<uk.length&&uk.shift())}
;function yk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function zk(a){return a.substr(0,a.indexOf(":"))||a}
;var Ak=zc||Ac;var Bk={},Ck=(Bk.AUTH_INVALID="No user identifier specified.",Bk.EXPLICIT_ABORT="Transaction was explicitly aborted.",Bk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Bk.MISSING_INDEX="Index not created.",Bk.MISSING_OBJECT_STORES="Object stores not created.",Bk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Bk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Bk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Bk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Bk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Bk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Bk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Bk),Dk={},Ek=(Dk.AUTH_INVALID="ERROR",Dk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Dk.EXPLICIT_ABORT="IGNORED",Dk.IDB_NOT_SUPPORTED="ERROR",Dk.MISSING_INDEX=
"WARNING",Dk.MISSING_OBJECT_STORES="ERROR",Dk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Dk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Dk.QUOTA_EXCEEDED="WARNING",Dk.QUOTA_MAYBE_EXCEEDED="WARNING",Dk.UNKNOWN_ABORT="WARNING",Dk.INCOMPATIBLE_DB_VERSION="WARNING",Dk),Fk={},Gk=(Fk.AUTH_INVALID=!1,Fk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Fk.EXPLICIT_ABORT=!1,Fk.IDB_NOT_SUPPORTED=!1,Fk.MISSING_INDEX=!1,Fk.MISSING_OBJECT_STORES=!1,Fk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Fk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Fk.QUOTA_EXCEEDED=!1,Fk.QUOTA_MAYBE_EXCEEDED=!0,Fk.UNKNOWN_ABORT=!0,Fk.INCOMPATIBLE_DB_VERSION=!1,Fk);function W(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Ck[a]:c;d=void 0===d?Ek[a]:d;e=void 0===e?Gk[a]:e;jk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,W.prototype)}
v(W,jk);function Hk(a,b){W.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ck.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Hk.prototype)}
v(Hk,W);function Ik(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ik.prototype)}
v(Ik,Error);var Jk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Kk(a,b,c,d){b=zk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof W)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new W("QUOTA_EXCEEDED",a);if(Bc&&"UnknownError"===e.name)return new W("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ik)return new W("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Jk.some(function(f){return e.message.includes(f)}))return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new W("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Qd:e.name})];e.level="WARNING";return e}
function Lk(a,b,c){var d=tk();return new W("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Mk(a){if(!a)throw Error();throw a;}
function Nk(a){return a}
function Ok(a){this.h=a}
function Pk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Pk.resolve=function(a){return new Pk(new Ok(function(b,c){a instanceof Pk?a.then(b,c):b(a)}))};
Pk.reject=function(a){return new Pk(new Ok(function(b,c){c(a)}))};
Pk.prototype.then=function(a,b){var c=this,d=null!=a?a:Nk,e=null!=b?b:Mk;return new Pk(new Ok(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Qk(c,c,d,f,g)}),c.i.push(function(){Rk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Qk(c,c,d,f,g):"REJECTED"===c.state.status&&Rk(c,c,e,f,g)}))};
function Sk(a,b){a.then(void 0,b)}
function Qk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Pk?Tk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Rk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Pk?Tk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Tk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Pk?Tk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Uk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Vk(a){return new Promise(function(b,c){Uk(a,b,c)})}
function Wk(a){return new Pk(new Ok(function(b,c){Uk(a,b,c)}))}
;function Xk(a,b){return new Pk(new Ok(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Yk=window,X=Yk.ytcsi&&Yk.ytcsi.now?Yk.ytcsi.now:Yk.performance&&Yk.performance.timing&&Yk.performance.now&&Yk.performance.timing.navigationStart?function(){return Yk.performance.timing.navigationStart+Yk.performance.now()}:function(){return(new Date).getTime()};function Zk(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(X());this.i=!1}
q=Zk.prototype;q.add=function(a,b,c){return $k(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
q.clear=function(a){return $k(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
q.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function al(a,b,c){a=a.h.createObjectStore(b,c);return new bl(a)}
q.delete=function(a,b){return $k(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=function(a,b){return $k(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function cl(a,b,c){return $k(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return Wk(d.h.put(c,void 0))})}
q.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function $k(a,b,c,d){var e,f,g,h,k,l,m,n,r,p,y,A;return x(function(I){switch(I.h){case 1:var O={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){I.D(3);break}g++;k=Math.round(X());wa(I,4);l=a.h.transaction(b,e.mode);O=new dl(l);O=el(O,d);return w(I,O,6);case 6:return m=I.i,n=Math.round(X()),fl(a,k,n,g,void 0,b.join(),e),I.return(m);case 4:r=Aa(I);p=Math.round(X());y=Kk(r,a.h.name,b.join(),a.h.version);
if((A=y instanceof W&&!y.h)||g>=f)fl(a,k,p,g,y,b.join(),e),h=y;I.D(2);break;case 3:return I.return(Promise.reject(h))}})}
function fl(a,b,c,d,e,f,g){b=c-b;e?(e instanceof W&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&xk("QUOTA_EXCEEDED",{dbName:zk(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof W&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),xk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Rl(a,!1,d,f,b,g.tag),wk(e)):Rl(a,!0,d,f,b,g.tag)}
function Rl(a,b,c,d,e,f){xk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
q.getName=function(){return this.h.name};
function bl(a){this.h=a}
q=bl.prototype;q.add=function(a,b){return Wk(this.h.add(a,b))};
q.autoIncrement=function(){return this.h.autoIncrement};
q.clear=function(){return Wk(this.h.clear()).then(function(){})};
function Sl(a,b,c){a.h.createIndex(b,c,{unique:!1})}
function Tl(a,b){return Ul(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?Tl(this,a):Wk(this.h.delete(a))};
q.get=function(a){return Wk(this.h.get(a))};
q.index=function(a){try{return new Vl(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ik(a,this.h.name);throw b;}};
q.getName=function(){return this.h.name};
q.keyPath=function(){return this.h.keyPath};
function Ul(a,b,c){a=a.h.openCursor(b.query,b.direction);return Wl(a).then(function(d){return Xk(d,c)})}
function dl(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=W;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function el(a,b){var c=new Promise(function(d,e){try{Sk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
dl.prototype.abort=function(){this.h.abort();this.i=!0;throw new W("EXPLICIT_ABORT");};
dl.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new bl(a),this.j.set(a,b));return b};
function Vl(a){this.h=a}
q=Vl.prototype;q.delete=function(a){return Xl(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
q.get=function(a){return Wk(this.h.get(a))};
q.getKey=function(a){return Wk(this.h.getKey(a))};
q.keyPath=function(){return this.h.keyPath};
q.unique=function(){return this.h.unique};
function Xl(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Wl(a).then(function(d){return Xk(d,c)})}
function Yl(a,b){this.request=a;this.cursor=b}
function Wl(a){return Wk(a).then(function(b){return b?new Yl(a,b):null})}
q=Yl.prototype;q.advance=function(a){this.cursor.advance(a);return Wl(this.request)};
q.continue=function(a){this.cursor.continue(a);return Wl(this.request)};
q.delete=function(){return Wk(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.ka=function(){return this.cursor.value};
q.update=function(a){return Wk(this.cursor.update(a))};function Zl(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Zk(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ic,k=c.Jc,l=c.nd,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&xk("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:zk(a)});var y=f(),A=new dl(g.transaction);m&&
m(y,function(I){return p.oldVersion<I&&p.newVersion>=I},A);
A.done.catch(function(I){e(I)})}catch(I){e(I)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){xk("IDB_UNEXPECTEDLY_CLOSED",{dbName:zk(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function $l(a,b,c){c=void 0===c?{}:c;return Zl(a,b,c)}
function am(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ic)&&c.addEventListener("blocked",function(){e()}),w(g,Vk(c),4);
if(2!=g.h)return xa(g,0);f=Aa(g);throw Kk(f,a,"",-1);})}
;function bm(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.m=0}
bm.prototype.i=function(a,b,c){c=void 0===c?{}:c;return $l(a,b,c)};
bm.prototype.delete=function(a){a=void 0===a?{}:a;return am(this.name,a)};
function cm(a,b){return new W("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function dm(a,b){if(!b)throw Lk("openWithToken",zk(a.name));return em(a)}
function em(a){function b(){var f,g,h,k,l,m,n,r,p,y;return x(function(A){switch(A.h){case 1:return g=null!=(f=Error().stack)?f:"",wa(A,2),w(A,a.i(a.name,a.options.version,d),4);case 4:h=A.i;for(var I=a.options,O=[],T=u(Object.keys(I.Ya)),Q=T.next();!Q.done;Q=T.next()){Q=Q.value;var ya=I.Ya[Q],Mc=void 0===ya.ld?Number.MAX_VALUE:ya.ld;!(h.h.version>=ya.cb)||h.h.version>=Mc||h.h.objectStoreNames.contains(Q)||O.push(Q)}k=O;if(0===k.length){A.D(5);break}l=Object.keys(a.options.Ya);m=h.objectStoreNames();
if(a.v<cj("ytidb_reopen_db_retries",0))return a.v++,h.close(),wk(new W("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());if(!(a.m<cj("ytidb_remake_db_retries",1))){A.D(6);break}a.m++;return w(A,a.delete(),7);case 7:return wk(new W("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());case 6:throw new Hk(m,l);case 5:return A.return(h);case 2:n=Aa(A);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){A.D(8);break}return w(A,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=A.i;p=r.h.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),a.j=!1,cm(a,p);return A.return(r);case 8:throw c(),n instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Kk(n,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.j)throw cm(a);if(a.h)return a.h;var d={Jc:function(f){f.close()},
closed:c,nd:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var fm=new bm("YtIdbMeta",{Ya:{databases:{cb:1}},upgrade:function(a,b){b(1)&&al(a,"databases",{keyPath:"actualName"})}});
function gm(a,b){var c;return x(function(d){if(1==d.h)return w(d,dm(fm,b),2);c=d.i;return d.return($k(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Wk(f.h.put(a,void 0)).then(function(){})})}))})}
function hm(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,dm(fm,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function im(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,dm(fm,b),2)):3!=e.h?(d=e.i,w(e,$k(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return Ul(f.objectStore("databases"),{},function(g){a(g.ka())&&c.push(g.ka());return g.continue()})}),3)):e.return(c)})}
function jm(a){return im(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var km,lm=new function(){}(new function(){});
function mm(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=tk();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Ak)f=/WebKit\/([0-9]+)/.exec(Nb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Nb()),f=!(f&&602<=parseInt(f[1],10)));if(f||nc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,gm(d,lm),4);case 4:return w(e,hm("yt-idb-test-do-not-use",lm),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function nm(){if(void 0!==km)return km;vk=!0;return km=mm().then(function(a){vk=!1;var b;if(null!=(b=sk())&&b.h){var c;b={hasSucceededOnce:(null==(c=tk())?void 0:c.hasSucceededOnce)||a};var d;null==(d=sk())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function om(){return C("ytglobal.idbToken_")||void 0}
function pm(){var a=om();return a?Promise.resolve(a):nm().then(function(b){(b=b?lm:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new Rf;function qm(a){if(!kk())throw a=new W("AUTH_INVALID",{dbName:a}),wk(a),a;var b=lk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function rm(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.h){case 1:return f=null!=(e=Error().stack)?e:"",w(m,pm(),2);case 2:g=m.i;if(!g)throw h=Lk("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),wk(h),h;yk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:qm(a);wa(m,3);return w(m,gm(k,g),5);case 5:return w(m,$l(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),wa(m,7),w(m,hm(k.actualName,g),9);case 9:xa(m,
8);break;case 7:Aa(m);case 8:throw l;}})}
function sm(a,b,c){c=void 0===c?{}:c;return rm(a,b,!1,c)}
function tm(a,b,c){c=void 0===c?{}:c;return rm(a,b,!0,c)}
function um(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,pm(),2);if(3!=e.h){c=e.i;if(!c)return e.return();yk(a);d=qm(a);return w(e,am(d.actualName,b),3)}return w(e,hm(d.actualName,c),0)})}
function vm(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,am(d.actualName,b),2):w(e,hm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function wm(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,pm(),2);if(3!=d.h){b=d.i;if(!b)return d.return();yk("LogsDatabaseV2");return w(d,jm(b),3)}c=d.i;return w(d,vm(c,a,b),0)})}
function xm(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,pm(),2);if(3!=d.h){c=d.i;if(!c)return d.return();yk(a);return w(d,am(a,b),3)}return w(d,hm(a,c),0)})}
;function ym(a,b){bm.call(this,a,b);this.options=b;yk(a)}
v(ym,bm);function zm(a,b){var c;return function(){c||(c=new ym(a,b));return c}}
ym.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Db?tm:sm)(a,b,Object.assign({},c))};
ym.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Db?xm:um)(this.name,a)};
function Am(a,b){return zm(a,b)}
;var Bm={},Cm=Am("ytGcfConfig",{Ya:(Bm.coldConfigStore={cb:1},Bm.hotConfigStore={cb:1},Bm),Db:!1,upgrade:function(a,b){b(1)&&(Sl(al(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Sl(al(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Dm(a){return dm(Cm(),a)}
function Em(a,b,c){var d,e,f;return x(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:X()},w(g,Dm(c),2);case 2:return e=g.i,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,cl(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Fm(a,b,c,d){var e,f,g;return x(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:X()},w(h,Dm(d),2);case 2:return f=h.i,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,cl(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Gm(a){var b,c;return x(function(d){return 1==d.h?w(d,Dm(a),2):3!=d.h?(b=d.i,c=void 0,w(d,$k(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return Xl(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ka()})}),3)):d.return(c)})}
function Hm(a){var b,c;return x(function(d){return 1==d.h?w(d,Dm(a),2):3!=d.h?(b=d.i,c=void 0,w(d,$k(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return Xl(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ka()})}),3)):d.return(c)})}
;function Im(){this.h=0}
function Jm(a,b,c){var d,e,f;return x(function(g){if(1==g.h){if(!U("update_log_event_config"))return g.D(0);c&&(a.i=c,B("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;B("yt.gcf.config.hotHashData",a.hotHashData);return(d=om())?c?g.D(4):w(g,Hm(d),5):g.D(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return w(g,Em(c,b,d),0)})}
function Km(a,b,c){var d,e,f,g;return x(function(h){if(1==h.h){if(!U("update_log_event_config"))return h.D(0);a.coldHashData=b;B("yt.gcf.config.coldHashData",a.coldHashData);return(d=om())?c?h.D(4):w(h,Gm(d),5):h.D(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.D(0);g=c.configData;return w(h,Fm(c,b,g,d),0)})}
;function Lm(){return"INNERTUBE_API_KEY"in Ti&&"INNERTUBE_API_VERSION"in Ti}
function Mm(){return{Wc:S("INNERTUBE_API_KEY"),Xc:S("INNERTUBE_API_VERSION"),Kb:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ic:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Yc:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),jc:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),lc:S("INNERTUBE_CONTEXT_HL"),kc:S("INNERTUBE_CONTEXT_GL"),Zc:S("INNERTUBE_HOST_OVERRIDE")||"",bd:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ad:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Nm(a){var b={client:{hl:a.lc,gl:a.kc,clientName:a.ic,clientVersion:a.jc,configInfo:a.Kb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=dj();0<c.length&&(b.request={internalExperimentFlags:c});Om(a,void 0,b);Pm(void 0,b);Qm(void 0,b);Rm(a,void 0,b);Sm(void 0,b);U("start_sending_config_hash")&&Tm(void 0,b);S("DELEGATED_SESSION_ID")&&
!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(vj(S("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Um(a){var b=new ti,c=new ii;G(c,1,a.lc);G(c,2,a.kc);G(c,16,a.Yc);G(c,17,a.jc);if(a.Kb){var d=a.Kb,e=new ei;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,ei,62,e)}if((d=z.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);G(c,65,d)}d=S("EXPERIMENTS_TOKEN","");""!==d&&G(c,
54,d);d=dj();if(0<d.length){e=new mi;for(var f=0;f<d.length;f++){var g=new ki;G(g,1,d[f].key);bd(g,2,li,d[f].value);jd(e,15,ki,g)}H(b,mi,5,e)}Om(a,c);Pm(b);Qm(c);Rm(a,c);Sm(c);U("start_sending_config_hash")&&Tm(c);S("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(a=new ri,G(a,3,S("DELEGATED_SESSION_ID")));a=u(Object.entries(vj(S("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===
d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);H(b,ii,1,c);return b}
function Om(a,b,c){a=a.ic;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=gd(b,fi,96)||new fi;var d=dk();d=Object.keys(vi).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);H(b,fi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=dk())}
function Pm(a,b){var c=C("yt.embedded_player.embed_url");c&&(a?(b=gd(a,oi,7)||new oi,G(b,4,c),H(a,oi,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Qm(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=z.navigator)?0:c.deviceMemory)){var d;c=null==(d=z.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Rm(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=gd(b,ei,62))?d:new ei;G(c,6,a.appInstallData);H(b,ei,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Sm(a,b){a:{var c=ik();if(c){var d=ek[c.type||"unknown"]||"CONN_UNKNOWN";c=ek[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?G(a,61,fk[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=ik(),d=null!=d&&d.effectiveType?hk.hasOwnProperty(d.effectiveType)?hk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?G(a,94,gk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Vm(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Kd||S("AUTHORIZATION");if(!b)if(a)b="Bearer "+C("gapi.auth.getToken")().Jd;else{ck.h||(ck.h=new ck);a={};if(c=fe([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in Ti||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Ti&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Tm(a,b){Im.h||(Im.h=new Im);var c=Im.h;var d=X()-c.h;if(0!==c.h&&d<cj("send_config_hash_timer"))c=void 0;else{d=C("yt.gcf.config.coldConfigData");var e=C("yt.gcf.config.hotHashData"),f=C("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=X());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=gd(a,ei,62))?g:new ei;G(b,1,c);G(b,3,d);G(b,5,e);H(a,ei,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var Wm=C("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.mb;K.prototype.publish=K.prototype.Za;K.prototype.clear=K.prototype.clear;B("ytPubsub2Pubsub2Instance",Wm);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);function Xm(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Wd:a,Vd:b},(b=C("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Ym=cj("max_body_size_to_compress",5E5),Zm=cj("min_body_size_to_compress",500),$m=!0,an=0,bn=0,cn=cj("compression_performance_threshold",250),dn=cj("slow_compressions_before_abandon_count",10);
function en(a,b,c,d){var e=X(),f={startTime:e,ticks:{},infos:{}};if($m)try{var g=(new Blob(b.split(""))).size;if(!(g>Ym||g<Zm)){var h=he(b);var k=k||{};k.Vc=!0;var l=new $h(k);l.push(h,!0);if(l.err)throw l.msg||Kg[l.err];var m=l.result;var n=X();f.ticks.gelc=n;bn++;U("disable_compression_due_to_performance_degredation")&&n-e>=cn&&(an++,U("abandon_compression_after_N_slow_zips")?bn===cj("compression_disable_point")&&an>dn&&($m=!1):$m=!1);U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&
!U("log_gel_compression_latency_lr")||Xm("gel_compression",f,{sampleRate:.1});if(window.Blob){var r=m.length<(new Blob(b.split(""))).size;r||aj(new jk("Compressed req body is larger than uncompressed","original size: "+(new Blob(b.split(""))).size,"compressed size: "+m.length));var p=r}else p=!0;if(p||!U("only_compress_gel_if_smaller"))c.headers||(c.headers={}),c.headers["Content-Encoding"]="gzip",c.postBody=m,c.postParams=void 0}d(a,c)}catch(y){aj(y),d(a,c)}else d(a,c)}
;function fn(a){a=Object.assign({},a);delete a.Authorization;var b=fe();if(b){var c=new Cf;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Ec(c.digest(),3)}return a}
;var gn;function hn(){gn||(gn=new rk("yt.innertube"));return gn}
function jn(a,b,c,d){if(d)return null;d=hn().get("nextId",!0)||1;var e=hn().get("requests",!0)||{};e[d]={method:a,request:b,authState:fn(c),requestTime:Math.round(X())};hn().set("nextId",d+1,86400,!0);hn().set("requests",e,86400,!0);return d}
function kn(a){var b=hn().get("requests",!0)||{};delete b[a];hn().set("requests",b,86400,!0)}
function ln(a){var b=hn().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(X())-d.requestTime)){var e=d.authState,f=fn(Vm(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(X())),mn(a,d.method,e,{}));delete b[c]}}hn().set("requests",b,86400,!0)}}
;function nn(a){this.qb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Sa=function(){};
this.now=Date.now;this.gb=!1;var b;this.Ac=null!=(b=a.Ac)?b:100;var c;this.yc=null!=(c=a.yc)?c:1;var d;this.wc=null!=(d=a.wc)?d:2592E6;var e;this.vc=null!=(e=a.vc)?e:12E4;var f;this.xc=null!=(f=a.xc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.vb=!!a.vb;var h;this.tb=null!=(h=a.tb)?h:.1;var k;this.Ab=null!=(k=a.Ab)?k:10;a.handleError&&(this.handleError=a.handleError);a.Sa&&(this.Sa=a.Sa);a.gb&&(this.gb=a.gb);a.qb&&(this.qb=a.qb);this.J=a.J;this.ha=a.ha;this.O=a.O;this.R=a.R;this.wa=a.wa;this.Rb=
a.Rb;this.Qb=a.Qb;on(this)&&(!this.J||this.J("networkless_logging"))&&pn(this)}
function pn(a){on(a)&&!a.gb&&(a.h=!0,a.vb&&Math.random()<=a.tb&&a.O.Lc(a.I),qn(a),a.R.ca()&&a.lb(),a.R.Ia(a.Rb,a.lb.bind(a)),a.R.Ia(a.Qb,a.Xb.bind(a)))}
q=nn.prototype;q.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(on(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.I).then(function(e){d.id=e;c.R.ca()&&rn(c,d)}).catch(function(e){rn(c,d);
sn(c,e)})}else this.wa(a,b)};
q.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(on(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.R.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.O.set(e,d.I).catch(function(l){sn(d,l)}),2);
f(g,h);k.h=0})}}this.wa(a,b,e.skipRetry)}else this.O.set(e,this.I).catch(function(g){d.wa(a,b,e.skipRetry);
sn(d,g)})}else this.wa(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
q.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(on(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.Qa(d.id,c.I):e=!0;c.R.Ka&&c.J&&c.J("vss_network_hint")&&c.R.Ka(!0);f(g,h)};
this.wa(d.url,d.options);this.O.set(d,this.I).then(function(g){d.id=g;e&&c.O.Qa(d.id,c.I)}).catch(function(g){sn(c,g)})}else this.wa(a,b)};
q.lb=function(){var a=this;if(!on(this))throw Lk("throttleSend");this.i||(this.i=this.ha.ja(function(){var b;return x(function(c){if(1==c.h)return w(c,a.O.ec("NEW",a.I),2);if(3!=c.h)return b=c.i,b?w(c,rn(a,b),3):(a.Xb(),c.return());a.i&&(a.i=0,a.lb());c.h=0})},this.Ac))};
q.Xb=function(){this.ha.Pa(this.i);this.i=0};
function rn(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!on(a))throw c=Lk("immediateSend"),c;if(void 0===b.id){e.D(2);break}return w(e,a.O.dd(b.id,a.I),3);case 3:(d=e.i)||a.Sa(Error("The request cannot be found in the database."));case 2:if(tn(a,b,a.wc)){e.D(4);break}a.Sa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.D(5);break}return w(e,a.O.Qa(b.id,a.I),5);case 5:return e.return();case 4:b.skipRetry||(b=un(a,b));if(!b){e.D(0);break}if(!b.skipRetry||
void 0===b.id){e.D(8);break}return w(e,a.O.Qa(b.id,a.I),8);case 8:a.wa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function un(a,b){if(!on(a))throw Lk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return x(function(m){switch(m.h){case 1:g=vn(f);(h=wn(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ab)){m.D(2);break}if(!a.R.Cb){m.D(3);break}return w(m,a.R.Cb(),3);case 3:if(a.R.ca()){m.D(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.D(6);
break}return w(m,a.O.Sb(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Ab)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.D(8);break}return b.sendCount<a.yc?w(m,a.O.Sb(b.id,a.I,!0,h?!1:void 0),12):w(m,a.O.Qa(b.id,a.I),8);case 12:a.ha.ja(function(){a.R.ca()&&a.lb()},a.xc);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.D(2):w(h,a.O.Qa(b.id,a.I),2);a.R.Ka&&a.J&&a.J("vss_network_hint")&&a.R.Ka(!0);d(e,f);h.h=0})};
return b}
function tn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function qn(a){if(!on(a))throw Lk("retryQueuedRequests");a.O.ec("QUEUED",a.I).then(function(b){b&&!tn(a,b,a.vc)?a.ha.ja(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.D(2):w(c,a.O.Sb(b.id,a.I),2);qn(a);c.h=0})}):a.R.ca()&&a.lb()})}
function sn(a,b){a.Dc&&!a.R.ca()?a.Dc(b):a.handleError(b)}
function on(a){return!!a.I||a.qb}
function vn(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function wn(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var xn;
function yn(){if(xn)return xn();var a={};xn=Am("LogsDatabaseV2",{Ya:(a.LogsRequestsStore={cb:2},a),Db:!1,upgrade:function(b,c,d){c(2)&&al(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Sl(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return xn()}
;function zn(a){return dm(yn(),a)}
function An(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},w(g,zn(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,cl(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=X();Bn(c);return g.return(f)})}
function Cn(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.h)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},w(l,zn(b),2);if(3!=l.h)return d=l.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,X()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,$k(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return Xl(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ka()&&(k=n.ka(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=X();Bn(c);return l.return(k)})}
function Dn(a,b){var c;return x(function(d){if(1==d.h)return w(d,zn(b),2);c=d.i;return d.return($k(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Wk(f.h.put(g,void 0)).then(function(){return g})})}))})}
function En(a,b,c,d){c=void 0===c?!0:c;var e;return x(function(f){if(1==f.h)return w(f,zn(b),2);e=f.i;return f.return($k(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Wk(h.h.put(k,void 0)).then(function(){return k})):Pk.resolve(void 0)})}))})}
function Fn(a,b){var c;return x(function(d){if(1==d.h)return w(d,zn(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Gn(a){var b,c;return x(function(d){if(1==d.h)return w(d,zn(a),2);b=d.i;c=X()-2592E6;return w(d,$k(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return Ul(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ka().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Hn(){x(function(a){return w(a,wm(),0)})}
function Bn(a){U("nwl_csi_killswitch")||Xm("networkless_performance",a,{sampleRate:1})}
;var In={},Jn=Am("ServiceWorkerLogsDatabase",{Ya:(In.SWHealthLog={cb:1},In),Db:!0,upgrade:function(a,b){b(1)&&Sl(al(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Kn(a){return dm(Jn(),a)}
function Ln(a){var b,c;x(function(d){if(1==d.h)return w(d,Kn(a),2);b=d.i;c=X()-2592E6;return w(d,$k(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return Ul(e.objectStore("SWHealthLog"),{},function(f){if(f.ka().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Mn(a){var b;return x(function(c){if(1==c.h)return w(c,Kn(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var Nn={},On=0;function Pn(a){var b=new Image,c=""+On++;Nn[c]=b;b.onload=b.onerror=function(){delete Nn[c]};
b.src=a}
;function Qn(){this.h=new Map;this.i=!1}
function Rn(){if(!Qn.h){var a=C("yt.networkRequestMonitor.instance")||new Qn;B("yt.networkRequestMonitor.instance",a);Qn.h=a}return Qn.h}
Qn.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Qn.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Qn.prototype.removeParams=function(a){return a.split("?")[0]};
Qn.prototype.removeParams=Qn.prototype.removeParams;Qn.prototype.isEndpointCFR=Qn.prototype.isEndpointCFR;Qn.prototype.requestComplete=Qn.prototype.requestComplete;Qn.getInstance=Rn;var Sn;function Tn(){Sn||(Sn=new rk("yt.offline"));return Sn}
function Un(a){if(U("offline_error_handling")){var b=Tn().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Tn().set("errors",b,2592E3,!0)}}
;function Y(){Ke.call(this);var a=this;this.m=!1;this.i=Qe();this.i.Ia("networkstatus-online",function(){if(a.m&&U("offline_error_handling")){var b=Tn().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new jk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;$i(d)}Tn().set("errors",{},2592E3,!0)}}})}
v(Y,Ke);function Vn(){if(!Y.h){var a=C("yt.networkStatusManager.instance")||new Y;B("yt.networkStatusManager.instance",a);Y.h=a}return Y.h}
q=Y.prototype;q.ca=function(){return this.i.ca()};
q.Ka=function(a){this.i.i=a};
q.Tc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.Oc=function(){this.m=!0};
q.Ia=function(a,b){return this.i.Ia(a,b)};
q.Cb=function(a){a=Oe(this.i,a);a.then(function(b){U("use_cfr_monitor")&&Rn().requestComplete("generate_204",b)});
return a};
Y.prototype.sendNetworkCheckRequest=Y.prototype.Cb;Y.prototype.listen=Y.prototype.Ia;Y.prototype.enableErrorFlushing=Y.prototype.Oc;Y.prototype.getWindowStatus=Y.prototype.Tc;Y.prototype.networkStatusHint=Y.prototype.Ka;Y.prototype.isNetworkAvailable=Y.prototype.ca;Y.getInstance=Vn;function Wn(a){a=void 0===a?{}:a;Ke.call(this);var b=this;this.i=this.H=0;this.m=Vn();var c=C("yt.networkStatusManager.instance.listen").bind(this.m);c&&(a.Bb?(this.Bb=a.Bb,c("networkstatus-online",function(){Xn(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Xn(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Le(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Le(b,"publicytnetworkstatus-offline")})))}
v(Wn,Ke);Wn.prototype.ca=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.m)():!0};
Wn.prototype.Ka=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.m);b&&b(a)};
Wn.prototype.Cb=function(a){var b=this,c;return x(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.m);return U("skip_network_check_if_cfr")&&Rn().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ka((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function Xn(a,b){a.Bb?a.i?(Re.Pa(a.H),a.H=Re.ja(function(){a.s!==b&&(Le(a,b),a.s=b,a.i=X())},a.Bb-(X()-a.i))):(Le(a,b),a.s=b,a.i=X()):Le(a,b)}
;var Yn;function Zn(){var a=nn.call;Yn||(Yn=new Wn({Od:!0,Nd:!0}));a.call(nn,this,{O:{Lc:Gn,Qa:Fn,ec:Cn,dd:Dn,Sb:En,set:An},R:Yn,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;aj(new jk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else $i(b)},
Sa:aj,wa:$n,now:X,Dc:Un,ha:qk(),Rb:"publicytnetworkstatus-online",Qb:"publicytnetworkstatus-offline",vb:!0,tb:.1,Ab:cj("potential_esf_error_limit",10),J:U,gb:!(kk()&&"www.youtube-nocookie.com"!==Zb(document.location.toString()))});this.j=new Rf;U("networkless_immediately_drop_all_requests")&&Hn();xm("LogsDatabaseV2")}
v(Zn,nn);function ao(){var a=C("yt.networklessRequestController.instance");a||(a=new Zn,B("yt.networklessRequestController.instance",a),U("networkless_logging")&&pm().then(function(b){a.I=b;pn(a);a.j.resolve();a.vb&&Math.random()<=a.tb&&a.I&&Ln(a.I);U("networkless_immediately_drop_sw_health_store")&&bo(a)}));
return a}
Zn.prototype.writeThenSend=function(a,b){b||(b={});kk()||(this.h=!1);nn.prototype.writeThenSend.call(this,a,b)};
Zn.prototype.sendThenWrite=function(a,b,c){b||(b={});kk()||(this.h=!1);nn.prototype.sendThenWrite.call(this,a,b,c)};
Zn.prototype.sendAndWrite=function(a,b){b||(b={});kk()||(this.h=!1);nn.prototype.sendAndWrite.call(this,a,b)};
Zn.prototype.awaitInitialization=function(){return this.j.promise};
function bo(a){var b;x(function(c){if(!a.I)throw b=Lk("clearSWHealthLogsDb"),b;return c.return(Mn(a.I).catch(function(d){a.handleError(d)}))})}
function $n(a,b,c){U("use_cfr_monitor")&&co(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(X())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Kj(a,void 0,"POST",e);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Kj(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new $a({url:a});if(g.j&&g.i||
g.m){var h=Yb(a.match(Xb)[5]||null);var k=!(!h||!h.endsWith("/aclk")||"1"!==dc(a,"ri"));break b}}catch(m){}k=!1}if(k){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var l=!0;break b}}catch(m){}l=!1}c=l?!0:!1}else c=!1;c||Pn(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),en(a,b.postBody,b,Hj)):en(a,JSON.stringify(b.postParams),b,Pj):Hj(a,b)}
function co(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Rn().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Rn().requestComplete(a,!0);d(e,f)}}
;var eo=z.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};B("ytNetworklessLoggingInitializationOptions",eo);function fo(a){var b=this;this.config_=null;a?this.config_=a:Lm()&&(this.config_=Mm());nk(function(){ln(b)},5E3)}
fo.prototype.isReady=function(){!this.config_&&Lm()&&(this.config_=Mm());return!!this.config_};
function mn(a,b,c,d){function e(y){y=void 0===y?!1:y;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=jn(b,c,l,k)),A)){var I=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(Q,ya){kn(A);I(Q,ya)};
c.onFetchSuccess=function(Q,ya){kn(A);O(Q,ya)}}try{if(y&&d.retry&&!d.pc.bypassNetworkless)g.method="POST",d.pc.writeThenSend?ao().writeThenSend(p,g):ao().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var T=g.postBody;"string"!==typeof T&&(T=JSON.stringify(g.postBody));en(p,T,g,Hj)}else en(p,JSON.stringify(g.postParams),g,Pj);else U("web_all_payloads_via_jspb")?Hj(p,g):Pj(p,g)}catch(Q){if("InvalidAccessError"==Q.name)A&&(kn(A),A=0),aj(Error("An extension is blocking network request."));else throw Q;}A&&nk(function(){ln(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&aj(new jk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new jk("innertube xhrclient not ready",b,c,d);$i(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,A){if(d.onError)d.onError(A)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Zc)&&(h=f);var k=a.config_.bd||!1,l=Vm(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Xc+"/"+b,n={alt:"json"},r=a.config_.ad&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.Wc);var p=wj(""+h+m,n||{},!0);C("ytNetworklessLoggingInitializationOptions")&&
eo.isNwlInitialized?nm().then(function(y){e(y)}):e(!1)}
;function go(a){this.X=a;this.h=null;this.s=0;this.N=null;this.H=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.m=0;this.Eb=mj(window,"mousemove",Xa(this.Fb,this));this.Gb=oj(Xa(this.Fa,this),25)}
D(go,ie);go.prototype.Fb=function(a){void 0===a.h&&hj(a);var b=a.h;void 0===a.i&&hj(a);this.h=new yd(b,a.i)};
go.prototype.Fa=function(){if(this.h){var a=X();if(0!=this.s){var b=this.N,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.s);this.i[this.m]=.5<Math.abs((d-this.H)/this.H)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.X();this.H=d}this.s=a;this.N=this.h;this.m=(this.m+1)%4}};
go.prototype.Ra=function(){window.clearInterval(this.Gb);kj(this.Eb)};var ho=new Set([174,173,175]),io={};
function jo(){var a={},b=void 0===a.kd?!1:a.kd;a=void 0===a.Pc?!0:a.Pc;if(null==C("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&ko();mj(document,"keydown",ko);mj(document,"keyup",ko);mj(document,"mousedown",ko);mj(document,"mouseup",ko);b?mj(window,"touchmove",function(){lo("touchmove",200)},{passive:!0}):(mj(window,"resize",function(){lo("resize",200)}),a&&mj(window,"scroll",function(){lo("scroll",200)}));
new go(function(){lo("mouse",100)});
mj(document,"touchstart",ko,{passive:!0});mj(document,"touchend",ko,{passive:!0})}}
function lo(a,b){io[a]||(io[a]=!0,Re.ja(function(){ko();io[a]=!1},b))}
function ko(a){var b;if(null!=(b=C("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!ho.has(null==a?void 0:a.keyCode))null==C("_lact",window)&&jo(),a=Date.now(),B("_lact",a,window),-1==C("_fact",window)&&B("_fact",a,window),(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function mo(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var no=z.ytPubsubPubsubInstance||new K,oo=z.ytPubsubPubsubSubscribedKeys||{},po=z.ytPubsubPubsubTopicToKeys||{},qo=z.ytPubsubPubsubIsSynchronous||{};K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.mb;K.prototype.publish=K.prototype.Za;K.prototype.clear=K.prototype.clear;B("ytPubsubPubsubInstance",no);B("ytPubsubPubsubTopicToKeys",po);B("ytPubsubPubsubIsSynchronous",qo);B("ytPubsubPubsubSubscribedKeys",oo);var ro=Symbol("injectionDeps");function so(){this.key=Im}
function to(){this.i=new Map;this.h=new Map}
to.prototype.resolve=function(a){return a instanceof so?uo(this,a.key,[],!0):uo(this,a,[])};
function uo(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.qd)var e=d.qd;else if(d.pd)e=d[ro]?vo(a,d[ro],c):[],e=d.pd.apply(d,ia(e));else if(d.od){e=d.od;var f=e[ro]?vo(a,e[ro],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ud||a.h.set(b,e);return e}
function vo(a,b,c){return b?b.map(function(d){return d instanceof so?uo(a,d.key,c,!0):uo(a,d,c)}):[]}
;var wo;function xo(){this.store={};this.h={}}
xo.prototype.storePayload=function(a,b){a=yo(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
xo.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=zo(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ia(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ia(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ia(this.smartExtractMatchingEntries(a))));return c};
xo.prototype.extractMatchingEntries=function(a){a=zo(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]]);return b};
xo.prototype.getSequenceCount=function(a){a=zo(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function zo(a,b){var c=yo(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&yo(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Ao(b.auth,g[0])){var h=b.isJspb;Ao(void 0===h?"undefined":h?"true":"false",g[1])&&Ao(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Ao(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Ao(a,b){return void 0===a||"undefined"===a?!0:a===b}
xo.prototype.getSequenceCount=xo.prototype.getSequenceCount;xo.prototype.extractMatchingEntries=xo.prototype.extractMatchingEntries;xo.prototype.smartExtractMatchingEntries=xo.prototype.smartExtractMatchingEntries;xo.prototype.storePayload=xo.prototype.storePayload;function yo(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var Bo=cj("initial_gel_batch_timeout",2E3),Co=cj("gel_queue_timeout_max_ms",6E4),Do=Math.pow(2,16)-1,Eo=void 0;function Fo(){this.j=this.h=this.i=0}
var Go=new Fo,Ho=new Fo,Io,Jo=!0,Ko=z.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Ko);var Lo=z.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Lo);var Mo={};function No(){var a=C("yt.logging.ims");a||(a=new xo,B("yt.logging.ims",a));return a}
function Oo(a,b){if("log_event"===a.endpoint){Po(a);var c=Qo(a);Mo[c]=!0;var d={cttAuthInfo:c,isJspb:!1};No().storePayload(d,a.payload);Ro(b,c,!1,d)}}
function So(a,b){if("log_event"===a.endpoint){Po(void 0,a);var c=Qo(a,!0);Mo[c]=!0;var d={cttAuthInfo:c,isJspb:!0};No().storePayload(d,a.payload.toJSON());Ro(b,c,!0,d)}}
function Ro(a,b,c,d){c=void 0===c?!1:c;a&&(Eo=new a);a=cj("tvhtml5_logging_max_batch_ads_fork")||cj("web_logging_max_batch")||100;var e=X(),f=c?Ho.j:Go.j,g=0;d&&(g=No().getSequenceCount(d));g>=a?Io||(Io=To(function(){Uo({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,c);Io=void 0},0)):10<=e-f&&(Vo(c),c?Ho.j=e:Go.j=e)}
function Wo(a,b){if("log_event"===a.endpoint){Po(a);var c=Qo(a),d=new Map;d.set(c,[a.payload]);b&&(Eo=new b);return new Sf(function(e,f){Eo&&Eo.isReady()?Xo(d,Eo,e,f,{bypassNetworkless:!0},!0):e()})}}
function Yo(a,b){if("log_event"===a.endpoint){Po(void 0,a);var c=Qo(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Eo=new b);return new Sf(function(e){Eo&&Eo.isReady()?Zo(d,Eo,e,{bypassNetworkless:!0},!0):e()})}}
function Qo(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Ni;c.videoId?bd(d,1,md,c.videoId):c.playlistId&&bd(d,2,md,c.playlistId);Lo[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Ko[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Uo(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Sf(function(d,e){c?($o(Ho.i),$o(Ho.h),Ho.h=0):($o(Go.i),$o(Go.h),Go.h=0);if(Eo&&Eo.isReady()){var f=a,g=c,h=Eo;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=No().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),Zo(k,h,d,f)):(k=No().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,k),Xo(l,h,d,e,f));else if(g){e=u(Object.keys(Mo));for(g=e.next();!g.done;g=e.next())l=g.value,g=No().extractMatchingEntries({isJspb:!0,
cttAuthInfo:l}),0<g.length&&k.set(l,g),delete Mo[l];Zo(k,h,d,f)}else{k=u(Object.keys(Mo));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=No().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<m.length&&l.set(g,m);delete Mo[g]}Xo(l,h,d,e,f)}}else Vo(c),d()})}
function Vo(a){a=void 0===a?!1:a;if(U("web_gel_timeout_cap")&&(!a&&!Go.h||a&&!Ho.h)){var b=To(function(){Uo({writeThenSend:!0},void 0,a)},Co);
a?Ho.h=b:Go.h=b}$o(a?Ho.i:Go.i);b=S("LOGGING_BATCH_TIMEOUT",cj("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Jo&&(b=Bo);b=To(function(){Uo({writeThenSend:!0},void 0,a)},b);
a?Ho.i=b:Go.i=b}
function Xo(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(X()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={nb:k.nb,Ea:k.Ea,bb:k.bb,pb:k.pb,ob:k.ob},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.Ea=nb({context:Nm(b.config_||Mm())});if(!Oa(m)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}k.Ea.events=m;(m=Ko[l])&&ap(k.Ea,l,m);delete Ko[l];k.bb="visitorOnlyApprovedKey"===l;bp(k.Ea,g,k.bb);cp(e);k.pb=function(n){U("update_log_event_config")&&Re.ja(function(){return x(function(r){return w(r,
dp(n),0)})});
h--;h||c()};
k.nb=0;k.ob=function(n){return function(){n.nb++;if(e.bypassNetworkless&&1===n.nb)try{mn(b,"log_event",n.Ea,ep({writeThenSend:!0},n.bb,n.pb,n.ob,f)),Jo=!1}catch(r){$i(r),d()}h--;h||c()}}(k);
try{mn(b,"log_event",k.Ea,ep(e,k.bb,k.pb,k.ob,f)),Jo=!1}catch(n){$i(n),d()}}}
function Zo(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(X()),g=a.size,h=new Map([].concat(ia(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Oi;var n=Um(b.config_||Mm());H(k,ti,1,n);m=m?fp(m):[];m=u(m);for(n=m.next();!n.done;n=m.next())jd(k,3,Ki,n.value);(m=Lo[l])&&gp(k,l,m);delete Lo[l];l="visitorOnlyApprovedKey"===l;hp(k,f,l);cp(d);m={startTime:X(),ticks:{},infos:{}};k=wd(k);m.ticks.geljspc=X();U("log_jspb_serialize_latency")&&Xm("gel_jspb_serialize",
m,{sampleRate:.1});l=ep(d,l,function(r){U("update_log_event_config")&&Re.ja(function(){return x(function(p){return w(p,dp(r),0)})});
g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;mn(b,"log_event","",l);Jo=!1}}
function cp(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function ep(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,pc:a,dangerousLogToVisitorSession:b,Md:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};ip()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));return a}
function bp(a,b,c){ip()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&(c=jp(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function hp(a,b,c){ip()||G(a,2,b);if(!c&&(b=S("EVENT_ID"))){c=jp();var d=new Mi;G(d,1,b);G(d,2,c);H(a,Mi,5,d)}}
function jp(){var a=S("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Do/2));a++;a>Do&&(a=1);Ui("BATCH_CLIENT_COUNTER",a);return a}
function ap(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function gp(a,b,c){if(ld(c,1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,Ni,4,c);a=gd(a,ti,1)||new ti;c=gd(a,ri,3)||new ri;var e=new qi;G(e,2,b);G(e,1,d);jd(c,12,qi,e);H(a,ri,3,c)}
function fp(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Ki(a[c]))}catch(d){$i(new jk("Transport failed to deserialize "+String(a[c])))}return b}
function Po(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function ip(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function To(a,b){return U("transport_use_scheduler")?nk(a,b):nj(a,b)}
function $o(a){U("transport_use_scheduler")?Re.Pa(a):window.clearTimeout(a)}
function dp(a){var b,c,d,e,f,g,h,k,l,m;return x(function(n){if(1==n.h){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[di.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[ci.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;wo||(wo=new to);r=wo;return(m=r.resolve.call(r,new so))?g?e?w(n,Jm(m,g,e),2):w(n,Jm(m,g),2):n.D(2):n.return()}return l?h?w(n,Km(m,l,h),0):w(n,Km(m,l),0):n.D(0)})}
;var kp=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",kp);function lp(a){Uo(void 0,void 0,void 0===a?!1:a)}
function mp(a){kp[a]=a in kp?kp[a]+1:0;return kp[a]}
;var np=[];
function op(a,b){var c=void 0===c?{}:c;var d=fo;S("ytLoggingEventsDefaultDisabled",!1)&&fo===fo&&(d=null);if(U("web_all_payloads_via_jspb"))c.timestamp||(c.timestamp=X()),np.push({Sd:a,payload:b,options:c});else{c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||X());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;U("enable_unknown_lact_fix_on_html5")&&jo();a=mo();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};U("log_sequence_info_on_gel_web")&&c.sequenceGroup&&(a=e.context,
b=c.sequenceGroup,b={index:mp(b),groupKey:b},a.sequence=b,c.endOfSequence&&delete kp[c.sequenceGroup]);(c.sendIsolatedPayload?Wo:Oo)({endpoint:"log_event",payload:e,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}}
;var pp=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",pp);function qp(a){var b=void 0;b=void 0===b?{}:b;var c=!1;S("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:fo;b=void 0===b?{}:b;var d=Math.round(b.timestamp||X());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=mo();d=new Ji;G(d,1,b.timestamp||!isFinite(e)?-1:e);if(U("log_sequence_info_on_gel_web")&&b.sequenceGroup){e=b.sequenceGroup;var f=mp(e),g=new Ii;G(g,2,f);G(g,1,e);H(d,Ii,3,g);b.endOfSequence&&delete pp[b.sequenceGroup]}H(a,Ji,33,d);(b.sendIsolatedPayload?Yo:So)({endpoint:"log_event",payload:a,
cttAuthInfo:b.cttAuthInfo,dangerousLogToVisitorSession:b.dangerousLogToVisitorSession},c)}
;var rp=new Set,sp=0,tp=0,up=0,vp=[],wp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function xp(a){try{rp.add(a.message)}catch(b){}sp++}
function yp(){for(var a=u(wp),b=a.next();!b.done;b=a.next()){var c=Nb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function zp(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=u(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=Vi())for(b=u(Object.keys(c)),d=b.next();!d.done;d=b.next())d=
d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Hj(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Ap(){var a;return x(function(b){return(a=lf())?b.return(a.then(function(c){c=wd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Ec(d,3)})):b.return(Promise.resolve(null))})}
;var Bp={};function Cp(a){return Bp[a]||(Bp[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Dp={},Ep=[],ig=new K,Fp={};function Gp(){for(var a=u(Ep),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Hp(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Cp(b)]:a.getAttribute("data-"+b):null;return c}
function Ip(a){ig.Za.apply(ig,arguments)}
;var Jp=window;function Kp(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Z(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Lp(a,b,c){if(Jp.yt_embedsEnableHouseBrandAndYtCoexistence){Mp||(Mp={},Np=new Set,mj(window,"message",function(e){Op(a,e)}));
var d=String(Z(a,"host"));Mp[c]={rd:b,Hc:d};Np.add(d)}else Pp||(Pp={},mj(window,"message",function(e){return Op(a,e)})),Pp[c]=b}
function Op(a,b){if(Jp.yt_embedsEnableHouseBrandAndYtCoexistence){if(Np.has(b.origin)){try{var c=JSON.parse(b.data)}catch(e){return}var d=Mp[c.id];d&&b.origin===d.Hc&&(b=d.rd,Qp(b),b.Hb(c))}}else if(b.origin===Z(a,"host")){try{d=JSON.parse(b.data)}catch(e){return}if(c=Pp[d.id])Qp(c),c.Hb(d)}}
var Pp=null,Mp=null,Np=null;var Rp=window;
function Sp(a,b,c){this.v=this.h=this.i=null;this.j=0;this.H=!1;this.s=[];this.m=null;this.X={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.N=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?$b(a.src):"https://www.youtube.com"),this.i=new Kp(b),c||(b=Tp(this,a),this.v=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Qa(this.h)),Dp[this.h.id]=this,window.postMessage){this.m=
new K;Up(this);b=Z(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Fp)Fp.hasOwnProperty(e)&&Vp(this,e)}}
function Qp(a){a.H=!0;a.H&&(db(a.s,a.sendMessage,a),a.s.length=0)}
q=Sp.prototype;q.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
q.getIframe=function(){return this.h};
q.Hb=function(a){Wp(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.m.subscribe(a,c);Xp(this,a);return this};
function Vp(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.N===b[0]&&Xp(a,c)}}
q.destroy=function(){this.h&&this.h.id&&(Dp[this.h.id]=null);var a=this.m;a&&"function"==typeof a.dispose&&a.dispose();if(this.v){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.v,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);a=this.id;Jp.yt_embedsEnableHouseBrandAndYtCoexistence?Mp&&(Mp[a]=null):Pp&&(Pp[a]=null);this.i=null;a=this.h;for(var c in lb)lb[c][0]==a&&kj(c);this.v=this.h=null};
q.Zb=function(){return{}};
function Yp(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.s.push(b)}
function Wp(a,b,c){a.m.j||(c={target:a,data:c},a.m.Za(b,c),Ip(a.N+"."+b,c))}
function Tp(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Z(a.i,"title"));(b=Z(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Z(a.i,"height"))&&
c.setAttribute("height",b.toString());var g=a.Zb();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&db(["debugjs","debugcss"],function(k){var l=dc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Z(a.i,"host")+("/embed/"+Z(a.i,"videoId"))+"?"+bc(g);Rp.yt_embedsEnableUaChProbe?Ap().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Md(l.href).toString();Id(c,Nd(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Rp.yt_embedsEnableIframeSrcWithIntent?(Id(c,Nd(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
q.sc=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function Up(a){Lp(a.i,a,a.id);a.j=oj(a.sc.bind(a),250);mj(a.h,"load",function(){window.clearInterval(a.j);a.j=oj(a.sc.bind(a),250)})}
function Xp(a,b){a.X[b]||(a.X[b]=!0,Yp(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[$b(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var d=0;d<c.length;d++)try{this.h.contentWindow.postMessage(b,c[d])}catch(gc){if(gc.name&&"SyntaxError"===gc.name){if(!(gc.message&&0<gc.message.indexOf("target origin ''"))){var e=void 0,f=gc;e=void 0===e?{}:e;e.name=S("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=S("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(U("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=sp)){var m=void 0,n=void 0,r=f,p=e,y=Cd(r),A=y.message||"Unknown Error",
I=y.name||"UnknownError",O=y.stack||r.i||"Not available";if(O.startsWith(I+": "+A)){var T=O.split("\n");T.shift();O=T.join("\n")}var Q=y.lineNumber||"Not available",ya=y.fileName||"Not available",Mc=O,Ia=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var za=0;za<r.args.length&&!(Ia=Zj(r.args[za],"params."+za,p,Ia),500<=Ia);za++);else if(r.hasOwnProperty("params")&&r.params){var da=r.params;if("object"===typeof r.params)for(n in da){if(da[n]){var ja="params."+n,ka=bk(da[n]);p[ja]=ka;Ia+=
ja.length+ka.length;if(500<Ia)break}}else p.params=bk(da)}if(vp.length)for(var ca=0;ca<vp.length&&!(Ia=Zj(vp[ca],"params.context."+ca,p,Ia),500<=Ia);ca++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var V={message:A,name:I,lineNumber:Q,fileName:ya,stack:Mc,params:p,sampleWeight:1},gl=Number(r.columnNumber);isNaN(gl)||(V.lineNumber=V.lineNumber+":"+gl);if("IGNORED"===r.level)m=0;else a:{for(var hl=Vj(),il=u(hl.Aa),Lg=il.next();!Lg.done;Lg=il.next()){var jl=
Lg.value;if(V.message&&V.message.match(jl.Pd)){m=jl.weight;break a}}for(var kl=u(hl.xa),Mg=kl.next();!Mg.done;Mg=kl.next()){var ll=Mg.value;if(ll.Kc(V)){m=ll.weight;break a}}m=1}V.sampleWeight=m;for(var ml=u(Qj),Ng=ml.next();!Ng.done;Ng=ml.next()){var Og=Ng.value;if(Og.zb[V.name])for(var nl=u(Og.zb[V.name]),Pg=nl.next();!Pg.done;Pg=nl.next()){var ol=Pg.value,ne=V.message.match(ol.regexp);if(ne){V.params["params.error.original"]=ne[0];for(var Qg=ol.groups,pl={},hc=0;hc<Qg.length;hc++)pl[Qg[hc]]=ne[hc+
1],V.params["params.error."+Qg[hc]]=ne[hc+1];V.message=Og.Ob(pl);break}}}V.params||(V.params={});var ql=Vj();V.params["params.errorServiceSignature"]="msg="+ql.Aa.length+"&cb="+ql.xa.length;V.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(V.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));sb("sample").constructor!==rb&&(V.params["params.fconst"]="true");var dd=V;window.yterr&&"function"===typeof window.yterr&&window.yterr(dd);
if(0!==dd.sampleWeight&&!rp.has(dd.message))if(h&&U("web_enable_error_204")){var rl=dd;zp(void 0===g?"ERROR":g,rl);xp(rl)}else{var Rg=void 0,Sg=void 0,sl=void 0,tl=void 0,Tg=void 0,M=dd,Bb=g;Bb=void 0===Bb?"ERROR":Bb;if("ERROR"===Bb){Wj.Za("handleError",M);if(U("record_app_crashed_web")&&0===up&&1===M.sampleWeight)if(up++,U("errors_via_jspb")){var dq=new Hi;Tg=G(dq,1,1);if(!U("report_client_error_with_app_crash_ks")){var eq=new Fi,fq=new Ei,gq=new Di,hq=new Ci;var iq=G(hq,1,M.message);var jq=H(gq,
Ci,3,iq);tl=H(fq,Di,5,jq);sl=H(eq,Ei,9,tl);H(Tg,Fi,4,sl)}var ul=new Ki;id(ul,Hi,20,Li,Tg);qp(ul)}else{var vl={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};U("report_client_error_with_app_crash_ks")||(vl.systemHealth={crashData:{clientError:{logMessage:{message:M.message}}}});op("appCrashed",vl)}tp++}else"WARNING"===Bb&&Wj.Za("handleWarning",M);if(U("kevlar_gel_error_routing"))a:{var ed=Bb;if(U("errors_via_jspb")){if(yp())Sg=void 0;else{var ic=new zi;G(ic,1,M.stack);M.fileName&&G(ic,4,M.fileName);var Ua=
M.lineNumber&&M.lineNumber.split?M.lineNumber.split(":"):[];if(0!==Ua.length)if(1===Ua.length&&!isNaN(Number(Ua[0]))){var kq=ic,wl=Number(Ua[0]);Na(wl);G(kq,2,wl)}else if(2===Ua.length&&!isNaN(Number(Ua[0]))&&!isNaN(Number(Ua[1]))){var lq=ic,xl=Number(Ua[0]);Na(xl);G(lq,2,xl);var mq=ic,yl=Number(Ua[1]);Na(yl);G(mq,3,yl)}var Cb=new Ci;G(Cb,1,M.message);G(Cb,3,M.name);var nq=Cb,zl=M.sampleWeight;Na(zl);G(nq,6,zl);"ERROR"===ed?G(Cb,2,2):"WARNING"===ed?G(Cb,2,1):G(Cb,2,0);var Ug=new Ai;G(Ug,1,!0);id(Ug,
zi,3,Bi,ic);var Db=new xi;G(Db,3,window.location.href);for(var Al=S("FEXP_EXPERIMENTS",[]),Vg=0;Vg<Al.length;Vg++){var Bl=Db,oq=Al[Vg];Tc(Bl);ad(Bl,5,2,!1,!1).push(oq)}var Wg=Vi();if(!Wi()&&Wg)for(var Cl=u(Object.keys(Wg)),Eb=Cl.next();!Eb.done;Eb=Cl.next()){var Dl=Eb.value,Xg=new wi;G(Xg,1,Dl);G(Xg,2,String(Wg[Dl]));jd(Db,4,wi,Xg)}var Yg=M.params;if(Yg){var El=u(Object.keys(Yg));for(Eb=El.next();!Eb.done;Eb=El.next()){var Fl=Eb.value,Zg=new wi;G(Zg,1,"client."+Fl);G(Zg,2,String(Yg[Fl]));jd(Db,4,
wi,Zg)}}var Gl=S("SERVER_NAME"),Hl=S("SERVER_VERSION");if(Gl&&Hl){var $g=new wi;G($g,1,"server.name");G($g,2,Gl);jd(Db,4,wi,$g);var ah=new wi;G(ah,1,"server.version");G(ah,2,Hl);jd(Db,4,wi,ah)}var oe=new Di;H(oe,xi,1,Db);H(oe,Ai,2,Ug);H(oe,Ci,3,Cb);Sg=oe}var Il=Sg;if(!Il)break a;var Jl=new Ki;id(Jl,Di,163,Li,Il);qp(Jl)}else{if(yp())Rg=void 0;else{var fd={stackTrace:M.stack};M.fileName&&(fd.filename=M.fileName);var Va=M.lineNumber&&M.lineNumber.split?M.lineNumber.split(":"):[];0!==Va.length&&(1!==
Va.length||isNaN(Number(Va[0]))?2!==Va.length||isNaN(Number(Va[0]))||isNaN(Number(Va[1]))||(fd.lineNumber=Number(Va[0]),fd.columnNumber=Number(Va[1])):fd.lineNumber=Number(Va[0]));var bh={level:"ERROR_LEVEL_UNKNOWN",message:M.message,errorClassName:M.name,sampleWeight:M.sampleWeight};"ERROR"===ed?bh.level="ERROR_LEVEL_ERROR":"WARNING"===ed&&(bh.level="ERROR_LEVEL_WARNNING");var pq={isObfuscated:!0,browserStackInfo:fd},jc={pageUrl:window.location.href,kvPairs:[]};S("FEXP_EXPERIMENTS")&&(jc.experimentIds=
S("FEXP_EXPERIMENTS"));var ch=Vi();if(!Wi()&&ch)for(var Kl=u(Object.keys(ch)),Fb=Kl.next();!Fb.done;Fb=Kl.next()){var Ll=Fb.value;jc.kvPairs.push({key:Ll,value:String(ch[Ll])})}var dh=M.params;if(dh){var Ml=u(Object.keys(dh));for(Fb=Ml.next();!Fb.done;Fb=Ml.next()){var Nl=Fb.value;jc.kvPairs.push({key:"client."+Nl,value:String(dh[Nl])})}}var Ol=S("SERVER_NAME"),Pl=S("SERVER_VERSION");Ol&&Pl&&(jc.kvPairs.push({key:"server.name",value:Ol}),jc.kvPairs.push({key:"server.version",value:Pl}));Rg={errorMetadata:jc,
stackTrace:pq,logMessage:bh}}var Ql=Rg;if(!Ql)break a;op("clientError",Ql)}if("ERROR"===ed||U("errors_flush_gel_always_killswitch"))b:{if(U("web_fp_via_jspb")&&(lp(!0),!U("web_fp_via_jspb_and_json")))break b;lp()}}U("suppress_error_204_logging")||zp(Bb,M);xp(M)}}}}}else throw gc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Zp(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function $p(a){return 0===a.search("get")||0===a.search("is")}
;function aq(a,b){Sp.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ma={};this.playerInfo={};this.videoTitle=""}
v(aq,Sp);q=aq.prototype;q.Zb=function(){var a=Z(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Z(this.i,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.Hb=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.ma[c]=a[c]);break;case "infoDelivery":bq(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.j),this.playerInfo={},this.ma={},cq(this,a.apiInterface),bq(this,a));break;default:Wp(this,b,a)}};
function bq(a,b){if(Pa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.h.setAttribute("title",b))):(a.videoTitle="",a.h.setAttribute("title","YouTube "+Z(a.i,"title"))))}}
function cq(a,b){db(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Zp(c)?this[c]=function(){this.playerInfo={};
this.ma={};Yp(this,c,arguments);return this}:$p(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Yp(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Z(this.i,"host")+("/embed/"+Z(this.i,"videoId")),b=Number(Z(this.i,"width")),c=Number(Z(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Wb(a);d=Wb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.ma.namespaces?a?this.ma[a]?this.ma[a].options||[]:[]:this.ma.namespaces||[]:[]};
q.getOption=function(a,b){if(this.ma.namespaces&&a&&b&&this.ma[a])return this.ma[a][b]};
function qq(a){if("iframe"!==a.tagName.toLowerCase()){var b=Hp(a,"videoid");b&&(b={videoId:b,width:Hp(a,"width"),height:Hp(a,"height")},new aq(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Dp[a]});
B("YT.scan",Gp);B("YT.subscribe",function(a,b,c){ig.subscribe(a,b,c);Fp[a]=!0;for(var d in Dp)Dp.hasOwnProperty(d)&&Vp(Dp[d],a)});
B("YT.unsubscribe",function(a,b,c){hg(a,b,c)});
B("YT.Player",aq);Sp.prototype.destroy=Sp.prototype.destroy;Sp.prototype.setSize=Sp.prototype.setSize;Sp.prototype.getIframe=Sp.prototype.getIframe;Sp.prototype.addEventListener=Sp.prototype.addEventListener;aq.prototype.getVideoEmbedCode=aq.prototype.getVideoEmbedCode;aq.prototype.getOptions=aq.prototype.getOptions;aq.prototype.getOption=aq.prototype.getOption;
Ep.push(function(a){var b=a;b||(b=document);a=hb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=hb(b);db(gb(a,b),qq)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Gp();var rq=z.onYTReady;rq&&rq();var sq=z.onYouTubeIframeAPIReady;sq&&sq();var tq=z.onYouTubePlayerAPIReady;tq&&tq();}).call(this);
