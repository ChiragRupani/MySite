var k=Object.defineProperty;var I=(e,a,n)=>a in e?k(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n;var j=(e,a,n)=>(I(e,typeof a!="symbol"?a+"":a,n),n);import{P as s,t as u,m as p,c as d,R as g,r as S,j as o}from"./index-747630f5.js";var W=["className","cssModule","color","body","inverse","outline","tag","innerRef"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},f.apply(this,arguments)}function L(e,a){if(e==null)return{};var n=E(e,a),t,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function E(e,a){if(e==null)return{};var n={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}var A={body:s.bool,className:s.string,color:s.string,cssModule:s.object,innerRef:s.oneOfType([s.object,s.string,s.func]),inverse:s.bool,outline:s.bool,tag:u};function w(e){var a=e.className,n=e.cssModule,t=e.color,r=e.body,i=e.inverse,l=e.outline,c=e.tag,R=c===void 0?"div":c,M=e.innerRef,$=L(e,W),_=p(d(a,"card",i?"text-white":!1,r?"card-body":!1,t?"".concat(l?"border":"bg","-").concat(t):!1),n);return g.createElement(R,f({},$,{className:_,ref:M}))}w.propTypes=A;var C=["className","cssModule","innerRef","tag"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},m.apply(this,arguments)}function D(e,a){if(e==null)return{};var n=U(e,a),t,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function U(e,a){if(e==null)return{};var n={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}var J={className:s.string,cssModule:s.object,innerRef:s.oneOfType([s.object,s.string,s.func]),tag:u};function O(e){var a=e.className,n=e.cssModule,t=e.innerRef,r=e.tag,i=r===void 0?"div":r,l=D(e,C),c=p(d(a,"card-body"),n);return g.createElement(i,m({},l,{className:c,ref:t}))}O.propTypes=J;var V=["className","cssModule","tag","innerRef"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},h.apply(this,arguments)}function B(e,a){if(e==null)return{};var n=H(e,a),t,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function H(e,a){if(e==null)return{};var n={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}var G={tag:u,innerRef:s.oneOfType([s.object,s.func,s.string]),className:s.string,cssModule:s.object};function x(e){var a=e.className,n=e.cssModule,t=e.tag,r=t===void 0?"a":t,i=e.innerRef,l=B(e,V),c=p(d(a,"card-link"),n);return g.createElement(r,h({},l,{ref:i,className:c}))}x.propTypes=G;var q=["className","cssModule","tag"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},b.apply(this,arguments)}function F(e,a){if(e==null)return{};var n=Y(e,a),t,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function Y(e,a){if(e==null)return{};var n={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}var Z={className:s.string,cssModule:s.object,tag:u};function N(e){var a=e.className,n=e.cssModule,t=e.tag,r=t===void 0?"div":t,i=F(e,q),l=p(d(a,"card-header"),n);return g.createElement(r,b({},i,{className:l}))}N.propTypes=Z;var z=["className","cssModule","tag"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},v.apply(this,arguments)}function K(e,a){if(e==null)return{};var n=Q(e,a),t,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function Q(e,a){if(e==null)return{};var n={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}var X={className:s.string,cssModule:s.object,tag:u};function T(e){var a=e.className,n=e.cssModule,t=e.tag,r=t===void 0?"p":t,i=K(e,z),l=p(d(a,"card-text"),n);return g.createElement(r,v({},i,{className:l}))}T.propTypes=X;var ee=["className","cssModule","tag"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},y.apply(this,arguments)}function te(e,a){if(e==null)return{};var n=ne(e,a),t,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function ne(e,a){if(e==null)return{};var n={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}var ae={className:s.string,cssModule:s.object,tag:u};function P(e){var a=e.className,n=e.cssModule,t=e.tag,r=t===void 0?"div":t,i=te(e,ee),l=p(d(a,"card-title"),n);return g.createElement(r,y({},i,{className:l}))}P.propTypes=ae;const re=`[
  {
    "ID": 1,
    "title": "Writing unit tests in TypeScript",
    "content": "In this story, we would be using TypeScript for unit testing along with popular frameworks: Mocha/Chai, Jasmine or Jest. You have decided the framework and want to write unit tests in TypeScript, Great! We would walk through changes required to support unit tests in TypeScript.",
    "blogURL": "https://chiragrupani.medium.com/writing-unit-tests-in-typescript-d4719b8a0a40"
  },
  {
    "ID": 2,
    "title": "Create ToDo App using React, TypeScript and Mobx",
    "content": "In this story, we are creating simple app using Mobx and React. We will explore how Mobx can simplify updates at multiple places as well as how it can be used as dependency injection.",
    "blogURL": "https://chiragrupani.medium.com/create-todo-app-using-react-typescript-and-mobx-d83569fa3379"
  },
  {
    "ID": 3,
    "title": "How to resolve “Could not load file or assembly …",
    "content": "When we use multiple versions of same assembly, it is more likely to encounter this runtime exception. It is easy to resolve provided that the new assembly version is backward compatible. Before going into how to resolve this issue, let's understand how runtime locates the assembly.",
    "blogURL": "https://chiragrupani.medium.com/how-to-resolve-could-not-load-file-or-assembly-or-one-of-its-dependencies-and-why-this-cf8d48d788eb"
  },
  {
    "ID": 4,
    "title": "Latest Angular features - 2021",
    "content": "In this story, we will peek at some of additions in recent angular versions. We will look into AOT, Service workers, Angular libraries, Angular elements and other features.",
    "blogURL": "https://chiragrupani.medium.com/look-at-latest-angular-features-da22010cac76"
  },
  {
    "ID": 5,
    "title": ".NET Core 3 released - What’s new?",
    "content": "With .NET Core 3 released today, in this story we will look at some of great features that are available with .NET Core 3.",
    "blogURL": "https://chiragrupani.medium.com/lets-look-at-net-core-3-3608897f02c1"
  },
  {
    "ID": 6,
    "title": "Simple Angular app using ngrx 8+ store and effects factory methods",
    "content": "In this story, we will use ngrx/store and ngrx/effects in angular app using simple To Do App sample. We will use latest factory methods that will simplify code significantly.",
    "blogURL": "https://chiragrupani.medium.com/simple-angular-app-using-ngrx-8-store-and-effects-factory-methods-f3423b9f6d3b"
  },
  {
    "ID": 7,
    "title": "Vuex with TypeScript",
    "content": "In this story, We will create sample To Do App using Vuex and TypeScript. Vuex is state management library + pattern for Vue applications. ",
    "blogURL": "https://chiragrupani.medium.com/vuex-with-typescript-b83a62aa48a8"
  },
  {
    "ID": 8,
    "title": "Auto Publish React/Angular Front End App to GitHub Pages",
    "content": "In this story we will walk through in publish cli generated React or Angular app to the GitHub pages. We will later automated process to deploy to GitHub pages with every push to the master branch.",
    "blogURL": "https://chiragrupani.medium.com/auto-publish-react-angular-front-end-app-to-github-pages-3ca1641bfdf6"
  },
  {
    "ID": 9,
    "title": "Parent Child communication in Vue, Angular and React (All in TypeScript)",
    "content": "In this story, we will look into interaction between parent and child components in popular front end technologies — Vue, Angular and React. We will look into how component can pass data to other components and how child component can emit an event along with data value that the parent component can listen to.",
    "blogURL": "https://chiragrupani.medium.com/parent-child-communication-in-vue-angular-and-react-all-in-typescript-9a47c75cbf74"
  },

  {
    "ID": 10,
    "title": "Promises, Generators and Observable in JavaScript",
    "content": "In this story we will look into different ways for performing asynchronous operation in JavaScript. JS itself actually never had direct asynchronous mechanism, surprising isn't it? JS runs in hosting environments like browsers, NodeJS. This environments provides mechanism to executing different JS code pieces over the time called Event Loop",
    "blogURL": "https://chiragrupani.medium.com/promises-generators-and-observable-in-javascript-9f09bde7528e"
  }
]`;class oe extends S.Component{constructor(n){super(n);j(this,"state",{blogs:Array()})}async componentDidMount(){let n=JSON.parse(re);this.setState({blogs:n})}render(){return o.jsxs("section",{id:"Blogs",style:{position:"relative"},children:[o.jsxs("div",{className:"centered",children:[o.jsx("h1",{className:"h2 mb-4",children:"My Blogs"}),o.jsx("div",{className:"blogs",children:this.state.blogs.map(n=>o.jsxs(w,{className:"text-white bg-dark",children:[o.jsx(N,{children:o.jsx(P,{className:"blobTitle",children:n.title})}),o.jsxs(O,{children:[o.jsx(T,{children:n.content}),o.jsx(x,{href:n.blogURL,rel:"noreferrer noopener",target:"blank",children:"Read more..."})]})]},n.ID))})]}),o.jsx("div",{className:"wave",children:o.jsx("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:o.jsx("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",className:"shape-fill"})})})]})}}export{oe as default};
