import * as eleitorService from "../services/EleitorService.js";
import HttpStatus from "../utils/HttpStatus.js";

export async function findAllEleitor(req, res, next) {
    try {
        const eleitores = await eleitorService.findAllEleitor();

        return res.status(HttpStatus.OK).json(eleitores);
    } catch(err) {
        next(err);
    }
}

export async function findEleitorById(req, res, next) {
    try {
        const { id } = req.params;

        const eleitor = await eleitorService.findEleitorById(id);

        return res.status(HttpStatus.OK).json(eleitor);
    } catch(err) {
        next(err);
    }
}

export async function deleteEleitorById(req, res) {
    const { id } = req.params;

    await eleitorService.deleteEleitorById(id);

    return res.status(HttpStatus.OK).json("Sucesso");
}

export async function saveEleitor(req, res, next) {
    try {
        const eleitor = req.body;

        const eleitorResult = await eleitorService.saveEleitor(eleitor);

        return res.status(HttpStatus.CREATED).json(eleitorResult);
    } catch(err) {
        next(err);
    }
}

export async function updateEleitorByAdmin(req, res, next) {
    try {
        const { id } = req.params;
        const eleitor = req.body;

        const eleitorResult = await eleitorService.updateEleitor(id, eleitor);

        return res.status(HttpStatus.OK).json(eleitorResult);
    } catch(err) {
        next(err);
    }
}

export async function updateEleitorByEleitor(req, res, next) {
    try {
        const id = req.userId;
        const eleitor = req.body;

        const eleitorResult = await eleitorService.updateEleitor(id, eleitor);

        return res.status(HttpStatus.OK).json(eleitorResult);
    } catch(err) {
        next(err);
    }
}

export async function updateEleitorOnSenha(req, res, next) {
    try {
        const id = req.userId;
        const { senha, novaSenha } = req.body;

        await eleitorService.updateEleitorOnSenha(id, senha, novaSenha);

        return res.status(HttpStatus.OK).json();
    } catch(err) {
        next(err);
    }
}

export async function loginEleitor(req, res, next) {
    try {
        const eleitorLoginDTO = req.body;

        const result = await eleitorService.loginEleitor(eleitorLoginDTO);

        return res.status(HttpStatus.OK).json(result);
    } catch(err) {
        next(err);
    }
}