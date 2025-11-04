import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { LOGIN_URL } from '../../resources/api';
import toast from 'react-hot-toast';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleLoginUser = async (data) => {
    if (!data.email) {
      toast.error("Email field is required");
      return;
    } else if (!data.password) {
      toast.error("Password field is required");
      return;
    } 

    setIsLoading(true)
    try {
        const result = await axios.post(LOGIN_URL, data);
        if (result.data.statusCode == 404) {
            toast.error(result.data.message, { duration: 4000 });
            return;
        } else if (result.data.status == true) {
            result.data.userToken && localStorage.setItem("userToken", result.data.userToken)
            toast.success(result.data.message, { duration: 4000 });
            navigate('/')
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
        <div className='text-center'>Login</div>
      </div>

      <div className='grid items-center mt-5 p-3 rounded max-w-xl bg-amber-400'>
        <form onSubmit={handleSubmit(handleLoginUser)}>

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
                Logging...</button> :
              <button className='bg-white/70 px-4 py-2 rounded cursor-pointer' >Login</button>
            }
          </div>

        </form>
      </div>
    </div>
    </>
  )
}

export default Login