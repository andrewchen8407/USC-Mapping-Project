import{z as a,A as s,B as v,bx as W,bF as k,b6 as Y,ae as Ue,_ as he,eC as fe,s as d,ex as ie,aT as ve,an as Ie,aS as ae,aR as se,y as Re,U as $,aQ as qe}from"./index-dJP7MR2j.js";import{m as Ge,p as be,t as Ye,c as Qe}from"./GraphQueryStreaming-99oloNRv.js";let L=class extends W{constructor(r){super(r),this.resultRows=[]}};a([s()],L.prototype,"resultRows",void 0),L=a([v("esri.rest.knowledgeGraph.GraphQueryResult")],L);const ge=L;let C=class extends W{constructor(r){super(r),this.resultRowsStream=new ReadableStream}};a([s()],C.prototype,"resultRowsStream",void 0),C=a([v("esri.rest.knowledgeGraph.GraphQueryResult")],C);const _e=C;let b=class extends k{constructor(r){super(r),this.name=null,this.unique=null,this.ascending=null,this.description=null,this.fieldNames=null}};a([s({type:String,json:{write:!0}})],b.prototype,"name",void 0),a([s({type:Boolean,json:{write:!0}})],b.prototype,"unique",void 0),a([s({type:Boolean,json:{write:!0}})],b.prototype,"ascending",void 0),a([s({type:String,json:{write:!0}})],b.prototype,"description",void 0),a([s({type:[String],json:{write:!0}})],b.prototype,"fieldNames",void 0),b=a([v("esri.rest.knowledgeGraph.FieldIndex")],b);const Se=b;let _=class extends k{constructor(r){super(r),this.name=null,this.alias=null,this.fieldType=null,this.geometryType=null,this.hasM=null,this.hasZ=null,this.nullable=null,this.editable=null,this.required=null,this.defaultVisibility=null,this.systemMaintained=null,this.role=null,this.defaultValue=null}};a([s({type:String,json:{write:!0}})],_.prototype,"name",void 0),a([s({type:String,json:{write:!0}})],_.prototype,"alias",void 0),a([s({type:String,json:{write:!0}})],_.prototype,"fieldType",void 0),a([s({type:String,json:{write:!0}})],_.prototype,"geometryType",void 0),a([s({type:Boolean,json:{write:!0}})],_.prototype,"hasM",void 0),a([s({type:Boolean,json:{write:!0}})],_.prototype,"hasZ",void 0),a([s({type:Boolean,json:{write:!0}})],_.prototype,"nullable",void 0),a([s({type:Boolean,json:{write:!0}})],_.prototype,"editable",void 0),a([s({type:Boolean,json:{write:!0}})],_.prototype,"required",void 0),a([s({type:Boolean,json:{write:!0}})],_.prototype,"defaultVisibility",void 0),a([s({type:Boolean,json:{write:!0}})],_.prototype,"systemMaintained",void 0),a([s()],_.prototype,"role",void 0),a([s({type:Object,json:{type:String,write:{writer:(e,r)=>{r.defaultValue=e!=null?e.toString():null}}}})],_.prototype,"defaultValue",void 0),_=a([v("esri.rest.knowledgeGraph.GraphProperty")],_);const xe=_;let G=class extends k{constructor(r){super(r),this.name=null,this.alias=null,this.role=null,this.strict=null,this.properties=null,this.fieldIndexes=null}};a([s({type:String,json:{write:!0}})],G.prototype,"name",void 0),a([s({type:String,json:{write:!0}})],G.prototype,"alias",void 0),a([s({type:String,json:{write:!0}})],G.prototype,"role",void 0),a([s({type:Boolean,json:{write:!0}})],G.prototype,"strict",void 0),a([s({type:[xe],json:{write:!0}})],G.prototype,"properties",void 0),a([s({type:[Se],json:{write:!0}})],G.prototype,"fieldIndexes",void 0),G=a([v("esri.rest.knowledgeGraph.GraphObjectType")],G);const Me=G;let X=class extends Me{constructor(r){super(r)}};X=a([v("esri.rest.knowledgeGraph.EntityType")],X);const Oe=X;let U=class extends Me{constructor(r){super(r),this.endPoints=[]}};a([s()],U.prototype,"endPoints",void 0),U=a([v("esri.rest.knowledgeGraph.RelationshipType")],U);const Pe=U;let E=class extends k{constructor(e){super(e),this.timestamp=null,this.spatialReference=null,this.strict=null,this.objectIdField=null,this.globalIdField=null,this.arcgisManaged=null,this.identifierInfo=null,this.searchIndexes=null,this.entityTypes=null,this.relationshipTypes=null}};a([s({type:Date,json:{type:Number,write:{writer:(e,r)=>{r.timestamp=e==null?void 0:e.getTime()}}}})],E.prototype,"timestamp",void 0),a([s({type:Y,json:{write:!0}})],E.prototype,"spatialReference",void 0),a([s({type:Boolean,json:{write:!0}})],E.prototype,"strict",void 0),a([s({type:String,json:{write:!0}})],E.prototype,"objectIdField",void 0),a([s({type:String,json:{write:!0}})],E.prototype,"globalIdField",void 0),a([s()],E.prototype,"arcgisManaged",void 0),a([s()],E.prototype,"identifierInfo",void 0),a([s()],E.prototype,"searchIndexes",void 0),a([s({type:[Oe],json:{write:!0}})],E.prototype,"entityTypes",void 0),a([s({type:[Pe],json:{write:!0}})],E.prototype,"relationshipTypes",void 0),E=a([v("esri.rest.knowledgeGraph.DataModel")],E);const ke=E;let f=class extends k{constructor(r){super(r),this.capabilities=[],this.supportsSearch=!1,this.supportedQueryFormats=[],this.allowGeometryUpdates=!1,this.searchMaxRecordCount=null,this.serviceCapabilities=null,this.maxRecordCount=null,this.description="",this.copyrightText="",this.units="",this.spatialReference=null,this.currentVersion=null,this.dateFieldsTimeReference=null,this.serviceItemId="",this.supportsDocuments=!1,this.dataEditingNotSupported=!1,this.schemaEditingNotSupported=!1}};a([s({type:[String],json:{write:!0}})],f.prototype,"capabilities",void 0),a([s({type:Boolean,json:{write:!0}})],f.prototype,"supportsSearch",void 0),a([s({type:[String],json:{write:!0}})],f.prototype,"supportedQueryFormats",void 0),a([s({type:Boolean,json:{write:!0}})],f.prototype,"allowGeometryUpdates",void 0),a([s({type:Number,json:{write:!0}})],f.prototype,"searchMaxRecordCount",void 0),a([s({type:Object,json:{write:!0}})],f.prototype,"serviceCapabilities",void 0),a([s({type:Number,json:{write:!0}})],f.prototype,"maxRecordCount",void 0),a([s({type:String,json:{write:!0}})],f.prototype,"description",void 0),a([s({type:String,json:{write:!0}})],f.prototype,"copyrightText",void 0),a([s({type:String,json:{write:!0}})],f.prototype,"units",void 0),a([s({type:Object,json:{write:!0}})],f.prototype,"spatialReference",void 0),a([s({type:Number,json:{write:!0}})],f.prototype,"currentVersion",void 0),a([s({type:Object,json:{write:!0}})],f.prototype,"dateFieldsTimeReference",void 0),a([s({type:String,json:{write:!0}})],f.prototype,"serviceItemId",void 0),a([s({type:Boolean,json:{write:!0}})],f.prototype,"supportsDocuments",void 0),a([s({type:Boolean,json:{write:!0}})],f.prototype,"dataEditingNotSupported",void 0),a([s({type:Boolean,json:{write:!0}})],f.prototype,"schemaEditingNotSupported",void 0),f=a([v("esri.rest.knowledgeGraph.ServiceDefinition")],f);const je=f;let O=class extends k{constructor(r){super(r),this.dataModel=null,this.serviceDefinition=null}};a([s({type:String,json:{write:!0}})],O.prototype,"url",void 0),a([s({type:ke,json:{write:!0}})],O.prototype,"dataModel",void 0),a([s({type:je,json:{write:!0}})],O.prototype,"serviceDefinition",void 0),O=a([v("esri.rest.knowledgeGraph.KnowledgeGraph")],O);const Be=O,me="esri/rest/knowledgeGraph/wasmInterface/";let K;async function S(){const e=K;if(e)return e;const r=Ue("wasm-simd");return K=Ve(r),K}async function Ve(e){if(e){const{default:t}=await he(()=>import("./arcgis-knowledge-client-core-simd-bQpfZ-lo.js"),__vite__mapDeps([0,1,2])).then(n=>n.a);return t({locateFile:n=>fe(me+n)})}const{default:r}=await he(()=>import("./arcgis-knowledge-client-core-BTCbBySF.js"),__vite__mapDeps([3,1,2])).then(t=>t.a);return r({locateFile:t=>fe(me+t)})}function Fe(e,r){const t=new r.ArrayValue;return t.deleteLater(),e.forEach(n=>{t.add_value(pe(n,r))}),t}function $e(e,r){const t=new r.ObjectValue;t.deleteLater();for(const[n,o]of Object.entries(e))t.set_key_value(n,pe(o,r));return t}function le(e,r){if(e instanceof ve)return Ze(e,r);if(e instanceof Ie)return Je(e,r);if(e instanceof ae||e instanceof se)return Ke(e,r);throw new d("knowledge-graph:unsupported-geometry","Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge",{geometry:e})}function We(e,r){r.input_quantization_parameters={xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}function He(e,r,t){if(!e.extent)throw new d("knowledge-graph:illegal-output-quantization","The Output quantization provided to the encoder had an illegal value as part of its extent",e.extent);if(!e.quantizeMode)throw new d("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal mode setting",e.quantizeMode);if(!e.tolerance)throw new d("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal tolerance setting",e.quantizeMode);r.output_quantization_parameters={extent:{xmax:e.extent.xmax,ymax:e.extent.ymax,xmin:e.extent.xmin,ymin:e.extent.ymin},quantize_mode:t.esriQuantizeMode[e.quantizeMode],tolerance:e.tolerance}}function pe(e,r){if(e==null)return"";if(typeof e!="object"||e instanceof Date)return e;if(e instanceof ie)return le(e,r);if(Array.isArray(e)){const t=new r.ArrayValue;return t.deleteLater(),e.forEach(n=>{t.add_value(pe(n,r))}),t}return $e(e,r)}function Ke(e,r){const t=new r.GeometryValue;t.deleteLater(),t.has_z=e.hasZ,t.has_m=e.hasM;const n=[],o=[];let i=[];e instanceof ae?(t.geometry_type=r.esriGeometryType.esriGeometryPolyline,i=e.paths):e instanceof se&&(t.geometry_type=r.esriGeometryType.esriGeometryPolygon,i=e.rings);let l=0,p=0;return i.forEach(u=>{let c=0;u.forEach(h=>{c++,h.forEach(m=>{n[p]=m,p++})}),o[l]=c,l++}),t.coords=new Float64Array(n),t.lengths=new Uint32Array(o),t}function Ze(e,r){const t=new r.GeometryValue;t.deleteLater(),t.geometry_type=t.geometry_type=r.esriGeometryType.esriGeometryMultipoint,t.has_z=e.hasZ,t.has_m=e.hasM;const n=[],o=[];o[0]=e.points.length;let i=0;return e.points.forEach(l=>{l.forEach(p=>{n[i]=p,i++})}),t.coords=new Float64Array(n),t.lengths=new Uint32Array(o),t}function Je(e,r){const t=new r.GeometryValue;t.deleteLater(),t.geometry_type=r.esriGeometryType.esriGeometryPoint,t.has_z=e.hasZ,t.has_m=e.hasM;const n=[],o=[];o[0]=1,n[0]=e.x,n[1]=e.y;let i=2;return e.hasZ&&(n[i]=e.z,i++),e.hasM&&(n[i]=e.m,i++),t.coords=new Float64Array(n),t.lengths=new Uint32Array(o),t}function A(e,r){if(!e.typeName)throw new d("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits");if(e instanceof Ge){const t=new r.EntityValue;t.deleteLater(),t.type_name=e.typeName;for(const[n,o]of Object.entries(e.properties))t.set_key_value(n,we(o,r));return e.id&&t.set_id(e.id),t}if(e instanceof be){const t=new r.RelationshipValue;t.deleteLater(),t.type_name=e.typeName;for(const[n,o]of Object.entries(e.properties))t.set_key_value(n,we(o,r));return e.id&&t.set_id(e.id),e.originId&&e.destinationId&&t.set_related_entity_ids(e.originId,e.destinationId),t}throw new d("knowledge-graph:applyEdits-encoding-failure","Could not determine the type of a named graph object passed to the encoder")}function Xe(e){return{xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}function we(e,r){return e==null?"":typeof e!="object"||e instanceof Date?e:e instanceof ie?le(e,r):""}let x=class extends W{constructor(r){super(r),this.name=null,this.supportedCategory=null,this.analyzers=[],this.searchProperties=new Map}};a([s()],x.prototype,"name",void 0),a([s()],x.prototype,"supportedCategory",void 0),a([s()],x.prototype,"analyzers",void 0),a([s()],x.prototype,"searchProperties",void 0),x=a([v("esri.rest.knowledgeGraph.SearchIndex")],x);const et=x;var Q,B,V,ee,te,re,ne;(function(e){e[e.Regular=0]="Regular",e[e.Provenance=1]="Provenance",e[e.Document=2]="Document"})(Q||(Q={})),function(e){e[e.esriFieldTypeSmallInteger=0]="esriFieldTypeSmallInteger",e[e.esriFieldTypeInteger=1]="esriFieldTypeInteger",e[e.esriFieldTypeSingle=2]="esriFieldTypeSingle",e[e.esriFieldTypeDouble=3]="esriFieldTypeDouble",e[e.esriFieldTypeString=4]="esriFieldTypeString",e[e.esriFieldTypeDate=5]="esriFieldTypeDate",e[e.esriFieldTypeOID=6]="esriFieldTypeOID",e[e.esriFieldTypeGeometry=7]="esriFieldTypeGeometry",e[e.esriFieldTypeBlob=8]="esriFieldTypeBlob",e[e.esriFieldTypeRaster=9]="esriFieldTypeRaster",e[e.esriFieldTypeGUID=10]="esriFieldTypeGUID",e[e.esriFieldTypeGlobalID=11]="esriFieldTypeGlobalID",e[e.esriFieldTypeXML=12]="esriFieldTypeXML",e[e.esriFieldTypeBigInteger=13]="esriFieldTypeBigInteger",e[e.esriFieldTypeDateOnly=14]="esriFieldTypeDateOnly",e[e.esriFieldTypeTimeOnly=15]="esriFieldTypeTimeOnly",e[e.esriFieldTypeTimestampOffset=16]="esriFieldTypeTimestampOffset"}(B||(B={})),function(e){e[e.esriGeometryNull=0]="esriGeometryNull",e[e.esriGeometryPoint=1]="esriGeometryPoint",e[e.esriGeometryMultipoint=2]="esriGeometryMultipoint",e[e.esriGeometryPolyline=3]="esriGeometryPolyline",e[e.esriGeometryPolygon=4]="esriGeometryPolygon",e[e.esriGeometryEnvelope=5]="esriGeometryEnvelope",e[e.esriGeometryAny=6]="esriGeometryAny",e[e.esriGeometryMultiPatch=7]="esriGeometryMultiPatch"}(V||(V={})),function(e){e[e.esriMethodHintUNSPECIFIED=0]="esriMethodHintUNSPECIFIED",e[e.esriUUIDESRI=1]="esriUUIDESRI",e[e.esriUUIDRFC4122=2]="esriUUIDRFC4122"}(ee||(ee={})),function(e){e[e.esriTypeUNSPECIFIED=0]="esriTypeUNSPECIFIED",e[e.esriTypeEntity=1]="esriTypeEntity",e[e.esriTypeRelationship=2]="esriTypeRelationship",e[e.esriTypeBoth=4]="esriTypeBoth"}(te||(te={})),function(e){e[e.esriGraphPropertyUNSPECIFIED=0]="esriGraphPropertyUNSPECIFIED",e[e.esriGraphPropertyRegular=1]="esriGraphPropertyRegular",e[e.esriGraphPropertyDocumentName=2]="esriGraphPropertyDocumentName",e[e.esriGraphPropertyDocumentTitle=3]="esriGraphPropertyDocumentTitle",e[e.esriGraphPropertyDocumentUrl=4]="esriGraphPropertyDocumentUrl",e[e.esriGraphPropertyDocumentText=5]="esriGraphPropertyDocumentText",e[e.esriGraphPropertyDocumentKeywords=6]="esriGraphPropertyDocumentKeywords",e[e.esriGraphPropertyDocumentContentType=7]="esriGraphPropertyDocumentContentType",e[e.esriGraphPropertyDocumentMetadata=8]="esriGraphPropertyDocumentMetadata",e[e.esriGraphPropertyDocumentFileExtension=9]="esriGraphPropertyDocumentFileExtension"}(re||(re={})),function(e){e[e.esriIdentifierInfoTypeUNSPECIFIED=0]="esriIdentifierInfoTypeUNSPECIFIED",e[e.esriIdentifierInfoTypeDatabaseNative=1]="esriIdentifierInfoTypeDatabaseNative",e[e.esriIdentifierInfoTypeUniformProperty=2]="esriIdentifierInfoTypeUniformProperty"}(ne||(ne={}));function tt(e){var r,t,n,o,i,l,p,u,c,h,m;return e.deleteLater(),new ke({timestamp:e.timestamp,spatialReference:new Y(e.spatial_reference),strict:e.strict,objectIdField:e.objectid_property,globalIdField:e.globalid_property,arcgisManaged:e.arcgis_managed,identifierInfo:{identifierMappingInfo:{identifierInfoType:ne[(n=(t=(r=e.identifier_info)==null?void 0:r.identifier_mapping_info)==null?void 0:t.identifier_info_type)==null?void 0:n.value],databaseNativeIdentifier:(i=(o=e.identifier_info)==null?void 0:o.identifier_mapping_info)==null?void 0:i.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:(u=(p=(l=e.identifier_info)==null?void 0:l.identifier_mapping_info)==null?void 0:p.uniform_property_identifier)==null?void 0:u.identifier_property_name}},identifierGenerationInfo:{uuidMethodHint:ee[(m=(h=(c=e.identifier_info)==null?void 0:c.identifier_generation_info)==null?void 0:h.uuid_method_hint)==null?void 0:m.value]}},searchIndexes:ut(e.search_indexes),entityTypes:at(e.entity_types),relationshipTypes:dt(e.relationship_types)})}function rt(e){return e.deleteLater(),new Oe(De(e))}function nt(e){return e.deleteLater(),new Se({name:e.name,unique:e.unique,ascending:e.ascending,description:e.description,fieldNames:st(e.fields)})}function De(e){return{name:e.name,alias:e.alias,role:Q[e.role.value]?Q[e.role.value]:null,strict:e.strict,properties:lt(e.properties),fieldIndexes:pt(e.field_indexes)}}function ot(e){return e.deleteLater(),new xe({alias:e.alias,name:e.name,fieldType:B[e.field_type.value]?B[e.field_type.value]:null,geometryType:V[e.geometry_type.value]?V[e.geometry_type.value]:null,hasM:e.has_m,hasZ:e.has_z,nullable:e.nullable,editable:e.editable,required:e.required,defaultVisibility:e.default_visibility,systemMaintained:e.system_maintained,role:re[e.role.value],defaultValue:e.default_value})}function it(e){e.deleteLater();const r=De(e),t=[];for(let n=0;n<e.end_points.size();n++){const o=e.end_points.get(n);t.push({originEntityType:o.origin_entity_type,destinationEntityType:o.dest_entity_type})}return e.end_points.delete(),new Pe(Object.assign({endPoints:t},r))}function at(e){const r=[];for(let t=0;t<e.size();t++)r.push(rt(e.get(t)));return e.delete(),r}function st(e){const r=[];for(let t=0;t<e.size();t++)r.push(e.get(t));return e.delete(),r}function lt(e){const r=[];for(let t=0;t<e.size();t++)r.push(ot(e.get(t)));return e.delete(),r}function pt(e){const r=[];for(let t=0;t<e.size();t++)r.push(nt(e.get(t)));return e.delete(),r}function dt(e){const r=[];for(let t=0;t<e.size();t++)r.push(it(e.get(t)));return e.delete(),r}function ut(e){const r=[];for(let t=0;t<e.size();t++){const n=new et,o=e.get(0);n.name=o.name,n.supportedCategory=te[o.supported_category.value];const i=o.analyzers.size();for(let l=0;l<i;l++)n.analyzers.push({name:o.analyzers.get(l).name});o.analyzers.delete();for(let l=0;l<o.search_properties.keys().size();l++){const p=o.search_properties.keys().get(l),u=o.search_properties.get(p),c=[];for(let h=0;h<u.property_names.size();h++)c.push(u.property_names.get(h));n.searchProperties.set(p,{propertyNames:c})}r.push(n)}return e.delete(),r}var T;(function(e){e[e.ESRI_GEOMETRY_NULL=0]="ESRI_GEOMETRY_NULL",e[e.ESRI_GEOMETRY_POINT=1]="ESRI_GEOMETRY_POINT",e[e.ESRI_GEOMETRY_MULTIPOINT=2]="ESRI_GEOMETRY_MULTIPOINT",e[e.ESRI_GEOMETRY_POLYLINE=3]="ESRI_GEOMETRY_POLYLINE",e[e.ESRI_GEOMETRY_POLYGON=4]="ESRI_GEOMETRY_POLYGON",e[e.ESRI_GEOMETRY_ENVELOPE=5]="ESRI_GEOMETRY_ENVELOPE",e[e.ESRI_GEOMETRY_ANY=6]="ESRI_GEOMETRY_ANY",e[e.ESRI_GEOMETRY_MULTI_PATCH=7]="ESRI_GEOMETRY_MULTI_PATCH"})(T||(T={}));var M,Ee;(function(e){e[e.OBJECT=0]="OBJECT",e[e.ENTITY=1]="ENTITY",e[e.RELATIONSHIP=2]="RELATIONSHIP",e[e.PATH=3]="PATH",e[e.ARRAY=4]="ARRAY"})(M||(M={})),function(e){e[e.view=0]="view",e[e.edit=1]="edit"}(Ee||(Ee={}));function ct(e,r){const t={spatialReference:r},n=de(e,t),o=e.lengths,i=e.coords,l=o[0];t.points=[];let p=0;for(let u=0;u<l;u++){const c=[];for(let h=0;h<n;h++)c[h]=i[p],p++;t.points.push(c)}return new ve(t)}function yt(e,r){const t={spatialReference:r};let n=2;de(e,t);const o=e.coords;return t.x=o[0],t.y=o[1],e.has_z&&(t.z=o[n],n++),e.has_m&&(t.m=o[n]),new Ie(t)}function ht(e,r){return new ae(Ne(e,r))}function ft(e,r){return new se(Ne(e,r))}function Ne(e,r){const t={spatialReference:r},n=de(e,t),o=e.lengths,i=e.coords;let l="";if(e.geometry_type.value===T.ESRI_GEOMETRY_POLYGON)l="rings";else{if(e.geometry_type.value!==T.ESRI_GEOMETRY_POLYLINE)throw new d("KnowledgeGraph:illegal-geometry-type","Illegal Geometry type for multipath conversion");l="paths"}t[l]=[];let p=0;return o.forEach(u=>{const c=[];for(let h=0;h<u;h++){const m=[];for(let y=0;y<n;y++)m[y]=i[p],p++;c.push(m)}t[l].push(c)}),t}function de(e,r){let t=2;return e.has_z?(r.hasZ=e.has_z,t++):r.hasZ=!1,e.has_m?(r.hasM=e.has_m,t++):r.hasM=!1,t}const z=()=>Re.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"),gt={decodedWasmObjToQueryResponseObj:(e,r,t)=>{if(e==null)return null;if(typeof e!="object"||"getDate"in e)return e;if("geometry_type"in e)switch(e.geometry_type.value){case null:return null;case T.ESRI_GEOMETRY_POINT:return yt(e,t);case T.ESRI_GEOMETRY_MULTIPOINT:return ct(e,t);case T.ESRI_GEOMETRY_POLYLINE:return ht(e,t);case T.ESRI_GEOMETRY_POLYGON:return ft(e,t);case T.ESRI_GEOMETRY_ENVELOPE:case T.ESRI_GEOMETRY_MULTI_PATCH:return z().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"),null;case T.ESRI_GEOMETRY_NULL:case T.ESRI_GEOMETRY_ANY:default:return z().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else{if(!("object_value_type"in e))return z().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"),null;switch(e.object_value_type.value){case M.OBJECT:return mt(e,r,t);case M.ENTITY:return Ae(e,r,t);case M.RELATIONSHIP:return ze(e,r,t);case M.PATH:return wt(e,r,t);case M.ARRAY:return _t(e,r,t);default:return z().warnOnce("Unknown graph object type detected!  Result interpreted as null"),null}}}};function _t(e,r,t){const n=[],o=e.count();for(let i=0;i<o;i++){const l=e.get_value_at(i);n.push(ue(l,r,t))}return n}function ue(e,r,t){return gt.decodedWasmObjToQueryResponseObj(e,r,t)}function Ae(e,r,t){const n=e.type_name,o=ce(e,r,t),i=e.get_id();return new Ge(Object.assign({typeName:n,id:i},o))}function ce(e,r,t){const n={},o=e.key_count();for(let i=0;i<o;i++)n[e.get_key_at(i)]=ue(e.get_value_at(i),r,t);return{properties:n}}function mt(e,r,t){return new Ye(ce(e,r,t))}function wt(e,r,t){const n=e.entity_count(),o=e.relationship_count(),i=[];for(let l=0;l<n;l++)i.push(Ae(e.get_entity_at(l),r,t)),l<o&&i.push(ze(e.get_relationship_at(l),r,t));return new Qe({path:i})}function ze(e,r,t){const n=e.type_name,o=ce(e,r,t);return new be(Object.assign({typeName:n,id:e.get_id(),originId:e.get_origin_entity_id(),destinationId:e.get_destination_entity_id()},o))}let P=class extends W{constructor(r){super(r),this.hasError=null,this.error=null,this.editResults=[]}};a([s()],P.prototype,"hasError",void 0),a([s()],P.prototype,"error",void 0),a([s()],P.prototype,"editResults",void 0),P=a([v("esri.rest.knowledgeGraph.GraphApplyEdits")],P);const Et=P;function Tt(e){const r=new Et;r.hasError=e.has_error(),r.hasError&&(r.error={errorCode:e.error.error_code,errorMessage:e.error.error_message});const t=e.get_edit_results_count();for(let n=0;n<t;n++){const o=e.get_edit_results_at(n),i=e.get_edit_results_type_name_at(n),l=[],p=[],u=[],c=o.get_add_results_count(),h=o.get_update_results_count(),m=o.get_delete_results_count();for(let y=0;y<c;y++){const w=o.get_add_result_at(y);l.push({id:w.id,error:{errorCode:w.error.error_code,errorMessage:w.error.error_message}})}for(let y=0;y<h;y++){const w=o.get_update_result_at(y);p.push({id:w.id,error:{errorCode:w.error.error_code,errorMessage:w.error.error_message}})}for(let y=0;y<m;y++){const w=o.get_delete_result_at(y);u.push({id:w.id,error:{errorCode:w.error.error_code,errorMessage:w.error.error_message}})}r.editResults.push({typeName:i,adds:l,updates:p,deletes:u})}return r}const R={fetchKnowledgeGraph:async e=>{const r=new Be({url:e}),t=[];return t.push(D(r)),t.push(Le(r)),await Promise.all(t),r},refreshDataModel:async e=>{e.dataModel=await Ce(e)},refreshServiceDefinition:async e=>{var t,n;const r=(await $(e.url,{query:{f:"json"}})).data;return r.capabilities=(t=r==null?void 0:r.capabilities)==null?void 0:t.split(","),r.supportedQueryFormats=(n=r==null?void 0:r.supportedQueryFormats)==null?void 0:n.split(","),e.serviceDefinition=new je(r),e.serviceDefinition},executeQueryStreaming:async(e,r,t)=>{const n=`${e.url}/graph/query`;await Z(e);const o=await J(n,t);o.data.body=await Ot(r,e);const i=await q(o.data.url,o.data);if(e.dataModel)return new _e({resultRowsStream:await Te(i,e.dataModel,r.outputSpatialReference??void 0)});throw new d("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},executeApplyEdits:async(e,r,t)=>{var i;if((i=e.serviceDefinition)!=null&&i.dataEditingNotSupported)throw new d("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");const n=`${e.url}/graph/applyEdits`;await Z(e);const o=await J(n,t);return o.data.body=await Mt(r,e),kt(await q(o.data.url,o.data))},executeQuery:async(e,r,t)=>{var p;const n=`${e.url}/graph/query`,o=await $(n,{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:r.openCypherQuery,...t==null?void 0:t.query},signal:t==null?void 0:t.signal,timeout:t==null?void 0:t.timeout}),i=(p=o.getHeader)==null?void 0:p.call(o,"content-type"),l=o.data;if(i!=null&&i.includes("application/x-protobuf")){const u=new(await S()).GraphQueryDecoder;if(u.deleteLater(),e.dataModel)return new ge({resultRows:oe(u,l,e.dataModel)});throw new d("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new d("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:i,data:o.data})},executeSearch:async(e,r,t)=>{var u;const n=r.typeCategoryFilter,o=`${e.url}/graph/search`,i=await $(o,{responseType:"array-buffer",query:{f:"pbf",searchQuery:`"${r.searchQuery}"`,typeCategoryFilter:n,...t==null?void 0:t.query},signal:t==null?void 0:t.signal,timeout:t==null?void 0:t.timeout}),l=(u=i.getHeader)==null?void 0:u.call(i,"content-type"),p=i.data;if(l!=null&&l.includes("application/x-protobuf")){const c=new(await S()).GraphQueryDecoder;if(c.deleteLater(),e.dataModel)return new ge({resultRows:oe(c,p,e.dataModel)});throw new d("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new d("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:l,data:i.data})},executeSearchStreaming:async(e,r,t)=>{const n=`${e.url}/graph/search`;await Z(e);const o=await J(n,t);o.data.body=await Pt(r);const i=await q(o.data.url,o.data);if(e.dataModel)return new _e({resultRowsStream:await Te(i,e.dataModel)});throw new d("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},_fetchWrapper:async(e,r)=>fetch(e,r)};async function vt(e,r,t){return R.executeApplyEdits(e,r,t)}async function It(e,r,t){return R.executeQuery(e,r,t)}async function Rt(e,r,t){return R.executeQueryStreaming(e,r,t)}async function Gt(e,r,t){return R.executeSearch(e,r,t)}async function bt(e,r,t){return R.executeSearchStreaming(e,r,t)}async function St(e){return R.fetchKnowledgeGraph(e)}async function D(e){return R.refreshDataModel(e)}async function Le(e){return R.refreshServiceDefinition(e)}async function q(e,r){return R._fetchWrapper(e,r)}async function Z(e){var t;((t=qe)==null?void 0:t.findCredential(e.url))||(e.dataModel?await Ce(e):await D(e))}function F(e,r,t){if(e.error_code!==0)throw new d(r,t,{errorCode:e.error_code,errorMessage:e.error_message})}function xt(e,r,t,n){r==null?t.set_param_key_value(e,""):typeof r!="object"||r instanceof Date?t.set_param_key_value(e,r):r instanceof ie?t.set_param_key_value(e,le(r,n)):r instanceof Array?t.set_param_key_value(e,Fe(r,n)):t.set_param_key_value(e,$e(r,n))}async function Mt(e,r){var l,p,u,c,h,m,y,w,ye;if(r.dataModel||await D(r),!r.dataModel)throw new d("knowledge-graph:data-model-undefined","Encoding could not proceed because a data model was not provided and it could not be determined from the service");const t=await S(),n=!!((l=e.options)!=null&&l.cascadeDelete),o=new t.GraphApplyEditsEncoder(t.SpatialReferenceUtil.WGS84(),(p=e.options)!=null&&p.inputQuantizationParameters?Xe((u=e.options)==null?void 0:u.inputQuantizationParameters):t.InputQuantizationUtil.WGS84_lossless());o.deleteLater(),o.cascade_delete=n;try{let I;(c=e.entityAdds)==null||c.forEach(g=>{I=o.add_entity(A(g,t)),F(I,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")}),(h=e.relationshipAdds)==null||h.forEach(g=>{if(!g.originId||!g.destinationId)throw new d("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");I=o.add_relationship(A(g,t)),F(I,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")}),(m=e.entityUpdates)==null||m.forEach(g=>{if(!g.id)throw new d("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");I=o.update_entity(A(g,t)),F(I,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")}),(y=e.relationshipUpdates)==null||y.forEach(g=>{if(!g.id)throw new d("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");I=o.update_relationship(A(g,t)),F(I,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")}),(w=e.entityDeletes)==null||w.forEach(g=>{var j;if(!g.typeName)throw new d("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const N=o.make_delete_helper(g.typeName,!0);N.deleteLater(),(j=g.ids)==null||j.forEach(H=>{N.delete_by_id(H)})}),(ye=e.relationshipDeletes)==null||ye.forEach(g=>{var j;if(!g.typeName)throw new d("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const N=o.make_delete_helper(g.typeName,!1);(j=g.ids)==null||j.forEach(H=>{N.delete_by_id(H)})}),o.encode()}catch(I){throw new d("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:I})}const i=o.get_encoding_result();return F(i.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed"),structuredClone(i.get_byte_buffer())}async function Ot(e,r){var i,l;const t=await S(),n=new t.GraphQueryRequestEncoder;if(n.deleteLater(),e.outputSpatialReference?n.output_spatial_reference={wkid:e.outputSpatialReference.wkid,latestWkid:e.outputSpatialReference.latestWkid,vcsWkid:e.outputSpatialReference.vcsWkid,latestVcsWkid:e.outputSpatialReference.latestVcsWkid,wkt:e.outputSpatialReference.wkt??""}:n.output_spatial_reference=t.SpatialReferenceUtil.WGS84(),n.open_cypher_query=e.openCypherQuery,e.bindParameters)for(const[p,u]of Object.entries(e.bindParameters))xt(p,u,n,t);if(e.bindGeometryQuantizationParameters)We(e.bindGeometryQuantizationParameters,n);else{if(r.dataModel||await D(r),((l=(i=r.dataModel)==null?void 0:i.spatialReference)==null?void 0:l.wkid)!==4326)throw new d("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");n.input_quantization_parameters=t.InputQuantizationUtil.WGS84_lossless()}e.outputQuantizationParameters&&He(e.outputQuantizationParameters,n,t);try{n.encode()}catch(p){throw new d("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:p})}const o=n.get_encoding_result();if(o.error.error_code!==0)throw new d("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:o.error.error_code,errorMessage:o.error.error_message});return structuredClone(o.get_byte_buffer())}async function Pt(e){var o;const r=await S(),t=new r.GraphSearchRequestEncoder;if(t.deleteLater(),t.search_query=e.searchQuery,t.type_category_filter=r.esriNamedTypeCategory[e.typeCategoryFilter],e.returnSearchContext===!0&&(t.return_search_context=e.returnSearchContext),e.start!=null&&e.start>0&&(t.start_index=e.start),e.num!=null&&(t.max_num_results=e.num),e.idsFilter!=null&&Array.isArray(e.idsFilter)&&e.idsFilter.length>0)try{t.set_ids_filter(Fe(e.idsFilter,r))}catch(i){throw new d("knowledge-graph:ids-format-error","Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:i})}(o=e.namedTypesFilter)==null||o.forEach(i=>{t.add_named_type_filter(i)});try{t.encode()}catch(i){throw new d("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:i})}const n=t.get_encoding_result();if(n.error.error_code!==0)throw new d("knowledge-graph:search-encoding-failed","Attempting to get encoding result from the query failed",{errorCode:n.error.error_code,errorMessage:n.error.error_message});return structuredClone(n.get_byte_buffer())}async function J(e,r){return $(e,{responseType:"native-request-init",method:"post",query:{f:"pbf",...r==null?void 0:r.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:r==null?void 0:r.signal,timeout:r==null?void 0:r.timeout})}async function kt(e){const r=e.headers.get("content-type");if(r!=null&&r.includes("application/x-protobuf")){const t=await e.arrayBuffer(),n=new(await S()).GraphApplyEditsDecoder;return n.deleteLater(),n.decode(new Uint8Array(t)),Tt(n)}throw new d("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:r,data:e.text()})}function oe(e,r,t,n=new Y({wkid:Y.WGS84.wkid})){e.push_buffer(new Uint8Array(r));const o=[];let i=0;for(;e.next_row();){i||(i=e.get_header_keys().size());const l=new Array(i);for(let p=0;p<i;p++){const u=e.get_value(p);l[p]=ue(u,t,n)}o.push(l)}if(e.has_error())throw new d("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded",{errorCode:e.error.error_code,errorMessage:e.error.error_message});return o}async function Te(e,r,t){var o;const n=e.headers.get("content-type");if(e.headers.get("content-length")&&Re.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."),n==null?void 0:n.includes("application/x-protobuf")){const i=(o=e.body)==null?void 0:o.getReader(),l=new(await S()).GraphQueryDecoder;return l.deleteLater(),new ReadableStream({async start(p){try{return u()}catch(c){i==null||i.releaseLock(),p.error(new d("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:c})),p.close()}function u(){return i==null?void 0:i.read().then(({done:c,value:h})=>{if(c){let y;if(l.has_error()&&(y=new d("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded",{errorCode:l.error.error_code,errorMessage:l.error.error_message})),i.releaseLock(),y)throw p.error(y),y;return void p.close()}const m=oe(l,h,r,t);return m.length>0&&p.enqueue(m),u()})}}})}throw new d("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:n,data:e.text()})}async function Ce(e){var i;const r=`${e.url}/dataModel/queryDataModel`,t=await $(r,{responseType:"array-buffer",query:{f:"pbf"}}),n=(i=t.getHeader)==null?void 0:i.call(t,"content-type"),o=t.data;if(n!=null&&n.includes("application/x-protobuf")){const l=(await S()).decode_data_model_from_protocol_buffer(new Uint8Array(o));if(!l)throw new d("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return tt(l)}throw new d("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:n,data:t.data})}const Bt=Object.freeze(Object.defineProperty({__proto__:null,_fetchWrapper:q,executeApplyEdits:vt,executeQuery:It,executeQueryStreaming:Rt,executeSearch:Gt,executeSearchStreaming:bt,fetchKnowledgeGraph:St,kgRestServices:R,refreshDataModel:D,refreshServiceDefinition:Le},Symbol.toStringTag,{value:"Module"}));export{Rt as G,St as T,Bt as k,Pe as p,Oe as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/arcgis-knowledge-client-core-simd-bQpfZ-lo.js","assets/index-dJP7MR2j.js","assets/index-XQT8DJa7.css","assets/arcgis-knowledge-client-core-BTCbBySF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
