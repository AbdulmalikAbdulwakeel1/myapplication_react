import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Application from './application';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Application/>
  </React.StrictMode>
);

// root.render(<Header/>,document.getElementById('root'));




reportWebVitals();
