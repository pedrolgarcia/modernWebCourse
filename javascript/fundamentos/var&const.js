// Declarando variáveis
var a = 1; // Com o var, é possível redeclarar a variável depois
let b = 2; // Nova palavra reservada ES2015 que cria e não permite declarar a mesma variável novamente

console.log(a, b);

// Manipulando
var a = 10; // Redeclarando, var permite
// let b = 20; Erro: a variável já tinha sido declarada
b = 20; 

console.log(a, b);

// Declarando constantes
const c = 3;
// c = 30; Erro: Não podemos mudar o valor de um constante

console.log(c);