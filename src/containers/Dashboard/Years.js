import React, { Component } from 'react';
import Tabs from '../../components/Tabs';

import TournamentYears from './TournamentYears';
import OOMYears from './OOMYears';

class Years extends Component {
  render() {
    return (
      <Tabs
        selectedIndex={0}
        tabs={[
          {
            name: 'Tournaments',
            component: <TournamentYears toggleModal={this.props.toggleModal} />
          },
          {
            name: 'Order of Merit',
            component: <OOMYears toggleModal={this.props.toggleModal} />
          }
        ]}
      />
    );
  }
}
export default Years;
