"use strict";(self.webpackChunkecommerce_redux=self.webpackChunkecommerce_redux||[]).push([[503],{5503:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});t(5043);var n=t(59),a=t(3003),c=t(4516),s=t(5865),i=t(579);const o=()=>{const e=(0,a.d4)((e=>e.cart.items)).reduce(((e,r)=>e+r.price*r.quantity),0);return(0,i.jsxs)(n.ag,{options:{"client-id":"AQi5fbjmLuH7YkVkPsu8sFQQUWw5GceQ6ZUhOJCm1wrh8phIYhXPKgX12vJ9iKvZWnQvSmZG-_8zaTqT"},children:[" ",(0,i.jsxs)(c.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",px:"5rem",py:"5rem"},children:[(0,i.jsx)(s.A,{variant:"h5",sx:{mb:3},children:"Complete Your Payment"}),(0,i.jsxs)(s.A,{variant:"h6",sx:{mb:2},children:["Final Total: $",e.toFixed(2)]}),(0,i.jsx)(n.JV,{createOrder:(r,t)=>t.order.create({purchase_units:[{amount:{value:e.toFixed(2)}}]}),onApprove:(e,r)=>r.order.capture().then((e=>{alert(`Transaction completed by ${e.payer.name.given_name}`)}))})]})]})}}}]);
//# sourceMappingURL=503.fe639fa4.chunk.js.map