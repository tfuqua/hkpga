import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { trueFalse } from '../../util/data';
import TextField from '../../components/TextField';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import Tabs from '../../components/Tabs';
import moment from 'moment';
import Editor from '../../components/wysiwyg';
import { saveArticle } from './actions';

class ArticleForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showCalendar: false,
      article: {
        ...props.article,
        publish_date: props.article.publish_date || Date.now()
      },
      id: props.id
    };

    this.saveArticle = this.saveArticle.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
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
  handleContentChange = (field, content) => {
    let html = { ...this.state.article.html, [field]: content };
    this.setState({ article: { ...this.state.article, html } });
  };
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

  saveArticle() {
    this.props.saveArticle(this.state.id, this.state.article);
  }

  render() {
    return (
      <div className="">
        <div className="text-right">
          <button onClick={this.saveArticle} className="btn btn-primary">
            Save
          </button>
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

        <div className="row">
          <div className="col-xs-6">
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
          </div>
          <div className="col-xs-6">
            <div className="form-group">
              <label>Cover</label>
              <TextField
                showError={this.state.showErrors}
                text={this.state.article.cover}
                onFieldChanged={this.handleFieldChange('cover')}
              />
            </div>
          </div>
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
          <label>Preview</label>
          <Tabs
            selectedIndex={0}
            tabs={[
              {
                name: 'en',
                component: (
                  <TextArea
                    style={{ height: '100px' }}
                    showError={this.state.showErrors}
                    text={this.state.article.description ? this.state.article.description.en : ''}
                    onFieldChanged={this.handleFieldChange('description.en')}
                  />
                )
              },
              {
                name: 'zh-cn',
                component: (
                  <TextArea
                    style={{ height: '100px' }}
                    showError={this.state.showErrors}
                    text={this.state.article.description ? this.state.article.description['zh-cn'] : ''}
                    onFieldChanged={this.handleFieldChange('description.zh-cn')}
                  />
                )
              },
              {
                name: 'zh-hk',
                component: (
                  <TextArea
                    style={{ height: '100px' }}
                    showError={this.state.showErrors}
                    text={this.state.article.description ? this.state.article.description['zh-hk'] : ''}
                    onFieldChanged={this.handleFieldChange('description.zh-hk')}
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
                    html={this.state.article.html ? this.state.article.html.en : ''}
                    name="en"
                    onFieldChanged={this.handleContentChange}
                  />
                )
              },
              {
                name: 'zh-cn',
                component: (
                  <Editor
                    html={this.state.article.html ? this.state.article.html['zh-cn'] : ''}
                    name="zh-cn"
                    onFieldChanged={this.handleContentChange}
                  />
                )
              },
              {
                name: 'zh-hk',
                component: (
                  <Editor
                    html={this.state.article.html ? this.state.article.html['zh-hk'] : ''}
                    name="zh-hk"
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
  return bindActionCreators({ saveArticle }, dispatch);
}

export default connect(null, mapDispatchToProps)(ArticleForm);
