import React from 'react';
import ReactDOM from 'react-dom';
import marked from "marked";
import logo from './logo.svg';
import './App.css';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo](${logo})
`;

marked.setOptions({
  breaks: true,
  gfm: true
});

const renderer = new marked.Renderer();

const Menubar = (props) => {
  return(
    <div className="menubar">
      <p><span>Logo</span>{props.title}</p>
      <button>X</button>
    </div>
  )
}

const Editor = (props) => {
  return (
    <textarea className="text editor" onChange={props.onChange}>{props.text}</textarea>
  )
}

const Preview = props => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.text, { renderer: renderer })
      }}
      className="text preview" id="preview"
    />
  );
};

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: placeholder,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      input: event.target.value,
    })
    
  }

  render(){
    return (
      <div className="wrapper">
        <h1 className="title">Markdown Previewer</h1>
        <div className="container editor">
          <Menubar title = 'Editor' />
          <Editor text = {this.state.input} onChange={this.handleChange} />
        </div>

        <div className="container preview">
          <Menubar title = 'Preview' />
          <Preview text = {this.state.input} />
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);