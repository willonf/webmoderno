SELECT 
    c.nome as Cidade,
    p.nome as Prefeito,
    c.id as id_cidade,
    p.cidade_id as p_cidade
FROM
    cidades AS c
        INNER JOIN
    prefeitos AS p ON c.id = p.cidade_id;


SELECT 
    c.nome as Cidade,
    c.id as id_cidade,
    p.nome as Prefeito,
    p.cidade_id as p_cidade
FROM cidades AS c
right JOIN
    prefeitos AS p ON c.id = p.cidade_id;

    SELECT 
    c.nome as Cidade,
    c.id as id_cidade,
    p.nome as Prefeito,
    p.cidade_id as p_cidade
FROM cidades AS c
left JOIN
    prefeitos AS p ON c.id = p.cidade_id;

    