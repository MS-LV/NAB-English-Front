import{a as mt,b as u,c as st,d as ct}from"./chunk-YH6AQ4XB.js";import{a as ot,b as at}from"./chunk-V7NJ5TOU.js";import{a as Y,b as Z,d as tt}from"./chunk-ZEEIW5SF.js";import"./chunk-7MLRNDAE.js";import{a as et,b as it,c as nt,d as rt}from"./chunk-X6D6ZXMZ.js";import"./chunk-L4VVBDDS.js";import"./chunk-B6A23TUE.js";import"./chunk-RGNDWIHZ.js";import{a as N,c as Q,d as v,e as V,f as q}from"./chunk-ZITBM2SP.js";import{a as G,b as J}from"./chunk-2G67OSBZ.js";import{_ as K,ba as W,ca as X,r as z,s as U}from"./chunk-DZWWLC2F.js";import"./chunk-ATQ6OJSW.js";import{Ab as l,Hb as b,Ib as _,Jb as n,Kb as r,Lb as f,Pb as T,Sb as F,T as P,Z as O,aa as L,ac as j,bb as o,bc as H,cb as p,cc as x,dc as c,ec as h,f as y,fa as A,fc as $,ic as D,jc as B,la as S,lc as w,nb as d,ob as R,t as k,ua as E,va as I}from"./chunk-E25BKHHC.js";var M=(()=>{class e{router;constructor(t){this.router=t}routerLinks(){let t=this.router.config.find(s=>s.path==="admin");return this.compareLinks(t).map(({title:s,path:C,data:g})=>({title:s,path:C,data:g}))}compareLinks(t){return t?t.children.slice(0).filter(s=>!s.redirectTo):[]}static \u0275fac=function(i){return new(i||e)(A(v))};static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var ft=(e,a)=>a.router,ht=(e,a)=>a.path,lt=e=>[e];function vt(e,a){if(e&1&&(n(0,"button",7)(1,"mat-icon"),c(2),r(),n(3,"span"),c(4),r()()),e&2){let t=a.$implicit;l("routerLink",w(3,lt,t.router)),o(2),h(t.icon),o(2),h(t.title)}}function Mt(e,a){e&1&&c(0," Empty menu list ")}function gt(e,a){if(e&1&&(n(0,"mat-list-item",11)(1,"a",12)(2,"mat-icon",13),c(3),r(),n(4,"span"),c(5),r()()()),e&2){let t=a.$implicit;o(),l("routerLink",w(3,lt,t.path)),o(2),$(" ",t.data.icon,""),o(2),h(t.title)}}function bt(e,a){e&1&&c(0," Empty list of links ")}var Bt=(()=>{class e{router;breakpointObserver;service;drawer=R.required(u);routerPaths=d([]);isHandset=d(!0);menuList=d([{title:"Profile",icon:"person",router:"/admin/profile"},{title:"Logout",icon:"logout",router:"/welcome"}]);isHandset$;constructor(t,i,m){this.router=t,this.breakpointObserver=i,this.service=m}ngOnInit(){this.checkLayout(),this.setRouterLinks(),this.onRouterNavigate()}onRouterNavigate(){this.router.events.subscribe(t=>{this.isHandset()&&t instanceof N&&this.drawer().close()})}setRouterLinks(){let t=this.service.routerLinks();this.routerPaths.set(t)}checkLayout(){this.isHandset$=this.breakpointObserver.observe(U.Handset).pipe(O(t=>{this.isHandset.set(t.matches)}),k(t=>t.matches),P()),this.isHandset$.subscribe()}ngOnDestroy(){this.isHandset$=new y,this.routerPaths.set([])}static \u0275fac=function(i){return new(i||e)(p(v),p(z),p(M))};static \u0275cmp=S({type:e,selectors:[["app-admin"]],viewQuery:function(i,m){i&1&&j(m.drawer,u,5),i&2&&H()},standalone:!0,features:[D([M]),B],decls:23,vars:4,consts:[["menu","matMenu"],["drawer",""],["color","primary"],["mat-icon-button","","aria-label","Example icon-button with menu icon",3,"click"],[1,"example-spacer"],["mat-icon-button","","aria-label","User Profile Image",3,"matMenuTriggerFor"],["src","assets/favicon.png","alt","",1,"toolbar-icon"],["mat-menu-item","",3,"routerLink"],["autosize",""],["color","primary","mode","side",1,"sidenav",3,"opened"],["role","list"],["role","listitem"],["mat-button","","routerLinkActive","active",1,"menu-item",3,"routerLink"],["aria-hidden","false","aria-label","Example home icon"]],template:function(i,m){if(i&1){let s=T();n(0,"mat-toolbar",2)(1,"button",3),F("click",function(){E(s);let g=x(16);return I(g.toggle())}),n(2,"mat-icon"),c(3,"menu"),r()(),n(4,"span"),c(5,"NAB Admin"),r(),f(6,"span",4),n(7,"button",5),f(8,"img",6),r(),n(9,"mat-menu",null,0),b(11,vt,5,5,"button",7,ft,!1,Mt,1,0),r()(),n(14,"mat-drawer-container",8)(15,"mat-drawer",9,1)(17,"mat-list",10),b(18,gt,6,5,"mat-list-item",11,ht,!1,bt,1,0),r()(),n(21,"mat-drawer-content"),f(22,"router-outlet"),r()()}if(i&2){let s=x(10);o(7),l("matMenuTriggerFor",s),o(4),_(m.menuList()),o(4),l("opened",!m.isHandset()),o(3),_(m.routerPaths())}},dependencies:[Q,V,J,G,X,K,W,at,ot,ct,u,st,mt,tt,Y,Z,q,rt,it,et,nt],styles:["[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}.app[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.toolbar-icon[_ngcontent-%COMP%]{scale:1.5;border-radius:50%;border:1px solid white;max-width:100%;object-fit:cover}mat-toolbar[_ngcontent-%COMP%]{flex:0 0 64px}mat-drawer-container[_ngcontent-%COMP%]{flex-grow:1}.sidenav[_ngcontent-%COMP%]{background:var(--prime-color)}.mat-list-item[_ngcontent-%COMP%]{color:#fff}mat-drawer[_ngcontent-%COMP%]{max-width:50%;width:200px}mat-drawer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;display:block}.menu-item[_ngcontent-%COMP%]{font-size:18px;justify-content:flex-start!important;width:100%}.menu-item.active[_ngcontent-%COMP%]{color:#fff!important}mat-drawer-content[_ngcontent-%COMP%]{display:flex;overflow-x:hidden}"]})}return e})();export{Bt as AdminComponent};
