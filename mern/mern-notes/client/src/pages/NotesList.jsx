import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import NoteItem from '../components/NoteItem'
import toast from 'react-hot-toast';
import axios from 'axios';
import { NOTES_API } from '../resources/api';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    const getNotes = async () => {

      setIsLoading(true)
      try {
        const result = await axios.get(NOTES_API);
        setNotes(result.data.notes)
      } catch (error) {
        toast.error("Failed to fetch notes")
      } finally {
        setIsLoading(false)
      }
    }
    getNotes();
  },[])

  return (
    <>
    <div className='p-5'>
      <div className='flex items-center justify-between'>
        <div>Notes</div>
        <NavLink 
        className="bg-amber-400 px-4 py-2 rounded cursor-pointer"
        to={'/notes/create'}> Add Note</NavLink>
      </div>

      <div className='my-4'>
        {isLoading ? <>Loading...</> :
        <div className='grid grid-cols-12 gap-3'>
          {notes.length > 0 ?
          notes.map((note, i) => {
            return (
              <div key={i} className='col-span-4'>
                <NoteItem note={note} setNotes={setNotes} />
              </div>
            )
          }) :
          <div>No Notes found</div>
          }
        </div>
        }
        
      </div>
    </div>
    </>
  )
}

export default NotesList