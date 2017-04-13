import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import Tabs from '../../components/Tabs';
import { FormattedDate } from 'react-intl';
import Text from '../../components/Text';
import ResultsTable from '../Tournaments/ResultsTable';
import { getTournament, getResults } from '../Tournaments/actions';

class Tournament extends Component {
  componentDidMount() {
    if (!this.props.tournament) {
      this.props.getTournament(this.props.match.params.key);
    }
    this.props.getResults(this.props.match.params.key);
  }

  render() {
    if (this.props.tournament) {
      let tournament = this.props.tournament;

      let tabs = [];

      Object.keys(tournament.divisions).map((key, i) => {
        if (tournament.divisions[key]) {
          tabs.push({
            name: key,
            component: (
              <ResultsTable
                isFetching={this.props.isFetching}
                tournament={tournament}
                scores={this.props.scores ? this.props.scores[key] : {}}
              />
            )
          });
        }
      });

      return (
        <div className="container-fluid">
          <div className="title">
            <h2><Text text={tournament.name} /></h2>
            <h3><FormattedDate value={new Date(tournament.start_date)} year="numeric" month="long" day="2-digit" /></h3>
            <h5><Text text={tournament.venue} /></h5>
          </div>
          <hr />

          <Tabs tabs={tabs} />
        </div>
      );
    } else {
      return <div><Loader /></div>;
    }
  }
}

function mapStateToProps(store) {
  return {
    tournament: store.tournamentReducer.tournament,
    scores: store.tournamentReducer.scoring,
    isFetching: store.tournamentReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTournament, getResults }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
