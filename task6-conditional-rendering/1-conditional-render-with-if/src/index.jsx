import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Auth from './Auth.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Auth />, rootElement);

// 0. create project +
// 1. make static layout +
// 2. divide into components +
// 3. static react version
// 4. declare state (what, where) and props
// 5. write logic