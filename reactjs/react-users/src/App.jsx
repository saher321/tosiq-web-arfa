import React from 'react'
import users from './utils/users.js'
import { FiMessageSquare, FiUserPlus  } from "react-icons/fi";

import noImg from './assets/images/noImg.jpg'

const App = () => {
  return (
    <>
      <div className='m-4 text-3xl text-green-500'> User Data </div>
    {
      users.length > 0 ?
      <div className='grid grid-cols-12'>
        {users.map((user)=>{
          return (
            <div className='m-4 col-span-3'>
              <div className='card bg-white p-3 rounded text-center'>
                <div className='profile-img grid place-items-center'>
                  <img src={user.profile ? user.profile : noImg} />
                </div>
                <div>{user.name}</div>
                <small className='block'>{user.userName}</small>
                
                <button> <FiMessageSquare /> </button>
                <button> <FiUserPlus /> </button>

              </div>
            </div>
          )
        })}
      </div> : "No users found"
    }
    </>
  )
}

export default App