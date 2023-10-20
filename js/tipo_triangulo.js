/**
 * o Triangulo 
 * é equilatero - os 03 lados são iguais
 * é isósceles -  os 02 lados são iguais
 * é escaleno - os 03 lados são diferentes
 */

var a, b, c

a = 7
b = 7
c = 9


if (a === b && a === c && b === c) {
    console.log(" Este triangulo é equilatero")
}
else if(a === b && b !== c){
    console.log("Este triangulo é isoceles - 1e")
}
else if(a === c && b !== c){
    console.log("Este triangulo é isoceles - 2e")
}
else if(c === b && a !== c){
    console.log("Este triangulo é isoceles - 3e")
}
else{
    console.log("Este triangulo é escaleno")
}