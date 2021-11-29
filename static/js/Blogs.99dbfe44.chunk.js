(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[1],{41:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var i=n(12),a=n.n(i),o=n(13),r=n(4),s=n(5),l=n(7),c=n(6),p=n(1),u=n(8),h=n(3),d=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={blogs:Array()},i}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.parse('[\n  {\n    "ID": 1,\n    "title": "Writing unit tests in TypeScript",\n    "content": "In this story, we would be using TypeScript for unit testing along with popular frameworks: Mocha/Chai, Jasmine or Jest. You have decided the framework and want to write unit tests in TypeScript, Great! We would walk through changes required to support unit tests in TypeScript.",\n    "blogURL": "https://chiragrupani.medium.com/writing-unit-tests-in-typescript-d4719b8a0a40"\n  },\n  {\n    "ID": 2,\n    "title": "Create ToDo App using React, TypeScript and Mobx",\n    "content": "In this story, we are creating simple app using Mobx and React. We will explore how Mobx can simplify updates at multiple places as well as how it can be used as dependency injection.",\n    "blogURL": "https://chiragrupani.medium.com/create-todo-app-using-react-typescript-and-mobx-d83569fa3379"\n  },\n  {\n    "ID": 3,\n    "title": "How to resolve \u201cCould not load file or assembly \u2026",\n    "content": "When we use multiple versions of same assembly, it is more likely to encounter this runtime exception. It is easy to resolve provided that the new assembly version is backward compatible. Before going into how to resolve this issue, let\u2019s understand how runtime locates the assembly.",\n    "blogURL": "https://chiragrupani.medium.com/how-to-resolve-could-not-load-file-or-assembly-or-one-of-its-dependencies-and-why-this-cf8d48d788eb"\n  },\n  {\n    "ID": 4,\n    "title": "Latest Angular features - 2021",\n    "content": "In this story, we will peek at some of additions in recent angular versions. We will look into AOT, Service workers, Angular libraries, Angular elements and other features.",\n    "blogURL": "https://chiragrupani.medium.com/look-at-latest-angular-features-da22010cac76"\n  },\n  {\n    "ID": 5,\n    "title": ".NET Core 3 released - What\u2019s new?",\n    "content": "With .NET Core 3 released today, in this story we will look at some of great features that are available with .NET Core 3.",\n    "blogURL": "https://chiragrupani.medium.com/lets-look-at-net-core-3-3608897f02c1"\n  },\n  {\n    "ID": 6,\n    "title": "Simple Angular app using ngrx 8+ store and effects factory methods",\n    "content": "In this story, we will use ngrx/store and ngrx/effects in angular app using simple To Do App sample. We will use latest factory methods that will simplify code significantly.",\n    "blogURL": "https://chiragrupani.medium.com/simple-angular-app-using-ngrx-8-store-and-effects-factory-methods-f3423b9f6d3b"\n  },\n  {\n    "ID": 7,\n    "title": "Vuex with TypeScript",\n    "content": "In this story, We will create sample To Do App using Vuex and TypeScript. Vuex is state management library + pattern for Vue applications. ",\n    "blogURL": "https://chiragrupani.medium.com/vuex-with-typescript-b83a62aa48a8"\n  },\n  {\n    "ID": 8,\n    "title": "Auto Publish React/Angular Front End App to GitHub Pages",\n    "content": "In this story we will walk through in publish cli generated React or Angular app to the GitHub pages. We will later automated process to deploy to GitHub pages with every push to the master branch.",\n    "blogURL": "https://chiragrupani.medium.com/auto-publish-react-angular-front-end-app-to-github-pages-3ca1641bfdf6"\n  },\n  {\n    "ID": 9,\n    "title": "Parent Child communication in Vue, Angular and React (All in TypeScript)",\n    "content": "In this story, we will look into interaction between parent and child components in popular front end technologies \u2014 Vue, Angular and React. We will look into how component can pass data to other components and how child component can emit an event along with data value that the parent component can listen to.",\n    "blogURL": "https://chiragrupani.medium.com/parent-child-communication-in-vue-angular-and-react-all-in-typescript-9a47c75cbf74"\n  },\n\n  {\n    "ID": 10,\n    "title": "Promises, Generators and Observable in JavaScript",\n    "content": "In this story we will look into different ways for performing asynchronous operation in JavaScript. JS itself actually never had direct asynchronous mechanism, surprising isn\u2019t it? JS runs in hosting environments like browsers, NodeJS. This environments provides mechanism to executing different JS code pieces over the time called Event Loop",\n    "blogURL": "https://chiragrupani.medium.com/promises-generators-and-observable-in-javascript-9f09bde7528e"\n  }\n]'),this.setState({blogs:t});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsx)("section",{id:"Blogs",children:Object(h.jsxs)("div",{className:"centered",children:[Object(h.jsx)("h1",{className:"h2 mb-4",children:"My Blogs"}),Object(h.jsx)("div",{className:"blogs",children:this.state.blogs.map((function(e){return Object(h.jsxs)(u.a,{className:"text-white bg-dark",children:[Object(h.jsx)(u.c,{children:Object(h.jsx)(u.f,{children:e.title})}),Object(h.jsxs)(u.b,{children:[Object(h.jsx)(u.e,{children:e.content}),Object(h.jsx)(u.d,{href:e.blogURL,rel:"noreferrer noopener",target:"blank",children:"Read more..."})]})]},e.ID)}))})]})})}}]),n}(p.Component)}}]);