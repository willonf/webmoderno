//Tagged template: processar o template dentro de uma faunção

function tag (partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Will'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)
