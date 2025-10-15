//express, dotenv, mongoose, cors
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send("Hello World 1");
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`)
});