import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import NotesList from '../pages/NotesList'
import CreateNote from '../pages/CreateNote'
import DetailNote from '../pages/DetailNote'

const router = createBrowserRouter([
    { path: '/', element: <NotesList /> },
    { path: '/notes/create', element: <CreateNote /> },
    { path: '/notes/detail/:id', element: <DetailNote /> },
    { path: '*', element: <NotesList /> },
])

const Routes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes