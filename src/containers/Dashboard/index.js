import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fixTournaments, fixUserData, mergePressData } from '../Data/actions';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">

        {this.props.isAdmin ? <AdminDashboard /> : <UserDashboard />}

        {/*
        <button onClick={this.props.fixTournaments.bind(this)} className="btn btn-default">
          Fix Tournament Data
        </button>
        <button onClick={this.props.mergePressData.bind(this)} className="btn btn-default">
          Merge Press Data
        </button>*/}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    authenticated: store.loginReducer.isAuthenticated,
    isAdmin: store.loginReducer.isAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fixTournaments, fixUserData, mergePressData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
