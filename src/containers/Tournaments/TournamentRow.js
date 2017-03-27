import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';

function TournamentRow(props) {
  return (
    <div>
      <h5>
        <Link to={`/tournaments/${props.tournament.year}/${props.tournament.id}`}>
          <Text text={props.tournament.name} />
        </Link>
      </h5>

    </div>
  );
}
export default TournamentRow;
