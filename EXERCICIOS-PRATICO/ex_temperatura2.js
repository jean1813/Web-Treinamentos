const input = require('readline-sync') // biblioteca de interação com o usuario

var temperatura = parseFloat(input.question('Informe uma temperatura: '))
var tipo = input.question('Deseja converter: 0 - Celsius | 1 - Fahrenheit ')
let calculo, resultado

switch (tipo){
    case '0':
        calculo = (temperatura - 32) * 5 / 9 //FORMULA CELSIUS
        resultado = `A temperatura ${temperatura} °f é ${calculo} °c`
        break;

    case '1':
        calculo = (temperatura * 9 + 160) / 9 //FORMULA FAHRENHEIT
        resultado = `A temperatura ${temperatura} °f é ${calculo} °c`
        break;

    default:
        resultado =  `Opção inválida`
        break;
}   
console.log(resultado)
