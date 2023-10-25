const input = require('readline-sync')
a = 10
var valor = parseInt(input.question('Informe o valor : '))

if(valor > a){
    console.log(`A é maior que 10`)
} else{
    console.log(`A é menor que 10`)
}
