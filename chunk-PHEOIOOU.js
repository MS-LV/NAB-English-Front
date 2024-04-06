import{g as ct}from"./chunk-NVR6YKGL.js";import"./chunk-XRBED3Z7.js";import{a as lt,b as ot}from"./chunk-XQ7G2H5Q.js";import{a as F,b as L,c as B,d as X,e as W,f as z,j as H}from"./chunk-V532RDTM.js";import{a as U,b as O}from"./chunk-U5LLAVCC.js";import{a as et,b as st,c as rt,d as at,g as nt,h as dt}from"./chunk-PQIP7T7F.js";import{b as $,c as d,e as q,f as Z,g as Y,i as c,j as K,l as J,n as tt,u as it}from"./chunk-MLPI2VI5.js";import"./chunk-JGYM447R.js";import{J as P,Q as N,Z as G,aa as j,ba as Q}from"./chunk-KKVWT62S.js";import"./chunk-ZZWWPPFM.js";import{$b as E,A as C,Ab as s,Bb as n,Cb as v,Jb as f,Lb as _,Ub as r,Vb as u,Wb as T,Za as a,_a as k,ac as R,ba as V,da as A,jb as b,la as I,ma as D,pb as g,qb as x,rb as p,wb as h,yb as S,zb as y}from"./chunk-CYP4QHP4.js";var mt=(()=>{let l=class l{};l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=D({type:l}),l.\u0275inj=V({imports:[P,N]});let i=l;return i})();var t={dictionaryTime:{min:10,max:30},testingTime:{min:20,max:70},writingSymbolLength:{min:150,max:300},dictionaryPassingScore:{min:20,max:60},testingPassingScore:{min:50,max:100},blockQuizeTime:{min:6,max:24},listeningAutioReplay:{min:1,max:10},specialPassword:{min:6,max:12}},M=new A("setting.config",{factory:()=>t});var ht=new Y({dictionaryTime:new c(0,[d.min(t.dictionaryTime.min),d.max(t.dictionaryTime.max)]),dictionaryPassingScore:new c(0,[d.min(t.dictionaryPassingScore.min),d.max(t.dictionaryPassingScore.max)]),testingTime:new c(0,[d.min(t.testingTime.min),d.max(t.testingTime.max)]),testingPassingScore:new c(0,[d.min(t.testingPassingScore.min),d.max(t.testingPassingScore.max)]),writingSymbolLength:new c(0,[d.min(t.writingSymbolLength.min),d.max(t.writingSymbolLength.max)]),blockQuizeTime:new c(0,[d.min(t.blockQuizeTime.min),d.max(t.blockQuizeTime.max)]),listeningAudioReplay:new c(0,[d.min(t.listeningAutioReplay.min),d.max(t.listeningAutioReplay.max)]),specialPassword:new c("",[d.minLength(t.specialPassword.min),d.maxLength(t.specialPassword.max),d.required])}),_t=[{id:1,label:"Dictionary Time",type:"number",inputMode:"numeric",formControlName:"dictionaryTime",config:t.dictionaryTime,placeholder:"0",prefix:"schedule",suffix:"min"},{id:2,label:"Dictionary passing score",type:"number",inputMode:"numeric",formControlName:"dictionaryPassingScore",config:t.dictionaryPassingScore,placeholder:"0",prefix:"sports_score",suffix:"ball"},{id:3,label:"Testing Time",type:"number",inputMode:"numeric",formControlName:"testingTime",config:t.testingTime,placeholder:"0",prefix:"schedule",suffix:"min"},{id:4,label:"Testing passing score",type:"number",inputMode:"numeric",formControlName:"testingPassingScore",config:t.testingPassingScore,placeholder:"0",prefix:"sports_score",suffix:"ball"},{id:5,label:"Writing Symbol Length",type:"number",inputMode:"numeric",formControlName:"writingSymbolLength",config:t.writingSymbolLength,placeholder:"0",prefix:"emergency",suffix:""},{id:6,label:"Block quize time",type:"number",inputMode:"numeric",formControlName:"blockQuizeTime",config:t.blockQuizeTime,placeholder:"0",prefix:"block",suffix:"hour"},{id:7,label:"Listening Audio Replay",type:"number",inputMode:"numeric",formControlName:"listeningAudioReplay",config:t.listeningAutioReplay,placeholder:"0",prefix:"replay_5",suffix:"times"}];var pt=(i,l)=>l.id;function ft(i,l){if(i&1&&(s(0,"mat-error"),r(1),n()),i&2){let e=_().$implicit;a(),T(" Maximum number must be ",e.config.max," ")}}function bt(i,l){if(i&1&&(s(0,"mat-error"),r(1),n()),i&2){let e=_().$implicit;a(),T(" Minimum number must be ",e.config.min," ")}}function gt(i,l){if(i&1&&(s(0,"mat-form-field",2)(1,"mat-label"),r(2),n(),v(3,"input",9),g(4,ft,2,1,"mat-error")(5,bt,2,1,"mat-error"),s(6,"span",4)(7,"mat-icon"),r(8),n(),r(9," \xA0"),n(),s(10,"span",10),r(11),n()()),i&2){let e=l.$implicit,m=_();a(2),T(" ",e.label,""),a(),p("type",e.type)("formControlName",e.formControlName)("placeholder",e.placeholder)("min",e.config.min)("max",e.config.max),a(),h(4,m.formGroup().get(e.formControlName).hasError("max")?4:-1),a(),h(5,m.formGroup().get(e.formControlName).hasError("min")?5:-1),a(3),u(e.prefix),a(3),u(e.suffix)}}function vt(i,l){if(i&1&&(s(0,"mat-error"),r(1," Maximum symbol must be "),s(2,"b"),r(3),n()()),i&2){let e=_();a(3),u(e.config.specialPassword.max)}}function Tt(i,l){if(i&1&&(s(0,"mat-error"),r(1," Minimum symbol must be "),s(2,"b"),r(3),n()()),i&2){let e=_();a(3),u(e.config.specialPassword.min)}}function It(i,l){i&1&&(s(0,"mat-error"),r(1,"Special password is "),s(2,"b"),r(3,"required"),n()())}var pi=(()=>{class i{config;formGroup=b(ht);formFields=b(_t);hidePassword=b(!1);constructor(e){this.config=e}ngOnInit(){C(1e3).subscribe(()=>{})}onSubmit(){console.log("form value: ",this.formGroup().value)}passwordVisibility(){this.hidePassword.update(e=>!e)}reset(){ct(this.formGroup())}static \u0275fac=function(m){return new(m||i)(k(M))};static \u0275cmp=I({type:i,selectors:[["app-setting"]],standalone:!0,features:[E([{provide:M,useValue:t}]),R],decls:29,vars:8,consts:[["novalidate","",3,"ngSubmit","formGroup"],[1,"shipping-card"],["floatLabel","always"],["matInput","","formControlName","specialPassword",3,"type"],["matTextPrefix",""],["mat-icon-button","","matSuffix","",3,"click"],["align","end"],["mat-raised-button","","color","primary","type","submit"],["mat-raised-button","","color","warn","type","reset",3,"clicik"],["matInput","",1,"align-right",3,"type","formControlName","placeholder","min","max"],["matTextSuffix",""]],template:function(m,o){m&1&&(s(0,"form",0),f("ngSubmit",function(){return o.onSubmit()}),s(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),r(4,"Settings"),n(),s(5,"mat-card-subtitle"),r(6,"Control settings of application"),n()(),s(7,"mat-card-content"),S(8,gt,12,10,"mat-form-field",2,pt),s(10,"mat-form-field")(11,"mat-label"),r(12,"Special Password"),n(),v(13,"input",3),s(14,"span",4)(15,"mat-icon"),r(16,"key"),n(),r(17," \xA0"),n(),g(18,vt,4,1,"mat-error")(19,Tt,4,1,"mat-error")(20,It,4,0,"mat-error"),s(21,"button",5),f("click",function(){return o.passwordVisibility()}),s(22,"mat-icon"),r(23),n()()()(),s(24,"mat-card-actions",6)(25,"button",7),r(26,"Submit"),n(),s(27,"button",8),f("clicik",function(){return o.reset()}),r(28,"Reset"),n()()()()),m&2&&(p("formGroup",o.formGroup()),a(8),y(o.formFields()),a(5),p("type",o.hidePassword()?"password":"text"),a(5),h(18,o.formGroup().get("specialPassword").hasError("maxlength")?18:-1),a(),h(19,o.formGroup().get("specialPassword").hasError("minlength")?19:-1),a(),h(20,o.formGroup().get("specialPassword").hasError("required")?20:-1),a(),x("aria-label","Hide password")("aria-pressed",o.hidePassword()),a(2),u(o.hidePassword()?"visibility":"visibility_off"))},dependencies:[ot,lt,nt,et,st,rt,at,Q,G,j,H,F,W,B,z,X,L,it,K,$,q,Z,J,tt,mt,dt,O,U],styles:["[_nghost-%COMP%]{flex:0 0 100vw;overflow-x:hidden}@media screen and (min-width: 960px){[_nghost-%COMP%]{flex:1 1 auto}}.full-width[_ngcontent-%COMP%]{width:100%}mat-card-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px}.align-right[_ngcontent-%COMP%]{text-align:right}mat-card-actions[_ngcontent-%COMP%]{gap:8px}"]})}return i})();export{pi as SettingComponent};