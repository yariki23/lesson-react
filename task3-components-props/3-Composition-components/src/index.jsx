import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Comment from './Comment';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com',
};

ReactDOM.render(<Comment author={userInfo} text="Good job!" />, rootElement);
