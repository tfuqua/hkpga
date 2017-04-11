import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import { getPages, getPage, deletePage, receivePage } from './actions';
import { FormattedDate } from 'react-intl';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';

class Pages extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modal: false
    };
    this.confirmDelete = this.confirmDelete.bind(this);
    this.deletePage = this.deletePage.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  confirmDelete(key) {
    this.setState({ keyToDelete: key });
    this.toggleModal();
  }

  deletePage() {
    this.props.deletePage(this.state.keyToDelete);
    this.toggleModal();
    this.props.getPages();
  }

  toggleModal(modal) {
    this.setState({ modal: !this.state.modal });
  }

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
                    <div className="btn-group">
                      <Link
                        onClick={() => this.props.receivePage(this.props.pages[key])}
                        className="btn btn-default"
                        to={`/admin/pages/${key}`}>
                        Edit <i className="fa fa-edit" /> &nbsp;
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal toggleModal={this.toggleModal} isOpen={this.state.modal} title="Add a File" id="file">
            <div className="modal-body">
              Are you sure you want to delete this page?
            </div>

            <div className="modal-footer">
              <button className="btn btn-link" onClick={this.toggleModal}>Cancel</button>
              &nbsp;&nbsp;&nbsp;
              <button type="submit" onClick={this.deletePage} className="btn btn-danger">Delete Page</button>
            </div>

          </Modal>
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
  return bindActionCreators({ getPages, getPage, deletePage, receivePage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
