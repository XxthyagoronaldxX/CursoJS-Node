import pool from "../config/PostgresConfig.js";

export async function findAllEleicao() {
    const result = await pool.query("SELECT * FROM eleicao");
    
    return result.rows;
}

export async function findEleicaoById(id) {
    const result = await pool.query("SELECT * FROM eleicao WHERE id = $1", [id]);

    return result.rows[0] ?? false;
}

export async function deleteEleicaoById(id) {
    await pool.query("DELETE FROM eleicao WHERE id = $1", [id]);
}

export async function saveEleicao(eleicao) {
    const data = [eleicao.nome, eleicao.data, eleicao.descricao];

    const result = await pool.query("INSERT INTO eleicao (nome, data, descricao) VALUES ($1, $2, $3) RETURNING *", data);

    return result.rows[0];
}

export async function updateEleicao(id, eleicao) {
    const data = [eleicao.nome, eleicao.data, eleicao.descricao, id];

    const result = await pool.query("UPDATE eleicao SET nome = $1, data = $2, descricao = $3 WHERE id = $4 RETURNING *", data);

    return result.rows[0];
}

export async function findAllEleicaoSummaryById(id) {
    const result = await pool.query("SELECT * FROM vw_apuracao_final WHERE eleicao_id = $1", [id]);

    return result.rows;
}