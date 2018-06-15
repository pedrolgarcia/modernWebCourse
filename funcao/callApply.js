// Outras formas de invocar uma função

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    // Define no objeto
    getPreco 
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco()); // Acessando a função definida

const carro = { 
    preco: 49990,
    desc: 0.20
}

// Acessando sem definir - passa o contexto
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// Quando a função tem parâmetros
console.log(getPreco.call(carro, 0.17, '$')); // Passa direto
console.log(getPreco.apply(global, [0.17, '$'])); // Passa um array