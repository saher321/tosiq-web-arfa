//express, dotenv, mongoose, nodemon, cors
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import verifyUserRequest from "./routes/verifyUserRequest.js";
import webpageRoute from "./routes/WebpageRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser())
const PORT = process.env.PORT || 5000;

const PREFIX = "/api/v1/";

// app.use(PREFIX, userRoute);
app.use(PREFIX, webpageRoute);
// app.use(PREFIX, verifyUserRequest)

app.get("/", (req, res) => {
  res.send("Hello World 1");
});

connectDB().then( () => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
})
