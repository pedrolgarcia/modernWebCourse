function soBoaNoticia(nota){
    if(nota >= 7){ // Só executa o bloco se a condição for aceita
        console.log("Aprovado com " + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor){
    if(valor){ // Quando não tem operação relacional, converte para boolean
        console.log("É verdade... " + valor);
    }
}

// Falso - não entra no if
seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1,2]);
seForVerdadeEuFalo({});