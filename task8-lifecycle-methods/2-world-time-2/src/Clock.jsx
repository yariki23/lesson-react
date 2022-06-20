import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  const localTime = new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  return moment(localTime).format('LTS');
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      offset: props.offset,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        offset: this.state.offset,
      });
    }, 1000);
  }

  render() {
    // console.log(getTimeWithOffset(this.props.offset));
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{getTimeWithOffset(this.props.offset)}</div>
      </div>
    );
  }
}

export default Clock;
