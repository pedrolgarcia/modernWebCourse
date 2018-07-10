// let e const
// let possui escopo de bloco, diferentemente de var
{
    var a = 2;
    let b = 3;
    console.log(b);
}
console.log(a);
// console.log(b); error - o b está definido no escopo de bloco

// Template String
const produto = 'iPad';
console.log(`${produto} é caro!`); // Permite interpolação de variáveis

// Destructuring
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = { nome: 'Ana', idade: 9 };
console.log(i, nome);
