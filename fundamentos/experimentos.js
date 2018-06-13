// Entenda o runtime e fuja do escopo global
// Em browser this é window e toda var criada entra nesse escopo (global), let e const não entram

// Em node
let a = 3; // Escopo local

global.b = 123;

this.c = 456;
this.d = false;
this.e = 'teste';

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports); // retorna um objeto com as variáveis em this

// Criando uma variável maluca: sem var e sem let
abc = 3; // Não faça isso em casa!
console.log(global.abc)

//this = module.exports
// module.exports = {e: 456, f:false, g:'teste'}