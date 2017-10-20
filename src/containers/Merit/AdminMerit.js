import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { getOOMYears } from '../Dashboard/actions';
import { saveMerit, getMerit } from './actions';

class AdminMerit extends Component {
  state = {
    years: []
  };

  componentDidMount() {
    this.props.getOOMYears().then(years => {
      this.setState({ years });
    });
  }

  saveMeritTable = data => {
    this.props.saveMerit(data);
  };

  render() {
    return (
      <div className="container-fluid">
        <h2>Order of Merit</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Year</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.years.map((year, i) => (
              <tr>
                <td>{year}</td>
                <td className="text-right">
                  <Link to={`/admin/merit/${year}`} className="btn btn-default">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    merit: store.meritReducer.merit
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveMerit, getMerit, getOOMYears }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMerit);
