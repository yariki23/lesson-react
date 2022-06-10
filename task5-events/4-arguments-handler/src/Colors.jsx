import React from 'react';

class Colors extends React.Component {
  setBodyColor(color) {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: 'RED' }}
          onClick={() => this.setBodyColor('RED')}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: 'GREEN' }}
          onClick={() => this.setBodyColor('GREEN')}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: 'BLUE' }}
          onClick={() => this.setBodyColor('BLUE')}
        ></button>
      </div>
    );
  }
}

export default Colors;
