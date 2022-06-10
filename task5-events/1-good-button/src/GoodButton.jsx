import React from 'react';

class GoodButton extends React.Component {
  handlerButton() {
    alert('Good job!');
  }

  render() {
    return (
      <button className="fancy-button" onClick={() => this.handlerButton}>
        Good job!
      </button>
    );
  }
}

export default GoodButton;
