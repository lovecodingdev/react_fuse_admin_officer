(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[223],{2569:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(93),c=t(181),r=t(1244),s=t(1238),m=t(648),i=t(215),o=t(52),u=t(1246),f=t(159),x=t(46),d=t.n(x),p=t(0),E=t.n(p);a.default=function(){var e=Object(o.a)(),a=Object(p.useState)(""),t=Object(n.a)(a,2),x=t[0],h=t[1],b=Object(p.useState)(null),v=Object(n.a)(b,2),w=v[0],N=v[1],j=Object(p.useState)(null),g=Object(n.a)(j,2),y=g[0],O=g[1];function S(e){h(e.target.value)}return Object(p.useEffect)((function(){d.a.get("/api/icons").then((function(e){N(e.data)}))}),[]),Object(p.useEffect)((function(){O(x.length>0?w.filter((function(e){if(e.name.includes(x))return!0;for(var a=0;a<e.tags.length;a+=1){if(e.tags[a].includes(x))return!0}return!1})):w)}),[w,x]),E.a.createElement(c.a,{classes:{content:"flex"},header:E.a.createElement("div",{className:"flex flex-wrap flex-1 items-center justify-between p-12 md:p-24"},E.a.createElement("div",{className:"flex flex-col w-full sm:w-auto"},E.a.createElement("div",{className:"flex items-center mb-4"},E.a.createElement(s.a,{className:"text-18",color:"action"},"home"),E.a.createElement(s.a,{className:"text-16",color:"action"},"chevron_right"),E.a.createElement(f.a,{color:"textSecondary"},"User Interface")),E.a.createElement(l.a,null,E.a.createElement(f.a,{variant:"h6",className:"text-18 sm:text-20"},"Icons"))),E.a.createElement("div",{className:"flex flex-1 items-center justify-center w-full sm:w-auto sm:px-12"},E.a.createElement(u.a,{theme:e},E.a.createElement(i.a,{className:"flex items-center min-w-full sm:min-w-0 w-full max-w-512 px-8 py-4 rounded-8 shdaow"},E.a.createElement(s.a,{color:"action"},"search"),Object(p.useMemo)((function(){return E.a.createElement(m.a,{placeholder:"Search...",className:"flex flex-1 px-8",disableUnderline:!0,fullWidth:!0,value:x,onChange:S,inputProps:{"aria-label":"Search"}})}),[x])))),E.a.createElement(r.a,{className:"normal-case ml-8 sm:ml-0",variant:"outlined",component:"a",href:"https://material.io/icons/",target:"_blank",role:"button",color:"default"},E.a.createElement(s.a,null,"link"),E.a.createElement("span",{className:"mx-4 hidden sm:flex"},"Reference"))),content:E.a.createElement("div",{className:"py-24 max-w-2xl mx-auto"},Object(p.useMemo)((function(){return y&&(y.length>0?E.a.createElement(l.a,{animation:"transition.slideUpBigIn",delay:300},E.a.createElement("div",{className:"flex flex-wrap justify-center"},y.map((function(e){return E.a.createElement("div",{className:"w-1/3 h-128 p-8 sm:w-160 sm:p-16 flex flex-col items-center justify-center",key:e.name},E.a.createElement(s.a,{className:"text-48",color:"action"},e.name),E.a.createElement(f.a,{variant:"caption",className:"mt-4"},e.name))})))):E.a.createElement(l.a,{animation:"transition.slideUpBigIn",delay:300},E.a.createElement("div",{className:"flex flex-auto items-center justify-center w-full h-full"},E.a.createElement(f.a,{color:"textSecondary",variant:"h5"},"No results!"))))}),[y]))})}}}]);