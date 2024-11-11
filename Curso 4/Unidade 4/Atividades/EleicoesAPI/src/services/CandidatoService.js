import * as candidatoRepository from "../repository/CandidatoRepository.js";

export async function findAllCandidato() {
    return await candidatoRepository.findAllCandidato();
}

export async function findCandidatoById(id) {
    return await candidatoRepository.findCandidatoById(id);
}

export async function deleteCandidatoById(id) {
    await candidatoRepository.deleteCandidatoById(id);
}

export async function saveCandidato(candidato) {
    return await candidatoRepository.saveCandidato(candidato);
}

export async function updateCandidato(id, candidato) {
    return await candidatoRepository.updateCandidato(id, candidato);
}