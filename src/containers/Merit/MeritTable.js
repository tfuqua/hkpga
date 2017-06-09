import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMerit } from './actions';
import Loader from '../../components/Loader';

class MeritTable extends Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.merit
          ? <div>
              <h3>Open Division</h3>
              <table className="table table-striped table-bordered">
                <tbody>
                  {this.props.merit.open
                    ? this.props.merit.open.map((merit, i) => <MeritRow key={i} count={i} entry={merit} />)
                    : <div>Not Yet Entered</div>}
                </tbody>
              </table>

              <h3>Ladies Division</h3>
              <table className="table table-striped table-bordered">
                <tbody>
                  {this.props.merit.ladies
                    ? this.props.merit.ladies.map((merit, i) => <MeritRow key={i} count={i} entry={merit} />)
                    : <div>Not Yet Entered</div>}
                </tbody>
              </table>

              <h3>Senior Division</h3>
              <table className="table table-striped table-bordered">
                <tbody>
                  {this.props.merit.senior
                    ? this.props.merit.senior.map((merit, i) => <MeritRow key={i} count={i} entry={merit} />)
                    : <div>Not Yet Entered</div>}
                </tbody>
              </table>
            </div>
          : <div>Merit Not Yet Entered</div>}

      </div>
    );
  }
}

const MeritRow = merit => {
  if (merit.count > 0) {
    return (
      <tr>
        {Object.keys(merit.entry).map((cell, i) =>
          <td key={i}>
            {merit.entry[cell]}
          </td>
        )}
      </tr>
    );
  } else {
    return (
      <tr>
        {Object.keys(merit.entry).map((cell, i) =>
          <th key={i}>
            {merit.entry[cell]}
          </th>
        )}
      </tr>
    );
  }
};

function mapStateToProps(store) {
  return {
    lang: store.languageReducer.lang
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMerit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MeritTable);
