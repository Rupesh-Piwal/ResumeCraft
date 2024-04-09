import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("hello mf"));

app.listen(port, () => console.log(`server started on port:${port}`));
