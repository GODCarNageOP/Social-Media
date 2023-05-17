import express from "express";
import userRouter from "./routes/UserRoutes.js";
import bodyParser from "body-parser";
import errorMiddleware from "./middleware/error.js";
import dotenv from "dotenv";

dotenv.config({ path: "config/config.env" });

const app = express();
app.use(bodyParser.json());

app.use("/api/v1", userRouter);


app.use(errorMiddleware);
export default app;
