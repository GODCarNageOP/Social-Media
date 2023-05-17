import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/UserModel.js";
import CustomError from "../utils/CustomError.js";
import { StatusCodes } from "http-status-codes";
import sendToken from "../utils/sendtoken.js";
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

//Login User Controller

export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      new CustomError(
        "Please provide email and password",
        StatusCodes.NOT_ACCEPTABLE
      )
    );
  }
  // Check if the  user already exists or not  in the database
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new CustomError("User Not Registered", StatusCodes.NOT_FOUND));
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(
      new CustomError("Invalid Credentials", StatusCodes.UNAUTHORIZED)
    );
  }

  //   const secretKey = process.env.SECRET_KEY;
  sendToken(user, StatusCodes.ACCEPTED, res);
  //   res.status(201).json({ message: "User login successfully" });

  // If the username, email, and phone number are unique, proceed with registration
  // ... (code to create a new user and save it to the database)
});
