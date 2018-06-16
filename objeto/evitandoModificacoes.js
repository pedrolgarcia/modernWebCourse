// Object.preventExtensions - proibe adicionar novos atributos em um objeto, mas permite alterar e excluir
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
});

console.log('Extensível:', Object.isExtensible(produto)); // Teste se um objeto foi criado com preventExtensions

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca'; // Ignora
delete produto.tag; 
console.log(produto);

// Object.seal - Permite alterar, mas não permite adicionar nem excluir
const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'; // Ignora
delete pessoa.nome; // Ignora
pessoa.idade = 29; 
console.log(pessoa);

// Object.freeze - "COngela" um objeto, não permite excluir, alterar nem adicionar atributos