import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import PaginatedTable from '../../components/PaginatedTable';
import TournamentTable from './TournamentTable';
import { deleteTournament, queryTournaments, receiveTournament, changePage } from './actions';

class Tournaments extends Component {
  constructor(props, context) {
    super(props, context);

    this.changePage = this.changePage.bind(this);
    this.fetchTournaments = this.fetchTournaments.bind(this);
  }

  componentDidMount() {
    if (!this.props.query) {
      this.props.queryTournaments({ page: 1 });
    }
  }

  handleDelete(id) {
    this.props.deleteTournament(id);
  }

  changePage(page) {
    this.props.changePage(page);
  }

  fetchTournaments(query) {
    this.props.queryTournaments(query);
  }

  render() {
    if (this.props.query) {
      return (
        <div className="container-fluid">
          <h2>Tournaments</h2>
          <PaginatedTable
            isFetching={this.props.isFetching}
            changePage={this.changePage}
            query={this.props.query}
            component={
              <TournamentTable results={this.props.results} receiveTournament={this.props.receiveTournament} />
            }
          />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    query: store.tournamentReducer.query,
    results: store.tournamentReducer.results,
    isFetching: store.tournamentReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTournament, queryTournaments, receiveTournament, changePage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);
