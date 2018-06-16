const pai = { nome: 'Pedro', corCabelo: 'preto'};

const filha1 = Object.create(pai); // Já estabelece a relação de protótipo
filha1.nome = 'Ana';
console.log(filha1.corCabelo);

// params (protótipo, atributos com características)
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
});

console.log(filha2.nome);
filha2.nome = 'Carla'; // writable false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`); // corCabelo do pai

// Exibe apenas as chaves do próprio objeto, não pega os do protótipo
console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2) { // Percorre todos os atributos incluindo o do protótipo
    filha2.hasOwnProperty(key) ? // Verifica se o atributo pertence ao próprio objeto ou se veio por herança
        console.log(key) : console.log(`Por herança: ${key}`); 
}