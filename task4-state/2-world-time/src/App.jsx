import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location={'NEW York'} offset={-5} />
      <Clock location={'Kyiv'} offset={2} />
      <Clock location={'London'} offset={0} />
    </>
  );
};

export default App;
