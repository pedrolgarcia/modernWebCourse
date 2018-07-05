const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback
const notasBaixas1 = [];

for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

// Com callback
const notasBaixas2 = notas.filter(function(nota) { // Função que filtra os elementos de uma array a partir de um determinado critério (passando uma callback)
    return nota < 7;
});

console.log(notasBaixas2);

const notasBaixas3 = notas.filter(nota => nota < 7); // Passando arrow function como callback
console.log(notasBaixas3);