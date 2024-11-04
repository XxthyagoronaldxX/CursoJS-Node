import * as candidatoRepository from "../repositories/CandidatoRepository.js";

export function findAllCandidato() {
    return candidatoRepository.findAllCandidato();
}

export function saveCandidato(candidato) {
    return candidatoRepository.saveCandidato(candidato);
}