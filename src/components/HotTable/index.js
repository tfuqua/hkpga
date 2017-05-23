import React, { Component } from 'react';
import Handsontable from 'handsontable';
import SettingsMapper from './settingsMapper';

export default class HotTable extends Component {
  constructor() {
    super();

    this.hotInstance = null;
    this.settingsMapper = new SettingsMapper();
    this.root = null;
  }

  componentDidMount() {
    const newSettings = this.settingsMapper.getSettings(this.props);
    this.hotInstance = new Handsontable(document.getElementById(this.root), newSettings);
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.updateHot(this.settingsMapper.getSettings(nextProps));
    return false;
  }

  componentWillUnmount() {
    this.hotInstance.destroy();
  }
  save = () => {
    this.props.saveCallback(this.hotInstance.getData());
  };

  render() {
    this.root = this.props.root || 'hot' + new Date().getTime();
    return (
      <div>
        <div className="text-right">
          <button onClick={this.save} className="btn btn-success">Save Merit</button>
        </div>
        <div id={this.root} />
      </div>
    );
  }

  updateHot(newSettings) {
    this.hotInstance.updateSettings(newSettings);
  }
}
