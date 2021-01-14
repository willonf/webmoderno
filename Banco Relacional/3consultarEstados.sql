SELECT
    *
FROM
    estados;

SELECT
    nome,
    sigla
FROM
    estados;

SELECT
    nome AS Nome,
    sigla AS 'Sigla do Estado'
FROM
    estados;

SELECT
    nome AS Nome,
    sigla AS 'Sigla do Estado'
FROM
    estados;

SELECT
    nome,
    regiao,
    populacao
FROM
    estados
WHERE
    populacao >= 10
ORDER BY
    populacao DESC;