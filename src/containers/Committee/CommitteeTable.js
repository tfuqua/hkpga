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
            <CommitteeRow position="CHAIRMAN" committee={this.state.committee.CHAIRPERSON} />
            <CommitteeRow position="VICE_CHAIRMAN" committee={this.state.committee.VICECHAIRPERSON} />
            <CommitteeRow position="CAPTAIN_OPEN" committee={this.state.committee.CAPTAINOPEN} />
            <CommitteeRow position="VICE_CAPTAIN_OPEN" committee={this.state.committee.VICECAPTAINOPEN} />
            <CommitteeRow position="SENIOR_CAPTAIN" committee={this.state.committee.CAPTAINSENIOR} />
            <CommitteeRow position="VICE_SENIOR_CAPTAIN" committee={this.state.committee.VICECAPTAINSENIOR} />
            <CommitteeRow position="LADIES_CAPTAIN" committee={this.state.committee.CAPTAINLADIES} />
            <CommitteeRow position="VICE_LADIES_CAPTAIN" committee={this.state.committee.VICECAPTAINLADIES} />
            <CommitteeRow position="HONORARY_TREASURER" committee={this.state.committee.TREASURER} />
          </dl>

        </div>
      );
    } else {
      return null;
    }
  }
}

export default CommitteeTable;
