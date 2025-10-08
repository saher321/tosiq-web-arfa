import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Contactus from './pages/Contactus.jsx'

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/blog', element: <Blog />},
  {path: '/contact-us', element: <Contactus />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
