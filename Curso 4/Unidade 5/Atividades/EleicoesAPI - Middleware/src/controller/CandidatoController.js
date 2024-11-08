import * as candidatoService from "../services/CandidatoService.js";
import HttpStatus from "../utils/HttpStatus.js";

export async function findAllCandidato(req, res, next) {
    const candidatos = await candidatoService.findAllCandidato();

    return res.status(HttpStatus.OK).json(candidatos);
}

export async function findCandidatoById(req, res) {
    const { id } = req.params;

    const candidato = await candidatoService.findCandidatoById(id);

    return res.status(HttpStatus.OK).json(candidato);
}

export async function deleteCandidatoById(req, res) {
    console.log("[DeleteCandidatoById] :: Testing.");

    return res.status(HttpStatus.OK).json("Deleted!");
} 

export async function saveCandidato(req, res) {
    console.log("[SaveCandidato] :: Testing.");

    return res.status(HttpStatus.CREATED).json("Created!");
}