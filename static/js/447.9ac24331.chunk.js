"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[447],{2661:function(n,e,t){t.d(e,{Z:function(){return s}});var r,i=t(5705),o=t(168),a=t(5706).Z.p(r||(r=(0,o.Z)(["\n  color: red;\n  font-size: 15px;\n  font-weight: 600;\n"]))),c=t(3329),s=function(n){var e=n.name;return(0,c.jsx)(i.Bc,{name:e,render:function(n){return(0,c.jsx)(a,{children:n})}})}},1447:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,i,o,a,c,s,u=t(9434),l=t(2791),d=t(208),x=t(3661),m=t(5705),f=t(6727),p=t(8174),h=(t(5462),t(2661)),b=t(8026),j=t(3329),v={name:"",number:""},g=f.Ry().shape({name:f.Z_().min(3).required(),number:f.Rx().min(4).required()}),Z=function(){var n=(0,u.I0)(),e=(0,u.v9)(x.BY);return(0,j.jsx)(m.J9,{initialValues:v,validationSchema:g,onSubmit:function(t,r){var i=r.resetForm,o=t.name,a=t.number;e.find((function(n){return n.name.toLowerCase()===o.toLowerCase()}))?p.Am.info("".concat(o," is already in contacts")):(n((0,d.uK)({name:o,number:a})),i())},children:(0,j.jsxs)(b.yh,{children:[(0,j.jsxs)(b.tb,{htmlFor:"name",children:["Name",(0,j.jsx)(b.II,{type:"text",name:"name"}),(0,j.jsx)(h.Z,{name:"name"})]}),(0,j.jsxs)(b.tb,{htmlFor:"user_tel",children:["Number",(0,j.jsx)(b.II,{type:"tel",name:"number"}),(0,j.jsx)(h.Z,{name:"number"})]}),(0,j.jsx)(b.OL,{type:"submit",children:"Add contact"})]})})},y=t(6895),w=t(5861),k=t(4687),_=t.n(k),F=t(168),C=t(5706),I=C.Z.li(r||(r=(0,F.Z)(["\n  display: flex;\n  gap: 15px;\n  position: relative;\n  list-style-type: none;\n  &::before {\n    content: '';\n    position: absolute;\n    left: -20px;\n    top: 10px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: black;\n  }\n"]))),L=function(n){var e=n.contact,t=(0,u.I0)();return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(I,{children:[e.name,": ",e.number,(0,j.jsx)(b.OL,{onClick:(0,w.Z)(_().mark((function n(){return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t((0,d.GK)(e.id));case 2:t((0,d.yF)());case 3:case"end":return n.stop()}}),n)}))),children:"Delete"})]},e.id)})},B=C.Z.ul(i||(i=(0,F.Z)(["\n  padding-left: 0;\n  margin: 0;\n  background-color: rgb(154, 202, 240);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  flex-direction: column;\n  border: 1px solid #000;\n  padding: 20px;\n  border-radius: 4px;\n"]))),q=function(){var n=function(n,e){return e?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):n}((0,u.v9)(x.BY),(0,u.v9)(y.B8));return n&&0!==n.length?(0,j.jsx)(B,{children:n.map((function(n){return(0,j.jsx)(L,{contact:n},n.id)}))}):(0,j.jsx)("div",{children:"No contacts found"})},z=C.Z.div(o||(o=(0,F.Z)(["\nmargin-bottom: 15px;\n"]))),A=C.Z.label(a||(a=(0,F.Z)(["\ncolor: #000;\n"]))),N=C.Z.input(c||(c=(0,F.Z)(["\nmargin-left: 20px;\n"]))),R=function(){var n=(0,u.I0)(),e=(0,u.v9)(y.B8);return(0,j.jsx)(z,{children:(0,j.jsxs)(A,{children:["Filter: Find contacts by name",(0,j.jsx)(N,{type:"text",value:e,onChange:function(e){return n((0,y.Tv)(e.target.value))}})]})})},K=t(3521),O=C.Z.h1(s||(s=(0,F.Z)(["\n  font-size: 28px;\n  margin-bottom: 20px;\n  text-align: center;\n"])));var S=function(){var n=(0,u.I0)(),e=(0,u.v9)(x.xU),t=(0,u.v9)(x.zh);return(0,l.useEffect)((function(){n((0,d.yF)())}),[n]),(0,j.jsxs)("div",{children:[e&&!t&&(0,j.jsx)(O,{children:"Request in progress"}),(0,j.jsx)(O,{children:"Add new contact"}),(0,j.jsx)(Z,{}),e&&(0,j.jsx)(K.Z,{}),(0,j.jsx)(q,{}),(0,j.jsx)(O,{children:"Find the contact"}),(0,j.jsx)(R,{})]})}}}]);
//# sourceMappingURL=447.9ac24331.chunk.js.map