import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Resume from './Resume.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Resume />
  </StrictMode>,
)
