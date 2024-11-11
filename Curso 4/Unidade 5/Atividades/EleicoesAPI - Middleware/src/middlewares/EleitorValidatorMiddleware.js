import HttpStatus from "../utils/HttpStatus.js";
import eleitorValidator from "../validators/EleitorValidator.js";

const EleitorValidatorMiddleware = (req, res, next) => {
    const body = req.body;

    const validator = eleitorValidator.validate(body);

    if (validator.error) {
        res.status(HttpStatus.BADREQUEST).json(validator.error.details);
    } else {
        next();
    }
}

export default EleitorValidatorMiddleware;