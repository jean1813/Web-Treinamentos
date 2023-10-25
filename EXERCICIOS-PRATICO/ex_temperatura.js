const input = require('readline-sync') // biblioteca de interação com o usuario

var temperatura = parseFloat(input.question('Informe a temperatura em fahrenheit: '))
let celsius = (temperatura - 32) * 5 / 9
console.log(` A temperatura ${temperatura} °f é ${celsius} °c`)







