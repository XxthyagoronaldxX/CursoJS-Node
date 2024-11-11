import * as eleicaoService from "../services/EleicaoService.js";
import HttpStatus from "../utils/HttpStatus.js";

export async function findAllEleicao(req, res) {
    const eleicoes = await eleicaoService.findAllEleicao();

    return res.status(HttpStatus.OK).json(eleicoes);
}

export async function findEleicaoById(req, res) {
    const { id } = req.params;

    const eleicao = await eleicaoService.findEleicaoById(id);

    return res.status(HttpStatus.OK).json(eleicao);
}

export async function deleteEleicaoById(req, res) {
    const { id } = req.params;

    await eleicaoService.deleteEleicaoById(id);

    return res.status(HttpStatus.OK).json("Sucesso");
}

export async function saveEleicao(req, res) {
    const eleicao = req.body;

    const eleicaoResult = await eleicaoService.saveEleicao(eleicao);

    return res.status(HttpStatus.CREATED).json(eleicaoResult);
}

export async function updateEleicao(req, res) {
    const { id } = req.params;
    const eleicao = req.body;

    const eleicaoResult = await eleicaoService.updateEleicao(id, eleicao);

    return res.status(HttpStatus.CREATED).json(eleicaoResult);
}

export async function findAllEleicaoSummaryById(req, res) {
    const { id } = req.params;

    const summary = await eleicaoService.findAllEleicaoSummaryById(id);

    return res.status(HttpStatus.OK).json(summary);
}