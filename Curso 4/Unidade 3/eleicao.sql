CREATE TABLE IF NOT EXISTS public.tb_candidato (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(85) NOT NULL,
	numero VARCHAR(35) NOT NULL,
	partido VARCHAR(85) NOT NULL,
	foto_url VARCHAR(85),
	votos INTEGER
);

CREATE TABLE IF NOT EXISTS public.tb_voto (
	id SERIAL PRIMARY KEY,
	numero VARCHAR(35),
	candidato_fk INTEGER REFERENCES tb_candidato(id)
);

CREATE TABLE IF NOT EXISTS public.tb_eleicao (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255),
	data DATE
);

CREATE TABLE IF NOT EXISTS public.tb_eleicao_candidato (
	candidato_fk INTEGER REFERENCES tb_candidato(id),
	eleicao_fk INTEGER REFERENCES tb_eleicao(id),
	PRIMARY KEY (candidato_fk, eleicao_fk)
);