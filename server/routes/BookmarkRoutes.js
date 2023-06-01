import express from "express";

import isAuthenticatedUser from "../middleware/auth.js";
import { addBookmark, deleteBookmark, getBookmarksByUserId } from "../controller/BookmarkControllre.js";


const router = express.Router();


router.route("/bookmark").post(isAuthenticatedUser, addBookmark);
router.route("/bookmark").delete(isAuthenticatedUser, deleteBookmark);
router.route("/bookmark/me").get(isAuthenticatedUser, getBookmarksByUserId);



let bookmarkRouter = router;

export default bookmarkRouter;
