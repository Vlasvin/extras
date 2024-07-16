"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[166],{8166:(r,e,i)=>{i.r(e),i.d(e,{default:()=>w});var t=i(5043),s=i(4117),o=i(6213),d=i(4858),u=i(8403),a=i(9252),n=i(6446),q=i(5865),l=i(6546),y=i(4056),A=i(8903),p=i(1379),h=i(1906),m=i(2654);const j={root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",padding:"20px",paddingTop:0,paddingBottom:"200px"}};var Y=i(177),c=i(9859),v=i(6625),f=i(579);const w=()=>{const{t:r}=(0,s.Bd)(),{login:e,register:i}=(0,v.A)(),[w,x]=(0,t.useState)(!0),[g,D]=(0,t.useState)(null),[I,S]=(0,t.useState)(null),{control:N,handleSubmit:k,reset:R,formState:{errors:b}}=(0,d.mN)({resolver:(0,u.t)(w?Y.X5:Y.zK)}),P=(0,m.zh)({delay:2,duration:2,from:{opacity:0,transform:"translateY(20px)"},to:{opacity:1,transform:"translateY(0)"}});return(0,f.jsx)(m.CS.div,{style:P,children:(0,f.jsx)(a.A,{style:j.root,children:(0,f.jsxs)(n.A,{sx:{maxWidth:400,mx:"auto",textAlign:"center"},children:[(0,f.jsx)(q.A,{variant:"h4",gutterBottom:!0,children:r(w?"auth.login":"auth.register")}),(0,f.jsxs)(l.A,{value:w?0:1,onChange:(r,e)=>{x(0===e),D(null),S(null)},centered:!0,sx:{marginBottom:2},children:[(0,f.jsx)(y.A,{label:r("auth.login")}),(0,f.jsx)(y.A,{label:r("auth.register")})]}),(0,f.jsx)("form",{onSubmit:k((async t=>{try{if(w){const r=await o.A.post("".concat("https://extras-backend.onrender.com","/auth/login"),t);e(r.data.token,r.data.user)}else await i(t);R(),x(!0),D(null),S(null)}catch(s){const e=s,i=e.response?e.response.data.message:e.message;"User with this email does not exist"===i?D(r("auth.user_not_found")):"Invalid credentials"===i?S(r("auth.invalid_password")):(D(null),S(null)),console.error("Error:",i)}})),children:(0,f.jsxs)(A.Ay,{container:!0,spacing:2,children:[!w&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(A.Ay,{item:!0,xs:12,children:(0,f.jsx)(d.xI,{name:"firstName",control:N,render:e=>{let{field:i}=e;return(0,f.jsx)(p.A,{label:r("auth.first_name"),fullWidth:!0,...i,error:!!(0,c.u)(b,"firstName"),helperText:(0,c.u)(b,"firstName")})}})}),(0,f.jsx)(A.Ay,{item:!0,xs:12,children:(0,f.jsx)(d.xI,{name:"lastName",control:N,render:e=>{let{field:i}=e;return(0,f.jsx)(p.A,{label:r("auth.last_name"),fullWidth:!0,...i,error:!!(0,c.u)(b,"lastName"),helperText:(0,c.u)(b,"lastName")})}})})]}),(0,f.jsx)(A.Ay,{item:!0,xs:12,children:(0,f.jsx)(d.xI,{name:"email",control:N,render:e=>{let{field:i}=e;return(0,f.jsx)(p.A,{label:r("auth.email"),fullWidth:!0,...i,error:!!(0,c.u)(b,"email")||!!g,helperText:(0,c.u)(b,"email")||g})}})}),(0,f.jsx)(A.Ay,{item:!0,xs:12,children:(0,f.jsx)(d.xI,{name:"password",control:N,render:e=>{let{field:i}=e;return(0,f.jsx)(p.A,{label:r("auth.password"),type:"password",fullWidth:!0,...i,error:!!(0,c.u)(b,"password")||!!I,helperText:(0,c.u)(b,"password")||I})}})}),!w&&(0,f.jsx)(A.Ay,{item:!0,xs:12,children:(0,f.jsx)(d.xI,{name:"confirmPassword",control:N,render:e=>{let{field:i}=e;return(0,f.jsx)(p.A,{label:r("auth.confirm_password"),type:"password",fullWidth:!0,...i,error:!!(0,c.u)(b,"confirmPassword"),helperText:(0,c.u)(b,"confirmPassword")})}})}),(0,f.jsx)(A.Ay,{item:!0,xs:12,children:(0,f.jsx)(h.A,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:r(w?"auth.login":"auth.register")})})]})})]})})})}},9859:(r,e,i)=>{i.d(e,{u:()=>t});const t=(r,e)=>{var i;const t=e.split(".");let s=r;for(const o of t){if(!s[o])return;s=s[o]}return null===(i=s)||void 0===i?void 0:i.message}},177:(r,e,i)=>{i.d(e,{PI:()=>A,X5:()=>q,wQ:()=>p,zK:()=>l});var t=i(899),s=i(4978);const o=t.Ik().shape({surname:t.Yj().required(s.Ay.t("errors.required")),givenName:t.Yj().required(s.Ay.t("errors.required")),patronymic:t.Yj().required(s.Ay.t("errors.required")),birthDate:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),photo:t.gl().required(s.Ay.t("errors.required")),passportCopy:t.gl().required(s.Ay.t("errors.required")),passportDetails:t.Yj().required(s.Ay.t("errors.required")),passportOrInn:t.Yj().required(s.Ay.t("errors.required")),otherNames:t.Yj().required(s.Ay.t("errors.required")),birthPlaceAndDate:t.Yj().required(s.Ay.t("errors.required")),passportLost:t.zM().required(s.Ay.t("errors.required")),passportLostDetails:t.Yj().when("passportLost",{is:!0,then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),otherCitizenship:t.zM().required(s.Ay.t("errors.required")),otherPassportDetails:t.Yj().when("otherCitizenship",{is:!0,then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),residenceAddress:t.Yj().required(s.Ay.t("errors.required")),registeredAddress:t.Yj().required(s.Ay.t("errors.required")),contactNumber:t.Yj().required(s.Ay.t("errors.required")),contactNumbersLast5Years:t.Yj().required(s.Ay.t("errors.required")),emailAddress:t.Yj().email(s.Ay.t("errors.invalidEmail")).required(s.Ay.t("errors.required")),emailsLast5Years:t.Yj().required(s.Ay.t("errors.required")),socialMedia:t.YO().of(t.Ik().shape({name:t.Yj().required(s.Ay.t("errors.required")),id:t.Yj().required(s.Ay.t("errors.required"))})),otherMediaResources:t.zM().required(s.Ay.t("errors.required")),otherMediaResourceDetails:t.Yj().when("otherMediaResources",{is:!0,then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()})}),d=t.Ik().shape({fatherName:t.Yj().required(s.Ay.t("errors.required")),fatherDOB:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),motherName:t.Yj().required(s.Ay.t("errors.required")),motherDOB:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),parentsInUSA:t.Yj().required(s.Ay.t("errors.required")),maritalStatus:t.Yj().required(s.Ay.t("errors.required")),spouseName:t.Yj().required(s.Ay.t("errors.required")),spouseMaidenName:t.Yj().required(s.Ay.t("errors.required")),spouseDOB:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),spouseBirthPlace:t.Yj().required(s.Ay.t("errors.required")),spouseNationality:t.Yj().required(s.Ay.t("errors.required")),spouseAddress:t.Yj().required(s.Ay.t("errors.required")),previousMarriages:t.Yj().required(s.Ay.t("errors.required")),previousSpouses:t.Yj().required(s.Ay.t("errors.required")),previousSpouseDOB:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),marriageStartDate:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),marriageEndDate:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),previousSpouseBirthPlace:t.Yj().required(s.Ay.t("errors.required")),previousSpouseNationality:t.Yj().required(s.Ay.t("errors.required")),relativesInUSA:t.Yj().required(s.Ay.t("errors.required")),relativeNames:t.Yj().when("relativesInUSA",{is:"yes",then:r=>r.required(s.Ay.t("errors.required"))}),relativeStatus:t.Yj().when("relativesInUSA",{is:"yes",then:r=>r.required(s.Ay.t("errors.required"))}),otherRelativesInUSA:t.Yj().required(s.Ay.t("errors.required"))}),u=t.Ik().shape({travelPlans:t.Ik().shape({arrivalDate:t.p6().typeError(s.Ay.t("errors.invalidDate")).required(s.Ay.t("errors.required")),arrivalCity:t.Yj().required(s.Ay.t("errors.required")),placesToVisit:t.Yj().required(s.Ay.t("errors.required"))}),addressInUSA:t.Yj().required(s.Ay.t("errors.required")),invitingParty:t.Ik().shape({name:t.Yj().required(s.Ay.t("errors.required")),phone:t.Yj().required(s.Ay.t("errors.required")).matches(/^[0-9]+$/,s.Ay.t("errors.invalidPhone")),email:t.Yj().email(s.Ay.t("errors.invalidEmail")).required(s.Ay.t("errors.required")),relationship:t.Yj().required(s.Ay.t("errors.required"))}),durationOfStay:t.Yj().required(s.Ay.t("errors.required")),tripFunding:t.Yj().required(s.Ay.t("errors.required")),travelPurpose:t.Yj().required(s.Ay.t("errors.required")),travelCompanions:t.Yj().required(s.Ay.t("errors.required")),tripSponsor:t.Yj().required(s.Ay.t("errors.required")),sponsorInfo:t.Ik().when("tripSponsor",{is:"otherPersonOrCompany",then:r=>r.shape({surname:t.Yj().required(s.Ay.t("errors.required")),name:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),phone:t.Yj().required(s.Ay.t("errors.required")).matches(/^[0-9]+$/,s.Ay.t("errors.invalidPhone")),email:t.Yj().email(s.Ay.t("errors.invalidEmail")).required(s.Ay.t("errors.required")),relationship:t.Yj().required(s.Ay.t("errors.required"))}),otherwise:r=>r.shape({surname:t.Yj().notRequired(),name:t.Yj().notRequired(),address:t.Yj().notRequired(),phone:t.Yj().notRequired(),email:t.Yj().notRequired(),relationship:t.Yj().notRequired()})})}),a=t.Ik().shape({countriesVisited:t.Yj().required(s.Ay.t("errors.required")),visitedUSA:t.Yj().required(s.Ay.t("errors.required")),visaDates:t.Yj().when("visitedUSA",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),visaNumber:t.Yj().when("visitedUSA",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),visaDenied:t.Yj().required(s.Ay.t("errors.required")),denialDate:t.Yj().when("visaDenied",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),denialPlace:t.Yj().when("visaDenied",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),denialType:t.Yj().when("visaDenied",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),previousTravel:t.Yj().required(s.Ay.t("errors.required")),arrivalDate0:t.Yj().when("previousTravel",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),stayDuration0:t.Yj().when("previousTravel",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),immigrationPetition:t.Yj().required(s.Ay.t("errors.required")),petitionDetails:t.Yj().when("immigrationPetition",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),driverLicense:t.Yj().required(s.Ay.t("errors.required")),licenseDetails:t.Yj().when("driverLicense",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()}),ssn:t.Yj().required(s.Ay.t("errors.required")),ssnDetails:t.Yj().when("ssn",{is:"yes",then:r=>r.required(s.Ay.t("errors.required")),otherwise:r=>r.notRequired()})}),n=t.Ik().shape({currentEmployer:t.Ik().shape({companyName:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),phone:t.Yj().required(s.Ay.t("errors.required")),startDate:t.p6().required(s.Ay.t("errors.required")),position:t.Yj().required(s.Ay.t("errors.required")),duties:t.Yj().required(s.Ay.t("errors.required"))}),averageMonthlyIncome:t.ai().required(s.Ay.t("errors.required")),previousEmployer:t.YO().of(t.Ik().shape({companyName:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),phone:t.Yj().required(s.Ay.t("errors.required")),startDate:t.p6().required(s.Ay.t("errors.required")),position:t.Yj().required(s.Ay.t("errors.required")),duties:t.Yj().required(s.Ay.t("errors.required"))})),highSchool:t.Ik().shape({name:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),startDate:t.p6().required(s.Ay.t("errors.required")),endDate:t.p6().required(s.Ay.t("errors.required"))}),higherEducation:t.YO().of(t.Ik().shape({name:t.Yj().required(s.Ay.t("errors.required")),address:t.Yj().required(s.Ay.t("errors.required")),startDate:t.p6().required(s.Ay.t("errors.required")),endDate:t.p6().required(s.Ay.t("errors.required")),faculty:t.Yj().required(s.Ay.t("errors.required"))})),socialOrganizations:t.Yj().oneOf(["yes","no"]).required(s.Ay.t("errors.required")),tribe:t.Yj().oneOf(["yes","no"]).required(s.Ay.t("errors.required")),militaryService:t.Yj().oneOf(["yes","no"]).required(s.Ay.t("errors.required"))}),q=t.Ik({email:t.Yj().email(s.Ay.t("email.invalid")).required(s.Ay.t("email.required")),password:t.Yj().min(6,s.Ay.t("password.min")).required(s.Ay.t("password.required"))}),l=t.Ik({firstName:t.Yj().required(s.Ay.t("firstName")),lastName:t.Yj().required(s.Ay.t("lastName")),email:t.Yj().email(s.Ay.t("email.invalid")).required(s.Ay.t("email.required")),password:t.Yj().min(6,s.Ay.t("password.min")).required(s.Ay.t("password.required")),confirmPassword:t.Yj().oneOf([t.KR("password"),void 0],s.Ay.t("password.confirm")).required(s.Ay.t("confirmPassword"))}),y=["application/pdf","text/plain","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],A=t.Ik().shape({name:t.Yj().required(s.Ay.t("form.errors.name_required")),phone:t.Yj().required(s.Ay.t("form.errors.phone_required")),email:t.Yj().email(s.Ay.t("form.errors.email_invalid")).required(s.Ay.t("form.errors.email_required")),language:t.Yj().required(s.Ay.t("form.errors.language_required")),message:t.Yj().required(s.Ay.t("form.errors.message_required")),file:t.gl().required(s.Ay.t("form.errors.file_required")).test("fileSize",s.Ay.t("form.errors.file_size"),(r=>{var e;return!!(r&&r instanceof FileList)&&(null===(e=r[0])||void 0===e?void 0:e.size)<=10485760})).test("fileType",s.Ay.t("form.errors.file_type"),(r=>{var e;return!!(r&&r instanceof FileList)&&y.includes(null===(e=r[0])||void 0===e?void 0:e.type)}))}),p=t.Ik().shape({personalInfo:o,familyInfo:d,purposeOfTravel:u,travelHistory:a,workAndEducation:n,loginSchema:q,registerSchema:l})}}]);
//# sourceMappingURL=166.af181838.chunk.js.map