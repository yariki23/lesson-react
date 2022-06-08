import React from 'react';
import moment from 'moment';

const Greeting = props => {
  return (
    <div className="greeting">
      My name is {props.user.firstName} {props.user.lastName}. I'm{' '}
      {moment().diff(props.user.birthDate, 'years')} years old
    </div>
  );
};

export default Greeting;
