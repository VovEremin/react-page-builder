(this["webpackJsonpreact-page-builder"]=this["webpackJsonpreact-page-builder"]||[]).push([[0],{142:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(17),i=n.n(r),o=(n(60),n(2)),s=n(19),l=n(18),d=n.n(l),u=n(0),b=["Small","Medium","Large"],j=["bg-red-500","bg-blue-500","bg-gray-300"],m=[{title:"Simple",className:""},{title:"Disabled",className:"opacity-50 cursor-not-allowed"},{title:"Pill",className:"rounded-full"}];function g(e){var t,n=e.text,a=e.size,r=e.variant,i=e.color,l=Object(o.e)((function(e){return{selected:e.events.selected,dragged:e.events.dragged}})),b=l.connectors,j=b.connect,m=b.drag,g=l.selected,f=l.actions.setProp,p=Object(c.useState)(!1),x=Object(s.a)(p,2),h=x[0],O=x[1],v=Object(o.d)((function(e){return{enabled:e.options.enabled}})).enabled;switch(Object(c.useEffect)((function(){g||O(!1)}),[g]),a){default:t="4px 7px";break;case"Medium":t="6px 13px";break;case"Large":t="8px 16px"}return Object(u.jsx)("button",{ref:function(e){return j(m(e))},className:"".concat(r," ").concat(i," hover:opacity-80 text-white font-bold py-2 px-4 border border-black rounded w-auto"),style:{padding:t},onClick:function(){v&&O(!0)},children:Object(u.jsx)(d.a,{disabled:!h,html:n,onChange:function(e){return f((function(t){return t.text=e.target.value.replace(/<\/?[^>]+(>|$)/g,"")}))},tagName:"p"})})}g.craft={props:{size:"Medium",variant:"",color:"bg-blue-500",text:"Click me"},related:{settings:function(){var e=Object(o.e)((function(e){return{props:e.data.props}})),t=e.actions.setProp,n=e.props;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{className:"mt-2",children:[Object(u.jsx)("h4",{className:"font-bold",children:"Size"}),b.map((function(e,c){return Object(u.jsxs)("div",{className:"mt-1",children:[Object(u.jsx)("input",{type:"radio",id:"".concat(e,"_").concat(c),name:"size",checked:n.size===e,onChange:function(){return t((function(t){return t.size=e}))}}),Object(u.jsx)("label",{className:"ml-2",htmlFor:"".concat(e,"_").concat(c),children:e})]},"".concat(e,"_").concat(c))}))]}),Object(u.jsxs)("form",{className:"mt-2",children:[Object(u.jsx)("h4",{className:"font-bold",children:"Variant"}),m.map((function(e,c){return Object(u.jsxs)("div",{className:"mt-1",children:[Object(u.jsx)("input",{type:"radio",id:"".concat(e.title,"_").concat(c),name:"variant",checked:n.variant===e.className,onChange:function(){return t((function(t){return t.variant=e.className}))}}),Object(u.jsx)("label",{className:"ml-2",htmlFor:"".concat(e.title,"_").concat(c),children:e.title})]},"".concat(e.title,"_").concat(c))}))]}),Object(u.jsxs)("form",{className:"mt-2",children:[Object(u.jsx)("h4",{className:"font-bold",children:"Color"}),j.map((function(e,c){return Object(u.jsxs)("div",{className:"mt-1",children:[Object(u.jsx)("input",{type:"radio",id:"".concat(e,"_").concat(c),name:"color",checked:n.color===e,onChange:function(){return t((function(t){return t.color=e}))}}),Object(u.jsx)("label",{className:"ml-2 capitalize",htmlFor:"".concat(e,"_").concat(c),children:e})]},"".concat(e,"_").concat(c))}))]})]})}}};var f=g;function p(e){var t=e.text,n=e.fontSize,a=Object(o.e)((function(e){return{selected:e.events.selected,dragged:e.events.dragged}})),r=a.connectors,i=r.connect,l=r.drag,b=a.selected,j=a.actions.setProp,m=Object(o.d)((function(e){return{enabled:e.options.enabled}})).enabled,g=Object(c.useState)(!1),f=Object(s.a)(g,2),p=f[0],x=f[1];return Object(c.useEffect)((function(){b||x(!1)}),[b]),Object(u.jsx)("div",{ref:function(e){return i(l(e))},onClick:function(){m&&x(!0)},children:Object(u.jsx)(d.a,{disabled:!p,html:t,onChange:function(e){return j((function(t){return t.text=e.target.value.replace(/<\/?[^>]+(>|$)/g,"")}))},tagName:"p",style:{fontSize:"".concat(n,"px")}})})}p.craft={props:{text:"Hi world!",fontsize:16},related:{settings:function(){var e=Object(o.e)((function(e){return{fontSize:e.data.props.fontSize}})),t=e.actions.setProp,n=e.fontSize;return Object(u.jsx)("form",{className:"mt-4",children:Object(u.jsx)("input",{type:"range",className:"w-full",step:1,min:7,max:50,defaultValue:n,onChange:function(e){t((function(t){return t.fontSize=e.target.value}))}})})}}};var x=p,h=["bg-red-300","bg-blue-300","bg-gray-200","bg-gray-100"];function O(e){var t=e.children,n=e.background,c=e.padding,a=e.marginTop,r=e.marginBottom,i=e.marginLeft,s=e.marginRight,l=Object(o.e)().connectors,d=l.connect,b=l.drag,j={padding:c+"em",marginTop:a+"px",marginBottom:r+"px",marginLeft:i+"px",marginRight:s+"px"};return Object(u.jsx)("div",{className:"lg:container w-full ".concat(n),style:j,ref:function(e){return d(b(e))},children:t})}O.craft={props:{background:"bg-gray-200",padding:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0},related:{settings:function(){var e=Object(o.e)((function(e){return{background:e.data.props.background,padding:e.data.props.padding,marginTop:e.data.props.marginTop,marginBottom:e.data.props.marginBottom,marginLeft:e.data.props.marginLeft,marginRight:e.data.props.marginRight}})),t=e.background,n=e.padding,c=e.marginTop,a=e.marginBottom,r=e.marginLeft,i=e.marginRight,s=e.actions.setProp;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(u.jsx)("label",{htmlFor:"buttonSetting2",children:"Padding"}),Object(u.jsx)("input",{type:"range",id:"containerSetting2",name:"padding",min:.2,max:5,step:.2,defaultValue:n,onChange:function(e){return s((function(t){return t.padding=e.target.value}))}})]}),Object(u.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(u.jsx)("label",{htmlFor:"buttonSetting3",children:"MarginTop"}),Object(u.jsx)("input",{type:"range",id:"containerSetting3",name:"marginTop",min:0,max:50,step:1,defaultValue:c,onChange:function(e){return s((function(t){return t.marginTop=e.target.value}))}})]}),Object(u.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(u.jsx)("label",{htmlFor:"buttonSetting4",children:"MarginBottom"}),Object(u.jsx)("input",{type:"range",id:"containerSetting4",name:"marginBottom",min:0,max:50,step:1,defaultValue:a,onChange:function(e){return s((function(t){return t.marginBottom=e.target.value}))}})]}),Object(u.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(u.jsx)("label",{htmlFor:"buttonSetting5",children:"MarginLeft"}),Object(u.jsx)("input",{type:"range",id:"containerSetting5",name:"marginLeft",min:0,max:50,step:1,defaultValue:r,onChange:function(e){return s((function(t){return t.marginLeft=e.target.value}))}})]}),Object(u.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(u.jsx)("label",{htmlFor:"buttonSetting6",children:"MarginRight"}),Object(u.jsx)("input",{type:"range",id:"containerSetting6",name:"marginLeft",min:0,max:50,step:1,defaultValue:i,onChange:function(e){return s((function(t){return t.marginRight=e.target.value}))}})]})]}),Object(u.jsxs)("form",{className:"mt-2",children:[Object(u.jsx)("h4",{className:"font-bold",children:"Background Color"}),h.map((function(e,n){return Object(u.jsxs)("div",{className:"mt-1",children:[Object(u.jsx)("input",{type:"radio",id:"".concat(e,"_").concat(n),name:"color",checked:t===e,onChange:function(){return s((function(t){return t.background=e}))}}),Object(u.jsx)("label",{className:"ml-2 capitalize",htmlFor:"".concat(e,"_").concat(n),children:e})]},"".concat(e,"_").concat(n))}))]})]})}}};var v=O,y=["bg-red-500","bg-blue-500","bg-gray-300"];function N(e){var t=e.children,n=e.background,c=e.width,a=e.padding,r=Object(o.e)().connectors,i=r.connect,s=r.drag,l={background:n||"",padding:a?a+"em":"",width:c?c+"px":""};return Object(u.jsx)("div",{className:"".concat(n),style:l,ref:function(e){return i(s(e))},children:t})}N.craft={props:{background:"bg-red-500",width:100,padding:1},related:{settings:function(){var e=Object(o.e)((function(e){return{background:e.data.props.background,padding:e.data.props.padding,width:e.data.props.width}})),t=e.background,n=e.width,c=e.padding,a=e.actions.setProp;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{className:"mt-2",children:[Object(u.jsx)("h4",{className:"font-bold",children:"Background Color"}),y.map((function(e,n){return Object(u.jsxs)("div",{className:"mt-1",children:[Object(u.jsx)("input",{type:"radio",id:"".concat(e,"_").concat(n),name:"color",checked:t===e,onChange:function(){return a((function(t){return t.background=e}))}}),Object(u.jsx)("label",{className:"ml-2 capitalize",htmlFor:"".concat(e,"_").concat(n),children:e})]},"".concat(e,"_").concat(n))}))]}),Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(u.jsx)("label",{htmlFor:"columnSetting2",children:"Padding"}),Object(u.jsx)("input",{type:"range",id:"columnSetting2",name:"padding",min:.2,max:5,step:.2,defaultValue:c,onChange:function(e){return a((function(t){return t.padding=e.target.value}))}})]}),Object(u.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(u.jsx)("label",{htmlFor:"columnSetting3",children:"Width"}),Object(u.jsx)("input",{type:"range",name:"width",id:"columnSetting3",min:20,max:200,step:1,defaultValue:n,onChange:function(e){return a((function(t){return t.width=e.target.value}))}})]})]})]})}}};var k=N,w=["space-between","center","space-around","space-evenly","flex-start","flex-end"],C=["flex-start","flex-end","baseline","stretch","center"],S=["bg-red-500","bg-blue-500","bg-gray-300"];function z(e){var t,n,c=e.children,a=e.background,r=e.padding,i=e.justify,s=e.align,l=Object(o.e)().connectors,d=l.connect,b=l.drag,j={padding:r?r+"em":""};switch(i){case"flex-start":t="justify-start";break;case"flex-end":t="justify-end";break;case"center":t="justify-center";break;case"space-around":t="justify-around";break;case"space-evenly":t="justify-evenly";break;default:t="justify-between"}switch(s){case"flex-start":n="items-start";break;case"flex-end":n="items-end";break;case"baseline":n="items-baseline";break;case"stretch":n="items-stretch";break;default:n="items-center"}return Object(u.jsx)("div",{style:j,className:"lg:container w-full flex ".concat(a," ").concat(t," ").concat(n),ref:function(e){return d(b(e))},children:c})}z.craft={props:{background:"bg-gray-300",padding:1,justify:"space-between",align:"center"},related:{settings:function(){var e=Object(o.e)((function(e){return{background:e.data.props.background,padding:e.data.props.padding,justify:e.data.props.justify,align:e.data.props.align}})),t=e.background,n=e.padding,c=e.justify,a=e.align,r=e.actions.setProp;return Object(u.jsxs)("div",{children:[Object(u.jsx)("form",{children:Object(u.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(u.jsx)("label",{htmlFor:"rowSetting2",children:"Padding"}),Object(u.jsx)("input",{type:"range",id:"rowSetting2",name:"padding",min:.2,max:5,step:.2,defaultValue:n,onChange:function(e){return r((function(t){return t.padding=e.target.value}))}})]})}),Object(u.jsxs)("form",{className:"mt-4",children:[Object(u.jsx)("h1",{className:"font-bold",children:"Justify Content"}),w.map((function(e,t){return Object(u.jsxs)("div",{className:"flex mt-2 items-center",children:[Object(u.jsx)("input",{type:"radio",id:"".concat(e,"_").concat(t),name:"justify",checked:c===e,onChange:function(){return r((function(t){return t.justify=e}))}}),Object(u.jsx)("label",{className:"ml-2 capitalize",htmlFor:"".concat(e,"_").concat(t),children:e})]},"".concat(e,"_").concat(t))}))]}),Object(u.jsxs)("form",{className:"mt-4",children:[Object(u.jsx)("h1",{className:"font-bold",children:"Align Items"}),C.map((function(e,t){return Object(u.jsxs)("div",{className:"flex mt-2 items-center",children:[Object(u.jsx)("input",{type:"radio",id:"".concat(e,"_").concat(t),name:"align",checked:a===e,onChange:function(){return r((function(t){return t.align=e}))}}),Object(u.jsx)("label",{className:"ml-2 capitalize",htmlFor:"".concat(e,"_").concat(t),children:e})]},"".concat(e,"_").concat(t))}))]}),Object(u.jsxs)("form",{className:"mt-2",children:[Object(u.jsx)("h4",{className:"font-bold",children:"Background Color"}),S.map((function(e,n){return Object(u.jsxs)("div",{className:"mt-1",children:[Object(u.jsx)("input",{type:"radio",id:"".concat(e,"_").concat(n),name:"color",checked:t===e,onChange:function(){return r((function(t){return t.background=e}))}}),Object(u.jsx)("label",{className:"ml-2 capitalize",htmlFor:"".concat(e,"_").concat(n),children:e})]},"".concat(e,"_").concat(n))}))]})]})}}};var _=z;var B=function(){var e=Object(o.d)().connectors;return Object(u.jsxs)("div",{className:"p-2 w-60 gap-1 flex flex-col p-4 bg-gray-200 rounded-md",children:[Object(u.jsx)("h3",{className:"uppercase mb-3 text-center",children:"Drag to add"}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full",ref:function(t){return e.create(t,Object(u.jsx)(o.b,{is:v,padding:.5,marginTop:2,canvas:!0}))},children:"Container"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full",ref:function(t){return e.create(t,Object(u.jsx)(o.b,{is:_,padding:.5,canvas:!0}))},children:"Row"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full",ref:function(t){return e.create(t,Object(u.jsx)(o.b,{is:k,padding:.5,width:100,canvas:!0}))},children:"Column"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full",ref:function(t){return e.create(t,Object(u.jsx)(f,{text:"Click me",color:"bg-blue-500",size:"Medium"}))},children:"Button"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full",ref:function(t){return e.create(t,Object(u.jsx)(x,{text:"Hi world!",fontSize:14}))},children:"Text"})})]})};var F=function(){var e=Object(o.d)((function(e,t){var n,c=e.events.selected;return c&&(n={id:c,name:e.nodes[c].data.name,settings:e.nodes[c].related&&e.nodes[c].related.settings,isDeletable:t.node(c).isDeletable()}),{selected:n}})),t=e.actions,n=e.selected;return n?Object(u.jsxs)("div",{className:"bg-gray-200 w-60 p-4 rounded-md mt-2",children:[Object(u.jsxs)("div",{className:"flex justify-between items-center",children:[Object(u.jsx)("h3",{children:"Selected"}),Object(u.jsx)("p",{className:"px-4 py-0.5 rounded-xl border-solid border-gray-500 border text-sm",children:n.name})]}),n.settings&&a.a.createElement(n.settings),n.isDeletable&&Object(u.jsx)("button",{className:"bg-transparent w-full mt-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",onClick:function(){t.delete(n.id)},children:"Delete"})]}):null};var R=function(){var e=Object(o.d)((function(e,t){return{enabled:e.options.enabled,canUndo:e.options.enabled&&t.history.canUndo(),canRedo:e.options.enabled&&t.history.canRedo()}})),t=e.actions,n=e.enabled,c=e.canUndo,a=e.canRedo;return Object(u.jsx)("div",{className:"w-full",children:Object(u.jsxs)("div",{className:"flex items-center justify-between bg-red-300 py-3 px-5 rounded",children:[Object(u.jsxs)("div",{className:"flex items-center",children:[Object(u.jsx)("input",{type:"checkbox",name:"enable",id:"enable",checked:n,onChange:function(){return t.setOptions((function(e){return e.enabled=!e.enabled}))}}),Object(u.jsx)("label",{className:"ml-3",htmlFor:"enable",children:"Enable edit mode"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"bg-blue-500 uppercase hover:bg-blue-700 text-white font-bold py-0.5 px-3 text-sm rounded ".concat(c?"":"opacity-50 cursor-not-allowed"),disabled:!c,onClick:function(){return t.history.undo()},children:"Undo"}),Object(u.jsx)("button",{className:"bg-blue-500 uppercase hover:bg-blue-700 text-white font-bold py-0.5 px-3 text-sm rounded ml-5 ".concat(a?"":"opacity-50 cursor-not-allowed"),disabled:!a,onClick:function(){return t.history.redo()},children:"Redo"})]})]})})};function T(e){var t=document.createElement("img");t.src="a",e.dataTransfer.setDragImage(t,0,0)}var L=function(){return Object(c.useEffect)((function(){return document.addEventListener("dragstart",T),function(){document.removeEventListener("dragstart",T)}}),[]),Object(u.jsx)("div",{className:"app w-full",children:Object(u.jsxs)("div",{className:"p-12 mx-auto my-0 wrapper",children:[Object(u.jsx)("h1",{className:"text-center text-2xl uppercase",children:"React page builder"}),Object(u.jsx)(o.a,{resolver:{Text:x,Button:f,Container:v,Row:_,Column:k},children:Object(u.jsxs)("div",{className:"mt-5",children:[Object(u.jsx)(R,{}),Object(u.jsxs)("div",{className:"flex justify-between mt-5",children:[Object(u.jsx)(o.c,{children:Object(u.jsxs)(o.b,{is:v,background:"bg-gray-100",padding:1,marginRight:10,canvas:!0,children:[Object(u.jsx)(f,{text:"Click me!",size:"Medium"}),Object(u.jsx)(o.b,{is:v,padding:1,marginTop:20,marginBottom:20,canvas:!0,children:Object(u.jsx)(x,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",fontSize:14})}),Object(u.jsx)(o.b,{is:v,padding:1,marginTop:20,marginBottom:20,canvas:!0,children:Object(u.jsxs)(o.b,{is:_,canvas:!0,children:[Object(u.jsx)(o.b,{is:k,width:200,canvas:!0,children:Object(u.jsx)(x,{text:"Text inside column",fontSize:20})}),Object(u.jsx)(o.b,{is:k,width:150,canvas:!0,children:Object(u.jsx)(x,{text:":)",fontSize:20})})]})})]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(B,{}),Object(u.jsx)(F,{})]})]})]})})]})})};i.a.render(Object(u.jsx)(L,{}),document.getElementById("root"))},60:function(e,t,n){}},[[142,1,2]]]);
//# sourceMappingURL=main.78bec50d.chunk.js.map