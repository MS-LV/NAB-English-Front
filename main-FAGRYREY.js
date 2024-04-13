import{b as S,f as x,g as E}from"./chunk-CGSOOTP7.js";import{b as I,c as M}from"./chunk-J7K3RN7U.js";import{Eb as H,La as C,_ as c,a as s,aa as u,b as a,bb as v,bc as P,cc as T,db as A,fb as b,ga as g,hb as R,ib as D,la as y,lb as F,oa as f,zc as w}from"./chunk-6RR23HKP.js";var j="@",V=(()=>{let e=class e{constructor(o,r,d,m,i){this.doc=o,this.delegate=r,this.zone=d,this.animationType=m,this.moduleImpl=i,this._rendererFactoryPromise=null,this.scheduler=g(A,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-AWRP6KCK.js")).catch(r=>{throw new c(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:d})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let m=new d(this.delegate,this._engine,this.zone);return this.delegate=m,m})}createRenderer(o,r){let d=this.delegate.createRenderer(o,r);if(d.\u0275type===0)return d;typeof d.throwOnSyntheticProps=="boolean"&&(d.throwOnSyntheticProps=!1);let m=new h(d);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(i=>{let n=i.createRenderer(o,r);m.use(n)}).catch(i=>{m.use(d)}),m}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){v()},e.\u0275prov=u({token:e,factory:e.\u0275fac});let p=e;return p})(),h=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,r){this.delegate.insertBefore(e,t,o,r)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,r){this.delegate.setAttribute(e,t,o,r)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,r){this.delegate.setStyle(e,t,o,r)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(j)}};function N(p="animations"){return R("NgAsyncAnimations"),f([{provide:b,useFactory:(e,t,o)=>new V(e,t,o,p),deps:[w,I,D]},{provide:C,useValue:p==="noop"?"NoopAnimations":"BrowserAnimations"}])}function l(p,e,t={}){return{path:p,title:e,data:t}}function O(){let p={path:"",pathMatch:"full",redirectTo:"home"},e=a(s({},l("home","Home",{icon:"home"})),{loadComponent:()=>import("./chunk-2ISWKD5Z.js").then(i=>i.HomeComponent)}),t=a(s({},l("testing","Testing",{icon:"school"})),{loadComponent:()=>import("./chunk-WDVCDXE2.js").then(i=>i.TestingComponent)}),o=a(s({},l("everyday","Everyday",{icon:"library_books"})),{loadComponent:()=>import("./chunk-JX6GFJLR.js").then(i=>i.EverydayComponent)}),r=a(s({},l("profile","Profile",{icon:"person"})),{loadComponent:()=>import("./chunk-TFGQXR5V.js").then(i=>i.ProfileComponent)}),d=a(s({},l("history","History",{icon:"history"})),{children:[a(s({},l("","History")),{loadComponent:()=>import("./chunk-VDPQ3BIA.js").then(i=>i.HistoryComponent)}),a(s({},l("dictionary","History -> Dictionary")),{loadComponent:()=>import("./chunk-LTJJRV43.js").then(i=>i.HistoryDictionaryComponent)}),a(s({},l("testing","History -> Testing")),{loadComponent:()=>import("./chunk-CWGKPVDR.js").then(i=>i.HistoryTestingComponent)})]}),m=a(s({},l("login","Login",{icon:"login"})),{loadComponent:()=>import("./chunk-IU6K3JLB.js").then(i=>i.LoginComponent)});return[{path:"student",loadComponent:()=>import("./chunk-55YYOAX7.js").then(i=>i.StudentComponent),children:[p,e,t,o,r,d,m]}]}function _(){let p={path:"",pathMatch:"full",redirectTo:"home"},e=a(s({},l("dashboard","Dashboard",{icon:"home"})),{loadComponent:()=>import("./chunk-YFQ4OFCL.js").then(n=>n.DashboardComponent)}),t=a(s({},l("setting","Settings",{icon:"settings"})),{loadComponent:()=>import("./chunk-QX4CLQFI.js").then(n=>n.SettingComponent)}),o=a(s({},l("folder","Folder",{icon:"folder_open"})),{children:[a(s({},l("","Folder")),{loadComponent:()=>import("./chunk-2ZJQASBP.js").then(n=>n.FolderComponent)}),a(s({},l("everyday","Dictionary")),{loadComponent:()=>import("./chunk-AW5A2PRX.js").then(n=>n.EverydayComponent)}),a(s({},l("testing","Testing")),{loadComponent:()=>import("./chunk-EA46L7JZ.js").then(n=>n.TestingComponent)})]}),r=a(s({},l("users","Users",{icon:"group"})),{loadComponent:()=>import("./chunk-W7VF6PFT.js").then(n=>n.UsersComponent)}),d=a(s({},l("profile","Profile",{icon:"person"})),{loadComponent:()=>import("./chunk-TFGQXR5V.js").then(n=>n.ProfileComponent)}),m=a(s({},l("history","History",{icon:"history"})),{children:[a(s({},l("","History")),{loadComponent:()=>import("./chunk-VDPQ3BIA.js").then(n=>n.HistoryComponent)}),a(s({},l("dictionary","History -> Dictionary")),{loadComponent:()=>import("./chunk-LTJJRV43.js").then(n=>n.HistoryDictionaryComponent)}),a(s({},l("testing","History -> Testing")),{loadComponent:()=>import("./chunk-CWGKPVDR.js").then(n=>n.HistoryTestingComponent)})]}),i=a(s({},l("login","Login",{icon:"login"})),{loadComponent:()=>import("./chunk-IU6K3JLB.js").then(n=>n.LoginComponent)});return[{path:"admin",loadComponent:()=>import("./chunk-WQ7BM6SX.js").then(n=>n.AdminComponent),children:[p,e,t,o,r,d,m,i]}]}var L=[{path:"",pathMatch:"full",redirectTo:"welcome"},{path:"welcome",title:"Welcome",loadComponent:()=>import("./chunk-Q4WIZ5MK.js").then(p=>p.WelcomeComponent)},...O(),..._()];var k={providers:[x(L,E()),N()]};var B=(()=>{class p{title=F("Hello");ngOnInit(){}static \u0275fac=function(o){return new(o||p)};static \u0275cmp=y({type:p,selectors:[["app-root"]],standalone:!0,features:[P([]),T],decls:1,vars:0,template:function(o,r){o&1&&H(0,"router-outlet")},dependencies:[S]})}return p})();M(B,k).catch(p=>{console.error(p)});
