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

              {Object.keys(this.props.merit).map((key, i) =>
                <MeritTable division={key} data={this.props.merit[key]} />
              )}

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
