// O node também possui um objeto global, assim como no browser(window), chamado 'global'
// console.log(global);

global.MinhaApp = Object.freeze({ // Criando um objeto dentro de global. Tomar cuidado! Não recomendado! Freeze impede alterações
    saudacao() {
        return 'Estou em todos os lugares!';
    },
    nome: 'Sistema Legal'
});