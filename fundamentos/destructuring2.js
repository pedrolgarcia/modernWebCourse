const [a] = [10]; // Pega apenas um elemento e atribui a "a"
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; // Pega vários valores do array e atribui a variáveis, ignora o segundo elemento e o quinto é undefined, o sexto é 0 por padrão
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]; // Ignora o primeiro array, entra no segundo, ignora o primeiro elemento (9) e pega o 6
console.log(nota);