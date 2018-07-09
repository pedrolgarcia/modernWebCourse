console.log(module.exports === this); 
console.log(module.exports === exports);

// Formas de exportar
this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null; // this e exports referencia o mesmo objeto de module.exports
console.log(module.exports); // Continua o mesmo

exports = { // Mesmo atribuindo um outro objeto ao exports, module.exports não altera
    nome: 'Teste'
};

console.log(module.exports); 
// No final das contas o que será retornado é o que está dentro de module.exports 

module.exports = { publico: true};