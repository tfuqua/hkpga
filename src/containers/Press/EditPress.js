import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPressEntry } from './actions';
import PressForm from './PressForm';
import Loader from '../../components/Loader';

class EditPress extends Component {
  componentDidMount() {
    if (!this.props.entry) {
      this.props.getPressEntry(this.props.match.params.key);
    }
  }

  render() {
    if (this.props.entry) {
      return (
        <div className="container-fluid">
          <h2>Edit Press</h2>
          <PressForm entry={this.props.entry} id={this.props.match.params.key} />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    entry: store.pressReducer.entry,
    isFetching: store.pressReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPressEntry }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPress);
