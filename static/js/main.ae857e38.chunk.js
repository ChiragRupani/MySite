(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[3],{54:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},77:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(29),c=n.n(a),i=n(34),r=(n(49),n(1)),o=n.n(r),s=n(19),l=n.n(s),h=n(10),u=n(11),d=n(13),m=n(12),v=(n(54),n(55),n(3)),j=r.lazy((function(){return n.e(0).then(n.bind(null,96))})),b=r.lazy((function(){return n.e(1).then(n.bind(null,98))})),f=r.lazy((function(){return n.e(2).then(n.bind(null,97))})),O=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(h.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("main",{className:"main scroller",id:"main","data-offset":"0",children:Object(v.jsxs)(r.Suspense,{fallback:Object(v.jsx)("div",{children:"Loading..."}),children:[Object(v.jsx)(j,{}),Object(v.jsx)(b,{}),Object(v.jsx)(f,{})]})})}}]),n}(r.Component),g=(n(57),n(17)),p=n(87),x=n(94),k=n(95),w=n(88);function y(e){e?(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light")):(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark"))}var T=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(h.a)(this,n),(a=t.call(this,e)).themeKey="selectedTheme",a.setSelectedTheme=function(e){a.setState({currentTheme:e?"Dark Theme":"Light Theme"}),y(e)},a.toggleThemeMenuOpen=a.toggleThemeMenuOpen.bind(Object(g.a)(a));var c=localStorage.getItem(a.themeKey);return null!==c?(y("Dark Theme"===c),a.state={currentTheme:c,isThemeOpen:!1}):(a.state={currentTheme:"Dark Theme",isThemeOpen:!1},y(!0),localStorage.setItem(a.themeKey,"Dark Theme")),a}return Object(u.a)(n,[{key:"toggleThemeMenuOpen",value:function(){this.setState({isThemeOpen:!this.state.isThemeOpen})}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{className:"dropup",children:Object(v.jsxs)(p.a,{isOpen:this.state.isThemeOpen,toggle:this.toggleThemeMenuOpen,children:[Object(v.jsxs)(x.a,{caret:!0,children:[Object(v.jsxs)("svg",{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-gear mr-2 mb-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(v.jsx)("path",{fillRule:"evenodd",d:"M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"}),Object(v.jsx)("path",{fillRule:"evenodd",d:"M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"})]}),Object(v.jsx)("span",{className:"mr-1",children:"Theme"})]}),Object(v.jsxs)(k.a,{children:[Object(v.jsx)(w.a,{onClick:function(t){return e.setSelectedTheme(!0)},active:"Dark Theme"===this.state.currentTheme,children:Object(v.jsxs)("div",{className:"themeItem",children:[Object(v.jsx)("svg",{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-moon mr-2 mb-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"})}),"Dark Theme"]})}),Object(v.jsx)(w.a,{onClick:function(t){return e.setSelectedTheme(!1)},active:"Light Theme"===this.state.currentTheme,children:Object(v.jsxs)("div",{className:"themeItem",children:[Object(v.jsx)("svg",{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-brightness-high mr-2 mb-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"})}),"Light Theme"]})})]})]})})}}]),n}(r.Component),N=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("footer",{role:"contentinfo",className:"footer",children:Object(v.jsxs)("div",{className:"centered",children:[Object(v.jsx)(T,{}),Object(v.jsxs)("div",{children:["\xa9 Chirag Rupani ",(new Date).getFullYear()]})]})})}}]),n}(r.Component),S=n(89),M=n(90),C=n(91),z=n(92),L=n(93),A=(n(77),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).observer=null,a.state={active:"",isNavMenuOpened:!1},a.onSectionClick=a.onSectionClick.bind(Object(g.a)(a)),a.toggle=a.toggle.bind(Object(g.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(window.IntersectionObserver){this.observer=new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&e.setState({active:t.target.id})}))}),{root:null,rootMargin:"0px",threshold:.2}),document.querySelectorAll("#main > section").forEach((function(t){var n;return null===(n=e.observer)||void 0===n?void 0:n.observe(t)}))}}},{key:"componentWillUnmount",value:function(){this.observer&&this.observer.disconnect()}},{key:"onSectionClick",value:function(e){var t,n,a=this.getSectionName(e.target);window.scrollTo({top:(null!==(t=null===(n=document.getElementById(a))||void 0===n?void 0:n.offsetTop)&&void 0!==t?t:0)-55,behavior:"smooth"})}},{key:"getSectionName",value:function(e){var t=e.href,n=t.lastIndexOf("#");return t.substr(n>=0?n+1:0)}},{key:"toggle",value:function(){this.setState({isNavMenuOpened:!this.state.isNavMenuOpened})}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(S.a,{dark:!0,expand:"md",className:"navbar-custom fixed-top d-flex text-center",id:"projectNavbar",children:[Object(v.jsx)(M.a,{href:"#Home","aria-label":"Home",children:Object(v.jsx)("img",{src:"favicon-32x32.png",alt:"",height:32,width:32})}),Object(v.jsx)(C.a,{onClick:this.toggle,"data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false"}),Object(v.jsx)(z.a,{id:"navbarNavAltMarkup",navbar:!0,isOpen:this.state.isNavMenuOpened,children:Object(v.jsxs)(L.a,{className:"ml-auto text-right pr-3",navbar:!0,tag:"div",children:[Object(v.jsx)("a",{className:"nav-item nav-link ".concat("Home"===this.state.active?"active":""," pageLink"),href:"#Home",onClick:this.onSectionClick,children:"About Me"}),Object(v.jsx)("a",{className:"nav-item nav-link ".concat("Blogs"===this.state.active?"active":""," pageLink"),href:"#Blogs",onClick:this.onSectionClick,children:"Blogs"}),Object(v.jsx)("a",{className:"nav-item nav-link ".concat("Projects"===this.state.active?"active":""," pageLink"),href:"#Projects",onClick:this.onSectionClick,children:"Projects"})]})})]})})}}]),n}(r.Component)),E=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(h.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(A,{}),Object(v.jsx)(O,{}),Object(v.jsx)(N,{})]})}}]),n}(o.a.Component),I=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(E,{})})}}]),n}(o.a.Component),B=(n(85),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/MySite",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/MySite","/service-worker.js");B?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):W(t,e)}))}}({onUpdate:function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.waiting){e.next=4;break}return e.next=3,t.unregister();case 3:window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})}},[[86,4,5]]]);