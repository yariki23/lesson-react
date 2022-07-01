import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<App title="Some title" />, rootElement);
