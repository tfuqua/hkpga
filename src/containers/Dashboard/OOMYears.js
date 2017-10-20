import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TextField from '../../components/TextField';
import { getOOMYears, saveOOMYears } from './actions';

class OOMYearsForm extends Component {
  state = {
    years: []
  };

  componentDidMount() {
    this.props.getOOMYears().then(years => {
      this.setState({ years });
    });
  }

  yearChange = (index, e) => {
    let years = this.state.years;
    years[index] = e.target.value;
    this.setState({ years });
  };

  addYear = () => {
    let years = this.state.years;
    years.unshift('');
    this.setState({ years });
  };

  deleteYear = index => {
    let years = this.state.years;
    years.splice(index, 1);
    this.setState({ years });
  };

  saveYears = () => {
    this.props.saveOOMYears(this.state.years);
    this.props.toggleModal();
  };

  render() {
    return (
      <div>
        <div className="modal-body">
          {this.state.years.map((year, i) => (
            <div className="flex" key={i}>
              <TextField text={year} onFieldChanged={this.yearChange.bind(this, i)} />
              <button className="btn btn-default" onClick={() => this.deleteYear(i)}>
                <i className="fa fa-times" />
              </button>
            </div>
          ))}
          <div>
            <br />
            <p>*Order of Merit years should begin at year 2014. Prior years will automatically be created.</p>

            <button className="btn btn-default" onClick={() => this.addYear()}>
              <i className="fa fa-plus" />&nbsp;Add Year
            </button>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-link" onClick={() => this.props.toggleModal()}>
            Cancel
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type="submit" onClick={this.saveYears} className="btn btn-success">
            Save
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getOOMYears, saveOOMYears }, dispatch);
}

export default connect(null, mapDispatchToProps)(OOMYearsForm);
