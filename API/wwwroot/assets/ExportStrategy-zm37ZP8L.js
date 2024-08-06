import{a1 as W,x as E,z as p,A as c,B as $,bx as N,C as R,ap as _,a2 as H,aP as T,aJ as q,cP as z,db as B,n as C}from"./index-qKE4VY30.js";import{b as I}from"./Bitmap-OA83olAX.js";const A=Math.PI/180;function U(e){return e*A}function j(e,i){const s=U(i.rotation),t=Math.abs(Math.cos(s)),r=Math.abs(Math.sin(s)),[o,n]=i.size;return e[0]=Math.round(n*r+o*t),e[1]=Math.round(n*t+o*r),e}function k(e,i,s,t){const[r,o]=i,[n,a]=t,l=.5*s;return e[0]=r-l*n,e[1]=o-l*a,e[2]=r+l*n,e[3]=o+l*a,e}const u=W(),m=[0,0],v=new E(0,0,0,0),y={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let h=class extends N{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=y.hidpi,this.imageMaxWidth=y.imageMaxWidth,this.imageMaxHeight=y.imageMaxHeight,this.imageRotationSupported=y.imageRotationSupported,this.imageNormalizationSupported=y.imageNormalizationSupported,this.update=R(async(i,s)=>{if(_(s),!i.stationary||this.destroyed)return;const t=i.state,r=H(t.spatialReference),o=this.hidpi?i.pixelRatio:1,n=this.imageNormalizationSupported&&t.worldScreenWidth&&t.worldScreenWidth<t.size[0],a=this.imageMaxWidth??0,l=this.imageMaxHeight??0;n?(m[0]=t.worldScreenWidth,m[1]=t.size[1]):this.imageRotationSupported?(m[0]=t.size[0],m[1]=t.size[1]):j(m,t);const S=Math.floor(m[0]*o)>a||Math.floor(m[1]*o)>l,M=r&&(t.extent.xmin<r.valid[0]||t.extent.xmax>r.valid[1]),x=!this.imageNormalizationSupported&&M,w=!S&&!x,f=this.imageRotationSupported?t.rotation:0,b=this.container.children.slice();if(w){const d=n?t.paddedViewState.center:t.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(t,m,d,t.resolution,f,o,s)}else{let d=Math.min(a,l);x&&(d=Math.min(t.worldScreenWidth,d)),this._imagePromise=this._tiledExport(t,d,o,s)}try{const d=await this._imagePromise??[];_(s);const P=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=d;for(const g of b)d.includes(g)||P.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of d)P.push(g.fadeIn());await Promise.all(P)}catch(d){this._imagePromise=null,T(d)}},5e3),this.updateExports=R(async i=>{const s=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;s.push(i(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=q(s).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(e=>e.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(e,i,s,t,r,o){const n=await this.fetchSource(e,Math.floor(i*r),Math.floor(s*r),{rotation:t,pixelRatio:r,signal:o});_(o);const a=new I(null,!0);return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/i,a.rotation=t,a.pixelRatio=r,a.opacity=0,this.container.addChild(a),await a.setSourceAsync(n,o),_(o),a}async _singleExport(e,i,s,t,r,o,n){k(u,s,t,i);const a=z(u,e.spatialReference);return[await this._export(a,i[0],i[1],r,o,n)]}_tiledExport(e,i,s,t){const r=B.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),o=new C(r),n=o.getTileCoverage(e);if(!n)return null;const a=[];return n.forEach((l,S,M,x)=>{v.set(l,S,M,0),o.getTileBounds(u,v);const w=z(u,e.spatialReference);a.push(this._export(w,i,i,0,s,t).then(f=>(x!==0&&(v.set(l,S,M,x),o.getTileBounds(u,v),f.x=u[0],f.y=u[3]),f)))}),Promise.all(a)}};p([c()],h.prototype,"_imagePromise",void 0),p([c()],h.prototype,"bitmaps",void 0),p([c()],h.prototype,"container",void 0),p([c()],h.prototype,"fetchSource",void 0),p([c()],h.prototype,"hidpi",void 0),p([c()],h.prototype,"imageMaxWidth",void 0),p([c()],h.prototype,"imageMaxHeight",void 0),p([c()],h.prototype,"imageRotationSupported",void 0),p([c()],h.prototype,"imageNormalizationSupported",void 0),p([c()],h.prototype,"requestUpdate",void 0),p([c()],h.prototype,"updating",null),h=p([$("esri.views.2d.layers.support.ExportStrategy")],h);const V=h;export{V as v};
