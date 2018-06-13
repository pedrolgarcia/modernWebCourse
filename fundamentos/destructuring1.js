// Novo recurso ES6, extrai um atributo de um objeto ou array
const pessoa = {
    nome: "Pedro",
    idade: 19,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa; // Pega nome e idade de pessoa
console.log(nome, idade);

const { nome: n, idade: i } = pessoa; // Guarda nome e idade nas variáveis n e i
console.log(n, i);

const { endereco: { logradouro, numero, cep } } = pessoa; // cep é undefined
// OU const { logradouro, numero } = pessoa.endereco;
console.log(logradouro, numero, cep);

// Cuidado com desestruturação de estruturas aninhadas. Apenas o dado final pode ser undefined ou null, o caminho até o dado não
const { conta: { ag, num } } = pessoa; // erro: conta não existe no objeto pessoa
console.log(ag, num);