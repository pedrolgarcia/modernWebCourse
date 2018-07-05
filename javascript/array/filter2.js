// Funcionamento interno do filter - simulando com método próprio
Array.prototype.filter2 = function(filterCallBack) {
    const res = [];
    for(let i = 0; i < this.length; i++){
        if(filterCallBack(this[i], i, this)) {
            res.push(this[i]);
        }
    }
    return res;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false},
]

const caro = p => p.preco >= 500;
const fragil = p => p.fragil;

console.log(produtos.filter2(caro).filter2(fragil));