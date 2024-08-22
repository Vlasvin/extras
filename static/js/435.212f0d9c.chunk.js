"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[435],{4896:(e,r,n)=>{n.d(r,{$P:()=>p,AC:()=>c,_x:()=>i,g0:()=>d,hE:()=>a,hh:()=>x});var o=n(5865),s=n(6446),l=n(5721),t=n(6060);const a=(0,t.A)(o.A)((e=>{let{theme:r}=e;return{fontSize:"clamp(34px, 5.55vw, 54px)",fontWeight:800,lineHeight:1.25,letterSpacing:".01em",marginBottom:"24px",textAlign:"center"}})),i=(0,t.A)(o.A)((e=>{let{theme:r}=e;return{fontSize:"clamp(26px, 5.55vw, 42px)",lineHeight:1.08,fontWeight:500,letterSpacing:".01em",marginBottom:"24px",textAlign:"center"}})),c=(0,t.A)(s.A)((e=>{let{theme:r}=e;return{marginBottom:"48px",textIndent:"1em"}})),d=(0,t.A)(l.A)((e=>{let{theme:r}=e;return{marginBottom:"48px"}})),x=(0,t.A)(s.A)((e=>{let{theme:r}=e;return{minWidth:"40px",minHeight:"40px",display:"flex",justifyContent:"center",alignItems:"center",marginRight:r.spacing(2),[r.breakpoints.down("sm")]:{marginRight:0,marginBottom:r.spacing(1)}}})),p=(0,t.A)(s.A)((e=>{let{theme:r}=e;return{display:"flex",justifyContent:"center",textAlign:"center",marginLeft:"16px"}}))},6435:(e,r,n)=>{n.r(r),n.d(r,{default:()=>le});var o,s,l,t,a,i,c,d,x,p,m=n(5043),u=n(4858),j=n(6213),h=n(1906),f=n(4117),y=n(899),v=n(8903),A=n(3193),I=n(1292),b=n(7972),g=n(8577),S=n(4791),k=n(8348),T=n(2167),w=n(3959),O=n(1379),E=n(9859),P=n(7528),D=n(5903),C=n(7392),H=n(6446);const q=D.A.div(o||(o=(0,P.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),L=D.A.div(s||(s=(0,P.A)(["\n  width: 100%;\n  max-width: 800px;\n  padding: 40px 100px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  @media (max-width: 600px) {\n    padding: 0;\n    box-shadow: none;\n  }\n"]))),N=((0,D.A)(O.A)(l||(l=(0,P.A)(["\n  max-width: 600px;\n"]))),D.A.div(t||(t=(0,P.A)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  margin-bottom: 16px;\n  width: 100%;\n"])))),B=(D.A.div(a||(a=(0,P.A)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  position: relative;\n"]))),(0,D.A)(C.A)(i||(i=(0,P.A)(["\n  position: absolute;\n  top: 4%;\n  right: 13px;\n  transform: translate(50%, 50%);\n"])))),M=(0,D.A)(C.A)(c||(c=(0,P.A)(["\n  margin-left: 2px;\n  margin-bottom: 20px;\n  padding: 4px;\n  padding-right: 1px;\n"]))),F=(0,D.A)(H.A)(d||(d=(0,P.A)(["\n  max-width: 600px;\n  width: 100%;\n"]))),V=D.A.div(x||(x=(0,P.A)(["\n  margin-bottom: 48px;\n"]))),z=D.A.span(p||(p=(0,P.A)(["\n  font-size: 16px;\n"])));var U=n(579);const R=e=>{let{name:r,control:n,errors:o,label:s,type:l="text",inputLabelProps:t={},showInfoIcon:a=!1,onInfoIconClick:i,showFileUpload:c=!1}=e;const{t:d}=(0,f.Bd)(),x=(0,m.useRef)(null);return(0,U.jsx)(N,{children:(0,U.jsx)(u.xI,{name:r,control:n,render:e=>{let{field:n}=e;return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(O.A,{...n,label:s,type:l,InputLabelProps:t,error:!!(0,E.u)(o,r),helperText:(0,E.u)(o,r)||"",fullWidth:!0}),a&&(0,U.jsx)(T.A,{title:d("pushToInfo"),children:(0,U.jsx)(B,{"aria-label":"info",onClick:i,children:(0,U.jsx)(k.A,{})})}),c&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("input",{type:"file",ref:x,style:{display:"none"},onChange:e=>((e,r)=>{var n;const o=(null===(n=e.target.files)||void 0===n?void 0:n[0])||null;o&&(console.log("Selected file - ".concat(o.name)),r(o))})(e,(e=>n.onChange(e)))}),(0,U.jsx)(T.A,{title:d("pushToUpload"),children:(0,U.jsx)(M,{"aria-label":"upload file",onClick:()=>{var e;return null===(e=x.current)||void 0===e?void 0:e.click()},children:(0,U.jsx)(w.A,{})})})]})]})}})})};var _=n(35),Y=n(6600),W=n(5316),J=n(8533),$=n(9347);const G=e=>{let{open:r,onClose:n,title:o,content:s}=e;const{t:l}=(0,f.Bd)();return(0,U.jsxs)(_.A,{open:r,onClose:n,children:[(0,U.jsx)(Y.A,{children:o}),(0,U.jsx)(W.A,{children:(0,U.jsx)(J.A,{children:s})}),(0,U.jsx)($.A,{children:(0,U.jsx)(h.A,{onClick:n,variant:"outlined",color:"primary",sx:{fontSize:"0.8rem",padding:"2px 10px"},children:l("close")})})]})};var K=n(4896);const Q=e=>{let{control:r,errors:n}=e;const{t:o}=(0,f.Bd)(),{register:s,watch:l}=(0,u.xW)(),t=l("personalInfo.passportLost",!1),a=l("personalInfo.otherCitizenship",!1),i=l("personalInfo.otherMediaResources",!1),[c,d]=(0,m.useState)(!1),[x,p]=(0,m.useState)(""),[j,h]=(0,m.useState)(""),y=(e,r)=>{p(e),h(r),d(!0)};return(0,U.jsxs)("div",{children:[(0,U.jsx)(K._x,{children:o("personalInfo.title")}),(0,U.jsxs)(v.Ay,{container:!0,spacing:2,children:[(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(F,{children:(0,U.jsx)(R,{name:"personalInfo.surname",control:r,errors:n,label:o("personalInfo.surname"),showInfoIcon:!0,onInfoIconClick:()=>y(o("personalInfo.surnameInfoTitle"),o("personalInfo.passportDetails"))})})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"personalInfo.givenName",control:r,errors:n,label:o("personalInfo.givenName")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"personalInfo.patronymic",control:r,errors:n,label:o("personalInfo.patronymic")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(F,{children:(0,U.jsx)(R,{name:"personalInfo.photo",control:r,errors:n,label:o("personalInfo.photo"),type:"file",inputLabelProps:{shrink:!0},showInfoIcon:!0,onInfoIconClick:()=>y(o("personalInfo.photoInfoTitle"),o("personalInfo.photoInfoText"))})})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"personalInfo.passportCopy",control:r,errors:n,label:o("personalInfo.passportCopy"),type:"file",inputLabelProps:{shrink:!0}})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"personalInfo.passportOrInn",control:r,errors:n,label:o("personalInfo.passportOrInn")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(F,{children:(0,U.jsx)(R,{name:"personalInfo.otherNames",control:r,errors:n,label:o("personalInfo.otherNames"),showInfoIcon:!0,onInfoIconClick:()=>y(o("personalInfo.otherNamesInfoTitle"),o("personalInfo.otherNamesInfoText"))})})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(F,{children:(0,U.jsx)(R,{name:"personalInfo.birthPlaceAndDate",control:r,errors:n,label:o("personalInfo.birthPlaceAndDate"),showInfoIcon:!0,onInfoIconClick:()=>y(o("personalInfo.placeAndDateInfoTitle"),o("personalInfo.placeAndDateInfoText"))})})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsxs)(A.A,{component:"fieldset",children:[(0,U.jsx)(I.A,{component:"legend",children:o("personalInfo.passportLost")}),(0,U.jsxs)(b.A,{row:!0,name:"personalInfo.passportLost",defaultValue:"false",children:[(0,U.jsx)(g.A,{value:"true",control:(0,U.jsx)(S.A,{...s("personalInfo.passportLost")}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"false",control:(0,U.jsx)(S.A,{...s("personalInfo.passportLost")}),label:(0,U.jsx)(z,{children:o("no")})})]})]})}),t&&(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"personalInfo.passportLostNumber",control:r,errors:n,label:o("personalInfo.passportLostDetails")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsxs)(A.A,{component:"fieldset",children:[(0,U.jsx)(I.A,{component:"legend",children:o("personalInfo.otherCitizenship")}),(0,U.jsxs)(b.A,{row:!0,name:"personalInfo.otherCitizenship",defaultValue:"false",children:[(0,U.jsx)(g.A,{value:"true",control:(0,U.jsx)(S.A,{...s("personalInfo.otherCitizenship")}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"false",control:(0,U.jsx)(S.A,{...s("personalInfo.otherCitizenship")}),label:(0,U.jsx)(z,{children:o("no")})})]})]})}),a&&(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"personalInfo.otherPassportDetails",control:r,errors:n,label:o("personalInfo.otherPassportDetails")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(F,{children:(0,U.jsx)(R,{name:"personalInfo.residenceAddress",control:r,errors:n,label:o("personalInfo.residenceAddress"),showInfoIcon:!0,onInfoIconClick:()=>y(o("personalInfo.addressInfoTitle"),o("personalInfo.actualInfoAddress"))})})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(F,{children:(0,U.jsx)(R,{name:"personalInfo.registeredAddress",control:r,errors:n,label:o("personalInfo.registeredAddress"),showInfoIcon:!0,onInfoIconClick:()=>y(o("personalInfo.addressInfoTitle"),o("personalInfo.addressInfoText"))})})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"personalInfo.contactNumber",control:r,errors:n,label:o("personalInfo.contactNumber")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(F,{children:(0,U.jsx)(R,{name:"personalInfo.contactNumbersLast5Years",control:r,errors:n,label:o("personalInfo.contactNumbersLast5Years"),showInfoIcon:!0,onInfoIconClick:()=>y(o("personalInfo.numbersLast5YearsInfoTitle"),o("personalInfo.numbersLast5YearsInfoText"))})})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"personalInfo.emailAddress",control:r,errors:n,label:o("personalInfo.emailAddress")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(F,{children:(0,U.jsx)(R,{name:"personalInfo.emailsLast5Years",control:r,errors:n,label:o("personalInfo.emailsLast5Years"),showInfoIcon:!0,onInfoIconClick:()=>y(o("personalInfo.emailsLast5YearsInfoTitle"),o("personalInfo.emailsLast5YearsInfoText"))})})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(F,{children:(0,U.jsx)(R,{name:"personalInfo.socialMedia",control:r,errors:n,label:o("personalInfo.socialMedia"),showInfoIcon:!0,onInfoIconClick:()=>y(o("personalInfo.socialInfoTitle"),o("personalInfo.socialInfo"))})})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(F,{children:(0,U.jsx)(R,{name:"personalInfo.socialMediaFile",control:r,errors:n,label:o("personalInfo.socialMediaFile"),type:"file",inputLabelProps:{shrink:!0},onInfoIconClick:()=>y(o("personalInfo.socialMediaFileInfoTitle"),o("personalInfo.socialMediaFileInfoText"))})})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsxs)(A.A,{component:"fieldset",children:[(0,U.jsx)(I.A,{component:"legend",children:o("personalInfo.otherMediaResources")}),(0,U.jsxs)(b.A,{row:!0,name:"personalInfo.otherMediaResources",defaultValue:"false",children:[(0,U.jsx)(g.A,{value:"true",control:(0,U.jsx)(S.A,{...s("personalInfo.otherMediaResources")}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"false",control:(0,U.jsx)(S.A,{...s("personalInfo.otherMediaResources")}),label:(0,U.jsx)(z,{children:o("no")})})]})]})}),i&&(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"personalInfo.otherMediaResourceDetails",control:r,errors:n,label:o("personalInfo.otherMediaResourceDetails")})})]}),(0,U.jsx)(G,{open:c,onClose:()=>{d(!1),p(""),h("")},title:x,content:j})]})},X=e=>{let{control:r,errors:n}=e;const{t:o}=(0,f.Bd)(),[s,l]=(0,m.useState)(!1),[t,a]=(0,m.useState)(""),[i,c]=(0,m.useState)(""),[d,x]=(0,m.useState)("no"),p=(e,r)=>{a(e),c(r),l(!0)};return(0,U.jsxs)("div",{children:[(0,U.jsx)(K._x,{children:o("familyInfo.title")}),(0,U.jsxs)(v.Ay,{container:!0,spacing:2,children:[(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.fatherName",control:r,errors:n,label:o("familyInfo.fatherName")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.fatherDOB",control:r,errors:n,label:o("familyInfo.fatherDOB"),type:"date",inputLabelProps:{shrink:!0}})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.motherName",control:r,errors:n,label:o("familyInfo.motherName")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.motherDOB",control:r,errors:n,label:o("familyInfo.motherDOB"),type:"date",inputLabelProps:{shrink:!0}})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsxs)(A.A,{component:"fieldset",children:[(0,U.jsx)(I.A,{component:"legend",children:o("familyInfo.parentsInUSA")}),(0,U.jsx)(u.xI,{name:"familyInfo.parentsInUSA",control:r,defaultValue:"no",render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{row:!0,...r,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("no")})})]})}})]})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(F,{children:(0,U.jsx)(R,{name:"familyInfo.maritalStatus",control:r,errors:n,label:o("familyInfo.maritalStatus"),showInfoIcon:!0,onInfoIconClick:()=>p(o("familyInfo.maritalInfoTitle"),o("familyInfo.maritalInfoSubscribe"))})})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.spouseName",control:r,errors:n,label:o("familyInfo.spouseName")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.spouseMaidenName",control:r,errors:n,label:o("familyInfo.spouseMaidenName")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.spouseDOB",control:r,errors:n,label:o("familyInfo.spouseDOB"),type:"date",inputLabelProps:{shrink:!0}})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.spouseBirthPlace",control:r,errors:n,label:o("familyInfo.spouseBirthPlace")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.spouseNationality",control:r,errors:n,label:o("familyInfo.spouseNationality")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.spouseAddress",control:r,errors:n,label:o("familyInfo.spouseAddress")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(F,{children:(0,U.jsx)(R,{name:"familyInfo.previousMarriages",control:r,errors:n,label:o("familyInfo.previousMarriages"),showInfoIcon:!0,onInfoIconClick:()=>p(o("familyInfo.previousMarriageInfoTitle"),o("familyInfo.previousMarriageInfoSubscribe"))})})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.previousSpouses",control:r,errors:n,label:o("familyInfo.previousSpouses")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.previousSpouseDOB",control:r,errors:n,label:o("familyInfo.previousSpouseDOB"),type:"date",inputLabelProps:{shrink:!0}})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.marriageStartDate",control:r,errors:n,label:o("familyInfo.marriageStartDate"),type:"date",inputLabelProps:{shrink:!0}})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.marriageEndDate",control:r,errors:n,label:o("familyInfo.marriageEndDate"),type:"date",inputLabelProps:{shrink:!0}})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.previousSpouseBirthPlace",control:r,errors:n,label:o("familyInfo.previousSpouseBirthPlace")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.previousSpouseNationality",control:r,errors:n,label:o("familyInfo.previousSpouseNationality")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsxs)(A.A,{component:"fieldset",children:[(0,U.jsx)(I.A,{component:"legend",children:o("familyInfo.relativesInUSA")}),(0,U.jsx)(u.xI,{name:"familyInfo.relativesInUSA",control:r,defaultValue:"no",render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{row:!0,...r,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("yes")}),onChange:()=>x("yes")}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("no")}),onChange:()=>x("no")})]})}})]})}),"yes"===d&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.relativeNames",control:r,errors:n,label:o("familyInfo.relativeNames")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"familyInfo.relativeStatus",control:r,errors:n,label:o("familyInfo.relativeStatus")})})]}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsxs)(A.A,{component:"fieldset",children:[(0,U.jsx)(I.A,{component:"legend",children:o("familyInfo.otherRelativesInUSA")}),(0,U.jsx)(u.xI,{name:"familyInfo.otherRelativesInUSA",control:r,defaultValue:"no",render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{row:!0,...r,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("no")})})]})}})]})})]}),(0,U.jsx)(G,{open:s,onClose:()=>{l(!1),a(""),c("")},title:t,content:i})]})},Z=e=>{let{control:r,errors:n}=e;const{t:o}=(0,f.Bd)(),[s,l]=m.useState(!1),[t,a]=m.useState(""),[i,c]=m.useState(""),[d,x]=m.useState(!1);return(0,U.jsxs)("div",{children:[(0,U.jsx)(K._x,{children:o("purposeOfTravel.title")}),(0,U.jsxs)(v.Ay,{container:!0,spacing:2,children:[(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.travelPlans.arrivalDate",control:r,errors:n,label:o("purposeOfTravel.travelPlans.arrivalDate"),showInfoIcon:!0,onInfoIconClick:()=>{return e=o("purposeOfTravel.travelPlans.arrivalDate"),r=o("purposeOfTravel.travelPlans.note"),a(e),c(r),void l(!0);var e,r}})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.travelPlans.arrivalCity",control:r,errors:n,label:o("purposeOfTravel.travelPlans.arrivalCity")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.travelPlans.placesToVisit",control:r,errors:n,label:o("purposeOfTravel.travelPlans.placesToVisit")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.addressInUSA",control:r,errors:n,label:o("purposeOfTravel.addressInUSA")})}),(0,U.jsxs)(v.Ay,{item:!0,xs:12,children:[(0,U.jsx)("h3",{children:o("purposeOfTravel.invitingPartyInfo")}),(0,U.jsx)(R,{name:"purposeOfTravel.invitingParty.name",control:r,errors:n,label:o("purposeOfTravel.invitingParty.name")})]}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.invitingParty.phone",control:r,errors:n,label:o("purposeOfTravel.invitingParty.phone")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.invitingParty.email",control:r,errors:n,label:o("purposeOfTravel.invitingParty.email")})}),(0,U.jsxs)(v.Ay,{item:!0,xs:12,children:[(0,U.jsx)("h3",{children:o("purposeOfTravel.invitingParty.relationship")}),(0,U.jsx)(u.xI,{name:"purposeOfTravel.invitingParty.relationship",control:r,render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{...r,children:[(0,U.jsx)(g.A,{value:"relative",control:(0,U.jsx)(S.A,{}),label:o("purposeOfTravel.invitingParty.relative")}),(0,U.jsx)(g.A,{value:"friend",control:(0,U.jsx)(S.A,{}),label:o("purposeOfTravel.invitingParty.friend")}),(0,U.jsx)(g.A,{value:"businessPartner",control:(0,U.jsx)(S.A,{}),label:o("purposeOfTravel.invitingParty.businessPartner")}),(0,U.jsx)(g.A,{value:"employer",control:(0,U.jsx)(S.A,{}),label:o("purposeOfTravel.invitingParty.employer")}),(0,U.jsx)(g.A,{value:"educationalInstitution",control:(0,U.jsx)(S.A,{}),label:o("purposeOfTravel.invitingParty.educationalInstitution")}),(0,U.jsx)(g.A,{value:"other",control:(0,U.jsx)(S.A,{}),label:o("purposeOfTravel.invitingParty.other")})]})}}),(0,E.u)(n,"purposeOfTravel.invitingParty.relationship")&&(0,U.jsx)("p",{children:(0,E.u)(n,"purposeOfTravel.invitingParty.relationship")})]}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.durationOfStay",control:r,errors:n,label:o("purposeOfTravel.durationOfStay")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.travelPurpose",control:r,errors:n,label:o("purposeOfTravel.travelPurpose")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.travelCompanions",control:r,errors:n,label:o("purposeOfTravel.travelCompanions")})}),(0,U.jsxs)(v.Ay,{item:!0,xs:12,children:[(0,U.jsx)("h3",{children:o("purposeOfTravel.tripSponsor")}),(0,U.jsx)(u.xI,{name:"purposeOfTravel.tripSponsor",control:r,render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{...r,onChange:e=>{r.onChange(e),x("otherPersonOrCompany"===e.target.value)},children:[(0,U.jsx)(g.A,{value:"self",control:(0,U.jsx)(S.A,{}),label:o("purposeOfTravel.self")}),(0,U.jsx)(g.A,{value:"otherPersonOrCompany",control:(0,U.jsx)(S.A,{}),label:o("purposeOfTravel.otherPersonOrCompany")})]})}})]}),d&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.sponsorInfo.surname",control:r,errors:n,label:o("purposeOfTravel.surname")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.sponsorInfo.name",control:r,errors:n,label:o("purposeOfTravel.name")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.sponsorInfo.address",control:r,errors:n,label:o("purposeOfTravel.address")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.sponsorInfo.phone",control:r,errors:n,label:o("purposeOfTravel.phone")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.sponsorInfo.email",control:r,errors:n,label:o("purposeOfTravel.email")})}),(0,U.jsx)(v.Ay,{item:!0,xs:12,children:(0,U.jsx)(R,{name:"purposeOfTravel.question",control:r,errors:n,label:o("purposeOfTravel.question")})})]})]}),(0,U.jsx)(G,{open:s,onClose:()=>{l(!1),a(""),c("")},title:t,content:i})]})};var ee=n(5865);const re=e=>{let{control:r,errors:n}=e;const{t:o}=(0,f.Bd)(),{watch:s}=(0,u.xW)(),l=s("travelHistory.visitedUSA"),t=s("travelHistory.visaDenied"),a=s("travelHistory.previousTravel"),i=s("travelHistory.immigrationPetition"),c=s("travelHistory.driverLicense"),d=s("travelHistory.ssn");return(0,U.jsxs)("div",{children:[(0,U.jsx)(K._x,{children:o("travelHistory.title")}),(0,U.jsx)(R,{name:"travelHistory.countriesVisited",control:r,errors:n,label:o("travelHistory.countriesVisited")}),(0,U.jsx)(ee.A,{variant:"h6",children:o("travelHistory.visitedUSA")}),(0,U.jsx)(u.xI,{name:"travelHistory.visitedUSA",control:r,render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{...r,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("no")})})]})}}),(0,E.u)(n,"travelHistory.visitedUSA")&&(0,U.jsx)("p",{children:(0,E.u)(n,"travelHistory.visitedUSA")}),"yes"===l&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(R,{name:"travelHistory.visaDates",control:r,errors:n,label:o("travelHistory.visaDates")}),(0,U.jsx)(R,{name:"travelHistory.visaNumber",control:r,errors:n,label:o("travelHistory.visaNumber")})]}),(0,U.jsx)(ee.A,{variant:"h6",children:o("travelHistory.visaDenied")}),(0,U.jsx)(u.xI,{name:"travelHistory.visaDenied",control:r,render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{...r,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("no")})})]})}}),(0,E.u)(n,"travelHistory.visaDenied")&&(0,U.jsx)("p",{children:(0,E.u)(n,"travelHistory.visaDenied")}),"yes"===t&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(R,{name:"travelHistory.denialDate",control:r,errors:n,label:o("travelHistory.denialDate")}),(0,U.jsx)(R,{name:"travelHistory.denialPlace",control:r,errors:n,label:o("travelHistory.denialPlace")}),(0,U.jsx)(R,{name:"travelHistory.denialType",control:r,errors:n,label:o("travelHistory.denialType")})]}),(0,U.jsx)(ee.A,{variant:"h6",children:o("travelHistory.previousTravel")}),(0,U.jsx)(u.xI,{name:"travelHistory.previousTravel",control:r,render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{...r,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("no")})})]})}}),(0,E.u)(n,"travelHistory.previousTravel")&&(0,U.jsx)("p",{children:(0,E.u)(n,"travelHistory.previousTravel")}),"yes"===a&&(0,U.jsx)(U.Fragment,{children:[...Array(5)].map(((e,s)=>(0,U.jsxs)(m.Fragment,{children:[(0,U.jsx)(R,{name:"travelHistory.arrivalDate".concat(s),control:r,errors:n,label:o("travelHistory.arrivalDate")}),(0,U.jsx)(R,{name:"travelHistory.stayDuration".concat(s),control:r,errors:n,label:o("travelHistory.stayDuration")})]},s)))}),(0,U.jsx)(ee.A,{variant:"h6",children:o("travelHistory.immigrationPetition")}),(0,U.jsx)(u.xI,{name:"travelHistory.immigrationPetition",control:r,render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{...r,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("no")})})]})}}),(0,E.u)(n,"travelHistory.immigrationPetition")&&(0,U.jsx)("p",{children:(0,E.u)(n,"travelHistory.immigrationPetition")}),"yes"===i&&(0,U.jsx)(R,{name:"travelHistory.petitionDetails",control:r,errors:n,label:o("travelHistory.petitionDetails")}),(0,U.jsx)(ee.A,{variant:"h6",children:o("travelHistory.driverLicense")}),(0,U.jsx)(u.xI,{name:"travelHistory.driverLicense",control:r,render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{...r,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("no")})})]})}}),(0,E.u)(n,"travelHistory.driverLicense")&&(0,U.jsx)("p",{children:(0,E.u)(n,"travelHistory.driverLicense")}),"yes"===c&&(0,U.jsx)(R,{name:"travelHistory.licenseDetails",control:r,errors:n,label:o("travelHistory.licenseDetails")}),(0,U.jsx)(ee.A,{variant:"h6",children:o("travelHistory.ssn")}),(0,U.jsx)(u.xI,{name:"travelHistory.ssn",control:r,render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{...r,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("no")})})]})}}),(0,E.u)(n,"travelHistory.ssn")&&(0,U.jsx)("p",{children:(0,E.u)(n,"travelHistory.ssn")}),"yes"===d&&(0,U.jsx)(R,{name:"travelHistory.ssnDetails",control:r,errors:n,label:o("travelHistory.ssnDetails")})]})},ne=e=>{let{control:r,errors:n}=e;const{t:o}=(0,f.Bd)(),[s,l]=(0,m.useState)(!1),[t,a]=(0,m.useState)(""),[i,c]=(0,m.useState)("");return(0,U.jsxs)("div",{children:[(0,U.jsx)(K._x,{children:o("workAndEducation.title")}),(0,U.jsx)("h3",{children:o("workAndEducation.currentEmployer")}),(0,U.jsx)(R,{name:"currentEmployer.companyName",control:r,errors:n,label:o("workAndEducation.companyName"),showInfoIcon:!0,onInfoIconClick:()=>{return e=o("workAndEducation.infoDialogTitle"),r=o("workAndEducation.infoDialogContent"),a(e),c(r),void l(!0);var e,r}}),(0,U.jsx)(R,{name:"currentEmployer.address",control:r,errors:n,label:o("workAndEducation.address")}),(0,U.jsx)(R,{name:"currentEmployer.phone",control:r,errors:n,label:o("workAndEducation.phone")}),(0,U.jsx)(R,{name:"currentEmployer.startDate",control:r,errors:n,label:o("workAndEducation.startDate"),type:"date",inputLabelProps:{shrink:!0}}),(0,U.jsx)(R,{name:"currentEmployer.position",control:r,errors:n,label:o("workAndEducation.position")}),(0,U.jsx)(R,{name:"currentEmployer.duties",control:r,errors:n,label:o("workAndEducation.duties")}),(0,U.jsx)("h3",{children:o("workAndEducation.averageMonthlyIncome")}),(0,U.jsx)(R,{name:"averageMonthlyIncome",control:r,errors:n,label:o("workAndEducation.averageMonthlyIncome")}),(0,U.jsx)("h3",{children:o("workAndEducation.previousEmployer")}),[...Array(3)].map(((e,s)=>(0,U.jsxs)("div",{children:[(0,U.jsx)(R,{name:"previousEmployer[".concat(s,"].companyName"),control:r,errors:n,label:o("workAndEducation.companyName")}),(0,U.jsx)(R,{name:"previousEmployer[".concat(s,"].address"),control:r,errors:n,label:o("workAndEducation.address")}),(0,U.jsx)(R,{name:"previousEmployer[".concat(s,"].phone"),control:r,errors:n,label:o("workAndEducation.phone")}),(0,U.jsx)(R,{name:"previousEmployer[".concat(s,"].startDate"),control:r,errors:n,label:o("workAndEducation.startDate"),type:"date",inputLabelProps:{shrink:!0}}),(0,U.jsx)(R,{name:"previousEmployer[".concat(s,"].position"),control:r,errors:n,label:o("workAndEducation.position")}),(0,U.jsx)(R,{name:"previousEmployer[".concat(s,"].duties"),control:r,errors:n,label:o("workAndEducation.duties")})]},s))),(0,U.jsx)("h3",{children:o("workAndEducation.highSchool")}),(0,U.jsx)(R,{name:"highSchool.name",control:r,errors:n,label:o("workAndEducation.schoolName")}),(0,U.jsx)(R,{name:"highSchool.address",control:r,errors:n,label:o("workAndEducation.address")}),(0,U.jsx)(R,{name:"highSchool.startDate",control:r,errors:n,label:o("workAndEducation.startDate"),type:"date",inputLabelProps:{shrink:!0}}),(0,U.jsx)(R,{name:"highSchool.endDate",control:r,errors:n,label:o("workAndEducation.endDate"),type:"date",inputLabelProps:{shrink:!0}}),(0,U.jsx)("h3",{children:o("workAndEducation.higherEducation")}),[...Array(3)].map(((e,s)=>(0,U.jsxs)("div",{children:[(0,U.jsx)(R,{name:"higherEducation[".concat(s,"].name"),control:r,errors:n,label:o("workAndEducation.institutionName")}),(0,U.jsx)(R,{name:"higherEducation[".concat(s,"].address"),control:r,errors:n,label:o("workAndEducation.address")}),(0,U.jsx)(R,{name:"higherEducation[".concat(s,"].startDate"),control:r,errors:n,label:o("workAndEducation.startDate"),type:"date",inputLabelProps:{shrink:!0}}),(0,U.jsx)(R,{name:"higherEducation[".concat(s,"].endDate"),control:r,errors:n,label:o("workAndEducation.endDate"),type:"date",inputLabelProps:{shrink:!0}}),(0,U.jsx)(R,{name:"higherEducation[".concat(s,"].faculty"),control:r,errors:n,label:o("workAndEducation.faculty")})]},s))),(0,U.jsx)(ee.A,{variant:"h6",children:o("workAndEducation.socialOrganizations")}),(0,U.jsx)(u.xI,{name:"socialOrganizations",control:r,render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{value:r.value||"",onChange:r.onChange,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("no")})})]})}}),(0,E.u)(n,"socialOrganizations")&&(0,U.jsx)("p",{children:(0,E.u)(n,"socialOrganizations")}),"yes"===r._formValues.socialOrganizations&&(0,U.jsx)(R,{name:"socialOrganizations.details",control:r,errors:n,label:o("workAndEducation.socialOrganizationsDetails")}),(0,U.jsx)(ee.A,{variant:"h6",children:o("workAndEducation.tribe")}),(0,U.jsx)(u.xI,{name:"tribe",control:r,render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{value:r.value||"",onChange:r.onChange,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("no")})})]})}}),(0,E.u)(n,"tribe")&&(0,U.jsx)("p",{children:(0,E.u)(n,"tribe")}),"yes"===r._formValues.tribe&&(0,U.jsx)(R,{name:"tribe.details",control:r,errors:n,label:o("workAndEducation.tribeDetails")}),(0,U.jsx)(ee.A,{variant:"h6",children:o("workAndEducation.militaryService")}),(0,U.jsx)(u.xI,{name:"militaryService",control:r,render:e=>{let{field:r}=e;return(0,U.jsxs)(b.A,{value:r.value||"",onChange:r.onChange,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("yes")})}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:(0,U.jsx)(z,{children:o("no")})})]})}}),(0,E.u)(n,"militaryService")&&(0,U.jsx)("p",{children:(0,E.u)(n,"militaryService")}),"yes"===r._formValues.militaryService&&(0,U.jsxs)("div",{children:[(0,U.jsx)(R,{name:"militaryService.country",control:r,errors:n,label:o("workAndEducation.country")}),(0,U.jsx)(R,{name:"militaryService.serviceType",control:r,errors:n,label:o("workAndEducation.serviceType")}),(0,U.jsx)(R,{name:"militaryService.rank",control:r,errors:n,label:o("workAndEducation.militaryRank")}),(0,U.jsx)(R,{name:"militaryService.specialty",control:r,errors:n,label:o("workAndEducation.militarySpecialty")}),(0,U.jsx)(R,{name:"militaryService.startDate",control:r,errors:n,label:o("workAndEducation.militaryStartDate"),type:"date",inputLabelProps:{shrink:!0}}),(0,U.jsx)(R,{name:"militaryService.endDate",control:r,errors:n,label:o("workAndEducation.militaryEndDate"),type:"date",inputLabelProps:{shrink:!0}})]}),(0,U.jsx)(G,{open:s,onClose:()=>{l(!1)},title:t,content:i})]})},oe=()=>{const{control:e}=(0,u.xW)(),{t:r}=(0,f.Bd)(),n=[r("questionSection.question1"),r("questionSection.question2"),r("questionSection.question3"),r("questionSection.question4"),r("questionSection.question5"),r("questionSection.question6"),r("questionSection.question7"),r("questionSection.question8"),r("questionSection.question9"),r("questionSection.question10"),r("questionSection.question11"),r("questionSection.question12"),r("questionSection.question13"),r("questionSection.question14"),r("questionSection.question15"),r("questionSection.question16"),r("questionSection.question17"),r("questionSection.question18"),r("questionSection.question19"),r("questionSection.question20")];return(0,U.jsxs)("div",{children:[(0,U.jsx)(K._x,{children:r("questionSection.sectionTitle")}),(0,U.jsx)(ee.A,{variant:"body1",gutterBottom:!0,children:r("questionSection.warningText")}),(0,U.jsx)(V,{}),n.map(((e,r)=>(0,U.jsx)("div",{children:(0,U.jsx)(I.A,{component:"legend",sx:{marginBottom:2},children:e})},r))),(0,U.jsxs)("div",{children:[(0,U.jsx)(V,{}),(0,U.jsx)(I.A,{component:"legend",children:r("questionSection.sectionDescription")}),(0,U.jsx)(u.xI,{name:"overallResponse",control:e,defaultValue:"",render:e=>{let{field:n}=e;return(0,U.jsxs)(b.A,{...n,row:!0,children:[(0,U.jsx)(g.A,{value:"yes",control:(0,U.jsx)(S.A,{}),label:r("yes")}),(0,U.jsx)(g.A,{value:"no",control:(0,U.jsx)(S.A,{}),label:r("no")})]})}})]})]})},se=()=>{const{t:e}=(0,f.Bd)(),r=(0,u.mN)({defaultValues:JSON.parse(localStorage.getItem("visaForm")||"{}")}),{handleSubmit:n,watch:o}=r;(0,m.useEffect)((()=>{const e=o((e=>{localStorage.setItem("visaForm",JSON.stringify(e)),console.log("Form data updated in localStorage:",e)}));return()=>e.unsubscribe()}),[o]);const s=async r=>{console.log("Inside onSubmit function"),console.log("Form submitted with data:",r);try{console.log("Validating data"),console.log("Validation passed"),await j.A.post("".concat("https://extras-backend.onrender.com","/api/visa-form"),r),console.log("Form data sent to API"),alert(e("formSubmitted")),localStorage.removeItem("visaForm")}catch(n){console.log("Inside catch block"),n instanceof y.yI?(console.error("Validation errors:",n.inner),alert(e("validationError"))):(console.error("Submission error:",n),alert(e("submissionError")))}};return(0,U.jsx)(q,{children:(0,U.jsx)(L,{children:(0,U.jsx)(u.Op,{...r,children:(0,U.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log("Form submit event triggered"),n(s)(e),console.log("After handleSubmit call")},children:[(0,U.jsx)(V,{}),(0,U.jsx)(Q,{control:r.control,errors:r.formState.errors}),(0,U.jsx)(V,{}),(0,U.jsx)(X,{control:r.control,errors:r.formState.errors}),(0,U.jsx)(V,{}),(0,U.jsx)(Z,{control:r.control,errors:r.formState.errors}),(0,U.jsx)(V,{}),(0,U.jsx)(re,{control:r.control,errors:r.formState.errors}),(0,U.jsx)(V,{}),(0,U.jsx)(ne,{control:r.control,errors:r.formState.errors}),(0,U.jsx)(V,{}),(0,U.jsx)(oe,{}),(0,U.jsx)(V,{}),(0,U.jsx)(h.A,{type:"submit",variant:"outlined",color:"primary",children:e("send")})]})})})})},le=()=>(0,U.jsx)("div",{children:(0,U.jsx)(se,{})})},9859:(e,r,n)=>{n.d(r,{u:()=>o});const o=(e,r)=>{var n;const o=r.split(".");let s=e;for(const l of o){if(!s[l])return;s=s[l]}return null!==(n=s)&&void 0!==n&&n.message?String(s.message):void 0}}}]);
//# sourceMappingURL=435.212f0d9c.chunk.js.map