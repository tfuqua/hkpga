import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTournaments, fixTournaments } from './actions';
import { Link } from 'react-router-dom';
import { getTournamentYears } from '../Dashboard/actions';
import translations from '../../util/translations';
import TournamentRow from './TournamentRow';
import Loader from '../../components/Loader';

class Tournaments extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      year:
        typeof this.props.match.params.year !== 'undefined' ? this.props.match.params.year : new Date().getFullYear(),
      years: []
    };
  }

  componentDidMount() {
    if (this.props.tournaments === undefined) {
      this.props.getTournaments(this.state.year);
    }
    this.props.getTournamentYears().then(years => {
      this.setState({ years });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.year !== this.state.year) {
      this.setState({ year: nextProps.match.params.year });
      this.props.getTournaments(nextProps.match.params.year);
    }
  }

  render() {
    if (!this.props.isFetching && this.props.tournaments) {
      let tournaments = this.props.tournaments;

      return (
        <div className="container-fluid">
          <h2>{translations[this.props.lang].MENU_TOURNAMENTS}</h2>
          <h3>{this.state.year} &nbsp;Schedule</h3>
          <hr />
          <div className="row">
            <div className="col-sm-9">
              {tournaments.map((tournament, i) => <TournamentRow key={i} tournament={tournament} />)}
            </div>
            <div className="col-sm-3 ">
              <div className="archives">
                <h3>Tournaments</h3>
                <ul>
                  {this.state.years.map((year, i) => (
                    <li key={i}>
                      <Link to={`/tournaments/${year}`}>{year}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <h2>Tournaments</h2>
          <Loader />
        </div>
      );
    }
  }
}

function mapStateToProps(store) {
  return {
    tournaments: store.tournamentReducer.tournaments,
    lang: store.languageReducer.lang,
    isFetching: store.tournamentReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTournaments, fixTournaments, getTournamentYears }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);
