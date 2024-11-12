import * as candidatoEleicaoRepository from "../services/CandidatoEleicaoService.js";
import HttpStatus from "../utils/HttpStatus.js";

export async function addCandidatoToEleicao(req, res) {
    const { candidatoId, eleicaoId } = req.body;

    const result = await candidatoEleicaoRepository.addCandidatoToEleicao(candidatoId, eleicaoId);    

    return res.status(HttpStatus.CREATED).json(result);
}

export async function removeCandidatoFromEleicao(req, res) {
    const { candidatoId, eleicaoId } = req.body;

    await candidatoEleicaoRepository.removeCandidatoFromEleicao(candidatoId, eleicaoId);    

    return res.status(HttpStatus.OK).json("Success");
}