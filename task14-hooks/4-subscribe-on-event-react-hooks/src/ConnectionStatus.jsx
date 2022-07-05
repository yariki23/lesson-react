import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [toggleConnect, setConnection] = useState({
    status: 'online',
    borderClass: 'status',
  });

  useEffect(() => {
    const offline = () => {
      setConnection({
        status: 'offline',
        borderClass: 'status status_offline',
      });
    };

    const online = () => {
      setConnection({
        status: 'online',
        borderClass: 'status',
      });
    };

    window.addEventListener('offline', offline);
    window.addEventListener('online', online);

    return () => {
      window.removeEventListener('offline', this.offline);
      window.removeEventListener('online', this.online);
    };
  }, []);
  const { status, borderClass } = toggleConnect;

  return <div className={borderClass}>{status}</div>;
};

export default ConnectionStatus;
