import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import Tabs from '../../components/Tabs';
import ResultsTable from './ResultsTable';
import { getTournament, getResults } from './actions';

class EditResults extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if (!this.props.results) {
      this.props.getTournament(this.props.match.params.key);
      this.props.getResults(this.props.match.params.key);
    }
  }

  render() {
    if (typeof this.props.results !== 'undefined') {
      let tabs = [];

      Object.keys(this.props.tournament.divisions).map((key, i) => {
        if (this.props.tournament.divisions[key]) {
          tabs.push({
            name: key,
            component: (
              <ResultsTable
                tournament={this.props.tournament}
                results={this.props.results ? this.props.results[key] : {}}
              />
            )
          });
        }
      });

      return (
        <div className="container-fluid">
          <h1>Edit Results</h1>
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
    results: store.tournamentReducer.results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTournament, getResults }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditResults);
