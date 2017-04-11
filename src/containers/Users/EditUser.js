import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import { getUser } from './actions';
import UserForm from './UserForm';

class EditUser extends Component {
  componentDidMount() {
    if (!this.props.user) {
      this.props.getUser(this.props.match.params.key);
    }
  }

  render() {
    if (this.props.user) {
      return (
        <div className="container-fluid">
          <h2>Edit User</h2>
          <UserForm user={this.props.user} id={this.props.match.params.key} />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    user: store.userReducer.user,
    isFetching: store.userReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
