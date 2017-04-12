import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { trueFalse } from '../../util/data';
import TextField from '../../components/TextField';
import Select from '../../components/Select';
import Tabs from '../../components/Tabs';
import moment from 'moment';
//import { Editor } from 'react-draft-wysiwyg';
import Editor from '../../components/wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { saveArticle } from './actions';

class ArticleForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showCalendar: false,
      article: props.article,
      id: props.id,
      editorState: this.setupEditor(props.article)
    };

    this.saveArticle = this.saveArticle.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  setupEditor(article) {
    const langs = ['en', 'zh-cn', 'zh-hk'];
    let content = {};

    for (let i = 0; i < langs.length; i++) {
      if (article.html[langs[i]]) {
        const blocksFromHTML = htmlToDraft(article.html[langs[i]]);
        const contentBlocks = blocksFromHTML.contentBlocks;
        const contentState = ContentState.createFromBlockArray(contentBlocks);
        content[langs[i]] = EditorState.createWithContent(contentState);
      } else {
        content[langs[i]] = EditorState.createEmpty();
      }
    }

    return content;
  }

  handleFieldChange(field) {
    return e => {
      if (field.includes('.')) {
        let arr = field.split('.');
        let article = {
          ...this.state.article[arr[0]],
          [arr[1]]: e.target.value
        };
        this.setState({ article: { ...this.state.article, [arr[0]]: article } });
      } else {
        this.setState({ article: { ...this.state.article, [field]: e.target.value } });
      }
    };
  }
  handleDateChange(date) {
    this.setState({ article: { ...this.state.article, publish_date: moment(date).valueOf() } });
  }

  handleSelectChange(field) {
    return e => {
      let val = e.target.field;
      if (e.target.value === 'false') val = false;
      if (e.target.value === 'true') val = true;

      this.setState({ article: { ...this.state.article, [field]: val } });
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.article.slug !== this.state.article.slug) {
      this.setState({
        article: nextProps.article,
        editorState: this.setupEditor(nextProps.article)
      });
    }
  }

  onEditorStateChange(lang, editorState) {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    this.setState({
      editorState: { ...this.state.editorState, [lang]: editorState },
      article: { ...this.state.article, html: { ...this.state.article.html, [lang]: markup } }
    });
  }

  saveArticle() {
    this.props.saveArticle(this.state.id, this.state.article);
  }

  render() {
    return (
      <div className="">

        <div className="text-right">
          <button onClick={this.saveArticle} className="btn btn-primary">Save</button>
        </div>

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
                    text={this.state.article.title.en}
                    onFieldChanged={this.handleFieldChange('title.en')}
                  />
                )
              },
              {
                name: 'zh-cn',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.article.title['zh-cn']}
                    onFieldChanged={this.handleFieldChange('title.zh-cn')}
                  />
                )
              },
              {
                name: 'zh-hk',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.article.title['zh-hk']}
                    onFieldChanged={this.handleFieldChange('title.zh-hk')}
                  />
                )
              }
            ]}
          />
        </div>

        <div className="form-group">
          <label>Publish Date</label>
          <SingleDatePicker
            id="publishDate"
            withPortal={true}
            date={moment(this.state.article.publish_date)}
            initialVisibleMonth={() => moment(this.state.article.publish_date)}
            focused={this.state.showCalendar}
            numberOfMonths={1}
            isOutsideRange={() => false}
            onDateChange={this.handleDateChange}
            onFocusChange={({ focused }) => {
              this.setState({ showCalendar: focused });
            }}
          />
        </div>

        <div className="form-group">
          <label>Cover</label>
          <TextField
            showError={this.state.showErrors}
            text={this.state.article.cover}
            onFieldChanged={this.handleFieldChange('cover')}
          />
        </div>

        <div className="row">
          <div className="col-xs-6">
            <div className="form-group">
              <label>Draft</label>
              <Select
                handleChange={this.handleSelectChange('draft')}
                value={this.state.article.draft}
                options={trueFalse}
              />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="form-group">
              <label>Internal</label>
              <Select
                handleChange={this.handleSelectChange('internal')}
                value={this.state.article.internal}
                options={trueFalse}
              />
            </div>
          </div>
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
                    editorState={this.state.editorState.en}
                    onEditorStateChange={this.onEditorStateChange.bind(this, 'en')}
                  />
                )
              },
              {
                name: 'zh-cn',
                component: (
                  <Editor
                    editorState={this.state.editorState['zh-cn']}
                    onEditorStateChange={this.onEditorStateChange.bind(this, 'zh-cn')}
                  />
                )
              },
              {
                name: 'zh-hk',
                component: (
                  <Editor
                    editorState={this.state.editorState['zh-hk']}
                    onEditorStateChange={this.onEditorStateChange.bind(this, 'zh-hk')}
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
  return bindActionCreators({ saveArticle }, dispatch);
}

export default connect(null, mapDispatchToProps)(ArticleForm);
