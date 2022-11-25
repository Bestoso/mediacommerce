import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/index.css'
import { fireStoreInit } from './firebase/config';

fireStoreInit();

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
