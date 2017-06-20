import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserByEmail } from '../Users/actions';
import { sendMessage } from '../Feedback/actions';
import { createUsername } from '../../util/util';
import Loader from '../../components/Loader';
import UserForm from '../Users/UserForm';
import Modal from '../../components/Modal';

class UserDashboard extends Component {
  state = {
    showForm: false,
    message: ''
  };

  messageChange = e => {
    this.setState({ message: e.target.value });
  };

  sendMessage = () => {
    this.props.sendMessage(this.state.message, this.props.email);
    this.setState({
      showForm: false,
      message: ''
    });
  };

  componentDidMount() {
    this.props.getUserByEmail(this.props.email);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container-fluid">
        <h2>Dashboard</h2>
        <div className="text-right">
          <button className="btn btn-default" onClick={() => this.setState({ showForm: true })}>
            Send HKPGA a message
          </button>
        </div>
        <hr />
        <h3>My Info</h3>
        {this.props.user
          ? <UserForm user={{ ...this.props.user }} id={createUsername(this.props.email)} isAdmin={false} />
          : <Loader />}

        <Modal
          toggleModal={() => this.setState({ showForm: false })}
          isOpen={this.state.showForm}
          title="HKPGA Feedback">
          <div className="modal-body">
            <div className="form-group">
              <label>Message</label>
              <textarea
                style={{ height: '150px' }}
                className="form-control"
                onChange={this.messageChange}
                value={this.state.message}
              />
            </div>

          </div>

          <div className="modal-footer">
            <button className="btn btn-link" onClick={() => this.setState({ showForm: false })}>Cancel</button>
            &nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={() => this.sendMessage()} className="btn btn-primary">
              Send Message
            </button>
          </div>
        </Modal>

      </div>
    );
  }
}
function mapStateToProps(store) {
  return {
    user: store.userReducer.user,
    email: store.loginReducer.email
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserByEmail, sendMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
