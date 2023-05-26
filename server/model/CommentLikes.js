import mongoose, { Schema, Document } from "mongoose";

const CommentLikeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Twitter",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    required: true,
  },
});

const CommentLike = mongoose.model("CommentsLike", CommentLikeSchema);

export default CommentLike;
