import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteArticle, queryArticles, createArticle } from './actions';
import { FormattedDate } from 'react-intl';
import Text from '../../components/Text';
import TextField from '../../components/TextField';
import Modal from '../../components/Modal';

class ArticleTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modal: false,
      createModal: false,
      title: ''
    };
    this.confirmDelete = this.confirmDelete.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.createArticle = this.createArticle.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  confirmDelete(key) {
    this.setState({ keyToDelete: key });
    this.toggleModal('modal');
  }

  deleteArticle() {
    this.props.deleteArticle(this.state.keyToDelete);
    this.toggleModal('modal');
    this.props.queryArticles({ page: 1 });
  }

  handleFieldChange(e) {
    this.setState({ title: e.target.value });
  }

  createArticle() {
    this.toggleModal('createModal');
    const create = this.props.createArticle(this.state.title);
    Promise.resolve(create).then(status => {
      console.log(status);
    });
  }

  toggleModal(modal) {
    this.setState({ [modal]: !this.state[modal] });
  }

  render() {
    let articles = this.props.results ? this.props.results : [];
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Publish Date</th>
              <th>Internal</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, i) => (
              <tr key={i}>
                <td style={{ width: '50%' }}>
                  <Text text={article.title} />
                </td>
                <td>
                  <FormattedDate value={new Date(article.publish_date)} year="numeric" month="long" day="2-digit" />
                </td>
                <td>{article.internal ? 'Yes' : 'No'}</td>
                <td className="text-right">
                  <div className="btn-group">
                    <Link
                      to={`/admin/articles/${article.id}`}
                      onClick={() => this.props.receiveArticle(article)}
                      className="btn btn-default">
                      Edit &nbsp; <i className="fa fa-edit" />
                    </Link>
                    <button onClick={() => this.confirmDelete(article.id)} className="btn btn-default">
                      Delete &nbsp; <i className="fa fa-trash" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={4} className="text-center">
                <button onClick={this.toggleModal.bind(this, 'createModal')} className="btn btn-default">
                  Create New Article &nbsp; <i className="fa fa-plus" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <Modal toggleModal={this.toggleModal.bind(this, 'modal')} isOpen={this.state.modal} title="Delete Article?">
          <div className="modal-body">
            Are you sure you want to delete this article?
          </div>
          <div className="modal-footer">
            <button className="btn btn-link" onClick={this.toggleModal.bind(this, 'modal')}>Cancel</button>
            &nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={this.deleteArticle} className="btn btn-danger">Delete Article</button>
          </div>
        </Modal>

        <Modal
          toggleModal={this.toggleModal.bind(this, 'createModal')}
          isOpen={this.state.createModal}
          title="Create Article">
          <div className="modal-body">
            <div className="form-group">
              <label>Article Title</label>
              <TextField
                showError={this.state.showErrors}
                text={this.state.title}
                onFieldChanged={this.handleFieldChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-link" onClick={this.toggleModal.bind(this, 'createModal')}>Cancel</button>
            &nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={this.createArticle} className="btn btn-primary">Create Article</button>
          </div>
        </Modal>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteArticle, queryArticles, createArticle }, dispatch);
}

export default connect(null, mapDispatchToProps)(ArticleTable);
