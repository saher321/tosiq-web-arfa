//express, dotenv, mongoose, nodemon, cors
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import notesRoute from "./routes/notesRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

const PREFIX = "/api/v1/";

app.use(PREFIX, notesRoute);

app.get("/", (req, res) => {
  res.send("Hello World 1");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});
