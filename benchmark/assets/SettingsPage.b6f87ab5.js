import{b as re,Q as Bt,a as At,d as pe,e as Xe,c as Ke}from"./QMenu.ba140c81.js";import{j as Et,s as ct,c as He,y as It,l as Tt,Q as J}from"./QBtn.e061834b.js";import{Z as ue,n as Rt,ak as Pt,F as he,al as Oe,K as Ge,H as K,I as _e,G as De,J as dt,r as I,c,o as Ot,a9 as Dt,ab as Le,h as d,g as Se,w as ze,L as je,N as Lt,a8 as Ft,_ as Nt,m as Ut,u as Qt,b as zt,s as Y,O as X,x as V,v as L,Q as se,A as O,S as ke,U as jt,R as ye,C as ae,ae as We,an as Fe,P as Je,y as Ht,z as Yt}from"./index.dfb529fe.js";import{g as Ze,s as et,Q as ie,a as tt,b as Ne,c as Xt,u as Kt}from"./QTabPanels.3ef5b4c7.js";import{t as Gt,A as vt,z as ft,u as gt,E as mt,K as Wt,Q as Jt,c as Zt,D as at,d as ea,e as lt,C as nt}from"./DynamsoftButton.c42268f5.js";import{t as ta,Q as aa}from"./QCardActions.6b1623aa.js";import{Q as la}from"./rtl.0702587f.js";import{g as na,M as Ce,l as ra,m as oa,j as ua}from"./utils.9a20fa8f.js";import"./scroll.6e2c0cd7.js";import"./QResizeObserver.f9553e60.js";function Ue(t,n,u){const o=_e(t);let e,l=o.left-n.event.x,i=o.top-n.event.y,v=Math.abs(l),b=Math.abs(i);const f=n.direction;f.horizontal===!0&&f.vertical!==!0?e=l<0?"left":"right":f.horizontal!==!0&&f.vertical===!0?e=i<0?"up":"down":f.up===!0&&i<0?(e="up",v>b&&(f.left===!0&&l<0?e="left":f.right===!0&&l>0&&(e="right"))):f.down===!0&&i>0?(e="down",v>b&&(f.left===!0&&l<0?e="left":f.right===!0&&l>0&&(e="right"))):f.left===!0&&l<0?(e="left",v<b&&(f.up===!0&&i<0?e="up":f.down===!0&&i>0&&(e="down"))):f.right===!0&&l>0&&(e="right",v<b&&(f.up===!0&&i<0?e="up":f.down===!0&&i>0&&(e="down")));let x=!1;if(e===void 0&&u===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,x=!0,e==="left"||e==="right"?(o.left-=l,v=0,l=0):(o.top-=i,b=0,i=0)}return{synthetic:x,payload:{evt:t,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:o,direction:e,isFirst:n.event.isFirst,isFinal:u===!0,duration:Date.now()-n.event.time,distance:{x:v,y:b},offset:{x:l,y:i},delta:{x:o.left-n.event.lastX,y:o.top-n.event.lastY}}}}let sa=0;var bt=Et({name:"touch-pan",beforeMount(t,{value:n,modifiers:u}){if(u.mouse!==!0&&ue.has.touch!==!0)return;function o(l,i){u.mouse===!0&&i===!0?dt(l):(u.stop===!0&&K(l),u.prevent===!0&&Ge(l))}const e={uid:"qvtp_"+sa++,handler:n,modifiers:u,direction:Ze(u),noop:Rt,mouseStart(l){et(l,e)&&Pt(l)&&(he(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(l,!0))},touchStart(l){if(et(l,e)){const i=l.target;he(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(l)}},start(l,i){if(ue.is.firefox===!0&&Oe(t,!0),e.lastEvt=l,i===!0||u.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const f=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Ge(f),l.cancelBubble===!0&&K(f),Object.assign(f,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[e.uid]:l.qClonedBy.concat(e.uid)}),e.initialEvent={target:l.target,event:f}}K(l)}const{left:v,top:b}=_e(l);e.event={x:v,y:b,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:b}},move(l){if(e.event===void 0)return;const i=_e(l),v=i.left-e.event.x,b=i.top-e.event.y;if(v===0&&b===0)return;e.lastEvt=l;const f=e.event.mouse===!0,x=()=>{o(l,f);let p;u.preserveCursor!==!0&&u.preservecursor!==!0&&(p=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),f===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Gt(),e.styleCleanup=q=>{if(e.styleCleanup=void 0,p!==void 0&&(document.documentElement.style.cursor=p),document.body.classList.remove("non-selectable"),f===!0){const H=()=>{document.body.classList.remove("no-pointer-events--children")};q!==void 0?setTimeout(()=>{H(),q()},50):H()}else q!==void 0&&q()}};if(e.event.detected===!0){e.event.isFirst!==!0&&o(l,e.event.mouse);const{payload:p,synthetic:q}=Ue(l,e,!1);p!==void 0&&(e.handler(p)===!1?e.end(l):(e.styleCleanup===void 0&&e.event.isFirst===!0&&x(),e.event.lastX=p.position.left,e.event.lastY=p.position.top,e.event.lastDir=q===!0?void 0:p.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||f===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){x(),e.event.detected=!0,e.move(l);return}const M=Math.abs(v),s=Math.abs(b);M!==s&&(e.direction.horizontal===!0&&M>s||e.direction.vertical===!0&&M<s||e.direction.up===!0&&M<s&&b<0||e.direction.down===!0&&M<s&&b>0||e.direction.left===!0&&M>s&&v<0||e.direction.right===!0&&M>s&&v>0?(e.event.detected=!0,e.move(l)):e.end(l,!0))},end(l,i){if(e.event!==void 0){if(De(e,"temp"),ue.is.firefox===!0&&Oe(t,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(Ue(l===void 0?e.lastEvt:l,e).payload);const{payload:v}=Ue(l===void 0?e.lastEvt:l,e,!0),b=()=>{e.handler(v)};e.styleCleanup!==void 0?e.styleCleanup(b):b()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,u.mouse===!0){const l=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";he(e,"main",[[t,"mousedown","mouseStart",`passive${l}`]])}ue.has.touch===!0&&he(e,"main",[[t,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,n){const u=t.__qtouchpan;u!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&u.end(),u.handler=n.value),u.direction=Ze(n.modifiers))},beforeUnmount(t){const n=t.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),De(n,"main"),De(n,"temp"),ue.is.firefox===!0&&Oe(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete t.__qtouchpan)}});const rt="q-slider__marker-labels",ia=t=>({value:t}),ca=({marker:t})=>d("div",{key:t.value,style:t.style,class:t.classes},t.label),pt=[34,37,40,33,39,38],da={...ft,...gt,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:t=>t>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},va=["pan","update:modelValue","change"];function fa({updateValue:t,updatePosition:n,getDragging:u,formAttrs:o}){const{props:e,emit:l,slots:i,proxy:{$q:v}}=Se(),b=vt(e,v),f=mt(o),x=I(!1),M=I(!1),s=I(!1),p=I(!1),q=c(()=>e.vertical===!0?"--v":"--h"),H=c(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),U=c(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(v.lang.rtl===!0)),Q=c(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),$=c(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),m=c(()=>e.disable!==!0&&e.readonly!==!0&&Q.value<$.value),k=c(()=>(String(e.step).trim().split(".")[1]||"").length),h=c(()=>e.step===0?1:e.step),E=c(()=>m.value===!0?e.tabindex||0:-1),_=c(()=>e.max-e.min),G=c(()=>$.value-Q.value),W=c(()=>S(Q.value)),P=c(()=>S($.value)),F=c(()=>e.vertical===!0?U.value===!0?"bottom":"top":U.value===!0?"right":"left"),z=c(()=>e.vertical===!0?"height":"width"),Z=c(()=>e.vertical===!0?"width":"height"),oe=c(()=>e.vertical===!0?"vertical":"horizontal"),T=c(()=>{const r={role:"slider","aria-valuemin":Q.value,"aria-valuemax":$.value,"aria-orientation":oe.value,"data-step":e.step};return e.disable===!0?r["aria-disabled"]="true":e.readonly===!0&&(r["aria-readonly"]="true"),r}),de=c(()=>`q-slider q-slider${q.value} q-slider--${x.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(m.value===!0?" q-slider--editable":""))+(s.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(b.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+q.value:""));function le(r){const y="q-slider__"+r;return`${y} ${y}${q.value} ${y}${q.value}${H.value}`}function ve(r){const y="q-slider__"+r;return`${y} ${y}${q.value}`}const xe=c(()=>{const r=e.selectionColor||e.color;return"q-slider__selection absolute"+(r!==void 0?` text-${r}`:"")}),Me=c(()=>ve("markers")+" absolute overflow-hidden"),Ve=c(()=>ve("track-container")),fe=c(()=>le("pin")),qe=c(()=>le("label")),$e=c(()=>le("text-container")),Be=c(()=>le("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),Ae=c(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),Ee=c(()=>{const r={[Z.value]:e.trackSize};return e.trackImg!==void 0&&(r.backgroundImage=`url(${e.trackImg}) !important`),r}),Ie=c(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),a=c(()=>{const r=P.value-W.value,y={[F.value]:`${100*W.value}%`,[z.value]:r===0?"2px":`${100*r}%`};return e.innerTrackImg!==void 0&&(y.backgroundImage=`url(${e.innerTrackImg}) !important`),y});function g(r){const{min:y,max:B,step:A}=e;let D=y+r*(B-y);if(A>0){const te=(D-y)%A;D+=(Math.abs(te)>=A/2?(te<0?-1:1)*A:0)-te}return k.value>0&&(D=parseFloat(D.toFixed(k.value))),re(D,Q.value,$.value)}function S(r){return _.value===0?0:(r-e.min)/_.value}function w(r,y){const B=_e(r),A=e.vertical===!0?re((B.top-y.top)/y.height,0,1):re((B.left-y.left)/y.width,0,1);return re(U.value===!0?1-A:A,W.value,P.value)}const N=c(()=>Dt(e.markers)===!0?e.markers:h.value),C=c(()=>{const r=[],y=N.value,B=e.max;let A=e.min;do r.push(A),A+=y;while(A<B);return r.push(B),r}),j=c(()=>{const r=` ${rt}${q.value}-`;return rt+`${r}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${r}${U.value===!0?"rtl":"ltr"}`}),R=c(()=>e.markerLabels===!1?null:me(e.markerLabels).map((r,y)=>({index:y,value:r.value,label:r.label||r.value,classes:j.value+(r.classes!==void 0?" "+r.classes:""),style:{...be(r.value),...r.style||{}}}))),ee=c(()=>({markerList:R.value,markerMap:yt.value,classes:j.value,getStyle:be})),ge=c(()=>{const r=G.value===0?"2px":100*N.value/G.value;return{...a.value,backgroundSize:e.vertical===!0?`2px ${r}%`:`${r}% 2px`}});function me(r){if(r===!1)return null;if(r===!0)return C.value.map(ia);if(typeof r=="function")return C.value.map(B=>{const A=r(B);return Le(A)===!0?{...A,value:B}:{value:B,label:A}});const y=({value:B})=>B>=e.min&&B<=e.max;return Array.isArray(r)===!0?r.map(B=>Le(B)===!0?B:{value:B}).filter(y):Object.keys(r).map(B=>{const A=r[B],D=Number(B);return Le(A)===!0?{...A,value:D}:{value:D,label:A}}).filter(y)}function be(r){return{[F.value]:`${100*(r-e.min)/_.value}%`}}const yt=c(()=>{if(e.markerLabels===!1)return null;const r={};return R.value.forEach(y=>{r[y.value]=y}),r});function Ct(){if(i["marker-label-group"]!==void 0)return i["marker-label-group"](ee.value);const r=i["marker-label"]||ca;return R.value.map(y=>r({marker:y,...ee.value}))}const _t=c(()=>[[bt,St,void 0,{[oe.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function St(r){r.isFinal===!0?(p.value!==void 0&&(n(r.evt),r.touch===!0&&t(!0),p.value=void 0,l("pan","end")),x.value=!1,s.value=!1):r.isFirst===!0?(p.value=u(r.evt),n(r.evt),t(),x.value=!0,l("pan","start")):(n(r.evt),t())}function Ye(){s.value=!1}function wt(r){n(r,u(r)),t(),M.value=!0,x.value=!0,document.addEventListener("mouseup",Te,!0)}function Te(){M.value=!1,x.value=!1,t(!0),Ye(),document.removeEventListener("mouseup",Te,!0)}function xt(r){n(r,u(r)),t(!0)}function Mt(r){pt.includes(r.keyCode)&&t(!0)}function Vt(r){if(e.vertical===!0)return null;const y=v.lang.rtl!==e.reverse?1-r:r;return{transform:`translateX(calc(${2*y-1} * ${e.thumbSize} / 2 + ${50-100*y}%))`}}function qt(r){const y=c(()=>M.value===!1&&(s.value===r.focusValue||s.value==="both")?" q-slider--focus":""),B=c(()=>`q-slider__thumb q-slider__thumb${q.value} q-slider__thumb${q.value}-${U.value===!0?"rtl":"ltr"} absolute non-selectable`+y.value+(r.thumbColor.value!==void 0?` text-${r.thumbColor.value}`:"")),A=c(()=>({width:e.thumbSize,height:e.thumbSize,[F.value]:`${100*r.ratio.value}%`,zIndex:s.value===r.focusValue?2:void 0})),D=c(()=>r.labelColor.value!==void 0?` text-${r.labelColor.value}`:""),te=c(()=>Vt(r.ratio.value)),Re=c(()=>"q-slider__text"+(r.labelTextColor.value!==void 0?` text-${r.labelTextColor.value}`:""));return()=>{const Pe=[d("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[d("path",{d:e.thumbPath})]),d("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(Pe.push(d("div",{class:fe.value+" absolute fit no-pointer-events"+D.value},[d("div",{class:qe.value,style:{minWidth:e.thumbSize}},[d("div",{class:$e.value,style:te.value},[d("span",{class:Re.value},r.label.value)])])])),e.name!==void 0&&e.disable!==!0&&f(Pe,"push")),d("div",{class:B.value,style:A.value,...r.getNodeData()},Pe)}}function $t(r,y,B,A){const D=[];e.innerTrackColor!=="transparent"&&D.push(d("div",{key:"inner",class:Ie.value,style:a.value})),e.selectionColor!=="transparent"&&D.push(d("div",{key:"selection",class:xe.value,style:r.value})),e.markers!==!1&&D.push(d("div",{key:"marker",class:Me.value,style:ge.value})),A(D);const te=[ct("div",{key:"trackC",class:Ve.value,tabindex:y.value,...B.value},[d("div",{class:Ae.value,style:Ee.value},D)],"slide",m.value,()=>_t.value)];if(e.markerLabels!==!1){const Re=e.switchMarkerLabelsSide===!0?"unshift":"push";te[Re](d("div",{key:"markerL",class:Be.value},Ct()))}return te}return Ot(()=>{document.removeEventListener("mouseup",Te,!0)}),{state:{active:x,focus:s,preventFocus:M,dragging:p,editable:m,classes:de,tabindex:E,attributes:T,step:h,decimals:k,trackLen:_,innerMin:Q,innerMinRatio:W,innerMax:$,innerMaxRatio:P,positionProp:F,sizeProp:z,isReversed:U},methods:{onActivate:wt,onMobileClick:xt,onBlur:Ye,onKeyup:Mt,getContent:$t,getThumbRenderFn:qt,convertRatioToModel:g,convertModelToRatio:S,getDraggingRatio:w}}}const ga=()=>({});var ne=He({name:"QSlider",props:{...da,modelValue:{required:!0,default:null,validator:t=>typeof t=="number"||t===null},labelValue:[String,Number]},emits:va,setup(t,{emit:n}){const{proxy:{$q:u}}=Se(),{state:o,methods:e}=fa({updateValue:q,updatePosition:U,getDragging:H,formAttrs:Wt(t)}),l=I(null),i=I(0),v=I(0);function b(){v.value=t.modelValue===null?o.innerMin.value:re(t.modelValue,o.innerMin.value,o.innerMax.value)}ze(()=>`${t.modelValue}|${o.innerMin.value}|${o.innerMax.value}`,b),b();const f=c(()=>e.convertModelToRatio(v.value)),x=c(()=>o.active.value===!0?i.value:f.value),M=c(()=>{const m={[o.positionProp.value]:`${100*o.innerMinRatio.value}%`,[o.sizeProp.value]:`${100*(x.value-o.innerMinRatio.value)}%`};return t.selectionImg!==void 0&&(m.backgroundImage=`url(${t.selectionImg}) !important`),m}),s=e.getThumbRenderFn({focusValue:!0,getNodeData:ga,ratio:x,label:c(()=>t.labelValue!==void 0?t.labelValue:v.value),thumbColor:c(()=>t.thumbColor||t.color),labelColor:c(()=>t.labelColor),labelTextColor:c(()=>t.labelTextColor)}),p=c(()=>o.editable.value!==!0?{}:u.platform.is.mobile===!0?{onClick:e.onMobileClick}:{onMousedown:e.onActivate,onFocus:Q,onBlur:e.onBlur,onKeydown:$,onKeyup:e.onKeyup});function q(m){v.value!==t.modelValue&&n("update:modelValue",v.value),m===!0&&n("change",v.value)}function H(){return l.value.getBoundingClientRect()}function U(m,k=o.dragging.value){const h=e.getDraggingRatio(m,k);v.value=e.convertRatioToModel(h),i.value=t.snap!==!0||t.step===0?h:e.convertModelToRatio(v.value)}function Q(){o.focus.value=!0}function $(m){if(!pt.includes(m.keyCode))return;dt(m);const k=([34,33].includes(m.keyCode)?10:1)*o.step.value,h=([34,37,40].includes(m.keyCode)?-1:1)*(o.isReversed.value===!0?-1:1)*(t.vertical===!0?-1:1)*k;v.value=re(parseFloat((v.value+h).toFixed(o.decimals.value)),o.innerMin.value,o.innerMax.value),q()}return()=>{const m=e.getContent(M,o.tabindex,p,k=>{k.push(s())});return d("div",{ref:l,class:o.classes.value+(t.modelValue===null?" q-slider--no-value":""),...o.attributes.value,"aria-valuenow":t.modelValue},m)}}});const ma=/^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;function ot({r:t,g:n,b:u,a:o}){const e=o!==void 0;if(t=Math.round(t),n=Math.round(n),u=Math.round(u),t>255||n>255||u>255||e&&o>100)throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");return o=e?(Math.round(255*o/100)|1<<8).toString(16).slice(1):"","#"+(u|n<<8|t<<16|1<<24).toString(16).slice(1)+o}function ut({r:t,g:n,b:u,a:o}){return`rgb${o!==void 0?"a":""}(${t},${n},${u}${o!==void 0?","+o/100:""})`}function ht(t){if(typeof t!="string")throw new TypeError("Expected a string");t=t.replace(/^#/,""),t.length===3?t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]:t.length===4&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const n=parseInt(t,16);return t.length>6?{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:Math.round((n&255)/2.55)}:{r:n>>16,g:n>>8&255,b:n&255}}function st({h:t,s:n,v:u,a:o}){let e,l,i;n=n/100,u=u/100,t=t/360;const v=Math.floor(t*6),b=t*6-v,f=u*(1-n),x=u*(1-b*n),M=u*(1-(1-b)*n);switch(v%6){case 0:e=u,l=M,i=f;break;case 1:e=x,l=u,i=f;break;case 2:e=f,l=u,i=M;break;case 3:e=f,l=x,i=u;break;case 4:e=M,l=f,i=u;break;case 5:e=u,l=f,i=x;break}return{r:Math.round(e*255),g:Math.round(l*255),b:Math.round(i*255),a:o}}function Qe({r:t,g:n,b:u,a:o}){const e=Math.max(t,n,u),l=Math.min(t,n,u),i=e-l,v=e===0?0:i/e,b=e/255;let f;switch(e){case l:f=0;break;case t:f=n-u+i*(n<u?6:0),f/=6*i;break;case n:f=u-t+i*2,f/=6*i;break;case u:f=t-n+i*4,f/=6*i;break}return{h:Math.round(f*360),s:Math.round(v*100),v:Math.round(b*100),a:o}}function kt(t){if(typeof t!="string")throw new TypeError("Expected a string");const n=t.replace(/ /g,""),u=ma.exec(n);if(u===null)return ht(n);const o={r:Math.min(255,parseInt(u[2],10)),g:Math.min(255,parseInt(u[3],10)),b:Math.min(255,parseInt(u[4],10))};if(u[1]){const e=parseFloat(u[5]);o.a=Math.min(1,isNaN(e)===!0?1:e)*100}return o}function ba(t){if(typeof t!="string"&&(!t||t.r===void 0))throw new TypeError("Expected a string or a {r, g, b} object as color");const n=typeof t=="string"?kt(t):t,u=n.r/255,o=n.g/255,e=n.b/255,l=u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4),i=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),v=e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4);return .2126*l+.7152*i+.0722*v}const pa=["rgb(255,204,204)","rgb(255,230,204)","rgb(255,255,204)","rgb(204,255,204)","rgb(204,255,230)","rgb(204,255,255)","rgb(204,230,255)","rgb(204,204,255)","rgb(230,204,255)","rgb(255,204,255)","rgb(255,153,153)","rgb(255,204,153)","rgb(255,255,153)","rgb(153,255,153)","rgb(153,255,204)","rgb(153,255,255)","rgb(153,204,255)","rgb(153,153,255)","rgb(204,153,255)","rgb(255,153,255)","rgb(255,102,102)","rgb(255,179,102)","rgb(255,255,102)","rgb(102,255,102)","rgb(102,255,179)","rgb(102,255,255)","rgb(102,179,255)","rgb(102,102,255)","rgb(179,102,255)","rgb(255,102,255)","rgb(255,51,51)","rgb(255,153,51)","rgb(255,255,51)","rgb(51,255,51)","rgb(51,255,153)","rgb(51,255,255)","rgb(51,153,255)","rgb(51,51,255)","rgb(153,51,255)","rgb(255,51,255)","rgb(255,0,0)","rgb(255,128,0)","rgb(255,255,0)","rgb(0,255,0)","rgb(0,255,128)","rgb(0,255,255)","rgb(0,128,255)","rgb(0,0,255)","rgb(128,0,255)","rgb(255,0,255)","rgb(245,0,0)","rgb(245,123,0)","rgb(245,245,0)","rgb(0,245,0)","rgb(0,245,123)","rgb(0,245,245)","rgb(0,123,245)","rgb(0,0,245)","rgb(123,0,245)","rgb(245,0,245)","rgb(214,0,0)","rgb(214,108,0)","rgb(214,214,0)","rgb(0,214,0)","rgb(0,214,108)","rgb(0,214,214)","rgb(0,108,214)","rgb(0,0,214)","rgb(108,0,214)","rgb(214,0,214)","rgb(163,0,0)","rgb(163,82,0)","rgb(163,163,0)","rgb(0,163,0)","rgb(0,163,82)","rgb(0,163,163)","rgb(0,82,163)","rgb(0,0,163)","rgb(82,0,163)","rgb(163,0,163)","rgb(92,0,0)","rgb(92,46,0)","rgb(92,92,0)","rgb(0,92,0)","rgb(0,92,46)","rgb(0,92,92)","rgb(0,46,92)","rgb(0,0,92)","rgb(46,0,92)","rgb(92,0,92)","rgb(255,255,255)","rgb(205,205,205)","rgb(178,178,178)","rgb(153,153,153)","rgb(127,127,127)","rgb(102,102,102)","rgb(76,76,76)","rgb(51,51,51)","rgb(25,25,25)","rgb(0,0,0)"],it="M5 5 h10 v10 h-10 v-10 z",ha="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";var ka=He({name:"QColor",props:{...ft,...gt,modelValue:String,defaultValue:String,defaultView:{type:String,default:"spectrum",validator:t=>["spectrum","tune","palette"].includes(t)},formatModel:{type:String,default:"auto",validator:t=>["auto","hex","rgb","hexa","rgba"].includes(t)},palette:Array,noHeader:Boolean,noHeaderTabs:Boolean,noFooter:Boolean,square:Boolean,flat:Boolean,bordered:Boolean,disable:Boolean,readonly:Boolean},emits:["update:modelValue","change"],setup(t,{emit:n}){const{proxy:u}=Se(),{$q:o}=u,e=vt(t,o),{getCache:l}=Kt(),i=I(null),v=I(null),b=c(()=>t.formatModel==="auto"?null:t.formatModel.indexOf("hex")>-1),f=c(()=>t.formatModel==="auto"?null:t.formatModel.indexOf("a")>-1),x=I(t.formatModel==="auto"?t.modelValue===void 0||t.modelValue===null||t.modelValue===""||t.modelValue.startsWith("#")?"hex":"rgb":t.formatModel.startsWith("hex")?"hex":"rgb"),M=I(t.defaultView),s=I(z(t.modelValue||t.defaultValue)),p=c(()=>t.disable!==!0&&t.readonly!==!0),q=c(()=>t.modelValue===void 0||t.modelValue===null||t.modelValue===""||t.modelValue.startsWith("#")),H=c(()=>b.value!==null?b.value:q.value),U=c(()=>({type:"hidden",name:t.name,value:s.value[H.value===!0?"hex":"rgb"]})),Q=mt(U),$=c(()=>f.value!==null?f.value:s.value.a!==void 0),m=c(()=>({backgroundColor:s.value.rgb||"#000"})),k=c(()=>`q-color-picker__header-content q-color-picker__header-content--${(s.value.a!==void 0&&s.value.a<65?!0:ba(s.value)>.4)?"light":"dark"}`),h=c(()=>({background:`hsl(${s.value.h},100%,50%)`})),E=c(()=>({top:`${100-s.value.v}%`,[o.lang.rtl===!0?"right":"left"]:`${s.value.s}%`})),_=c(()=>t.palette!==void 0&&t.palette.length!==0?t.palette:pa),G=c(()=>"q-color-picker"+(t.bordered===!0?" q-color-picker--bordered":"")+(t.square===!0?" q-color-picker--square no-border-radius":"")+(t.flat===!0?" q-color-picker--flat no-shadow":"")+(t.disable===!0?" disabled":"")+(e.value===!0?" q-color-picker--dark q-dark":"")),W=c(()=>t.disable===!0?{"aria-disabled":"true"}:t.readonly===!0?{"aria-readonly":"true"}:{}),P=c(()=>[[bt,ve,void 0,{prevent:!0,stop:!0,mouse:!0}]]);ze(()=>t.modelValue,a=>{const g=z(a||t.defaultValue);g.hex!==s.value.hex&&(s.value=g)}),ze(()=>t.defaultValue,a=>{if(!t.modelValue&&a){const g=z(a);g.hex!==s.value.hex&&(s.value=g)}});function F(a,g){s.value.hex=ot(a),s.value.rgb=ut(a),s.value.r=a.r,s.value.g=a.g,s.value.b=a.b,s.value.a=a.a;const S=s.value[H.value===!0?"hex":"rgb"];n("update:modelValue",S),g===!0&&n("change",S)}function z(a){const g=f.value!==void 0?f.value:t.formatModel==="auto"?null:t.formatModel.indexOf("a")>-1;if(typeof a!="string"||a.length===0||ta.anyColor(a.replace(/ /g,""))!==!0)return{h:0,s:0,v:0,r:0,g:0,b:0,a:g===!0?100:void 0,hex:void 0,rgb:void 0};const S=kt(a);return g===!0&&S.a===void 0&&(S.a=100),S.hex=ot(S),S.rgb=ut(S),Object.assign(S,Qe(S))}function Z(a,g,S){const w=i.value;if(w===null)return;const N=w.clientWidth,C=w.clientHeight,j=w.getBoundingClientRect();let R=Math.min(N,Math.max(0,a-j.left));o.lang.rtl===!0&&(R=N-R);const ee=Math.min(C,Math.max(0,g-j.top)),ge=Math.round(100*R/N),me=Math.round(100*Math.max(0,Math.min(1,-(ee/C)+1))),be=st({h:s.value.h,s:ge,v:me,a:$.value===!0?s.value.a:void 0});s.value.s=ge,s.value.v=me,F(be,S)}function oe(a,g){const S=Math.round(a),w=st({h:S,s:s.value.s,v:s.value.v,a:$.value===!0?s.value.a:void 0});s.value.h=S,F(w,g)}function T(a,g,S,w,N){if(w!==void 0&&K(w),!/^[0-9]+$/.test(a)){N===!0&&u.$forceUpdate();return}const C=Math.floor(Number(a));if(C<0||C>S){N===!0&&u.$forceUpdate();return}const j={r:g==="r"?C:s.value.r,g:g==="g"?C:s.value.g,b:g==="b"?C:s.value.b,a:$.value===!0?g==="a"?C:s.value.a:void 0};if(g!=="a"){const R=Qe(j);s.value.h=R.h,s.value.s=R.s,s.value.v=R.v}if(F(j,N),w!==void 0&&N!==!0&&w.target.selectionEnd!==void 0){const R=w.target.selectionEnd;je(()=>{w.target.setSelectionRange(R,R)})}}function de(a,g){let S;const w=a.target.value;if(K(a),x.value==="hex"){if(w.length!==($.value===!0?9:7)||!/^#[0-9A-Fa-f]+$/.test(w))return!0;S=ht(w)}else{let C;if(w.endsWith(")"))if($.value!==!0&&w.startsWith("rgb(")){if(C=w.substring(4,w.length-1).split(",").map(j=>parseInt(j,10)),C.length!==3||!/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(w))return!0}else if($.value===!0&&w.startsWith("rgba(")){if(C=w.substring(5,w.length-1).split(","),C.length!==4||!/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(w))return!0;for(let R=0;R<3;R++){const ee=parseInt(C[R],10);if(ee<0||ee>255)return!0;C[R]=ee}const j=parseFloat(C[3]);if(j<0||j>1)return!0;C[3]=j}else return!0;else return!0;if(C[0]<0||C[0]>255||C[1]<0||C[1]>255||C[2]<0||C[2]>255||$.value===!0&&(C[3]<0||C[3]>1))return!0;S={r:C[0],g:C[1],b:C[2],a:$.value===!0?C[3]*100:void 0}}const N=Qe(S);if(s.value.h=N.h,s.value.s=N.s,s.value.v=N.v,F(S,g),g!==!0){const C=a.target.selectionEnd;je(()=>{a.target.setSelectionRange(C,C)})}}function le(a){const g=z(a),S={r:g.r,g:g.g,b:g.b,a:g.a};S.a===void 0&&(S.a=s.value.a),s.value.h=g.h,s.value.s=g.s,s.value.v=g.v,F(S,!0)}function ve(a){a.isFinal?Z(a.position.left,a.position.top,!0):xe(a)}const xe=It(a=>{Z(a.position.left,a.position.top)},20);function Me(a){Z(a.pageX-window.pageXOffset,a.pageY-window.pageYOffset,!0)}function Ve(a){Z(a.pageX-window.pageXOffset,a.pageY-window.pageYOffset)}function fe(a){v.value!==null&&(v.value.$el.style.opacity=a?1:0)}function qe(){const a=[];return t.noHeaderTabs!==!0&&a.push(d(tt,{class:"q-color-picker__header-tabs",modelValue:x.value,dense:!0,align:"justify",...l("topVTab",{"onUpdate:modelValue":g=>{x.value=g}})},()=>[d(ie,{label:"HEX"+($.value===!0?"A":""),name:"hex",ripple:!1}),d(ie,{label:"RGB"+($.value===!0?"A":""),name:"rgb",ripple:!1})])),a.push(d("div",{class:"q-color-picker__header-banner row flex-center no-wrap"},[d("input",{class:"fit",value:s.value[x.value],...p.value!==!0?{readonly:!0}:{},...l("topIn",{onInput:g=>{fe(de(g)===!0)},onChange:K,onBlur:g=>{de(g,!0)===!0&&u.$forceUpdate(),fe(!1)}})}),d(Tt,{ref:v,class:"q-color-picker__error-icon absolute no-pointer-events",name:o.iconSet.type.negative})])),d("div",{class:"q-color-picker__header relative-position overflow-hidden"},[d("div",{class:"q-color-picker__header-bg absolute-full"}),d("div",{class:k.value,style:m.value},a)])}function $e(){return d(Xt,{modelValue:M.value,animated:!0},()=>[d(Ne,{class:"q-color-picker__spectrum-tab overflow-hidden",name:"spectrum"},Ae),d(Ne,{class:"q-pa-md q-color-picker__tune-tab",name:"tune"},Ee),d(Ne,{class:"q-color-picker__palette-tab",name:"palette"},Ie)])}function Be(){return d("div",{class:"q-color-picker__footer relative-position overflow-hidden"},[d(tt,{class:"absolute-full",modelValue:M.value,dense:!0,align:"justify",...l("ftIn",{"onUpdate:modelValue":a=>{M.value=a}})},()=>[d(ie,{icon:o.iconSet.colorPicker.spectrum,name:"spectrum",ripple:!1}),d(ie,{icon:o.iconSet.colorPicker.tune,name:"tune",ripple:!1}),d(ie,{icon:o.iconSet.colorPicker.palette,name:"palette",ripple:!1})])])}function Ae(){const a={ref:i,class:"q-color-picker__spectrum non-selectable relative-position cursor-pointer"+(p.value!==!0?" readonly":""),style:h.value,...p.value===!0?{onClick:Me,onMousedown:Ve}:{}},g=[d("div",{style:{paddingBottom:"100%"}}),d("div",{class:"q-color-picker__spectrum-white absolute-full"}),d("div",{class:"q-color-picker__spectrum-black absolute-full"}),d("div",{class:"absolute",style:E.value},[s.value.hex!==void 0?d("div",{class:"q-color-picker__spectrum-circle"}):null])],S=[d(ne,{class:"q-color-picker__hue non-selectable",modelValue:s.value.h,min:0,max:360,trackSize:"8px",innerTrackColor:"transparent",selectionColor:"transparent",readonly:p.value!==!0,thumbPath:it,"onUpdate:modelValue":oe,...l("lazyhue",{onChange:w=>oe(w,!0)})})];return $.value===!0&&S.push(d(ne,{class:"q-color-picker__alpha non-selectable",modelValue:s.value.a,min:0,max:100,trackSize:"8px",trackColor:"white",innerTrackColor:"transparent",selectionColor:"transparent",trackImg:ha,readonly:p.value!==!0,hideSelection:!0,thumbPath:it,...l("alphaSlide",{"onUpdate:modelValue":w=>T(w,"a",100),onChange:w=>T(w,"a",100,void 0,!0)})})),[ct("div",a,g,"spec",p.value,()=>P.value),d("div",{class:"q-color-picker__sliders"},S)]}function Ee(){return[d("div",{class:"row items-center no-wrap"},[d("div","R"),d(ne,{modelValue:s.value.r,min:0,max:255,color:"red",dark:e.value,readonly:p.value!==!0,...l("rSlide",{"onUpdate:modelValue":a=>T(a,"r",255),onChange:a=>T(a,"r",255,void 0,!0)})}),d("input",{value:s.value.r,maxlength:3,readonly:p.value!==!0,onChange:K,...l("rIn",{onInput:a=>T(a.target.value,"r",255,a),onBlur:a=>T(a.target.value,"r",255,a,!0)})})]),d("div",{class:"row items-center no-wrap"},[d("div","G"),d(ne,{modelValue:s.value.g,min:0,max:255,color:"green",dark:e.value,readonly:p.value!==!0,...l("gSlide",{"onUpdate:modelValue":a=>T(a,"g",255),onChange:a=>T(a,"g",255,void 0,!0)})}),d("input",{value:s.value.g,maxlength:3,readonly:p.value!==!0,onChange:K,...l("gIn",{onInput:a=>T(a.target.value,"g",255,a),onBlur:a=>T(a.target.value,"g",255,a,!0)})})]),d("div",{class:"row items-center no-wrap"},[d("div","B"),d(ne,{modelValue:s.value.b,min:0,max:255,color:"blue",readonly:p.value!==!0,dark:e.value,...l("bSlide",{"onUpdate:modelValue":a=>T(a,"b",255),onChange:a=>T(a,"b",255,void 0,!0)})}),d("input",{value:s.value.b,maxlength:3,readonly:p.value!==!0,onChange:K,...l("bIn",{onInput:a=>T(a.target.value,"b",255,a),onBlur:a=>T(a.target.value,"b",255,a,!0)})})]),$.value===!0?d("div",{class:"row items-center no-wrap"},[d("div","A"),d(ne,{modelValue:s.value.a,color:"grey",readonly:p.value!==!0,dark:e.value,...l("aSlide",{"onUpdate:modelValue":a=>T(a,"a",100),onChange:a=>T(a,"a",100,void 0,!0)})}),d("input",{value:s.value.a,maxlength:3,readonly:p.value!==!0,onChange:K,...l("aIn",{onInput:a=>T(a.target.value,"a",100,a),onBlur:a=>T(a.target.value,"a",100,a,!0)})})]):null]}function Ie(){const a=g=>d("div",{class:"q-color-picker__cube col-auto",style:{backgroundColor:g},...p.value===!0?l("palette#"+g,{onClick:()=>{le(g)}}):{}});return[d("div",{class:"row items-center q-color-picker__palette-rows"+(p.value===!0?" q-color-picker__palette-rows--editable":"")},_.value.map(a))]}return()=>{const a=[$e()];return t.name!==void 0&&t.disable!==!0&&Q(a,"push"),t.noHeader!==!0&&a.unshift(qe()),t.noFooter!==!0&&a.push(Be()),d("div",{class:G.value,...W.value},a)}}});function ce(t,n=new WeakMap){if(Object(t)!==t)return t;if(n.has(t))return n.get(t);const u=t instanceof Date?new Date(t):t instanceof RegExp?new RegExp(t.source,t.flags):t instanceof Set?new Set:t instanceof Map?new Map:typeof t.constructor!="function"?Object.create(null):t.prototype!==void 0&&typeof t.prototype.constructor=="function"?t:new t.constructor;if(typeof t.constructor=="function"&&typeof t.valueOf=="function"){const o=t.valueOf();if(Object(o)!==o){const e=new t.constructor(o);return n.set(t,e),e}}return n.set(t,u),t instanceof Set?t.forEach(o=>{u.add(ce(o,n))}):t instanceof Map&&t.forEach((o,e)=>{u.set(e,ce(o,n))}),Object.assign(u,...Object.keys(t).map(o=>({[o]:ce(t[o],n)})))}var ya=He({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(t,{slots:n,emit:u}){const{proxy:o}=Se(),{$q:e}=o,l=I(null),i=I(""),v=I("");let b=!1;const f=c(()=>Lt({initialValue:i.value,validate:t.validate,set:x,cancel:M,updatePosition:s},"value",()=>v.value,k=>{v.value=k}));function x(){t.validate(v.value)!==!1&&(p()===!0&&(u("save",v.value,i.value),u("update:modelValue",v.value)),q())}function M(){p()===!0&&u("cancel",v.value,i.value),q()}function s(){je(()=>{l.value.updatePosition()})}function p(){return Ft(v.value,i.value)===!1}function q(){b=!0,l.value.hide()}function H(){b=!1,i.value=ce(t.modelValue),v.value=ce(t.modelValue),u("beforeShow")}function U(){u("show")}function Q(){b===!1&&p()===!0&&(t.autoSave===!0&&t.validate(v.value)===!0?(u("save",v.value,i.value),u("update:modelValue",v.value)):u("cancel",v.value,i.value)),u("beforeHide")}function $(){u("hide")}function m(){const k=n.default!==void 0?[].concat(n.default(f.value)):[];return t.title&&k.unshift(d("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},t.title)),t.buttons===!0&&k.push(d("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[d(J,{flat:!0,color:t.color,label:t.labelCancel||e.lang.label.cancel,onClick:M}),d(J,{flat:!0,color:t.color,label:t.labelSet||e.lang.label.set,onClick:x})])),k}return Object.assign(o,{set:x,cancel:M,show(k){l.value!==null&&l.value.show(k)},hide(k){l.value!==null&&l.value.hide(k)},updatePosition:s}),()=>{if(t.disable!==!0)return d(Bt,{ref:l,class:"q-popup-edit",cover:t.cover,onBeforeShow:H,onShow:U,onBeforeHide:Q,onHide:$,onEscapeKey:M},m)}}});const we=t=>(Ht("data-v-4ad391b3"),t=t(),Yt(),t),Ca={class:"full"},_a={class:"header"},Sa={class:"text-h6 fontOswald"},wa={class:"container"},xa=we(()=>O("label",null,"Engine: ",-1)),Ma=["onUpdate:modelValue"],Va=["value"],qa=we(()=>O("label",null,"Display Name: ",-1)),$a=["onUpdate:modelValue"],Ba=we(()=>O("label",null,"Color: ",-1)),Aa=["onUpdate:modelValue"],Ea={class:"text-grey-8 q-gutter-xs"},Ia=we(()=>O("div",{class:"text-h6"},"Settings",-1)),Ta={for:"'settings-' + setting.name"},Ra={key:0},Pa=["id","onUpdate:modelValue"],Oa={key:1},Da=["onUpdate:modelValue"],La=["value"],Fa=Ut({__name:"SettingsPage",setup(t){const n=I(""),u=Qt(),o=I([]),e=I([]),l=I(!1),i=I([]),v=I({});let b=-1,f=na();zt(async()=>{n.value=u.currentRoute.value.params.name,e.value=Ce.getEngines(),console.log(n.value);const m=await ra(u.currentRoute.value.params.name);o.value=m});const x=()=>{const m=o.value,k={engine:e.value[0],displayName:e.value[0],settings:[]};m.push(k),o.value=m},M=m=>{oa(o.value,m)},s=m=>{ua(o.value,m)},p=m=>{const k=o.value;k.splice(m,1),o.value=k},q=async()=>{const m=JSON.parse(JSON.stringify(o.value));await f.setItem(n.value+":settings",m),alert("Saved")},H=()=>{b!=-1&&(o.value[b].settings=JSON.parse(JSON.stringify(i.value)))},U=async(m,k)=>{var W;b=m,i.value;const h=Ce.getSupportedSettings(k),E=Ce.getDefaultSettings(k),_=o.value[b].settings,G=[];for(let P=_.length-1;P>=0;P--){const F=_[P];let z=!1;for(const Z of h)if(F.name===Z.name){z=!0;break}z===!1&&_.splice(P,1)}for(const P of h){let F=!1;P.type==="select"&&G.push(P.name);for(const z of _)if(z.name===P.name){F=!0;break}if(!F){const z=(W=E[P.name])!=null?W:"";_.push({name:P.name,value:z,type:P.type})}}i.value=_,$(G,k),l.value=!0},Q=m=>v.value[m],$=async(m,k)=>{const h={};for(const E of m){const _=await Ce.getSettingOptions(k,E,i.value);h[E]=_}v.value=h};return(m,k)=>(Y(),X(se,null,[V(Jt,null,{default:L(()=>[O("div",Ca,[O("div",_a,[O("div",Sa,ke(n.value),1)]),O("div",wa,[V(At,{bordered:"",class:"rounded-borders"},{default:L(()=>[V(pe,{header:""},{default:L(()=>[jt("Barcode Reader Configuration")]),_:1}),(Y(!0),X(se,null,ye(o.value,(h,E)=>(Y(),X("div",{key:E},[V(Xe,null,{default:L(()=>[V(Ke,{top:""},{default:L(()=>[V(pe,null,{default:L(()=>[xa,ae(O("select",{"onUpdate:modelValue":_=>h.engine=_},[(Y(!0),X(se,null,ye(e.value,_=>(Y(),X("option",{key:"config-"+_,value:_},ke(_),9,Va))),128))],8,Ma),[[We,h.engine]])]),_:2},1024),V(pe,{lines:"1"},{default:L(()=>[qa,ae(O("input",{type:"text","onUpdate:modelValue":_=>h.displayName=_},null,8,$a),[[Fe,h.displayName]])]),_:2},1024),V(pe,{lines:"1"},{default:L(()=>[Ba,ae(O("input",{type:"text","onUpdate:modelValue":_=>h.color=_},null,8,Aa),[[Fe,h.color]]),O("span",null,[V(J,{class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"colorize"}),V(ya,{modelValue:h.color,"onUpdate:modelValue":_=>h.color=_,"auto-save":""},{default:L(_=>[V(ka,{modelValue:_.value,"onUpdate:modelValue":G=>_.value=G},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]),_:2},1024),V(Ke,{top:"",side:""},{default:L(()=>[O("div",Ea,[V(J,{class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"arrow_upward",onClick:_=>M(E)},null,8,["onClick"]),V(J,{class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"arrow_downward",onClick:_=>s(E)},null,8,["onClick"]),V(J,{class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"delete",onClick:_=>p(E)},null,8,["onClick"]),V(J,{class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"settings",onClick:_=>U(E,h.engine)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024),V(la,{spaced:""})]))),128)),V(Xe,null,{default:L(()=>[V(at,{label:"Add Configuration",onClick:x}),V(at,{style:{"margin-left":"10px"},label:"Save",onClick:q})]),_:1})]),_:1})])])]),_:1}),V(Zt,{modelValue:l.value,"onUpdate:modelValue":k[1]||(k[1]=h=>l.value=h)},{default:L(()=>[V(ea,null,{default:L(()=>[V(lt,null,{default:L(()=>[Ia]),_:1}),V(lt,{class:"q-pt-none"},{default:L(()=>[(Y(!0),X(se,null,ye(i.value,h=>(Y(),X("div",{key:h.name},[O("div",null,[O("label",Ta,ke(h.name+":"),1)]),h.type==="string"?(Y(),X("div",Ra,[ae(O("textarea",{id:"settings-"+h.name,"onUpdate:modelValue":E=>h.value=E},null,8,Pa),[[Fe,h.value]])])):Je("",!0),h.type==="select"?(Y(),X("div",Oa,[ae(O("select",{"onUpdate:modelValue":E=>h.value=E},[(Y(!0),X(se,null,ye(Q(h.name),E=>(Y(),X("option",{key:"engine-"+E,value:E},ke(E),9,La))),128))],8,Da),[[We,h.value]])])):Je("",!0)]))),128))]),_:1}),V(aa,{align:"right"},{default:L(()=>[ae(V(J,{flat:"",color:"primary",label:"Save",onClick:k[0]||(k[0]=h=>H())},null,512),[[nt]]),ae(V(J,{flat:"",color:"primary",label:"Close"},null,512),[[nt]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});var Wa=Nt(Fa,[["__scopeId","data-v-4ad391b3"]]);export{Wa as default};
