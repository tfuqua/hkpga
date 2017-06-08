import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContactInfo } from './actions';
import Loader from '../../components/Loader';
import translations from '../../util/translations';

class Contact extends Component {
  componentDidMount() {
    this.props.getContactInfo();
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>{translations[this.props.lang].CONTACT}</h2>
        <br />
        {this.props.contactInfo
          ? <table className="table">
              <tbody>
                <tr>
                  <td>{translations[this.props.lang].PHONE}</td>
                  <td>
                    <i className="fa fa-phone" />&nbsp;&nbsp;
                    <a href={`tel:${this.props.contactInfo.phone}`}>{this.props.contactInfo.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td>{translations[this.props.lang].FAX}</td>
                  <td>
                    <i className="fa fa-fax" />&nbsp;&nbsp;
                    <a href={`fax:${this.props.contactInfo.fax}`}>{this.props.contactInfo.fax}</a>
                  </td>
                </tr>
                <tr>
                  <td>{translations[this.props.lang].ADDRESS}</td>
                  <td>
                    <i className="fa fa-home" />&nbsp;&nbsp;
                    {this.props.contactInfo.address}
                  </td>
                </tr>
                <tr>
                  <td>{translations[this.props.lang].EMAIL}</td>
                  <td>
                    <i className="fa fa-envelope" />&nbsp; &nbsp;
                    <a href={`mailto:${this.props.contactInfo.email}`}>{this.props.contactInfo.email}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          : <Loader />}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    lang: store.languageReducer.lang,
    contactInfo: store.contactReducer.contactInfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getContactInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
