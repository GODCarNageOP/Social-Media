import asyncHandler from "../middleware/asyncHandler.js";
import Following from "../model/Following.js";
import User from "../model/UserModel.js";
import CustomError from "../utils/CustomError.js";

// @desc    Follow a user
// @route   POST /api/follow/:followId
// @access  Private
const followUser = asyncHandler(async (req, res, next) => {
  const userId = req.user.id; // Get the userId from req.user.id
  const { followId } = req.params;

  // Check if the user and the user to be followed exist
  const user = await User.findById(userId);
  const followUser = await User.findById(followId);

  if (!user || !followUser) {
    return next(new CustomError("User not found", 404));
  }

  // Check if the authenticated user is already following the user
  const isFollowing = await Following.findOne({
    user: userId,
    following: { $elemMatch: { user: followId } },
  });

  if (isFollowing) {
    // If already following, unfollow the user
    await Following.findOneAndUpdate(
      { user: userId },
      { $pull: { following: { user: followId } } }
    );
    await Following.findOneAndUpdate(
      { user: followId },
      { $pull: { followers: { user: userId } } }
    );

    // Update the number of following and followers for both users
    await user.updateOne({ $inc: { numberOfFollowing: -1 } });
    await followUser.updateOne({ $inc: { numberOfFollowers: -1 } });

    res.status(200).json({ message: "User unfollowed successfully" });
  } else {
    // If not already following, follow the user
    await Following.findOneAndUpdate(
      { user: userId },
      { $addToSet: { following: { user: followId } } },
      { upsert: true }
    );
    await Following.findOneAndUpdate(
      { user: followId },
      { $addToSet: { followers: { user: userId } } },
      { upsert: true }
    );

    // Update the number of following and followers for both users
    await user.updateOne({ $inc: { numberOfFollowing: 1 } });
    await followUser.updateOne({ $inc: { numberOfFollowers: 1 } });

    res.status(200).json({ message: "User followed successfully" });
  }
});


// @desc    Unfollow a user
// @route   DELETE /api/unfollow/:unfollowId
// @access  Private
const unfollowUser = asyncHandler(async (req, res, next) => {
  const userId = req.user.id; // Get the userId from req.user.id
  const { unfollowId } = req.params;

  // Check if the user and the user to be unfollowed exist
  const user = await User.findById(userId);
  const unfollowUser = await User.findById(unfollowId);

  if (!user || !unfollowUser) {
    return next(new CustomError("User not found", 404));
  }

  // Update the following and followers arrays
  await Following.findOneAndUpdate(
    { user: userId },
    { $pull: { following: { user: unfollowId } } }
  );
  await Following.findOneAndUpdate(
    { user: unfollowId },
    { $pull: { followers: { user: userId } } }
  );

  res.status(200).json({ message: "User unfollowed successfully" });
});

// @desc    Get all followers of a user
// @route   GET /api/followers
// @access  Private
const getFollowers = asyncHandler(async (req, res, next) => {
  const userId = req.user.id; // Get the userId from req.user.id

  // Find the user's followers
  const followers = await Following.findOne({ user: userId })
    .populate("followers.user", "userName name")
    .select("followers");

  res.status(200).json(followers);
});

// @desc    Get all users being followed by a user
// @route   GET /api/following
// @access  Private
const getFollowing = asyncHandler(async (req, res, next) => {
  const userId = req.user.id; // Get the userId from req.user.id

  // Find the users being followed by the user
  const following = await Following.findOne({ user: userId })
    .populate("following.user", "userName name")
    .select("following");
  const followers = await Following.findOne({ user: userId })
    .populate("followers.user", "userName name")
    .select("followers");

  res.status(200).json({ following, followers });
});

// @desc    Check if a user is being followed by the current user
// @route   GET /api/checkfollow/:followId
// @access  Private
const checkFollow = asyncHandler(async (req, res, next) => {
  const userId = req.user.id; // Get the userId from req.user.id
  const { followId } = req.params;


  // Check if the user and the user being followed exist
  const user = await User.findById(userId);
  const followUser = await User.findById(followId);

  if (!user || !followUser) {
    return next(new CustomError("User not found", 404));
  }

  // Find the following document for the current user
  const following = await Following.findOne({ user: userId });

  // Check if the user being followed is present in the following array
  const isFollowing = following.following.some(
    (follow) => follow.user.toString() === followId
  );

  res.status(200).json({
    "isFollowing":isFollowing
  });
});

export { followUser, unfollowUser, checkFollow, getFollowers, getFollowing };
