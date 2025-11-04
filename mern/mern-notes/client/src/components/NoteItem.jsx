import axios from "axios";
import moment from "moment/moment";
import toast from "react-hot-toast";
import { NavLink } from "react-router";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { DELETE_NOTE } from "../resources/api";

const NoteItem = ({ note, setNotes }) => {

    const handleDelete = async (e, id) => {
        e.preventDefault();

        if (!window.confirm("Are your sure you want to delete this?")) return;

        try {
            const response = await axios.delete(`${DELETE_NOTE}/${id}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
              }
            });
            if (response.data && response.data.statusCode == 401) {
              toast.error(response.data.message);
              return;
            }
            setNotes((prev) => prev.filter(note => note._id !== id))
            toast.success("Notes deleted successfully");
        } catch (error) {
            toast.error("Failed to delete note");
        }
    }
  return (
    <>
      <div className="bg-white p-3 rounded">
        <div>{note.title}</div>
        <div className="h-56 overflow-y-auto">{note.description}</div>

        <div className="flex items-center justify-between">
            <div className="text-gray-700 italic">
            {note.updatedAt ? moment(note.updatedAt).format('MMMM Do YYYY, h:mm:ss a') : "-time-missing"}</div>

            <div className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-2">
                <div>
                  <NavLink
                  className='text-blue-500'
                  to={`/notes/detail/${note._id}`}>
                    <FaRegEdit />
                  </NavLink>
                </div>
                <button
                className='text-red-500'
                onClick={(e) => handleDelete(e, note._id)}>
                    <FaRegTrashAlt />
                </button>

            </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
