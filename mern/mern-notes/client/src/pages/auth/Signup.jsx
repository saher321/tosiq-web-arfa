import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { SIGNUP_URL } from '../../resources/api';
import toast from 'react-hot-toast';
import axios from 'axios';

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleRegisterUser = async (data) => {
    if (!data.name) {
      toast.error("Name field is required");
      return;
    } else if (!data.email) {
      toast.error("Email field is required");
      return;
    } else if (!data.password) {
      toast.error("Password field is required");
      return;
    } 

    setIsLoading(true)
    try {
        const result = await axios.post(SIGNUP_URL, data);
        if (result.data.statusCode == 100) {
            toast.error(result.data.message, { duration: 4000 });
            return;
        } else if (result.data.status == true) {
            toast.success(result.data.message, { duration: 4000 });
            navigate('/login')
        } else {
            toast.error(result.data.message);
        }
    } catch (error) {
      toast.error("Somthing went wrong!");
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
    <div className='p-5'>
      <div className='flex items-center justify-between'>
        <div className='text-center'>Signup</div>
      </div>

      <div className='grid items-center mt-5 p-3 rounded max-w-xl bg-amber-400'>
        <form onSubmit={handleSubmit(handleRegisterUser)}>
          <div>
            <label className='block'>Name</label>
            <input {...register("name")} type='text' className='rounded w-full p-3 bg-white' placeholder='Enter your name'/>
          </div>

          <div className='my-3'>
            <label className='block'>Email</label>
            <input {...register("email")} type='email' className='rounded w-full p-3 bg-white' placeholder='Enter your email'/>
          </div>

          <div>
            <label className='block'>Password</label>
            <input {...register("password")} type='password' className='rounded w-full p-3 bg-white' placeholder='Enter your password'/>
          </div>
          
          <div className='mt-3'>
            {
              isLoading ? 
              <button className='bg-white/70 px-4 py-2 rounded cursor-not-allowed' disabled>
                Signing up...</button> :
              <button className='bg-white/70 px-4 py-2 rounded cursor-pointer' >Signup</button>
            }
          </div>

        </form>
      </div>
    </div>
    </>
  )
}

export default Signup