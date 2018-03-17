import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { playerStatus } from '../../util/data';
import Select from '../../components/Select';
import TextField from '../../components/TextField';
import Autocomplete from '../../components/Autocomplete';
import { createEntry } from './actions';

class EntryForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      entry: this.props.entry
        ? this.props.entry
        : {
            isEligible: true,
            points: 0,
            rank: null,
            status: 'signedup',
            totalScore: 0,
            rounds: [],
            username: '',
            name: {
              en: '',
              'zh-cn': '',
              'zh-hk': ''
            }
          }
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.playerChange = this.playerChange.bind(this);
  }

  handleFieldChange(field) {
    return e => {
      if (field.includes('.')) {
        let arr = field.split('.');
        let entry = {
          ...this.state.entry[arr[0]],
          [arr[1]]: parseInt(e.target.value, 10)
        };
        this.setState({ entry: { ...this.state.entry, [arr[0]]: entry } });
      } else {
        this.setState({ entry: { ...this.state.entry, [field]: parseInt(e.target.value, 10) } });
      }
    };
  }

  pointChange(field) {
    return e => {
      this.setState({ entry: { ...this.state.entry, [field]: e.target.value } });
    };
  }

  handleSelectChange(e) {
    this.setState({ entry: { ...this.state.entry, status: e.target.value } });
  }
  playerChange(user) {
    let newState = {
      ...this.state.entry,
      username: user.username,
      name: user.name
    };
    this.setState({ entry: newState });
  }

  createEntry = () => {
    this.props.createEntry(this.props.id, this.props.division, this.state.entry);
    this.props.toggleModal('modal');
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Player</label>
          {this.state.entry.username === '' ? (
            <Autocomplete playerChange={this.playerChange} />
          ) : (
            <div>
              {this.state.entry.name.en} <br />
              <a
                onClick={() => {
                  this.setState({ entry: { ...this.state.entry, username: '' } });
                }}>
                Remove
              </a>
            </div>
          )}
        </div>
        {this.state.entry.username === '' ? null : (
          <div>
            {[...Array(this.props.tournament.no_days)].map((x, i) => (
              <div key={i} className="form-group">
                <label>Round {i + 1}</label>
                <TextField
                  showError={this.state.showErrors}
                  text={this.state.entry.rounds ? this.state.entry.rounds[i + 1] : ''}
                  onFieldChanged={this.handleFieldChange(`rounds.${i + 1}`)}
                />
              </div>
            ))}

            <div className="form-group">
              <label>Rank</label>
              <TextField
                showError={this.state.showErrors}
                text={this.state.entry.rank}
                onFieldChanged={this.handleFieldChange(`rank`)}
              />
            </div>

            <div className="form-group">
              <label>Points</label>
              <TextField
                showError={this.state.showErrors}
                text={this.state.entry.points}
                onFieldChanged={this.pointChange(`points`)}
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <Select
                class=""
                handleChange={this.handleSelectChange}
                value={this.state.entry.status}
                options={playerStatus}
              />
            </div>
            <hr />
          </div>
        )}
        <div className="text-right">
          <button className="btn btn-link" onClick={this.props.toggleModal.bind(this, 'modal')}>
            Cancel
          </button>
          &nbsp;&nbsp;&nbsp;
          {this.state.entry.username === '' ? null : (
            <button type="submit" onClick={() => this.createEntry()} className="btn btn-primary">
              Create Entry
            </button>
          )}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createEntry }, dispatch);
}

export default connect(null, mapDispatchToProps)(EntryForm);
