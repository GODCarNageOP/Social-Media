import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/UserModel.js";


// Register User

export const registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, name, password, avatar, gender, phoneNumber } =
    req.body;


  // Check if the username, email, or phone number already exists in the database
  const userExists = await User.findOne({
    $or: [
      { username: username },
      { email: email },
      { phoneNumber: phoneNumber },
    ],
  });

  if (userExists) {
    return res.status(409).json({ error: "User already registered" });
  }

  await User.create(req.body)
  // If the username, email, and phone number are unique, proceed with registration
  // ... (code to create a new user and save it to the database)

  res.status(201).json({ message: "User registered successfully" });
});
