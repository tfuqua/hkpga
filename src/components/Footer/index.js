import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footerdiv clearfix">
        <div className="container-fluid">
          <div className="row">
            <div className="footer">
              <div className="col-md-6 contact-details">
                <p>
                  Email: info@hkpga.com.hk &nbsp;| &nbsp; Tel: +852 2671 7455 &nbsp; | &nbsp; Fax: +852 2671 1489 &nbsp; | &nbsp; Address: 2/F, No. 42 Man Kok Tsuen, Sheung Shui Wai, Sheung Shui, New Territories, Hong Kong
                  {' '}
                </p>
              </div>
              <div className="terms-copyright col-md-6">
                <div className="">
                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/thehkpga" target="_blank"><i className="fa fa-facebook" /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/thehkpga" target="_blank"><i className="fa fa-twitter" /></a>
                    </li>
                    <li> <a href="http://weibo.com/u/5209724886" target="_blank"><i className="fa fa-weibo" /></a></li>
                  </ul>
                </div>
                <p className="">
                  <a href="/terms#tc"> Terms & Conditions &nbsp; </a>
                  |
                  <a href="/terms#privacy"> &nbsp; Privacy Policy &nbsp; </a>
                  | &nbsp; Copyright © 2002-2015 HKPGA. &nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
