import{dr as z,c3 as j,c4 as V,bt as W,c5 as F,dt as G,ds as P,b6 as g,aU as w,cu as _,bX as x,dj as X,dm as y,dB as I,di as S,dC as $,dD as E,dE as D,dF as N,dG as m,s as k,aP as T,U as K,y as R,z as f,A as u,dH as q,c9 as B,B as O,bw as C,bW as b}from"./index-UN0u_eSp.js";import{I as U,x as H,Z}from"./elevationInfoUtils-yFTJcIDL.js";let p=class extends z(j(V(W(F(G(P(C))))))){constructor(a){super(a),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new g({wkid:4326,vcsWkid:115700}),this.fullExtent=new w(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(a){this._set("elevationInfo",a),this._validateElevationInfo()}_verifyArray(a,i){if(!Array.isArray(a)||a.length<i)return!1;for(const o of a)if(typeof o!="number")return!1;return!0}_initFullExtent(a){var L,M;const i=(L=a.root)==null?void 0:L.boundingVolume;if(!i)return;if(i.box){const t=i==null?void 0:i.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const o=(M=a.root)==null?void 0:M.transform,c=b();if(i.region&&this._verifyArray(i.region,6)){const t=i.region,l=_(t[0]),n=_(t[1]),r=t[4],s=_(t[2]),e=_(t[3]),d=t[5];this.fullExtent=new w({xmin:l,ymin:n,zmin:r,xmax:s,ymax:e,zmax:d,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const t=i.sphere,l=x(t[0],t[1],t[2]),n=t[3]/Math.sqrt(3),r=b();X(r,l,x(-n,-n,-n));const s=b();if(y(s,l,x(n,n,n)),o&&this._verifyArray(o,16)){const v=o;I(c,r,v),S(r,c),I(c,s,v),S(s,c)}$(r,E,0,r,g.WGS84,0,1),$(s,E,0,s,g.WGS84,0,1);const e=b(),d=b();D(e,r,s),N(d,r,s),this.fullExtent=new w({xmin:e[0],ymin:e[1],zmin:e[2],xmax:d[0],ymax:d[1],zmax:d[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const t=i.box,l=x(t[0],t[1],t[2]),n=x(t[3],t[4],t[5]),r=x(t[6],t[7],t[8]),s=x(t[9],t[10],t[11]),e=[];for(let h=0;h<8;++h)e.push(b());if(y(e[0],l,n),y(e[0],e[0],r),y(e[0],e[0],s),m(e[1],l,n),y(e[1],e[1],r),y(e[1],e[1],s),y(e[2],l,n),m(e[2],e[2],r),y(e[2],e[2],s),m(e[3],l,n),m(e[3],e[3],r),y(e[3],e[3],s),y(e[4],l,n),y(e[4],e[4],r),m(e[4],e[4],s),m(e[5],l,n),y(e[5],e[5],r),m(e[5],e[5],s),y(e[6],l,n),m(e[6],e[6],r),m(e[6],e[6],s),m(e[7],l,n),m(e[7],e[7],r),m(e[7],e[7],s),o&&this._verifyArray(o,16)){const h=o;for(let A=0;A<8;++A)I(e[A],e[A],h)}const d=x(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),v=x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let h=0;h<8;++h)$(e[h],E,0,e[h],g.WGS84,0,1),D(v,v,e[h]),N(d,d,e[h]);this.fullExtent=new w({xmin:v[0],ymin:v[1],zmin:v[2],xmax:d[0],ymax:d[1],zmax:d[2],spatialReference:this.spatialReference})}}async load(a){return this.addResolvingPromise(this._doLoad(a)),this}async _doLoad(a){const i=a!=null?a.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:o=>{var c;if((c=o.typeKeywords)!=null&&c.includes("IntegratedMesh"))return!0;throw new k("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},a)}catch(o){T(o)}this.url&&await K(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then(c=>{this._initFullExtent(c.data)},c=>{T(c)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(){const a=this.elevationInfo,i="Integrated mesh 3d tiles layers";U(R.getLogger(this),H(i,"absolute-height",a)),U(R.getLogger(this),Z(i,a))}};f([u({type:["IntegratedMesh3DTilesLayer"]})],p.prototype,"operationalLayerType",void 0),f([u({type:g})],p.prototype,"spatialReference",void 0),f([u({type:w})],p.prototype,"fullExtent",void 0),f([u(q)],p.prototype,"elevationInfo",null),f([u({type:["show","hide"]})],p.prototype,"listMode",void 0),f([u(B)],p.prototype,"url",void 0),f([u({readOnly:!0})],p.prototype,"type",void 0),f([u({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],p.prototype,"path",void 0),f([u({type:Number,json:{origins:{"web-scene":{name:"layerDefinition.minScale",write:()=>{},read:()=>{}},"portal-item":{name:"layerDefinition.minScale",write:()=>{},read:()=>{}}}}})],p.prototype,"minScale",void 0),f([u({type:Number,json:{origins:{"web-scene":{name:"layerDefinition.maxScale",write:()=>{},read:()=>{}},"portal-item":{name:"layerDefinition.maxScale",write:()=>{},read:()=>{}}}}})],p.prototype,"maxScale",void 0),p=f([O("esri.layers.IntegratedMesh3DTilesLayer")],p);const Y=p;export{Y as default};
