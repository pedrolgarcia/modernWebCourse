// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3); // Mostra a soma entre 2 e 3 = 5
imprimirSoma(2); // Retorna not a Number(NaN) pois b é undefined, NÃO DA ERRO
imprimirSoma(2, 10, 4, 5, 6); // Soma os parâmetros correspondentes e ignora o resto
imprimirSoma(); // NaN pois a e b são undefined, NÃO DA ERRO

// Função com retorno
function soma(a, b = 1){
    return a + b;
}

console.log(soma(2, 3)); 
console.log(soma(2)); // b tem um valor padrão definido na função, logo, se não for passado, ele utiliza essa valor