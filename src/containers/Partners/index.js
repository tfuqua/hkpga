import React, { Component } from 'react';
import { connect } from 'react-redux';
import translations from '../../util/translations';

class Partners extends Component {
  render() {
    return (
      <div className="container-fluid" id="partners-widget">
        <div id="official-partners">
          <h2>{translations[this.props.lang].OFFICIAL_PARTNERS}</h2>
          <div className="logos">
            <a href="http://www.pgae.com/" target="_blank">
              <div className="col-md-3" />
            </a>
            <a href="http://www.hkga.com/eng/" target="_blank">
              <div className="col-md-3" />
            </a>
            <a href="http://www.lcsd.gov.hk/" target="_blank">
              <div className="col-md-3" />
            </a>
            <a href="http://www.sjs.org.hk/en/intro/" target="_blank">
              <div className="col-md-3" />
            </a>
          </div>
        </div>

        <div id="sponsors">
          <h2>{translations[this.props.lang].OFFICIAL_SPONSORS}</h2>
          <div className="logos" />
        </div>

        <div id="supporting-organisations">
          <h2>{translations[this.props.lang].SUPPORTING_ORGANISATIONS}</h2>
          <div className="logos">
            <a href="http://www.nine-eagles.com/eng/" target="_blank">
              <div className="col-md-3" />
            </a>
            <a href="http://www.fhsgolf.com/" target="_blank">
              <div className="col-md-3" />
            </a>
            <a href="http://www.yinligolf.com/" target="_blank">
              <div className="col-md-3" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    lang: store.languageReducer.lang
  };
}

export default connect(mapStateToProps)(Partners);
