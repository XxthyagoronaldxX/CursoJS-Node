import * as candidatoService from "../services/CandidatoService.js";
import HttpStatus from "../utils/HttpStatus.js";

export async function findAllCandidato(req, res, next) {
    const candidatos = await candidatoService.findAllCandidato();

    next(new Error("Something went wrong!"));

    //return res.status(HttpStatus.OK).json(candidatos);
}

export async function findCandidatoById(req, res) {
    const { id } = req.params;

    const candidato = await candidatoService.findCandidatoById(id);

    return res.status(HttpStatus.OK).json(candidato);
}