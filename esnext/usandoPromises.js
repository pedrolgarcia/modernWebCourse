// Com promise...
const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '';
            res.on('data', dados => {
                resultado += dados;
            });
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (e) {
                    reject(e);
                }
            });
        });
    });
};

// let nomes = [];
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
//             console.log(nomes);
//         });
//     });
// });

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // Passa várias promises de uma vez, que quando forem resolvidas chamam o then
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)); // Recomendado sempre tratar o erro

getTurma('D').catch(e => console.log(e.message)); // Forçando um erro, D não existe, tenta converter json e cai no reject