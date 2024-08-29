import{h as ct}from"./index-AMbXrNWD.js";import{a as Ut}from"./dom-HQMx_av9.js";import{d as Xt}from"./debounce-QhH3kU96.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const Et=["top","right","bottom","left"],wt=["start","end"],yt=Et.reduce((t,e)=>t.concat(e,e+"-"+wt[0],e+"-"+wt[1]),[]),Y=Math.min,z=Math.max,J=Math.round,Z=Math.floor,V=t=>({x:t,y:t}),Yt={left:"right",right:"left",bottom:"top",top:"bottom"},qt={start:"end",end:"start"};function at(t,e,n){return z(t,Y(e,n))}function U(t,e){return typeof t=="function"?t(e):t}function N(t){return t.split("-")[0]}function $(t){return t.split("-")[1]}function Ft(t){return t==="x"?"y":"x"}function dt(t){return t==="y"?"height":"width"}function it(t){return["top","bottom"].includes(N(t))?"y":"x"}function mt(t){return Ft(it(t))}function kt(t,e,n){n===void 0&&(n=!1);const o=$(t),i=mt(t),s=dt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=et(r)),[r,et(r)]}function Gt(t){const e=et(t);return[tt(t),e,tt(e)]}function tt(t){return t.replace(/start|end/g,e=>qt[e])}function Kt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Qt(t,e,n,o){const i=$(t);let s=Kt(N(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(tt)))),s}function et(t){return t.replace(/left|right|bottom|top/g,e=>Yt[e])}function Zt(t){return{top:0,right:0,bottom:0,left:0,...t}}function $t(t){return typeof t!="number"?Zt(t):{top:t,right:t,bottom:t,left:t}}function nt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function xt(t,e,n){let{reference:o,floating:i}=t;const s=it(e),r=mt(e),c=dt(r),l=N(e),a=s==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,h=o[c]/2-i[c]/2;let f;switch(l){case"top":f={x:d,y:o.y-i.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch($(e)){case"start":f[r]-=h*(n&&a?-1:1);break;case"end":f[r]+=h*(n&&a?-1:1);break}return f}const Jt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=xt(a,o,l),h=o,f={},m=0;for(let g=0;g<c.length;g++){const{name:w,fn:p}=c[g],{x:y,y:x,data:b,reset:v}=await p({x:d,y:u,initialPlacement:o,placement:h,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});d=y??d,u=x??u,f={...f,[w]:{...f[w],...b}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(h=v.placement),v.rects&&(a=v.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=xt(a,h,l)),g=-1)}return{x:d,y:u,placement:h,strategy:i,middlewareData:f}};async function G(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:h=!1,padding:f=0}=U(e,t),m=$t(f),w=c[h?u==="floating"?"reference":"floating":u],p=nt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),y=u==="floating"?{...r.floating,x:o,y:i}:r.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},v=nt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:x,strategy:l}):y);return{top:(p.top-v.top+m.top)/b.y,bottom:(v.bottom-p.bottom+m.bottom)/b.y,left:(p.left-v.left+m.left)/b.x,right:(v.right-p.right+m.right)/b.x}}const te=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:c,middlewareData:l}=e,{element:a,padding:d=0}=U(t,e)||{};if(a==null)return{};const u=$t(d),h={x:n,y:o},f=mt(i),m=dt(f),g=await r.getDimensions(a),w=f==="y",p=w?"top":"left",y=w?"bottom":"right",x=w?"clientHeight":"clientWidth",b=s.reference[m]+s.reference[f]-h[f]-s.floating[m],v=h[f]-s.reference[f],R=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let O=R?R[x]:0;(!O||!await(r.isElement==null?void 0:r.isElement(R)))&&(O=c.floating[x]||s.floating[m]);const L=b/2-v/2,E=O/2-g[m]/2-1,A=Y(u[p],E),D=Y(u[y],E),P=A,I=O-g[m]-D,S=O/2-g[m]/2+L,F=at(P,S,I),k=!l.arrow&&$(i)!=null&&S!==F&&s.reference[m]/2-(S<P?A:D)-g[m]/2<0,B=k?S<P?S-P:S-I:0;return{[f]:h[f]+B,data:{[f]:F,centerOffset:S-F-B,...k&&{alignmentOffset:B}},reset:k}}});function ee(t,e,n){return(t?[...n.filter(i=>$(i)===t),...n.filter(i=>$(i)!==t)]:n.filter(i=>N(i)===i)).filter(i=>t?$(i)===t||(e?tt(i)!==i:!1):!0)}const ne=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:c,platform:l,elements:a}=e,{crossAxis:d=!1,alignment:u,allowedPlacements:h=yt,autoAlignment:f=!0,...m}=U(t,e),g=u!==void 0||h===yt?ee(u||null,f,h):h,w=await G(e,m),p=((n=r.autoPlacement)==null?void 0:n.index)||0,y=g[p];if(y==null)return{};const x=kt(y,s,await(l.isRTL==null?void 0:l.isRTL(a.floating)));if(c!==y)return{reset:{placement:g[0]}};const b=[w[N(y)],w[x[0]],w[x[1]]],v=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:y,overflows:b}],R=g[p+1];if(R)return{data:{index:p+1,overflows:v},reset:{placement:R}};const O=v.map(A=>{const D=$(A.placement);return[A.placement,D&&d?A.overflows.slice(0,2).reduce((P,I)=>P+I,0):A.overflows[0],A.overflows]}).sort((A,D)=>A[1]-D[1]),E=((i=O.filter(A=>A[2].slice(0,$(A[0])?2:3).every(D=>D<=0))[0])==null?void 0:i[0])||O[0][0];return E!==c?{data:{index:p+1,overflows:v},reset:{placement:E}}:{}}}},oe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...w}=U(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=N(i),y=N(c)===c,x=await(l.isRTL==null?void 0:l.isRTL(a.floating)),b=h||(y||!g?[et(c)]:Gt(c));!h&&m!=="none"&&b.push(...Qt(c,g,m,x));const v=[c,...b],R=await G(e,w),O=[];let L=((o=s.flip)==null?void 0:o.overflows)||[];if(d&&O.push(R[p]),u){const P=kt(i,r,x);O.push(R[P[0]],R[P[1]])}if(L=[...L,{placement:i,overflows:O}],!O.every(P=>P<=0)){var E,A;const P=(((E=s.flip)==null?void 0:E.index)||0)+1,I=v[P];if(I)return{data:{index:P,overflows:L},reset:{placement:I}};let S=(A=L.filter(F=>F.overflows[0]<=0).sort((F,k)=>F.overflows[1]-k.overflows[1])[0])==null?void 0:A.placement;if(!S)switch(f){case"bestFit":{var D;const F=(D=L.map(k=>[k.placement,k.overflows.filter(B=>B>0).reduce((B,jt)=>B+jt,0)]).sort((k,B)=>k[1]-B[1])[0])==null?void 0:D[0];F&&(S=F);break}case"initialPlacement":S=c;break}if(i!==S)return{reset:{placement:S}}}return{}}}};function vt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function bt(t){return Et.some(e=>t[e]>=0)}const ie=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=U(t,e);switch(o){case"referenceHidden":{const s=await G(e,{...i,elementContext:"reference"}),r=vt(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:bt(r)}}}case"escaped":{const s=await G(e,{...i,altBoundary:!0}),r=vt(s,n.floating);return{data:{escapedOffsets:r,escaped:bt(r)}}}default:return{}}}}};async function re(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=N(n),c=$(n),l=it(n)==="y",a=["left","top"].includes(r)?-1:1,d=s&&l?-1:1,u=U(e,t);let{mainAxis:h,crossAxis:f,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof m=="number"&&(f=c==="end"?m*-1:m),l?{x:f*d,y:h*a}:{x:h*a,y:f*d}}const se=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,l=await re(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},ce=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:p,y}=w;return{x:p,y}}},...l}=U(t,e),a={x:n,y:o},d=await G(e,l),u=it(N(i)),h=Ft(u);let f=a[h],m=a[u];if(s){const w=h==="y"?"top":"left",p=h==="y"?"bottom":"right",y=f+d[w],x=f-d[p];f=at(y,f,x)}if(r){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",y=m+d[w],x=m-d[p];m=at(y,m,x)}const g=c.fn({...e,[h]:f,[u]:m});return{...g,data:{x:g.x-n,y:g.y-o}}}}};function _(t){return Mt(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function H(t){var e;return(e=(Mt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Mt(t){return t instanceof Node||t instanceof C(t).Node}function W(t){return t instanceof Element||t instanceof C(t).Element}function M(t){return t instanceof HTMLElement||t instanceof C(t).HTMLElement}function Ot(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function Q(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function le(t){return["table","td","th"].includes(_(t))}function gt(t){const e=pt(),n=T(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ae(t){let e=q(t);for(;M(e)&&!rt(e);){if(gt(e))return e;e=q(e)}return null}function pt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rt(t){return["html","body","#document"].includes(_(t))}function T(t){return C(t).getComputedStyle(t)}function st(t){return W(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function q(t){if(_(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ot(t)&&t.host||H(t);return Ot(e)?e.host:e}function Bt(t){const e=q(t);return rt(e)?t.ownerDocument?t.ownerDocument.body:t.body:M(e)&&Q(e)?e:Bt(e)}function K(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Bt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=C(i);return s?e.concat(r,r.visualViewport||[],Q(i)?i:[],r.frameElement&&n?K(r.frameElement):[]):e.concat(i,K(i,[],n))}function Nt(t){const e=T(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=M(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=J(n)!==s||J(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function ht(t){return W(t)?t:t.contextElement}function X(t){const e=ht(t);if(!M(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Nt(e);let r=(s?J(n.width):n.width)/o,c=(s?J(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const fe=V(0);function Wt(t){const e=C(t);return!pt()||!e.visualViewport?fe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ue(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==C(t)?!1:e}function j(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ht(t);let r=V(1);e&&(o?W(o)&&(r=X(o)):r=X(t));const c=ue(s,n,o)?Wt(s):V(0);let l=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,d=i.width/r.x,u=i.height/r.y;if(s){const h=C(s),f=o&&W(o)?C(o):o;let m=h,g=m.frameElement;for(;g&&o&&f!==m;){const w=X(g),p=g.getBoundingClientRect(),y=T(g),x=p.left+(g.clientLeft+parseFloat(y.paddingLeft))*w.x,b=p.top+(g.clientTop+parseFloat(y.paddingTop))*w.y;l*=w.x,a*=w.y,d*=w.x,u*=w.y,l+=x,a+=b,m=C(g),g=m.frameElement}}return nt({width:d,height:u,x:l,y:a})}const de=[":popover-open",":modal"];function Ht(t){return de.some(e=>{try{return t.matches(e)}catch{return!1}})}function me(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=H(o),c=e?Ht(e.floating):!1;if(o===r||c&&s)return n;let l={scrollLeft:0,scrollTop:0},a=V(1);const d=V(0),u=M(o);if((u||!u&&!s)&&((_(o)!=="body"||Q(r))&&(l=st(o)),M(o))){const h=j(o);a=X(o),d.x=h.x+o.clientLeft,d.y=h.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+d.x,y:n.y*a.y-l.scrollTop*a.y+d.y}}function ge(t){return Array.from(t.getClientRects())}function Vt(t){return j(H(t)).left+st(t).scrollLeft}function pe(t){const e=H(t),n=st(t),o=t.ownerDocument.body,i=z(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=z(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Vt(t);const c=-n.scrollTop;return T(o).direction==="rtl"&&(r+=z(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function he(t,e){const n=C(t),o=H(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=pt();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function we(t,e){const n=j(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=M(t)?X(t):V(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=o*s.y;return{width:r,height:c,x:l,y:a}}function At(t,e,n){let o;if(e==="viewport")o=he(t,n);else if(e==="document")o=pe(H(t));else if(W(e))o=we(e,n);else{const i=Wt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return nt(o)}function _t(t,e){const n=q(t);return n===e||!W(n)||rt(n)?!1:T(n).position==="fixed"||_t(n,e)}function ye(t,e){const n=e.get(t);if(n)return n;let o=K(t,[],!1).filter(c=>W(c)&&_(c)!=="body"),i=null;const s=T(t).position==="fixed";let r=s?q(t):t;for(;W(r)&&!rt(r);){const c=T(r),l=gt(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Q(r)&&!l&&_t(t,r))?o=o.filter(d=>d!==r):i=c,r=q(r)}return e.set(t,o),o}function xe(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?ye(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((a,d)=>{const u=At(e,d,i);return a.top=z(u.top,a.top),a.right=Y(u.right,a.right),a.bottom=Y(u.bottom,a.bottom),a.left=z(u.left,a.left),a},At(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ve(t){const{width:e,height:n}=Nt(t);return{width:e,height:n}}function be(t,e,n){const o=M(e),i=H(e),s=n==="fixed",r=j(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=V(0);if(o||!o&&!s)if((_(e)!=="body"||Q(i))&&(c=st(e)),o){const u=j(e,!0,s,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else i&&(l.x=Vt(i));const a=r.left+c.scrollLeft-l.x,d=r.top+c.scrollTop-l.y;return{x:a,y:d,width:r.width,height:r.height}}function Rt(t,e){return!M(t)||T(t).position==="fixed"?null:e?e(t):t.offsetParent}function It(t,e){const n=C(t);if(!M(t)||Ht(t))return n;let o=Rt(t,e);for(;o&&le(o)&&T(o).position==="static";)o=Rt(o,e);return o&&(_(o)==="html"||_(o)==="body"&&T(o).position==="static"&&!gt(o))?n:o||ae(t)||n}const Oe=async function(t){const e=this.getOffsetParent||It,n=this.getDimensions;return{reference:be(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}};function Ae(t){return T(t).direction==="rtl"}const ft={convertOffsetParentRelativeRectToViewportRelativeRect:me,getDocumentElement:H,getClippingRect:xe,getOffsetParent:It,getElementRects:Oe,getClientRects:ge,getDimensions:ve,getScale:X,isElement:W,isRTL:Ae};function Re(t,e){let n=null,o;const i=H(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:a,top:d,width:u,height:h}=t.getBoundingClientRect();if(c||e(),!u||!h)return;const f=Z(d),m=Z(i.clientWidth-(a+u)),g=Z(i.clientHeight-(d+h)),w=Z(a),y={rootMargin:-f+"px "+-m+"px "+-g+"px "+-w+"px",threshold:z(0,Y(1,l))||1};let x=!0;function b(v){const R=v[0].intersectionRatio;if(R!==l){if(!x)return r();R?r(!1,R):o=setTimeout(()=>{r(!1,1e-7)},100)}x=!1}try{n=new IntersectionObserver(b,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,y)}n.observe(t)}return r(!0),s}function Pe(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=ht(t),d=i||s?[...a?K(a):[],...K(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const u=a&&c?Re(a,n):null;let h=-1,f=null;r&&(f=new ResizeObserver(p=>{let[y]=p;y&&y.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),n()}),a&&!l&&f.observe(a),f.observe(e));let m,g=l?j(t):null;l&&w();function w(){const p=j(t);g&&(p.x!==g.x||p.y!==g.y||p.width!==g.width||p.height!==g.height)&&n(),g=p,m=requestAnimationFrame(w)}return n(),()=>{var p;d.forEach(y=>{i&&y.removeEventListener("scroll",n),s&&y.removeEventListener("resize",n)}),u==null||u(),(p=f)==null||p.disconnect(),f=null,l&&cancelAnimationFrame(m)}}const Se=ne,Ce=ce,Pt=oe,Te=ie,Le=te,De=(t,e,n)=>{const o=new Map,i={platform:ft,...n},s={...i.platform,_c:o};return Jt(t,e,{...i,platform:s})};function Ee(t){return Fe(t)}function lt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Fe(t){for(let e=t;e;e=lt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=lt(t);e;e=lt(e)){if(!(e instanceof Element))continue;const n=getComputedStyle(e);if(n.display!=="contents"&&(n.position!=="static"||n.filter!=="none"||e.tagName==="BODY"))return e}return null}(function(){{const e=ft.getOffsetParent;ft.getOffsetParent=n=>e(n,Ee)}})();function St(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}const zt=async(t,{referenceEl:e,floatingEl:n,overlayPositioning:o="absolute",placement:i,flipDisabled:s,flipPlacements:r,offsetDistance:c,offsetSkidding:l,arrowEl:a,type:d})=>{var b;if(!e||!n)return null;const{x:u,y:h,placement:f,strategy:m,middlewareData:g}=await De(e,n,{strategy:o,placement:i==="auto"||i==="auto-start"||i==="auto-end"?void 0:Me(n,i),middleware:$e({placement:i,flipDisabled:s,flipPlacements:r,offsetDistance:c,offsetSkidding:l,arrowEl:a,type:d})});if(a&&g.arrow){const{x:v,y:R}=g.arrow,O=f.split("-")[0],L=v!=null?"left":"top",E=Ne[O],A={left:"",top:"",bottom:"",right:""};"floatingLayout"in t&&(t.floatingLayout=O==="left"||O==="right"?"horizontal":"vertical"),Object.assign(a.style,{...A,[L]:`${L=="left"?v:R}px`,[O]:"100%",transform:E})}const p=((b=g.hide)==null?void 0:b.referenceHidden)?"hidden":null,y=p?"none":null;n.setAttribute(ke,f);const{open:x}=t;Object.assign(n.style,{visibility:p,pointerEvents:y,position:m,transform:x?`translate(${St(u)}px,${St(h)}px)`:"",top:0,left:0})},ke="data-placement",Ct=100,Tt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],ze={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function $e({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:o,offsetSkidding:i,arrowEl:s,type:r}){const c=[Ce(),Te()];if(r==="menu")return[...c,Pt({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if(r==="popover"||r==="tooltip"){const l=[...c,se({mainAxis:typeof o=="number"?o:0,crossAxis:typeof i=="number"?i:0})];return t==="auto"||t==="auto-start"||t==="auto-end"?l.push(Se({alignment:t==="auto-start"?"start":t==="auto-end"?"end":null})):e||l.push(Pt(n?{fallbackPlacements:n}:{})),s&&l.push(Le({element:s})),l}return[]}function je(t,e){const n=t.filter(o=>Tt.includes(o));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${Tt.map(o=>`"${o}"`).join(", ").trim()}`,{el:e}),n}function Me(t,e){const n=["left","right"];return Ut(t)==="rtl"&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function Ue(t,e,n=!1){return t.open?(n?Be(t):zt)(t,e):void 0}function Be(t){let e=ot.get(t);return e||(e=Xt(zt,Ct,{leading:!0,maxWait:Ct}),ot.set(t,e),e)}const Ne={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"},ut=new WeakMap,ot=new WeakMap;function Xe(t,e,n){if(!n||!e)return;We(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning});const o=Pe;ut.set(t,o(e,n,()=>t.reposition()))}function We(t,e,n){var o,i;!n||!e||((o=ut.get(t))==null||o(),ut.delete(t),(i=ot.get(t))==null||i.cancel(),ot.delete(t))}const Lt=4,Ye=Math.ceil(Math.hypot(Lt,Lt));/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const Dt={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"},He={width:12,height:6,strokeWidth:1},qe=({floatingLayout:t,key:e,ref:n})=>{const{width:o,height:i,strokeWidth:s}=He,r=o/2,c=t==="vertical",l=`M0,0 H${o} L${o-r},${i} Q${r},${i} ${r},${i} Z`;return ct("svg",{"aria-hidden":"true",class:Dt.arrow,height:o,key:e,viewBox:`0 0 ${o} ${o+(c?0:s)}`,width:o+(c?s:0),ref:n},s>0&&ct("path",{class:Dt.arrowStroke,d:l,fill:"none","stroke-width":s+1}),ct("path",{d:l,stroke:"none"}))};export{ze as F,We as a,qe as b,Xe as c,Ye as d,je as f,Ue as r};
