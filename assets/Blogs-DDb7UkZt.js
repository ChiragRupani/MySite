var a=Object.defineProperty;var r=(o,i,e)=>i in o?a(o,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[i]=e;var s=(o,i,e)=>r(o,typeof i!="symbol"?i+"":i,e);import{r as n,j as t,h as l,i as c,k as m,l as u,m as d,n as p}from"./react-vendor-Ay49YPnh.js";const h=`[
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
]`;class b extends n.PureComponent{constructor(e){super(e);s(this,"state",{blogs:Array()})}async componentDidMount(){let e=JSON.parse(h);this.setState({blogs:e})}render(){return t.jsxDEV("section",{id:"Blogs",style:{position:"relative"},children:[t.jsxDEV("div",{className:"centered",children:[t.jsxDEV("h1",{className:"h2 mb-4",children:"My Blogs"},void 0,!1,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:35,columnNumber:11},this),t.jsxDEV("div",{className:"blogs",children:this.state.blogs.map(e=>t.jsxDEV(l,{className:"text-white bg-dark",children:[t.jsxDEV(c,{children:t.jsxDEV(m,{className:"blobTitle",children:e.title},void 0,!1,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:42,columnNumber:21},this)},void 0,!1,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:41,columnNumber:19},this),t.jsxDEV(u,{children:[t.jsxDEV(d,{children:e.content},void 0,!1,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:45,columnNumber:21},this),t.jsxDEV(p,{href:e.blogURL,rel:"noreferrer noopener",target:"blank",children:"Read more..."},void 0,!1,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:46,columnNumber:21},this)]},void 0,!0,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:44,columnNumber:19},this)]},e.ID,!0,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:40,columnNumber:17},this))},void 0,!1,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:37,columnNumber:11},this)]},void 0,!0,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:34,columnNumber:9},this),t.jsxDEV("div",{className:"wave",children:t.jsxDEV("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:t.jsxDEV("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",className:"shape-fill"},void 0,!1,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:66,columnNumber:13},this)},void 0,!1,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:60,columnNumber:11},this)},void 0,!1,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:59,columnNumber:9},this)]},void 0,!0,{fileName:"D:/Study/Portfolio/mysite/src/Blogs.tsx",lineNumber:33,columnNumber:7},this)}}export{b as default};
