// Desestruturando um array passado por parâmetro
function rand([ min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]; // Verifica se o mínimo é maior que o máximo, se for inverte
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40])); // min > max, inverte
console.log(rand([992]));
console.log(rand([, 10])); 
console.log(rand([])); // Assume os valores padrôes
console.log(rand()); // Erro