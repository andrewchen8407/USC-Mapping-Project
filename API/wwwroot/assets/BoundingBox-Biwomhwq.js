import{Z as c,a0 as l}from"./index--gWF5o_U.js";class a{constructor(t,i,e,h){this.computedX=0,this.computedY=0,this.center=c(t,i),this.centerT=l(),this.halfWidth=e/2,this.halfHeight=h/2,this.width=e,this.height=h}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new a(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,i=4){const e=Math.abs(t.centerT[0]-this.centerT[0]),h=Math.abs(t.centerT[1]-this.centerT[1]),s=(t.halfWidth+this.halfWidth+i)/e,r=(t.halfHeight+this.halfHeight+i)/h,n=Math.min(s,r);return Math.log2(n)}extend(t){const i=Math.min(this.xmin,t.xmin),e=Math.min(this.ymin,t.ymin),h=Math.max(this.xmax,t.xmax)-i,s=Math.max(this.ymax,t.ymax)-e,r=i+h/2,n=e+s/2;this.width=h,this.height=s,this.halfWidth=h/2,this.halfHeight=s/2,this.x=r,this.y=n}static deserialize(t){const i=t.readF32(),e=t.readF32(),h=t.readInt32(),s=t.readInt32();return new a(i,e,h,s)}}export{a as i};
