import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('good palce to create state');
  }

  componentDidMount() {
    console.log('API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('decide to render or not to render');
  }

  componentWillUnmount() {
    console.log('cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('React element to build DOM');
    return <div className="number">32</div>;
  }
}

export default Life;
