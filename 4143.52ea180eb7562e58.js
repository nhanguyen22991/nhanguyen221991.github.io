"use strict";(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[4143],{44143:(F,v,u)=>{u.d(v,{BN:()=>s,ND:()=>I,j$:()=>r,lt:()=>d,v2:()=>_});var e=u(94650),i=u(72506),l=u(36895),m=u(24513),g=u(24006);function b(n,a){if(1&n&&e._UZ(0,"cf-icon",5),2&n){const t=e.oxw();e.ekj("text-secondary-6-5","error"===t.status)("text-secondary-7-5","warning"===t.status),e.Q6J("cfTooltip",t.hint?t.hint.hint:null)}}const w=[[["","cfLabel",""]],[["","cfHeadIcon",""]],[["","cf-input",""]],[["cf-input-number"]],[["","cfTailIcon",""]],[["","cfHint",""]]],T=function(n){return{"!bg-neutral-gray-0.5 pointer-events-none":n}},p=["[cfLabel]","[cfHeadIcon]","[cf-input]","cf-input-number","[cfTailIcon]","[cfHint]"],D=["cf-input",""],h=["*"],M=["inputElement"];let _=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["cf-input-hint"]],inputs:{hint:"hint"},decls:2,vars:1,template:function(t,o){1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t&&(e.xp6(1),e.Oqu(o.hint))},encapsulation:2}),n})(),I=(()=>{class n{constructor(t){this.cfIconRegister=t,this.status="default",this.showHint=!0,this.disabled=!1,t.registerIcons([i.xgX,i.B2I])}ngAfterViewInit(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(i.KNP))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cf-input-group"]],contentQueries:function(t,o,c){if(1&t&&e.Suo(c,_,5),2&t){let f;e.iGM(f=e.CRH())&&(o.hint=f.first)}},hostAttrs:[1,"w-[320px]","block"],inputs:{status:"status",showHint:"showHint",disabled:"disabled"},ngContentSelectors:p,decls:11,vars:24,consts:[[1,"w-full","items-center"],[1,"text-espressive-md","text-neutral-gray-5","mb-1.5","empty:!m-0"],[1,"flex","items-center","px-3","border","border-neutral-gray-2","gap-x-2","rounded","focus-within:border-neutral-gray-5","focus-within:ring-4","ring-neutral-gray-1","bg-neutral-white",3,"ngClass"],["size","small","icon","circle_information",3,"cfTooltip","text-secondary-6-5","text-secondary-7-5",4,"ngIf"],[1,"text-body-sm","mt-1.5","empty:!m-0"],["size","small","icon","circle_information",3,"cfTooltip"]],template:function(t,o){1&t&&(e.F$t(w),e.TgZ(0,"div",0)(1,"div",1),e.Hsn(2),e.qZA(),e.TgZ(3,"div",2),e.Hsn(4,1),e.Hsn(5,2),e.Hsn(6,3),e.YNc(7,b,1,5,"cf-icon",3),e.Hsn(8,4),e.qZA(),e.TgZ(9,"div",4),e.Hsn(10,5),e.qZA()()),2&t&&(e.xp6(3),e.ekj("!border-secondary-6-3","error"===o.status)("!focus-within:border-secondary-6-3","error"===o.status)("!ring-secondary-6-1","error"===o.status)("!border-secondary-7-3","warning"===o.status)("!focus-within:border-secondary-7-3","warning"===o.status)("!ring-secondary-7-1","warning"===o.status),e.Q6J("ngClass",e.VKq(22,T,o.disabled)),e.xp6(4),e.Q6J("ngIf","error"===o.status||"warning"===o.status),e.xp6(2),e.ekj("!hidden",!o.showHint)("!m-0",!o.showHint)("text-secondary-6-5","error"===o.status)("text-secondary-7-5","warning"===o.status))},dependencies:[l.mk,l.O5,i.Sm8,m.Lk],encapsulation:2}),n})(),s=(()=>{class n{constructor(){this.size="medium"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["input","cf-input",""],["textarea","cf-input",""]],hostAttrs:[1,"w-full","text-body-md","outline-none","bg-[#00000000]"],hostVars:4,hostBindings:function(t,o){2&t&&e.ekj("py-2","medium"===o.size)("py-1","small"===o.size)},inputs:{size:"size"},exportAs:["cfInput"],attrs:D,ngContentSelectors:h,decls:1,vars:0,template:function(t,o){1&t&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),n})(),d=(()=>{class n{constructor(t){this._changeDetectorRef=t,this.size="small",this.placeholder="Nh\u1eadp s\u1ed1",this.min=Number.MIN_VALUE,this.max=Number.MAX_VALUE,this.disabled=!1,this.decimal=!1,this.negative=!0,this.formatOption={parser:".",format:"default"},this.valueInput="",this.rawValue="",this.allowedKeys=["Backspace","Enter","Escape","Delete","ArrowLeft","ArrowRight"],this.onChange=o=>{},this.touched=!1,this.isAddTouch=!1,this.onTouched=()=>{}}onKeyDown(t){const c=this.decimal?this.negative?"0123456789-.":"0123456789.":this.negative?"0123456789-":"0123456789",f=","===this.formatOption.parser;(f&&"."===t.key||!f&&","===t.key)&&this.rawValue.includes(t.key)?t.preventDefault():"-"!==t.key||0===this.inputElement.nativeElement.selectionStart||!this.rawValue.includes("-")&&!this.rawValue?(t.ctrlKey||t.metaKey)&&["c","v","a"].includes(t.key.toLowerCase())||!c.includes(t.key)&&!this.allowedKeys.includes(t.key)&&t.preventDefault():t.preventDefault()}formatNumber(t,o=0){if(!Number.isFinite(t))return"";const c=t<0,f=Math.abs(t),O=this.formatOption.parser,x="."===this.formatOption.parser?",":".",P=f.toString().split(".");let C=P[0],y=P[1]||"";return C=C.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,O),o>0&&(y=y.substring(0,o)),y.length>0?`${c?"-":""}${C}${x}${y}`:`${c?"-":""}${C}`}onInput(t){let c;this.rawValue=t.target.value.replace(/[^0-9,.-]/g,""),"."===this.formatOption.parser?c=parseFloat(this.rawValue.replace(/[\.]/g,"").replace(/[,]/g,".")):","===this.formatOption.parser&&(c=parseFloat(this.rawValue.replace(/[,]/g,""))),this.valueInput=this.formatNumber(c),this.onChange("number"==typeof c?c:null)}selectFocus(){this._changeDetectorRef.markForCheck()}selectBlur(){this.markAsTouched()}writeValue(t){this.valueInput=Number.isFinite(t)?this.formatNumber(t):"",this._changeDetectorRef.markForCheck()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t,this.isAddTouch=!0}setDisabledState(t){}markAsTouched(){!this.touched&&this.isAddTouch&&(this.onTouched(),this.touched=!0)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cf-input-number"]],viewQuery:function(t,o){if(1&t&&e.Gf(M,5),2&t){let c;e.iGM(c=e.CRH())&&(o.inputElement=c.first)}},hostAttrs:[1,"w-full"],hostBindings:function(t,o){1&t&&e.NdJ("keydown",function(f){return o.onKeyDown(f)})},inputs:{size:"size",placeholder:"placeholder",min:"min",max:"max",disabled:"disabled",decimal:"decimal",negative:"negative",formatOption:"formatOption"},features:[e._Bn([{provide:g.JU,multi:!0,useExisting:n}])],decls:2,vars:7,consts:[[1,"w-full","text-body-md","outline-none","cursor-pointer","focus:!cursor-auto","placeholder-neutral-gray-4","bg-[#00000000]",3,"disabled","value","placeholder","focus","blur","input"],["inputElement",""]],template:function(t,o){1&t&&(e.TgZ(0,"input",0,1),e.NdJ("focus",function(){return o.selectFocus()})("blur",function(){return o.selectBlur()})("input",function(f){return o.onInput(f)}),e.qZA()),2&t&&(e.ekj("py-2","medium"==o.size)("py-1","small"==o.size),e.Q6J("disabled",o.disabled)("value",o.valueInput)("placeholder",o.placeholder))},encapsulation:2,changeDetection:0}),n})(),r=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,i.AxE]}),n})()},24513:(F,v,u)=>{u.d(v,{Lk:()=>I});var e=u(84080),i=u(94650),l=u(98184),m=u(37340),g=u(36895);function b(s,d){if(1&s&&(i.ynx(0,2),i._uU(1),i.BQk()),2&s){const r=d.ngIf;i.xp6(1),i.hij(" ",r," ")}}function w(s,d){}function T(s,d){if(1&s&&(i.ynx(0),i.YNc(1,w,0,0,"ng-template",3),i.BQk()),2&s){const r=d.ngIf;i.xp6(1),i.Q6J("ngTemplateOutlet",r)}}const D={top:new l.tR({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"},0,-6),topCenter:new l.tR({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"},0,-6),topLeft:new l.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"},0,-6),topRight:new l.tR({originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"},0,-6),right:new l.tR({originX:"end",originY:"center"},{overlayX:"start",overlayY:"center"},6,0),rightTop:new l.tR({originX:"end",originY:"top"},{overlayX:"start",overlayY:"top"},6,0),rightBottom:new l.tR({originX:"end",originY:"bottom"},{overlayX:"start",overlayY:"bottom"},6,0),bottom:new l.tR({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"},0,6),bottomCenter:new l.tR({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"},0,6),bottomLeft:new l.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"},0,6),bottomRight:new l.tR({originX:"end",originY:"bottom"},{overlayX:"end",overlayY:"top"},0,6),left:new l.tR({originX:"start",originY:"center"},{overlayX:"end",overlayY:"center"},-6,0),leftTop:new l.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"},-6,0),leftBottom:new l.tR({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"bottom"},-6,0)},h=new i.OlP("Data to display in tooltip");new i.OlP("Data to show arrow");let _=(()=>{class s{constructor(r){this.tooltipData=r,this.animation=!1}ngOnInit(){this.classes=this.getClass()}get asString(){return"string"==typeof this.tooltipData.data&&this.tooltipData.data}get asTemplate(){return this.tooltipData.data instanceof i.Rgc&&this.tooltipData.data}getClass(){return"white"==this.tooltipData.color?`block relative py-2 shadow-cf-lg px-3 text-neutral-black text-body-sm bg-neutral-${this.tooltipData.color} rounded-lg`:`block relative py-2 shadow-cf-lg px-3 text-neutral-white text-body-sm bg-neutral-${this.tooltipData.color} rounded-lg`}}return s.\u0275fac=function(r){return new(r||s)(i.Y36(h))},s.\u0275cmp=i.Xpm({type:s,selectors:[["cf-tooltip-container"]],hostVars:3,hostBindings:function(r,n){2&r&&(i.d8E("@myInsertRemoveTrigger",n.animation),i.Tol(n.classes))},standalone:!0,features:[i.jDz],decls:3,vars:6,consts:[["class","text-body-sm",4,"ngIf"],[4,"ngIf"],[1,"text-body-sm"],[3,"ngTemplateOutlet"]],template:function(r,n){1&r&&(i._UZ(0,"span"),i.YNc(1,b,2,1,"ng-container",0),i.YNc(2,T,2,1,"ng-container",1)),2&r&&(i.MT6("arrow text-neutral-",n.tooltipData.color," ",n.tooltipData.position,""),i.xp6(1),i.Q6J("ngIf",n.asString),i.xp6(1),i.Q6J("ngIf",n.asTemplate))},dependencies:[g.O5,g.tP],styles:["[_nghost-%COMP%]{z-index:10000}[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{position:absolute;width:0;height:0}[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{border-left:6px solid transparent;border-right:6px solid transparent}[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{border-bottom:6px;border-bottom-style:solid}.arrow.bottom[_ngcontent-%COMP%], .arrow.bottomCenter[_ngcontent-%COMP%]{top:-6px;left:calc(50% - 6px)}.arrow.bottomRight[_ngcontent-%COMP%]{top:-6px;right:6px}.arrow.bottomLeft[_ngcontent-%COMP%]{top:-6px;left:6px}.arrow.left[_ngcontent-%COMP%]{right:-8px;transform:rotate(90deg);top:calc(50% - 2.4px)}.arrow.leftBottom[_ngcontent-%COMP%]{right:-8px;bottom:6px;transform:rotate(90deg)}.arrow.leftTop[_ngcontent-%COMP%]{right:-8px;top:6px;transform:rotate(90deg)}.arrow.top[_ngcontent-%COMP%], .arrow.topCenter[_ngcontent-%COMP%]{bottom:-6px;left:calc(50% - 6px);transform:rotate(180deg)}.arrow.topRight[_ngcontent-%COMP%]{bottom:-5px;right:6px;transform:rotate(180deg)}.arrow.topLeft[_ngcontent-%COMP%]{bottom:-5px;left:6px;transform:rotate(180deg)}.arrow.right[_ngcontent-%COMP%]{left:-8px;transform:rotate(270deg);top:calc(50% - 2.4px)}.arrow.rightBottom[_ngcontent-%COMP%]{left:-8.4px;bottom:6px;transform:rotate(270deg)}.arrow.rightTop[_ngcontent-%COMP%]{left:-8.4px;top:6px;transform:rotate(270deg)}"],data:{animation:[(0,m.X$)("myInsertRemoveTrigger",[(0,m.eR)(":enter",[(0,m.oB)({transform:"scale(0)",opacity:0}),(0,m.jt)("200ms ease-in-out",(0,m.oB)({transform:"scale(1)",opacity:1}))]),(0,m.eR)(":leave",[(0,m.jt)("200ms ease-in-out",(0,m.oB)({transform:"scale(0)",opacity:0}))])])]},changeDetection:0}),s})(),I=(()=>{class s{constructor(r,n,a){this.element=r,this.overlay=n,this.viewContainer=a,this.placement="top",this.color="black",this.manualHandle=!1,this.overlayRef=null}ngOnDestroy(){var r;null===(r=this.overlayRef)||void 0===r||r.dispose()}focus(){this.manualHandle||this.showTooltip()}showTooltip(){var r;this.content&&!0!==(null===(r=this.overlayRef)||void 0===r?void 0:r.hasAttached())&&this.attachTooltip()}blur(){this.manualHandle||this.hideTooltip()}hideTooltip(){var r,n;this.content&&!0===(null===(r=this.overlayRef)||void 0===r?void 0:r.hasAttached())&&(null===(n=this.overlayRef)||void 0===n||n.detach())}attachTooltip(){if(null===this.overlayRef){const a=this.getPositionStrategy();this.overlayRef=this.overlay.create({positionStrategy:a,scrollStrategy:this.overlay.scrollStrategies.reposition()})}const r=i.zs3.create({providers:[{provide:h,useValue:{data:this.content,position:this.placement,color:this.color}}]}),n=new e.C5(_,this.viewContainer,r);this.overlayRef.attach(n)}getPositionStrategy(){return this.overlay.position().flexibleConnectedTo(this.element).withPositions([D[this.placement]])}}return s.\u0275fac=function(r){return new(r||s)(i.Y36(i.SBq),i.Y36(l.aV),i.Y36(i.s_b))},s.\u0275dir=i.lG2({type:s,selectors:[["","cfTooltip",""]],hostBindings:function(r,n){1&r&&i.NdJ("mouseenter",function(){return n.focus()})("focus",function(){return n.focus()})("mouseleave",function(){return n.blur()})("blur",function(){return n.blur()})},inputs:{content:["cfTooltip","content"],placement:"placement",color:"color",manualHandle:"manualHandle"},exportAs:["cfTooltip"],standalone:!0}),s})()}}]);