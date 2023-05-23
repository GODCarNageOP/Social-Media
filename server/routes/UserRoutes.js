import express from "express";
import { getUserProfile, loginUser, registerUser, sendCode, userExists, verifyOtp } from "../controller/UserController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify", verifyOtp);
router.post("/send/otp", sendCode);


router.post("/login", loginUser);
router.get("/me",getUserProfile );
router.post("/userExists", userExists);




let userRouter = router;
export default  userRouter;
