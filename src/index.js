import React from 'react';
import ReactDOM from 'react-dom/client';
import App   from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MovieProvider } from 'components/MovieContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <BrowserRouter basename='/goit-react-hw-05-movies'>
        <App />
      </BrowserRouter>
    </MovieProvider>
    
    
  </React.StrictMode>
);
