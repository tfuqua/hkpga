import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import TextField from '../../components/TextField';
import Tabs from '../../components/Tabs';
import { savePage } from './actions';

class PageForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      page: props.page,
      id: props.id,
      editorState: this.setupEditor(props.page)
    };

    this.savePage = this.savePage.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  setupEditor(page) {
    const langs = ['en', 'zh-cn', 'zh-hk'];
    let content = {};

    for (let i = 0; i < langs.length; i++) {
      let html = page.html[langs[i]] ? page.html[langs[i]] : '<div></div>';
      const blocksFromHTML = htmlToDraft(html);
      const contentBlocks = blocksFromHTML.contentBlocks;
      const contentState = ContentState.createFromBlockArray(contentBlocks);
      content[langs[i]] = EditorState.createWithContent(contentState);
    }

    return content;
  }

  handleFieldChange(field) {
    return e => {
      if (field.includes('.')) {
        let arr = field.split('.');
        let page = {
          ...this.state.page[arr[0]],
          [arr[1]]: e.target.value
        };
        this.setState({ page: { ...this.state.page, [arr[0]]: page } });
      } else {
        this.setState({ page: { ...this.state.page, [field]: e.target.value } });
      }
    };
  }

  savePage() {
    let page = { ...this.state.page, updated_at: Date.now() };
    this.props.savePage(this.state.id, page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page.slug !== this.state.page.slug) {
      this.setState({ page: nextProps.page });
    }
  }

  onEditorStateChange(lang, editorState) {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    this.setState({
      editorState: { ...this.state.editorState, [lang]: editorState },
      page: { ...this.state.page, html: { ...this.state.page.html, [lang]: markup } }
    });
  }

  render() {
    return (
      <div className="">

        <div className="text-right">
          <button onClick={this.savePage} className="btn btn-success">Save Page</button><br />
        </div>
        <br />

        <div className="form-group">
          <label>Title</label>
          <Tabs
            selectedIndex={0}
            tabs={[
              {
                name: 'en',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.page.title.en}
                    onFieldChanged={this.handleFieldChange('title.en')}
                  />
                )
              },
              {
                name: 'zh-cn',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.page.title['zh-cn']}
                    onFieldChanged={this.handleFieldChange('title.zh-cn')}
                  />
                )
              },
              {
                name: 'zh-hk',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.page.title['zh-hk']}
                    onFieldChanged={this.handleFieldChange('title.zh-hk')}
                  />
                )
              }
            ]}
          />
        </div>

        <div className="form-group">
          <label>Content</label>
          <Tabs
            selectedIndex={0}
            tabs={[
              {
                name: 'en',
                component: (
                  <div className="editor">
                    <Editor
                      editorState={this.state.editorState.en}
                      onEditorStateChange={this.onEditorStateChange.bind(this, 'en')}
                    />
                  </div>
                )
              },
              {
                name: 'zh-cn',
                component: (
                  <div className="editor">
                    <Editor
                      editorState={this.state.editorState['zh-cn']}
                      onEditorStateChange={this.onEditorStateChange.bind(this, 'zh-cn')}
                    />
                  </div>
                )
              },
              {
                name: 'zh-hk',
                component: (
                  <div className="editor">
                    <Editor
                      editorState={this.state.editorState['zh-hk']}
                      onEditorStateChange={this.onEditorStateChange.bind(this, 'zh-hk')}
                    />
                  </div>
                )
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ savePage }, dispatch);
}

export default connect(null, mapDispatchToProps)(PageForm);
