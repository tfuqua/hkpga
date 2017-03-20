import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import config from '../../../config/env/development';
import { saveArticle } from './actions';

class ArticleForm extends Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = {
      showCalendar: false,
      article: props.article,
      id: props.id
    }

    this.saveArticle = this.saveArticle.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  
  handleDateChange(date){
    this.setState({article: {...this.state.article, publish_date: moment(date).valueOf()}});
  }
  
  handleFieldChange(field, content){
    
    let newState = {...this.state.article, [field['en']]: content};

    console.log(newState);
  }

  saveArticle(){
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
                    focused={this.state.showCalendar}
                    numberOfMonths={1}
                    isOutsideRange={() => false} 
                    onDateChange={this.handleDateChange}
                    onFocusChange={({ focused }) => { this.setState({ showCalendar: focused })}} />
                </div>

                <ReactQuill theme="snow"
                    onChange={this.handleFieldChange.bind(this, 'html')}
                    name="html.en"
                    modules={config.editor.modules}
                    formats={config.editor.formats}
                    value={this.state.article.html.en}/>
            </div>
        );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveArticle }, dispatch)
}

export default connect(null, mapDispatchToProps)(ArticleForm);