import{aW as h,aX as m}from"./index-HTbDWax9.js";async function T(e,d=e.popupTemplate){var n,o;if(d==null)return[];const s=await d.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=d,{objectIdField:u,typeIdField:a,globalIdField:p,relationships:i}=e;if(s.includes("*"))return["*"];const c=r?h(e):[],l=m(e.fieldsIndex,[...s,...c]);return a&&l.push(a),l&&u&&((n=e.fieldsIndex)!=null&&n.has(u))&&!l.includes(u)&&l.push(u),l&&p&&((o=e.fieldsIndex)!=null&&o.has(p))&&!l.includes(p)&&l.push(p),i&&i.forEach(I=>{var f;const{keyField:t}=I;l&&t&&((f=e.fieldsIndex)!=null&&f.has(t))&&!l.includes(t)&&l.push(t)}),l}function F(e,d){return e.popupTemplate?e.popupTemplate:d!=null&&d.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}export{T as n,F as p};
