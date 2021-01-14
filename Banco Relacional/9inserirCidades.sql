INSERT INTO
    cidades (id, nome, area, estado_id)
VALUES
    (DEFAULT, 'Campinas', 795, 24);

INSERT INTO
    cidades (id, nome, area, estado_id)
VALUES
    (DEFAULT, 'Niterói', 133.9, 18);

INSERT INTO
    cidades (id, nome, area, estado_id)
VALUES
    (DEFAULT, 'Caruaru', 920.6,(SELECT id FROM estados WHERE sigla = 'PE'));

INSERT INTO
    cidades (id, nome, area, estado_id)
VALUES
    (DEFAULT, 'Juazeiro do Norte', 248.2,(SELECT id FROM estados WHERE sigla = 'CE'));