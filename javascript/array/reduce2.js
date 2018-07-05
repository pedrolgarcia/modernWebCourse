const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas?
const bolsista = a => a.bolsista;

const res = alunos.map(bolsista).reduce(function (anterior, atual) {
    return anterior && atual;
});

console.log(res);

// Desafio 2: Algum aluno é bolsista?
const res2 = alunos.map(bolsista).reduce(function (anterior, atual) {
    return anterior || atual;
});

console.log(res2);