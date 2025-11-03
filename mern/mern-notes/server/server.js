//express, dotenv, mongoose, nodemon, cors
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import notesRoute from "./routes/notesRoute.js";
import userRoute from "./routes/userRoute.js";
import verifyUserRequest from "./routes/verifyUserRequest.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser())
const PORT = process.env.PORT || 5000;

const PREFIX = "/api/v1/";

app.use(PREFIX, userRoute);
app.use(PREFIX, notesRoute);
app.use(PREFIX, verifyUserRequest)

app.get("/", (req, res) => {
  res.send("Hello World 1");
});

connectDB().then( () => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
})


// 5 products (name, description, price, category, rating)