const fs = require('fs')
const caminho = __dirname + '/11arquivo.json'


//Lendo de forma síncrona
// const conteudo = JSON.parse(fs.readFileSync(caminho, 'UTF-8'))
// console.log(conteudo.db.host)

//Lendo de forma assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host} : ${config.db.port}`)
})

const config = require('./11arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log("Conteúdo da pasta...")
    console.log(arquivos)
})