import{V as z,d as c,B as a,h as p,W as h,L as I,ar as V,N as S,J as b,K as $,a3 as m,X as F,as as H,P as M,aj as P,Q as U,am as _,O as W,I as k,at as C,a2 as G,D as q}from"./CoVIVF5Y.js";import{l as J,n as Z,o as X,q as v,r as Q}from"./B30XJvBn.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */function A(e,t){let n=e;for(;n&&n!==t;)n=n.parentNode;return!!n}function O(e){const t={...e};return Object.keys(t).forEach(n=>{t[n]===void 0&&delete t[n],n==="dataItems"&&(t.data=t[n],delete t[n]),n==="lineStyle"&&t[n]&&(t.style=t[n],delete t[n])}),t}const N=e=>e===void 0?!1:!e;/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let f=class{constructor(t){this.target=t}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */class Y extends f{constructor(t,n){super(n),this.axis=t.axis,this.dataItem=t.dataItem,this.index=t.index,this.text=t.text,this.value=t.value}}/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */class y extends f{constructor(){super(...arguments),this.prevented=!1}preventDefault(){this.prevented=!0}isDefaultPrevented(){return this.prevented}}/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let tt=class extends y{constructor(t,n){super(n),this.axisRanges=t.axisRanges,this.nativeEvent=t.originalEvent}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let et=class extends f{constructor(t,n){super(n),this.axisRanges=t.axisRanges,this.nativeEvent=t.originalEvent}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let nt=class extends y{constructor(t,n){super(n),this.axisRanges=t.axisRanges,this.nativeEvent=t.originalEvent}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let it=class extends y{constructor(t,n){super(n),this.series=t.series,this.seriesIndex=t.seriesIndex,this.pointIndex=t.pointIndex,this.text=t.text}preventDefault(){super.preventDefault()}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let st=class extends y{constructor(t,n){super(n),this.series=t.series,this.seriesIndex=t.seriesIndex,this.pointIndex=t.pointIndex,this.text=t.text}preventDefault(){super.preventDefault()}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let ot=class extends y{constructor(t,n){super(n),this.series=t.series,this.seriesIndex=t.seriesIndex,this.pointIndex=t.pointIndex,this.text=t.text}preventDefault(){super.preventDefault()}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let rt=class extends f{constructor(t,n){super(n),this.from=t.from,this.to=t.to}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let at=class extends f{constructor(t,n){super(n),this.category=t.category,this.dataItem=t.dataItem,this.series=t.series,this.value=t.value,this.visual=t.visual}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let lt=class extends f{constructor(t,n){super(n),this.category=t.category,this.dataItem=t.dataItem,this.series=t.series,this.value=t.value,this.visual=t.visual}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let ct=class extends f{constructor(t,n){super(n),this.category=t.category,this.nativeEvent=t.originalEvent,this.value=t.value,this.x=t.x,this.y=t.y}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let ut=class extends f{constructor(t,n){super(n),this.category=t.category,this.nativeEvent=t.originalEvent,this.value=t.value,this.x=t.x,this.y=t.y}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let dt=class extends f{constructor(t,n){super(n)}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let pt=class extends y{constructor(t,n){super(n),this.axis=t.axis,this.from=t.from,this.to=t.to}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let ht=class extends f{constructor(t,n){super(n),this.axis=t.axis,this.from=t.from,this.to=t.to}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let ft=class extends y{constructor(t,n){super(n),this.axis=t.axis,this.from=t.from,this.to=t.to}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let yt=class extends f{constructor(t,n){super(n),this.category=t.category,this.dataItem=t.dataItem,this.nativeEvent=t.originalEvent,this.percentage=t.percentage,this.point=t.point,this.series=t.series,this.stackValue=t.stackValue,this.value=t.value}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let gt=class extends y{constructor(t,n){super(n),this.category=t.category,this.categoryPoints=t.categoryPoints,this.dataItem=t.dataItem,this.nativeEvent=t.originalEvent,this.percentage=t.percentage,this.point=t.point,this.series=t.series,this.stackValue=t.stackValue,this.value=t.value}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let vt=class extends y{constructor(t,n){super(n),this.axisRanges=t.axisRanges,this.delta=t.delta,this.nativeEvent=t.originalEvent}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let mt=class extends f{constructor(t,n){super(n),this.axisRanges=t.axisRanges,this.nativeEvent=t.originalEvent}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let bt=class extends y{constructor(t,n){super(n),this.axisRanges=t.axisRanges,this.nativeEvent=t.originalEvent}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const K={axisLabelClick:Y,drag:tt,dragEnd:et,dragStart:nt,legendItemHover:it,legendItemClick:st,legendItemLeave:ot,navigatorFilter:rt,noteClick:at,noteHover:lt,plotAreaClick:ct,plotAreaHover:ut,render:dt,select:pt,selectEnd:ht,selectStart:ft,seriesClick:yt,seriesHover:gt,zoom:vt,zoomEnd:mt,zoomStart:bt};function St(e,t,n){if(K[e])return new K[e](t,n)}/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let Ot=class{constructor(t,n){this.sender=t,this.event=n}};function xt(e,t){return new Ot(e,t)}/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const Ct=(e,t,n)=>{const i=J();if(typeof document>"u"){e.dispatch({type:"push",payload:i});return}let s={};try{s=Z(n)}finally{e.dispatch({type:"push",payload:X(i,s)}),t()}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const jt=1e3/60,It=e=>{let t,n,i=[];const s=()=>t,o=l=>{t=e(t,l),z&&(window.clearTimeout(n),n=window.setTimeout(()=>i.forEach(d=>d()),jt))},r=l=>(i.push(l),()=>i=i.filter(d=>d!==l));return o({}),{getState:s,dispatch:o,subscribe:r}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const $t=(e,t)=>t.chartCollectionIdxKey?j.collectionConfigurationItem(e,t):t.chartKey?j.configurationItem(e,t):{},wt=(e,t)=>{if(t.type)switch(t.type){case"set":return j.themeItem(e,t);case"push":return Object.assign(e,t.payload);default:return e}else return{}},Ft=(e,t)=>{if(t.type)switch(t.type){case"add":return[...e,t.payload];case"remove":return e.filter(n=>n!==t.payload);default:return e}else return[]},j={configurationItem(e,t){return e[t.chartKey]&&Object.keys(e[t.chartKey]).length?Object.assign(e,{[t.chartKey]:{...e[t.chartKey],...t.payload}}):Object.assign(e,{[t.chartKey]:t.payload})},collectionConfigurationItem(e,t){let n=!1;const[i,s]=t.chartCollectionIdxKey.split("_"),o=(t.parentKey?e[t.parentKey]?e[t.parentKey][i]||[]:[]:e[i]||[]).map((r,l)=>parseInt(s,10)===l||t.payload&&t.payload.uid===r.uid?(n=!0,t.payload):r);if(n===!1&&!t.uid&&o.splice(parseInt(s,10),0,t.payload),t.uid){const r=o.findIndex(l=>l.uid===t.uid);r>-1&&o.splice(r,1)}return t.parentKey?Object.assign(e,{[t.parentKey]:{[i]:o}}):Object.assign(e,{[i]:o})},themeItem(e,t){let n={};const i=Object.assign(n,e),{field:s,value:o}=t.payload,r=s.split(".");let l=r.shift();for(;r.length>0;)n=n[l]=n[l]||{},l=r.shift();return n[l]=o,i}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */let D=class{constructor(t,n){this.value=t.value,this.category=t.category,this.categoryIndex=t.categoryIx,this.series=t.series,this.dataItem=t.dataItem,this.percentage=t.percentage,this.runningTotal=t.runningTotal,this.total=t.total,this.low=t.low,this.high=t.high,this.xLow=t.xLow,this.xHigh=t.xHigh,this.yLow=t.yLow,this.yHigh=t.yHigh,this.point=t,this.format=((t.options||{}).tooltip||{}).format||n}get formattedValue(){return this.format?this.point.formatValue(this.format):String(this.value)}};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const kt="k-chart-shared-tooltip-marker",Nt=c({name:"KendoSharedTooltipPopup",props:{categoryText:String,colorMarker:{type:Boolean,default:void 0},colspan:Number,nameColumn:{type:Boolean,default:void 0},points:Array},render(){const{categoryText:e,colorMarker:t,colspan:n,nameColumn:i,points:s}=this.$props,o=function(r,l){const d=p("span",{innerHTML:r.formattedValue});return a("tr",{key:l},[t&&a("td",null,[a("span",{class:kt,style:{backgroundColor:r.series.color}},null)]),i&&a("td",null,[r.series.name]),d])};return a("table",null,[a("thead",null,[a("tr",null,[a("th",{colspan:n},[e])])]),a("tbody",null,[s.map(o.bind(this),this)])])}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const Kt={horizontal:"fit",vertical:"fit"},Dt="k-chart-tooltip",Tt="k-chart-tooltip-wrapper",E=c({name:"KendoTooltipPopup",props:{className:String,popupShown:Boolean,popupAlign:{type:Object,default:function(){}},popupOffset:{type:Object},popupStyles:{type:Object},popupContent:Function},inject:{options:{default:{state:{}}},dispatchOptions:{default:null},observersState:{default:null},dispatchObservers:{default:null},childrenObserver:{default:null}},created(){this.chartObserver=new v(this,{onMouseLeave:"onChartMouseLeave"}),this.dispatchObservers({type:"add",payload:this.chartObserver})},mounted(){this.element=S(this,"element")},unmounted(){this.dispatchObservers({type:"remove",payload:this.chartObserver})},render(){const e=h(this),{popupShown:t,popupAlign:n,popupOffset:i,popupStyles:s,className:o}=this.$props,r=[Dt,o].join(" ").trim();return a(V,{animate:!1,popupAlign:n,offset:i,show:t,collision:Kt,class:Tt},{default:()=>[a("div",{class:r,style:s,onMouseleave:this.onMouseLeave,ref:I(this,"element")},[e])]})},methods:{onChartMouseLeave(e){const{event:t}=e;return!!A(t.relatedTarget,this.element)},onMouseLeave(e){}}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */function Lt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!m(e)}const At="k-chart-shared-tooltip",Et="k-chart-tooltip-inverse",Rt=c({name:"KendoSeriesTooltip",data(){return{popupShown:!1,popupAlign:void 0,popupOffset:void 0,popupContext:{},popupStyles:void 0,className:void 0,shared:void 0}},inject:{optionsState:{default:{}},observersState:{default:null},dispatchObservers:{default:null}},mounted(){this.chartObserver=new v(this,{showTooltip:"onShowTooltip",hideTooltip:"onHideTooltip"}),this.dispatchObservers({type:"add",payload:this.chartObserver})},unmounted(){this.dispatchObservers({type:"remove",payload:this.chartObserver})},render(){let e;const t=this.popupShown?function(){const i=this.findRenderFunction();if(this.shared){const s=a(Nt,{categoryText:this.popupContext.categoryText,colorMarker:this.popupContext.colorMarker,colspan:this.popupContext.colspan,nameColumn:this.popupContext.nameColumn,points:this.popupContext.points},null);return b.call(this,{h:p,template:i,defaultRendering:s,additionalProps:Object.assign({},this.popupContext)})}else{const s=this.popupContext.point,o=this.findRenderFunctionByIndex(s.series.index),r=p("span",{innerHTML:this.popupContext.point.formattedValue});return o!==null?b.call(this,{h:p,template:o,defaultRendering:r,additionalProps:Object.assign({},this.popupContext)}):i!==null?b.call(this,{h:p,template:i,defaultRendering:r,additionalProps:Object.assign({},this.popupContext)}):r}}:Function.prototype,n=$({[At]:this.shared,[Et]:!!this.className});return a(E,{popupShown:this.popupShown,popupAlign:this.popupAlign,popupOffset:this.popupOffset,popupStyles:this.popupStyles,className:n},Lt(e=t.call(this))?e:{default:()=>[e]})},methods:{onShowTooltip(e){const{anchor:t,style:n,shared:i,className:s,crosshair:o}=e;let r;o||(i?r=this.createSharedTooltipContext(e):r=this.createTooltipContext(e),this.popupShown=!0,this.popupAlign=t.align,this.popupOffset=t.point,this.popupContext=r,this.popupStyles=n,this.className=s,this.shared=i)},onHideTooltip(){this.popupShown=!1,this.popupStyles={},this.className=void 0},createSharedTooltipContext(e){const{points:t,categoryText:n}=e,i=t.filter(r=>typeof r.series.name<"u").length>0,s=e.series.length>1;let o=1;return i&&o++,s&&o++,{categoryText:n,colorMarker:s,colspan:o,nameColumn:i,points:e.points.map(r=>new D(r,e.format))}},createTooltipContext(e){const{point:t,format:n}=e;return{point:new D(t,n)}},findRenderFunctionByIndex(e){const t=this.optionsState.series;return t!==void 0&&Array.isArray(t)&&t[e]!==void 0&&t[e].hasOwnProperty("tooltip")&&t[e].tooltip.hasOwnProperty("render")?t[e].tooltip.render:null},findRenderFunction(){const e=this.optionsState.tooltip;return e!==void 0&&e.hasOwnProperty("render")?e.render:null}}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */function Bt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!m(e)}const zt="k-chart-crosshair-tooltip",Vt="k-chart-tooltip-inverse",Ht=c({name:"KendoCrosshairTooltip",props:{index:Number,name:String},data(){return{popupShown:!1,popupAlign:void 0,popupOffset:void 0,popupContent:void 0,popupStyles:void 0,className:void 0}},inject:{optionsState:{default:{}},dispatchOptions:{default:null},observersStore:{default:null},dispatchObservers:{default:null},childrenObserver:{default:null}},created(){this.chartObserver=new v(this,{showTooltip:"onShowTooltip",hideTooltip:"onHideTooltip"}),this.dispatchObservers({type:"add",payload:this.chartObserver})},unmounted(){this.dispatchObservers({type:"remove",payload:this.chartObserver})},render(){const e=this.popupShown?this.popupContent:Function.prototype,t=$({[zt]:!0,[Vt]:!!this.className});return a(E,{popupShown:this.popupShown,popupAlign:this.popupAlign,popupOffset:this.popupOffset,popupStyles:this.popupStyles,className:t},Bt(e)?e:{default:()=>[e]})},methods:{onShowTooltip(e){const{anchor:t,style:n,className:i,crosshair:s,axisName:o,axisIndex:r,value:l}=e,{name:d,index:g}=this.$props;s&&o===d&&r===g&&(this.popupShown=!0,this.popupAlign=t.align,this.popupOffset=t.point,this.popupContent=l,this.popupStyles=n,this.className=i)},onHideTooltip(){this.popupShown=!1,this.popupStyles={},this.className=void 0}}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const T=["categoryAxis","valueAxis","xAxis","yAxis"];function Mt(e){const t={};for(let n=0;n<T.length;n++){const i=Pt(e,T[n]);for(let s=0;s<i.length;s++){const o=i[s];t[o.name+o.index]=o}}return t}function Pt(e,t){const n=[];if(e[t]){const i=[].concat(e[t]);for(let s=0;s<i.length;s++){const o=(i[s].crosshair||{}).tooltip;o&&o.visible&&n.push({index:s,name:t})}}return n}const Ut=c({name:"KendoCrosshairContainer",props:{optionsState:Object},computed:{tooltips(){return Mt(this.optionsState)}},render(){const e=Object.keys(this.tooltips).map(function(t){return a(Ht,{index:this.tooltips[t].index,name:this.tooltips[t].name,key:t},null)},this);return a("div",null,[e])}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const L={name:"@progress/kendo-vue-charts",productName:"Kendo UI for Vue",productCode:"KENDOUIVUE",productCodes:["KENDOUIVUE"],publishDate:1747750733,version:"6.4.0",licensingDocsUrl:"https://www.telerik.com/kendo-vue-ui/my-license/?utm_medium=product&utm_source=kendovue&utm_campaign=kendo-ui-vue-purchase-license-keys-warning"};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const _t=c({name:"KendoBaseChart",props:{deriveOptionsFromParent:{type:Function,default:void 0},chartConstructor:{type:[Object,Function],default:void 0},className:String,chartStyle:Object,wrapper:String,getTarget:{type:Function,default:void 0},dataItems:{type:Array,default:void 0},dir:String,renderAs:{type:String,default:void 0,validator:function(e){return["svg","canvas"].includes(e)}},pannable:{type:[Boolean,Object],default:void 0},zoomable:{type:[Boolean,Object],default:void 0},seriesColors:{type:Array,default:void 0},transitions:{type:Boolean,default:!0},paneDefaults:{type:Object,default:void 0},panes:{type:Array,default:void 0},seriesDefaults:{type:Object,default:void 0},axisDefaults:{type:Object,default:void 0},allListeners:{type:Object,default:void 0},onLegenditemclick:Function,onBasechartevent:Function,onRefresh:Function},inject:{kendoIntlService:{default:null}},provide(){return{optionsState:this.optionsState,dispatchOptions:this.dispatchOptions,observersState:this.observersState,dispatchObservers:this.dispatchObservers,childrenObserver:this.childrenObserver,chartRefresh:this.refresh}},created(){this.chartInstance=null,this.element=null,this.suppressTransitions=!1,U(L),this.showLicenseWatermark=_(L),this.themeStore=It(wt),this.chartObserver=new v(this,{render:"onRender",legendItemClick:"onLegendItemClick"})},data(){return{optionsState:{},observersState:[],childrenObserver:new v(this,{onMouseLeave:"onChildMouseLeave"}),showLicenseWatermark:!1}},mounted(){this.element=S(this,"element"),Ct(this.themeStore,this.instantiateCoreChart,this.element),window.addEventListener("resize",this.onWindowResize)},unmounted(){this.onDestroyed()},updated(){if(this.chartInstance!==null){const e=F(this),t=this.chartInstance.chartService;e.locale!==t._intlService.locale&&(this.chartInstance.chartService._intlService=e,this.chartInstance.chartService.format._intlService=e,this.chartInstance.noTransitionsRedraw()),this.refresh()}},render(){const e=h(this),{chartStyle:t={},className:n,wrapper:i}=this.$props,s=Object.assign({},t,{position:"relative"}),o=this.showLicenseWatermark?a(P,null,null):null,r=function(){return a("div",{onMouseleave:this.onChartMouseLeave,ref:I(this,"element"),class:"k-chart-surface"},[e,o])};return p(i,{style:s,class:n,key:"chartElement"},[p(Rt,{key:"seriesTooltip"}),p(Ut,{key:"crosshairTooltips",optionsState:{...this.optionsState}}),r.call(this)])},methods:{dispatchOptions(e){$t(this.optionsState,e)},dispatchObservers(e){this.observersState=Ft(this.observersState,e)},onDestroyed(){this.chartInstance!==null&&(this.chartInstance.destroy(),this.chartInstance=null),window.removeEventListener("resize",this.onWindowResize)},getDirection(e){return e!==void 0?e==="rtl":M(this.element)},getChartOptions(){const{renderAs:e,pannable:t,zoomable:n,paneDefaults:i,panes:s,transitions:o,seriesColors:r,seriesDefaults:l,axisDefaults:d,deriveOptionsFromParent:g}=this.$props;let u={};return e!==void 0&&(u.renderAs=e),t!==void 0&&(u.pannable=t),n!==void 0&&(u.zoomable=n),i!==void 0&&(u.paneDefaults=i),s!==void 0&&(u.panes=s),o!==void 0&&(u.transitions=o),r!==void 0&&(u.seriesColors=r),l!==void 0&&(u.seriesDefaults=l),d!==void 0&&(u.axisDefaults=d),u=Object.assign(u,this.optionsState),g&&(u=g(u)),u},refresh(){if(this.chartInstance!==null){const e=this.themeStore.getState(),t=this.getChartOptions(),n=t.transitions;this.suppressTransitions&&(t.transitions=!1),H.call(this,"refresh")?this.trigger("refresh",{chartOptions:t,themeOptions:e,chartInstance:this.chartInstance}):this.chartInstance.setOptions(t,e),this.suppressTransitions&&(t.transitions=n,this.suppressTransitions=!1)}},instantiateCoreChart(){const{dir:e,chartConstructor:t}=this.$props,n=this.getChartOptions();let i=null;this.element&&(i=this.element.lastElementChild,i&&this.element.removeChild(i)),this.chartInstance=new t(this.element,n,this.themeStore.getState(),{rtl:this.getDirection(e),intlService:F(this),observer:this.chartObserver,sender:this}),this.element&&i&&this.element.appendChild(i)},trigger(e,t){const n=this.$props.getTarget(),i=St(e,t,n),s=this.observersState;let o=!1;for(let r=0;r<s.length;r++)s[r].trigger(e,t)&&(o=!0);return o===!1&&i?(this.$emit("basechartevent",e.toLowerCase(),i),i.isDefaultPrevented&&i.isDefaultPrevented()):o},triggerDomEvent(e,t){const n=this.observersState;let i=!1;for(let s=0;s<n.length;s++)n[s].trigger(e,t)&&(i=!0);return i},onRender(e){this.chartInstance!==null&&(this.surface=e.sender.surface,this.trigger("render",e))},hasListener(e){return this.$props.allListeners?Object.keys(this.$props.allListeners).some(t=>t.toLowerCase().indexOf(e.toLowerCase())!==-1):!1},onLegendItemClick(e){if(this.chartInstance!==null)if(this.hasListener("legenditemclick"))this.$emit("legenditemclick",e);else{const{series:t}=this.optionsState;if(!t)return;let n={};const{seriesIndex:i,pointIndex:s}=e,o=t[i];if(s===void 0)n=Object.assign({},o,{visible:N(o.visible)});else{const r=o.pointVisibility=o.pointVisibility||[];r[s]=N(r[s]),n=Object.assign({},o)}this.dispatchOptions({chartCollectionIdxKey:`series_${i}`,payload:n}),this.suppressTransitions=!0,this.refresh()}},onWindowResize(){this.chartInstance!==null&&this.chartInstance.resize()},onChartMouseLeave(e){const t=xt(this,e);this.triggerDomEvent("onMouseLeave",t)?e.preventDefault():this.chartInstance!==null&&this.chartInstance.hideElements()},onChildMouseLeave(e){const{event:t}=e;return this.chartInstance&&!A(t.relatedTarget,this.element)&&this.chartInstance.hideElements(),!1},requiresHandlers(e){for(let t=0;t<e.length;t++){const n=e[t];if(this.hasListener(n))return!0}return!1}}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const Wt=c({name:"KendoDonutCenter",props:{render:[String,Function,Object]},data(){return{donutCenterStyles:null}},inject:{optionsState:{default:{}},dispatchOptions:{default:null},dispatchObservers:{default:null},childrenObserver:{default:null}},created(){this.dispatchObservers({type:"add",payload:new v(this,{render:"onRender"})})},render(){const{render:e}=this.$props;let t=a("span",null,null);const n=b.call(this,{h:p,template:e,defaultRendering:null});return e&&this.donutCenterStyles&&(t=a("div",{class:"k-chart-donut-center",style:this.donutCenterStyles},[n])),t},methods:{onRender(e){const t=this.optionsState.series,n=Array.isArray(t)?t[0]:null,i=e.sender._plotArea.charts;if(!n||n.type!=="donut"||i[0].points.length===0)return;const s=i[0].points[0].sector,o=s.innerRadius,r=s.center.y-o,l=s.center.x-o,d=o*2;this.donutCenterStyles={height:d+"px",left:l+"px",top:r+"px",width:d+"px"}}}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const Oe=c({name:"KendoChart",props:{donutCenterRender:[String,Function,Object],dir:String,renderAs:{type:String,default:void 0,validator:function(e){return["svg","canvas"].includes(e)}},pannable:{type:[Boolean,Object],default:void 0},zoomable:{type:[Boolean,Object],default:void 0},seriesColors:{type:Array,default:void 0},transitions:{type:Boolean,default:!0},paneDefaults:{type:Object,default:void 0},panes:{type:Array,default:void 0},seriesDefaults:{type:Object,default:void 0},axisDefaults:{type:Object,default:void 0},onAxislabelclick:Function,onDrag:Function,onDragend:Function,onDragstart:Function,onLegenditemhover:Function,onLegenditemclick:Function,onNoteclick:Function,onNotehover:Function,onPlotareaclick:Function,onPlotareahover:Function,onRender:Function,onSelect:Function,onSelectend:Function,onSelectstart:Function,onSeriesclick:Function,onSerieshover:Function,onZoom:Function,onZoomend:Function,onZoomstart:Function},updated(){this.baseChart=S(this,"baseChart")},mounted(){this.baseChart=S(this,"baseChart")},methods:{chartInstance(){return this.baseChart!==null?this.baseChart.chartInstance:null},surface(){return this.baseChart!==null?this.baseChart.surface:null},element(){return this.baseChart!==null?this.baseChart.element:null},getTarget(){return this},handleBaseChartEvents(e,t){this.$emit(e,t)},handleLegendItemClick(e){this.$emit("legenditemclick",e)}},render(){const e=h(this),{donutCenterRender:t,dir:n,renderAs:i,pannable:s,zoomable:o,seriesColors:r,transitions:l,paneDefaults:d,panes:g,seriesDefaults:u,axisDefaults:R}=this.$props,B=t?W.call(this,t,k.call(this)):null;return a(_t,{dir:n,renderAs:i,pannable:s,zoomable:o,seriesColors:r,transitions:l,paneDefaults:d,panes:g,seriesDefaults:u,axisDefaults:R,ref:I(this,"baseChart"),chartConstructor:Q,getTarget:this.getTarget,wrapper:"div",class:$("k-chart k-widget"),onLegenditemclick:this.handleLegendItemClick,onBasechartevent:this.handleBaseChartEvents,allListeners:k.call(this)},{default:()=>[e,a(Wt,{render:B},null)]})}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const x=c({name:"KendoConfiguration",props:{chartKey:String,config:{type:Object,default:function(){return{}}}},data(){return{childState:{},index:null}},provide(){return{addChild:this.addChildOption,removeChild:this.removeChildOption,childOption:!0}},inject:{childOption:{default:null},addChild:{default:C},removeChild:{default:C},child:{default:{}},parentKey:{default:null},chartCollection:{default:null},dispatchOptions:{default:null},childrenObserver:{default:null}},created(){this.currentIndex=void 0,this.uid=G(),this.addChild&&this.addChild({chartKey:this.$props.chartKey,payload:Object.assign({},this.$props.config),uid:this.uid})},mounted(){this.dispatch()},watch:{config(e,t){JSON.stringify(e)!==JSON.stringify(t)&&this.dispatch()}},unmounted(){this.onDestroyed()},render(){const e=h(this);return a("div",null,[e])},methods:{onDestroyed(){if(this.removeChild){this.removeChild({uid:this.uid});const{chartKey:e,parentStore:t,config:n}=this.$props;(t||this.dispatchOptions)({chartKey:e,parentKey:this.parentKey,chartCollectionIdxKey:this.chartCollection+"_",uid:this.uid})}},addChildOption(e){this.childState={...this.childState,[e.chartKey]:e.payload},this.dispatch()},removeChildOption(){this.childState={}},dispatch(){const{chartKey:e,parentStore:t,config:n}=this.$props,i=t||this.dispatchOptions;if(this.childOption){this.addChild({chartKey:e,payload:Object.assign({},n,this.childState)});return}this.chartCollection?(this.currentIndex=this.child.collection.findIndex(s=>s.uid===this.uid),i({chartKey:e,parentKey:this.parentKey,chartCollectionIdxKey:this.chartCollection+"_"+this.currentIndex,payload:Object.assign({},n,{uid:this.uid},this.childState)})):i({chartKey:e,payload:Object.assign({},n,this.childState)})}}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const w=c({name:"KendoCollectionConfiguration",props:{chartKey:String,parentKey:String,parentStore:Object},provide(){return{childOption:!1,chartCollection:this.$props.chartKey,parentKey:this.$props.parentKey,child:this.child,addChild:this.addChild,removeChild:this.removeChild}},inject:{dispatchOptions:{default:null},observersStore:{default:null},childrenObserver:{default:null}},created(){const e=this.dispatchOptions;e({chartKey:this.$props.chartKey,payload:[]})},data(){return{child:{collection:[]}}},render(){const e=h(this);return a("div",null,[e,q(" ")])},methods:{addChild(e){this.child.collection.push(e)},removeChild(e){const t=this.child.collection.findIndex(n=>n.uid===e.uid);this.child.collection.splice(t,1)}}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */function Gt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!m(e)}const xe=c({name:"KendoChartCategoryAxis",render(){const e=h(this);return a(w,{chartKey:"categoryAxis"},Gt(e)?e:{default:()=>[e]})}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const Ce=c({name:"KendoChartCategoryAxisItem",props:{autoBaseUnitSteps:{type:Object,default:function(){}},axisCrossingValue:{type:[Object,Array,Date,Number],default:function(){}},background:{type:String,default:function(){}},baseUnit:{type:String,default:function(){},validator:function(e){return["milliseconds","seconds","minutes","hours","days","weeks","months","years","auto","fit"].includes(e)}},baseUnitStep:{type:[Number,String],default:function(){}},categories:{type:[Array,Object],default:function(){}},color:{type:String,default:function(){}},justified:{type:Boolean,default:function(){}},line:{type:Object,default:function(){}},majorGridLines:{type:Object,default:function(){}},majorTicks:{type:Object,default:function(){}},max:{type:[Number,Object,String,Date],default:function(){}},maxDateGroups:{type:Number,default:function(){}},maxDivisions:{type:Number,default:function(){}},min:{type:[Number,Object,String,Date],default:function(){}},minorGridLines:{type:Object,default:function(){}},minorTicks:{type:Object,default:function(){}},name:{type:String,default:void 0},rangeLabels:{type:Object,default:function(){}},pane:{type:String,default:function(){}},plotBands:{type:Array,default:function(){}},reverse:{type:Boolean,default:function(){}},roundToBaseUnit:{type:Boolean,default:function(){}},startAngle:{type:Number,default:function(){}},type:{type:String,default:function(){},validator:function(e){return["category","date"].includes(e)}},visible:{type:Boolean,default:function(){}},weekStartDay:{type:Number,default:function(){}},crosshair:{type:Object,default:function(){}},labels:{type:Object,default:function(){}},notes:{type:Object,default:function(){}},select:{type:Object,default:function(){}},title:{type:Object,default:function(){}}},render(){const e=h(this),t=O(this.$props);return p(x,{config:t},function(){return e})}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const je=c({name:"KendoChartLegend",props:{align:{type:String,default:function(){},validator:function(e){return["start","center","end"].includes(e)}},background:{type:String,default:void 0},border:{type:Object,default:function(){}},height:{type:Number,default:void 0},labels:{type:Object,default:function(){}},margin:{type:[Object,Number],default:function(){}},offsetX:{type:Number,default:void 0},offsetY:{type:Number,default:void 0},orientation:{type:String,default:function(){},validator:function(e){return["vertical","horizontal"].includes(e)}},padding:{type:[Object,Number],default:function(){}},position:{type:String,default:function(){},validator:function(e){return["top","bottom","left","right","custom"].includes(e)}},reverse:{type:Boolean,default:void 0},visible:{type:Boolean,default:!0},width:{type:Number,default:void 0},inactiveItems:{type:Object,default:function(){}},item:{type:Object,default:function(){}},spacing:{type:Number,default:void 0},title:{type:Object,default:function(){}},focusHighlight:{type:Object,default:function(){}}},render(){const e=h(this),t=O(this.$props);return p(x,{config:t,chartKey:"legend"},function(){return e})}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */function qt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!m(e)}const Ie=c({name:"KendoChartSeries",render(){const e=h(this);return a(w,{chartKey:"series"},qt(e)?e:{default:()=>[e]})}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const $e=c({name:"KendoChartSeriesItem",props:{autoFit:Boolean,aggregate:{type:[String,Function,Object],default:function(){}},axis:String,border:{type:Object,default:function(){}},categoryAxis:String,categoryField:String,closeField:String,color:{type:[String,Function],default:function(){}},colorField:String,connectors:{type:Object,default:function(){}},currentField:String,dashType:{type:String,default:function(){},validator:function(e){return["dash","dashDot","dot","longDash","longDashDot","longDashDotDot","solid"].includes(e)}},dataItems:{type:Array,default:function(){}},downColor:String,downColorField:String,dynamicHeight:{type:Boolean,default:void 0},dynamicSlope:{type:Boolean,default:void 0},errorHighField:String,errorLowField:String,explodeField:String,field:String,for:String,fromField:String,gap:Number,highField:String,holeSize:Number,line:{type:Object,default:function(){}},lowField:String,lowerField:String,margin:{type:[Object,Number],default:function(){}},maxSize:Number,meanField:String,medianField:String,minSize:Number,missingValues:{type:String,default:function(){},validator:function(e){return["gap","interpolate","zero"].includes(e)}},name:String,neckRatio:Number,negativeColor:String,negativeValues:{type:Object,default:function(){}},noteTextField:String,opacity:Number,openField:String,outliersField:String,overlay:{type:Object,default:function(){}},padding:Number,q1Field:String,q3Field:String,segmentSpacing:Number,size:Number,sizeField:String,spacing:Number,stack:{type:[Boolean,String,Object],default:function(){}},startAngle:Number,lineStyle:{type:String,default:function(){},validator:function(e){return["normal","step","smooth"].includes(e)}},summaryField:String,target:{type:Object,default:function(){}},toField:String,type:{type:String,default:function(){}},upperField:String,visible:{type:Boolean,default:void 0},visibleInLegend:{type:Boolean,default:void 0},visibleInLegendField:String,visual:{type:Function,default:void 0},width:Number,xAxis:String,xErrorHighField:String,xErrorLowField:String,xField:String,yAxis:String,yErrorHighField:String,yErrorLowField:String,yField:String,zIndex:Number,errorBars:{type:Object,default:function(){}},extremes:{type:Object,default:function(){}},highlight:{type:Object,default:function(){}},labels:{type:Object,default:function(){}},markers:{type:Object,default:function(){}},legendItem:{type:Object,default:function(){}},notes:{type:Object,default:function(){}},outliers:{type:Object,default:function(){}},tooltip:{type:Object,default:function(){}},pattern:{type:[Object,Function],default:function(){}},patternField:String},inject:{chartRefresh:{default:C}},watch:{dataItems:{handler(){this.chartRefresh()},deep:!0}},render(){const e=h(this),t=O(this.$props);return p(x,{config:t},function(){return e})}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */function Jt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!m(e)}const we=c({name:"KendoChartValueAxis",render(){const e=h(this);return a(w,{chartKey:"valueAxis"},Jt(e)?e:{default:()=>[e]})}});/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const Fe=c({name:"KendoChartValueAxisItem",props:{axisCrossingValue:{type:[Array,Object,Date,Number],default:function(){}},background:{type:String,default:void 0},color:{type:String,default:void 0},line:{type:Object,default:void 0},majorGridLines:{type:Object,default:void 0},majorTicks:{type:Object,default:void 0},majorUnit:{type:Number,default:void 0},max:{type:[Number,Object,String,Date],default:void 0},min:{type:[Number,Object,String,Date],default:void 0},minorGridLines:{type:Object,default:void 0},minorTicks:{type:Object,default:void 0},minorUnit:{type:Number,default:void 0},name:{type:String,default:void 0},narrowRange:{type:Boolean,default:void 0},pane:{type:String,default:void 0},plotBands:{type:Array,default:void 0},reverse:{type:Boolean,default:void 0},type:{type:String,default:void 0,validator:function(e){return["numeric","log"].includes(e)}},visible:{type:Boolean,default:void 0},crosshair:{type:Object,default:void 0},labels:{type:Object,default:void 0},notes:{type:Object,default:void 0},title:{type:Object,default:void 0}},render(){const e=h(this),t=O(this.$props);return p(x,{config:t},function(){return e})}});export{Oe as A,_t as J,Fe as a,$e as b,je as c,w as h,Ce as l,xe as m,x as p,O as r,Ie as s,we as u};
