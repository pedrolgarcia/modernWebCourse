// Cadeia de caracteres delimitados por aspas simples, duplas ou craze
const text = "Cod3r";

console.log(text.charAt(4)); // Retorna a letra que está no índice 4
console.log(text.charAt(5)); // O índice não existe, não da erro (retorna vazio)
console.log(text.charCodeAt(3)); // Retorna o código do valor no índice 3 na tabela unicode
console.log(text.indexOf('3')); // Retorna o índice que o 3 se encontra
console.log(text.substring(1)); // Retorna a string a partir do índice 1
console.log(text.substring(0, 3)); // Retorna a string entre os índices 0 e 3 sem incluir o 3
console.log("I'm a ".concat(text).concat("!")); // Concatena várias strings
console.log(text.replace(3, 'e')); // Substitui uma string por outra
console.log('Ana, Maria, Pedro'.split(',')); // Quebra a string a partir do separador definido, guardando em um array