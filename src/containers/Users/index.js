import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import Loader from '../../components/Loader';
import PaginatedTable from '../../components/PaginatedTable';
import UserTable from './UserTable';
import { getUsers, receiveUser } from './actions';

class Pages extends Component {
  constructor(props, context) {
    super(props, context);

    this.queryUsers = this.queryUsers.bind(this);
  }

  componentDidMount() {
    this.props.getUsers({ page: 1 });
  }

  queryUsers(query) {
    this.props.getUsers(query);
  }

  render() {
    if (this.props.query) {
      return (
        <div className="container-fluid">
          <h2>Users</h2>
          <PaginatedTable
            isFetching={this.props.isFetching}
            fetch={this.queryUsers}
            query={this.props.query}
            component={<UserTable receiveUser={this.props.receiveUser} />}
          />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    query: store.userReducer.userQuery,
    isFetching: store.userReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUsers, receiveUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
