import{f as ce,n as fe}from"./chunk-7SNASH5Q.js";import{a as ue}from"./chunk-I2WXVCCR.js";import"./chunk-KCIWCTZC.js";import"./chunk-3UBBKQGT.js";import{g as de}from"./chunk-NVR6YKGL.js";import"./chunk-3QLJEPXT.js";import{e as Z,f as ee,h as te,i as ie,j as oe,k as ne}from"./chunk-HWPV3RPI.js";import{c as Y}from"./chunk-XRBED3Z7.js";import"./chunk-OOYF4DFP.js";import{a as re,b as ae,c as me}from"./chunk-ZIF4CVKH.js";import{a as J,b as W}from"./chunk-XQ7G2H5Q.js";import{j as N}from"./chunk-V532RDTM.js";import{a as M,b as v}from"./chunk-U5LLAVCC.js";import{a as le,b as pe,c as se}from"./chunk-Q2RFYGIB.js";import"./chunk-AYXFV5TJ.js";import"./chunk-L7HWUGPE.js";import"./chunk-F5IVTEMI.js";import{a as K,b as Q,c as X,g as $}from"./chunk-PQIP7T7F.js";import{b as V,c as S,e as q,f as k,g as B,i as u,j as U,l as j,n as H,r as R,u as z}from"./chunk-MLPI2VI5.js";import"./chunk-JGYM447R.js";import"./chunk-H5HDYDQF.js";import{$ as A,Z as O,aa as L,ba as _}from"./chunk-KKVWT62S.js";import"./chunk-ZZWWPPFM.js";import{$b as P,Ab as t,Bb as i,Cb as p,Gb as I,Jb as d,Lb as E,Tb as b,Ub as r,Wa as x,Za as m,_a as c,ac as y,jb as s,la as g,pb as G,qc as w,rb as l,ta as C,ua as h,wb as T}from"./chunk-CYP4QHP4.js";function ve(a,De){if(a&1&&(t(0,"div",3),p(1,"img",14),i()),a&2){let n=E();m(),l("src",n.coverUrl(),x)}}var ge=(()=>{class a{dialogData;materialConfig;formGroup=w(()=>this.dialogData.formGroup);formCoverFile=w(()=>this.formGroup().get("coverFile"));coverUrl=s("");constructor(n,o){this.dialogData=n,this.materialConfig=o}ngOnInit(){}get coverFileName(){return this.formCoverFile()?.value?.name??""}onInputFileChange(n){let o=n.files;if(!o||!o.item(0))return;let e=o.item(0);this.formCoverFile().patchValue(e),this.coverUrl.set(Y(this.formCoverFile().value))}onSubmit(){console.log(this.formGroup().value)}reset(){de(this.formGroup())}static \u0275fac=function(o){return new(o||a)(c(Z),c(ue))};static \u0275cmp=g({type:a,selectors:[["comp-create-dictionary"]],standalone:!0,features:[P([]),y],decls:32,vars:9,consts:[["f_input",""],[3,"ngSubmit","formGroup"],["mat-dialog-title",""],[1,"coverImage"],["matTooltip","Upload cover image for document","mat-icon-button","","matPrefix","",3,"click","matTooltipPosition","matTooltipShowDelay","matTooltipHideDelay"],["type","text","readonly","","matInput","",3,"value"],["type","file","multiple","","hidden","","accept","image/*",3,"change"],["matInput","","placeholder","Placeholder","formControlName","label"],["matInput","","rows","10","formControlName","description","placeholder","Description of question"],[3,"formGroup"],[2,"color","transparent","user-select","none"],["align","end"],["mat-raised-button","","color","warn","type","reset",3,"disabled"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["alt","",3,"src"]],template:function(o,e){if(o&1){let f=I();t(0,"form",1),d("ngSubmit",function(){return C(f),h(e.onSubmit())}),t(1,"h2",2),r(2,"Dictionary Question"),i(),t(3,"mat-dialog-content"),G(4,ve,2,1,"div",3),t(5,"mat-form-field")(6,"mat-label"),r(7,"Files Name"),i(),t(8,"button",4),d("click",function(){C(f);let D=b(13);return h(D.click())}),t(9,"mat-icon"),r(10,"add_photo_alternate"),i()(),p(11,"input",5),t(12,"input",6,0),d("change",function(){C(f);let D=b(13);return h(e.onInputFileChange(D))}),i(),t(14,"mat-error"),r(15,"this field is required"),i()(),t(16,"mat-form-field")(17,"mat-label"),r(18,"Label"),i(),p(19,"input",7),i(),t(20,"mat-form-field")(21,"mat-label"),r(22,"Description"),i(),p(23,"textarea",8),i(),p(24,"comp-file-dictionary",9),t(25,"p",10),r(26," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, nemo. Laboriosam ipsa molestiae voluptatem quasi? Id reiciendis, ut repellat consequatur sapiente voluptatibus temporibus, modi ullam quas sit, amet est consequuntur. "),i()(),t(27,"mat-dialog-actions",11)(28,"button",12),r(29,"Reset"),i(),t(30,"button",13),r(31,"Submit"),i()()()}o&2&&(l("formGroup",e.formGroup()),m(4),T(4,e.coverUrl()&&e.formCoverFile().value?4:-1),m(4),l("matTooltipPosition",e.materialConfig.tooltip.position)("matTooltipShowDelay",e.materialConfig.tooltip.showDelay)("matTooltipHideDelay",e.materialConfig.tooltip.hideDelay),m(3),l("value",e.coverFileName),m(13),l("formGroup",e.formGroup()),m(4),l("disabled",e.formGroup().untouched),m(2),l("disabled",e.formGroup().invalid))},dependencies:[W,J,$,K,Q,X,_,O,L,N,ne,te,oe,ie,v,M,z,U,V,q,k,j,H,ce,pe,le,fe],styles:["[_nghost-%COMP%]{display:block;width:100%}mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}form[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]{width:100%}mat-card-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.coverImage[_ngcontent-%COMP%]{position:relative;width:150px;height:150px;min-height:150px;margin:10px 0}.coverImage[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}"]})}return a})();var _e=[{id:1,name:"Hydrogen"},{id:2,name:"Helium"},{id:3,name:"Lithium"},{id:4,name:"Beryllium"},{id:5,name:"Boron"},{id:6,name:"Carbon"},{id:7,name:"Nitrogen"},{id:8,name:"Oxygen"},{id:9,name:"Fluorine"},{id:10,name:"Neon"},{id:11,name:"Sodium"},{id:12,name:"Magnesium"},{id:13,name:"Aluminum"},{id:14,name:"Silicon"},{id:15,name:"Phosphorus"},{id:16,name:"Sulfur"},{id:17,name:"Chlorine"},{id:18,name:"Argon"},{id:19,name:"Potassium"},{id:20,name:"Calcium"}],Ye=(()=>{class a{dialog;historyList=s(_e);historyColumns=s(["id","name"]);formGroup=s(new B({coverFile:new u(""),label:new u("",[S.required]),description:new u(""),fileName:new u("",[S.required]),questionList:new R([])}));constructor(n){this.dialog=n}openDialog(){let n={formGroup:this.formGroup()};this.dialog.open(ge,{data:n}).afterClosed().subscribe(e=>{console.log(`Dialog result: ${e}`)})}static \u0275fac=function(o){return new(o||a)(c(ee))};static \u0275cmp=g({type:a,selectors:[["app-dictionary"]],standalone:!0,features:[y],decls:9,vars:4,consts:[["cols","4","rowHeight","50px"],[3,"colspan","rowspan"],[1,"mat-h1"],["mat-mini-fab","","color","primary",3,"click"],[3,"list","columns"]],template:function(o,e){o&1&&(t(0,"mat-grid-list",0)(1,"mat-grid-tile",1)(2,"h1",2),r(3,"Dictionary questions list"),i()(),t(4,"mat-grid-tile")(5,"button",3),d("click",function(){return e.openDialog()}),t(6,"mat-icon"),r(7,"add"),i()()()(),p(8,"comp-table",4)),o&2&&(m(),l("colspan",3)("rowspan",1),m(7),l("list",e.historyList())("columns",e.historyColumns()))},dependencies:[se,_,A,v,M,me,ae,re],styles:["[_nghost-%COMP%]{flex:0 0 100vw;overflow-x:hidden}@media screen and (min-width: 960px){[_nghost-%COMP%]{flex:1 1 auto}}"]})}return a})();export{Ye as DictionaryComponent};