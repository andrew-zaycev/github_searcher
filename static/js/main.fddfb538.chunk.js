(this.webpackJsonpsearch_github_users=this.webpackJsonpsearch_github_users||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),r=c.n(s),n=c(7),o=c.n(n),i=c(3),l=(c(13),c(6)),u=c(4),j=function(e){return fetch("".concat("https://api.github.com").concat(e)).then((function(e){if(e.ok)return e.json();throw"".concat(e.status," - ").concat(e.statusText)}))},b=function(){return j("/users?per_page=".concat(20))},h=function(e){return j("/users/".concat(e))},d=function(e){return j("/users/".concat(e,"/repos?per_page=").concat(100))},f=(c(16),function(){return Object(a.jsxs)("div",{className:"lds-ellipsis",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})}),O=(c(17),function(e){var t=e.login,c=e.avatar_url,r=e.selectPage,n=Object(s.useState)(""),o=Object(i.a)(n,2),l=o[0],j=o[1],b=Object(s.useState)(""),d=Object(i.a)(b,2),O=d[0],_=d[1],p=Object(s.useState)(!0),m=Object(i.a)(p,2),g=m[0],x=m[1];return Object(s.useEffect)((function(){var e=!0;return t.length>13?_("".concat(t.slice(0,13),"...")):_(t),h(t).then((function(t){e&&j(t.public_repos)})),function(){e=!1}}),[t]),Object(s.useEffect)((function(){x(""===l)}),[l]),Object(a.jsx)("div",{className:"userCard",onClick:function(){r(t)},children:g?Object(a.jsx)("div",{className:"userCard__loader",children:Object(a.jsx)(f,{})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"userCard__item-wrap",children:[Object(a.jsx)("img",{className:"userCard__avatar",src:c,alt:"User avatar"}),Object(a.jsx)("p",{className:"userCard__login","data-tip":t,"data-type":"info",children:O}),t.length>13&&Object(a.jsx)(u.a,{})]}),Object(a.jsxs)("div",{className:"userCard__repo",children:[Object(a.jsx)("p",{children:"Repo:"}),Object(a.jsx)("p",{className:"userCard__value-repo",children:l})]})]})})}),_=function(e){var t=e.users,c=e.selectPage;return t.map((function(e){return Object(a.jsx)(O,Object(l.a)(Object(l.a)({},e),{},{selectPage:c}),e.id)}))},p=(c(18),function(e){var t=e.getSearchQuery,c=e.searchQuery,r=e.placeholder,n=Object(s.useState)(""),o=Object(i.a)(n,2),l=o[0],u=o[1];return Object(s.useEffect)((function(){return u(r)}),[r]),Object(a.jsx)("input",{className:"searchBar",autoComplete:"off",name:"searchQuery",type:"text",onChange:t,value:c,placeholder:l})});p.default={searchQuery:""};c(19);var m=function(e){var t=e.selectPage,c=e.placeholder,r=e.changePlaceholder,n=Object(s.useState)(""),o=Object(i.a)(n,2),l=o[0],u=o[1],h=Object(s.useState)([]),d=Object(i.a)(h,2),f=d[0],O=d[1],m=Object(s.useState)(!1),g=Object(i.a)(m,2),x=g[0],v=g[1];Object(s.useEffect)((function(){var e,t=!0;return r("Search for Users"),t&&l&&((e=l,j("/search/users?q=".concat(e)).then((function(e){return e.items}))).then((function(e){return O(e.slice(0,10))})),0===f.length?v(!0):v(!1)),t&&""===l&&b().then((function(e){O(e)})),function(){t=!1}}),[l,f.length,r]),Object(s.useEffect)((function(){b().then((function(e){O(e)}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{getSearchQuery:function(e){var t=e.target.value;u(t)},searchQuery:l,placeholder:c}),x?Object(a.jsx)("span",{className:"home-page__error",children:"No matches found"}):Object(a.jsx)(_,{users:f,selectPage:t})]})},g=(c(20),function(e){var t=e.forksCount,c=e.starsCount,r=e.repoName,n=e.userLogin,o=Object(s.useState)(""),l=Object(i.a)(o,2),u=l[0],j=l[1],b=Object(s.useState)(!0),h=Object(i.a)(b,2),d=h[0],O=h[1],_="https://github.com/".concat(n,"/").concat(r);return Object(s.useEffect)((function(){r.length>16?j("".concat(r.slice(0,25),"...")):j(r)}),[r]),Object(s.useEffect)((function(){O(""===u)})),Object(a.jsx)("div",{className:"user-page__card-repo card-repo",children:d?Object(a.jsx)("div",{className:"card-repo__loader",children:Object(a.jsx)(f,{})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("a",{href:_,target:"_blank",rel:"noreferrer",className:"card-repo__repo-name",children:u}),Object(a.jsxs)("div",{className:"card-repo__wrap-items",children:[Object(a.jsxs)("p",{className:"card-repo__wrap-items__forks",children:[Object(a.jsx)("span",{className:"card-repo__wrap-items__forks__count",children:t})," ","Forks"]}),Object(a.jsxs)("p",{className:"card-repo__wrap-items__stars",children:[Object(a.jsx)("span",{className:"card-repo__wrap-items__stars__count",children:c})," ","Stars"]})]})]})})}),x=function(e){var t=e.repos,c=e.userLogin;return t.map((function(e){return Object(a.jsx)(g,{id:e.id,starsCount:e.stargazers_count,forksCount:e.forks,repoName:e.name,userLogin:c},e.id)}))},v=(c(21),function(e){var t=e.login,c=e.changePlaceholder,r=e.placeholder,n=Object(s.useState)([]),o=Object(i.a)(n,2),l=o[0],j=o[1],b=Object(s.useState)(""),f=Object(i.a)(b,2),O=f[0],_=f[1],m=Object(s.useState)({}),g=Object(i.a)(m,2),v=g[0],N=g[1],S=Object(s.useState)(""),w=Object(i.a)(S,2),C=w[0],E=w[1],k=Object(s.useState)(""),y=Object(i.a)(k,2),P=y[0],L=y[1],Q=Object(s.useState)(!1),F=Object(i.a)(Q,2),U=F[0],B=F[1];return Object(s.useEffect)((function(){return c("Search for Users Repositories")}),[c]),Object(s.useEffect)((function(){t.length>13?_("".concat(t.slice(0,13),"...")):_(t)}),[t]),Object(s.useEffect)((function(){h(t).then((function(e){N({avatar_url:e.avatar_url,email:e.email,location:e.location,followers:e.followers,following:e.following,bio:e.bio,login:e.login,created_at:e.created_at}),E(e.created_at.slice(0,10))}))}),[]),Object(s.useEffect)((function(){var e=!0;return e&&P&&(d(t).then((function(e){j(e.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())})))})),0===l.length?B(!0):B(!1)),e&&!P&&d(t).then(j),function(){e=!1}}),[P,l.length]),Object(a.jsxs)("div",{className:"user-page",children:[Object(a.jsxs)("div",{className:"user-page__info info",children:[Object(a.jsx)("img",{className:"info__avatar",src:v.avatar_url,alt:"Avatar"}),Object(a.jsxs)("div",{className:"info__items",children:[Object(a.jsx)("p",{className:"info__items__login","data-tip":t,"data-type":"info",children:O}),O.length>13&&Object(a.jsx)(u.a,{}),Object(a.jsx)("p",{children:v.email||Object(a.jsx)("span",{className:"info__items__email",children:"Email not found"})}),Object(a.jsx)("p",{children:v.location||Object(a.jsx)("span",{className:"info__items__location",children:"Location not found"})}),Object(a.jsx)("p",{className:"info__items__data",children:C}),Object(a.jsxs)("p",{children:["Followers:"," ",Object(a.jsx)("span",{className:"info__items__followers-value",children:v.followers})]}),Object(a.jsxs)("p",{children:["Following:"," ",Object(a.jsx)("span",{className:"info__items__following-value",children:v.following})]})]})]}),Object(a.jsx)("div",{className:"user-page__wrap-bio",children:Object(a.jsxs)("p",{className:"user-page__bio",children:[Object(a.jsx)("span",{className:"user-page__bio__word",children:"BIO:"})," ",v.bio||Object(a.jsx)("span",{className:"user-page__bio__empty",children:"User does not show information about him"})]})}),Object(a.jsx)("div",{className:"user-page__search-bar",children:Object(a.jsx)(p,{placeholder:r,getSearchQuery:function(e){var t=e.target.value;L(t)}})}),U&&Object(a.jsx)("span",{className:"user-page__error",children:"No matches found"}),Object(a.jsx)(x,{repos:l,userLogin:t})]})}),N=function(){var e=Object(s.useState)("home"),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)("Search for Users"),o=Object(i.a)(n,2),l=o[0],u=o[1],j=Object(s.useState)(""),b=Object(i.a)(j,2),h=b[0],d=b[1],f=function(e){return u(e)};return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"container__h1",onClick:function(){return r("home")},children:"GitHub Searcher"}),"home"===c&&Object(a.jsx)(m,{selectPage:function(e){r("user_page"),d(e)},placeholder:l,changePlaceholder:f}),"home"!==c&&Object(a.jsx)(v,{login:h,placeholder:l,changePlaceholder:f})]})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.fddfb538.chunk.js.map