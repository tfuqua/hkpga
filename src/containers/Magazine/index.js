import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedDate } from 'react-intl';
import { getMagazines } from './actions';
import { mapObjectToArray } from '../../util/util';
import Text from '../../components/Text';
import Loader from '../../components/Loader';
import translations from '../../util/translations';

class Magazine extends Component {
  componentDidMount() {
    this.props.getMagazines();
  }

  render() {
    if (typeof this.props.magazines !== 'undefined') {
      let magazines = mapObjectToArray(this.props.magazines).reverse();

      return (
        <div className="container-fluid magazines">
          <h2>{translations[this.props.lang].HKPGA_MAGAZINE}</h2>

          {magazines.map((magazine, i) => (
            <div key={i} className="col-sm-6 mag">
              <h4><FormattedDate value={new Date(magazine.publish_date)} year="numeric" /></h4>
              <h4>Issue: <FormattedDate value={new Date(magazine.publish_date)} month="long" /></h4>
              <h4><Text text={magazine.coverstory} /></h4>
              <hr />
              <a target="_blank" href={magazine.url}>
                <img alt="magazine" src={magazine.cover} />
              </a>
            </div>
          ))}
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    magazines: store.magazineReducer.magazines,
    lang: store.languageReducer.lang
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMagazines }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Magazine);
