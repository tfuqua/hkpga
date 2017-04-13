import React from 'react';
import routeLoader from '../../util/routeLoader';

function StaticMeritView(props) {
  const StaticMerit = routeLoader(() => import(`./old/${props.year}`));

  return (
    <div>
      <StaticMerit lang={props.lang} />
    </div>
  );
}

export default StaticMeritView;
