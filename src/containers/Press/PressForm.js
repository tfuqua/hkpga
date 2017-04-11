import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import TextField from '../../components/TextField';
import { SingleDatePicker } from 'react-dates';
import Tabs from '../../components/Tabs';
import { savePressEntry } from './actions';

class PressForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showCalendar: false,
      entry: props.entry,
      id: props.id
    };

    this.savePressEntry = this.savePressEntry.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleDateChange(date) {
    this.setState({ entry: { ...this.state.entry, publish_date: moment(date).valueOf() } });
  }

  handleFieldChange(field) {
    return e => {
      if (field.includes('.')) {
        let arr = field.split('.');
        let temp = {
          ...this.state.entry[arr[0]],
          [arr[1]]: e.target.value
        };
        this.setState({ entry: { ...this.state.entry, [arr[0]]: temp } });
      } else {
        this.setState({ entry: { ...this.state.entry, [field]: e.target.value } });
      }
    };
  }

  savePressEntry() {
    this.props.savePressEntry(this.state.id, this.state.entry);
  }

  render() {
    return (
      <div className="">

        <div className="text-right">
          <button onClick={this.savePressEntry} className="btn btn-primary">Save</button>
        </div>
        <br />

        <div className="form-group">
          <label>Press Type</label>
          <input className="form-control disabled" disabled="disabled" value={this.state.entry.type} />
        </div>

        <div className="form-group">
          <label>
            {this.state.entry.type === 'magazine' ? 'Cover Story' : 'Title'}
          </label>
          <Tabs
            selectedIndex={0}
            tabs={[
              {
                name: 'en',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.entry.title.en}
                    onFieldChanged={this.handleFieldChange('title.en')}
                  />
                )
              },
              {
                name: 'zh-cn',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.entry.title['zh-cn']}
                    onFieldChanged={this.handleFieldChange('title.zh-cn')}
                  />
                )
              },
              {
                name: 'zh-hk',
                component: (
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.entry.title['zh-hk']}
                    onFieldChanged={this.handleFieldChange('title.zh-hk')}
                  />
                )
              }
            ]}
          />
        </div>

        <div className="form-group">
          <label>URL</label>
          <TextField
            showError={this.state.showErrors}
            text={this.state.entry.url}
            onFieldChanged={this.handleFieldChange('url')}
          />
        </div>

        <div className="form-group">
          <label>Publish Date</label>
          <SingleDatePicker
            id="publishDate"
            withPortal={true}
            date={moment(this.state.entry.publish_date)}
            initialVisibleMonth={() => moment(this.state.entry.publish_date)}
            focused={this.state.showCalendar}
            numberOfMonths={1}
            isOutsideRange={() => false}
            onDateChange={this.handleDateChange}
            onFocusChange={({ focused }) => {
              this.setState({ showCalendar: focused });
            }}
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ savePressEntry }, dispatch);
}

export default connect(null, mapDispatchToProps)(PressForm);
