import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.decrementCounter = this.decrementCounter.bind(this);
  }
  reset() {
    this.setState({
      counter: 0,
    });
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrementCounter() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div className="counter">
        <button data-action="decrease" onClick={this.decrementCounter} className="counter__button">
          -
        </button>
        <span className="counter__value" onClick={() => this.reset()}>
          {this.state.counter}
        </span>
        <button data-action="increase" className="counter__button" onClick={this.incrementCounter}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
