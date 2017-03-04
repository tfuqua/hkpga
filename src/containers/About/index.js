import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Text from '../../components/Text';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPages } from './actions';

class About extends Component {

  componentDidMount(){
    this.props.getPages();
  }

  render() {
    console.log(this.props.pages);
    if (typeof this.props.pages !== 'undefined'){
      let page = this.props.pages['about-us'];
      return(
            <div className="container" id="contact-page">
                <h2>CONTACT</h2>
                <div className="row">
                    <div className="contact col-md-12">
                        <div className="well">
                         <Text text={page.html} />
                        </div>
                    </div>
                </div>
            </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}


function mapStateToProps(store) {
  return {
    pages: store.aboutReducer.pages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPages }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(About);