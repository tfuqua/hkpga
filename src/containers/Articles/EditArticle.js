import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import Text from '../../components/Text';
import { getArticle } from './actions';

class EditArticle extends Component {
  constructor(props, context) {
    super(props, context);
    
    console.log(props);
  }
  
  componentDidMount(){
    this.props.getArticle(this.props.match.params.key);
  }

  render() {
      if (this.props.article){
        return (
            <div className="container">
                <h2>Edit Article</h2>
                <div className="well">
                    <pre>
                    {JSON.stringify(this.props.article, null, ' ')}
                    </pre>
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
      article: store.articleReducer.article,
      isFetching: store.articleReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getArticle }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);