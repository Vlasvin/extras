"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[166],{8166:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var s=t(5043),i=t(4117),a=t(6213),n=t(4858),l=t(8403),o=t(9252),d=t(6446),u=t(5865),m=t(6546),c=t(4056),p=t(8903),f=t(1379),x=t(1787),h=t(7392),A=t(1906),y=t(3632),j=t(3559),g=t(2654),w=t(9859),v=t(6625),q=t(3737);const _={root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",padding:"20px",paddingTop:0,paddingBottom:"200px"}};var S=t(8684),Y=t(579);const b=()=>{const{t:e}=(0,i.Bd)(),{login:r,register:t}=(0,v.A)(),{setLoading:b}=(0,q.M)(),[I,N]=(0,s.useState)(!0),[k,z]=(0,s.useState)(null),[P,C]=(0,s.useState)(null),[T,W]=(0,s.useState)(!1),{control:B,handleSubmit:F,reset:K,formState:{errors:L}}=(0,n.mN)({resolver:(0,l.t)(I?S.X5:S.zK),defaultValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:""}}),X=()=>{W(!T)},D=(0,g.zh)({delay:2,duration:2,from:{opacity:0,transform:"translateY(20px)"},to:{opacity:1,transform:"translateY(0)"}});return(0,Y.jsx)(g.CS.div,{style:D,children:(0,Y.jsx)(o.A,{style:_.root,children:(0,Y.jsxs)(d.A,{sx:{maxWidth:400,mx:"auto",textAlign:"center"},children:[(0,Y.jsx)(u.A,{variant:"h4",gutterBottom:!0,children:e(I?"auth.login":"auth.register")}),(0,Y.jsxs)(m.A,{value:I?0:1,onChange:(e,r)=>{N(0===r),z(null),C(null)},centered:!0,sx:{marginBottom:2},children:[(0,Y.jsx)(c.A,{label:e("auth.login")}),(0,Y.jsx)(c.A,{label:e("auth.register")})]}),(0,Y.jsx)("form",{onSubmit:F((async s=>{b(!0);try{if(I){const e=await a.A.post("".concat("https://extras-backend.onrender.com","/auth/login"),s);r(e.data.token,e.data.user)}else await t(s);K(),N(!0),z(null),C(null)}catch(i){const r=i,t=r.response?r.response.data.message:r.message;"User with this email does not exist"===t?z(e("auth.user_not_found")):"Invalid credentials"===t?C(e("auth.invalid_password")):(z(null),C(null)),console.error("Error:",t)}finally{b(!1)}})),children:(0,Y.jsxs)(p.Ay,{container:!0,spacing:2,children:[!I&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(p.Ay,{item:!0,xs:12,children:(0,Y.jsx)(n.xI,{name:"firstName",control:B,render:r=>{let{field:t}=r;return(0,Y.jsx)(f.A,{label:e("auth.first_name"),fullWidth:!0,...t,error:!!(0,w.u)(L,"firstName"),helperText:(0,w.u)(L,"firstName")})}})}),(0,Y.jsx)(p.Ay,{item:!0,xs:12,children:(0,Y.jsx)(n.xI,{name:"lastName",control:B,render:r=>{let{field:t}=r;return(0,Y.jsx)(f.A,{label:e("auth.last_name"),fullWidth:!0,...t,error:!!(0,w.u)(L,"lastName"),helperText:(0,w.u)(L,"lastName")})}})})]}),(0,Y.jsx)(p.Ay,{item:!0,xs:12,children:(0,Y.jsx)(n.xI,{name:"email",control:B,render:r=>{let{field:t}=r;return(0,Y.jsx)(f.A,{label:e("auth.email"),fullWidth:!0,...t,error:!!(0,w.u)(L,"email")||!!k,helperText:(0,w.u)(L,"email")||k})}})}),(0,Y.jsx)(p.Ay,{item:!0,xs:12,children:(0,Y.jsx)(n.xI,{name:"password",control:B,render:r=>{let{field:t}=r;return(0,Y.jsx)(f.A,{label:e("auth.password"),type:T?"text":"password",fullWidth:!0,...t,error:!!(0,w.u)(L,"password")||!!P,helperText:(0,w.u)(L,"password")||P,InputProps:{endAdornment:(0,Y.jsx)(x.A,{position:"end",children:(0,Y.jsx)(h.A,{onClick:X,edge:"end",children:T?(0,Y.jsx)(y.A,{style:{fontSize:18}}):(0,Y.jsx)(j.A,{style:{fontSize:18}})})})}})}})}),!I&&(0,Y.jsx)(p.Ay,{item:!0,xs:12,children:(0,Y.jsx)(n.xI,{name:"confirmPassword",control:B,render:r=>{let{field:t}=r;return(0,Y.jsx)(f.A,{label:e("auth.confirm_password"),type:T?"text":"password",fullWidth:!0,...t,error:!!(0,w.u)(L,"confirmPassword"),helperText:(0,w.u)(L,"confirmPassword"),InputProps:{endAdornment:(0,Y.jsx)(x.A,{position:"end",children:(0,Y.jsx)(h.A,{onClick:X,edge:"end",children:T?(0,Y.jsx)(y.A,{style:{fontSize:18}}):(0,Y.jsx)(j.A,{style:{fontSize:18}})})})}})}})}),(0,Y.jsx)(p.Ay,{item:!0,xs:12,children:(0,Y.jsx)(A.A,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:e(I?"auth.login":"auth.register")})})]})})]})})})}},9859:(e,r,t)=>{t.d(r,{u:()=>s});const s=(e,r)=>{var t;const s=r.split(".");let i=e;for(const a of s){if(!i[a])return;i=i[a]}return null!==(t=i)&&void 0!==t&&t.message?String(i.message):void 0}},8684:(e,r,t)=>{t.d(r,{PI:()=>o,X5:()=>a,zK:()=>n});var s=t(899),i=t(4978);const a=s.Ik({email:s.Yj().email(i.Ay.t("email.invalid")).required(i.Ay.t("email.required")),password:s.Yj().min(6,i.Ay.t("password.min")).required(i.Ay.t("password.required"))}),n=s.Ik({firstName:s.Yj().required(i.Ay.t("firstName")),lastName:s.Yj().required(i.Ay.t("lastName")),email:s.Yj().email(i.Ay.t("email.invalid")).required(i.Ay.t("email.required")),password:s.Yj().min(6,i.Ay.t("password.min")).required(i.Ay.t("password.required")),confirmPassword:s.Yj().oneOf([s.KR("password"),void 0],i.Ay.t("password.confirm")).required(i.Ay.t("confirmPassword"))}),l=["application/pdf","text/plain","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],o=s.Ik().shape({name:s.Yj().required(i.Ay.t("form.errors.name_required")),phone:s.Yj().required(i.Ay.t("form.errors.phone_required")),email:s.Yj().email(i.Ay.t("form.errors.email_invalid")).required(i.Ay.t("form.errors.email_required")),language:s.Yj().required(i.Ay.t("form.errors.language_required")),message:s.Yj().required(i.Ay.t("form.errors.message_required")),file:s.gl().required(i.Ay.t("form.errors.file_required")).test("fileSize",i.Ay.t("form.errors.file_size"),(e=>{var r;return!!(e&&e instanceof FileList)&&(null===(r=e[0])||void 0===r?void 0:r.size)<=10485760})).test("fileType",i.Ay.t("form.errors.file_type"),(e=>{var r;return!!(e&&e instanceof FileList)&&l.includes(null===(r=e[0])||void 0===r?void 0:r.type)}))})}}]);
//# sourceMappingURL=166.bd6d8df0.chunk.js.map