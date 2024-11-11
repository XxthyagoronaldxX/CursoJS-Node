import pool from "../config/PostgresConfig.js";

export async function findAllEleitor() {
    const result = await pool.query("SELECT * FROM eleitor");
    
    return result.rows;
}

export async function findEleitorById(id) {
    const result = await pool.query("SELECT * FROM eleitor WHERE id = $1", [id]);

    return result.rows[0] ?? false;
}

export async function deleteEleitorById(id) {
    await pool.query("DELETE FROM eleitor WHERE id = $1", [id]);
}

export async function saveEleitor(eleitor) {
    const data = [eleitor.nome, eleitor.cpf, eleitor.senha];

    const result = await pool.query("INSERT INTO eleitor (nome, cpf, senha) VALUES ($1, $2, $3) RETURNING *", data);

    return result.rows[0];
}

export async function updateEleitor(id, eleitor) {
    const data = [eleitor.nome, eleitor.cpf, id];

    const result = await pool.query("UPDATE eleitor SET nome = $1, cpf = $2 WHERE id = $3 RETURNING *", data);

    return result.rows[0];
}