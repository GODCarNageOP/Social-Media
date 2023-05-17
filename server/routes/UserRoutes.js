import express from "express";
import { registerUser } from "../controller/UserController.js";

const router = express.Router();

router.post("/register", registerUser);

let userRouter = router;
export default  userRouter;
