import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import PaginatedTable from '../../components/PaginatedTable';
import UserTable from './UserTable';
import { getUsers, receiveUser, changePage, searchUsers } from './actions';

class Pages extends Component {
  state = {
    search: 'test'
  };

  componentDidMount() {
    if (!this.props.query) {
      this.props.getUsers({ page: 1, search: this.state.search });
    }
  }

  changePage = page => {
    this.props.changePage(page);
  };

  searchUsers = e => {
    this.setState({ search: e.target.value });
    this.props.searchUsers(e.target.value);
  };

  render() {
    if (this.props.query) {
      return (
        <div className="container-fluid">
          <h2>Users</h2>
          <input
            style={{ width: '250px' }}
            className={`form-control`}
            placeholder="Search Users"
            value={this.state.search}
            onChange={this.searchUsers}
          />
          <hr />

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
  return bindActionCreators({ getUsers, receiveUser, changePage, searchUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
