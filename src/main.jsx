import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoginPage } from './components/LoginPage.jsx';
import './globals.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
)
