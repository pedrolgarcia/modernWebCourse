// Desestruturando um objeto passado por parâmetro
function rand({ min = 0, max = 1000 }){ 
    const valor = Math.random() * (max - min) + min; // random retorna um número aleatório
    return Math.floor(valor); // floor arredonda o número para baixo
}

const obj = {min:50, max: 200}
// Passando o objeto
console.log(rand(obj));
console.log(rand({min: 35, max: 200}));
console.log(rand({})); // Objeto vazio, vai usar o valor padrão definido na função
console.log(rand()); // Erro: não foi possível desestruturar pois não foi passado nenhum objeto