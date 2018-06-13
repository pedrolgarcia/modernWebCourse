console.log(7 / 0); // Retorna um tipo chamado Infinity
// String tem preferência
console.log("10" / 2); // Como a divisão não funcinoa com string, ele converte em number e divide, retorna 5
console.log("3" + 2); // O + é concatenação em string, retorna 32 STRING GANHA
console.log("3" - 2); // A subtração não funciona com strings, retorna 1
console.log("Show!" * 2); // Algumas linguagens mostariam Show 2 vezes, js retorna NaN(not a number)
console.log(0.1 + 0.7); // Retorna 0.7999999... devido a especificação da linguagem 
// console.log(10.toString()); // Erro
console.log((10).toString());
console.log((10.213131).toFixed(2));