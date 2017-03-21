import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "../../components/Loader";
import PaginatedTable from "../../components/PaginatedTable";
import TournamentTable from "./TournamentTable";
import { deleteTournament, queryTournaments } from "./actions";

class Tournaments extends Component {
  constructor(props, context) {
    super(props, context);

    this.fetchTournaments = this.fetchTournaments.bind(this);
  }

  componentDidMount() {
    this.props.queryTournaments({ page: 1 });
  }

  handleDelete(id) {
    this.props.deleteTournament(id);
  }

  fetchTournaments(query) {
    this.props.queryTournaments(query);
  }

  render() {
    console.log(this.props);

    if (this.props.query) {
      return (
        <div className="container-fluid">
          <h2>Tournaments</h2>
          <PaginatedTable
            isFetching={this.props.isFetching}
            fetch={this.fetchTournaments}
            query={this.props.query}
            component={<TournamentTable />}
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
    isFetching: store.tournamentReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTournament, queryTournaments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);
