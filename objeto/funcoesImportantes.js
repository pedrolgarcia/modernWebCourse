const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); // Retorna todas as chaves de um objeto
console.log(Object.values(pessoa)); // Retorna os valores dessas chaves
console.log(Object.entries(pessoa)); // Retorna os valores e chaves, cada conjunto em um array

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', { // Define propriedades para um objeto, podendo definir características
    enumerable: false, // Se pode ser listada
    writable: false, // Se pode ser modificada
    value: '01/01/2019' // Define um valor
});

pessoa.dataNascimento = '01/01/2017'; // Não altera pois writable é false
console.log(pessoa.dataNascimento); 
console.log(Object.keys(pessoa)); // Não lista pois enumerable é false

// Object.assign (ES6)
const destino = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(destino, o1, o2); // Concatena os dados de objetos em um objeto destino, dados já existentes são sobrescritos

console.log(obj);

Object.freeze(obj); // "Congela" o objeto, não deixa modifica-lo
obj.c = 1234;

console.log(obj);