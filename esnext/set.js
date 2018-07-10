// Estrutura não indexada e não aceita repetição
const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corinthians');
times.add('Fluminense');
times.add('Vasco'); // Não aceita repetição

console.log(times);
console.log(times.size); // Quantidade de elementos
// Verifica se existe
console.log(times.has('vasco')); // Case Sensitivy
console.log(times.has('Vasco'));
times.delete('Corinthians'); // Excluir
console.log(times.has('Corinthians')); 

// Criando set já atribuindo os elementos
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet);