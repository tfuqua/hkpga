import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fixArticles } from '../Data/actions';
import { getArticles, queryArticles, receiveArticle, changePage } from './actions';
import Loader from '../../components/Loader';
import PaginatedTable from '../../components/PaginatedTable';
import ArticleTable from './ArticleTable';

class Articles extends Component {
  constructor(props, context) {
    super(props, context);

    this.changePage = this.changePage.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
  }

  componentDidMount() {
    if (!this.props.query) {
      this.props.queryArticles({ page: 1 });
    }
  }

  fetchArticles(query) {
    this.props.queryArticles(query);
  }

  changePage(page) {
    this.props.changePage(page);
  }

  render() {
    if (this.props.query) {
      return (
        <div className="container-fluid">
          <h2>Articles</h2>
          <PaginatedTable
            isFetching={this.props.isFetching}
            changePage={this.changePage}
            query={this.props.query}
            component={
              <ArticleTable
                receiveArticle={this.props.receiveArticle}
                query={this.props.query}
                results={this.props.results}
              />
            }
          />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    query: store.articleReducer.query,
    results: store.articleReducer.results,
    isFetching: store.articleReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getArticles, fixArticles, queryArticles, receiveArticle, changePage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
