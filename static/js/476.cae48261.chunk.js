"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[476],{9392:(r,e,i)=>{i.d(e,{$E:()=>q,AC:()=>u,_x:()=>n,g0:()=>l,hE:()=>d});var t=i(6060),s=i(5865),o=i(6446),a=i(2110);const d=(0,t.A)(s.A)((r=>{let{theme:e}=r;return{fontSize:"clamp(34px, 5.55vw, 54px)",fontWeight:800,lineHeight:1.25,letterSpacing:".01em",marginBottom:"24px",textAlign:"center"}})),n=(0,t.A)(s.A)((r=>{let{theme:e}=r;return{fontSize:"clamp(26px, 5.55vw, 42px)",lineHeight:1.08,fontWeight:500,letterSpacing:".01em",marginBottom:"24px",textAlign:"center"}})),u=(0,t.A)(o.A)((r=>{let{theme:e}=r;return{marginBottom:"48px",textIndent:"1em"}})),l=((0,t.A)(a.A)((r=>{let{theme:e}=r;return{width:"clamp(300px, 50vw, 380px)",height:"auto",borderRadius:"20px",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",marginBottom:"48px",padding:"20px"}})),(0,t.A)(o.A)((r=>{let{theme:e}=r;return{marginBottom:"48px"}}))),q=(0,t.A)("img")((r=>{let{theme:e}=r;return{height:"280px",width:"clamp(300px, 50vw, 400px)",objectFit:"cover",borderRadius:"20px",marginBottom:"24px"}}))},6651:(r,e,i)=>{i.r(e),i.d(e,{default:()=>b});var t=i(5043),s=i(4117),o=i(6240),a=i(9252),d=i(8903),n=i(681),u=i(8734),l=i(5865),q=i(6446),y=i(1906),A=i(7392),p=i(2654),h=i(4858),m=i(8403),c=i(1379),j=i(5721),x=i(177),Y=i(9859),f=i(579);const v=r=>{let{onClose:e}=r;const{t:i}=(0,s.Bd)(),{control:t,handleSubmit:o,formState:{errors:A},setValue:p,watch:v}=(0,h.mN)({resolver:(0,m.t)(x.PI)}),g=v("file");return(0,f.jsx)(a.A,{maxWidth:"sm",children:(0,f.jsxs)(q.A,{sx:{mt:6,mb:6,mr:4},children:[(0,f.jsx)(l.A,{sx:{fontSize:"24px",textAlign:"center",marginBottom:"28px"},children:i("form.calculate_title")}),(0,f.jsx)("form",{onSubmit:o((r=>{console.log("Form Data:",r),e()})),children:(0,f.jsxs)(d.Ay,{container:!0,spacing:2,children:[(0,f.jsx)(d.Ay,{item:!0,xs:12,children:(0,f.jsx)(h.xI,{name:"name",control:t,render:r=>{let{field:e}=r;return(0,f.jsx)(c.A,{...e,label:i("form.name"),fullWidth:!0,error:!!A.name,helperText:(0,Y.u)(A,"name")})}})}),(0,f.jsx)(d.Ay,{item:!0,xs:12,children:(0,f.jsx)(h.xI,{name:"phone",control:t,render:r=>{let{field:e}=r;return(0,f.jsx)(c.A,{...e,label:i("form.phone"),fullWidth:!0,error:!!A.phone,helperText:(0,Y.u)(A,"phone")})}})}),(0,f.jsx)(d.Ay,{item:!0,xs:12,children:(0,f.jsx)(h.xI,{name:"email",control:t,render:r=>{let{field:e}=r;return(0,f.jsx)(c.A,{...e,label:i("form.email"),fullWidth:!0,error:!!A.email,helperText:(0,Y.u)(A,"email")})}})}),(0,f.jsx)(d.Ay,{item:!0,xs:12,children:(0,f.jsx)(h.xI,{name:"language",control:t,render:r=>{let{field:e}=r;return(0,f.jsx)(c.A,{...e,label:i("form.language"),fullWidth:!0,error:!!A.language,helperText:(0,Y.u)(A,"language")})}})}),(0,f.jsx)(d.Ay,{item:!0,xs:12,children:(0,f.jsx)(h.xI,{name:"message",control:t,render:r=>{let{field:e}=r;return(0,f.jsx)(c.A,{...e,label:i("form.message"),fullWidth:!0,multiline:!0,rows:4,error:!!A.message,helperText:(0,Y.u)(A,"message")})}})}),(0,f.jsxs)(d.Ay,{item:!0,xs:12,children:[(0,f.jsxs)(y.A,{variant:"outlined",component:"label",fullWidth:!0,children:[i("form.upload_file"),(0,f.jsx)("input",{type:"file",hidden:!0,onChange:r=>{r.target.files&&r.target.files.length>0&&p("file",r.target.files)}})]}),A.file&&(0,f.jsx)(l.A,{color:"error",variant:"body2",children:(0,Y.u)(A,"file")}),(0,f.jsx)(j.A,{children:g&&Array.from(g).map(((r,e)=>(0,f.jsx)(n.Ay,{children:(0,f.jsx)(u.A,{primary:r.name})},e)))})]}),(0,f.jsx)(d.Ay,{item:!0,xs:12,children:(0,f.jsx)(y.A,{type:"submit",variant:"outlined",color:"primary",fullWidth:!0,children:i("form.submit")})})]})})]})})};var g=i(4802),w=i(9392);const D=i.p+"static/media/translate.ad8975cb1a94787af6c6.jpg",I=r=>{const{t:e}=(0,s.Bd)();return e(r,{returnObjects:!0})},S=()=>{const{t:r}=(0,s.Bd)(),[e,i]=(0,t.useState)(!1),h=(0,o.A)(),m=I("translation.services"),c=I("translation.oralTranslation.services"),j=()=>{i(!1)},x=(0,p.pn)(e,{from:{transform:"translateY(-100%)",opacity:0},enter:{transform:"translateY(0%)",opacity:1},leave:{transform:"translateY(-100%)",opacity:0},config:{duration:500}});return(0,f.jsxs)(a.A,{children:[(0,f.jsx)(w.hE,{variant:"h2",gutterBottom:!0,children:r("translation.title")}),(0,f.jsx)(w._x,{variant:"h6",gutterBottom:!0,children:r("translation.subtitle")}),(0,f.jsxs)(d.Ay,{container:!0,spacing:2,children:[(0,f.jsx)(d.Ay,{item:!0,xs:12,sm:8,style:{maxWidth:720},children:(0,f.jsx)(w.g0,{children:m.map(((r,e)=>(0,f.jsx)(n.Ay,{children:(0,f.jsx)(u.A,{primary:"\u2022 ".concat(r)})},e)))})}),(0,f.jsx)(d.Ay,{item:!0,xs:12,sm:4,children:(0,f.jsx)(w.$E,{src:D,alt:"Translation Services"})})]}),(0,f.jsxs)(w.AC,{children:[(0,f.jsx)(w._x,{variant:"h5",gutterBottom:!0,children:r("translation.writtenTranslation.title")}),(0,f.jsx)(l.A,{paragraph:!0,children:r("translation.writtenTranslation.description")}),(0,f.jsx)(l.A,{paragraph:!0,mb:6,children:r("translation.writtenTranslation.details")}),(0,f.jsx)(q.A,{display:"flex",justifyContent:"center",my:2,mb:6,children:(0,f.jsx)(y.A,{variant:"outlined",color:"primary",onClick:()=>{i(!0)},children:r("form.calculate_title")})}),x(((r,e)=>e&&(0,f.jsx)(p.CS.div,{style:{...r,position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1300,backgroundColor:"rgba(0, 0, 0, 0.5)"},onClick:j,children:(0,f.jsxs)(q.A,{sx:{backgroundColor:h.palette.background.paper,color:h.palette.text.primary,borderRadius:4,position:"relative",width:"100%",maxWidth:"600px",padding:"16px",boxShadow:h.shadows[5]},onClick:r=>r.stopPropagation(),children:[(0,f.jsx)(A.A,{"aria-label":"close",onClick:j,sx:{position:"absolute",right:8,top:8,color:r=>r.palette.grey[500]},children:(0,f.jsx)(g.A,{})}),(0,f.jsx)(v,{onClose:j})]})}))),(0,f.jsx)(w._x,{variant:"h6",gutterBottom:!0,children:r("translation.certificationTypes.title")}),(0,f.jsx)(l.A,{paragraph:!0,children:r("translation.certificationTypes.agencySeal")}),(0,f.jsx)(l.A,{paragraph:!0,children:r("translation.certificationTypes.notarySeal")})]}),(0,f.jsxs)(w.AC,{children:[(0,f.jsx)(w._x,{variant:"h5",gutterBottom:!0,children:r("translation.oralTranslation.title")}),(0,f.jsx)(l.A,{paragraph:!0,children:r("translation.oralTranslation.description")}),(0,f.jsx)(w.g0,{children:c.map(((r,e)=>(0,f.jsx)(n.Ay,{children:(0,f.jsx)(u.A,{primary:"\u2022 ".concat(r)})},e)))})]}),(0,f.jsxs)(w.AC,{children:[(0,f.jsx)(w._x,{variant:"h6",gutterBottom:!0,children:r("translation.voiceOver.title")}),(0,f.jsx)(l.A,{paragraph:!0,children:r("translation.voiceOver.description")})]})]})},b=()=>(0,f.jsx)("div",{children:(0,f.jsx)(S,{})})},9859:(r,e,i)=>{i.d(e,{u:()=>t});const t=(r,e)=>{var i;const t=e.split(".");let s=r;for(const o of t){if(!s[o])return;s=s[o]}return null===(i=s)||void 0===i?void 0:i.message}},177:(r,e,i)=>{i.d(e,{PI:()=>A,X5:()=>l,wQ:()=>p,zK:()=>q});var t=i(899),s=i(4978);const o=t.Ik().shape({surname:t.Yj().required(s.Ay.t("errors.required")),givenName:t.Yj().required(s.Ay.t("errors.required")),patronymic:t.Yj().required(s.Ay.t("errors.required")),birthDate:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),photo:t.gl().required(s.Ay.t("errors.required")),passportCopy:t.gl().required(s.Ay.t("errors.required")),passportDetails:t.Yj().required(s.Ay.t("errors.required")),passportOrInn:t.Yj().required(s.Ay.t("errors.required")),otherNames:t.Yj().required(s.Ay.t("errors.required")),birthPlaceAndDate:t.Yj().required(s.Ay.t("errors.required")),passportLost:t.zM().required(s.Ay.t("errors.required")),passportLostDetails:t.Yj().when("passportLost",{is:!0,then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),otherCitizenship:t.zM().required(s.Ay.t("errors.required")),otherPassportDetails:t.Yj().when("otherCitizenship",{is:!0,then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),residenceAddress:t.Yj().required(s.Ay.t("errors.required")),registeredAddress:t.Yj().required(s.Ay.t("errors.required")),contactNumber:t.Yj().required(s.Ay.t("errors.required")),contactNumbersLast5Years:t.Yj().required(s.Ay.t("errors.required")),emailAddress:t.Yj().email(s.Ay.t("errors.invalidEmail")).required(s.Ay.t("errors.required")),emailsLast5Years:t.Yj().required(s.Ay.t("errors.required")),socialMedia:t.YO().of(t.Ik().shape({name:t.Yj().required(s.Ay.t("errors.required")),id:t.Yj().required(s.Ay.t("errors.required"))})),otherMediaResources:t.zM().required(s.Ay.t("errors.required")),otherMediaResourceDetails:t.Yj().when("otherMediaResources",{is:!0,then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()})}),a=t.Ik().shape({fatherName:t.Yj().required(s.Ay.t("errors.required")),fatherDOB:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),motherName:t.Yj().required(s.Ay.t("errors.required")),motherDOB:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),parentsInUSA:t.Yj().required(s.Ay.t("errors.required")),maritalStatus:t.Yj().required(s.Ay.t("errors.required")),spouseName:t.Yj().required(s.Ay.t("errors.required")),spouseMaidenName:t.Yj().required(s.Ay.t("errors.required")),spouseDOB:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),spouseBirthPlace:t.Yj().required(s.Ay.t("errors.required")),spouseNationality:t.Yj().required(s.Ay.t("errors.required")),spouseAddress:t.Yj().required(s.Ay.t("errors.required")),previousMarriages:t.Yj().required(s.Ay.t("errors.required")),previousSpouses:t.Yj().required(s.Ay.t("errors.required")),previousSpouseDOB:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),marriageStartDate:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),marriageEndDate:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),previousSpouseBirthPlace:t.Yj().required(s.Ay.t("errors.required")),previousSpouseNationality:t.Yj().required(s.Ay.t("errors.required")),relativesInUSA:t.Yj().required(s.Ay.t("errors.required")),relativeNames:t.Yj().when("relativesInUSA",{is:"yes",then:r=>r.required(s.Ay.t("errors.required"))}),relativeStatus:t.Yj().when("relativesInUSA",{is:"yes",then:r=>r.required(s.Ay.t("errors.required"))}),otherRelativesInUSA:t.Yj().required(s.Ay.t("errors.required"))}),d=t.Ik().shape({travelPlans:t.Ik().shape({arrivalDate:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),arrivalCity:t.Yj().required(s.Ay.t("errors.required")),placesToVisit:t.Yj().required(s.Ay.t("errors.required"))}),addressInUSA:t.Yj().required(s.Ay.t("errors.required")),invitingParty:t.Ik().shape({name:t.Yj().required(s.Ay.t("errors.required")),phone:t.Yj().required(s.Ay.t("errors.required")).matches(/^[0-9]+$/,s.Ay.t("errors.invalidPhone")),email:t.Yj().email(s.Ay.t("errors.invalidEmail")).required(s.Ay.t("errors.required")),relationship:t.Yj().required(s.Ay.t("errors.required"))}),durationOfStay:t.Yj().required(s.Ay.t("errors.required")),tripFunding:t.Yj().required(s.Ay.t("errors.required")),travelPurpose:t.Yj().required(s.Ay.t("errors.required")),travelCompanions:t.Yj().required(s.Ay.t("errors.required")),tripSponsor:t.Yj().required(s.Ay.t("errors.required")),sponsorInfo:t.Ik().when("tripSponsor",{is:"otherPersonOrCompany",then:r=>r.shape({surname:t.Yj().required(s.Ay.t("errors.required")),name:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),phone:t.Yj().required(s.Ay.t("errors.required")).matches(/^[0-9]+$/,s.Ay.t("errors.invalidPhone")),email:t.Yj().email(s.Ay.t("errors.invalidEmail")).required(s.Ay.t("errors.required")),relationship:t.Yj().required(s.Ay.t("errors.required"))}),otherwise:r=>r.shape({surname:t.Yj().notRequired(),name:t.Yj().notRequired(),address:t.Yj().notRequired(),phone:t.Yj().notRequired(),email:t.Yj().notRequired(),relationship:t.Yj().notRequired()})})}),n=t.Ik().shape({countriesVisited:t.Yj().required(s.Ay.t("errors.required")),visitedUSA:t.Yj().required(s.Ay.t("errors.required")),visaDates:t.Yj().when("visitedUSA",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),visaNumber:t.Yj().when("visitedUSA",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),visaDenied:t.Yj().required(s.Ay.t("errors.required")),denialDate:t.Yj().when("visaDenied",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),denialPlace:t.Yj().when("visaDenied",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),denialType:t.Yj().when("visaDenied",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),previousTravel:t.Yj().required(s.Ay.t("errors.required")),arrivalDate0:t.Yj().when("previousTravel",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),stayDuration0:t.Yj().when("previousTravel",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),immigrationPetition:t.Yj().required(s.Ay.t("errors.required")),petitionDetails:t.Yj().when("immigrationPetition",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),driverLicense:t.Yj().required(s.Ay.t("errors.required")),licenseDetails:t.Yj().when("driverLicense",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),ssn:t.Yj().required(s.Ay.t("errors.required")),ssnDetails:t.Yj().when("ssn",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()})}),u=t.Ik().shape({currentEmployer:t.Ik().shape({companyName:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),phone:t.Yj().required(s.Ay.t("errors.required")),startDate:t.p6().required(s.Ay.t("errors.required")),position:t.Yj().required(s.Ay.t("errors.required")),duties:t.Yj().required(s.Ay.t("errors.required"))}),averageMonthlyIncome:t.ai().required(s.Ay.t("errors.required")),previousEmployer:t.YO().of(t.Ik().shape({companyName:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),phone:t.Yj().required(s.Ay.t("errors.required")),startDate:t.p6().required(s.Ay.t("errors.required")),position:t.Yj().required(s.Ay.t("errors.required")),duties:t.Yj().required(s.Ay.t("errors.required"))})),highSchool:t.Ik().shape({name:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),startDate:t.p6().required(s.Ay.t("errors.required")),endDate:t.p6().required(s.Ay.t("errors.required"))}),higherEducation:t.YO().of(t.Ik().shape({name:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),startDate:t.p6().required(s.Ay.t("errors.required")),endDate:t.p6().required(s.Ay.t("errors.required")),faculty:t.Yj().required(s.Ay.t("errors.required"))})),socialOrganizations:t.Yj().oneOf(["yes","no"]).required(s.Ay.t("errors.required")),tribe:t.Yj().oneOf(["yes","no"]).required(s.Ay.t("errors.required")),militaryService:t.Yj().oneOf(["yes","no"]).required(s.Ay.t("errors.required"))}),l=t.Ik({email:t.Yj().email(s.Ay.t("email.invalid")).required(s.Ay.t("email.required")),password:t.Yj().min(6,s.Ay.t("password.min")).required(s.Ay.t("password.required"))}),q=t.Ik({firstName:t.Yj().required(s.Ay.t("firstName")),lastName:t.Yj().required(s.Ay.t("lastName")),email:t.Yj().email(s.Ay.t("email.invalid")).required(s.Ay.t("email.required")),password:t.Yj().min(6,s.Ay.t("password.min")).required(s.Ay.t("password.required")),confirmPassword:t.Yj().oneOf([t.KR("password"),void 0],s.Ay.t("password.confirm")).required(s.Ay.t("confirmPassword"))}),y=["application/pdf","text/plain","application/msword"],A=t.Ik().shape({name:t.Yj().required(s.Ay.t("form.errors.name_required")),phone:t.Yj().required(s.Ay.t("form.errors.phone_required")),email:t.Yj().email(s.Ay.t("form.errors.email_invalid")).required(s.Ay.t("form.errors.email_required")),language:t.Yj().required(s.Ay.t("form.errors.language_required")),message:t.Yj().required(s.Ay.t("form.errors.message_required")),file:t.gl().required(s.Ay.t("form.errors.file_required")).test("fileSize",s.Ay.t("form.errors.file_size"),(r=>{var e;return!!(r&&r instanceof FileList)&&(null===(e=r[0])||void 0===e?void 0:e.size)<=10485760})).test("fileType",s.Ay.t("form.errors.file_type"),(r=>{var e;return!!(r&&r instanceof FileList)&&y.includes(null===(e=r[0])||void 0===e?void 0:e.type)}))}),p=t.Ik().shape({personalInfo:o,familyInfo:a,purposeOfTravel:d,travelHistory:n,workAndEducation:u,loginSchema:l,registerSchema:q})},2110:(r,e,i)=>{i.d(e,{A:()=>c});var t=i(8168),s=i(8587),o=i(5043),a=i(8387),d=i(8606),n=i(4535),u=i(2876),l=i(3336),q=i(7056),y=i(2400);function A(r){return(0,y.Ay)("MuiCard",r)}(0,q.A)("MuiCard",["root"]);var p=i(579);const h=["className","raised"],m=(0,n.Ay)(l.A,{name:"MuiCard",slot:"Root",overridesResolver:(r,e)=>e.root})((()=>({overflow:"hidden"}))),c=o.forwardRef((function(r,e){const i=(0,u.A)({props:r,name:"MuiCard"}),{className:o,raised:n=!1}=i,l=(0,s.A)(i,h),q=(0,t.A)({},i,{raised:n}),y=(r=>{const{classes:e}=r;return(0,d.A)({root:["root"]},A,e)})(q);return(0,p.jsx)(m,(0,t.A)({className:(0,a.A)(y.root,o),elevation:n?8:void 0,ref:e,ownerState:q},l))}))}}]);
//# sourceMappingURL=476.cae48261.chunk.js.map