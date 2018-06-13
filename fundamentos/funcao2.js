// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){ // Função anônima (sem nome)
    console.log(a + b);
}
imprimirSoma(2, 3); // Chamando a função

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 3));

// Retorno implícito
const subtracao = (a, b) => a - b; // Parâmetros + arrow + retorno
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2('Legal!');