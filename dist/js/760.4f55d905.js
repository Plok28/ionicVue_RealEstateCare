"use strict";(self["webpackChunkionicVue_RealEstateCare"]=self["webpackChunkionicVue_RealEstateCare"]||[]).push([[760],{8379:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return c}});var r=n(9185),a=n(3183),i=n(4692);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(e,t,n,c,o)=>{const s=e.ownerDocument.defaultView;let u=(0,a.i)(e);const l=e=>{const t=50,{startX:n}=e;return u?n>=s.innerWidth-t:n<=t},h=e=>u?-e.deltaX:e.deltaX,d=e=>u?-e.velocityX:e.velocityX,f=n=>(u=(0,a.i)(e),l(n)&&t()),k=e=>{const t=h(e),n=t/s.innerWidth;c(n)},w=e=>{const t=h(e),n=s.innerWidth,a=t/n,i=d(e),c=n/2,u=i>=0&&(i>.2||t>c),l=u?1-a:a,f=l*n;let k=0;if(f>5){const e=f/Math.abs(i);k=Math.min(e,540)}o(u,a<=0?.01:(0,r.h)(0,a,.9999),k)};return(0,i.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:f,onStart:n,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=760.4f55d905.js.map