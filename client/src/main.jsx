import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TransactionProvider} from "./context/TransactionContext.jsx";
import './index.css';

ReactDOM.render(
<TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>,
  document.getElementById('root')
)
