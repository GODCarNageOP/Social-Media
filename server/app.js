import express from "express";
import userRouter from "./routes/UserRoutes.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middleware/error.js";
import dotenv from "dotenv";
import cors from "cors";
import postRouter from "./routes/PostRoutes.js";
dotenv.config({ path: "config/config.env" });

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/v1", userRouter);
app.use("/api/v1", postRouter);


app.use(errorMiddleware);
export default app;
