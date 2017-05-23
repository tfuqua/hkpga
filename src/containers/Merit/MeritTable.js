import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMerit } from './actions';
import Loader from '../../components/Loader';

class MeritTable extends Component {
  componentDidMount() {
    this.props.getMerit(2017);
  }

  render() {
    return (
      <div className="container-fluid">
        {this.props.merit
          ? <table className="table table-striped table-bordered">
              <tbody>
                {this.props.merit.map((merit, i) => <MeritRow key={i} count={i} entry={merit} />)}
              </tbody>
            </table>
          : <Loader />}

      </div>
    );
  }
}

const MeritRow = merit => {
  if (merit.count > 0) {
    return (
      <tr>
        {Object.keys(merit.entry).map((cell, i) => (
          <td key={i}>
            {merit.entry[cell]}
          </td>
        ))}
      </tr>
    );
  } else {
    return (
      <tr>
        {Object.keys(merit.entry).map((cell, i) => (
          <th key={i}>
            {merit.entry[cell]}
          </th>
        ))}
      </tr>
    );
  }
};

function mapStateToProps(store) {
  return {
    lang: store.languageReducer.lang,
    merit: store.meritReducer.merit
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMerit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MeritTable);
