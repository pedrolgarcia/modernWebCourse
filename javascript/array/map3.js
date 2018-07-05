// Funcionamento interno do map - simulando com método próprio
Array.prototype.map2 = function(mapCallBack) {    
    let res = [];
    for(let i = 0; i < this.length; i++) {
        res.push(mapCallBack(this[i], i, this));    
    }
    return res;
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

let precos = carrinho.map2(function(elemento) {
    return JSON.parse(elemento).preco;
});

console.log(precos);