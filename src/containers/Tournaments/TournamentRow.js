import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import { receiveTournament } from './actions';
import Text from '../../components/Text';

class TournamentRow extends Component {
  render() {
    return (
      <div>
        <h5>
          <i className="fa fa-calendar" />&nbsp;
          <FormattedDate value={new Date(this.props.tournament.start_date)} year="numeric" month="long" day="2-digit" />
          <br />
        </h5>
        <h4>
          <Link
            onClick={() => this.props.receiveTournament(this.props.tournament)}
            to={`/tournaments/${this.props.tournament.year}/${this.props.tournament.id}`}>
            <Text text={this.props.tournament.name} />
          </Link>
        </h4>
        <div>
          Venue: <Text text={this.props.tournament.venue} />
        </div>

        <ul className="no-padding">
          {this.props.tournament.tee_off ? <li><a href={this.props.tournament.tee_off}> Tee Times</a></li> : null}
          {this.props.tournament.rules_url ? <li><a href={this.props.tournament.rules_url}> Rules </a></li> : null}
        </ul>

        <div>
          <span className="divisions">Divisions:</span>&nbsp;
          {Object.keys(this.props.tournament.divisions).map(
            (k, i) =>
              this.props.tournament.divisions[k]
                ? <span key={i} className="label tournament-label label-primary">{k}</span>
                : null
          )}
        </div>
        <br />

        <hr />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ receiveTournament }, dispatch);
}

export default connect(null, mapDispatchToProps)(TournamentRow);
