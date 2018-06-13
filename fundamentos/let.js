// A variável definida com let possui 3 escopos: global, de função e de BLOCO
var numero = 1; 
{
    let numero = 2; // E
    console.log("dentro =", numero); // let bloco
}
console.log("fora =", numero); // var global

let numero2 = 3;
{
    let numero = 4;
    console.log("dentro =", numero2); // Não achou no escopo de bloco, vai procurar em um escopo acima (3)
}
console.log("fora =", numero2);