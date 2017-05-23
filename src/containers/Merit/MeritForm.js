import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveMerit, getMerit } from './actions';
import HotTable from '../../components/HotTable';

class AdminMerit extends Component {
  state = {
    data: this.props.merit
  };

  saveMeritTable = data => {
    this.props.saveMerit(data);
  };

  render() {
    return (
      <div className="container-fluid">

        <HotTable
          root="merit-table"
          saveCallback={this.saveMeritTable}
          data={this.state.data}
          contextMenu={true}
          width="800"
          height="300"
          stretchH="all"
        />

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveMerit }, dispatch);
}

export default connect(null, mapDispatchToProps)(AdminMerit);
