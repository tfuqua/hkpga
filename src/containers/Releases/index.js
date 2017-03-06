import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getReleases } from './actions';

class Releases extends Component {

  componentDidMount(){
    this.props.getReleases();
  }

  render() {

      if (typeof this.props.releases !=='undefined'){
        return(
          <div className="container press press-releases-page">
            <h2>Press Releases</h2>

            <div className="well">
            <ul className="press-items">
              {Object.keys(this.props.releases).map((key, i) =>
                <div key={i} className="">
                  <li>
                      <h5 className="release-date">{this.props.releases[key].updated_at}</h5>
				              <h4 className="press-title">
                        <a target="_blank" href={this.props.releases[key].url}>{this.props.releases[key].title.en}</a>
                        </h4>
                  </li>
                </div>
              )}   
            </ul>
            </div>
          </div>
        );
      } else {
        return (<div></div>);
      }
    }
}

function mapStateToProps(store) {
  return {
      releases: store.releasesReducer.releases
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getReleases }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Releases);