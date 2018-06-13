console.log(typeof Object); // Função
console.log(typeof new Object); // Instância da função - objeto

const Cliente = function (){}
console.log(typeof Cliente); // Função
console.log(typeof new Cliente); // Objeto

class Produto {} // (ES6) Classe é só um detalhe de sintaxe, internamente é uma função
console.log(typeof Produto); // Função
console.log(typeof new Produto()); // Objeto
