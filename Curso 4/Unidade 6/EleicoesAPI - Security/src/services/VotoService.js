import BadRequestError from "../error/BadRequestError.js";
import * as votoRepository from "../repository/VotoRepository.js";

export async function saveVoto(voto) {
    const result = await votoRepository.findVotoByEleicaoIdAndEleitorId(voto.eleicaoId, voto.eleitorId);

    if (result !== null) {
        throw new BadRequestError("[Error] :: Eleitor já votou.");
    } 
    
    return await votoRepository.saveVoto(voto);
}