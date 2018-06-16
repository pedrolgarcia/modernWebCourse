// Coleção dinâmica de pares chave/valor

// Criando dinâmicamente
const produto = new Object;

produto.nome = 'Cadeira'; 
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);

// Excluindo um atributo
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

// Acessando por níveis
carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante';

console.log(carro);

// Deleta tudo que está dentro do nível
delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores); // undefined
console.log(carro.condutores.length); // erro