var frutas = []  // Arrays, Vetores // todos arrays começa da posição zero(0)

frutas = ['Laranja', 'Pera', 'Uva', 'Abacate', 'Maçã']

console.log(frutas[1]) //p
console.log(frutas[frutas.length - 4]) 
//para encontrar o ultimo elemento
//console.log(frutas[0]) //p
//console.log[frutas.length - 1])


for (let i = 0; i < frutas.length; i++) {
    console.log(`${i} - ${frutas[i]}`)  // console.log(`${i} - ${frutas[i]}`) imprime a numeração // => //`${frutas[i]}` lista das frutas
}
