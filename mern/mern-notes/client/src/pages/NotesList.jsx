import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import NoteItem from "../components/NoteItem";
import toast from "react-hot-toast";
import axios from "axios";
import { NOTES_API } from "../resources/api";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getNotes = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(NOTES_API, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });
        console.log(result.data);
        if (result.data.status == false) {
          setNotes([]);
          toast.error("User is not authenthicated!");
          navigate("/login");
        } else {
          setNotes(result.data.notes);
        }
      } catch (error) {
        toast.error("Failed to fetch notes");
      } finally {
        setIsLoading(false);
      }
    };
    getNotes();
  }, []);

  return (
    <>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>Notes</div>
          <NavLink
            className="bg-amber-400 px-4 py-2 rounded cursor-pointer"
            to={"/notes/create"}
          >
            {" "}
            Add Note
          </NavLink>
        </div>

        <div className="my-4">
          {isLoading ? (
            <>Loading...</>
          ) : notes.length > 0 ? (
            <div className="grid grid-cols-12 gap-3">
              {notes?.map((note, i) => {
                return (
                  <div
                    key={i}
                    className="max-sm:col-span-12 lg:col-span-3 md:col-span-6 sm:col-span-6"
                  >
                    <NavLink to={"/notes/detail"}>
                      <NoteItem note={note} setNotes={setNotes} />
                    </NavLink>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>No Notes found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default NotesList;
