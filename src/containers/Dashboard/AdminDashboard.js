import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Feedback from '../Feedback';
import Years from './Years';
import Modal from '../../components/Modal';

class AdminDashboard extends Component {
  state = {
    showYears: false
  };

  render() {
    return (
      <div className="container-fluid">
        <h2>Dashboard</h2>
        <div className="wells">
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
            <button onClick={() => this.setState({ showYears: true })} className="btn btn-default">
              Manage Years
            </button>
          </div>
        </div>

        <hr />
        <Feedback />

        <Modal
          toggleModal={() => this.setState({ showYears: false })}
          isOpen={this.state.showYears}
          title="Manage Years">
          <Years toggleModal={() => this.setState({ showYears: false })} />
        </Modal>
      </div>
    );
  }
}

export default AdminDashboard;
