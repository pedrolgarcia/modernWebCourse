// Outra forma de definir uma string, delimitada por backticks (`)
const nome = 'Pedro';
const concatenacao = 'Olá ' + nome + '!'; // Concatenando 
// Template string permite a interpolação de variáveis, e reconhece quebras de linha, espaços, tabs
const template = ` 
    Olá
    ${nome}!`;

console.log(concatenacao, template);

// Executa expressões e funções
console.log(`1 + 1 = ${1 + 1}`);

const up = text => text.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);