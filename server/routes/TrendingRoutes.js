import express from "express";
import { getTrending, getTrendingByChoices } from "../controller/TwitterController.js";
const router = express.Router();
import isAuthenticatedUser from "../middleware/auth.js";





router.get('/trending/:choices',getTrendingByChoices);
router.get('/trending',getTrending);

const TrendingRouter=router;


export default TrendingRouter;