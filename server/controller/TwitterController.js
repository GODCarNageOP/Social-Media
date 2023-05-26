import asyncHandler from "../middleware/asyncHandler.js";
import Twitter from "../model/TweetModel.js";
import CustomError from "../utils/CustomError.js";



// create Post

export const createTweet = asyncHandler(async (req, res) => {
  const {
    content,
    image,
  } = req.body;
  const user = req.user.id;

  const newTweet = await Twitter.create({
    user,
    content,
    image,
  });

  await newTweet.save();
  const tweets = await Twitter.find({ user: user });


  res.json({
    success: true,
    tweet: tweets,
  });
});

// get Tweets
export const getAllTweet = asyncHandler(async (req, res) => {
  const tweets = await Twitter.find();

  await tweets.save();

  res.json({
    success: true,
    tweets,
  });
});




// get tweets by id 
export const getTweetsById = asyncHandler(async (req, res) => {
    const {user}=req.params;
  const tweets = await Twitter.find({user: user});

  


  res.json({
    success: true,
    tweets,
  });
});

//get pesonal Tweets
export const getPersonalTweets = asyncHandler(async (req, res) => {
  const user = req.user.id;
  const tweets = await Twitter.find({ user: user });


  res.json({
    success: true,
    tweets,
  });
});

// Update Post
export const updateTweet = asyncHandler(async (req, res, next) => {
  const {
    content,
    numOfComments,
    pinned,
    numOfLikes,
    numOfRetweets,
    views,
    image,
  } = req.body;
  const tweetId = req.params.id;
  const userId = req.user.id;

  let tweet = await Twitter.findById(tweetId);

  if (!tweet) {
    return next(new CustomError("Tweet not found", 404));
  }

  if (tweet.user.toString() !== userId) {
    return next(new CustomError("Not authorized to update this tweet", 404));
  }

  tweet.content = content || tweet.content;
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
export const deleteTweet = asyncHandler(async (req, res) => {
  const tweetId = req.params.id;
  const userId = req.user.id;

  let tweet = await Twitter.findById(tweetId);

  if (!tweet) {
    return next(new CustomError("Tweet not found", 404));
  }

  if (tweet.user.toString() !== userId) {
    return next(new CustomError("Not authorized to update this tweet", 404));
  }

  await tweet.remove();

  res.json({
    success: true,
    message: "Tweet deleted successfully",
  });
});
