import React from 'react';
import './avatar.scss';

const Avatar = props => {
  return (
    <>
    <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
      <div className="user-info__name">{props.user.name}</div>
    </>
  )
};

export default Avatar;
