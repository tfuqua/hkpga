import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getArticle } from "./actions";
import Loader from "../../components/Loader";
import ArticleForm from "./ArticleForm";

class EditArticle extends Component {
  componentDidMount() {
    this.props.getArticle(this.props.match.params.key);
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.match.params.key);
    console.log(nextProps.match.params.key);
  }

  render() {
    if (this.props.article) {
      return (
        <div className="container-fluid">
          <h2>Edit Article</h2>

          <ArticleForm
            article={this.props.article}
            id={this.props.match.params.key}
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
    article: store.articleReducer.article,
    isFetching: store.articleReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getArticle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
