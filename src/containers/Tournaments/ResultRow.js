import React, { Component } from 'react';
import { checkStatus } from './actions';
import Text from '../../components/Text';

class ResultRow extends Component {
  render() {
    let placeholder = checkStatus(this.props.result.status);

    return (
      <tr>
        <td>
          <Text text={this.props.result.name} />
        </td>
        {[...Array(this.props.tournament.no_days)].map(
          (x, i) =>
            this.props.result.rounds ? (
              <td key={i}>{this.props.result.rounds[i + 1] ? this.props.result.rounds[i + 1] : placeholder}</td>
            ) : (
              <td />
            )
        )}
        <td>{placeholder !== '-' ? placeholder : this.props.result.totalScore}</td>
        <td>{placeholder !== '-' ? placeholder : this.props.result.rank}</td>
        <td>{this.props.result.points}</td>
      </tr>
    );
  }
}

export default ResultRow;
