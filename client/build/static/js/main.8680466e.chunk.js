(this["webpackJsonpmern-stack"]=this["webpackJsonpmern-stack"]||[]).push([[0],{42:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(34),A=a.n(r),s=(a(42),a(16)),o=Object(n.createContext)(),i=Object(n.createContext)(),l=a(0),u=function(e){var t=e.title,a=e.icon,c=Object(n.useContext)(o),r=Object(n.useContext)(i),A=c.user,u=c.logout,j=c.isAuthenticated,d=r.clearContacts,p=Object(l.jsxs)(n.Fragment,{children:[Object(l.jsxs)("li",{children:["Hello ",A&&A.name]}),Object(l.jsx)("li",{children:Object(l.jsxs)("a",{onClick:function(){u(),d()},href:"#!",children:[Object(l.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(l.jsx)("span",{className:"hide-sm",children:"Logout"})]})})]}),g=Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/login",children:"Login"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/register",children:"Register"})})]});return Object(l.jsxs)("nav",{style:{display:"flex"},className:"navbar bg-primary",children:[Object(l.jsxs)("h1",{children:[Object(l.jsx)("i",{className:a}),t]}),Object(l.jsx)("ul",{children:j?p:g})]})};u.defaultProps={title:"Project Header"};var j=u,d=Object(n.createContext)();var p=function(){var e=Object(n.useContext)(d),t=Object(n.useContext)(i),a=e.alerts,c=e.setAlert,r=t.requestResponse,A=t.clearResponseResponse;return Object(n.useEffect)((function(){r&&(c(r.message,r.type),A())}),[r]),a.length>0&&a.map((function(e){return Object(l.jsxs)("div",{className:"alert alert-".concat(e.type),children:[Object(l.jsx)("i",{className:"fas fa-info-circle"}),e.message]},e.id)}))},g=a(3),h=a(10),C=a.n(h),B=function(e){e?C.a.defaults.headers.common["x-auth-token"]=e:delete C.a.defaults.headers.common["x-auth-token"]},E=a(5),b=a.n(E),O=a(12),x=a(9),m=a(2),f="GET_CONTACT",w="CLEAR_CONTACT",Q="ADD_CONTACT",I="DELETE_CONTACT",y="SET_CURRENT",F="CLEAR_CURRENT",G="UPDATE_CONTACT",R="FILTER_CONTACTS",D="CLEAR_FILTER",U="CONTACT_ERROR",S="SET_ALERT",v="REMOVE_ALERT",k="REGISTER_SUCCESS",N="REGISTER_FAIL",Y="USER_LOADED",M="AUTH_ERROR",H="LOGIN_SUCCESS",L="LOGIN_FAIL",K="LOGOUT",J="CLEAR_ERRORS",Z="CLEAR_REQUEST_RESPONSE",T=function(e,t){switch(t.type){case Y:return Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0,loading:!1,user:t.payload});case H:case k:return localStorage.setItem("token",t.payload.token),Object(m.a)(Object(m.a)(Object(m.a)({},e),t.payload),{},{isAuthenticated:!0,loading:!1});case L:case N:case M:case K:return localStorage.removeItem("token"),Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!1,loading:!1,user:null,error:t.payload});case J:return{error:null};default:return e}},W=function(e){var t={token:localStorage.getItem("token"),user:null,isAuthenticated:null,loading:!0,error:null},a=Object(n.useReducer)(T,t),c=Object(x.a)(a,2),r=c[0],A=c[1],s=function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&B(localStorage.token),e.prev=1,e.next=4,C.a.get("api/v1/auth");case 4:t=e.sent,A({type:Y,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),A({type:M});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(O.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,C.a.post("api/v1/users",t,a);case 4:n=e.sent,A({type:k,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),A({type:N,payload:e.t0.response.data.message});case 11:s();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(O.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,C.a.post("api/v1/auth",t,a);case 4:n=e.sent,A({type:H,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),A({type:L,payload:e.t0.response.data.message});case 11:s();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(o.Provider,{value:{token:r.token,isAuthenticated:r.isAuthenticated,loading:r.loading,error:r.error,user:r.user,loadUser:s,registerUser:i,clearError:function(){A({type:J})},logout:function(){A({type:K})},loginUser:u},children:e.children})},q=a(19),P=function(e,t){switch(t.type){case f:return Object(m.a)(Object(m.a)({},e),{},{contacts:t.payload,loading:!1});case Q:return Object(m.a)(Object(m.a)({},e),{},{contacts:[t.payload].concat(Object(q.a)(e.contacts)),requestResponse:{message:"Contact Added",type:"success"},loading:!1});case I:return Object(m.a)(Object(m.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==t.payload})),requestResponse:{message:"Contact Deleted",type:"success"},loading:!1});case G:return Object(m.a)(Object(m.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id===t.payload._id?t.payload:e})),requestResponse:{message:"Contact Deleted",type:"success"},loading:!1});case w:return Object(m.a)(Object(m.a)({},e),{},{contacts:null,current:null,filtered:null,error:null});case R:return Object(m.a)(Object(m.a)({},e),{},{filtered:e.contacts.filter((function(e){var a=new RegExp("".concat(t.payload),"gi");return e.name.match(a)||e.email.match(a)||e.phone.match(a)}))});case F:return Object(m.a)(Object(m.a)({},e),{},{current:null});case D:return Object(m.a)(Object(m.a)({},e),{},{filtered:null});case Z:return Object(m.a)(Object(m.a)({},e),{},{requestResponse:null});case y:return Object(m.a)(Object(m.a)({},e),{},{current:t.payload});case U:return Object(m.a)(Object(m.a)({},e),{},{error:t.payload});default:return e}},V=function(e){var t=Object(n.useReducer)(P,{contacts:null,current:null,filtered:null,error:null,requestResponse:null}),a=Object(x.a)(t,2),c=a[0],r=a[1],A=function(){var e=Object(O.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,C.a.post("api/v1/contacts",t,a);case 4:n=e.sent,r({type:Q,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:U,payload:e.t0.response.data.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(O.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,C.a.put("api/v1/contacts/".concat(t._id),t,a);case 4:r({type:G,payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r({type:U,payload:e.t0.response.data.message});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("api/v1/contacts");case 3:t=e.sent,r({type:f,payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r({type:U,payload:e.t0.response.data.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.delete("api/v1/contacts/".concat(t));case 3:r({type:I,payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),r({type:U,payload:e.t0.response.data.message});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(i.Provider,{value:{contacts:c.contacts,current:c.current,filtered:c.filtered,error:c.error,requestResponse:c.requestResponse,addContact:A,deleteContact:u,updateContact:s,clearCurrent:function(){r({type:F})},setCurrent:function(e){r({type:y,payload:e})},filterContact:function(e){r({type:R,payload:e})},clearContact:function(){r({type:D})},getContacts:o,clearContacts:function(){r({type:w})},clearResponseResponse:function(){r({type:Z})}},children:e.children})},z=function(e,t){switch(t.type){case S:return[].concat(Object(q.a)(e),[t.payload]);case v:return e.filter((function(e){return e.id!==t.payload}));default:return e}},X=a(71),_=function(e){var t=Object(n.useReducer)(z,[]),a=Object(x.a)(t,2),c=a[0],r=a[1];return Object(l.jsx)(d.Provider,{value:{alerts:c,setAlert:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,n=Object(X.a)();r({type:S,payload:{message:e,type:t,id:n}}),setTimeout((function(){r({type:v,payload:n})}),a)}},children:e.children})},$=a(14),ee=function(e){var t=e.contact,a=Object(n.useContext)(i),c=a.deleteContact,r=a.setCurrent,A=a.clearCurrent,s=t.name,o=t._id,u=t.email,j=t.phone,d=t.type;return Object(l.jsxs)("div",{className:"card bg-light",children:[Object(l.jsxs)("h3",{className:"text-primary text-left",children:[s," ",Object(l.jsx)("span",{style:{float:"right",textTransform:"capitalize"},className:"badge "+("professional"===d?"badge-success":"badge-primary"),children:d})]}),Object(l.jsxs)("ul",{className:"list",children:[u&&Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"fas fa-envelope-open"})," ",u]}),j&&Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"fas fa-phone"})," ",j]})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("button",{onClick:function(){return r(t)},className:"btn btn-dark btn-sm",children:"Edit"}),Object(l.jsx)("button",{onClick:function(){A(),c(o)},className:"btn btn-danger btn-sm",children:"Delete"})]})]})};ee.prototype={contact:a.n($).a.object.isRequired};var te=ee,ae={width:"200px",margin:"auto",display:"block"},ne=function(){return Object(l.jsx)(n.Fragment,{children:Object(l.jsx)("img",{src:"data:image/gif;base64,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",alt:"loading",style:ae})})},ce=function(){var e=Object(n.useContext)(i),t=e.contacts,a=e.filtered,c=e.getContacts,r=e.loading;return Object(n.useEffect)((function(){c()}),[]),null===t||0!==t.length||r?Object(l.jsx)(n.Fragment,{children:null!==t&!r?Object(l.jsx)(l.Fragment,{children:a?a.map((function(e){return Object(l.jsx)(te,{contact:e},e._id)})):t.map((function(e){return Object(l.jsx)(te,{contact:e},e._id)}))}):Object(l.jsx)(ne,{})}):Object(l.jsx)("h4",{children:"Please add a contact"})},re=a(13),Ae=function(){var e=Object(n.useContext)(i),t=e.addContact,a=e.current,c=e.clearCurrent,r=e.updateContact,A=Object(n.useState)({name:"",email:"",phone:"",type:"personal"}),s=Object(x.a)(A,2),o=s[0],u=s[1];Object(n.useEffect)((function(){u(a||{name:"",email:"",phone:"",type:"personal"})}),[e,a]);var j=o.name,d=o.email,p=o.phone,g=o.type,h=function(e){return u(Object(m.a)(Object(m.a)({},o),{},Object(re.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a?(r(o),c()):j&&(t(o),u({name:"",email:"",phone:"",type:"personal"}))},children:[Object(l.jsx)("h2",{className:"text-primary",children:a?"Edit Contact":"Add Contact"}),Object(l.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:j,onChange:h}),Object(l.jsx)("input",{type:"email",placeholder:"Email",name:"email",value:d,onChange:h}),Object(l.jsx)("input",{type:"text",placeholder:"Phone Number",name:"phone",value:p,onChange:h}),Object(l.jsx)("h5",{children:"Contact Type"}),Object(l.jsx)("input",{type:"radio",name:"type",value:"personal",checked:"personal"===g,onChange:h})," Personal"," ",Object(l.jsx)("input",{type:"radio",name:"type",value:"professional",checked:"professional"===g,onChange:h})," Professional"," ",Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{style:{display:"flex"},children:[Object(l.jsx)("input",{type:"submit",className:"btn btn-block ".concat(a?"btn-success":"btn-primary"),value:a?"Update Contact":"Add Contact"}),a&&Object(l.jsx)("input",{type:"button",onClick:function(){return c()},className:"btn btn-danger btn-block",value:"Cancel"})]})})]})},se=function(){var e=Object(n.useContext)(i),t=e.clearContact,a=e.filterContact,c=e.filtered,r=Object(n.useRef)(null);Object(n.useEffect)((function(){null===c&&(r.current.value="")}));return Object(l.jsx)("form",{children:Object(l.jsx)("input",{ref:r,type:"text",placeholder:"Filter Contacts...",onChange:function(e){""===r.current.value?t():a(e.target.value)}})})},oe=function(){var e=Object(n.useContext)(o).loadUser;return Object(n.useEffect)((function(){e()}),[]),Object(l.jsxs)("div",{className:"grid-2",children:[Object(l.jsx)("div",{children:Object(l.jsx)(Ae,{})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(se,{}),Object(l.jsx)(ce,{})]})]})},ie=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"About This App"}),Object(l.jsx)("p",{className:"my-1",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit"}),Object(l.jsxs)("p",{className:"bg-dark p",children:[Object(l.jsx)("strong",{children:"Version: "})," 1.0.0"]})]})},le=function(e){var t=Object(n.useContext)(d),a=Object(n.useContext)(o),c=t.setAlert,r=a.registerUser,A=a.error,s=a.clearError,i=a.isAuthenticated;Object(n.useEffect)((function(){i&&e.history.push("/"),"User already exists"===A&&(c(A,"danger"),s())}),[A,e.history,i]);var u=Object(n.useState)({name:"",email:"",password:"",password2:""}),j=Object(x.a)(u,2),p=j[0],g=j[1],h=p.name,C=p.email,B=p.password,E=p.password2,b=function(e){return g(Object(m.a)(Object(m.a)({},p),{},Object(re.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("div",{className:"form-container",children:[Object(l.jsxs)("h1",{children:["Account ",Object(l.jsx)("span",{className:"text-primary",children:"Register"})]}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h&&C&&B&&E?B!==E?c("Passwords do not match","danger"):B.length<6?c("Passwords too short","danger"):r({name:h,email:C,password:B}):c("Please enter all fields","danger")},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{required:!0,type:"text",name:"name",value:h,onChange:b})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email"}),Object(l.jsx)("input",{required:!0,type:"email",name:"email",value:C,onChange:b})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{autoComplete:"off",minLength:"6",required:!0,type:"password",name:"password",value:B,onChange:b})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Confirm Password"}),Object(l.jsx)("input",{autoComplete:"off",minLength:"6",required:!0,type:"password",name:"password2",value:E,onChange:b})]}),Object(l.jsx)("input",{type:"submit",value:"Register",className:"btn btn-primary btn-block"})]})]})},ue=function(e){var t=Object(n.useContext)(d),a=Object(n.useContext)(o),c=t.setAlert,r=a.loginUser,A=a.error,s=a.clearError,i=a.isAuthenticated,u=Object(n.useState)({email:"",password:""}),j=Object(x.a)(u,2),p=j[0],g=j[1],h=p.email,C=p.password;Object(n.useEffect)((function(){i&&e.history.push("/"),"Invalid Credentials"===A&&(c(A,"danger"),s())}),[A,e.history,i]);var B=function(e){return g(Object(m.a)(Object(m.a)({},p),{},Object(re.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("div",{className:"form-container",children:[Object(l.jsxs)("h1",{children:["Account ",Object(l.jsx)("span",{className:"text-primary",children:"Login"})]}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h&&C?r({email:h,password:C}):c("Please enter all fields","danger")},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email"}),Object(l.jsx)("input",{type:"email",name:"email",required:!0,value:h,onChange:B})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{autoComplete:"off",type:"password",name:"password",required:!0,value:C,onChange:B})]}),Object(l.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary btn-block"})]})]})},je=a(37),de=function(e){var t=e.component,a=Object(je.a)(e,["component"]),c=Object(n.useContext)(o),r=c.loading,A=c.isAuthenticated;return Object(l.jsx)(g.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return A||r?Object(l.jsx)(t,Object(m.a)({},e)):Object(l.jsx)(g.a,{to:"/login"})}}))};localStorage.token&&B(localStorage.token);var pe=function(){return Object(l.jsx)(W,{children:Object(l.jsx)(V,{children:Object(l.jsx)(_,{children:Object(l.jsx)(s.a,{children:Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)(j,{icon:"fa fa-id-card-alt",title:"Contact Keeper"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(p,{}),Object(l.jsxs)(g.d,{children:[Object(l.jsx)(de,{exact:!0,path:"/",component:oe}),Object(l.jsx)(g.b,{exact:!0,path:"/about",component:ie}),Object(l.jsx)(g.b,{exact:!0,path:"/register",component:le}),Object(l.jsx)(g.b,{exact:!0,path:"/login",component:ue})]})]})]})})})})})},ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,A=t.getTTFB;a(e),n(e),c(e),r(e),A(e)}))};A.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(pe,{})}),document.getElementById("root")),ge()}},[[69,1,2]]]);
//# sourceMappingURL=main.8680466e.chunk.js.map