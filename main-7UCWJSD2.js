import{c as M,g as S,h as x}from"./chunk-ZITBM2SP.js";import{b as E,c as I}from"./chunk-ATQ6OJSW.js";import{Ic as w,Lb as F,Ma as C,_ as c,a as r,aa as u,b as i,db as v,fb as A,ga as y,hb as b,ic as P,jb as H,jc as T,kb as R,la as g,nb as D,oa as f}from"./chunk-E25BKHHC.js";var j="@",V=(()=>{let e=class e{constructor(o,p,d,m,n){this.doc=o,this.delegate=p,this.zone=d,this.animationType=m,this.moduleImpl=n,this._rendererFactoryPromise=null,this.scheduler=y(A,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-WKYNIYFN.js")).catch(p=>{throw new c(5300,!1)}).then(({\u0275createEngine:p,\u0275AnimationRendererFactory:d})=>{this._engine=p(this.animationType,this.doc,this.scheduler);let m=new d(this.delegate,this._engine,this.zone);return this.delegate=m,m})}createRenderer(o,p){let d=this.delegate.createRenderer(o,p);if(d.\u0275type===0)return d;typeof d.throwOnSyntheticProps=="boolean"&&(d.throwOnSyntheticProps=!1);let m=new h(d);return p?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(n=>{let a=n.createRenderer(o,p);m.use(a)}).catch(n=>{m.use(d)}),m}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(p){v()},e.\u0275prov=u({token:e,factory:e.\u0275fac});let l=e;return l})(),h=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,p){this.delegate.insertBefore(e,t,o,p)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,p){this.delegate.setAttribute(e,t,o,p)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,p){this.delegate.setStyle(e,t,o,p)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(p=>p.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(p=>p.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(j)}};function N(l="animations"){return H("NgAsyncAnimations"),f([{provide:b,useFactory:(e,t,o)=>new V(e,t,o,l),deps:[w,E,R]},{provide:C,useValue:l==="noop"?"NoopAnimations":"BrowserAnimations"}])}function s(l,e,t={}){return{path:l,title:e,data:t}}function O(){let l={path:"",pathMatch:"full",redirectTo:"home"},e=i(r({},s("home","Home",{icon:"home"})),{loadComponent:()=>import("./chunk-N7ZYGY3X.js").then(n=>n.HomeComponent)}),t=i(r({},s("testing","Testing",{icon:"school"})),{loadComponent:()=>import("./chunk-QKSVKVLU.js").then(n=>n.TestingComponent)}),o=i(r({},s("everyday","Everyday",{icon:"library_books"})),{loadComponent:()=>import("./chunk-XPNOFDUC.js").then(n=>n.EverydayComponent)}),p=i(r({},s("profile","Profile",{icon:"person"})),{loadComponent:()=>import("./chunk-EO7URGG4.js").then(n=>n.ProfileComponent)}),d=i(r({},s("history","History",{icon:"history"})),{children:[i(r({},s("","History")),{loadComponent:()=>import("./chunk-GD2VH2PE.js").then(n=>n.HistoryComponent)}),i(r({},s("dictionary","History -> Dictionary")),{loadComponent:()=>import("./chunk-7MCOGXMQ.js").then(n=>n.HistoryEverydayComponent)}),i(r({},s("dictionary/:id","History -> Detail")),{loadComponent:()=>import("./chunk-CYTU4FTQ.js").then(n=>n.HistoryEverydayDetailComponent)}),i(r({},s("testing","History -> Testing")),{loadComponent:()=>import("./chunk-NX3VDWVY.js").then(n=>n.HistoryTestingComponent)}),i(r({},s("testing/:id","History -> Detail")),{loadComponent:()=>import("./chunk-OCNBSPBQ.js").then(n=>n.HistoryTestingDetailComponent)})]}),m=i(r({},s("login","Login",{icon:"login"})),{loadComponent:()=>import("./chunk-A2LD3OFE.js").then(n=>n.LoginComponent)});return[{path:"student",loadComponent:()=>import("./chunk-QHU5XKFV.js").then(n=>n.StudentComponent),children:[l,e,t,o,p,d,m]}]}function _(){let l={path:"",pathMatch:"full",redirectTo:"home"},e=i(r({},s("dashboard","Dashboard",{icon:"home"})),{loadComponent:()=>import("./chunk-NTAQZAQ6.js").then(a=>a.DashboardComponent)}),t=i(r({},s("setting","Settings",{icon:"settings"})),{loadComponent:()=>import("./chunk-SV2QWGJA.js").then(a=>a.SettingComponent)}),o=i(r({},s("folder","Folder",{icon:"folder_open"})),{children:[i(r({},s("","Folder")),{loadComponent:()=>import("./chunk-XBAIY6CQ.js").then(a=>a.FolderComponent)}),i(r({},s("everyday","Dictionary")),{loadComponent:()=>import("./chunk-MX3FBOHI.js").then(a=>a.EverydayComponent)}),i(r({},s("testing","Testing")),{loadComponent:()=>import("./chunk-7BHIHZFK.js").then(a=>a.TestingComponent)})]}),p=i(r({},s("users","Users",{icon:"group"})),{loadComponent:()=>import("./chunk-QWFWUY6T.js").then(a=>a.UsersComponent)}),d=i(r({},s("profile","Profile",{icon:"person"})),{loadComponent:()=>import("./chunk-EO7URGG4.js").then(a=>a.ProfileComponent)}),m=i(r({},s("history","History",{icon:"history"})),{children:[i(r({},s("","History")),{loadComponent:()=>import("./chunk-GD2VH2PE.js").then(a=>a.HistoryComponent)}),i(r({},s("dictionary","History -> Dictionary")),{loadComponent:()=>import("./chunk-7MCOGXMQ.js").then(a=>a.HistoryEverydayComponent)}),i(r({},s("testing","History -> Testing")),{loadComponent:()=>import("./chunk-NX3VDWVY.js").then(a=>a.HistoryTestingComponent)})]}),n=i(r({},s("login","Login",{icon:"login"})),{loadComponent:()=>import("./chunk-A2LD3OFE.js").then(a=>a.LoginComponent)});return[{path:"admin",loadComponent:()=>import("./chunk-CEL2WBLG.js").then(a=>a.AdminComponent),children:[l,e,t,o,p,d,m,n]}]}var L=[{path:"",pathMatch:"full",redirectTo:"welcome"},{path:"welcome",title:"Welcome",loadComponent:()=>import("./chunk-NQQBLJ3T.js").then(l=>l.WelcomeComponent)},...O(),..._(),{path:"**",title:"Page Not Found",loadComponent:()=>import("./chunk-A6EKKPRU.js").then(l=>l.ErrorComponent)}];var k={providers:[S(L,x()),N()]};var B=(()=>{class l{title=D("Hello");ngOnInit(){}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=g({type:l,selectors:[["app-root"]],standalone:!0,features:[P([]),T],decls:1,vars:0,template:function(o,p){o&1&&F(0,"router-outlet")},dependencies:[M]})}return l})();I(B,k).catch(l=>{console.error(l)});
