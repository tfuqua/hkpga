import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContactInfo, saveContactInfo } from './actions';
import TextField from '../../components/TextField';

class ContactForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      contactInfo: props.contactInfo
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange = field => {
    return e => {
      this.setState({ contactInfo: { ...this.state.contactInfo, [field]: e.target.value } });
    };
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveContactInfo(this.state.contactInfo);
  };

  render() {
    return (
      <div className="">

        <form onSubmit={this.handleSubmit} />

        <div className="text-right">
          <button onClick={this.handleSubmit} className="btn btn-success">Save Contact Info</button>
        </div>

        <div className="form-group">
          <label>Phone</label>
          <TextField
            showError={this.state.showErrors}
            text={this.state.contactInfo.phone}
            onFieldChanged={this.handleFieldChange('phone')}
          />
        </div>

        <div className="form-group">
          <label>Fax</label>
          <TextField
            showError={this.state.showErrors}
            text={this.state.contactInfo.fax}
            onFieldChanged={this.handleFieldChange('fax')}
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <TextField
            showError={this.state.showErrors}
            text={this.state.contactInfo.address}
            onFieldChanged={this.handleFieldChange('address')}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <TextField
            showError={this.state.showErrors}
            text={this.state.contactInfo.email}
            onFieldChanged={this.handleFieldChange('email')}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    contactInfo: store.contactReducer.contactInfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getContactInfo, saveContactInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
