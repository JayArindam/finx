import express from "express";
import { finxres } from "../controllers/finxres";
import { authenticateUser } from "../middlewares/authmid";

const router = express.Router();

// Protected route that calls finxSamp
router.get("/finx", authenticateUser, finxres);

export default router;