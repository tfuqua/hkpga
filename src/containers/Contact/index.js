import React, { Component } from 'react';

class Contact extends Component {

    render(){
        return(
            <div className="container" id="contact-page">
                <h2>CONTACT</h2>
                <div className="row">
                    <div className="contact col-md-12">
                        <div className="well">
                            <dl className="dl-horizontal">
                                <dt><h3>PHONE</h3></dt>
                                <dd><p> <i className="fa fa-phone"></i> +852 2671 7455</p></dd>
                                <dt><h3>FAX</h3></dt>
                                <dd><p> <i className="fa fa-fax"></i> +852 2671 1489</p></dd>
                                <dt><h3>ADDRESS</h3></dt>
                                <dd><p> <i className="fa fa-home"></i> 2/F, No. 42 Man Kok Tsuen, Sheung Shui Wai, Sheung Shui, New Territories, Hong Kong </p></dd>
                                <dt><h3>EMAIL</h3></dt>
                                <dd><p> <i className="fa fa-envelope"></i> info@hkpga.com.hk</p></dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;