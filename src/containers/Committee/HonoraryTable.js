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
            <HonoraryRow position="Founder" honorary={this.state.honorary.FOUNDER} />
            <HonoraryRow
              position="Permanent Honorary President"
              honorary={this.state.honorary.PERMANENTHONORARYPRESIDENT}
            />
            <HonoraryRow position="Honorary President" honorary={this.state.honorary.HONORARYPRESIDENT} />
            <HonoraryRow position="Honorary Vice President" honorary={this.state.honorary.HONORARYVICEPRESIDENT} />
            <HonoraryRow position="Legal Advisor" honorary={this.state.honorary.LEGALADVISOR} />
            <HonoraryRow position="Advisor (Constitution)" honorary={this.state.honorary.ADVISOR} />
            <HonoraryRow position="Honorary Member" honorary={this.state.honorary.HONORARYMEMBER} />
            <HonoraryRow position="Founder Member" honorary={this.state.honorary.FOUNDERMEMBER} />

          </dl>

        </div>
      );
    } else {
      return null;
    }
  }
}

export default HonoraryTable;
