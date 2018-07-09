require('./global'); // Para carregar o que você adicionou no global é necessário importar (apenas uma vez)

console.log(MinhaApp.saudacao());
MinhaApp.nome = 'Eita'; // Alterando atributo do objeto, perigoso, pode-se evitar dando um freeze na hora da criação
console.log(MinhaApp.nome); // Não alterou devido ao freeze