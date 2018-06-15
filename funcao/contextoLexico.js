// Contexto no qual algo foi escrito
// Essa constante e essas funções foram escritas no contexto de módulo do node
const valor = "Global";

function minhaFuncao() { // Carrega consigo esse contexto
    console.log(valor);
}

function exec() {
    const valor = "Local";
    minhaFuncao(); // Carrega consigo o contexto no qual foi definida. 
                   // No local onde ela foi definida(não executada), procura por valor, não achou procura no escopo acima - valor = "Global"
}

exec();