import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// حقن تطبيق الـ React بالكامل داخل وسم الـ div #root الموجود في صفحة index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
