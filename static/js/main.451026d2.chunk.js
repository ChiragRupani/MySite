(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[3],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n.n(a),i=n(13),o=(n(19),n(1)),r=n.n(o),s=n(9),l=n.n(s),u=n(4),h=n(5),d=n(7),m=n(6),v=(n(24),n(25),n(3)),j=o.lazy((function(){return n.e(0).then(n.bind(null,39))})),b=o.lazy((function(){return n.e(1).then(n.bind(null,41))})),f=o.lazy((function(){return n.e(2).then(n.bind(null,40))})),O=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(h.a)(n,[{key:"render",value:function(){return Object(v.jsx)("main",{className:"main scroller",id:"main","data-offset":"0",children:Object(v.jsxs)(o.Suspense,{fallback:Object(v.jsx)("div",{children:"Loading..."}),children:[Object(v.jsx)(j,{}),Object(v.jsx)(b,{}),Object(v.jsx)(f,{})]})})}}]),n}(o.Component),g=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).homeButton=void 0,e.themeButton=void 0,e.onFocus=function(t){var n=e.homeButton,a=e.themeButton;e.props.IsCurrentElementLast?null===n||void 0===n||n.focus():null===a||void 0===a||a.focus()},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.homeButton=document.getElementById("homeButton"),this.themeButton=document.getElementById("themeMenu")}},{key:"render",value:function(){return Object(v.jsx)("div",{tabIndex:0,onFocus:this.onFocus})}}]),n}(o.Component),p=(n(27),n(10)),k=n(8);function x(e){e?(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light")):(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark"))}var w=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(u.a)(this,n),(a=t.call(this,e)).themeKey="selectedTheme",a.setSelectedTheme=function(e){var t=e?"Dark Theme":"Light Theme";a.setState({currentTheme:t}),x(e),localStorage.setItem(a.themeKey,t)},a.toggleThemeMenuOpen=a.toggleThemeMenuOpen.bind(Object(p.a)(a));var c=localStorage.getItem(a.themeKey);return null!==c?(x("Dark Theme"===c),a.state={currentTheme:c,isThemeOpen:!1}):(a.state={currentTheme:"Dark Theme",isThemeOpen:!1},x(!0),localStorage.setItem(a.themeKey,"Dark Theme")),a}return Object(h.a)(n,[{key:"toggleThemeMenuOpen",value:function(){this.setState({isThemeOpen:!this.state.isThemeOpen})}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{className:"dropup",children:Object(v.jsxs)(k.h,{isOpen:this.state.isThemeOpen,toggle:this.toggleThemeMenuOpen,children:[Object(v.jsxs)(k.k,{caret:!0,id:"themeMenu",children:[Object(v.jsxs)("svg",{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-gear me-2 mb-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(v.jsx)("path",{fillRule:"evenodd",d:"M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"}),Object(v.jsx)("path",{fillRule:"evenodd",d:"M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"})]}),Object(v.jsx)("span",{className:"me-1",children:"Theme"})]}),Object(v.jsxs)(k.j,{children:[Object(v.jsx)(k.i,{onClick:function(t){return e.setSelectedTheme(!0)},active:"Dark Theme"===this.state.currentTheme,children:Object(v.jsxs)("div",{className:"themeItem",children:[Object(v.jsx)("svg",{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-moon me-2 mb-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"})}),"Dark Theme"]})}),Object(v.jsx)(k.i,{onClick:function(t){return e.setSelectedTheme(!1)},active:"Light Theme"===this.state.currentTheme,children:Object(v.jsxs)("div",{className:"themeItem",children:[Object(v.jsx)("svg",{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-brightness-high me-2 mb-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"})}),"Light Theme"]})})]})]})})}}]),n}(o.Component),y=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(v.jsx)("footer",{role:"contentinfo",className:"footer",children:Object(v.jsxs)("div",{className:"centered",children:[Object(v.jsx)(w,{}),Object(v.jsxs)("div",{children:["\xa9 Chirag Rupani ",(new Date).getFullYear()]})]})})}}]),n}(o.Component),T=(n(30),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).observer=null,a.navRef=void 0,a.navRef=o.createRef(),a.state={active:"",isNavMenuOpened:!1},a.onSectionClick=a.onSectionClick.bind(Object(p.a)(a)),a.toggle=a.toggle.bind(Object(p.a)(a)),a.handleDocumentClick=a.handleDocumentClick.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(window.IntersectionObserver){this.observer=new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&e.setState({active:t.target.id})}))}),{root:null,rootMargin:"0px",threshold:[.1]}),setTimeout((function(){document.querySelectorAll("#main > section").forEach((function(t){var n;return null===(n=e.observer)||void 0===n?void 0:n.observe(t)}))}),1e3)}document.addEventListener("click",this.handleDocumentClick,!0)}},{key:"componentWillUnmount",value:function(){this.observer&&this.observer.disconnect(),document.removeEventListener("click",this.handleDocumentClick,!0)}},{key:"handleDocumentClick",value:function(e){var t=this.navRef.current;null==t||e.target===t||t.contains(e.target)||this.setState({isNavMenuOpened:!1})}},{key:"onSectionClick",value:function(e){var t=this.getSectionName(e.target),n=document.getElementById(t);null!=n&&window.scrollTo({top:n.offsetTop,behavior:"smooth"})}},{key:"getSectionName",value:function(e){var t=e.href,n=t.lastIndexOf("#");return t.substr(n>=0?n+1:0)}},{key:"toggle",value:function(){this.setState({isNavMenuOpened:!this.state.isNavMenuOpened})}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"container",ref:this.navRef,children:Object(v.jsxs)(k.m,{dark:!0,expand:"md",className:"navbar-custom fixed-top d-flex text-center",id:"projectNavbar",children:[Object(v.jsx)(k.n,{href:"#Home","aria-label":"Home",id:"homeButton",children:Object(v.jsx)("img",{src:"favicon-32x32.png",alt:"",height:32,width:32})}),Object(v.jsx)(k.o,{onClick:this.toggle,"data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":this.state.isNavMenuOpened}),Object(v.jsx)(k.g,{id:"navbarNavAltMarkup",navbar:!0,isOpen:this.state.isNavMenuOpened,children:Object(v.jsxs)(k.l,{className:"ms-auto text-end pe-3",navbar:!0,tag:"div",children:[Object(v.jsx)("a",{className:"nav-item nav-link ".concat("Home"===this.state.active?"active":""," pageLink"),href:"#Home",onClick:this.onSectionClick,children:"About Me"}),Object(v.jsx)("a",{className:"nav-item nav-link ".concat("Blogs"===this.state.active?"active":""," pageLink"),href:"#Blogs",onClick:this.onSectionClick,children:"Blogs"}),Object(v.jsx)("a",{className:"nav-item nav-link ".concat("Projects"===this.state.active?"active":""," pageLink"),href:"#Projects",onClick:this.onSectionClick,children:"Projects"})]})})]})})}}]),n}(o.Component)),C=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(h.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(g,{IsCurrentElementLast:!1}),Object(v.jsx)(T,{}),Object(v.jsx)(O,{}),Object(v.jsx)(y,{}),Object(v.jsx)(g,{IsCurrentElementLast:!0})]})}}]),n}(r.a.Component),M=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(C,{})})}}]),n}(r.a.Component),N=(n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://chiragrupani.github.io/MySite",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("https://chiragrupani.github.io/MySite","/service-worker.js");N?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):S(t,e)}))}}({onUpdate:function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.waiting){e.next=4;break}return e.next=3,t.unregister();case 3:window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})}},[[32,4,5]]]);