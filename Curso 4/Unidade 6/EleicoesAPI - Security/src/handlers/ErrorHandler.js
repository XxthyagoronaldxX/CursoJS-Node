import BadRequestError from "../error/BadRequestError.js";
import HttpStatus from "../utils/HttpStatus.js";

const ErrorHandler = (err, req, res, next) => {
    if (err instanceof BadRequestError) {
        return res.status(HttpStatus.BADREQUEST).json(err.message);
    }

    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err.message);
}

export default ErrorHandler;