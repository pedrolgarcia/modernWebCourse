let dobro = function(a) {
    return 2 * a;
}

// Função arrow - sempre anônima, armazenada em uma variável
dobro = (a) => { // parâmetro + arrow + bloco
    return 2 * a;
}

// Forma reduzida
dobro = a => 2 * a; // Se tiver apenas 1 parâmetro tira os parênteses, se só tiver uma linha, tira o bloco e o return (retorno implícito)
console.log(dobro(Math.PI));

let ola = function() {
    return "Olá";
}

ola = () => "Olá"; // Se não tiver parâmetro, tem que colocar o parênteses
ola = _ => "Olá"; // Ou um underline, mas o underline é um parâmetro (que será ignorado)
console.log(ola());