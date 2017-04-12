import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import Tabs from '../../components/Tabs';
import EditResultsTable from './EditResultsTable';
import { getTournament, getResults } from './actions';

class EditResults extends Component {
  componentDidMount() {
    if (!this.props.results) {
      this.props.getTournament(this.props.match.params.key);
      this.props.getResults(this.props.match.params.key);
    }
  }

  render() {
    if (typeof this.props.scores !== 'undefined') {
      let tabs = [];

      Object.keys(this.props.tournament.divisions).map((key, i) => {
        if (this.props.tournament.divisions[key]) {
          tabs.push({
            name: key,
            component: (
              <EditResultsTable
                tournament={this.props.tournament}
                id={this.props.match.params.key}
                division={key}
                scores={this.props.scores ? this.props.scores[key] : {}}
              />
            )
          });
        }
      });

      return (
        <div className="container-fluid">
          <h2>Edit Results</h2>
          <br />
          <Tabs tabs={tabs} />
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
    scores: store.tournamentReducer.scoring
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTournament, getResults }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditResults);
