import{Y as f}from"./index-sPZOTBHJ.js";function p(o,e,t=0){const r=f(o,0,c);for(let n=0;n<4;n++)e[t+n]=Math.floor(256*u(r*i[n]))}function l(o,e=0){let t=0;for(let r=0;r<4;r++)t+=o[e+r]*a[r];return t}const i=[1,256,65536,16777216],a=[1/256,1/65536,1/16777216,1/4294967296],c=l(new Uint8ClampedArray([255,255,255,255]));function u(o){return o-Math.floor(o)}export{p as o,l as r};
