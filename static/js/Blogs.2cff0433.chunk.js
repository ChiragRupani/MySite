(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[1],{98:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var s=t(29),c=t.n(s),r=t(34),n=t(10),o=t(11),l=t(13),i=t(12),u=t(1),d=t.n(u),b=t(5),j=t(7),f=t(0),g=t.n(f),m=t(8),p=t.n(m),O=t(2),v={tag:O.i,inverse:g.a.bool,color:g.a.string,body:g.a.bool,outline:g.a.bool,className:g.a.string,cssModule:g.a.object,innerRef:g.a.oneOfType([g.a.object,g.a.string,g.a.func])},N=function(e){var a=e.className,t=e.cssModule,s=e.color,c=e.body,r=e.inverse,n=e.outline,o=e.tag,l=e.innerRef,i=Object(j.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),u=Object(O.f)(p()(a,"card",!!r&&"text-white",!!c&&"card-body",!!s&&(n?"border":"bg")+"-"+s),t);return d.a.createElement(o,Object(b.a)({},i,{className:u,ref:l}))};N.propTypes=v,N.defaultProps={tag:"div"};var h=N,y={tag:O.i,className:g.a.string,cssModule:g.a.object},M=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(j.a)(e,["className","cssModule","tag"]),r=Object(O.f)(p()(a,"card-header"),t);return d.a.createElement(s,Object(b.a)({},c,{className:r}))};M.propTypes=y,M.defaultProps={tag:"div"};var x=M,R={tag:O.i,className:g.a.string,cssModule:g.a.object},T=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(j.a)(e,["className","cssModule","tag"]),r=Object(O.f)(p()(a,"card-title"),t);return d.a.createElement(s,Object(b.a)({},c,{className:r}))};T.propTypes=R,T.defaultProps={tag:"div"};var k=T,w={tag:O.i,className:g.a.string,cssModule:g.a.object,innerRef:g.a.oneOfType([g.a.object,g.a.string,g.a.func])},E=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,c=e.tag,r=Object(j.a)(e,["className","cssModule","innerRef","tag"]),n=Object(O.f)(p()(a,"card-body"),t);return d.a.createElement(c,Object(b.a)({},r,{className:n,ref:s}))};E.propTypes=w,E.defaultProps={tag:"div"};var P=E,D={tag:O.i,className:g.a.string,cssModule:g.a.object},B=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(j.a)(e,["className","cssModule","tag"]),r=Object(O.f)(p()(a,"card-text"),t);return d.a.createElement(s,Object(b.a)({},c,{className:r}))};B.propTypes=D,B.defaultProps={tag:"p"};var J=B,A={tag:O.i,innerRef:g.a.oneOfType([g.a.object,g.a.func,g.a.string]),className:g.a.string,cssModule:g.a.object},C=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=e.innerRef,r=Object(j.a)(e,["className","cssModule","tag","innerRef"]),n=Object(O.f)(p()(a,"card-link"),t);return d.a.createElement(s,Object(b.a)({},r,{ref:c,className:n}))};C.propTypes=A,C.defaultProps={tag:"a"};var I=C,L=t(3),S=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).state={blogs:Array()},s}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(r.a)(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("Data/BlogData.json");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,this.setState({blogs:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(L.jsx)("section",{id:"Blogs",children:Object(L.jsxs)("div",{className:"centered",children:[Object(L.jsx)("h2",{className:"mb-4",children:"My Blogs"}),Object(L.jsx)("div",{className:"blogs",children:this.state.blogs.map((function(e){return Object(L.jsxs)(h,{className:"text-white bg-dark",children:[Object(L.jsx)(x,{children:Object(L.jsx)(k,{children:e.title})}),Object(L.jsxs)(P,{children:[Object(L.jsx)(J,{children:e.content}),Object(L.jsx)(I,{href:e.blogURL,rel:"noreferrer noopener",target:"blank",children:"Read more..."})]})]},e.ID)}))})]})})}}]),t}(u.Component)}}]);
//# sourceMappingURL=Blogs.2cff0433.chunk.js.map