import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllUsers } from '../Users/actions';
import Loader from '../../components/Loader';
import ProListing from './ProListing';

class Pros extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    if (this.props.users) {
      return (
        <div className="container-fluid">
          <h2>PROFESSIONALS' DIRECTORY</h2>
          <ProListing pros={this.props.users} />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    users: store.userReducer.users,
    isFetching: store.userReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pros);
