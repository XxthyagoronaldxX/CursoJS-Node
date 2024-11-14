import AppError from "../error/AppError.js";
import HttpStatus from "../utils/HttpStatus.js";

const ErrorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.code).json(err.message);
    }

    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err.message);
}

export default ErrorHandler;