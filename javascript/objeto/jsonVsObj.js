// JSON - JavaSript Object Notation - Formato textual que permite a interoperabilidade entre sistemas
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }};
console.log(JSON.stringify(obj)); // Tranforma um objeto em json. Ignora a função soma

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")); formato inválido
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")); formato inválido, aspas simples
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')); // Tranforma json em objeto

console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'));