import mongoose from "mongoose";

const trendingSchema = new mongoose.Schema({
  title: String,
  type: [{ type: String }],
  numOfTweets: Number,
  // Add any other relevant fields
});

const TrendingModel = mongoose.model("Trending", trendingSchema);

export default TrendingModel;
