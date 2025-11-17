import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyNavbar from './components/MyNavbar'
import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyNavbar />
    <Home />
  </StrictMode>,
)
