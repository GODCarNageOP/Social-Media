import asyncHandler from "../middleware/asyncHandler.js";
import Like from "../model/Like.js";
import Tweet from "../model/TweetModel.js";
import CustomError from "../utils/CustomError.js";

// Add a new like
export const addLike = asyncHandler(async (req, res, next) => {
  const { postId } = req.body;
  const userId = req.user.id;

  // Check if the post is already liked by the user
  let alreadyLiked = await Like.findOne({
    post: postId,
    "likedBy.user": userId,
  });

  if (alreadyLiked) {
    // If already liked, remove the like
    const deletedLike = await Like.findOneAndDelete({
      post: postId,
      "likedBy.user": userId,
    });
    let tweetLikes = await Tweet.findById(postId);
    tweetLikes.numOfLikes = tweetLikes.numOfLikes - 1;
    tweetLikes.isLiked = false;

    await tweetLikes.save();
    return res.status(200).json({ message: "Like removed successfully" });
  }




  // If not already liked, create a new like
  const newLike = new Like({
    post: postId,
    likedBy: [{ user: userId }],
  });

  // Save the new like to the database
  const savedLike = await newLike.save();

  // Update the tweet's like count and status
  let tweetLikes = await Tweet.findById(postId);
  tweetLikes.numOfLikes = tweetLikes.numOfLikes + 1;
  tweetLikes.isLiked = true;

  await tweetLikes.save();

  res.status(201).json(savedLike);
});







// Get all likes
export const getAllLikes = asyncHandler(async (req, res, next) => {
  // Retrieve all likes from the database
  const likes = await Like.find();

  res.status(200).json(likes);
});

// Get personal likes by user ID
export const getPersonalLikes = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  // Retrieve personal likes from the database based on user ID
  const likes = await Like.find({ "likedBy.user": userId });

  res.status(200).json(likes);
});





// Check if user has liked a tweet
export const checkIfUserLikedTweet = asyncHandler(async (req, res, next) => {
  const { tweetId } = req.body;
  const userId = req.user.id;

  // Check if the user has liked the tweet
  const like = await Like.findOne({ post: tweetId, "likedBy.user": userId });

  console.log("liked",like,tweetId,userId);
  if (like) {
    res.status(200).json({ liked: true });
  } else {
    res.status(200).json({ liked: false });
  }
});
