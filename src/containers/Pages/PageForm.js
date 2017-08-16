import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Editor from '../../components/wysiwyg';
import TextField from '../../components/TextField';
import Tabs from '../../components/Tabs';
import { savePage } from './actions';

class PageForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      page: props.page,
      id: props.id
    };

    this.savePage = this.savePage.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
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

  handleContentChange = (field, content) => {
    let html = { ...this.state.article.html, [field]: content };
    this.setState({ article: { ...this.state.article, html } });
  };

  savePage() {
    let page = { ...this.state.page, updated_at: Date.now() };
    this.props.savePage(this.state.id, page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page.slug !== this.state.page.slug) {
      this.setState({ page: nextProps.page });
    }
  }

  render() {
    return (
      <div className="">
        <div className="text-right">
          <button onClick={this.savePage} className="btn btn-success">
            Save Page
          </button>
          <br />
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
                  <Editor
                    html={this.state.page.html ? this.state.page.html.en : ''}
                    name="en"
                    onFieldChanged={this.handleContentChange}
                  />
                )
              },
              {
                name: 'zh-cn',
                component: (
                  <Editor
                    html={this.state.page.html ? this.state.page.html['zh-cn'] : ''}
                    name="zn-cn"
                    onFieldChanged={this.handleContentChange}
                  />
                )
              },
              {
                name: 'zh-hk',
                component: (
                  <Editor
                    html={this.state.page.html ? this.state.page.html['zh-hk'] : ''}
                    name="zn-hk"
                    onFieldChanged={this.handleContentChange}
                  />
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
