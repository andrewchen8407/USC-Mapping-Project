import{ep as j,U as R,es as p,go as l,dV as y,I as m}from"./index-5-AWHvTS.js";function F(r,t){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!(t!=null&&t.returnCountOnly)?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSR&&(e.outSR=p(e.outSR)),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function b(r,t,e){const s=await f(r,t,e),o=s.data,n=o.geometryType,a=o.spatialReference,c={};for(const d of o.relatedRecordGroups){const u={fields:void 0,objectIdFieldName:void 0,geometryType:n,spatialReference:a,hasZ:!!o.hasZ,hasM:!!o.hasM,features:d.relatedRecords};if(d.objectId!=null)c[d.objectId]=u;else for(const i of Object.keys(d))i!=="relatedRecords"&&(c[d[i]]=u)}return{...s,data:c}}async function h(r,t,e){const s=await f(r,t,e,{returnCountOnly:!0}),o=s.data,n={};for(const a of o.relatedRecordGroups)a.objectId!=null&&(n[a.objectId]=a.count);return{...s,data:n}}async function f(r,t,e={},s){const o=j({...r.query,f:"json",...s,...F(t,s)});return R(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...o}})}async function S(r,t,e){t=l.from(t);const s=y(r);return b(s,t,e).then(o=>{const n=o.data,a={};return Object.keys(n).forEach(c=>a[c]=m.fromJSON(n[c])),a})}async function O(r,t,e){t=l.from(t);const s=y(r);return h(s,t,{...e}).then(o=>o.data)}export{S as executeRelationshipQuery,O as executeRelationshipQueryForCount};
