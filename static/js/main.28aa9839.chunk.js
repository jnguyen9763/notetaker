(this.webpackJsonpnotetaker=this.webpackJsonpnotetaker||[]).push([[0],[,,,,,function(e,t,a){e.exports={Calendar:"Calendar_Calendar__TQyQ3",weekdays:"Calendar_weekdays__RYsSK",week:"Calendar_week___PMlc",blank:"Calendar_blank__2aUfP",day:"Calendar_day__i2WPn",header:"Calendar_header__Yv28V",month:"Calendar_month__1iEJK",today:"Calendar_today__8P0uW"}},,,,function(e,t,a){e.exports={ListItem:"ListItem_ListItem__Vmj1h",checkBox:"ListItem_checkBox__27wH6",input:"ListItem_input__bQfBs",delete:"ListItem_delete__3cHYQ"}},function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o}));var n=a(22),c="notetaker";function r(t){var a={};if(e.localStorage)try{a=JSON.parse(e.localStorage.getItem(c))||{}}catch(n){}return a[t]}function o(t,a){e.localStorage&&e.localStorage.setItem(c,JSON.stringify(Object(n.a)({},t,a)))}}).call(this,a(11))},,function(e,t,a){e.exports={List:"List_List__Rb6_T",listTitle:"List_listTitle__1F3fh",listItems:"List_listItems__19wao"}},,function(e,t,a){e.exports={App:"App_App__aOmNj",lists:"App_lists__7IaBW"}},,,,function(e,t,a){e.exports={Notes:"Notes_Notes__10ljy"}},,function(e,t,a){e.exports={Goals:"Goals_Goals__NsAsW"}},function(e,t,a){e.exports={Todos:"Todos_Todos__36L4r"}},,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),l=(a(28),a(2)),s=a(14),i=a.n(s),u=a(5),d=a.n(u),m=a(3),f=a(4);function _(e){var t=e.setDateKey,a=Object(n.useState)(""),r=Object(l.a)(a,2),o=r[0],s=r[1],i=Object(n.useState)(""),u=Object(l.a)(i,2),_=u[0],b=u[1],v=Object(n.useState)(0),E=Object(l.a)(v,2),h=E[0],p=E[1],k=Object(n.useState)(0),O=Object(l.a)(k,2),j=O[0],y=O[1],I=Object(n.useState)(0),g=Object(l.a)(I,2),D=g[0],N=g[1],C=Object(n.useState)(0),S=Object(l.a)(C,2),L=S[0],w=S[1];Object(n.useEffect)((function(){var e=new Date,t=e.getMonth(),a=e.getFullYear(),n=new Date(a,t+1,0).getDate(),c=e.getDate(),r=new Date(a,t,1).getDay();b(t),p(a),y(n),N(c),w(r)}),[]),Object(n.useEffect)((function(){var e=new Date(h,_,D),a=new Date(h,_+1,0).getDate(),n=new Date(h,_,1).getDay();s(e),y(a),w(n),D>a&&N(a),t(e.toString())}),[h,_,D,t]);var T=function(){var e=new Date(h,_-1,1),t=new Date(h,_,0),a=e.getDay()+t.getDate();return Math.ceil(a/7)+1},x=function(e){p(h+e)},G=function(e){var t=_+e,a=h;t<0&&(t=11,a--),t>11&&(t=0,a++),b(t),p(a)};return c.a.createElement("div",{className:d.a.Calendar},c.a.createElement("div",{className:d.a.header},c.a.createElement("button",{onClick:function(){return x(-1)}},c.a.createElement(m.a,{icon:f.a})),c.a.createElement("button",{onClick:function(){return G(-1)}},c.a.createElement(m.a,{icon:f.c})),c.a.createElement("div",null,Intl.DateTimeFormat("en-US",{month:"long"}).format(o)," ",h),c.a.createElement("button",{onClick:function(){return G(1)}},c.a.createElement(m.a,{icon:f.d})),c.a.createElement("button",{onClick:function(){return x(1)}},c.a.createElement(m.a,{icon:f.b}))),c.a.createElement("div",{className:d.a.month},c.a.createElement("div",{className:d.a.weekdays},c.a.createElement("div",null,"Su"),c.a.createElement("div",null,"Mo"),c.a.createElement("div",null,"Tu"),c.a.createElement("div",null,"We"),c.a.createElement("div",null,"Th"),c.a.createElement("div",null,"Fr"),c.a.createElement("div",null,"Sa")),function(){for(var e=T(),t=[],a=1,n=0;n<e&&a<=j;n++){for(var r=[],o=0;o<7&&a<=j;o++)if(1!==a||o===L){var l=[d.a.day];a===D&&l.push(d.a.today),r.push(c.a.createElement("button",{id:a,className:l.join(" "),onClick:function(e){return N(parseInt(e.target.id))},key:a},a)),a++}else r.push(c.a.createElement("div",{className:d.a.blank,key:"blank".concat(o)},c.a.createElement("wbr",null)));t.push(c.a.createElement("div",{className:d.a.week,key:"week".concat(n)},r))}return t}()))}var b=a(18),v=a.n(b);function E(e){var t=e.dataNote,a=e.setDataNote;return c.a.createElement("div",{className:v.a.Notes},c.a.createElement("textarea",{placeholder:"Type your notes here",value:t,onChange:function(e){return a(e.target.value)}}))}var h=a(19),p=a(13),k=a(12),O=a.n(k),j=a(9),y=a.n(j),I=a(8);function g(e){var t=e.id,a=e.input,n=e.isChecked,r=e.uncheckedIcon,o=e.checkedIcon,l=e.checkListItem,s=e.deleteListItem;return c.a.createElement("div",{className:y.a.ListItem},c.a.createElement("button",{className:y.a.checkBox,onClick:function(){return l(t)}},n?o||c.a.createElement(m.a,{icon:I.a}):r||c.a.createElement(m.a,{icon:I.b})),c.a.createElement("div",{className:y.a.input},a),n&&c.a.createElement("button",{className:y.a.delete,onClick:function(){return s(t)}},c.a.createElement(m.a,{icon:f.f})))}var D=a(36);function N(e){var t=e.style,a=e.name,r=e.placeholder,o=e.uncheckedIcon,s=e.checkedIcon,i=e.dataListItems,u=e.setDataListItems,d=Object(n.useState)(""),m=Object(l.a)(d,2),f=m[0],_=m[1],b=Object(n.useState)(!1),v=Object(l.a)(b,2),E=v[0],k=v[1];Object(n.useEffect)((function(){var e=document.querySelector("#list");e.scrollTop=e.scrollHeight-e.clientHeight}),[E]);var j=function(e){var t,a=Object(p.a)(i),n=Object(h.a)(a);try{for(n.s();!(t=n.n()).done;){var c=t.value;if(c.id===e){c.isChecked=!c.isChecked,u(a);break}}}catch(r){n.e(r)}finally{n.f()}},y=function(e){for(var t=Object(p.a)(i),a=0;a<t.length;a++)if(t[a].id===e){t.splice(a,1),u(t);break}};return c.a.createElement("div",{className:[O.a.List,t].join(" ")},c.a.createElement("div",{className:O.a.listTitle},a),c.a.createElement("div",{id:"list",className:O.a.listItems},i.map((function(e){var t=e.id,a=e.input,n=e.isChecked;return c.a.createElement(g,{id:t,input:a,isChecked:n,key:t,uncheckedIcon:o,checkedIcon:s,checkListItem:j,deleteListItem:y})}))),c.a.createElement("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),""!==f){var t={input:f,id:Object(D.a)(),isChecked:!1};u([].concat(Object(p.a)(i),[t])),k(!E),_("")}}(e)}},c.a.createElement("input",{type:"text",placeholder:r,value:f,onChange:function(e){return _(e.target.value)}})))}var C=a(20),S=a.n(C);function L(e){var t=e.dataGoals,a=e.setDataGoals;return c.a.createElement(N,{style:S.a.Goals,name:"Daily Goals",placeholder:"Enter your goals",uncheckedIcon:c.a.createElement(m.a,{icon:I.c}),checkedIcon:c.a.createElement(m.a,{icon:f.e}),dataListItems:t,setDataListItems:a})}var w=a(21),T=a.n(w);function x(e){var t=e.dataTodos,a=e.setDataTodos;return c.a.createElement(N,{style:T.a.Todos,name:"Today's Todos",placeholder:"Enter your todos",dataListItems:t,setDataListItems:a})}var G=a(10),P=Object(G.b)(G.a)||{};function A(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),u=s[0],d=s[1],m=Object(n.useState)([]),f=Object(l.a)(m,2),b=f[0],v=f[1],h=Object(n.useState)([]),p=Object(l.a)(h,2),k=p[0],O=p[1];return Object(n.useEffect)((function(){P.hasOwnProperty(a)?(d(P[a].note),v(P[a].goals),O(P[a].todos)):(d(""),v([]),O([]))}),[a]),Object(n.useEffect)((function(){""!==a&&(""!==u||b.length||k.length?(P.hasOwnProperty(a)||(P[a]={}),P[a].note=u,P[a].goals=b,P[a].todos=k,Object(G.c)(G.a,P)):P.hasOwnProperty(a)&&delete P[a])}),[a,u,b,k]),c.a.createElement("div",{className:i.a.App},c.a.createElement(_,{setDateKey:r}),c.a.createElement(E,{dataNote:u,setDataNote:d}),c.a.createElement("div",{className:i.a.lists},c.a.createElement(L,{dataGoals:b,setDataGoals:v}),c.a.createElement(x,{dataTodos:k,setDataTodos:O})))}o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.28aa9839.chunk.js.map