(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[107],{1276:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FrameContextConsumer=e.FrameContextProvider=e.FrameContext=void 0;var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};var l=void 0,i=void 0;"undefined"!==typeof document&&(l=document),"undefined"!==typeof window&&(i=window);var u=e.FrameContext=o.default.createContext({document:l,window:i}),s=u.Provider,c=u.Consumer;e.FrameContextProvider=s,e.FrameContextConsumer=c},1277:function(t,e,n){"use strict";n.d(e,"a",(function(){return F}));var a=n(13),r=n(131),o=n(1247),l=n(1255),i=n(1238),u=n(2412),s=n(2610),c=n(4),d=n(0),p=n.n(d),m=n(11),f=n(6),h=n(82),b=n(83),v=n(142),y=n(141),g=n(1173),C=n(650),E=n(1235),w=n(1246),x=n(10),j=n(74),O=n(424),P=n(1278),_=n.n(P),M=Object(g.a)({productionPrefix:"iframe-"}),D=function(t){Object(v.a)(n,t);var e=Object(y.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={ready:!1},t.handleRef=function(e){t.contentDocument=e?e.node.contentDocument:null},t.onContentDidMount=function(){t.setState({ready:!0,jss:Object(j.b)(Object(f.a)(Object(f.a)({},Object(C.a)()),{},{plugins:[].concat(Object(m.a)(Object(C.a)().plugins),[Object(O.a)()]),insertionPoint:t.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:t.contentDocument.body})},t.onContentDidUpdate=function(){t.contentDocument.body.dir=t.props.theme.direction},t.renderHead=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),p.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.classes,a=t.theme;return p.a.createElement(_.a,{head:this.renderHead(),ref:this.handleRef,className:Object(c.default)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?p.a.createElement(E.b,{jss:this.state.jss,generateClassName:M,sheetsManager:this.state.sheetsManager},p.a.createElement(w.a,{theme:a},p.a.cloneElement(e,{container:this.state.container}))):null)}}]),n}(p.a.Component),N=Object(x.a)((function(t){return{root:{backgroundColor:t.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(D);function T(t){var e=Object(d.useState)(t.currentTabIndex),n=Object(a.a)(e,2),m=n[0],f=n[1],h=t.component,b=t.raw,v=t.iframe,y=t.className;return p.a.createElement(l.a,{className:Object(c.default)(y,"shadow")},p.a.createElement(o.a,{position:"static",color:"default",className:"shadow-0"},p.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(t,e){f(e)}},h&&p.a.createElement(u.a,{classes:{root:"min-w-64"},icon:p.a.createElement(i.a,null,"remove_red_eye")}),b&&p.a.createElement(u.a,{classes:{root:"min-w-64"},icon:p.a.createElement(i.a,null,"code")}))),p.a.createElement("div",{className:"flex justify-center max-w-full"},p.a.createElement("div",{className:0===m?"flex flex-1 max-w-full":"hidden"},h&&(v?p.a.createElement(N,null,p.a.createElement(h,null)):p.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},p.a.createElement(h,null)))),p.a.createElement("div",{className:1===m?"flex flex-1":"hidden"},b&&p.a.createElement("div",{className:"flex flex-1"},p.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},b.default)))))}T.defaultProps={currentTabIndex:0};var F=T},1278:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FrameContextConsumer=e.FrameContext=void 0;var a=n(1276);Object.defineProperty(e,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(e,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var r,o=n(1279),l=(r=o)&&r.__esModule?r:{default:r};e.default=l.default},1279:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=n(0),l=d(o),i=d(n(24)),u=d(n(5)),s=n(1276),c=d(n(1280));function d(t){return t&&t.__esModule?t:{default:t}}var p=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){this._isMounted=!0;var t=this.getDoc();t&&"complete"===t.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var t=this.getDoc();return this.props.mountTarget?t.querySelector(this.props.mountTarget):t.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var t=this.getDoc();if(!t)return null;var e=this.props.contentDidMount,n=this.props.contentDidUpdate,a=t.defaultView||t.parentView,r=l.default.createElement(c.default,{contentDidMount:e,contentDidUpdate:n},l.default.createElement(s.FrameContextProvider,{value:{document:t,window:a}},l.default.createElement("div",{className:"frame-content"},this.props.children)));t.body.children.length<1&&(t.open("text/html","replace"),t.write(this.props.initialContent),t.close());var o=this.getMountTarget();return[i.default.createPortal(this.props.head,this.getDoc().head),i.default.createPortal(r,o)]}},{key:"render",value:function(){var t=this,e=a({},this.props,{children:void 0});return delete e.head,delete e.initialContent,delete e.mountTarget,delete e.contentDidMount,delete e.contentDidUpdate,l.default.createElement("iframe",a({},e,{ref:function(e){t.node=e}}),this.renderFrameContents())}}]),e}(o.Component);p.propTypes={style:u.default.object,head:u.default.node,initialContent:u.default.string,mountTarget:u.default.string,contentDidMount:u.default.func,contentDidUpdate:u.default.func,children:u.default.oneOfType([u.default.element,u.default.arrayOf(u.default.element)])},p.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},e.default=p},1280:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(0),o=(l(r),l(n(5)));function l(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var s=function(t){function e(){return i(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),e}(r.Component);s.propTypes={children:o.default.element.isRequired,contentDidMount:o.default.func.isRequired,contentDidUpdate:o.default.func.isRequired},e.default=s},1578:function(t,e,n){"use strict";n.r(e);var a=n(13),r=n(453),o=n(159),l=n(0),i=n.n(l),u=["Sea","Sky","Forest","Aerial","Art"].map((function(t){return{value:t,label:t}}));e.default=function(){var t=Object(l.useState)([{value:"nature",label:"Nature"},{value:"city",label:"City"},{value:"landscape",label:"Landscape"}]),e=Object(a.a)(t,2),n=e[0],s=e[1];function c(t){s(t)}return i.a.createElement("div",{className:"w-full max-w-sm pt-64 pb-224"},i.a.createElement(o.a,{className:"text-24 mt-24 mb-8",component:"h2"},"Standart"),i.a.createElement(r.a,{className:"w-full my-16",value:n,onChange:c,placeholder:"Select multiple tags",textFieldProps:{label:"Tags",InputLabelProps:{shrink:!0},variant:"standard"},options:u,isMulti:!0}),i.a.createElement(o.a,{className:"text-24 mt-24 mb-8",component:"h2"},"Outlined"),i.a.createElement(r.a,{className:"w-full my-16",value:n,onChange:c,placeholder:"Select multiple tags",textFieldProps:{label:"Tags",InputLabelProps:{shrink:!0},variant:"outlined"},options:u,isMulti:!0}),i.a.createElement(o.a,{className:"text-24 mt-24 mb-8",component:"h2"},"Filled"),i.a.createElement(r.a,{className:"w-full my-16",value:n,onChange:c,placeholder:"Select multiple tags",textFieldProps:{label:"Tags",InputLabelProps:{shrink:!0},variant:"filled"},options:u,isMulti:!0}))}},1579:function(t,e,n){"use strict";n.r(e),e.default="import FuseChipSelect from '@fuse/core/FuseChipSelect';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport React, { useState } from 'react';\r\n\r\nconst suggestions = ['Sea', 'Sky', 'Forest', 'Aerial', 'Art'].map(item => ({\r\n\tvalue: item,\r\n\tlabel: item\r\n}));\r\n\r\nfunction SimpleExample() {\r\n\tconst [tags, setTags] = useState([\r\n\t\t{\r\n\t\t\tvalue: 'nature',\r\n\t\t\tlabel: 'Nature'\r\n\t\t},\r\n\t\t{\r\n\t\t\tvalue: 'city',\r\n\t\t\tlabel: 'City'\r\n\t\t},\r\n\t\t{\r\n\t\t\tvalue: 'landscape',\r\n\t\t\tlabel: 'Landscape'\r\n\t\t}\r\n\t]);\r\n\r\n\tfunction handleChipChange(value) {\r\n\t\tsetTags(value);\r\n\t}\r\n\r\n\treturn (\r\n\t\t<div className=\"w-full max-w-sm pt-64 pb-224\">\r\n\t\t\t<Typography className=\"text-24 mt-24 mb-8\" component=\"h2\">\r\n\t\t\t\tStandart\r\n\t\t\t</Typography>\r\n\r\n\t\t\t<FuseChipSelect\r\n\t\t\t\tclassName=\"w-full my-16\"\r\n\t\t\t\tvalue={tags}\r\n\t\t\t\tonChange={handleChipChange}\r\n\t\t\t\tplaceholder=\"Select multiple tags\"\r\n\t\t\t\ttextFieldProps={{\r\n\t\t\t\t\tlabel: 'Tags',\r\n\t\t\t\t\tInputLabelProps: {\r\n\t\t\t\t\t\tshrink: true\r\n\t\t\t\t\t},\r\n\t\t\t\t\tvariant: 'standard'\r\n\t\t\t\t}}\r\n\t\t\t\toptions={suggestions}\r\n\t\t\t\tisMulti\r\n\t\t\t/>\r\n\r\n\t\t\t<Typography className=\"text-24 mt-24 mb-8\" component=\"h2\">\r\n\t\t\t\tOutlined\r\n\t\t\t</Typography>\r\n\r\n\t\t\t<FuseChipSelect\r\n\t\t\t\tclassName=\"w-full my-16\"\r\n\t\t\t\tvalue={tags}\r\n\t\t\t\tonChange={handleChipChange}\r\n\t\t\t\tplaceholder=\"Select multiple tags\"\r\n\t\t\t\ttextFieldProps={{\r\n\t\t\t\t\tlabel: 'Tags',\r\n\t\t\t\t\tInputLabelProps: {\r\n\t\t\t\t\t\tshrink: true\r\n\t\t\t\t\t},\r\n\t\t\t\t\tvariant: 'outlined'\r\n\t\t\t\t}}\r\n\t\t\t\toptions={suggestions}\r\n\t\t\t\tisMulti\r\n\t\t\t/>\r\n\r\n\t\t\t<Typography className=\"text-24 mt-24 mb-8\" component=\"h2\">\r\n\t\t\t\tFilled\r\n\t\t\t</Typography>\r\n\r\n\t\t\t<FuseChipSelect\r\n\t\t\t\tclassName=\"w-full my-16\"\r\n\t\t\t\tvalue={tags}\r\n\t\t\t\tonChange={handleChipChange}\r\n\t\t\t\tplaceholder=\"Select multiple tags\"\r\n\t\t\t\ttextFieldProps={{\r\n\t\t\t\t\tlabel: 'Tags',\r\n\t\t\t\t\tInputLabelProps: {\r\n\t\t\t\t\t\tshrink: true\r\n\t\t\t\t\t},\r\n\t\t\t\t\tvariant: 'filled'\r\n\t\t\t\t}}\r\n\t\t\t\toptions={suggestions}\r\n\t\t\t\tisMulti\r\n\t\t\t/>\r\n\t\t</div>\r\n\t);\r\n}\r\n\r\nexport default SimpleExample;\r\n"},2450:function(t,e,n){"use strict";n.r(e);var a=n(1277),r=n(159),o=n(0),l=n.n(o),i=n(19);e.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{variant:"h4",className:"mb-24"},"FuseChipSelect"),l.a.createElement(r.a,{className:"mb-16",component:"p"},l.a.createElement("code",null,"FuseChipSelect")," is a multiple chip select component which uses react-select and material-ui Chip."),l.a.createElement("hr",null),l.a.createElement(r.a,{className:"mt-32 mb-8",variant:"h5"},"Example Usages"),l.a.createElement(a.a,{className:"mb-64",component:n(1578).default,raw:n(1579)}),l.a.createElement(r.a,{className:"mt-32 mb-8",variant:"h5"},"Demos"),l.a.createElement("ul",null,l.a.createElement("li",{className:"mb-8"},l.a.createElement(i.a,{to:"/apps/e-commerce/products/1"},"E-Commerce Product Page"))))}}}]);