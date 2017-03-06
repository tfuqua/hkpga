import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCoverage } from './actions';

class Coverage extends Component {

  componentDidMount(){
    this.props.getCoverage();
  }

  render() {

      if (typeof this.props.coverage !=='undefined'){
        return(
          <div className="press press-coverage-page">
          <h2>MEDIA_COVERAGE</h2>
          
            {Object.keys(this.props.coverage).map((key, i) =>
              <div key={i} className="col-md-6">
                <div className="media-card">
                  <a target="_blank" href={this.props.coverage[key].url}>
                    {JSON.stringify(this.props.coverage[key], null, ' ' )}
                    <h3>{this.props.coverage[key].title}</h3>
                    <img alt="magazine" src={this.props.coverage[key].cover} />
                  </a>
                </div>        
              </div>
            )}
          </div>
        );
      } else {
        return (<div>test</div>);
      }
    }
}


Coverage.need = [(params) => {
  return getCoverage();
}];


function mapStateToProps(store) {
  return {
      coverage: store.coverageReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCoverage }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Coverage);