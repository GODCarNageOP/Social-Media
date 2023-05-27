import asyncHandler from "../middleware/asyncHandler.js";
import Like from "../model/Like.js";
import Tweet from "../model/TweetModel.js";
import CustomError from "../utils/CustomError.js";

// Add a new like
export const addLike = asyncHandler(async (req, res, next) => {
  const { postId } = req.body;
  const userId = req.user.id;

  // Check if the post is already liked by the user
  let alreadyLiked = await Like.findOne({ post: postId });

  if (alreadyLiked) {
    // If already liked, remove the like
    const deletedLike = await Like.findByIdAndDelete(alreadyLiked._id);
    let tweetLikes = await Tweet.findById(postId);
    tweetLikes.numOfLikes = tweetLikes.numOfLikes - 1;
    tweetLikes.isLiked = false;

    await tweetLikes.save();
    return res.status(200).json({ message: "Like removed successfully" });
  }

  // If not already liked, create a new like
  const newLike = new Like({
    post: postId,
    user: userId,
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

// Delete a like
// export const deleteLike = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;

//   console.log("Delete", id);

//   // Delete the like from the database
//   const likePost = await Like.findOne({ post: id });
//   if (!likePost) {
//     return next(new CustomError("like Post Not Found", 404));
//   }
//   const likeId = likePost._id;
//   await Like.findByIdAndDelete(likeId);

//   let tweetLikes = await Tweet.findById(id);
//   tweetLikes.numOfLikes = tweetLikes.numOfLikes - 1;
//   tweetLikes.isLiked = false;

//   await tweetLikes.save();

//   res.status(200).json({ message: "Like deleted successfully" });
// });

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
  const likes = await Like.find({ user: userId });

  const postId = likes.post;
  const allLikesPost = await Tweet.findById(postId);
  res.status(200).json(allLikesPost);
});
