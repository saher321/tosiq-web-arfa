import express from 'express';
import { getAllNotes } from '../controllers/notesController.js';

const notesRoute = express.Router();

notesRoute.get('/notes', getAllNotes)

export default notesRoute;