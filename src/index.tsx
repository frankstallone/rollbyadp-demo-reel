import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './main.css';
import './specter.css';

const rootElement = document.querySelector('[data-roll-highlight-reel]');

if (!rootElement) {
  console.warn('WARNING: Unable to find roll-highlight-reel root element');
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
