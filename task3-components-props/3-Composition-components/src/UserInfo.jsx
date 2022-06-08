import React from 'react';
import Avatar from './Avatar';
import './userInfo.scss';

const UserInfo = props => {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
    </div>
  );
};

export default UserInfo;
