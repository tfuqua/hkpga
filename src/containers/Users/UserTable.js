import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteUser, getUsers } from './actions';
import Text from '../../components/Text';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';

class UserTable extends Component {
  state = {
    showDelete: false,
    user: null
  };

  deleteUser = () => {
    this.props.deleteUser(this.state.user.id);
    this.props.getUsers({ page: 1, search: this.state.search });
    this.setState({ showDelete: false, user: null });
  };

  render() {
    let users = this.props.results ? this.props.results : [];

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Committee</th>
              <th>Honorary</th>
              <th>Category</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) =>
              <tr key={i}>
                <td><Text text={user.name} /></td>
                <td>{user.email}</td>
                <td>{user.committee}</td>
                <td>{user.honorary}</td>
                <td>{user.relation}</td>
                <td className="text-right">
                  <div className="btn-group">
                    <Link
                      to={`/admin/users/${user.id}`}
                      onClick={() => this.props.receiveUser(user)}
                      className="btn btn-default">
                      <i className="fa fa-edit" /> Edit
                    </Link>
                    <button
                      className="btn btn-default"
                      onClick={() =>
                        this.setState({
                          showDelete: true,
                          user: user
                        })}>
                      <i className="fa fa-trash" /> &nbsp;Delete
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <Modal
          toggleModal={() => this.setState({ showDelete: false })}
          isOpen={this.state.showDelete}
          title="Delete User?">
          <div className="modal-body">
            Are you sure you want to delete this user?
          </div>
          <div className="modal-footer">
            <button className="btn btn-link" onClick={() => this.setState({ showDelete: false })}>Cancel</button>
            &nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={this.deleteUser} className="btn btn-danger">
              Delete User
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteUser, getUsers }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserTable);
