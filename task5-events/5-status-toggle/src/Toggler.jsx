import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: 'Off',
      statusBtn: false,
    };
  }

  toggleStatus() {
    return this.state.statusBtn ? 'Off' : 'On';
  }

  toggleStatusButton(e) {
    this.setState({
      statusBtn: !this.state.statusBtn,
      toggle: (e.target.textContent = this.toggleStatus()),
    });
  }

  render() {
    return (
      <div className="toggler" onClick={this.toggleStatusButton.bind(this)}>
        {this.state.toggle}
      </div>
    );
  }
}

export default Toggler;
