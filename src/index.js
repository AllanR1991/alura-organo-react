import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Esse é o arquivo inicial a ser executado
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /**
   * <React.StrictMode> -> em modo de desenvolvimento ajuda a previnir erros.
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);