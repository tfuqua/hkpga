import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Text from '../../components/Text';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPages } from './actions';
import Loader from '../../components/Loader';

class Page extends Component {

  componentDidMount(){
    this.props.getPages();
  }

  render() {
    console.log(this.props.pages);
    if (!this.props.isFetching && typeof this.props.pages !== 'undefined'){
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
        <Loader/>
      );
    }
  }
}


function mapStateToProps(store) {
  return {
    pages: store.pageReducer.pages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPages }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Page);