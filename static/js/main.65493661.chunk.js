(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{111:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},116:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(32),o=n.n(c),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=n(10),l=n(17),u=n(14),b="API_BOOKS_REQUEST",d="API_BOOKS_FAILED",j="API_BOOKS_SUCCEDED",h="ADD_QUERY",f={isLoading:!1,errMess:null,query:"",books:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1,errMess:null,books:t.payload});case b:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0,errMess:null,books:[]});case d:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},x={isLoading:!1,errMess:null,query:"",books:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},e),{},{query:t.payload});default:return e}},p=n(84),v=n(21),g=n.n(v),k=n(15),_=function(e){return{type:h,payload:{query:e}}},y=function(e){return{type:j,payload:e}},w=function(e){return{type:d,payload:e}},N=function(){return{type:b}},L=n(83),q=n.n(L),M=function(e){return q()({method:"get",url:"".concat("https://openlibrary.org","/search.json?title=").concat(e)})},S=function(e){return e.query.query},E=g.a.mark(C),A=g.a.mark(P),W=g.a.mark(U);function C(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.f)(h,P);case 2:case"end":return e.stop()}}),E)}function P(){var e,t;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(k.e)(S);case 2:return e=n.sent,n.next=5,Object(k.c)(1e3);case 5:return n.next=7,Object(k.d)(N());case 7:return n.prev=7,n.next=10,Object(k.b)(M,e.query);case 10:if(0!==(t=(t=n.sent).data.docs).length){n.next=17;break}return n.next=15,Object(k.d)(w("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"));case 15:n.next=19;break;case 17:return n.next=19,Object(k.d)(y(t));case 19:n.next=25;break;case 21:return n.prev=21,n.t0=n.catch(7),n.next=25,Object(k.d)(w(n.t0.message));case 25:case"end":return n.stop()}}),A,null,[[7,21]])}function U(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([C()]);case 2:case"end":return e.stop()}}),W)}var B=Object(p.a)(),D=Object(l.createStore)(Object(l.combineReducers)({books:O,query:m}),Object(l.applyMiddleware)(B));B.run(U);var I=n(27),R=n(5),F=n(45),K=(n(111),n(2));var T=Object(i.connect)((function(e){return{books:e.books.books,isLoading:e.books.isLoading,errMess:e.books.errMess}}))((function(e){var t=e.isLoading,n=e.errMess,c=e.books,o=Object(r.useState)(1),s=Object(F.a)(o,2),a=s[0],i=s[1],l=c.slice(0,20*a),u=Math.floor(c.length/20);return Object(K.jsxs)("div",{className:"main",children:[Object(K.jsx)("h1",{className:"main__heading",children:"\u041f\u043e\u0438\u0441\u043a \u043a\u043d\u0438\u0433"}),Object(K.jsx)(z,{}),t&&Object(K.jsx)(G,{text:!0}),n&&Object(K.jsx)(H,{text:n}),c&&0!==c.length&&!n&&Object(K.jsx)(Y,{books:l}),a<u&&!n&&Object(K.jsx)("button",{className:"main__more-btn",onClick:function(){i((function(e){return e+1}))},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"})]})})),J=(n(113),function(){return Object(K.jsx)("div",{className:"icon"})});n(114);var Q=function(e){var t=e.book,n="http://covers.openlibrary.org/b/id/".concat(t.cover_i,"-M.jpg");return Object(K.jsx)(I.b,{className:"card",to:"/book/".concat(t.key.slice(7)),children:Object(K.jsxs)("div",{className:"card__group",children:[t.cover_i?Object(K.jsx)("img",{className:"card__image",src:n,alt:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430 \u043a\u043d\u0438\u0433\u0438"}):Object(K.jsx)(J,{}),Object(K.jsx)("h2",{className:"card__title",children:t.title})]})})},Y=(n(116),function(e){var t=e.books;return Object(K.jsx)("div",{className:"bookslist",children:Object(K.jsx)("ul",{className:"bookslist__list",children:t&&t.map((function(e){return Object(K.jsx)("li",{className:"bookslist__item",children:Object(K.jsx)(Q,{book:e})},e.key)}))})})}),$=n(46);n(152);var z=Object(i.connect)(null,null)((function(e){var t,n=e.dispatch;return Object(K.jsx)("section",{className:"search",children:Object(K.jsxs)($.LocalForm,{onChange:function(e){return function(e){n(_(e.query))}(e)},className:"search__form",children:[Object(K.jsx)($.Control.text,{className:"search__input",model:".query",name:"query",id:"query",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",validators:{required:function(e){return e&&e.length},minLength:(t=1,function(e){return e&&e.length>=t}),maxLength:function(e){return function(t){return!t||t.length<=e}}(20)}}),Object(K.jsx)($.Errors,{className:"search__error",model:".query",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than 1 character",maxLength:"Must be 20 characters or less"}})]})})}));n(153);var G=function(e){var t=e.text;return Object(K.jsxs)("div",{className:"preloader",children:[Object(K.jsx)("i",{className:"circle-preloader"}),t&&Object(K.jsx)("p",{className:"preloader__text",children:"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043a\u043d\u0438\u0433..."})]})};n(154);var H=function(e){var t=e.text;return Object(K.jsx)("div",{className:"error",children:Object(K.jsx)("div",{children:t})})};n(155);var V=Object(i.connect)((function(e){return{books:e.books.books}}))((function(e){var t=e.books,n=Object(R.g)().id,c=t.find((function(e){return e.key==="/works/".concat(n)})),o="http://covers.openlibrary.org/b/id/".concat(c.cover_i,"-L.jpg"),s=Object(r.useState)(!1),a=Object(F.a)(s,2),i=a[0],l=a[1];return Object(K.jsxs)("div",{className:"book",children:[Object(K.jsxs)("div",{children:[!i&&c.cover_i&&Object(K.jsx)(G,{text:!1}),c.cover_i?Object(K.jsx)("img",{className:"book__image",onLoad:function(){l(!0)},src:o,alt:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430 \u043a\u043d\u0438\u0433\u0438"}):Object(K.jsx)(J,{})]}),Object(K.jsxs)("div",{className:"book__text-group",children:[Object(K.jsx)(I.b,{className:"book__link",to:"/home",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"}),Object(K.jsx)("p",{className:"book__subtitle",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438"}),Object(K.jsx)("h2",{className:"book__title",children:c.title}),Object(K.jsx)("p",{className:"book__subtitle",children:"\u0410\u0432\u0442\u043e\u0440\u044b \u043a\u043d\u0438\u0433\u0438"}),c.author_name&&Object(K.jsx)("ul",{className:"book__list",children:c.author_name.map((function(e,t){return Object(K.jsx)("li",{className:"book__list-item",children:Object(K.jsx)("p",{className:"book__text",children:e})},t)}))}),Object(K.jsx)("p",{className:"book__subtitle",children:"\u0413\u043e\u0434 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"}),Object(K.jsx)("p",{className:"book__text",children:c.first_publish_year})]})]})}));n(156);function X(){return window.onerror((function(e){return console.log(e)})),Object(K.jsx)("div",{className:"page",children:Object(K.jsx)(i.Provider,{store:D,children:Object(K.jsx)(I.a,{children:Object(K.jsxs)(R.d,{children:[Object(K.jsx)(R.b,{exact:!0,path:"/home",component:T}),Object(K.jsx)(R.b,{path:"/book/:id",component:V}),Object(K.jsx)(R.a,{to:"/home"})]})})})})}var Z=document.getElementById("root");o.a.render(Object(K.jsx)(r.Fragment,{children:Object(K.jsx)(X,{})}),Z),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):a(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):a(t,e)}))}}()}},[[157,1,2]]]);
//# sourceMappingURL=main.65493661.chunk.js.map