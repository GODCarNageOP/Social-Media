import CustomError from "../utils/CustomError.js";
import jwt from "jsonwebtoken";
import User from "../model/UserModel.js";
import asyncHandler from "./asyncHandler.js";

const isAuthenticatedUser = asyncHandler(async (req, res, next) => {
const { token } = req.cookies;


if (!token) {
  return next(new CustomError("Pleaser login to access this resources", 401));
}

const decodeData = jwt.verify(token, process.env.SECRET_KEY);
req.user = await User.findById(decodeData.id);

next();
});

// Get All Users
export const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users: users,
  });
});

export default isAuthenticatedUser;
