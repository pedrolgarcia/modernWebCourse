// Hoisting = elevação
console.log("a =", a); // Exibe undefined pois ocorre o hoisting, ou seja, move-se a declaração var a para o topo
var a = 2; 

console.log("a =", a); // Exibe o valor ja atribuído


/* Como se ocoresse isso:
 * var a;
 * console.log("a =", a); = undefined
 * a = 2;
 * console.log("a =", a); = 2
 */

// Hoisting não funciona com let
console.log("b =", b); 
let b = 2; 

console.log("b =", b);