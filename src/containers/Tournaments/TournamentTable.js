import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TournamentModalForm from './TournamentModalForm';
import Text from '../../components/Text';
import Modal from '../../components/Modal';

class TournamentTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modal: false,
      createModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
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
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map((tournament, i) => (
              <tr key={i}>
                <td><Text text={tournament.name} /></td>
                <td>{tournament.year}</td>
                <td>
                  <Link to={`/admin/tournaments/${tournament.id}`}>
                    <button onClick={() => this.props.receiveTournament(tournament)} className="btn btn-default">
                      Edit
                    </button>
                  </Link>
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
      </div>
    );
  }
}

export default TournamentTable;
