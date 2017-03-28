import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>CONTACT</h2>

        <br />
        <table className="table">
          <tbody>
            <tr>
              <td>PHONE</td>
              <td><i className="fa fa-phone" /> +852 2671 7455</td>
            </tr>
            <tr>
              <td>FAX</td>
              <td><i className="fa fa-fax" /> +852 2671 1489</td>
            </tr>
            <tr>
              <td>ADDRESS</td>
              <td>
                <i className="fa fa-home" />
                2/F, No. 42 Man Kok Tsuen, Sheung Shui Wai, Sheung Shui, New Territories, Hong Kong
              </td>
            </tr>
            <tr>
              <td>EMAIL</td>
              <td><i className="fa fa-envelope" /> info@hkpga.com.hk</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contact;
