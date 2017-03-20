import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "../../components/Loader";
import PaginatedTable from "../../components/PaginatedTable";
import TournamentTable from "./TournamentTable";
import { getAllTournaments, deleteTournament } from "./actions";

class Tournaments extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.getAllTournaments();
  }

  handleDelete(id) {
    this.props.deleteTournament(id);
  }

  render() {
    if (this.props.tournaments) {
      return (
        <div className="container-fluid">
          <h2>Tournaments</h2>
          {!this.props.isFetching
            ? <div>
                <PaginatedTable
                  data={this.props.tournaments}
                  component={<TournamentTable />}
                />
              </div>
            : <Loader />}
        </div>
      );
    } else {
      return <div />;
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
  return bindActionCreators({ deleteTournament, getAllTournaments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);
