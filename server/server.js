import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose"; // Import Mongoose properly
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected!!!"))
  .catch((err) => console.log("Database not connected.....", err));

// Middleware
app.use(express.json());
// middlewares for jwt 
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use("/", authRoutes);

app.listen(port, () => console.log(`Server started on port:${port}`));
