import BadRequestError from "../error/BadRequestError.js";
import * as eleitorRepository from "../repository/EleitorRepository.js";
import bcrypt from "bcrypt";

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
    const eleitorByCpf = await eleitorRepository.findEleitorByCpf(eleitor.cpf);

    if (eleitorByCpf != null) {
        throw new BadRequestError("Já existe um eleitor cadastrado com esse CPF.");
    }

    eleitor.senha = await bcrypt.hash(eleitor.senha, 10);

    return await eleitorRepository.saveEleitor(eleitor);
}

export async function updateEleitor(id, eleitor) {
    return await eleitorRepository.updateEleitor(id, eleitor);
}

export async function updateEleitorOnSenha(id, senha, novaSenha) {
    const eleitorById = await eleitorRepository.findEleitorById(id);

    if (!eleitorById) {
        throw new BadRequestError("Eleitor não foi encontrado.");
    }

    const result = await bcrypt.compare(senha, eleitorById.senha);

    if (!result) {
        throw new BadRequestError("Senha incorreta.");
    }

    const novaSenhaHash = await bcrypt.hash(novaSenha, 10);

    return await eleitorRepository.updateEleitorOnSenha(id, novaSenhaHash);
}

export async function loginEleitor(loginDTO) {
    const { cpf, senha } = loginDTO;

    const eleitorByCpf = await eleitorRepository.findEleitorByCpf(cpf);

    if (eleitorByCpf == null) {
        throw new BadRequestError("Eleitor não foi encontrado.");
    }

    const result = await bcrypt.compare(senha, eleitorByCpf.senha);

    if (!result) {
        throw new BadRequestError("Senha incorreta.");
    }

    return { id: eleitorByCpf.id, cpf: eleitorByCpf.cpf, nome: eleitorByCpf.nome };
}