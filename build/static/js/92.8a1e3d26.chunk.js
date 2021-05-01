(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[92],{1277:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var n=a(13),r=a(131),i=a(1247),l=a(1255),c=a(1238),s=a(2412),o=a(2610),m=a(4),d=a(0),u=a.n(d),p=a(11),f=a(6),h=a(82),b=a(83),y=a(142),g=a(141),x=a(1173),E=a(650),k=a(1235),v=a(1246),N=a(10),w=a(74),D=a(424),j=a(1278),P=a.n(j),T=Object(x.a)({productionPrefix:"iframe-"}),F=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(w.b)(Object(f.a)(Object(f.a)({},Object(E.a)()),{},{plugins:[].concat(Object(p.a)(Object(E.a)().plugins),[Object(D.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),u.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.classes,n=e.theme;return u.a.createElement(P.a,{head:this.renderHead(),ref:this.handleRef,className:Object(m.default)(a.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?u.a.createElement(k.b,{jss:this.state.jss,generateClassName:T,sheetsManager:this.state.sheetsManager},u.a.createElement(v.a,{theme:n},u.a.cloneElement(t,{container:this.state.container}))):null)}}]),a}(u.a.Component),O=Object(N.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(F);function M(e){var t=Object(d.useState)(e.currentTabIndex),a=Object(n.a)(t,2),p=a[0],f=a[1],h=e.component,b=e.raw,y=e.iframe,g=e.className;return u.a.createElement(l.a,{className:Object(m.default)(g,"shadow")},u.a.createElement(i.a,{position:"static",color:"default",className:"shadow-0"},u.a.createElement(o.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,t){f(t)}},h&&u.a.createElement(s.a,{classes:{root:"min-w-64"},icon:u.a.createElement(c.a,null,"remove_red_eye")}),b&&u.a.createElement(s.a,{classes:{root:"min-w-64"},icon:u.a.createElement(c.a,null,"code")}))),u.a.createElement("div",{className:"flex justify-center max-w-full"},u.a.createElement("div",{className:0===p?"flex flex-1 max-w-full":"hidden"},h&&(y?u.a.createElement(O,null,u.a.createElement(h,null)):u.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},u.a.createElement(h,null)))),u.a.createElement("div",{className:1===p?"flex flex-1":"hidden"},b&&u.a.createElement("div",{className:"flex flex-1"},u.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},b.default)))))}M.defaultProps={currentTabIndex:0};var S=M},2022:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(13),r=a(0),i=a.n(r),l=a(1321),c=a(1324),s=a(1204),o=a(1367),m=a(2494);function d(){var e=i.a.useState(new Date("2014-08-18T21:11:54")),t=Object(n.a)(e,2),a=t[0],r=t[1],d=function(e){r(e)};return i.a.createElement(s.a,{utils:c.a},i.a.createElement(l.a,{container:!0,justify:"space-around"},i.a.createElement(o.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Date picker inline",value:a,onChange:d,KeyboardButtonProps:{"aria-label":"change date"}}),i.a.createElement(o.a,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:a,onChange:d,KeyboardButtonProps:{"aria-label":"change date"}}),i.a.createElement(m.a,{margin:"normal",id:"time-picker",label:"Time picker",value:a,onChange:d,KeyboardButtonProps:{"aria-label":"change time"}})))}},2023:function(e,t,a){"use strict";a.r(t),t.default='import \'date-fns\';\r\nimport React from \'react\';\r\nimport Grid from \'@material-ui/core/Grid\';\r\nimport DateFnsUtils from \'@date-io/date-fns\';\r\nimport {\r\n  MuiPickersUtilsProvider,\r\n  KeyboardTimePicker,\r\n  KeyboardDatePicker,\r\n} from \'@material-ui/pickers\';\r\n\r\nexport default function MaterialUIPickers() {\r\n  // The first commit of Material-UI\r\n  const [selectedDate, setSelectedDate] = React.useState(new Date(\'2014-08-18T21:11:54\'));\r\n\r\n  const handleDateChange = (date) => {\r\n    setSelectedDate(date);\r\n  };\r\n\r\n  return (\r\n    <MuiPickersUtilsProvider utils={DateFnsUtils}>\r\n      <Grid container justify="space-around">\r\n        <KeyboardDatePicker\r\n          disableToolbar\r\n          variant="inline"\r\n          format="MM/dd/yyyy"\r\n          margin="normal"\r\n          id="date-picker-inline"\r\n          label="Date picker inline"\r\n          value={selectedDate}\r\n          onChange={handleDateChange}\r\n          KeyboardButtonProps={{\r\n            \'aria-label\': \'change date\',\r\n          }}\r\n        />\r\n        <KeyboardDatePicker\r\n          margin="normal"\r\n          id="date-picker-dialog"\r\n          label="Date picker dialog"\r\n          format="MM/dd/yyyy"\r\n          value={selectedDate}\r\n          onChange={handleDateChange}\r\n          KeyboardButtonProps={{\r\n            \'aria-label\': \'change date\',\r\n          }}\r\n        />\r\n        <KeyboardTimePicker\r\n          margin="normal"\r\n          id="time-picker"\r\n          label="Time picker"\r\n          value={selectedDate}\r\n          onChange={handleDateChange}\r\n          KeyboardButtonProps={{\r\n            \'aria-label\': \'change time\',\r\n          }}\r\n        />\r\n      </Grid>\r\n    </MuiPickersUtilsProvider>\r\n  );\r\n}\r\n'},2024:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(0),r=a.n(n),i=a(1236),l=a(1258),c=Object(i.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function s(){var e=c();return r.a.createElement("form",{className:e.container,noValidate:!0},r.a.createElement(l.a,{id:"date",label:"Birthday",type:"date",defaultValue:"2017-05-24",className:e.textField,InputLabelProps:{shrink:!0}}))}},2025:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport TextField from '@material-ui/core/TextField';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  container: {\r\n    display: 'flex',\r\n    flexWrap: 'wrap',\r\n  },\r\n  textField: {\r\n    marginLeft: theme.spacing(1),\r\n    marginRight: theme.spacing(1),\r\n    width: 200,\r\n  },\r\n}));\r\n\r\nexport default function DatePickers() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <form className={classes.container} noValidate>\r\n      <TextField\r\n        id=\"date\"\r\n        label=\"Birthday\"\r\n        type=\"date\"\r\n        defaultValue=\"2017-05-24\"\r\n        className={classes.textField}\r\n        InputLabelProps={{\r\n          shrink: true,\r\n        }}\r\n      />\r\n    </form>\r\n  );\r\n}\r\n"},2026:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(0),r=a.n(n),i=a(1236),l=a(1258),c=Object(i.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function s(){var e=c();return r.a.createElement("form",{className:e.container,noValidate:!0},r.a.createElement(l.a,{id:"datetime-local",label:"Next appointment",type:"datetime-local",defaultValue:"2017-05-24T10:30",className:e.textField,InputLabelProps:{shrink:!0}}))}},2027:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport TextField from '@material-ui/core/TextField';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  container: {\r\n    display: 'flex',\r\n    flexWrap: 'wrap',\r\n  },\r\n  textField: {\r\n    marginLeft: theme.spacing(1),\r\n    marginRight: theme.spacing(1),\r\n    width: 200,\r\n  },\r\n}));\r\n\r\nexport default function DateAndTimePickers() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <form className={classes.container} noValidate>\r\n      <TextField\r\n        id=\"datetime-local\"\r\n        label=\"Next appointment\"\r\n        type=\"datetime-local\"\r\n        defaultValue=\"2017-05-24T10:30\"\r\n        className={classes.textField}\r\n        InputLabelProps={{\r\n          shrink: true,\r\n        }}\r\n      />\r\n    </form>\r\n  );\r\n}\r\n"},2028:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(0),r=a.n(n),i=a(1236),l=a(1258),c=Object(i.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function s(){var e=c();return r.a.createElement("form",{className:e.container,noValidate:!0},r.a.createElement(l.a,{id:"time",label:"Alarm clock",type:"time",defaultValue:"07:30",className:e.textField,InputLabelProps:{shrink:!0},inputProps:{step:300}}))}},2029:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport TextField from '@material-ui/core/TextField';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  container: {\r\n    display: 'flex',\r\n    flexWrap: 'wrap',\r\n  },\r\n  textField: {\r\n    marginLeft: theme.spacing(1),\r\n    marginRight: theme.spacing(1),\r\n    width: 200,\r\n  },\r\n}));\r\n\r\nexport default function TimePickers() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <form className={classes.container} noValidate>\r\n      <TextField\r\n        id=\"time\"\r\n        label=\"Alarm clock\"\r\n        type=\"time\"\r\n        defaultValue=\"07:30\"\r\n        className={classes.textField}\r\n        InputLabelProps={{\r\n          shrink: true,\r\n        }}\r\n        inputProps={{\r\n          step: 300, // 5 min\r\n        }}\r\n      />\r\n    </form>\r\n  );\r\n}\r\n"},2493:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1277),l=(a(131),a(1244)),c=a(1238),s=a(159),o=a(1236),m=Object(o.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return m(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},r.a.createElement(l.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/pickers",target:"_blank",role:"button"},r.a.createElement(c.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),r.a.createElement(s.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Date / Time pickers"),r.a.createElement(s.a,{className:"description"},"Date pickers and Time pickers provide a simple way to select a single value from a pre-determined set."),r.a.createElement("ul",null,r.a.createElement("li",null,"On mobile, pickers are best suited for display in confirmation dialog."),r.a.createElement("li",null,"For inline display, such as on a form, consider using compact controls such as segmented dropdown buttons.")),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"@material-ui/pickers"),r.a.createElement(s.a,{className:"mb-16",component:"div"},' src="https://img.shields.io/github/stars/mui-org/material-ui-pickers.svg?style=social&label=Stars" alt="stars/> src="https://img.shields.io/npm/dm/@material-ui/pickers.svg" alt="npm downloads/>'),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement("a",{href:"https://material-ui-pickers.dev/"},"@material-ui/pickers")," provides date picker and time picker controls."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(i.a,{className:"my-24",iframe:!1,component:a(2022).default,raw:a(2023)})),r.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Native pickers"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"\u26a0\ufe0f Native input controls support by browsers ",r.a.createElement("a",{href:"https://caniuse.com/#feat=input-datetime"},"isn't perfect"),". Have a look at ",r.a.createElement("a",{href:"https://material-ui-pickers.dev/"},"@material-ui/pickers")," for a richer solution."),r.a.createElement(s.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Datepickers"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"A native datepicker example with ",r.a.createElement("code",null,'type="date"'),"."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(i.a,{className:"my-24",iframe:!1,component:a(2024).default,raw:a(2025)})),r.a.createElement(s.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Date & Time pickers"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"A native date & time picker example with ",r.a.createElement("code",null,'type="datetime-local"'),"."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(i.a,{className:"my-24",iframe:!1,component:a(2026).default,raw:a(2027)})),r.a.createElement(s.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Time pickers"),r.a.createElement(s.a,{className:"mb-16",component:"div"},"A native time picker example with ",r.a.createElement("code",null,'type="time"'),"."),r.a.createElement(s.a,{className:"mb-16",component:"div"},r.a.createElement(i.a,{className:"my-24",iframe:!1,component:a(2028).default,raw:a(2029)})))}}}]);