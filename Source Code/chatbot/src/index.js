import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Corrected path for index.css
import App from './components/App'; // Corrected path for App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);