import React from 'react';

class ColorPicker extends React.Component {
  constructor() {
    super();

    this.state = {
      toggle: '',
    };
  }

  setIsShown(status, color) {
    this.setState({
      toggle: status ? color : '',
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.toggle}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setIsShown(true, 'Coral')}
            onMouseLeave={() => this.setIsShown(false)}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setIsShown(true, 'Aqua')}
            onMouseLeave={() => this.setIsShown(false)}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setIsShown(true, 'Bisque')}
            onMouseLeave={() => this.setIsShown(false)}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
