import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };
  toggleExpandText = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    let arrowToggle = <i className="fas fa-chevron-up"></i>;

    if (!this.state.isOpen) {
      arrowToggle = <i className="fas fa-chevron-down"></i>;
    }

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleExpandText}>
            {arrowToggle}
          </button>
        </div>
        {this.state.isOpen && this.props.children}
      </div>
    );
  }
}

export default Expand;
