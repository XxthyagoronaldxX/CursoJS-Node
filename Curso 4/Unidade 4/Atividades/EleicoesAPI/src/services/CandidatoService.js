import * as candidatoRepository from "../repository/CandidatoRepository.js";

export async function findAllCandidato() {
    return await candidatoRepository.findAllCandidatos();
}

export async function findCandidatoById(id) {
    return await candidatoRepository.findCandidatoById(id);
}

export async function deleteCandidatoById(id) {
    await candidatoRepository.deleteCandidatoById(id);
}