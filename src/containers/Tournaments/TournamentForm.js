import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import TextField from '../../components/TextField';
import { Link } from 'react-router-dom';
import Tabs from '../../components/Tabs';
import moment from 'moment';
import { saveTournament, getResults } from './actions';

class TournamentForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showCalendar: {
        start_date: false,
        signup_before: false
      },
      tournament: props.tournament,
      id: props.id
    };

    this.saveArticle = this.saveArticle.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.article.slug !== this.state.article.slug) {
      this.setState({ article: nextProps.article });
    }
  }

  saveArticle() {
    this.props.saveArticle(this.state.id, this.state.article);
  }

  render() {
    return (
      <div className="">

        <div className="text-right">
          <div className="btn-group">
            <button className="btn btn-default" onClick={() => this.props.getResults(this.state.id)}>
              <Link to={`/admin/tournaments/${this.state.id}/results`}>
                Edit Results
              </Link>
            </button>
            <Link to={`/admin/tournaments/${this.state.id}/results`} className="btn btn-default">Edit Prize Money</Link>
            <button onClick={this.saveArticle} className="btn btn-default">Save</button>
          </div>

        </div>

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
                    onFieldChanged={this.handleFieldChange('name.zh-hk')}
                  />
                )
              }
            ]}
          />
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>Number of Days</label>
              <TextField
                showError={this.state.showErrors}
                text={this.state.tournament.no_days}
                onFieldChanged={this.handleFieldChange('no_days')}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Scored</label>
              {this.state.tournament.scored ? 'yes' : 'no'}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>Start Date</label>
              <SingleDatePicker
                id="startDate"
                withPortal={true}
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
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Signup Before</label>
              <SingleDatePicker
                id="signupDate"
                withPortal={true}
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
          </div>
        </div>
        <div className="form-group">
          <label>URL</label>
          <TextField
            showError={this.state.showErrors}
            text={this.state.tournament.slug}
            onFieldChanged={this.handleFieldChange('slug')}
          />
        </div>

        <div className="form-group">
          <label>Divisions</label>
          {JSON.stringify(this.state.tournament.divisions, null, ' ')}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveTournament, getResults }, dispatch);
}

export default connect(null, mapDispatchToProps)(TournamentForm);
