function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //resolve Enviará frase para o .then(). O reject enviará o conteúdo para o .catch()
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'Olá Will!')
    .then(frase => frase.concat(' Tudo bem?')) //O retorno dessa função é enviado para o próximo .then()
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))