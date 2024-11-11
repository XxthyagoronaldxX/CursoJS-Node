import AlreadyVotedError from "../error/AlreadyVotedError.js";
import HttpStatus from "../utils/HttpStatus.js";

const ErrorHandler = (err, req, res, next) => {
    if (err) {
        switch(err.constructor) {
            case AlreadyVotedError:
                return res.status(HttpStatus.BADREQUEST).json(err.message); 
            default:
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err.message);
        }        
    }
}

export default ErrorHandler;