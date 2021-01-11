const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


//Filtrar do arquivo JSON acima a mulher chinesa com o menor salário.
//Passo 1: Filtrar os chineses;
//Pass 2: Filtrar as mulheres chinesas;
//Passo 3: Filtrar a mulher chines com o menor salário.

//Axios é um client HTTP de requisição e resposta

//O ".get()"" obtém uma informação do servidor (Request);
//O ".then()" é a ação a fazer com a resposta (Handle success);
//o ".chatch()" é a ação a fazer sem a resposta(Handle error)

axios.get(url).then(response => {
    const funcionarios = response.data
    const chineses = f => f.pais === "China"
    const mulheres = s => s.genero === "F"
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    const resultado = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(resultado.nome)
})