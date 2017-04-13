import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteResult } from './actions';
import Text from '../../components/Text';

class ResultRow extends Component {
  render() {
    return (
      <tr>
        <td><Text text={this.props.result.name} /></td>
        {[...Array(this.props.tournament.no_days)].map((x, i) => <td key={i}>{this.props.result.rounds[i + 1]}</td>)}
        <td>{this.props.result.totalScore}</td>
        <td>{this.props.result.rank}</td>
        <td>{this.props.result.points}</td>
      </tr>
    );
  }
}

export default ResultRow;
