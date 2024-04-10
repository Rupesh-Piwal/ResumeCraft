import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import { mongoose } from "mongoose";
dotenv.config();

//database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected!!!"))
  .catch((err) => console.log("Database not connected.....", err));

const port = process.env.PORT || 5000;

const app = express();

app.use("/", authRoutes);

app.listen(port, () => console.log(`server started on port:${port}`));
