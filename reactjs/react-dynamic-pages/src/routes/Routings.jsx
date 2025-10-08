import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Users from '../pages/Users';
import Contactus from '../pages/Contactus';
import Page404 from '../pages/Page404';
import UserDetails from '../pages/UserDetails';

const Routings = () => {

    const router = createBrowserRouter([
      {path: '/', element: <Home />},
      {path: '/blog', element: <Blog />},
      {path: '/users', element: <Users />},
      {path: '/users/:id', element: <UserDetails />},
      {path: '/contact-us', element: <Contactus />},

      // 404 not found
      {path: '*', element: <Page404 />},
    ]);

  return (
    <RouterProvider router={router} />
  )
}

export default Routings