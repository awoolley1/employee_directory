(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},39:function(e,t,c){},59:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(8),j=c.n(i),o=(c(33),c(34),c(35),c(15)),s=c(3);var a=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(o.a,{bg:"dark",variant:"dark",children:Object(s.jsx)(o.a.Brand,{href:"#home",children:"Employee Directory"})})})},l=(c(39),c(10));var d=function(){return Object(s.jsx)(l.a,{children:Object(s.jsxs)(l.a.Group,{controlId:"formBasicEmail",children:[Object(s.jsx)(l.a.Label,{children:"Search by name or click to sort by location"}),Object(s.jsx)(l.a.Control,{type:"email",placeholder:"Enter employee name"})]})})},h=c(27),b=c(25),u=c.n(b),O=function(){return u.a.get("https://randomuser.me/api/?results=50")},x=(c(59),c(26)),m=c(28);var f=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){O().then((function(e){console.log(e),r(e.data.results),console.log(c)})).catch((function(e){return console.log(e)}))}),[]),Object(s.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Photo"}),Object(s.jsx)("th",{children:"First Name"}),Object(s.jsx)("th",{children:"Last Name"}),Object(s.jsx)("th",{children:"Email"}),Object(s.jsx)("th",{children:Object(s.jsx)(m.a,{id:"locBut",children:"Location"})})]})}),Object(s.jsx)("tbody",{children:c.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.picture.thumbnail,alt:"headshot"})}),Object(s.jsx)("td",{children:e.name.first}),Object(s.jsx)("td",{children:e.name.last}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:e.location.city})]},t)}))})]})};c(60);var p=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(a,{}),Object(s.jsx)(d,{}),Object(s.jsx)(f,{})]})};var g=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(p,{})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,j=t.getTTFB;c(e),n(e),r(e),i(e),j(e)}))};j.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),v()}},[[61,1,2]]]);
//# sourceMappingURL=main.ce043fda.chunk.js.map