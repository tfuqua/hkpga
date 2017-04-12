import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { queryArticles, receivePressEntry, createEntry, deleteEntry } from './actions';
import { FormattedDate } from 'react-intl';
import Text from '../../components/Text';
import Select from '../../components/Select';
import { pressOptions } from '../../util/data';
import Modal from '../../components/Modal';

class PressTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modal: false,
      createModal: false,
      pressType: 'releases'
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.createEntry = this.createEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  toggleModal(modal) {
    this.setState({ [modal]: !this.state[modal] });
  }
  confirmDelete(id) {
    this.setState({ keyToDelete: id });
    this.toggleModal('modal');
  }
  deleteEntry() {
    this.props.deleteEntry(this.state.keyToDelete);
    this.toggleModal('modal');
  }
  handleSelectChange(e) {
    this.setState({ pressType: e.target.value });
  }
  createEntry(e) {
    this.props.createEntry(this.state.pressType);
    this.toggleModal('createModal');
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
                  <div className="btn-group">
                    <Link
                      className="btn btn-default"
                      to={`/admin/press/${p.id}`}
                      onClick={() => this.props.receivePressEntry(p)}>
                      Edit &nbsp; <i className="fa fa-edit" />
                    </Link>
                    <button className="btn btn-default" onClick={this.confirmDelete.bind(this, p.id)}>
                      Delete &nbsp; <i className="fa fa-trash" />
                    </button>
                  </div>

                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={4} className="text-center">
                <button onClick={this.toggleModal.bind(this, 'createModal')} className="btn btn-default">
                  Create New Press Entry &nbsp; <i className="fa fa-plus" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <Modal toggleModal={this.toggleModal.bind(this, 'modal')} isOpen={this.state.modal} title="Delete Press Entry?">
          <div className="modal-body">
            Are you sure you want to delete this Press Entry?
          </div>
          <div className="modal-footer">
            <button className="btn btn-link" onClick={this.toggleModal.bind(this, 'modal')}>Cancel</button>
            &nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={this.deleteEntry} className="btn btn-danger">Delete Entry</button>
          </div>
        </Modal>

        <Modal
          toggleModal={this.toggleModal.bind(this, 'createModal')}
          isOpen={this.state.createModal}
          title="Create Press Entry">
          <div className="modal-body">
            <div className="form-group">
              <label>Type</label>
              {this.state.type}
              <Select
                handleChange={this.handleSelectChange.bind(this)}
                value={this.state.pressType}
                options={pressOptions}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-link" onClick={this.toggleModal.bind(this, 'createModal')}>Cancel</button>
            &nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={this.createEntry} className="btn btn-primary">Create Entry</button>
          </div>
        </Modal>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteEntry, queryArticles, receivePressEntry, createEntry }, dispatch);
}

export default connect(null, mapDispatchToProps)(PressTable);
