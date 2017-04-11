import React from 'react';
import { FormattedDate } from 'react-intl';
import { mapObjectToArray } from '../../util/util';
import { sortBy } from 'lodash';
import translations from '../../util/translations';
import Text from '../../components/Text';

function CoverageView(props) {
  let coverage = mapObjectToArray(props.press);
  coverage = sortBy(coverage, ['publish_date']).reverse();

  return (
    <div className="container-fluid">
      <h2>{translations[props.lang].MEDIA_COVERAGE}</h2>

      <div className="row">
        {coverage.map((cov, i) => (
          <div key={i} className="col-sm-6">
            <FormattedDate value={new Date(cov.publish_date)} year="numeric" month="long" day="2-digit" />
            <h4><Text text={cov.title} /></h4>
            <h5><Text text={cov.publication} /></h5>
            <hr />
            <a target="_blank" href={cov.url}>
              <img alt="magazine" src={cov.cover} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoverageView;
