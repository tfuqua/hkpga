import React, { Component } from 'react';

class Tabs extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { selectedIndex: this.props.selectedIndex || 0 };
    this.tabClick = this.tabClick.bind(this);
  }

  tabClick(i) {
    this.setState({ selectedIndex: i });
  }

  render() {
    return (
      <div>
        <div className="tabs">
          <ul>
            {this.props.tabs.map((tab, i) => (
              <li
                key={i}
                className={this.state.selectedIndex === i ? 'active' : ''}
                onClick={this.tabClick.bind(this, i)}>
                {tab.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-panels">
          {this.props.tabs.map((tab, i) => (
            <div className={this.state.selectedIndex === i ? '' : 'hidden'} key={i}>{tab.component}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Tabs;
