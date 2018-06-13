let valor; // Mas não inicializada
console.log(valor); // undefined - declarada mas não inicializada
// console.log(valor2); erro - nem declarada foi

valor = null; // Não possui nenhum valor e não aponta para nenhum endereço na memória
console.log(valor); // null

const produto = {}
console.log(produto.preco); //undefined
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // Evitar atribuir undefined
console.log(!!produto.preco); // false
// delete producto.preco melhor que atribuir undefined
console.log(produto); // preco:undefined

produto.preco = null; // Sem preço
console.log(!!produto.preco); // false
console.log(produto); // preco:null