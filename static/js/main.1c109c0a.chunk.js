(this.webpackJsonpcrypto_tracker=this.webpackJsonpcrypto_tracker||[]).push([[0],{53:function(e,c,t){},54:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t(0),o=t.n(a),s=t(28),i=t.n(s),r=t(12),l=t(2),j=t(8),d=t(11),p=t.n(d),u=(t(53),t(54),function(e){var c=e.id,t=e.name,a=e.price,o=e.symbol,s=e.marketcap,i=e.volume,l=e.image,j=e.priceChange;return Object(n.jsx)(r.b,{to:"/Coin-detail/".concat(c),style:{textDecoration:"none"},children:Object(n.jsx)("div",{className:"coin-container",children:Object(n.jsxs)("div",{className:"coin-row",children:[Object(n.jsxs)("div",{className:"coin",children:[Object(n.jsx)("img",{src:l,alt:"crypto"}),Object(n.jsx)("h1",{children:t}),Object(n.jsx)("p",{className:"coin-symbol",children:o})]}),Object(n.jsxs)("div",{className:"coin-data",children:[Object(n.jsxs)("p",{className:"coin-price",children:["$",a]}),Object(n.jsxs)("p",{className:"coin-volume",children:["$",i.toLocaleString()]}),j<0?Object(n.jsxs)("p",{className:"coin-percent red",children:[j.toFixed(2),"%"]}):Object(n.jsxs)("p",{className:"coin-percent green",children:[j.toFixed(2),"%"]}),Object(n.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",s.toLocaleString()]})]})]})})})});var h=function(){var e=Object(a.useState)([]),c=Object(j.a)(e,2),t=c[0],o=c[1],s=Object(a.useState)(""),i=Object(j.a)(s,2),r=i[0],l=i[1];Object(a.useEffect)((function(){p.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){o(e.data),console.log(e.data,"Hello setInterval")})).catch((function(e){return console.log(e)})),console.log("Hello")}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return Object(n.jsxs)("div",{className:"coin-app",children:[Object(n.jsxs)("div",{className:"coin-search",children:[Object(n.jsx)("h1",{className:"coin-text",children:"Search a currency"}),Object(n.jsx)("form",{children:Object(n.jsx)("input",{className:"coin-input",type:"text",onChange:function(e){l(e.target.value)},placeholder:"Search"})})]}),d.map((function(e){return Object(n.jsx)(u,{id:e.id,name:e.name,price:e.current_price,symbol:e.symbol,marketcap:e.total_volume,volume:e.market_cap,image:e.image,priceChange:e.price_change_percentage_24h})}))]})},b=t(30);t(61);function m(){console.log(2);var e=Object(a.useState)([]),c=Object(j.a)(e,2),t=c[0],s=c[1],i=Object(a.useState)({}),r=Object(j.a)(i,2),l=r[0],d=r[1],u=Object(a.useState)(""),h=Object(j.a)(u,2),m=h[0],O=h[1],g=Object(a.useState)(!0),x=Object(j.a)(g,2),f=x[0],v=x[1];Object(a.useEffect)((function(){var e=window.location.pathname.split("/");e=e[e.length-1],console.log(5),p.a.get("https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=gbp&days=365&interval=daily")).then((function(e){d(e.data),s(e.data.prices),console.log(t),v(!1)})).catch((function(e){return console.log(e)}))}),[]),console.log(t),console.log(l),Object(a.useEffect)((function(){console.log(4);var e=window.location.pathname.split("/");e=e[e.length-1],console.log(5),p.a.get("https://api.coingecko.com/api/v3/coins/".concat(e)).then((function(e){d(e.data);O(e.data.description.en.replace(/<.+?>/g,""))})).catch((function(e){return console.log(e)}))}),[]),m.replace("is","MMMMMMMMMMMMM"),console.log(m);var y=o.a.useMemo((function(){return[{label:"Series 1",data:t,color:"rgb(13, 118, 128)",showPoints:!1}]})),N=o.a.useMemo((function(){return[{primary:!0,type:"time",position:"bottom",showGrid:!1},{primary:!1,type:"linear",position:"left",showGrid:!0}]}),[]),M=o.a.useMemo((function(){return{showPoints:!1}}),[]);return f?Object(n.jsx)("div",{className:"App",children:"Loading..."}):Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"heading",children:Object(n.jsx)("h1",{children:l.name})}),Object(n.jsx)("div",{classname:"graph_container",children:Object(n.jsx)("div",{className:"graph",children:Object(n.jsx)(b.Chart,{axes:N,series:M,data:y})})}),Object(n.jsx)("div",{className:"info",children:m})]})}function O(){return Object(n.jsx)("div",{children:Object(n.jsx)(r.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(h,{})}}),Object(n.jsx)(l.a,{exact:!0,path:"/Coin-detail/:coinid",render:function(){return Object(n.jsx)(m,{})}})]})})})}console.log(1),i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.1c109c0a.chunk.js.map