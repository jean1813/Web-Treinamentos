/**
 * Um clube de futebol pretende classificar seus atletas em categorias:
 * 
 * IDADES
 * 05 à 10 INFANTIL
 * 11 à 15 JUVENIL
 * 16 à 20 JUNIOR
 * 21 à 25 PROFISSIONAL
 * 
 */
const input = require('readline-sync')

var nome = input.question('Informe seu nome: ')
var idades = parseInt(input.question('Informe sua idade: '))
var resultado
switch (idades) {
    case 5, 6, 7, 8, 9, 10:  
        resultado = `${nome} voce é da categoria infantil`
        break;
    case 11, 12, 13, 14, 15:
        resultado = `${nome} voce é da categoria juvenil`
        break;
    case 16, 17, 18, 19, 20:
        resultado = `${nome} voce é da categoria junior`
        break;  
    case 21, 22, 23, 24, 25:
        resultado = `${nome} voce é da categoria profissional`
        break;  
    default:
        resultado = `${nome} nao esta enquadrado em uma categoria`
        break;      
}

console.log(resultado)