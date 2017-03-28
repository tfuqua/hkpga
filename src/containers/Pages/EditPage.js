import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import PageForm from './PageForm';
import { getPage } from './actions';

class EditArticle extends Component {
  componentDidMount() {
    if (!this.props.page) {
      this.props.getPage(this.props.match.params.key);
    }
  }

  render() {
    if (this.props.page) {
      return (
        <div className="container-fluid">
          <h2>Edit Page</h2>
          <PageForm page={this.props.page} id={this.props.match.params.key} />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    page: store.pageReducer.page,
    isFetching: store.pageReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
