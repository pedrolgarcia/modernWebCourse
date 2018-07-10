// Arrow Function
// Função anônima atribuida a uma var ou const
const soma = (a, b) => a + b; // Retorno implícito
console.log(soma(2, 3));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports); // arrow functinon - this aponta para o módulo
const lexico3 = function() {
    return console.log(this === global); // função tradicional - this aponta para global
}
const lexico2 = lexico1.bind({});
lexico1();
lexico2();
lexico3();

// Parâmetros default
function log(texto = 'Node') {
    console.log(texto);
}

log(undefined); // default
log(null); // null
log(); // default
log('Sou mais forte'); // sou mais forte

// Operador rest
function total(...numeros) { 
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
} 

console.log(total(2, 3, 4, 5));