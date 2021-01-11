const contadorA = require('./07instanciaUnica')
const contadorB = require('./07instanciaUnica')
const contadorC = require('./07instanciaNova')()
const contadorD = require('./07instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
contadorC.inc()
contadorC.inc()
contadorD.inc()

console.log(contadorC.valor)
console.log(contadorD.valor)