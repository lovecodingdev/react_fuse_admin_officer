(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[75],{1281:function(e,t,a){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}a.d(t,"a",(function(){return n}))},1293:function(e,t,a){"use strict";var n=a(6),c=a(13),l=a(0),r=a.n(l),o=a(8),u=a(9),i=a(4),s=a(40),b=a(1334),m=a(1337),d=a(1331),v=a(1335),p=a(1336),g=a(2624),j=a(1245),f=a(1521),O=a(1261),y=a(159),h=a(1236),_=a(649),A=Object(h.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)},spin:{"& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":{display:"none"}}}}));var P=function(e){var t=A(),a=e.id,n=e.key,c=e.type,l=e.value,o=e.onChange,u=e.size,i=e.readOnly,s=e.startAdornment,b=e.endAdornment,m=e.inputProps;return r.a.createElement(_.a,{id:a,key:n,className:(t.margin,t.spin),value:l,onChange:o,type:c,size:u,readOnly:i,startAdornment:s,endAdornment:b,inputProps:m})},k=a(1291);t.a=r.a.memo((function(e){Object(o.c)();var t=Object(l.useState)(0),a=Object(c.a)(t,2),h=a[0],_=a[1],A=Object(l.useState)(20),N=Object(c.a)(A,2),w=N[0],E=N[1],F=Object(l.useState)({direction:"asc",id:null}),S=Object(c.a)(F,2),T=S[0],x=S[1],L=e.data.table.tableContent,I=e.data.table.headers,B=e.data.table.rows,C=e.data.table.columns,R=[];return e.sortable&&B.map((function(e,t){R.push(Object(n.a)({},L[e.value]))})),r.a.createElement("div",{className:"flex flex-col min-h-full sm:border-1 sm:rounded-8 overflow-hidden w-full"},""!==e.data.title&&r.a.createElement("div",{className:"flex items-center justify-between px-16 py-16 border-b-1"},r.a.createElement(y.a,{className:"text-16"},e.data.title)),r.a.createElement(s.a,{className:"flex-growNum overflow-x-auto"},r.a.createElement(b.a,{stickyHeader:!0,className:"min-w-full",size:"small","aria-labelledby":"tableTitle"},r.a.createElement(v.a,null,r.a.createElement(p.a,null,C.map((function(e,t){switch(e.id){case"avatar":return r.a.createElement(d.a,{key:e.id,rowSpan:e.rowSpan,align:e.align,className:Object(i.default)("whitespace-wrap p-0 text-xs p-12 border-r-1")},e.title);default:return r.a.createElement(d.a,{key:e.id,colSpan:e.colSpan,rowSpan:e.rowSpan,align:"center",className:Object(i.default)("\n\t\t\t\t\t\t\t\t\t\t\t\t\twhitespace-wrap p-0 text-xs p-12 \n\t\t\t\t\t\t\t\t\t\t\t\t\t".concat(t===C.length-1?"border-r-0":"border-r-1"," \n\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(e.color,"\n\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(e.border,"\n\t\t\t\t\t\t\t\t\t\t\t\t"))},e.title)}}))),r.a.createElement(p.a,null,I.map((function(t,a){return r.a.createElement(d.a,{key:t.id,component:"th",scope:"rowNum",align:"center",sortDirection:T.id===t.id&&T.direction,className:Object(i.default)("\n\t\t\t\t\t\t\t\t\t\t\tw-md p-0 text-xs p-4 \n\t\t\t\t\t\t\t\t\t\t\t".concat(a===I.length-1?"border-r-0":"border-r-1"," \n\t\t\t\t\t\t\t\t\t\t\t").concat(t.color,"\n\t\t\t\t\t\t\t\t\t\t\t").concat(I.length>0&&I[a].border,"\n\t\t\t\t\t\t\t\t\t\t"))},e.sortable&&r.a.createElement(j.a,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300},r.a.createElement(g.a,{active:T.id===t.id,direction:T.direction,onClick:(n=t.id,function(e){var t=n,a="desc";T.id===n&&"desc"===T.direction&&(a="asc"),x({direction:a,id:t})})},t.value.substring(t.value.indexOf("@")+1))),!e.sortable&&t.value.substring(t.value.indexOf("@")+1));var n})))),r.a.createElement(m.a,null,!e.sortable&&!u.a.isEmpty(L)&&Object.keys(L).map((function(t,a){return r.a.createElement(p.a,{className:"h-32",key:a},!e.hideLeftHeader&&r.a.createElement(d.a,{key:a,component:"th",scope:"rowNum",align:"center",className:Object(i.default)("\n\t\t\t\t\t\t\t\t\t\t\tp-0 text-xs truncate border-r-1 \n\t\t\t\t\t\t\t\t\t\t\t".concat(B.length>0&&B[a].color,"\n\t\t\t\t\t\t\t\t\t\t\t").concat(B.length>0&&B[a].border,"\n\t\t\t\t\t\t\t\t\t\t"))},t),Object.keys(L[t]).map((function(n,c){return"id"!==n&&"type"!==n&&"month"!==n&&r.a.createElement(d.a,{key:"colKey_".concat(a,"_").concat(c),component:"th",scope:"rowNum",align:"center",className:Object(i.default)("\n\t\t\t\t\t\t\t\t\t\t\tp-0 text-xs truncate \n\t\t\t\t\t\t\t\t\t\t\t".concat(c===Object.keys(L[t]).length-1?"border-r-0":"border-r-1"," \n\t\t\t\t\t\t\t\t\t\t\t").concat(B.length>0&&B[a].border,"\n\t\t\t\t\t\t\t\t\t\t\t").concat(I.length>0&&0===C.length&&I[c+1].border,"\n\t\t\t\t\t\t\t\t\t\t\t").concat(I.length>0&&0!==C.length&&I[c].border,"\n\t\t\t\t\t\t\t\t\t\t"))},!e.editable&&0===C.length&&I.length>0&&Object(k.e)(L[t][I[c+1].value]),!e.editable&&0!==C.length&&I.length>0&&Object(k.e)(L[t][I[c].value]),e.editable&&r.a.createElement(P,{id:"contact phone number",key:"input_".concat(a,"_").concat(c),type:"number",value:Object(k.e)(L[t][n]),onChange:function(l){return function(t,a,n,c,l,r){e.onInputChange({tableName:t,row:a,col:n,rowKey:c,colKey:l,value:r})}(e.tableName,a,c,t,n,l.target.value)},size:"small",readOnly:!1,startAdornment:r.a.createElement(O.a,{position:"start"},e.startAdornment),endAdornment:r.a.createElement(O.a,{position:"start"},e.endAdornment),inputProps:{"aria-label":"naked"}}))})))})),e.sortable&&u.a.orderBy(R,[function(e){switch(T.id){case"categories":return e.categories[0];default:return e[T.id]}}],[T.direction]).slice(h*w,h*w+w).map((function(e,t){return r.a.createElement(p.a,{className:"h-32",key:t},r.a.createElement(d.a,{key:t,component:"th",scope:"rowNum",align:"center",className:Object(i.default)("\n\t\t\t\t\t\t\t\t\t\tp-0 text-xs truncate border-r-1 \n\t\t\t\t\t\t\t\t\t\t".concat(B.length>0&&B[t].color,"\n\t\t\t\t\t\t\t\t\t\t").concat(B.length>0&&B[t].border,"\n\t\t\t\t\t\t\t\t\t"))},t+1),Object.keys(e).map((function(a,n){return"id"!==a&&"type"!==a&&"month"!==a&&r.a.createElement(d.a,{key:"colKey_".concat(t,"_").concat(n),component:"th",scope:"rowNum",align:"center",className:Object(i.default)("\n\t\t\t\t\t\t\t\t\t\t\tp-0 text-xs truncate \n\t\t\t\t\t\t\t\t\t\t\t".concat(n===Object.keys(e).length-1?"border-r-0":"border-r-1"," \n\t\t\t\t\t\t\t\t\t\t\t").concat(B.length>0&&e.border,"\n\t\t\t\t\t\t\t\t\t\t\t").concat(I.length>0&&0===C.length&&I[n+1].border,"\n\t\t\t\t\t\t\t\t\t\t\t").concat(I.length>0&&0!==C.length&&I[n].border,"\n\t\t\t\t\t\t\t\t\t\t"))},0===C.length&&I.length>0&&Object(k.e)(e[a]))})))}))))),e.sortable&&r.a.createElement(f.a,{className:"flex-shrink-0 border-t-1",component:"div",count:R.length,rowsPerPage:w,page:h,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,t){_(t)},onChangeRowsPerPage:function(e){E(e.target.value)}}))}))},1314:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return d}));var n=a(33),c=a(14),l=a.n(c),r=a(30),o=a(25),u=a(46),i=a.n(u),s=Object(o.b)("agencyApp/widgets/getWidgets",Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/api/agency-app/widgets");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),b=Object(o.c)({}),m=b.getSelectors((function(e){return e.agencyApp.widgets})),d=m.selectEntities,v=(m.selectById,Object(o.d)({name:"agencyApp/widgets",initialState:b.getInitialState(),reducers:{},extraReducers:Object(n.a)({},s.fulfilled,b.setAll)}));t.a=v.reducer},1315:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return m}));var n=a(1281),c=a(33),l=a(25),r=(a(46),a(17)),o=localStorage.getItem("@BELONGTO"),u=localStorage.getItem("@UID"),i=Object(l.b)("agencyApp/bonusPlans/getBonusPlans",(function(e){return new Promise((function(e,t){r.b.ref("BonusPlan/".concat(o,"/").concat(u,"/")).on("value",(function(t){var a=t.val();a?r.b.ref("BonusPlanTemplate/".concat(o,"/").concat(a.name)).on("value",(function(t){var a=t.val();e(a?[a]:[])})):e([])}))}))})),s=Object(l.c)({}),b=s.getSelectors((function(e){return e.agencyApp.bonusPlans})),m=b.selectAll,d=(b.selectById,Object(l.d)({name:"agencyApp/bonusPlans",initialState:s.getInitialState({searchText:""}),reducers:{},extraReducers:Object(c.a)({},i.fulfilled,s.setAll)}));Object(n.a)(d.actions),t.a=d.reducer},1316:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return b}));var n=a(1281),c=a(33),l=a(25),r=(a(46),a(17)),o=localStorage.getItem("@BELONGTO"),u=Object(l.b)("agencyApp/entries/getEntries",(function(e){return new Promise((function(t,a){var n=r.b.ref("Sales/".concat(e,"/").concat(o,"/")),c=[];n.on("value",(function(e){var a=e.val();a&&Object.keys(a).map((function(e){c.push(a[e])})),t(a?[a]:[])}))}))})),i=Object(l.c)({}),s=i.getSelectors((function(e){return e.agencyApp.entries})),b=s.selectAll,m=(s.selectById,Object(l.d)({name:"agencyApp/entries",initialState:i.getInitialState({}),reducers:{},extraReducers:Object(c.a)({},u.fulfilled,i.setAll)}));Object(n.a)(m.actions),t.a=m.reducer},1317:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i}));var n=a(33),c=a(25),l=(a(46),a(17)),r=Object(c.b)("agencyApp/users/getUsers",(function(){return new Promise((function(e,t){var a=l.b.ref("users/"),n=l.b.ref("agency/"),c=l.b.ref("admin/"),r=[];a.on("value",(function(t){var a=t.val();a&&Object.keys(a).map((function(e){r.push(a[e])})),n.on("value",(function(t){var a=t.val();a&&Object.keys(a).map((function(e){r.push(a[e])})),c.on("value",(function(t){var a=t.val();a&&Object.keys(a).map((function(e){r.push(a[e])})),e(r)}))}))}))}))})),o=Object(c.c)({}),u=o.getSelectors((function(e){return e.agencyApp.users})),i=u.selectAll,s=(u.selectById,Object(c.d)({name:"agencyApp/users",initialState:o.getInitialState({production:""}),reducers:{setUser:{reducer:function(e,t){e.production=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:Object(n.a)({},r.fulfilled,o.setAll)}));s.actions.setUser;t.a=s.reducer},1322:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return b}));var n=a(1281),c=a(33),l=a(25),r=(a(46),a(17)),o=localStorage.getItem("@BELONGTO"),u=Object(l.b)("agencyApp/marketings/getMarketings",(function(){return new Promise((function(e,t){var a=r.b.ref("Marketing/".concat(o,"/")),n=[];a.on("value",(function(t){var a=t.val();a&&Object.keys(a).map((function(e){n.push(a[e])})),e(n)}))}))})),i=Object(l.c)({}),s=i.getSelectors((function(e){return e.agencyApp.marketings})),b=s.selectAll,m=(s.selectById,Object(l.d)({name:"agencyApp/marketings",initialState:i.getInitialState({searchText:""}),reducers:{},extraReducers:Object(c.a)({},u.fulfilled,i.setAll)}));Object(n.a)(m.actions),t.a=m.reducer},1323:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return b}));var n=a(1281),c=a(33),l=a(25),r=(a(46),a(17)),o=localStorage.getItem("@BELONGTO"),u=(localStorage.getItem("@UID"),Object(l.b)("agencyApp/vision/getVision",(function(e){return new Promise((function(t,a){r.b.ref("Vision/".concat(e,"/").concat(o,"/")).on("value",(function(e){var a=e.val();if(a)return t([a]);t([])}))}))}))),i=Object(l.c)({}),s=i.getSelectors((function(e){return e.agencyApp.vision})),b=s.selectAll,m=(s.selectById,Object(l.d)({name:"agencyApp/vision",initialState:i.getInitialState({}),reducers:{},extraReducers:Object(c.a)({},u.fulfilled,i.setAll)}));Object(n.a)(m.actions),t.a=m.reducer},1343:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return b}));var n=a(1281),c=a(33),l=a(25),r=(a(46),a(17)),o=localStorage.getItem("@BELONGTO"),u=Object(l.b)("agencyApp/lapseRate/getLapseRate",(function(e){return new Promise((function(t,a){var n=r.b.ref("LapseRateReport/".concat(o,"/").concat(e,"/")),c=[];n.on("value",(function(e){var a=e.val();a&&Object.keys(a).map((function(e){c.push(a[e])})),t(a?[a]:[])}))}))})),i=Object(l.c)({}),s=i.getSelectors((function(e){return e.agencyApp.lapseRate})),b=s.selectAll,m=(s.selectById,Object(l.d)({name:"agencyApp/lapseRate",initialState:i.getInitialState({}),reducers:{},extraReducers:Object(c.a)({},u.fulfilled,i.setAll)}));Object(n.a)(m.actions),t.a=m.reducer},1344:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return b}));var n=a(1281),c=a(33),l=a(25),r=(a(46),a(17)),o=localStorage.getItem("@BELONGTO"),u=Object(l.b)("agencyApp/policyGrowth/getPolicyGrowth",(function(e){return new Promise((function(t,a){var n=r.b.ref("PolicyGrowthReport/".concat(e,"/").concat(o,"/")),c=[];n.on("value",(function(e){var a=e.val();a&&Object.keys(a).map((function(e){c.push(a[e])})),t(a?[a]:[])}))}))})),i=Object(l.c)({}),s=i.getSelectors((function(e){return e.agencyApp.policyGrowth})),b=s.selectAll,m=(s.selectById,Object(l.d)({name:"agencyApp/policyGrowth",initialState:i.getInitialState({}),reducers:{},extraReducers:Object(c.a)({},u.fulfilled,i.setAll)}));Object(n.a)(m.actions),t.a=m.reducer},1351:function(e,t,a){"use strict";var n=a(85),c=a(1314),l=a(1315),r=a(1343),o=a(1344),u=a(1316),i=a(1322),s=a(1317),b=a(1323),m=Object(n.c)({widgets:c.a,users:s.a,bonusPlans:l.a,lapseRate:r.a,policyGrowth:o.a,entries:u.a,marketings:i.a,vision:b.a});t.a=m},1575:function(e,t){},2420:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(11),l=a(13),r=a(0),o=a.n(r),u=a(8),i=a(113),s=a.n(i),b=a(93),m=(a(161),a(181),a(1284)),d=a(2412),v=a(2610),p=a(159),g=a(431),j=a(247),f=a(9),O=a(1351),y=a(1293),h=(a(1310),a(1311),a(1312)),_=a(1313),A=a(1314),P=a(1315),k=a(1322),N=a(1316),w=a(1317),E=(a(1323),a(1309)),F=a(1291),S=(a(1575),localStorage.getItem("@BELONGTO"),localStorage.getItem("@UID"));t.default=Object(j.a)("agencyApp",O.a)((function(e){var t=Object(u.c)(),a=Object(u.d)(A.c),i=Object(u.d)(w.c),j=Object(u.d)(k.c),O=Object(u.d)(P.c),T=Object(u.d)(N.c),x=Object(r.useState)(!0),L=Object(l.a)(x,2),I=L[0],B=L[1],C=Object(r.useState)({widgets:a}),R=Object(l.a)(C,2),G=R[0],U=R[1],M=Object(r.useState)({}),D=Object(l.a)(M,2),z=D[0],H=D[1],K=Object(r.useState)(s()().format("yyyy")),W=Object(l.a)(K,2),J=W[0],V=(W[1],Object(r.useState)(s()().format("MMMM"))),q=Object(l.a)(V,2),Q=(q[0],q[1],Object(r.useState)("Show Written Production")),X=Object(l.a)(Q,2),Y=X[0],Z=X[1],$=Object(r.useState)("Policies"),ee=Object(l.a)($,2),te=(ee[0],ee[1],Object(r.useState)([])),ae=Object(l.a)(te,2),ne=(ae[0],ae[1],Object(r.useState)(0)),ce=Object(l.a)(ne,2),le=ce[0],re=ce[1],oe=Object(r.useState)("Product Line"),ue=Object(l.a)(oe,2),ie=ue[0];return ue[1],Object(r.useEffect)((function(){t(Object(w.b)()),t(Object(P.b)()),t(Object(k.b)()),t(Object(N.b)(J)),t(Object(A.b)()).then((function(){return B(!1)}))}),[t]),Object(r.useEffect)((function(){if(Object.keys(j).length>0&&i.length>0&&T.length>0&&O.length>0){var e=Object(F.g)(T,O,j,i,[],[]);H(e)}}),[T,O,j,i]),Object(r.useEffect)((function(){var e="";if(0===le&&(e="Auto"),1===le&&(e="Fire"),2===le&&(e="Life"),3===le&&(e="Health"),4===le&&(e="Bank"),!f.a.isEmpty(a)&&!f.a.isEmpty(z)){var t=O[0].hasOwnProperty(E.b[e].db)?O[0][E.b[e].db]:{};if(a.Agency_ProductLine_Table_1){var l=Object(c.a)(E.l),r={};Object.keys(t).map((function(e){var a=t[e];l.push({id:a.name,value:a.name,color:""})})),E.j.map((function(a,n){r[a.value]={},E.l.map((function(t){r[a.value][t.value]=0,i.map((function(c){if(c.belongTo===S){var l="";"Average Premium"===t.value?l="Averages":"Number of Policies"===t.value?l="Policies":"Policy Premium"===t.value&&(l="Premium"),n<12&&(r[a.value][t.value]+=parseFloat(z[Y][a.value][c.id][e][l]),console.log(r[a.value][t.value],parseFloat(z[Y][a.value][c.id][e][l]))),n>11&&n<16&&(r[a.value][t.value]+=parseFloat(z[Y][E.j[3*(n-12)+0].value][c.id][e][l])+parseFloat(z[Y][E.j[3*(n-12)+1].value][c.id][e][l])+parseFloat(z[Y][E.j[3*(n-12)+2].value][c.id][e][l])),16===n&&(r[a.value][t.value]+=parseFloat(r[E.j[12].value][t.value])+parseFloat(r[E.j[13].value][t.value])+parseFloat(r[E.j[14].value][t.value])+parseFloat(r[E.j[15].value][t.value])),17===n&&(r[a.value][t.value]="")}}))})),Object.keys(t).map((function(c){var l=t[c];r[a.value][l.name]=0,i.map((function(t){t.belongTo===S&&(n<12&&(r[a.value][l.name]+=z[Y][a.value][t.id][e][l.name]),n>11&&n<16&&(r[a.value][l.name]+=parseFloat(z[Y][E.j[3*(n-12)+0].value][t.id][e][l.name])+parseFloat(z[Y][E.j[3*(n-12)+1].value][t.id][e][l.name])+parseFloat(z[Y][E.j[3*(n-12)+2].value][t.id][e][l.name])),16===n&&(r[a.value][l.name]+=parseFloat(r[E.j[12].value][l.name])+parseFloat(r[E.j[13].value][l.name])+parseFloat(r[E.j[14].value][l.name])+parseFloat(r[E.j[15].value][l.name])),17===n&&(r[a.value][l.name]=""))}))}))})),a=Object(n.a)(Object(n.a)({},a),{},{Agency_ProductLine_Table_1:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_1),{},{table:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_1.table),{},{headers:l})})}),a=Object(n.a)(Object(n.a)({},a),{},{Agency_ProductLine_Table_1:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_1),{},{table:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_1.table),{},{tableContent:r})})})}if(a.Agency_ProductLine_Table_2){var o=Object(c.a)(E.l),u={};Object.keys(j).map((function(e){var t=j[e];o.push({id:t.marketingName,value:t.marketingName,color:""})})),E.j.map((function(t,a){u[t.value]={},E.l.map((function(n){u[t.value][n.value]=0,i.map((function(c){if(c.belongTo===S){var l="";"Average Premium"===n.value?l="Averages":"Number of Policies"===n.value?l="Policies":"Policy Premium"===n.value&&(l="Premium"),a<12&&(u[t.value][n.value]+=z[Y][t.value][c.id][e][l]),a>11&&a<16&&(u[t.value][n.value]+=parseFloat(z[Y][E.j[3*(a-12)+0].value][c.id][e][l])+parseFloat(z[Y][E.j[3*(a-12)+1].value][c.id][e][l])+parseFloat(z[Y][E.j[3*(a-12)+2].value][c.id][e][l])),16===a&&(u[t.value][n.value]+=parseFloat(u[E.j[12].value][n.value])+parseFloat(u[E.j[13].value][n.value])+parseFloat(u[E.j[14].value][n.value])+parseFloat(u[E.j[15].value][n.value])),17===a&&(u[t.value][n.value]="")}}))})),Object.keys(j).map((function(n){var c=j[n];u[t.value][c.marketingName]=0,i.map((function(n){n.belongTo===S&&(a<12&&(u[t.value][c.marketingName]+=z[Y][t.value][n.id][e][c.marketingName]),a>11&&a<16&&(u[t.value][c.marketingName]+=parseFloat(z[Y][E.j[3*(a-12)+0].value][n.id][e][c.marketingName])+parseFloat(z[Y][E.j[3*(a-12)+1].value][n.id][e][c.marketingName])+parseFloat(z[Y][E.j[3*(a-12)+2].value][n.id][e][c.marketingName])),16===a&&(u[t.value][c.marketingName]+=parseFloat(u[E.j[12].value][c.marketingName])+parseFloat(u[E.j[13].value][c.marketingName])+parseFloat(u[E.j[14].value][c.marketingName])+parseFloat(u[E.j[15].value][c.marketingName])),17===a&&(u[t.value][c.marketingName]=""))}))}))})),a=Object(n.a)(Object(n.a)({},a),{},{Agency_ProductLine_Table_2:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_2),{},{table:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_2.table),{},{headers:o})})}),a=Object(n.a)(Object(n.a)({},a),{},{Agency_ProductLine_Table_2:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_2),{},{table:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_2.table),{},{tableContent:u})})})}if(a.Agency_ProductLine_Table_3){var s=Object(c.a)(E.l),b={};Object.keys(t).map((function(e){var a=t[e];s.push({id:a.name,value:a.name,color:""})})),E.j.map((function(a,n){b[a.value]={},E.l.map((function(t){b[a.value][t.value]=0;var c="";"Average Premium"===t.value?c="Averages":"Number of Policies"===t.value?c="Policies":"Policy Premium"===t.value&&(c="Premium"),i.map((function(l){l.belongTo===S&&(n<12&&(b[a.value][t.value]+=z[Y][a.value][l.id][e][c]),n>11&&n<16&&(b[a.value][t.value]+=parseFloat(z[Y][E.j[3*(n-12)+0].value][l.id][e][c])+parseFloat(z[Y][E.j[3*(n-12)+1].value][l.id][e][c])+parseFloat(z[Y][E.j[3*(n-12)+2].value][l.id][e][c])),16===n&&(b[a.value][t.value]+=parseFloat(b[E.j[12].value][t.value])+parseFloat(b[E.j[13].value][t.value])+parseFloat(b[E.j[14].value][t.value])+parseFloat(b[E.j[15].value][t.value])),17===n&&(b[a.value][t.value]=""))}))})),Object.keys(t).map((function(c){var l=t[c];b[a.value][l.name]=0,i.map((function(t){t.belongTo===S&&(n<12&&(b[a.value][l.name]+=z[Y][a.value][t.id][e][l.name]),n>11&&n<16&&(b[a.value][l.name]+=parseFloat(z[Y][E.j[3*(n-12)+0].value][t.id][e][l.name])+parseFloat(z[Y][E.j[3*(n-12)+1].value][t.id][e][l.name])+parseFloat(z[Y][E.j[3*(n-12)+2].value][t.id][e][l.name])),16===n&&(b[a.value][l.name]+=parseFloat(b[E.j[12].value][l.name])+parseFloat(b[E.j[13].value][l.name])+parseFloat(b[E.j[14].value][l.name])+parseFloat(b[E.j[15].value][l.name])),17===n&&(b[a.value][l.name]=""))}))}))})),a=Object(n.a)(Object(n.a)({},a),{},{Agency_ProductLine_Table_3:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_3),{},{table:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_3.table),{},{headers:s})})}),a=Object(n.a)(Object(n.a)({},a),{},{Agency_ProductLine_Table_3:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_3),{},{table:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_3.table),{},{tableContent:b})})})}if(a.Agency_ProductLine_Table_4){var m=Object(c.a)(E.l),d={};Object.keys(j).map((function(e){var t=j[e];m.push({id:t.marketingName,value:t.marketingName,color:""})})),E.j.map((function(t,a){d[t.value]={},E.l.map((function(n){d[t.value][n.value]=0;var c="";"Average Premium"===n.value?c="Averages":"Number of Policies"===n.value?c="Policies":"Policy Premium"===n.value&&(c="Premium"),i.map((function(l){l.belongTo===S&&(a<12&&(d[t.value][n.value]=+z[Y][t.value][l.id][e][c]),a>11&&a<16&&(d[t.value][n.value]+=parseFloat(z[Y][E.j[3*(a-12)+0].value][l.id][e][c])+parseFloat(z[Y][E.j[3*(a-12)+1].value][l.id][e][c])+parseFloat(z[Y][E.j[3*(a-12)+2].value][l.id][e][c])),16===a&&(d[t.value][n.value]+=parseFloat(d[E.j[12].value][n.value])+parseFloat(d[E.j[13].value][n.value])+parseFloat(d[E.j[14].value][n.value])+parseFloat(d[E.j[15].value][n.value])),17===a&&(d[t.value][n.value]=""))}))})),Object.keys(j).map((function(n){var c=j[n];d[t.value][c.marketingName]=0,i.map((function(n){n.belongTo===S&&(a<12&&(d[t.value][c.marketingName]+=z[Y][t.value][n.id][e][c.marketingName]),a>11&&a<16&&(d[t.value][c.marketingName]+=parseFloat(z[Y][E.j[3*(a-12)+0].value][n.id][e][c.marketingName])+parseFloat(z[Y][E.j[3*(a-12)+1].value][n.id][e][c.marketingName])+parseFloat(z[Y][E.j[3*(a-12)+2].value][n.id][e][c.marketingName])),16===a&&(d[t.value][c.marketingName]+=parseFloat(d[E.j[12].value][c.marketingName])+parseFloat(d[E.j[13].value][c.marketingName])+parseFloat(d[E.j[14].value][c.marketingName])+parseFloat(d[E.j[15].value][c.marketingName])),17===a&&(d[t.value][c.marketingName]=""))}))}))})),a=Object(n.a)(Object(n.a)({},a),{},{Agency_ProductLine_Table_4:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_4),{},{table:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_4.table),{},{headers:m})})}),a=Object(n.a)(Object(n.a)({},a),{},{Agency_ProductLine_Table_4:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_4),{},{table:Object(n.a)(Object(n.a)({},a.Agency_ProductLine_Table_4.table),{},{tableContent:d})})})}}console.log("--------------------------widgets:",a),U({widgets:a})}),[a,z,Y,le]),I?o.a.createElement(g.a,null):0===G.length?o.a.createElement(b.a,{delay:100},o.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},o.a.createElement(p.a,{color:"textSecondary",variant:"h5"},"There are no data!"))):o.a.createElement(m.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:o.a.createElement(_.a,{title:ie},o.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},o.a.createElement(b.a,{animation:"transition.slideUpIn",delay:300},o.a.createElement(h.a,{value:Y,onChange:function(e){Z(e.target.value)},label:"Production",data:E.a.production.data})))),contentToolbar:o.a.createElement(v.a,{value:le,onChange:function(e,t){re(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},o.a.createElement(d.a,{className:"h-64 normal-case",label:"Auto"}),o.a.createElement(d.a,{className:"h-64 normal-case",label:"Fire"}),o.a.createElement(d.a,{className:"h-64 normal-case",label:"Life"}),o.a.createElement(d.a,{className:"h-64 normal-case",label:"Health"})),content:o.a.createElement("div",{className:"w-full p-12"},o.a.createElement("div",null,o.a.createElement("div",{className:"p-12"},o.a.createElement(y.a,{data:G.widgets.Agency_ProductLine_Table_1})),o.a.createElement("div",{className:"p-12"},o.a.createElement(y.a,{data:G.widgets.Agency_ProductLine_Table_2})),o.a.createElement("div",{className:"p-12"},o.a.createElement(y.a,{data:G.widgets.Agency_ProductLine_Table_3})),o.a.createElement("div",{className:"p-12"},o.a.createElement(y.a,{data:G.widgets.Agency_ProductLine_Table_4})))),innerScroll:!0})}))}}]);