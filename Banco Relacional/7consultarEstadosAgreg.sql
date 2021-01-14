SELECT
    regiao AS 'Região',
    sum(populacao) AS 'Total'
FROM
    estados
GROUP BY
    regiao
ORDER BY
    total DESC;

SELECT
    regiao AS 'Região',
    avg(populacao) AS 'Média'
FROM
    estados
GROUP BY
    regiao
ORDER BY
    Média DESC;