import pool from "../config/PostgresConfig.js";
import RoleEnum from "../utils/RoleEnum.js";

export async function findAllEleitor() {
    const result = await pool.query("SELECT * FROM eleitor");
    
    return result.rows;
}

export async function findEleitorByCpf(cpf) {
    const result = await pool.query("SELECT * FROM eleitor WHERE cpf = $1", [cpf]);

    return result.rows[0] ?? false;
}

export async function findEleitorById(id) {
    const result = await pool.query("SELECT * FROM eleitor WHERE id = $1", [id]);

    return result.rows[0] ?? false;
}

export async function deleteEleitorById(id) {
    await pool.query("DELETE FROM eleitor WHERE id = $1", [id]);
}

export async function saveEleitor(eleitor, role) {
    const data = [eleitor.nome, eleitor.cpf, eleitor.senha, role];

    const result = await pool.query("INSERT INTO eleitor (nome, cpf, senha, perfil) VALUES ($1, $2, $3, $4) RETURNING *", data);

    return result.rows[0];
}

export async function updateEleitor(id, eleitor) {
    const data = [eleitor.nome, id];

    const result = await pool.query("UPDATE eleitor SET nome = $1 WHERE id = $2 RETURNING *", data);

    return result.rows[0];
}

export async function updateEleitorOnSenha(id, senha) {
    await pool.query("UPDATE eleitor SET senha = $1 WHERE id = $2", [senha, id]);
}