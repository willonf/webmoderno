insert into empresas (id, nome, cnpj)
values
    (default, 'Bradesco', 95694186000132),
    (default, 'Vale', 27887148000146),
    (default, 'Cielo', 01598317000134);

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1,1,1), (1,2,0), (2,1,0), (2,2,1);