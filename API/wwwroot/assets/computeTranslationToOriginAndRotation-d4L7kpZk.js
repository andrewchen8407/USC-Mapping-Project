import{b6 as L,gM as S,gN as T,gO as N,dt as W,gP as _,gQ as g,gR as k,gS as P,gT as R,gU as F,gV as a,G,gW as I,gX as c,gY as $,gZ as h,bW as M}from"./index-idTqwGoN.js";const H=new L(S),f=new L(T),C=new L(N);new L(W);function B(s){const u=p.get(s);if(u)return u;let n=H;if(s)if(s===f)n=f;else if(s===C)n=C;else{const l=s.wkid,o=s.latestWkid;if(l!=null||o!=null)_(l)||_(o)?n=f:(g(l)||g(o))&&(n=C);else{const e=s.wkt2??s.wkt;if(e){const r=e.toUpperCase();r===U?n=f:r===d&&(n=C)}}}return p.set(s,n),n}const p=new Map,U=f.wkt.toUpperCase(),d=C.wkt.toUpperCase();function O(s,u,n){const l=Math.sin(s),o=Math.cos(s),e=Math.sin(u),r=Math.cos(u),t=n;return t[0]=-l,t[4]=-e*o,t[8]=r*o,t[12]=0,t[1]=o,t[5]=-e*l,t[9]=r*l,t[13]=0,t[2]=0,t[6]=r,t[10]=e,t[14]=0,t[3]=0,t[7]=0,t[11]=0,t[15]=1,t}function m(s,u,n){return O(s,u,n),k(n,n),n}function q(s,u,n,l){if(s==null||l==null)return!1;const o=P(s,R),e=P(l,F);if(o===e&&!w(e)&&(o!==a.UNKNOWN||G(s,l)))return I(n,u),!0;if(w(e)){const r=c[o][a.LON_LAT],t=c[a.LON_LAT][e];return r!=null&&t!=null&&(r(u,0,E,0),t(E,0,i,0),O(A*E[0],A*E[1],n),n[12]=i[0],n[13]=i[1],n[14]=i[2],!0)}if((e===a.WEB_MERCATOR||e===a.PLATE_CARREE||e===a.WGS84)&&(o===a.WGS84||o===a.CGCS2000&&e===a.PLATE_CARREE||o===a.SPHERICAL_ECEF||o===a.WEB_MERCATOR)){const r=c[o][a.LON_LAT],t=c[a.LON_LAT][e];return r!=null&&t!=null&&(r(u,0,E,0),t(E,0,i,0),o===a.SPHERICAL_ECEF?m(A*E[0],A*E[1],n):$(n),n[12]=i[0],n[13]=i[1],n[14]=i[2],!0)}return!1}function w(s){return s===a.SPHERICAL_ECEF||s===a.SPHERICAL_MARS_PCPF||s===a.SPHERICAL_MOON_PCPF}const A=h(1),E=M(),i=M();export{q as R,B as a};
