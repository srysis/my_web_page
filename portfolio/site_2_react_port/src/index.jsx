import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRoot from './AppRoot';

import './style/style.css';
import './style/style-phone.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>
);

