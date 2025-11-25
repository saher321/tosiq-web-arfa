import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Settings from '../pages/Settings'
import Webpages from '../pages/Webpages';

const Routes = () => {
    const router = createBrowserRouter([
        { path: "/", element: <Dashboard />},
        { path: "/dashboard/home", element: <Home />},
        { path: "/dashboard/about", element: <About />},
        { path: "/dashboard/contact", element: <Contact />},
        { path: "/dashboard/webpages", element: <Webpages />},
        { path: "/dashboard/settings", element: <Settings />}
    ])
    return (
        <RouterProvider router={router}/>
    )
}

export default Routes