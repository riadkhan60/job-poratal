import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './Router.jsx';
import { ThemeProvider } from '@emotion/react';
import theme from './Ui/Theme.js';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
