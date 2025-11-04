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
notesRoute.get("/notes", authMiddleware, getAllNotes);
// create a note
notesRoute.post("/notes/create", authMiddleware, createNotes); 

// delete a note
notesRoute.delete("/notes/delete/:id", authMiddleware, deleteNote);

// single note
notesRoute.get("/notes/:id", authMiddleware, detailNote);

// update note
notesRoute.patch("/notes/update/:id", authMiddleware, updateNote);

export default notesRoute;
