// Em js todo objeto tem uma referência para um protótipo, assim é feita a herança
// Quando não acha um atributo no filho, acessa o próximo protótipo pai, percorrendo a cadeia de protótipos
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__); // Acessa a classe pai de ferrari
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null); // Object.prototype é o nível mais alto na hierarquia

function MeuObjeto() {}

console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);