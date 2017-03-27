import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import { SingleDatePicker } from 'react-dates';
import { trueFalse } from '../../util/data';
import TextField from '../../components/TextField';
import Tabs from '../../components/Tabs';
import Select from '../../components/Select';
import moment from 'moment';
import config from '../../../config/env/development';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { saveArticle } from './actions';

class ArticleForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showCalendar: false,
      article: props.article,
      id: props.id,
      editorState: EditorState.createEmpty()
    };

    this.onChange = editorState => this.setState({ editorState });
    this.saveArticle = this.saveArticle.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
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
  onEditorChange(editorContent) {
    this.setState({
      editorContent
    });
  }
  onEditorStateChange(editorState) {
    this.setState({
      editorState
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
          <label>Draft</label>
          <Select
            handleChange={this.handleSelectChange('draft')}
            value={this.state.article.draft}
            options={trueFalse}
          />
        </div>

        <div className="">

          <Editor
            editorState={this.state.editorState}
            onEditorStateChange={this.onEditorStateChange}
            onChange={this.onChange}
          />
          {/*
          <Tabs
            selectedIndex={0}
            tabs={[
              {
                name: 'en',
                component: (
                  <ReactQuill
                    theme="snow"
                    onChange={this.handleHTMLChange('name.en')}
                    modules={config.editor.modules}
                    formats={config.editor.formats}
                    value={this.state.article.html.en}
                  />
                )
              },
              {
                name: 'zh-cn',
                component: (
                  <ReactQuill
                    theme="snow"
                    onChange={this.handleHTMLChange('name.zh-cn')}
                    modules={config.editor.modules}
                    formats={config.editor.formats}
                    value={this.state.article.html['zh-cn']}
                  />
                )
              },
              {
                name: 'zh-hk',
                component: (
                  <ReactQuill
                    theme="snow"
                    onChange={this.handleHTMLChange('name.zh-hk')}
                    modules={config.editor.modules}
                    formats={config.editor.formats}
                    value={this.state.article.html['zh-hk']}
                  />
                )
              }
            ]}
          />*/}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveArticle }, dispatch);
}

export default connect(null, mapDispatchToProps)(ArticleForm);
