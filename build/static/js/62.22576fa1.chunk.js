(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[62],{1277:function(e,n,t){"use strict";t.d(n,"a",(function(){return M}));var a=t(13),r=t(131),l=t(1247),i=t(1255),m=t(1238),o=t(2412),c=t(2610),p=t(4),u=t(0),T=t.n(u),s=t(11),E=t(6),f=t(82),d=t(83),y=t(142),C=t(141),h=t(1173),b=t(650),S=t(1235),g=t(1246),I=t(10),v=t(74),D=t(424),N=t(1278),x=t.n(N),O=Object(h.a)({productionPrefix:"iframe-"}),R=function(e){Object(y.a)(t,e);var n=Object(C.a)(t);function t(){var e;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=n.call.apply(n,[this].concat(r))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(v.b)(Object(E.a)(Object(E.a)({},Object(b.a)()),{},{plugins:[].concat(Object(s.a)(Object(b.a)().plugins),[Object(D.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return T.a.createElement(T.a.Fragment,null,T.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),T.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.classes,a=e.theme;return T.a.createElement(x.a,{head:this.renderHead(),ref:this.handleRef,className:Object(p.default)(t.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?T.a.createElement(S.b,{jss:this.state.jss,generateClassName:O,sheetsManager:this.state.sheetsManager},T.a.createElement(g.a,{theme:a},T.a.cloneElement(n,{container:this.state.container}))):null)}}]),t}(T.a.Component),j=Object(I.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(R);function w(e){var n=Object(u.useState)(e.currentTabIndex),t=Object(a.a)(n,2),s=t[0],E=t[1],f=e.component,d=e.raw,y=e.iframe,C=e.className;return T.a.createElement(i.a,{className:Object(p.default)(C,"shadow")},T.a.createElement(l.a,{position:"static",color:"default",className:"shadow-0"},T.a.createElement(c.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:s,onChange:function(e,n){E(n)}},f&&T.a.createElement(o.a,{classes:{root:"min-w-64"},icon:T.a.createElement(m.a,null,"remove_red_eye")}),d&&T.a.createElement(o.a,{classes:{root:"min-w-64"},icon:T.a.createElement(m.a,null,"code")}))),T.a.createElement("div",{className:"flex justify-center max-w-full"},T.a.createElement("div",{className:0===s?"flex flex-1 max-w-full":"hidden"},f&&(y?T.a.createElement(j,null,T.a.createElement(f,null)):T.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},T.a.createElement(f,null)))),T.a.createElement("div",{className:1===s?"flex flex-1":"hidden"},d&&T.a.createElement("div",{className:"flex flex-1"},T.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},d.default)))))}w.defaultProps={currentTabIndex:0};var M=w},2289:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),r=t.n(a),l=t(2518),i=t(2519),m=t(2520),o=t(2522),c=t(2523),p=t(2521);function u(){return r.a.createElement(l.a,null,r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Eat")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Code")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null)),r.a.createElement(c.a,null,"Sleep")))}},2290:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\r\nimport Timeline from '@material-ui/lab/Timeline';\r\nimport TimelineItem from '@material-ui/lab/TimelineItem';\r\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\r\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\r\nimport TimelineContent from '@material-ui/lab/TimelineContent';\r\nimport TimelineDot from '@material-ui/lab/TimelineDot';\r\n\r\nexport default function BasicTimeline() {\r\n  return (\r\n    <Timeline>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Eat</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Code</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Sleep</TimelineContent>\r\n      </TimelineItem>\r\n    </Timeline>\r\n  );\r\n}\r\n"},2291:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),r=t.n(a),l=t(2518),i=t(2519),m=t(2520),o=t(2522),c=t(2523),p=t(2521);function u(){return r.a.createElement(l.a,{align:"right"},r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Eat")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Code")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Sleep")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null)),r.a.createElement(c.a,null,"Repeat")))}},2292:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\r\nimport Timeline from '@material-ui/lab/Timeline';\r\nimport TimelineItem from '@material-ui/lab/TimelineItem';\r\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\r\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\r\nimport TimelineContent from '@material-ui/lab/TimelineContent';\r\nimport TimelineDot from '@material-ui/lab/TimelineDot';\r\n\r\nexport default function RightAlignedTimeline() {\r\n  return (\r\n    <Timeline align=\"right\">\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Eat</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Code</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Sleep</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Repeat</TimelineContent>\r\n      </TimelineItem>\r\n    </Timeline>\r\n  );\r\n}\r\n"},2293:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),r=t.n(a),l=t(2518),i=t(2519),m=t(2520),o=t(2522),c=t(2523),p=t(2521);function u(){return r.a.createElement(l.a,{align:"alternate"},r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Eat")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Code")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Sleep")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null)),r.a.createElement(c.a,null,"Repeat")))}},2294:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\r\nimport Timeline from '@material-ui/lab/Timeline';\r\nimport TimelineItem from '@material-ui/lab/TimelineItem';\r\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\r\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\r\nimport TimelineContent from '@material-ui/lab/TimelineContent';\r\nimport TimelineDot from '@material-ui/lab/TimelineDot';\r\n\r\nexport default function AlternateTimeline() {\r\n  return (\r\n    <Timeline align=\"alternate\">\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Eat</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Code</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Sleep</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Repeat</TimelineContent>\r\n      </TimelineItem>\r\n    </Timeline>\r\n  );\r\n}\r\n"},2295:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),r=t.n(a),l=t(2518),i=t(2519),m=t(2520),o=t(2522),c=t(2523),p=t(2521);function u(){return r.a.createElement(l.a,{align:"alternate"},r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Eat")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,{color:"primary"}),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Code")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,{color:"secondary"}),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Sleep")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null)),r.a.createElement(c.a,null,"Repeat")))}},2296:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\r\nimport Timeline from '@material-ui/lab/Timeline';\r\nimport TimelineItem from '@material-ui/lab/TimelineItem';\r\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\r\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\r\nimport TimelineContent from '@material-ui/lab/TimelineContent';\r\nimport TimelineDot from '@material-ui/lab/TimelineDot';\r\n\r\nexport default function ColorsTimeline() {\r\n  return (\r\n    <Timeline align=\"alternate\">\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Eat</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot color=\"primary\" />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Code</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot color=\"secondary\" />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Sleep</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Repeat</TimelineContent>\r\n      </TimelineItem>\r\n    </Timeline>\r\n  );\r\n}\r\n"},2297:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t(0),r=t.n(a),l=t(2518),i=t(2519),m=t(2520),o=t(2522),c=t(2523),p=t(2521);function u(){return r.a.createElement(l.a,{align:"alternate"},r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,{variant:"outlined"}),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Eat")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,{variant:"outlined",color:"primary"}),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Code")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,{variant:"outlined",color:"secondary"}),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,"Sleep")),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,{variant:"outlined"})),r.a.createElement(c.a,null,"Repeat")))}},2298:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\r\nimport Timeline from '@material-ui/lab/Timeline';\r\nimport TimelineItem from '@material-ui/lab/TimelineItem';\r\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\r\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\r\nimport TimelineContent from '@material-ui/lab/TimelineContent';\r\nimport TimelineDot from '@material-ui/lab/TimelineDot';\r\n\r\nexport default function OutlinedTimeline() {\r\n  return (\r\n    <Timeline align=\"alternate\">\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot variant=\"outlined\" />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Eat</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot variant=\"outlined\" color=\"primary\" />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Code</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot variant=\"outlined\" color=\"secondary\" />\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Sleep</TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot variant=\"outlined\" />\r\n        </TimelineSeparator>\r\n        <TimelineContent>Repeat</TimelineContent>\r\n      </TimelineItem>\r\n    </Timeline>\r\n  );\r\n}\r\n"},2299:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(0),r=t.n(a),l=t(2518),i=t(2519),m=t(2520),o=t(2522),c=t(2523),p=t(2521),u=t(2524),T=t(159);function s(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{align:"alternate"},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(T.a,{color:"textSecondary"},"09:30 am")),r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,r.a.createElement(T.a,null,"Eat"))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(T.a,{color:"textSecondary"},"10:00 am")),r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,r.a.createElement(T.a,null,"Code"))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(T.a,{color:"textSecondary"},"12:00 am")),r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,r.a.createElement(T.a,null,"Sleep"))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(T.a,{color:"textSecondary"},"9:00 am")),r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(o.a,null)),r.a.createElement(c.a,null,r.a.createElement(T.a,null,"Repeat")))))}},2300:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\r\nimport Timeline from '@material-ui/lab/Timeline';\r\nimport TimelineItem from '@material-ui/lab/TimelineItem';\r\nimport TimelineSeparator from '@material-ui/lab/TimelineSeparator';\r\nimport TimelineConnector from '@material-ui/lab/TimelineConnector';\r\nimport TimelineContent from '@material-ui/lab/TimelineContent';\r\nimport TimelineDot from '@material-ui/lab/TimelineDot';\r\nimport TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';\r\nimport Typography from '@material-ui/core/Typography';\r\n\r\nexport default function OppositeContentTimeline() {\r\n  return (\r\n    <React.Fragment>\r\n      <Timeline align=\"alternate\">\r\n        <TimelineItem>\r\n          <TimelineOppositeContent>\r\n            <Typography color=\"textSecondary\">09:30 am</Typography>\r\n          </TimelineOppositeContent>\r\n          <TimelineSeparator>\r\n            <TimelineDot />\r\n            <TimelineConnector />\r\n          </TimelineSeparator>\r\n          <TimelineContent>\r\n            <Typography>Eat</Typography>\r\n          </TimelineContent>\r\n        </TimelineItem>\r\n        <TimelineItem>\r\n          <TimelineOppositeContent>\r\n            <Typography color=\"textSecondary\">10:00 am</Typography>\r\n          </TimelineOppositeContent>\r\n          <TimelineSeparator>\r\n            <TimelineDot />\r\n            <TimelineConnector />\r\n          </TimelineSeparator>\r\n          <TimelineContent>\r\n            <Typography>Code</Typography>\r\n          </TimelineContent>\r\n        </TimelineItem>\r\n        <TimelineItem>\r\n          <TimelineOppositeContent>\r\n            <Typography color=\"textSecondary\">12:00 am</Typography>\r\n          </TimelineOppositeContent>\r\n          <TimelineSeparator>\r\n            <TimelineDot />\r\n            <TimelineConnector />\r\n          </TimelineSeparator>\r\n          <TimelineContent>\r\n            <Typography>Sleep</Typography>\r\n          </TimelineContent>\r\n        </TimelineItem>\r\n        <TimelineItem>\r\n          <TimelineOppositeContent>\r\n            <Typography color=\"textSecondary\">9:00 am</Typography>\r\n          </TimelineOppositeContent>\r\n          <TimelineSeparator>\r\n            <TimelineDot />\r\n            <TimelineConnector />\r\n          </TimelineSeparator>\r\n          <TimelineContent>\r\n            <Typography>Repeat</Typography>\r\n          </TimelineContent>\r\n        </TimelineItem>\r\n      </Timeline>\r\n    </React.Fragment>\r\n  );\r\n}\r\n"},2301:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var a=t(0),r=t.n(a),l=t(1236),i=t(2518),m=t(2519),o=t(2520),c=t(2522),p=t(2523),u=t(2524),T=t(2521),s=t(2302),E=t.n(s),f=t(2303),d=t.n(f),y=t(2304),C=t.n(y),h=t(2305),b=t.n(h),S=t(215),g=t(159),I=Object(l.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main}}}));function v(){var e=I();return r.a.createElement(i.a,{align:"alternate"},r.a.createElement(m.a,null,r.a.createElement(u.a,null,r.a.createElement(g.a,{variant:"body2",color:"textSecondary"},"9:30 am")),r.a.createElement(o.a,null,r.a.createElement(T.a,null,r.a.createElement(E.a,null)),r.a.createElement(c.a,null)),r.a.createElement(p.a,null,r.a.createElement(S.a,{elevation:3,className:e.paper},r.a.createElement(g.a,{variant:"h6",component:"h1"},"Eat"),r.a.createElement(g.a,null,"Because you need strength")))),r.a.createElement(m.a,null,r.a.createElement(u.a,null,r.a.createElement(g.a,{variant:"body2",color:"textSecondary"},"10:00 am")),r.a.createElement(o.a,null,r.a.createElement(T.a,{color:"primary"},r.a.createElement(d.a,null)),r.a.createElement(c.a,null)),r.a.createElement(p.a,null,r.a.createElement(S.a,{elevation:3,className:e.paper},r.a.createElement(g.a,{variant:"h6",component:"h1"},"Code"),r.a.createElement(g.a,null,"Because it's awesome!")))),r.a.createElement(m.a,null,r.a.createElement(o.a,null,r.a.createElement(T.a,{color:"primary",variant:"outlined"},r.a.createElement(C.a,null)),r.a.createElement(c.a,{className:e.secondaryTail})),r.a.createElement(p.a,null,r.a.createElement(S.a,{elevation:3,className:e.paper},r.a.createElement(g.a,{variant:"h6",component:"h1"},"Sleep"),r.a.createElement(g.a,null,"Because you need rest")))),r.a.createElement(m.a,null,r.a.createElement(o.a,null,r.a.createElement(T.a,{color:"secondary"},r.a.createElement(b.a,null))),r.a.createElement(p.a,null,r.a.createElement(S.a,{elevation:3,className:e.paper},r.a.createElement(g.a,{variant:"h6",component:"h1"},"Repeat"),r.a.createElement(g.a,null,"Because this is the life you love!")))))}},2306:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\r\nimport { makeStyles } from \'@material-ui/core/styles\';\r\nimport Timeline from \'@material-ui/lab/Timeline\';\r\nimport TimelineItem from \'@material-ui/lab/TimelineItem\';\r\nimport TimelineSeparator from \'@material-ui/lab/TimelineSeparator\';\r\nimport TimelineConnector from \'@material-ui/lab/TimelineConnector\';\r\nimport TimelineContent from \'@material-ui/lab/TimelineContent\';\r\nimport TimelineOppositeContent from \'@material-ui/lab/TimelineOppositeContent\';\r\nimport TimelineDot from \'@material-ui/lab/TimelineDot\';\r\nimport FastfoodIcon from \'@material-ui/icons/Fastfood\';\r\nimport LaptopMacIcon from \'@material-ui/icons/LaptopMac\';\r\nimport HotelIcon from \'@material-ui/icons/Hotel\';\r\nimport RepeatIcon from \'@material-ui/icons/Repeat\';\r\nimport Paper from \'@material-ui/core/Paper\';\r\nimport Typography from \'@material-ui/core/Typography\';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  paper: {\r\n    padding: \'6px 16px\',\r\n  },\r\n  secondaryTail: {\r\n    backgroundColor: theme.palette.secondary.main,\r\n  },\r\n}));\r\n\r\nexport default function CustomizedTimeline() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Timeline align="alternate">\r\n      <TimelineItem>\r\n        <TimelineOppositeContent>\r\n          <Typography variant="body2" color="textSecondary">\r\n            9:30 am\r\n          </Typography>\r\n        </TimelineOppositeContent>\r\n        <TimelineSeparator>\r\n          <TimelineDot>\r\n            <FastfoodIcon />\r\n          </TimelineDot>\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>\r\n          <Paper elevation={3} className={classes.paper}>\r\n            <Typography variant="h6" component="h1">\r\n              Eat\r\n            </Typography>\r\n            <Typography>Because you need strength</Typography>\r\n          </Paper>\r\n        </TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineOppositeContent>\r\n          <Typography variant="body2" color="textSecondary">\r\n            10:00 am\r\n          </Typography>\r\n        </TimelineOppositeContent>\r\n        <TimelineSeparator>\r\n          <TimelineDot color="primary">\r\n            <LaptopMacIcon />\r\n          </TimelineDot>\r\n          <TimelineConnector />\r\n        </TimelineSeparator>\r\n        <TimelineContent>\r\n          <Paper elevation={3} className={classes.paper}>\r\n            <Typography variant="h6" component="h1">\r\n              Code\r\n            </Typography>\r\n            <Typography>Because it&apos;s awesome!</Typography>\r\n          </Paper>\r\n        </TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot color="primary" variant="outlined">\r\n            <HotelIcon />\r\n          </TimelineDot>\r\n          <TimelineConnector className={classes.secondaryTail} />\r\n        </TimelineSeparator>\r\n        <TimelineContent>\r\n          <Paper elevation={3} className={classes.paper}>\r\n            <Typography variant="h6" component="h1">\r\n              Sleep\r\n            </Typography>\r\n            <Typography>Because you need rest</Typography>\r\n          </Paper>\r\n        </TimelineContent>\r\n      </TimelineItem>\r\n      <TimelineItem>\r\n        <TimelineSeparator>\r\n          <TimelineDot color="secondary">\r\n            <RepeatIcon />\r\n          </TimelineDot>\r\n        </TimelineSeparator>\r\n        <TimelineContent>\r\n          <Paper elevation={3} className={classes.paper}>\r\n            <Typography variant="h6" component="h1">\r\n              Repeat\r\n            </Typography>\r\n            <Typography>Because this is the life you love!</Typography>\r\n          </Paper>\r\n        </TimelineContent>\r\n      </TimelineItem>\r\n    </Timeline>\r\n  );\r\n}\r\n'},2517:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(1277),i=(t(131),t(1244)),m=t(1238),o=t(159),c=t(1236),p=Object(c.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){return p(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},r.a.createElement(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/timeline",target:"_blank",role:"button"},r.a.createElement(m.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),r.a.createElement(o.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Timeline"),r.a.createElement(o.a,{className:"description"},"The timeline displays a list of events in chronological order."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement("strong",null,"Note:")," This component is not documented in the ",r.a.createElement("a",{href:"https://material.io/"},"Material Design guidelines"),", but Material-UI supports it."),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Basic timeline"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"A basic timeline showing list of events."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(l.a,{className:"my-24",iframe:!1,component:t(2289).default,raw:t(2290)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Right aligned timeline"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"The timeline can be positioned on the right side of the events."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(l.a,{className:"my-24",iframe:!1,component:t(2291).default,raw:t(2292)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Alternating timeline"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"The timeline can display the events on alternating sides."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(l.a,{className:"my-24",iframe:!1,component:t(2293).default,raw:t(2294)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Color"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"The ",r.a.createElement("code",null,"TimelineDot")," can appear in different colors."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(l.a,{className:"my-24",iframe:!1,component:t(2295).default,raw:t(2296)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Outlined"),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(l.a,{className:"my-24",iframe:!1,component:t(2297).default,raw:t(2298)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Opposite content"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"The timeline can display content on opposite sides."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(l.a,{className:"my-24",iframe:!1,component:t(2299).default,raw:t(2300)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized timeline"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"Here is an example of customizing the component. You can learn more about this in the",r.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(l.a,{className:"my-24",iframe:!1,component:t(2301).default,raw:t(2306)})))}}}]);