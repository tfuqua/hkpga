import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import Text from '../../components/Text';
import { fixArticles } from '../Data/actions';
import { getArticles } from './actions';

class Articles extends Component {
  constructor(props, context) {
    super(props, context);

  }

  componentDidMount(){
    this.props.getArticles();
  }

  render() {
    if (!this.props.isFetching && this.props.articles){
      return(
        <div className="container">
            <h2>Articles</h2>
                <div className="well">

                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Publish Date</th>
                          <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(this.props.articles).map((key, i) =>
                        <tr key={i}>
                            <td style={{width:'50%'}}><Text text={this.props.articles[key].title}/></td>
                            <td>{this.props.articles[key].author}</td>
                            <td>
                                <FormattedDate
                                value={new Date(this.props.articles[key].updated_at)}
                                year='numeric'
                                month='long'
                                day='2-digit'/>
                            </td>
                            <td><Link className="btn btn-default" to={`/admin/articles/${key}`}>Edit</Link></td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
        </div> 
      );

    } else {
      return( <Loader/> );
    }           
  }
}

function mapStateToProps(store) {
  return {
      articles: store.articleReducer.articles,
      isFetching: store.articleReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getArticles, fixArticles }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Articles);