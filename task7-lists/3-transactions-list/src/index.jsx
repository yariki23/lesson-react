import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import TransactionsLists from './TransactionsLists.jsx';

const rootElement = document.querySelector('#root');

const transactions = [
  {
    id: 'id-0',
    from: 'USD',
    to: 'EUR',
    amount: 1200,
    rate: 0.8,
    time: '2019-01-10T17:08:35.447Z',
  },
  {
    id: 'id-1',
    from: 'USD',
    to: 'UAH',
    amount: 100000,
    rate: 25.7,
    time: '2019-01-10T18:22:35.447Z',
  },
  {
    id: 'id-2',
    from: 'EUR',
    to: 'USD',
    amount: 100,
    rate: 1.1,
    time: '2019-01-10T17:01:35.447Z',
  },
];

ReactDOM.render(<TransactionsLists transactions={transactions} />, rootElement);

// 0. create project +
// 1. make static layout +
// 2. divide into components +
// 3. static react version
// 4. declare state (what, where) and props
// 5. write logic
