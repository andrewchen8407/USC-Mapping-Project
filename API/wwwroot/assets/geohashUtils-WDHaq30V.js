import{aR as v,aU as z,b6 as g,cs as A,ct as B,cu as b,cv as j}from"./index-UN0u_eSp.js";import{j as $}from"./timeSupport-bwVW-_f_.js";const F=new Float64Array(2),T=new Float64Array(2),Y="0123456789bcdefghjkmnpqrstuvwxyz",k=64;function K(n,e,r,a){const t=[n.xmin,n.ymin,n.xmax,n.ymax],s=v.fromExtent(z.fromBounds(t,a)),c=$(s,a,g.WGS84,{densificationStep:e*k});if(!c)return null;const o=A(new B,c,!1,!1),i=o.coords.filter((W,m)=>!(m%2)),f=o.coords.filter((W,m)=>m%2),y=Math.min(...i),M=Math.min(...f),l=Math.max(...i),h=Math.max(...f),u=w(y,M,r,g.WGS84),p=w(l,h,r,g.WGS84);return u&&p?{bounds:t,geohashBounds:{xLL:u[0],yLL:u[1],xTR:p[0],yTR:p[1]},level:r}:null}function w(n,e,r,a){if(a.isWebMercator){const c=b(n/j.radius),o=c-360*Math.floor((c+180)/360),i=[0,0];return L(i,0,b(Math.PI/2-2*Math.atan(Math.exp(-e/j.radius))),o,r),i}const t=$({x:n,y:e},a,g.WGS84);if(!t)return null;const s=[0,0];return L(s,0,t.y,t.x,r),s}function q(n){return Y[n]}function R(n){return(n[0]+n[1])/2}function G(n,e,r){return n[0]=e,n[1]=r,n}function C(n,e){const r=R(n),a=e,t=!e;n[0]=t*n[0]+a*r,n[1]=t*r+a*n[1]}function x(n,e){const r=e>R(n);return C(n,r),r}function P(n,e){let r=-90,a=90,t=-180,s=180;for(let c=0;c<e;c++){const o=Math.ceil((c+1)/2),i=Math.floor((c+1)/2),f=1-c%2,y=30-(3*o+2*i),M=30-(2*o+3*i),l=3*f+2*(1-f),h=2*f+3*(1-f),u=3*f+7*(1-f)<<M,p=(7*f+3*(1-f)<<y&n.geohashX)>>y,W=(u&n.geohashY)>>M;for(let m=l-1;m>=0;m--){const S=(t+s)/2,d=p&1<<m?1:0;t=(1-d)*t+d*S,s=(1-d)*S+d*s}for(let m=h-1;m>=0;m--){const S=(r+a)/2,d=W&1<<m?1:0;r=(1-d)*r+d*S,a=(1-d)*S+d*a}}return[t,r,s,a]}function L(n,e,r,a,t){t%2&&(t+=1);let s=0,c=0,o=-90,i=90,f=-180,y=180;for(let M=0;M<t/2;M++){for(let l=0;l<5;l++){const h=(f+y)/2,u=a>h?1:0;s|=u<<29-(l+5*M),f=(1-u)*f+u*h,y=(1-u)*h+u*y}for(let l=0;l<5;l++){const h=(o+i)/2,u=r>h?1:0;c|=u<<29-(l+5*M),o=(1-u)*o+u*h,i=(1-u)*h+u*i}}n[2*e]=s,n[2*e+1]=c}function U(n,e,r){let a="";const t=G(F,-90,90),s=G(T,-180,180);for(let c=0;c<r;c++){let o=0;c%2?(o|=x(t,n)<<4,o|=x(s,e)<<3,o|=x(t,n)<<2,o|=x(s,e)<<1,o|=x(t,n)<<0):(o|=x(s,e)<<4,o|=x(t,n)<<3,o|=x(s,e)<<2,o|=x(t,n)<<1,o|=x(s,e)<<0),a+=q(o)}return a}export{w as A,P as R,K as S,U as z};
