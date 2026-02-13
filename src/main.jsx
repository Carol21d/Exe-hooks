import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ejercicios from './Ejercicios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ejercicios />
  </StrictMode>,
)
