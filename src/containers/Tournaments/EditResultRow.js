import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteResult, checkStatus } from './actions';
import Text from '../../components/Text';

class EditResultRow extends Component {
  constructor(props, context) {
    super(props, context);

    this.deleteEntry = this.deleteEntry.bind(this);
  }
  deleteEntry() {
    this.props.deleteResult(this.props.tournament, this.props.result, this.props.id, this.props.division);
  }

  render() {
    let placeholder = checkStatus(this.props.result.status);
    return (
      <tr>
        <td>
          <Text text={this.props.result.name} />
        </td>
        {this.props.result.rounds
          ? [...Array(this.props.tournament.no_days)].map((x, i) => (
              <td key={i}>{this.props.result.rounds[i + 1] ? this.props.result.rounds[i + 1] : placeholder}</td>
            ))
          : [...Array(this.props.tournament.no_days)].map((x, i) => <td key={i} />)}

        <td>{placeholder !== '-' ? placeholder : this.props.result.totalScore}</td>
        <td>{placeholder !== '-' ? placeholder : this.props.result.rank}</td>
        <td>{this.props.result.points}</td>
        <td>
          <div className="btn-group">
            <button className="btn btn-default" onClick={this.props.editEntry.bind(this, this.props.result)}>
              Edit&nbsp;<i className="fa fa-edit" />
            </button>
            <button className="btn btn-default" onClick={this.deleteEntry}>
              Delete&nbsp;<i className="fa fa-trash" />
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteResult }, dispatch);
}
export default connect(null, mapDispatchToProps)(EditResultRow);
