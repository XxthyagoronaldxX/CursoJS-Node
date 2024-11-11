import * as eleitorRepository from "../repository/EleitorRepository.js";

export async function findAllEleitor() {
    return await eleitorRepository.findAllEleitor();
}

export async function findEleitorById(id) {
    return await eleitorRepository.findEleitorById(id);
}

export async function deleteEleitorById(id) {
    await eleitorRepository.deleteEleitorById(id);
}

export async function saveEleitor(eleitor) {
    return await eleitorRepository.saveEleitor(eleitor);
}

export async function updateEleitor(id, eleitor) {
    return await eleitorRepository.updateEleitor(id, eleitor);
}