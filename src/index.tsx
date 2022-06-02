import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MyGlobalStyle } from './App.styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyGlobalStyle />
    <App />
  </React.StrictMode>
);
