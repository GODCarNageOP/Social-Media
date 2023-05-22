import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";
import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "male",
    },
    phoneNumber: {
      type: String,
      unique: true,
      validate: [validator.isMobilePhone, "Please enter a valid phone number"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [8, "Your password must be at least 8 characters long"],
      select: false,
    },
    dob: {
      type: String,
    },
    bio: {
      type: String,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
        default: "www.avatar.jpg",
      },
    },
    coverimage: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    otp: {
      code: String,
      expiresAt: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

// Hash password if not hashed
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method for matching password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// methods for verifying otps
userSchema.methods.verifyOtp = function (enteredOtp) {
  if (
    this.otp &&
    this.otp.code === enteredOtp &&
    this.otp.expiresAt > new Date()
  ) {
    return true; // OTP is valid
  }
  return false; // OTP is invalid or expired
};


// Send user token if login or register
userSchema.methods.getJWTToken = function () {
  return jwt.sign(
    {
      id: this._id,
      userName: this.username,
      name: this.name,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: Number(process.env.JWT_EXPIRE) * 24 * 60 * 60 * 1000,
    }
  );
};

const User = mongoose.model("User", userSchema);

export default User;
