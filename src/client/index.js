import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = document.getElementById('root');
hydrateRoot(root, 
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

