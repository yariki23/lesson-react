import React from 'react';

const NumbersList = ({ arrNumbers }) => {
  console.log(arrNumbers);
  return (
    <ul>
      {arrNumbers.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
