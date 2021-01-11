calculaFib = (n) => {
    if (n <= 1) {
        return n
    } else {
        return (calculaFib(n - 1) + calculaFib(n - 2))
    }
}

for (let i = 0; i < 4; i++){
    console.log(calculaFib(i))
}