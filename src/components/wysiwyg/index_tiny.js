import React, { Component } from 'react';
import TinyMCE from 'react-tinymce';

class Editor extends Component {
  handleEditorChange = e => {
    console.log('Content was updated:', e.target.getContent());
  };

  render() {
    return (
      <TinyMCE
        content="<p>This is the initial content of the editor</p>"
        config={{
          plugins: 'link image code hr',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code hr'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}
export default Editor;
