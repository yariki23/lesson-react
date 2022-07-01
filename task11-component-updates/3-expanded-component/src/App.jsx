import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expand from './Expand.jsx';

class App extends Component {
  state = {
    isOpen: false,
  };
  toggleExpandText = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="app">
        <Expand
          isOpen={this.state.isOpen}
          toggleExpandText={this.toggleExpandText}
          title="some title"
        >
          <div className="expand__content">
            <p>
              Hooks are a new addition in React 16.8. They let you use state and other React
              features without writing a class.
            </p>
          </div>
        </Expand>
      </div>
    );
  }
}

export default App;
