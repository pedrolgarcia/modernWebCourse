const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false},
]

const caro = p => p.preco >= 500;
const fragil = p => p.fragil;

console.log(produtos.filter(caro).filter(fragil)); // Passando um true significa que o elemento entra no array final, false não

/*console.log(produtos.filter(function(p) {
    return p.preco >= 500 && p.fragil; 
}));*/