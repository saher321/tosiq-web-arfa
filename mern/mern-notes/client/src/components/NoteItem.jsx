import axios from "axios";
import moment from "moment/moment";
import toast from "react-hot-toast";
import { NavLink } from "react-router";

const NoteItem = ({ note, setNotes }) => {

    const handleDelete = async (e, id) => {
        e.preventDefault();

        if (!window.confirm("Are your sure you want to delete this?")) return;

        try {
            await axios.delete(`http://localhost:5000/api/v1/notes/delete/${id}`);
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

            <div>
                <button
                className='text-red-500'
                onClick={(e) => handleDelete(e, note._id)}>
                    Delete
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
