(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7981:function(e,n,t){Promise.resolve().then(t.t.bind(t,6390,23)),Promise.resolve().then(t.bind(t,1339))},1339:function(e,n,t){"use strict";t.d(n,{AspectRatio:function(){return u}});var r=t(2265),i=t(6840),l=t(7437),o=r.forwardRef((e,n)=>{let{ratio:t=1,style:r,...o}=e;return(0,l.jsx)("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/t}%`},"data-radix-aspect-ratio-wrapper":"",children:(0,l.jsx)(i.WV.div,{...o,ref:n,style:{...r,position:"absolute",top:0,right:0,bottom:0,left:0}})})});o.displayName="AspectRatio";let u=o},6390:function(){},8575:function(e,n,t){"use strict";t.d(n,{F:function(){return l},e:function(){return o}});var r=t(2265);function i(e,n){if("function"==typeof e)return e(n);null!=e&&(e.current=n)}function l(...e){return n=>{let t=!1,r=e.map(e=>{let r=i(e,n);return t||"function"!=typeof r||(t=!0),r});if(t)return()=>{for(let n=0;n<r.length;n++){let t=r[n];"function"==typeof t?t():i(e[n],null)}}}}function o(...e){return r.useCallback(l(...e),e)}},6840:function(e,n,t){"use strict";t.d(n,{WV:function(){return u},jH:function(){return f}});var r=t(2265),i=t(4887),l=t(7053),o=t(7437),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=r.forwardRef((e,t)=>{let{asChild:r,...i}=e,u=r?l.g7:n;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,o.jsx)(u,{...i,ref:t})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function f(e,n){e&&i.flushSync(()=>e.dispatchEvent(n))}},7053:function(e,n,t){"use strict";t.d(n,{g7:function(){return o}});var r=t(2265),i=t(8575),l=t(7437),o=r.forwardRef((e,n)=>{let{children:t,...i}=e,o=r.Children.toArray(t),f=o.find(s);if(f){let e=f.props.children,t=o.map(n=>n!==f?n:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,l.jsx)(u,{...i,ref:n,children:r.isValidElement(e)?r.cloneElement(e,void 0,t):null})}return(0,l.jsx)(u,{...i,ref:n,children:t})});o.displayName="Slot";var u=r.forwardRef((e,n)=>{let{children:t,...l}=e;if(r.isValidElement(t)){let e,o;let u=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return r.cloneElement(t,{...function(e,n){let t={...n};for(let r in n){let i=e[r],l=n[r];/^on[A-Z]/.test(r)?i&&l?t[r]=(...e)=>{l(...e),i(...e)}:i&&(t[r]=i):"style"===r?t[r]={...i,...l}:"className"===r&&(t[r]=[i,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:n?(0,i.F)(n,u):u})}return r.Children.count(t)>1?r.Children.only(null):null});u.displayName="SlotClone";var f=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function s(e){return r.isValidElement(e)&&e.type===f}}},function(e){e.O(0,[683,971,117,744],function(){return e(e.s=7981)}),_N_E=e.O()}]);