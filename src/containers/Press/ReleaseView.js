import React from 'react';
import { FormattedDate } from 'react-intl';
import { mapObjectToArray } from '../../util/util';
import { sortBy } from 'lodash';
import translations from '../../util/translations';
import Text from '../../components/Text';

function ReleaseView(props) {
  let releases = mapObjectToArray(props.press);
  releases = sortBy(releases, ['publish_date']).reverse();

  return (
    <div className="container-fluid press press-releases-page">
      <h2>{translations[props.lang].PRESS_RELEASES}</h2>
      <br />
      {releases.map((release, i) => (
        <div key={i} className="">
          <h4>
            <FormattedDate value={new Date(release.publish_date)} year="numeric" month="long" day="2-digit" />
          </h4>

          <h4 className="press-title">
            <a target="_blank" href={release.url}>
              <Text text={release.title} />
            </a>
          </h4>
          <hr />

        </div>
      ))}

    </div>
  );
}

export default ReleaseView;
