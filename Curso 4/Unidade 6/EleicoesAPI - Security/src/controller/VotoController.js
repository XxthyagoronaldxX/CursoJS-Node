import * as votoService from "../services/VotoService.js";
import HttpStatus from "../utils/HttpStatus.js";

export async function saveVoto(req, res, next) {
    try {
        const voto = req.body;

        const votoResult = await votoService.saveVoto(voto);

        return res.status(HttpStatus.OK).json(votoResult);
    } catch(err) {
        next(err);
    }
}