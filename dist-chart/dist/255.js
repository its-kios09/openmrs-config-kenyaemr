/*! For license information please see 255.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[255],{452:(e,t,n)=>{var r=n(268),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useState,a=r.useEffect,u=r.useLayoutEffect,d=r.useDebugValue;function o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return u((function(){i.value=n,i.getSnapshot=t,o(i)&&c({inst:i})}),[e,n,t]),a((function(){return o(i)&&c({inst:i}),e((function(){o(i)&&c({inst:i})}))}),[e]),d(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},3100:(e,t,n)=>{e.exports=n(452)},3255:(e,t,n)=>{n.d(t,{J$:()=>d,JG:()=>s.mutate,ZP:()=>o});var r=n(268),i=n(3100),s=n(3325);const a=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((t=>{e.status="fulfilled",e.value=t}),(t=>{e.status="rejected",e.reason=t})),e)}),u={dedupe:!0},d=s.OBJECT.defineProperty(s.SWRConfig,"defaultValue",{value:s.defaultConfig}),o=(0,s.withArgs)(((e,t,n)=>{const{cache:d,compare:o,suspense:c,fallbackData:l,revalidateOnMount:f,revalidateIfStale:E,refreshInterval:g,refreshWhenHidden:v,refreshWhenOffline:h,keepPreviousData:p}=n,[R,S,U,_]=s.SWRGlobalState.get(d),[m,T]=(0,s.serialize)(e),V=(0,r.useRef)(!1),b=(0,r.useRef)(!1),C=(0,r.useRef)(m),w=(0,r.useRef)(t),y=(0,r.useRef)(n),L=()=>y.current,I=()=>L().isVisible()&&L().isOnline(),[O,k,D,A]=(0,s.createCacheHelper)(d,m),N=(0,r.useRef)({}).current,F=(0,s.isUndefined)(l)?n.fallback[m]:l,P=(e,t)=>{for(const n in N){const r=n;if("data"===r){if(!o(e[r],t[r])){if(!(0,s.isUndefined)(e[r]))return!1;if(!o(q,t[r]))return!1}}else if(t[r]!==e[r])return!1}return!0},j=(0,r.useMemo)((()=>{const e=!!m&&!!t&&((0,s.isUndefined)(f)?!L().isPaused()&&!c&&(!!(0,s.isUndefined)(E)||E):f),n=t=>{const n=(0,s.mergeObjects)(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=O(),i=A(),a=n(r),u=r===i?a:n(i);let d=a;return[()=>{const e=n(O());return P(e,d)?(d.data=e.data,d.isLoading=e.isLoading,d.isValidating=e.isValidating,d.error=e.error,d):(d=e,e)},()=>u]}),[d,m]),x=(0,i.useSyncExternalStore)((0,r.useCallback)((e=>D(m,((t,n)=>{P(n,t)||e()}))),[d,m]),j[0],j[1]),G=!V.current,M=R[m]&&R[m].length>0,W=x.data,J=(0,s.isUndefined)(W)?F:W,H=x.error,Y=(0,r.useRef)(J),q=p?(0,s.isUndefined)(W)?Y.current:W:J,z=!(M&&!(0,s.isUndefined)(H))&&(G&&!(0,s.isUndefined)(f)?f:!L().isPaused()&&(c?!(0,s.isUndefined)(J)&&E:(0,s.isUndefined)(J)||E)),B=!!(m&&t&&G&&z),Z=(0,s.isUndefined)(x.isValidating)?B:x.isValidating,$=(0,s.isUndefined)(x.isLoading)?B:x.isLoading,K=(0,r.useCallback)((async e=>{const t=w.current;if(!m||!t||b.current||L().isPaused())return!1;let r,i,a=!0;const u=e||{},d=!U[m]||!u.dedupe,c=()=>s.IS_REACT_LEGACY?!b.current&&m===C.current&&V.current:m===C.current,l={isValidating:!1,isLoading:!1},f=()=>{k(l)},E=()=>{const e=U[m];e&&e[1]===i&&delete U[m]},g={isValidating:!0};(0,s.isUndefined)(O().data)&&(g.isLoading=!0);try{if(d&&(k(g),n.loadingTimeout&&(0,s.isUndefined)(O().data)&&setTimeout((()=>{a&&c()&&L().onLoadingSlow(m,n)}),n.loadingTimeout),U[m]=[t(T),(0,s.getTimestamp)()]),[r,i]=U[m],r=await r,d&&setTimeout(E,n.dedupingInterval),!U[m]||U[m][1]!==i)return d&&c()&&L().onDiscarded(m),!1;l.error=s.UNDEFINED;const e=S[m];if(!(0,s.isUndefined)(e)&&(i<=e[0]||i<=e[1]||0===e[1]))return f(),d&&c()&&L().onDiscarded(m),!1;const u=O().data;l.data=o(u,r)?u:r,d&&c()&&L().onSuccess(r,m,n)}catch(e){E();const t=L(),{shouldRetryOnError:n}=t;t.isPaused()||(l.error=e,d&&c()&&(t.onError(e,m,t),(!0===n||(0,s.isFunction)(n)&&n(e))&&I()&&t.onErrorRetry(e,m,t,(e=>{const t=R[m];t&&t[0]&&t[0](s.revalidateEvents.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return a=!1,f(),!0}),[m,d]),Q=(0,r.useCallback)(((...e)=>(0,s.internalMutate)(d,C.current,...e)),[]);if((0,s.useIsomorphicLayoutEffect)((()=>{w.current=t,y.current=n,(0,s.isUndefined)(W)||(Y.current=W)})),(0,s.useIsomorphicLayoutEffect)((()=>{if(!m)return;const e=K.bind(s.UNDEFINED,u);let t=0;const n=(0,s.subscribeCallback)(m,R,((n,r={})=>{if(n==s.revalidateEvents.FOCUS_EVENT){const n=Date.now();L().revalidateOnFocus&&n>t&&I()&&(t=n+L().focusThrottleInterval,e())}else if(n==s.revalidateEvents.RECONNECT_EVENT)L().revalidateOnReconnect&&I()&&e();else{if(n==s.revalidateEvents.MUTATE_EVENT)return K();if(n==s.revalidateEvents.ERROR_REVALIDATE_EVENT)return K(r)}}));return b.current=!1,C.current=m,V.current=!0,k({_k:T}),z&&((0,s.isUndefined)(J)||s.IS_SERVER?e():(0,s.rAF)(e)),()=>{b.current=!0,n()}}),[m]),(0,s.useIsomorphicLayoutEffect)((()=>{let e;function t(){const t=(0,s.isFunction)(g)?g(O().data):g;t&&-1!==e&&(e=setTimeout(n,t))}function n(){O().error||!v&&!L().isVisible()||!h&&!L().isOnline()?t():K(u).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[g,v,h,m]),(0,r.useDebugValue)(q),c&&(0,s.isUndefined)(J)&&m){if(!s.IS_REACT_LEGACY&&s.IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");w.current=t,y.current=n,b.current=!1;const e=_[m];if(!(0,s.isUndefined)(e)){const t=Q(e);a(t)}if(!(0,s.isUndefined)(H))throw H;{const e=K(u);(0,s.isUndefined)(q)||(e.status="fulfilled",e.value=!0),a(e)}}return{mutate:Q,get data(){return N.data=!0,q},get error(){return N.error=!0,H},get isValidating(){return N.isValidating=!0,Z},get isLoading(){return N.isLoading=!0,$}}}))}}]);