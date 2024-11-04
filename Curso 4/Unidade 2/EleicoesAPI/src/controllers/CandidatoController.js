import HttpStatus from "../utils/HttpStatus.js";
import * as candidatoService from "../services/CandidatoService.js";
import candidatoValidator from "../validators/CandidatoValidator.js";

export function findAllCandidato(req, res) {
    res.status(HttpStatus.OK).json(candidatoService.findAllCandidato());
}

export function saveCandidato(req, res) {
    const body = req.body;

    const validator = candidatoValidator.validate(body);

    if (validator.error) {
        res.status(HttpStatus.BADREQUEST).json(validator.error.details);
    } else {
        candidatoService.saveCandidato(body);

        res.status(HttpStatus.CREATED).json();
    }
}