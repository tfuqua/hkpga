import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContactInfo } from './actions';
import ContactForm from './ContactForm';
import Loader from '../../components/Loader';

class AdminContact extends Component {
  componentDidMount() {
    this.props.getContactInfo();
  }

  render() {
    if (this.props.contactInfo) {
      return (
        <div className="container-fluid">
          <h2>Contact Info</h2>
          <ContactForm contactInfo={this.props.contactInfo} />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    contactInfo: store.contactReducer.contactInfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getContactInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContact);
