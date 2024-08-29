import{I as f}from"./InterleavedLayout-dZd8uGK-.js";import{f as d,u as c,a as u,I as p,d as g,m as h}from"./edgeProcessing-y1xziumZ.js";import"./BufferView-TOjOiFlR.js";import"./index-yumUYLd_.js";import"./types-GBdbcYRa.js";import"./Util-Xaxy4fi5.js";import"./deduplicate-SqfQmMqM.js";import"./Indices-8M5u3ZDV.js";import"./VertexAttribute-Hx-XL6n4.js";function a(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:new f(t.layout)}}class B{async extract(e){const i=o(e),n=d(i),s=[i.data.buffer];return{result:m(n,s),transferList:s}}async extractComponentsEdgeLocations(e){const i=o(e),n=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),s=u(n,L,l),r=[];return{result:a(s.regular.instancesData,r),transferList:r}}async extractEdgeLocations(e){const i=o(e),n=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),s=u(n,I,l),r=[];return{result:a(s.regular.instancesData,r),transferList:r}}}function o(t){return{data:p.createView(t.dataBuffer),indices:t.indicesType==="Uint32Array"?new Uint32Array(t.indices):t.indicesType==="Uint16Array"?new Uint16Array(t.indices):t.indices,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function m(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:a(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:a(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class w{allocate(e){return g.createBuffer(e)}trim(e,i){return e.slice(0,i)}write(e,i,n){e.position0.setVec(i,n.position0),e.position1.setVec(i,n.position1)}}class y{allocate(e){return h.createBuffer(e)}trim(e,i){return e.slice(0,i)}write(e,i,n){e.position0.setVec(i,n.position0),e.position1.setVec(i,n.position1),e.componentIndex.set(i,n.componentIndex)}}const I=new w,L=new y,l={allocate:()=>null,write:()=>{},trim:()=>null};export{B as default};
