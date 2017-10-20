import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import TextField from '../../components/TextField';
import Checkbox from '../../components/Checkbox';
import Select from '../../components/Select';
import Tabs from '../../components/Tabs';
import moment from 'moment';
import { divisions } from '../../util/data';
import { createTournament } from './actions';
import { getTournamentYears } from '../Dashboard/actions';

class TournamentModalForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showCalendar: {
        start_date: false,
        signup_before: false
      },
      tournament: {
        name: {
          en: '',
          'zh-cn': '',
          'zh-hk': ''
        },
        venue: {
          en: '',
          'zh-cn': '',
          'zh-hk': ''
        },
        divisions: {
          ladies: false,
          open: false,
          senior: false,
          trainee: false,
          super: false
        },
        no_days: 2,
        rules_url: '',
        scored: false,
        signup_before: new Date(),
        start_date: new Date(),
        tee_off: '',
        year: null
      },
      years: []
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleDivisionChange = this.handleDivisionChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.createTournament = this.createTournament.bind(this);
  }

  componentDidMount() {
    this.props.getTournamentYears().then(years => {
      let data = years.map(year => ({ name: year, value: year }));
      this.setState({ years: data });
    });
  }

  handleFieldChange(field) {
    return e => {
      if (field.includes('.')) {
        let arr = field.split('.');
        let tournament = {
          ...this.state.tournament[arr[0]],
          [arr[1]]: e.target.value
        };
        this.setState({ tournament: { ...this.state.tournament, [arr[0]]: tournament } });
      } else {
        this.setState({ tournament: { ...this.state.tournament, [field]: e.target.value } });
      }
    };
  }

  handleDateChange(field, date) {
    this.setState({ tournament: { ...this.state.tournament, [field]: moment(date).valueOf() } });
  }
  handleCheckChange(e) {
    this.setState({ tournament: { ...this.state.tournament, [e.target.name]: e.target.checked } });
  }
  handleSelectChange(field) {
    return e => {
      this.setState({ tournament: { ...this.state.tournament, [field]: parseInt(e.target.value, 10) } });
    };
  }
  handleDivisionChange(e) {
    let divs = { ...this.state.tournament.divisions, [e.target.name]: e.target.checked };
    this.setState({
      tournament: { ...this.state.tournament, divisions: divs }
    });
  }

  createTournament() {
    this.props.createTournament(this.state.tournament);
    this.props.toggleModal('modal');
  }

  render() {
    return (
      <div className="">
        <div className="form-group">
          <label>Name</label>
          <Tabs
            selectedIndex={0}
            tabs={[
              {
                name: 'en',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.tournament.name.en}
                    onFieldChanged={this.handleFieldChange('name.en')}
                  />
                )
              },
              {
                name: 'zh-cn',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.tournament.name['zh-cn']}
                    onFieldChanged={this.handleFieldChange('name.zh-cn')}
                  />
                )
              },
              {
                name: 'zh-hk',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.tournament.name['zh-hk']}
                    onFieldChanged={this.handleFieldChange('name.zh-hk')}
                  />
                )
              }
            ]}
          />
        </div>

        <div className="form-group">
          <label>Venue</label>
          <Tabs
            selectedIndex={0}
            tabs={[
              {
                name: 'en',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.tournament.venue.en}
                    onFieldChanged={this.handleFieldChange('venue.en')}
                  />
                )
              },
              {
                name: 'zh-cn',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.tournament.venue['zh-cn']}
                    onFieldChanged={this.handleFieldChange('venue.zh-cn')}
                  />
                )
              },
              {
                name: 'zh-hk',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.tournament.venue['zh-hk']}
                    onFieldChanged={this.handleFieldChange('venue.zh-hk')}
                  />
                )
              }
            ]}
          />
        </div>

        <div className="form-group">
          <label>Rules URL</label>
          <TextField
            showError={this.state.showErrors}
            text={this.state.tournament.rules_url}
            onFieldChanged={this.handleFieldChange('rules_url')}
          />
        </div>

        <div className="form-group">
          <label>Tee Times</label>
          <TextField
            showError={this.state.showErrors}
            text={this.state.tournament.tee_off}
            onFieldChanged={this.handleFieldChange('tee_off')}
          />
        </div>

        <div className="form-group">
          <label>Start Date</label>
          <SingleDatePicker
            id="startDate"
            date={moment(this.state.tournament.start_date)}
            initialVisibleMonth={() => moment(this.state.tournament.start_date)}
            focused={this.state.showCalendar.start_date}
            numberOfMonths={1}
            isOutsideRange={() => false}
            onDateChange={this.handleDateChange.bind(this, 'start_date')}
            onFocusChange={({ focused }) => {
              this.setState({ showCalendar: { ...this.state.showCalendar, start_date: focused } });
            }}
          />
        </div>

        <div className="form-group">
          <label>Signup Before</label>
          <SingleDatePicker
            id="signupDate"
            date={moment(this.state.tournament.signup_before)}
            initialVisibleMonth={() => moment(this.state.tournament.signup_before)}
            focused={this.state.showCalendar.signup_before}
            numberOfMonths={1}
            isOutsideRange={() => false}
            onDateChange={this.handleDateChange.bind(this, 'signup_before')}
            onFocusChange={({ focused }) => {
              this.setState({ showCalendar: { ...this.state.showCalendar, signup_before: focused } });
            }}
          />
        </div>

        <div className="form-group">
          <label>Year</label>
          <Select
            class="width-auto"
            handleChange={this.handleSelectChange('year')}
            value={this.state.tournament.year}
            options={this.state.years}
          />
        </div>

        <div className="form-group">
          <label>Number of Days</label>
          <TextField
            class="width-auto"
            showError={this.state.showErrors}
            text={this.state.tournament.no_days}
            onFieldChanged={this.handleFieldChange('no_days')}
          />
        </div>

        <div className="form-group">
          <table className="table auto">
            <thead>
              <tr>
                <th colSpan={2}>Divisions</th>
              </tr>
            </thead>
            <tbody>
              {divisions.map((division, i) => (
                <tr key={i}>
                  <td>{division.label}</td>
                  <td>
                    <Checkbox
                      name={division.key}
                      checked={this.state.tournament.divisions[division.key]}
                      handleCheckChange={this.handleDivisionChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="form-group">
          <Checkbox
            name="scored"
            label="Scoring Complete?"
            checked={this.state.tournament.scored}
            handleCheckChange={this.handleCheckChange}
          />
        </div>

        <hr />
        <div className="text-right">
          <button onClick={this.props.toggleModal.bind(this, 'modal')} className="btn btn-link">
            Cancel
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type="submit" onClick={this.createTournament} className="btn btn-primary">
            Create Tournament
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTournament, getTournamentYears }, dispatch);
}

export default connect(null, mapDispatchToProps)(TournamentModalForm);
