if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutMe-9f324614.js",revision:null},{url:"assets/Blogs-f6a8bb2b.js",revision:null},{url:"assets/index-8893bdf9.css",revision:null},{url:"assets/index-adc16d90.js",revision:null},{url:"assets/Projects-8d22cef7.js",revision:null},{url:"index.html",revision:"666627938af175bf30680288b1c586f7"},{url:"registerSW.js",revision:"ce5e5e96822244129a60268608414fd8"},{url:"manifest.webmanifest",revision:"72b9760b4795a8620438b766cbfe414f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
