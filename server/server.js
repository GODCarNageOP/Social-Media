import app from "./app.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";

import multer from "multer";
import connectDB from "./config/connectDB.js";

dotenv.config({ path: "config/config.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is working fine",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server is listening on ${process.env.PORT}`);
});
