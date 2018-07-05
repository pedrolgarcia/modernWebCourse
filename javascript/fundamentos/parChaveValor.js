// Par chave/valor
const saudacao = "Olá"; // Contexto léxico 1

function exec(){
    const saudacao = "Falaa"; // Contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: "Pedro",
    idade: 19,
    peso: 67.5,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 115
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);