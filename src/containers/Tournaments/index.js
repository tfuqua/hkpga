import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTournaments, fixTournaments } from './actions';
import { mapObjectToArray } from '../../util/util';
import Archives from '../Archives';
import TournamentRow from './TournamentRow';
import Loader from '../../components/Loader';

class Tournaments extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      year: this.props.match.params.year ? this.props.match.params.year : new Date().getFullYear()
    };
  }

  componentDidMount() {
    if (this.props.tournaments === undefined) {
      this.props.getTournaments(this.state.year);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.year !== this.state.year) {
      this.setState({ year: nextProps.match.params.year });
      this.props.getTournaments(nextProps.match.params.year);
    }
  }

  fixData() {
    this.props.fixTournaments();
  }

  render() {
    if (!this.props.isFetching && this.props.tournaments) {
      let tournaments = mapObjectToArray(this.props.tournaments);

      return (
        <div className="container-fluid">
          <h2>Tournaments</h2>
          <h3>{this.state.year} &nbsp;Schedule</h3>
          <hr />
          <div className="row">
            <div className="col-sm-9">
              {tournaments.map((tournament, i) => <TournamentRow key={i} tournament={tournament} />)}
            </div>
            <div className="col-sm-3">
              <Archives type={'tournaments'} link={'/tournaments/'} />
            </div>
          </div>

        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    tournaments: store.tournamentReducer.tournaments,
    isFetching: store.tournamentReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTournaments, fixTournaments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);
