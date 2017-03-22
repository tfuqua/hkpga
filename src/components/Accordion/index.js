import React, { Component } from 'react';

class Accordion extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: props.open
    };
    this.togglePane = this.togglePane.bind(this);
  }

  togglePane() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div className="accordion">
        <div className="accordion-header" onClick={this.togglePane}>
          <h4>{this.props.header}</h4>
        </div>
        <div className={this.state.open ? ' accordion-content' : 'accordion-content hidden'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Accordion;
