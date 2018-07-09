// No node, fora de uma função o this referencia o module.exports, assim como o exports
console.log('Fora de uma função...');
//false
console.log(this === global);
console.log(this === module);

// true
console.log(this === module.exports);
console.log(this === exports);

// Já dentro de uma função, o this referencia global
function logThis() {
    console.log('Dentro de uma função...');
    // false
    console.log(this === module.exports);
    console.log(this === exports);
    // true
    console.log(this === global);
}

logThis();