import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteArticle, queryArticles, receivePressEntry } from './actions';
import { FormattedDate } from 'react-intl';
import Text from '../../components/Text';
import Modal from '../../components/Modal';

class PressTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(modal) {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    let press = this.props.results ? this.props.results : [];
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Publish Date</th>
              <th>Type</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {press.map((p, i) => (
              <tr key={i}>
                <td>
                  <Text text={p.title} />
                </td>
                <td>
                  <FormattedDate value={new Date(p.publish_date)} year="numeric" month="long" day="2-digit" />
                </td>
                <td>{p.type}</td>
                <td>
                  <Link
                    className="btn btn-default"
                    to={`/admin/press/${p.id}`}
                    onClick={() => this.props.receivePressEntry(p)}>
                    Edit &nbsp; <i className="fa fa-edit" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal toggleModal={this.toggleModal} isOpen={this.state.modal} title="Delete Article?">
          <div className="modal-body">
            Are you sure you want to delete this article?
          </div>
          <div className="modal-footer">
            <button className="btn btn-link" onClick={this.toggleModal}>Cancel</button>
            &nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={this.deleteArticle} className="btn btn-danger">Delete Article</button>
          </div>
        </Modal>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteArticle, queryArticles, receivePressEntry }, dispatch);
}

export default connect(null, mapDispatchToProps)(PressTable);
