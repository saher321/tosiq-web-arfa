import React, { useEffect, useState } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import NotesList from '../pages/NotesList'
import CreateNote from '../pages/CreateNote'
import DetailNote from '../pages/DetailNote'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'
import axios from 'axios'
import { VERIFY } from '../resources/api'



const Routes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const verifyUser = async () => {
      
      setIsLoading(true)
      try {
        const response = await axios.get(VERIFY, { withCredentials: true })
        console.log(response.data)
        setIsAuth(response.data.status)
      } catch (error) {
        setIsAuth(false)
      } finally {
        setIsLoading(false)
      }
    }
    verifyUser();
  },[])

  if (isLoading)
  {
    return <div>Loading...</div>
  }

  const router = createBrowserRouter([
    { path: '/register', element: <Signup /> },
    { path: '/login', element: !isAuth ? <Login /> : <Navigate to={'/'} replace/> },
    { path: '/', element:  isAuth ? <NotesList /> : <Navigate to={'/login'} replace/>},
    { path: '/notes/create', element: isAuth ? <CreateNote /> : <Navigate to={'/login'} replace/> },
    { path: '/notes/detail/:id', element: isAuth ? <DetailNote /> : <Navigate to={'/login'} replace/> },
    { path: '*', element: <NotesList /> },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default Routes