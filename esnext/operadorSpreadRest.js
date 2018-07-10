// Operador ... rest(juntar)/spread(espalhar)
// Usar rest com parâmetro de função

// Usar spread com objeto
const functionario = { nome: 'Maria', salario: 12348.99 };
const clone = { ativo: true, ...functionario }; // "Espalha" todos os atributos de funcionario em clone 

console.log(clone);

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Glória'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']; // "Espalha" todos os elementos de um array em outro array 

console.log(grupoFinal);