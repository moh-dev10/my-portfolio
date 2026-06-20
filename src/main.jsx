import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // 1. قم باستيراد الـ BrowserRouter
import './index.css'
import './i18n/config.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> {/* 2. غلف الـ App بالـ BrowserRouter */}
      <App />
    </HashRouter>
  </StrictMode>,
)