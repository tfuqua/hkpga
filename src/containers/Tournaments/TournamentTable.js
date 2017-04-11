import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';

function TournamentTable(props) {
  let tournaments = props.results ? props.results : [];

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tournaments.map((tournament, i) => (
          <tr key={i}>
            <td><Text text={tournament.name} /></td>
            <td>{tournament.year}</td>
            <td>
              <Link to={`/admin/tournaments/${tournament.id}`}>
                <button onClick={() => props.receiveTournament(tournament)} className="btn btn-default">Edit</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TournamentTable;
