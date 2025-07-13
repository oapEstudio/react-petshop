import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx';
import { AdminProvider } from './context/AdminContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <AdminProvider>
          <AuthProvider>
              <App />
            </AuthProvider>  
        </AdminProvider>      
      </CartProvider>
    </Router>
    
  </StrictMode>,
)
