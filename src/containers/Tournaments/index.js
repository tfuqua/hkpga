import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Text from '../../components/Text';
import { connect } from 'react-redux';
import { getTournaments, fixTournaments } from './actions';
import Archives from '../Archives';
import Loader from '../../components/Loader';

class Tournaments extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      year: this.props.match.params.year ? this.props.match.params.year : new Date().getFullYear()
    };
    this.fixData = this.fixData.bind(this);
  }

  componentDidMount() {
    if (this.props.tournaments === undefined) this.props.getTournaments(this.state.year);
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
      return (
        <div className="container-fluid">
          <h2>Tournaments</h2>
          <ul>
            {Object.keys(this.props.tournaments).map((key, i) => (
              <li key={i}>
                <Text text={this.props.tournaments[key].name} />
              </li>
            ))}
          </ul>

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
