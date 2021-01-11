const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {

            let resultado = ''

            res.on('data', dados => { //Interceptandos os dados que foram enviados
                resultado += dados
            })

            res.on('end', () => { //Ação executada no fim da requisição
                try {
                    resolve(JSON.parse(resultado))
                }
                catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8 com o objetivo de simplificar o uso de promises

let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')

    return [].concat(ta, tb, tc)
} //Vai retornar um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))