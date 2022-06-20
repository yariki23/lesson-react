import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    // this.state = { count: 0 };
    // this.addIncrement = this.addIncrement.bind(this);
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    // return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }

  // addIncrement() {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // }

  render() {
    console.log('return React element to build DOM');
    return (
      <div className="count" onClick={this.addIncrement}>
        {/* {this.state.count} */}
      </div>
    );
  }
}

export default Life;
