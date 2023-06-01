import asyncHandler from "../middleware/asyncHandler.js";
import Bookmark from "../model/Bookmark.js";
import Tweet from "../model/TweetModel.js";
import CustomError from "../utils/CustomError.js";



// Add a bookmark
export const addBookmark = asyncHandler(async (req, res, next) => {
  const { postId } = req.body;
  const userId = req.user.id;

  let bookmark = await Bookmark.findOne({ postId, userId });

  if (bookmark) {
    await Bookmark.deleteOne({ postId, userId });
    return next(new CustomError("Bookmark removed", 200));
  }

  const newBookmark = new Bookmark({ postId, userId });
  await newBookmark.save();

  res
    .status(201)
    .json({ message: "Bookmark added successfully", bookmark: newBookmark });
});

// Delete a bookmark
export const deleteBookmark = asyncHandler(async (req, res, next) => {
  const { postId } = req.body;
  const userId = req.user.id;

  const bookmark = await Bookmark.findOneAndDelete({ postId, userId });

  if (!bookmark) {
    return next(new CustomError("Bookmark not found", 404));
  }

  res.json({ message: "Bookmark deleted successfully", bookmark });
});


export const getBookmarksByUserId = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const bookmarks = await Bookmark.find({ userId: req.user.id });
  const postIds = bookmarks.map((bookmark) => bookmark.postId);

  // Assuming you have a "Post" model/schema defined
  const posts = await Tweet.find({ _id: { $in: postIds } });

  res.json({ bookmarks: posts });
});
