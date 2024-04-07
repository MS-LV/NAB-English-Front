import{b as et}from"./chunk-UVS4A4AQ.js";import{f as it}from"./chunk-DC26EXWL.js";import"./chunk-QQTCDX6A.js";import{b as Ze}from"./chunk-AUGCRO4O.js";import"./chunk-WKOKV735.js";import{g as tt}from"./chunk-IRCTA5XN.js";import"./chunk-65OQMYDY.js";import{e as Ne,f as Ue,g as Fe,h as Ie,i as qe,j as Ge,k as Oe}from"./chunk-K5756VYG.js";import{a as Z}from"./chunk-OTUB2N7D.js";import{a as ee}from"./chunk-QHSWDP77.js";import{b as X,c as Y}from"./chunk-EDUNMAHS.js";import{c as De}from"./chunk-TUH4D35M.js";import{a as K,b as W}from"./chunk-L3PVCT4E.js";import{j as ue}from"./chunk-ZAA7ULWK.js";import{a as j,b as R}from"./chunk-XA2PLFJU.js";import{a as Re,b as Le,c as Ve,d as Qe,e as Je,f as ke,g as He,h as Ae,i as Be,j as $e,k as ze,l as Ke,m as We,n as Xe,o as Ye}from"./chunk-PDRW6PCR.js";import{a as te,b as ie}from"./chunk-5IJI7NAP.js";import{a as Pe,b as je}from"./chunk-GNCHM62V.js";import"./chunk-BNTI2VTZ.js";import"./chunk-QDYPK2F6.js";import{a as H,b as Ee,c as A,d as B,g as $,h as z}from"./chunk-HDGD2BNV.js";import{b as Q,c as p,e as J,f as ve,g as re,i as C,j as Ce,k as _e,l as he,n as be,o as Te,p as Me,q as ye,r as Se,s as xe,v as we,w as k}from"./chunk-Y3NZECYS.js";import"./chunk-JGYM447R.js";import"./chunk-VBNUDUW5.js";import{$ as ge,U as ce,Z as fe,ba as L,ca as V}from"./chunk-GST4AJEM.js";import"./chunk-L6NNWS3K.js";import{$b as se,Ab as t,Ba as me,Bb as i,Cb as c,Db as E,Eb as D,Fc as P,Gb as q,Jb as g,Lb as v,Tb as ne,Ub as a,Vb as T,Wa as U,Wb as G,Za as r,_a as b,ac as w,bc as pe,ec as M,fc as y,jb as f,ka as le,la as x,pb as s,qb as de,rb as d,rc as O,ta as _,ua as h,wb as u,xb as ae,yb as F,zb as I}from"./chunk-VVHKCFJL.js";var ft=(e,l)=>l.name;function gt(e,l){if(e&1&&(t(0,"div",3),c(1,"img",20),i()),e&2){let n=v();r(),d("src",n.coverUrl(),U)}}function vt(e,l){e&1&&(t(0,"mat-error"),a(1,"Fill "),t(2,"b"),a(3,"Full Name"),i(),a(4," field"),i())}function Ct(e,l){e&1&&(t(0,"mat-error"),a(1,"Fill "),t(2,"b"),a(3,"Email"),i(),a(4," field"),i())}function _t(e,l){e&1&&(t(0,"mat-error"),a(1,"Fill "),t(2,"b"),a(3,"Password"),i(),a(4," field"),i())}function ht(e,l){if(e&1&&(t(0,"mat-error"),a(1,"Password minimum length "),t(2,"b"),a(3),i(),a(4," symbols"),i()),e&2){let n=v();r(3),T(n.usersConfig.password.min)}}function bt(e,l){if(e&1&&(t(0,"mat-error"),a(1,"Password maximum length "),t(2,"b"),a(3),i(),a(4," symbols"),i()),e&2){let n=v();r(3),T(n.usersConfig.password.max)}}function Tt(e,l){if(e&1&&(t(0,"mat-option",12),a(1),M(2,"titlecase"),i()),e&2){let n=l.$implicit;d("value",n),r(),T(y(2,2,n))}}function Mt(e,l){if(e&1&&(t(0,"mat-option",12),a(1),M(2,"titlecase"),i()),e&2){let n=l.$implicit;d("value",n),r(),T(y(2,2,n))}}function yt(e,l){e&1&&(t(0,"mat-error"),a(1,"Fill "),t(2,"b"),a(3,"Password"),i(),a(4," field"),i())}function St(e,l){if(e&1&&(t(0,"option",12),a(1),i()),e&2){let n=l.$implicit,m=v();d("value",m.emailField()[0]+n.value),r(),T(n.name)}}var at=(()=>{class e{materialConfig;usersConfig;dialogData;formGroup=O(()=>this.dialogData.formGroup);formCoverFile=O(()=>this.formGroup().get("avatar"));formEmail=O(()=>this.formGroup().get("email"));Object=Object;roles=f(X);levels=f(Y);coverUrl=f("");isHide=f(!0);emailTypes=f([{name:"Gmail",value:"@gmail.com"},{name:"Email",value:"@email.ru"}]);emailField=f([""]);constructor(n,m,o){this.materialConfig=n,this.usersConfig=m,this.dialogData=o}ngOnInit(){}get coverFileName(){return this.formCoverFile()?.value?.name??""}onEmailInput(){if(!this.formGroup().get("email").value){this.emailField.set([""]);return}let m=this.formGroup().get("email").value.match(new RegExp(/^\w+/));this.emailField.set(m)}onInputFileChange(n){let m=n.files;if(!m||!m.item(0))return;let o=m.item(0);this.formCoverFile().patchValue(o),this.coverUrl.set(De(this.formCoverFile().value)),console.log("file: ",this.formGroup().value)}onSubmit(){console.log(this.formGroup().value)}reset(){tt(this.formGroup())}static \u0275fac=function(m){return new(m||e)(b(ee),b(Z),b(Ne))};static \u0275cmp=x({type:e,selectors:[["comp-create-user"]],standalone:!0,features:[se([]),w],decls:63,vars:26,consts:[["f_input",""],[3,"ngSubmit","formGroup"],["mat-dialog-title",""],[1,"coverImage"],["type","button","mat-icon-button","","matPrefix","","matTooltip","Upload cover image for document",3,"click","matTooltipPosition","matTooltipShowDelay","matTooltipHideDelay"],["type","text","readonly","","matInput","",3,"value"],["type","file","multiple","","hidden","","accept","image/*",3,"change"],["matInput","","formControlName","fullName",3,"minlength","maxlength"],["type","email","list","emailTypes","matInput","","formControlName","email",3,"input","minlength","maxlength"],["matInput","","formControlName","password",3,"type","minlength","maxlength"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["formControlName","role","required",""],[3,"value"],["formControlName","level","required",""],["matInput","","rows","10","formControlName","description","placeholder","Description of question",3,"minlength","maxlength"],[2,"color","transparent","user-select","none"],["align","end"],["mat-raised-button","","color","warn","type","reset",3,"disabled"],["mat-raised-button","","color","primary","type","submit","type","submit",3,"mat-dialog-close","disabled"],["id","emailTypes"],["alt","",3,"src"]],template:function(m,o){if(m&1){let S=q();t(0,"form",1),g("ngSubmit",function(){return _(S),h(o.onSubmit())}),t(1,"h2",2),a(2,"Dictionary Question"),i(),t(3,"mat-dialog-content"),s(4,gt,2,1,"div",3),t(5,"mat-form-field")(6,"mat-label"),a(7,"Avatar"),i(),t(8,"button",4),g("click",function(){_(S);let oe=ne(13);return h(oe.click())}),t(9,"mat-icon"),a(10,"add_photo_alternate"),i()(),c(11,"input",5),t(12,"input",6,0),g("change",function(){_(S);let oe=ne(13);return h(o.onInputFileChange(oe))}),i(),t(14,"mat-error"),a(15,"this field is required"),i()(),t(16,"mat-form-field")(17,"mat-label"),a(18,"Full Name"),i(),c(19,"input",7),s(20,vt,5,0,"mat-error"),i(),t(21,"mat-form-field")(22,"mat-label"),a(23,"Email"),i(),t(24,"input",8),g("input",function(){return _(S),h(o.onEmailInput())}),i(),s(25,Ct,5,0,"mat-error"),i(),t(26,"mat-form-field")(27,"mat-label"),a(28,"Password"),i(),c(29,"input",9),t(30,"button",10),g("click",function(){return _(S),h(o.isHide.set(!o.isHide()))}),t(31,"mat-icon"),a(32),i()(),s(33,_t,5,0,"mat-error")(34,ht,5,1,"mat-error")(35,bt,5,1,"mat-error"),i(),t(36,"mat-form-field")(37,"mat-label"),a(38,"Role"),i(),t(39,"mat-select",11),F(40,Tt,3,4,"mat-option",12,ae),i()(),t(42,"mat-form-field")(43,"mat-label"),a(44,"Level"),i(),t(45,"mat-select",13),F(46,Mt,3,4,"mat-option",12,ae),i()(),t(48,"mat-form-field")(49,"mat-label"),a(50,"Description"),i(),c(51,"textarea",14),s(52,yt,5,0,"mat-error"),i(),t(53,"p",15),a(54," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, nemo. Laboriosam ipsa molestiae voluptatem quasi? Id reiciendis, ut repellat consequatur sapiente voluptatibus temporibus, modi ullam quas sit, amet est consequuntur. "),i()(),t(55,"mat-dialog-actions",16)(56,"button",17),a(57,"Reset"),i(),t(58,"button",18),a(59,"Submit"),i()()(),t(60,"datalist",19),F(61,St,2,2,"option",12,ft),i()}m&2&&(d("formGroup",o.formGroup()),r(4),u(4,o.coverUrl()&&o.formCoverFile().value?4:-1),r(4),d("matTooltipPosition",o.materialConfig.tooltip.position)("matTooltipShowDelay",o.materialConfig.tooltip.showDelay)("matTooltipHideDelay",o.materialConfig.tooltip.hideDelay),r(3),d("value",o.coverFileName),r(8),d("minlength",o.usersConfig.fullName.min)("maxlength",o.usersConfig.fullName.max),r(),u(20,o.formGroup().get("fullName").hasError("required")?20:-1),r(4),d("minlength",o.usersConfig.email.min)("maxlength",o.usersConfig.email.max),r(),u(25,o.formGroup().get("email").hasError("required")?25:-1),r(4),d("type",o.isHide()?"password":"text")("minlength",o.usersConfig.password.min)("maxlength",o.usersConfig.password.max),r(),de("aria-label","Hide password"),r(2),T(o.isHide()?"visibility_off":"visibility"),r(),u(33,o.formGroup().get("password").hasError("required")?33:-1),r(),u(34,o.formGroup().get("password").hasError("minlength")?34:-1),r(),u(35,o.formGroup().get("password").hasError("maxlength")?35:-1),r(5),I(o.Object.values(o.roles())),r(6),I(o.Object.values(o.levels())),r(5),d("minlength",o.usersConfig.description.min)("maxlength",o.usersConfig.description.max),r(),u(52,o.formGroup().get("description").hasError("required")?52:-1),r(4),d("disabled",o.formGroup().untouched),r(2),d("mat-dialog-close",!0)("disabled",o.formGroup().invalid),r(3),I(o.emailTypes()))},dependencies:[P,we,Ce,Te,Me,Q,J,ve,ye,Se,xe,W,K,$,H,Ee,A,B,V,fe,L,ue,Oe,Fe,Ie,Ge,qe,R,j,k,he,be,it,ie,te,je,Pe,ce,z],styles:["[_nghost-%COMP%]{display:block;width:100%}mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}form[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]{width:100%}mat-card-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.coverImage[_ngcontent-%COMP%]{position:relative;width:150px;height:150px;min-height:150px;margin:10px 0}.coverImage[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}"]})}return e})();var nt=[{id:1,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:2,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:3,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:4,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:5,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:6,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:7,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:8,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:9,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:10,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:11,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:12,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:13,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:14,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:15,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:16,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:17,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:18,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:19,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"},{id:20,avatar:"assets/dictionary.png",fullName:"Jamoliddin Qodirov",email:"jamoliddinqodirov18@gmail.com",password:"234234234",role:"STUDENT",level:"beginner",description:"My description about student"}];var xt=()=>[5,10,20];function wt(e,l){e&1&&(t(0,"th",12),a(1," Avatar "),i())}function Et(e,l){if(e&1&&(t(0,"td",13),c(1,"img",14),i()),e&2){let n=l.$implicit;r(),d("src",n.avatar,U)}}function Dt(e,l){e&1&&(t(0,"th",12),a(1," Full Name "),i())}function Nt(e,l){if(e&1&&(t(0,"td",13),a(1),M(2,"titlecase"),i()),e&2){let n=l.$implicit;r(),G(" ",y(2,1,n.fullName)," ")}}function Ut(e,l){e&1&&(t(0,"th",12),a(1," Level "),i())}function Ft(e,l){if(e&1&&(t(0,"td",13),a(1),M(2,"titlecase"),i()),e&2){let n=l.$implicit;r(),G(" ",y(2,1,n.level)," ")}}function It(e,l){e&1&&(t(0,"th",12),a(1," Role "),i())}function qt(e,l){if(e&1&&(t(0,"td",13),a(1),M(2,"titlecase"),i()),e&2){let n=l.$implicit;r(),G(" ",y(2,1,n.role)," ")}}function Gt(e,l){e&1&&c(0,"tr",15)}function Ot(e,l){e&1&&c(0,"tr",16)}function Pt(e,l){e&1&&(t(0,"tr",17)(1,"td",18),a(2,"No data matching the filter "),i()())}function jt(e,l){if(e&1&&(t(0,"table",1),E(1,2),s(2,wt,2,0,"th",3)(3,Et,2,1,"td",4),D(),E(4,5),s(5,Dt,2,0,"th",3)(6,Nt,3,3,"td",4),D(),E(7,6),s(8,Ut,2,0,"th",3)(9,Ft,3,3,"td",4),D(),E(10,7),s(11,It,2,0,"th",3)(12,qt,3,3,"td",4),D(),s(13,Gt,1,0,"tr",8)(14,Ot,1,0,"tr",9)(15,Pt,3,0,"tr",10),i(),c(16,"mat-paginator",11,0)),e&2){let n=v();d("dataSource",n.dataSource()),r(13),d("matHeaderRowDef",n.displayedColumns),r(),d("matRowDefColumns",n.displayedColumns),r(2),d("length",20)("pageIndex",0)("pageSize",10)("pageSizeOptions",pe(7,xt))}}var rt=(()=>{class e{dataSource=me([]);displayedColumns=["avatar","fullName","level","role"];constructor(){}static \u0275fac=function(m){return new(m||e)};static \u0275cmp=x({type:e,selectors:[["comp-users-table"]],inputs:{dataSource:[le.SignalBased,"dataSource"]},standalone:!0,features:[w],decls:1,vars:1,consts:[["paginator",""],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","avatar"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","fullName"],["matColumnDef","level"],["matColumnDef","role"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page",3,"length","pageIndex","pageSize","pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["loading","lazy","alt","",1,"avatar",3,"src"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(m,o){m&1&&s(0,jt,18,8),m&2&&u(0,o.dataSource()?0:-1)},dependencies:[Ke,Re,Ve,He,Qe,Le,Ae,Je,ke,Be,$e,ze,Xe,We,Ye,P],styles:["[_nghost-%COMP%]{display:block;width:100%}.full-width-table[_ngcontent-%COMP%], table[_ngcontent-%COMP%]{width:100%}.avatar[_ngcontent-%COMP%]{display:block;width:42px;height:42px;border-radius:50%;object-fit:cover}td[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]})}return e})();function Rt(e,l){if(e&1){let n=q();t(0,"button",7),g("click",function(){_(n);let o=v();return h(o.searchField().reset())}),t(1,"mat-icon"),a(2,"close"),i()()}}var Ri=(()=>{class e{materialConfig;usersConfig;dialog;usersList=f(nt);searchField=f(new C("",p.required));formGroup=f(new re({}));constructor(n,m,o){this.materialConfig=n,this.usersConfig=m,this.dialog=o}ngOnInit(){this.formGroupInit()}openDialog(){let n={formGroup:this.formGroup()};this.dialog.open(at,{data:n}).afterClosed().subscribe(o=>{console.log(`Dialog result: ${o}`)})}formGroupInit(){let n=new re({avatar:new C(""),fullName:new C("",[p.required,p.minLength(this.usersConfig.fullName.min),p.maxLength(this.usersConfig.fullName.max)]),email:new C("",[p.required,p.email,p.minLength(this.usersConfig.email.min),p.maxLength(this.usersConfig.email.max)]),password:new C("",[p.required,p.minLength(this.usersConfig.password.min),p.maxLength(this.usersConfig.password.max)]),description:new C("",[p.maxLength(this.usersConfig.description.max)]),role:new C(X.STUDENT,[p.required]),level:new C(Y.BEGINNER,[p.required])});this.formGroup.set(n)}static \u0275fac=function(m){return new(m||e)(b(ee),b(Z),b(Ue))};static \u0275cmp=x({type:e,selectors:[["app-users"]],standalone:!0,features:[w],decls:15,vars:6,consts:[[1,"mat-headline-2","text-center"],[1,"example-form-field"],["matPrefix","","mat-icon-button",""],["matInput","","type","text",3,"formControl"],["matSuffix","","mat-icon-button","","aria-label","Search"],["mat-fab","","color","primary","matTooltip","Add new User",3,"click","matTooltipPosition","matTooltipShowDelay","matTooltipHideDelay"],[3,"dataSource"],["matPrefix","","mat-icon-button","",3,"click"]],template:function(m,o){m&1&&(t(0,"h1",0),a(1,"User Accounts"),i(),t(2,"header")(3,"mat-form-field",1)(4,"mat-label"),a(5,"Search Users"),i(),s(6,Rt,3,0,"button",2),c(7,"input",3),t(8,"button",4)(9,"mat-icon"),a(10,"search"),i()()(),t(11,"button",5),g("click",function(){return o.openDialog()}),t(12,"mat-icon"),a(13,"add"),i()()(),c(14,"comp-users-table",6)),m&2&&(r(6),u(6,o.searchField().value?6:-1),r(),d("formControl",o.searchField()),r(4),d("matTooltipPosition",o.materialConfig.tooltip.position)("matTooltipShowDelay",o.materialConfig.tooltip.showDelay)("matTooltipHideDelay",o.materialConfig.tooltip.hideDelay),r(3),d("dataSource",o.usersList()))},dependencies:[et,V,L,ge,R,j,Ze,ie,te,z,$,H,A,B,W,K,k,Q,J,_e,rt],styles:["[_nghost-%COMP%]{flex:0 0 100vw;overflow-x:hidden}@media screen and (min-width: 960px){[_nghost-%COMP%]{flex:1 1 auto}}mat-form-field[_ngcontent-%COMP%]{flex:0 1 550px}header[_ngcontent-%COMP%]{display:flex;gap:8px}"]})}return e})();export{Ri as UsersComponent};