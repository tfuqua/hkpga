import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import MagazineView from './MagazineView';
import ReleaseView from './ReleaseView';
import CoverageView from './CoverageView';
import { getPressByType } from './actions';

class Press extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      type: this.props.match.params.type
    };
  }

  componentDidMount() {
    this.props.getPressByType(this.state.type);
  }

  render() {
    if (!this.props.isFetching && this.props.press) {
      if (this.state.type === 'magazine') {
        return <MagazineView lang={this.props.lang} press={this.props.press} />;
      } else if (this.state.type === 'release') {
        //return <MagazineView press={this.props.press} />
      } else {
        //return <MagazineView press={this.props.press} />
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
