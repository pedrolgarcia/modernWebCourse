function criarProduto(nome, preco, desconto = 0.50) {
    return {
        nome, //nome: nome,
        preco, //preco: preco,
        desconto, //desconto: desconto = 0.50,
        // precoTotal: preco - (preco * desconto)
    }
}

console.log(criarProduto("Iphone", 1000));