import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PaginatedTable from '../../components/PaginatedTable';
import Loader from '../../components/Loader';
import { queryPress, changePage } from './actions';
import PressTable from './PressTable';

class Press extends Component {
  constructor(props, context) {
    super(props, context);

    this.changePage = this.changePage.bind(this);
    this.fetchPress = this.fetchPress.bind(this);
  }

  componentDidMount() {
    if (!this.props.query) {
      this.props.queryPress({ page: 1 });
    }
  }

  fetchPress(query) {
    this.props.queryPress(query);
  }
  changePage(page) {
    this.props.changePage(page);
  }

  render() {
    if (this.props.query) {
      return (
        <div className="container-fluid">
          <h2>Press</h2>
          <PaginatedTable
            isFetching={this.props.isFetching}
            changePage={this.changePage}
            query={this.props.query}
            component={<PressTable query={this.props.query} results={this.props.results} />}
          />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    query: store.pressReducer.query,
    results: store.pressReducer.results,
    isFetching: store.pressReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ queryPress, changePage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Press);
