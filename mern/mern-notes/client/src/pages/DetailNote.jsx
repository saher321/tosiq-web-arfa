import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { NavLink, useNavigate, useParams } from 'react-router'
import { DETAIL_NOTE, UPDATE_NOTE } from '../resources/api';

const DetailNote = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSingleNote = async () => {
      try {
        const result = await axios.get(`${DETAIL_NOTE}/${params.id}`)
        if (result.data && result.data.note) {
          reset(result.data.note)
        }
      } catch (error) {
        toast.error("Something went wrong!")
      }
    }
    getSingleNote();
  }, [params.id])

  const handleUpdateNote = async (data) => {
    setIsLoading(true)
    try {
      const success = await axios.patch(`${UPDATE_NOTE}/${params.id}`, data);
      if (success) {
        toast.success("Note update successfully", { duration: 4000 });
        navigate('/')
      } else {
        toast.error("Failed to update note");
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
        <div>Detail Note ({params.id})</div>
        <div>
          <NavLink 
          className="bg-amber-400 px-4 py-2 rounded cursor-pointer"
          to={'/'}> All Note </NavLink>
        </div>
      </div>

      <div className='mt-5 p-3 rounded max-w-xl bg-amber-400'>
        <form onSubmit={handleSubmit(handleUpdateNote)}>
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
                Updating...</button> :
              <button className='bg-white/70 px-4 py-2 rounded cursor-pointer' >Update Note</button>
            }
          </div>

        </form>
      </div>
    </div>
    </>
  )
}

export default DetailNote