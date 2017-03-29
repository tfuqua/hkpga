import React, { Component } from 'react';
import { connect } from 'react-redux';
import translations from '../../util/translations';

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>{translations[this.props.lang].CONTACT}</h2>

        <br />
        <table className="table">
          <tbody>
            <tr>
              <td>{translations[this.props.lang].PHONE}</td>
              <td>
                <i className="fa fa-phone" />&nbsp;&nbsp;
                <a href="tel:+85226717455">+852 2671 7455</a>
              </td>
            </tr>
            <tr>
              <td>{translations[this.props.lang].FAX}</td>
              <td>
                <i className="fa fa-fax" />&nbsp;&nbsp;
                <a href="fax:+85226711489">+852 2671 1489</a>
              </td>
            </tr>
            <tr>
              <td>{translations[this.props.lang].ADDRESS}</td>
              <td>
                <i className="fa fa-home" />&nbsp;&nbsp;
                2/F, No. 42 Man Kok Tsuen, Sheung Shui Wai, Sheung Shui, New Territories, Hong Kong
              </td>
            </tr>
            <tr>
              <td>{translations[this.props.lang].EMAIL}</td>
              <td>
                <i className="fa fa-envelope" />&nbsp; &nbsp;
                <a href="mailto:info@hkpga.com.hk">info@hkpga.com.hk</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    lang: store.languageReducer.lang
  };
}

export default connect(mapStateToProps)(Contact);
