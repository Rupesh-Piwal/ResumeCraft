import express from "express";
const router = express.Router();
import cors from "cors";
import { test, registerUser } from "../controllers/authController.js";

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);
router.post("/signup", registerUser);

export default router;
