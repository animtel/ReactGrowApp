(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),l=t.n(c),o=t(1),i=t(2),m=t(4),s=t(3),u=t(5),h=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark mb-3 py-0",style:{backgroundColor:"#563d7c"}},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},e.branding),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/",className:"nav-link"},"Home"))))))};h.defaultProps={branding:"My app"};var d=h,p=t(8),b=r.a.createContext(),f=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(p.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});default:return e}},E=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[{id:1,name:"Daniel Ko",email:"danielko@gamil.com",phone:"+380999999999"},{id:2,name:"Henry Johnson",email:"henryjonhson@gamil.com",phone:"555-555-5555"},{id:3,name:"Karen Williams",email:"rarenwi@gamil.com",phone:"333-333-3333"}],dispatch:function(e){return t.setState(function(a){return f(a,e)})}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(b.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),v=b.Consumer,y=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).onDeleteClick=function(e,a){a({type:"DELETE_CONTACT",payload:e})},t.contact=e.contact,t.state={showContactInfo:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"onShowClick",value:function(e){this.setState({showContactInfo:!this.state.showContactInfo})}},{key:"render",value:function(){var e=this,a=this.state.showContactInfo,t=this.contact,n=t.id,c=t.name,l=t.email,o=t.phone;return r.a.createElement(v,null,function(t){var i=t.dispatch;return r.a.createElement("div",{className:"card card-body p-2 mb-3"},r.a.createElement("h6",null,c," ",r.a.createElement("i",{onClick:e.onShowClick.bind(e),className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,n,i)})),a?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",l),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)})}}]),a}(n.Component),O=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(v,null,function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,a.map(function(e){return r.a.createElement(y,{key:e.id,contact:e})}))})}}]),a}(n.Component),j=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.phone;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter name...",name:"name",value:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email...",name:"email",value:t})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter phone...",name:"phone",value:n})),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}}]),a}(n.Component),N=(t(15),t(16),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(j,null),r.a.createElement(O,null))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.691647e2.chunk.js.map