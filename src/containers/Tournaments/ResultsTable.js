import React from 'react';
import { sortResults } from '../../util/util';
import EditResultRow from './EditResultRow';

function ResultsTable(props) {
  let results = sortResults(props.results);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            {[...Array(props.tournament.no_days)].map((x, i) => <th key={i}>Round {i + 1}</th>)}
            <th>Total Score</th>
            <th>Rank</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, i) => <EditResultRow key={i} tournament={props.tournament} result={result} />)}
        </tbody>
      </table>
      <pre>
        {JSON.stringify(props.results, null, ' ')}
      </pre>
    </div>
  );
}

export default ResultsTable;
