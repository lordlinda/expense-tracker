(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(7),i=n.n(s),o=(n(14),n(15),n(3)),j=n(8),u=n(4),l=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(u.a)(Object(u.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(u.a)(Object(u.a)({},e),{},{transactions:[t.payload].concat(Object(j.a)(e.transactions))});default:return e}},d={transactions:[]},b=Object(r.createContext)(d),x=function(e){var t=e.children,n=Object(r.useReducer)(l,d),a=Object(o.a)(n,2),s=a[0],i=a[1];return Object(c.jsx)(b.Provider,{value:{transactions:s.transactions,deleteTransaction:function(e){i({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){i({type:"ADD_TRANSACTION",payload:e})}},children:t})};var O=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(0),i=Object(o.a)(s,2),j=i[0],u=i[1],l=Object(r.useContext)(b).addTransaction;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Add new transaction"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+j};l(t)},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{htmlFor:"text",children:"Text"}),Object(c.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter text..."})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(c.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(c.jsx)("input",{type:"number",value:j,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount..."})]}),Object(c.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var h=function(){var e=Object(r.useContext)(b).transactions.map((function(e){return e.amount}));console.log(e);var t=e.reduce((function(e,t){return e+t}),0).toFixed(2);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Your Balance"}),Object(c.jsxs)("h1",{children:["$",t]})]})};var f=function(){var e=Object(r.useContext)(b).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"inc-exp-container",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Income"}),Object(c.jsx)("p",{className:"money plus",children:t})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Expense"}),Object(c.jsx)("p",{className:"money minus",children:n})]})]})})},m=function(e){var t=e.transaction,n=Object(r.useContext)(b).deleteTransaction,a=t.amount<0?"-":"+";return Object(c.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text," ",Object(c.jsxs)("span",{children:[a,"$",Math.abs(t.amount)]}),Object(c.jsx)("button",{onClick:function(){return n(t.id)},className:"delete-btn",children:"x"})]})};var p=function(){var e=Object(r.useContext)(b).transactions;return Object(c.jsx)("div",{children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"History"}),Object(c.jsx)("ul",{className:"list",children:e.map((function(e){return Object(c.jsx)(m,{transaction:e},e.id)}))})]})})},v=function(){return Object(c.jsx)("h2",{children:"Expense Tracker"})};var N=function(){return Object(c.jsxs)(x,{children:[Object(c.jsx)(v,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(h,{}),Object(c.jsx)(f,{}),Object(c.jsx)(p,{}),Object(c.jsx)(O,{})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),T()}},[[16,1,2]]]);
//# sourceMappingURL=main.82b70578.chunk.js.map