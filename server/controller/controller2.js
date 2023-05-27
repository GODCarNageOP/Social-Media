const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const app = express();

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'YOUR_CLOUD_NAME',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET'
});

// Initialize multer upload
const upload = multer({ dest: 'uploads/' }).single('media');

// Handle media upload
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ message: 'Error: No file selected!' });
      } else {
        // Upload file to Cloudinary
        cloudinary.uploader.upload(req.file.path, (error, result) => {
          if (error) {
            res.status(400).json({ message: error });
          } else {
            res.status(200).json({ message: 'File uploaded successfully!', file: result });
          }
        });
      }
    }
  });
});

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));