import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>Dashboard</h2>
        <div className="well">
          <div className="btn-group">
            <Link to="/admin/pages" className="btn btn-default">
              Create a Page
            </Link>
            <Link to="/admin/tournaments" className="btn btn-default">
              Create a Tournament
            </Link>
            <Link to="/admin/articles" className="btn btn-default">
              Write an Article
            </Link>
            <Link to="/admin/press" className="btn btn-default">
              Create A Press Release
            </Link>
            <Link to="/admin/users" className="btn btn-default">
              Manage Users
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
