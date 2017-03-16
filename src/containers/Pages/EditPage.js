import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import config from '../../../config/env/development';
import ReactQuill from 'react-quill';
import Text from '../../components/Text';
import { getPage } from './actions';

class EditArticle extends Component {
  constructor(props, context) {
    super(props, context);
    
  }
  
  componentDidMount(){
    this.props.getPage(this.props.match.params.key);
    //tiny(); //TinyMCE Init
  }
  
  render() {
      if (this.props.page){
        return (
            <div className="container">
                <h2>Edit Page</h2>
                <div className="well">
                  <ReactQuill theme="snow"
                      modules={config.editor.modules}
                      formats={config.editor.formats} className="">
                      
                      <div key="editor"
                        ref="editor"
                        className="quill-contents my-class-name"
                        dangerouslySetInnerHTML={{__html:this.props.page.html.en}}/>

                  </ReactQuill>
                  
                </div>
            </div>
        )
      } else {
        return( <Loader/> ); 
      }   
  }
}

function mapStateToProps(store) {
  return {
      page: store.pageReducer.page,
      isFetching: store.pageReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPage }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);