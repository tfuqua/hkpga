import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveMerit, getMeritByYear } from './actions';
import Handsontable from 'handsontable';
import HotTable from '../../components/HotTable';
import Tabs from '../../components/Tabs';
import Loader from '../../components/Loader';

class MeritForm extends Component {
  constructor(props) {
    super(props);

    let m = props.merit || {};
    let merit = {
      open: m.open || [['Rank', 'Player', 'Leg 1', 'Leg 2'], ['1', 'John Smith', '100', '100']],
      ladies: m.ladies || [['Rank', 'Player', 'Leg 1', 'Leg 2'], ['1', 'John Smith', '100', '100']],
      senior: m.senior || [['Rank', 'Player', 'Leg 1', 'Leg 2'], ['1', 'John Smith', '100', '100']]
    };

    this.state = {
      merit
    };
  }

  save = () => {
    this.props.saveMerit(this.props.year, this.state.merit);
  };

  handleDivisionSave = (division, data) => {
    this.props.saveMerit(this.props.year, data, division);
  };

  render() {
    let tabs = [];

    Object.keys(this.state.merit).map((division, i) => {
      tabs.push({
        name: division,
        component: (
          <HotTable
            root={`merit-table-${division}`}
            saveCallback={this.saveMeritTable}
            data={this.state.merit[division]}
            contextMenu={['row_above', 'row_below', 'col_left', 'col_right', 'remove_row', 'remove_col']}
            width="100%"
            height="400"
            copyPaste={true}
            stretchH="all"
            division={division}
            save={this.handleDivisionSave}
          />
        )
      });
    });

    return (
      <div className="hands">
        <Tabs selectedIndex={0} tabs={tabs} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    isFetching: store.meritReducer.isFetching,
    merit: store.meritReducer.meritByYear
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveMerit, getMeritByYear }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MeritForm);
