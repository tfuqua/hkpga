import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import { getPages, getPage } from './actions';
import { FormattedDate } from 'react-intl';
import Loader from '../../components/Loader';

class Pages extends Component {
  componentDidMount() {
    this.props.getPages();
  }

  render() {
    if (!this.props.isFetching && this.props.pages) {
      return (
        <div className="container-fluid">
          <h2>Pages</h2>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>URL</th>
                <th>Author</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.props.pages).map((key, i) => (
                <tr key={i}>
                  <td><Text text={this.props.pages[key].title} /></td>
                  <td>{this.props.pages[key].slug}</td>
                  <td>{this.props.pages[key].author}</td>
                  <td>
                    <FormattedDate
                      value={new Date(this.props.pages[key].updated_at)}
                      year="numeric"
                      month="long"
                      day="2-digit"
                    />
                  </td>
                  <td>
                    <Link
                      onClick={() => this.props.getPage(key)}
                      className="btn btn-default"
                      to={`/admin/pages/${key}`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    pages: store.pageReducer.pages,
    isFetching: store.pageReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPages, getPage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
