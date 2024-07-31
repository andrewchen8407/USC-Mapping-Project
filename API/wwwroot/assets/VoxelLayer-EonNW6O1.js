import{di as je,bV as ge,gk as ze,mp as ve,ke as be,bW as Pe,bX as Y,c0 as A,i7 as $,i8 as R,z as e,A as o,dz as ee,B as m,bF as g,ch as Me,eW as z,X as B,V as c,bl as te,Y as H,mq as K,aw as G,b6 as $e,y as L,G as _e,dj as Be,mr as Ee,an as ne,iv as Oe,hp as Ce,dm as ke,dr as Ue,c3 as We,c4 as Je,bt as Xe,c5 as Ge,dt as Ye,ds as He,lw as Ke,aP as Qe,s as le,aU as Re,cJ as E,fv as Ze,c8 as et,c9 as tt,c6 as fe,J as it,bw as ot}from"./index-wtwWwDCP.js";import{L as st}from"./SceneService-0JnJsC5P.js";import{j as rt}from"./persistable-xLBSZPcN.js";import{I as ae,x as nt}from"./quat-NOCzhCRe.js";import{e as se}from"./quatf64-upBlkCdX.js";import"./originUtils-1w5HeAJR.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./resourceUtils-sYumIgns.js";import"./resourceUtils-XFJfkEzj.js";import"./saveAPIKeyUtils-84ubFgla.js";import"./resourceExtension-J2VQ5EAp.js";import"./mat3f64-Km-wq5a6.js";const b=Pe(),Se=se(),xe=se(),we=se(),Ie=Y(0,0,1),lt=Y(0,1,0),at=Y(1,0,0);function O(i){je(b,i),ge(b,b);const t=Math.atan2(b[1],b[0]),s=ae(se(),Ie,-t);ze(b,b,s);const r=-1*Math.atan2(b[2],b[0]);return[ve(t)+270,ve(r)+90]}function ie(i,t){return ae(xe,Ie,be(i-270)),ae(we,lt,be(t-90)),nt(Se,xe,we),je(b,at),ze(b,b,Se),ge(b,b),[b[0],b[1],b[2]]}let I=class extends A(g){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,s]=O(this.normal);return $.normalize(R(t),0,!0)}set orientation(t){const s=ie(t,this.tilt);this._set("normal",s),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,s]=O(this.normal);return $.normalize(R(s),0,!0)}set tilt(t){const s=ie(this.orientation,t);this._set("normal",s),this._set("tilt",t)}};e([o({type:Boolean,json:{write:!0}})],I.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],I.prototype,"label",void 0),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(i=>$.normalize(R(i),0,!0))],I.prototype,"orientation",null),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(i=>$.normalize(R(i),0,!0))],I.prototype,"tilt",null),e([o({type:[Number],json:{write:!0}})],I.prototype,"normal",void 0),e([o({type:[Number],json:{write:!0}})],I.prototype,"point",void 0),I=e([m("esri.layers.voxel.VoxelSlice")],I);const oe=I;let S=class extends A(g){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,s]=O(this.normal);return $.normalize(R(t),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,s]=O(this.normal);return $.normalize(R(s),0,!0)}};e([o({type:Boolean,json:{default:!0,write:!0}})],S.prototype,"enabled",void 0),e([o({type:String,json:{origins:{service:{read:Me}},write:{enabled:!0,isRequired:!0}}}),rt({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],S.prototype,"href",void 0),e([o({type:z,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"id",void 0),e([o({type:String,json:{write:!0}})],S.prototype,"label",void 0),e([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],S.prototype,"orientation",null),e([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],S.prototype,"tilt",null),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"normal",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"point",void 0),e([o({type:[z],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"sizeInPixel",void 0),e([o({type:[oe],json:{write:!0}})],S.prototype,"slices",void 0),e([o({type:z,json:{default:0,write:!0}})],S.prototype,"timeId",void 0),e([o({type:z,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"variableId",void 0),S=e([m("esri.layers.voxel.VoxelSection")],S);const pe=S;let k=class extends g{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};e([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],k.prototype,"diffuseFactor",void 0),e([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],k.prototype,"specularFactor",void 0),k=e([m("esri.layers.voxel.VoxelSimpleShading")],k);const Ne=k;let N=class extends g{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};e([o({type:["discrete","continuous"],json:{write:!0}})],N.prototype,"continuity",void 0),e([o({type:Boolean,json:{write:!0}})],N.prototype,"hasNoData",void 0),e([o({type:Number,json:{write:!0}})],N.prototype,"noData",void 0),e([o({type:Number,json:{write:!0}})],N.prototype,"offset",void 0),e([o({type:Number,json:{write:!0}})],N.prototype,"scale",void 0),e([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],N.prototype,"type",void 0),N=e([m("esri.layers.voxel.VoxelFormat")],N);const Ve=N;let j=class extends g{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"id",void 0),e([o({type:String,json:{write:!0}})],j.prototype,"description",void 0),e([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"name",void 0),e([o({type:Ve,json:{write:!0}})],j.prototype,"originalFormat",void 0),e([o({type:Ve,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"renderingFormat",void 0),e([o({type:String,json:{write:!0}})],j.prototype,"unit",void 0),e([o({type:Number,json:{write:!0}})],j.prototype,"volumeId",void 0),e([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],j.prototype,"type",void 0),j=e([m("esri.layers.voxel.VoxelVariable")],j);const pt=j;let F=class extends A(g){constructor(){super(...arguments),this.color=B.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};e([o({type:B,json:{type:[z],write:{enabled:!0,isRequired:!0}}})],F.prototype,"color",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],F.prototype,"value",void 0),e([o({type:Boolean,json:{default:!0,write:!0}})],F.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],F.prototype,"label",void 0),e([o({type:Boolean,json:{default:!1,write:!0}})],F.prototype,"colorLocked",void 0),F=e([m("esri.layers.voxel.VoxelIsosurface")],F);const Te=F;let U=class extends A(g){constructor(){super(...arguments),this.color=null,this.position=0}};e([o({type:B,json:{type:[z],write:{enabled:!0,isRequired:!0}}})],U.prototype,"color",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"position",void 0),U=e([m("esri.layers.voxel.VoxelColorStop")],U);const ue=U;let W=class extends A(g){constructor(){super(...arguments),this.opacity=1,this.position=0}};e([o({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],W.prototype,"opacity",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"position",void 0),W=e([m("esri.layers.voxel.VoxelOpacityStop")],W);const ce=W;let J=class extends A(g){constructor(){super(...arguments),this.enabled=!1,this.range=null}};e([o({type:Boolean,json:{default:!1,write:!0}})],J.prototype,"enabled",void 0),e([o({type:[Number],json:{write:!0}})],J.prototype,"range",void 0),J=e([m("esri.layers.voxel.VoxelRangeFilter")],J);const ut=J;var V;(function(i){i[i.Color=1]="Color",i[i.Alpha=2]="Alpha",i[i.Both=3]="Both"})(V||(V={}));let T=class extends A(g){constructor(t){super(t),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(c.ofType(ue)),this.opacityStops=new(c.ofType(ce))}set colorStops(t){this._set("colorStops",te(t,this._get("colorStops"),c.ofType(ue)))}set opacityStops(t){this._set("opacityStops",te(t,this._get("opacityStops"),c.ofType(ce)))}getPreviousNext(t,s,r){let n=t;for(;--n>0&&s[n].type!==r&&s[n].type!==V.Both;);let l=t;const u=s.length;for(;++l<u&&s[l].type!==r&&s[l].type!==V.Both;);return[n,l]}get rasterizedTransferFunction(){const t=[];if(this.colorStops.length<2)return t;const s=[],r=[],n=1e-5;for(const p of this.colorStops){if(!p.color)return t;r.push({color:{r:p.color.r,g:p.color.g,b:p.color.b,a:Math.round(255*(1-p.color.a))},position:p.position,type:V.Color})}if(this.opacityStops.length===0)for(const p of r)s.push({color:p.color,position:p.position});else{for(const h of this.opacityStops){const y=H(h.position,0,1),d=Math.round(255*H(1-h.opacity,0,1));let f=!1;for(const v of r)if(v.type===V.Color&&Math.abs(v.position-y)<n){v.color.a=d,v.type=V.Both,f=!0;break}f||r.push({color:{r:0,g:0,b:0,a:d},position:h.position,type:V.Alpha})}r.sort((h,y)=>h.position<y.position?-1:1);const p=r.length;for(let h=0;h<p;++h){const y=r[h];if(y.type!==V.Both)if(y.type===V.Color){const[d,f]=this.getPreviousNext(h,r,V.Alpha);if(d!==-1&&f!==p){const v=(y.position-r[d].position)/(r[f].position-r[d].position);y.color.a=Math.round(K(r[d].color.a,r[f].color.a,v))}else y.color.a=d!==-1?r[d].color.a:r[f].color.a}else{const[d,f]=this.getPreviousNext(h,r,V.Color);if(d!==-1&&f!==p){const v=(y.position-r[d].position)/(r[f].position-r[d].position),C=r[d].color,Fe=r[f].color;Q.forEach(re=>{y.color[re]=Math.round(K(C[re],Fe[re],v))})}else d!==-1?Q.forEach(v=>{y.color[v]=r[d].color[v]}):Q.forEach(v=>{y.color[v]=r[f].color[v]})}}for(const h of r)s.push({color:h.color,position:h.position})}s[0].position=0,s[s.length-1].position=1;let l=0,u=1;for(let p=0;p<this._colorMapSize;++p){const h=p/this._colorMapSize;for(;h>s[u].position;)l=u++;const y=(h-s[l].position)/(s[u].position-s[l].position),d=s[l].color,f=s[u].color,v=new B;Q.forEach(C=>{v[C]=Math.round(K(d[C],f[C],y))}),v.a=H(1-K(d.a,f.a,y)/255,0,1),t.push(v)}return t}getColorForContinuousDataValue(t,s){const r=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||r.length<256)return null;let n=this.stretchRange[0],l=this.stretchRange[1];if(n>l){const p=n;n=l,l=p}t=H(t,n,l);const u=r[Math.round((t-n)/(l-n)*(this._colorMapSize-1))].clone();return s||(u.a=1),u}};e([o({type:["linear","nearest"],json:{write:!0}})],T.prototype,"interpolation",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],T.prototype,"stretchRange",void 0),e([o({type:c.ofType(ue),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],T.prototype,"colorStops",null),e([o({type:c.ofType(ce),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],T.prototype,"opacityStops",null),e([o({type:ut,json:{write:!0}})],T.prototype,"rangeFilter",void 0),e([o({type:[B],clonable:!1,json:{read:!1}})],T.prototype,"rasterizedTransferFunction",null),T=e([m("esri.layers.voxel.VoxelTransferFunctionStyle")],T);const ct=T,Q=["r","g","b"];let M=class extends A(g){constructor(){super(...arguments),this.color=B.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};e([o({type:B,json:{type:[z],write:{enabled:!0,isRequired:!0}}})],M.prototype,"color",void 0),e([o({type:z,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"value",void 0),e([o({type:Boolean,json:{default:!0,write:!0}})],M.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],M.prototype,"label",void 0),M=e([m("esri.layers.voxel.VoxelUniqueValue")],M);const qe=M;var ye;let P=ye=class extends g{constructor(i){super(i),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(c.ofType(qe)),this.isosurfaces=new(c.ofType(Te))}clone(){return new ye({variableId:this.variableId,label:this.label,transferFunction:G(this.transferFunction),uniqueValues:G(this.uniqueValues),isosurfaces:G(this.isosurfaces)})}};e([o({type:z,json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"variableId",void 0),e([o({type:String,json:{write:!0}})],P.prototype,"label",void 0),e([o({type:ct,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],P.prototype,"transferFunction",void 0),e([o({type:c.ofType(qe),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],P.prototype,"uniqueValues",void 0),e([o({type:c.ofType(Te),json:{write:{enabled:!0,overridePolicy(){const i=!this.uniqueValues||this.uniqueValues.length<1,t=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:i&&t}}}}})],P.prototype,"isosurfaces",void 0),P=ye=e([m("esri.layers.voxel.VoxelVariableStyle")],P);const De=P;let Z=class extends g{constructor(){super(...arguments),this.values=null}};e([o({type:[Number],json:{write:!0}})],Z.prototype,"values",void 0),Z=e([m("esri.layers.voxel.VoxelIrregularSpacing")],Z);const yt=Z;let X=class extends g{constructor(){super(...arguments),this.scale=1,this.offset=0}};e([o({type:Number,json:{write:!0}})],X.prototype,"scale",void 0),e([o({type:Number,json:{write:!0}})],X.prototype,"offset",void 0),X=e([m("esri.layers.voxel.VoxelRegularSpacing")],X);const dt=X;let x=class extends g{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){var i;return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray((i=this.irregularSpacing)==null?void 0:i.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};e([o({type:yt,json:{write:!0}})],x.prototype,"irregularSpacing",void 0),e([o({type:Boolean,json:{write:!0}})],x.prototype,"isPositiveUp",void 0),e([o({type:Boolean,json:{write:!0}})],x.prototype,"isWrappedDateLine",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"label",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"name",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"quantity",void 0),e([o({type:dt,json:{write:!0}})],x.prototype,"regularSpacing",void 0),e([o({type:Number,json:{write:!0}})],x.prototype,"size",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"unit",void 0),e([o({type:Boolean,json:{read:!1}})],x.prototype,"isRegular",null),x=e([m("esri.layers.voxel.VoxelDimension")],x);const ht=x;let w=class extends g{constructor(t){super(t),this.id=0,this.dimensions=null,this.spatialReference=$e.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let t=2;t<4;++t)if(this.dimensions[t].size>0)return t;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const t=this.dimensions[0].getRange(),s=this.dimensions[1].getRange(),r=this.dimensions[2],n=r.isRegular?r.getRange():[0,r.size];return[t[0],s[0],n[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const t=this.dimensions[0].getRange(),s=this.dimensions[1].getRange(),r=this.dimensions[2],n=r.isRegular?r.getRange():[0,r.size],l=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let u=0;u<3;++u)l[u]<2?l[u]=1:l[u]-=1;return r.isRegular&&!r.isPositiveUp&&(l[2]*=-1),[(t[1]-t[0])/l[0],(s[1]-s[0])/l[1],(n[1]-n[0])/l[2]]}get volumeType(){if(this.isValid){const t=this.dimensions[2].size>0,s=this.dimensions[3].size>0;if(!t&&s)return"xyt";if(t&&s)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const t=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[t].size]}computeVoxelSpaceLocation(t){var n;if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return L.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!_e(this.spatialReference,t.spatialReference))return L.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const s=Y(t.x,t.y,t.z??0);Be(s,s,this.originInLayerSpace3D),Ee(s,s,this.voxelSizeInLayerSpaceSigned);const r=this.dimensions[this.zDimension];if(!r.isRegular&&Array.isArray((n=r.irregularSpacing)==null?void 0:n.values)&&r.irregularSpacing.values.length>1){const l=t.z??0,u=r.irregularSpacing.values,p=r.isPositiveUp?1:-1,h=u.reduce((y,d)=>Math.abs(p*d-l)<Math.abs(p*y-l)?d:y);for(let y=0;y<u.length;++y)if(u[y]===h){s[2]=y;break}}return[s[0],s[1],s[2]]}computeLayerSpaceLocation(t){var n;if(!this.isValid)return new ne({x:0,y:0,spatialReference:this.spatialReference});const s=Oe(t);if(Ce(s,s,this.voxelSizeInLayerSpaceSigned),ke(s,s,this.originInLayerSpace3D),this.volumeType==="xyt")return new ne({x:s[0],y:s[1],spatialReference:this.spatialReference});const r=this.dimensions[this.zDimension];return r.isRegular||Array.isArray((n=r.irregularSpacing)==null?void 0:n.values)&&(t[2]<0?s[2]=r.irregularSpacing.values[0]:t[2]<r.irregularSpacing.values.length?s[2]=r.irregularSpacing.values[t[2]]:s[2]=r.irregularSpacing.values[r.irregularSpacing.values.length-1],r.isPositiveUp||(s[2]*=-1)),new ne({x:s[0],y:s[1],z:s[2],spatialReference:this.spatialReference})}};e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"id",void 0),e([o({type:[ht],json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"dimensions",void 0),e([o({type:$e,json:{read:{enabled:!1}}})],w.prototype,"spatialReference",void 0),e([o({type:Number,json:{read:!1}})],w.prototype,"zDimension",null),e([o({type:[Boolean],json:{read:!1}})],w.prototype,"isValid",null),e([o({type:[Number],json:{read:!1}})],w.prototype,"originInLayerSpace3D",null),e([o({type:[Number],json:{read:!1}})],w.prototype,"voxelSizeInLayerSpaceSigned",null),e([o({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],w.prototype,"volumeType",null),e([o({type:[Number],json:{read:!1}})],w.prototype,"sizeInVoxels",null),w=e([m("esri.layers.voxel.VoxelVolume")],w);const Le=w;var de;let _=de=class extends g{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const i=new de;return i.apronWidth===this.apronWidth&&i.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"apronWidth",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"brickSize",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"maxLodLevel",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"nodeSize",void 0),_=de=e([m("esri.layers.voxel.VoxelVolumeIndex")],_);const mt=_;let q=class extends A(g){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,s]=O(this.normal);return $.normalize(R(t),0,!0)}set orientation(t){const s=ie(t,this.tilt);this._set("normal",s),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,s]=O(this.normal);return $.normalize(R(s),0,!0)}set tilt(t){const s=ie(this.orientation,t);this._set("normal",s),this._set("tilt",t)}};e([o({type:Boolean,json:{default:!0,write:!0}})],q.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],q.prototype,"label",void 0),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(i=>$.normalize(R(i),0,!0))],q.prototype,"orientation",null),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(i=>$.normalize(R(i),0,!0))],q.prototype,"tilt",null),e([o({type:[Number],json:{write:!0}})],q.prototype,"normal",void 0),e([o({type:[Number],json:{write:!0}})],q.prototype,"point",void 0),q=e([m("esri.layers.voxel.VoxelDynamicSection")],q);const he=q;var me;let D=me=class extends g{constructor(i){super(i),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(c.ofType(oe)),this.dynamicSections=new(c.ofType(he))}set slices(i){this._set("slices",te(i,this._get("slices"),c.ofType(oe)))}set dynamicSections(i){this._set("dynamicSections",te(i,this._get("dynamicSections"),c.ofType(he)))}clone(){return new me({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:G(this.slices),dynamicSections:G(this.dynamicSections)})}};e([o({type:z,json:{write:{enabled:!0,isRequired:!0}}})],D.prototype,"volumeId",void 0),e([o({type:Number,json:{default:1,write:!0}})],D.prototype,"verticalExaggeration",void 0),e([o({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],D.prototype,"exaggerationMode",void 0),e([o({type:Number,json:{default:0,write:!0}})],D.prototype,"verticalOffset",void 0),e([o({type:c.ofType(oe),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],D.prototype,"slices",null),e([o({type:c.ofType(he),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],D.prototype,"dynamicSections",null),D=me=e([m("esri.layers.voxel.VoxelVolumeStyle")],D);const Ae=D;let a=class extends st(Ue(We(Je(Xe(Ge(Ye(He(ot)))))))){constructor(i){super(i),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new Ne,this.opacity=1,this.variables=new c,this.volumes=new c,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.test=null,this.volumeStyles=new(c.ofType(Ae)),this.variableStyles=new(c.ofType(De)),this.sections=new(c.ofType(pe))}normalizeCtorArgs(i){return i!=null&&i.constantUpscaling&&(this.test={constantUpscaling:!0},delete i.constantUpscaling),i}set url(i){this._set("url",Ke(i,L.getLogger(this)))}load(i){const t=i!=null?i.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},i).catch(Qe).then(()=>this._fetchService(t)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(s),Promise.resolve(this)}read(i,t){super.read(i,t);for(const s of this.volumes)s.spatialReference=this.spatialReference}readVersion(i,t){return super.parseVersionString(i)}validateLayer(i){if(i.layerType&&i.layerType!==this.operationalLayerType)throw new le("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:i.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new le("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new le("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(i,t,s){if(i!=null&&typeof i=="object"){const r=Re.fromJSON(i,s);if(r.zmin===0&&r.zmax===0&&Array.isArray(t.volumes)){const n=Le.fromJSON(t.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const l=n.dimensions[2];if(l.isRegular){let u=l.regularSpacing.offset,p=l.regularSpacing.offset+l.regularSpacing.scale*(l.size-1);if(u>p){const h=u;u=p,p=h}r.zmin=u,r.zmax=p}}}return r}return null}get voxelFields(){const i=[new E({name:"Voxel.ServiceValue",alias:"Value",domain:null,editable:!1,length:128,type:"string"}),new E({name:"Voxel.ServiceVariableLabel",alias:"Variable",domain:null,editable:!1,length:128,type:"string"}),new E({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"})],t=this.getVolume(null);if(t!=null){if(t.volumeType==="xyzt"||t.volumeType==="xyt"){const s=new E({name:"Voxel.ServiceLocalTime",alias:"Local Time",domain:null,editable:!1,length:128,type:"string"});i.push(s);const r=new E({name:"Voxel.ServiceNativeTime",alias:"Native Time",domain:null,editable:!1,length:128,type:"string"});i.push(r)}if(t.volumeType!=="xyt"){const s=new E({name:"Voxel.ServiceDepth",alias:"Depth",domain:null,editable:!1,length:128,type:"string"});i.push(s)}}return i}get popupTemplate(){return this.loaded?this.createPopupTemplate():null}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(i){const t=this.voxelFields,s=this.title;return Ze({fields:t,title:s},i)}getConfiguration(){var t,s;const i={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:(t=this.index)==null?void 0:t.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return i.index&&((s=this.index)!=null&&s.isValid())?JSON.stringify(i):""}getVariableStyle(i){let t=-1;if(t=i??this.currentVariableId,!this.variableStyles||t===-1)return null;const s=this.variableStyles.findIndex(r=>r.variableId===t);return s<0?null:this.variableStyles.at(s)}getVariable(i){let t=-1;if(t=i??this.currentVariableId,!this.variables||t===-1)return null;const s=this.variables.findIndex(r=>r.id===t);return s<0?null:this.variables.at(s)}getVolume(i){const t=this.getVariable(i);return t!=null?this.volumes.find(({id:s})=>s===t.volumeId):null}getVolumeStyle(i){const t=this.getVariable(i);return t!=null?this.volumeStyles.find(({volumeId:s})=>s===t.volumeId):null}getColorForContinuousDataValue(i,t,s){var u;const r=this.getVariable(i);if(r==null||((u=r.renderingFormat)==null?void 0:u.continuity)!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(p=>p.variableId===i);if(n<0)return null;const l=this.variableStyles.at(n);return l!=null&&l.transferFunction?l.transferFunction.getColorForContinuousDataValue(t,s):null}getSections(){const i=[];for(const t of this.sections)i.push(new pe({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return i}getVariableStyles(){const i=[];for(const t of this.variableStyles){const s=this._getVariable(t);if(s!=null){const r=t.clone();r.isosurfaces.length>4&&(r.isosurfaces=r.isosurfaces.slice(0,3),L.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of r.isosurfaces)if(!n.colorLocked){const l=this.getColorForContinuousDataValue(r.variableId,n.value,!1);l===null||l.equals(n.color)||(n.color=l)}if(s.renderingFormat.continuity==="continuous")(r.transferFunction===null||r.transferFunction.colorStops.length<2)&&L.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),r.transferFunction!==null&&(Array.isArray(r.transferFunction.stretchRange)&&r.transferFunction.stretchRange.length===2||(L.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),r.transferFunction.stretchRange=[0,1],r.transferFunction.colorStops.removeAll()));else if(s.renderingFormat.continuity==="discrete")if(t.uniqueValues.length===0)L.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of t.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());i.push(r)}else L.getLogger(this).error(`VoxelVariable ID=${t.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return i}getVolumeStyles(){const i=[];for(const t of this.volumeStyles){const s=this._getVolumeFromVolumeId(t.volumeId);if(s!=null){const r=t.clone();for(const n of r.slices)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of r.dynamicSections)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");i.push(r)}else L.getLogger(this).error(`VoxelVolume ID=${t.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return i}_getVariable(i){const t=i.variableId;for(const s of this.variables)if(s.id===t)return s;return null}_getVolumeFromVolumeId(i){for(const t of this.volumes)if(t.id===i)return t;return null}_isPlaneValid(i,t,s){if(!i.point||!Array.isArray(i.point)||i.point.length!==3||!i.normal||!Array.isArray(i.normal)||i.normal.length!==3)return!1;const r=Y(i.normal[0],i.normal[1],i.normal[2]);return ge(r,r),!(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<1e-6)&&(i.normal[0]=r[0],i.normal[1]=r[1],i.normal[2]=r[2],!0)}};e([o({type:["Voxel"]})],a.prototype,"operationalLayerType",void 0),e([o(et)],a.prototype,"legendEnabled",void 0),e([o({json:{write:!0}})],a.prototype,"title",void 0),e([o(tt)],a.prototype,"url",null),e([o({type:c.ofType(pe),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],a.prototype,"sections",void 0),e([o({type:z,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],a.prototype,"currentVariableId",void 0),e([o({type:c.ofType(Ae),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],a.prototype,"volumeStyles",void 0),e([o({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],a.prototype,"renderMode",void 0),e([o({type:c.ofType(De),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],a.prototype,"variableStyles",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],a.prototype,"enableSlices",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],a.prototype,"enableSections",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],a.prototype,"enableDynamicSections",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],a.prototype,"enableIsosurfaces",void 0),e([o({type:Ne,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],a.prototype,"shading",void 0),e([o({type:["show","hide"]})],a.prototype,"listMode",void 0),e([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),e([o({type:c.ofType(pt)})],a.prototype,"variables",void 0),e([o({type:c.ofType(Le)})],a.prototype,"volumes",void 0),e([o({type:mt})],a.prototype,"index",void 0),e([o({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],a.prototype,"minScale",void 0),e([o({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],a.prototype,"maxScale",void 0),e([o({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),e([o({readOnly:!0,json:{name:"serviceVersion"}})],a.prototype,"version",void 0),e([fe("service","version")],a.prototype,"readVersion",null),e([o({type:Re})],a.prototype,"fullExtent",void 0),e([fe("service","fullExtent",["fullExtent"])],a.prototype,"readFullExtent",null),e([o({readOnly:!0,clonable:!1,json:{read:!1}})],a.prototype,"voxelFields",null),e([o({type:Boolean,json:{name:"disablePopup",read:{reader:(i,t)=>!t.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(i,t,s){t[s]=!i}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],a.prototype,"popupEnabled",void 0),e([o({type:it,json:{read:!1}})],a.prototype,"popupTemplate",null),e([o({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),a=e([m("esri.layers.VoxelLayer")],a);const kt=a;export{kt as default};
