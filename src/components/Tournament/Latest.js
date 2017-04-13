import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedDate } from 'react-intl';
import { getLatestScores } from '../../containers/Tournaments/actions';
import translations from '../../util/translations';
import Text from '../Text';
import Loader from '../Loader';
import Tabs from '../Tabs';
import ScoreTable from './ScoreTable';

class LatestTournamentScores extends Component {
  componentDidMount() {
    this.props.getLatestScores();
  }

  render() {
    if (this.props.latest) {
      let tabs = [];

      Object.keys(this.props.latest.scores).map((key, i) => {
        if (this.props.latest.scores[key]) {
          tabs.push({
            name: key,
            component: (
              <ScoreTable
                tournament={this.props.latest.tournament}
                scores={this.props.latest.scores ? this.props.latest.scores[key] : {}}
              />
            )
          });
        }
      });

      return (
        <div>
          <h2>{translations[this.props.lang].LATEST_TOURNAMENT_SCORES}</h2>
          <h4>VENUE: <Text text={this.props.latest.tournament.venue} /></h4>
          <h5>
            DATE:&nbsp;
            <FormattedDate
              value={new Date(this.props.latest.tournament.start_date)}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </h5>
          <Tabs tabs={tabs} />
        </div>
      );
    } else {
      return <div><h2>Latest Tournament</h2><Loader /></div>;
    }
  }
}

function mapStateToProps(store) {
  return {
    latest: store.tournamentReducer.latest,
    lang: store.languageReducer.lang
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLatestScores }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestTournamentScores);
