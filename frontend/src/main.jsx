import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './app/index.css'
import App from './app/App.jsx'
import { AuthProvider } from './app/authentication/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />    
    </AuthProvider>
  </StrictMode>,
)
