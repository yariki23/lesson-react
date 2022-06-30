import React, { Component } from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';

class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app">
        <Numbers title="All numbers" number={this.state.number}></Numbers>
        <EvenNumbers title="All numbers" number={this.state.number}></EvenNumbers>
        <OddNumbers title="All numbers" number={this.state.number}></OddNumbers>
      </div>
    );
  }
}

export default App;
