import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { FormattedDate } from 'react-intl';
import { connect } from 'react-redux';
import { getCoverage } from './actions';
import Text from '../../components/Text';
import translations from '../../util/translations';
import Loader from '../../components/Loader';

class Coverage extends Component {
  componentDidMount() {
    this.props.getCoverage();
  }

  render() {
    if (typeof this.props.coverage !== 'undefined') {
      return (
        <div className="container-fluid">
          <h2>{translations[this.props.lang].MEDIA_COVERAGE}</h2>

          <div className="row">
            {Object.keys(this.props.coverage).map((key, i) => (
              <div key={i} className="col-sm-6">
                <FormattedDate
                  value={new Date(this.props.coverage[key].publish_date)}
                  year="numeric"
                  month="long"
                  day="2-digit"
                />
                <h4><Text text={this.props.coverage[key].title} /></h4>
                <h5><Text text={this.props.coverage[key].publication} /></h5>
                <hr />
                <a target="_blank" href={this.props.coverage[key].url}>
                  <img alt="magazine" src={this.props.coverage[key].cover} />
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    coverage: store.coverageReducer.coverage,
    lang: store.languageReducer.lang
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCoverage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Coverage);
