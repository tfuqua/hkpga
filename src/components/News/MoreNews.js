import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import translations from '../../util/translations';
import { mapObjectToArray } from '../../util/util';
import { getMoreNews } from '../../containers/Articles/actions';
import NewsCard from './NewsCard';

class MoreNews extends Component {
  componentDidMount() {
    this.props.getMoreNews();
  }

  render() {
    if (this.props.moreNews) {
      let news = mapObjectToArray(this.props.moreNews).reverse();
      news.shift();

      return (
        <div className="latest-news">
          <h2>{translations[this.props.lang].MORE_NEWS}</h2>
          <hr />
          {news.map((news, i) => <NewsCard key={i} article={news} />)}
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(store) {
  return {
    lang: store.languageReducer.lang,
    moreNews: store.articleReducer.moreNews
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMoreNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreNews);
