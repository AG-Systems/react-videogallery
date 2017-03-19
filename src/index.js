import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './Nav';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Nav />,
  document.getElementById('navbar')
);
