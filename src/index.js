import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App'
import CalculatorProvider from './context/CalculatorProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalculatorProvider>
    <App />
    </CalculatorProvider>
  </React.StrictMode>,
)
