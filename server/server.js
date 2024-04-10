import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import { mongoose } from "mongoose";
dotenv.config();
const app = express();

//database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected!!!"))
  .catch((err) => console.log("Database not connected.....", err));

//middleware
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/", authRoutes);

app.listen(port, () => console.log(`server started on port:${port}`));
