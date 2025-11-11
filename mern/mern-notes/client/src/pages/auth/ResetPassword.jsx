import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { RESET_PASSWORD_URL } from '../../resources/api';
import toast from 'react-hot-toast';

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleResetPassword = async (data) => {
    if (!data.password) {
      toast.error("Password field is required");
      return;
    } 

    setIsLoading(true)
    try {
      const newData = {
        email: localStorage.getItem("forgotUserEmail"),
        newPassword: data.password
      }
      const result = await axios.post(RESET_PASSWORD_URL, newData);
      if (result.data.status == true) {
        toast.success(result.data.message, { duration: 4000 });
        navigate('/login')
      } else {
        toast.error(result.data.message);
        return;
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
        <div className='text-center'>Reset Password</div>
      </div>

      <div className='grid items-center mt-5 p-3 rounded max-w-xl bg-amber-400'>
        <form onSubmit={handleSubmit(handleResetPassword)}>

          <div>
            <label className='block'>New Password</label>
            <input {...register("password")} type='password' className='rounded w-full p-3 bg-white' placeholder='Enter your new password'/>
          </div>
          
          <div className='mt-3'>
            {
              isLoading ? 
              <button className='bg-white/70 px-4 py-2 rounded cursor-not-allowed' disabled>
                Reseting your new password...</button> :
              <button className='bg-white/70 px-4 py-2 rounded cursor-pointer' >
                Reset my new password
              </button>
            }
          </div>

        </form>
      </div>
    </div>
    </>
  )
}

export default ResetPassword