import express from "express";

import isAuthenticatedUser from "../middleware/auth.js";

import { addLike, getPersonalLikes } from "../controller/likesController.js";

const router = express.Router();

router.route("/like").post(isAuthenticatedUser, addLike);
// router.route("/like/:id").delete(isAuthenticatedUser, deleteLike);
router.route("/like/me").get(isAuthenticatedUser, getPersonalLikes);


let likeRouter = router;
export default likeRouter;
