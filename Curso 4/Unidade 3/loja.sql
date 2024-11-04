-- ############### Criando tabelas ###############
DROP TABLE IF EXISTS public.cliente_tb CASCADE;
DROP TABLE IF EXISTS public.produto_tb CASCADE;
DROP TABLE IF EXISTS public.venda_tb CASCADE;
DROP TABLE IF EXISTS public.venda_item_tb CASCADE;

CREATE TABLE IF NOT EXISTS public.cliente_tb(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(55) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.produto_tb(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(55) NOT NULL,
	preco DECIMAL NOT NULL
);

CREATE TABLE IF NOT EXISTS public.venda_tb(
	id SERIAL PRIMARY KEY,
	data DATE NOT NULL,
	cliente_fk INTEGER REFERENCES cliente_tb(id)
);

CREATE TABLE IF NOT EXISTS public.venda_item_tb(
	venda_fk INTEGER REFERENCES venda_tb(id),
	produto_fk INTEGER REFERENCES produto_tb(id),
	quantidade INTEGER NOT NULL,
	PRIMARY KEY(venda_fk, produto_fk)
);

-- ############### Populando ###############
-- Inserir dados na tabela cliente_tb
INSERT INTO cliente_tb (nome) VALUES
('Alice Silva'),
('Bruno Santos'),
('Carla Oliveira'),
('Diego Costa'),
('Evelyn Sousa'),
('Thyago Ronald');

-- Inserir dados na tabela produto_tb
INSERT INTO produto_tb (nome, preco) VALUES
('Notebook', 2500.00),
('Smartphone', 1500.00),
('Tablet', 800.00),
('Monitor', 700.00),
('Teclado', 150.00);

-- Inserir dados na tabela venda_tb
INSERT INTO venda_tb (data, cliente_fk) VALUES
('2024-10-01', 1),
('2024-10-02', 2),
('2024-10-03', 3),
('2024-10-04', 4),
('2024-10-05', 5);

-- Inserir dados na tabela venda_item_tb
INSERT INTO venda_item_tb (venda_fk, produto_fk, quantidade) VALUES
(1, 1, 1),  -- Venda 1, Notebook, 1 unidade
(1, 5, 2),  -- Venda 1, Teclado, 2 unidades
(2, 2, 1),  -- Venda 2, Smartphone, 1 unidade
(3, 3, 3),  -- Venda 3, Tablet, 3 unidades
(4, 4, 1),  -- Venda 4, Monitor, 1 unidade
(5, 1, 2),  -- Venda 5, Notebook, 2 unidades
(5, 3, 1);  -- Venda 5, Tablet, 1 unidade

-- ############### Buscas personalizadas ###############
-- Busca todos as vendas
SELECT cliente.nome, venda.data, SUM(produto.preco * venda_item.quantidade) FROM cliente_tb AS cliente
JOIN venda_tb AS venda ON venda.cliente_fk = cliente.id
JOIN venda_item_tb AS venda_item ON venda_item.venda_fk = venda.id
JOIN produto_tb AS produto ON venda_item.produto_fk = produto.id
GROUP BY cliente.nome, venda.data;

-- Busca todos as vendas, onde o cliente tenha feito mais de 1 compra.
SELECT cliente.nome, venda.data, SUM(produto.preco * venda_item.quantidade) FROM cliente_tb AS cliente
JOIN venda_tb AS venda ON venda.cliente_fk = cliente.id
JOIN venda_item_tb AS venda_item ON venda_item.venda_fk = venda.id
JOIN produto_tb AS produto ON venda_item.produto_fk = produto.id
HAVING COUNT(*) > 1
GROUP BY cliente.nome, venda.data;

-- Busca todos as vendas, ordenando por total pago.
SELECT cliente.nome, venda.data, SUM(produto.preco * venda_item.quantidade) FROM cliente_tb AS cliente
JOIN venda_tb AS venda ON venda.cliente_fk = cliente.id
JOIN venda_item_tb AS venda_item ON venda_item.venda_fk = venda.id
JOIN produto_tb AS produto ON venda_item.produto_fk = produto.id
GROUP BY cliente.nome, venda.data
ORDER BY SUM(produto.preco);

-- Busca todos as vendas, cliente como prioridade de mostragem.
SELECT cliente.nome, venda.data, SUM(produto.preco * venda_item.quantidade) FROM cliente_tb AS cliente
LEFT JOIN venda_tb AS venda ON venda.cliente_fk = cliente.id
LEFT JOIN venda_item_tb AS venda_item ON venda_item.venda_fk = venda.id
LEFT JOIN produto_tb AS produto ON venda_item.produto_fk = produto.id
GROUP BY cliente.nome, venda.data;

-- ############### Criando views ###############
-- View normal, sincroniza de acordo com os dados.
DROP VIEW IF EXISTS vw_venda_total;

CREATE VIEW vw_venda_total AS 
SELECT 
	cliente.nome AS Cliente, 
	venda.data AS Data, 
	SUM(produto.preco * venda_item.quantidade) AS Total 
FROM cliente_tb AS cliente
JOIN venda_tb AS venda ON venda.cliente_fk = cliente.id
JOIN venda_item_tb AS venda_item ON venda_item.venda_fk = venda.id
JOIN produto_tb AS produto ON venda_item.produto_fk = produto.id
GROUP BY cliente.nome, venda.data; 

SELECT * FROM vw_venda_total;

-- snapshot dos dados. Necessita de usar o REFRESH MATERIALIZED VIEW para sincronizar.
DROP VIEW IF EXISTS mvw_venda_total;

CREATE MATERIALIZED VIEW mvw_venda_total AS 
SELECT 
	cliente.nome AS Cliente, 
	venda.data AS Data, 
	SUM(produto.preco * venda_item.quantidade) AS Total 
FROM cliente_tb AS cliente
JOIN venda_tb AS venda ON venda.cliente_fk = cliente.id
JOIN venda_item_tb AS venda_item ON venda_item.venda_fk = venda.id
JOIN produto_tb AS produto ON venda_item.produto_fk = produto.id
GROUP BY cliente.nome, venda.data; 

REFRESH MATERIALIZED VIEW mvw_venda_total;

SELECT * FROM mvw_venda_total;











