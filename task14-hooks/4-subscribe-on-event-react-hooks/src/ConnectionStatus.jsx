import React, { useEffect, useState } from 'react';

// const ConnectionStatus = () => {};

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
    borderClass: 'status',
  };

  componentDidMount() {
    window.addEventListener('offline', this.offline);
    window.addEventListener('online', this.online);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.offline);
    window.removeEventListener('online', this.online);
  }

  offline = e => {
    this.setState({
      status: 'offline',
      borderClass: 'status status_offline',
    });
  };

  online = e => {
    this.setState({
      status: 'online',
      borderClass: 'status',
    });
  };

  toggleClass = () => {
    window.removeEventListener('offline', () => true);
  };

  render() {
    return <div className={this.state.borderClass}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;
