import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

import jobRouter from "./routes/jobs.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";

import { authenticateUser } from "./middleware/authUserMiddleware.js";
import cookieParser from "cookie-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import cloudinary from "cloudinary";

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./public")));

app.use(cookieParser());
app.use(express.json());

app.use("/api/jobs", authenticateUser, jobRouter);
app.use("/api/users", authenticateUser, userRouter);
app.use("/api/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use("*", (req, res) => {
  res.status(404).json("Not Found");
});

// app.use((err, req, res, next) => {
//   res.status(500).json("Something went wrong");
// });

const PORT = process.env.PORT || 5000;

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to DB");
  app.listen(PORT, () => {
    console.log("connected to the server");
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
