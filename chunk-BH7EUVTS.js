import{a as b,b as k}from"./chunk-3RUGDQG5.js";import{a as T,g as $}from"./chunk-JJGNKWU3.js";import{b as S,e as L,f as h,j as A,l as w,m as E,n as O,o as P,x as R}from"./chunk-B6A23TUE.js";import{a as _,b as F,c as x,f as q,j as D}from"./chunk-MDARTJMG.js";import{ca as I}from"./chunk-DZWWLC2F.js";import{Ab as s,Bc as N,Cb as d,Ea as c,Hb as f,Ib as C,Jb as m,Kb as o,Lb as g,Ub as M,bb as a,dc as l,ec as v,hc as y,jc as G,ka as p,la as u}from"./chunk-E25BKHHC.js";var V=(e,i)=>i.english;function j(e,i){if(e&1&&(m(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),l(3),o()(),m(4,"mat-card-content")(5,"mat-form-field")(6,"mat-label"),l(7),o(),g(8,"input",4),o()()()),e&2){let n,t=i.$implicit,r=i.$index,B=M();d("incorrect",((n=B.questionList().get(""+r))==null?null:n.value.userAnswer)!==t.english),s("formGroupName",r),a(3),y(" ",r+1,". ",t.tajik," | ",t.russian," "),a(4),v(t.english)}}var et=(()=>{class e{formGroup=c.required();questionList=N(()=>this.formGroup().get("questionList"));ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=u({type:e,selectors:[["comp-dictionary-result"]],inputs:{formGroup:[p.SignalBased,"formGroup"]},standalone:!0,features:[G],decls:4,vars:1,consts:[[3,"formGroup"],["formArrayName","questionList"],[3,"formGroupName","incorrect"],[3,"formGroupName"],["readonly","","matInput","","formControlName","userAnswer"]],template:function(t,r){t&1&&(m(0,"form",0)(1,"div",1),f(2,j,9,7,"mat-card",2,V),o()()),t&2&&(s("formGroup",r.formGroup()),a(2),C(r.questionList().value))},dependencies:[k,b,$,T,I,D,_,x,q,F,R,A,S,L,h,w,P,E,O],styles:["mat-card[_ngcontent-%COMP%] + mat-card[_ngcontent-%COMP%]{margin-top:8px}.incorrect[_ngcontent-%COMP%]{background:var(--warning-color)}"]})}return e})();export{et as a};
