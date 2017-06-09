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

        {this.props.tabs.length > 1
          ? <div className="btn-group">
              {this.props.tabs.map((tab, i) =>
                <button
                  key={i}
                  className={`${this.state.selectedIndex === i ? 'active' : ''} btn btn-default`}
                  onClick={this.tabClick.bind(this, i)}>
                  {tab.name}
                </button>
              )}
            </div>
          : null}

        <div className="tab-panels">
          {this.props.tabs.map((tab, i) => (this.state.selectedIndex === i ? tab.component : null))}
        </div>
      </div>
    );
  }
}

export default Tabs;
