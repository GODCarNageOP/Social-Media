import express from "express";

import isAuthenticatedUser from "../middleware/auth.js";


import { checkFollow, followUser, getFollowers, getFollowing, unfollowUser } from "../controller/FollowController.js";

const router = express.Router();

router.route("/follow/:followId").post(isAuthenticatedUser, followUser);
// router.route("/like/:id").delete(isAuthenticatedUser, deleteLike);
router.route("/unfollow").get(isAuthenticatedUser, unfollowUser);
router.route("/following").get(isAuthenticatedUser, getFollowing);
router.route("/followers").get(isAuthenticatedUser, getFollowers);
router.route("/follow/:followId").get(isAuthenticatedUser, checkFollow);

let followRouter = router;
export default followRouter;
