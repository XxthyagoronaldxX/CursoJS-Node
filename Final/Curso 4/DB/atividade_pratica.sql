DROP TABLE IF EXISTS public.tb_eleitor CASCADE;
DROP TABLE IF EXISTS public.tb_eleicao_candidato CASCADE;
DROP TABLE IF EXISTS public.tb_candidato CASCADE;
DROP TABLE IF EXISTS public.tb_eleicao CASCADE;
DROP TABLE IF EXISTS public.tb_voto CASCADE;

CREATE TABLE IF NOT EXISTS public.tb_candidato (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(85) NOT NULL,
	numero VARCHAR(35) NOT NULL,
	partido VARCHAR(85) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.tb_eleicao (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255),
	data DATE,
	descricao VARCHAR(255),
	periodo VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS public.tb_eleitor (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(85) NOT NULL,
	cpf VARCHAR(11) NOT NULL,
	senha VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.tb_voto (
	id SERIAL PRIMARY KEY,
	data_hora TIMESTAMP,
	numero VARCHAR(35),
	eleitor_fk INTEGER REFERENCES tb_eleitor(id),
	eleicao_fk INTEGER REFERENCES tb_eleicao(id)
);

CREATE TABLE IF NOT EXISTS public.tb_eleicao_candidato (
	candidato_fk INTEGER REFERENCES tb_candidato(id),
	eleicao_fk INTEGER REFERENCES tb_eleicao(id),
	PRIMARY KEY (candidato_fk, eleicao_fk)
);

-- População da tabela tb_candidato
INSERT INTO public.tb_candidato (nome, numero, partido) VALUES
('Maria Silva', '101', 'Partido Verde'),
('João Souza', '102', 'Partido Azul'),
('Ana Santos', '103', 'Partido Amarelo'),
('Carlos Pereira', '104', 'Partido Vermelho'),
('Beatriz Costa', '105', 'Partido Branco');

-- População da tabela tb_eleicao
INSERT INTO public.tb_eleicao (nome, data, descricao, periodo) VALUES
('Eleição Municipal 2024', '2024-11-05', 'Eleição para cargos municipais', '2024'),
('Eleição Estadual 2025', '2025-10-07', 'Eleição para cargos estaduais', '2025'),
('Eleição Federal 2026', '2026-10-05', 'Eleição para cargos federais', '2026'),
('Eleição Especial 2024', '2024-04-22', 'Eleição extraordinária', '2024'),
('Eleição de Recesso 2025', '2025-02-15', 'Eleição em período de recesso', '2025');

-- População da tabela tb_eleitor
INSERT INTO public.tb_eleitor (nome, cpf, senha) VALUES
('Pedro Lima', '12345678901', 'senha123'),
('Mariana Oliveira', '23456789012', 'senha456'),
('Ricardo Gomes', '34567890123', 'senha789'),
('Laura Nunes', '45678901234', 'senha321'),
('Fernanda Alves', '56789012345', 'senha654');

-- População da tabela tb_eleicao_candidato
-- Associa candidatos a eleições
INSERT INTO public.tb_eleicao_candidato (candidato_fk, eleicao_fk) VALUES
(1, 1), (2, 1), (3, 1), (4, 2), (5, 3);

-- População da tabela tb_voto
-- Cada voto está associado a um eleitor e uma eleição específica
INSERT INTO public.tb_voto (data_hora, numero, eleitor_fk, eleicao_fk) VALUES
('2024-11-05 10:30:00', '101', 1, 1),
('2024-11-05 10:40:00', '101', 1, 1),
('2024-11-05 11:00:00', '102', 2, 1),
('2025-10-07 09:15:00', '103', 3, 2),
('2025-10-07 10:45:00', '104', 4, 2),
('2026-10-05 12:30:00', '105', 5, 3);

-- ATIVIDADE 01
CREATE VIEW vw_eleicao_candidatos AS
SELECT 
eleicao.id AS EleicaoId, 
eleicao.nome AS EleicaoNome, 
eleicao.data AS EleicaoData, 
candidato.id AS CandidatoId,
candidato.nome AS CandidatoNome,
candidato.numero AS CandidatoNumero,
candidato.partido AS CandidatoPartido
FROM tb_eleicao AS eleicao
JOIN tb_eleicao_candidato AS ele_cand ON ele_cand.eleicao_fk = eleicao.id
JOIN tb_candidato AS candidato ON ele_cand.candidato_fk = candidato.id;

SELECT * FROM vw_eleicao_candidatos;

-- ATIVIDADE 02
DROP VIEW IF EXISTS vw_contagem_votos;

CREATE VIEW vw_contagem_votos AS
SELECT
eleicao.id AS EleicaoId,
candidato.nome AS CandidatoNome,
candidato.numero AS CandidatoNumero,
candidato.partido AS CandidatoPartido,
COUNT(voto) AS Votos
FROM tb_eleicao AS eleicao
JOIN tb_eleicao_candidato AS ele_cand ON ele_cand.eleicao_fk = eleicao.id
JOIN tb_candidato AS candidato ON ele_cand.candidato_fk = candidato.id
LEFT JOIN tb_voto AS voto ON voto.eleicao_fk = eleicao.id AND voto.numero = candidato.numero
GROUP BY eleicao.id, candidato.nome, candidato.numero, candidato.partido;

SELECT * FROM vw_contagem_votos AS contVotos 
WHERE contVotos.candidatonumero = '101' 
AND contVotos.eleicaoid = 2;
