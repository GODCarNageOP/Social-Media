import mongoose, { Schema, Document } from "mongoose";

const tweetSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  isLiked: {
    type: Boolean,
    default: false,
  },
  numOfLikes: {
    type: Number,
    default: 0,
  },
  numOfRetweets: {
    type: Number,
    default: 0,
  },
  userName: {
    type: String,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    pubic_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  pinned: {
    type: Boolean,
  },
  numOfComments: {
    type: Number,
    default: 0,
  },

  views: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
