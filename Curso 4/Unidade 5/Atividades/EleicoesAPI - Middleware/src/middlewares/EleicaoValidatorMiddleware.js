import HttpStatus from "../utils/HttpStatus.js";
import eleicaoValidator from "../validators/EleicaoValidator.js";

const EleicaoValidatorMiddleware = (req, res, next) => {
    const body = req.body;

    const validator = eleicaoValidator.validate(body);

    if (validator.error) {
        res.status(HttpStatus.BADREQUEST).json(validator.error.details);
    } else {
        next();
    }
}

export default EleicaoValidatorMiddleware;