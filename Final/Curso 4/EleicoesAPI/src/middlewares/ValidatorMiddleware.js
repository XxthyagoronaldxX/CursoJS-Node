import HttpStatus from "../utils/HttpStatus.js";

export default function validatorMiddleware(validator) {
    return (req, res, next) => {
        const body = req.body;

        const result = validator.validate(body);

        if (result.error) {
            res.status(HttpStatus.BADREQUEST).json(result.error.details);
        } else {
            next();
        }
    }
}