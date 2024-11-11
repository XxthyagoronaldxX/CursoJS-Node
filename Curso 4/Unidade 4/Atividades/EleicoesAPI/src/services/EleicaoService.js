import * as eleicaoRepository from "../repository/EleicaoRepository.js";

export async function findAllEleicao() {
    return await eleicaoRepository.findAllEleicao();
}

export async function findEleicaoById(id) {
    return await eleicaoRepository.findEleicaoById(id);
}

export async function deleteEleicaoById(id) {
    await eleicaoRepository.deleteEleicaoById(id);
}

export async function saveEleicao(eleicao) {
    return await eleicaoRepository.saveEleicao(eleicao);
}

export async function updateEleicao(id, eleicao) {
    return await eleicaoRepository.updateEleicao(id, eleicao);
}

export async function findAllEleicaoSummaryById(id) {
    return await eleicaoRepository.findAllEleicaoSummaryById(id);
}