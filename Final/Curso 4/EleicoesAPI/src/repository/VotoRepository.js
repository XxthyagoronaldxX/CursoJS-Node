import pool from "../config/PostgresConfig.js";

export async function saveVoto(voto) {
    const data = [voto.eleicaoId, voto.eleitorId, voto.numero];

    const result = await pool.query("INSERT INTO voto (eleicao_id, eleitor_id, data_hora, numero) VALUES ($1, $2, NOW(), $3) RETURNING *", data);

    return result.rows[0];
}

export async function findVotoByEleicaoIdAndEleitorId(eleicao_id, eleitor_id) {
    const result = await pool.query("SELECT * FROM voto WHERE eleicao_id = $1 AND eleitor_id = $2", [eleicao_id, eleitor_id]);

    return result.rows[0] ?? null;
}