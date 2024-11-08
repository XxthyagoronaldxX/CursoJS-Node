import HttpStatus from "../utils/HttpStatus.js";

const ErrorHandler = (err, req, res, next) => {
    if (err) {
        console.error(err);

        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err.message);
    }
}

export default ErrorHandler;