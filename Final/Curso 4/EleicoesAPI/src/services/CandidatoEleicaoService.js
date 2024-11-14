import * as candidatoEleicaoRepository from "../repository/CandidatoEleicaoRepository.js";

export async function addCandidatoToEleicao(candidatoId, eleicaoId) {
    return await candidatoEleicaoRepository.addCandidatoToEleicao(candidatoId, eleicaoId);    
}

export async function removeCandidatoFromEleicao(candidatoId, eleicaoId) {
    await candidatoEleicaoRepository.removeCandidatoFromEleicao(candidatoId, eleicaoId);
}