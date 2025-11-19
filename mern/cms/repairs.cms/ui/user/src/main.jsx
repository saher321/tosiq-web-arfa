import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routing/Routes'

import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Routes />
  </StrictMode>,
)
