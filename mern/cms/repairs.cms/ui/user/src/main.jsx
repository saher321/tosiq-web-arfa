import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyNavbar from './components/MyNavbar'
import Home from './pages/Home'
import Routes from './routing/Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Routes />
  </StrictMode>,
)
