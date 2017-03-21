import React from "react";
import Text from "../../components/Text";

function TournamentTable(props) {
  let data = props.data ? props.data : [];

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((tournament, i) => (
          <tr key={i}>
            <td><Text text={tournament.name} /></td>
            <td>{tournament.year}</td>
            <td><button className="btn btn-default">Edit</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TournamentTable;
