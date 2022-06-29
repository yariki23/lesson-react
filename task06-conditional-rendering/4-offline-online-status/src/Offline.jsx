import React from 'react';

const Offline = ({ reconnectStatus }) => {
  return (
    <>
      <span className="status__text">Offline</span>
      <button className="status__btn" onClick={reconnectStatus}>
        Reconnect
      </button>
    </>
  );
};

export default Offline;
