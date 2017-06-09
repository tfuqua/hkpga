import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveMerit, getMerit } from './actions';
import { createYears } from '../../util/data';
import MeritForm from './MeritForm';
import Loader from '../../components/Loader';

class AdminMerit extends Component {
  saveMeritTable = data => {
    this.props.saveMerit(data);
  };

  render() {
    let years = createYears(2014);

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
            {years.map((year, i) =>
              <tr>
                <td>{year.value}</td>
                <td className="text-right">
                  <Link to={`/admin/merit/${year.value}`} className="btn btn-default">Edit</Link>
                </td>
              </tr>
            )}
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
  return bindActionCreators({ saveMerit, getMerit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMerit);
