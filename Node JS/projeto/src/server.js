const port = 3003
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))
// O .use() indica que todas as requisições passarão pelas instruções do .use()
//O bodyParser.urlencoded() significa que as requisições no padrão URL Encoded, serão tranformadas em objeto

app.get('/produtos', (req, res, next) => {
    // res.send({ nome: 'Notebook', preco: 123.45 }) //Conversão automática para formato JSON
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Convertido em JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Convertido em JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //Convertido em JSON
})

app.listen(port, () => {
    console.log(`O servidor está sendo executado na porta ${port}`)
})

