import{s as c,dV as f,dW as u,dX as p,U as m}from"./index-qc-kEiJy.js";async function g(e,s,i,o){if(!s)throw new c("post:missing-guid","guid for version is missing");const t=f(e),r=i.toJSON(),a=u(t.query,{query:p({...r,f:"json"}),...o,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:n}=await m(d,a);return n.success}export{g as deleteForwardEdits};
