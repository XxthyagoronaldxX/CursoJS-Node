import * as eleitorService from "../services/EleitorService.js";
import HttpStatus from "../utils/HttpStatus.js";

export async function findAllEleitor(req, res) {
    const eleitores = await eleitorService.findAllEleitor();

    return res.status(HttpStatus.OK).json(eleitores);
}

export async function findEleitorById(req, res) {
    const { id } = req.params;

    const eleitor = await eleitorService.findEleitorById(id);

    return res.status(HttpStatus.OK).json(eleitor);
}

export async function deleteEleitorById(req, res) {
    const { id } = req.params;

    await eleitorService.deleteEleitorById(id);

    return res.status(HttpStatus.OK).json("Sucesso");
}

export async function saveEleitor(req, res) {
    const eleitor = req.body;

    const eleitorResult = await eleitorService.saveEleitor(eleitor);

    return res.status(HttpStatus.CREATED).json(eleitorResult);
}

export async function updateEleitor(req, res) {
    const { id } = req.params;
    const eleitor = req.body;

    const eleitorResult = await eleitorService.updateEleitor(id, eleitor);

    return res.status(HttpStatus.CREATED).json(eleitorResult);
}