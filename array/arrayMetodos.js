// Funciona como no objeto constante. Não podemos atribuir outra coisa à constante piloto, mas pode alterar o array
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // Massa quebrou o carro - função que remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen'); // Função que adiciona um elemento no final do array
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona um elemento na primeira posição
console.log(pilotos);

// splice - Adiciona ou remove elementos de um array
// Adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa'); // A partir do índice 2, remove 0 elemento e adiciona bottas e massa
console.log(pilotos);

// Removendo
pilotos.splice(3, 1); // A partir do índice 3, remove 1 elemento 
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Retorna um novo array a partir do índice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // Índice 1 ao 4, ignorando o 4 
console.log(algunsPilotos2);