import CustomError from "../utils/CustomError.js";
import { StatusCodes } from "http-status-codes";

const errorMiddleware = (error, req, res, next) => {
  error.statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  error.message = error.message || "Internal Server Error";

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};

export default errorMiddleware;
