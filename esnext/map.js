// Estrutura chave - valor onde a chave pode ser de qualquer tipo, não só string como no objeto
const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react); // undefined
console.log(tecnologias.get('react').framework); // Para acessar deve-se usar o get

// Criando map já atribuindo os elementos
const chavesVariadas = new Map([
    [function() { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]);

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
});

console.log(chavesVariadas.has(123)); // Verifica se o elemento está contido no map
chavesVariadas.delete(123); // Exclui um elemento do map
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size); // Verifica quantos elementos existem no map