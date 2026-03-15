import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { BookNowProvider } from './context/BookNowContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BookNowProvider>
        <App />
      </BookNowProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
