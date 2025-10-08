import React from 'react'
import Navbar from '../components/Navbar'
import PageNoFound from '../assets/pagenotfound.png'
const Page404 = () => {
  return (
    <>
      <Navbar />
      <div className='m-4'>
          <div className='grid place-items-center'>
            <img 
            className='block h-96'
            src={PageNoFound} />
          </div>
      </div>
    </>
  )
}

export default Page404