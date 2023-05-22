import asyncHandler from "./asyncHandler";

import CustomError from "../utils/CustomError";
import { Jwt } from "jsonwebtoken";

import User from "../model/UserModel";

const isAuthenticatedUser = asyncHandler(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new CustomError("Please Login To Accest this", 401));
  }
  const decodeData=jwt.verify(token,processe.env.SECRET_KEY);
  req.user=await User.findById(decodeData.id);

  next();

});



//Get All Users

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    Users: users,
  });
});
