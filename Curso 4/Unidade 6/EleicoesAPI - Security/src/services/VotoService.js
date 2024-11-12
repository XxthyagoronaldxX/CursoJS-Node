import AlreadyVotedError from "../error/AlreadyVotedError.js";
import * as votoRepository from "../repository/VotoRepository.js";

export async function saveVoto(voto) {
    const result = await votoRepository.findVotoByEleicaoIdAndEleitorId(voto.eleicaoId, voto.eleitorId);

    if (result !== null) {
        throw new AlreadyVotedError("[Error] :: Eleitor já votou.");
    } 
    
    return await votoRepository.saveVoto(voto);
}