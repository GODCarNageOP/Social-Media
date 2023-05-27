import asyncHandler from "../middleware/asyncHandler.js";
import Tweet from "../model/TweetModel.js";
import User from "../model/UserModel.js";
import CustomError from "../utils/CustomError.js";

// create Post

export const createTweet = asyncHandler(async (req, res) => {
  const { content, image } = req.body;
  const user = req.user.id;
  let userN = await User.findById(req.user.id);
  let userName = userN.userName;
  let name = userN.name;
  // let userName = user.userName;

  const updateUser = await User.findById(user);
  const tweets = await Tweet.find({ user: user });

  updateUser.numberOfTweets = updateUser.numberOfTweets + 1;
  await updateUser.save();
  const newTweet = await Tweet.create({
    user,
    content,
    image,
    userName,
    name,
    avatar:userN?.avatar
  });

  await newTweet.save();

  res.json({
    success: true,
    tweet: tweets,
  });
});

// get Tweets
export const getAllTweet = asyncHandler(async (req, res) => {
  const tweets = await Tweet.find();

  res.json({
    success: true,
    tweets,
  });
});

// get tweets by id
export const getTweetsById = asyncHandler(async (req, res) => {
  const { user } = req.params;
  const tweets = await Tweet.find({ user: user });

  res.json({
    success: true,
    tweets,
  });
});


//get pesonal Tweets
export const getPersonalTweets = asyncHandler(async (req, res) => {
  const user = req.user.id;
  const tweets = await Tweet.find({ user: user });

  res.json({
    success: true,
    tweets,
  });
});

// Update Post
export const updateTweet = asyncHandler(async (req, res, next) => {
  const {

    numOfComments,
    pinned,
    numOfLikes,
    numOfRetweets,
    views,
    image,
  } = req.body;
  const tweetId = req.params.id;
  const userId = req.user.id;

  let tweet = await Tweet.findById(tweetId);

  if (!tweet) {
    return next(new CustomError("Tweet not found", 404));
  }

  if (tweet.user.toString() !== userId) {
    return next(new CustomError("Not authorized to update this tweet", 404));
  }


  tweet.numOfComments = numOfComments || tweet.numOfComments;
  tweet.pinned = pinned || tweet.pinned;
  tweet.numOfLikes = numOfLikes || tweet.numOfLikes;
  tweet.numOfRetweets = numOfRetweets || tweet.numOfRetweets;
  tweet.views = views || tweet.views;
  tweet.image = image || tweet.image;

  await tweet.save();

  res.json({
    success: true,
    tweet,
  });
});

// Delete Post
export const deleteTweet = asyncHandler(async (req, res, next) => {
  const id  = req.params; // Use req.params instead of req.body to get the tweet ID
  const userId = req.user.id;

  console.log("id", id);

  let tweet = await Tweet.findById(id.id);

  if (!tweet) {
    return next(new CustomError("Tweet not found", 404));
  }

  if (tweet.user.toString() !== userId) {
    return next(new CustomError("Not authorized to update this tweet", 404));
  }

  await Tweet.findByIdAndDelete(id.id)

  res.json({
    success: true,
    message: "Tweet deleted successfully",
  });
});



//upateLikes 
export const updateLikes = asyncHandler(async (req, res, next) => {

  const tweetId = req.params.id;
  const userId = req.user.id;

  let tweet = await Tweet.findById(tweetId);

  if (!tweet) {
    return next(new CustomError("Tweet not found", 404));
  }


  tweet.numOfLikes =tweet.numOfLikes+1;

  await tweet.save();

  res.json({
    success: true,
    tweet,
  });
});