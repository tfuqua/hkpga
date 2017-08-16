import React, { Component } from 'react';
import TinyMCE from 'react-tinymce';

// TinyMCE Config
let config = {
  branding: false,
  height: 600,
  plugins: 'link lists image code table fullscreen hr',
  menubar: '',
  toolbar:
    'bold italic | styleselect | alignleft aligncenter alignright bullist numlist | table | hr | code | fullscreen ',
  body_class: 'html_editor',
  content_style: 'img {max-width: 100%;}'
};

class Editor extends Component {
  handleEditorChange = e => {
    this.props.onFieldChanged(this.props.name, e.target.getContent());
  };

  render() {
    return (
      <div className="editor">
        <TinyMCE content={this.props.html} config={config} onChange={this.handleEditorChange} />
      </div>
    );
  }
}

export default Editor;
