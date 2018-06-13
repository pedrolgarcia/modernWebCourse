console.log('1)', '1' == 1); // igual - Compara o valor
console.log('2)', '1' === 1); // idêntico ou estritamente igual - Compara o tipo e valor
console.log('3)', '3' != 3); // diferente
console.log('4)', '3' !== 3); // estritamente diferente

console.log('5)', 3 < 2); // menor
console.log('6)', 3 > 2); // maior
console.log('7)', 3 <= 2); // menor ou igual
console.log('8)', 3 >= 2); // maior ou igual

const d1 = new Date(0); // Date(0) = 01/01/1970
const d2 = new Date(0);
// Compara a referência de memória, então é false
console.log('09)', d1 == d2); 
console.log('10)', d1 === d2);
console.log('11)', d1.getTime() === d2.getTime()); // Compara numbers então é true

console.log('12)', undefined == null);
console.log('13)', undefined === null);