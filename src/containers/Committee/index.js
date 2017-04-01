import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCommittee, getHonorary } from '../Users/actions';
import CommitteeTable from './CommitteeTable';
import translations from '../../util/translations';
import HonoraryTable from './HonoraryTable';
import Loader from '../../components/Loader';

class Committee extends Component {
  componentDidMount() {
    if (!this.props.committee || !this.props.honorary) {
      this.props.getCommittee();
    }
  }

  render() {
    if (!this.props.isFetching) {
      return (
        <div className="container-fluid">
          <h2>{translations[this.props.lang].COMMITTEE} (2016-2017)</h2>
          <CommitteeTable committee={this.props.committee} />
          <h2>{translations[this.props.lang].HONORARY}</h2>
          <HonoraryTable honorary={this.props.honorary} />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    committee: store.userReducer.committee,
    lang: store.languageReducer.lang,
    honorary: store.userReducer.honorary,
    isFetching: store.userReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCommittee, getHonorary }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Committee);
