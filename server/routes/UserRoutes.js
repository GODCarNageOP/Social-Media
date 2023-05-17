import express from "express";
import { loginUser, registerUser } from "../controller/UserController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);


let userRouter = router;
export default  userRouter;
