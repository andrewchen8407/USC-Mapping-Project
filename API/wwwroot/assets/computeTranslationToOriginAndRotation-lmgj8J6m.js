import{b6 as A,gR as M,gS as O,gT as h,dD as N,gU as L,gV as g,gW as W,gX as p,gY as k,gZ as R,g_ as a,G as $,g$ as F,h0 as c,h1 as G,h2 as I,bW as S}from"./index-qKE4VY30.js";const H=new A(M),f=new A(O),C=new A(h);new A(N);function B(s){const u=P.get(s);if(u)return u;let n=H;if(s)if(s===f)n=f;else if(s===C)n=C;else{const l=s.wkid,o=s.latestWkid;if(l!=null||o!=null)L(l)||L(o)?n=f:(g(l)||g(o))&&(n=C);else{const e=s.wkt2??s.wkt;if(e){const r=e.toUpperCase();r===U?n=f:r===d&&(n=C)}}}return P.set(s,n),n}const P=new Map,U=f.wkt.toUpperCase(),d=C.wkt.toUpperCase();function T(s,u,n){const l=Math.sin(s),o=Math.cos(s),e=Math.sin(u),r=Math.cos(u),t=n;return t[0]=-l,t[4]=-e*o,t[8]=r*o,t[12]=0,t[1]=o,t[5]=-e*l,t[9]=r*l,t[13]=0,t[2]=0,t[6]=r,t[10]=e,t[14]=0,t[3]=0,t[7]=0,t[11]=0,t[15]=1,t}function m(s,u,n){return T(s,u,n),W(n,n),n}function D(s,u,n,l){if(s==null||l==null)return!1;const o=p(s,k),e=p(l,R);if(o===e&&!w(e)&&(o!==a.UNKNOWN||$(s,l)))return F(n,u),!0;if(w(e)){const r=c[o][a.LON_LAT],t=c[a.LON_LAT][e];return r!=null&&t!=null&&(r(u,0,E,0),t(E,0,i,0),T(_*E[0],_*E[1],n),n[12]=i[0],n[13]=i[1],n[14]=i[2],!0)}if((e===a.WEB_MERCATOR||e===a.PLATE_CARREE||e===a.WGS84)&&(o===a.WGS84||o===a.CGCS2000&&e===a.PLATE_CARREE||o===a.SPHERICAL_ECEF||o===a.WEB_MERCATOR)){const r=c[o][a.LON_LAT],t=c[a.LON_LAT][e];return r!=null&&t!=null&&(r(u,0,E,0),t(E,0,i,0),o===a.SPHERICAL_ECEF?m(_*E[0],_*E[1],n):G(n),n[12]=i[0],n[13]=i[1],n[14]=i[2],!0)}return!1}function w(s){return s===a.SPHERICAL_ECEF||s===a.SPHERICAL_MARS_PCPF||s===a.SPHERICAL_MOON_PCPF}const _=I(1),E=S(),i=S();export{D as R,B as a};
