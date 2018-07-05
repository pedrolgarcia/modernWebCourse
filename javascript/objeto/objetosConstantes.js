// Por que conseguimos mexer objetos constantes??

// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro'; // Mudando o atributo do mesmo objeto

console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}; // Atribuindo um novo objeto a constante pessoa, altera o endereço e const não permite

Object.freeze(pessoa); // "Congela" o objeto e não pode mexer nele (alterar, criar e excluir atributos)
pessoa.nome = 'Maria'; // Ignora
console.log(pessoa.nome); // Nome: Pedro

// Criando um objeto já "congelado"
const pessoaConstante = Object.freeze({nome: 'João'});
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);