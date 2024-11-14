import AppError from "../error/AppError.js";
import * as eleitorRepository from "../repository/EleitorRepository.js";
import * as jwtService from "../services/JwtService.js";
import bcrypt from "bcrypt";
import HttpStatus from "../utils/HttpStatus.js";
import RoleEnum from "../utils/RoleEnum.js";

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

    if (eleitorByCpf) {
        throw new AppError("Já existe um eleitor cadastrado com esse CPF.", HttpStatus.BADREQUEST);
    }

    eleitor.senha = await bcrypt.hash(eleitor.senha, 10);

    return await eleitorRepository.saveEleitor(eleitor, RoleEnum.ELEITOR);
}

export async function updateEleitor(id, eleitor) {
    return await eleitorRepository.updateEleitor(id, eleitor);
}

export async function updateEleitorOnSenha(id, senha, novaSenha) {
    const eleitorById = await eleitorRepository.findEleitorById(id);

    if (!eleitorById) {
        throw new AppError("Eleitor não foi encontrado.", HttpStatus.BADREQUEST);
    }

    const result = await bcrypt.compare(senha, eleitorById.senha);

    if (!result) {
        throw new AppError("Senha incorreta.", HttpStatus.BADREQUEST);
    }

    const novaSenhaHash = await bcrypt.hash(novaSenha, 10);

    return await eleitorRepository.updateEleitorOnSenha(id, novaSenhaHash);
}

export async function loginEleitor(loginDTO) {
    const { cpf, senha } = loginDTO;

    const eleitorByCpf = await eleitorRepository.findEleitorByCpf(cpf);

    if (!eleitorByCpf) {
        throw new AppError("Eleitor não foi encontrado.", HttpStatus.BADREQUEST);
    }

    const result = await bcrypt.compare(senha, eleitorByCpf.senha);

    if (!result) {
        throw new AppError("Senha incorreta.", HttpStatus.BADREQUEST);
    }

    const payload = {
        userId: eleitorByCpf.id,
        role: eleitorByCpf.perfil
    };

    return jwtService.generate(payload);
}

export async function updateEleitorOnPerfil(id, perfil) {
    const eleitorById = await eleitorRepository.findEleitorById(id);

    if (!eleitorById) {
        throw new AppError("Eleitor não foi encontrado.", HttpStatus.BADREQUEST);
    }

    return await eleitorRepository.updateEleitorOnPerfil(id, perfil);
}