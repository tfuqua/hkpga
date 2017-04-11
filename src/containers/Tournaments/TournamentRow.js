import React from 'react';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';

function TournamentRow(props) {
  return (
    <div>
      <h5>
        <i className="fa fa-calendar" />&nbsp;
        <FormattedDate value={new Date(props.tournament.start_date)} year="numeric" month="long" day="2-digit" />
        <br />
      </h5>
      <h4>
        <Link to={`/tournaments/${props.tournament.year}/${props.tournament.id}`}>
          <Text text={props.tournament.name} />
        </Link>
      </h4>

      <div>
        Venue: <Text text={props.tournament.venue} />
      </div>
      {props.tournament.tee_off ? <a href={props.tournament.tee_off}> Tee Times</a> : null}

      <hr />
    </div>
  );
}
export default TournamentRow;
