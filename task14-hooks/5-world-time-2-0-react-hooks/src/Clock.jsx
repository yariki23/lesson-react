import React, { Component, useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  const localTime = new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  return moment(localTime).format('LTS');
};

const Clock = props => {
  const [seconds, setClock] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { offset, location } = props;
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{getTimeWithOffset(offset)}</div>
    </div>
  );
};

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       location: props.location,
//       offset: props.offset,
//     };

//     setInterval(() => {
//       this.setState({
//         offset: this.state.offset,
//       });
//     }, 100);
//   }

//   render() {
//     return (
//       <div className="clock">
//         <div className="clock__location">{this.state.location}</div>
//         <div className="clock__time">{getTimeWithOffset(this.props.offset)}</div>
//       </div>
//     );
//   }
// }

export default Clock;
