select
    est.nome as 'Estado',
    c.nome as 'Cidade',
    est.regiao as 'Região'
from cidades as c, estados as est
where est.id = c.estado_id;

-- O comando abaixo está indicando ao MySQL:
-- "Monte uma tabela que possua 2 colunas: Cidade e Estado"
-- "Essas colunas virão das tabelas estados e cidades"
-- "Se o id (do estado) for igual a estado_id (de cidades), exibir na consulta"
select
    c.nome as Cidade,
    e.nome as Estado
from estados as e
inner join cidades as c
on e.id = c.estado_id;
