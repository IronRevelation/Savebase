(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{323:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(16),o=n.n(a),c=n(19),i=n(33),u=n.n(i),s=n(61),l=n(366),d=n(10),b=n(365),j=n(4),f=Object(d.a)({root:{backgroundColor:"#009fb7",color:"#272727"}})(b.a),O=function(e){return Object(j.jsx)(f,{variant:"contained",startIcon:Object(j.jsx)(l.a,{}),disableElevation:!0,onClick:e.onClick,disabled:e.disabled,children:"Add value"})},h=n(381),p=Object(d.a)({root:{"& label.Mui-focused":{color:"#009FB7"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#009FB7"},"&.Mui-focused fieldset":{borderColor:"#009FB7"}},color:"#272727"}})(h.a),m=function(e){var t=Object(r.useState)(NaN),n=Object(c.a)(t,2),a=n[0],o=n[1],i=isNaN(a)||a<=0;return Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{variant:"outlined",type:"number",label:"Money to add",placeholder:"e.g. 3.14",inputProps:{min:"0",onKeyDown:function(t){"Enter"!==t.key||i||e.onClick(a)}},InputLabelProps:{shrink:!0},error:i,disabled:e.disabled,onChange:function(e){return o(parseFloat(e.target.value))}}),Object(j.jsx)("div",{style:{paddingTop:"1rem"},children:Object(j.jsx)(O,{disabled:e.disabled||i,onClick:function(){return e.onClick(a)}})})]})},g=n(385),y=n(380);function v(e){return Object(j.jsx)(g.a,{open:e.openCfg.open,autoHideDuration:2500,onClose:e.onClose,children:Object(j.jsx)(y.a,{severity:"error",variant:"filled",children:e.openCfg.message})})}function x(e){return Object(j.jsx)(g.a,{open:e.openCfg.open,autoHideDuration:2500,onClose:e.onClose,children:Object(j.jsx)(y.a,{severity:"success",variant:"filled",children:e.openCfg.message})})}var C=n(373),S=n(374),w=n(369),k=Object(d.a)({root:{backgroundColor:"#009fb7",color:"#272727",marginRight:"0.25rem"}})(b.a),E=function(e){return Object(j.jsx)(k,{variant:"contained",startIcon:Object(j.jsx)(w.a,{}),disableElevation:!0,size:"small",onClick:e.onClick,disabled:e.disabled,children:"Confirm"})},T=n(370),N=Object(d.a)({root:{backgroundColor:"#e26d5a",color:"#272727",marginLeft:".25rem"}})(b.a),A=function(e){return Object(j.jsx)(N,{disableElevation:!0,variant:"contained",onClick:e.onClick,disabled:e.disabled,startIcon:Object(j.jsx)(T.a,{}),size:"small",children:"Cancel"})},M=Object(d.a)({root:{"& label.Mui-focused":{color:"#009FB7"},"& .MuiInput-underline:after":{borderBottomColor:"#009FB7"},"& .Mui-error:after":{borderBottom:"2px solid red"},color:"#272727",backgroundColor:"#ddd",borderTopLeftRadius:".25rem",borderTopRightRadius:".25rem"}})(h.a),R=function(e){var t=Object(r.useState)(NaN),n=Object(c.a)(t,2),a=n[0],o=n[1],i=isNaN(a)||a<=0;return Object(j.jsxs)("div",{children:[Object(j.jsx)(M,{variant:"standard",type:"number",label:"New quantity",placeholder:"e.g. 3.14",inputProps:{min:"0",onKeyDown:function(t){"Enter"!==t.key||i||e.onClick(a)}},InputLabelProps:{shrink:!0},error:i,disabled:e.disabled,onChange:function(e){return o(parseFloat(e.target.value))}}),Object(j.jsxs)("div",{style:{paddingTop:".5rem"},children:[Object(j.jsx)(E,{disabled:e.disabled||i,onClick:function(){return e.onClick(a)}}),Object(j.jsx)(A,{disabled:e.disabled,onClick:function(){return e.onClick("aborted")}})]})]})},Y=n(371),D=Object(d.a)({root:{backgroundColor:"#009FB7",color:"#272727",marginRight:"0.5rem"}})(b.a),F=function(e){return Object(j.jsx)(D,{disableElevation:!0,variant:"contained",size:"small",onClick:e.onClick,disabled:e.disabled,startIcon:Object(j.jsx)(Y.a,{}),children:"Edit"})},I=n(372),P=Object(d.a)({root:{backgroundColor:"#e26d5a",color:"#272727"}})(b.a),B=function(e){return Object(j.jsx)(P,{disableElevation:!0,size:"small",startIcon:Object(j.jsx)(I.a,{}),onClick:function(){return e.onClick()},children:"Delete"})},U=Object(C.a)({moneyObjCard:{backgroundColor:"#EFF1F3",borderColor:"#696773",padding:"1rem",marginBottom:"1.5rem"},date:{fontSize:12},value:{fontSize:20,fontWeight:"bold"}}),q=function(e){var t=U(),n=Object(r.useState)(!1),a=Object(c.a)(n,2),o=a[0],i=a[1];return Object(j.jsxs)(S.a,{id:"registered-money-".concat(e.index),className:t.moneyObjCard,variant:"outlined",children:[Object(j.jsxs)("div",{className:t.date,children:[e.dateObj.getFullYear(),"-",e.dateObj.getMonth()+1,"-",e.dateObj.getDate()]}),o?Object(j.jsx)(R,{disabled:e.disabledEdit,onClick:function(t){i(!1),"aborted"!==t&&e.onEdit(e.index,t)}}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:t.value,children:e.moneyVal+""+e.currency}),Object(j.jsx)(F,{onClick:function(){return i(!0)}}),Object(j.jsx)(B,{onClick:function(){return e.onDelete(e.index)}})]})]})},K=function(e){return Object(j.jsx)("div",{style:{marginTop:"1.5rem",display:"inline-block"},children:e.money.map((function(t,n){var r=new Date(t.date);return Object(j.jsx)(q,{dateObj:r,moneyVal:t.value,index:n,disabledEdit:e.disabledEdit,onEdit:e.editMoney,onDelete:e.deleteMoney,currency:e.currency},n)}))})},z=function(e){return e.toFixed(Math.max(2,(e.toString().split(".")[1]||[]).length))},L=function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/add_money/".concat(z(t)),{method:"POST"});case 2:if((n=e.sent).ok){e.next=7;break}throw new Error("RESPONSESTATUSNOTOK");case 7:return e.abrupt("return",n.json());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(s.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/modify_money/".concat(t,"/").concat(z(n)),{method:"POST"});case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("RESPONSESTATUSNOTOK");case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/remove_money/".concat(t),{method:"POST"});case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("RESPONSESTATUSNOTOK");case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],o=n[1],i=Object(r.useState)(!1),u=Object(c.a)(i,2),s=u[0],l=u[1],d=Object(r.useState)({open:!1,message:""}),b=Object(c.a)(d,2),f=b[0],O=b[1],h=Object(r.useState)({open:!1,message:""}),p=Object(c.a)(h,2),g=p[0],y=p[1];return Object(j.jsxs)("div",{style:{marginTop:"2rem"},children:[Object(j.jsx)("h3",{children:"Your money:"}),Object(j.jsx)(v,{openCfg:f,onClose:function(){return O({open:!1,message:""})}}),Object(j.jsx)(x,{openCfg:g,onClose:function(){return y({open:!1,message:""})}}),Object(j.jsx)(m,{onClick:function(t){o(!0),L(t).then((function(t){e.updateMoney(t),y({open:!0,message:"YAY! Value added succesfully!"})})).catch((function(e){return O({open:!0,message:"RESPONSESTATUSNOTOK"===e.message?"You sent an invalid value!":"There's a network problem! Try refreshing the page."})})).finally((function(){return o(!1)}))},disabled:a}),Object(j.jsx)(K,{money:e.money,disabledEdit:s,currency:e.currency,editMoney:function(t,n){l(!0),H(t,n).then((function(t){e.updateMoney(t),y({open:!0,message:"YAY! Value modified succesfully!"})})).catch((function(e){return O({open:!0,message:"RESPONSESTATUSNOTOK"===e.message?"You sent an invalid value!":"There's a network problem! Try refreshing the page."})})).finally((function(){return l(!1)}))},deleteMoney:function(t){return V(t).then((function(t){e.updateMoney(t),y({open:!0,message:"YAY! Value deleted succesfully!"})})).catch((function(e){return O({open:!0,message:"RESPONSESTATUSNOTOK"===e.message?"You tried to delete a problematic value!":"There's a network problem! Try refreshing the page."})}))}})]})},G=Object(d.a)({root:{"& label.Mui-focused":{color:"#009FB7"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#009FB7"},"&.Mui-focused fieldset":{borderColor:"#009FB7"}},marginTop:"0.5rem",color:"#272727"}})(h.a),W=Object(d.a)({root:{backgroundColor:"#009fb7",color:"#272727",marginRight:"0.5rem"}})(b.a),_=Object(d.a)({root:{backgroundColor:"#e26d5a",color:"#272727"}})(b.a),Q=function(e){var t=Object(r.useState)(NaN),n=Object(c.a)(t,2),a=n[0],o=n[1],i=isNaN(a)||a<=0;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Your goal:"}),Object(j.jsxs)("div",{children:[0===e.quota?"You didn't set the goal.":e.quota,0===e.quota?null:e.currency]}),Object(j.jsx)(G,{variant:"outlined",type:"number",label:"New goal",placeholder:"e.g. 3.14",inputProps:{min:"0",onKeyDown:function(t){"Enter"!==t.key||i||e.onClick(a)}},InputLabelProps:{shrink:!0},error:i,disabled:e.disabled,onChange:function(e){return o(parseFloat(e.target.value))}}),Object(j.jsxs)("div",{style:{paddingTop:"1rem"},children:[Object(j.jsx)(W,{size:"large",variant:"contained",disableElevation:!0,startIcon:Object(j.jsx)(w.a,{}),disabled:i||e.disabled,onClick:function(){e.onClick(a)},children:"Save"}),Object(j.jsx)(_,{disableElevation:!0,size:"large",startIcon:Object(j.jsx)(T.a,{}),onClick:function(){return e.onClick(0)},children:"Reset"})]})]})},$=n(376),X=n(390),Z=Object(d.a)({root:{"& .MuiInput-underline:after":{borderBottomColor:"#009FB7"},color:"#272727",backgroundColor:"#ddd",padding:"0 .5rem",paddingTop:".5rem",borderTopLeftRadius:".25rem",borderTopRightRadius:".25rem"}})(h.a),ee=function(e){var t=["$","\u20ac","\xa5","\xa3","\u20b9","\u20bd","BTC"],n=Object(r.useState)(t.includes(e.currency)?e.currency:"custom"),a=Object(c.a)(n,2),o=a[0],i=a[1],u=Object(r.useState)(""),s=Object(c.a)(u,2),l=s[0],d=s[1];return Object(j.jsxs)("div",{style:{marginTop:"2rem"},children:[Object(j.jsx)("h3",{children:"Currency:"}),"custom"===o?Object(j.jsx)(Z,{defaultValue:e.currency,onChange:function(e){return d(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&e.updateCurrency(l)}}):null,Object(j.jsxs)("div",{style:{marginTop:"0.25rem"},children:[Object(j.jsxs)($.a,{style:{marginRight:"0.5rem"},onChange:function(e){return i(e.target.value)},defaultValue:o,variant:"outlined",children:[t.map((function(e,t){return Object(j.jsx)(X.a,{value:e,children:e},t)})),Object(j.jsx)(X.a,{value:"custom",children:"Custom..."})]}),Object(j.jsx)(b.a,{style:{backgroundColor:"#009FB7"},size:"large",variant:"contained",disableElevation:!0,startIcon:Object(j.jsx)(w.a,{}),onClick:function(){e.updateCurrency("custom"===o?l:o)},children:"Save"})]})]})},te=function(){var e=Object(s.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==n){e.next=2;break}throw new Error("SAMECURRENCY");case 2:return e.next=4,fetch("/api/update_currency/".concat(n),{method:"POST"});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("RESPONSESTATUSNOTOK");case 7:return e.abrupt("return",r.json());case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ne=function(){var e=Object(s.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==n){e.next=2;break}throw new Error("SAMEQUOTAASBEFORE");case 2:return e.next=4,fetch("/api/update_quota/".concat((a=n).toFixed(Math.max(2,(a.toString().split(".")[1]||[]).length))),{method:"POST"});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("RESPONSESTATUSNOTOK");case 7:return e.abrupt("return",r.json());case 8:case"end":return e.stop()}var a}),e)})));return function(t,n){return e.apply(this,arguments)}}(),re=function(e){var t=Object(r.useState)({open:!1,message:""}),n=Object(c.a)(t,2),a=n[0],o=n[1],i=Object(r.useState)({open:!1,message:""}),u=Object(c.a)(i,2),s=u[0],l=u[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(v,{openCfg:a,onClose:function(){return o({open:!1,message:""})}}),Object(j.jsx)(x,{openCfg:s,onClose:function(){return l({open:!1,message:""})}}),Object(j.jsx)(Q,{currency:e.currency,onClick:function(t){return ne(e.quota,t).then((function(t){e.updateQuota(t),l({open:!0,message:"YAY! Goal updated successfully!"})})).catch((function(e){var t="";t="RESPONSESTATUSNOTOK"===e.message?"You sent an invalid value!":"SAMEQUOTAASBEFORE"===e.message?"You didn't change your goal!":"You have a network problem! Try refreshing the page!",o({open:!0,message:t})}))},quota:e.quota}),Object(j.jsx)(ee,{currency:e.currency,updateCurrency:function(t){return te(e.currency,t).then((function(t){e.updateCurrency(t),l({open:!0,message:"YAY! Currency edited with success!"})})).catch((function(e){var t="";t="RESPONSESTATUSNOTOK"===e.message?"You sent an invalid value!":"SAMECURRENCY"===e.message?"You have already set that currency!":"You have a network problem! Try refreshing the page!",o({open:!0,message:t})}))}})]})},ae=function(e){return Object(j.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse",flexWrap:"wrap",justifyContent:"flex-end"},children:e.children})},oe=function(e){return Object(j.jsx)("div",{style:{order:2,paddingRight:"4rem"},children:e.children})},ce=function(e){return Object(j.jsx)("div",{style:{order:1,minWidth:"70%"},children:e.children})},ie=n(379),ue=n(384),se=n(387),le=n(375),de=function(e){return Object(j.jsx)("div",{style:{maxWidth:"40rem"},children:Object(j.jsxs)(ie.a,{theme:ue.a.material,children:[Object(j.jsx)(se.a,{tickFormat:function(e){var t=new Date(e);return"".concat(t.getDate(),"-").concat(t.getMonth()+1,"-").concat(t.getFullYear().toString().slice(-2))}}),Object(j.jsx)(se.a,{dependentAxis:!0,tickFormat:function(e){return e}}),Object(j.jsx)(le.a,{data:e.money,x:"date",y:"value"})]})})},be=function(e){return Object(j.jsxs)("div",{style:{padding:"1rem"},children:[Object(j.jsx)("h3",{children:"Total Money:"}),Object(j.jsx)("span",{style:{fontSize:"2rem"},children:0===e.moneyArr.length?"You currently have no money!":e.moneyArr[e.moneyArr.length-1].value+e.currency})]})},je=n(199),fe=n.n(je),Oe=function(e){var t="";if(0!==e.quota)try{t=fe()(function(e,t){if(e.length<2)throw new Error("NOTENOUGHITEMS");var n=e.reduce((function(e,t){return e+t.value}),0);if(n>=t)throw new Error("GOALALREADYREACHED");var r=e[e.length-1].date,a=Math.floor((Date.now()-Date.parse(r))/864e5),o=e.shift(),c=[{value:e[0].value,days:new Date(e[0].date).getTime()-new Date(o.date).getTime()}],i=e.shift();e.forEach((function(e){c.push({value:e.value,days:new Date(e.date).getTime()-new Date(i.date).getTime()}),i=e})),c.forEach((function(e){return e.days/=864e5}));var u=(t-n)/(c.reduce((function(e,t){return e+t.value}),0)/(c.reduce((function(e,t){return e+t.days}),0)+a));return new Date(Date.now()+864e5*u)}(e.notAccumulatedMoney,e.quota))}catch(n){"GOALALREADYREACHED"===n.message?t="Hooray! You have already reached your goal!":"NOTENOUGHITEMS"===n.message&&(t="Not enough data. Please add some money.")}else t="You didn't set the goal!";return Object(j.jsxs)("div",{style:{padding:"1rem"},children:[Object(j.jsx)("h3",{children:"You'll reach your goal:"}),Object(j.jsx)("span",{style:{fontSize:"2rem"},children:t})]})},he=function(e){return Object(j.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap"},children:e.children})};window.htmlentities={encode:function(e){for(var t=[],n=e.length-1;n>=0;n--)t.unshift(["&#",e.charCodeAt(n),";"].join(""));return t.join("")},decode:function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)}))}},"{{money}}"===window.money&&(window.money=JSON.stringify([{date:new Date("1, March 2021").toISOString(),value:1},{date:new Date("2, June 2021").toISOString(),value:2},{date:new Date("27, January 2022").toISOString(),value:3}]),window.quota="10",window.currency="\u20ac");var pe=JSON.parse(window.htmlentities.decode(window.money).replaceAll("'",'"'));var me=function(){var e=Object(r.useState)(pe),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(window.currency),i=Object(c.a)(o,2),u=i[0],s=i[1],l=Object(r.useState)(parseFloat(window.quota)),d=Object(c.a)(l,2),b=d[0],f=d[1],O=function(e){var t=e.map((function(e){return{date:new Date(e.date.substr(0,10)).toISOString(),value:e.value}})),n=[];return t.forEach((function(e){0!==n.length?n[n.length-1].date!==e.date?n.push(e):n[n.length-1].value+=e.value:n.push(e)})),n}(n),h=function(e){for(var t=0,n=[],r=0;r<e.length;r++)t+=e[r].value,n[r]={date:NaN,value:NaN},n[r].value=t,n[r].date=new Date(e[r].date).getTime();return n}(O);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"SaveBase"}),Object(j.jsxs)(ae,{children:[Object(j.jsxs)(oe,{children:[Object(j.jsx)(re,{currency:u,quota:b,updateQuota:function(e){return f(e)},updateCurrency:function(e){return s(e)}}),Object(j.jsx)(J,{currency:u,money:n,updateMoney:function(e){return a(e)}})]}),Object(j.jsxs)(ce,{children:[Object(j.jsxs)(he,{children:[Object(j.jsx)(be,{moneyArr:h,currency:u}),Object(j.jsx)(Oe,{notAccumulatedMoney:O,quota:b})]}),Object(j.jsx)(de,{money:h})]})]})]})};o.a.render(Object(j.jsx)(me,{}),document.getElementById("root"))}},[[323,1,2]]]);
//# sourceMappingURL=main.820b314c.chunk.js.map