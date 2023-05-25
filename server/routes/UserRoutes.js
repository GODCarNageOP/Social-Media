import express from "express";
import {
  getUserProfile,
  loginUser,
  logout,
  registerUser,
  sendCode,
  updateProfile,
  userExists,
  verifyOtp,
} from "../controller/UserController.js";
import isAuthenticatedUser from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.put("/verify", verifyOtp);
router.post("/send/otp", sendCode);
router.get("/logout", logout);

router.post("/login", loginUser);
router.route("/edit").put(isAuthenticatedUser, updateProfile);

router.route("/profile").get(isAuthenticatedUser, getUserProfile);
router.post("/userExists", userExists);

let userRouter = router;
export default userRouter;
