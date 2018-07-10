// Percorre uma estrutura pelo valor, não pelo indice como no for in
for (let letra of "Cod3r") {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise'];

for (let i in assuntosEcma) { // for in percorre por indice
    console.log(i);
}

for (let assunto of assuntosEcma) { // for of percorre por valor
    console.log(assunto);
}


// Percorrendo map
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],    
    ['Promise', { abordado: false }],
]);

for (let assunto of assuntosMap) {
    console.log(assunto); // Retorna a chave e o valor
}

for (let chave of assuntosMap.keys()) {
    console.log(chave); // Retorna a chave 
}

for (let valor of assuntosMap.values()) {
    console.log(valor); // Retorna o valor
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch ,vl); // Retorna chave e valor fora do array, com destructuring
}

// Percorrendo set
const s = new Set(['a', 'b', 'c']);

for(let letra of s) {
    console.log(letra);
}