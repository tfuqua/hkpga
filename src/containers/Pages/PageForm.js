import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { trueFalse } from '../../util/data';
import TextField from '../../components/TextField';
import Tabs from '../../components/Tabs';
import Select from '../../components/Select';
import moment from 'moment';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { saveArticle } from './actions';

class PageForm extends Component {
  constructor(props, context) {
    super(props, context);

    const blocksFromHTML = htmlToDraft(props.page.html.en);
    const contentBlocks = blocksFromHTML.contentBlocks;
    const contentState = ContentState.createFromBlockArray(contentBlocks);

    this.state = {
      showCalendar: false,
      page: props.page,
      id: props.id,
      editorState: EditorState.createWithContent(contentState)
    };

    console.log(this.state);

    this.handleDateChange = this.handleDateChange.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
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
  handleDateChange(date) {
    this.setState({ page: { ...this.state.page, publish_date: moment(date).valueOf() } });
  }
  handleSelectChange(field) {
    return e => {
      this.setState({ page: { ...this.state.page, [field]: e.target.value } });
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.page.slug !== this.state.page.slug) {
      this.setState({ page: nextProps.page });
    }
  }

  onEditorStateChange(editorState) {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    this.setState({
      editorState,
      page: { ...this.state.page, html: { en: markup } }
    });
  }

  saveArticle() {
    this.props.saveArticle(this.state.id, this.state.article);
  }

  render() {
    return (
      <div className="">

        <div className="text-right" />

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

export default connect(null, mapDispatchToProps)(PageForm);
