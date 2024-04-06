import{f as ue,g as A,o as fe}from"./chunk-X2RFPH2D.js";import"./chunk-APXJJNKD.js";import"./chunk-HHFRCMDZ.js";import{g as de}from"./chunk-S6XMN2CK.js";import"./chunk-Y2Z55KGB.js";import{e as re,f as ae,h as me,i as le,j as pe,k as se}from"./chunk-YL2IJFCP.js";import{c as ne}from"./chunk-TUH4D35M.js";import"./chunk-HRPGOHD7.js";import{a as E,b as P}from"./chunk-UCL5QDGG.js";import{j as K}from"./chunk-RLD52YJQ.js";import{a as y,b as v}from"./chunk-IRZH2CDO.js";import{a as G,b as O,c as ce}from"./chunk-DXE53W6R.js";import"./chunk-A6GV7K5O.js";import"./chunk-AT4AS3AD.js";import"./chunk-F5IVTEMI.js";import{a as w,b as te,c as x,d as ie,g as I,h as oe}from"./chunk-NPOQVXOD.js";import{b,c as S,e as F,f as X,g as $,i as u,j as J,k as W,l as Y,n as Z,t as ee,w as T}from"./chunk-X226BGBT.js";import"./chunk-JGYM447R.js";import"./chunk-H5HDYDQF.js";import{$ as Q,Z as z,ba as _,ca as D}from"./chunk-ZBUBZLYR.js";import"./chunk-ZZWWPPFM.js";import{$b as H,Ab as t,Bb as i,Cb as p,Gb as R,Jb as c,Lb as U,Tb as L,Ub as n,Wa as q,Za as m,_a as d,ac as M,jb as s,la as g,pb as B,qc as V,rb as l,ta as C,ua as h,wb as j}from"./chunk-CYP4QHP4.js";function Se(a,Te){if(a&1&&(t(0,"div",3),p(1,"img",14),i()),a&2){let r=U();m(),l("src",r.coverUrl(),q)}}var ge=(()=>{class a{dialogData;materialConfig;formGroup=V(()=>this.dialogData.formGroup);formCoverFile=V(()=>this.formGroup().get("coverFile"));coverUrl=s("");constructor(r,o){this.dialogData=r,this.materialConfig=o}ngOnInit(){}get coverFileName(){return this.formCoverFile()?.value?.name??""}onInputFileChange(r){let o=r.files;if(!o||!o.item(0))return;let e=o.item(0);this.formCoverFile().patchValue(e),this.coverUrl.set(ne(this.formCoverFile().value))}onSubmit(){console.log(this.formGroup().value)}reset(){de(this.formGroup())}static \u0275fac=function(o){return new(o||a)(d(re),d(A))};static \u0275cmp=g({type:a,selectors:[["comp-create-dictionary"]],standalone:!0,features:[H([]),M],decls:32,vars:9,consts:[["f_input",""],[3,"ngSubmit","formGroup"],["mat-dialog-title",""],[1,"coverImage"],["matTooltip","Upload cover image for document","mat-icon-button","","matPrefix","",3,"click","matTooltipPosition","matTooltipShowDelay","matTooltipHideDelay"],["type","text","readonly","","matInput","",3,"value"],["type","file","multiple","","hidden","","accept","image/*",3,"change"],["matInput","","placeholder","Placeholder","formControlName","label"],["matInput","","rows","10","formControlName","description","placeholder","Description of question"],[3,"formGroup"],[2,"color","transparent","user-select","none"],["align","end"],["mat-raised-button","","color","warn","type","reset",3,"disabled"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["alt","",3,"src"]],template:function(o,e){if(o&1){let f=R();t(0,"form",1),c("ngSubmit",function(){return C(f),h(e.onSubmit())}),t(1,"h2",2),n(2,"Dictionary Question"),i(),t(3,"mat-dialog-content"),B(4,Se,2,1,"div",3),t(5,"mat-form-field")(6,"mat-label"),n(7,"Files Name"),i(),t(8,"button",4),c("click",function(){C(f);let N=L(13);return h(N.click())}),t(9,"mat-icon"),n(10,"add_photo_alternate"),i()(),p(11,"input",5),t(12,"input",6,0),c("change",function(){C(f);let N=L(13);return h(e.onInputFileChange(N))}),i(),t(14,"mat-error"),n(15,"this field is required"),i()(),t(16,"mat-form-field")(17,"mat-label"),n(18,"Label"),i(),p(19,"input",7),i(),t(20,"mat-form-field")(21,"mat-label"),n(22,"Description"),i(),p(23,"textarea",8),i(),p(24,"comp-file-dictionary",9),t(25,"p",10),n(26," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, nemo. Laboriosam ipsa molestiae voluptatem quasi? Id reiciendis, ut repellat consequatur sapiente voluptatibus temporibus, modi ullam quas sit, amet est consequuntur. "),i()(),t(27,"mat-dialog-actions",11)(28,"button",12),n(29,"Reset"),i(),t(30,"button",13),n(31,"Submit"),i()()()}o&2&&(l("formGroup",e.formGroup()),m(4),j(4,e.coverUrl()&&e.formCoverFile().value?4:-1),m(4),l("matTooltipPosition",e.materialConfig.tooltip.position)("matTooltipShowDelay",e.materialConfig.tooltip.showDelay)("matTooltipHideDelay",e.materialConfig.tooltip.hideDelay),m(3),l("value",e.coverFileName),m(13),l("formGroup",e.formGroup()),m(4),l("disabled",e.formGroup().untouched),m(2),l("disabled",e.formGroup().invalid))},dependencies:[P,E,I,w,te,x,D,z,_,K,se,me,pe,le,v,y,T,J,b,F,X,Y,Z,ue,O,G,fe],styles:["[_nghost-%COMP%]{display:block;width:100%}mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}form[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]{width:100%}mat-card-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.coverImage[_ngcontent-%COMP%]{position:relative;width:150px;height:150px;min-height:150px;margin:10px 0}.coverImage[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}"]})}return a})();var Fe=[{id:1,name:"Hydrogen"},{id:2,name:"Helium"},{id:3,name:"Lithium"},{id:4,name:"Beryllium"},{id:5,name:"Boron"},{id:6,name:"Carbon"},{id:7,name:"Nitrogen"},{id:8,name:"Oxygen"},{id:9,name:"Fluorine"},{id:10,name:"Neon"},{id:11,name:"Sodium"},{id:12,name:"Magnesium"},{id:13,name:"Aluminum"},{id:14,name:"Silicon"},{id:15,name:"Phosphorus"},{id:16,name:"Sulfur"},{id:17,name:"Chlorine"},{id:18,name:"Argon"},{id:19,name:"Potassium"},{id:20,name:"Calcium"}],tt=(()=>{class a{materialConfig;dialog;historyList=s(Fe);historyColumns=s(["id","name"]);searchField=s(new u("",[S.required]));formGroup=s(new $({coverFile:new u(""),label:new u("",[S.required]),description:new u(""),fileName:new u("",[S.required]),questionList:new ee([])}));constructor(r,o){this.materialConfig=r,this.dialog=o}openDialog(){let r={formGroup:this.formGroup()};this.dialog.open(ge,{data:r}).afterClosed().subscribe(e=>{console.log(`Dialog result: ${e}`)})}static \u0275fac=function(o){return new(o||a)(d(A),d(ae))};static \u0275cmp=g({type:a,selectors:[["app-dictionary"]],standalone:!0,features:[M],decls:17,vars:6,consts:[[1,"mat-headline-2","text-center"],[1,"example-form-field"],["matPrefix","","mat-icon-button","",3,"click"],["matInput","","type","text",3,"formControl"],["matSuffix","","mat-icon-button","","aria-label","Search"],["mat-fab","","color","primary","matTooltip","Add new Document",3,"click","matTooltipPosition","matTooltipShowDelay","matTooltipHideDelay"],[3,"list","columns"]],template:function(o,e){o&1&&(t(0,"h1",0),n(1,"Dictionary Documents"),i(),t(2,"header")(3,"mat-form-field",1)(4,"mat-label"),n(5,"Search Documents"),i(),t(6,"button",2),c("click",function(){return e.searchField().reset()}),t(7,"mat-icon"),n(8,"close"),i()(),p(9,"input",3),t(10,"button",4)(11,"mat-icon"),n(12,"search"),i()()(),t(13,"button",5),c("click",function(){return e.openDialog()}),t(14,"mat-icon"),n(15,"add"),i()()(),p(16,"comp-table",6)),o&2&&(m(9),l("formControl",e.searchField()),m(4),l("matTooltipPosition",e.materialConfig.tooltip.position)("matTooltipShowDelay",e.materialConfig.tooltip.showDelay)("matTooltipHideDelay",e.materialConfig.tooltip.hideDelay),m(3),l("list",e.historyList())("columns",e.historyColumns()))},dependencies:[T,b,F,W,D,_,Q,v,y,P,E,I,w,x,ie,oe,O,G,ce],styles:["[_nghost-%COMP%]{flex:0 0 100vw;overflow-x:hidden}@media screen and (min-width: 960px){[_nghost-%COMP%]{flex:1 1 auto}}mat-form-field[_ngcontent-%COMP%]{flex:0 1 550px}header[_ngcontent-%COMP%]{display:flex;gap:8px}"]})}return a})();export{tt as DictionaryComponent};
