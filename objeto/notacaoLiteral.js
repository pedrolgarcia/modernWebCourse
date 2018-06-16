const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c}; // Usado quando deseja mudar o nome do atributo
const obj2 = { a, b, c}; // ES6

console.log(obj1, obj2); // Iguais

const nomeAttr = 'nota';
const valorAttr = 7.87;

// Definindo a partir de variáveis
const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);
//OU
const obj4 = {[nomeAttr]: valorAttr};
console.log(obj4);

// Definindo funções no objeto
const obj5 = {
    funcao1: function() { // Forma antiga
        // ...
    },
    funcao2() { // ES6
        // ...
    }
}

console.log(obj5);
