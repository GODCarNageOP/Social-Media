import express from "express";
import userRouter from "./routes/UserRoutes.js";
import bodyParser from "body-parser";




const app = express();
app.use(bodyParser.json());

app.use("/api/v1", userRouter);

export default app;
