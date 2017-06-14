import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import PaginatedTable from '../../components/PaginatedTable';
import Select from '../../components/Select';
import UserTable from './UserTable';
import { prosFilter } from '../../util/data';
import { getUsers, receiveUser, changePage, searchUsers } from './actions';

class Pages extends Component {
  state = {
    search: '',
    category: ''
  };

  componentDidMount() {
    if (!this.props.query) {
      this.props.getUsers({ page: 1, search: this.state.search });
    }
  }

  handleSelectChange = e => {
    let state = { ...this.state, category: e.target.value };
    this.setState(state);
    this.props.searchUsers(state);
  };

  changePage = page => {
    this.props.changePage(page);
  };

  searchUsers = e => {
    let state = { ...this.state, search: e.target.value };
    this.setState(state);
    this.props.searchUsers(state);
  };

  render() {
    if (this.props.query) {
      return (
        <div className="container-fluid">
          <h2>Users</h2>

          <div className="row">
            <div className="col-sm-3">
              <label>Search</label>
              <input
                className={`form-control`}
                placeholder="Search Users"
                value={this.state.search}
                onChange={this.searchUsers}
              />
            </div>

            <div className="col-sm-3 ">
              <label>Filter By Category:</label>
              <Select handleChange={this.handleSelectChange} options={prosFilter} value={this.state.category} />
            </div>

          </div>
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
