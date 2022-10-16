(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),l=t(4),o=t.n(l),r=(t(9),t(2)),n=(t(10),t(0));function i(e){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(n.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-a","aria-current":"page",href:"#",children:"Home"})})}),Object(n.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(n.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(n.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function d(e){var a=Object(c.useState)(""),t=Object(r.a)(a,2),s=t[0],l=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(n.jsx)("h1",{className:"mb-4",children:e.heading}),Object(n.jsx)("div",{className:"mb-3",children:Object(n.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){l(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(n.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var a=s.toUpperCase();l(a),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(n.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var a=s.toLowerCase();l(a),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(n.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){l(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(n.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(s),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(n.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var a=s.split(/[ ]+/);l(a.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(n.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(n.jsx)("h2",{children:"Your text summary"}),Object(n.jsxs)("p",{children:[s.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",s.length," characters"]}),Object(n.jsxs)("p",{children:[.008*s.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(n.jsx)("h2",{children:"Preview"}),Object(n.jsx)("p",{children:s.length>0?s:"Nothing to preview!"})]})]})}function b(e){var a={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white"};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:"About Us"}),Object(n.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(n.jsxs)("div",{className:"accordion-item",children:[Object(n.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(n.jsx)("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(n.jsx)("strong",{children:"Analyze Your text "})})}),Object(n.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(n.jsx)("div",{className:"accordion-body",style:a,children:"Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or"})})]}),Object(n.jsxs)("div",{className:"accordion-item",children:[Object(n.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(n.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(n.jsx)("strong",{children:"Free to use "})})}),Object(n.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(n.jsx)("div",{className:"accordion-body",style:a,children:"TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."})})]}),Object(n.jsxs)("div",{className:"accordion-item",children:[Object(n.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(n.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(n.jsx)("strong",{children:"Browser Compatible "})})}),Object(n.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(n.jsx)("div",{className:"accordion-body",style:a,children:"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc."})})]}),Object(n.jsxs)("div",{className:"accordion-item",children:[Object(n.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(n.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(n.jsx)("b",{children:"Bhanu"})})}),Object(n.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(n.jsx)("div",{className:"accordion-body",children:Object(n.jsx)("img",{src:"bhanu.jpeg",className:"img-thumbnail",alt:";;;"})})})]}),Object(n.jsxs)("div",{className:"accordion-item",children:[Object(n.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(n.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(n.jsx)("b",{children:"Chetan"})})}),Object(n.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(n.jsx)("div",{className:"accordion-body",children:Object(n.jsx)("img",{src:"babu.jpeg",className:"img-thumbnail",alt:";;;"})})})]}),Object(n.jsxs)("div",{className:"accordion-item",children:[Object(n.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(n.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(n.jsx)("b",{children:"Dheeraj"})})}),Object(n.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(n.jsx)("div",{className:"accordion-body",children:Object(n.jsx)("img",{src:"dheeraj.jpeg",className:"img-thumbnail",alt:";;;"})})})]}),Object(n.jsxs)("div",{className:"accordion-item",children:[Object(n.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(n.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(n.jsx)("b",{children:"Sai"})})}),Object(n.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(n.jsx)("div",{className:"accordion-body",children:Object(n.jsx)("img",{src:"sai.jpeg",className:"img-thumbnail",alt:";;;"})})})]})]})]})}i.defaultProps={title:"Set title here",aboutText:"About"};var h=function(e){return Object(n.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(n.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(n.jsx)("strong",{children:function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})};var j=function(){var e=Object(c.useState)("light"),a=Object(r.a)(e,2),t=a[0],s=a[1],l=Object(c.useState)(null),o=Object(r.a)(l,2),j=o[0],m=o[1],p=function(e,a){m({msg:e,type:a}),setTimeout((function(){m(null)}),1500)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i,{title:"TextUtils",mode:t,toggleMode:function(){"light"===t?(s("dark"),document.body.style.backgroundColor="#042743",p("Dark mode has been enabled","success")):(s("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"))}},new Date),Object(n.jsx)(h,{alert:j}),Object(n.jsxs)("div",{className:"container my-3",children:[Object(n.jsx)(d,{showAlert:p,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:t}),Object(n.jsx)(b,{mode:t})]})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,l=a.getLCP,o=a.getTTFB;t(e),c(e),s(e),l(e),o(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),m()},9:function(e,a,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.a383f6fe.chunk.js.map