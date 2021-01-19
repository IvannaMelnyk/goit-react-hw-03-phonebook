(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(1),c=n.n(o),r=n(10),i=n.n(r),s=(n(18),n(12)),l=n(4),u=n(5),h=n(7),m=n(6),d=n(2),p=n.n(d),b=function(t){var e=t.contacts,n=t.onRemove;return Object(a.jsx)("ul",{className:p.a.list,children:e.map((function(t){var e=t.id,o=t.name,c=t.phone;return Object(a.jsxs)("li",{className:p.a.listItem,children:[Object(a.jsx)("span",{className:p.a.listItemText,children:o}),Object(a.jsxs)("span",{className:p.a.listItemText,children:[":",c]}),Object(a.jsx)("button",{className:p.a.btn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},f=n(11),j=n(21),C=n(3),v=n.n(C),O={name:"",phone:""},x=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state=O,t.handleChangeForm=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(f.a)({},a,o))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,o=n.phone,c=t.props.onAdd;t.validateForm()&&(c({id:Object(j.a)(),name:a,phone:o}),t.resetForm())},t.validateForm=function(){var e=t.state,n=e.name,a=e.phone,o=t.props.onCheckUnique;return n&&a?o(n):(alert("Some filed is empty"),!1)},t.resetForm=function(){return t.setState(O)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(a.jsxs)("form",{className:v.a.form,onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("input",{className:v.a.input,type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChangeForm}),Object(a.jsx)("input",{className:v.a.input,type:"tel",name:"phone",placeholder:"Enter phone",value:n,onChange:this.handleChangeForm}),Object(a.jsx)("button",{className:v.a.button,type:"submit",children:"Add Contact"})]})}}]),n}(o.Component),g=n(9),_=n.n(g),F=function(t){var e=t.filter,n=t.onChange;return Object(a.jsxs)("label",{className:_.a.label,children:["Find contacts",Object(a.jsx)("input",{className:_.a.input,type:"text",name:"filter",value:e,onChange:function(t){var e=t.target;return n(e.value)},placeholder:"Enter name for Search"})]})},y=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",phone:"459-12-56"},{id:"id-2",name:"Hermione Kline",phone:"443-89-12"},{id:"id-3",name:"Eden Clements",phone:"645-17-79"},{id:"id-4",name:"Annie Copeland",phone:"227-91-26"}],filter:""},t.handleAddContact=function(e){return t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(s.a)(n),[e])}}))},t.handleCheckUniqueContact=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("Contact is already exist"),!n},t.handleRemoveContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){return t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount");var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){console.log("componentDidUpdate"),this.state.contacts!==e.contacts&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u0438\u0441\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Form Conract"}),Object(a.jsx)(x,{onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUniqueContact}),Object(a.jsx)("h2",{children:"Contacts List"}),Object(a.jsx)(F,{filter:t,onChange:this.handleFilterChange}),Object(a.jsx)(b,{contacts:e,onRemove:this.handleRemoveContact})]})}}]),n}(o.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={list:"ContactList_list__1aGNT",listItem:"ContactList_listItem__dpgqV",listItemText:"ContactList_listItemText__3cF5_",btn:"ContactList_btn__1Q4Nh"}},3:function(t,e,n){t.exports={form:"ContactForm_form__2tsZh",input:"ContactForm_input__njVIP",button:"ContactForm_button__qK93A"}},9:function(t,e,n){t.exports={label:"Filter_label__3xJGW",input:"Filter_input__2XxAA"}}},[[19,1,2]]]);
//# sourceMappingURL=main.6746ec30.chunk.js.map