import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllUsers } from '../../containers/Users/actions';
import Listing from './Listing';

class Autocomplete extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      search: ''
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(e) {
    this.setState({ search: e.target.value });
  }
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <div>
        <input type="text" className="form-control" value={this.state.search} onChange={this.handleFieldChange} />
        <Listing items={this.props.users} search={this.state.search} playerChange={this.props.playerChange} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    isFetching: store.userReducer.isFetching,
    users: store.userReducer.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);
