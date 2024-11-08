import HttpStatus from "../utils/HttpStatus.js";
import candidatoValidator from "../validators/CandidatoValidator.js";

const CandidatoValidatorMiddleware = (req, res, next) => {
    const body = req.body;

    const validator = candidatoValidator.validate(body);

    if (validator.error) {
        res.status(HttpStatus.BADREQUEST).json(validator.error.details);
    } else {
        next();
    }
}

export default CandidatoValidatorMiddleware;