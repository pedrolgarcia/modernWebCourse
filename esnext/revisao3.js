// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // Retorna todos os valores em um array
console.log(Object.entries(obj)); // Retorna todas as chaves e valores em um array

// Melhorias na Notação literal
const nome = 'Carla';
const pessoa = {
    nome, // Antes - nome: nome
    ola() { // Antes - ola: function(){}
        return 'Oi gente!';
    }
}

console.log(pessoa.nome, pessoa.ola()); 

// Class - convertida para function internamente
class Animal {}
class Cachorro extends Animal{
    falar() {
        return 'Au au!';
    }
}

console.log(new Cachorro().falar());