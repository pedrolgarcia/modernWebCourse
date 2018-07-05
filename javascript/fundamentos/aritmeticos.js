const [a, b, c, d] = [3, 5, 1, 15];

// Operadores binários, envolve dois operandos
const soma = a + b + c + d;
/* d++ postfix
 * ++d prefix
 * c + d infix
 */
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2;

console.log(soma, subtracao, multiplicacao, divisao, modulo);

console.log(-soma); // Operador unário