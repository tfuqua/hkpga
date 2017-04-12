import React, { Component } from 'react';
import { sortResults } from '../../util/util';
import EditResultRow from './EditResultRow';

class EditResultsTable extends Component {
  render() {
    let results = sortResults(this.props.scores);

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              {[...Array(this.props.tournament.no_days)].map((x, i) => <th key={i}>Round {i + 1}</th>)}
              <th>Total Score</th>
              <th>Rank</th>
              <th>Points</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, i) => (
              <EditResultRow
                key={i}
                division={this.props.division}
                id={this.props.id}
                tournament={this.props.tournament}
                result={result}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EditResultsTable;
