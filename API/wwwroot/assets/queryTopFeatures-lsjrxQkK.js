import{ei as p,bA as m,aD as F,eg as f,U as E,aK as j,dV as x,ej as a}from"./index-k4MWwNZ3.js";const c="Layer does not support extent calculation.";function g(o,e){var u,y;const r=o.geometry,t=o.toJSON(),n=t;if(r!=null&&(n.geometry=JSON.stringify(r),n.geometryType=x(r),n.inSR=a(r.spatialReference)),(u=t.topFilter)!=null&&u.groupByFields&&(n.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),(y=t.topFilter)!=null&&y.orderByFields&&(n.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(n.topFilter=JSON.stringify(n.topFilter)),t.objectIds&&(n.objectIds=t.objectIds.join(",")),t.orderByFields&&(n.orderByFields=t.orderByFields.join(",")),t.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?t.outFields.includes("*")?n.outFields="*":n.outFields=t.outFields.join(","):delete n.outFields,t.outSR?n.outSR=a(t.outSR):r&&t.returnGeometry&&(n.outSR=n.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const i=t.timeExtent,{start:s,end:l}=i;s==null&&l==null||(n.time=s===l?s:`${s??"null"},${l??"null"}`),delete t.timeExtent}return n}async function B(o,e,r,t){const n=await d(o,e,"json",t);return p(e,r,n.data),n}async function S(o,e,r){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:d(o,e,"json",r,{returnIdsOnly:!0})}async function I(o,e,r){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:d(o,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const n=t.data;if(n.hasOwnProperty("extent"))return t;if(n.features)throw new Error(c);if(n.hasOwnProperty("count"))throw new Error(c);return t})}function R(o,e,r){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):d(o,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function d(o,e,r,t={},n={}){const u=typeof o=="string"?m(o):o,y=e.geometry?[e.geometry]:[];return t.responseType=r==="pbf"?"array-buffer":"json",F(y,null,t).then(i=>{const s=i==null?void 0:i[0];s!=null&&((e=e.clone()).geometry=s);const l=f({...u.query,f:r,...n,...g(e,n)});return E(j(u.path,"queryTopFeatures"),{...t,query:{...l,...t.query}})})}export{R as a,I as d,S as m,B as p};
