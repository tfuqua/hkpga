import React, { Component } from 'react';

class Modal extends Component {
  render() {
    if (this.props.isOpen) {
      return (
        <div className="modal-open" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={this.props.toggleModal.bind(this, this.props.id)}>
                  <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title">{this.props.title}</h4>
              </div>
              {this.props.children} {/* Wrap with modal-body and add modal-footer if needed */}
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Modal;
