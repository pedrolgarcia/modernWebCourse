// Array - estrutura de dados indexada e dinâmica em JS
let valores = [1.1, 2.2, 3.3, 4.4] // Criando array 
console.log(valores); // Mostra todo o array
console.log(valores[0], valores[3]); // Acessando índices
console.log(valores[4]); // Retorna o tipo undefined, não da error

valores[6] = 5.5; // Adicionando elemento na posição
console.log(valores[6]);
console.log(valores.length); // Retorna a quantidade de elementos de um array
console.log(valores); // Posições 4 e 5 não possuem valor, retorna vazio

// Array em JS é heterogêneo (aceita qualquer tipo de dados), por ser fracamente tipado
valores.push({id: 3}, false, null, 'teste'); // Adiciona elementos a partir da última posição
console.log(valores);

console.log(valores.pop()); // Retorna e exclui o último elemento do array
delete valores[0]; // Exclui o elemento do índice, não realoca deixa vazio
console.log(valores);

console.log(typeof valores); // Em JS, array é do tipo object