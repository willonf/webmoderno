//Utilizando o operar REST/SPREAD com objetos

const funcionario = {nome:'Willon Ferreira da Silva', cargo: 'iOS Developer', salario:'6525.45'}
const clone = {ativo: true, ...funcionario}

console.log(funcionario)
console.log(clone)

console.log("+=+=+=+=+=+=+=+=+=+=")
//Utilizando o operar REST/SPREAD com objetos

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA]
console.log(grupoFinal)