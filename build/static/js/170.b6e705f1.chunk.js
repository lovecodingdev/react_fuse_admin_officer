(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[170],{2601:function(e,a,t){"use strict";t.r(a);var l=t(93),r=t(159),n=t(247),s=t(0),c=t.n(s),m=t(8),o=t(9),i=t(85),d=t(33),p=t(14),u=t.n(p),f=t(30),E=t(25),x=t(46),b=t.n(x),w=Object(E.b)("analyticsDashboardApp/widgets/getWidgets",Object(f.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/analytics-dashboard-app/widgets");case 2:return a=e.sent,e.next=5,a.data;case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))),v=Object(E.c)({}),N=v.getSelectors((function(e){return e.analyticsDashboardApp.widgets})),g=N.selectEntities,y=(N.selectById,Object(E.d)({name:"analyticsDashboardApp/widgets",initialState:v.getInitialState({}),reducers:{},extraReducers:Object(d.a)({},w.fulfilled,v.setAll)}).reducer),h=Object(i.c)({widgets:y}),j=t(6),O=t(13),k=t(94),C=t(1244),T=t(1236),S=t(52),W=t(1246),A=t(4),B=t(146),_=t(34),L=Object(T.a)((function(e){return{root:{background:"linear-gradient(to left, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)")}}}));var H=c.a.memo((function(e){var a=L(e),t=Object(S.a)(),n=Object(m.d)(Object(_.c)(t.palette.primary.main)),i=Object(s.useState)("2017"),d=Object(O.a)(i,2),p=d[0],u=d[1],f=o.a.merge({},e.data);return o.a.setWith(f,"options.plugins.xLabelsOnTop.fontColor",Object(k.fade)(t.palette.primary.contrastText,.7)),o.a.setWith(f,"options.plugins.xLabelsOnTop.borderColor",Object(k.fade)(t.palette.primary.contrastText,.6)),o.a.setWith(f,"options.scales.xAxes[0].ticks.fontColor",t.palette.primary.contrastText),c.a.createElement(W.a,{theme:n},c.a.createElement("div",{className:Object(A.default)(a.root)},c.a.createElement("div",{className:"container relative p-16 sm:p-24 flex flex-row justify-between items-center"},c.a.createElement(l.a,{delay:100},c.a.createElement("div",{className:"flex-col"},c.a.createElement(r.a,{className:"h2",color:"textPrimary"},"Visitors"),c.a.createElement(r.a,{className:"h5",color:"textSecondary"},"Unique visitors by month"))),c.a.createElement("div",{className:"flex flex-row items-center"},Object.keys(f.datasets).map((function(e){return c.a.createElement(C.a,{key:e,className:"py-8 px-12",size:"small",onClick:function(){return u(e)},disabled:e===p},e)})))),c.a.createElement("div",{className:"container relative h-200 sm:h-256 pb-16"},c.a.createElement(B.Line,{data:{labels:f.labels,datasets:f.datasets[p].map((function(e){return Object(j.a)(Object(j.a)({},e),{},{borderColor:t.palette.secondary.main,backgroundColor:t.palette.secondary.main,pointBackgroundColor:t.palette.secondary.dark,pointHoverBackgroundColor:t.palette.secondary.main,pointBorderColor:t.palette.secondary.contrastText,pointHoverBorderColor:t.palette.secondary.contrastText})}))},options:f.options}))))})),D=t(1255),I=t(1238);var V=c.a.memo((function(e){var a=Object(S.a)(),t=o.a.merge({},e.data);return c.a.createElement(D.a,{className:"w-full rounded-8 shadow"},c.a.createElement("div",{className:"p-16 pb-0 flex flex-row flex-wrap items-end"},c.a.createElement("div",{className:""},c.a.createElement(r.a,{className:"h3",color:"textSecondary"},"Conversion"),c.a.createElement(r.a,{className:"text-56 font-300 leading-none mt-8"},t.conversion.value)),c.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},c.a.createElement("div",{className:"flex flex-row items-center"},t.conversion.ofTarget>0&&c.a.createElement(I.a,{className:"text-green"},"trending_up"),t.conversion.ofTarget<0&&c.a.createElement(I.a,{className:"text-red"},"trending_down"),c.a.createElement(r.a,{className:"mx-4"},t.conversion.ofTarget,"%")),c.a.createElement(r.a,{className:"whitespace-nowrap"},"of target"))),c.a.createElement("div",{className:"h-96 w-100-p"},c.a.createElement(B.Bar,{data:{labels:t.labels,datasets:t.datasets.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{borderColor:a.palette.secondary.main,backgroundColor:a.palette.secondary.main})}))},options:t.options})))}));var z=c.a.memo((function(e){var a=Object(S.a)(),t=o.a.merge({},e.data);return c.a.createElement(D.a,{className:"w-full rounded-8 shadow"},c.a.createElement("div",{className:"p-16 pb-0 flex flex-row flex-wrap items-end"},c.a.createElement("div",{className:""},c.a.createElement(r.a,{className:"h3",color:"textSecondary"},"Impressions"),c.a.createElement(r.a,{className:"text-56 font-300 leading-none mt-8"},t.impressions.value)),c.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},c.a.createElement("div",{className:"flex flex-row items-center"},t.impressions.ofTarget>0&&c.a.createElement(I.a,{className:"text-green"},"trending_up"),t.impressions.ofTarget<0&&c.a.createElement(I.a,{className:"text-red"},"trending_down"),c.a.createElement(r.a,{className:"mx-4"},t.impressions.ofTarget,"%")),c.a.createElement(r.a,{className:"whitespace-nowrap"},"of target"))),c.a.createElement("div",{className:"h-96 w-100-p"},c.a.createElement(B.Line,{data:{labels:t.labels,datasets:t.datasets.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{borderColor:a.palette.secondary.main})}))},options:t.options})))}));var P=c.a.memo((function(e){var a=Object(S.a)(),t=o.a.merge({},e.data);return c.a.createElement(D.a,{className:"w-full rounded-8 shadow"},c.a.createElement("div",{className:"p-16 pb-0 flex flex-row flex-wrap items-end"},c.a.createElement("div",{className:""},c.a.createElement(r.a,{className:"h3",color:"textSecondary"},"Visits"),c.a.createElement(r.a,{className:"text-56 font-300 leading-none mt-8"},t.visits.value)),c.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},c.a.createElement("div",{className:"flex flex-row items-center"},t.visits.ofTarget>0&&c.a.createElement(I.a,{className:"text-green"},"trending_up"),t.visits.ofTarget<0&&c.a.createElement(I.a,{className:"text-red"},"trending_down"),c.a.createElement(r.a,{className:"mx-4"},t.visits.ofTarget,"%")),c.a.createElement(r.a,{className:"whitespace-nowrap"},"of target"))),c.a.createElement("div",{className:"h-96 w-100-p"},c.a.createElement(B.Bar,{data:{labels:t.labels,datasets:t.datasets.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{borderColor:a.palette.error.main,backgroundColor:a.palette.error.main})}))},options:t.options})))}));var R=c.a.memo((function(e){var a=Object(S.a)(),t=Object(s.useState)("today"),l=Object(O.a)(t,2),n=l[0],m=l[1],i=o.a.merge({},e.data);return o.a.setWith(i,"options.scales.xAxes[0].ticks.fontColor",a.palette.text.secondary),o.a.setWith(i,"options.scales.yAxes[0].ticks.fontColor",a.palette.text.secondary),o.a.setWith(i,"options.scales.yAxes[0].gridLines.color",Object(k.fade)(a.palette.text.secondary,.1)),c.a.createElement(D.a,{className:"w-full rounded-8 shadow"},c.a.createElement("div",{className:"relative p-24 flex flex-row items-center justify-between"},c.a.createElement("div",{className:"flex flex-col"},c.a.createElement(r.a,{className:"h3 sm:h2"},"Visitors & Page views")),c.a.createElement("div",{className:"flex flex-row items-center"},Object.keys(i.datasets).map((function(e){return c.a.createElement(C.a,{key:e,className:"py-8 px-12",size:"small",onClick:function(){return m(e)},disabled:e===n},e)})))),c.a.createElement(r.a,{className:"relative h-200 sm:h-320 sm:pb-16"},c.a.createElement(B.Line,{data:{labels:i.labels,datasets:i.datasets[n].map((function(e,t){var l=a.palette[0===t?"primary":"secondary"];return Object(j.a)(Object(j.a)({},e),{},{borderColor:l.main,backgroundColor:l.main,pointBackgroundColor:l.dark,pointHoverBackgroundColor:l.main,pointBorderColor:l.contrastText,pointHoverBorderColor:l.contrastText})}))},options:i.options})))})),U=t(1245),G=t(1522);function J(e){return c.a.createElement(U.a,{title:e.text,placement:"top"},c.a.createElement(I.a,{className:"text-red"},"place"))}var M=function(e){return c.a.createElement(D.a,{className:"w-full h-512 rounded-8 shadow"},c.a.createElement(G.a,{bootstrapURLKeys:{key:""},defaultZoom:1,defaultCenter:[17.308688,7.03125],options:{styles:e.data.styles}},e.data.markers.map((function(e){return c.a.createElement(J,{key:e.label,text:e.label,lat:e.lat,lng:e.lng})}))))},q=t(1254),K=t(1184),Z=t(1240),F=t(1193);var Q=c.a.memo((function(e){var a=Object(S.a)(),t=Object(s.useState)("Today"),l=Object(O.a)(t,2),n=l[0],m=l[1],i=o.a.merge({},e.data);return c.a.createElement(D.a,{className:"w-full rounded-8 shadow"},c.a.createElement("div",{className:"p-16"},c.a.createElement(r.a,{className:"h1 font-300"},"Sessions by device")),c.a.createElement("div",{className:"h-224 relative"},c.a.createElement(B.Doughnut,{data:{labels:i.labels,datasets:i.datasets[n].map((function(e){return Object(j.a)(Object(j.a)({},e),{},{borderColor:a.palette.divider,backgroundColor:[a.palette.primary.dark,a.palette.primary.main,a.palette.primary.light],hoverBackgroundColor:[a.palette.secondary.dark,a.palette.secondary.main,a.palette.secondary.light]})}))},options:i.options})),c.a.createElement("div",{className:"p-16 flex flex-row items-center justify-center"},i.labels.map((function(e,a){return c.a.createElement("div",{key:e,className:"px-16 flex flex-col items-center"},c.a.createElement(r.a,{className:"h4",color:"textSecondary"},e),c.a.createElement(r.a,{className:"h2 font-300 py-8"},i.datasets[n][0].data[a],"%"),c.a.createElement("div",{className:"flex flex-row items-center justify-center"},i.datasets[n][0].change[a]<0&&c.a.createElement(I.a,{className:"text-18 text-red"},"arrow_downward"),i.datasets[n][0].change[a]>0&&c.a.createElement(I.a,{className:"text-18 text-green"},"arrow_upward"),c.a.createElement("div",{className:"h5 px-4"},i.datasets[n][0].change[a],"%")))}))),c.a.createElement(q.a,{className:"mx-16"}),c.a.createElement("div",{className:"p-16 flex flex-row items-center justify-between"},c.a.createElement("div",null,c.a.createElement(K.a,{className:""},c.a.createElement(F.a,{value:n,onChange:function(e){return m(e.target.value)}},Object.keys(i.datasets).map((function(e){return c.a.createElement(Z.a,{key:e,value:e},e)}))))),c.a.createElement(C.a,{size:"small"},"OVERVIEW")))})),X=t(1247),Y=t(1177),$=t(2412),ee=t(2610);var ae=c.a.memo((function(e){var a=Object(S.a)(),t=Object(s.useState)(0),l=Object(O.a)(t,2),n=l[0],m=l[1],i=o.a.merge({},e.data);return o.a.setWith(i,"options.scales.yAxes[0].ticks.fontColor",a.palette.text.secondary),o.a.setWith(i,"options.scales.yAxes[0].gridLines.color",Object(k.fade)(a.palette.text.secondary,.1)),c.a.createElement(D.a,{className:"w-full rounded-8 shadow"},c.a.createElement(X.a,{position:"static"},c.a.createElement("div",{className:"p-16 px-4 flex flex-row items-center justify-between"},c.a.createElement("div",{className:"px-12"},c.a.createElement(r.a,{className:"h1 font-300",color:"inherit"},"Sales"),c.a.createElement(r.a,{className:"h5",color:"inherit"},"Lifetime sum of your sales")),c.a.createElement("div",null,c.a.createElement(Y.a,{"aria-label":"more",color:"inherit"},c.a.createElement(I.a,null,"more_vert")))),c.a.createElement("div",{className:"p-16 pt-8 flex flex-row justify-between items-end"},c.a.createElement(r.a,{className:"text-48 font-300 leading-none",color:"inherit"},i.today),c.a.createElement("div",{className:"flex flex-row items-center"},i.change.value>0&&c.a.createElement(I.a,{className:"text-green"},"trending_up"),i.change.value<0&&c.a.createElement(I.a,{className:"text-red"},"trending_down"),c.a.createElement("div",{className:"mx-8"},i.change.value,"(",i.change.percentage,"%)"))),c.a.createElement(ee.a,{value:n,onChange:function(e,a){return m(a)},variant:"fullWidth"},c.a.createElement($.a,{label:"1Day",className:"min-w-0"}),c.a.createElement($.a,{label:"1Week",className:"min-w-0"}),c.a.createElement($.a,{label:"1Month",className:"min-w-0"}))),c.a.createElement(B.Line,{data:{labels:i.labels,datasets:i.datasets[n].map((function(e){return Object(j.a)(Object(j.a)({},e),{},{borderColor:a.palette.secondary.main})}))},options:i.options}))}));var te=c.a.memo((function(e){return c.a.createElement(D.a,{className:"w-full rounded-8 shadow"},c.a.createElement("div",{className:"p-16 px-4 flex flex-row items-center justify-between"},c.a.createElement(r.a,{className:"h1 px-12"},"Top campaigns"),c.a.createElement("div",null,c.a.createElement(Y.a,{"aria-label":"more"},c.a.createElement(I.a,null,"more_vert")))),c.a.createElement("table",{className:"simple clickable"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{"aria-label":"title"}),c.a.createElement("th",{className:"text-right"},"Clicks"),c.a.createElement("th",{className:"text-right"},"Conv"))),c.a.createElement("tbody",null,e.data.rows.map((function(e){return c.a.createElement("tr",{key:e.title},c.a.createElement("td",null,e.title),c.a.createElement("td",{className:"text-right"},e.clicks),c.a.createElement("td",{className:"text-right"},e.conversion))})))),c.a.createElement(q.a,{className:"card-divider w-full"}),c.a.createElement("div",{className:"p-8 pt-16 flex flex-row items-center"},c.a.createElement(C.a,null,"GO TO CAMPAIGNS")))}));a.default=Object(n.a)("analyticsDashboardApp",h)((function(){var e=Object(m.c)(),a=Object(m.d)(g);return Object(s.useEffect)((function(){e(w())}),[e]),o.a.isEmpty(a)?null:c.a.createElement("div",{className:"w-full"},c.a.createElement(H,{data:a.widget1}),c.a.createElement(l.a,{animation:"transition.slideUpIn",delay:200},c.a.createElement("div",{className:"flex flex-col md:flex-row sm:p-8 container"},c.a.createElement("div",{className:"flex flex-1 flex-col min-w-0"},c.a.createElement(l.a,{delay:600},c.a.createElement(r.a,{className:"p-16 pb-8 text-18 font-300"},"How are your active users trending over time?")),c.a.createElement("div",{className:"flex flex-col sm:flex sm:flex-row pb-32"},c.a.createElement("div",{className:"widget flex w-full sm:w-1/3 p-16"},c.a.createElement(V,{data:a.widget2})),c.a.createElement("div",{className:"widget flex w-full sm:w-1/3 p-16"},c.a.createElement(z,{data:a.widget3})),c.a.createElement("div",{className:"widget w-full sm:w-1/3 p-16"},c.a.createElement(P,{data:a.widget4}))),c.a.createElement(l.a,{delay:600},c.a.createElement(r.a,{className:"px-16 pb-8 text-18 font-300"},"How many pages your users visit?")),c.a.createElement("div",{className:"widget w-full p-16 pb-32"},c.a.createElement(R,{data:a.widget5})),c.a.createElement(l.a,{delay:600},c.a.createElement(r.a,{className:"px-16 pb-8 text-18 font-300"},"Where are your users?")),c.a.createElement("div",{className:"widget w-full p-16 pb-32"},c.a.createElement(M,{data:a.widget6}))),c.a.createElement("div",{className:"flex flex-wrap w-full md:w-320 pt-16"},c.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},c.a.createElement(l.a,{delay:600},c.a.createElement(r.a,{className:"px-16 pb-8 text-18 font-300"},"What are your top devices?")),c.a.createElement("div",{className:"widget w-full p-16"},c.a.createElement(Q,{data:a.widget7}))),c.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},c.a.createElement(l.a,{delay:600},c.a.createElement("div",{className:"px-16 pb-8 text-18 font-300"},"How are your sales?")),c.a.createElement("div",{className:"widget w-full p-16"},c.a.createElement(ae,{data:a.widget8}))),c.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},c.a.createElement(l.a,{delay:600},c.a.createElement(r.a,{className:"px-16 pb-8 text-18 font-300 lg:pt-0"},"What are your top campaigns?")),c.a.createElement("div",{className:"widget w-full p-16"},c.a.createElement(te,{data:a.widget9})))))))}))}}]);