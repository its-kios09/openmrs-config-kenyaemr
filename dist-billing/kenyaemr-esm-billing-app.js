var _kenyaemr_esm_billing_app;(()=>{"use strict";var e,r,t,n,a,o,i,l,u,s,f,p,d,c,h,m={7485:(e,r,t)=>{var n={"./start":()=>Promise.all([t.e(255),t.e(990),t.e(206),t.e(325),t.e(809)]).then((()=>()=>t(4809)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},v={};function g(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={id:e,loaded:!1,exports:{}};return m[e].call(t.exports,t,t.exports,g),t.loaded=!0,t.exports}g.m=m,g.c=v,g.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return g.d(r,{a:r}),r},g.d=(e,r)=>{for(var t in r)g.o(r,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((r,t)=>(g.f[t](e,r),r)),[])),g.u=e=>e+".js",g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@kenyaemr/esm-billing-app:",g.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,g.nc&&i.setAttribute("nonce",g.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var p=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{g.S={};var e={},r={};g.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];g.o(g.S,t)||(g.S[t]={});var o=g.S[t],i="@kenyaemr/esm-billing-app",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@openmrs/esm-framework","5.7.3-pre.2113",(()=>Promise.all([g.e(130),g.e(206),g.e(447)]).then((()=>()=>g(130))))),l("react-i18next","11.18.6",(()=>Promise.all([g.e(206),g.e(589)]).then((()=>()=>g(9589))))),l("react-router-dom","6.4.3",(()=>Promise.all([g.e(591),g.e(206)]).then((()=>()=>g(6591))))),l("react","18.2.0",(()=>g.e(784).then((()=>()=>g(2784))))),l("swr/_internal","2.2.4",(()=>Promise.all([g.e(729),g.e(206)]).then((()=>()=>g(4729))))),l("swr/immutable","2.2.4",(()=>Promise.all([g.e(255),g.e(206),g.e(325),g.e(152)]).then((()=>()=>g(2303)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var r=g.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,f,p=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!u||("u"==p?l>n&&!a:""==p!=a);if("u"==f){if(!u||"u"!=p)return!1}else if(u)if(p==f)if(l<=n){if(s!=e[l])return!1}else{if(a?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=p&&"n"!=p){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||f<p!=a)return!1;u=!1}else"s"!=p&&"n"!=p&&(u=!1,l--)}}var d=[],c=d.pop.bind(d);for(i=1;i<e.length;i++){var h=e[i];d.push(1==h?c()|c():2==h?c()&c():h?o(h,r):!c())}return!!c()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",u=(e,r,t,n)=>{var a=i(e,t);return o(n,a)||s(l(e,t,a,n)),f(e[t][a])},s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),p=(e=>function(r,t,n,a){var o=g.I(r);return o&&o.then?o.then(e.bind(e,r,g.S[r],t,n,a)):e(0,g.S[r],t,n,a)})(((e,r,t,n,a)=>r&&g.o(r,t)?u(r,0,t,n):a())),d={},c={5206:()=>p("default","react",[1,18,1,0],(()=>g.e(784).then((()=>()=>g(2784))))),3325:()=>p("default","swr/_internal",[1,2],(()=>g.e(729).then((()=>()=>g(4729))))),2870:()=>p("default","@openmrs/esm-framework",[1,5],(()=>g.e(130).then((()=>()=>g(130))))),4924:()=>p("default","react-i18next",[1,11],(()=>g.e(949).then((()=>()=>g(9589))))),8744:()=>p("default","react-router-dom",[1,6],(()=>g.e(591).then((()=>()=>g(6591))))),9198:()=>p("default","swr/immutable",[1,2],(()=>g.e(303).then((()=>()=>g(2303)))))},h={206:[5206],325:[3325],809:[2870,4924,8744,9198]},g.f.consumes=(e,r)=>{g.o(h,e)&&h[e].forEach((e=>{if(g.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,g.m[e]=t=>{delete g.c[e],t.exports=r()}},n=r=>{delete d[e],g.m[e]=t=>{throw delete g.c[e],r}};try{var a=c[e]();a.then?r.push(d[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={887:0};g.f.j=(r,t)=>{var n=g.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(206|325)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=g.p+g.u(r),i=new Error;g.l(o,(t=>{if(g.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in i)g.o(i,n)&&(g.m[n]=i[n]);l&&l(g)}for(r&&r(t);u<o.length;u++)a=o[u],g.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=globalThis.webpackChunk_kenyaemr_esm_billing_app=globalThis.webpackChunk_kenyaemr_esm_billing_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),g.nc=void 0;var b=g(7485);_kenyaemr_esm_billing_app=b})();