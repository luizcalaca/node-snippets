const x = '10'

if(!Number.isInteger(x)){
    throw new Error("O valor de x não é um inteiro")
}

console.log('Continuando o código')