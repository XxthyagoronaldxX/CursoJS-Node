import AppError from "../error/AppError.js";
import * as votoRepository from "../repository/VotoRepository.js";
import HttpStatus from "../utils/HttpStatus.js";

export async function saveVoto(voto) {
    const result = await votoRepository.findVotoByEleicaoIdAndEleitorId(voto.eleicaoId, voto.eleitorId);

    if (result !== null) {
        throw new AppError("Eleitor já votou.", HttpStatus.BADREQUEST);
    } 
    
    return await votoRepository.saveVoto(voto);
}