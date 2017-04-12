import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import TournamentForm from './TournamentForm';
import { getTournament } from './actions';

class EditTournament extends Component {
  componentDidMount() {
    if (!this.props.tournament) {
      this.props.getTournament(this.props.match.params.key);
    }
  }

  render() {
    if (this.props.tournament) {
      return (
        <div className="container-fluid">
          <h2>Edit Tournament</h2>
          <TournamentForm id={this.props.match.params.key} tournament={this.props.tournament} />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    tournament: store.tournamentReducer.tournament,
    isFetching: store.tournamentReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTournament }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTournament);
