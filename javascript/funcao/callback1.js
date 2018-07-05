// Passar uma função para outra e quando um evento acontecer essa função vai ser chamada de volta
const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice){ // Função callback
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); // Foreach percorre os elementos de um array. A cada iteração (evento), chama a callback imprimir
fabricantes.forEach(function(a) {
    console.log(a);
});