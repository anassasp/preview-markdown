(this["webpackJsonppreview-markdown"]=this["webpackJsonppreview-markdown"]||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(5),r=t(6),i=t(2),s=t(9),o=t(8),c=t(1),d=t.n(c),l=t(7),h=t.n(l),u=t(3),b=t.n(u),j=t.p+"static/media/logo.6ce24c58.svg",m=(t(14),t(0)),f="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo](".concat(j,")\n");b.a.setOptions({breaks:!0,gfm:!0});var v=new b.a.Renderer,w=function(e){return Object(m.jsxs)("div",{className:"menubar",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"Logo"}),e.title]}),Object(m.jsx)("button",{children:"X"})]})},p=function(e){return Object(m.jsx)("textarea",{className:"text editor",onChange:e.onChange,children:e.text})},x=function(e){return Object(m.jsx)("div",{dangerouslySetInnerHTML:{__html:b()(e.text,{renderer:v})},className:"text preview",id:"preview"})},O=function(e){Object(s.a)(t,e);var n=Object(o.a)(t);function t(e){var r;return Object(a.a)(this,t),(r=n.call(this,e)).state={input:f},r.handleChange=r.handleChange.bind(Object(i.a)(r)),r}return Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h1",{className:"title",children:"Markdown Previewer"}),Object(m.jsxs)("div",{className:"container editor",children:[Object(m.jsx)(w,{title:"Editor"}),Object(m.jsx)(p,{text:this.state.input,onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"container preview",children:[Object(m.jsx)(w,{title:"Preview"}),Object(m.jsx)(x,{text:this.state.input})]})]})}}]),t}(d.a.Component);h.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b2bdb572.chunk.js.map