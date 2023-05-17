import express from "express";
import userRouter from "./routes/UserRoutes.js";
import bodyParser from "body-parser";
import errorMiddleware from "./middleware/error.js";

const app = express();
app.use(bodyParser.json());

app.use("/api/v1", userRouter);

app.use(errorMiddleware);
export default app;
