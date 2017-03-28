import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArticle } from './actions';
import { FormattedDate } from 'react-intl';
import Loader from '../../components/Loader';
import Text from '../../components/Text';

class ArticleView extends Component {
  componentDidMount() {
    if (!this.props.article) {
      this.props.getArticle(this.props.match.params.slug);
    }
  }

  render() {
    if (this.props.article) {
      return (
        <div className="container-fluid news-article">
          <h2><Text text={this.props.article.title} /></h2>
          <h4>
            <FormattedDate
              value={new Date(this.props.article.publish_date)}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </h4>
          <hr />
          <div>
            <Text text={this.props.article.html} />
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
