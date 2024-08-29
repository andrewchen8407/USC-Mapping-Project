import{iK as Tt,bo as L,dl as G,dm as M,hb as Q,di as Y,hc as Ot,bW as S,bX as p,hd as tt,h7 as K,z as bt,B as gt,ap as Rt,dh as z}from"./index-yumUYLd_.js";import{v as Et,b as Nt,j as At}from"./lineSegment-oxx1G8b1.js";import{d as et,O as H,p as nt,Z as _,V as $,I as ot,w as j,s as it}from"./sphere-MoXsRUbH.js";import{s as ut}from"./ObjectStack-VmwSqdS_.js";import"./plane-uQBH7WYj.js";import{i as st}from"./Util-Xaxy4fi5.js";import{m as St}from"./edgeProcessing-y1xziumZ.js";import"./mat3f64-Km-wq5a6.js";import"./mat4f64-BN7r1OmG.js";import"./quatf64-upBlkCdX.js";import"./deduplicate-SqfQmMqM.js";import"./Indices-8M5u3ZDV.js";import"./InterleavedLayout-dZd8uGK-.js";import"./BufferView-TOjOiFlR.js";import"./types-GBdbcYRa.js";import"./VertexAttribute-Hx-XL6n4.js";function lt(o){return o?{ray:et(o.ray),c0:o.c0,c1:o.c1}:{ray:et(),c0:0,c1:Number.MAX_VALUE}}new ut(()=>lt());function C(o,t){for(let e=0;e<Ft;e++){const n=o[e];if(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]>=t[3])return!1}return!0}var rt,c;(function(o){o[o.LEFT=0]="LEFT",o[o.RIGHT=1]="RIGHT",o[o.BOTTOM=2]="BOTTOM",o[o.TOP=3]="TOP",o[o.NEAR=4]="NEAR",o[o.FAR=5]="FAR"})(rt||(rt={})),function(o){o[o.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",o[o.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",o[o.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",o[o.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",o[o.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",o[o.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",o[o.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",o[o.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(c||(c={}));c.FAR_BOTTOM_RIGHT,c.NEAR_BOTTOM_RIGHT,c.NEAR_BOTTOM_LEFT,c.FAR_BOTTOM_LEFT,c.NEAR_BOTTOM_LEFT,c.NEAR_BOTTOM_RIGHT,c.NEAR_TOP_RIGHT,c.NEAR_TOP_LEFT,c.FAR_BOTTOM_RIGHT,c.FAR_BOTTOM_LEFT,c.FAR_TOP_LEFT,c.FAR_TOP_RIGHT,c.NEAR_BOTTOM_RIGHT,c.FAR_BOTTOM_RIGHT,c.FAR_TOP_RIGHT,c.NEAR_TOP_RIGHT,c.FAR_BOTTOM_LEFT,c.NEAR_BOTTOM_LEFT,c.NEAR_TOP_LEFT,c.FAR_TOP_LEFT,c.FAR_TOP_LEFT,c.NEAR_TOP_LEFT,c.NEAR_TOP_RIGHT,c.FAR_TOP_RIGHT;const Ft=6;new ut(lt);let J=class D{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new u,this._objectCount=0,e&&(e.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),e.maximumDepth!==void 0&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),u.clearPool(),U[0]=null,F.prune(),x.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=u.acquire();for(let i=0;i<e;i++){const s=t[i];this._isDegenerate(s)?this._degenerateObjects.add(s):(n.init(this._root),this._add(s,n))}u.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=u.acquire();for(const i of t){const s=e??H(this.objectToBoundingSphere(i),Pt);I(s[3])?(n.init(this._root),this._remove(i,s,n)):this._degenerateObjects.delete(i)}u.release(n),this._shrink()}update(t,e){if(!I(e[3])&&this._isDegenerate(t))return;const n=Bt(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const i=nt(t,e);this._forEachNode(this._root,s=>{if(!this._intersectsNode(i,s))return!1;const h=s.node;return h.terminals.forAll(d=>{this._intersectsObject(i,d)&&n(d)}),h.residents!==null&&h.residents.forAll(d=>{this._intersectsObject(i,d)&&n(d)}),!0})}forEachAlongRayWithVerticalOffset(t,e,n,i){const s=nt(t,e);this._forEachNode(this._root,h=>{if(!this._intersectsNodeWithOffset(s,h,i))return!1;const d=h.node;return d.terminals.forAll(r=>{this._intersectsObjectWithOffset(s,r,i)&&n(r)}),d.residents!==null&&d.residents.forAll(r=>{this._intersectsObjectWithOffset(s,r,i)&&n(r)}),!0})}forEach(t){this._forEachNode(this._root,e=>{const n=e.node;return n.terminals.forAll(t),n.residents!==null&&n.residents.forAll(t),!0}),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,i=()=>!0,s=1/0){let h=1/0,d=1/0,r=null;const a=q(t,e),m=l=>{if(--s,!i(l))return;const T=this.objectToBoundingSphere(l);if(!C(n,T))return;const R=A(t,e,_(T)),B=R-T[3],f=R+T[3];B<h&&(h=B,d=f,r=l)};return this._forEachNodeDepthOrdered(this._root,l=>{if(s<=0||!C(n,l.bounds)||(G(g,a,l.halfSize),M(g,g,_(l.bounds)),A(t,e,g)>d))return!1;const T=l.node;return T.terminals.forAll(R=>m(R)),T.residents!==null&&T.residents.forAll(R=>m(R)),!0},t,e),r}forEachInDepthRange(t,e,n,i,s,h,d){let r=-1/0,a=1/0;const m={setRange:f=>{n===D.DepthOrder.FRONT_TO_BACK?(r=Math.max(r,f.near),a=Math.min(a,f.far)):(r=Math.max(r,-f.far),a=Math.min(a,-f.near))}};m.setRange(i);const l=A(e,n,t),T=q(e,n),R=q(e,-n),B=f=>{if(!d(f))return;const N=this.objectToBoundingSphere(f),P=_(N),Z=A(e,n,P)-l,ft=Z-N[3],pt=Z+N[3];ft>a||pt<r||!C(h,N)||s(f,m)};this._forEachNodeDepthOrdered(this._root,f=>{if(!C(h,f.bounds)||(G(g,T,f.halfSize),M(g,g,_(f.bounds)),A(e,n,g)-l>a)||(G(g,R,f.halfSize),M(g,g,_(f.bounds)),A(e,n,g)-l<r))return!1;const N=f.node;return N.terminals.forAll(P=>B(P)),N.residents!==null&&N.residents.forAll(P=>B(P)),!0},e,n)}forEachNode(t){this._forEachNode(this._root,e=>t(e.node,e.bounds,e.halfSize,e.depth))}forEachNeighbor(t,e){const n=$(e),i=_(e),s=r=>{const a=this.objectToBoundingSphere(r),m=$(a),l=n+m;return!(Q(_(a),i)-l*l<=0)||t(r)};let h=!0;const d=r=>{h&&(h=s(r))};this._forEachNode(this._root,r=>{const a=$(r.bounds),m=n+a;if(Q(_(r.bounds),i)-m*m>0)return!1;const l=r.node;return l.terminals.forAll(d),h&&l.residents!==null&&l.residents.forAll(d),h}),h&&this.forEachDegenerateObject(d)}_intersectsNode(t,e){return v(_(e.bounds),2*-e.halfSize,O),v(_(e.bounds),2*e.halfSize,b),st(t.origin,t.direction,O,b)}_intersectsNodeWithOffset(t,e,n){return v(_(e.bounds),2*-e.halfSize,O),v(_(e.bounds),2*e.halfSize,b),n.applyToMinMax(O,b),st(t.origin,t.direction,O,b)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||ot(n,t)}_intersectsObjectWithOffset(t,e,n){const i=this.objectToBoundingSphere(e);return!(i[3]>0)||ot(n.applyToBoundingSphere(i),t)}_forEachNode(t,e){let n=u.acquire().init(t);const i=[n];for(;i.length!==0;){if(n=i.pop(),e(n)&&!n.isLeaf())for(let s=0;s<n.node.children.length;s++)n.node.children[s]&&i.push(u.acquire().init(n).advance(s));u.release(n)}}_forEachNodeDepthOrdered(t,e,n,i=D.DepthOrder.FRONT_TO_BACK){let s=u.acquire().init(t);const h=[s];for(Mt(n,i,at);h.length!==0;){if(s=h.pop(),e(s)&&!s.isLeaf())for(let d=7;d>=0;--d){const r=at[d];s.node.children[r]&&h.push(u.acquire().init(s).advance(r))}u.release(s)}}_remove(t,e,n){F.clear();const i=n.advanceTo(e,(s,h)=>{F.push(s.node),F.push(h)})?n.node.terminals:n.node.residents;if(i.removeUnordered(t),i.length===0)for(let s=F.length-2;s>=0;s-=2){const h=F.data[s],d=F.data[s+1];if(!this._purge(h,d))break}}_nodeIsEmpty(t){if(t.terminals.length!==0)return!1;if(t.residents!==null)return t.residents.length===0;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(t.residents===null&&(t.residents=new L({shrink:!0})),!0)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const i=u.acquire().init(t);this._add(e.at(n),i),u.release(i)}}_grow(t,e){if(e!==0&&(ht(t,e,n=>this.objectToBoundingSphere(n),E),I(E[3])&&!this._fitsInsideTree(E)))if(this._nodeIsEmpty(this._root.node))H(E,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const n=this._rootBoundsForRootAsSubNode(E);this._placingRootViolatesMaxDepth(n)?this._rebuildTree(E,n):this._growRootAsSubNode(n),u.release(n)}}_rebuildTree(t,e){Y(_(k),_(e.bounds)),k[3]=e.halfSize,ht([t,k],2,i=>i,W);const n=u.acquire().init(this._root);this._root.initFrom(null,W,W[3]),this._root.increaseHalfSize(1.25),this._forEachNode(n,i=>(this.add(i.node.terminals.data,i.node.terminals.length),i.node.residents!==null&&this.add(i.node.residents.data,i.node.residents.length),!0)),u.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,i=>(n=Math.max(n,i.depth),n+e<=this._maximumDepth)),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let i=-1/0;const s=this._root.bounds,h=this._root.halfSize;for(let r=0;r<3;r++){const a=s[r]-h-(n[r]-e),m=n[r]+e-(s[r]+h),l=Math.max(0,Math.ceil(a/(2*h))),T=Math.max(0,Math.ceil(m/(2*h)))+1,R=2**Math.ceil(Math.log(l+T)*Math.LOG2E);i=Math.max(i,R),w[r].min=l,w[r].max=T}for(let r=0;r<3;r++){let a=w[r].min,m=w[r].max;const l=(i-(a+m))/2;a+=Math.ceil(l),m+=Math.floor(l);const T=s[r]-h-a*h*2;V[r]=T+(m+a)*h}const d=i*h;return V[3]=d*mt,u.acquire().initFrom(null,V,d,0)}_growRootAsSubNode(t){const e=this._root.node;Y(_(E),_(this._root.bounds)),E[3]=this._root.halfSize,this._root.init(t),t.advanceTo(E,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(t===-1)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,i=0;for(;i<e.length&&t==null;)n=i++,t=e[n];for(;i<e.length;)if(e[i++])return-1;return n}_isDegenerate(t){return!I(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,i=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:i}}}_nodeToJSON(t){var s,h;const e=t.children.map(d=>d?this._nodeToJSON(d):null),n=(s=t.residents)==null?void 0:s.map(d=>this.objectToBoundingSphere(d)),i=(h=t.terminals)==null?void 0:h.map(d=>this.objectToBoundingSphere(d));return{children:e,residents:n,terminals:i}}static fromJSON(t){const e=new D(n=>n,{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}};class u{constructor(){this.bounds=j(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,i=this.depth){return this.node=t??u.createEmptyNode(),e&&H(e,this.bounds),this.halfSize=n,this.depth=i,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*mt}advance(t){let e=this.node.children[t];e||(e=u.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=_t[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return this.node.residents!=null}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new L({shrink:!0}),residents:new L({shrink:!0})}}static acquire(){return u._pool.acquire()}static release(t){u._pool.release(t)}static clearPool(){u._pool.prune()}}function xt(o,t){o[0]=Math.min(o[0],t[0]-t[3]),o[1]=Math.min(o[1],t[1]-t[3]),o[2]=Math.min(o[2],t[2]-t[3])}function jt(o,t){o[0]=Math.max(o[0],t[0]+t[3]),o[1]=Math.max(o[1],t[1]+t[3]),o[2]=Math.max(o[2],t[2]+t[3])}function v(o,t,e){e[0]=o[0]+t,e[1]=o[1]+t,e[2]=o[2]+t}function ht(o,t,e,n){if(t===1){const i=e(o[0]);H(i,n)}else{O[0]=1/0,O[1]=1/0,O[2]=1/0,b[0]=-1/0,b[1]=-1/0,b[2]=-1/0;for(let i=0;i<t;i++){const s=e(o[i]);I(s[3])&&(xt(O,s),jt(b,s))}Ot(_(n),O,b,.5),n[3]=Math.max(b[0]-O[0],b[1]-O[1],b[2]-O[2])/2}}function Mt(o,t,e){if(!x.length)for(let n=0;n<8;++n)x.push({index:0,distance:0});for(let n=0;n<8;++n){const i=_t[n];x.data[n].index=n,x.data[n].distance=A(o,t,i)}x.sort((n,i)=>n.distance-i.distance);for(let n=0;n<8;++n)e[n]=x.data[n].index}function q(o,t){let e,n=1/0;for(let i=0;i<8;++i){const s=A(o,t,dt[i]);s<n&&(n=s,e=dt[i])}return e}function A(o,t,e){return t*(o[0]*e[0]+o[1]*e[1]+o[2]*e[2])}function I(o){return!isNaN(o)&&o!==-1/0&&o!==1/0&&o>0}u._pool=new Tt(u),function(o){var t;(t=o.DepthOrder||(o.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(J||(J={}));const _t=[p(-1,-1,-1),p(1,-1,-1),p(-1,1,-1),p(1,1,-1),p(-1,-1,1),p(1,-1,1),p(-1,1,1),p(1,1,1)],dt=[p(-1,-1,-1),p(-1,-1,1),p(-1,1,-1),p(-1,1,1),p(1,-1,-1),p(1,-1,1),p(1,1,-1),p(1,1,1)],mt=Math.sqrt(3),U=[null];function Bt(o){return U[0]=o,U}const V=j(),g=S(),O=S(),b=S(),F=new L,Pt=j(),E=j(),k=j(),W=j(),w=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],x=new L,at=[0,0,0,0,0,0,0,0],ct=J,It=1e3;function Lt(o,t,e){const n=j(),i=_(n);return tt(i,i,o,.5),tt(i,i,t,.5),n[3]=K(i,o),M(i,i,e),n}let X=class{constructor(){this._idToComponent=new Map,this._components=new ct(o=>o.bounds),this._edges=new ct(o=>o.bounds),this._tmpLineSegment=Et(),this._tmpP1=S(),this._tmpP2=S(),this._tmpP3=S(),this.remoteClient=null}async fetchCandidates(o,t){await Promise.resolve(),Rt(t),await this._ensureEdgeLocations(o,t);const e=[];return this._edges.forEachNeighbor(n=>(this._addCandidates(o,n,e),e.length<It),o.bounds),{result:{candidates:e}}}async _ensureEdgeLocations(o,t){const e=[];if(this._components.forEachNeighbor(s=>{if(s.info==null){const{id:h,uid:d}=s;e.push({id:h,uid:d})}return!0},o.bounds),!e.length)return;const n={components:e},i=await this.remoteClient.invoke("fetchAllEdgeLocations",n,t??{});for(const s of i.components)this._setFetchEdgeLocations(s)}async add(o){const t=new y(o.id,o.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(o){const t=this._idToComponent.get(o.id);if(t){const e=[];this._edges.forEachNeighbor(n=>(n.component===t&&e.push(n),!0),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id)}return{result:{}}}_setFetchEdgeLocations(o){const t=this._idToComponent.get(o.id);if(t==null||o.uid!==t.uid)return;const e=St.createView(o.locations),n=new Array(e.count),i=S(),s=S();for(let r=0;r<e.count;r++){e.position0.getVec(r,i),e.position1.getVec(r,s);const a=Lt(i,s,o.origin),m=new zt(t,r,a);n[r]=m}this._edges.add(n);const{objectIds:h,origin:d}=o;t.info={locations:e,objectIds:h,origin:d}}_addCandidates(o,t,e){const{info:n}=t.component,{origin:i,objectIds:s}=n,h=n.locations,d=h.position0.getVec(t.index,this._tmpP1),r=h.position1.getVec(t.index,this._tmpP2);M(d,d,i),M(r,r,i);const a=s[h.componentIndex.get(t.index)];this._addEdgeCandidate(o,a,d,r,e),this._addVertexCandidate(o,a,d,e),this._addVertexCandidate(o,a,r,e)}_addEdgeCandidate(o,t,e,n,i){if(!o.returnEdge)return;const s=_(o.bounds),h=Nt(e,n,this._tmpLineSegment),d=At(h,s,this._tmpP3);it(o.bounds,d)&&i.push({type:"edge",objectId:t,target:z(d),distance:K(s,d),start:z(e),end:z(n)})}_addVertexCandidate(o,t,e,n){if(!o.returnVertex||!it(o.bounds,e))return;const i=_(o.bounds);n.push({type:"vertex",objectId:t,target:z(e),distance:K(i,e)})}};X=bt([gt("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],X);const Zt=X;class y{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++y.uid}}y.uid=0;class zt{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}export{Zt as default};
