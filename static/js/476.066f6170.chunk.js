"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[476],{9392:(e,r,i)=>{i.d(r,{$E:()=>p,AC:()=>u,_x:()=>d,g0:()=>l,hE:()=>n});var t=i(6060),s=i(5865),o=i(6446),a=i(2110);const n=(0,t.A)(s.A)((e=>{let{theme:r}=e;return{fontSize:"clamp(34px, 5.55vw, 54px)",fontWeight:800,lineHeight:1.25,letterSpacing:".01em",marginBottom:"24px",textAlign:"center"}})),d=(0,t.A)(s.A)((e=>{let{theme:r}=e;return{fontSize:"clamp(26px, 5.55vw, 42px)",lineHeight:1.08,fontWeight:500,letterSpacing:".01em",marginBottom:"24px",textAlign:"center"}})),u=(0,t.A)(o.A)((e=>{let{theme:r}=e;return{marginBottom:"48px",textIndent:"1em"}})),l=((0,t.A)(a.A)((e=>{let{theme:r}=e;return{width:"clamp(300px, 50vw, 380px)",height:"auto",borderRadius:"20px",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",marginBottom:"48px",padding:"20px"}})),(0,t.A)(o.A)((e=>{let{theme:r}=e;return{marginBottom:"48px"}}))),p=(0,t.A)("img")((e=>{let{theme:r}=e;return{height:"280px",width:"clamp(300px, 50vw, 400px)",objectFit:"cover",borderRadius:"20px",marginBottom:"24px"}}))},6651:(e,r,i)=>{i.r(r),i.d(r,{default:()=>T});var t=i(5043),s=i(4117),o=i(4836),a=i(9252),n=i(8903),d=i(681),u=i(8734),l=i(5865),p=i(6446),m=i(1906),q=i(35),A=i(6600),h=i(7392),y=i(5316),c=i(4802),j=i(4858),x=i(8403),f=i(1379),v=i(5721),g=i(6213),Y=i(177),w=i(9859),S=i(579);const b=e=>{let{onClose:r}=e;const{t:i}=(0,s.Bd)(),{control:t,handleSubmit:o,formState:{errors:q},setValue:A,watch:h}=(0,j.mN)({resolver:(0,x.t)(Y.PI)}),y={NODE_ENV:"production",PUBLIC_URL:"/extras",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"http://localhost:3001",c=h("file");return(0,S.jsx)(a.A,{maxWidth:"sm",children:(0,S.jsxs)(p.A,{sx:{mb:6},children:[(0,S.jsx)(l.A,{sx:{fontSize:"24px",textAlign:"center",marginBottom:"28px"},children:i("form.title")}),(0,S.jsx)("form",{onSubmit:o((async e=>{try{const i=new FormData;i.append("name",e.name),i.append("phone",e.phone),i.append("email",e.email),i.append("language",e.language),i.append("message",e.message),e.file.length>0&&i.append("file",e.file[0]),await g.A.post("".concat(y,"/api/send-email"),i,{headers:{"Content-Type":"multipart/form-data"}}),r()}catch(i){console.error("Error sending form data:",i)}})),children:(0,S.jsxs)(n.Ay,{container:!0,spacing:2,children:[(0,S.jsx)(n.Ay,{item:!0,xs:12,children:(0,S.jsx)(j.xI,{name:"name",control:t,render:e=>{let{field:r}=e;return(0,S.jsx)(f.A,{...r,label:i("form.name"),fullWidth:!0,error:!!q.name,helperText:(0,w.u)(q,"name")})}})}),(0,S.jsx)(n.Ay,{item:!0,xs:12,children:(0,S.jsx)(j.xI,{name:"phone",control:t,render:e=>{let{field:r}=e;return(0,S.jsx)(f.A,{...r,label:i("form.phone"),fullWidth:!0,error:!!q.phone,helperText:(0,w.u)(q,"phone")})}})}),(0,S.jsx)(n.Ay,{item:!0,xs:12,children:(0,S.jsx)(j.xI,{name:"email",control:t,render:e=>{let{field:r}=e;return(0,S.jsx)(f.A,{...r,label:i("form.email"),fullWidth:!0,error:!!q.email,helperText:(0,w.u)(q,"email")})}})}),(0,S.jsx)(n.Ay,{item:!0,xs:12,children:(0,S.jsx)(j.xI,{name:"language",control:t,render:e=>{let{field:r}=e;return(0,S.jsx)(f.A,{...r,label:i("form.language"),fullWidth:!0,error:!!q.language,helperText:(0,w.u)(q,"language")})}})}),(0,S.jsx)(n.Ay,{item:!0,xs:12,children:(0,S.jsx)(j.xI,{name:"message",control:t,render:e=>{let{field:r}=e;return(0,S.jsx)(f.A,{...r,label:i("form.message"),fullWidth:!0,multiline:!0,rows:4,error:!!q.message,helperText:(0,w.u)(q,"message")})}})}),(0,S.jsxs)(n.Ay,{item:!0,xs:12,children:[(0,S.jsxs)(m.A,{variant:"outlined",component:"label",fullWidth:!0,children:[i("form.upload_file"),(0,S.jsx)("input",{type:"file",hidden:!0,onChange:e=>{e.target.files&&e.target.files.length>0&&A("file",e.target.files)}})]}),q.file&&(0,S.jsx)(l.A,{color:"error",variant:"body2",children:(0,w.u)(q,"file")}),(0,S.jsx)(v.A,{children:c&&Array.from(c).map(((e,r)=>(0,S.jsx)(d.Ay,{children:(0,S.jsx)(u.A,{primary:e.name})},r)))})]}),(0,S.jsx)(n.Ay,{item:!0,xs:12,children:(0,S.jsx)(m.A,{type:"submit",variant:"outlined",color:"primary",fullWidth:!0,children:i("form.submit")})})]})})]})})};var R=i(9392);const D=i.p+"static/media/translate.ad8975cb1a94787af6c6.jpg",I=e=>{const{t:r}=(0,s.Bd)();return r(e,{returnObjects:!0})},C=(0,t.forwardRef)((function(e,r){return(0,S.jsx)(o.A,{direction:"down",ref:r,...e})})),k=()=>{const{t:e}=(0,s.Bd)(),[r,i]=(0,t.useState)(!1),o=I("translation.services"),j=I("translation.oralTranslation.services"),x=()=>{i(!1)};return(0,S.jsxs)(a.A,{children:[(0,S.jsx)(R.hE,{variant:"h2",gutterBottom:!0,children:e("translation.title")}),(0,S.jsx)(R._x,{variant:"h6",gutterBottom:!0,children:e("translation.subtitle")}),(0,S.jsxs)(n.Ay,{container:!0,spacing:2,children:[(0,S.jsx)(n.Ay,{item:!0,xs:12,sm:8,style:{maxWidth:720},children:(0,S.jsx)(R.g0,{children:o.map(((e,r)=>(0,S.jsx)(d.Ay,{children:(0,S.jsx)(u.A,{primary:"\u2022 ".concat(e)})},r)))})}),(0,S.jsx)(n.Ay,{item:!0,xs:12,sm:4,children:(0,S.jsx)(R.$E,{src:D,alt:"Translation Services"})})]}),(0,S.jsxs)(R.AC,{children:[(0,S.jsx)(R._x,{variant:"h5",gutterBottom:!0,children:e("translation.writtenTranslation.title")}),(0,S.jsx)(l.A,{paragraph:!0,children:e("translation.writtenTranslation.description")}),(0,S.jsx)(l.A,{paragraph:!0,mb:6,children:e("translation.writtenTranslation.details")}),(0,S.jsx)(p.A,{display:"flex",justifyContent:"center",my:2,mb:6,children:(0,S.jsx)(m.A,{variant:"outlined",color:"primary",onClick:()=>{i(!0)},children:e("form.calculate_title")})}),(0,S.jsxs)(q.A,{open:r,TransitionComponent:C,onClose:x,PaperProps:{sx:{borderRadius:4}},children:[(0,S.jsxs)(A.A,{sx:{padding:"40px 30px 0",fontSize:"24px",textAlign:"center"},children:[e("form.calculate_title"),(0,S.jsx)(h.A,{"aria-label":"close",onClick:x,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:(0,S.jsx)(c.A,{})})]}),(0,S.jsx)(y.A,{sx:{padding:"30px"},children:(0,S.jsx)(b,{onClose:x})})]}),(0,S.jsx)(R._x,{variant:"h6",gutterBottom:!0,children:e("translation.certificationTypes.title")}),(0,S.jsx)(l.A,{paragraph:!0,children:e("translation.certificationTypes.agencySeal")}),(0,S.jsx)(l.A,{paragraph:!0,children:e("translation.certificationTypes.notarySeal")})]}),(0,S.jsxs)(R.AC,{children:[(0,S.jsx)(R._x,{variant:"h5",gutterBottom:!0,children:e("translation.oralTranslation.title")}),(0,S.jsx)(l.A,{paragraph:!0,children:e("translation.oralTranslation.description")}),(0,S.jsx)(R.g0,{children:j.map(((e,r)=>(0,S.jsx)(d.Ay,{children:(0,S.jsx)(u.A,{primary:"\u2022 ".concat(e)})},r)))})]}),(0,S.jsxs)(R.AC,{children:[(0,S.jsx)(R._x,{variant:"h6",gutterBottom:!0,children:e("translation.voiceOver.title")}),(0,S.jsx)(l.A,{paragraph:!0,children:e("translation.voiceOver.description")})]})]})},T=()=>(0,S.jsx)("div",{children:(0,S.jsx)(k,{})})},9859:(e,r,i)=>{i.d(r,{u:()=>t});const t=(e,r)=>{var i;const t=r.split(".");let s=e;for(const o of t){if(!s[o])return;s=s[o]}return null===(i=s)||void 0===i?void 0:i.message}},177:(e,r,i)=>{i.d(r,{PI:()=>q,X5:()=>l,wQ:()=>A,zK:()=>p});var t=i(899),s=i(4978);const o=t.Ik().shape({surname:t.Yj().required(s.Ay.t("errors.required")),givenName:t.Yj().required(s.Ay.t("errors.required")),patronymic:t.Yj().required(s.Ay.t("errors.required")),birthDate:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),photo:t.gl().required(s.Ay.t("errors.required")),passportCopy:t.gl().required(s.Ay.t("errors.required")),passportDetails:t.Yj().required(s.Ay.t("errors.required")),passportOrInn:t.Yj().required(s.Ay.t("errors.required")),otherNames:t.Yj().required(s.Ay.t("errors.required")),birthPlaceAndDate:t.Yj().required(s.Ay.t("errors.required")),passportLost:t.zM().required(s.Ay.t("errors.required")),passportLostDetails:t.Yj().when("passportLost",{is:!0,then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),otherCitizenship:t.zM().required(s.Ay.t("errors.required")),otherPassportDetails:t.Yj().when("otherCitizenship",{is:!0,then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),residenceAddress:t.Yj().required(s.Ay.t("errors.required")),registeredAddress:t.Yj().required(s.Ay.t("errors.required")),contactNumber:t.Yj().required(s.Ay.t("errors.required")),contactNumbersLast5Years:t.Yj().required(s.Ay.t("errors.required")),emailAddress:t.Yj().email(s.Ay.t("errors.invalidEmail")).required(s.Ay.t("errors.required")),emailsLast5Years:t.Yj().required(s.Ay.t("errors.required")),socialMedia:t.YO().of(t.Ik().shape({name:t.Yj().required(s.Ay.t("errors.required")),id:t.Yj().required(s.Ay.t("errors.required"))})),otherMediaResources:t.zM().required(s.Ay.t("errors.required")),otherMediaResourceDetails:t.Yj().when("otherMediaResources",{is:!0,then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()})}),a=t.Ik().shape({fatherName:t.Yj().required(s.Ay.t("errors.required")),fatherDOB:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),motherName:t.Yj().required(s.Ay.t("errors.required")),motherDOB:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),parentsInUSA:t.Yj().required(s.Ay.t("errors.required")),maritalStatus:t.Yj().required(s.Ay.t("errors.required")),spouseName:t.Yj().required(s.Ay.t("errors.required")),spouseMaidenName:t.Yj().required(s.Ay.t("errors.required")),spouseDOB:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),spouseBirthPlace:t.Yj().required(s.Ay.t("errors.required")),spouseNationality:t.Yj().required(s.Ay.t("errors.required")),spouseAddress:t.Yj().required(s.Ay.t("errors.required")),previousMarriages:t.Yj().required(s.Ay.t("errors.required")),previousSpouses:t.Yj().required(s.Ay.t("errors.required")),previousSpouseDOB:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),marriageStartDate:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),marriageEndDate:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),previousSpouseBirthPlace:t.Yj().required(s.Ay.t("errors.required")),previousSpouseNationality:t.Yj().required(s.Ay.t("errors.required")),relativesInUSA:t.Yj().required(s.Ay.t("errors.required")),relativeNames:t.Yj().when("relativesInUSA",{is:"yes",then:e=>e.required(s.Ay.t("errors.required"))}),relativeStatus:t.Yj().when("relativesInUSA",{is:"yes",then:e=>e.required(s.Ay.t("errors.required"))}),otherRelativesInUSA:t.Yj().required(s.Ay.t("errors.required"))}),n=t.Ik().shape({travelPlans:t.Ik().shape({arrivalDate:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),arrivalCity:t.Yj().required(s.Ay.t("errors.required")),placesToVisit:t.Yj().required(s.Ay.t("errors.required"))}),addressInUSA:t.Yj().required(s.Ay.t("errors.required")),invitingParty:t.Ik().shape({name:t.Yj().required(s.Ay.t("errors.required")),phone:t.Yj().required(s.Ay.t("errors.required")).matches(/^[0-9]+$/,s.Ay.t("errors.invalidPhone")),email:t.Yj().email(s.Ay.t("errors.invalidEmail")).required(s.Ay.t("errors.required")),relationship:t.Yj().required(s.Ay.t("errors.required"))}),durationOfStay:t.Yj().required(s.Ay.t("errors.required")),tripFunding:t.Yj().required(s.Ay.t("errors.required")),travelPurpose:t.Yj().required(s.Ay.t("errors.required")),travelCompanions:t.Yj().required(s.Ay.t("errors.required")),tripSponsor:t.Yj().required(s.Ay.t("errors.required")),sponsorInfo:t.Ik().when("tripSponsor",{is:"otherPersonOrCompany",then:e=>e.shape({surname:t.Yj().required(s.Ay.t("errors.required")),name:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),phone:t.Yj().required(s.Ay.t("errors.required")).matches(/^[0-9]+$/,s.Ay.t("errors.invalidPhone")),email:t.Yj().email(s.Ay.t("errors.invalidEmail")).required(s.Ay.t("errors.required")),relationship:t.Yj().required(s.Ay.t("errors.required"))}),otherwise:e=>e.shape({surname:t.Yj().notRequired(),name:t.Yj().notRequired(),address:t.Yj().notRequired(),phone:t.Yj().notRequired(),email:t.Yj().notRequired(),relationship:t.Yj().notRequired()})})}),d=t.Ik().shape({countriesVisited:t.Yj().required(s.Ay.t("errors.required")),visitedUSA:t.Yj().required(s.Ay.t("errors.required")),visaDates:t.Yj().when("visitedUSA",{is:"yes",then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),visaNumber:t.Yj().when("visitedUSA",{is:"yes",then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),visaDenied:t.Yj().required(s.Ay.t("errors.required")),denialDate:t.Yj().when("visaDenied",{is:"yes",then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),denialPlace:t.Yj().when("visaDenied",{is:"yes",then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),denialType:t.Yj().when("visaDenied",{is:"yes",then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),previousTravel:t.Yj().required(s.Ay.t("errors.required")),arrivalDate0:t.Yj().when("previousTravel",{is:"yes",then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),stayDuration0:t.Yj().when("previousTravel",{is:"yes",then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),immigrationPetition:t.Yj().required(s.Ay.t("errors.required")),petitionDetails:t.Yj().when("immigrationPetition",{is:"yes",then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),driverLicense:t.Yj().required(s.Ay.t("errors.required")),licenseDetails:t.Yj().when("driverLicense",{is:"yes",then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()}),ssn:t.Yj().required(s.Ay.t("errors.required")),ssnDetails:t.Yj().when("ssn",{is:"yes",then:e=>e.required(s.Ay.t("errors.required")),otherwise:e=>e.notRequired()})}),u=t.Ik().shape({currentEmployer:t.Ik().shape({companyName:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),phone:t.Yj().required(s.Ay.t("errors.required")),startDate:t.p6().required(s.Ay.t("errors.required")),position:t.Yj().required(s.Ay.t("errors.required")),duties:t.Yj().required(s.Ay.t("errors.required"))}),averageMonthlyIncome:t.ai().required(s.Ay.t("errors.required")),previousEmployer:t.YO().of(t.Ik().shape({companyName:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),phone:t.Yj().required(s.Ay.t("errors.required")),startDate:t.p6().required(s.Ay.t("errors.required")),position:t.Yj().required(s.Ay.t("errors.required")),duties:t.Yj().required(s.Ay.t("errors.required"))})),highSchool:t.Ik().shape({name:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),startDate:t.p6().required(s.Ay.t("errors.required")),endDate:t.p6().required(s.Ay.t("errors.required"))}),higherEducation:t.YO().of(t.Ik().shape({name:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),startDate:t.p6().required(s.Ay.t("errors.required")),endDate:t.p6().required(s.Ay.t("errors.required")),faculty:t.Yj().required(s.Ay.t("errors.required"))})),socialOrganizations:t.Yj().oneOf(["yes","no"]).required(s.Ay.t("errors.required")),tribe:t.Yj().oneOf(["yes","no"]).required(s.Ay.t("errors.required")),militaryService:t.Yj().oneOf(["yes","no"]).required(s.Ay.t("errors.required"))}),l=t.Ik({email:t.Yj().email(s.Ay.t("email.invalid")).required(s.Ay.t("email.required")),password:t.Yj().min(6,s.Ay.t("password.min")).required(s.Ay.t("password.required"))}),p=t.Ik({firstName:t.Yj().required(s.Ay.t("firstName")),lastName:t.Yj().required(s.Ay.t("lastName")),email:t.Yj().email(s.Ay.t("email.invalid")).required(s.Ay.t("email.required")),password:t.Yj().min(6,s.Ay.t("password.min")).required(s.Ay.t("password.required")),confirmPassword:t.Yj().oneOf([t.KR("password"),void 0],s.Ay.t("password.confirm")).required(s.Ay.t("confirmPassword"))}),m=["application/pdf","text/plain","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],q=t.Ik().shape({name:t.Yj().required(s.Ay.t("form.errors.name_required")),phone:t.Yj().required(s.Ay.t("form.errors.phone_required")),email:t.Yj().email(s.Ay.t("form.errors.email_invalid")).required(s.Ay.t("form.errors.email_required")),language:t.Yj().required(s.Ay.t("form.errors.language_required")),message:t.Yj().required(s.Ay.t("form.errors.message_required")),file:t.gl().required(s.Ay.t("form.errors.file_required")).test("fileSize",s.Ay.t("form.errors.file_size"),(e=>{var r;return!!(e&&e instanceof FileList)&&(null===(r=e[0])||void 0===r?void 0:r.size)<=10485760})).test("fileType",s.Ay.t("form.errors.file_type"),(e=>{var r;return!!(e&&e instanceof FileList)&&m.includes(null===(r=e[0])||void 0===r?void 0:r.type)}))}),A=t.Ik().shape({personalInfo:o,familyInfo:a,purposeOfTravel:n,travelHistory:d,workAndEducation:u,loginSchema:l,registerSchema:p})},2110:(e,r,i)=>{i.d(r,{A:()=>c});var t=i(8168),s=i(8587),o=i(5043),a=i(8387),n=i(8606),d=i(4535),u=i(2876),l=i(3336),p=i(7056),m=i(2400);function q(e){return(0,m.Ay)("MuiCard",e)}(0,p.A)("MuiCard",["root"]);var A=i(579);const h=["className","raised"],y=(0,d.Ay)(l.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})((()=>({overflow:"hidden"}))),c=o.forwardRef((function(e,r){const i=(0,u.A)({props:e,name:"MuiCard"}),{className:o,raised:d=!1}=i,l=(0,s.A)(i,h),p=(0,t.A)({},i,{raised:d}),m=(e=>{const{classes:r}=e;return(0,n.A)({root:["root"]},q,r)})(p);return(0,A.jsx)(y,(0,t.A)({className:(0,a.A)(m.root,o),elevation:d?8:void 0,ref:r,ownerState:p},l))}))},9252:(e,r,i)=>{i.d(r,{A:()=>g});var t=i(8587),s=i(8168),o=i(5043),a=i(8387),n=i(2400),d=i(8606),u=i(410),l=i(2900),p=i(6060),m=i(8280),q=i(579);const A=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,m.A)(),y=(0,p.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e;return[r.root,r["maxWidth".concat((0,u.A)(String(i.maxWidth)))],i.fixed&&r.fixed,i.disableGutters&&r.disableGutters]}}),c=e=>(0,l.A)({props:e,name:"MuiContainer",defaultTheme:h});var j=i(6803),x=i(4535),f=i(2876);const v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:r=y,useThemeProps:i=c,componentName:l="MuiContainer"}=e,p=r((e=>{let{theme:r,ownerState:i}=e;return(0,s.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}})}),(e=>{let{theme:r,ownerState:i}=e;return i.fixed&&Object.keys(r.breakpoints.values).reduce(((e,i)=>{const t=i,s=r.breakpoints.values[t];return 0!==s&&(e[r.breakpoints.up(t)]={maxWidth:"".concat(s).concat(r.breakpoints.unit)}),e}),{})}),(e=>{let{theme:r,ownerState:i}=e;return(0,s.A)({},"xs"===i.maxWidth&&{[r.breakpoints.up("xs")]:{maxWidth:Math.max(r.breakpoints.values.xs,444)}},i.maxWidth&&"xs"!==i.maxWidth&&{[r.breakpoints.up(i.maxWidth)]:{maxWidth:"".concat(r.breakpoints.values[i.maxWidth]).concat(r.breakpoints.unit)}})})),m=o.forwardRef((function(e,r){const o=i(e),{className:m,component:h="div",disableGutters:y=!1,fixed:c=!1,maxWidth:j="lg"}=o,x=(0,t.A)(o,A),f=(0,s.A)({},o,{component:h,disableGutters:y,fixed:c,maxWidth:j}),v=((e,r)=>{const{classes:i,fixed:t,disableGutters:s,maxWidth:o}=e,a={root:["root",o&&"maxWidth".concat((0,u.A)(String(o))),t&&"fixed",s&&"disableGutters"]};return(0,d.A)(a,(e=>(0,n.Ay)(r,e)),i)})(f,l);return(0,q.jsx)(p,(0,s.A)({as:h,ownerState:f,className:(0,a.A)(v.root,m),ref:r},x))}));return m}({createStyledComponent:(0,x.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e;return[r.root,r["maxWidth".concat((0,j.A)(String(i.maxWidth)))],i.fixed&&r.fixed,i.disableGutters&&r.disableGutters]}}),useThemeProps:e=>(0,f.A)({props:e,name:"MuiContainer"})}),g=v}}]);
//# sourceMappingURL=476.066f6170.chunk.js.map