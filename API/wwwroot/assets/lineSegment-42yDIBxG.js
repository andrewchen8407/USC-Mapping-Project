import{dh as e,bW as c,di as d,dj as s,bS as g,dk as p,dl as b,Y as h,dm as j}from"./index-idTqwGoN.js";import{s as k}from"./ObjectStack-2Q2IQdbY.js";import{c as l}from"./plane-W_3lkfdC.js";function a(r){return r?{origin:e(r.origin),vector:e(r.vector)}:{origin:c(),vector:c()}}function S(r,n,o=a()){return d(o.origin,r),s(o.vector,n,r),o}function W(r,n,o){return w(r,n,0,1,o)}function w(r,n,o,u,i){const{vector:t,origin:m}=r,v=s(l.get(),n,m),f=g(t,v)/p(t);return b(i,t,h(f,o,u)),j(i,i,r.origin)}new k(()=>a());export{S as b,W as j,a as v};
