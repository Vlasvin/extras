"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[664],{4896:(e,r,o)=>{o.d(r,{$P:()=>x,AC:()=>d,_x:()=>i,g0:()=>c,hE:()=>a,hh:()=>p});var s=o(5865),n=o(6446),t=o(5721),l=o(6060);const a=(0,l.A)(s.A)((e=>{let{theme:r}=e;return{fontSize:"clamp(34px, 5.55vw, 54px)",fontWeight:800,lineHeight:1.25,letterSpacing:".01em",marginBottom:"24px",textAlign:"center"}})),i=(0,l.A)(s.A)((e=>{let{theme:r}=e;return{fontSize:"clamp(26px, 5.55vw, 42px)",lineHeight:1.08,fontWeight:500,letterSpacing:".01em",marginBottom:"24px",textAlign:"center"}})),d=(0,l.A)(n.A)((e=>{let{theme:r}=e;return{marginBottom:"48px",textIndent:"1em"}})),c=(0,l.A)(t.A)((e=>{let{theme:r}=e;return{marginBottom:"48px"}})),p=(0,l.A)(n.A)((e=>{let{theme:r}=e;return{minWidth:"40px",minHeight:"40px",display:"flex",justifyContent:"center",alignItems:"center",marginRight:r.spacing(2),[r.breakpoints.down("sm")]:{marginRight:0,marginBottom:r.spacing(1)}}})),x=(0,l.A)(n.A)((e=>{let{theme:r}=e;return{display:"flex",justifyContent:"center",textAlign:"center",marginLeft:"16px"}}))},4664:(e,r,o)=>{o.r(r),o.d(r,{default:()=>ie});var s=o(5043),n=o(4117),t=o(4858),l=o(8403),a=o(1906),i=o(899),d=o(4978);const c=i.Ik().shape({surname:i.Yj().required(d.Ay.t("errors.required")),givenName:i.Yj().required(d.Ay.t("errors.required")),patronymic:i.Yj().required(d.Ay.t("errors.required")),birthDate:i.p6().typeError(d.Ay.t("errors.invalidDate")).required(d.Ay.t("errors.required")),photo:i.gl().required(d.Ay.t("errors.required")),passportCopy:i.gl().required(d.Ay.t("errors.required")),passportDetails:i.Yj().required(d.Ay.t("errors.required")),passportOrInn:i.Yj().required(d.Ay.t("errors.required")),otherNames:i.Yj().required(d.Ay.t("errors.required")),birthPlaceAndDate:i.Yj().required(d.Ay.t("errors.required")),passportLost:i.zM().required(d.Ay.t("errors.required")),passportLostDetails:i.Yj().when("passportLost",{is:e=>!0===e,then:e=>e.required(d.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),otherCitizenship:i.zM().required(d.Ay.t("errors.required")),otherPassportDetails:i.Yj().when("otherCitizenship",{is:e=>!0===e,then:e=>e.required(d.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),residenceAddress:i.Yj().required(d.Ay.t("errors.required")),registeredAddress:i.Yj().required(d.Ay.t("errors.required")),contactNumber:i.Yj().required(d.Ay.t("errors.required")),contactNumbersLast5Years:i.Yj().required(d.Ay.t("errors.required")),emailAddress:i.Yj().email(d.Ay.t("errors.invalidEmail")).required(d.Ay.t("errors.required")),emailsLast5Years:i.Yj().required(d.Ay.t("errors.required")),socialMedia:i.YO().of(i.Ik().shape({name:i.Yj().required(d.Ay.t("errors.required")),id:i.Yj().required(d.Ay.t("errors.required"))})),otherMediaResources:i.zM().required(d.Ay.t("errors.required")),otherMediaResourceDetails:i.Yj().when("otherMediaResources",{is:e=>!0===e,then:e=>e.required(d.Ay.t("errors.required")),otherwise:e=>e.notRequired()})}),p=i.Ik().shape({maritalStatus:i.Yj().required("\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439 \u0441\u0442\u0430\u043d \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),x=i.Ik().shape({stayDuration:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),tripFunding:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),intentToReturn:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),m=i.Ik().shape({visitedUSA:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),f=i.Ik().shape({workOrStudy:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),profession:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),organizationName:i.Yj().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),u=i.Ik().shape({personalInfo:c,familyInfo:p,purposeOfTravel:x,travelHistory:m,workAndEducation:f});var h=o(8903),j=o(3193),A=o(1292),I=o(7972),y=o(8577),v=o(4791),b=o(8348),g=o(3959),q=o(2167);const S=(e,r)=>{var o;const s=r.split(".");let n=e;for(const t of s){if(!n[t])return;n=n[t]}return null===(o=n)||void 0===o?void 0:o.message};var T,D,w,k,Y,N,C,L,O=o(7528),P=o(5903),H=o(1379),R=o(7392),M=o(6446);const B=P.A.div(T||(T=(0,O.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),z=P.A.div(D||(D=(0,O.A)(["\n  width: 100%;\n  max-width: 800px;\n  padding: 40px 100px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  @media (max-width: 600px) {\n    padding: 0;\n    box-shadow: none;\n  }\n"]))),U=(0,P.A)(H.A)(w||(w=(0,O.A)(["\n  max-width: 600px;\n"]))),V=P.A.div(k||(k=(0,O.A)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  margin-bottom: 16px;\n"]))),F=(0,P.A)(R.A)(Y||(Y=(0,O.A)(["\n  position: absolute;\n  top: 4%;\n  right: 13px;\n  transform: translate(50%, 50%);\n"]))),E=(0,P.A)(R.A)(N||(N=(0,O.A)(["\n  position: absolute;\n  bottom: 70%;\n  transform: translateY(50%);\n  right: -7px;\n"]))),W=(0,P.A)(M.A)(C||(C=(0,O.A)(["\n  max-width: 600px;\n  width: 100%;\n"]))),_=P.A.div(L||(L=(0,O.A)(["\n  margin-bottom: 48px;\n"])));var $=o(579);const G=e=>{let{name:r,control:o,errors:l,label:a,type:i="text",inputLabelProps:d={},showInfoIcon:c=!1,onInfoIconClick:p,showFileUpload:x=!1}=e;const{t:m}=(0,n.Bd)(),f=(0,s.useRef)(null);return(0,$.jsxs)(V,{children:[(0,$.jsx)(t.xI,{name:r,control:o,render:e=>{let{field:o}=e;return(0,$.jsx)(U,{...o,label:a,type:i,InputLabelProps:d,error:!!S(l,r),helperText:S(l,r)||"",fullWidth:!0})}}),c&&(0,$.jsx)(q.A,{title:m("pushToInfo"),children:(0,$.jsx)(F,{"aria-label":"info",onClick:p,children:(0,$.jsx)(b.A,{})})}),x&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("input",{type:"file",ref:f,style:{display:"none"},onChange:e=>{var r;const o=null===(r=e.target.files)||void 0===r?void 0:r[0];o&&console.log("Selected file - ".concat(o.name))}}),(0,$.jsx)(q.A,{title:m("pushToUpload"),children:(0,$.jsx)(E,{"aria-label":"upload file",onClick:()=>{var e;return null===(e=f.current)||void 0===e?void 0:e.click()},children:(0,$.jsx)(g.A,{})})})]})]})};var J=o(35),K=o(6600),Q=o(5316),X=o(8533),Z=o(9347);const ee=e=>{let{open:r,onClose:o,title:s,content:t}=e;const{t:l}=(0,n.Bd)();return(0,$.jsxs)(J.A,{open:r,onClose:o,children:[(0,$.jsx)(K.A,{children:s}),(0,$.jsx)(Q.A,{children:(0,$.jsx)(X.A,{children:t})}),(0,$.jsx)(Z.A,{children:(0,$.jsx)(a.A,{onClick:o,variant:"outlined",color:"primary",sx:{fontSize:"0.8rem",padding:"2px 10px"},children:l("close")})})]})};var re=o(4896);const oe=e=>{let{control:r,errors:o}=e;const{t:l}=(0,n.Bd)(),a=(0,t.FH)({control:r,name:"personalInfo.passportLost"}),i=(0,t.FH)({control:r,name:"personalInfo.otherCitizenship"}),d=(0,t.FH)({control:r,name:"personalInfo.otherMediaResources"}),[c,p]=(0,s.useState)(!1),[x,m]=(0,s.useState)(""),[f,u]=(0,s.useState)(""),b=(e,r)=>{m(e),u(r),p(!0)};return(0,$.jsxs)("div",{children:[(0,$.jsx)(re._x,{children:l("personalInfo.title")}),(0,$.jsxs)(h.Ay,{container:!0,spacing:2,children:[(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(W,{children:(0,$.jsx)(G,{name:"personalInfo.surname",control:r,errors:o,label:l("personalInfo.surname"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.surnameInfoTitle"),l("personalInfo.passportDetails"))})})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"personalInfo.givenName",control:r,errors:o,label:l("personalInfo.givenName")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"personalInfo.patronymic",control:r,errors:o,label:l("personalInfo.patronymic")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"personalInfo.birthDate",control:r,errors:o,label:l("personalInfo.birthDate"),type:"date",inputLabelProps:{shrink:!0}})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(W,{children:(0,$.jsx)(G,{name:"personalInfo.photo",control:r,errors:o,label:l("personalInfo.photo"),type:"file",inputLabelProps:{shrink:!0},showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.photoInfoTitle"),l("personalInfo.photoInfoText"))})})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"personalInfo.passportCopy",control:r,errors:o,label:l("personalInfo.passportCopy"),type:"file",inputLabelProps:{shrink:!0}})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"personalInfo.passportOrInn",control:r,errors:o,label:l("personalInfo.passportOrInn")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(W,{children:(0,$.jsx)(G,{name:"personalInfo.otherNames",control:r,errors:o,label:l("personalInfo.otherNames"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.otherNamesInfoTitle"),l("personalInfo.otherNamesInfoText"))})})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(W,{children:(0,$.jsx)(G,{name:"personalInfo.birthPlaceAndDate",control:r,errors:o,label:l("personalInfo.birthPlaceAndDate"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.placeAndDateInfoTitle"),l("personalInfo.placeAndDateInfoText"))})})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsxs)(j.A,{component:"fieldset",children:[(0,$.jsx)(A.A,{component:"legend",children:l("personalInfo.passportLost")}),(0,$.jsxs)(I.A,{row:!0,name:"personalInfo.passportLost",defaultValue:"no",children:[(0,$.jsx)(y.A,{value:"yes",control:(0,$.jsx)(v.A,{...r.register("personalInfo.passportLost")}),label:l("yes")}),(0,$.jsx)(y.A,{value:"no",control:(0,$.jsx)(v.A,{...r.register("personalInfo.passportLost")}),label:l("no")})]})]})}),"yes"===a&&(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"personalInfo.passportLostNumber",control:r,errors:o,label:l("personalInfo.passportLostDetails")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsxs)(j.A,{component:"fieldset",children:[(0,$.jsx)(A.A,{component:"legend",children:l("personalInfo.otherCitizenship")}),(0,$.jsxs)(I.A,{row:!0,name:"personalInfo.otherCitizenship",defaultValue:"no",children:[(0,$.jsx)(y.A,{value:"yes",control:(0,$.jsx)(v.A,{...r.register("personalInfo.otherCitizenship")}),label:l("yes")}),(0,$.jsx)(y.A,{value:"no",control:(0,$.jsx)(v.A,{...r.register("personalInfo.otherCitizenship")}),label:l("no")})]})]})}),"yes"===i&&(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"personalInfo.otherPassportDetails",control:r,errors:o,label:l("personalInfo.otherPassportDetails")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(W,{children:(0,$.jsx)(G,{name:"personalInfo.residenceAddress",control:r,errors:o,label:l("personalInfo.residenceAddress"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.addressInfoTitle"),l("personalInfo.actualInfoAddress"))})})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(W,{children:(0,$.jsx)(G,{name:"personalInfo.registeredAddress",control:r,errors:o,label:l("personalInfo.registeredAddress"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.addressInfoTitle"),l("personalInfo.addressInfoText"))})})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"personalInfo.contactNumber",control:r,errors:o,label:l("personalInfo.contactNumber")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(W,{children:(0,$.jsx)(G,{name:"personalInfo.contactNumbersLast5Years",control:r,errors:o,label:l("personalInfo.contactNumbersLast5Years"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.numbersLast5YearsInfoTitle"),l("personalInfo.numbersLast5YearsInfoText"))})})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"personalInfo.emailAddress",control:r,errors:o,label:l("personalInfo.emailAddress")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(W,{children:(0,$.jsx)(G,{name:"personalInfo.emailsLast5Years",control:r,errors:o,label:l("personalInfo.emailsLast5Years"),showInfoIcon:!0,onInfoIconClick:()=>b(l("personalInfo.emailsLast5YearsInfoTitle"),l("personalInfo.emailsLast5YearsInfoText"))})})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(W,{children:(0,$.jsx)(G,{name:"personalInfo.socialMedia",control:r,errors:o,label:l("personalInfo.socialMedia"),showInfoIcon:!0,showFileUpload:!0,onInfoIconClick:()=>b(l("personalInfo.socialInfoTitle"),l("personalInfo.socialInfo"))})})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsxs)(j.A,{component:"fieldset",children:[(0,$.jsx)(A.A,{component:"legend",children:l("personalInfo.otherMediaResources")}),(0,$.jsxs)(I.A,{row:!0,name:"personalInfo.otherMediaResources",defaultValue:"no",children:[(0,$.jsx)(y.A,{value:"yes",control:(0,$.jsx)(v.A,{...r.register("personalInfo.otherMediaResources")}),label:l("yes")}),(0,$.jsx)(y.A,{value:"no",control:(0,$.jsx)(v.A,{...r.register("personalInfo.otherMediaResources")}),label:l("no")})]})]})}),"yes"===d&&(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"personalInfo.otherMediaResourceDetails",control:r,errors:o,label:l("personalInfo.otherMediaResourceDetails")})})]}),(0,$.jsx)(ee,{open:c,onClose:()=>{p(!1),m(""),u("")},title:x,content:f})]})},se=e=>{let{control:r,errors:o}=e;const{t:s}=(0,n.Bd)();return(0,$.jsxs)("div",{children:[(0,$.jsx)(re._x,{children:s("familyInfo.title")}),(0,$.jsxs)(h.Ay,{container:!0,spacing:2,children:[(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.fatherName",control:r,errors:o,label:s("familyInfo.fatherName")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.fatherDOB",control:r,errors:o,label:s("familyInfo.fatherDOB"),type:"date",inputLabelProps:{shrink:!0}})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.motherName",control:r,errors:o,label:s("familyInfo.motherName")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.motherDOB",control:r,errors:o,label:s("familyInfo.motherDOB"),type:"date",inputLabelProps:{shrink:!0}})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsxs)(j.A,{component:"fieldset",children:[(0,$.jsx)(A.A,{component:"legend",children:s("familyInfo.parentsInUSA")}),(0,$.jsx)(t.xI,{name:"familyInfo.parentsInUSA",control:r,defaultValue:"no",render:e=>{let{field:r}=e;return(0,$.jsxs)(I.A,{row:!0,...r,children:[(0,$.jsx)(y.A,{value:"yes",control:(0,$.jsx)(v.A,{}),label:s("yes")}),(0,$.jsx)(y.A,{value:"no",control:(0,$.jsx)(v.A,{}),label:s("no")})]})}})]})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.maritalStatus",control:r,errors:o,label:s("familyInfo.maritalStatus")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.spouseName",control:r,errors:o,label:s("familyInfo.spouseName")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.spouseMaidenName",control:r,errors:o,label:s("familyInfo.spouseMaidenName")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.spouseDOB",control:r,errors:o,label:s("familyInfo.spouseDOB"),type:"date",inputLabelProps:{shrink:!0}})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.spouseBirthPlace",control:r,errors:o,label:s("familyInfo.spouseBirthPlace")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.spouseNationality",control:r,errors:o,label:s("familyInfo.spouseNationality")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.spouseAddress",control:r,errors:o,label:s("familyInfo.spouseAddress")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.previousMarriages",control:r,errors:o,label:s("familyInfo.previousMarriages")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.previousSpouses",control:r,errors:o,label:s("familyInfo.previousSpouses")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.previousSpouseDOB",control:r,errors:o,label:s("familyInfo.previousSpouseDOB"),type:"date",inputLabelProps:{shrink:!0}})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.marriageStartDate",control:r,errors:o,label:s("familyInfo.marriageStartDate"),type:"date",inputLabelProps:{shrink:!0}})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.marriageEndDate",control:r,errors:o,label:s("familyInfo.marriageEndDate"),type:"date",inputLabelProps:{shrink:!0}})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.previousSpouseBirthPlace",control:r,errors:o,label:s("familyInfo.previousSpouseBirthPlace")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.previousSpouseNationality",control:r,errors:o,label:s("familyInfo.previousSpouseNationality")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsxs)(j.A,{component:"fieldset",children:[(0,$.jsx)(A.A,{component:"legend",children:s("familyInfo.relativesInUSA")}),(0,$.jsx)(t.xI,{name:"familyInfo.relativesInUSA",control:r,defaultValue:"no",render:e=>{let{field:r}=e;return(0,$.jsxs)(I.A,{row:!0,...r,children:[(0,$.jsx)(y.A,{value:"yes",control:(0,$.jsx)(v.A,{}),label:s("yes")}),(0,$.jsx)(y.A,{value:"no",control:(0,$.jsx)(v.A,{}),label:s("no")})]})}})]})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.relativeNames",control:r,errors:o,label:s("familyInfo.relativeNames")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsx)(G,{name:"familyInfo.relativeStatus",control:r,errors:o,label:s("familyInfo.relativeStatus")})}),(0,$.jsx)(h.Ay,{item:!0,xs:12,children:(0,$.jsxs)(j.A,{component:"fieldset",children:[(0,$.jsx)(A.A,{component:"legend",children:s("familyInfo.otherRelativesInUSA")}),(0,$.jsx)(t.xI,{name:"familyInfo.otherRelativesInUSA",control:r,defaultValue:"no",render:e=>{let{field:r}=e;return(0,$.jsxs)(I.A,{row:!0,...r,children:[(0,$.jsx)(y.A,{value:"yes",control:(0,$.jsx)(v.A,{}),label:s("yes")}),(0,$.jsx)(y.A,{value:"no",control:(0,$.jsx)(v.A,{}),label:s("no")})]})}})]})})]})]})},ne=e=>{let{control:r,errors:o}=e;return(0,$.jsxs)("div",{children:[(0,$.jsx)("h2",{children:"\u041c\u0435\u0442\u0430 \u043f\u043e\u0457\u0437\u0434\u043a\u0438"}),(0,$.jsx)(t.xI,{name:"purposeOfTravel.stayDuration",control:r,render:e=>{let{field:r}=e;return(0,$.jsx)(H.A,{...r,label:"\u0421\u043a\u0456\u043b\u044c\u043a\u0438 \u043f\u043b\u0430\u043d\u0443\u0454\u0442\u0435 \u043f\u0435\u0440\u0435\u0431\u0443\u0432\u0430\u0442\u0438 \u0443 \u0421\u0428\u0410?",error:!!S(o,"purposeOfTravel.stayDuration"),helperText:S(o,"purposeOfTravel.stayDuration")||""})}}),(0,$.jsx)(t.xI,{name:"purposeOfTravel.tripFunding",control:r,render:e=>{let{field:r}=e;return(0,$.jsx)(H.A,{...r,label:"\u042f\u043a \u0412\u0438 \u043f\u043b\u0430\u043d\u0443\u0454\u0442\u0435 \u0444\u0456\u043d\u0430\u043d\u0441\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u043e\u044e \u043f\u043e\u0434\u043e\u0440\u043e\u0436?",error:!!S(o,"purposeOfTravel.tripFunding"),helperText:S(o,"purposeOfTravel.tripFunding")||""})}}),(0,$.jsx)(t.xI,{name:"purposeOfTravel.intentToReturn",control:r,render:e=>{let{field:r}=e;return(0,$.jsxs)(I.A,{...r,children:[(0,$.jsx)(y.A,{value:"yes",control:(0,$.jsx)(v.A,{}),label:"\u0422\u0430\u043a"}),(0,$.jsx)(y.A,{value:"no",control:(0,$.jsx)(v.A,{}),label:"\u041d\u0456"})]})}}),S(o,"purposeOfTravel.intentToReturn")&&(0,$.jsx)("p",{children:S(o,"purposeOfTravel.intentToReturn")})]})},te=e=>{let{control:r,errors:o}=e;const{getValues:s}=(0,t.xW)();return(0,$.jsxs)("div",{children:[(0,$.jsx)("h2",{children:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0435\u0439"}),(0,$.jsx)(t.xI,{name:"travelHistory.visitedUSA",control:r,render:e=>{let{field:r}=e;return(0,$.jsxs)(I.A,{...r,children:[(0,$.jsx)(y.A,{value:"yes",control:(0,$.jsx)(v.A,{}),label:"\u0422\u0430\u043a"}),(0,$.jsx)(y.A,{value:"no",control:(0,$.jsx)(v.A,{}),label:"\u041d\u0456"})]})}}),S(o,"travelHistory.visitedUSA")&&(0,$.jsx)("p",{children:S(o,"travelHistory.visitedUSA")}),"yes"===s("travelHistory.visitedUSA")&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.xI,{name:"travelHistory.usaVisitDates",control:r,render:e=>{let{field:r}=e;return(0,$.jsx)(H.A,{...r,label:"\u041a\u043e\u043b\u0438 \u0412\u0438 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u043b\u0438 \u0421\u0428\u0410?",error:!!S(o,"travelHistory.usaVisitDates"),helperText:S(o,"travelHistory.usaVisitDates")||""})}}),(0,$.jsx)(t.xI,{name:"travelHistory.usaVisitPurpose",control:r,render:e=>{let{field:r}=e;return(0,$.jsx)(H.A,{...r,label:"\u042f\u043a\u0430 \u0431\u0443\u043b\u0430 \u043c\u0435\u0442\u0430 \u0412\u0430\u0448\u043e\u0433\u043e \u0432\u0456\u0437\u0438\u0442\u0443?",error:!!S(o,"travelHistory.usaVisitPurpose"),helperText:S(o,"travelHistory.usaVisitPurpose")||""})}})]}),(0,$.jsx)(t.xI,{name:"travelHistory.otherTravels",control:r,render:e=>{let{field:r}=e;return(0,$.jsxs)(I.A,{...r,children:[(0,$.jsx)(y.A,{value:"yes",control:(0,$.jsx)(v.A,{}),label:"\u0422\u0430\u043a"}),(0,$.jsx)(y.A,{value:"no",control:(0,$.jsx)(v.A,{}),label:"\u041d\u0456"})]})}}),S(o,"travelHistory.otherTravels")&&(0,$.jsx)("p",{children:S(o,"travelHistory.otherTravels")}),"yes"===s("travelHistory.otherTravels")&&(0,$.jsx)(t.xI,{name:"travelHistory.travelCountries",control:r,render:e=>{let{field:r}=e;return(0,$.jsx)(H.A,{...r,label:"\u041f\u0435\u0440\u0435\u043b\u0456\u043a \u043a\u0440\u0430\u0457\u043d",error:!!S(o,"travelHistory.travelCountries"),helperText:S(o,"travelHistory.travelCountries")||""})}})]})},le=e=>{let{control:r,errors:o}=e;return(0,$.jsxs)("div",{children:[(0,$.jsx)("h2",{children:"\u0420\u043e\u0431\u043e\u0442\u0430 \u0442\u0430 \u043e\u0441\u0432\u0456\u0442\u0430"}),(0,$.jsx)(t.xI,{name:"workOrStudy",control:r,render:e=>{let{field:r}=e;return(0,$.jsx)(H.A,{...r,label:"\u0420\u043e\u0431\u043e\u0442\u0430 \u0430\u0431\u043e \u043d\u0430\u0432\u0447\u0430\u043d\u043d\u044f",error:!!o.workOrStudy,helperText:S(o,"workOrStudy")})}}),(0,$.jsx)(t.xI,{name:"profession",control:r,render:e=>{let{field:r}=e;return(0,$.jsx)(H.A,{...r,label:"\u041f\u0440\u043e\u0444\u0435\u0441\u0456\u044f",error:!!o.profession,helperText:S(o,"profession")})}}),(0,$.jsx)(t.xI,{name:"organizationName",control:r,render:e=>{let{field:r}=e;return(0,$.jsx)(H.A,{...r,label:"\u041d\u0430\u0437\u0432\u0430 \u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u0457",error:!!o.organizationName,helperText:S(o,"organizationName")})}})]})},ae=()=>{const{t:e}=(0,n.Bd)(),r=(0,t.mN)({resolver:(0,l.t)(u),defaultValues:{personalInfo:{surname:"",givenName:"",patronymic:"",birthDate:void 0,photo:void 0,passportCopy:void 0,passportDetails:"",passportOrInn:"",otherNames:"",birthPlaceAndDate:"",passportLost:!1,passportLostDetails:"",otherCitizenship:!1,otherPassportDetails:"",residenceAddress:"",registeredAddress:"",contactNumber:"",contactNumbersLast5Years:"",emailAddress:"",emailsLast5Years:"",socialMedia:[],otherMediaResources:!1,otherMediaResourceDetails:""},familyInfo:{},purposeOfTravel:{},travelHistory:{},workAndEducation:{}}});return(0,$.jsx)(B,{children:(0,$.jsx)(z,{children:(0,$.jsx)(t.Op,{...r,children:(0,$.jsxs)("form",{onSubmit:r.handleSubmit((e=>{console.log(e)})),children:[(0,$.jsx)(oe,{control:r.control,errors:r.formState.errors}),(0,$.jsx)(_,{}),(0,$.jsx)(se,{control:r.control,errors:r.formState.errors}),(0,$.jsx)(_,{}),(0,$.jsx)(ne,{control:r.control,errors:r.formState.errors}),(0,$.jsx)(_,{}),(0,$.jsx)(te,{control:r.control,errors:r.formState.errors}),(0,$.jsx)(_,{}),(0,$.jsx)(le,{control:r.control,errors:r.formState.errors}),(0,$.jsx)(_,{}),(0,$.jsx)(a.A,{type:"submit",variant:"outlined",color:"primary",children:e("send")})]})})})})},ie=()=>(0,$.jsx)("div",{children:(0,$.jsx)(ae,{})})}}]);
//# sourceMappingURL=664.55d5c978.chunk.js.map