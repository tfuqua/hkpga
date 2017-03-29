import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedDate } from 'react-intl';
import Text from '../../components/Text';
import translations from '../../util/translations';
import { getReleases } from './actions';
import { mapObjectToArray } from '../../util/util';

class Releases extends Component {
  componentDidMount() {
    this.props.getReleases();
  }

  render() {
    if (typeof this.props.releases !== 'undefined') {
      let releases = mapObjectToArray(this.props.releases);
      releases.reverse();

      return (
        <div className="container-fluid press press-releases-page">
          <h2>{translations[this.props.lang].PRESS_RELEASES}</h2>
          <br />
          {releases.map((release, i) => (
            <div key={i} className="">
              <h4>
                <FormattedDate value={new Date(release.updated_at)} year="numeric" month="long" day="2-digit" />
              </h4>

              <h4 className="press-title">
                <a target="_blank" href={release.url[this.props.lang]}>
                  <Text text={release.title} />
                </a>
              </h4>
              <hr />

            </div>
          ))}

        </div>
      );
    } else {
      return <div />;
    }
  }
}

function mapStateToProps(store) {
  return {
    releases: store.releasesReducer.releases,
    lang: store.languageReducer.lang
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getReleases }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Releases);
