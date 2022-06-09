import React, { Component } from 'react';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  const localTime = new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  return localTime.getHours() >= 12
    ? `${localTime.getHours() - 12}:${localTime.getMinutes()}:${localTime.getSeconds()} AM`
    : `${localTime.getHours()}:${localTime.getMinutes()}:${localTime.getSeconds()} PM`;
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      offset: props.offset,
    };

    setInterval(() => {
      this.setState({
        offset: this.state.offset,
      });
    }, 100);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{getTimeWithOffset(this.props.offset)}</div>
      </div>
    );
  }
}

export default Clock;
