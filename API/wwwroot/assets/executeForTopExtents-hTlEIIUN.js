import{dV as i,eq as m,aU as r}from"./index-wtwWwDCP.js";import{d as x}from"./queryTopFeatures-AdGpkJCM.js";async function c(n,o,e){const s=i(n),a=await x(s,m.from(o),{...e}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:r.fromJSON(t)}}export{c as executeForTopExtents};
