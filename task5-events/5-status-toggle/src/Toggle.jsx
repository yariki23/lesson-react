import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: 'Off',
      statusBtn: false,
    };
  }

  toggleStatusButton(e) {
    this.setState({
      statusBtn: !this.state.statusBtn,
      toggle: (e.target.textContent = this.state.statusBtn ? 'Off' : 'On'),
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

export default Toggle;
