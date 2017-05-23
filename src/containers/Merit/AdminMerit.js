import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveMerit, getMerit } from './actions';
import MeritForm from './MeritForm';
import Loader from '../../components/Loader';

class AdminMerit extends Component {
  state = {
    data: [['Rank', 'Name', 'Leg 1', 'Leg 2', 'Points']]
  };

  componentDidMount() {
    this.props.getMerit(2017);
  }

  saveMeritTable = data => {
    this.props.saveMerit(data);
  };

  render() {
    return (
      <div className="container-fluid">
        <h2>Order of Merit</h2>
        <div className="hands">
          {this.props.merit ? <MeritForm merit={this.props.merit} /> : <Loader />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    merit: store.meritReducer.merit
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveMerit, getMerit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMerit);
