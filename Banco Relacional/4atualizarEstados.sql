UPDATE
    estados
SET
    nome = 'Maranhão'
WHERE
    sigla = 'MA';


SELECT
    estados.`nome`
FROM
    estados
WHERE
    sigla = 'MA';


UPDATE
    estados
SET
    nome = 'Paraná',
    populacao = 11.32
WHERE sigla='PR';


SELECT
    est.`nome`, est.`populacao`, est.`sigla`
FROM
    estados est
WHERE
    sigla = 'PR';
