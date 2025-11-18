import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Aboutus from '../pages/Aboutus'
import Contactus from '../pages/Contactus'
import MyNavbar from '../components/MyNavbar'
import Footer from '../components/Footer'

const Routes = () => {

    const router = createBrowserRouter([
        {path: "/", element: <><MyNavbar /><Home /><Footer /></>},
        {path: "/about-us", element: <><MyNavbar /><Aboutus /><Footer /></>},
        {path: "/contact-us", element: <><MyNavbar /><Contactus /><Footer /></>},

        {path: "*", element: <NotFound />},
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Routes