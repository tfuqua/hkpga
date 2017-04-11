import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Text from '../../components/Text';
import { connect } from 'react-redux';
import { getPageBySlug } from './actions';
import Loader from '../../components/Loader';

class Page extends Component {
  constructor(props, context) {
    super(props, context);

    let slug = this.props.location.pathname.split('/');
    this.state = {
      slug: slug[slug.length - 1]
    };
  }

  componentDidMount() {
    if (!this.props.page) {
      this.props.getPageBySlug(this.state.slug);
    }
  }

  render() {
    if (
      !this.props.isFetching &&
      typeof this.props.page !== 'undefined' &&
      this.props.page[Object.keys(this.props.page)[0]].slug === this.state.slug
    ) {
      let page = this.props.page[Object.keys(this.props.page)[0]];
      return (
        <div className="container-fluid">
          <h2><Text text={page.title} /></h2>
          <div>
            <Text text={page.html} />
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
    page: store.pageReducer.page
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPageBySlug }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
