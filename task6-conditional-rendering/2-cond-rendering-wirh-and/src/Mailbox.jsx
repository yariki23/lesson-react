import React from 'react';
// 0. create project +
// 1. make static layout +
// 2. divide into components +
// 3. static react version
// 4. declare state (what, where) and props
// 5. write logic

const Mailbox = ({ unreadMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">MESSAGES</span>
      {unreadMessages.length > 0 && <span className="mailbox__count">{unreadMessages.length}</span>}
    </div>
  );
};

export default Mailbox;
