import{c as J}from"./chunk-3QLJEPXT.js";import{b as Q}from"./chunk-QAEQSWPZ.js";import{b as K}from"./chunk-OOYF4DFP.js";import{a as H,b as z}from"./chunk-XQ7G2H5Q.js";import{a as S,b as y,c as E,e as b,f as F,j as G}from"./chunk-V532RDTM.js";import{b as U}from"./chunk-AYXFV5TJ.js";import"./chunk-L7HWUGPE.js";import"./chunk-F5IVTEMI.js";import{b as $,g as j}from"./chunk-PQIP7T7F.js";import{b as T,c as d,e as N,f as q,g as I,i as g,j as L,l as D,n as R,o as V,p as B,q as k,u as A}from"./chunk-MLPI2VI5.js";import"./chunk-JGYM447R.js";import{Z as O,ba as P}from"./chunk-KKVWT62S.js";import{Ab as t,Bb as i,Cb as h,Jb as f,Lb as x,Ub as n,Vb as v,Za as a,ac as w,jb as u,la as M,pb as s,rb as p,wb as c,yb as C,zb as _}from"./chunk-CYP4QHP4.js";var X=(e,m)=>m.name;function Y(e,m){e&1&&(t(0,"mat-error"),n(1,"email is "),t(2,"strong"),n(3,"required"),i()())}function Z(e,m){e&1&&(t(0,"mat-error"),n(1," password "),t(2,"strong"),n(3,"required"),i()())}function ee(e,m){if(e&1&&(t(0,"option",9),n(1),i()),e&2){let l=m.$implicit,o=x();p("value",o.emailField()[0]+l.value),a(),v(l.name)}}var Ce=(()=>{class e{formGroup=new I({email:new g("",[d.required,d.email]),password:new g("",[d.required])});emailTypes=u([{name:"Gmail",value:"@gmail.com"},{name:"Email",value:"@email.ru"}]);emailField=u([""]);ngOnInit(){console.log(this.formGroup.get("email"))}onSubmit(){}onEmailInput(){if(!this.formGroup.get("email").value){this.emailField.set([""]);return}let o=this.formGroup.get("email").value.match(new RegExp(/^\w+/));this.emailField.set(o)}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=M({type:e,selectors:[["app-login-in"]],standalone:!0,features:[w],decls:20,vars:4,consts:[["novalidate","",3,"ngSubmit","formGroup"],[1,"card"],[1,"row"],[1,"col"],[1,"full-width"],["matInput","","type","email","placeholder","example@gmail.com","formControlName","email","list","emailTypes","required","",3,"input"],["matInput","","type","password","placeholder","password","formControlName","password","required",""],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["id","emailTypes"],[3,"value"]],template:function(o,r){o&1&&(t(0,"form",0),f("ngSubmit",function(){return r.onSubmit()}),t(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),n(4,"LogIn"),i()(),t(5,"mat-card-content")(6,"div",2)(7,"div",3)(8,"mat-form-field",4)(9,"input",5),f("input",function(){return r.onEmailInput()}),i(),s(10,Y,4,0,"mat-error"),i(),t(11,"mat-form-field",4),h(12,"input",6),s(13,Z,4,0,"mat-error"),i()()()(),t(14,"mat-card-actions")(15,"button",7),n(16," Submit "),i()()()(),t(17,"datalist",8),C(18,ee,2,2,"option",9,X),i()),o&2&&(p("formGroup",r.formGroup),a(10),c(10,r.formGroup.controls.email.hasError("required")?10:-1),a(3),c(13,r.formGroup.controls.password.hasError("required")?13:-1),a(2),p("disabled",r.formGroup.invalid),a(3),_(r.emailTypes()))},dependencies:[z,H,j,$,P,O,U,J,G,S,b,E,F,y,A,L,V,B,T,N,q,k,D,R,Q,K],styles:["[_nghost-%COMP%]{flex:0 0 100vw;overflow-x:hidden}@media screen and (min-width: 960px){[_nghost-%COMP%]{flex:1 1 auto}}[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}form[_ngcontent-%COMP%]{margin:0 10px}.full-width[_ngcontent-%COMP%]{width:100%}.shipping-card[_ngcontent-%COMP%]{min-width:120px;margin:20px auto}.mat-radio-button[_ngcontent-%COMP%]{display:block;margin:5px 0}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.col[_ngcontent-%COMP%]{flex:1;margin-right:20px}.card[_ngcontent-%COMP%]{width:100%;max-width:450px}button[type=submit][_ngcontent-%COMP%]{margin-left:auto}"]})}return e})();export{Ce as LoginComponent};
