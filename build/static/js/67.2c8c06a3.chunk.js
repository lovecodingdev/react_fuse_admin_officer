(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[67],{1276:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};var s=void 0,l=void 0;"undefined"!==typeof document&&(s=document),"undefined"!==typeof window&&(l=window);var i=t.FrameContext=o.default.createContext({document:s,window:l}),c=i.Provider,u=i.Consumer;t.FrameContextProvider=c,t.FrameContextConsumer=u},1277:function(e,t,a){"use strict";a.d(t,"a",(function(){return H}));var n=a(13),r=a(131),o=a(1247),s=a(1255),l=a(1238),i=a(2412),c=a(2610),u=a(4),d=a(0),m=a.n(d),p=a(11),f=a(6),b=a(82),h=a(83),g=a(142),v=a(141),y=a(1173),N=a(650),w=a(1235),j=a(1246),x=a(10),O=a(74),E=a(424),C=a(1278),T=a.n(C),M=Object(y.a)({productionPrefix:"iframe-"}),P=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(O.b)(Object(f.a)(Object(f.a)({},Object(N.a)()),{},{plugins:[].concat(Object(p.a)(Object(N.a)().plugins),[Object(E.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),m.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.classes,n=e.theme;return m.a.createElement(T.a,{head:this.renderHead(),ref:this.handleRef,className:Object(u.default)(a.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?m.a.createElement(w.b,{jss:this.state.jss,generateClassName:M,sheetsManager:this.state.sheetsManager},m.a.createElement(j.a,{theme:n},m.a.cloneElement(t,{container:this.state.container}))):null)}}]),a}(m.a.Component),D=Object(x.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(P);function _(e){var t=Object(d.useState)(e.currentTabIndex),a=Object(n.a)(t,2),p=a[0],f=a[1],b=e.component,h=e.raw,g=e.iframe,v=e.className;return m.a.createElement(s.a,{className:Object(u.default)(v,"shadow")},m.a.createElement(o.a,{position:"static",color:"default",className:"shadow-0"},m.a.createElement(c.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,t){f(t)}},b&&m.a.createElement(i.a,{classes:{root:"min-w-64"},icon:m.a.createElement(l.a,null,"remove_red_eye")}),h&&m.a.createElement(i.a,{classes:{root:"min-w-64"},icon:m.a.createElement(l.a,null,"code")}))),m.a.createElement("div",{className:"flex justify-center max-w-full"},m.a.createElement("div",{className:0===p?"flex flex-1 max-w-full":"hidden"},b&&(g?m.a.createElement(D,null,m.a.createElement(b,null)):m.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},m.a.createElement(b,null)))),m.a.createElement("div",{className:1===p?"flex flex-1":"hidden"},h&&m.a.createElement("div",{className:"flex flex-1"},m.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}_.defaultProps={currentTabIndex:0};var H=_},1278:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var n=a(1276);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return n.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return n.FrameContextConsumer}});var r,o=a(1279),s=(r=o)&&r.__esModule?r:{default:r};t.default=s.default},1279:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),s=d(o),l=d(a(24)),i=d(a(5)),c=a(1276),u=d(a(1280));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return n.handleLoad=function(){n.forceUpdate()},n._isMounted=!1,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,a=this.props.contentDidUpdate,n=e.defaultView||e.parentView,r=s.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:a},s.default.createElement(c.FrameContextProvider,{value:{document:e,window:n}},s.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var o=this.getMountTarget();return[l.default.createPortal(this.props.head,this.getDoc().head),l.default.createPortal(r,o)]}},{key:"render",value:function(){var e=this,t=n({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,s.default.createElement("iframe",n({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(o.Component);m.propTypes={style:i.default.object,head:i.default.node,initialContent:i.default.string,mountTarget:i.default.string,contentDidMount:i.default.func,contentDidUpdate:i.default.func,children:i.default.oneOfType([i.default.element,i.default.arrayOf(i.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1280:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=(s(r),s(a(5)));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){return l(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);c.propTypes={children:o.default.element.isRequired,contentDidMount:o.default.func.isRequired,contentDidUpdate:o.default.func.isRequired},t.default=c},1282:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},1289:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},1331:function(e,t,a){"use strict";var n=a(7),r=a(1),o=a(0),s=(a(5),a(4)),l=a(10),i=a(12),c=a(23),u=a(1289),d=a(1282),m=o.forwardRef((function(e,t){var a,l,c=e.align,m=void 0===c?"inherit":c,p=e.classes,f=e.className,b=e.component,h=e.padding,g=e.scope,v=e.size,y=e.sortDirection,N=e.variant,w=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),j=o.useContext(u.a),x=o.useContext(d.a),O=x&&"head"===x.variant;b?(l=b,a=O?"columnheader":"cell"):l=O?"th":"td";var E=g;!E&&O&&(E="col");var C=h||(j&&j.padding?j.padding:"default"),T=v||(j&&j.size?j.size:"medium"),M=N||x&&x.variant,P=null;return y&&(P="asc"===y?"ascending":"descending"),o.createElement(l,Object(r.a)({ref:t,className:Object(s.default)(p.root,p[M],f,"inherit"!==m&&p["align".concat(Object(i.a)(m))],"default"!==C&&p["padding".concat(Object(i.a)(C))],"medium"!==T&&p["size".concat(Object(i.a)(T))],"head"===M&&j&&j.stickyHeader&&p.stickyHeader),"aria-sort":P,role:a,scope:E},w))}));t.a=Object(l.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(c.e)(Object(c.c)(e.palette.divider,1),.88):Object(c.a)(Object(c.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},1334:function(e,t,a){"use strict";var n=a(7),r=a(1),o=a(0),s=(a(5),a(4)),l=a(10),i=a(1289),c=o.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.component,u=void 0===c?"table":c,d=e.padding,m=void 0===d?"default":d,p=e.size,f=void 0===p?"medium":p,b=e.stickyHeader,h=void 0!==b&&b,g=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=o.useMemo((function(){return{padding:m,size:f,stickyHeader:h}}),[m,f,h]);return o.createElement(i.a.Provider,{value:v},o.createElement(u,Object(r.a)({role:"table"===u?null:"table",ref:t,className:Object(s.default)(a.root,l,h&&a.stickyHeader)},g)))}));t.a=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(c)},1335:function(e,t,a){"use strict";var n=a(1),r=a(7),o=a(0),s=(a(5),a(4)),l=a(10),i=a(1282),c={variant:"head"},u=o.forwardRef((function(e,t){var a=e.classes,l=e.className,u=e.component,d=void 0===u?"thead":u,m=Object(r.a)(e,["classes","className","component"]);return o.createElement(i.a.Provider,{value:c},o.createElement(d,Object(n.a)({className:Object(s.default)(a.root,l),ref:t,role:"thead"===d?null:"rowgroup"},m)))}));t.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},1336:function(e,t,a){"use strict";var n=a(1),r=a(7),o=a(0),s=(a(5),a(4)),l=a(10),i=a(1282),c=a(23),u=o.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.component,u=void 0===c?"tr":c,d=e.hover,m=void 0!==d&&d,p=e.selected,f=void 0!==p&&p,b=Object(r.a)(e,["classes","className","component","hover","selected"]),h=o.useContext(i.a);return o.createElement(u,Object(n.a)({ref:t,className:Object(s.default)(a.root,l,h&&{head:a.head,footer:a.footer}[h.variant],m&&a.hover,f&&a.selected),role:"tr"===u?null:"row"},b))}));t.a=Object(l.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(c.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(u)},1337:function(e,t,a){"use strict";var n=a(1),r=a(7),o=a(0),s=(a(5),a(4)),l=a(10),i=a(1282),c={variant:"body"},u=o.forwardRef((function(e,t){var a=e.classes,l=e.className,u=e.component,d=void 0===u?"tbody":u,m=Object(r.a)(e,["classes","className","component"]);return o.createElement(i.a.Provider,{value:c},o.createElement(d,Object(n.a)({className:Object(s.default)(a.root,l),ref:t,role:"tbody"===d?null:"rowgroup"},m)))}));t.a=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)},2350:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\r\nimport MaUTable from '@material-ui/core/Table';\r\nimport TableBody from '@material-ui/core/TableBody';\r\nimport TableCell from '@material-ui/core/TableCell';\r\nimport TableHead from '@material-ui/core/TableHead';\r\nimport TableRow from '@material-ui/core/TableRow';\r\nimport { useTable } from 'react-table';\r\nimport sampleData from './sampleData';\r\n\r\nfunction Table({ columns, data }) {\r\n\t// Use the state and functions returned from useTable to build your UI\r\n\tconst { getTableProps, headerGroups, rows, prepareRow } = useTable({\r\n\t\tcolumns,\r\n\t\tdata\r\n\t});\r\n\r\n\t// Render the UI for your table\r\n\treturn (\r\n\t\t<MaUTable {...getTableProps()}>\r\n\t\t\t<TableHead>\r\n\t\t\t\t{headerGroups.map(headerGroup => (\r\n\t\t\t\t\t<TableRow {...headerGroup.getHeaderGroupProps()}>\r\n\t\t\t\t\t\t{headerGroup.headers.map(column => (\r\n\t\t\t\t\t\t\t<TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>\r\n\t\t\t\t\t\t))}\r\n\t\t\t\t\t</TableRow>\r\n\t\t\t\t))}\r\n\t\t\t</TableHead>\r\n\t\t\t<TableBody>\r\n\t\t\t\t{rows.map((row, i) => {\r\n\t\t\t\t\tprepareRow(row);\r\n\t\t\t\t\treturn (\r\n\t\t\t\t\t\t<TableRow {...row.getRowProps()}>\r\n\t\t\t\t\t\t\t{row.cells.map(cell => {\r\n\t\t\t\t\t\t\t\treturn <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;\r\n\t\t\t\t\t\t\t})}\r\n\t\t\t\t\t\t</TableRow>\r\n\t\t\t\t\t);\r\n\t\t\t\t})}\r\n\t\t\t</TableBody>\r\n\t\t</MaUTable>\r\n\t);\r\n}\r\n\r\nfunction App() {\r\n\tconst columns = React.useMemo(\r\n\t\t() => [\r\n\t\t\t{\r\n\t\t\t\tHeader: 'Name',\r\n\t\t\t\tcolumns: [\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tHeader: 'First Name',\r\n\t\t\t\t\t\taccessor: 'firstName'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tHeader: 'Last Name',\r\n\t\t\t\t\t\taccessor: 'lastName'\r\n\t\t\t\t\t}\r\n\t\t\t\t]\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\tHeader: 'Info',\r\n\t\t\t\tcolumns: [\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tHeader: 'Age',\r\n\t\t\t\t\t\taccessor: 'age'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tHeader: 'Visits',\r\n\t\t\t\t\t\taccessor: 'visits'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tHeader: 'Status',\r\n\t\t\t\t\t\taccessor: 'status'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tHeader: 'Profile Progress',\r\n\t\t\t\t\t\taccessor: 'progress'\r\n\t\t\t\t\t}\r\n\t\t\t\t]\r\n\t\t\t}\r\n\t\t],\r\n\t\t[]\r\n\t);\r\n\r\n\tconst data = React.useMemo(() => sampleData, []);\r\n\r\n\treturn <Table columns={columns} data={data} />;\r\n}\r\n\r\nexport default App;\r\n"},2394:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1334),s=a(1337),l=a(1331),i=a(1335),c=a(1336),u=a(1405),d=[{firstName:"dad",lastName:"teaching",age:8,visits:63,progress:96,status:"relationship"},{firstName:"crush",lastName:"player",age:4,visits:87,progress:33,status:"single"},{firstName:"quartz",lastName:"box",age:22,visits:10,progress:87,status:"single"},{firstName:"stage",lastName:"wine",age:14,visits:78,progress:83,status:"complicated"},{firstName:"whistle",lastName:"swing",age:22,visits:84,progress:55,status:"single"},{firstName:"thing",lastName:"wife",age:24,visits:79,progress:74,status:"complicated"},{firstName:"instrument",lastName:"record",age:27,visits:31,progress:66,status:"complicated"},{firstName:"passion",lastName:"drop",age:13,visits:73,progress:79,status:"relationship"},{firstName:"bears",lastName:"toothpaste",age:20,visits:34,progress:10,status:"relationship"},{firstName:"limit",lastName:"chairs",age:19,visits:79,progress:38,status:"single"},{firstName:"kite",lastName:"fact",age:11,visits:12,progress:79,status:"relationship"},{firstName:"brother",lastName:"underwear",age:25,visits:67,progress:48,status:"complicated"},{firstName:"butter",lastName:"north",age:29,visits:17,progress:29,status:"relationship"},{firstName:"housing",lastName:"society",age:0,visits:68,progress:84,status:"single"},{firstName:"skate",lastName:"attraction",age:9,visits:89,progress:89,status:"single"},{firstName:"banana",lastName:"rabbits",age:18,visits:67,progress:62,status:"single"},{firstName:"word",lastName:"volleyball",age:28,visits:19,progress:86,status:"single"},{firstName:"balls",lastName:"nest",age:23,visits:74,progress:38,status:"single"},{firstName:"physics",lastName:"method",age:2,visits:40,progress:87,status:"relationship"},{firstName:"book",lastName:"recommendation",age:12,visits:73,progress:81,status:"relationship"}];function m(e){var t=e.columns,a=e.data,n=Object(u.useTable)({columns:t,data:a}),d=n.getTableProps,m=n.headerGroups,p=n.rows,f=n.prepareRow;return r.a.createElement(o.a,d(),r.a.createElement(i.a,null,m.map((function(e){return r.a.createElement(c.a,e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement(l.a,e.getHeaderProps(),e.render("Header"))})))}))),r.a.createElement(s.a,null,p.map((function(e,t){return f(e),r.a.createElement(c.a,e.getRowProps(),e.cells.map((function(e){return r.a.createElement(l.a,e.getCellProps(),e.render("Cell"))})))}))))}t.default=function(){var e=r.a.useMemo((function(){return[{Header:"Name",columns:[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"}]},{Header:"Info",columns:[{Header:"Age",accessor:"age"},{Header:"Visits",accessor:"visits"},{Header:"Status",accessor:"status"},{Header:"Profile Progress",accessor:"progress"}]}]}),[]),t=r.a.useMemo((function(){return d}),[]);return r.a.createElement(m,{columns:e,data:t})}},2535:function(e,t,a){"use strict";a.r(t);var n=a(1277),r=a(1244),o=a(1238),s=a(159),l=a(0),i=a.n(l),c=a(19);t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-1 items-center justify-between mb-24"},i.a.createElement(s.a,{variant:"h4",className:""},"ReactTable"),i.a.createElement(r.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://github.com/react-tools/react-table",target:"_blank",role:"button"},i.a.createElement(o.a,null,"link"),i.a.createElement("span",{className:"mx-4"},"Reference"))),i.a.createElement(s.a,{className:"mb-16",component:"p"},i.a.createElement("code",null,"react-table")," is a lightweight, fast and extendable datagrid built for React."),i.a.createElement("hr",null),i.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Example Usage"),i.a.createElement(n.a,{className:"mb-64",component:a(2394).default,raw:a(2350)}),i.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Enhanced examples"),i.a.createElement(s.a,{className:"mt-32 mb-8",component:"p"},"Checkout for enhanced examples at"," ",i.a.createElement("a",{href:"https://github.com/tannerlinsley/react-table/blob/master/docs/examples.md",target:"_blank",rel:"noopener noreferrer"},"react-table docs")),i.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Demos"),i.a.createElement("ul",null,i.a.createElement("li",{className:"mb-8"},i.a.createElement(c.a,{to:"/apps/contacts"},"Contacts App"))))}}}]);