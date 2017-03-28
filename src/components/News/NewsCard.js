import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Text from '../Text';
import { FormattedDate } from 'react-intl';
import translations from '../../util/translations';
import { generatePreview } from '../../util/util';

function NewsCard(props) {
  let article = props.article;

  return (
    <div className="news-card">

      <FormattedDate value={new Date(article.publish_date)} year="numeric" month="long" day="2-digit" />
      <h4> <Text text={article.title} /></h4>

      {article.cover
        ? <div className="row">
            <div className="col-sm-5">
              <img className="cover" src={article.cover} alt={article.slug} />
            </div>
            <div className="col-sm-7">
              <div className="preview">
                <Text text={generatePreview(article.html, 400)} />
              </div>
              <div className="text-right">
                <Link to={`/news/${article.slug}`}>
                  <button type="button" className="btn btn-default">READ_MORE</button>
                </Link>
              </div>
            </div>
          </div>
        : <div className="preview">
            <Text text={generatePreview(article.html, 400)} />
            <div className="text-right">
              <Link to={`/news/${article.slug}`}>
                <button type="button" className="btn btn-default">READ_MORE</button>
              </Link>
            </div>
          </div>}
      <hr />
    </div>
  );
}

export default NewsCard;
