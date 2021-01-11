console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log("This dentro de uma função...")
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(exports === module.exports)
    console.log(this === global)
}

logThis()