console.log(soma(3, 4)); // Executa

// Function declaration (tradicional) - o interpretador carrega antes de executar o código
function soma(x, y) {
    return x + y;
}

// Function expression (guardando em um variável/constante)
const sub = function(x, y) {
    return x - y;
}

console.log(sub(3, 4));

// Named function expression (declaration + expression) - interessante para debugar código mas pouco usada
const mult = function mult(x, y) {
    return x * y;
}

console.log(mult(3, 4)); 