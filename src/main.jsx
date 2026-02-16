import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ExuseRef from './ExuseRef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExuseRef />
  </StrictMode>
)
