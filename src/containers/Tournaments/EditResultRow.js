import React from 'react';
import Text from '../../components/Text';

function EditResultRow(props) {
  return (
    <tr>
      <td><Text text={props.result.name} /></td>
      {[...Array(props.tournament.no_days)].map((x, i) => <td key={i}>{props.result.rounds[i + 1]}</td>)}
      <td>{props.result.totalScore}</td>
      <td>{props.result.rank}</td>
      <td>{props.result.points}</td>
    </tr>
  );
}
export default EditResultRow;
