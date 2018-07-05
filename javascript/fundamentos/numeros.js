// Declarando números
const peso1 = 1.0; // Inteiro
const peso2 = Number('2.1'); // Flutuante

console.log(peso1, peso2);
// isInteger verifica se é inteiro
console.log(Number.isInteger(peso1)); // true
console.log(Number.isInteger(peso2)); // false

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed define a quantidade de casas decimais
console.log(media.toString()); // Converte para string (passar o parametro 2, retorna em binário)
console.log(typeof media);
console.log(typeof Number); // number é o tipo de dado, Number é a função