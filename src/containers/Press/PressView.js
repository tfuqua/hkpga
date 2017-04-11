import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import MagazineView from './MagazineView';
import ReleaseView from './ReleaseView';
import CoverageView from './CoverageView';
import { getPressByType } from './actions';

class Press extends Component {
  componentDidMount() {
    this.props.getPressByType(this.props.match.params.type);
  }

  componentWillReceiveProps(nextProps) {
    this.props.getPressByType(nextProps.match.params.type);
  }

  render() {
    let type = this.props.match.params.type;

    if (!this.props.isFetching && this.props.press) {
      if (type === 'magazine') {
        return <MagazineView lang={this.props.lang} press={this.props.press} />;
      } else if (type === 'releases') {
        return <ReleaseView lang={this.props.lang} press={this.props.press} />;
      } else {
        return <CoverageView lang={this.props.lang} press={this.props.press} />;
      }
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    press: store.pressReducer.press,
    lang: store.languageReducer.lang,
    isFetching: store.pressReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPressByType }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Press);
