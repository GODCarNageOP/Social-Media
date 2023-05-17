import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/UserModel.js";
import CustomError from "../utils/CustomError.js";
import { StatusCodes } from "http-status-codes";
// Register User

export const registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, name, password, gender, phoneNumber } = req.body;

  // Check if the username, email, or phone number already exists in the database
  const userExists = await User.findOne({
    $or: [
      { username: username },
      { email: email },
      { phoneNumber: phoneNumber },
    ],
  });

  if (userExists) {
    return next(new CustomError("User already exists", StatusCodes.CONFLICT));
  }

  const user = await User.create({
    username,
    name,
    email,
    gender,

    phoneNumber,
    password,
  });
  const secretKey = process.env.SECRET_KEY;
  res.status(201).json({ message: "User registered successfully" });

  // If the username, email, and phone number are unique, proceed with registration
  // ... (code to create a new user and save it to the database)
});







