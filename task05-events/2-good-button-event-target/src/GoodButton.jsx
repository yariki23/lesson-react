import React from 'react';

class GoodButton extends React.Component {
  handlerButton(event) {
    alert(event.target.textContent);
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.handlerButton}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
