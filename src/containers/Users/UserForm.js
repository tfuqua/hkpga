import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import TextField from '../../components/TextField';
import Select from '../../components/Select';
import { userFields, genders } from '../../util/data';
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
    this.handleSelectChange = this.handleSelectChange.bind(this);
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

  handleSelectChange(field) {
    return e => {
      this.setState({ user: { ...this.state.user, [field]: e.target.value } });
    };
  }

  saveUser() {
    this.props.saveUser(this.state.id, this.state.user);
  }

  render() {
    console.log(genders);
    return (
      <div className="">

        <div className="text-right">
          <button onClick={this.saveUser} className="btn btn-default">Save</button>
        </div>

        <h4>Name & Standing</h4>
        <hr />

        <div className="row">
          <div className="col-sm-6">
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
              <label>Chinese Name</label>
              <TextField
                showError={this.state.showErrors}
                text={this.state.user.name['zh-hk']}
                onFieldChanged={this.handleFieldChange('name.zh-hk')}
              />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group">
              <label>Committee</label>
              <Select
                handleChange={this.handleSelectChange('committee')}
                value={this.state.user.committee}
                options={userFields.committee}
              />
            </div>

            <div className="form-group">
              <label>Honorary Position</label>
              <Select
                handleChange={this.handleSelectChange('honorary')}
                value={this.state.user.honorary}
                options={userFields.honorary}
              />
            </div>

            <div className="form-group">
              <label>HKPGA Relation</label>
              <Select
                handleChange={this.handleSelectChange('relation')}
                value={this.state.user.relation}
                options={userFields.relations}
              />
            </div>
          </div>
        </div>

        <br />
        <h4>Personal Info</h4>
        <hr />

        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>Email</label>
              <TextField
                showError={this.state.showErrors}
                text={this.state.user.email}
                onFieldChanged={this.handleFieldChange('email')}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <TextField
                showError={this.state.showErrors}
                text={this.state.user.phone}
                onFieldChanged={this.handleFieldChange('phone')}
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <Select
                handleChange={this.handleSelectChange('gender')}
                value={this.state.user.gender}
                options={genders}
              />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group">
              <label>Member Since</label>
              <TextField
                showError={this.state.showErrors}
                text={this.state.user.member_since}
                onFieldChanged={this.handleFieldChange('member_since')}
              />
            </div>

            <div className="form-group">
              <label>Profile Picture</label>
              <TextField
                showError={this.state.showErrors}
                text={this.state.user.profile_picture}
                onFieldChanged={this.handleFieldChange('profile_picture')}
              />
            </div>

            <div className="form-group">
              <label>Pro Since</label>
              <TextField
                showError={this.state.showErrors}
                text={this.state.user.pro_since}
                onFieldChanged={this.handleFieldChange('pro_since')}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserForm);
