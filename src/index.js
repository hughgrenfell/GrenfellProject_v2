import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global-styles.css';
import App from './App';
import { Header } from './javascript/Header';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <App />
  </Router>
);

