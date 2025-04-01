
import express from "express";
import { signupUser, loginUser } from "../controllers/usercontroller";
// import { authenticateUser } from "../middlewares/authmid";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin", loginUser);

export default router;
