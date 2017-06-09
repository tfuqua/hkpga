import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveMerit, getMeritByYear } from './actions';
import MeritForm from './MeritForm';
import Loader from '../../components/Loader';

class MeritView extends Component {
  componentDidMount() {
    this.props.getMeritByYear(this.props.match.params.year);
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Order of Merit - {this.props.match.params.year}</h2>

        {!this.props.isFetching && typeof this.props.merit !== 'undefined'
          ? <MeritForm year={this.props.match.params.year} merit={this.props.merit} />
          : <Loader />}

      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    isFetching: store.meritReducer.isFetching,
    merit: store.meritReducer.meritByYear
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveMerit, getMeritByYear }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MeritView);
