import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import Text from '../../../components/Text';
import { getArticles } from '../../Articles/actions';

class Articles extends Component {

  componentDidMount(){
    this.props.getArticles();
  }

  render() {
    if (this.props.articles){
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
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(this.props.articles).map((key, i) =>
                        <tr key={i}>
                            <td><Text text={this.props.articles[key].title}/></td>
                            <td>{this.props.articles[key].author}</td>
                            <td><FormattedDate value={new Date(this.props.articles[key].publish_date)}/></td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
        </div> 
      );

    } else {
      return(<div></div>);
    }           
  }
}

function mapStateToProps(store) {
  return {
      articles: store.articleReducer.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getArticles }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Articles);