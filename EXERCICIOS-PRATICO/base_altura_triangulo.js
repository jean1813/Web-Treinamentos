const input = require('readline-sync')

var  base, altura

altura = parseFloat(input.question('informe a base: '))
largura = parseFloat(input.question('informe a altura: '))


console.log(`O volume é ${base * altura / 2} cm`)