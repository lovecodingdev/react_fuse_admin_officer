(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[131],{1362:function(e,t,a){"use strict";a.d(t,"f",(function(){return k})),a.d(t,"m",(function(){return A})),a.d(t,"l",(function(){return C})),a.d(t,"g",(function(){return S})),a.d(t,"h",(function(){return D})),a.d(t,"k",(function(){return B})),a.d(t,"i",(function(){return E})),a.d(t,"b",(function(){return N})),a.d(t,"e",(function(){return T})),a.d(t,"c",(function(){return L})),a.d(t,"j",(function(){return z})),a.d(t,"n",(function(){return G})),a.d(t,"a",(function(){return J}));var r,n=a(33),c=a(11),s=a(14),i=a.n(s),d=a(30),o=a(25),u=a(46),p=a.n(u),l=a(31),b=a(185),f=a(9),m=a(42),h=a(82),v=function e(t){Object(h.a)(this,e);var a=t||{};this.id=a.id||l.a.generateGUID(),this.name=a.name||"",this.description=a.description||"",this.idAttachmentCover=a.idAttachmentCover||"",this.idMembers=a.idMembers||[],this.idLabels=a.idLabels||[],this.attachments=a.attachments||[],this.subscribed=a.subscribed||!0,this.checklists=a.checklists||[],this.checkItems=a.checkItems||0,this.checkItemsChecked=a.checkItemsChecked||0,this.comments=a.comments||[],this.activities=a.activities||[],this.due=a.due||""},x=function e(t){Object(h.a)(this,e);var a=t||{};this.id=a.id||l.a.generateGUID(),this.name=a.name||"",this.idCards=[]},j=a(13),g=function(e,t,a){var r=Array.from(e),n=r.splice(t,1),c=Object(j.a)(n,1)[0];return r.splice(a,0,c),r},O=g,w=function(e,t,a){var r=f.a.find(e,{id:t.droppableId}),n=f.a.find(e,{id:a.droppableId}),c=r.idCards[t.index];if(t.droppableId===a.droppableId){var s=g(r.idCards,t.index,a.index);return e.map((function(e){return e.id===t.droppableId&&(e.idCards=s),e}))}return r.idCards.splice(t.index,1),n.idCards.splice(a.index,0,c),e.map((function(e){return e.id===t.droppableId?r:e.id===a.droppableId?n:e}))},y=a(1398),I=a(1375),k=Object(o.b)("scrumboardApp/board/getBoard",function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,e.prev=1,e.next=4,p.a.get("/api/scrumboard-app/board",{params:t});case 4:return n=e.sent,e.next=7,n.data;case 7:return c=e.sent,e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(1),r(Object(m.c)({message:e.t0.response.data,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),b.a.push({pathname:"/apps/scrumboard/boards"}),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(o.b)("scrumboardApp/board/reorderList",function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r,n,c,s,d,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=n().scrumboardApp.board,s=c.lists,d=O(f.a.merge([],s),t.source.index,t.destination.index),e.next=6,p.a.post("/api/scrumboard-app/list/order",{boardId:c.id,lists:d});case 6:return o=e.sent,e.next=9,o.data;case 9:return u=e.sent,r(Object(m.c)({message:"List Order Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),C=Object(o.b)("scrumboardApp/board/reorderCard",function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r,n,c,s,d,o,u,l,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.source,n=t.destination,c=a.dispatch,s=a.getState,d=s().scrumboardApp.board,o=d.lists,u=w(f.a.merge([],o),r,n),e.next=7,p.a.post("/api/scrumboard-app/card/order",{boardId:d.id,lists:u});case 7:return l=e.sent,e.next=10,l.data;case 10:return b=e.sent,c(Object(m.c)({message:"Card Order Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),e.abrupt("return",b);case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),S=Object(o.b)("scrumboardApp/board/newCard",function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r,n,c,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.listId,c=t.cardTitle,a.dispatch,a.getState,e.next=4,p.a.post("/api/scrumboard-app/card/new",{boardId:r,listId:n,data:new v({name:c})});case 4:return s=e.sent,e.next=7,s.data;case 7:return d=e.sent,e.abrupt("return",d);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),D=Object(o.b)("scrumboardApp/board/newList",function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r,n,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.listTitle,a.dispatch,a.getState,e.next=4,p.a.post("/api/scrumboard-app/list/new",{boardId:r,data:new x({name:n})});case 4:return c=e.sent,e.next=7,c.data;case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),B=Object(o.b)("scrumboardApp/board/renameList",function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r,n,c,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.listId,c=t.listTitle,a.dispatch,a.getState,e.next=4,p.a.post("/api/scrumboard-app/list/rename",{boardId:r,listId:n,listTitle:c});case 4:return s=e.sent,e.next=7,s.data;case 7:return d=e.sent,e.abrupt("return",d);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(o.b)("scrumboardApp/board/removeList",function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r,n,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.listId,a.dispatch,a.getState,e.next=4,p.a.post("/api/scrumboard-app/list/remove",{boardId:r,listId:n});case 4:return c=e.sent,e.next=7,c.data;case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(o.b)("scrumboardApp/board/changeBoardSettings",function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r,n,c,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,r=a.getState,n=r().scrumboardApp.board,c=f.a.merge({},n.settings,t),e.next=5,p.a.post("/api/scrumboard-app/board/settings/update",{boardId:n.id,settings:c});case 5:return s=e.sent,e.next=8,s.data;case 8:return d=e.sent,e.abrupt("return",d);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),T=Object(o.b)("scrumboardApp/board/deleteBoard",function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,e.next=3,p.a.post("/api/scrumboard-app/board/delete",{boardId:t});case 3:return r=e.sent,b.a.push({pathname:"/apps/scrumboard/boards"}),e.next=7,r.data;case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(o.b)("scrumboardApp/board/copyBoard",function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,a.getState,n=f.a.merge({},t,{id:l.a.generateGUID(),name:"".concat(t.name," (Copied)"),uri:"".concat(t.uri,"-copied")}),r(Object(y.c)(n)),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),z=Object(o.b)("scrumboardApp/board/renameBoard",function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r,n,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.boardTitle,a.dispatch,a.getState,e.next=4,p.a.post("/api/scrumboard-app/board/rename",{boardId:r,boardTitle:n});case 4:return c=e.sent,e.next=7,c.data;case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),U=Object(o.d)({name:"scrumboardApp/boards",initialState:null,reducers:{resetBoard:function(e,t){return null},addLabel:function(e,t){e.labels=[].concat(Object(c.a)(e.labels),[t.payload])}},extraReducers:(r={},Object(n.a)(r,k.fulfilled,(function(e,t){return t.payload})),Object(n.a)(r,A.fulfilled,(function(e,t){e.lists=t.payload})),Object(n.a)(r,C.fulfilled,(function(e,t){e.lists=t.payload})),Object(n.a)(r,D.fulfilled,(function(e,t){e.lists=t.payload})),Object(n.a)(r,S.fulfilled,(function(e,t){return t.payload})),Object(n.a)(r,B.fulfilled,(function(e,t){var a=t.payload,r=a.listId,n=a.listTitle;e.lists=e.lists.map((function(e){return e.id===r&&(e.name=n),e}))})),Object(n.a)(r,E.fulfilled,(function(e,t){e.lists=f.a.reject(e.lists,{id:t.payload})})),Object(n.a)(r,N.fulfilled,(function(e,t){e.settings=t.payload})),Object(n.a)(r,T.fulfilled,(function(e,t){({})})),Object(n.a)(r,z.fulfilled,(function(e,t){e.name=t.payload})),Object(n.a)(r,I.e.fulfilled.type,(function(e,t){e.cards=e.cards.map((function(e){return e.id===t.payload.id?t.payload:e}))})),Object(n.a)(r,I.d.fulfilled,(function(e,t){var a=t.payload;e.cards=f.a.reject(e.cards,{id:a}),e.lists=e.lists.map((function(e){return f.a.set(e,"idCards",f.a.reject(e.idCards,(function(e){return e===a}))),e}))})),r)}),H=U.actions,G=H.resetBoard,J=H.addLabel;t.d=U.reducer},1375:function(e,t,a){"use strict";a.d(t,"e",(function(){return p})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return h}));var r=a(33),n=a(14),c=a.n(n),s=a(30),i=a(25),d=a(46),o=a.n(d),u=a(42),p=Object(i.b)("scrumboardApp/card/updateCard",function(){var e=Object(s.a)(c.a.mark((function e(t,a){var r,n,s,i,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.card,s=a.dispatch,e.next=4,o.a.post("/api/scrumboard-app/card/update",{boardId:r,card:n});case 4:return i=e.sent,e.next=7,i.data;case 7:return d=e.sent,s(Object(u.c)({message:"Card Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),e.abrupt("return",d);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),l=Object(i.b)("scrumboardApp/card/removeCard",function(){var e=Object(s.a)(c.a.mark((function e(t,a){var r,n,s,i,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.boardId,n=t.cardId,s=a.dispatch,e.next=4,o.a.post("/api/scrumboard-app/card/remove",{boardId:r,cardId:n});case 4:return i=e.sent,e.next=7,i.data;case 7:return d=e.sent,s(h()),e.abrupt("return",d);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),b=Object(i.d)({name:"scrumboardApp/card",initialState:{dialogOpen:!1,data:null},reducers:{openCardDialog:function(e,t){e.dialogOpen=!0,e.data=t.payload},closeCardDialog:function(e,t){e.dialogOpen=!1,e.data=null}},extraReducers:Object(r.a)({},p.fulfilled,(function(e,t){e.data=t.payload}))}),f=b.actions,m=f.openCardDialog,h=f.closeCardDialog;t.b=b.reducer},1398:function(e,t,a){"use strict";a.d(t,"b",(function(){return h})),a.d(t,"c",(function(){return v})),a.d(t,"e",(function(){return g})),a.d(t,"d",(function(){return w}));var r=a(33),n=a(14),c=a.n(n),s=a(30),i=a(25),d=a(46),o=a.n(d),u=a(185),p=a(82),l=a(31),b=[{id:"26022e4129ad3a5sc28b36cd",name:"High Priority",class:"bg-red text-white"},{id:"56027e4119ad3a5dc28b36cd",name:"Design",class:"bg-orange text-white"},{id:"5640635e19ad3a5dc21416b2",name:"App",class:"bg-blue text-white"},{id:"6540635g19ad3s5dc31412b2",name:"Feature",class:"bg-green text-white"}],f=[{id:"56027c1930450d8bf7b10758",name:"Alice Freeman",avatar:"assets/images/avatars/alice.jpg"},{id:"26027s1930450d8bf7b10828",name:"Danielle Obrien",avatar:"assets/images/avatars/danielle.jpg"},{id:"76027g1930450d8bf7b10958",name:"James Lewis",avatar:"assets/images/avatars/james.jpg"},{id:"36027j1930450d8bf7b10158",name:"John Doe",avatar:"assets/images/avatars/Velazquez.jpg"}],m=function e(t){Object(p.a)(this,e);var a=t||{};this.name=a.name||"Untitled Board",this.uri=a.uri||"untitled-board",this.id=a.id||l.a.generateGUID(),this.settings=a.settings||{color:"",subscribed:!0,cardCoverImages:!0},this.lists=[],this.cards=[],this.members=a.members||f,this.labels=a.labels||b},h=Object(i.b)("scrumboardApp/boards/getBoards",Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/scrumboard-app/boards");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),v=Object(i.b)("scrumboardApp/boards/newBoard",function(){var e=Object(s.a)(c.a.mark((function e(t,a){var r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,e.next=3,o.a.post("/api/scrumboard-app/board/new",{board:t||new m});case 3:return r=e.sent,e.next=6,r.data;case 6:return n=e.sent,u.a.push({pathname:"/apps/scrumboard/boards/".concat(n.id,"/").concat(n.handle)}),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),x=Object(i.c)({}),j=x.getSelectors((function(e){return e.scrumboardApp.boards})),g=j.selectAll,O=(j.selectById,Object(i.d)({name:"scrumboardApp/boards",initialState:x.getInitialState({}),reducers:{resetBoards:function(e,t){}},extraReducers:Object(r.a)({},h.fulfilled,x.setAll)})),w=O.actions.resetBoards;t.a=O.reducer},1456:function(e,t,a){"use strict";var r=a(85),n=a(1362),c=a(1398),s=a(1375),i=Object(r.c)({boards:c.a,board:n.d,card:s.b});t.a=i},2414:function(e,t,a){"use strict";a.r(t);var r=a(93),n=a(161),c=a(1238),s=a(1236),i=a(94),d=a(159),o=a(247),u=a(4),p=a(0),l=a.n(p),b=a(8),f=a(19),m=a(1456),h=a(1398),v=Object(s.a)((function(e){return{root:{background:e.palette.primary.main,color:e.palette.getContrastText(e.palette.primary.main)},board:{cursor:"pointer",transitionProperty:"box-shadow border-color",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,background:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.primary.dark)},newBoard:{borderWidth:2,borderStyle:"dashed",borderColor:Object(i.fade)(e.palette.getContrastText(e.palette.primary.main),.6),"&:hover":{borderColor:Object(i.fade)(e.palette.getContrastText(e.palette.primary.main),.8)}}}}));t.default=Object(o.a)("scrumboardApp",m.a)((function(e){var t=Object(b.c)(),a=Object(b.d)(h.e),s=v(e);return Object(p.useEffect)((function(){return t(Object(h.b)()),function(){t(Object(h.d)())}}),[t]),l.a.createElement("div",{className:Object(u.default)(s.root,"flex flex-grow flex-shrink-0 flex-col items-center")},l.a.createElement("div",{className:"flex flex-grow flex-shrink-0 flex-col items-center container px-16 md:px-24"},l.a.createElement(r.a,null,l.a.createElement(d.a,{className:"mt-44 sm:mt-88 sm:py-24 text-32 sm:text-40 font-300",color:"inherit"},"Scrumboard App")),l.a.createElement("div",null,l.a.createElement(n.a,{className:"flex flex-wrap w-full justify-center py-32 px-16",enter:{animation:"transition.slideUpBigIn",duration:300}},a.map((function(e){return l.a.createElement("div",{className:"w-224 h-224 p-16",key:e.id},l.a.createElement(f.a,{to:"/apps/scrumboard/boards/".concat(e.id,"/").concat(e.uri),className:Object(u.default)(s.board,"flex flex-col items-center justify-center w-full h-full rounded-8 py-24 shadow hover:shadow-lg"),role:"button"},l.a.createElement(c.a,{className:"text-56"},"assessment"),l.a.createElement(d.a,{className:"text-16 font-300 text-center pt-16 px-32",color:"inherit"},e.name)))})),l.a.createElement("div",{className:"w-224 h-224 p-16"},l.a.createElement("div",{className:Object(u.default)(s.board,s.newBoard,"flex flex-col items-center justify-center w-full h-full rounded-8 py-24 shadow hover:shadow-lg"),onClick:function(){return t(Object(h.c)())},onKeyDown:function(){return t(Object(h.c)())},role:"button",tabIndex:0},l.a.createElement(c.a,{className:"text-56"},"add_circle"),l.a.createElement(d.a,{className:"text-16 font-300 text-center pt-16 px-32",color:"inherit"},"Add new board")))))))}))}}]);