"use strict";(globalThis.webpackChunk_openmrs_esm_dispensing_app=globalThis.webpackChunk_openmrs_esm_dispensing_app||[]).push([[77],{8077:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(1672),o=n.n(r),i=n(3397),a=n(1352),s=n(1132),c=n(3439),u=n(2796),l=n(6139),d=n(3957),p=n(1905);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const v=function(e){var t,n,f,v=e.medicationDispense,y=e.mode,g=e.patientUuid,h=e.encounterUuid,O=e.closeWorkspace,C=e.closeWorkspaceWithSavedChanges,S=(0,i.useTranslation)().t,E=(0,s.useConfig)(),P="tablet"===(0,s.useLayoutType)(),k=(0,s.usePatient)(g),w=k.patient,j=k.isLoading,D=b((0,r.useState)(),2),x=D[0],A=D[1],_=b((0,r.useState)(!1),2),T=_[0],U=_[1],F=b((0,r.useState)(!1),2),I=F[0],L=F[1],N=b((0,r.useState)([]),2),R=N[0],M=N[1],W=(0,c.CA)(E.valueSets.reasonForPause.uuid).reasonForPauseValueSet;(0,r.useEffect)((function(){var e,t,n=[];if(null===(t=W)||void 0===t||null===(e=t.compose)||void 0===e?void 0:e.include){var r,o=W.compose.include.find((function(e){return!e.system}));o&&(null===(r=o.concept)||void 0===r||r.forEach((function(e){return n.push({id:e.code,text:e.display})})),n.sort((function(e,t){return e.text.localeCompare(t.text)})))}M(n)}),[W]),(0,r.useEffect)((function(){return A(v)}),[v]),(0,r.useEffect)((function(){var e;x&&(null===(e=x.statusReasonCodeableConcept)||void 0===e?void 0:e.coding[0].code)?U(!0):U(!1)}),[x]);var Z=(0,r.useMemo)((function(){if(w)return{patient:w,patientUuid:g,hideActionsOverflow:!0}}),[w,g]);return o().createElement(a.l09,{className:p.Z.formWrapper},o().createElement("div",null,j&&o().createElement(a.lSo,{className:p.Z.bannerLoading,iconDescription:"Loading",description:"Loading banner",status:"active"}),w&&o().createElement(s.ExtensionSlot,{name:"patient-header-slot",state:Z}),o().createElement("section",{className:p.Z.formGroup},o().createElement(a.CtY,{id:"reasonForPause",light:P,items:R,titleText:S("reasonForPause","Reason for pause"),itemToString:function(e){var t;return null===(t=e)||void 0===t?void 0:t.text},initialSelectedItem:{id:null===(n=v.statusReasonCodeableConcept)||void 0===n||null===(t=n.coding[0])||void 0===t?void 0:t.code,text:null===(f=v.statusReasonCodeableConcept)||void 0===f?void 0:f.text},onChange:function(e){var t,n,r,o=e.selectedItem;A((n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}({},x),r=null!=(r={statusReasonCodeableConcept:{coding:[{code:null===(t=o)||void 0===t?void 0:t.id}]}})?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))})),n))}}))),o().createElement("section",{className:p.Z.buttonGroup},o().createElement(a.zxk,{disabled:I,onClick:function(){return O()},kind:"secondary"},(0,s.getCoreTranslation)("cancel","Cancel")),o().createElement(a.zxk,{disabled:!T||I,onClick:function(){if(!I){L(!0);var e=new AbortController;(0,c.VF)(x,d.jm.on_hold,e).then((function(e){return e.ok&&!v.id?(0,u.XN)((0,l.i7)(x.authorizingPrescription[0].reference),d.nn.on_hold):e})).then((function(e){e.ok&&((0,l.A8)(h),(0,s.showSnackbar)({kind:"success",subtitle:S("enter"===y?"medicationDispensePaused":"medicationDispenseUpdated","enter"===y?"Medication dispense paused.":"Dispense record successfully updated."),title:S("enter"===y?"medicationDispensePaused":"medicationDispenseUpdated","enter"===y?"Medication dispense paused.":"Dispense record successfully updated.")}),C())})).catch((function(e){var t;(0,s.showSnackbar)({title:S("enter"===y?"medicationDispensePauseError":"medicationDispenseUpdatedError","enter"===y?"Error pausing medication dispense.":"Error updating dispense record"),kind:"error",subtitle:null===(t=e)||void 0===t?void 0:t.message}),L(!1)}))}}},S("enter"===y?"pause":"saveChanges","enter"===y?"Pause":"Save changes"))))}}}]);