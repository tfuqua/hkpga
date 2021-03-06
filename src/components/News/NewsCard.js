import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../Text';
import { FormattedDate } from 'react-intl';
import translations from '../../util/translations';
import { generatePreview } from '../../util/util';

function NewsCard(props) {
  let article = props.article;

  return (
    <div className="news-card">
      <hr />
      <h3> <Text text={article.title} /></h3>
      <FormattedDate value={new Date(article.publish_date)} year="numeric" month="long" day="2-digit" /><br /><br />

      {article.cover
        ? <div className="row">
            <div className="col-sm-5">
              <img className="cover" src={article.cover} alt={article.slug} />
            </div>
            <div className="col-sm-7">
              <div className="preview">
                {article.description && article.description.en !== ''
                  ? <Text text={article.description} />
                  : <Text text={generatePreview(article.html, 400)} />}

              </div>
            </div>
            <div className="col-xs-12 text-right">
              <Link to={`/news/${article.slug}`}>
                <button type="button" className="btn btn-success">{translations[props.lang].READ_MORE}</button>
              </Link>
            </div>
          </div>
        : <div className="row">
            <div className="col-xs-12">
              <div className="preview">
                {article.description && article.description.en !== ''
                  ? <Text text={article.description} />
                  : <Text text={generatePreview(article.html, 400)} />}

              </div>
            </div>
            <div className="col-sm-12 text-right">
              <Link to={`/news/${article.slug}`}>
                <button type="button" className="btn btn-success">{translations[props.lang].READ_MORE}</button>
              </Link>
            </div>
          </div>}
    </div>
  );
}

export default NewsCard;
