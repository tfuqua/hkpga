import React, { Component } from 'react';
import { sortResults } from '../../util/util';
import EditResultRow from './EditResultRow';
import Modal from '../../components/Modal';
import EntryForm from './EntryForm';

class EditResultsTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modal: false
    };

    this.editEntry = this.editEntry.bind(this);
    this.newEntry = this.newEntry.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal(modal) {
    this.setState({ [modal]: !this.state[modal] });
  }
  editEntry(entry) {
    this.setState({
      entry: {
        username: entry.username,
        name: entry.name,
        points: entry.points,
        rank: entry.rank,
        rounds: entry.rounds,
        status: entry.status,
        totalScore: entry.totalScore
      }
    });
    this.toggleModal('modal');
  }

  newEntry() {
    this.setState({ entry: null });
    this.toggleModal('modal');
  }
  render() {
    let results = sortResults(this.props.scores);

    return (
      <div>
        <hr />
        <div className="text-right">
          <div className="btn-group">
            <button onClick={this.newEntry} className="btn btn-default">Add Entry</button>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              {[...Array(this.props.tournament.no_days)].map((x, i) => <th key={i}>Round {i + 1}</th>)}
              <th>Total Score</th>
              <th>Rank</th>
              <th>Points</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, i) => (
              <EditResultRow
                key={i}
                division={this.props.division}
                id={this.props.id}
                tournament={this.props.tournament}
                result={result}
                editEntry={this.editEntry}
              />
            ))}
            {results.length === 0
              ? <tr>
                  <td className="text-center" colSpan="100%">No Scores have been entered.</td>
                </tr>
              : null}
          </tbody>
        </table>

        <Modal toggleModal={this.toggleModal.bind(this, 'modal')} isOpen={this.state.modal} title="Create Entry">
          <div className="modal-body">
            <EntryForm
              entry={this.state.entry}
              tournament={this.props.tournament}
              division={this.props.division}
              id={this.props.id}
              toggleModal={this.toggleModal}
            />
          </div>
        </Modal>

      </div>
    );
  }
}

export default EditResultsTable;
