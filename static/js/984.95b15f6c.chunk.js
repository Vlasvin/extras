"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[984],{1155:function(e,r,t){t.d(r,{Wg:function(){return l},eU:function(){return s},nx:function(){return o}});var n=t(4535),i=t(1906),a=t(6600),o=(0,n.Ay)(i.A)((function(e){var r=e.theme;return{color:"light"===r.palette.mode?"rgb(244, 229, 220)":"rgb(32, 19, 226)",backgroundColor:"light"===r.palette.mode?"rgb(32, 19, 226)":"rgb(244, 229, 220)","&:hover":{backgroundColor:"light"===r.palette.mode?"rgba(32, 19, 226, 0.8)":"rgba(244, 229, 220, 0.8)"}}})),s=(0,n.Ay)(a.A)((function(e){return{color:"light"===e.theme.palette.mode?"rgb(32, 19, 226)":"rgb(244, 229, 220)"}})),l=(0,n.Ay)(i.A)((function(e){var r=e.theme;return{display:"flex",justifyContent:"center",alignItems:"center",padding:" 9px",borderRadius:"4px",fontFamily:"GothamPro, sans-serif",fontSize:"clamp(14px,3.75vw,20px)",fontWeightRegular:400,letterSpacing:"0.1em",textTransform:"uppercase",color:"light"===r.palette.mode?"rgb(244, 229, 220)":"rgb(32, 19, 226)",backgroundColor:"light"===r.palette.mode?"rgb(32, 19, 226)":"rgb(244, 229, 220)","&:hover":{backgroundColor:"light"===r.palette.mode?"rgba(32, 19, 226, 0.8)":"rgba(244, 229, 220, 0.8)"}}}))},9392:function(e,r,t){t.d(r,{$E:function(){return f},AC:function(){return c},_x:function(){return u},g0:function(){return d},hE:function(){return l},s7:function(){return m}});var n=t(6060),i=t(5865),a=t(6446),o=t(2110),s=t(1906),l=(0,n.A)(i.A)((function(e){return{fontFamily:"Unbounded, sans-serif",color:"light"===e.theme.palette.mode?"rgb(32, 19, 226)":"rgb(244, 229, 220)",fontSize:"clamp(34px, 5.55vw, 54px)",fontWeight:800,lineHeight:1.25,letterSpacing:"0.1em",marginBottom:"24px",textAlign:"center"}})),u=(0,n.A)(i.A)((function(e){return{fontSize:"clamp(26px, 5.55vw, 42px)",lineHeight:1.08,fontWeight:500,letterSpacing:"0.25em",marginBottom:"24px",textAlign:"center",color:"light"===e.theme.palette.mode?"rgb(32, 19, 226)":"rgb(244, 229, 220)"}})),c=(0,n.A)(a.A)((function(e){e.theme;return{marginBottom:"48px",textIndent:"1em"}})),d=((0,n.A)(o.A)((function(e){e.theme;return{width:"clamp(300px, 50vw, 380px)",height:"auto",borderRadius:"20px",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",marginBottom:"48px",padding:"20px"}})),(0,n.A)(a.A)((function(e){e.theme;return{marginBottom:"48px"}}))),f=(0,n.A)("img")((function(e){e.theme;return{height:"280px",width:"clamp(300px, 50vw, 400px)",objectFit:"cover",borderRadius:"20px",marginBottom:"24px"}})),m=(0,n.A)(s.A)((function(e){var r=e.theme;return{borderRadius:"20px",color:"light"===r.palette.mode?"rgb(244, 229, 220)":"rgb(32, 19, 226)",backgroundColor:"light"===r.palette.mode?"rgb(32, 19, 226)":"rgb(244, 229, 220)","&:hover":{backgroundColor:"light"===r.palette.mode?"rgba(32, 19, 226, 0.8)":"rgba(244, 229, 220, 0.8)"}}}))},6651:function(e,r,t){t.r(r),t.d(r,{default:function(){return I}});var n=t(5544),i=t(9379),a=t(5043),o=t(4117),s=t(4836),l=t(9252),u=t(8903),c=t(681),d=t(8734),f=t(5865),m=t(6446),p=t(35),h=t(6600),x=t(7392),g=t(5316),A=t(4802),v=t(675),y=t(467),b=t(4858),j=t(8403),w=t(1379),C=t(5721),S=t(7316),W=t(9859),k=t(8684),q=t(1155),R=t(579),T=function(e){var r=e.onClose,t=(0,o.Bd)().t,n=(0,b.mN)({resolver:(0,j.t)(k.PI)}),a=n.control,s=n.handleSubmit,p=n.formState.errors,h=n.setValue,x=n.watch,g=x("file"),A=function(){var e=(0,y.A)((0,v.A)().mark((function e(t){var n;return(0,v.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(n=new FormData).append("name",t.name),n.append("phone",t.phone),n.append("email",t.email),n.append("language",t.language),n.append("message",t.message),t.file.length>0&&n.append("file",t.file[0]),e.next=10,S.A.post("".concat("https://extras-backend.onrender.com","/api/send-email"),n,{headers:{"Content-Type":"multipart/form-data"}});case 10:r(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Error sending form data:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(r){return e.apply(this,arguments)}}();return(0,R.jsx)(l.A,{maxWidth:"sm",children:(0,R.jsxs)(m.A,{sx:{mb:6},children:[(0,R.jsx)(f.A,{sx:{fontSize:"24px",textAlign:"center",marginBottom:"28px"}}),(0,R.jsx)("form",{onSubmit:s(A),children:(0,R.jsxs)(u.Ay,{container:!0,spacing:2,children:[(0,R.jsx)(u.Ay,{item:!0,xs:12,children:(0,R.jsx)(b.xI,{name:"name",control:a,render:function(e){var r=e.field;return(0,R.jsx)(w.A,(0,i.A)((0,i.A)({},r),{},{label:t("form.name"),fullWidth:!0,error:!!p.name,helperText:(0,W.u)(p,"name")}))}})}),(0,R.jsx)(u.Ay,{item:!0,xs:12,children:(0,R.jsx)(b.xI,{name:"phone",control:a,render:function(e){var r=e.field;return(0,R.jsx)(w.A,(0,i.A)((0,i.A)({},r),{},{label:t("form.phone"),fullWidth:!0,error:!!p.phone,helperText:(0,W.u)(p,"phone")}))}})}),(0,R.jsx)(u.Ay,{item:!0,xs:12,children:(0,R.jsx)(b.xI,{name:"email",control:a,render:function(e){var r=e.field;return(0,R.jsx)(w.A,(0,i.A)((0,i.A)({},r),{},{label:t("form.email"),fullWidth:!0,error:!!p.email,helperText:(0,W.u)(p,"email")}))}})}),(0,R.jsx)(u.Ay,{item:!0,xs:12,children:(0,R.jsx)(b.xI,{name:"language",control:a,render:function(e){var r=e.field;return(0,R.jsx)(w.A,(0,i.A)((0,i.A)({},r),{},{label:t("form.language"),fullWidth:!0,error:!!p.language,helperText:(0,W.u)(p,"language")}))}})}),(0,R.jsx)(u.Ay,{item:!0,xs:12,children:(0,R.jsx)(b.xI,{name:"message",control:a,render:function(e){var r=e.field;return(0,R.jsx)(w.A,(0,i.A)((0,i.A)({},r),{},{label:t("form.message"),fullWidth:!0,multiline:!0,rows:4,error:!!p.message,helperText:(0,W.u)(p,"message")}))}})}),(0,R.jsxs)(u.Ay,{item:!0,xs:12,children:[(0,R.jsxs)(q.Wg,{variant:"outlined",as:"label",fullWidth:!0,children:[t("form.upload_file"),(0,R.jsx)("input",{type:"file",hidden:!0,onChange:function(e){e.target.files&&e.target.files.length>0&&h("file",e.target.files)}})]}),p.file&&(0,R.jsx)(f.A,{color:"error",variant:"body2",children:(0,W.u)(p,"file")}),(0,R.jsx)(C.A,{children:g&&Array.from(g).map((function(e,r){return(0,R.jsx)(c.Ay,{children:(0,R.jsx)(d.A,{primary:e.name})},r)}))})]}),(0,R.jsx)(u.Ay,{item:!0,xs:12,children:(0,R.jsx)(q.nx,{type:"submit",variant:"outlined",color:"primary",fullWidth:!0,children:t("form.submit")})})]})})]})})},_=t(9392),O=t.p+"static/media/translate.ad8975cb1a94787af6c6.jpg",B=function(e){return(0,(0,o.Bd)().t)(e,{returnObjects:!0})},N=(0,a.forwardRef)((function(e,r){return(0,R.jsx)(s.A,(0,i.A)({direction:"down",ref:r},e))})),P=function(){var e=(0,o.Bd)().t,r=(0,a.useState)(!1),t=(0,n.A)(r,2),i=t[0],s=t[1],v=B("translation.services"),y=B("translation.oralTranslation.services"),b=function(){s(!1)};return(0,R.jsxs)(l.A,{children:[(0,R.jsx)(_.hE,{variant:"h2",gutterBottom:!0,children:e("translation.title")}),(0,R.jsx)(_._x,{variant:"h6",gutterBottom:!0,children:e("translation.subtitle")}),(0,R.jsxs)(u.Ay,{container:!0,spacing:2,children:[(0,R.jsx)(u.Ay,{item:!0,xs:12,sm:8,style:{maxWidth:720},children:(0,R.jsx)(_.g0,{children:v.map((function(e,r){return(0,R.jsx)(c.Ay,{children:(0,R.jsx)(d.A,{primary:"\u2022 ".concat(e)})},r)}))})}),(0,R.jsx)(u.Ay,{item:!0,xs:12,sm:4,children:(0,R.jsx)(_.$E,{src:O,alt:"Translation Services"})})]}),(0,R.jsxs)(_.AC,{children:[(0,R.jsx)(_._x,{variant:"h5",gutterBottom:!0,children:e("translation.writtenTranslation.title")}),(0,R.jsx)(f.A,{paragraph:!0,children:e("translation.writtenTranslation.description")}),(0,R.jsx)(f.A,{paragraph:!0,mb:6,children:e("translation.writtenTranslation.details")}),(0,R.jsx)(m.A,{display:"flex",justifyContent:"center",my:2,mb:6,children:(0,R.jsx)(_.s7,{variant:"outlined",color:"primary",onClick:function(){s(!0)},children:e("form.calculate_title")})}),(0,R.jsxs)(p.A,{open:i,TransitionComponent:N,onClose:b,PaperProps:{sx:{borderRadius:4}},children:[(0,R.jsxs)(h.A,{sx:{padding:"40px 30px 0",fontSize:"24px",textAlign:"center"},children:[e("form.calculate_title"),(0,R.jsx)(x.A,{"aria-label":"close",onClick:b,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,R.jsx)(A.A,{})})]}),(0,R.jsx)(g.A,{sx:{padding:"30px"},children:(0,R.jsx)(T,{onClose:b})})]}),(0,R.jsx)(_._x,{variant:"h6",gutterBottom:!0,children:e("translation.certificationTypes.title")}),(0,R.jsx)(f.A,{paragraph:!0,children:e("translation.certificationTypes.agencySeal")}),(0,R.jsx)(f.A,{paragraph:!0,children:e("translation.certificationTypes.notarySeal")})]}),(0,R.jsxs)(_.AC,{children:[(0,R.jsx)(_._x,{variant:"h5",gutterBottom:!0,children:e("translation.oralTranslation.title")}),(0,R.jsx)(f.A,{paragraph:!0,children:e("translation.oralTranslation.description")}),(0,R.jsx)(_.g0,{children:y.map((function(e,r){return(0,R.jsx)(c.Ay,{children:(0,R.jsx)(d.A,{primary:"\u2022 ".concat(e)})},r)}))})]}),(0,R.jsxs)(_.AC,{children:[(0,R.jsx)(_._x,{variant:"h6",gutterBottom:!0,children:e("translation.voiceOver.title")}),(0,R.jsx)(f.A,{paragraph:!0,children:e("translation.voiceOver.description")})]})]})},I=function(){return(0,R.jsx)("div",{children:(0,R.jsx)(P,{})})}},9859:function(e,r,t){t.d(r,{u:function(){return i}});var n=t(4765),i=function(e,r){var t,i,a=r.split("."),o=e,s=(0,n.A)(a);try{for(s.s();!(i=s.n()).done;){var l=i.value;if(!o[l])return;o=o[l]}}catch(u){s.e(u)}finally{s.f()}return null!==(t=o)&&void 0!==t&&t.message?String(o.message):void 0}},8684:function(e,r,t){t.d(r,{PI:function(){return l},X5:function(){return a},zK:function(){return o}});var n=t(899),i=t(4978),a=n.Ik({email:n.Yj().email(i.Ay.t("email.invalid")).required(i.Ay.t("email.required")),password:n.Yj().min(6,i.Ay.t("password.min")).required(i.Ay.t("password.required"))}),o=n.Ik({firstName:n.Yj().required(i.Ay.t("firstName")),lastName:n.Yj().required(i.Ay.t("lastName")),email:n.Yj().email(i.Ay.t("email.invalid")).required(i.Ay.t("email.required")),password:n.Yj().min(6,i.Ay.t("password.min")).required(i.Ay.t("password.required")),confirmPassword:n.Yj().oneOf([n.KR("password"),void 0],i.Ay.t("password.confirm")).required(i.Ay.t("confirmPassword"))}),s=["application/pdf","text/plain","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],l=n.Ik().shape({name:n.Yj().required(i.Ay.t("form.errors.name_required")),phone:n.Yj().required(i.Ay.t("form.errors.phone_required")),email:n.Yj().email(i.Ay.t("form.errors.email_invalid")).required(i.Ay.t("form.errors.email_required")),language:n.Yj().required(i.Ay.t("form.errors.language_required")),message:n.Yj().required(i.Ay.t("form.errors.message_required")),file:n.gl().required(i.Ay.t("form.errors.file_required")).test("fileSize",i.Ay.t("form.errors.file_size"),(function(e){var r;return!!(e&&e instanceof FileList)&&(null===(r=e[0])||void 0===r?void 0:r.size)<=10485760})).test("fileType",i.Ay.t("form.errors.file_type"),(function(e){var r;return!!(e&&e instanceof FileList)&&s.includes(null===(r=e[0])||void 0===r?void 0:r.type)}))})},2110:function(e,r,t){t.d(r,{A:function(){return g}});var n=t(8168),i=t(8587),a=t(5043),o=t(8387),s=t(8606),l=t(4535),u=t(2876),c=t(3336),d=t(7056),f=t(2400);function m(e){return(0,f.Ay)("MuiCard",e)}(0,d.A)("MuiCard",["root"]);var p=t(579),h=["className","raised"],x=(0,l.Ay)(c.A,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),g=a.forwardRef((function(e,r){var t=(0,u.A)({props:e,name:"MuiCard"}),a=t.className,l=t.raised,c=void 0!==l&&l,d=(0,i.A)(t,h),f=(0,n.A)({},t,{raised:c}),g=function(e){var r=e.classes;return(0,s.A)({root:["root"]},m,r)}(f);return(0,p.jsx)(x,(0,n.A)({className:(0,o.A)(g.root,a),elevation:c?8:void 0,ref:r,ownerState:f},d))}))},9252:function(e,r,t){t.d(r,{A:function(){return w}});var n=t(4467),i=t(8587),a=t(8168),o=t(5043),s=t(8387),l=t(2400),u=t(8606),c=t(410),d=t(2900),f=t(6060),m=t(8280),p=t(579),h=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,m.A)(),g=(0,f.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r["maxWidth".concat((0,c.A)(String(t.maxWidth)))],t.fixed&&r.fixed,t.disableGutters&&r.disableGutters]}}),A=function(e){return(0,d.A)({props:e,name:"MuiContainer",defaultTheme:x})};var v=t(6803),y=t(4535),b=t(2876),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.createStyledComponent,t=void 0===r?g:r,d=e.useThemeProps,f=void 0===d?A:d,m=e.componentName,x=void 0===m?"MuiContainer":m,v=t((function(e){var r=e.theme,t=e.ownerState;return(0,a.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,n.A)({paddingLeft:r.spacing(2),paddingRight:r.spacing(2)},r.breakpoints.up("sm"),{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}))}),(function(e){var r=e.theme;return e.ownerState.fixed&&Object.keys(r.breakpoints.values).reduce((function(e,t){var n=t,i=r.breakpoints.values[n];return 0!==i&&(e[r.breakpoints.up(n)]={maxWidth:"".concat(i).concat(r.breakpoints.unit)}),e}),{})}),(function(e){var r=e.theme,t=e.ownerState;return(0,a.A)({},"xs"===t.maxWidth&&(0,n.A)({},r.breakpoints.up("xs"),{maxWidth:Math.max(r.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,n.A)({},r.breakpoints.up(t.maxWidth),{maxWidth:"".concat(r.breakpoints.values[t.maxWidth]).concat(r.breakpoints.unit)}))})),y=o.forwardRef((function(e,r){var t=f(e),n=t.className,o=t.component,d=void 0===o?"div":o,m=t.disableGutters,g=void 0!==m&&m,A=t.fixed,y=void 0!==A&&A,b=t.maxWidth,j=void 0===b?"lg":b,w=(0,i.A)(t,h),C=(0,a.A)({},t,{component:d,disableGutters:g,fixed:y,maxWidth:j}),S=function(e,r){var t=e.classes,n=e.fixed,i=e.disableGutters,a=e.maxWidth,o={root:["root",a&&"maxWidth".concat((0,c.A)(String(a))),n&&"fixed",i&&"disableGutters"]};return(0,u.A)(o,(function(e){return(0,l.Ay)(r,e)}),t)}(C,x);return(0,p.jsx)(v,(0,a.A)({as:d,ownerState:C,className:(0,s.A)(S.root,n),ref:r},w))}));return y}({createStyledComponent:(0,y.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r["maxWidth".concat((0,v.A)(String(t.maxWidth)))],t.fixed&&r.fixed,t.disableGutters&&r.disableGutters]}}),useThemeProps:function(e){return(0,b.A)({props:e,name:"MuiContainer"})}}),w=j},991:function(e,r,t){t.d(r,{A:function(){return i}});var n=t(3954);function i(){return i="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,r,t){var i=function(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=(0,n.A)(e)););return e}(e,r);if(i){var a=Object.getOwnPropertyDescriptor(i,r);return a.get?a.get.call(arguments.length<3?e:t):a.value}},i.apply(this,arguments)}},45:function(e,r,t){t.d(r,{A:function(){return i}});var n=t(8587);function i(e,r){if(null==e)return{};var t,i,a=(0,n.A)(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},8403:function(e,r,t){t.d(r,{t:function(){return c}});var n=t(4858),i=function(e,r,t){if(e&&"reportValidity"in e){var i=(0,n.Jt)(t,r);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},a=function(e,r){var t=function(t){var n=r.fields[t];n&&n.ref&&"reportValidity"in n.ref?i(n.ref,t,e):n.refs&&n.refs.forEach((function(r){return i(r,t,e)}))};for(var n in r.fields)t(n)},o=function(e){return!function(e){return null==e}(e)&&!Array.isArray(e)&&function(e){return"object"==typeof e}(e)&&!function(e){return e instanceof Date}(e)},s=function(e,r,t){for(var n=-1,i=function(e){return/^\w*$/.test(e)}(r)?[r]:function(e){return r=e.replace(/["|']|\]/g,"").split(/\.|\[/),Array.isArray(r)?r.filter(Boolean):[];var r}(r),a=i.length,s=a-1;++n<a;){var l=i[n],u=t;if(n!==s){var c=e[l];u=o(c)||Array.isArray(c)?c:isNaN(+i[n+1])?{}:[]}e[l]=u,e=e[l]}return e},l=function(e,r){r.shouldUseNativeValidation&&a(e,r);var t={};for(var i in e){var o=(0,n.Jt)(r.fields,i),l=Object.assign(e[i]||{},{ref:o&&o.ref});if(u(r.names||Object.keys(e),i)){var c=Object.assign({},(0,n.Jt)(t,i));s(c,"root",l),s(t,i,c)}else s(t,i,l)}return t},u=function(e,r){return e.some((function(e){return e.startsWith(r+".")}))};function c(e,r,t){return void 0===r&&(r={}),void 0===t&&(t={}),function(i,o,s){try{return Promise.resolve(function(n,l){try{var u=(r.context,Promise.resolve(e["sync"===t.mode?"validateSync":"validate"](i,Object.assign({abortEarly:!1},r,{context:o}))).then((function(e){return s.shouldUseNativeValidation&&a({},s),{values:t.raw?i:e,errors:{}}})))}catch(c){return l(c)}return u&&u.then?u.then(void 0,l):u}(0,(function(e){if(!e.inner)throw e;return{values:{},errors:l((r=e,t=!s.shouldUseNativeValidation&&"all"===s.criteriaMode,(r.inner||[]).reduce((function(e,r){if(e[r.path]||(e[r.path]={message:r.message,type:r.type}),t){var i=e[r.path].types,a=i&&i[r.type];e[r.path]=(0,n.Gb)(r.path,t,e,r.type,a?[].concat(a,r.message):r.message)}return e}),{})),s)};var r,t})))}catch(u){return Promise.reject(u)}}}}}]);
//# sourceMappingURL=984.95b15f6c.chunk.js.map