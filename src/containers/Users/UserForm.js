import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import TextField from '../../components/TextField';
import { saveUser } from './actions';

class UserForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showCalendar: false,
      user: props.user,
      id: props.id
    };

    this.saveUser = this.saveUser.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleDateChange(date) {
    this.setState({ article: { ...this.state.article, publish_date: moment(date).valueOf() } });
  }

  handleFieldChange(field) {
    return e => {
      if (field.includes('.')) {
        let arr = field.split('.');
        let user = {
          ...this.state.user[arr[0]],
          [arr[1]]: e.target.value
        };

        this.setState({ user: { ...this.state.user, [arr[0]]: user } });
      } else {
        this.setState({ user: { ...this.state.user, [field]: e.target.value } });
      }
    };
  }

  saveUser() {
    this.props.saveUser(this.state.id, this.state.user);
  }

  render() {
    return (
      <div className="">

        <div className="text-right">
          <button onClick={this.saveUser} className="btn btn-default">Save</button>
        </div>

        <h4>Name & Standing</h4>
        <hr />
        <div className="form-group">
          <label>English Name</label>
          <TextField
            showError={this.state.showErrors}
            text={this.state.user.name.en}
            onFieldChanged={this.handleFieldChange('name.en')}
          />
        </div>
        <div className="form-group">
          <label>Chinese Name</label>
          <TextField
            showError={this.state.showErrors}
            text={this.state.user.name['zh-cn']}
            onFieldChanged={this.handleFieldChange('name.zh-cn')}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <TextField
            showError={this.state.showErrors}
            text={this.state.user.email}
            onFieldChanged={this.handleFieldChange('email')}
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserForm);
