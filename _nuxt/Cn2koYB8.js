import{q as y}from"./CRcu_MV6.js";import{r as w,f as $,o as h,c as g,t as P,i as n,k as C,w as e,b as t,d as u,_ as S,g as A,a as i,v as p,p as k,e as B}from"./Dwo3zajo.js";import q from"./DFs42V6F.js";import{r as D}from"./Bl2uiTd3.js";import"./BPajnEoZ.js";import"./Dnd51l0P.js";const N={__name:"InteractionConceptsList",async setup(_){let s,d;w([]);let o=([s,d]=$(()=>y("interaction-concepts").find()),s=await s,d(),s);console.log("BLAAAAa");for(let r of o)console.log(r.pp_id);return(r,a)=>(h(),g("div",null,P(r.privacyPatternId),1))}},L={__name:"InteractionConcept",setup(_){const s=w(null);return(d,o)=>{const r=n("v-card-title"),a=n("v-tab"),l=n("v-tabs"),c=n("v-window-item"),f=q,v=n("v-window"),x=n("v-card-text"),I=n("v-card"),V=n("v-sheet");return h(),C(V,{class:"mt-2",elevation:2,height:200,border:"",rounded:""},{default:e(()=>[t(I,null,{default:e(()=>[t(r,null,{default:e(()=>[u("Interaction Concept: D'accord")]),_:1}),t(l,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=b=>s.value=b),"fixed-tabs":"","bg-color":""},{default:e(()=>[t(a,{value:"description"},{default:e(()=>[u("Description")]),_:1}),t(a,{value:"demo"},{default:e(()=>[u("Demo")]),_:1})]),_:1},8,["modelValue"]),t(x,null,{default:e(()=>[t(v,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=b=>s.value=b)},{default:e(()=>[t(c,{value:"description"},{default:e(()=>[u(" Trallalal ")]),_:1}),t(c,{value:"demo"},{default:e(()=>[t(f)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},m=_=>(k("data-v-d6c0162e"),_=_(),B(),_),T={class:"text-h3 text-serif"},U=m(()=>i("p",{class:"text-h4 text-serif"},"Context",-1)),E=m(()=>i("p",{class:"text-h4 text-serif"},"Problem",-1)),G=m(()=>i("p",{class:"text-h4 text-serif"},"Solution",-1)),M=m(()=>i("p",{class:"text-h4 text-serif"},"Concequences",-1)),j={__name:"PrivacyPattern",props:["linkedGdprArticles"],emits:["submit"],setup(_,{emit:s}){const d=s;return A(()=>{console.log("emitted event"),d("submit")}),(o,r)=>{const a=n("v-col"),l=n("v-row"),c=n("v-divider"),f=N,v=L,x=n("v-container");return h(),C(x,null,{default:e(()=>[t(l,null,{default:e(()=>[t(a,null,{default:e(()=>[i("p",T,[p(o.$slots,"title",{},void 0,!0)])]),_:3})]),_:3}),t(l,null,{default:e(()=>[t(a,{class:"context"},{default:e(()=>[U,t(c,{class:"pb-2"}),D(o.$slots,"context",{unwrap:"p"},void 0,!0)]),_:3})]),_:3}),t(l,null,{default:e(()=>[t(a,null,{default:e(()=>[E,t(c,{class:"pb-2"}),p(o.$slots,"problem",{},void 0,!0)]),_:3})]),_:3}),t(l,null,{default:e(()=>[t(a,null,{default:e(()=>[G,t(c,{class:"pb-2"}),p(o.$slots,"solution",{},void 0,!0)]),_:3})]),_:3}),t(l,null,{default:e(()=>[t(a,{class:"mb-4"},{default:e(()=>[M,t(c,{class:"pb-2"}),p(o.$slots,"consequences",{},void 0,!0)]),_:3})]),_:3}),t(f,{privacyPatternId:"id"}),t(v)]),_:3})}}},Q=S(j,[["__scopeId","data-v-d6c0162e"]]);export{Q as default};
