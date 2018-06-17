const alunos = [
    { nome:'João', nota: 7.9 },
    { nome:'Maria', nota: 9.2 }
]

// Imperativo - Como tem que ser feito? menos reuso
let total1 = 0;
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}

console.log(total1 / alunos.length);

// Declarativa - O que tem que ser feito? recomendado
// Promove o reuso com funções pequenas e especialistas
const getNota = aluno => aluno.nota; 
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);