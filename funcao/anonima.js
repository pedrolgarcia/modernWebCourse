// Função anônima não possui um nome
const soma = function(x, y) {
    return x + y;
}

const imprimirResultado = function(a, b, operacao = soma){ // Podemos passar ela por parâmetro
    console.log(operacao(a, b));
}

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function(x, y){
    return x - y;
});
imprimirResultado(3, 4, (x, y) => x * y); // Arrow function é uma função anônima

const pessoa = {
    falar: function() { // Definindo uma função para o objeto pessoa
        console.log("Opa");
    }
    //ou falar() {}
}