import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Text from '../Text';
import { FormattedDate } from 'react-intl';
import translations from '../../util/translations';
import { generatePreview } from '../../util/util';
import { getLatestArticle } from '../../containers/Articles/actions';

class LatestNews extends Component {
  componentDidMount() {
    this.props.getLatestArticle();
  }

  render() {
    if (this.props.article) {
      let article = this.props.article[Object.keys(this.props.article)[0]];

      return (
        <div className="latest-news">
          <h2>{translations[this.props.lang].LATEST_NEWS}</h2>
          <hr />

          <div className="article">
            <h3> <Text text={article.title} /></h3>
            <h5>
              <FormattedDate value={new Date(article.publish_date)} year="numeric" month="long" day="2-digit" />
            </h5>
            {article.cover
              ? <div className="row">
                  <div className="col-md-5 col-sm-4">
                    <img className="cover" src={article.cover} alt={article.slug} />
                  </div>
                  <div className="col-md-7 col-sm-8">
                    <div className="preview">
                      {article.description && article.description.en !== ''
                        ? <Text text={article.description} />
                        : <Text text={generatePreview(article.html, 500)} />}

                      <br />
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="text-right">
                      <Link to={`/news/${article.slug}`}>
                        <button type="button" className="btn btn-success">
                          {translations[this.props.lang].READ_MORE}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              : null}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

function mapStateToProps(store) {
  return {
    lang: store.languageReducer.lang,
    article: store.articleReducer.latestArticle
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLatestArticle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestNews);
