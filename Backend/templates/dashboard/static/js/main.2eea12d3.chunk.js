(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{9:function(e,t,n){"use strict";n.r(t);n(1);var c=n(3),r=n.n(c),s=n(0),d=function(e){var t=new Date(e.date),n={border:"1px solid black",borderCollapse:"collapse"};return Object(s.jsx)("div",{children:Object(s.jsxs)("table",{style:n,children:[Object(s.jsxs)("tr",{style:n,children:[Object(s.jsx)("th",{style:n,children:"Date"}),Object(s.jsx)("th",{style:n,children:"Value"})]}),Object(s.jsxs)("tr",{style:n,children:[Object(s.jsx)("td",{style:n,children:"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())}),Object(s.jsx)("td",{style:n,children:e.value})]})]})})},i=function(e){var t=JSON.parse(e.money);return Object(s.jsx)("div",{children:t.map((function(e,t){return Object(s.jsx)(d,{date:e.date,value:e.value},t)}))})};window.htmlentities={encode:function(e){for(var t=[],n=e.length-1;n>=0;n--)t.unshift(["&#",e.charCodeAt(n),";"].join(""));return t.join("")},decode:function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)}))}};var l=function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["IL TUO ID E':",window.id||"Nessun ID"]}),Object(s.jsx)("h1",{children:"MONEY"}),Object(s.jsx)(i,{money:window.htmlentities.decode(window.money).replaceAll("'",'"')})]})};r.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.2eea12d3.chunk.js.map