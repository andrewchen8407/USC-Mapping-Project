import{m as g}from"./TimeOnly-Yz3Lw-Tu.js";import{a as h,B as l,U as m,G as p,Q as d,b as w,r as v,P as f,v as c,q as S}from"./arcadeUtils-9bI8KAvU.js";import{x as y,r as x}from"./WhereClause-FXTK_Ztd.js";import"./index-RYq4DRUB.js";import"./ImmutableArray-H2O6RDFT.js";import"./number-NbXUJ9NQ.js";async function s(n,e,a,t,i,r){if(t.length===1){if(m(t[0]))return f(n,t[0],c(t[1],-1));if(d(t[0]))return f(n,t[0].toArray(),c(t[1],-1))}else if(t.length===2){if(m(t[0]))return f(n,t[0],c(t[1],-1));if(d(t[0]))return f(n,t[0].toArray(),c(t[1],-1));if(l(t[0])){const o=await t[0].load(),u=await F(y.create(t[1],o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC),r,i);return A(i,await t[0].calculateStatistic(n,u,c(t[2],1e3),e.abortSignal))}}else if(t.length===3&&l(t[0])){const o=await t[0].load(),u=await F(y.create(t[1],o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC),r,i);return A(i,await t[0].calculateStatistic(n,u,c(t[2],1e3),e.abortSignal))}return f(n,t,-1)}function A(n,e){return e instanceof x?g.fromReaderAsTimeStampOffset(e.toStorageFormat()):e instanceof Date?g.dateJSAndZoneToArcadeDate(e,S(n)):e}async function F(n,e,a){const t=n.getVariables();if(t.length>0){const i=[];for(let o=0;o<t.length;o++){const u={name:t[o]};i.push(await e.evaluateIdentifier(a,u))}const r={};for(let o=0;o<t.length;o++)r[t[o]]=i[o];return n.parameters=r,n}return n}function $(n){n.mode==="async"&&(n.functions.stdev=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("stdev",t,i,r,e,n))},n.functions.variance=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("variance",t,i,r,e,n))},n.functions.average=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("mean",t,i,r,e,n))},n.functions.mean=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("mean",t,i,r,e,n))},n.functions.sum=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("sum",t,i,r,e,n))},n.functions.min=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("min",t,i,r,e,n))},n.functions.max=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("max",t,i,r,e,n))},n.functions.count=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>{if(h(r,1,1,e,a),l(r[0]))return r[0].count(t.abortSignal);if(m(r[0])||p(r[0]))return r[0].length;if(d(r[0]))return r[0].length();throw new w(e,v.InvalidParameter,a)})})}export{$ as registerFunctions};
