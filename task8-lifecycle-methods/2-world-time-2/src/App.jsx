import React from 'react';
import Clock from './Clock.jsx';

class App extends React.Component {
  state = {
    visible: true,
  };

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggle}>toggle</button>
        {this.state.visible && (
          <div style={{ display: 'flex' }}>
            <Clock location={'New York'} offset={-5} />
            <Clock location={'Kyiv'} offset={2} />
            <Clock location={'London'} offset={0} />
          </div>
        )}
      </>
    );
  }
}

export default App;
