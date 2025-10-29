import express from "express";
import {
  createNotes,
  deleteNote,
  detailNote,
  getAllNotes,
  updateNote,
} from "../controllers/notesController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const notesRoute = express.Router();

// all notes

// public route
notesRoute.get("/notes", getAllNotes);

// protected route
notesRoute.use(authMiddleware)
// create a note
notesRoute.post("/notes/create", createNotes); 

// delete a note
notesRoute.delete("/notes/delete/:id", deleteNote);

// single note
notesRoute.get("/notes/:id", detailNote);

// update note
notesRoute.patch("/notes/update/:id", updateNote);

export default notesRoute;
