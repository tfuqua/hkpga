import React from 'react';
import { FormattedDate } from 'react-intl';
import { mapObjectToArray } from '../../util/util';
import { sortBy } from 'lodash';
import translations from '../../util/translations';
import Text from '../../components/Text';

function MagazineView(props) {
  let magazines = mapObjectToArray(props.press);
  magazines = sortBy(magazines, ['publish_date']).reverse();

  return (
    <div className="container-fluid magazines">
      <h2>{translations[props.lang].HKPGA_MAGAZINE}</h2>

      {magazines.map((magazine, i) => (
        <div key={i} className="col-sm-6 mag">
          <h4><FormattedDate value={new Date(magazine.publish_date)} year="numeric" /></h4>
          <h4>Issue: <FormattedDate value={new Date(magazine.publish_date)} month="long" /></h4>
          <h4><Text text={magazine.title} /></h4>
          <hr />
          <a target="_blank" href={magazine.url}>
            <img alt="magazine" src={magazine.cover} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default MagazineView;
