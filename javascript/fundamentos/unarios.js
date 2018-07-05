// Operadores que possuem apenas um operando
let num1 = 1;
let num2 = 2;

num1++; // Incremento pós-fixado
console.log(num1);
--num1; // Decremento pré-fixado 
console.log(num1);

console.log(++num1 === num2--); // incrementou o num1 pois é pré-fixado, e comparou com o num2 original
console.log(num1 === num2); // false pois num2 foi decrementado depois da comparação acima