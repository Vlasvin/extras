"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[664],{4896:(e,r,o)=>{o.d(r,{$P:()=>x,AC:()=>d,_x:()=>i,g0:()=>p,hE:()=>a,hh:()=>c});var s=o(5865),n=o(6446),t=o(5721),l=o(6060);const a=(0,l.A)(s.A)((e=>{let{theme:r}=e;return{fontSize:"clamp(34px, 5.55vw, 54px)",fontWeight:800,lineHeight:1.25,letterSpacing:".01em",marginBottom:"24px",textAlign:"center"}})),i=(0,l.A)(s.A)((e=>{let{theme:r}=e;return{fontSize:"clamp(26px, 5.55vw, 42px)",lineHeight:1.08,fontWeight:500,letterSpacing:".01em",marginBottom:"24px",textAlign:"center"}})),d=(0,l.A)(n.A)((e=>{let{theme:r}=e;return{marginBottom:"48px",textIndent:"1em"}})),p=(0,l.A)(t.A)((e=>{let{theme:r}=e;return{marginBottom:"48px"}})),c=(0,l.A)(n.A)((e=>{let{theme:r}=e;return{minWidth:"40px",minHeight:"40px",display:"flex",justifyContent:"center",alignItems:"center",marginRight:r.spacing(2),[r.breakpoints.down("sm")]:{marginRight:0,marginBottom:r.spacing(1)}}})),x=(0,l.A)(n.A)((e=>{let{theme:r}=e;return{display:"flex",justifyContent:"center",textAlign:"center",marginLeft:"16px"}}))},4664:(e,r,o)=>{o.r(r),o.d(r,{default:()=>le});var s=o(5043),n=o(4117),t=o(4858),l=o(8403),a=o(1906),i=o(899),d=o(4978);const p=i.Ik().shape({surname:i.Yj().required(d.Ay.t("errors.required")),givenName:i.Yj().required(d.Ay.t("errors.required")),patronymic:i.Yj().required(d.Ay.t("errors.required")),birthDate:i.p6().typeError(d.Ay.t("errors.invalidDate")).required(d.Ay.t("errors.required")),photo:i.gl().required(d.Ay.t("errors.required")),passportCopy:i.gl().required(d.Ay.t("errors.required")),passportDetails:i.Yj().required(d.Ay.t("errors.required")),passportOrInn:i.Yj().required(d.Ay.t("errors.required")),otherNames:i.Yj().required(d.Ay.t("errors.required")),birthPlaceAndDate:i.Yj().required(d.Ay.t("errors.required")),passportLost:i.zM().required(d.Ay.t("errors.required")),passportLostDetails:i.Yj().when("passportLost",{is:e=>!0===e,then:e=>e.required(d.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),otherCitizenship:i.zM().required(d.Ay.t("errors.required")),otherPassportDetails:i.Yj().when("otherCitizenship",{is:e=>!0===e,then:e=>e.required(d.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),residenceAddress:i.Yj().required(d.Ay.t("errors.required")),registeredAddress:i.Yj().required(d.Ay.t("errors.required")),contactNumber:i.Yj().required(d.Ay.t("errors.required")),contactNumbersLast5Years:i.Yj().required(d.Ay.t("errors.required")),emailAddress:i.Yj().email(d.Ay.t("errors.invalidEmail")).required(d.Ay.t("errors.required")),emailsLast5Years:i.Yj().required(d.Ay.t("errors.required")),socialMedia:i.YO().of(i.Ik().shape({name:i.Yj().required(d.Ay.t("errors.required")),id:i.Yj().required(d.Ay.t("errors.required"))})),otherMediaResources:i.zM().required(d.Ay.t("errors.required")),otherMediaResourceDetails:i.Yj().when("otherMediaResources",{is:e=>!0===e,then:e=>e.required(d.Ay.t("errors.required")),otherwise:e=>e.notRequired()})}),c=i.Ik().shape({maritalStatus:i.Yj().required("\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439 \u0441\u0442\u0430\u043d \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),x=i.Ik().shape({stayDuration:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),tripFunding:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),intentToReturn:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),u=i.Ik().shape({visitedUSA:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),h=i.Ik().shape({workOrStudy:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),profession:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),organizationName:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),f=i.Ik().shape({personalInfo:p,familyInfo:c,purposeOfTravel:x,travelHistory:u,workAndEducation:h});var m=o(8903),j=o(3193),A=o(1292),I=o(7972),y=o(8577),v=o(4791),b=o(8348),g=o(3959),q=o(2167);const T=(e,r)=>{var o;const s=r.split(".");let n=e;for(const t of s){if(!n[t])return;n=n[t]}return null===(o=n)||void 0===o?void 0:o.message};var w,Y,C,k,D,L,S,H=o(7528),N=o(5903),R=o(1379),O=o(7392),M=o(6446);const z=N.A.div(w||(w=(0,H.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),P=N.A.div(Y||(Y=(0,H.A)(["\n  width: 100%;\n  max-width: 800px;\n  padding: 40px 100px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  @media (max-width: 600px) {\n    padding: 0;\n    box-shadow: none;\n  }\n"]))),F=(0,N.A)(R.A)(C||(C=(0,H.A)(["\n  max-width: 600px;\n"]))),V=N.A.div(k||(k=(0,H.A)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  margin-bottom: 16px;\n"]))),B=(0,N.A)(O.A)(D||(D=(0,H.A)(["\n  position: absolute;\n  top: 4%;\n  right: 16px;\n  transform: translate(50%, 50%);\n"]))),U=(0,N.A)(O.A)(L||(L=(0,H.A)(["\n  position: absolute;\n  bottom: 70%;\n  transform: translateY(50%);\n  right: -4px;\n"]))),E=(0,N.A)(M.A)(S||(S=(0,H.A)(["\n  max-width: 600px;\n  width: 100%;\n"])));var W=o(579);const _=e=>{let{name:r,control:o,errors:l,label:a,type:i="text",inputLabelProps:d={},showInfoIcon:p=!1,onInfoIconClick:c,showFileUpload:x=!1}=e;const{t:u}=(0,n.Bd)(),h=(0,s.useRef)(null);return(0,W.jsxs)(V,{children:[(0,W.jsx)(t.xI,{name:r,control:o,render:e=>{let{field:o}=e;return(0,W.jsx)(F,{...o,label:a,type:i,InputLabelProps:d,error:!!T(l,r),helperText:T(l,r)||"",fullWidth:!0})}}),p&&(0,W.jsx)(q.A,{title:u("pushToInfo"),children:(0,W.jsx)(B,{"aria-label":"info",onClick:c,children:(0,W.jsx)(b.A,{})})}),x&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("input",{type:"file",ref:h,style:{display:"none"},onChange:e=>{var r;const o=null===(r=e.target.files)||void 0===r?void 0:r[0];o&&console.log("Selected file - ".concat(o.name))}}),(0,W.jsx)(q.A,{title:u("pushToUpload"),children:(0,W.jsx)(U,{"aria-label":"upload file",onClick:()=>{var e;return null===(e=h.current)||void 0===e?void 0:e.click()},children:(0,W.jsx)(g.A,{})})})]})]})};var $=o(35),G=o(6600),J=o(5316),K=o(8533),Q=o(9347);const X=e=>{let{open:r,onClose:o,title:s,content:t}=e;const{t:l}=(0,n.Bd)();return(0,W.jsxs)($.A,{open:r,onClose:o,children:[(0,W.jsx)(G.A,{children:s}),(0,W.jsx)(J.A,{children:(0,W.jsx)(K.A,{children:t})}),(0,W.jsx)(Q.A,{children:(0,W.jsx)(a.A,{onClick:o,variant:"outlined",color:"primary",sx:{fontSize:"0.8rem",padding:"2px 10px"},children:l("close")})})]})};var Z=o(4896);const ee=e=>{let{control:r,errors:o}=e;const{t:l}=(0,n.Bd)(),a=(0,t.FH)({control:r,name:"personalInfo.passportLost"}),i=(0,t.FH)({control:r,name:"personalInfo.otherCitizenship"}),d=(0,t.FH)({control:r,name:"personalInfo.otherMediaResources"}),[p,c]=(0,s.useState)(!1),[x,u]=(0,s.useState)(""),[h,f]=(0,s.useState)(""),b=(e,r)=>{u(e),f(r),c(!0)};return(0,W.jsxs)("div",{children:[(0,W.jsx)(Z._x,{children:l("personalInfo.title")}),(0,W.jsxs)(m.Ay,{container:!0,spacing:2,children:[(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(E,{children:(0,W.jsx)(_,{name:"personalInfo.surname",control:r,errors:o,label:l("personalInfo.surname"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.surnameInfoTitle"),l("personalInfo.passportDetails"))})})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(_,{name:"personalInfo.givenName",control:r,errors:o,label:l("personalInfo.givenName")})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(_,{name:"personalInfo.patronymic",control:r,errors:o,label:l("personalInfo.patronymic")})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(_,{name:"personalInfo.birthDate",control:r,errors:o,label:l("personalInfo.birthDate"),type:"date",inputLabelProps:{shrink:!0}})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(E,{children:(0,W.jsx)(_,{name:"personalInfo.photo",control:r,errors:o,label:l("personalInfo.photo"),type:"file",inputLabelProps:{shrink:!0},showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.photoInfoTitle"),l("personalInfo.photoInfoText"))})})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(_,{name:"personalInfo.passportCopy",control:r,errors:o,label:l("personalInfo.passportCopy"),type:"file",inputLabelProps:{shrink:!0}})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(_,{name:"personalInfo.passportOrInn",control:r,errors:o,label:l("personalInfo.passportOrInn")})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(E,{children:(0,W.jsx)(_,{name:"personalInfo.otherNames",control:r,errors:o,label:l("personalInfo.otherNames"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.otherNamesInfoTitle"),l("personalInfo.otherNamesInfoText"))})})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(E,{children:(0,W.jsx)(_,{name:"personalInfo.birthPlaceAndDate",control:r,errors:o,label:l("personalInfo.birthPlaceAndDate"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.placeAndDateInfoTitle"),l("personalInfo.placeAndDateInfoText"))})})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsxs)(j.A,{component:"fieldset",children:[(0,W.jsx)(A.A,{component:"legend",children:l("personalInfo.passportLost")}),(0,W.jsxs)(I.A,{row:!0,name:"personalInfo.passportLost",defaultValue:"no",children:[(0,W.jsx)(y.A,{value:"yes",control:(0,W.jsx)(v.A,{...r.register("personalInfo.passportLost")}),label:l("yes")}),(0,W.jsx)(y.A,{value:"no",control:(0,W.jsx)(v.A,{...r.register("personalInfo.passportLost")}),label:l("no")})]})]})}),"yes"===a&&(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(_,{name:"personalInfo.passportLostNumber",control:r,errors:o,label:l("personalInfo.passportLostDetails")})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsxs)(j.A,{component:"fieldset",children:[(0,W.jsx)(A.A,{component:"legend",children:l("personalInfo.otherCitizenship")}),(0,W.jsxs)(I.A,{row:!0,name:"personalInfo.otherCitizenship",defaultValue:"no",children:[(0,W.jsx)(y.A,{value:"yes",control:(0,W.jsx)(v.A,{...r.register("personalInfo.otherCitizenship")}),label:l("yes")}),(0,W.jsx)(y.A,{value:"no",control:(0,W.jsx)(v.A,{...r.register("personalInfo.otherCitizenship")}),label:l("no")})]})]})}),"yes"===i&&(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(_,{name:"personalInfo.otherPassportDetails",control:r,errors:o,label:l("personalInfo.otherPassportDetails")})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(E,{children:(0,W.jsx)(_,{name:"personalInfo.residenceAddress",control:r,errors:o,label:l("personalInfo.residenceAddress"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.addressInfoTitle"),l("personalInfo.actualInfoAddress"))})})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(E,{children:(0,W.jsx)(_,{name:"personalInfo.registeredAddress",control:r,errors:o,label:l("personalInfo.registeredAddress"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.addressInfoTitle"),l("personalInfo.addressInfoText"))})})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(_,{name:"personalInfo.contactNumber",control:r,errors:o,label:l("personalInfo.contactNumber")})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(E,{children:(0,W.jsx)(_,{name:"personalInfo.contactNumbersLast5Years",control:r,errors:o,label:l("personalInfo.contactNumbersLast5Years"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.numbersLast5YearsInfoTitle"),l("personalInfo.numbersLast5YearsInfoText"))})})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(_,{name:"personalInfo.emailAddress",control:r,errors:o,label:l("personalInfo.emailAddress")})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(E,{children:(0,W.jsx)(_,{name:"personalInfo.emailsLast5Years",control:r,errors:o,label:l("personalInfo.emailsLast5Years"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.emailsLast5YearsInfoTitle"),l("personalInfo.emailsLast5YearsInfoText"))})})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(E,{children:(0,W.jsx)(_,{name:"personalInfo.socialMedia",control:r,errors:o,label:l("personalInfo.socialMedia"),showInfoIcon:!0,showFileUpload:!0,onInfoIconClick:()=>b(l("personalInfo.socialInfoTitle"),l("personalInfo.socialInfo"))})})}),(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsxs)(j.A,{component:"fieldset",children:[(0,W.jsx)(A.A,{component:"legend",children:l("personalInfo.otherMediaResources")}),(0,W.jsxs)(I.A,{row:!0,name:"personalInfo.otherMediaResources",defaultValue:"no",children:[(0,W.jsx)(y.A,{value:"yes",control:(0,W.jsx)(v.A,{...r.register("personalInfo.otherMediaResources")}),label:l("yes")}),(0,W.jsx)(y.A,{value:"no",control:(0,W.jsx)(v.A,{...r.register("personalInfo.otherMediaResources")}),label:l("no")})]})]})}),"yes"===d&&(0,W.jsx)(m.Ay,{item:!0,xs:12,children:(0,W.jsx)(_,{name:"personalInfo.otherMediaResourceDetails",control:r,errors:o,label:l("personalInfo.otherMediaResourceDetails")})})]}),(0,W.jsx)(X,{open:p,onClose:()=>{c(!1),u(""),f("")},title:x,content:h})]})},re=e=>{let{control:r,errors:o}=e;return(0,W.jsxs)("div",{children:[(0,W.jsx)("h2",{children:"\u0414\u0430\u043d\u0456 \u043f\u0440\u043e \u0441\u0456\u043c\u2019\u044e"}),(0,W.jsx)(t.xI,{name:"familyInfo.maritalStatus",control:r,render:e=>{let{field:r}=e;return(0,W.jsx)(R.A,{...r,label:"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439 \u0441\u0442\u0430\u043d",error:!!T(o,"familyInfo.maritalStatus"),helperText:T(o,"familyInfo.maritalStatus")||""})}})]})},oe=e=>{let{control:r,errors:o}=e;return(0,W.jsxs)("div",{children:[(0,W.jsx)("h2",{children:"\u041c\u0435\u0442\u0430 \u043f\u043e\u0457\u0437\u0434\u043a\u0438"}),(0,W.jsx)(t.xI,{name:"purposeOfTravel.stayDuration",control:r,render:e=>{let{field:r}=e;return(0,W.jsx)(R.A,{...r,label:"\u0421\u043a\u0456\u043b\u044c\u043a\u0438 \u043f\u043b\u0430\u043d\u0443\u0454\u0442\u0435 \u043f\u0435\u0440\u0435\u0431\u0443\u0432\u0430\u0442\u0438 \u0443 \u0421\u0428\u0410?",error:!!T(o,"purposeOfTravel.stayDuration"),helperText:T(o,"purposeOfTravel.stayDuration")||""})}}),(0,W.jsx)(t.xI,{name:"purposeOfTravel.tripFunding",control:r,render:e=>{let{field:r}=e;return(0,W.jsx)(R.A,{...r,label:"\u042f\u043a \u0412\u0438 \u043f\u043b\u0430\u043d\u0443\u0454\u0442\u0435 \u0444\u0456\u043d\u0430\u043d\u0441\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u043e\u044e \u043f\u043e\u0434\u043e\u0440\u043e\u0436?",error:!!T(o,"purposeOfTravel.tripFunding"),helperText:T(o,"purposeOfTravel.tripFunding")||""})}}),(0,W.jsx)(t.xI,{name:"purposeOfTravel.intentToReturn",control:r,render:e=>{let{field:r}=e;return(0,W.jsxs)(I.A,{...r,children:[(0,W.jsx)(y.A,{value:"yes",control:(0,W.jsx)(v.A,{}),label:"\u0422\u0430\u043a"}),(0,W.jsx)(y.A,{value:"no",control:(0,W.jsx)(v.A,{}),label:"\u041d\u0456"})]})}}),T(o,"purposeOfTravel.intentToReturn")&&(0,W.jsx)("p",{children:T(o,"purposeOfTravel.intentToReturn")})]})},se=e=>{let{control:r,errors:o}=e;const{getValues:s}=(0,t.xW)();return(0,W.jsxs)("div",{children:[(0,W.jsx)("h2",{children:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0435\u0439"}),(0,W.jsx)(t.xI,{name:"travelHistory.visitedUSA",control:r,render:e=>{let{field:r}=e;return(0,W.jsxs)(I.A,{...r,children:[(0,W.jsx)(y.A,{value:"yes",control:(0,W.jsx)(v.A,{}),label:"\u0422\u0430\u043a"}),(0,W.jsx)(y.A,{value:"no",control:(0,W.jsx)(v.A,{}),label:"\u041d\u0456"})]})}}),T(o,"travelHistory.visitedUSA")&&(0,W.jsx)("p",{children:T(o,"travelHistory.visitedUSA")}),"yes"===s("travelHistory.visitedUSA")&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(t.xI,{name:"travelHistory.usaVisitDates",control:r,render:e=>{let{field:r}=e;return(0,W.jsx)(R.A,{...r,label:"\u041a\u043e\u043b\u0438 \u0412\u0438 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u043b\u0438 \u0421\u0428\u0410?",error:!!T(o,"travelHistory.usaVisitDates"),helperText:T(o,"travelHistory.usaVisitDates")||""})}}),(0,W.jsx)(t.xI,{name:"travelHistory.usaVisitPurpose",control:r,render:e=>{let{field:r}=e;return(0,W.jsx)(R.A,{...r,label:"\u042f\u043a\u0430 \u0431\u0443\u043b\u0430 \u043c\u0435\u0442\u0430 \u0412\u0430\u0448\u043e\u0433\u043e \u0432\u0456\u0437\u0438\u0442\u0443?",error:!!T(o,"travelHistory.usaVisitPurpose"),helperText:T(o,"travelHistory.usaVisitPurpose")||""})}})]}),(0,W.jsx)(t.xI,{name:"travelHistory.otherTravels",control:r,render:e=>{let{field:r}=e;return(0,W.jsxs)(I.A,{...r,children:[(0,W.jsx)(y.A,{value:"yes",control:(0,W.jsx)(v.A,{}),label:"\u0422\u0430\u043a"}),(0,W.jsx)(y.A,{value:"no",control:(0,W.jsx)(v.A,{}),label:"\u041d\u0456"})]})}}),T(o,"travelHistory.otherTravels")&&(0,W.jsx)("p",{children:T(o,"travelHistory.otherTravels")}),"yes"===s("travelHistory.otherTravels")&&(0,W.jsx)(t.xI,{name:"travelHistory.travelCountries",control:r,render:e=>{let{field:r}=e;return(0,W.jsx)(R.A,{...r,label:"\u041f\u0435\u0440\u0435\u043b\u0456\u043a \u043a\u0440\u0430\u0457\u043d",error:!!T(o,"travelHistory.travelCountries"),helperText:T(o,"travelHistory.travelCountries")||""})}})]})},ne=e=>{let{control:r,errors:o}=e;return(0,W.jsxs)("div",{children:[(0,W.jsx)("h2",{children:"\u0420\u043e\u0431\u043e\u0442\u0430 \u0442\u0430 \u043e\u0441\u0432\u0456\u0442\u0430"}),(0,W.jsx)(t.xI,{name:"workOrStudy",control:r,render:e=>{let{field:r}=e;return(0,W.jsx)(R.A,{...r,label:"\u0420\u043e\u0431\u043e\u0442\u0430 \u0430\u0431\u043e \u043d\u0430\u0432\u0447\u0430\u043d\u043d\u044f",error:!!o.workOrStudy,helperText:T(o,"workOrStudy")})}}),(0,W.jsx)(t.xI,{name:"profession",control:r,render:e=>{let{field:r}=e;return(0,W.jsx)(R.A,{...r,label:"\u041f\u0440\u043e\u0444\u0435\u0441\u0456\u044f",error:!!o.profession,helperText:T(o,"profession")})}}),(0,W.jsx)(t.xI,{name:"organizationName",control:r,render:e=>{let{field:r}=e;return(0,W.jsx)(R.A,{...r,label:"\u041d\u0430\u0437\u0432\u0430 \u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u0457",error:!!o.organizationName,helperText:T(o,"organizationName")})}})]})},te=()=>{const{t:e}=(0,n.Bd)(),r=(0,t.mN)({resolver:(0,l.t)(f),defaultValues:{personalInfo:{surname:"",givenName:"",patronymic:"",birthDate:void 0,photo:void 0,passportCopy:void 0,passportDetails:"",passportOrInn:"",otherNames:"",birthPlaceAndDate:"",passportLost:!1,passportLostDetails:"",otherCitizenship:!1,otherPassportDetails:"",residenceAddress:"",registeredAddress:"",contactNumber:"",contactNumbersLast5Years:"",emailAddress:"",emailsLast5Years:"",socialMedia:[],otherMediaResources:!1,otherMediaResourceDetails:""},familyInfo:{},purposeOfTravel:{},travelHistory:{},workAndEducation:{}}});return(0,W.jsx)(z,{children:(0,W.jsx)(P,{children:(0,W.jsx)(t.Op,{...r,children:(0,W.jsxs)("form",{onSubmit:r.handleSubmit((e=>{console.log(e)})),children:[(0,W.jsx)(ee,{control:r.control,errors:r.formState.errors}),(0,W.jsx)(re,{control:r.control,errors:r.formState.errors}),(0,W.jsx)(oe,{control:r.control,errors:r.formState.errors}),(0,W.jsx)(se,{control:r.control,errors:r.formState.errors}),(0,W.jsx)(ne,{control:r.control,errors:r.formState.errors}),(0,W.jsx)(a.A,{type:"submit",variant:"outlined",color:"primary",children:e("send")})]})})})})},le=()=>(0,W.jsx)("div",{children:(0,W.jsx)(te,{})})}}]);
//# sourceMappingURL=664.eaa3d552.chunk.js.map