import AlreadyVotedError from "../error/AlreadyVotedError.js";
import * as votoService from "../services/VotoService.js";
import HttpStatus from "../utils/HttpStatus.js";

export async function saveVoto(req, res) {
    try {
        const voto = req.body;

        const votoResult = await votoService.saveVoto(voto);

        return res.status(HttpStatus.OK).json(votoResult);
    } catch(err) {
        if (err instanceof AlreadyVotedError) {
            return res.status(HttpStatus.BADREQUEST).json(err.message);
        }

        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err.message);
    }
}