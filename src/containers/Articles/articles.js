import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "../../components/Loader";
import PaginatedTable from "../../components/PaginatedTable";
import ArticleTable from "./ArticleTable";
import { fixArticles } from "../Data/actions";
import { getArticles, queryArticles } from "./actions";

class Articles extends Component {
  constructor(props, context) {
    super(props, context);

    this.fetchArticles = this.fetchArticles.bind(this);
  }

  componentDidMount() {
    //this.props.getArticles();
    this.props.queryArticles({ page: 1 });
  }

  fetchArticles(query) {
    this.props.queryArticles(query);
  }

  render() {
    if (this.props.query) {
      return (
        <div className="container-fluid">
          <h2>Articles</h2>
          <PaginatedTable
            isFetching={this.props.isFetching}
            fetch={this.fetchArticles}
            query={this.props.query}
            component={<ArticleTable />}
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
    isFetching: store.articleReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getArticles, fixArticles, queryArticles },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
