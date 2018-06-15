// Função que retorna um objeto
/* Redundante
const prod1 = {
    nome: "...",
    preco: 45
}

const prod2 = {
    nome: "...",
    preco: 1234
}*/

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());