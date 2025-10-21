import express from 'express';
import { createNotes, deleteNote, getAllNotes } from '../controllers/notesController.js';

const notesRoute = express.Router();

notesRoute.get('/notes', getAllNotes);
notesRoute.post('/notes/create', createNotes);
notesRoute.delete('/notes/delete/:id', deleteNote);


export default notesRoute;