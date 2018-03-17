import React from 'react';
import { sortResults } from '../../util/util';
import ResultRow from './ResultRow';
import Loader from '../../components/Loader';

function ResultsTable(props) {
  let results = sortResults(props.scores);

  if (props.isFetching) {
    return <Loader />;
  } else {
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
            {results.map((result, i) => <ResultRow key={i} tournament={props.tournament} result={result} />)}
            {results.length === 0 ? (
              <tr>
                <td className="text-center" colSpan="100%">
                  No Scores have been entered for this tournament
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ResultsTable;
