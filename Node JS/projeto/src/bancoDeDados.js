const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id //Se o id não estiver setado, o produto receberá o id em sequência
    produtos[produto.id] = produto //O produto atual será inserido no id especificado em produto.id
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto (id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {
    salvarProduto,
    getProduto,
    getProdutos,
    excluirProduto
}