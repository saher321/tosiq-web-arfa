import moment from "moment/moment";

const NoteItem = ({ note }) => {
  return (
    <>
      <div className="bg-white p-3 rounded">
        <div>{note.title}</div>
        <div className="h-56 overflow-y-auto">{note.description}</div>

        <div className="text-gray-700 italic">
            {note.updatedAt ? moment(note.updatedAt).format('MMMM Do YYYY, h:mm:ss a') : "-time-missing"}</div>
      </div>
    </>
  );
};

export default NoteItem;
