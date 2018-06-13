function soma() { // Não passar parâmetros não quer dizer que você não pode passar nenhum
    let soma = 0;
    
    for(i in arguments) { // arguments pega todos os parâmetros passados
        soma += arguments[i];
    }

    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3)); // Soma

console.log(soma(1.1, 2.2, "Teste")); // Soma os números e concatena com a string
console.log(soma("a", "b", "c")); // Concatena as strings