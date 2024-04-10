import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use("/", authRoutes);

app.listen(port, () => console.log(`server started on port:${port}`));
