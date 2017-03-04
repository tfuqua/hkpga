import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMagazines } from './actions';

class Magazine extends Component {

  componentDidMount(){
    this.props.getMagazines();
  }

  render() {

      if (typeof this.props.magazines !=='undefined'){
        return(
          <div className="press press-magazine-page">
            <h2><span>HKPGA_MAGAZINE</span> </h2>
            {Object.keys(this.props.magazines).map((key, i) =>
                <div key={i} className="col-md-6">
                  <div className="media-card">
                    <a target="_blank" href={this.props.magazines[key].url}>
                    <h5>{this.props.magazines[key].publish_date}</h5>
                    <h4>{this.props.magazines[key].coverstory.en}</h4>
                    <img alt="magazine" src={this.props.magazines[key].cover} />
                    </a>
                  </div>        
                </div>
            )}
          </div>
        );
      } else {
        return (<div></div>);
      }
    }
}


Magazine.need = [(params) => {
  return getMagazines();
}];


function mapStateToProps(store) {
  return {
      magazines: store.magazineReducer.magazines
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMagazines }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Magazine);