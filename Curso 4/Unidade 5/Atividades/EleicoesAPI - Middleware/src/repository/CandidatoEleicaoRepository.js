import pool from "../config/PostgresConfig.js";

export async function addCandidatoToEleicao(candidatoId, eleicaoId) {
    const data = [eleicaoId, candidatoId];

    const result = await pool.query('INSERT INTO candidato_eleicao (eleicao_id, candidato_id) VALUES ($1, $2) RETURNING *', data);
    
    return result.rows[0];   
}

export async function removeCandidatoFromEleicao(candidatoId, eleicaoId) {
    const data = [eleicaoId, candidatoId];

    await pool.query('DELETE FROM candidato_eleicao WHERE eleicao_id = $1 AND candidato_id = $2', data);
}