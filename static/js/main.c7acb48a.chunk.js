(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports={form:"form_form__30FZI"}},,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),u=(n(13),n(1)),i=n(3),l=n(2),s=n(4),p=(n(14),n(5)),m=n.n(p),f=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).number=r.a.createRef(),n.render=function(){return r.a.createElement("div",{className:m.a.span},r.a.createElement("span",{ref:n.number},n.props.num.spanNumber))},n}return Object(s.a)(t,e),t}(r.a.Component),b=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("div",{className:m.a.input},r.a.createElement("input",{type:"text",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438 \u0437\u0434\u0435\u0441\u044c",ref:n.props.inputAlert}))},n}return Object(s.a)(t,e),t}(r.a.Component),h=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).inputAlert=r.a.createRef(),n.increaseNumberAndAlert=function(){n.props.toClick();var e=n.inputAlert.current.value;alert(e),n.inputAlert.current.value=""},n.render=function(){return r.a.createElement("div",{className:m.a.form},r.a.createElement(f,{num:n.props.state,result:n.increaseNumberAndAlert.toPlus}),r.a.createElement(b,{inputValue:n.props.state.inputValue,inputAlert:n.inputAlert}),r.a.createElement("button",{onClick:n.increaseNumberAndAlert},"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043c\u0435\u043d\u044f"))},n}return Object(s.a)(t,e),t}(r.a.Component),d=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={spanNumber:1},n.toClick=function(){n.setState({spanNumber:n.state.spanNumber+1})},n.render=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{toClick:n.toClick,newInputValue:n.newInputValue,state:n.state}))},n}return Object(s.a)(t,e),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.c7acb48a.chunk.js.map