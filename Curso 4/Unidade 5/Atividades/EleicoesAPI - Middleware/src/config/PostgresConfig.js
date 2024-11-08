import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "eleicao_v2",
    port: 5432
});

export default pool;