import{o as q}from"./floatRGBA--_MGwiZ_.js";import{T as G,$ as V}from"./index-MnnkPTiO.js";import{t as T}from"./CIMSymbolHelper-hKoPDTtx.js";function U(n){var o;switch(n.type){case"CIMPointSymbol":{const r=n.symbolLayers;if(!r||r.length!==1)return null;const t=r[0];return t.type!=="CIMVectorMarker"?null:U(t)}case"CIMVectorMarker":{const r=n.markerGraphics;if(!r||r.length!==1)return null;const t=r[0];if(!t)return null;const i=t.geometry;if(!i)return null;const l=t.symbol;return!l||l.type!=="CIMPolygonSymbol"&&l.type!=="CIMLineSymbol"||(o=l.symbolLayers)!=null&&o.some(e=>!!e.effects)?null:{type:"sdf",geom:i,asFill:l.type==="CIMPolygonSymbol"}}}}function $(n){return n?n.rings?n.rings:n.paths?n.paths:n.xmin!==void 0&&n.ymin!==void 0&&n.xmax!==void 0&&n.ymax!==void 0?[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]:null:null}function j(n){let o=1/0,r=-1/0,t=1/0,i=-1/0;for(const l of n)for(const e of l)e[0]<o&&(o=e[0]),e[0]>r&&(r=e[0]),e[1]<t&&(t=e[1]),e[1]>i&&(i=e[1]);return new T(o,t,r-o,i-t)}function A(n){let o=1/0,r=-1/0,t=1/0,i=-1/0;for(const l of n)for(const e of l)e[0]<o&&(o=e[0]),e[0]>r&&(r=e[0]),e[1]<t&&(t=e[1]),e[1]>i&&(i=e[1]);return[o,t,r,i]}function K(n){return n?n.rings?A(n.rings):n.paths?A(n.paths):G(n)?[n.xmin,n.ymin,n.xmax,n.ymax]:null:null}function N(n,o,r,t,i){const[l,e,s,u]=n;if(s<l||u<e)return[0,0,0,1];const a=s-l,f=u-e,m=128,c=V,M=Math.floor(.5*(.5*m-c)),h=(m-2*(M+c))/Math.max(a,f),g=Math.round(a*h)+2*M,d=Math.round(f*h)+2*M;let b=1;o&&(b=d/h/(o.ymax-o.ymin));let x=0,p=0,y=1;t&&(i?o&&r&&o.ymax-o.ymin>0&&(y=(o.xmax-o.xmin)/(o.ymax-o.ymin),x=t.x/(r*y),p=t.y/r):(x=t.x,p=t.y)),o&&(x=.5*(o.xmax+o.xmin)+x*(o.xmax-o.xmin),p=.5*(o.ymax+o.ymin)+p*(o.ymax-o.ymin)),x-=l,p-=e,x*=h,p*=h,x+=M,p+=M;let w=x/g-.5,v=p/d-.5;return i&&r&&(w*=r*y,v*=r),[b,w,v,y]}function O(n){const o=$(n.geom),r=j(o),t=128,i=V,l=Math.floor(.5*(.5*t-i)),e=(t-2*(l+i))/Math.max(r.width,r.height),s=Math.round(r.width*e)+2*l,u=Math.round(r.height*e)+2*l,a=[];for(const m of o)if(m&&m.length>1){const c=[];for(const M of m){let[h,g]=M;h-=r.x,g-=r.y,h*=e,g*=e,h+=l-.5,g+=l-.5,n.asFill?c.push([h,g]):c.push([Math.round(h),Math.round(g)])}if(n.asFill){const M=c.length-1;c[0][0]===c[M][0]&&c[0][1]===c[M][1]||c.push(c[0])}a.push(c)}const f=z(a,s,u,l);return n.asFill&&B(a,s,u,l,f),[D(f,l),s,u]}function z(n,o,r,t){const i=o*r,l=new Array(i),e=t*t+1;for(let s=0;s<i;++s)l[s]=e;for(const s of n){const u=s.length;for(let a=1;a<u;++a){const f=s[a-1],m=s[a];let c,M,h,g;f[0]<m[0]?(c=f[0],M=m[0]):(c=m[0],M=f[0]),f[1]<m[1]?(h=f[1],g=m[1]):(h=m[1],g=f[1]);let d=Math.floor(c)-t,b=Math.floor(M)+t,x=Math.floor(h)-t,p=Math.floor(g)+t;d<0&&(d=0),b>o&&(b=o),x<0&&(x=0),p>r&&(p=r);const y=m[0]-f[0],w=m[1]-f[1],v=y*y+w*w;for(let C=d;C<b;C++)for(let I=x;I<p;I++){let F,S,k=(C-f[0])*y+(I-f[1])*w;k<0?(F=f[0],S=f[1]):k>v?(F=m[0],S=m[1]):(k/=v,F=f[0]+k*y,S=f[1]+k*w);const L=(C-F)*(C-F)+(I-S)*(I-S),P=(r-I-1)*o+C;L<l[P]&&(l[P]=L)}}}for(let s=0;s<i;++s)l[s]=Math.sqrt(l[s]);return l}function B(n,o,r,t,i){for(const l of n){const e=l.length;for(let s=1;s<e;++s){const u=l[s-1],a=l[s];let f,m,c,M;u[0]<a[0]?(f=u[0],m=a[0]):(f=a[0],m=u[0]),u[1]<a[1]?(c=u[1],M=a[1]):(c=a[1],M=u[1]);let h=Math.floor(f),g=Math.floor(m)+1,d=Math.floor(c),b=Math.floor(M)+1;h<t&&(h=t),g>o-t&&(g=o-t),d<t&&(d=t),b>r-t&&(b=r-t);for(let x=d;x<b;++x){if(u[1]>x==a[1]>x)continue;const p=(r-x-1)*o;for(let y=h;y<g;++y)y<(a[0]-u[0])*(x-u[1])/(a[1]-u[1])+u[0]&&(i[p+y]=-i[p+y]);for(let y=t;y<h;++y)i[p+y]=-i[p+y]}}}}function D(n,o){const r=2*o,t=n.length,i=new Uint8Array(4*t);for(let l=0;l<t;++l){const e=.5-n[l]/r;q(e,i,4*l)}return i}export{O as a,U as e,K as f,N as m};
