import{a as _,b,c as k,d as E,e as S,f as z,h as T,i as w,j as A}from"./chunk-ZAA7ULWK.js";import{a as h,b as v}from"./chunk-XA2PLFJU.js";import{d as C}from"./chunk-VBNUDUW5.js";import{_ as I,ca as L}from"./chunk-GST4AJEM.js";import"./chunk-L6NNWS3K.js";import{Ab as a,Bb as i,Cb as x,Ub as o,Va as l,Vb as m,Wa as p,Za as n,ac as M,cc as y,jb as u,la as s,rb as d,yb as g,zb as f}from"./chunk-VVHKCFJL.js";var O=[{id:0,title:"Student",subtitle:"Every day quiz",icon:"school",router:"/student/home",background:"assets/student.jpg",content:"Student page for testing students' knowledge. There you can undergo daily and monthly testing."},{id:1,title:"Admin",subtitle:"Every month quiz",icon:"shield_person",router:"/admin/dashboard",background:"assets/admin.png",content:"Admin page for managing application settings, such as adding test questions, managing test completion time, and so on. In the current page you can see the list of students and administrators"}];var P=(t,r)=>r.id,W=t=>[t];function H(t,r){if(t&1&&(a(0,"mat-card",1)(1,"mat-card-header")(2,"mat-icon",2),o(3),i(),a(4,"mat-card-title"),o(5),i(),a(6,"mat-card-subtitle"),o(7),i()(),x(8,"img",3)(9,"mat-card-content",4),a(10,"mat-card-actions")(11,"a",5),o(12,"GO"),i()()()),t&2){let e=r.$implicit;n(3),m(e.icon),n(2),m(e.title),n(2),m(e.subtitle),n(),d("src",e.background,p),n(),d("innerHTML",e.content,l),n(2),d("routerLink",y(6,W,e.router))}}function j(t,r){t&1&&o(0," Empty cards ")}var X=(()=>{class t{cards=u(O);static \u0275fac=function(c){return new(c||t)};static \u0275cmp=s({type:t,selectors:[["app-welcome"]],standalone:!0,features:[M],decls:6,vars:1,consts:[[1,"cards"],["color","primary"],["color","primary","mat-card-avatar","",1,"icon-size"],["mat-card-image","","loading","lazy","alt","NAB English Dictionary Testing background",1,"card-background",3,"src"],[3,"innerHTML"],["mat-raised-button","",3,"routerLink"]],template:function(c,F){c&1&&(a(0,"h1"),o(1,"Welcome to NAB"),i(),a(2,"div",0),g(3,H,13,8,"mat-card",1,P,!1,j,1,0),i()),c&2&&(n(3),f(F.cards()))},dependencies:[A,_,S,w,k,z,T,E,b,C,v,h,L,I],styles:[".cards[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:10px}.icon-size[_ngcontent-%COMP%]{font-size:30px;height:30px;width:30px}.card-background[_ngcontent-%COMP%]{font-size:250px;height:250px;width:100%;margin:0 auto;object-fit:cover}mat-card[_ngcontent-%COMP%]{flex:0 0 350px;margin:0 auto}mat-card-content[_ngcontent-%COMP%]{flex:1 1 auto}"]})}return t})();export{X as WelcomeComponent};