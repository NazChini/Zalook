(function(){"use strict";var e={8313:function(e,t,r){var n=r(6198),a=(r(6992),r(8674),r(9601),r(7727),r(8975),r(8935)),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/profile"}},[e._v("Profile")]),r("router-link",{attrs:{to:"/login"}},[e._v("Login")]),r("router-link",{attrs:{to:"/register"}},[e._v("Register")]),r("a",{attrs:{href:"#"},on:{click:e.doLogout}},[e._v("Logout")])],1),r("router-view")],1)},i=[],s=r(4367),u=r(4665),c={name:"App",methods:(0,s.Z)((0,s.Z)({},(0,u.nv)(["logout"])),{},{doLogout:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.logout();case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}})},l=c,m=r(1001),f=(0,m.Z)(l,o,i,!1,null,null,null),p=f.exports,d=r(563);(0,d.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r(1539),r(8783),r(3948);var v=r(2809),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("zalook "),e.user?r("span",[e._v(e._s(e.user.firstName))]):e._e()]),r("p",[e._v("The time is: "+e._s(e.time))]),r("h2",[e._v("Users")]),e._l(e.users,(function(t){return r("div",[r("router-link",{attrs:{to:"/users/"+t._id}},[e._v(e._s(t.firstName))])],1)})),e.liveStreams.length?r("div",[r("h2",[e._v("Live streams")]),e._l(e.liveStreams,(function(t){return r("div",[r("p",[e._v(e._s(t))]),r("button",{on:{click:function(r){return e.joinStream(t)}}},[e._v("Join stream")])])}))],2):e._e(),r("button",{on:{click:e.goLive}},[e._v("Go live")]),e.currentLiveStream?r("div",[r("h3",[e._v("Live stream")]),r("div",{staticClass:"messages"},e._l(e.liveStreamMessages,(function(t){return r("div",{staticClass:"message"},[r("p",[r("span",[e._v(e._s(t.author)+": ")]),r("span",[e._v(e._s(t.body))])])])})),0),r("form",{on:{submit:e.sendMessage}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),r("input",{attrs:{type:"submit",value:"Send message"}})])]):e._e()],2)},h=[],w={name:"Profile",data:function(){return{users:[],time:new Date,message:""}},created:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchUsers();case 2:e.users=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:(0,s.Z)((0,s.Z)({},(0,u.nv)(["fetchUsers","goLive","sendMessageToLiveStream","joinStream"])),{},{sendMessage:function(e){e.preventDefault(),this.sendMessageToLiveStream(this.message),this.message=""}}),computed:(0,s.Z)({},(0,u.rn)(["currentLiveStream","liveStreams","user","liveStreamMessages"]))},_=w,b=(0,m.Z)(_,g,h,!1,null,null,null),E=b.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("form",{on:{submit:e.submitLogin}},[r("h1",[e._v("Log in to your account")]),r("label",{attrs:{for:"email"}},[e._v("Email: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",placeholder:"Your email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("label",{attrs:{for:"password"}},[e._v("Password: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",placeholder:"Your password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("input",{attrs:{type:"submit",value:"Log in"}})]),e.backendError?r("div",[e._v(e._s(e.backendError))]):e._e(),r("div",[e._v("Don't have an account yet? "),r("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)])},k=[],y={name:"login",data:function(){return{email:"",password:"",backendError:null}},methods:(0,s.Z)((0,s.Z)({},(0,u.nv)(["login"])),{},{submitLogin:function(e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,t.login({email:t.email,password:t.password});case 4:t.$router.push("/profile"),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](1),t.backendError=r.t0.response.data.message;case 10:case"end":return r.stop()}}),r,null,[[1,7]])})))()}})},R=y,x=(0,m.Z)(R,S,k,!1,null,"408cd026",null),Z=x.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[r("form",{on:{submit:e.submitRegister}},[r("h1",[e._v("Create a new account")]),r("label",{attrs:{for:"firstName"}},[e._v("FirstName: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{id:"firstName",type:"text",placeholder:"Your first name",required:""},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}})]),r("label",{attrs:{for:"lastName"}},[e._v("LastName: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{id:"lastName",type:"text",placeholder:"Your last name",required:""},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}})]),r("label",{attrs:{for:"email"}},[e._v("Email: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",placeholder:"Your email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("label",{attrs:{for:"password"}},[e._v("Password: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",placeholder:"Your password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("input",{attrs:{type:"submit",value:"Register"}})]),e.backendError?r("div",[e._v(e._s(e.backendError))]):e._e(),r("div",[e._v("Already have an account? "),r("router-link",{attrs:{to:"/login"}},[e._v("Log in")])],1)])},N=[],T={name:"register",data:function(){return{firstName:"",lastName:"",email:"",password:"",backendError:null}},methods:(0,s.Z)((0,s.Z)({},(0,u.nv)(["register"])),{},{submitRegister:function(e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,t.register({firstName:t.firstName,lastName:t.lastName,email:t.email,password:t.password});case 4:t.$router.push("/login"),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](1),t.backendError=r.t0.response.data.message;case 10:case"end":return r.stop()}}),r,null,[[1,7]])})))()}})},A=T,M=(0,m.Z)(A,L,N,!1,null,"7bfeae16",null),D=M.exports;function P(e){return new v.Z({mode:"history",base:"/",routes:[{path:"/",name:"homepage",component:E},{path:"/users/:id",name:"UserDetail",component:function(){return r.e(443).then(r.bind(r,6835))}},{path:"/register",name:"register",component:D,beforeEnter:function(t,r,n){return e.state.user?n("/profile"):n()}},{path:"/login",name:"login",component:Z,beforeEnter:function(t,r,n){return e.state.user?n("/profile"):n()}},{path:"/profile",name:"profile",component:E,beforeEnter:function(t,r,n){return e.state.user?n():n("/login")}}]})}a.Z.use(v.Z);var C,O=r(3796),j=r(6166),I=r.n(j),U=r(4041);a.Z.use(u.ZP);var V=(0,U.ZP)();V.on("connect",(function(){console.log("we received message from the websocket server!")}));var q={SET_USER:"set user",SET_LIVE_STREAM:"set live stream",ADD_LIVE_STREAM:"add live stream",ADD_MESSAGE_TO_LIVE_STREAM:"add message to live stream"},$=new u.ZP.Store({state:{user:null,currentLiveStream:null,liveStreams:[],liveStreamMessages:[]},getters:{},mutations:(C={},(0,O.Z)(C,q.SET_USER,(function(e,t){e.user=t})),(0,O.Z)(C,q.SET_LIVE_STREAM,(function(e,t){e.currentLiveStream=t})),(0,O.Z)(C,q.ADD_LIVE_STREAM,(function(e,t){e.liveStreams.push(t)})),(0,O.Z)(C,q.ADD_MESSAGE_TO_LIVE_STREAM,(function(e,t){e.liveStreamMessages.push(t)})),C),actions:{fetchUser:function(e,t){return(0,n.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I().get("/api/users/".concat(t,"/json"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))()},fetchUsers:function(){return(0,n.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I().get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},fetchSession:function(e){return(0,n.Z)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,I().get("/api/account/session");case 3:n=t.sent,r(q.SET_USER,n.data||null);case 5:case"end":return t.stop()}}),t)})))()},login:function(e,t){return(0,n.Z)(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,I().post("/api/account/session",t);case 4:a=r.sent,n(q.SET_USER,a.data),r.next=11;break;case 8:throw r.prev=8,r.t0=r["catch"](1),r.t0;case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},register:function(e,t){return(0,n.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",I().post("/api/account",t));case 1:case"end":return e.stop()}}),e)})))()},logout:function(e){return(0,n.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,I()["delete"]("/api/account/session");case 3:r(q.SET_USER,null);case 4:case"end":return t.stop()}}),t)})))()},goLive:function(e){return(0,n.Z)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.state,n=e.commit,V.emit("go live",r.user._id,(function(e){n(q.SET_LIVE_STREAM,r.user._id)}));case 2:case"end":return t.stop()}}),t)})))()},addLiveStream:function(e,t){return(0,n.Z)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=e.commit,n(q.ADD_LIVE_STREAM,t);case 2:case"end":return r.stop()}}),r)})))()},sendMessageToLiveStream:function(e,t){return(0,n.Z)(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=e.state,a=e.commit,o={body:t,author:n.user.firstName},a(q.ADD_MESSAGE_TO_LIVE_STREAM,o),V.emit("new message",n.currentLiveStream,o);case 4:case"end":return r.stop()}}),r)})))()},joinStream:function(e,t){return(0,n.Z)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=e.commit,V.emit("join stream",t),n(q.SET_LIVE_STREAM,t);case 3:case"end":return r.stop()}}),r)})))()}},modules:{}});function F(){return Y.apply(this,arguments)}function Y(){return Y=(0,n.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.dispatch("fetchSession");case 2:return e.abrupt("return",$);case 3:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}function G(){return B.apply(this,arguments)}function B(){return B=(0,n.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,new a.Z({router:P(t),store:t,render:function(e){return e(p)}}).$mount("#app");case 4:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}V.on("new live stream",(function(e){$.dispatch("addLiveStream",e)})),V.on("new live stream message",(function(e){$.commit(q.ADD_MESSAGE_TO_LIVE_STREAM,e)})),a.Z.config.productionTip=!1,G()}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n](o,o.exports,r),o.loaded=!0,o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],o=e[l][2];for(var s=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about-legacy.3f0aa193.js"}}(),function(){r.miniCssF=function(e){return"css/about.5d1135bc.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";r.l=function(n,a,o,i){if(e[n])e[n].push(a);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var m=c[l];if(m.getAttribute("src")==n||m.getAttribute("data-webpack")==t+o){s=m;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[a];var f=function(t,r){s.onerror=s.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode.removeChild(a),n(u)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){a=i[n],o=a.getAttribute("data-href");if(o===e||o===t)return a}},n=function(n){return new Promise((function(a,o){var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return a();e(n,s,a,o)}))},a={143:0};r.f.miniCss=function(e,t){var r={443:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,n){var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(r,n){a=e[t]=[r,n]}));n.push(a[2]=o);var i=r.p+r.u(t),s=new Error,u=function(n){if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};r.l(i,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,i=n[0],s=n[1],u=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(u)var l=u(r)}for(t&&t(n);c<i.length;c++)o=i[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(l)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(8313)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.e2733284.js.map