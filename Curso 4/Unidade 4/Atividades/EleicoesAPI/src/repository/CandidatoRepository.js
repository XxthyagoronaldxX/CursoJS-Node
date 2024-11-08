import pool from "../config/PostgresConfig.js";

export async function findAllCandidatos() {
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