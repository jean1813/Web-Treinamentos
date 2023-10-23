const input = require('readline-sync')

var  velocidade, tempo, distancia

distancia = 435

//recebendo em km/h e convertendo par m/s
velocidade = parseFloat(input.question('informe a velocidae: ')) / 3.6

tempo = velocidade / distancia

console.log(`Na velocidade de  ${velocidade} m/s levara o tempo de ${tempo} s`)
//tofixed(2) deixa em duas casas decimais