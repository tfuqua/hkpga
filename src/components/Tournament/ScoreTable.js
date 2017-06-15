import React from 'react';
import { sortResults } from '../../util/util';
import Text from '../Text';

function ScoreTable(props) {
  let results = sortResults(props.scores).slice(0, 10);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, i) =>
            <tr key={i}>
              <td>{result.rank}</td>
              <td><Text text={result.name} /></td>
              <td>{result.totalScore}</td>
            </tr>
          )}
          {results.length === 0
            ? <tr>
                <td className="text-center" colSpan="100%">No Scores have been entered for this tournament</td>
              </tr>
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default ScoreTable;
