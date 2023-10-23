const input = require('readline-sync')

var altura, largura, profundidade, volume

altura = parseFloat(input.question('informe a altura: '))
largura = parseFloat(input.question('informe a lagura: '))
profundidade = parseFloat(input.question('informe a profundidade: '))

//regra
//volume = altura * largura * profundidade
//console.log(`O volume é ${volume} cm`)
console.log(`O volume é ${altura * largura * profundidade} cm`)