"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[202],{4202:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(268),l=n.n(a),r=n(4924),o=n(2870),s=n(4350),i=n(7089);const c=function(e){var t=e.closeDialog,n=e.patientUuid,a=(0,r.useTranslation)().t;return l().createElement("div",null,l().createElement(s.ModalHeader,{closeModal:t,title:a("markAsAlive","Mark As Alive")}),l().createElement(s.ModalBody,null,a("confirmMarkAsAlive","Are you sure, you want to mark patient as alive?")),l().createElement(s.ModalFooter,null,l().createElement(s.Button,{kind:"secondary",onClick:t},a("no","No")),l().createElement(s.Button,{onClick:function(e){return function(e){e.preventDefault(),t(),(0,i.sy)(n,new AbortController).then((function(e){e.ok&&(t(),(0,o.showSnackbar)({isLowContrast:!0,kind:"success",title:a("markAsAlive","Mark As Alive"),subtitle:a("setAliveSuccessfully","Patient has been marked alive successfully")}))})).catch((function(e){(0,o.showSnackbar)({title:a("setAliveError","Error marking patient alive"),kind:"error",isLowContrast:!1,subtitle:null==e?void 0:e.message})}))}(e)}},a("yes","Yes"))))}}}]);