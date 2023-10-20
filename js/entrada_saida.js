const input = require("readline-sync")

var nome = input.question('Informe o seu primeiro nome?')
var sobrenome = input.question('Informe o seu sobrenome?')
var anoDeNascimento = parseInt(input.question('Qual o ano que você nasceu?'))

var anoAtual = new Date().getFullYear()
console.log(typeof(anoDeNascimento))
var calcularIdade = anoAtual - anoDeNascimento


console.log(`olá, ${nome} ${sobrenome} voce tem ${calcularIdade} anos`)
