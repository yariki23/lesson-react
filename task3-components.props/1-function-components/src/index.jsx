import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss';
import Greeting from './search.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Greeting name="Bob" />, rootElement);
