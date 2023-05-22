import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/UserModel.js";
import crypto from "crypto";

import CustomError from "../utils/CustomError.js";
import { StatusCodes } from "http-status-codes";
import sendToken from "../utils/sendtoken.js";
import sendEmail from "../utils/sendEmail.js";
// Register User

// FUNCTION FOR CREATING OTP WHILE SIGNUP

function generateOTP() {
  // Generate a random 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  return otp;
}

// Example usage

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

  const code = generateOTP();
  const message = `Your Otp is  :- \n\n ${code} \n\n If You have not requested this email then, Pleaser Ignore Balraj`;

  await sendEmail({
    email: email,
    subject: "Twitter Verification code",
    message,
  });

  const otpExpiration = Date.now() + 15 * 60 * 1000;
  const user = await User.create({
    username,
    name,
    email,
    gender,
    otpExpiration,
    phoneNumber,
    password,
    otp: code,
    isVerified: false,
  });
  res.status(200).json({
    success: true,
    message: `Verification code  sent to ${email} successfully`,
  });

  await user.save();

  // If the username, email, and phone number are unique, proceed with registration
  // ... (code to create a new user and save it to the database)
});

// verify Otp

export const verifyOtp = asyncHandler(async (req, res, next) => {
  const { phoneNumber, otp } = req.body;

  const user = await User.findOne({ phoneNumber });

  if (!user) {
    return next(new CustomError("User Not exists", StatusCodes.NOT_FOUND));
  }

  const otpMatched = await user.verifyOtp(otp);

  console.log(otp, otpMatched);
  if (!otpMatched) {
    return next(
      new CustomError("Otp is invalid or expire", StatusCodes.NOT_FOUND)
    );
  }

  user.isVerified = true;
  user.otp = null;
  user.otpExpiration=null;
  await user.save();

  res.json({ success: true, message: "verified successfully" });
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
