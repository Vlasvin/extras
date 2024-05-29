"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[664],{4664:(e,r,s)=>{s.r(r),s.d(r,{default:()=>K});var o=s(5043),n=s(4858),t=s(8403),l=s(1906),a=s(899),i=s(4978);const d=a.Ik().shape({surname:a.Yj().required(i.Ay.t("errors.required")),givenName:a.Yj().required(i.Ay.t("errors.required")),patronymic:a.Yj().required(i.Ay.t("errors.required")),birthDate:a.p6().typeError(i.Ay.t("errors.invalidDate")).required(i.Ay.t("errors.required")),photo:a.gl().required(i.Ay.t("errors.required")),passportCopy:a.gl().required(i.Ay.t("errors.required")),passportDetails:a.Yj().required(i.Ay.t("errors.required")),passportOrInn:a.Yj().required(i.Ay.t("errors.required")),otherNames:a.Yj().required(i.Ay.t("errors.required")),birthPlaceAndDate:a.Yj().required(i.Ay.t("errors.required")),passportLost:a.zM().required(i.Ay.t("errors.required")),passportLostDetails:a.Yj().when("passportLost",{is:e=>!0===e,then:e=>e.required(i.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),otherCitizenship:a.zM().required(i.Ay.t("errors.required")),otherPassportDetails:a.Yj().when("otherCitizenship",{is:e=>!0===e,then:e=>e.required(i.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),residenceAddress:a.Yj().required(i.Ay.t("errors.required")),registeredAddress:a.Yj().required(i.Ay.t("errors.required")),contactNumber:a.Yj().required(i.Ay.t("errors.required")),contactNumbersLast5Years:a.Yj().required(i.Ay.t("errors.required")),emailAddress:a.Yj().email(i.Ay.t("errors.invalidEmail")).required(i.Ay.t("errors.required")),emailsLast5Years:a.Yj().required(i.Ay.t("errors.required")),socialMedia:a.YO().of(a.Ik().shape({name:a.Yj().required(i.Ay.t("errors.required")),id:a.Yj().required(i.Ay.t("errors.required"))})),otherMediaResources:a.zM().required(i.Ay.t("errors.required")),otherMediaResourceDetails:a.Yj().when("otherMediaResources",{is:e=>!0===e,then:e=>e.required(i.Ay.t("errors.required")),otherwise:e=>e.notRequired()})}),p=a.Ik().shape({maritalStatus:a.Yj().required("\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439 \u0441\u0442\u0430\u043d \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),c=a.Ik().shape({stayDuration:a.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),tripFunding:a.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),intentToReturn:a.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),x=a.Ik().shape({visitedUSA:a.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),u=a.Ik().shape({workOrStudy:a.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),profession:a.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),organizationName:a.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),h=a.Ik().shape({personalInfo:d,familyInfo:p,purposeOfTravel:c,travelHistory:x,workAndEducation:u});var j=s(4117),f=s(8903),A=s(2167),m=s(7392),I=s(3193),y=s(1292),v=s(8492),b=s(8577),q=s(4256),T=s(9413),Y=s(1962),g=s(8348);const D=(e,r)=>{var s;const o=r.split(".");let n=e;for(const t of o){if(!n[t])return;n=n[t]}return null===(s=n)||void 0===s?void 0:s.message};var N,k,C,L=s(7528),S=s(5903),H=s(1379);const O=(0,S.A)(H.A)(N||(N=(0,L.A)(["\n  width: 600px;\n"])));S.A.div(k||(k=(0,L.A)(["\n  display: flex;\n  align-items: center;\n"]))),(0,S.A)(m.A)(C||(C=(0,L.A)(["\n  margin-left: 8px;\n"])));var M=s(579);const R=e=>{let{name:r,control:s,errors:o,label:t,type:l="text",inputLabelProps:a={}}=e;return(0,M.jsx)(n.xI,{name:r,control:s,render:e=>{let{field:s}=e;return(0,M.jsx)(O,{...s,label:t,type:l,InputLabelProps:a,error:!!D(o,r),helperText:D(o,r)||"",fullWidth:!0})}})};var w=s(35),z=s(6600),P=s(5316),V=s(8533),F=s(9347);const U=e=>{let{open:r,onClose:s,title:o,content:n}=e;const{t:t}=(0,j.Bd)();return(0,M.jsxs)(w.A,{open:r,onClose:s,children:[(0,M.jsx)(z.A,{children:o}),(0,M.jsx)(P.A,{children:(0,M.jsx)(V.A,{children:n})}),(0,M.jsx)(F.A,{children:(0,M.jsx)(l.A,{onClick:s,variant:"outlined",color:"primary",sx:{fontSize:"0.8rem",padding:"2px 10px"},children:t("close")})})]})},E=e=>{let{control:r,errors:s}=e;const{t:t}=(0,j.Bd)(),{getValues:l}=(0,n.xW)(),a=(0,n.FH)({control:r,name:"personalInfo.passportLost"}),i=(0,n.FH)({control:r,name:"personalInfo.otherCitizenship"}),[d,p]=(0,o.useState)(!1),[c,x]=(0,o.useState)(""),[u,h]=(0,o.useState)(""),D=(e,r)=>{x(e),h(r),p(!0)};return(0,M.jsxs)("div",{children:[(0,M.jsx)("h2",{children:t("personalInfo.title")}),(0,M.jsxs)(f.Ay,{container:!0,spacing:2,children:[(0,M.jsxs)(f.Ay,{item:!0,xs:12,style:{position:"relative"},children:[(0,M.jsx)(R,{name:"personalInfo.surname",control:r,errors:s,label:t("personalInfo.surname")}),(0,M.jsx)(A.A,{title:t("personalInfo.pushToInfo"),children:(0,M.jsx)(m.A,{"aria-label":"info",onClick:()=>D(t("personalInfo.surnameInfoTitle"),t("personalInfo.passportDetails")),children:(0,M.jsx)(g.A,{})})})]}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.givenName",control:r,errors:s,label:t("personalInfo.givenName")})}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.patronymic",control:r,errors:s,label:t("personalInfo.patronymic")})}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.birthDate",control:r,errors:s,label:t("personalInfo.birthDate"),type:"date",inputLabelProps:{shrink:!0}})}),(0,M.jsxs)(f.Ay,{item:!0,xs:12,children:[(0,M.jsx)(R,{name:"personalInfo.photo",control:r,errors:s,label:t("personalInfo.photo"),type:"file",inputLabelProps:{shrink:!0}}),(0,M.jsx)(A.A,{title:t("personalInfo.pushToInfo"),children:(0,M.jsx)(m.A,{"aria-label":"info",onClick:()=>D(t("personalInfo.photoInfoTitle"),t("personalInfo.photoInfoText")),children:(0,M.jsx)(g.A,{})})})]}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.passportCopy",control:r,errors:s,label:t("personalInfo.passportCopy"),type:"file",inputLabelProps:{shrink:!0}})}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.passportOrInn",control:r,errors:s,label:t("personalInfo.passportOrInn")})}),(0,M.jsxs)(f.Ay,{item:!0,xs:12,style:{position:"relative"},children:[(0,M.jsx)(R,{name:"personalInfo.otherNames",control:r,errors:s,label:t("personalInfo.otherNames")}),(0,M.jsx)(A.A,{title:t("personalInfo.pushToInfo"),children:(0,M.jsx)(m.A,{"aria-label":"info",onClick:()=>D(t("personalInfo.otherNamesInfoTitle"),t("personalInfo.otherNamesInfoText")),children:(0,M.jsx)(g.A,{})})})]}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.birthPlaceAndDate",control:r,errors:s,label:t("personalInfo.birthPlaceAndDate")})}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsxs)(I.A,{component:"fieldset",children:[(0,M.jsx)(y.A,{component:"legend",children:t("personalInfo.passportLost")}),(0,M.jsxs)(v.A,{row:!0,name:"personalInfo.passportLost",defaultValue:"no",children:[(0,M.jsx)(b.A,{value:"yes",control:(0,M.jsx)(q.A,{...r.register("personalInfo.passportLost")}),label:t("yes")}),(0,M.jsx)(b.A,{value:"no",control:(0,M.jsx)(q.A,{...r.register("personalInfo.passportLost")}),label:t("no")})]})]})}),"yes"===a&&(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.passportLostNumber",control:r,errors:s,label:t("personalInfo.passportLostDetails")})}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsxs)(I.A,{component:"fieldset",children:[(0,M.jsx)(y.A,{component:"legend",children:t("personalInfo.otherCitizenship")}),(0,M.jsxs)(v.A,{row:!0,name:"personalInfo.otherCitizenship",defaultValue:"no",children:[(0,M.jsx)(b.A,{value:"yes",control:(0,M.jsx)(q.A,{...r.register("personalInfo.otherCitizenship")}),label:t("yes")}),(0,M.jsx)(b.A,{value:"no",control:(0,M.jsx)(q.A,{...r.register("personalInfo.otherCitizenship")}),label:t("no")})]})]})}),"yes"===i&&(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.otherPassportDetails",control:r,errors:s,label:t("personalInfo.otherPassportDetails")})}),(0,M.jsxs)(f.Ay,{item:!0,xs:12,children:[(0,M.jsx)(R,{name:"personalInfo.residenceAddress",control:r,errors:s,label:t("personalInfo.residenceAddress")}),(0,M.jsx)(A.A,{title:t("personalInfo.pushToInfo"),children:(0,M.jsx)(m.A,{"aria-label":"info",onClick:()=>D(t("personalInfo.otherNamesInfoTitle"),t("personalInfo.otherNamesInfoText")),children:(0,M.jsx)(g.A,{})})})]}),(0,M.jsxs)(f.Ay,{item:!0,xs:12,children:[(0,M.jsx)(R,{name:"personalInfo.registeredAddress",control:r,errors:s,label:t("personalInfo.registeredAddress")}),(0,M.jsx)(A.A,{title:t("personalInfo.pushToInfo"),children:(0,M.jsx)(m.A,{"aria-label":"info",onClick:()=>D(t("personalInfo.otherNamesInfoTitle"),t("personalInfo.otherNamesInfoText")),children:(0,M.jsx)(g.A,{})})})]}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.contactNumber",control:r,errors:s,label:t("personalInfo.contactNumber")})}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.contactNumbersLast5Years",control:r,errors:s,label:t("personalInfo.contactNumbersLast5Years")})}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.emailAddress",control:r,errors:s,label:t("personalInfo.emailAddress")})}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.emailsLast5Years",control:r,errors:s,label:t("personalInfo.emailsLast5Years")})}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.socialMedia",control:r,errors:s,label:t("personalInfo.socialMedia")})}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.socialMediaDetails",control:r,errors:s,label:t("personalInfo.socialMediaDetails")})}),(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(T.A,{children:(0,M.jsx)(b.A,{control:(0,M.jsx)(Y.A,{...r.register("personalInfo.otherMediaResources"),checked:l("personalInfo.otherMediaResources")}),label:t("personalInfo.otherMediaResources")})})}),l("personalInfo.otherMediaResources")&&(0,M.jsx)(f.Ay,{item:!0,xs:12,children:(0,M.jsx)(R,{name:"personalInfo.otherMediaResourceDetails",control:r,errors:s,label:t("personalInfo.otherMediaResourceDetails")})})]}),(0,M.jsx)(U,{open:d,onClose:()=>{p(!1),x(""),h("")},title:c,content:u})]})},W=e=>{let{control:r,errors:s}=e;return(0,M.jsxs)("div",{children:[(0,M.jsx)("h2",{children:"\u0414\u0430\u043d\u0456 \u043f\u0440\u043e \u0441\u0456\u043c\u2019\u044e"}),(0,M.jsx)(n.xI,{name:"familyInfo.maritalStatus",control:r,render:e=>{let{field:r}=e;return(0,M.jsx)(H.A,{...r,label:"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439 \u0441\u0442\u0430\u043d",error:!!D(s,"familyInfo.maritalStatus"),helperText:D(s,"familyInfo.maritalStatus")||""})}})]})},B=e=>{let{control:r,errors:s}=e;return(0,M.jsxs)("div",{children:[(0,M.jsx)("h2",{children:"\u041c\u0435\u0442\u0430 \u043f\u043e\u0457\u0437\u0434\u043a\u0438"}),(0,M.jsx)(n.xI,{name:"purposeOfTravel.stayDuration",control:r,render:e=>{let{field:r}=e;return(0,M.jsx)(H.A,{...r,label:"\u0421\u043a\u0456\u043b\u044c\u043a\u0438 \u043f\u043b\u0430\u043d\u0443\u0454\u0442\u0435 \u043f\u0435\u0440\u0435\u0431\u0443\u0432\u0430\u0442\u0438 \u0443 \u0421\u0428\u0410?",error:!!D(s,"purposeOfTravel.stayDuration"),helperText:D(s,"purposeOfTravel.stayDuration")||""})}}),(0,M.jsx)(n.xI,{name:"purposeOfTravel.tripFunding",control:r,render:e=>{let{field:r}=e;return(0,M.jsx)(H.A,{...r,label:"\u042f\u043a \u0412\u0438 \u043f\u043b\u0430\u043d\u0443\u0454\u0442\u0435 \u0444\u0456\u043d\u0430\u043d\u0441\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u043e\u044e \u043f\u043e\u0434\u043e\u0440\u043e\u0436?",error:!!D(s,"purposeOfTravel.tripFunding"),helperText:D(s,"purposeOfTravel.tripFunding")||""})}}),(0,M.jsx)(n.xI,{name:"purposeOfTravel.intentToReturn",control:r,render:e=>{let{field:r}=e;return(0,M.jsxs)(v.A,{...r,children:[(0,M.jsx)(b.A,{value:"yes",control:(0,M.jsx)(q.A,{}),label:"\u0422\u0430\u043a"}),(0,M.jsx)(b.A,{value:"no",control:(0,M.jsx)(q.A,{}),label:"\u041d\u0456"})]})}}),D(s,"purposeOfTravel.intentToReturn")&&(0,M.jsx)("p",{children:D(s,"purposeOfTravel.intentToReturn")})]})},_=e=>{let{control:r,errors:s}=e;const{getValues:o}=(0,n.xW)();return(0,M.jsxs)("div",{children:[(0,M.jsx)("h2",{children:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0435\u0439"}),(0,M.jsx)(n.xI,{name:"travelHistory.visitedUSA",control:r,render:e=>{let{field:r}=e;return(0,M.jsxs)(v.A,{...r,children:[(0,M.jsx)(b.A,{value:"yes",control:(0,M.jsx)(q.A,{}),label:"\u0422\u0430\u043a"}),(0,M.jsx)(b.A,{value:"no",control:(0,M.jsx)(q.A,{}),label:"\u041d\u0456"})]})}}),D(s,"travelHistory.visitedUSA")&&(0,M.jsx)("p",{children:D(s,"travelHistory.visitedUSA")}),"yes"===o("travelHistory.visitedUSA")&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(n.xI,{name:"travelHistory.usaVisitDates",control:r,render:e=>{let{field:r}=e;return(0,M.jsx)(H.A,{...r,label:"\u041a\u043e\u043b\u0438 \u0412\u0438 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u043b\u0438 \u0421\u0428\u0410?",error:!!D(s,"travelHistory.usaVisitDates"),helperText:D(s,"travelHistory.usaVisitDates")||""})}}),(0,M.jsx)(n.xI,{name:"travelHistory.usaVisitPurpose",control:r,render:e=>{let{field:r}=e;return(0,M.jsx)(H.A,{...r,label:"\u042f\u043a\u0430 \u0431\u0443\u043b\u0430 \u043c\u0435\u0442\u0430 \u0412\u0430\u0448\u043e\u0433\u043e \u0432\u0456\u0437\u0438\u0442\u0443?",error:!!D(s,"travelHistory.usaVisitPurpose"),helperText:D(s,"travelHistory.usaVisitPurpose")||""})}})]}),(0,M.jsx)(n.xI,{name:"travelHistory.otherTravels",control:r,render:e=>{let{field:r}=e;return(0,M.jsxs)(v.A,{...r,children:[(0,M.jsx)(b.A,{value:"yes",control:(0,M.jsx)(q.A,{}),label:"\u0422\u0430\u043a"}),(0,M.jsx)(b.A,{value:"no",control:(0,M.jsx)(q.A,{}),label:"\u041d\u0456"})]})}}),D(s,"travelHistory.otherTravels")&&(0,M.jsx)("p",{children:D(s,"travelHistory.otherTravels")}),"yes"===o("travelHistory.otherTravels")&&(0,M.jsx)(n.xI,{name:"travelHistory.travelCountries",control:r,render:e=>{let{field:r}=e;return(0,M.jsx)(H.A,{...r,label:"\u041f\u0435\u0440\u0435\u043b\u0456\u043a \u043a\u0440\u0430\u0457\u043d",error:!!D(s,"travelHistory.travelCountries"),helperText:D(s,"travelHistory.travelCountries")||""})}})]})},G=e=>{let{control:r,errors:s}=e;return(0,M.jsxs)("div",{children:[(0,M.jsx)("h2",{children:"\u0420\u043e\u0431\u043e\u0442\u0430 \u0442\u0430 \u043e\u0441\u0432\u0456\u0442\u0430"}),(0,M.jsx)(n.xI,{name:"workOrStudy",control:r,render:e=>{let{field:r}=e;return(0,M.jsx)(H.A,{...r,label:"\u0420\u043e\u0431\u043e\u0442\u0430 \u0430\u0431\u043e \u043d\u0430\u0432\u0447\u0430\u043d\u043d\u044f",error:!!s.workOrStudy,helperText:D(s,"workOrStudy")})}}),(0,M.jsx)(n.xI,{name:"profession",control:r,render:e=>{let{field:r}=e;return(0,M.jsx)(H.A,{...r,label:"\u041f\u0440\u043e\u0444\u0435\u0441\u0456\u044f",error:!!s.profession,helperText:D(s,"profession")})}}),(0,M.jsx)(n.xI,{name:"organizationName",control:r,render:e=>{let{field:r}=e;return(0,M.jsx)(H.A,{...r,label:"\u041d\u0430\u0437\u0432\u0430 \u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u0457",error:!!s.organizationName,helperText:D(s,"organizationName")})}})]})},J=()=>{const e=(0,n.mN)({resolver:(0,t.t)(h),defaultValues:{personalInfo:{surname:"",givenName:"",patronymic:"",birthDate:void 0,photo:void 0,passportCopy:void 0,passportDetails:"",passportOrInn:"",otherNames:"",birthPlaceAndDate:"",passportLost:!1,passportLostDetails:"",otherCitizenship:!1,otherPassportDetails:"",residenceAddress:"",registeredAddress:"",contactNumber:"",contactNumbersLast5Years:"",emailAddress:"",emailsLast5Years:"",socialMedia:[],otherMediaResources:!1,otherMediaResourceDetails:""},familyInfo:{},purposeOfTravel:{},travelHistory:{},workAndEducation:{}}});return(0,M.jsx)(n.Op,{...e,children:(0,M.jsxs)("form",{onSubmit:e.handleSubmit((e=>{console.log(e)})),children:[(0,M.jsx)(E,{control:e.control,errors:e.formState.errors}),(0,M.jsx)(W,{control:e.control,errors:e.formState.errors}),(0,M.jsx)(B,{control:e.control,errors:e.formState.errors}),(0,M.jsx)(_,{control:e.control,errors:e.formState.errors}),(0,M.jsx)(G,{control:e.control,errors:e.formState.errors}),(0,M.jsx)(l.A,{type:"submit",variant:"contained",color:"primary",children:"\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438"})]})})},K=()=>(0,M.jsx)("div",{children:(0,M.jsx)(J,{})})}}]);
//# sourceMappingURL=664.6e8b58fc.chunk.js.map