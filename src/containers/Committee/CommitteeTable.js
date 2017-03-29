import React, { Component } from 'react';
import CommitteeRow from './CommitteeRow';

class CommitteeTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      committee: this.buildCommitteeMap(props.committee)
    };
    this.buildCommitteeMap = this.buildCommitteeMap.bind(this);
  }

  buildCommitteeMap(committee) {
    if (!committee) {
      return null;
    }
    let formattedCommittee = {};

    Object.keys(committee).forEach((key, i) => {
      let k = committee[key].committee;
      let tempArr = formattedCommittee[k];

      if (tempArr) {
        tempArr.push(committee[key]);
      } else {
        tempArr = [committee[key]];
      }
      formattedCommittee[k] = tempArr;
    });

    return formattedCommittee;
  }

  render() {
    if (this.state.committee) {
      return (
        <div>
          <dl className="dl-horizontal">
            <CommitteeRow position="Chairman" committee={this.state.committee.CHAIRPERSON} />
            <CommitteeRow position="Vice Chairman" committee={this.state.committee.VICECHAIRPERSON} />
            <CommitteeRow position="Captain of Open Division" committee={this.state.committee.CAPTAINOPEN} />
            <CommitteeRow position="Vice Captain of Open Division" committee={this.state.committee.VICECAPTAINOPEN} />
            <CommitteeRow position="Senior Captain" committee={this.state.committee.CAPTAINSENIOR} />
            <CommitteeRow position="Vice Senior Captain" committee={this.state.committee.VICECAPTAINSENIOR} />
            <CommitteeRow position="Ladies Captain" committee={this.state.committee.CAPTAINLADIES} />
            <CommitteeRow position="Vice Ladies Captain" committee={this.state.committee.VICECAPTAINLADIES} />
            <CommitteeRow position="Honorary Treasurer" committee={this.state.committee.TREASURER} />
          </dl>

        </div>
      );
    } else {
      return null;
    }
  }
}

export default CommitteeTable;
