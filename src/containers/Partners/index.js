import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllUsers } from '../Users/actions';
import Loader from '../../components/Loader';

class Partners extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    if (this.props.users) {
      return (
        <div className="container-fluid">
          <h2>PARTNERS</h2>

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

export default connect(mapStateToProps, mapDispatchToProps)(Partners);
