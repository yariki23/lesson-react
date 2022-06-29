import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const users = [
  {
    name: 'Tad',
    age: 20,
    id: 1,
  },
  {
    name: 'Bil',
    age: 60,
    id: 2,
  },
  {
    name: 'Anna',
    age: 34,
    id: 3,
  },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElement);
