import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import API_BASE_URL from './config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
fetch(`${API_BASE_URL}/api/resource`)
  .then(response => response.json())
  .then(data => console.log(data));