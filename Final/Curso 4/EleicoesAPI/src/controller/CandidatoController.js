import * as candidatoService from "../services/CandidatoService.js";
import HttpStatus from "../utils/HttpStatus.js";

export async function findAllCandidato(req, res) {
    const candidatos = await candidatoService.findAllCandidato();

    return res.status(HttpStatus.OK).json(candidatos);
}

export async function findCandidatoById(req, res) {
    const { id } = req.params;

    const candidato = await candidatoService.findCandidatoById(id);

    return res.status(HttpStatus.OK).json(candidato);
}

export async function deleteCandidatoById(req, res) {
    const { id } = req.params;

    await candidatoService.deleteCandidatoById(id);

    return res.status(HttpStatus.OK).json("Sucesso");
}

export async function saveCandidato(req, res) {
    const candidato = req.body;

    const candidatoResult = await candidatoService.saveCandidato(candidato);

    return res.status(HttpStatus.CREATED).json(candidatoResult);
}

export async function updateCandidato(req, res) {
    const { id } = req.params;
    const candidato = req.body;

    const candidatoResult = await candidatoService.updateCandidato(id, candidato);

    return res.status(HttpStatus.CREATED).json(candidatoResult);
}