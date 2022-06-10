import React from 'react';

class GoodButton extends React.Component {
  handlerButton(e) {
    alert(e.target.textContent);
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.handlerButton}>
        Good job!
      </button>
    );
  }
}

export default GoodButton;
