// Função que mapeia os elementos de um array para outro de MESMO TAMANHO, transformando os dados
// For com propósito
const nums = [1, 2, 3, 4, 5];

// Mapeando o dobro de cada elemento de nums, guarda em resultado (gera um novo array)
let resultado = nums.map(function(e) {
    return e * 2;
});

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`;

// Chamando 3 funções de uma vez, encadeando os maps
resultado = nums.map(soma10).map(triplo).map(paraDinheiro); 
console.log(resultado); // Gerou 1 array - somou 10, triplicou e transformou em dinheiro