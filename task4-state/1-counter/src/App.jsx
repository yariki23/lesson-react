import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
  return (
    <>
      <Counter start={3} interval={200} />
      <Counter start={-23} interval={900} />
      <Counter start={17} interval={2000} />
    </>
  );
}

export default App;
