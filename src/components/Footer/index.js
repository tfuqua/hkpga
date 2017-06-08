import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContactInfo } from '../../containers/Contact/actions';

class Footer extends Component {
  componentDidMount() {
    this.props.getContactInfo();
  }

  render() {
    let contactInfo = this.props.contactInfo || {};

    return (
      <footer>
        <div className="footerdiv clearfix">
          <div className="container-fluid">
            <div className="row">
              <div className="footer">
                <div className="col-md-6 contact-details">
                  <p>
                    <span>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> &nbsp; | &nbsp;</span>
                    <span>Tel: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a> &nbsp; | &nbsp;</span>
                    <span>Fax: <a href={`tel:${contactInfo.fax}`}>{contactInfo.fax}</a> &nbsp; | &nbsp;</span>
                    <span><a href={`http://maps.google.com/?q=${contactInfo.address}`}>{contactInfo.address}</a></span>

                  </p>
                </div>
                <div className="terms-copyright col-md-6">
                  <div className="">
                    <ul className="social">
                      <li>
                        <a href="https://www.facebook.com/hkpga.golf/" target="_blank">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="">
                    <a href="/terms#tc"> Terms & Conditions &nbsp; </a>
                    |
                    <a href="/terms#privacy"> &nbsp; Privacy Policy &nbsp; </a>
                    | &nbsp; Copyright © 2002-2017 HKPGA. &nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
