(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[87],{1276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};var i=void 0,l=void 0;"undefined"!==typeof document&&(i=document),"undefined"!==typeof window&&(l=window);var c=t.FrameContext=o.default.createContext({document:i,window:l}),s=c.Provider,u=c.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=u},1277:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var a=n(13),r=n(131),o=n(1247),i=n(1255),l=n(1238),c=n(2412),s=n(2610),u=n(4),d=n(0),m=n.n(d),f=n(11),p=n(6),h=n(82),b=n(83),y=n(142),v=n(141),g=n(1173),E=n(650),w=n(1235),k=n(1246),j=n(10),x=n(74),O=n(424),C=n(1278),D=n.n(C),_=Object(g.a)({productionPrefix:"iframe-"}),N=function(e){Object(y.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(x.b)(Object(p.a)(Object(p.a)({},Object(E.a)()),{},{plugins:[].concat(Object(f.a)(Object(E.a)().plugins),[Object(O.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),m.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return m.a.createElement(D.a,{head:this.renderHead(),ref:this.handleRef,className:Object(u.default)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?m.a.createElement(w.b,{jss:this.state.jss,generateClassName:_,sheetsManager:this.state.sheetsManager},m.a.createElement(k.a,{theme:a},m.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(m.a.Component),T=Object(j.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(N);function L(e){var t=Object(d.useState)(e.currentTabIndex),n=Object(a.a)(t,2),f=n[0],p=n[1],h=e.component,b=e.raw,y=e.iframe,v=e.className;return m.a.createElement(i.a,{className:Object(u.default)(v,"shadow")},m.a.createElement(o.a,{position:"static",color:"default",className:"shadow-0"},m.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:f,onChange:function(e,t){p(t)}},h&&m.a.createElement(c.a,{classes:{root:"min-w-64"},icon:m.a.createElement(l.a,null,"remove_red_eye")}),b&&m.a.createElement(c.a,{classes:{root:"min-w-64"},icon:m.a.createElement(l.a,null,"code")}))),m.a.createElement("div",{className:"flex justify-center max-w-full"},m.a.createElement("div",{className:0===f?"flex flex-1 max-w-full":"hidden"},h&&(y?m.a.createElement(T,null,m.a.createElement(h,null)):m.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},m.a.createElement(h,null)))),m.a.createElement("div",{className:1===f?"flex flex-1":"hidden"},b&&m.a.createElement("div",{className:"flex flex-1"},m.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},b.default)))))}L.defaultProps={currentTabIndex:0};var M=L},1278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1276);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var r,o=n(1279),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default},1279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=d(o),l=d(n(24)),c=d(n(5)),s=n(1276),u=d(n(1280));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,r=i.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},i.default.createElement(s.FrameContextProvider,{value:{document:e,window:a}},i.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var o=this.getMountTarget();return[l.default.createPortal(this.props.head,this.getDoc().head),l.default.createPortal(r,o)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,i.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(o.Component);m.propTypes={style:c.default.object,head:c.default.node,initialContent:c.default.string,mountTarget:c.default.string,contentDidMount:c.default.func,contentDidUpdate:c.default.func,children:c.default.oneOfType([c.default.element,c.default.arrayOf(c.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=(i(r),i(n(5)));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);s.propTypes={children:o.default.element.isRequired,contentDidMount:o.default.func.isRequired,contentDidUpdate:o.default.func.isRequired},t.default=s},1723:function(e,t,n){"use strict";var a=n(1),r=n(7),o=n(0),i=(n(5),n(4)),l=n(12),c=n(10),s=n(258),u=n(27),d=n(159),m=o.forwardRef((function(e,t){var n=e.classes,c=e.className,m=e.color,f=void 0===m?"primary":m,p=e.component,h=void 0===p?"a":p,b=e.onBlur,y=e.onFocus,v=e.TypographyClasses,g=e.underline,E=void 0===g?"hover":g,w=e.variant,k=void 0===w?"inherit":w,j=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),x=Object(s.a)(),O=x.isFocusVisible,C=x.onBlurVisible,D=x.ref,_=o.useState(!1),N=_[0],T=_[1],L=Object(u.a)(t,D);return o.createElement(d.a,Object(a.a)({className:Object(i.default)(n.root,n["underline".concat(Object(l.a)(E))],c,N&&n.focusVisible,"button"===h&&n.button),classes:v,color:f,component:h,onBlur:function(e){N&&(C(),T(!1)),b&&b(e)},onFocus:function(e){O(e)&&T(!0),y&&y(e)},ref:L,variant:k},j))}));t.a=Object(c.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(m)},1933:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),r=n.n(a),o=n(1236),i=n(1723),l=n(159),c=Object(o.a)((function(e){return{root:{"& > * + *":{marginLeft:e.spacing(2)}}}}));function s(){var e=c(),t=function(e){return e.preventDefault()};return r.a.createElement(l.a,{className:e.root},r.a.createElement(i.a,{href:"#",onClick:t},"Link"),r.a.createElement(i.a,{href:"#",onClick:t,color:"inherit"},'color="inherit"'),r.a.createElement(i.a,{href:"#",onClick:t,variant:"body2"},'variant="body2"'))}},1934:function(e,t,n){"use strict";n.r(t),t.default="/* eslint-disable jsx-a11y/anchor-is-valid */\r\nimport React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Link from '@material-ui/core/Link';\r\nimport Typography from '@material-ui/core/Typography';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    '& > * + *': {\r\n      marginLeft: theme.spacing(2),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function Links() {\r\n  const classes = useStyles();\r\n  const preventDefault = (event) => event.preventDefault();\r\n\r\n  return (\r\n    <Typography className={classes.root}>\r\n      <Link href=\"#\" onClick={preventDefault}>\r\n        Link\r\n      </Link>\r\n      <Link href=\"#\" onClick={preventDefault} color=\"inherit\">\r\n        {'color=\"inherit\"'}\r\n      </Link>\r\n      <Link href=\"#\" onClick={preventDefault} variant=\"body2\">\r\n        {'variant=\"body2\"'}\r\n      </Link>\r\n    </Typography>\r\n  );\r\n}\r\n"},1935:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(0),r=n.n(a),o=n(1723);function i(){return r.a.createElement(o.a,{component:"button",variant:"body2",onClick:function(){console.info("I'm a button.")}},"Button Link")}},1936:function(e,t,n){"use strict";n.r(t),t.default='/* eslint-disable jsx-a11y/anchor-is-valid */\r\nimport React from \'react\';\r\nimport Link from \'@material-ui/core/Link\';\r\n\r\nexport default function ButtonLink() {\r\n  return (\r\n    <Link\r\n      component="button"\r\n      variant="body2"\r\n      onClick={() => {\r\n        console.info("I\'m a button.");\r\n      }}\r\n    >\r\n      Button Link\r\n    </Link>\r\n  );\r\n}\r\n'},2485:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1277),i=(n(131),n(1244)),l=n(1238),c=n(159),s=n(1236),u=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return u(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},r.a.createElement(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/links",target:"_blank",role:"button"},r.a.createElement(l.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),r.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Links"),r.a.createElement(c.a,{className:"description"},"The Link component allows you to easily customize anchor elements with your theme colors and typography styles."),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple links"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"The Link component is built on top of the ",r.a.createElement("a",{href:"/api/typography/"},"Typography")," component. You can leverage its properties."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1933).default,raw:n(1934)})),r.a.createElement(c.a,{className:"mb-16",component:"div"},"However, the Link component has different default properties than the Typography component:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,'color="primary"')," as the link needs to stand out."),r.a.createElement("li",null,r.a.createElement("code",null,'variant="inherit"')," as the link will, most of the time, be used as a child of a Typography component.")),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Security"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"When you use ",r.a.createElement("code",null,'target="_blank"')," with Links, it is ",r.a.createElement("a",{href:"https://developers.google.com/web/tools/lighthouse/audits/noopener"},"recommended")," to always set ",r.a.createElement("code",null,'rel="noopener"')," or ",r.a.createElement("code",null,'rel="noreferrer"')," when linking to third party content."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,'rel="noopener"')," prevents the new page from being able to access the ",r.a.createElement("code",null,"window.opener")," property and ensures it runs in a separate process. Without this, the target page can potentially redirect your page to a malicious URL."),r.a.createElement("li",null,r.a.createElement("code",null,'rel="noreferrer"')," has the same effect, but also prevents the ",r.a.createElement("em",null,"Referer")," header from being sent to the new page. \u26a0\ufe0f Removing the referrer header will affect analytics.")),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Third-party routing library"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"One common use case is to perform navigation on the client only, without an HTTP round-trip to the server. The ",r.a.createElement("code",null,"Link")," component provides a property to handle this use case: ",r.a.createElement("code",null,"component"),"."),r.a.createElement(c.a,{className:"mb-16",component:"div"},"Here is an ",r.a.createElement("a",{href:"/guides/composition/#link"},"integration example with react-router"),"."),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"(WAI-ARIA: ",r.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/#link"},"https://www.w3.org/TR/wai-aria-practices/#link"),")"),r.a.createElement("ul",null,r.a.createElement("li",null,'When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use ',r.a.createElement("a",{href:"https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text"},"specific descriptions"),"."),r.a.createElement("li",null,"For the best user experience, links should stand out from the text on the page."),r.a.createElement("li",null,"If a link doesn't have a meaningful href, ",r.a.createElement("a",{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md"},"it should be rendered using a ",r.a.createElement("code",null,"<button>")," element"),".")),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1935).default,raw:n(1936)})))}}}]);