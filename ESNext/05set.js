// O Set não aceita repetição e não é indexado

const times = new Set()
times
.add('Vasco')
.add('São Paulo')
.add('Palmeiras')
.add('Vasco')
.add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Júlia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)