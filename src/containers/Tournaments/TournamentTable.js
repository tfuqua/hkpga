import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTournament, queryTournaments } from './actions';
import { FormattedDate } from 'react-intl';
import TournamentModalForm from './TournamentModalForm';
import Text from '../../components/Text';
import Modal from '../../components/Modal';

class TournamentTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modal: false,
      deleteModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  showDelete(id) {
    this.setState({
      deleteModal: true,
      idToDelete: id
    });
  }

  deleteTournament() {
    this.props.deleteTournament(this.state.idToDelete);
    this.props.queryTournaments({ page: 1 });
    this.setState({ deleteModal: false });
  }

  toggleModal(modal) {
    this.setState({ [modal]: !this.state[modal] });
  }

  render() {
    let tournaments = this.props.results ? this.props.results : [];

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Start Date</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map((tournament, i) => (
              <tr key={i}>
                <td><Text text={tournament.name} /></td>
                <td>
                  <FormattedDate value={new Date(tournament.start_date)} year="numeric" month="long" day="2-digit" />
                </td>
                <td>{tournament.year}</td>
                <td>
                  <div className="btn-group">
                    <Link
                      to={`/admin/tournaments/${tournament.id}`}
                      onClick={() => this.props.receiveTournament(tournament)}
                      className="btn btn-default">
                      Edit <i className="fa fa-edit" />
                    </Link>
                    <button onClick={() => this.showDelete(tournament.id)} className="btn btn-default">
                      Delete <i className="fa fa-trash" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={3} className="text-center">
                <button onClick={this.toggleModal.bind(this, 'modal')} className="btn btn-default">
                  Add New Tournament <i className="fa fa-plus" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <Modal toggleModal={this.toggleModal.bind(this, 'modal')} isOpen={this.state.modal} title="Create Tournament">
          <div className="modal-body">
            <TournamentModalForm toggleModal={this.toggleModal} />
          </div>
        </Modal>

        <Modal
          toggleModal={this.toggleModal.bind(this, 'deleteModal')}
          isOpen={this.state.deleteModal}
          title="Delete Tournament?">
          <div className="modal-body">
            Are you sure you want to delete this tournament?
          </div>
          <div className="modal-footer">
            <button className="btn btn-link" onClick={this.toggleModal.bind(this, 'deleteModal')}>Cancel</button>
            &nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={() => this.deleteTournament()} className="btn btn-danger">
              Delete Tournament
            </button>
          </div>
        </Modal>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTournament, queryTournaments }, dispatch);
}

export default connect(null, mapDispatchToProps)(TournamentTable);
