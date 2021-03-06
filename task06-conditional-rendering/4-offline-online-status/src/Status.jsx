import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends React.Component {
  state = {
    isOnline: null,
  };

  reconnectStatus = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    // const checkOnline = this.state.isOnline ? (
    //   <Online />
    // ) : (
    //   <Offline reconnectStatus={this.reconnectStatus} />
    // );

    return (
      <div className="status">
        <Online />
        <Offline reconnectStatus={this.reconnectStatus} />
      </div>
    );
  }
}

export default Status;
