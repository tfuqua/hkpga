import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHomePageMerit } from '../../containers/Merit/actions';
import Loader from '../Loader';
import MeritTable from './MeritTable';

class OrderOfMerit extends Component {
  componentDidMount() {
    this.props.getHomePageMerit(new Date().getFullYear());
  }

  render() {
    return (
      <div>
        <h2>Order of Merit</h2>

        {this.props.merit
          ? <div>
              <MeritTable division="Open" data={this.props.merit.open} />
              <MeritTable division="Senior" data={this.props.merit.senior} />
              <MeritTable division="Ladies" data={this.props.merit.ladies} />
              <MeritTable division="Super Senior" data={this.props.merit.super} />
            </div>
          : <Loader />}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    merit: store.meritReducer.homeMerit
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getHomePageMerit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderOfMerit);
