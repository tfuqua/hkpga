import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

function wysiwyg(props) {
  return (
    <div>
      <div className="editor">
        <Editor
          editorState={props.editorState}
          onEditorStateChange={props.onEditorStateChange}
          toolbarClassName="toolbar"
          wrapperClassName="wrapper-medium"
          editorClassName="editor-class"
          toolbar={{
            options: ['inline', 'blockType', 'image', 'list', 'link', 'textAlign'],
            inline: {
              options: ['bold', 'italic', 'underline', 'strikethrough']
            },
            textAlign: { inDropdown: true }
          }}
        />
      </div>
    </div>
  );
}
export default wysiwyg;
