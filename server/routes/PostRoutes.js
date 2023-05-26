import express from "express";

import isAuthenticatedUser from "../middleware/auth.js";
import {
  createTweet,
  deleteTweet,
  getPersonalTweets,
  getAllTweet,
  getTweetsById,
  updateTweet,
} from "../controller/TwitterController.js";

const router = express.Router();

router.route("/tweets").post(isAuthenticatedUser, createTweet);
router.route("/get/tweets/all").get(isAuthenticatedUser,getAllTweet);
router.route("/get/tweets/:params").get(isAuthenticatedUser,getTweetsById);
router.route("/my/tweets/").get(isAuthenticatedUser,getPersonalTweets);
router.route("/edit").put(isAuthenticatedUser, updateTweet);
router.route("/delete").delete(isAuthenticatedUser, deleteTweet);



let postRouter = router;
export default postRouter;;
