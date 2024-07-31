import{aY as nn,aZ as Sn,aU as A,a_ as W,a$ as O,q as Pn,aR as pn,an as k,a2 as Gn,b0 as kn,s as Nn,b1 as C,b2 as v,b3 as sn,b4 as En,b5 as Tn,b6 as vn,b7 as an}from"./index-5-AWHvTS.js";var Q;function gn(n,t,e){return!kn(n,t,e)}function I(n,t,e){const s=gn(n,t,e);if(s&&!nn())throw new Nn("rasterprojectionhelper-project","projection engine is not loaded");return s}(function(n){n[n.None=0]="None",n[n.North=1]="North",n[n.South=2]="South",n[n.Both=3]="Both"})(Q||(Q={}));const rn=(n,t,e,s=0)=>{if(e[0]===1)return[0,0];let a=1,i=-1,o=1,f=-1;for(let u=0;u<n.length;u+=2)isNaN(n[u])||(a=a>n[u]?n[u]:a,i=i>n[u]?i:n[u],o=o>n[u+1]?n[u+1]:o,f=f>n[u+1]?f:n[u+1]);const{cols:l,rows:r}=t,c=(i-a)/l/e[0],M=(f-o)/r/e[1],y=2*s;let x=0,h=!1,p=[0,0];for(let u=0;u<l-3;u++){for(let R=0;R<r-3;R++){const m=u*r*2+2*R,g=(n[m]+n[m+4]+n[m+4*r]+n[m+4*r+4])/4,d=(n[m+1]+n[m+5]+n[m+4*r+1]+n[m+4*r+5])/4,w=Math.abs((g-n[m+2*r+2])/c),b=Math.abs((d-n[m+2*r+3])/M);if(w+b>x&&(x=w+b,p=[w,b]),y&&x>y){h=!0;break}}if(h)break}return p},Cn={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},F=32,Y=4,D=Y,H=new Map,V=new Map,q=500;async function Fn(){nn()||await Sn()}function _n(n,t,e){return I(n.spatialReference,t),e?an(t,n.spatialReference,n):an(n.spatialReference,t,n)}function ln(n,t,e,s=null){const a=n.spatialReference;if(a.equals(t))return n;I(a,t,s);const i=e.center,o=new A({xmin:i.x-n.x/2,xmax:i.x+n.x/2,ymin:i.y-n.y/2,ymax:i.y+n.y/2,spatialReference:a}),f=W(o,t,s),l=_(t);let r;if(f==null||l!=null&&f.width>=l){const c=O(a)/O(t);r={x:n.x*c,y:n.y*c}}else r={x:f.width,y:f.height};return r}function N(n,t=.01){return O(n)?t/O(n):0}function cn(n,t,e=null,s=!0){const a=n.spatialReference;if(a.equals(t))return n;I(a,t,e);const i=W(n,t,e);return s&&i&&yn([n],[i],a,t),i}function yn(n,t,e,s){const a=J(e,!0),i=J(s,!0),o=N(e,q),f=N(s,q);if(o&&a!=null&&i!=null)for(let l=0;l<n.length;l++){const r=t[l];if(!r)continue;const{x:c}=n[l],{x:M}=r;M>=i[1]-f&&Math.abs(c-a[0])<o?r.x-=i[1]-i[0]:M<=i[0]+f&&Math.abs(c-a[1])<o&&(r.x+=i[1]-i[0])}}function zn(n){const{inSR:t,outSR:e,datumTransformation:s,preferPE:a}=n;if(t.equals(e)){const{points:i}=tn(n,null);return i}return t.isWebMercator&&e.isWGS84||t.isWGS84&&e.isWebMercator?Wn(n):I(t,e,s)&&a&&(t.isGeographic||$(t)!=null)?fn(n):$n(n)}function $n(n){const{points:t}=tn(n,null),{inSR:e,outSR:s,datumTransformation:a}=n,i=t.map(f=>new k(f[0],f[1],e)),o=W(i,s,a);return a&&yn(i,o,e,s),o.map(f=>f?[f.x,f.y]:[NaN,NaN])}function fn(n){const{inSR:t,outSR:e,datumTransformation:s}=n,a=$(t),{points:i,mask:o}=tn(n,a);if(!t.isGeographic){const l=t.wkid?C.coordsys(t.wkid):C.fromString(t.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,t.wkt2||t.wkt);sn.projToGeog(l,i.length,i)}if(s!=null&&s.steps.length){let l;if(e.isGeographic&&(l=i.map(([c])=>c>179.9955?1:c<-179.9955?-1:0)),s.steps.forEach(c=>{const M=c.wkid?C.geogtran(c.wkid):C.fromString(v.PE_TYPE_GEOGTRAN,c.wkt);En.geogToGeog(M,i.length,i,null,c.isInverse?v.PE_TRANSFORM_2_TO_1:v.PE_TRANSFORM_1_TO_2)}),l)for(let c=0;c<i.length;c++){const M=l[c],y=i[c][0],x=y>179.9955?1:y<-179.9955?-1:0;M&&x&&M!==x&&(i[c][0]=M>0?y+360:y-360)}}if(!e.isGeographic){const l=$(e,!0),r=l!=null&&l.isEnvelope?[l.bbox[1],l.bbox[3]]:[-90,90];In(i,r);const c=e.wkid?C.coordsys(e.wkid):C.fromString(e.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,e.wkt2||e.wkt);sn.geogToProj(c,i.length,i)}let f=i;if(o&&i.length!==o.length){f=[];for(let l=0,r=0;l<o.length;l++)o[l]?f.push(i[r++]):f.push([NaN,NaN])}return f}function Wn(n){const{cols:t,rows:e,xres:s,yres:a,usePixelCenter:i,inSR:o,outSR:f}=n;let{xmin:l,ymax:r}=n;i&&(l+=s/2,r-=a/2);const c=[],M=[],y=Math.max(t,e);for(let h=0;h<y;h++){const p=l+s*Math.min(t,h),u=r-a*Math.min(e,h),R=W(new k({x:p,y:u,spatialReference:o}),f);h<=t&&c.push(R.x),h<=e&&M.push(R.y)}const x=[];for(let h=0;h<t;h++)for(let p=0;p<e;p++)x.push([c[h],M[p]]);return x}function $(n,t=!1){let e=n.wkid||n.wkt2||n.wkt;if(!e||n.isGeographic)return null;if(e=String(e),H.has(e)){const o=H.get(e);return t?o==null?void 0:o.gcs:o==null?void 0:o.pcs}const s=n.wkid?C.coordsys(n.wkid):C.fromString(n.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,n.wkt2||n.wkt),a=un(s,N(n,1e-4)),i=un(s,0,!0);return H.set(e,{pcs:a,gcs:i}),t?i:a}function un(n,t=0,e=!1){const s=Tn.generate(n),a=e?n.horizonGcsGenerate():n.horizonPcsGenerate();if(!s||!(a!=null&&a.length))return null;let i=!1,o=a.find(u=>u.getInclusive()===1&&u.getKind()===1);if(!o){if(o=a.find(u=>u.getInclusive()===1&&u.getKind()===0),!o)return null;i=!0}const f=e?0:(s.getNorthPoleLocation()===2?1:0)|(s.getSouthPoleLocation()===2?2:0),l=s.isPannableRectangle(),r=o.getCoord();if(i)return{isEnvelope:i,isPannable:l,vertices:r,coef:null,bbox:[r[0][0]-t,r[0][1]-t,r[1][0]+t,r[1][1]+t],poleLocation:f};let c=0;const M=[];let[y,x]=r[0],[h,p]=r[0];for(let u=0,R=r.length;u<R;u++){c++,c===R&&(c=0);const[m,g]=r[u],[d,w]=r[c];if(w===g)M.push([m,d,g,w,2]);else{const b=(d-m)/(w-g||1e-4),T=m-b*g;g<w?M.push([b,T,g,w,0]):M.push([b,T,w,g,1])}y=y<m?y:m,x=x<g?x:g,h=h>m?h:m,p=p>g?p:g}return{isEnvelope:!1,isPannable:l,vertices:r,coef:M,bbox:[y,x,h,p],poleLocation:f}}function tn(n,t){const e=[],{cols:s,rows:a,xres:i,yres:o,usePixelCenter:f}=n;let{xmin:l,ymax:r}=n;if(f&&(l+=i/2,r-=o/2),t==null){for(let x=0;x<s;x++)for(let h=0;h<a;h++)e.push([l+i*x,r-o*h]);return{points:e}}const c=new Uint8Array(s*a);if(t.isEnvelope){const{bbox:[x,h,p,u]}=t;for(let R=0,m=0;R<s;R++){const g=l+i*R,d=t.isPannable||g>=x&&g<=p;for(let w=0;w<a;w++,m++){const b=r-o*w;d&&b>=h&&b<=u&&(e.push([g,b]),c[m]=1)}}return{points:e,mask:c}}const M=t.coef,y=[];for(let x=0;x<a;x++){const h=r-o*x,p=[],u=[];for(let m=0;m<M.length;m++){const[g,d,w,b,T]=M[m];if(h===w&&w===b)p.push(g),p.push(d),u.push(2),u.push(2);else if(h>=w&&h<=b){const L=g*h+d;p.push(L),u.push(T)}}let R=p;if(p.length>2){let m=u[0]===2?0:u[0],g=p[0];R=[];for(let d=1;d<u.length;d++)u[d]===2&&d!==u.length-1||(u[d]!==m&&(R.push(m===0?Math.min(g,p[d-1]):Math.max(g,p[d-1])),m=u[d],g=p[d]),d===u.length-1&&R.push(u[d]===0?Math.min(g,p[d]):Math.max(g,p[d])));R.sort((d,w)=>d-w)}else p[0]>p[1]&&(R=[p[1],p[0]]);y.push(R)}for(let x=0,h=0;x<s;x++){const p=l+i*x;for(let u=0;u<a;u++,h++){const R=r-o*u,m=y[u];if(m.length===2)p>=m[0]&&p<=m[1]&&(e.push([p,R]),c[h]=1);else if(m.length>2){let g=!1;for(let d=0;d<m.length;d+=2)if(p>=m[d]&&p<=m[d+1]){g=!0;break}g&&(e.push([p,R]),c[h]=1)}}}return{points:e,mask:c}}function In(n,t){const[e,s]=t;for(let a=0;a<n.length;a++){const i=n[a][1];(i<e||i>s)&&(n[a]=[NaN,NaN])}}function dn(n,t){const e=_(n[0].spatialReference);if(n.length<2||e==null||(t=t??N(n[0].spatialReference),(n=n.filter(f=>f.width>t)).length===1))return n[0];let{xmin:s,xmax:a,ymin:i,ymax:o}=n[0];for(let f=1;f<n.length;f++){const l=n[f];a=l.xmax+e*f,i=Math.min(i,l.ymin),o=Math.max(o,l.ymax)}return new A({xmin:s,xmax:a,ymin:i,ymax:o,spatialReference:n[0].spatialReference})}function Mn(n,t,e=null,s=!0){const a=n.spatialReference;if(a.equals(t))return n;const i=wn(n),o=_(a,!0),f=_(t);if(i===0||o==null||f==null){const r=xn(n,t,e,s);if(o==null&&f!=null&&Math.abs(r.width-f)<N(t)&&nn()){const c=$(a);if(c!=null&&c.poleLocation===Q.None&&n.width<(c.bbox[2]-c.bbox[0])/2)return Ln(n,t)||r}return r}const l=n.clone().normalize();if(l.length===1&&n.xmax<o&&n.xmax-o/2>N(a)){const{xmin:r,xmax:c}=n;for(let M=0;M<=i;M++){const y=M===0?r:-o/2,x=M===i?c-o*M:o/2;l[M]=new A({xmin:y,xmax:x,ymin:n.ymin,ymax:n.ymax,spatialReference:a})}}return dn(l.map(r=>xn(r,t,e,s)).filter(Pn))}function Yn(n,t,e){if(n.type==="extent"){const{xmin:s,ymin:a,xmax:i,ymax:o,spatialReference:f}=n;n=new pn({rings:[[[s,o],[i,o],[i,a],[s,a],[s,o]]],spatialReference:f})}return n.spatialReference.equals(t)?n:(I(n.spatialReference,t,e),W(n,t,e))}function Ln(n,t){const e=_(t);if(e==null)return null;let{xmin:s,ymin:a,xmax:i,ymax:o}=n;const f=n.spatialReference,l=new pn({spatialReference:f,rings:[[[s,a],[i,a],[i,o],[s,o],[s,a]]]}),r=W(l,t);if(r.rings.length!==2||!r.rings[0].length||!r.rings[1].length)return null;const{rings:c}=r,M=N(f),y=new A({spatialReference:t});for(let x=0;x<2;x++){s=i=c[x][0][0],a=o=c[x][0][1];for(let h=0;h<c[x].length;h++)s=s>c[x][h][0]?c[x][h][0]:s,i=i<c[x][h][0]?c[x][h][0]:i,a=a>c[x][h][1]?c[x][h][1]:a,o=o<c[x][h][1]?c[x][h][1]:o;if(x===0)y.ymin=a,y.ymax=o,y.xmin=s,y.xmax=i;else if(y.ymin=Math.min(y.ymin,a),y.ymax=Math.max(y.ymax,o),Math.abs(i-e/2)<M)y.xmin=s,y.xmax=y.xmax+e;else{if(!(Math.abs(s+e/2)<M))return null;y.xmax=i+e}}return y}function xn(n,t,e=null,s=!0,a=!0){const i=n.spatialReference;if(i.equals(t)||!t)return n;I(i,t,e);const o=W(n,t,e);if(a&&t.isWebMercator&&o&&(o.ymax=Math.min(20037508342787e-6,o.ymax),o.ymin=Math.max(-20037508342787e-6,o.ymin),o.ymin>=o.ymax))return null;if(!s||!o)return o;const f=J(i,!0),l=J(t,!0);if(f==null||l==null)return o;const r=N(i,.001),c=N(i,q),M=N(t,.001);if(Math.abs(o.xmin-l[0])<M&&Math.abs(o.xmax-l[1])<M){const y=Math.abs(n.xmin-f[0]),x=Math.abs(f[1]-n.xmax);if(y<r&&x>c){o.xmin=l[0];const h=[];h.push(new k(n.xmax,n.ymin,i)),h.push(new k(n.xmax,(n.ymin+n.ymax)/2,i)),h.push(new k(n.xmax,n.ymax,i));const p=h.map(u=>cn(u,t,e)).filter(u=>!isNaN(u==null?void 0:u.x)).map(u=>u.x);o.xmax=Math.max.apply(null,p)}if(x<r&&y>c){o.xmax=l[1];const h=[];h.push(new k(n.xmin,n.ymin,i)),h.push(new k(n.xmin,(n.ymin+n.ymax)/2,i)),h.push(new k(n.xmin,n.ymax,i));const p=h.map(u=>cn(u,t,e)).filter(u=>!isNaN(u==null?void 0:u.x)).map(u=>u.x);o.xmin=Math.min.apply(null,p)}}else{const y=N(t,.001);Math.abs(o.xmin-l[0])<y&&(o.xmin=l[0]),Math.abs(o.xmax-l[1])<y&&(o.xmax=l[1])}return o}function _(n,t=!1){if(!n)return null;const e=t?20037508342787e-6:20037508342788905e-9;return n.isWebMercator?2*e:n.wkid&&n.isGeographic?360:2*Cn[n.wkid]||null}function J(n,t=!1){if(n.isGeographic)return[-180,180];const e=_(n,t);return e!=null?[-e/2,e/2]:null}function hn(n,t,e,s){let a=(n-t)/e;return a-Math.floor(a)!=0?a=Math.floor(a):s&&(a-=1),a}function wn(n,t=!1){const e=_(n.spatialReference);if(e==null)return 0;const s=t?0:-(e/2),a=N(n.spatialReference),i=!t&&Math.abs(n.xmax-e/2)<a?e/2:n.xmax,o=!t&&Math.abs(n.xmin+e/2)<a?-e/2:n.xmin;return hn(i,s,e,!0)-hn(o,s,e,!1)}function qn(n){const t=n.storageInfo.origin.x,e=_(n.spatialReference,!0);if(e==null)return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const s=e/2,{nativePixelSize:a,storageInfo:i,extent:o}=n,{maximumPyramidLevel:f,blockWidth:l,pyramidScalingFactor:r}=i;let c=a.x;const M=[],y=n.transform!=null&&n.transform.type==="gcs-shift",x=t+(y?0:s),h=y?e-t:s-t;for(let p=0;p<=f;p++){const u=(o.xmax-t)/c/l,R=u-Math.floor(u)==0?u:Math.ceil(u),m=h/c/l,g=m-Math.floor(m)==0?m:Math.ceil(m),d=Math.floor(x/c/l),w=Math.round(x/c)%l,b=(l-Math.round(h/c)%l)%l;M.push({resolutionX:c,blockWidth:l,datasetColumnCount:R,worldColumnCountFromOrigin:g,leftMargin:w,rightPadding:b,originColumnOffset:d}),c*=r}return{originX:t,halfWorldWidth:s,pyramidsInfo:M,hasGCSSShiftTransform:y}}function On(n){if(!n||n.isGeographic)return n;const t=String(n.wkid||n.wkt2||n.wkt);let e;return V.has(t)?e=V.get(t):(e=(n.wkid?C.coordsys(n.wkid):C.fromString(v.PE_TYPE_PROJCS,n.wkt2||n.wkt)).getGeogcs().getCode(),V.set(t,e)),new vn({wkid:e})}function Jn(n){const t=n.isAdaptive&&n.spacing==null;let e=n.spacing||[F,F],s=Z(n),a={cols:s.size[0]+1,rows:s.size[1]+1};const i=s.outofBoundPointCount>0&&s.outofBoundPointCount<s.offsets.length/2;let o=s.outofBoundPointCount===s.offsets.length/2||t&&i?[0,0]:rn(s.offsets,a,e,D);const f=(o[0]+o[1])/2,l=n.projectedExtent.spatialReference,r=n.srcBufferExtent.spatialReference;if(t&&(i||f>D)&&(gn(l,r,n.datumTransformation)&&(l.isGeographic||$(l)),e=[Y,Y],s=Z({...n,spacing:e}),a={cols:s.size[0]+1,rows:s.size[1]+1},o=rn(s.offsets,a,e,D)),s.error=o,e[0]>1&&(s.coefficients=mn(s.offsets,a,i)),n.includeGCSGrid&&!l.isGeographic&&!l.isWebMercator)if(r.isGeographic)s.gcsGrid={offsets:s.offsets,coefficients:s.coefficients,spacing:e};else{const c=$(l);if(c!=null&&!c.isEnvelope){const M=On(l),y=Mn(n.projectedExtent,M),{offsets:x}=Z({...n,srcBufferExtent:y,spacing:e}),h=mn(x,a,i);s.gcsGrid={offsets:x,coefficients:h,spacing:e}}}return s}function Z(n){const{projectedExtent:t,srcBufferExtent:e,pixelSize:s,datumTransformation:a,rasterTransform:i}=n,o=t.spatialReference,f=e.spatialReference,l=I(o,f),{xmin:r,ymin:c,xmax:M,ymax:y}=t,x=_(f),h=x!=null&&(n.hasWrapAround||(i==null?void 0:i.type)==="gcs-shift"),p=n.spacing||[F,F],u=p[0]*s.x,R=p[1]*s.y,m=p[0]===1,g=Math.ceil((M-r)/u-.1/p[0])+(m?0:1),d=Math.ceil((y-c)/R-.1/p[1])+(m?0:1),w=zn({cols:g,rows:d,xmin:r,ymax:y,xres:u,yres:R,inSR:o,outSR:f,datumTransformation:a,preferPE:p[0]<=Y,usePixelCenter:m}),b=[];let T,L=0;const j=m?-1:NaN,{xmin:S,xmax:P,ymax:E,width:U,height:X}=e,Rn=N(f,q),bn=x!=null&&S>0&&P>x/2;let en=!1;if(l){const z=$(o);en=z!=null&&z.poleLocation>0}for(let z=0;z<g;z++){const K=[];for(let B=0;B<d;B++){let G=w[z*d+B];if(h&&G[0]>P&&G[0]>x/2-Rn?G[0]-=x:h&&z===0&&G[0]<0&&bn&&!i&&(G[0]+=x),!G||isNaN(G[0])||isNaN(G[1]))b.push(j),b.push(j),K.push(null),L++;else{if(i){const on=i.inverseTransform(new k({x:G[0],y:G[1],spatialReference:f}));G=[on.x,on.y]}K.push(G),z>0&&h&&T[B]&&G[0]<T[B][0]&&(G[0]+=x,en&&G[0]>P&&G[0]>x&&(G[0]-=x)),b.push((G[0]-S)/U),b.push((E-G[1])/X)}}T=K}return{offsets:b,error:null,coefficients:null,outofBoundPointCount:L,spacing:p,size:m?[g,d]:[g-1,d-1]}}function mn(n,t,e){const{cols:s,rows:a}=t,i=new Float32Array((s-1)*(a-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),f=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let l=0;l<s-1;l++){for(let r=0;r<a-1;r++){let c=l*a*2+2*r;const M=n[c],y=n[c+1],x=n[c+2],h=n[c+3];c+=2*a;const p=n[c],u=n[c+1],R=n[c+2],m=n[c+3];let g=0,d=12*(r*(s-1)+l);for(let w=0;w<3;w++)i[d++]=o[g++]*M+o[g++]*x+o[g++]*R;g=0;for(let w=0;w<3;w++)i[d++]=o[g++]*y+o[g++]*h+o[g++]*m;g=0;for(let w=0;w<3;w++)i[d++]=f[g++]*M+f[g++]*p+f[g++]*R;g=0;for(let w=0;w<3;w++)i[d++]=f[g++]*y+f[g++]*u+f[g++]*m}if(e)for(let r=0;r<i.length;r++)isNaN(i[r])&&(i[r]=-1)}return i}function jn(n,t){const e=n.clone().normalize();return e.length===1?e[0]:dn(e,t)}function Un(n){const{spatialReference:t}=n,e=Gn(t);if(!e)return n;const[s,a]=e.valid,i=a-s;let o=0;if(n.xmin<s){const f=s-n.xmin;o=Math.ceil(f/i)}else if(n.xmin>a){const f=n.xmin-a;o=-Math.ceil(f/i)}return new A({spatialReference:n.spatialReference,xmin:n.xmin+o*i,ymin:n.ymin,xmax:n.xmax+o*i,ymax:n.ymax})}function Xn(n,t,e){var h;const{storageInfo:s,pixelSize:a}=t;let i=0,o=!1;const{pyramidResolutions:f}=s,l=((h=s.tileInfo.format)==null?void 0:h.toLowerCase())==="mixed"?Math.max(1,Math.min(3,s.tileInfo.dpi/96)):1,r=(n.x+n.y)/2/l;if(f!=null&&f.length){const p=f[f.length-1],u=(p.x+p.y)/2,R=(a.x+a.y)/2;if(r<=R)i=0;else if(r>=u)i=f.length,o=r/u>8;else{let g,d=R;for(let w=1;w<=f.length;w++){if(g=(f[w-1].x+f[w-1].y)/2,r<=g){r===g?i=w:e==="down"?(i=w-1,o=r/d>8):i=e==="up"||r-d>g-r||r/d>2?w:w-1;break}d=g}}const m=i===0?a:f[i-1];return o&&Math.min(m.x,m.y)*O(t.spatialReference)>19567&&(o=!1),{pyramidLevel:i,pyramidResolution:new k({x:m.x,y:m.y,spatialReference:t.spatialReference}),excessiveReading:o}}const c=Math.log(n.x/a.x)/Math.LN2,M=Math.log(n.y/a.y)/Math.LN2,y=t.storageInfo.maximumPyramidLevel||0;i=e==="down"?Math.floor(Math.min(c,M)):e==="up"?Math.ceil(Math.max(c,M)):Math.round((c+M)/2),i<0?i=0:i>y&&(o=i>y+3,i=y);const x=2**i;return{pyramidLevel:i,pyramidResolution:new k({x:x*t.nativePixelSize.x,y:x*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:o}}function Bn(n,t){const{pixelSize:e,extent:s}=n,a=_n(s,t,!1);return Mn(jn(s,(e.x+e.y)/16),t,a)}function Kn(n,t,e){var j;const s=(e==null?void 0:e.tileSize)??512,a=(e==null?void 0:e.alignGlobalDatasetWithAGOL)??!0,i=!!(e!=null&&e.limitToSrcResolution),{extent:o,spatialReference:f,pixelSize:l}=n,r=ln(new k({x:l.x,y:l.y,spatialReference:f}),t,o);if(r==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const c=(r.x+r.y)/2,M=O(t),y=c*M*96*39.37,x=t.isGeographic?256/s*2958287637958547e-7:256/s*591657527591555e-6;let h=n.dataType==="vector-magdir"||n.dataType==="vector-uv";const p=Bn(n,t),u=Math.min(Math.ceil(Math.log(Math.min(n.width,n.height)/32)/Math.LN2),Math.ceil(Math.log(x/2/y)/Math.LN2));if(!h&&a&&(t.isGeographic||t.isWebMercator)){const S=_(t);if(h=wn(p)>0||S!=null&&p.width>S/4,!h&&S!=null){let P=-1;if(u<3)P=2**u*c*s;else if(n.storageInfo){const{maximumPyramidLevel:U=0,pyramidScalingFactor:X=2}=n.storageInfo;P=X**U*c*s}const E=Math.ceil(S/P);h=E===1||E===2&&S/2-p.xmax<P}}let R,m=y;const g=1.001,d=Math.min(2,Math.max(1.414,((j=n.storageInfo)==null?void 0:j.pyramidScalingFactor)||2));if(h){m=x;const S=t.isGeographic?1341104507446289e-21:.29858214164761665,P=S*(96*M*39.37),E=t.isGeographic?4326:3857;R=ln(new k({x:S,y:S,spatialReference:{wkid:E}}),f,p),R.x*=m/P,R.y*=m/P}else{R={x:l.x,y:l.y};let S=0;for(;m<x*(g/2)&&S<u;)S++,m*=d,R.x*=d,R.y*=d;Math.max(m,x)/Math.min(m,x)<=g&&(m=x)}const w=[m],b=[{x:R.x,y:R.y}],T=70.5310735,L=Math.min(T,y)/g;for(;m>=L;)m/=d,R.x/=d,R.y/=d,w.push(m),b.push({x:R.x,y:R.y});if(i){const S=.001*l.x;let P=b.findIndex(E=>E.x>=l.x-S&&E.x<=l.x+S);P>-1?(b.length=P+1,w.length=P+1):(P=b.findIndex(E=>E.x<=l.x+S),P>0&&(b.length=P,w.length=P))}return{projectedPixelSize:r,scales:w,srcResolutions:b,isCustomTilingScheme:!h}}export{ln as C,_ as D,Mn as J,gn as M,Fn as T,Yn as U,wn as V,qn as Z,Kn as a,Jn as e,cn as j,Un as o,Xn as r,Bn as s,_n as v};
