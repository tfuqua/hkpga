import React, { Component } from 'react';
import HonoraryRow from './HonoraryRow';

class HonoraryTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      honorary: this.buildHonoraryMap(props.honorary)
    };
    this.buildHonoraryMap = this.buildHonoraryMap.bind(this);
  }

  buildHonoraryMap(honorary) {
    if (!honorary) {
      return null;
    }
    let formattedHonorary = {};

    Object.keys(honorary).forEach((key, i) => {
      let k = honorary[key].honorary;
      let tempArr = formattedHonorary[k];

      if (tempArr) {
        tempArr.push(honorary[key]);
      } else {
        tempArr = [honorary[key]];
      }
      formattedHonorary[k] = tempArr;
    });

    return formattedHonorary;
  }

  render() {
    if (this.state.honorary) {
      return (
        <div>
          <dl className="dl-horizontal">
            <HonoraryRow position="FOUNDER" honorary={this.state.honorary.FOUNDER} />
            <HonoraryRow
              position="PERMANENT_HONORARY_PRESIDENT"
              honorary={this.state.honorary.PERMANENTHONORARYPRESIDENT}
            />
            <HonoraryRow position="HONORARY_PRESIDENT" honorary={this.state.honorary.HONORARYPRESIDENT} />
            <HonoraryRow position="HONORARY_VICE_PRESIDENT" honorary={this.state.honorary.HONORARYVICEPRESIDENT} />
            <HonoraryRow position="LEGAL_ADVISOR" honorary={this.state.honorary.LEGALADVISOR} />
            <HonoraryRow position="ADVISOR" honorary={this.state.honorary.ADVISOR} />
            <HonoraryRow position="ADVISOR_CONSTITUTION" honorary={this.state.honorary.ADVISORCONSTITUTION} />
            <HonoraryRow position="HONORARY_MEMBER" honorary={this.state.honorary.HONORARYMEMBER} />
            <HonoraryRow position="FOUNDER_MEMBER" honorary={this.state.honorary.FOUNDERMEMBER} />

          </dl>

        </div>
      );
    } else {
      return null;
    }
  }
}

export default HonoraryTable;
