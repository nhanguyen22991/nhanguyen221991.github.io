(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[2228],{62228:(Z,T,r)=>{"use strict";r.r(T),r.d(T,{DiscountPolicyComponent:()=>j,FarePolicyComponent:()=>X});var m=r(77296),v=r(7542),p=r(48373),f=r(83700),o=r(72506),l=r(36895),g=r(28746),D=r(25650),_=r(94327),t=r(94650),a=r(80529),h=r(44500),c=r(54004),d=r(97582),y=r(87067),w=r(43429);let C=(()=>{class n{}return(0,d.gn)([(0,y.C)()],n.prototype,"status",void 0),(0,d.gn)([(0,w.D)(()=>F),(0,y.C)()],n.prototype,"data",void 0),(0,d.gn)([(0,y.C)()],n.prototype,"objectError",void 0),(0,d.gn)([(0,y.C)()],n.prototype,"success",void 0),n})(),F=(()=>{class n{}return(0,d.gn)([(0,y.C)()],n.prototype,"airline",void 0),(0,d.gn)([(0,y.C)()],n.prototype,"airlineName",void 0),(0,d.gn)([(0,y.C)()],n.prototype,"description",void 0),(0,d.gn)([(0,y.C)()],n.prototype,"timeUpdate",void 0),(0,d.gn)([(0,y.C)()],n.prototype,"url",void 0),n})();var S=r(50494);const x={headers:new a.WM({"Content-Type":"application/json"})};let U=(()=>{class n{constructor(e,i){this.http=e,this.appConfig=i}getPolicyDiscount(e){return this.http.post(this.appConfig.apiUrl+"policy/get-policy",JSON.stringify(e),x).pipe((0,c.U)(i=>(0,S.yE)(C,i,{excludeExtraneousValues:!0})))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(a.eN),t.LFG(h.qB))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var N=r(62733),L=r(62331);function O(n,u){if(1&n&&(t.TgZ(0,"tr",19)(1,"td",20),t._UZ(2,"img",21),t.qZA(),t.TgZ(3,"td",22),t._uU(4),t.qZA(),t.TgZ(5,"td",22),t._uU(6),t.qZA(),t.TgZ(7,"td",22),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td",23)(11,"a",24),t._uU(12," M\u1edf file "),t.qZA()()()),2&n){const e=u.$implicit;t.xp6(2),t.Q6J("src",e.airlineLogo,t.LSH),t.xp6(2),t.hij(" ",e.airlineName," "),t.xp6(2),t.hij(" ",e.description," "),t.xp6(2),t.hij(" ",t.xi3(9,6,1e3*e.timeUpdate,"dd/MM/yyyy HH:mm")," "),t.xp6(2),t.Q6J("sticky","right"),t.xp6(1),t.s9C("href",e.url,t.LSH)}}function k(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",26),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,A=t.oxw();return t.KtG(A.onOpenFile(s.url))}),t.TgZ(1,"div",27)(2,"div",28),t._uU(3,"H\xe3ng bay"),t.qZA(),t.TgZ(4,"div",29),t._UZ(5,"img",30),t.qZA()(),t.TgZ(6,"div",27)(7,"div",28),t._uU(8,"T\xean h\xe3ng bay"),t.qZA(),t.TgZ(9,"div",31),t._uU(10),t.qZA()(),t.TgZ(11,"div",27)(12,"div",28),t._uU(13,"Ng\xe0y c\u1eadp nh\u1eadt"),t.qZA(),t.TgZ(14,"div",32),t._uU(15),t.ALo(16,"date"),t.qZA()(),t.TgZ(17,"div",27)(18,"div",28),t._uU(19,"M\xf4 t\u1ea3"),t.qZA(),t.TgZ(20,"div",32),t._uU(21),t.qZA()()()}if(2&n){const e=t.oxw().$implicit;t.xp6(5),t.Q6J("src",e.airlineLogo,t.LSH),t.xp6(5),t.Oqu(e.airlineName),t.xp6(5),t.Oqu(t.xi3(16,4,1e3*e.timeUpdate,"dd/MM/yyyy HH:mm")),t.xp6(6),t.Oqu(e.description)}}function I(n,u){if(1&n&&(t.ynx(0),t.YNc(1,k,22,7,"div",25),t.BQk()),2&n){const e=u.index,i=t.oxw();t.xp6(1),t.Q6J("ngIf",e<i.infiniteScrollCount)}}function P(n,u){1&n&&t._UZ(0,"cf-spinner")}const q=function(){return{num:25}},M=function(){return{num:50}},R=function(){return{num:75}},J=function(){return{num:100}},B=function(n,u,e,i){return[n,u,e,i]};let j=(()=>{class n{constructor(e,i,s,A){this._policyService=i,this._flightDataService=s,this._toastService=A,this.listOfData=[],this.pageSize=25,this.isLoading=!1,this.INFINITE_SCROLL_DEFAULT=10,this.INFINITE_OFSET_INCREASE=10,this.infiniteScrollCount=this.INFINITE_SCROLL_DEFAULT,this.sortChange=(b,E)=>E,this.searchChange=(b,E)=>E,e.registerIcons([o.HTW]),this.getPolicyDiscount()}ngOnInit(){}getPolicyDiscount(){this.isLoading=!0,this._policyService.getPolicyDiscount({type:"DISCOUNT"}).pipe((0,g.x)(()=>this.isLoading=!1)).subscribe({next:i=>{console.log(i),i.success&&i.data&&(this.listOfData=i.data.map(s=>({airline:s.airline,airlineName:s.airlineName,airlineLogo:this._flightDataService.getAirlineLogoByCode(s.airline),description:s.description,timeUpdate:s.timeUpdate,url:s.url})))}})}ticketTrackByFn(e,i){return i.airline}onScrollDown(){this.infiniteScrollCount+=this.INFINITE_OFSET_INCREASE}onOpenFile(e){e&&window.open(e)}onDownloadAll(){this.isLoading=!0;const e=new D;this.listOfData.forEach(i=>{e.file(`ChinhSachChietKhau${i.airline}.pdf`,i.url)}),e.generateAsync({type:"blob"}).then(i=>{this._toastService.add({severity:"success",summary:"T\u1ea3i v\u1ec1 th\xe0nh c\xf4ng",detail:"\u0110\xe3 t\u1ea3i v\u1ec1 to\xe0n b\u1ed9 file th\xe0nh c\xf4ng. Vui l\xf2ng l\u01b0u v\u1ec1 thi\u1ebft b\u1ecb.",sticky:!1}),_.saveAs(i,"ChinhSachChietKhau.zip"),this.isLoading=!1}).catch(()=>{this._toastService.add({severity:"error",summary:"C\xf3 l\u1ed7i x\u1ea3y ra",detail:"Kh\xf4ng th\u1ec3 t\u1ea3i v\u1ec1 to\xe0n b\u1ed9 file. Vui l\xf2ng th\u1eed l\u1ea1i!",sticky:!1}),this.isLoading=!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.KNP),t.Y36(U),t.Y36(N.G),t.Y36(L.BX))},n.\u0275cmp=t.Xpm({type:n,selectors:[["discount-policy"]],standalone:!0,features:[t.jDz],decls:31,vars:29,consts:[[1,"py-4","px-[30px]","rounded-lg","md:hidden"],[1,"bg-neutral-white","rounded-lg","shadow-cf-md"],[1,"p-4","flex","justify-between","items-center"],[1,"text-heading-sm"],["cf-button","","type","secondary",3,"click"],["icon","save","size","small",1,"mr-2"],[1,"",3,"fnSort","fnSearch","pageSizeList","listData","pageSize"],["managerTable",""],["cf-thead",""],["cf-th","",1,"whitespace-nowrap",3,"sortName"],["cf-th","",1,"whitespace-nowrap",3,"sticky"],["ngFor","",3,"ngForOf"],[1,"hidden","md:block"],[1,"p-4","bg-white","w-full"],[1,"text-heading-sm","text-neutral-gray-6"],[1,"p-4","flex","flex-col","gap-y-3"],["infinite-scroll","",1,"flex","flex-col","gap-y-3",3,"infiniteScrollDistance","infiniteScrollThrottle","infiniteScrollContainer","scrollWindow","fromRoot","alwaysCallback","scrolled"],[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"border-b","border-neutral-gray-1"],[1,"py-2","px-3"],[1,"w-12","h-6","object-contain",3,"src"],[1,"py-2","px-3","text-body-sm"],["cf-td","",1,"py-2","px-3","text-body-sm",3,"sticky"],["target","_blank",1,"text-body-md","text-secondary-3-4","cursor-pointer","whitespace-nowrap",3,"href"],["class","flex flex-col rounded-lg bg-white p-3 gap-y-2 shadow-cf-sm",3,"click",4,"ngIf"],[1,"flex","flex-col","rounded-lg","bg-white","p-3","gap-y-2","shadow-cf-sm",3,"click"],[1,"flex","justify-start","items-center"],[1,"text-body-sm","text-neutral-gray-4","w-[104px]"],[1,"flex","justify-between","items-center"],[1,"w-9","h-9","object-contain",3,"src"],[1,"text-express-md","text-neutral-gray-6"],[1,"text-body-md","text-neutral-gray-6"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4,"Quy \u0111\u1ecbnh chi\u1ebft kh\u1ea5u"),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return i.onDownloadAll()}),t._UZ(6,"cf-icon",5),t._uU(7," T\u1ea3i v\u1ec1 t\u1ea5t c\u1ea3 "),t.qZA()(),t.TgZ(8,"cf-table",6,7)(10,"thead",8)(11,"th",9),t._uU(12,"H\xe3ng bay"),t.qZA(),t.TgZ(13,"th",9),t._uU(14,"T\xean h\xe3ng bay"),t.qZA(),t.TgZ(15,"th",9),t._uU(16,"M\xf4 t\u1ea3"),t.qZA(),t.TgZ(17,"th",9),t._uU(18,"Ng\xe0y c\u1eadp nh\u1eadt"),t.qZA(),t.TgZ(19,"th",10),t._uU(20,"Ch\u1ee9c n\u0103ng"),t.qZA()(),t.TgZ(21,"tbody"),t.YNc(22,O,13,9,"ng-template",11),t.qZA()()()(),t.TgZ(23,"div",12)(24,"div",13)(25,"div",14),t._uU(26,"Quy \u0111\u1ecbnh chi\u1ebft kh\u1ea5u"),t.qZA()(),t.TgZ(27,"div",15)(28,"div",16),t.NdJ("scrolled",function(){return i.onScrollDown()}),t.YNc(29,I,2,1,"ng-container",17),t.qZA()()(),t.YNc(30,P,1,0,"cf-spinner",18)),2&e){const s=t.MAs(9);t.xp6(8),t.Q6J("fnSort",i.sortChange)("fnSearch",i.searchChange)("pageSizeList",t.l5B(24,B,t.DdM(20,q),t.DdM(21,M),t.DdM(22,R),t.DdM(23,J)))("listData",i.listOfData)("pageSize",i.pageSize),t.xp6(3),t.Q6J("sortName","airline"),t.xp6(2),t.Q6J("sortName","pnr"),t.xp6(2),t.Q6J("sortName","bookedDate"),t.xp6(2),t.Q6J("sortName","departDate"),t.xp6(2),t.Q6J("sticky","right"),t.xp6(3),t.Q6J("ngForOf",s.partOfdata),t.xp6(6),t.Q6J("infiniteScrollDistance",1)("infiniteScrollThrottle",300)("infiniteScrollContainer",".main-scroll-bar")("scrollWindow",!1)("fromRoot",!0)("alwaysCallback",!0),t.xp6(1),t.Q6J("ngForOf",i.listOfData)("ngForTrackBy",i.ticketTrackByFn),t.xp6(1),t.Q6J("ngIf",i.isLoading)}},dependencies:[l.ez,l.sg,l.O5,l.uU,o.AxE,o.Sm8,f.N8,f.Xq,p.rC,p.E_,p.qS,p.zs,v.OR,m.Rq,m.Ry],encapsulation:2}),n})();function Q(n,u){if(1&n&&(t.TgZ(0,"tr",19)(1,"td",20),t._UZ(2,"img",21),t.qZA(),t.TgZ(3,"td",22),t._uU(4),t.qZA(),t.TgZ(5,"td",22),t._uU(6),t.qZA(),t.TgZ(7,"td",22),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td",23)(11,"a",24),t._uU(12," M\u1edf file "),t.qZA()()()),2&n){const e=u.$implicit;t.xp6(2),t.Q6J("src",e.airlineLogo,t.LSH),t.xp6(2),t.hij(" ",e.airlineName," "),t.xp6(2),t.hij(" ",e.description," "),t.xp6(2),t.hij(" ",t.xi3(9,6,1e3*e.timeUpdate,"dd/MM/yyyy HH:mm")," "),t.xp6(2),t.Q6J("sticky","right"),t.xp6(1),t.s9C("href",e.url,t.LSH)}}function H(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",26),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,A=t.oxw();return t.KtG(A.onOpenFile(s.url))}),t.TgZ(1,"div",27)(2,"div",28),t._uU(3,"H\xe3ng bay"),t.qZA(),t.TgZ(4,"div",29),t._UZ(5,"img",30),t.qZA()(),t.TgZ(6,"div",27)(7,"div",28),t._uU(8,"T\xean h\xe3ng bay"),t.qZA(),t.TgZ(9,"div",31),t._uU(10),t.qZA()(),t.TgZ(11,"div",27)(12,"div",28),t._uU(13,"Ng\xe0y c\u1eadp nh\u1eadt"),t.qZA(),t.TgZ(14,"div",32),t._uU(15),t.ALo(16,"date"),t.qZA()(),t.TgZ(17,"div",27)(18,"div",28),t._uU(19,"M\xf4 t\u1ea3"),t.qZA(),t.TgZ(20,"div",32),t._uU(21),t.qZA()()()}if(2&n){const e=t.oxw().$implicit;t.xp6(5),t.Q6J("src",e.airlineLogo,t.LSH),t.xp6(5),t.Oqu(e.airlineName),t.xp6(5),t.Oqu(t.xi3(16,4,1e3*e.timeUpdate,"dd/MM/yyyy HH:mm")),t.xp6(6),t.Oqu(e.description)}}function z(n,u){if(1&n&&(t.ynx(0),t.YNc(1,H,22,7,"div",25),t.BQk()),2&n){const e=u.index,i=t.oxw();t.xp6(1),t.Q6J("ngIf",e<i.infiniteScrollCount)}}function Y(n,u){1&n&&t._UZ(0,"cf-spinner")}const V=function(){return{num:25}},K=function(){return{num:50}},G=function(){return{num:75}},W=function(){return{num:100}},$=function(n,u,e,i){return[n,u,e,i]};let X=(()=>{class n{constructor(e,i,s,A){this._policyService=i,this._flightDataService=s,this._toastService=A,this.listOfData=[],this.pageSize=25,this.isLoading=!1,this.INFINITE_SCROLL_DEFAULT=10,this.INFINITE_OFSET_INCREASE=10,this.infiniteScrollCount=this.INFINITE_SCROLL_DEFAULT,this.sortChange=(b,E)=>E,this.searchChange=(b,E)=>E,e.registerIcons([o.HTW]),this.getPolicyDiscount()}getPolicyDiscount(){this.isLoading=!0,this._policyService.getPolicyDiscount({type:"FARE_RULE"}).pipe((0,g.x)(()=>this.isLoading=!1)).subscribe({next:i=>{i.success&&i.data&&(this.listOfData=i.data.map(s=>({airline:s.airline,airlineName:s.airlineName,airlineLogo:this._flightDataService.getAirlineLogoByCode(s.airline),description:s.description,timeUpdate:s.timeUpdate,url:s.url})))}})}ticketTrackByFn(e,i){return i.airline}onScrollDown(){this.infiniteScrollCount+=this.INFINITE_OFSET_INCREASE}onOpenFile(e){e&&window.open(e)}onDownloadAll(){this.isLoading=!0;const e=new D;this.listOfData.forEach(i=>{e.file(`DieuKienGiaVe${i.airline}.pdf`,i.url)}),e.generateAsync({type:"blob"}).then(i=>{this._toastService.add({severity:"success",summary:"T\u1ea3i v\u1ec1 th\xe0nh c\xf4ng",detail:"\u0110\xe3 t\u1ea3i v\u1ec1 to\xe0n b\u1ed9 file th\xe0nh c\xf4ng. Vui l\xf2ng l\u01b0u v\u1ec1 thi\u1ebft b\u1ecb.",sticky:!1}),_.saveAs(i,"DieuKienGiaVe.zip"),this.isLoading=!1}).catch(()=>{this._toastService.add({severity:"error",summary:"C\xf3 l\u1ed7i x\u1ea3y ra",detail:"Kh\xf4ng th\u1ec3 t\u1ea3i v\u1ec1 to\xe0n b\u1ed9 file. Vui l\xf2ng th\u1eed l\u1ea1i!",sticky:!1}),this.isLoading=!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.KNP),t.Y36(U),t.Y36(N.G),t.Y36(L.BX))},n.\u0275cmp=t.Xpm({type:n,selectors:[["fare-policy"]],standalone:!0,features:[t.jDz],decls:31,vars:29,consts:[[1,"py-4","px-[30px]","rounded-lg","md:hidden"],[1,"bg-neutral-white","rounded-lg","shadow-cf-md"],[1,"p-4","flex","justify-between","items-center"],[1,"text-heading-sm"],["cf-button","","type","secondary",3,"click"],["icon","save","size","small",1,"mr-2"],[1,"",3,"fnSort","fnSearch","pageSizeList","listData","pageSize"],["managerTable",""],["cf-thead",""],["cf-th","",1,"whitespace-nowrap",3,"sortName"],["cf-th","",1,"whitespace-nowrap",3,"sticky"],["ngFor","",3,"ngForOf"],[1,"hidden","md:block"],[1,"p-4","bg-white","w-full"],[1,"text-heading-sm","text-neutral-gray-6"],[1,"p-4","flex","flex-col","gap-y-3"],["infinite-scroll","",1,"flex","flex-col","gap-y-3",3,"infiniteScrollDistance","infiniteScrollThrottle","infiniteScrollContainer","scrollWindow","fromRoot","alwaysCallback","scrolled"],[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"border-b","border-neutral-gray-1"],[1,"py-2","px-3"],[1,"w-12","h-6","object-contain",3,"src"],[1,"py-2","px-3","text-body-sm"],["cf-td","",1,"py-2","px-3","text-body-sm",3,"sticky"],["target","_blank",1,"text-body-md","text-secondary-3-4","cursor-pointer","whitespace-nowrap",3,"href"],["class","flex flex-col rounded-lg bg-white p-3 gap-y-2 shadow-cf-sm",3,"click",4,"ngIf"],[1,"flex","flex-col","rounded-lg","bg-white","p-3","gap-y-2","shadow-cf-sm",3,"click"],[1,"flex","justify-start","items-center"],[1,"text-body-sm","text-neutral-gray-4","w-[104px]"],[1,"flex","justify-between","items-center"],[1,"w-9","h-9","object-contain",3,"src"],[1,"text-express-md","text-neutral-gray-6"],[1,"text-body-md","text-neutral-gray-6"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4,"\u0110i\u1ec1u ki\u1ec7n gi\xe1 v\xe9"),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return i.onDownloadAll()}),t._UZ(6,"cf-icon",5),t._uU(7," T\u1ea3i v\u1ec1 t\u1ea5t c\u1ea3 "),t.qZA()(),t.TgZ(8,"cf-table",6,7)(10,"thead",8)(11,"th",9),t._uU(12,"H\xe3ng bay"),t.qZA(),t.TgZ(13,"th",9),t._uU(14,"T\xean h\xe3ng bay"),t.qZA(),t.TgZ(15,"th",9),t._uU(16,"M\xf4 t\u1ea3"),t.qZA(),t.TgZ(17,"th",9),t._uU(18,"Ng\xe0y c\u1eadp nh\u1eadt"),t.qZA(),t.TgZ(19,"th",10),t._uU(20,"Ch\u1ee9c n\u0103ng"),t.qZA()(),t.TgZ(21,"tbody"),t.YNc(22,Q,13,9,"ng-template",11),t.qZA()()()(),t.TgZ(23,"div",12)(24,"div",13)(25,"div",14),t._uU(26,"\u0110i\u1ec1u ki\u1ec7n gi\xe1 v\xe9"),t.qZA()(),t.TgZ(27,"div",15)(28,"div",16),t.NdJ("scrolled",function(){return i.onScrollDown()}),t.YNc(29,z,2,1,"ng-container",17),t.qZA()()(),t.YNc(30,Y,1,0,"cf-spinner",18)),2&e){const s=t.MAs(9);t.xp6(8),t.Q6J("fnSort",i.sortChange)("fnSearch",i.searchChange)("pageSizeList",t.l5B(24,$,t.DdM(20,V),t.DdM(21,K),t.DdM(22,G),t.DdM(23,W)))("listData",i.listOfData)("pageSize",i.pageSize),t.xp6(3),t.Q6J("sortName","airline"),t.xp6(2),t.Q6J("sortName","pnr"),t.xp6(2),t.Q6J("sortName","bookedDate"),t.xp6(2),t.Q6J("sortName","departDate"),t.xp6(2),t.Q6J("sticky","right"),t.xp6(3),t.Q6J("ngForOf",s.partOfdata),t.xp6(6),t.Q6J("infiniteScrollDistance",1)("infiniteScrollThrottle",300)("infiniteScrollContainer",".main-scroll-bar")("scrollWindow",!1)("fromRoot",!0)("alwaysCallback",!0),t.xp6(1),t.Q6J("ngForOf",i.listOfData)("ngForTrackBy",i.ticketTrackByFn),t.xp6(1),t.Q6J("ngIf",i.isLoading)}},dependencies:[l.ez,l.sg,l.O5,l.uU,o.AxE,o.Sm8,f.N8,f.Xq,p.rC,p.E_,p.qS,p.zs,v.OR,m.Rq,m.Ry],encapsulation:2}),n})()},62733:(Z,T,r)=>{"use strict";r.d(T,{G:()=>v});var m=r(94650);let v=(()=>{class p{constructor(){this.flightData={VJ:{name:"Vietjet Air",logo:"assets/airline-logo/VJ.png",smallLogo:"assets/airline-logo/VJ_small.png"},VN:{name:"Vietnam Airlines",logo:"assets/airline-logo/VN.png",smallLogo:"assets/airline-logo/VN_small.png"},QH:{name:"Bamboo Airways",logo:"assets/airline-logo/QH.png",smallLogo:"assets/airline-logo/QH_small.png"}}}getAirlineNameByCode(o){var l;return(null===(l=this.flightData[o])||void 0===l?void 0:l.name)||""}getAirlineLogoByCode(o){return["GDS","other","",null].includes(o)?"assets/icons/airline-default.svg":`assets/airline-logo/${o}.png`}getAirlineIconByCode(o){return["GDS","other","",null].includes(o)?"assets/icons/airline-default.svg":`assets/icons/${o}-icon.svg`}getAirlineLogoDefault(o){return["VN","VJ","QH"].includes(o)?`assets/airline-logo/${o}.png`:"assets/icons/airline-default.svg"}getSmallAirlineLogoByCode(o){var l;const g=["GDS","other","",null].includes(o);return(null===(l=this.flightData[o])||void 0===l?void 0:l.smallLogo)||(g?"assets/icons/airline-default.svg":`assets/airline-logo/${o}.png`)}getAirlineSystemNameByCode(o){var l;return"VN"==o?"Vietnam Airlines":(null===(l=this.flightData[o])||void 0===l?void 0:l.name)||""}}return p.\u0275fac=function(o){return new(o||p)},p.\u0275prov=m.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},94327:function(Z,T){var r,v;void 0!==(v="function"==typeof(r=function(){"use strict";function f(t,a,h){var c=new XMLHttpRequest;c.open("GET",t),c.responseType="blob",c.onload=function(){_(c.response,a,h)},c.onerror=function(){console.error("could not download file")},c.send()}function o(t){var a=new XMLHttpRequest;a.open("HEAD",t,!1);try{a.send()}catch{}return 200<=a.status&&299>=a.status}function l(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var g="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,D=g.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),_=g.saveAs||("object"!=typeof window||window!==g?function(){}:"download"in HTMLAnchorElement.prototype&&!D?function(t,a,h){var c=g.URL||g.webkitURL,d=document.createElement("a");d.download=a=a||t.name||"download",d.rel="noopener","string"==typeof t?(d.href=t,d.origin===location.origin?l(d):o(d.href)?f(t,a,h):l(d,d.target="_blank")):(d.href=c.createObjectURL(t),setTimeout(function(){c.revokeObjectURL(d.href)},4e4),setTimeout(function(){l(d)},0))}:"msSaveOrOpenBlob"in navigator?function(t,a,h){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function p(t,a){return typeof a>"u"?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,h),a);else if(o(t))f(t,a,h);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout(function(){l(c)})}}:function(t,a,h,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof t)return f(t,a,h);var d="application/octet-stream"===t.type,y=/constructor/i.test(g.HTMLElement)||g.safari,w=/CriOS\/[\d]+/.test(navigator.userAgent);if((w||d&&y||D)&&typeof FileReader<"u"){var C=new FileReader;C.onloadend=function(){var x=C.result;x=w?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=x:location=x,c=null},C.readAsDataURL(t)}else{var F=g.URL||g.webkitURL,S=F.createObjectURL(t);c?c.location=S:location.href=S,c=null,setTimeout(function(){F.revokeObjectURL(S)},4e4)}});g.saveAs=_.saveAs=_,Z.exports=_})?r.apply(T,[]):r)&&(Z.exports=v)}}]);