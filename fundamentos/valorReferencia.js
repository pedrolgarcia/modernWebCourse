// Em tipos primitivos temos a atribuição por valor
let a = 1;
let b = a; // Recebe o valor de a que é 1
b++; // Soma 1
console.log("A=" + a); // A continua como 1
console.log("B=" + b); // B foi somado e agora é 2

// Em objetos temos a atribuição por referência
let c = {id: 1}; // Aponta para o objeto
let d = c; // Recebe o endereço do objeto que c está apontando
d.id = 2; // Como c e d apontam para o mesmo objeto, os dois mudam. c e d agora tem id = 2
console.log(c);
console.log(d);