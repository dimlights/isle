(this.webpackJsonpisle2=this.webpackJsonpisle2||[]).push([[1],{39:function(e,n,t){e.exports=t(68)},44:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(27),o=t.n(i),l=(t(44),t(7)),c=t(3),s=t(1),m=t(2);function u(){var e=Object(s.a)(["\n    font-size: 1.5rem;\n    color: rgb(78, 78, 78, 0.6);\n    padding: 2rem;\n    .content:hover {\n        color: rgb(178, 178, 178, 0.6);\n    }\n    .contact-list {\n        padding: 2rem 0;\n        display: flex;\n        flex-flow: column;\n        &:hover {\n            color: rgb(178, 178, 178, 0.6);\n        }\n        a > span {\n            font-weight: 700;\n            padding: 0 0.25em 0 0;\n        }\n        a:hover {\n            color: white;\n        }\n        [class*='contact-'] {\n            padding: 0.5rem 0;\n        }\n    }\n"]);return u=function(){return e},e}var h=function(){return r.a.createElement(p,null,r.a.createElement("div",{className:"content"},"--Details not available now--"),r.a.createElement("div",{className:"contact-list"},r.a.createElement("div",{className:"contact-title"},"You may contact me with"),r.a.createElement("br",null),r.a.createElement("a",{href:"tencent://message/?uin=273964183",className:"contact-chat"},r.a.createElement("span",{className:"iconfont icon-chat"})," 273964183"),r.a.createElement("a",{href:"https://github.com/dimlights",className:"contact-github "},r.a.createElement("span",{className:"iconfont icon-github"})," https://github.com/dimlights"),r.a.createElement("a",{href:"mail:qq17402@sina.com",className:"contact-mail "},r.a.createElement("span",{className:"iconfont icon-mail"})," qq17402@sina.com")))},p=m.a.div(u()),d=t(10);function f(){var e=Object(s.a)(["\n    padding: 0.5rem 0;\n    font-size: 45px;\n    cursor: pointer;\n    font-weight: bold;\n    text-decoration: none;\n    color: grey;\n    ","\n\n    &:hover {\n        color: #2dc6ad;\n        filter: hue-rotate();\n        animation: hue-trans 7s infinite;\n    }\n"]);return f=function(){return e},e}var g=m.a.div(f(),(function(e){return e.theme.active?"color: #2dc6ad;filter: hue-rotate();animation: hue-trans 7s infinite;":""})),b=function(e){var n=Object(a.useState)(!1),t=Object(d.a)(n,2),i=t[0],o=t[1],l=Object(c.f)();return r.a.createElement(g,{onClick:function(){i?l.push("/"):l.push(e.to),o((function(e){return!e}))},theme:{active:i}},e.children)},v=t(70),E=t(16),w=t.n(E),x=t(32),y=t(33),k=t(34),j=t(35),O=t.n(j),N=function(){function e(){Object(y.a)(this,e)}return Object(k.a)(e,null,[{key:"getListData",value:function(){var e=Object(x.a)(w.a.mark((function e(n,t){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t?"".concat(n,"/").concat(t):"".concat(n),e.next=3,O.a.get("".concat(this.serverUrl,"/").concat(a));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()}]),e}();N.serverUrl="https://caperal.cn:3141";var P=r.a.lazy((function(){return Promise.all([t.e(3),t.e(0)]).then(t.bind(null,319))})),z=function(e,n){var t=Object.keys(e[0]).map((function(e){return{name:e,xValue:[],yValue:[]}}));return t.forEach((function(t){e.forEach((function(e){if(Object.keys(e).length){var a=e[t.name],r=a.value,i=a.timestamp;t.xValue.push(Object(v.a)(parseInt(i,10),"HH@dd/MM/yyyy")),t.yValue.push(n?n(r):function(e){return parseInt(e.match(/(\d)+/g)[0],10)}(r))}}))})),t},I=function(e){var n=e.api,t=e.children,i=e.extractMethod,o=Object(a.useState)([]),l=Object(d.a)(o,2),c=l[0],s=l[1],m=Object(a.useState)([]),u=Object(d.a)(m,2),h=u[0],p=u[1];return Object(a.useEffect)((function(){var e=function(){return N.getListData(n).then((function(e){var n=e.data.map((function(e){return e.record}));s(n)}))};e();var t=setInterval(e,36e5);return function(){return clearInterval(t)}}),[n]),Object(a.useEffect)((function(){if(c.length){var e=z(c,i);e&&p(e)}}),[c,i]),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},t,h.map((function(e,n){return r.a.createElement(P,{data:e,key:n})})))},U=function(){return r.a.createElement(I,{api:"list/estate"})},C=function(){return r.a.createElement(I,{api:"list/price/youlinghu",extractMethod:function(e){return parseInt(e.match(/(\d+)/g)[0],10)}})};function M(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 0 2rem;\n"]);return M=function(){return e},e}var _=function(){return r.a.createElement("div",null,r.a.createElement(H,null,r.a.createElement(b,{to:"/graphs/estate"},"Real Estate"),r.a.createElement(b,{to:"/graphs/price"},"Price"),r.a.createElement(b,{to:"/graphs/marketing"},"Marketing")),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/graphs/estate"},r.a.createElement(U,null)),r.a.createElement(c.a,{path:"/graphs/price"},r.a.createElement(C,null))))},H=m.a.div(M());function S(){var e=Object(s.a)(["\n    .work-list-item {\n        position: relative;\n        overflow: hidden;\n    }\n\n    .work-list-image,\n    .work-list-text {\n        padding: 4rem 0 0 2rem;\n        box-sizing: border-box;\n        width: 32rem;\n\n        @media screen and (max-width: 768px) {\n            width: 80%;\n        }\n    }\n\n    .work-list-text {\n        top: 0;\n        margin: 4rem 0 0 2rem;\n        opacity: 0;\n        height: 100%;\n        position: absolute;\n        white-space: pre-wrap;\n    }\n\n    .work-list-text:hover,\n    .work-list-image:hover ~ .work-list-text {\n        opacity: 1;\n        background-color: rgba(17, 17, 17, 0.6);\n    }\n"]);return S=function(){return e},e}var T=[{title:"coon",imageUrl:"https://cdn.pixabay.com/photo/2017/01/15/19/04/red-panda-1982445__340.jpg",text:"the coon:\n\nOne of the coons just ran out of your mind"},{title:"the woods",imageUrl:"https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519__340.jpg",text:"the woods:\n\nQuite miss about it's peaceful sound"},{title:"the fall",imageUrl:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",text:"the fall:\n\nEverything falls in the end, right?"}],q=function(){return r.a.createElement(A,null,T.map((function(e,n){return r.a.createElement("div",{className:"work-list-item",key:n},r.a.createElement("img",{src:e.imageUrl,className:"work-list-image",alt:""}),r.a.createElement("div",{className:"work-list-text"},e.text))})))},A=m.a.div(S());function B(){var e=Object(s.a)(['\n.header-links > * {\n        margin-left: 1rem;\n        letter-spacing: 0.1rem;\n      }\n\n      .header-links > *:hover {\n        color: white;\n      }\n\n      .header-ham-button {\n        opacity: 0;\n        visibility: hidden;\n        position: absolute;\n        top: 50%;\n        right: 0;\n        transform: translateY(-50%);\n        display: block;\n        width: 1.5625rem;\n        height: 1.5625rem;\n        border: 0.08rem solid rgb(102, 102, 102);\n        border-radius: 0.175rem;\n        background-color: transparent;\n        cursor: pointer;\n\n        &:after {\n          content: "";\n          position: absolute;\n          left: 50%;\n          transform: translateX(-50%);\n          width: 60%;\n          height: 100%;\n          background: repeating-linear-gradient(\n            transparent 0,\n            transparent 20%,\n            rgb(142, 142, 142) 22%,\n            rgb(142, 142, 142) 28%,\n            transparent 30%,\n            transparent 45%,\n            rgb(142, 142, 142) 47%,\n            rgb(142, 142, 142) 53%,\n            transparent 55%,\n            transparent 70%,\n            rgb(142, 142, 142) 72%,\n            rgb(142, 142, 142) 78%,\n            transparent 80%,\n            transparent 100%\n          );\n        }\n      }\n\n      @media screen and (max-width: 768px) {\n        .header-links {\n          display: flex;\n          position: absolute;\n          top: calc(2rem + 1.5625rem / 2);\n          right: 0%;\n          line-height: 3.15;\n          text-align: right;\n          flex-flow: column;\n          justify-content: flex-start;\n        }\n\n        .header-links {\n          opacity: 0;\n          visibility: hidden;\n        }\n\n        .header-ham-button {\n          opacity: 1;\n          visibility: visible;\n        }\n\n        .header-ham-button:hover ~ .header-links,\n        .header-links:hover {\n          opacity: 1;\n          visibility: visible;\n          border-top: none;\n          border-right: none;\n          border-radius: 2px;\n        }\n      }\n    }\n']);return B=function(){return e},e}var L=function(){return r.a.createElement(R,null,r.a.createElement("i",{className:"header-ham-button",onClick:function(){},"aria-label":"menu"}),r.a.createElement("div",{className:"header-links"},r.a.createElement(l.b,{to:"/work",className:"header-link"},"WORK"),r.a.createElement(l.b,{to:"/thoughts",className:"header-link"},"THOUGHTS"),r.a.createElement(l.b,{to:"/about",className:"header-link"},"ABOUT")))},R=m.a.div(B());function V(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 0 2rem;\n"]);return V=function(){return e},e}var W=[{urlParam:"graphs",name:"Graphs"},{urlParam:"thoughts",name:"Thoughts"},{urlParam:"about",name:"About"}],D=function(){var e=Object(c.g)();return r.a.createElement(G,null,W.map((function(n){return function(n){var t=new RegExp("^/(".concat(n,")|(/)$"),"g");return e.pathname.match(t)}(n.urlParam)&&r.a.createElement(b,{key:n.name,to:"/".concat(n.urlParam)},n.name)})))},G=m.a.div(V());function J(){var e=Object(s.a)(["\n  position: relative;\n  color: white;\n  min-height: 120vh;\n\n  .title {\n    padding: 6rem 2rem 4rem;\n\n    & > h1 {\n      font-size: 50px;\n      font-weight: 600;\n      line-height: 1.25;\n      text-transform: uppercase;\n      letter-spacing: 0.1rem;\n    }\n\n    & > p {\n      padding-top: 0.5rem;\n      font-size: 15px;\n      line-height: 15px;\n      margin-top: 10px;\n    }\n  }\n  .main-view {\n    padding: 0 2rem;\n    min-height: calc(100vh - 400px);\n  }\n  .header {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    height: 4rem;\n    line-height: 4rem;\n    padding: 0 2rem;\n    text-transform: uppercase;\n    box-sizing: border-box;\n    color: rgb(102, 102, 102);\n\n    .header-left {\n      letter-spacing: 0.2rem;\n\n      &:hover {\n        color: white;\n      }\n    }\n\n    .header-right {\n      display: flex;\n      flex-flow: row;\n      position: relative;\n      justify-content: center;\n    }\n  }\n"]);return J=function(){return e},e}var Y=m.a.div(J()),$=function(){return r.a.createElement(Y,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-left"},"CAPERAL"),r.a.createElement("div",{className:"header-right"},r.a.createElement(L,null))),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Be a man,"),r.a.createElement("h1",null,"Half blind"),r.a.createElement("p",null,"Mind your own, leave out all the rest")),r.a.createElement(D,null),r.a.createElement("div",{className:"main-view"},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/graphs",component:_}),r.a.createElement(c.a,{path:"/thoughts",component:q}),r.a.createElement(c.a,{path:"/about",component:h})))))};function F(){var e=Object(s.a)(["\n    padding: 1rem 2rem;\n    color: white;\n    font-size: 12px;\n    &:hover {\n        color: goldenrod;\n    }\n"]);return F=function(){return e},e}function K(){var e=Object(s.a)(["\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    padding: 1rem 2rem;\n    margin-top: 2rem;\n    font-size: 14px;\n    color: white;\n    & > p:hover {\n        color: goldenrod;\n    }\n"]);return K=function(){return e},e}var Q=function(){return r.a.createElement(X,null,r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2728"),"This site is under developing, see you soon\xa0",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2728")),r.a.createElement("br",null),r.a.createElement("p",null,"Written by Caper with passion and\xa0",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f")),r.a.createElement(Z,{href:"http://www.beian.miit.gov.cn/","aria-label":"link and check for this site"},"IPC\u8bc1: \u6d59ICP\u590719047176\u53f7"))},X=m.a.div(K()),Z=m.a.a(F()),ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(Q,null))};t(67),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,2,4]]]);
//# sourceMappingURL=main.5922042d.chunk.js.map