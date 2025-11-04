import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router'
import { CREATE_NOTE } from '../resources/api';
const CreateNote = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleSaveNote = async (data) => {
    if (!data.title) {
      toast.error("Title field is required");
      return;
    } else if (!data.description) {
      toast.error("Description field is required");
      return;
    } 
    setIsLoading(true)
    try {
      const result = await axios.post(CREATE_NOTE, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`
          }
        });
      if (result) {
        toast.success("Note create successfully", { duration: 4000 });
        navigate('/')
      } else {
        toast.error("Failed to create note");
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
        <div>Create Note</div>
        <div>
          <NavLink 
          className="bg-amber-400 px-4 py-2 rounded cursor-pointer"
          to={'/'}> All Note </NavLink>
        </div>
      </div>

      <div className='mt-5 p-3 rounded max-w-xl bg-amber-400'>
        <form onSubmit={handleSubmit(handleSaveNote)}>
          <div>
            <label className='block'>Title</label>
            <input {...register("title")} type='text' className='rounded w-full p-3 bg-white' placeholder='Enter your title'/>
          </div>

          <div className='my-3'>
            <label className='block'>Description</label>
            <textarea {...register("description")} className='rounded w-full p-3 bg-white' placeholder='Enter your description'/>
          </div>
          
          <div>
            {
              isLoading ? 
              <button className='bg-white/70 px-4 py-2 rounded cursor-not-allowed' disabled>
                Saving...</button> :
              <button className='bg-white/70 px-4 py-2 rounded cursor-pointer' >Save Note</button>
            }
          </div>

        </form>
      </div>
    </div>
    </>
  )
}

export default CreateNote