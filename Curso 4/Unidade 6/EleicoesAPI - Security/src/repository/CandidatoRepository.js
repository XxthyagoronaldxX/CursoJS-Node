import pool from "../config/PostgresConfig.js";

export async function findAllCandidato() {
    const result = await pool.query("SELECT * FROM candidato");
    
    return result.rows;
}

export async function findCandidatoById(id) {
    const result = await pool.query("SELECT * FROM candidato WHERE id = $1", [id]);

    return result.rows[0] ?? false;
}

export async function deleteCandidatoById(id) {
    await pool.query("DELETE FROM candidato WHERE id = $1", [id]);
}

export async function saveCandidato(candidato) {
    const data = [candidato.nome, candidato.numero, candidato.partido];

    const result = await pool.query("INSERT INTO candidato (nome, numero, partido) VALUES ($1, $2, $3) RETURNING *", data);

    return result.rows[0];
}

export async function updateCandidato(id, candidato) {
    const data = [candidato.nome, candidato.numero, candidato.partido, id];

    const result = await pool.query("UPDATE candidato SET nome = $1, numero = $2, partido = $3 WHERE id = $4 RETURNING *", data);

    return result.rows[0];
}