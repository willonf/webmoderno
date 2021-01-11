module.exports = {
    bomDia: 'Bom dia!',
    boaNoite() {
        return 'Boa noite, Will!'
    }
}

let x = 2;

const exportarX = valorX => {
    console.log(valorX)
}

exportarX(x)