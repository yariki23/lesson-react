import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector("#root");

const element = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I'm learning React</div>
  </div>
);

ReactDOM.render(element, rootElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
