import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { trueFalse } from '../../util/data';
import TextField from '../../components/TextField';
import Select from '../../components/Select';
import moment from 'moment';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { saveArticle } from './actions';

class ArticleForm extends Component {
  constructor(props, context) {
    super(props, context);

    const blocksFromHTML = htmlToDraft(props.article.html.en);
    const contentBlocks = blocksFromHTML.contentBlocks;
    const contentState = ContentState.createFromBlockArray(contentBlocks);
    //const content = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);

    this.state = {
      showCalendar: false,
      article: props.article,
      id: props.id,
      editorState: EditorState.createWithContent(contentState)
    };

    this.saveArticle = this.saveArticle.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
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
      this.setState({ article: { ...this.state.article, [field]: e.target.value } });
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.article.slug !== this.state.article.slug) {
      this.setState({ article: nextProps.article });
    }
  }

  onEditorStateChange(editorState) {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    this.setState({
      editorState,
      article: { ...this.state.article, html: { en: markup } }
    });
  }

  saveArticle() {
    this.props.saveArticle(this.state.id, this.state.article);
  }

  render() {
    return (
      <div className="">

        <div className="text-right">
          <button onClick={this.saveArticle} className="btn btn-default">Save</button>
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

        <div className="form-group">
          <label>Draft</label>
          <Select
            handleChange={this.handleSelectChange('draft')}
            value={this.state.article.draft}
            options={trueFalse}
          />
        </div>

        <div className="editor">
          <Editor editorState={this.state.editorState} onEditorStateChange={this.onEditorStateChange} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveArticle }, dispatch);
}

export default connect(null, mapDispatchToProps)(ArticleForm);
