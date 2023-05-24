import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/UserModel.js";
import crypto from "crypto";

import CustomError from "../utils/CustomError.js";
import { StatusCodes } from "http-status-codes";
import sendToken from "../utils/sendtoken.js";
import sendEmail from "../utils/sendEmail.js";
import { STATUS_CODES } from "http";
// Register User

// FUNCTION FOR CREATING OTP WHILE SIGNUP

function generateOTP() {
  // Generate a random 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  return otp;
}

// Register User

export const registerUser = asyncHandler(async (req, res, next) => {
  const { userName, email, password, name, gender, phoneNumber, dob } =
    req.body;

  // Check if the username, email, or phone number already exists in the database
  const userN = await User.findOne({ userName: userName});


  if (userN) {
    return next(new CustomError("UserName already exists", StatusCodes.CONFLICT));
  }
  const userE = await User.findOne({ email: email });

 if (userE) {
   return next(
     new CustomError("Email already register", StatusCodes.CONFLICT)
   );
 }

  const userP = await User.findOne({ phoneNumber: phoneNumber });


  if (userP) {
    return next(
      new CustomError("Phone already register", StatusCodes.CONFLICT)
    );
  }
  const code = generateOTP();

  const message = `Your Otp is  :- \n\n ${code} \n\n If You have not requested this email then, Pleaser Ignore Balraj`;

  await sendEmail({
    email: email,
    subject: "Twitter Verification code",
    message,
  });
  const otpExpiration = Date.now() + 5 * 60 * 1000;

  const newUserData = {
    name: name,
    email: email,
    gender: gender,
    userName: userName,
    password: password,
    phoneNumber: phoneNumber,
    dob: dob,
    bio: req.body.bio || "",
    otpExpiration: otpExpiration,
    otp: code,
    isVerified: false,
  };
  const newUser = await User.create(newUserData);

  res.status(200).json({
    success: true,
    message: `Verification code  sent to ${email} successfully`,
  });

  // If the username, email, and phone number are unique, proceed with registration
  // ... (code to create a new user and save it to the database)
});

// send otp
export const sendCode = asyncHandler(async (req, res, next) => {
  const { email } = req.param;


  const user = await User.findOne({ email: email });

  if (!user) {
    return next(new CustomError("User Not exists", StatusCodes.CONFLICT));
  }

  const code = generateOTP();
  const message = `Your Otp is  :- \n\n ${code} \n\n If You have not requested this email then, Pleaser Ignore Balraj`;

  await sendEmail({
    email: email,
    subject: "Twitter Verification code",
    message,
  });

  const otpExpiration = Date.now() + 5 * 60 * 1000;


  // Update the user data
  user.otpExpiration = otpExpiration;
  user.otp = code;
  user.isVerified = false;

  // Save the updated user to the database
  await user.save();

  res.status(200).json({
    success: true,
    message: `Verification code sent to ${email} successfully`,
  });
});

//verifyOtp
export const verifyOtp = asyncHandler(async (req, res, next) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return next(new CustomError("User Not exists", StatusCodes.NOT_FOUND));
  }

  const otpMatched = await user.verifyOtp(otp);

  console.log(otp, otpMatched);
  if (!otpMatched) {
    return next(
      new CustomError("Otp is invalid or expired", StatusCodes.NOT_FOUND)
    );
  }

  // Update the user data
  user.isVerified = true;
  user.otp = null;
  user.otpExpiration = null;

  // Save the updated user to the database
  await user.save();

  // Optionally, you can send a new token to the client
  sendToken(user,200, res);

  // res.json({ success: true, message: "verified successfully", user });
});

//Login User Controller

export const loginUser = asyncHandler(async (req, res, next) => {
  const { email } = req.query;
  
  const {password } = req.body;
 

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
  // const secretKey = process.env.SECRET_KEY;

  sendToken(user,200, res);
  //   res.status(201).json({ message: "User login successfully" });

  // If the username, email, and phone number are unique, proceed with registration
  // ... (code to create a new user and save it to the database)
});

//update use profile

export const updateProfile = asyncHandler(async (req, res, next) => {
  const {
    userName,
    name,
    email,
    phoneNumber,
    gender,
    bio,
    dob,
    avatar,
    coverImage,
  } = req.body;
  const user = await User.findById(req.user.id);

  const newUserData = {
    name: name || user.name,
    email: email || user.email,
    gender: gender || user.gender,
    userName: userName || user.userName,
    phoneNumber: phoneNumber || user.phoneNumber,
    dob: dob || user.dob,
    bio: bio || user.bio,
  };

  if (email) {
    newUserData.isVerified = false;
  }

  await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  if (!user) {
    return next(new CustomError("User Not Found", 404));
  }

  res.status(200).json({
    success: true,
  });
});





// get user profile
export const getUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return next(new CustomError("User not found", StatusCodes.NOT_FOUND));
  }
  res.json(user);
});






//  user exists

export const userExists = asyncHandler(async (req, res, next) => {
  const user = await User.findOne(req.body.email);

  if (user) {
    return next(new CustomError("User Exists", 404));
  }

  res.json({
    success: true,
  });
});






// update password

export const updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const { oldPassword, newPassword } = req.body;

  const isMatched = await user.matchPassword(oldPassword);

  if (!isMatched) {
    return next(new CustomError("Invalid Original Password ", 404));
  }

  user.password = newPassword;
  const updatedUser = await user.save();

  res.status(200).json({ success: true, data: updatedUser });
});







//logout 
export const logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});








//forgot password
export const forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return next(new CustomError("User Not found", 404));
  }

  const resetToken = user.getResetPasswordToken();

  await user.save({
    validateBeforeSave: false,
  });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}//password/reset/${resetToken}`;

  const message = `Your Password reset token is :- \n\n ${resetPasswordUrl} \n\n If You have not requested this email then, Pleaser Ignore Balraj`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Ecommerce Password Recovery",
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully `,
    });
  } catch (error) {
    user.resetPasswordExpire = undefined;
    user.resetPasswordToken = undefined;
    await User.save({
      validateBeforeSave: false,
    });

    return next(new CustomError(error.message, 500));
  }
});





// Reset Password
export const ResetPassword = asyncHandler(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler("reset password token is expire or invalid", 400)
    );
  }

  const { password } = req.body;

  user.password = password;
  user.resetPasswordExpire = undefined;
  user.resetPasswordToken = undefined;
  await user.save();
  const payload = {
    id: user._id,
    name: user.name,
    email: user.email,
  };

  sendToken(user, 200, res);
});
