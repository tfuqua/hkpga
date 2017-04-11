import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import PaginatedTable from '../../components/PaginatedTable';
import UserTable from './UserTable';
import { getUsers, receiveUser, changePage } from './actions';

class Pages extends Component {
  constructor(props, context) {
    super(props, context);

    this.changePage = this.changePage.bind(this);
    this.queryUsers = this.queryUsers.bind(this);
  }

  componentDidMount() {
    if (!this.props.query) {
      this.props.getUsers({ page: 1 });
    }
  }

  changePage(page) {
    this.props.changePage(page);
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
            changePage={this.changePage}
            query={this.props.query}
            component={<UserTable results={this.props.results} receiveUser={this.props.receiveUser} />}
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
    results: store.userReducer.results,
    isFetching: store.userReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUsers, receiveUser, changePage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
