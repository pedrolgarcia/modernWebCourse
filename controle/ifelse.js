const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log("Aprovado!");
    }else{ // Se a condição do if não for aceita, executa o bloco do else
        console.log("Reprovado!");
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!'); // Cuidado